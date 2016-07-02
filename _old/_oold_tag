<sqm-root>
  <div class="ui inverted list">
    <sqm-list class="item" each="{k, v in opts.data}" key={k} value={v}></sqm-list>
  </div>
</sqm-root>

<sqm-list>
    <div class="content">
      <sqm-class
        class="ui inverted list"
        each="{k, v in opts.value}"
        key={k}
        value={v}
        >
      </sqm-class>

      <sqm-prop
        class="ui middle aligned two column grid"
        if="{!utils.isObject(opts.value)}"
        key={opts.key}
        value={opts.value}
        >
      </sqm-prop>
    </div>

    this.utils = app.utils
</sqm-list>

<sqm-class>
  <div class="item">
    <div class="content">
      <div class="ui inverted list">
        <sqm-list each="{k, v in opts.value}" key={k} value={v}></sqm-list>
      </div>
    </div>
  </div>
</sqm-class>

<sqm-prop>
  <div class="column">{opts.key}</div>
  <div class="column">
    <div class="ui input">
      <input type="text" value="{opts.value}"/>
    </div>
  </div>
</sqm-prop>
