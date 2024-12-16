/*
Author: Ziplyne
Date : 22 October 2017
Copyright: Ziplyne TM
Notes : Extension Background Script
*/

// Listen for the action button click
chrome.action.onClicked.addListener((tab) => {

  chrome.tabs.sendMessage(tab.id, { callFunction: "toggleSidebar" });
});
  