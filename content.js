const buttonClass = '.a1GRr'
const markClass = '.JHK7jb.hVsWVc.FTMc0c'

var interval = window.setInterval(checkButtonOpen, 1000)

function checkButtonOpen() {
  var button = document.querySelector(buttonClass)

  if (button !== null) {
    checkIfMicOn()
    button.addEventListener('click', checkIfMicOn)
    window.clearInterval(interval)
  }

  function checkIfMicOn () {
    var mark = document.querySelector(markClass)
    console.log(mark)
    chrome.runtime.sendMessage({
      message: mark !== null,
    })
  }
}
