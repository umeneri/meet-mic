'use strict'

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request)

  var current = request.message + 1
  chrome.browserAction.setIcon({ path: 'icon' + current + '.png' })
  console.log('The number is set to ' + current)

  sendResponse()
})
