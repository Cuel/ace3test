window.data = {
  test1: 12,
  level1: {
    l2: {
      greet: 'Hi'
    }
  }
}
window.riot.mount('*', {data: window.data})

!(function ($) {
  window.app = {
    utils: {
      isObject: function (obj) { return Object.prototype.toString.call(obj) === '[object Object]' },
      isString: function (str) { return typeof str === 'string' },
      isNumber: function (nr) { return typeof nr === 'number' },
      isArray: Array.isArray
    }
  }

  $('#menu .item').tab()
  $('#output').accordion()

  window.riot.mount('list', {data: window.data})
  window.riot.mount('root', {data: window.data})
})(window.jQuery)
