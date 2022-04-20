function getSheetById(spreadsheet, targetSheetId) {
  
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