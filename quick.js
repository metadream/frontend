document.head.insertAdjacentHTML('beforeend', `<style>
[class^="quick-"] {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity .3s;
}
button:hover {
  opacity: .8;
}
button:active {
  opacity: 1;
}
button:disabled {
  opacity: .5 !important;
  cursor: default;
}
.quick-btn-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
  background: inherit;
}
.quick-btn-loading:before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  border-right: 2px solid rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  border-left: 2px solid currentColor;
  animation: spin .6s linear infinite;
}
.quick-overlay {
  position: fixed;
  z-index: 5000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.quick-loading {
  position: fixed;
  z-index: 5100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 32px;
  height: 32px;
  margin: auto;
  border-radius: 50%;
  border-top: 3px solid rgba(255, 255, 255, 0.2);
  border-right: 3px solid rgba(255, 255, 255, 0.2);
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  border-left: 3px solid rgba(255, 255, 255, 0.8);
  animation: spin .6s linear infinite;
}
.quick-progress {
  position: fixed;
  z-index: 5100;
  top: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #0c7;
  transition: width .3s linear;
}
.quick-info {
  background: transparent;
  height: 0;
  display: flex;
  justify-content: center;
}
.quick-info>div {
  margin-top: 80px;
  margin-bottom: auto;
  max-width: 80%;
  padding: 6px 15px;
  border-radius: 3px;
  font-weight: 700;
  color: #fff;
}
.quick-dialog {
  display: flex;
  justify-content: center;
  align-items: center;
}
.quick-dialog-panel {
  background: #fff;
  max-width: 80%;
  max-height: 80%;
  min-width: 280px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.quick-dialog-header {
  font-weight: 700;
  padding: 20px 20px 0;
  text-align: center;
}
.quick-dialog-body {
  flex: 1;
  overflow: auto;
  padding: 25px;
}
.quick-dialog-footer {
  display: flex;
  text-align: center;
  border-top: #f3f3f3 1px solid;
}
.quick-dialog-button {
  flex: 1;
  cursor: pointer;
  line-height: 48px;
  font-weight: 700;
  color: #999;
  border-left: #f3f3f3 1px solid;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.quick-dialog-button:first-child {
  border: 0;
}
.quick-dialog-button:active {
  background: #eee;
}
.quick-dialog-button.primary {
  color: #333;
}
.quick-actionsheet {
  position: fixed;
  z-index: 5001;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
}
.quick-actionsheet-menu {
  text-align: center;
  border-top: #f6f6f6 1px solid;
  background: #fff;
  cursor: pointer;
  line-height: 50px;
  font-weight: 700;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.quick-actionsheet-menu:active {
  background: #eee;
}
.quick-actionsheet-menu:first-child {
  border: 0;
}
.quick-actionsheet-menu:last-child {
  border: 0;
  margin-top: 10px;
  color: #ce2f33;
}
[quick-tooltip] {
  position: relative;
}
[quick-tooltip]:before, [quick-tooltip]:after {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  bottom: 100%;
  left: 50%;
  transform: translate3d(-50%, -10px, 0);
  transition: opacity .5s;
}
[quick-tooltip]:hover:before, [quick-tooltip]:hover:after {
  visibility: visible;
  opacity: 1;
}
[quick-tooltip]:before {
  content: '';
  z-index: 1001;
  background: transparent;
  border: 6px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.7);
  margin-bottom: -12px;
}
[quick-tooltip]:after {
  content: attr(quick-tooltip);
  z-index: 1000;
  margin-right: -300px;
  padding: 6px 10px;
  border-radius: 3px;
  font-size: 14px;
  line-height: 1.6;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
}
.quick-scale-in {
  animation: scaleIn ease .3s forwards;
}
.quick-fade-in {
  animation: fadeIn ease .3s forwards;
}
.quick-scale-out {
  animation: scaleOut ease .3s forwards;
}
.quick-fade-out {
  animation: fadeOut ease .3s forwards;
}
.quick-slide-up {
  animation: slideUp ease .3s forwards;
}
.quick-slide-down {
  animation: slideDown ease .3s forwards;
}
.quick-slide-left {
  animation: slideLeft ease .3s forwards;
}
.quick-slide-right {
  animation: slideRight ease .3s forwards;
}
.quick-datepicker-target {
  cursor: pointer;
  line-height: inherit;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='lightgray' d='M10.9 3.2H5.1v1.6H3.9V3.2H1.2v3.2h13.6V3.2h-2.7v1.6h-1.2V3.2zM12.1 2H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.9V.4h1.2V2h5.8V.4h1.2V2zm2.7 5.6H1.2v7.2h13.6V7.6z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: top 49% right 15px;
  background-size: 16px;
}
.quick-datepicker-wrapper {
  position: absolute;
  z-index: 5001;
  color: #666;
  font-size: 13px;
  background: #fff;
  box-shadow: 0 0 16px rgb(0 0 0 / 8%);
  user-select: none;
}
.quick-datepicker-header {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px;
  border-bottom: #eee 1px solid;
}
.quick-datepicker-text {
  flex: 1;
  text-align: center;
  color: #6698ff;
  font-size: 15px;
  cursor: pointer;
}
.quick-datepicker-btn {
  width: 26px;
  height: 26px;
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
  transition: .3s all;
}
.quick-datepicker-btn path {
  fill: #999;
}
.quick-datepicker-btn:hover {
  background: #eee;
}
.quick-datepicker-body {
  padding: 10px;
}
.quick-datepicker-body table {
  width: 100%;
  border-collapse: collapse;
}
.quick-datepicker-body tr {
  border: 0;
  height: auto;
}
.quick-datepicker-body th, .quick-datepicker-body td {
  width: 32px;
  height: 32px;
  text-align: center;
}
.quick-datepicker-body td {
  padding: 3px;
}
.quick-datepicker-body td>div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
  transition: .3s all;
}
.quick-datepicker-body td>div:hover {
  background: #eee;
}
.quick-datepicker-body td>div.today {
  color: #fff;
  background: #6698ff;
}
.quick-datepicker-body td>div.curr {
  color: #fff;
  background: #999;
}
.quick-datepicker-body td>div.minor {
  color: #ccc;
}
@keyframes scaleIn {
  from { transform: scale3d(0.8, 0.8, 1); }
  to { transform: scale3d(1, 1, 1); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleOut {
  from { transform: scale3d(1, 1, 1); }
  to { transform: scale3d(0.8, 0.8, 1); }
}
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes slideUp {
  from { transform: translate3d(0, 100%, 0); }
  to { transform: translate3d(0, 0, 0); }
}
@keyframes slideDown {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(0, 100%, 0); }
}
@keyframes slideLeft {
  from { transform: translate3d(100%, 0, 0); }
  to { transform: translate3d(0, 0, 0); }
}
@keyframes slideRight {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(100%, 0, 0); }
}
@keyframes spin {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}
</style>`);

