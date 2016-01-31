(function ($) {
  'use strict'

  $(function () {
    $('.ui.sidebar').sidebar('attach events', '.launch.button', 'slide out')
  })

  $.ajax({
    url: 'ace3_docs.json',
    type: 'GET'
  }).done(function (data) {
    app.data = data
    app.init()
  })

  var app = {
    init: function () {
      this.createMenu()
      this.createSearch()
    },

    createMenu: function createMenu () {
      var d = this.data
      var items = Object.keys(d).map(function (v) {
        var fns = d[v].functions.length
        if (!fns) return
        return '<a class="item" data-type="' + v + '">' + v + ' (' + fns + ')' + '</a>'
      })

      $('#menu').append(items)
    },

    createSearch: function createSearch () {
      var d = this.data
      var results = []
      Object.keys(d).forEach(function (v) {
        d[v].functions.forEach(function (f) {
          results.push({title: f.name.slice(4).replace('_fnc_', ': ')})
        })
      })

      console.log(results);
      $('.ui.search').search({
        source: results
      })
    }
  }
})(window.jQuery)
