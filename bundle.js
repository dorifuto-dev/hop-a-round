/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/plane.svg");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* This is an example of using Sass, otherwise plain CSS works too*/\n* {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n*,\n*:after,\n*:before {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n.top-menu {\n  height: 7em;\n  background-color: #0288D1;\n  display: flex;\n}\n\n.logo-section {\n  height: 100%;\n  display: flex;\n}\n\n.logo {\n  display: flex;\n  margin-top: auto;\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n\n.logo-hop-a-round {\n  font-family: \"Aleo\", serif;\n  color: #FFFFFF;\n}\n\n.user-menu {\n  margin-left: auto;\n  display: flex;\n  height: 100%;\n}\n.user-menu .user-trips, .user-menu .new-trip, .user-menu .login, .user-menu .sign-out {\n  height: 100%;\n  display: flex;\n  margin-right: 10px;\n}\n\n.login-button, .user-trips-button, .user-new-trips-button, .sign-out-button {\n  font-size: 20px;\n  margin-top: auto;\n  margin-bottom: 10px;\n  cursor: pointer;\n  color: #FFFFFF;\n}\n\n.hide {\n  display: none !important;\n}\n\nmain {\n  background-color: #B3E5FC;\n  height: 88vh;\n  overflow: auto;\n}\n\n.default-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.login-modal {\n  z-index: 10;\n}\n\n.login-modal-overlay {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  justify-content: center;\n}\n\n.login-modal-container {\n  background-color: #fff;\n  padding: 30px 100px;\n  max-width: 500px;\n  max-height: 100vh;\n  border-radius: 4px;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n\n.login-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.login-modal-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 600;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #00449e;\n  box-sizing: border-box;\n}\n\n.login-modal-close {\n  background: transparent;\n  border: 0;\n}\n\n.login-modal-header .login-modal-close:before {\n  content: \"✕\";\n}\n\n.login-modal-content {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.8);\n  height: 100%;\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: space-around;\n}\n.login-form input {\n  border: 1px solid black;\n}\n\n.login-submit {\n  margin-top: 2em;\n}\n\n@keyframes mmfadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes mmfadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes mmslideIn {\n  from {\n    transform: translateY(15%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n@keyframes mmslideOut {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-10%);\n  }\n}\n.micromodal-slide {\n  display: none;\n}\n\n.micromodal-slide.is-open {\n  display: block;\n}\n\n.micromodal-slide[aria-hidden=false] .login-modal-overlay {\n  animation: mmfadeIn 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.micromodal-slide[aria-hidden=false] .login-modal-container {\n  animation: mmslideIn 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.micromodal-slide[aria-hidden=true] .login-modal-overlay {\n  animation: mmfadeOut 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.micromodal-slide[aria-hidden=true] .login-modal-container {\n  animation: mmslideOut 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.micromodal-slide .login-modal-container,\n.micromodal-slide .login-modal-overlay {\n  will-change: transform;\n}\n\n.slogan-container {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px 15px;\n  color: #212121;\n}\n\n.slideshow-container {\n  position: relative;\n  margin: auto;\n}\n\n.slide {\n  display: none;\n  background-color: black;\n}\n\n.slide-image {\n  width: 100vw;\n  height: 80vh;\n  object-fit: cover;\n  opacity: 70%;\n}\n\n.slide-caption {\n  color: #f2f2f2;\n  font-size: 50px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 8px;\n  width: 100%;\n  text-align: center;\n}\n\n.starting-price {\n  color: #f2f2f2;\n  font-size: 45px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 30px;\n  font-weight: 200;\n}\n\n.slide-number {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 2s;\n  animation-name: fade;\n  animation-duration: 2s;\n}\n\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.6;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0.6;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.user-nav {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px 10px 15px;\n}\n\n.button-group button {\n  float: left;\n  border: 1px solid black;\n  padding: 5px 10px;\n}\n\n.button-group button:not(:last-child) {\n  border-right: none;\n}\n\n.button-group:after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.user-display-grid {\n  margin: 10px 15px 10px;\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  grid-gap: 12px;\n}\n\n.trip-card {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);\n  height: 25em;\n  width: 20em;\n  background-color: #efefef;\n  color: #212121;\n}\n\n.trip-preview {\n  width: 100%;\n  height: 40%;\n}\n\n.trip-image {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.trip-info {\n  display: flex;\n  flex-direction: column;\n  height: 60%;\n  margin-left: 1em;\n  justify-content: space-around;\n}\n\n.new-trip-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.new-trip-page .new-trip-title {\n  margin: 20px 0px 10px;\n  font-size: 1.7em;\n}\n\n.new-trip-box {\n  height: 30em;\n  width: 40vw;\n  background-color: #efefef;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n}\n\n.new-trip-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 100%;\n  width: 100%;\n}\n\ninput {\n  cursor: pointer;\n}\n\n.trip-estimate-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100%;\n  width: 100%;\n}\n.trip-estimate-card .trip-estimate-destination {\n  font-size: 2em;\n}\n.trip-estimate-card .trip-estimate {\n  font-size: 1.5em;\n}\n.trip-estimate-card .confirm-cancel-trip {\n  display: flex;\n  width: 40%;\n  justify-content: space-between;\n}\n.trip-estimate-card button {\n  cursor: pointer;\n  padding: 10px 25px;\n  border-radius: 3px;\n  border: 1px solid black;\n  color: #FFFFFF;\n}\n.trip-estimate-card .cancel-trip {\n  background-color: #757575;\n}\n.trip-estimate-card .confirm-trip {\n  background-color: #0288D1;\n}", "",{"version":3,"sources":["webpack://./src/css/base.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB,mEAAA;AA0BA;EACE,oCAJa;AAnBf;;AA0BA;;;EAGE,sBAAA;EACA,WAAA;EACA,YAAA;AAvBF;;AA4BA;EACE,WAAA;EACA,yBAtBa;EAuBb,aAAA;AAzBF;;AA4BA;EACE,YAAA;EACA,aAAA;AAzBF;;AA4BA;EACE,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AAzBF;;AA4BA;EACE,0BAnCU;EAoCV,cAtCM;AAaR;;AA4BA;EACE,iBAAA;EACA,aAAA;EACA,YAAA;AAzBF;AA0BE;EACE,YAAA;EACA,aAAA;EACA,kBAAA;AAxBJ;;AA4BA;EACE,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,cAzDM;AAgCR;;AA4BA;EACE,wBAAA;AAzBF;;AA4BA;EACE,yBAlEc;EAmEd,YAAA;EACA,cAAA;AAzBF;;AA4BA;EAxFE,aAAA;EACA,sBAAA;EACA,mBAAA;AAgEF;;AA4BA;EACE,WAAA;AAzBF;;AA4BA;EAvFE,aAAA;EACA,mBAAA;EAwFA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,8BAAA;EACA,uBAAA;AAxBF;;AA2BA;EACE,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;AAxBF;;AA2BA;EA5GE,aAAA;EACA,mBAAA;EA6GA,8BAAA;AAvBF;;AA0BA;EACE,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,sBAAA;AAvBF;;AA0BA;EACE,uBAAA;EACA,SAAA;AAvBF;;AA0BA;EAAgD,YAAA;AAtBhD;;AAwBA;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,YAAA;AArBF;;AAwBA;EA/IE,aAAA;EACA,sBAAA;EAgJA,iBAAA;EACA,6BAAA;AApBF;AAqBE;EACE,uBAAA;AAnBJ;;AAuBA;EACE,eAAA;AApBF;;AAuBA;EACI;IAAO,UAAA;EAnBT;EAoBI;IAAK,UAAA;EAjBT;AACF;AAmBA;EACI;IAAO,UAAA;EAhBT;EAiBI;IAAK,UAAA;EAdT;AACF;AAgBA;EACE;IAAO,0BAAA;EAbP;EAcE;IAAK,wBAAA;EAXP;AACF;AAaA;EACI;IAAO,wBAAA;EAVT;EAWE;IAAK,2BAAA;EARP;AACF;AAUA;EACE,aAAA;AARF;;AAWA;EACE,cAAA;AARF;;AAWA;EACE,mDAAA;AARF;;AAWA;EACE,oDAAA;AARF;;AAWA;EACE,oDAAA;AARF;;AAWA;EACE,qDAAA;AARF;;AAWA;;EAEE,sBAAA;AARF;;AAWA;EACE,aAAA;EACA,uBAAA;EACA,qBAAA;EACA,cAAA;AARF;;AAaA;EACE,kBAAA;EACA,YAAA;AAVF;;AAaA;EACE,aAAA;EACA,uBAAA;AAVF;;AAaA;EACE,YAAA;EACA,YAAA;EACA,iBAAA;EACA,YAAA;AAVF;;AAaA;EACE,cAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,kBAAA;AAVF;;AAaA;EACE,cAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;AAVF;;AAaA;EACE,cAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,MAAA;AAVF;;AAaA;EACE,4BAAA;EACA,8BAAA;EACA,oBAAA;EACA,sBAAA;AAVF;;AAaA;EACE;IAAM,YAAA;EATN;EAUA;IAAI,UAAA;EAPJ;AACF;AASA;EACE;IAAM,YAAA;EANN;EAOA;IAAI,UAAA;EAJJ;AACF;AAMA;EACE,aAAA;EACA,8BAAA;EACA,sBAAA;AAJF;;AAOA;EACE,WAAA;EACA,uBAAA;EACA,iBAAA;AAJF;;AAOA;EACE,kBAAA;AAJF;;AAOA;EACE,WAAA;EACA,WAAA;EACA,cAAA;AAJF;;AASA;EACE,sBAAA;EACA,aAAA;EACA,sCAAA;EACA,cAAA;AANF;;AASA;EACE,wCAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,cAAA;AANF;;AASA;EACE,WAAA;EACA,WAAA;AANF;;AASA;EACE,YAAA;EACA,WAAA;EACA,iBAAA;AANF;;AASA;EArUE,aAAA;EACA,sBAAA;EAsUA,WAAA;EACA,gBAAA;EACA,6BAAA;AALF;;AAUA;EApVE,aAAA;EACA,sBAAA;EACA,mBAAA;AA8UF;AAME;EACE,qBAAA;EACA,gBAAA;AAJJ;;AAQA;EACE,YAAA;EACA,WAAA;EACA,yBAAA;EACA,wCAAA;EACA,kBAAA;AALF;;AAQA;EApWE,aAAA;EACA,sBAAA;EACA,mBAAA;EAoWA,6BAAA;EACA,YAAA;EACA,WAAA;AAHF;;AAMA;EACE,eAAA;AAHF;;AAMA;EA/WE,aAAA;EACA,sBAAA;EACA,mBAAA;EA+WA,6BAAA;EACA,YAAA;EACA,WAAA;AADF;AAEE;EACE,cAAA;AAAJ;AAEE;EACE,gBAAA;AAAJ;AAEE;EACE,aAAA;EACA,UAAA;EACA,8BAAA;AAAJ;AAEE;EACE,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;EACA,cAlXI;AAkXR;AAEE;EACE,yBAAA;AAAJ;AAEE;EACE,yBA1XW;AA0Xf","sourcesContent":["/* This is an example of using Sass, otherwise plain CSS works too*/\n// $primary-background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);\n// ;\n@mixin flex-column-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@mixin flex-column {\n  display: flex;\n  flex-direction: column;\n}\n\n@mixin flex-align-center {\n  display: flex;\n  align-items: center;\n}\n\n\n$dark-primary: #0288D1;\n$light-primary: #B3E5FC;\n$white: #FFFFFF;\n$primary-font: 'Open Sans', sans-serif;\n$logo-font: 'Aleo', serif;\n\n* {\n  font-family: $primary-font;\n}\n\n*,\n*:after,\n*:before {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n// *********************NAV BAR***************************\n\n.top-menu {\n  height: 7em;\n  background-color: $dark-primary;\n  display: flex;\n}\n\n.logo-section {\n  height: 100%;\n  display: flex;\n}\n\n.logo {\n  display: flex;\n  margin-top: auto;\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n\n.logo-hop-a-round {\n  font-family: $logo-font;\n  color: $white;\n}\n\n.user-menu {\n  margin-left: auto;\n  display: flex;\n  height: 100%;\n  .user-trips, .new-trip, .login, .sign-out {\n    height: 100%;\n    display: flex;\n    margin-right: 10px;\n  }\n}\n\n.login-button, .user-trips-button, .user-new-trips-button, .sign-out-button {\n  font-size: 20px;\n  margin-top: auto;\n  margin-bottom: 10px;\n  cursor: pointer;\n  color: $white;\n}\n\n.hide {\n  display: none!important;\n}\n\nmain {\n  background-color: $light-primary;\n  height: 88vh;\n  overflow: auto;\n}\n\n.default-display {\n  @include flex-column-center;\n}\n\n// *********************LOGIN MICROMODAL***************************\n\n.login-modal {\n  z-index: 10;\n}\n\n.login-modal-overlay {\n  @include flex-align-center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.6);\n  justify-content: center;\n}\n\n.login-modal-container {\n  background-color: #fff;\n  padding: 30px 100px;\n  max-width: 500px;\n  max-height: 100vh;\n  border-radius: 4px;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n\n.login-modal-header {\n  @include flex-align-center;\n  justify-content: space-between;\n}\n\n.login-modal-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 600;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #00449e;\n  box-sizing: border-box;\n}\n\n.login-modal-close {\n  background: transparent;\n  border: 0;\n}\n\n.login-modal-header .login-modal-close:before { content: \"\\2715\"; }\n\n.login-modal-content {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  line-height: 1.5;\n  color: rgba(0,0,0,.8);\n  height: 100%;\n}\n\n.login-form {\n  @include flex-column;\n  align-items: left;\n  justify-content: space-around;\n  input {\n    border: 1px solid black;\n  }\n}\n\n.login-submit {\n  margin-top: 2em;\n}\n\n@keyframes mmfadeIn {\n    from { opacity: 0; }\n      to { opacity: 1; }\n}\n\n@keyframes mmfadeOut {\n    from { opacity: 1; }\n      to { opacity: 0; }\n}\n\n@keyframes mmslideIn {\n  from { transform: translateY(15%); }\n    to { transform: translateY(0); }\n}\n\n@keyframes mmslideOut {\n    from { transform: translateY(0); }\n    to { transform: translateY(-10%); }\n}\n\n.micromodal-slide {\n  display: none;\n}\n\n.micromodal-slide.is-open {\n  display: block;\n}\n\n.micromodal-slide[aria-hidden=\"false\"] .login-modal-overlay {\n  animation: mmfadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1);\n}\n\n.micromodal-slide[aria-hidden=\"false\"] .login-modal-container {\n  animation: mmslideIn .3s cubic-bezier(0, 0, .2, 1);\n}\n\n.micromodal-slide[aria-hidden=\"true\"] .login-modal-overlay {\n  animation: mmfadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1);\n}\n\n.micromodal-slide[aria-hidden=\"true\"] .login-modal-container {\n  animation: mmslideOut .3s cubic-bezier(0, 0, .2, 1);\n}\n\n.micromodal-slide .login-modal-container,\n.micromodal-slide .login-modal-overlay {\n  will-change: transform;\n}\n\n.slogan-container {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px 15px;\n  color: #212121;\n}\n\n// *********************SLIDESHOW***************************\n\n.slideshow-container {\n  position: relative;\n  margin: auto;\n}\n\n.slide {\n  display: none;\n  background-color: black;\n}\n\n.slide-image {\n  width: 100vw;\n  height: 80vh;\n  object-fit: cover;\n  opacity: 70%;\n}\n\n.slide-caption {\n  color: #f2f2f2;\n  font-size: 50px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 8px;\n  width: 100%;\n  text-align: center;\n}\n\n.starting-price {\n  color: #f2f2f2;\n  font-size: 45px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 30px;\n  font-weight: 200;\n}\n\n.slide-number {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 2s;\n  animation-name: fade;\n  animation-duration: 2s;\n}\n\n@-webkit-keyframes fade {\n  from {opacity: .6}\n  to {opacity: 1}\n}\n\n@keyframes fade {\n  from {opacity: .6}\n  to {opacity: 1}\n}\n\n.user-nav {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px 10px 15px;\n}\n\n.button-group button {\n  float: left;\n  border: 1px solid black;\n  padding: 5px 10px;\n}\n\n.button-group button:not(:last-child) {\n  border-right: none;\n}\n\n.button-group:after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n// *********************USER TRIPS PAGE***************************\n\n.user-display-grid {\n  margin: 10px 15px 10px;\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  grid-gap: 12px;\n}\n\n.trip-card {\n  box-shadow: 0 1px 5px rgb(0 0 0 / 0.4);\n  height: 25em;\n  width: 20em;\n  background-color: #efefef;\n  color: #212121;\n}\n\n.trip-preview {\n  width: 100%;\n  height: 40%;\n}\n\n.trip-image {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.trip-info {\n  @include flex-column;\n  height: 60%;\n  margin-left: 1em;\n  justify-content: space-around;\n}\n\n// *********************NEW TRIP PAGE***************************\n\n.new-trip-page {\n  @include flex-column-center;\n  .new-trip-title {\n    margin: 20px 0px 10px;\n    font-size: 1.7em;\n  }\n}\n\n.new-trip-box {\n  height: 30em;\n  width: 40vw;\n  background-color: #efefef;\n  box-shadow: 0 1px 5px rgb(0 0 0 / 0.4);\n  border-radius: 5px;\n}\n\n.new-trip-form {\n  @include flex-column-center;\n  justify-content: space-around;\n  height: 100%;\n  width: 100%;\n}\n\ninput {\n  cursor: pointer;\n}\n\n.trip-estimate-card {\n  @include flex-column-center;\n  justify-content: space-evenly;\n  height: 100%;\n  width: 100%;\n  .trip-estimate-destination {\n    font-size: 2em;\n  }\n  .trip-estimate {\n    font-size: 1.5em;\n  }\n  .confirm-cancel-trip {\n    display: flex;\n    width: 40%;\n    justify-content: space-between;\n  }\n  button {\n    cursor: pointer;\n    padding: 10px 25px;\n    border-radius: 3px;\n    border: 1px solid black;\n    color: $white;\n  }\n  .cancel-trip {\n    background-color: #757575;\n  }\n  .confirm-trip {\n    background-color: $dark-primary;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mediaquery_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mediaquery_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mediaquery_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 1250px) {\n  .user-display-grid {\n    grid-template-columns: repeat(3, auto);\n  }\n\n  .new-trip-box {\n    width: 50vw;\n  }\n}\n@media screen and (max-width: 950px) {\n  .user-display-grid {\n    grid-template-columns: repeat(2, auto);\n  }\n\n  .new-trip-box {\n    width: 70vw;\n  }\n}\n@media screen and (max-width: 640px) {\n  .user-display-grid {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .trip-card {\n    width: 85vw;\n    height: 35em;\n  }\n\n  .button-group {\n    display: none !important;\n  }\n\n  .new-trip-box {\n    width: 90vw;\n  }\n}", "",{"version":3,"sources":["webpack://./src/css/_mediaquery.scss"],"names":[],"mappings":"AAAA;EAEE;IACE,sCAAA;EAAF;;EAGA;IACE,WAAA;EAAF;AACF;AAGA;EAEE;IACE,sCAAA;EAFF;;EAKA;IACE,WAAA;EAFF;AACF;AAKA;EAEE;IACE,aAAA;IACA,sBAAA;IACA,mBAAA;EAJF;;EAOA;IACE,WAAA;IACA,YAAA;EAJF;;EAOA;IACE,wBAAA;EAJF;;EAOA;IACE,WAAA;EAJF;AACF","sourcesContent":["@media screen and (max-width: 1250px) {\n\n  .user-display-grid {\n    grid-template-columns: repeat(3, auto);\n  }\n\n  .new-trip-box {\n    width: 50vw;\n  }\n}\n\n@media screen and (max-width: 950px) {\n\n  .user-display-grid {\n    grid-template-columns: repeat(2, auto);\n  }\n\n  .new-trip-box {\n    width: 70vw;\n  }\n}\n\n@media screen and (max-width: 640px) {\n\n  .user-display-grid {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .trip-card {\n    width: 85vw;\n    height: 35em;\n  }\n\n  .button-group {\n    display: none!important;\n  }\n\n  .new-trip-box {\n    width: 90vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var MicroModal = function () {

  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  var Modal = /*#__PURE__*/function () {
    function Modal(_ref) {
      var targetModal = _ref.targetModal,
          _ref$triggers = _ref.triggers,
          triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
          _ref$onShow = _ref.onShow,
          onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
          _ref$onClose = _ref.onClose,
          onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
          _ref$openTrigger = _ref.openTrigger,
          openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger,
          _ref$closeTrigger = _ref.closeTrigger,
          closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger,
          _ref$openClass = _ref.openClass,
          openClass = _ref$openClass === void 0 ? 'is-open' : _ref$openClass,
          _ref$disableScroll = _ref.disableScroll,
          disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll,
          _ref$disableFocus = _ref.disableFocus,
          disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus,
          _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
          awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat,
          _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
          awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati,
          _ref$debugMode = _ref.debugMode,
          debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

      _classCallCheck(this, Modal);

      // Save a reference of the modal
      this.modal = document.getElementById(targetModal); // Save a reference to the passed config

      this.config = {
        debugMode: debugMode,
        disableScroll: disableScroll,
        openTrigger: openTrigger,
        closeTrigger: closeTrigger,
        openClass: openClass,
        onShow: onShow,
        onClose: onClose,
        awaitCloseAnimation: awaitCloseAnimation,
        awaitOpenAnimation: awaitOpenAnimation,
        disableFocus: disableFocus
      }; // Register click events only if pre binding eventListeners

      if (triggers.length > 0) this.registerTriggers.apply(this, _toConsumableArray(triggers)); // pre bind functions for event listeners

      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }
    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    _createClass(Modal, [{
      key: "registerTriggers",
      value: function registerTriggers() {
        var _this = this;

        for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
          triggers[_key] = arguments[_key];
        }

        triggers.filter(Boolean).forEach(function (trigger) {
          trigger.addEventListener('click', function (event) {
            return _this.showModal(event);
          });
        });
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var _this2 = this;

        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.activeElement = document.activeElement;
        this.modal.setAttribute('aria-hidden', 'false');
        this.modal.classList.add(this.config.openClass);
        this.scrollBehaviour('disable');
        this.addEventListeners();

        if (this.config.awaitOpenAnimation) {
          var handler = function handler() {
            _this2.modal.removeEventListener('animationend', handler, false);

            _this2.setFocusToFirstNode();
          };

          this.modal.addEventListener('animationend', handler, false);
        } else {
          this.setFocusToFirstNode();
        }

        this.config.onShow(this.modal, this.activeElement, event);
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var modal = this.modal;
        this.modal.setAttribute('aria-hidden', 'true');
        this.removeEventListeners();
        this.scrollBehaviour('enable');

        if (this.activeElement && this.activeElement.focus) {
          this.activeElement.focus();
        }

        this.config.onClose(this.modal, this.activeElement, event);

        if (this.config.awaitCloseAnimation) {
          var openClass = this.config.openClass; // <- old school ftw

          this.modal.addEventListener('animationend', function handler() {
            modal.classList.remove(openClass);
            modal.removeEventListener('animationend', handler, false);
          }, false);
        } else {
          modal.classList.remove(this.config.openClass);
        }
      }
    }, {
      key: "closeModalById",
      value: function closeModalById(targetModal) {
        this.modal = document.getElementById(targetModal);
        if (this.modal) this.closeModal();
      }
    }, {
      key: "scrollBehaviour",
      value: function scrollBehaviour(toggle) {
        if (!this.config.disableScroll) return;
        var body = document.querySelector('body');

        switch (toggle) {
          case 'enable':
            Object.assign(body.style, {
              overflow: ''
            });
            break;

          case 'disable':
            Object.assign(body.style, {
              overflow: 'hidden'
            });
            break;
        }
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.modal.addEventListener('touchstart', this.onClick);
        this.modal.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.modal.removeEventListener('touchstart', this.onClick);
        this.modal.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (event.target.hasAttribute(this.config.closeTrigger)) {
          this.closeModal(event);
        }
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        if (event.keyCode === 27) this.closeModal(event); // esc

        if (event.keyCode === 9) this.retainFocus(event); // tab
      }
    }, {
      key: "getFocusableNodes",
      value: function getFocusableNodes() {
        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
        return Array.apply(void 0, _toConsumableArray(nodes));
      }
      /**
       * Tries to set focus on a node which is not a close trigger
       * if no other nodes exist then focuses on first close trigger
       */

    }, {
      key: "setFocusToFirstNode",
      value: function setFocusToFirstNode() {
        var _this3 = this;

        if (this.config.disableFocus) return;
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return; // remove nodes on whose click, the modal closes
        // could not think of a better name :(

        var nodesWhichAreNotCloseTargets = focusableNodes.filter(function (node) {
          return !node.hasAttribute(_this3.config.closeTrigger);
        });
        if (nodesWhichAreNotCloseTargets.length > 0) nodesWhichAreNotCloseTargets[0].focus();
        if (nodesWhichAreNotCloseTargets.length === 0) focusableNodes[0].focus();
      }
    }, {
      key: "retainFocus",
      value: function retainFocus(event) {
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return;
        /**
         * Filters nodes which are hidden to prevent
         * focus leak outside modal
         */

        focusableNodes = focusableNodes.filter(function (node) {
          return node.offsetParent !== null;
        }); // if disableFocus is true

        if (!this.modal.contains(document.activeElement)) {
          focusableNodes[0].focus();
        } else {
          var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

          if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
          }

          if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
          }
        }
      }
    }]);

    return Modal;
  }();
  /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
  // Keep a reference to the opened modal


  var activeModal = null;
  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

  var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
    var triggerMap = [];
    triggers.forEach(function (trigger) {
      var targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });
    return triggerMap;
  };
  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */


  var validateModalPresence = function validateModalPresence(id) {
    if (!document.getElementById(id)) {
      console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
      return false;
    }
  };
  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */


  var validateTriggerPresence = function validateTriggerPresence(triggers) {
    if (triggers.length <= 0) {
      console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
      return false;
    }
  };
  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */


  var validateArgs = function validateArgs(triggers, triggerMap) {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;

    for (var id in triggerMap) {
      validateModalPresence(id);
    }

    return true;
  };
  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */


  var init = function init(config) {
    // Create an config object with default openTrigger
    var options = Object.assign({}, {
      openTrigger: 'data-micromodal-trigger'
    }, config); // Collects all the nodes with the trigger

    var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]"))); // Makes a mappings of modals with their trigger nodes


    var triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

    for (var key in triggerMap) {
      var value = triggerMap[key];
      options.targetModal = key;
      options.triggers = _toConsumableArray(value);
      activeModal = new Modal(options); // eslint-disable-line no-new
    }
  };
  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */


  var show = function show(targetModal, config) {
    var options = config || {};
    options.targetModal = targetModal; // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // clear events in case previous modal wasn't close

    if (activeModal) activeModal.removeEventListeners(); // stores reference to active modal

    activeModal = new Modal(options); // eslint-disable-line no-new

    activeModal.showModal();
  };
  /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */


  var close = function close(targetModal) {
    targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
  };

  return {
    init: init,
    show: show,
    close: close
  };
}();
window.MicroModal = MicroModal;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MicroModal);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Traveler {
  constructor(data) {
    this.userID = data.id;
    this.name = data.name;
    this.type = data.travelerType;
    this.trips = [];
  }

  findTotalSpent(year) {
    const tripsThisYear = this.trips.filter(trip => trip.date.includes(year) && trip.status === "approved");
    if (tripsThisYear.length === 0) {
      return 0;
    } else {
      return tripsThisYear.reduce((accNum, trip) => {
        accNum += trip.calculateTotalFare();
        return accNum;
      }, 0)
    }
  }

  getFirstName() {
    return this.name.split(' ')[0];
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Traveler);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Trip {
  constructor(data) {
    this.id = data.id;
    this.userID = data.userID;
    this.destinationID = data.destinationID;
    this.travelers = data.travelers;
    this.date = data.date;
    this.duration = data.duration;
    this.status = data.status;
    this.suggestedActivities = data.suggestedActivities;
    this.destination = null;
  }

  updateDestination(destination) {
    this.destination = destination;
  }

  calculateTotalFare() {
    const totalLodging = this.destination.estimatedLodgingCostPerDay * this.duration * this.travelers;
    const totalAirFare = this.destination.estimatedFlightCostPerPerson * this.travelers;
    return Math.round((totalLodging + totalAirFare) * 1.1);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trip);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAPIData": () => (/* binding */ fetchAPIData),
/* harmony export */   "postNewTrip": () => (/* binding */ postNewTrip)
/* harmony export */ });
/* harmony import */ var _domFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);


