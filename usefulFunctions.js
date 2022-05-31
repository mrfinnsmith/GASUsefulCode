/**
 * This function accepts a spreadsheet to search and a target sheet ID. 
 * It returns the sheet that the user is looking for if found in the 
 * spreadsheet.
 * 
 * @param {spreadsheet} spreadsheet The spreadsheet object that the user is searching.
 * @param {number} targetSheetId The ID number of the target sheet
 * @returns {sheet} The sheet object that the user is looking for
 */

function getSheetById(spreadsheet, targetSheetId) {
  spreadsheet
  let targetSheet;

  let sheets = spreadsheet.getSheets();
  for (i in sheets) {
    let thisSheet = sheets[i];
    let thisSheetId = thisSheet.getSheetId();
    if (thisSheetId == targetSheetId) {
      targetSheet = thisSheet;
      break;
    }
  }
  return targetSheet;
}