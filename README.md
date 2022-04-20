# What this is
Library created by Finn Smith (fsmith) to provide functionality that is not built into Google Apps script. Hopefully this will grow over time.

# How to install
1. Navigate to the Google Apps script file you want to add these functions to.
2. Click the Library + thing on the left of the editor.
3. In the "Script ID" field, paste this in: 1gY0SH_MSy4gJrRtF3wnI5dT-bnks4W8YSClUfhJDxmk-fUycswUZL0el. (No period/full stop at the end.) This is the ID of the original file that the library pulls from. Finn owns it, but it should be at least view-access available everyone within the company. You can also search for it within Drive by name: GASUsefulCode. If you don't have access, check that you aren't logged into your personal Google account.
4. Hit "Look up."
5. Click "Add" with the default choices, which should be "HEAD (Development mode)."

At that point, you should be able to reference any object or function that is defined in this library. For examble, to use the getSheetById function, use GASUsefulCode.getSheetById(spreadsheet, targetSheetId), and substitute your spreadsheet and target sheet ID.

# What's included
## findSheetById(spreadsheet, targetSheetId)
This function allows you to find a sheet within a spreadsheet by referencing the sheet's ID number. This can be useful if you have a project operating on a specific sheet and you want to hard code that reference. GAS oddly does not include this functionality out of the box. There is SpreadsheetApp.openById() and [spreadsheet].getSheetByName(), but no way to get a sheet if you have the ID number.

Notes:
- To use this,  you'll first need to install the library (see the How to Install section).
- To call the function, use GASUsefulCode.findSheetById().
- The spreadsheet argument in the function call refers to an **instance of the spreadsheet class**. It's important to understand that it's not the name, URL, or ID of the spreadsheet. Check out the documentation on spreadsheets (and especially SpreadsheetApp) in the GAS page: https://developers.google.com/apps-script/reference/spreadsheet.
- The targetSheetId is a number, not a string. You can get the ID number of a sheet programmatically (see the documentation in the point above) or by grabbing it from the URL if you're looking at the sheet. The ID is the number after "#gid=."