const fetchAPIData = (type, id) => {
  if (id) {
    return fetch(`http://localhost:3001/api/v1/${type}/${id}`)
      .then(response => response.json())
      .catch(error => console.log("error: ", error))
  } else {
    return fetch(`http://localhost:3001/api/v1/${type}`)
      .then(response => response.json())
      .catch(error => console.log("error: ", error))
  }
}

const postNewTrip = (tripObject, tripTotal, destObj) => {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripObject)
  })
    .then(response => checkForError(response, tripObject, tripTotal, destObj))
    .catch(error => _domFunctions__WEBPACK_IMPORTED_MODULE_0__.default.displayError(error))
}

const checkForError = (response, tripObject, tripTotal, destObj) => {
  if (!response.ok) {
    throw new Error("Please make sure that all fields are filled out.");
  } else {
    _domFunctions__WEBPACK_IMPORTED_MODULE_0__.default.showAllTripsPage();
    _domFunctions__WEBPACK_IMPORTED_MODULE_0__.default.renderNewTripCard(tripObject, tripTotal, destObj)
    return response.json()
  }
}




/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_Calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

const dayjs = __webpack_require__(14);
const todaysDate = (dayjs().format("YYYY/MM/DD"));
const thisYear = dayjs().format("YYYY")

const loginBtn = document.getElementById("loginBtn");
const userTripsBtn = document.getElementById("allTripsBtn");
const newTripBtn = document.getElementById("newTripBtn");
const signOutBtn = document.getElementById("signOutBtn");
const defaultDisplay = document.getElementById("defaultDisplay");
const userDisplay = document.getElementById("userDisplay");
const userDisplayGrid = document.getElementById("userDisplayGrid");
const newTripPage = document.getElementById("newTripPage");
const destinationsList = document.getElementById("destinations");
const totalThisYear = document.getElementById("totalThisYear");
const loginError = document.getElementById("loginError");
const newTripForm = document.getElementById("newTripForm");
const tripEstimateCard = document.getElementById("tripEstimateCard");
const tripEstimateDestination = document.getElementById("tripEstimateDestination");
const tripEstimateDate = document.getElementById("tripEstimateDate");
const tripEstimateDuration = document.getElementById("tripEstimateDuration");
const tripEstimateTravelers = document.getElementById("tripEstimateTravelers");
const tripEstimateCost = document.getElementById("tripEstimateCost");
const cancelTrip = document.getElementById("cancelTrip");
const confirmTrip = document.getElementById("confirmTrip");
const tripError = document.getElementById("newTripError");