// --------------------------------------------------------
// ????????????
// --------------------------------------------------------
const Quick = {};
Quick.LANGUAGE = { OK: '??????', YES: '??????', NO: '??????' };
Quick.ATTACHMENT_API = '/attachment';

// --------------------------------------------------------
// DOM???????????????????????????
// --------------------------------------------------------

Object.assign(Element.prototype, {
  on(event, fn) {
    this.addEventListener(event, fn);
    return this;
  },

  off(event, fn) {
    this.removeEventListener(event, fn);
    return this;
  },

  addClass(name) {
    this.classList.add(name);
    return this;
  },

  removeClass(name) {
    this.classList.remove(name);
    return this;
  },

  remove() {
    return this.parentNode && this.parentNode.removeChild(this);
  },

  val(v) {
    if (this.tagName != 'SELECT') return;
    for (let option of this) {
      if (option.value == v) {
        option.selected = true;
        this.onchange && this.onchange();
        break;
      }
    }
    return this;
  },

  disable() {
    if (this.tagName !== 'BUTTON') return;
    if (this.disabled) return;
    this.disabled = true;

    // Add loading to BUTTON if disabled
    this.loader = $('<div class="quick-btn-loading"></div>');
    this.appendChild(this.loader);
  },

  enable() {
    if (this.tagName !== 'BUTTON') return;
    if (!this.disabled) return;
    this.disabled = false;

    this.loader && this.loader.remove();
  }
});

/**
 * ??????/????????????
 * @param selector {string|Element}
 * @param multi {boolean} ????????????????????????
 */
Quick.$ = window.$ = function(selector, multi = false) {
  if (typeof selector === 'string') {
    selector = selector.replace(/[\t\r\n]/mg, '').trim();
    // ???????????? '<' ?????????????????????????????????
    if (selector.indexOf('<') === 0) {
      const fragment = document.createRange().createContextualFragment(selector);
      return fragment.firstChild;
    }
    // ????????????????????????????????????????????????
    if (multi) {
      return document.querySelectorAll(selector)
    }
    // ????????????????????????????????????
    return document.querySelector(selector);
  }
  // ????????????????????????
  return selector;
}

/**
 * BODY???????????????
 * @param element {Element}
 */
Quick._ = window._ = function(element) {
  document.body.appendChild(element);
}

// --------------------------------------------------------
// UI?????????????????????????????????
// --------------------------------------------------------

/**
 * @example
 * Quick.loading.start()
 * Quick.loading.done()
 */
