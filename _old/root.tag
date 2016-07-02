<sqm-root>
  <sqm-list each="{val in {makeArray(opts.data)}}" value={val}></sqm-list>
  this.makeArray = function (arg) {
    var ret = []
    console.log(arg)
    Object.keys(arg).forEach(function (v) {
      ret.push([v, arg[v]])
    })

    console.log(ret)
    return ret
  }
</sqm-root>