const domUpdateFunctions = {

  clearError: () => {
    loginError.innerText = "";
    tripError.innerText = "";
  },

  displayError: (error) => {
    console.log(error)
    tripError.innerText = "Trip Request timed out. Please try again.";
    setTimeout(domUpdateFunctions.clearError, 5000);
  },

  toggleUserDefaultPage: () => {
    loginBtn.classList.toggle("hide");
    userTripsBtn.classList.toggle("hide");
    newTripBtn.classList.toggle("hide");
    signOutBtn.classList.toggle("hide");
    defaultDisplay.classList.toggle("hide");
    userDisplay.classList.toggle("hide");
  },

  showNewTripPage: () => {
    if (!tripEstimateCard.classList.contains("hide")) {
      tripEstimateCard.classList.add("hide");
      newTripForm.classList.remove("hide");
    }
    newTripPage.classList.remove("hide");
    userDisplay.classList.add("hide");
  },

  backToMainPage: () => {
    if (!newTripPage.classList.contains("hide")) {
      newTripPage.classList.add("hide");
    }
    userDisplay.classList.add("hide");
    loginBtn.classList.toggle("hide");
    userTripsBtn.classList.toggle("hide");
    newTripBtn.classList.toggle("hide");
    signOutBtn.classList.toggle("hide");
    defaultDisplay.classList.toggle("hide");
  },

  showAllTripsPage: () => {
    userDisplay.classList.remove("hide");
    newTripPage.classList.add("hide");
  },

  populateDestinationsArray: (destinationArr) => {
    destinationsList.innerHTML = "";
    let destinationHTML = "";
    let id = 1;
    destinationArr.forEach(dest => {
      destinationHTML += `<option value=${id}>${dest}</option>`
      id++;
    })
    destinationsList.innerHTML = destinationHTML;
  },

  renderTripCards: (user) => {
    userDisplayGrid.innerHTML = "";
    let tripCardHTML = "";
    user.trips.forEach(trip => {
      const destination = trip.destination;
      tripCardHTML += `<article class="trip-card">
          <div class="trip-preview">
            <img class="trip-image" src=${destination.image} alt=${destination.alt}>
          </div>
          <div class="trip-info">
            <h3 class="destination-name">${destination.destination}</h3>
            <p class="departure-date">${trip.date}</p>
            <p class="number-of-travelers">${trip.travelers} travelers</p>
            <p class="trip-status">${trip.status}</p>
            <p class="trip-cost">$${trip.calculateTotalFare()}</p>
          </div>
        </article>`;
    })
    userDisplayGrid.innerHTML = tripCardHTML;
  },

  renderNewTripCard: (trip, total, destObj) => {
    userDisplayGrid.innerHTML += `<article class="trip-card">
        <div class="trip-preview">
          <img class="trip-image" src=${destObj.image} alt=${destObj.alt}>
        </div>
        <div class="trip-info">
          <h3 class="destination-name">${destObj.destination}</h3>
          <p class="departure-date">${trip.date}</p>
          <p class="number-of-travelers">${trip.travelers} travelers</p>
          <p class="trip-status">${trip.status}</p>
          <p class="trip-cost">$${total}</p>
        </div>
      </article>`
  },

  renderAllTripTotal: (user) => {
    totalThisYear.innerText = `${thisYear} Total Spent: $${user.findTotalSpent(thisYear)}`;
  },

  hideShowFormEstimate: () => {
    newTripForm.classList.toggle("hide");
    tripEstimateCard.classList.toggle("hide");
  },

  displayTripPreview: (trip, destObj) => {
    domUpdateFunctions.hideShowFormEstimate();
    const totalLodging = destObj.estimatedLodgingCostPerDay * trip.duration * trip.travelers;
    const totalAirfare = destObj.estimatedFlightCostPerPerson * trip.travelers;
    const total = Math.round((totalLodging + totalAirfare) * 1.1);

    tripEstimateDestination.innerText = destObj.destination;
    tripEstimateDate.innerText = trip.date;
    tripEstimateDuration.innerText = `${trip.duration} days`;
    tripEstimateTravelers.innerText = `${trip.travelers} travelers`;
    tripEstimateCost.innerText = `Total Cost: $${total}`;
    domUpdateFunctions.evaluateUserChoice(trip, total, destObj);
  },

  evaluateUserChoice: (trip, total, destObj) => {
    cancelTrip.onclick = () => {
      domUpdateFunctions.hideShowFormEstimate();
    }
    confirmTrip.onclick = () => {
      ;(0,_api_Calls__WEBPACK_IMPORTED_MODULE_0__.postNewTrip)(trip, total, destObj);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domUpdateFunctions);


/***/ }),
/* 14 */
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_plane_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _css_mediaquery_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _api_Calls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _domFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);