Quick.loading = {
  start() {
    if (this.$instance) return;
    this.$instance = $('<div class="quick-loading"></div>');
    _(this.$instance);
  },

  done() {
    if (!this.$instance) return;
    this.$instance.remove();
    this.$instance = null;
  }
}

// --------------------------------------------------------
// UI????????????????????????????????????
// --------------------------------------------------------

/**
 * @example
 * Quick.progress.start()
 * Quick.progress.done()
 */
Quick.progress = {

  start(indeterminate = true) {
    if (this.status) return;

    this.$instance = $('<div class="quick-progress"></div>');
    _(this.$instance);
    this._observe();

    if (indeterminate) { // ????????????????????????
      this.status = 1;
      this._trickle = setInterval(() => {
        if (this.status < 99) {
          this.status += Math.round(((100 - this.status) / 3) * Math.random());
        }
      }, 300);
    }
  },

  tick(status) {
    this.status = parseInt(status);
  },

  done() {
    if (!this.status) return;
    this.status = 100;
    clearInterval(this._trickle);

    setTimeout(() => {
      this.status = 0;
      this.$instance.remove();
    }, 300);
  },

  _observe() {
    if (this._observed) return;
    this._observed = true;

    let value = this.status;
    Object.defineProperty(this, 'status', {
      get: () => value,
      set: v => {
        value = v;
        this.$instance.style.width = v + '%';
      }
    });
  }
}

// --------------------------------------------------------
// UI?????????????????????
// --------------------------------------------------------

/**
 * ??????????????????
 * @example
 * Quick.info('hello world', options)
 * options = 3000
 * options = {
 *   duration: 3000,
 *   background: '#ccc'
 * }
 * @param {String} message
 * @param {Object} options
 */
Quick.info = function(message, options) {
  // Check and remove current instance
  if (Quick.$singleton) {
    Quick.$singleton.remove();
    Quick.$singleton = null;
  }

  // Merge custom options
  if (typeof options === 'number') {
    options = { duration: options };
  }
  options = Object.assign({
    duration: 3000,
    background: 'rgba(0, 0, 0, 0.6)'
  }, options);

  // Create element container
  const $instance = $(`
    <div class="quick-overlay quick-info">
      <div style="background:${options.background}">${message}</div>
    </div>
  `);

  // Show instance
  Quick.$singleton = $instance;
  $instance.addClass('quick-fade-in');
  _($instance);

  // Auto hide delay
  setTimeout(() => {
    $instance.addClass('quick-fade-out');
    $instance.on('animationend', $instance.remove);
  }, options.duration);
}

/**
 * ?????????????????? (?????????Quick.info)
 * @example Quick.success('hello world', options)
 * @param {String} message
 * @param {Object} options
 */
Quick.success = function(message, options = {}) {
  if (typeof options === 'number') {
    options = { duration: options };
  }
  options.background = 'rgba(43, 155, 23, 0.6)';
  this.info(message, options);
}

/**
 * ?????????????????? (?????????Quick.info)
 * @example Quick.warn('hello world', options)
 * @param {String} message
 * @param {Object} options
 */
Quick.warn = function(message, options = {}) {
  if (typeof options === 'number') {
    options = { duration: options };
  }
  options.background = 'rgba(235, 166, 40, 0.6)';
  this.info(message, options);
}

/**
 * ?????????????????? (?????????Quick.info)
 * @example Quick.error('hello world', options)
 * @param {String} message
 * @param {Object} options
 */
Quick.error = function(message, options) {
  if (!options) {
    options = { duration: 5000 };
  } else
  if (typeof options === 'number') {
    options = { duration: options };
  }
  options.background = 'rgba(217, 37, 7, 0.6)';
  this.info(message, options);
}

// --------------------------------------------------------
// UI???????????????
// --------------------------------------------------------

/**
 * ????????????
 * @example
 * Quick.dialog({
 *   title: 'title',
 *   content: 'hello world',
 *   onload: () => alert('onload')
 *   buttons: [{
 *     label: 'OK',
 *     type: 'primary',
 *     onclick: () => alert('OK')
 *   }, {
 *     label: 'Cancel',
 *     onclick: () => alert('Cancel')
 *   }]
 * })
 * @param {Object} options
 * @returns
 */
