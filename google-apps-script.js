// Google Apps Script code to handle form submissions
// This should be deployed as a Google Apps Script Web App

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (or create one)
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName('Data Science Applications');
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Data Science Applications');
      
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
    }
    
    // Prepare row data
    const rowData = [
      new Date(data.timestamp),
      data.formType || 'Data Science Training Application',
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
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, rowData.length);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
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
    .createTextOutput('Google Apps Script is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}