const dayjs = __webpack_require__(14);

micromodal__WEBPACK_IMPORTED_MODULE_3__.default.init();

const slides = document.querySelectorAll(".slide");
const signOutText = document.getElementById("signOutText");
const newTripText = document.getElementById("newTripText");
const allTripsText = document.getElementById("allTripsText");
const loginForm = document.getElementById("loginForm");
const newTripForm = document.getElementById("newTripForm");

let user;
let userID;
let allDestinationNames;
let newID;
let slideIndex = 0;

window.addEventListener("load", () => {
  getDestinationsArray();
})

loginForm.addEventListener("submit", (event) => {
  getLoginData(event);
})

signOutText.addEventListener("click", () => {
  _domFunctions__WEBPACK_IMPORTED_MODULE_7__.default.backToMainPage();
  micromodal__WEBPACK_IMPORTED_MODULE_3__.default.close();
})

newTripText.addEventListener("click", () => {
  _domFunctions__WEBPACK_IMPORTED_MODULE_7__.default.showNewTripPage();
})

allTripsText.addEventListener("click", () => {
  _domFunctions__WEBPACK_IMPORTED_MODULE_7__.default.showAllTripsPage();
})

newTripForm.addEventListener("submit", (event) => {
  getTripDataLength(event);
})

const getDestinationsArray = () => {
  ;(0,_api_Calls__WEBPACK_IMPORTED_MODULE_6__.fetchAPIData)("destinations")
    .then(data => allDestinationNames = data.destinations.map(destination => destination.destination))
    .then(data => _domFunctions__WEBPACK_IMPORTED_MODULE_7__.default.populateDestinationsArray(allDestinationNames));
}