Quick.dialog = function(options = {}) {
  // Create element container
  const $instance = $(`
    <div class="quick-overlay quick-dialog">
      <div class="quick-dialog-panel">
        <div class="quick-dialog-body">${options.content}</div>
      </div>
    </div>
  `);

  // Add title to instance
  const panel = $instance.querySelector('.quick-dialog-panel');
  if (options.title) {
    const title = $(`<div class="quick-dialog-header">${options.title}</div>`);
    panel.insertBefore(title, panel.firstChild);
  }

  // Add custom buttons to instance
  if (options.buttons && options.buttons.length > 0) {
    const $footer = $(`<div class="quick-dialog-footer"></div>`);
    panel.appendChild($footer);
    options.buttons.forEach(item => {
      const button = $(`<div class="quick-dialog-button ${item.type || ""}">${item.label}</div>`);
      $footer.append(button);
      button.on('click', () => {
        if (item.onclick) item.onclick($instance);
        else $instance.hide();
      })
    })
  }

  // Add hide method to instance
  $instance.hide = () => {
    panel.addClass('quick-scale-out');
    $instance.addClass('quick-fade-out');
    $instance.on('animationend', $instance.remove);
  }

  // Show dialog
  options.onload && options.onload($instance);
  _($instance);
  if (options.animation !== false) {
    panel.addClass('quick-scale-in');
    $instance.addClass('quick-fade-in');
  }
  return $instance;
}

/**
 * ???????????? (?????????Quick.dialog)
 * @example Quick.alert('hello world')
 * @param {String} message
 * @param {Function} callback
 * @returns
 */
Quick.alert = function(message, callback) {
  return this.dialog({
    content: message,
    buttons: [{
      type: 'primary',
      label: Quick.LANGUAGE.OK,
      onclick: function(dialog) {
        if (callback) callback(dialog);
        else dialog.hide();
      }
    }]
  });
}

/**
 * ???????????? (?????????Quick.dialog)
 * @example Quick.confirm('hello world', () =>...)
 * @param {String} message
 * @param {Function} callback
 * @returns
 */
Quick.confirm = function(message, callback) {
  return this.dialog({
    content: message,
    buttons: [{
      label: Quick.LANGUAGE.NO
    }, {
      type: 'primary',
      label: Quick.LANGUAGE.YES,
      onclick: (dialog) => {
        dialog.hide();
        callback && callback();
      }
    }]
  });
}

// --------------------------------------------------------
// UI????????????????????? (??????????????????)
// --------------------------------------------------------

/**
 * Quick action sheet component
 * @example
 * const sheet = Quick.actionSheet([
 *   { label: 'Menu One', onclick: () => alert(1) },
 *   { label: 'Menu Two', onclick: () => alert(2) },
 *   { label: 'Menu Three', onclick: () => alert(3) },
 * ])
 * sheet.hide()
 * @param {Array} menus
 * @returns
 */
Quick.actionSheet = function(menus = []) {
  // Create element container
  const $instance = $(`
    <div>
      <div class="quick-overlay"></div>
      <div class="quick-actionsheet"></div>
    </div>
  `);

  // Add click event to overlay
  const $overlay = $instance.querySelector('.quick-overlay');
  $overlay.onclick = () => $instance.hide();

  // Add custom menus to sheet
  const $sheet = $instance.querySelector('.quick-actionsheet');
  menus.push({ label: '??????' });
  menus.forEach(item => {
    let menu = $(`<div class="quick-actionsheet-menu">${item.label}</div>`);
    menu.on('click', e => {
      $instance.hide();
      item.onclick && item.onclick(e);
    });
    $sheet.appendChild(menu);
  });

  // Add hide method to instance
  $instance.hide = () => {
    $overlay.addClass('quick-fade-out');
    $sheet.addClass('quick-slide-down');
    $sheet.on('animationend', () => $instance.remove());
  }

  // Show actionsheet
  _($instance);
  $overlay.addClass('quick-fade-in');
  $sheet.addClass('quick-slide-up');
  return $instance;
}

// --------------------------------------------------------
// UI?????????????????????
// --------------------------------------------------------

/**
 * ????????????
 * @example
 * const page = Quick.slidingPage(document.querySelector('#id'))
 * page.show()
 * page.hide()
 * @param {Element|String} ?????????HTML?????????
 * @returns
 */
Quick.slidingPage = function(content) {
  const $instance = $(content);

  if (!$instance._paged) {
    $instance._paged = true;
    $instance.addClass('quick-overlay');
    $instance.display = getComputedStyle($instance, null)['display'];
    $instance.style.display = 'none';

    $instance.show = function() {
      $instance.style.display = this.display;
      this.removeClass('quick-slide-right');
      this.addClass('quick-slide-left');
      return this;
    }
    $instance.hide = function() {
      this.removeClass('quick-slide-left');
      this.addClass('quick-slide-right');
      return this;
    }
  }
  return $instance;
}

// --------------------------------------------------------
// UI????????????????????????
// --------------------------------------------------------

/**
 * ???????????????
 * @example new Quick.DatePicker('input');
 * @param {Element|String} target
 * @returns
 */
