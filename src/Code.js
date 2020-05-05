/**
 * @OnlyCurrentDoc  Limits the script to only accessing the current document.
 */

var SIDEBAR_TITLE = 'Simple Dice Roller';

/**
 * Adds a custom menu with items to show the sidebar and dialog.
 *
 * @param {Object} e The event parameter for a simple onOpen trigger.
 */
function onOpen(e) {
  DocumentApp.getUi()
      .createAddonMenu()
      .addItem('Roll dice', 'showSidebar')
      .addToUi();
}

/**
 * Runs when the add-on is installed; calls onOpen() to ensure menu creation and
 * any other initializion work is done immediately.
 *
 * @param {Object} e The event parameter for a simple onInstall trigger.
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * Opens a sidebar. The sidebar structure is described in the Sidebar.html
 * project file.
 */
function showSidebar() {
  var ui = HtmlService.createTemplateFromFile('Sidebar')
      .evaluate()
      .setTitle(SIDEBAR_TITLE)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showSidebar(ui);
}

/**
 * Adds content at the cursor location. 
 */
function addAtCursor(content) {
  var cursor = DocumentApp.getActiveDocument().getCursor();
  if (cursor) {
    var element = cursor.insertText(content);
    var parent = element.getParent();
    var elementIndex = parent.getChildIndex(element);
    var cursorNew = DocumentApp.getActiveDocument().newPosition(parent, elementIndex + 1);
    DocumentApp.getActiveDocument().setCursor(cursorNew);
  }
}

/**
 * Rolls d20 and adds at the cursor location. 
 */
function rolld20() {
  var content = `d20: ${getRndInteger(1, 20)}\n`;
  addAtCursor(content);
}

function rolld12() {
  var content = `d12: ${getRndInteger(1, 12)}\n`;
  addAtCursor(content);
}

function rolld10() {
  var content = `d10: ${getRndInteger(1, 10)}\n`;
  addAtCursor(content);
}

function rolld8() {
  var content = `d8: ${getRndInteger(1, 8)}\n`;
  addAtCursor(content);
}

function rolld6() {
  var content = `d6: ${getRndInteger(1, 6)}\n`;
  addAtCursor(content);
}

function rolld4() {
  var content = `d4: ${getRndInteger(1, 4)}\n`;
  addAtCursor(content);
}

function rolld100() {
  var content = `d100: ${getRndInteger(1, 100)}\n`;
  addAtCursor(content);
}

