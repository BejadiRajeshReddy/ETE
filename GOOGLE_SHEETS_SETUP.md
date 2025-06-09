# Google Sheets Integration Setup Guide

## Step 1: Create a Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the code from `google-apps-script.js`
4. Save the project with a meaningful name like "ETE Digital Form Handler"

## Step 2: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "ETE Digital Applications" or similar
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 3: Link Script to Spreadsheet

1. In your Google Apps Script project, click on "Resources" → "Libraries" (if needed)
2. Go to "Project Settings" and note down the Script ID
3. In the script editor, you can either:
   - Use `SpreadsheetApp.getActiveSpreadsheet()` if you run the script from the spreadsheet
   - Or use `SpreadsheetApp.openById('YOUR_SPREADSHEET_ID')` and replace with your actual ID

## Step 4: Deploy as Web App

1. In Google Apps Script, click "Deploy" → "New Deployment"
2. Choose "Web app" as the type
3. Set the following:
   - Description: "ETE Digital Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (for public forms)
4. Click "Deploy"
5. Copy the Web App URL - this is your `GOOGLE_SCRIPT_URL`

## Step 5: Update Your React Code

1. In `src/app/DataScience/page.jsx`, replace `YOUR_SCRIPT_ID` with your actual Web App URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec';
   ```

## Step 6: Test the Integration

1. Submit a test form
2. Check your Google Spreadsheet to see if the data appears
3. The sheet will be automatically created with proper headers

## Security Considerations

- For production use, consider implementing authentication
- You can restrict access to specific domains in Google Apps Script
- Consider using environment variables for sensitive URLs

## Troubleshooting

- If you get CORS errors, make sure you're using `mode: 'no-cors'` in the fetch request
- Check the Google Apps Script execution logs for any errors
- Ensure the spreadsheet permissions allow the script to write data

## Alternative: Using Google Forms

If you prefer a simpler approach, you can:
1. Create a Google Form with the same fields
2. Get the form's pre-filled URL
3. Submit data directly to the Google Form endpoint

This method requires less setup but gives you less control over the data format.