Quick.DatePicker = class {

  constructor(target) {
    this.$target = $(target);
    this.$target.readOnly = true;
    this.$target.className = 'quick-datepicker-target';

    // ??????????????????
    this.$target.on('click', () => {
      if (this.isOpen) {
        this.close();
      } else {
        this.render(this.getInitDate());
        const pos = this.$target.getBoundingClientRect();
        this.$wrapper.style.top = pos.y + pos.height + 2 + 'px';
        this.$wrapper.style.left = pos.x + 'px';
      }
    });
  }

  /** ??????UI?????? */
  render(date) {
    if (!this.isOpen) {
      this.$overlay = $('<div class="quick-overlay" style="background:none"></div>')
      this.$overlay.on('click', e => this.close());
      _(this.$overlay);

      this.$wrapper = $('<div class="quick-datepicker-wrapper"></div>')
      this.bindEvents();
      _(this.$wrapper);
      this.isOpen = true;
    }
    this.createHtml(date);
  }

  /** ??????HTML */
  createHtml(date) {
    const data = this.calData = this.getCalendarData(date);
    let html = '<div class="quick-datepicker-header">' +
      '<svg class="quick-datepicker-btn prev-year" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.984 7l4.75 4.762-.832.817-3.924-3.924-3.99 3.99-.825-.836L7.973 7l.005.006L7.984 7zm0-4l4.75 4.762-.832.817-3.924-3.924-3.99 3.99-.825-.836L7.973 3l.005.006L7.984 3z" transform="rotate(-90 7.949 7.822)"></path></svg>' +
      '<svg class="quick-datepicker-btn prev-month" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z" transform="rotate(90 7.978 8.751)"></path></svg>' +
      '<span class="quick-datepicker-text">' + data.year + '-' + this.padding(data.month) + '</span>' +
      '<svg class="quick-datepicker-btn next-month" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z" transform="rotate(-90 7.978 8.252)"></path></svg>' +
      '<svg class="quick-datepicker-btn next-year" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.984 7l4.75 4.762-.832.817-3.924-3.924-3.99 3.99-.825-.836L7.973 7l.005.006L7.984 7zm0-4l4.75 4.762-.832.817-3.924-3.924-3.99 3.99-.825-.836L7.973 3l.005.006L7.984 3z" transform="rotate(90 7.949 8.122)"></path></svg>' +
      '</div><div class="quick-datepicker-body"><table>' +
      '<thead><tr><th>???</th><th>???</th><th>???</th><th>???</th><th>???</th><th>???</th><th>???</th></tr></thead>' +
      '<tbody>';

    const today = new Date();
    const initDate = this.getInitDate();

    for (let i = 0; i < data.days.length; i++) {
      if (i % 7 === 0) html += '<tr>';

      const cellDay = data.days[i];
      let clazz = '';
      if (data.month != cellDay.month) clazz = 'minor';
      if (data.year == initDate.getFullYear() && cellDay.month == initDate.getMonth() + 1 && cellDay.day == initDate.getDate()) clazz = 'curr';
      if (data.year == today.getFullYear() && cellDay.month == today.getMonth() + 1 && cellDay.day == today.getDate()) clazz = 'today';
      html += '<td><div data-index="' + cellDay.index + '" class="' + clazz + '">' + cellDay.day + '</div></td>';

      if (i % 7 === 6) html += '</tr>';
    }
    html += '</tbody></table></div>';
    this.$wrapper.innerHTML = html;
  }

  /** ?????????????????? */
  bindEvents() {
    // ?????????????????????
    this.$wrapper.on('click', e => {
      const $target = e.target;

      // ???????????????????????????
      if ($target.parentNode.tagName === 'TD') {
        const date = new Date(this.calData.year, this.calData.month - 1, $target.dataset.index);
        this.$target.value = this.format(date);
        this.close();
      }

      // ??????????????????????????????
      const $currText = this.$wrapper.querySelector('.quick-datepicker-text');
      if ($currText.contains($target)) {
        return this.render(this.getInitDate());
      }

      // ???????????????/???????????????
      const $prevYear = this.$wrapper.querySelector('.prev-year');
      const $prevMonth = this.$wrapper.querySelector('.prev-month');
      const $nextMonth = this.$wrapper.querySelector('.next-month');
      const $nextYear = this.$wrapper.querySelector('.next-year');
      const currDate = new Date($currText.innerHTML);

      if ($prevYear.contains($target)) {
        currDate.setFullYear(currDate.getFullYear() - 1);
      } else if ($prevMonth.contains($target)) {
        currDate.setMonth(currDate.getMonth() - 1);
      } else if ($nextMonth.contains($target)) {
        currDate.setMonth(currDate.getMonth() + 1);
      } else if ($nextYear.contains($target)) {
        currDate.setFullYear(currDate.getFullYear() + 1);
      } else {
        return;
      }
      this.render(currDate);
    });
  }

  close() {
    this.$overlay.remove();
    this.$wrapper.remove();
    this.isOpen = false;
  }

  /** ??????????????? */
  format(date) {
    return date.getFullYear() + '-' + this.padding(date.getMonth() + 1) + '-' + this.padding(date.getDate());
  }

  /** ???????????? */
  padding(n) {
    return n <= 9 ? '0' + n : n;
  }

  /** ?????????????????????????????????????????? */
  getInitDate() {
    return this.$target.value ? new Date(this.$target.value) : new Date();
  }

  /** ???????????????????????????????????? */
  getCalendarData(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    // ?????????????????????
    const firstDay = new Date(year, month - 1, 1);
    // ????????????????????????
    const lastDay = new Date(year, month, 0).getDate();
    // ??????????????????????????????????????????????????????????????????
    let firstWeekDay = firstDay.getDay();
    if (firstWeekDay === 0) firstWeekDay = 7;
    const weekdayIndex = firstWeekDay - 1;
    // ???????????????????????????????????????????????????????????????????????????
    const lastDayOfLastMonth = (new Date(year, month - 1, 0)).getDate();

    const days = [];
    for (let i = 0; i < 7 * 6; i++) {
      const index = i + 1 - weekdayIndex;
      let day = index;
      let realMonth = month;

      if (index <= 0) { //?????????
        realMonth = month - 1;
        day = lastDayOfLastMonth + index;
      } else if (index > lastDay) { //?????????
        realMonth = month + 1;
        day = day - lastDay;
      }
      if (realMonth === 0) realMonth = 12;
      if (realMonth > 12) realMonth = 1;
      days.push({ month: realMonth, day, index });
    }
    return { year, month, days };
  }
}

