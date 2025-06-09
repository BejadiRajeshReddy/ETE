# Complete Google Sheets Integration Setup

## The Problem
The data isn't appearing in Google Sheets because the Google Apps Script needs to be properly set up and deployed. Here's the complete step-by-step solution:

## Step 1: Create Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Delete the default code
4. Copy and paste the code from `google-apps-script-updated.js`
5. Save the project (Ctrl+S) and name it "ETE Digital Form Handler"

## Step 2: Test the Script

1. In the script editor, select the `testScript` function from the dropdown
2. Click the "Run" button (▶️)
3. Grant necessary permissions when prompted
4. Check the "Execution log" to see if it worked
5. A new spreadsheet should be created automatically

## Step 3: Deploy as Web App

1. Click "Deploy" → "New Deployment"
2. Click the gear icon ⚙️ next to "Type"
3. Select "Web app"
4. Fill in the deployment settings:
   - **Description**: "ETE Digital Form Handler v1"
   - **Execute as**: "Me (your-email@gmail.com)"
   - **Who has access**: "Anyone"
5. Click "Deploy"
6. **IMPORTANT**: Copy the Web App URL that appears

## Step 4: Update Your React Code

1. In both form files (`DataScience/page.jsx` and `DigitalMarketing/page.jsx`)
2. Replace the `GOOGLE_SCRIPT_URL` with your actual Web App URL:

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_ACTUAL_WEB_APP_URL_HERE';
```

## Step 5: Test the Integration

1. Submit a test form from your website
2. Check the Google Spreadsheet that was created
3. Data should appear in the appropriate sheet

## Troubleshooting

### If data still doesn't appear:

1. **Check the script logs**:
   - Go to Google Apps Script
   - Click "Executions" in the left sidebar
   - Look for any error messages

2. **Verify permissions**:
   - Make sure you granted all permissions during setup
   - The script needs access to Google Sheets

3. **Check the Web App URL**:
   - Make sure you're using the correct URL
   - It should end with `/exec`

4. **Test the script directly**:
   - Run the `testScript` function in Google Apps Script
   - This will create test data and verify everything works

### Common Issues:

- **CORS errors**: These are normal with `mode: 'no-cors'`
- **Permission denied**: Re-run the authorization process
- **Script not found**: Make sure the Web App is deployed correctly

## Alternative Simple Solution

If the above doesn't work, here's a simpler approach using Google Forms:

1. Create a Google Form with all your fields
2. Get the form's action URL
3. Submit data directly to the Google Form
4. This automatically saves to a Google Sheet

Would you like me to implement the Google Forms approach instead?

## Verification Steps

1. ✅ Google Apps Script created and saved
2. ✅ Test function runs successfully  
3. ✅ Web App deployed with correct permissions
4. ✅ Web App URL copied and updated in React code
5. ✅ Test form submission shows data in Google Sheets

Follow these steps exactly, and your form data will start appearing in Google Sheets!