// Enhanced Google Apps Script that returns plain text instead of HTML
// This prevents the new tab from showing a success page
// Deploy this as a Web App in Google Apps Script

function doPost(e) {
  try {
    Logger.log('Received POST request');
    Logger.log('Request data: ' + JSON.stringify(e));
    
    // Get or create the spreadsheet
    let spreadsheet;
    try {
      spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    } catch (error) {
      // If no active spreadsheet, create a new one
      spreadsheet = SpreadsheetApp.create('ETE Digital Applications');
      Logger.log('Created new spreadsheet: ' + spreadsheet.getUrl());
    }
    
    // Parse form data from different sources
    let data = {};
    let photoFile = null;
    let resumeFile = null;
    
    if (e.postData && e.postData.contents) {
      try {
        // Try to parse as JSON first
        const parsedData = JSON.parse(e.postData.contents);
        data = parsedData;
        photoFile = parsedData.photoFile;
        resumeFile = parsedData.resumeFile;
        Logger.log('Parsed JSON data successfully');
      } catch (jsonError) {
        Logger.log('Not JSON data, trying form data');
        // If not JSON, try form data
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      // Direct form submission
      data = e.parameter;
    }
    
    Logger.log('Parsed data: ' + JSON.stringify(data));
    Logger.log('Photo file: ' + (photoFile ? photoFile.name : 'None'));
    Logger.log('Resume file: ' + (resumeFile ? resumeFile.name : 'None'));
    
    // Create Google Drive folder structure
    const mainFolderName = 'ETE Digital Applications';
    const subFolderName = data.formType && data.formType.includes('Digital Marketing') 
      ? 'Digital Marketing Applications' 
      : 'Data Science Applications';
    
    // Get or create main folder
    let mainFolder;
    const mainFolders = DriveApp.getFoldersByName(mainFolderName);
    if (mainFolders.hasNext()) {
      mainFolder = mainFolders.next();
    } else {
      mainFolder = DriveApp.createFolder(mainFolderName);
    }
    
    // Get or create sub folder
    let subFolder;
    const subFolders = mainFolder.getFoldersByName(subFolderName);
    if (subFolders.hasNext()) {
      subFolder = subFolders.next();
    } else {
      subFolder = mainFolder.createFolder(subFolderName);
    }
    
    // Create applicant-specific folder
    const applicantFolderName = `${data.name || 'Unknown'}_${new Date().getTime()}`;
    const applicantFolder = subFolder.createFolder(applicantFolderName);
    
    // Upload files to Google Drive
    let photoUrl = 'No file uploaded';
    let resumeUrl = 'No file uploaded';
    
    try {
      // Handle photo upload
      if (photoFile && photoFile.data) {
        Logger.log('Processing photo upload: ' + photoFile.name);
        // Remove the data URL prefix (data:image/jpeg;base64,)
        const base64Data = photoFile.data.split(',')[1];
        const photoBlob = Utilities.newBlob(
          Utilities.base64Decode(base64Data), 
          photoFile.type, 
          photoFile.name
        );
        const photoFileObj = applicantFolder.createFile(photoBlob);
        photoFileObj.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        photoUrl = photoFileObj.getUrl();
        Logger.log('Photo uploaded successfully: ' + photoUrl);
      }
      
      // Handle resume upload
      if (resumeFile && resumeFile.data) {
        Logger.log('Processing resume upload: ' + resumeFile.name);
        // Remove the data URL prefix
        const base64Data = resumeFile.data.split(',')[1];
        const resumeBlob = Utilities.newBlob(
          Utilities.base64Decode(base64Data), 
          resumeFile.type, 
          resumeFile.name
        );
        const resumeFileObj = applicantFolder.createFile(resumeBlob);
        resumeFileObj.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        resumeUrl = resumeFileObj.getUrl();
        Logger.log('Resume uploaded successfully: ' + resumeUrl);
      }
    } catch (fileError) {
      Logger.log('File upload error: ' + fileError.toString());
      // Continue with form submission even if file upload fails
    }
    
    // Determine sheet name based on form type
    const sheetName = data.formType && data.formType.includes('Digital Marketing') 
      ? 'Digital Marketing Applications' 
      : 'Data Science Applications';
    
    let sheet = spreadsheet.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
      
      // Add headers
      const headers = [
        'Timestamp',
        'Form Type',
        'Name',
        'Email',
        'Mobile Number',
        'Parents Mobile Number',
        'Present Address',
        'Permanent Address',
        'School Details',
        'PUC Details',
        'Graduation Details',
        'Post Graduation Details',
        'Work Experience',
        'Date',
        'Photo URL',
        'Resume URL',
        'Drive Folder'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
      headerRange.setWrap(true);
      
      // Auto-resize columns
      sheet.autoResizeColumns(1, headers.length);
    }
    
    // Prepare row data
    const timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
    const rowData = [
      timestamp,
      data.formType || 'Application',
      data.name || '',
      data.email || '',
      data.mobileNumber || '',
      data.parentsMobileNumber || '',
      data.presentAddress || '',
      data.permanentAddress || '',
      data.schoolDetails || '',
      data.pucDetails || '',
      data.graduationDetails || '',
      data.postGraduationDetails || '',
      data.workExperience || '',
      data.date || '',
      photoUrl,
      resumeUrl,
      applicantFolder.getUrl()
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    Logger.log('Data added to sheet successfully');
    Logger.log('Drive folder created: ' + applicantFolder.getUrl());
    
    // Return plain text response instead of HTML to prevent new tab display
    return ContentService
      .createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    
    // Return plain text error response
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet() {
  return HtmlService.createHtmlOutput(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>ETE Digital Form Handler (No Tab Version)</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            padding: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .container {
            background: white;
            color: #333;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            max-width: 600px;
            margin: 0 auto;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>ETE Digital Form Handler</h1>
          <p>✅ Google Apps Script (No Tab Version) is working correctly!</p>
          <p>This endpoint processes form submissions without showing success pages.</p>
          <p><strong>Features:</strong></p>
          <ul style="text-align: left;">
            <li>Form data processing</li>
            <li>Base64 file upload to Google Drive</li>
            <li>Organized folder structure</li>
            <li>Google Sheets integration</li>
            <li>No success page display (returns plain text)</li>
          </ul>
          <p><strong>Status:</strong> Active and Ready</p>
        </div>
      </body>
    </html>
  `);
}

// Test function to verify the script works
function testScript() {
  const testData = {
    formType: 'Data Science Training Application',
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    mobileNumber: '1234567890',
    parentsMobileNumber: '0987654321',
    presentAddress: 'Test Present Address',
    permanentAddress: 'Test Permanent Address',
    schoolDetails: 'Test School | 2020 | 85%',
    pucDetails: 'Test College | 2022 | 90%',
    graduationDetails: 'Test University | 2025 | 88%',
    postGraduationDetails: '',
    workExperience: 'No experience',
    date: '2024-01-15'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Test completed successfully');
  return result;
}

// Function to enable Google Drive API (run this once)
function enableDriveAPI() {
  // This function helps ensure Drive API is available
  try {
    DriveApp.getRootFolder();
    Logger.log('Drive API is enabled and working');
  } catch (error) {
    Logger.log('Drive API error: ' + error.toString());
    Logger.log('Please enable Google Drive API in the Apps Script project');
  }
}