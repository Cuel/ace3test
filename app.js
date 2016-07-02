(function () {
  function getJson (url, onSuccess, onError) {
    var httpReq = window.XMLHttpRequest
      ? new window.XMLHttpRequest()
      : new window.ActiveXObject('Microsoft.XMLHTTP')

    httpReq.onreadystatechange = function () {
      if (httpReq.readyState === 4) {
        if (httpReq.status === 200) {
          onSuccess(JSON.parse(httpReq.responseText))
        } else {
          var msg = 'Failed to get ' + url + '. (' + httpReq.status + ')'
          onError(new Error(msg))
        }
      }
    }

    httpReq.open('GET', url, true)
    httpReq.send()
  }

  getJson('data.json', init, printError)
  function init (ace3Data) {
  }

  function printError (error) {
  }
})()