const getTripDataLength = (event) => {
  event.preventDefault();
  (0,_api_Calls__WEBPACK_IMPORTED_MODULE_6__.fetchAPIData)("trips")
    .then(data => newID = data.trips.length + 1)
    .then(data => console.log(newID))
    .then(data => getNewTripData(event, newID))
}

const getLoginData = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const password = formData.get('password');
  const username = formData.get('username');
  const usernameArray = username.split(/(\d+)/);
  userID = usernameArray[1];
  if (usernameArray[1] > 0 && usernameArray[1] <= 50 && usernameArray[0] === "traveler" && password === "travel") {
    getUser(usernameArray[1]);
    _domFunctions__WEBPACK_IMPORTED_MODULE_7__.default.toggleUserDefaultPage();
  } else {
    loginError.innerText = "Incorrect username or password. Please try again.";
    setTimeout(_domFunctions__WEBPACK_IMPORTED_MODULE_7__.default.clearError, 5000);
  }
  event.target.reset();
}

const getNewTripData = (event, newID) => {
  const formData = new FormData(event.target);
  const newTrip = {
    id: newID,
    userID: JSON.parse(userID),
    destinationID: JSON.parse(formData.get("destination")),
    travelers: JSON.parse(formData.get("travelers")),
    date: dayjs(formData.get("departure-date")).format("YYYY/MM/DD"),
    duration: JSON.parse(formData.get("duration")),
    status: "pending",
    suggestedActivities: []
  }
  console.log("NEW TRIP <>>>", newTrip)
  matchDestination(newTrip);
  event.target.reset();
}