// --------------------------------------------------------
// UI???????????????????????????
// --------------------------------------------------------

/**
 * ??????????????????
 * ???????????????????????? reserved ????????? input ?????????
 * @param selector ????????????
 * @param startIndex ???????????????????????????????????????
 */
Quick.FlexTable = class {
  constructor(selector, startIndex = 0) {
    this.$table = $(selector);
    this.createHandlers(startIndex);
  }

  createHandlers(startIndex) {
    const rows = Array.from(this.$table.rows);
    rows.forEach((row, index) => {
      // ?????????????????????????????????????????????
      const cell = row.insertCell(0);
      cell.style.overflow = 'initial';
      cell.style.padding = 0;;
      cell.style.width = '50px';
      // ??????????????????????????????????????????
      if (index < startIndex) return;

      // ?????????????????? +/- ??????
      const minusIcon = this.createMinusIcon(row);
      minusIcon.style.visibility = 'hidden';
      cell.appendChild(minusIcon);

      const plusIcon = this.createPlusIcon();
      plusIcon.onclick = () => this.addRow(row);
      cell.appendChild(plusIcon);

      // ??????????????????????????????
      const deletable = row.getAttribute('deletable');
      if (deletable == '' || deletable == 'true') {
        minusIcon.style.visibility = 'visible';
        minusIcon.onclick = () => this.removeRow(row);
      }
    })
  }

  addRow(row) {
    // ????????????????????????????????????????????? addEventListener ??? node.onclick ????????????????????????
    const cloneRow = row.cloneNode(true);

    // ???????????????????????? reserved ?????????input??????
    const fields = cloneRow.querySelectorAll('input[type="text"]:not([reserved]),input[type="hidden"]:not([reserved])');
    fields.forEach(field => field.value = '');

    // ????????????????????? removed ???????????????
    const elements = cloneRow.querySelectorAll('[removed]');
    elements.forEach(el => el.remove());

    // ????????? +/- ????????????????????????
    const minusIcon = cloneRow.querySelector('div:first-child');
    minusIcon.style.visibility = 'visible';
    minusIcon.onclick = () => this.removeRow(cloneRow);

    const plusIcon = cloneRow.querySelector('div:last-child');
    plusIcon.onclick = () => this.addRow(cloneRow);

    // ?????????????????????????????????
    this.insertAfter(cloneRow, row);
  }

  removeRow(row) {
    if (this.onRowRemove) {
      this.onRowRemove(row);
    } else {
      row.remove();
    }
  }

  createPlusIcon() {
    return this.createIcon('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="24" height="24"><path fill="var(--primary-color)" d="M978 162c0-64-52-116-116-116H162C98 46 46 98 46 162v700c0 64 52 116 116 116h700c64 0 116-52 116-116zM768 563H563v205H461V563H256V461h205V256h102v205h205z"/></svg>');
  }

  createMinusIcon() {
    return this.createIcon('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="24" height="24"><path fill="#999" d="M978 162c0-64-52-116-116-116H162C98 46 46 98 46 162v700c0 64 52 116 116 116h700c64 0 116-52 116-116zM768 563H256V461h512z"/></svg>');
  }

  createIcon(svg) {
    const icon = document.createElement('div');
    icon.style.display = 'inline-flex';
    icon.style.verticalAlign = 'middle';
    icon.style.cursor = 'pointer';
    icon.innerHTML = svg;
    return icon;
  }

  insertAfter(newNode, refNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
  }
}

