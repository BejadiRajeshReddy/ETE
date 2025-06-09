// Updated Google Apps Script code for better reliability
// Deploy this as a Web App in Google Apps Script

function doPost(e) {
  try {
    Logger.log('Received POST request');
    
    // Get the active spreadsheet or create a new one
    let spreadsheet;
    try {
      spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    } catch (error) {
      // If no active spreadsheet, create a new one
      spreadsheet = SpreadsheetApp.create('ETE Digital Applications');
      Logger.log('Created new spreadsheet: ' + spreadsheet.getUrl());
    }
    
    // Parse form data
    let data = {};
    
    if (e.postData && e.postData.contents) {
      // Handle JSON data
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonError) {
        Logger.log('JSON parse error: ' + jsonError.toString());
        // Handle form data
        const params = e.parameter;
        data = params;
      }
    } else if (e.parameter) {
      data = e.parameter;
    }
    
    Logger.log('Parsed data: ' + JSON.stringify(data));
    
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
        'Photo File Name',
        'Resume File Name'
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
      data.photoFileName || '',
      data.resumeFileName || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    Logger.log('Data added to sheet successfully');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        sheetUrl: spreadsheet.getUrl()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Google Apps Script is working! Deploy this as a Web App to handle form submissions.')
    .setMimeType(ContentService.MimeType.TEXT);
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
    date: '2024-01-15',
    photoFileName: 'test-photo.jpg',
    resumeFileName: 'test-resume.pdf'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Test result: ' + result.getContent());
}