const matchDestination = (trip) => {
  let newDestination;
  (0,_api_Calls__WEBPACK_IMPORTED_MODULE_6__.fetchAPIData)("destinations")
    .then(data => newDestination = data.destinations.find(destination => destination.id === trip.destinationID))
    .then(data => console.log("MATCH <>>>", newDestination))
    .then(data => _domFunctions__WEBPACK_IMPORTED_MODULE_7__.default.displayTripPreview(trip, newDestination))
}

const getUser = (id) => {
  ;(0,_api_Calls__WEBPACK_IMPORTED_MODULE_6__.fetchAPIData)("travelers", id)
    .then(data => user = new _Traveler__WEBPACK_IMPORTED_MODULE_4__.default(data))
    .then(data => getUserTrips(id, user));
}

const getUserTrips = (id, user) => {
  ;(0,_api_Calls__WEBPACK_IMPORTED_MODULE_6__.fetchAPIData)("trips")
    .then(data => user.trips = data.trips.map(trip => new _Trip__WEBPACK_IMPORTED_MODULE_5__.default(trip)).filter(trip => trip.userID === eval(id)))
    .then(data => getTripDestinations(id, user));
}

const getTripDestinations = (id, user) => {
  ;(0,_api_Calls__WEBPACK_IMPORTED_MODULE_6__.fetchAPIData)("destinations")
    .then(data => user.trips.forEach(trip => trip.destination = data.destinations.find(destination => destination.id === trip.destinationID)))
    .then(data => setTimeout(600))
    .then(data => _domFunctions__WEBPACK_IMPORTED_MODULE_7__.default.renderTripCards(user))
    .then(data => _domFunctions__WEBPACK_IMPORTED_MODULE_7__.default.renderAllTripTotal(user));
}

// SLIDESHOW

const showSlides = () => {
  slides.forEach(slide => slide.style.display = "none")
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000);
}

showSlides();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map