// --------------------------------------------------------
// UI???????????????????????????
// --------------------------------------------------------

/**
 * ??????????????????
 * @param selector {string|Element} ????????????
 * @param list {Array} ??????????????????
 * @param options { maxSize, mimeTypes } ?????????
 * - maxSize {number} ?????????????????????MB???
 * - mimeTypes {string} ????????????????????????
 */
Quick.Attachment = class {

  constructor(selector, list, options) {
    this.editable = !!options; // ??? options ???????????????????????????
    this.$target = $(selector);
    this.$wrapper = $(`<div class="attachment"></div>`);
    this.$target.appendChild(this.$wrapper);

    if (this.editable) {
      const mimeTypes = options.mimeTypes || '*.*';
      this.maxSize = options.maxSize || 10;

      this.$wrapper.appendChild($(`<div><input type="file" accept="${mimeTypes}" multiple/><a>????????????</a></div>`));
      const $inputFile = this.$wrapper.querySelector('input[type="file"]');
      $inputFile.on('change', e => this.upload(e))
      const $button = this.$wrapper.querySelector('input[type="file"]+a');
      $button.on('click', () => $inputFile.click())
    }

    this.$fileList = $(`<div class="file-list"></div>`);
    this.$wrapper.appendChild(this.$fileList);
    this.build(list);
  }

  build(list) {
    list = list || [];
    for (const attachment of list) {
      const dlUrl = attachment.filePath.replace(/^\/attachment\//, '/download/');
      const $icon = this.editable ? '<img class="icon cross" src="/images/cross.png" title="??????"/>' : '';
      const $item = $(`<div class="item">
        <a target="_blank" href="${attachment.filePath}">${attachment.originalName}</a>
        <a href="${dlUrl}" download="${attachment.originalName}"><img class="icon" src="/images/down.png" title="??????"/></a>
        ${$icon}
        <input type="hidden" name="attachmentId" value="${attachment.attachmentId}"/>
        <input type="hidden" name="filePath" value="${attachment.filePath}"/>
        <input type="hidden" name="originalName" value="${attachment.originalName}"/>
        <input type="hidden" name="state" value="${attachment.state.code}"/>
      </div>`);

      const $cross = $item.querySelector('img.cross');
      if ($cross) $cross.on('click', e => this.delete(e));
      this.$fileList.appendChild($item);
    }
  }

  upload(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    if (files.length > 9) {
      return Quick.error('??????????????????9?????????');
    }
    for (const file of files) {
      if (file.size > this.maxSize * 1024 * 1024)
        return Quick.error('??????????????????????????????' + this.maxSize + 'MB');
    }
    const fd = new FormData();
    for (const file of files) {
      fd.append('files', file);
    }

    const $loading = $('<div class="loading"></div>');
    this.$fileList.appendChild($loading);
    Quick.http.post(Quick.ATTACHMENT_API, fd).then(list => {
      $loading.remove();
      if (list) {
        Quick.success('????????????');
        this.build(list);
      }
    });
  }

  delete(e) {
    const $item = e.target.parentNode;
    const data = Quick.form.getJsonObject($item);

    Quick.confirm('???????????????????????????', () => {
      if (data.state == 1) {
        $item.querySelector('[name="state"]').value = -1;
        $item.style.display = 'none';
        return;
      }
      Quick.http.del(Quick.ATTACHMENT_API, data).then(res => {
        if (res) {
          Quick.success('????????????');
          $item.remove();
        }
      })
    });
  }

  list() {
    const $items = this.$wrapper.querySelectorAll('.file-list div');
    return Quick.form.getJsonArray($items);
  }
}

// --------------------------------------------------------
// ??????????????????
// --------------------------------------------------------

Quick.util = {
  /**
   * ??????????????????
   * @param number ??????
   * @param precision ???????????????
   */
  round(number, precision) {
    return Math.round(number + 'e' + precision) / Math.pow(10, precision);
  },

  /**
   * ?????????????????????????????????
   * @param params ????????????
   */
  stringify(params) {
    return Object.keys(params).map(key => key + '=' + encodeURI(params[key])).join('&');
  },

  /**
   * ?????????????????????????????????
   * @param text ????????????
   */
  copyText(text) {
    const clipboard = navigator.clipboard;
    if (!clipboard) return Quick.error('???????????????????????????');

    clipboard.writeText(text).then(
      () => Quick.success('????????????'),
      () => Quick.error('????????????')
    );
  }
}

// --------------------------------------------------------
// ?????????????????????
// --------------------------------------------------------

Quick.form = {
  /**
   * ?????????name??????????????????????????????JSON??????
   * @param scope ????????????
   */
  getJsonObject(scope) {
    scope = $(scope);
    const fields = scope.querySelectorAll('[name]:not([name=""])');
    const data = {};

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if ((field.type == 'checkbox' || field.type == 'radio') && !field.checked) continue;

      // ?????????????????????
      let value = '';
      if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') {
        value = field.value = field.value.trim();
      } else
      if (field.tagName === 'SELECT') {
        value = field.options[field.selectedIndex].value;
      } else
      if (field.isContentEditable) {
        value = field.innerHTML = field.innerHTML.trim();
      } else {
        value = field.textContent = field.textContent.trim();
      }

      // ????????????
      let required = field.getAttribute('required');
      required = (required === null || required === 'false') ? false : true;
      if (!this.validate(value, required, field.dataset.rule)) {
        field.focus();
        Quick.error(field.dataset.message || '????????????????????????????????????????????????');
        return;
      }

      // ???????????????????????????
      const name = field.getAttribute('name');
      if (data[name]) {
        data[name] += ',' + value;
      } else {
        data[name] = value;
      }
    }
    return data;
  },

  /**
   * ??????name??????????????????????????????JSON??????
   * @param scopes ????????????????????????????????????
   */
  getJsonArray(scopes) {
    const array = [];
    scopes = $(scopes, true);

    for (let i = 0; i < scopes.length; i++) {
      const obj = this.getJsonObject(scopes[i]);
      if (!obj) return; // !important
      if (Object.keys(obj).length !== 0) {
        array.push(obj);
      }
    }
    return array;
  },

  /**
   * ????????????
   * @param value ?????????
   * @param required ????????????
   * @param rule ????????????
   */
  validate(value, required, rule) {
    if (required && !value) return false; // ??????????????????????????????
    if (!rule) return true; // ????????????????????????
    if (!value) return true; // ?????????????????????????????????

    const matches = rule.match(/^(?<type>[a-z0-9]+)(\((?<min>\-?\d+)(,\s*(?<max>\-?\d+))?\))?$/);
    if (!matches) return true; // ??????????????????????????????????????????????????????????????????

    const groups = matches.groups;
    const fn = this.validator[groups.type];
    if (!fn) return true; // ?????????????????????????????????????????????????????????????????????????????????

    return fn(value, groups.min, groups.max); // ??????????????????????????????
  },

  /**
   * ?????????????????????
   */
  validator: {
    // ???????????????
    varchar: function(value, min, max) {
      if (!max) { max = min, min = 0; }
      const pattern = new RegExp('^.{' + min + ',' + max + '}$');
      return pattern.test(value);
    },

    // ???????????????m???????????????????????????
    integer: function(value, m) {
      const pattern = new RegExp('^\\-?\\d{0,' + m + '}$');
      return pattern.test(value);
    },

    // ???????????????m???????????????d???????????????????????????
    decimal: function(value, m, d) {
      const pattern = new RegExp('^\\-?\\d{0,' + m + '}(\\.\\d{0,' + d + '})?$');
      return pattern.test(value);
    },

    // ???????????????yyyy-MM-dd
    date: function(value) {
      const m = value.match(/^(\d{4})\-(\d{2})\-(\d{2})$/);
      if (m) {
        const d = new Date(m[1], m[2] - 1, m[3]);
        return d.getFullYear() == m[1] && d.getMonth() == m[2] - 1 && d.getDate() == m[3];
      }
      return false;
    }
  }
}

// --------------------------------------------------------
// HTTP???????????????
// @example Quick.http.get('/user').then(res => ...)
// --------------------------------------------------------

Quick.http = {
  get(url) {
    return this.request('GET', url);
  },

  post(url, data) {
    return this.request('POST', url, data);
  },

  put(url, data) {
    return this.request('PUT', url, data);
  },

  del(url, data) {
    return this.request('DELETE', url, data);
  },

  async request(method, url, data) {
    const options = { method, headers: {}, body: data };

    if (Object.prototype.toString.call(data) != '[object FormData]') {
      options.headers['content-type'] = 'application/json; charset=utf-8';
      options.body = JSON.stringify(data);
    }
    try {
      const res = await (await fetch(url, options)).json();
      return res.error && res.message && res.status && res.status >= 400 ?
        Quick.error(res.message) : res;
    } catch (e) {
      Quick.error('??????????????????');
    }
  }
}