// Enhanced Google Apps Script with Google Drive file upload functionality
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
    let files = {};
    
    if (e.postData && e.postData.contents) {
      try {
        // Try to parse as JSON first
        data = JSON.parse(e.postData.contents);
      } catch (jsonError) {
        Logger.log('Not JSON data, trying form data');
        // If not JSON, try form data
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      // Direct form submission
      data = e.parameter;
    }
    
    // Handle file uploads
    if (e.parameters) {
      // Check for file uploads in parameters
      Object.keys(e.parameters).forEach(key => {
        if (key === 'photo' || key === 'resume') {
          files[key] = e.parameters[key];
        }
      });
    }
    
    Logger.log('Parsed data: ' + JSON.stringify(data));
    Logger.log('Files found: ' + JSON.stringify(Object.keys(files)));
    
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
      if (files.photo && files.photo.length > 0) {
        const photoBlob = files.photo[0];
        const photoFile = applicantFolder.createFile(photoBlob);
        photoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        photoUrl = photoFile.getUrl();
        Logger.log('Photo uploaded: ' + photoUrl);
      }
      
      // Handle resume upload
      if (files.resume && files.resume.length > 0) {
        const resumeBlob = files.resume[0];
        const resumeFile = applicantFolder.createFile(resumeBlob);
        resumeFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        resumeUrl = resumeFile.getUrl();
        Logger.log('Resume uploaded: ' + resumeUrl);
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
    
    // Return HTML response for form submissions (to avoid CORS)
    const htmlOutput = HtmlService.createHtmlOutput(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Application Submitted Successfully</title>
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
              max-width: 500px;
              margin: 0 auto;
            }
            .success-icon {
              font-size: 60px;
              color: #4CAF50;
              margin-bottom: 20px;
            }
            .close-btn {
              background: #673AB7;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
              margin-top: 20px;
            }
            .file-info {
              background: #f5f5f5;
              padding: 15px;
              border-radius: 5px;
              margin: 15px 0;
              text-align: left;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="success-icon">✓</div>
            <h2>Application Submitted Successfully!</h2>
            <p>Your application has been saved to our database.</p>
            <div class="file-info">
              <strong>Files Status:</strong><br>
              Photo: ${photoUrl !== 'No file uploaded' ? 'Uploaded to Google Drive' : 'No file uploaded'}<br>
              Resume: ${resumeUrl !== 'No file uploaded' ? 'Uploaded to Google Drive' : 'No file uploaded'}
            </div>
            <p>We will contact you soon regarding your application.</p>
            <button class="close-btn" onclick="window.close()">Close Window</button>
          </div>
          <script>
            // Auto-close after 5 seconds
            setTimeout(function() {
              window.close();
            }, 5000);
          </script>
        </body>
      </html>
    `);
    
    return htmlOutput;
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    
    // Return error HTML
    const errorOutput = HtmlService.createHtmlOutput(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Submission Error</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 50px;
              background: #f44336;
              color: white;
            }
            .container {
              background: white;
              color: #333;
              padding: 40px;
              border-radius: 10px;
              max-width: 500px;
              margin: 0 auto;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Submission Error</h2>
            <p>There was an error processing your application.</p>
            <p>Error: ${error.toString()}</p>
            <p>Please try again or contact support.</p>
            <button onclick="window.close()">Close Window</button>
          </div>
        </body>
      </html>
    `);
    
    return errorOutput;
  }
}

function doGet() {
  return HtmlService.createHtmlOutput(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>ETE Digital Form Handler with Drive Upload</title>
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
          <p>✅ Google Apps Script with Drive Upload is working correctly!</p>
          <p>This endpoint is ready to receive form submissions with file uploads.</p>
          <p><strong>Features:</strong></p>
          <ul style="text-align: left;">
            <li>Form data processing</li>
            <li>File upload to Google Drive</li>
            <li>Organized folder structure</li>
            <li>Google Sheets integration</li>
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
    parameter: testData,
    parameters: {}
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