(function () {
  function getJson (url, onSuccess, onError) {
    var httpRequest = new window.XMLHttpRequest()
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          onSuccess(JSON.parse(httpRequest.responseText))
        } else {
          var msg = 'Failed to get ' + url + '. (' + httpRequest.status + ')'
          onError(new Error(msg))
        }
      }
    }

    httpRequest.open('GET', url, true)
    httpRequest.send()
  }

  getJson('data.json', init, printError)
  function init (ace3Data) {
    createAutoComplete(ace3Data)
  }

  function printError (error) {
    console.log(error)
  }

  function createAutoComplete (data) {
    var suggestions = []
    Object.keys(data).forEach(function (k) {
      var component = data[k]
      if (!component.length) return
      var shit = component.map(function (val) {
        val.search = val.name.split('_fnc_')[1] + ' [' + k + ']'
        return val
      })
      suggestions.push.apply(suggestions, shit)
    })

    new window.autoComplete({
      selector: '#search',
      minChars: 2,
      delay: 80,
      source: function (term, cb) {
        onSearch(term, cb, suggestions)
      },
      onSelect: function (event, term) {
        if (!term.length) return
        renderChosenItem(term, suggestions)
      }
    })
  }

  function onSearch (term, cb, suggestions) {
    var ret = []
    var reg = new RegExp(term, 'i')
    suggestions.forEach(function (val) {
      if (reg.test(val.search)) ret.push(val.search)
    })
    cb(ret)
  }

  function renderChosenItem (term, suggestions) {
    var chosen
    suggestions.some(function (val) {
      if (val.search === term) {
        chosen = val
        return true
      }
    })
    if (!chosen) return

    var target = document.querySelector('#fncDisplay')
    target.innerHTML = ''
    target.appendChild(document.createTextNode(chosen.text.trim()))
    window.hljs.highlightBlock(target)
  }
})()
