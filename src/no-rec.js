(function () {
  'use strict'

  var h2s = document.getElementsByTagName('h2')
  hide(getParent(select(h2s, 'Recommended')))

  function hide (elem) {
    if (!elem) return showError()
    elem.style.display = 'none'
  }

  function getParent (h2) {
    var res = null
    if (!h2) showError()

    try {
      res = h2.parentNode.parentNode.parentNode.parentNode.parentElement
      return res
    } catch (error) {
      showError()
    }
  }

  function select (h2s, headerText) {
    if (!h2s) return showError()
    for (var i = 0; i < h2s.length; i++) {
      for (var j = 0; j < h2s[i].childElementCount; j++) {
        const text = h2s[i].children[j].innerText
        if (text.includes(headerText)) {
          return h2s[i].children[j]
        }
      }
    }
  }

  function showError () {
    // eslint-disable-next-line no-console
    console.error('Error: No Rec browser add-on: YouTube has changed the structure of its homepage which is preventing this add-on from hiding the Recommended section. Ensure you are using the most recent version of the add-on. If you are, please add a new issue here: https://github.com/don-smith/no-rec/issues.')
  }
})()
