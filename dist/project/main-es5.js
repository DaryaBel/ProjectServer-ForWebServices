function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-role/add-role.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-role/add-role.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddRoleAddRoleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loading\" style=\"height: calc(100vh - 73px - 2rem);\"\n  class=\"container d-flex justify-content-center align-content-center\">\n  <div class=\"spinner-border txt-gray-bread m-auto\" role=\"status\">\n    <span class=\"sr-only \">Loading...</span>\n  </div>\n</div>\n<div *ngIf=\"!loading\" class=\"container\">\n  <h2 class=\"mb-3\">Добавление нового сотрудника</h2>\n  <h5 *ngIf=\"succes\" class=\"text-success\">Аккаунт был успешно создан!</h5>\n  <form [formGroup]=\"form\" enctype=\"multipart/form-data\">\n    <div class=\"form-group\">\n      <label for=\"text\"> Введите имя сотрудника</label>\n      <input (focus)=\"onSucces()\" formControlName=\"name\" type=\"text\" class=\"foc-bread br-gray-bread form-control\"\n        id=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\"> Выберите роль сотрудника</label>\n      <br>\n      <select name=\"role\" formControlName=\"role\" class=\"foc-bread br-gray-bread form-control\">\n        <option value=\"2\" >Менеджер</option>\n        <option value=\"1\">Администратор</option>\n    </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">Введите логин сотрудника</label>\n      <input (focus)=\"onSucces();\" formControlName=\"login\" type=\"text\" class=\"foc-bread br-gray-bread form-control\"\n        id=\"login\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">Введите пароль сотрудника</label>\n      <input (focus)=\"onSucces()\" formControlName=\"password\" type=\"password\" class=\"foc-bread br-gray-bread form-control\"\n        id=\"password\">\n    </div>\n    <h5 *ngIf=\"!isEmpty\" class=\"text-danger\">Одно или несколько полей пустые!</h5>\n    <h5 *ngIf=\"existLogin\" class=\"text-danger\">Такой логин уже существует!</h5>\n    <button class=\"btn btn-primary btn-gray-bread btn-block\" (click)=\"onAdd()\">Добавить</button>\n    <br><br><br><br><br><br><br>\n\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loading\" style=\"height: calc(100vh - 73px - 2rem);\" class=\"container d-flex justify-content-center align-content-center\">\n<div  class=\"spinner-border txt-gray-bread m-auto\" role=\"status\">\n  <span class=\"sr-only \">Loading...</span>\n</div>\n</div>\n<div *ngIf=\"!loading\" class=\"container\">\n    <h2 class=\"mb-3\">Создание нового товара</h2>\n    <h5 *ngIf=\"succes\" class=\"text-success\">Товар был успешно создан!</h5>\n        <form [formGroup]=\"form\" enctype=\"multipart/form-data\">\n            <div class=\"form-group\">\n              <label for=\"text\"> Введите название товара</label>\n              <input (focus)=\"onSucces()\" formControlName=\"name\" type=\"text\" class=\"foc-bread br-gray-bread form-control\" id=\"name\">\n             </div>\n             <div class=\"form-group\">\n                <label for=\"text\">Введите артикул товара</label>\n                <input (focus)=\"onSucces()\" formControlName=\"artikul\" type=\"text\" class=\"foc-bread br-gray-bread form-control\" id=\"artikul\">\n               </div>\n            <div class=\"form-group\">\n                <label for=\"text\">Введите цену товара</label>\n                <input (focus)=\"onSucces()\" formControlName=\"price\" type=\"number\" class=\"foc-bread br-gray-bread form-control\" id=\"price\">\n               </div>\n            <div class=\"form-group\">\n                <label for=\"number\">Введите количество единиц товара</label>\n                <input (focus)=\"onSucces()\" formControlName=\"number\" type=\"number\"\n                  class=\"foc-bread br-gray-bread form-control\" id=\"number\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"weight\">Введите вес товара</label>\n                <input (focus)=\"onSucces()\" formControlName=\"weight\" type=\"text\" class=\"foc-bread br-gray-bread form-control\" id=\"weight\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"description\">Введите описание товара</label>\n                <textarea (focus)=\"onSucces()\" class=\"foc-bread br-gray-bread form-control\" formControlName=\"description\" name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"ingredients\">Введите состав товара</label>\n                  <textarea (focus)=\"onSucces()\" class=\"foc-bread br-gray-bread form-control\" formControlName=\"ingredients\" name=\"ingredients\" id=\"ingredients\" cols=\"30\" rows=\"10\"></textarea>\n            </div>\n            <div class=\"form-group\" (click)=\"onSucces()\">\n                <label for=\"photo\">Добавьте фото товара</label>\n                <br>\n                <angular-file-uploader\n                  [config]=\"afuConfig\"\n                  (ApiResponse)=\"fileUpload($event)\"\n                  >\n                </angular-file-uploader>\n\n                <!-- <input (focus)=\"onSucces()\" type=\"file\"  formControlName=\"photo\" id=\"photo\" name=\"filedata\" accept=\".png,.jpg,.jpeg\"> -->\n            </div>\n             \n             <h5 *ngIf=\"!isEmpty\" class=\"text-danger\">Одно или несколько полей пустые!</h5>\n             <button class=\"btn btn-primary btn-gray-bread btn-block\" [disabled]=\"form.invalid\"\n               (click)=\"onAdd()\">Создать</button>\n    <br><br><br><br><br><br><br>\n\n  </form>\n</div>\n<style>\n  \n</style>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-comment/admin-comment.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-comment/admin-comment.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCommentAdminCommentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loading\" style=\"height: calc(100vh - 73px - 2rem);\"\n  class=\"container d-flex justify-content-center align-content-center\">\n  <div class=\"spinner-border txt-gray-bread m-auto\" role=\"status\">\n    <span class=\"sr-only \">Loading...</span>\n  </div>\n</div>\n<div *ngIf=\"(!loading) && (!notfound); else notFound\" class=\"container\">\n  <h2 class=\"mb-3\">Cписок всех комментариев</h2>\n  <div class=\"wrap-for-table\">\n    <table class=\"table\">\n      <tr>\n        <th>Дата</th>\n        <th>Автор</th>\n        <th>Содержание комментария</th>\n        <th>Наименование товара</th>\n        <th>Удалить</th>\n      </tr>\n      <tr *ngFor=\"let comment of comments\">\n        <td>{{comment.date}}</td>\n        <td>{{comment.name}}</td>\n        <td>{{comment.text}}</td>\n        <td style=\"cursor: pointer;\"  (click)=\"onLink(comment.idproduct)\">{{comment.nameproduct}}</td>\n        <td>\n          <button type=\"button\" class=\" btn-sm btn btn-danger\" (click)=\"onDelete(comment.idcomment)\">Удалить</button>\n        </td>\n      </tr>\n    </table>\n  </div>\n\n</div>\n<ng-template #notFound class=\"container\">\n    <div class=\"container\">\n         <h3 class=\"font-weight-normal\">Комментариев не найдено :(</h3>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row p-0 m-0\">\r\n    <h3 *ngIf=\"notfound1 && notfound2 && notfound3 \" class=\"font-weight-normal\">Диаграммы не созданы по причине\r\n      отсутствия товаров в\r\n      каталоге</h3>\r\n    <div *ngIf=\"!notfound1\" class=\"col-12 col-lg-6 col-xl-6 p-0 m-0 mb-3\">\r\n      <canvas id=\"pie\" style=\"width: 100%;\"></canvas>\r\n    </div>\r\n    <div *ngIf=\"!notfound2\" class=\"col-12 col-lg-6 col-xl-6 p-0 m-0 mb-3\">\r\n      <canvas style=\"width: 100%;\" id=\"bar\"></canvas>\r\n    </div>\r\n    <div *ngIf=\"!notfound3\" class=\"col-12 col-lg-6 col-xl-6 p-0 m-0 mb-3\">\r\n      <canvas style=\"width: 100%;\" id=\"barHorizontal\"></canvas>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/authorization.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/authorization.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthorizationAuthorizationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex\">\n  <form class=\"form-login\" [formGroup]=\"form\">\n    <h3 class=\"font-weight-normal mb-3\">Вход</h3>\n    <input (focus)=\"onFlag()\" formControlName=\"login\" type=\"text\" class=\" foc-bread br-gray-bread  form-control mb-3\"\n      placeholder=\"Логин\">\n    <input (focus)=\"onFlag()\" formControlName=\"password\" type=\"password\"\n      class=\" foc-bread br-gray-bread form-control mb-3\" placeholder=\"Пароль\">\n    <div *ngIf=\"!notExistLoginOrPassword\" class=\"attention\">\n      <span>Неправильный логин или пароль!</span>\n    </div>\n    <div *ngIf=\"!isEmpty\" class=\"attention\">\n      <span class=\"field-required\">Одно или несколько полей пустые!</span>\n    </div>\n    <button (click)=\"onLogin()\" id=\"btnLogin\" class=\"btn-gray-bread btn btn-lg btn-primary btn-block\">Войти</button>\n    <p>Нет аккаунта? <a class=\"txt-gray-bread\" [routerLink]=\"['/registration']\">Зарегистрируйтесь!</a> </p>\n  </form>  \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommentsCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <h3 >Комментарии</h3>\n    \n  <form [formGroup]=\"form\" *ngIf=\"!hideOnly3; else notAuth\">\n    <textarea (focus)=\"success=false\" class=\"foc-bread br-gray-bread form-control mb-3\" formControlName=\"comment\"\n      name=\"comment\" id=\"comment\"\n        cols=\"30\" rows=\"10\" placeholder=\"Ваш комментарий\">\n    </textarea>\n    <span class=\"text-success\" *ngIf=\"success\"> Комментарий успешно добавлен!</span>\n    <span class=\"text-danger\" *ngIf=\"isEmpty\"> Вы не написали комментарий!</span>\n    <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-lg-auto col-xl-auto mb-3\">\n        <a class=\"btn-gray-bread btn btn-success btn-block\" (click)=\"onAdd()\" >Добавить комментарий</a>\n    </div>\n    </div>\n</form>\n  <ng-template #notAuth>\n      <h5 class=\"font-weight-normal\">{{warning}}</h5>\n  </ng-template>\n  <div *ngIf=\"!notfound; else blockNotFound\" >\n    <div *ngFor=\"let comment of comments\" class=\"alert alert-warning\">\n        <h5 class=\"h5 g-color-gray-dark-v1 mb-0\">{{comment.name}}</h5>\n        <span class=\"text-black-50\">{{comment.date}}</span>\n        <p>{{comment.text}}</p>\n        <button *ngIf=\"(comment.iduser==iduser) || (!hide1)\" type=\"button\" class=\" my-btn btn-sm btn btn-danger\" (click)=\"onDelete(comment.id)\">Удалить</button>\n  </div> \n  </div>\n  <ng-template #blockNotFound>\n    <h5 class=\"font-weight-normal\">Для данного товара еще не писали комментариев, будьте первыми!</h5>\n  </ng-template>\n<br> <br> <br>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favourite/favourite.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favourite/favourite.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavouriteFavouriteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loading\" style=\"height: calc(100vh - 73px - 2rem);\"\n  class=\"container d-flex justify-content-center align-content-center\">\n  <div class=\"spinner-border txt-gray-bread m-auto\" role=\"status\">\n    <span class=\"sr-only \">Loading...</span>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"!loading\">\n  <div *ngIf=\"!notfound; else blockNotFound\"\n    class=\"row mt-3 justify-content-md-start justify-content-lg-between justify-content-center  justify-content-xl-start\">\n    <app-item *ngFor=\"let product of products\" [item]=\"product\" (del)=\"onDelete(product.id)\"\n      class=\"col-lg-3 col-xl-3 col-md-6 col-sm-12 col-xs-12\"></app-item>\n  </div>\n  <ng-template #blockNotFound>\n    <h3 class=\"font-weight-normal\">К сожалению, Вы еще не добавили товары в избранное :(</h3>\n  </ng-template>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-bread d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n    <h5 class=\"my-0 mr-md-auto font-weight-bold txt-dark-bread\" (click)=\"addMenu=false\" [routerLink]=\"['/']\">Хлебник и\n      хлебница</h5>\n    <nav class=\"my-2 my-md-0 mr-md-3\">\n      <div *ngIf=\"(!logOut) && (role!='')\">\n        <a class=\"p-2 text-dark\">{{role}}</a>\n      </div>\n      <div *ngIf=\"!logOut\">\n        <a class=\"p-2 text-dark\">{{name}}</a>\n      </div>\n    </nav>\n    <div *ngIf=\"(role=='Менеджер')\">\n      <a class=\"btn-gray-bread btn btn-outline-primary mr-2 mb-2 mb-md-0 mb-xl-0 mb-lg-0\" (click)=\"addMenu=false\"\n        [routerLink]=\"['/archive']\">Архив товаров</a>\n    </div>\n    <div *ngIf=\"!logOut\">\n      <a class=\"btn-gray-bread btn btn-outline-primary mr-2 mb-2 mb-md-0 mb-xl-0 mb-lg-0\"\n        (click)=\"addMenu=false\" [routerLink]=\"['/favour']\">Избранное</a>\n    </div>\n    <div *ngIf=\"logOut\">\n      <a class=\"btn-gray-bread btn btn-outline-primary\"\n       (click)=\"addMenu=false\" [routerLink]=\"['/login']\">Войти</a>\n    </div>\n    <div *ngIf=\"!logOut\">\n     <a (click)=\"onLogOut()\"\n      (click)=\"addMenu=false\" class=\"btn-gray-bread btn btn-outline-primary\">Выйти</a>\n  </div>\n</div>\n<nav *ngIf=\"(!logOut) && (role=='Администратор')\"\n  class=\"my-nav p-3 px-md-4 navbar navbar-expand-lg navbar-light bg-light mb-4\">\n  <a class=\"navbar-brand\">Админ-панель</a>\n  <button (click)=\"openMenu()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n    data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse \" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" (click)=\"addMenu=false\" [routerLink]=\"['/list-user']\" routerLinkActive=\"txt-dark-bread\">Сотрудники</a>\n      <a class=\"nav-item nav-link\" (click)=\"addMenu=false\" [routerLink]=\"['/admin-comment']\"\n        routerLinkActive=\"txt-dark-bread\">Комментарии</a>\n      <a class=\"nav-item nav-link\" (click)=\"addMenu=false\" [routerLink]=\"['/dashboard']\"\n        routerLinkActive=\"txt-dark-bread\">Дашборд</a>\n      <a class=\"nav-item nav-link\" (click)=\"addMenu=false\" [routerLink]=\"['/archive']\"\n        routerLinkActive=\"txt-dark-bread\">Архив\n        товаров</a>\n    </div>\n  </div>\n</nav>\n<div class=\"my-addmenu flex-column align-items-center p-3 bg-light mb-4\" *ngIf=\"addMenu\">\n  <a class=\"nav-item nav-link text-center txt-dark-bread\" (click)=\"addMenu=false\" [routerLink]=\"['/list-user']\"\n    routerLinkActive=\"text-dark\">Сотрудники</a>\n  <a class=\"nav-item nav-link text-center txt-dark-bread\" (click)=\"addMenu=false\" [routerLink]=\"['/admin-comment']\"\n    routerLinkActive=\"text-dark\">Комментарии</a>\n  <a class=\"nav-item nav-link text-center txt-dark-bread\" (click)=\"addMenu=false\" [routerLink]=\"['/dashboard']\"\n    routerLinkActive=\"text-dark\">Дашборд</a>\n  <a class=\"nav-item nav-link text-center txt-dark-bread\" (click)=\"addMenu=false\" [routerLink]=\"['/archive']\"\n    routerLinkActive=\"text-dark\">Архив\n    товаров</a>\n  <br>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppItemItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mb-3 \">\n    <div class=\"card mb-4 shadow-sm\" *ngIf=\"demonstrate\">\n        <img class=\"icon\" *ngIf=\"((heart) && (!hide3))\" (click)=\"deleteFavourite()\" src=\"/assets/heart-close.png\">\n        <img class=\"icon\" *ngIf=\"((!heart) && (!hide3))\" (click)=\"addFavourite()\" src=\"/assets/heart-open.png\" alt=\"\">\n        <img (click)=\"onLink(item.id)\" [src]=\"'http://localhost:3001/api/photo/' + item.filename\" class=\"photo card-img-top\" alt=\"\">\n        <div class=\"card-body\">\n          <p class=\"card-text h5\" style=\"cursor: pointer;\" (click)=\"onLink(item.id)\">{{item.name}}</p>\n          <p class=\"card-text h5 font-weight-normal\">{{item.price}}₽</p>\n          <div class=\"d-flex justify-content-between align-items-center\">\n            <div class=\"btn-group\" *ngIf=\"!hide2\">\n              <button type=\"button\" class=\" btn-sm btn btn-danger\" (click)=\"onDelete(item)\">Удалить</button> \n            </div>\n            <small >{{hasOrNot}}</small>\n          </div>\n        </div>\n      </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-user/list-user.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-user/list-user.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListUserListUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loading\" style=\"height: calc(100vh - 73px - 2rem);\"\nclass=\"container d-flex justify-content-center align-content-center\">\n    <div class=\"spinner-border txt-gray-bread m-auto\" role=\"status\">\n        <span class=\"sr-only \">Loading...</span>\n    </div>\n</div>\n<div *ngIf=\"!loading\" class=\"container\">\n    <h2 class=\"mb-3\">Cписок сотрудников</h2>\n    <div class=\"row mb-5\">\n      <div class=\"col-sm-12 col-md-12 col-lg-auto col-xl-auto\">\n        <a class=\"btn-gray-bread btn btn-success btn-block\" [routerLink]=\"['/add-role']\">Добавить сотрудника</a>\n      </div>\n    </div>\n    <div class=\"wrap-for-table\">\n        <table class=\"table\">\n        <tr>\n            <th>Имя</th>\n            <th>Роль</th>\n            <th>Логин</th>\n            <th>Пароль</th>\n            <th>Удалить</th>\n        </tr>\n        <tr *ngFor=\"let user of users\">\n            <td>{{user.name}}</td>\n            <td>{{user.role}}</td>\n            <td>{{user.login}}</td>\n            <td>{{user.password}}</td>\n            <td>\n            <button type=\"button\" class=\" btn-sm btn btn-danger\" (click)=\"onDelete(user.id)\"\n                [disabled]=\"user.id==id\">Удалить</button>\n            </td>\n        </tr>\n        </table>\n    </div>\n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loading\" style=\"height: calc(100vh - 73px - 2rem);\" class=\"container d-flex justify-content-center align-content-center\">\n  <div  class=\"spinner-border txt-gray-bread m-auto\" role=\"status\">\n    <span class=\"sr-only \">Loading...</span>\n  </div>\n  </div>\n<div class=\"container\" *ngIf=\"!loading\">\n  <div class=\"row mb-3\" *ngIf=\"!hide2\">\n    <div class=\"col-sm-12 col-md-12 col-lg-auto col-xl-auto\">\n      <a class=\"btn-gray-bread btn btn-success btn-block\" [routerLink]=\"['/add']\">Добавить новый товар</a>\n    </div>\n  </div>\n  <div *ngIf=\"!notfound; else blockNotFound\">\n    \n    <div class=\"row mb-3 my-search\">\n      <h5>Хотите найти товар по названию или артикулу?</h5>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchString\">\n    </div>\n    <div \n      class=\"row mt-3 justify-content-md-start justify-content-lg-between justify-content-center  justify-content-xl-start\">\n      <app-item *ngFor=\"let product of products | mypipe:searchString\" [item]=\"product\" (del)=\"onDelete(product.id)\"\n        class=\"col-lg-3 col-xl-3 col-md-6 col-sm-12 col-xs-12\"></app-item>\n    </div>\n  </div>\n    <ng-template #blockNotFound>\n      <h3 class=\"font-weight-normal\">Товаров не найдено</h3>\n    </ng-template>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/old-delete/old-delete.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/old-delete/old-delete.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOldDeleteOldDeleteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <div *ngIf=\"loading\" style=\"height: calc(100vh - 73px - 2rem);\"\n   class=\"container d-flex justify-content-center align-content-center\">\n   <div class=\"spinner-border txt-gray-bread m-auto\" role=\"status\">\n     <span class=\"sr-only \">Loading...</span>\n   </div>\n </div>\n <div class=\"container\" *ngIf=\"!loading\">\n    <h2 class=\"mb-3\">Архив товаров</h2>\n    <div *ngIf=\"!notfound; else blockNotFound\"\n      class=\"row mt-3 justify-content-md-start justify-content-lg-between justify-content-center  justify-content-xl-start\">\n      <div *ngFor=\"let item of products\" class=\"col-lg-3 col-xl-3 col-md-6 col-sm-12 col-xs-12\">\n          <div class=\"mb-3 \">\n            <div class=\"card mb-4 shadow-sm\">\n              <img (click)=\"onLink(item.id)\" [src]=\"'http://localhost:3001/api/photo/' + item.filename\"\n                class=\"photo card-img-top\" alt=\"\">\n              <div class=\"card-body\">\n                <p class=\"card-text h5\" style=\"cursor: pointer;\" (click)=\"onLink(item.id)\">{{item.name}}</p>\n                <p class=\"card-text h5 font-weight-normal\">{{item.price}}₽</p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <div class=\"btn-group\">\n                    <button type=\"button\" class=\" btn-sm btn btn-danger\" (click)=\"onDelete(item.id)\">Удалить навсегда</button>\n                    <button type=\"button\" class=\" btn-sm btn btn-success\" (click)=\"onAdd(item)\">Вернуть в каталог</button>\n                 </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>  \n    </div>\n    <ng-template #blockNotFound>\n      <h3 class=\"font-weight-normal\">Товаров в архиве еще нет.</h3>\n    </ng-template>\n </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex\">\n  <form class=\"form-login\" [formGroup]=\"form\">\n    <h3 class=\"font-weight-normal mb-3\">Регистрация</h3>\n    <input (focus)=\"onFlag()\" formControlName=\"name\" type=\"text\" class=\" foc-bread br-gray-bread  form-control mb-3\"\n      placeholder=\"Имя\">\n    <input (focus)=\"onFlag()\" formControlName=\"login\" type=\"text\" class=\" foc-bread br-gray-bread  form-control mb-3\"\n      placeholder=\"Логин\">\n    <input (focus)=\"onFlag()\" formControlName=\"password\" type=\"password\"\n      class=\" foc-bread br-gray-bread form-control mb-3\" placeholder=\"Пароль\">\n    <div *ngIf=\"!existLogin\" class=\"attention\">\n      <span>Такой логин уже существует!</span>\n    </div>\n    <div *ngIf=\"!isEmpty\" class=\"attention\">\n      <span class=\"field-required\">Одно или несколько полей пустые!</span>\n    </div>\n    <button (click)=\"onRegistr()\" id=\"btnLogin\" class=\"btn-gray-bread btn btn-lg btn-primary btn-block\">Зарегистрироваться</button>\n     <p>Есть аккаунт? <a class=\"txt-gray-bread\" [routerLink]=\"['/login']\">Авторизируйтесь!</a> </p>\n</form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loading\" style=\"height: calc(100vh - 73px - 2rem);\" class=\"container d-flex justify-content-center align-content-center\">\n    <div  class=\"spinner-border txt-gray-bread m-auto\" role=\"status\">\n      <span class=\"sr-only \">Loading...</span>\n    </div>\n</div>\n\n<div *ngIf=\"!loading\" class=\"container mt-5\">\n    <div class=\"row flex-column-reverse p-3 p-lg-0 p-xl-0 flex-lg-row flex-xl-row \">\n        <div class=\"d-flex flex-column col-lg-6 col-xl-6\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n                <div>\n                    <h3 class=\"mb-0\">{{product.name}}</h3>\n                    <h5 class=\"mb-2 text-secondary font-weight-normal\">{{product.artikul}}</h5>\n                </div>\n                <img class=\"icon\" *ngIf=\"((heart) && (!hide3))\" (click)=\"deleteFavourite()\" src=\"/assets/heart-close.png\"\n                  alt=\"\">\n                <img class=\"icon\" *ngIf=\"((!heart) && (!hide3))\" (click)=\"addFavourite()\" src=\"/assets/heart-open.png\"\n                  alt=\"\">\n            </div>\n            <p class=\"card-text\">{{product.description}}</p>\n            <p class=\"mb-0 card-text\"><i>Вес:</i>  {{product.weight}}г</p>\n            <p class=\"card-text\"><i>Состав:</i>  {{product.ingredients}}</p>\n            <div *ngIf=\"editOrNot; else anotherblock\" class=\"d-flex flex-row\">\n                <div class=\"col-8 d-flex flex-column p-0\">\n                    <h4 class=\"my-line mb-2\">{{product.price}}₽</h4>\n                    <h5 class=\"font-weight-normal my-line\">{{hasOrNot}}</h5>   \n                </div>\n                <div class=\"col-4 d-flex flex-column align-items-end p-0\" *ngIf=\"!hide2\">\n                    <button class=\"btn btn-primary btn-gray-bread mb-2\" (click)=\"onChange()\">Изменить</button>\n                    <button class=\"btn btn-primary btn-danger\" (click)=\"onDelete()\">Удалить</button>\n                </div>\n            </div>\n            <ng-template #anotherblock >\n                <form [formGroup]=\"form\" class=\"d-flex flex-row\">\n                    <div class=\"col-8 d-flex flex-column p-0\">\n                        <input formControlName=\"price\" type=\"number\" class=\"form-control mb-2 my-line\" id=\"price\">  \n                        <input formControlName=\"number\" type=\"number\" class=\"form-control my-line\" id=\"number\">\n                    </div>\n                    <div class=\"col-4 d-flex flex-column align-items-end p-0\" *ngIf=\"!hide2\">\n                        <button class=\"btn btn-primary btn-gray-bread mb-2\" (click)=\"onChange()\" [disabled]=\"form.invalid\">Сохранить</button>\n                        <button class=\"btn btn-primary btn-danger\" disabled>Удалить</button>\n                    </div>\n                </form>\n            </ng-template>\n        </div>\n        <div class=\"col-lg-6 col-xl-6\">\n            <img class=\"photo w-100 mb-4 shadow\" [src]=\"'http://localhost:3001/api/photo/' + product.filename\"\n              src=\"assets/1.jpg\" alt=\"\">\n        </div>\n    </div>\n    <app-comments>\n    </app-comments>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/add-role/add-role.component.css":
  /*!*************************************************!*\
    !*** ./src/app/add-role/add-role.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddRoleAddRoleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yb2xlL2FkZC1yb2xlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/add-role/add-role.component.ts":
  /*!************************************************!*\
    !*** ./src/app/add-role/add-role.component.ts ***!
    \************************************************/

  /*! exports provided: AddRoleComponent */

  /***/
  function srcAppAddRoleAddRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function () {
      return AddRoleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");

    var AddRoleComponent = /*#__PURE__*/function () {
      function AddRoleComponent(mainService) {
        _classCallCheck(this, AddRoleComponent);

        this.mainService = mainService; // Логическая переменная, определяющая наличие или отсутсвие прелоадера

        this.loading = false; // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях

        this.isEmpty = true; // Логическая переменная, определяющая наличие или отсутсвие сообщения об успешном добавлении товара

        this.succes = false;
        this.existLogin = false;
      }

      _createClass(AddRoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Инициализация FormGroup, создание FormControl, и назанчение Validators
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
          });
        } // Функция добавления информации о товаре, полученной с формы, в базу данных

      }, {
        key: "onAdd",
        value: function onAdd() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var user, ExistOrNot;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.form.value.name == "" || this.form.value.login == "" || this.form.value.password == "" || this.form.value.role == "")) {
                      _context.next = 4;
                      break;
                    }

                    this.isEmpty = false;
                    _context.next = 19;
                    break;

                  case 4:
                    this.loading = true;
                    this.isEmpty = true;
                    user = {
                      name: this.form.value.name,
                      role: this.form.value.role,
                      login: this.form.value.login,
                      password: this.form.value.password
                    };
                    console.log(user);
                    _context.prev = 8;
                    _context.next = 11;
                    return this.mainService.post(JSON.stringify(user), "/registration");

                  case 11:
                    ExistOrNot = _context.sent;

                    if (ExistOrNot != "exist") {
                      console.log(ExistOrNot);
                      this.succes = true;
                      this.form.reset();
                    } else {
                      this.existLogin = true;
                      console.log("Логин уже существует");
                    }

                    _context.next = 18;
                    break;

                  case 15:
                    _context.prev = 15;
                    _context.t0 = _context["catch"](8);
                    console.log(_context.t0);

                  case 18:
                    this.loading = false;

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[8, 15]]);
          }));
        } // Функция, скрывающая сообщения о незаполненности полей и успешном добавлении товара (вызвается при фокусировке на одном из полей формы)

      }, {
        key: "onSucces",
        value: function onSucces() {
          this.succes = false;
          this.isEmpty = true;
          this.existLogin = false;
        }
      }]);

      return AddRoleComponent;
    }();

    AddRoleComponent.ctorParameters = function () {
      return [{
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }];
    };

    AddRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-role",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-role.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-role/add-role.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-role.component.css */
      "./src/app/add-role/add-role.component.css"))["default"]]
    })], AddRoleComponent);
    /***/
  },

  /***/
  "./src/app/add/add.component.css":
  /*!***************************************!*\
    !*** ./src/app/add/add.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddAddComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "textarea.form-control{\r\n    height: 50px !important;\r\n    resize: none !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/add/add.component.ts":
  /*!**************************************!*\
    !*** ./src/app/add/add.component.ts ***!
    \**************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");

    var AddComponent = /*#__PURE__*/function () {
      function AddComponent(mainService) {
        _classCallCheck(this, AddComponent);

        this.mainService = mainService;
        this.filename = "";
        this.afuConfig = {
          multiple: false,
          formatsAllowed: ".jpg,.png",
          uploadAPI: {
            url: "http://localhost:3001/upload-photo"
          },
          replaceTexts: {
            selectFileBtn: 'Выберите файл',
            resetBtn: 'Удалить',
            uploadBtn: 'Загрузить',
            attachPinBtn: 'Прикрепите файл',
            afterUploadMsg_success: 'Успешно загружено!',
            afterUploadMsg_error: 'Загрузка прервана!'
          }
        }; // Логическая переменная, определяющая наличие или отсутсвие прелоадера

        this.loading = false; // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях 

        this.isEmpty = true; // Логическая переменная, определяющая наличие или отсутсвие сообщения об успешном добавлении товара

        this.succes = false;
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Инициализация FormGroup, создание FormControl, и назанчение Validators
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            artikul: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            ingredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        } // Функция добавления информации о товаре, полученной с формы, в базу данных

      }, {
        key: "onAdd",
        value: function onAdd() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var product, result, obj, res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.form.value.name == "" || this.form.value.artikul == "" || this.filename == "" || this.form.value.price == "" || this.form.value.weight == "" || this.form.value.description == "" || this.form.value.num == "" || this.form.value.ingredients == "")) {
                      _context2.next = 4;
                      break;
                    }

                    this.isEmpty = false;
                    _context2.next = 26;
                    break;

                  case 4:
                    this.loading = true;
                    this.isEmpty = true;
                    product = {
                      name: this.form.value.name,
                      filename: this.filename,
                      artikul: this.form.value.artikul,
                      number: this.form.value.number,
                      price: this.form.value.price,
                      weight: this.form.value.weight,
                      description: this.form.value.description,
                      ingredients: this.form.value.ingredients
                    };
                    console.log(product);
                    this.filename = "";
                    _context2.prev = 9;
                    ;
                    _context2.next = 13;
                    return this.mainService.post(JSON.stringify(product), "/add");

                  case 13:
                    result = _context2.sent;
                    obj = {
                      idproduct: result,
                      operation: "+",
                      different: this.form.value.number
                    };
                    _context2.next = 17;
                    return this.mainService.post(JSON.stringify(obj), "/history");

                  case 17:
                    res = _context2.sent;
                    _context2.next = 23;
                    break;

                  case 20:
                    _context2.prev = 20;
                    _context2.t0 = _context2["catch"](9);
                    console.log(_context2.t0);

                  case 23:
                    this.form.reset();
                    this.loading = false;
                    this.succes = true;

                  case 26:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[9, 20]]);
          }));
        } // Функция, скрывающая сообщения о незаполненности полей и успешном добавлении товара (вызвается при фокусировке на одном из полей формы)

      }, {
        key: "onSucces",
        value: function onSucces() {
          this.succes = false;
          this.isEmpty = true;
        } // Функция, возвращение имени загруженного файла

      }, {
        key: "fileUpload",
        value: function fileUpload(event) {
          console.log(JSON.parse(event.response).filename);
          this.filename = JSON.parse(event.response).filename;
        }
      }]);

      return AddComponent;
    }();

    AddComponent.ctorParameters = function () {
      return [{
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }];
    };

    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add.component.css */
      "./src/app/add/add.component.css"))["default"]]
    })], AddComponent);
    /***/
  },

  /***/
  "./src/app/admin-comment/admin-comment.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/admin-comment/admin-comment.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCommentAdminCommentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrap-for-table {\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  _overflow: auto;\r\n  margin: 0 0 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29tbWVudC9hZG1pbi1jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0dBQ2hCLGNBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tY29tbWVudC9hZG1pbi1jb21tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcC1mb3ItdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgX292ZXJmbG93OiBhdXRvO1xyXG4gIG1hcmdpbjogMCAwIDFlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin-comment/admin-comment.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin-comment/admin-comment.component.ts ***!
    \**********************************************************/

  /*! exports provided: AdminCommentComponent */

  /***/
  function srcAppAdminCommentAdminCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminCommentComponent", function () {
      return AdminCommentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdminCommentComponent = /*#__PURE__*/function () {
      function AdminCommentComponent(mainService, router) {
        _classCallCheck(this, AdminCommentComponent);

        this.mainService = mainService;
        this.router = router;
        this.loading = false;
        this.notfound = false;
        this.comments = [];
      }

      _createClass(AdminCommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var result, one, time, result1, comment;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    moment__WEBPACK_IMPORTED_MODULE_3__["locale"]("ru"); // Получение списка всех комментариев,  имеющихся в БД

                    this.loading = true;
                    _context3.prev = 2;
                    _context3.next = 5;
                    return this.mainService.get("/all-comments");

                  case 5:
                    result = _context3.sent;

                    if (Object.keys(result).length == 0) {
                      console.log("пуст");
                      result = undefined;
                    }

                    if (!(typeof result !== "undefined")) {
                      _context3.next = 23;
                      break;
                    }

                    this.notfound = false;
                    console.log(result);
                    _context3.t0 = regeneratorRuntime.keys(result);

                  case 11:
                    if ((_context3.t1 = _context3.t0()).done) {
                      _context3.next = 21;
                      break;
                    }

                    one = _context3.t1.value;
                    time = "".concat(moment__WEBPACK_IMPORTED_MODULE_3__(result[one].datetime).format("LL"));
                    _context3.next = 16;
                    return this.mainService.get("/user/".concat(result[one].iduser));

                  case 16:
                    result1 = _context3.sent;
                    comment = {
                      idcomment: result[one].idcomment,
                      date: time,
                      idproduct: result[one].id,
                      name: result1[0].name,
                      text: result[one].text,
                      nameproduct: result[one].name
                    };
                    this.comments.push(comment);
                    _context3.next = 11;
                    break;

                  case 21:
                    _context3.next = 24;
                    break;

                  case 23:
                    this.notfound = true;

                  case 24:
                    _context3.next = 29;
                    break;

                  case 26:
                    _context3.prev = 26;
                    _context3.t2 = _context3["catch"](2);
                    console.log(_context3.t2);

                  case 29:
                    this.loading = false;

                  case 30:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[2, 26]]);
          }));
        }
      }, {
        key: "onLink",
        value: function onLink(id) {
          this.router.navigate(["/products", id]);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var result, index;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return this.mainService["delete"]("/comments/".concat(id));

                  case 3:
                    result = _context4.sent;
                    _context4.next = 9;
                    break;

                  case 6:
                    _context4.prev = 6;
                    _context4.t0 = _context4["catch"](0);
                    console.log(_context4.t0);

                  case 9:
                    index = this.comments.findIndex(function (el) {
                      return el.id == id;
                    });
                    this.comments.splice(index, 1);

                    if (this.comments.length == 0) {
                      this.notfound = true;
                    }

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[0, 6]]);
          }));
        }
      }]);

      return AdminCommentComponent;
    }();

    AdminCommentComponent.ctorParameters = function () {
      return [{
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AdminCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-admin-comment",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-comment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-comment/admin-comment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-comment.component.css */
      "./src/app/admin-comment/admin-comment.component.css"))["default"]]
    })], AdminCommentComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.component.css":
  /*!*******************************************!*\
    !*** ./src/app/admin/admin.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(mainService) {
        _classCallCheck(this, AdminComponent);

        this.mainService = mainService;
        this.notfound1 = false;
        this.notfound2 = false;
        this.notfound3 = false;
        this.datasetsFavor = [];
        this.labelsFavor = [];
        this.datasetsComment = [];
        this.labelsComment = [];
        this.datasetsSalesAdd = [];
        this.datasetsSalesSubtract = [];
        this.labelsSales = [];
        this.idSales = [];
        this.colors = ["#cd84f1", "#ffcccc", "#ff4d4d", "#ffaf40", "#fffa65", "#32ff7e", "#7efff5", "#18dcff", "#7d5fff", "#c56cf0", "#ffb8b8", "#ff3838", "#ff9f1a", "#fff200", "#3ae374", "#67e6dc", "#17c0eb", "#7158e2"];
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this = this;

            var resultFavor, resultComment, resultSales, _iterator, _step, _one, _iterator2, _step2, _one2, _loop, one;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return this.mainService.get("/statistic/favor");

                  case 3:
                    resultFavor = _context5.sent;
                    console.log(resultFavor);
                    _iterator = _createForOfIteratorHelper(resultFavor);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        _one = _step.value;
                        this.datasetsFavor.push(_one.favourcount);
                        this.labelsFavor.push(_one.name);
                      } //

                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    _context5.next = 9;
                    return this.mainService.get("/statistic/comments");

                  case 9:
                    resultComment = _context5.sent;
                    console.log(resultComment);
                    _iterator2 = _createForOfIteratorHelper(resultComment);

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        _one2 = _step2.value;
                        this.datasetsComment.push(_one2.commentcount);
                        this.labelsComment.push(_one2.name);
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }

                    _context5.next = 15;
                    return this.mainService.get("/statistic/sales");

                  case 15:
                    resultSales = _context5.sent;
                    console.log(resultSales);

                    _loop = function _loop(one) {
                      // console.log(this.idSales);
                      var index = _this.idSales.findIndex(function (el) {
                        return el == resultSales[one].id;
                      }); // console.log(index);


                      if (index == -1) {
                        _this.idSales.push(resultSales[one].id);

                        _this.labelsSales.push(resultSales[one].name);

                        if (resultSales[one].operation == "+") {
                          _this.datasetsSalesAdd.push(resultSales[one].sum);

                          _this.datasetsSalesSubtract.push(0);
                        } else if (resultSales[one].operation == "-") {
                          _this.datasetsSalesSubtract.push(resultSales[one].sum);

                          _this.datasetsSalesAdd.push(0);
                        }
                      } else {
                        if (resultSales[one].operation == "+") {
                          _this.datasetsSalesAdd[index] = resultSales[one].sum;
                        } else if (resultSales[one].operation == "-") {
                          _this.datasetsSalesSubtract[index] = resultSales[one].sum;
                        }
                      }
                    };

                    for (one in resultSales) {
                      _loop(one);
                    }

                    _context5.next = 24;
                    break;

                  case 21:
                    _context5.prev = 21;
                    _context5.t0 = _context5["catch"](0);
                    console.log(_context5.t0);

                  case 24:
                    console.log(this.idSales);
                    console.log(this.labelsSales);
                    console.log(this.datasetsSalesAdd);
                    console.log(this.datasetsSalesSubtract);

                    if (Object.keys(this.labelsFavor).length == 0) {
                      console.log("пуст1");
                      this.notfound1 = true;
                    } else this.notfound1 = false;

                    if (Object.keys(this.labelsComment).length == 0) {
                      console.log("пуст2");
                      this.notfound2 = true;
                    } else this.notfound2 = false;

                    if (Object.keys(this.labelsSales).length == 0) {
                      console.log("пуст3");
                      this.notfound3 = true;
                    } else this.notfound3 = false;

                    this.chart1 = new chart_js__WEBPACK_IMPORTED_MODULE_2__("pie", {
                      type: "pie",
                      options: {
                        responsive: true,
                        title: {
                          display: true,
                          text: "Сколько пользователей добавили товар в избранное?"
                        },
                        legend: {
                          position: "top"
                        },
                        animation: {
                          animateScale: true,
                          animateRotate: true
                        }
                      },
                      data: {
                        datasets: [{
                          data: this.datasetsFavor,
                          backgroundColor: this.colors,
                          label: ""
                        }],
                        labels: this.labelsFavor
                      }
                    }); //

                    this.chart2 = new chart_js__WEBPACK_IMPORTED_MODULE_2__("bar", {
                      type: "bar",
                      options: {
                        responsive: true,
                        title: {
                          display: true,
                          text: "Количество комментариев к товарам за текущую неделю"
                        },
                        legend: {
                          position: "top"
                        },
                        animation: {
                          animateScale: true,
                          animateRotate: true
                        },
                        scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true,
                              suggestedMax: 20
                            }
                          }]
                        }
                      },
                      data: {
                        labels: this.labelsComment,
                        datasets: [{
                          type: "bar",
                          label: "Количество комментариев",
                          data: this.datasetsComment,
                          maxBarThickness: 30,
                          backgroundColor: "rgba(255,0,255,0.4)",
                          borderColor: "rgba(255,0,255,0.4)",
                          fill: false
                        }]
                      }
                    });
                    this.chart3 = new chart_js__WEBPACK_IMPORTED_MODULE_2__("barHorizontal", {
                      type: "horizontalBar",
                      data: {
                        labels: this.labelsSales,
                        datasets: [{
                          label: "Продано",
                          data: this.datasetsSalesSubtract,
                          fill: false,
                          backgroundColor: "rgba(255,0,255,0.4)",
                          borderColor: "rgba(255,0,255,0.4)",
                          borderWidth: 1,
                          maxBarThickness: 30
                        }, {
                          label: "Изготовлено",
                          data: this.datasetsSalesAdd,
                          fill: false,
                          backgroundColor: "rgba(0,255,255,0.4)",
                          borderColor: "rgba(0,255,255,0.4)",
                          borderWidth: 1,
                          maxBarThickness: 30
                        }]
                      },
                      options: {
                        responsive: true,
                        title: {
                          display: true,
                          text: "Статистика продажи и производства товаров за текущий месяц"
                        },
                        legend: {
                          position: "top"
                        },
                        animation: {
                          animateScale: true,
                          animateRotate: true
                        },
                        scales: {
                          xAxes: [{
                            ticks: {
                              beginAtZero: true,
                              suggestedMax: 100
                            }
                          }]
                        }
                      }
                    });

                  case 34:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[0, 21]]);
          }));
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-admin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/admin/admin.component.css"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/add/add.component.ts");
    /* harmony import */


    var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view/view.component */
    "./src/app/view/view.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./authorization/authorization.component */
    "./src/app/authorization/authorization.component.ts");
    /* harmony import */


    var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./favourite/favourite.component */
    "./src/app/favourite/favourite.component.ts");
    /* harmony import */


    var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add-role/add-role.component */
    "./src/app/add-role/add-role.component.ts");
    /* harmony import */


    var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./list-user/list-user.component */
    "./src/app/list-user/list-user.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _admin_comment_admin_comment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin-comment/admin-comment.component */
    "./src/app/admin-comment/admin-comment.component.ts");
    /* harmony import */


    var _old_delete_old_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./old-delete/old-delete.component */
    "./src/app/old-delete/old-delete.component.ts");
    /* harmony import */


    var _route_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./route.guard */
    "./src/app/route.guard.ts");

    var routes = [{
      path: "",
      component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }, {
      path: "favour",
      component: _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_8__["FavouriteComponent"]
    }, {
      path: "registration",
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
      canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_14__["RouteGuard"]]
    }, {
      path: "login",
      component: _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_7__["AuthorizationComponent"],
      canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_14__["RouteGuard"]]
    }, {
      path: "add",
      component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
      canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_14__["RouteGuard"]]
    }, {
      path: "products/:id",
      component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"]
    }, {
      path: "add-role",
      component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_9__["AddRoleComponent"],
      canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_14__["RouteGuard"]]
    }, {
      path: "list-user",
      component: _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_10__["ListUserComponent"],
      canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_14__["RouteGuard"]]
    }, {
      path: "dashboard",
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
      canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_14__["RouteGuard"]]
    }, {
      path: "admin-comment",
      component: _admin_comment_admin_comment_component__WEBPACK_IMPORTED_MODULE_12__["AdminCommentComponent"],
      canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_14__["RouteGuard"]]
    }, {
      path: "archive",
      component: _old_delete_old_delete_component__WEBPACK_IMPORTED_MODULE_13__["OldDeleteComponent"],
      canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_14__["RouteGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_route_guard__WEBPACK_IMPORTED_MODULE_14__["RouteGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Хлебник и хлебница';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item/item.component */
    "./src/app/item/item.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./view/view.component */
    "./src/app/view/view.component.ts");
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/add/add.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_file_uploader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-file-uploader */
    "./node_modules/angular-file-uploader/fesm2015/angular-file-uploader.js");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./authorization/authorization.component */
    "./src/app/authorization/authorization.component.ts");
    /* harmony import */


    var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./favourite/favourite.component */
    "./src/app/favourite/favourite.component.ts");
    /* harmony import */


    var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./add-role/add-role.component */
    "./src/app/add-role/add-role.component.ts");
    /* harmony import */


    var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./list-user/list-user.component */
    "./src/app/list-user/list-user.component.ts");
    /* harmony import */


    var _comments_comments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./comments/comments.component */
    "./src/app/comments/comments.component.ts");
    /* harmony import */


    var _shared_pipes_mypipe_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./shared/pipes/mypipe.pipe */
    "./src/app/shared/pipes/mypipe.pipe.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _admin_comment_admin_comment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./admin-comment/admin-comment.component */
    "./src/app/admin-comment/admin-comment.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _old_delete_old_delete_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./old-delete/old-delete.component */
    "./src/app/old-delete/old-delete.component.ts");
    /* harmony import */


    var _route_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./route.guard */
    "./src/app/route.guard.ts");
    /* harmony import */


    var _route_error_handler__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./route-error-handler */
    "./src/app/route-error-handler.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_15__["AuthorizationComponent"], _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_16__["FavouriteComponent"], _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_17__["AddRoleComponent"], _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_18__["ListUserComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_19__["CommentsComponent"], _shared_pipes_mypipe_pipe__WEBPACK_IMPORTED_MODULE_20__["MypipePipe"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"], _admin_comment_admin_comment_component__WEBPACK_IMPORTED_MODULE_22__["AdminCommentComponent"], _old_delete_old_delete_component__WEBPACK_IMPORTED_MODULE_24__["OldDeleteComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_13__["AngularFileUploaderModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_23__["ChartsModule"]],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
        useClass: _route_error_handler__WEBPACK_IMPORTED_MODULE_26__["RouteErrorHandler"]
      }, _route_guard__WEBPACK_IMPORTED_MODULE_25__["RouteGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/authorization/authorization.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/authorization/authorization.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthorizationAuthorizationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flex {\r\n  height: 75vh;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n\r\n}\r\n\r\n.form-login {\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n\r\n.form-login input {\r\n  padding: 10px !important;\r\n  height: 46px;\r\n}\r\n\r\n.attention {\r\n  text-align: left !important;\r\n  color: red;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.attention span {\r\n  margin-top: -15px;\r\n  display: block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUViLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9COztBQUV0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG5cclxufVxyXG5cclxuLmZvcm0tbG9naW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWxvZ2luIGlucHV0IHtcclxuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG59XHJcblxyXG4uYXR0ZW50aW9uIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJlZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYXR0ZW50aW9uIHNwYW4ge1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/authorization/authorization.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/authorization/authorization.component.ts ***!
    \**********************************************************/

  /*! exports provided: AuthorizationComponent */

  /***/
  function srcAppAuthorizationAuthorizationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function () {
      return AuthorizationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthorizationComponent = /*#__PURE__*/function () {
      function AuthorizationComponent(api, router) {
        _classCallCheck(this, AuthorizationComponent);

        this.api = api;
        this.router = router; // Логическая переменная, определяющая наличие или отсутсвие сообщения о неправильном логине или пароле 

        this.notExistLoginOrPassword = true; // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях 

        this.isEmpty = true;
        this.user = {
          id: "",
          login: "",
          password: "",
          name: "",
          role: ""
        };
      }

      _createClass(AuthorizationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Инициализация FormGroup, создание FormControl, и назанчение Validators
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'login': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        } // Функция входа, отправляющая данные, полученные с формы на сервер, и реагирующая на ответ с сервера

      }, {
        key: "onLogin",
        value: function onLogin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var infoAboutUser, ExistOrNot;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    localStorage.clear();

                    if (!(this.form.value.login == "" || this.form.value.password == "")) {
                      _context6.next = 5;
                      break;
                    }

                    this.isEmpty = false;
                    _context6.next = 19;
                    break;

                  case 5:
                    this.isEmpty = true;
                    infoAboutUser = {
                      login: this.form.value.login,
                      password: this.form.value.password
                    };
                    console.log(infoAboutUser);
                    _context6.prev = 8;
                    _context6.next = 11;
                    return this.api.post(JSON.stringify(infoAboutUser), "/login");

                  case 11:
                    ExistOrNot = _context6.sent;
                    this.form.reset();

                    if (ExistOrNot != "not exist") {
                      this.user.id = ExistOrNot[0].id;
                      this.user.login = ExistOrNot[0].login;
                      this.user.password = ExistOrNot[0].password;
                      this.user.name = ExistOrNot[0].name;
                      this.user.role = ExistOrNot[0].role;
                      console.log(this.user);
                      this.notExistLoginOrPassword = true;
                      localStorage.setItem("role", this.user.role);
                      localStorage.setItem("id", this.user.id);
                      localStorage.setItem('name', this.user.name);
                      this.router.navigate(['/']);
                    } else {
                      this.notExistLoginOrPassword = false;
                      console.log("Неверный логин или пароль");
                    }

                    _context6.next = 19;
                    break;

                  case 16:
                    _context6.prev = 16;
                    _context6.t0 = _context6["catch"](8);
                    console.log(_context6.t0);

                  case 19:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[8, 16]]);
          }));
        } // Функция, убирает сообщения о неправильном логине или пароле и о незаполненных полях

      }, {
        key: "onFlag",
        value: function onFlag() {
          this.notExistLoginOrPassword = true;
          this.isEmpty = true;
        }
      }]);

      return AuthorizationComponent;
    }();

    AuthorizationComponent.ctorParameters = function () {
      return [{
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthorizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authorization',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authorization.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/authorization.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authorization.component.css */
      "./src/app/authorization/authorization.component.css"))["default"]]
    })], AuthorizationComponent);
    /***/
  },

  /***/
  "./src/app/comments/comments.component.css":
  /*!*************************************************!*\
    !*** ./src/app/comments/comments.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommentsCommentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "textarea.form-control {\r\n  height: 50px !important;\r\n  resize: none !important;\r\n}\r\n.my-btn{\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm15LWJ0bntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgdG9wOiAyMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/comments/comments.component.ts":
  /*!************************************************!*\
    !*** ./src/app/comments/comments.component.ts ***!
    \************************************************/

  /*! exports provided: CommentsComponent */

  /***/
  function srcAppCommentsCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
      return CommentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var _shared_models_comm_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/models/comm.model */
    "./src/app/shared/models/comm.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var CommentsComponent = /*#__PURE__*/function () {
      function CommentsComponent(router, activateRouter, mainService) {
        var _this2 = this;

        _classCallCheck(this, CommentsComponent);

        this.router = router;
        this.activateRouter = activateRouter;
        this.mainService = mainService;
        this.hide1 = true;
        this.hide2 = true;
        this.hide3 = true;
        this.warning = "Авторизируйтесь, чтобы оставить комментарий";
        this.hideOnly3 = true;
        this.notfound = false;
        this.isEmpty = false;
        this.comments = [];
        this.success = false;
        this.activateRouter.params.subscribe(function (param) {
          _this2.id = +param.id;
        });
      }

      _createClass(CommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var result, one, name, time;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.iduser = localStorage.getItem("id");
                    moment__WEBPACK_IMPORTED_MODULE_6__["locale"]("ru");
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                      comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
                    });
                    _context7.prev = 3;
                    _context7.next = 6;
                    return this.mainService.get("/comments/".concat(this.id));

                  case 6:
                    result = _context7.sent;
                    console.log(result[0]);

                    if (typeof result[0] !== "undefined") {
                      this.notfound = false;
                      console.log(result);

                      for (one in result) {
                        name = result[one].name;

                        if (localStorage.getItem("id") == result[one].iduser) {
                          name = "".concat(result[one].name, " (\u0412\u044B)");
                        } // console.log(result[one].datetime);


                        time = "".concat(moment__WEBPACK_IMPORTED_MODULE_6__(result[one].datetime).format("LL")); // console.log("hello world", time);

                        this.comments.push(new _shared_models_comm_model__WEBPACK_IMPORTED_MODULE_3__["Comm"](result[one].idcomment, result[one].iduser, name, result[one].idproduct, result[one].text, time));
                      }

                      console.log(this.comments);
                    } else {
                      this.notfound = true;
                    }

                    _context7.next = 14;
                    break;

                  case 11:
                    _context7.prev = 11;
                    _context7.t0 = _context7["catch"](3);
                    console.log(_context7.t0);

                  case 14:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[3, 11]]);
          }));
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.iduser = localStorage.getItem("id");
          this.hide1 = true;
          this.hide2 = true;
          this.hide3 = true;

          if (localStorage.getItem("role") == "1") {
            this.hide1 = false;
            this.hide2 = false;
            this.hide3 = false;
            this.hideOnly3 = true;
            this.warning = "Комментарии могут оставлять только клиенты пекарни!";
          }

          if (localStorage.getItem("role") == "2") {
            this.hide1 = true;
            this.hide2 = false;
            this.hide3 = false;
            this.hideOnly3 = true;
            this.warning = "Комментарии могут оставлять только клиенты пекарни!";
          }

          if (localStorage.getItem("role") == "3") {
            this.hide1 = true;
            this.hide2 = true;
            this.hide3 = false;
            this.hideOnly3 = false;
          }
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var comment, result, name, time;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.success = true;
                    console.log("id ", this.id);

                    if (!(this.form.value.comment == "")) {
                      _context8.next = 6;
                      break;
                    }

                    this.isEmpty = true;
                    _context8.next = 25;
                    break;

                  case 6:
                    this.isEmpty = false;
                    comment = {
                      iduser: localStorage.getItem("id"),
                      idproduct: this.id,
                      text: this.form.value.comment
                    };
                    console.log(comment);
                    _context8.prev = 9;
                    _context8.next = 12;
                    return this.mainService.post(JSON.stringify(comment), "/comments");

                  case 12:
                    result = _context8.sent;
                    console.log(result);
                    name = result[0].name;

                    if (localStorage.getItem("id") == result[0].iduser) {
                      name = "".concat(result[0].name, " (\u0412\u044B)");
                    }

                    time = "".concat(moment__WEBPACK_IMPORTED_MODULE_6__(result[0].datetime).format("LL")); // console.log("hello world", time);

                    this.comments.unshift(new _shared_models_comm_model__WEBPACK_IMPORTED_MODULE_3__["Comm"](result[0].idcomment, result[0].iduser, name, result[0].idproduct, result[0].text, time));
                    this.notfound = false;
                    _context8.next = 24;
                    break;

                  case 21:
                    _context8.prev = 21;
                    _context8.t0 = _context8["catch"](9);
                    console.log(_context8.t0);

                  case 24:
                    this.form.reset();

                  case 25:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[9, 21]]);
          }));
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var result, index;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return this.mainService["delete"]("/comments/".concat(id));

                  case 3:
                    result = _context9.sent;
                    _context9.next = 9;
                    break;

                  case 6:
                    _context9.prev = 6;
                    _context9.t0 = _context9["catch"](0);
                    console.log(_context9.t0);

                  case 9:
                    index = this.comments.findIndex(function (el) {
                      return el.id == id;
                    });
                    this.comments.splice(index, 1);

                    if (this.comments.length == 0) {
                      this.notfound = true;
                    }

                  case 12:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this, [[0, 6]]);
          }));
        }
      }]);

      return CommentsComponent;
    }();

    CommentsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-comments",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comments.component.css */
      "./src/app/comments/comments.component.css"))["default"]]
    })], CommentsComponent);
    /***/
  },

  /***/
  "./src/app/favourite/favourite.component.css":
  /*!***************************************************!*\
    !*** ./src/app/favourite/favourite.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavouriteFavouriteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm91cml0ZS9mYXZvdXJpdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/favourite/favourite.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/favourite/favourite.component.ts ***!
    \**************************************************/

  /*! exports provided: FavouriteComponent */

  /***/
  function srcAppFavouriteFavouriteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouriteComponent", function () {
      return FavouriteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/models/product.model */
    "./src/app/shared/models/product.model.ts");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");

    var FavouriteComponent = /*#__PURE__*/function () {
      function FavouriteComponent(mainService) {
        _classCallCheck(this, FavouriteComponent);

        this.mainService = mainService;
        this.loading = false;
        this.notfound = false;
        this.products = [];
      }

      _createClass(FavouriteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var result, one;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    // Получение списка всех товаров,  имеющихся в БД
                    this.loading = true;
                    _context10.prev = 1;
                    _context10.next = 4;
                    return this.mainService.get("/favour/".concat(localStorage.getItem("id")));

                  case 4:
                    result = _context10.sent;

                    if (Object.keys(result).length == 0) {
                      console.log("пуст");
                      result = undefined;
                    }

                    if (typeof result !== "undefined") {
                      this.notfound = false;
                      console.log(result);

                      for (one in result) {
                        this.products.push(new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](result[one].id, result[one].name, result[one].filename, result[one].artikul, result[one].number, result[one].price, result[one].weight, result[one].description, result[one].ingredients));
                      }
                    } else {
                      this.notfound = true;
                    }

                    _context10.next = 12;
                    break;

                  case 9:
                    _context10.prev = 9;
                    _context10.t0 = _context10["catch"](1);
                    console.log(_context10.t0);

                  case 12:
                    this.loading = false;

                  case 13:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[1, 9]]);
          }));
        } // Удаление из локального массива товаров определенного товара по id

      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var index = this.products.findIndex(function (el) {
            return el.id == id;
          });
          this.products.splice(index, 1);

          if (this.products.length == 0) {
            this.notfound = true;
          }
        }
      }]);

      return FavouriteComponent;
    }();

    FavouriteComponent.ctorParameters = function () {
      return [{
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }];
    };

    FavouriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-favourite",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favourite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favourite/favourite.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favourite.component.css */
      "./src/app/favourite/favourite.component.css"))["default"]]
    })], FavouriteComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-bread{\r\n    background-color: rgb(245, 207, 142) !important;\r\n}\r\n\r\n.txt-dark-bread{\r\n    color: #af762f !important;\r\n}\r\n\r\n.br-gray-bread{\r\n    border-color: #bea28c;\r\n}\r\n\r\n.txt-gray-bread{\r\n    color: #bea28c;\r\n}\r\n\r\n.hov-gray-bread:focus{\r\n    box-shadow: 0 0 0 0.2rem rgba(190, 162, 140, .5) !important;\r\n}\r\n\r\n.hov-gray-bread:active, .hov-gray-bread:hover{\r\n    border-color: #bea28c !important;\r\n    background: #bea28c !important;\r\n    color: #fff !important;\r\n}\r\n\r\nh5{\r\n    cursor: pointer;\r\n}\r\n\r\nh5:focus{\r\n    outline-width:0 !important ;\r\n}\r\n\r\n.my-nav {\r\n  margin-top: -1rem !important;\r\n}\r\n\r\n.bg-light {\r\n  background-color: #fffde7 !important;\r\n}\r\n\r\n.my-addmenu{\r\n    margin-top: -1.5rem !important\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLDJEQUEyRDtBQUMvRDs7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctYnJlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMDcsIDE0MikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnR4dC1kYXJrLWJyZWFke1xyXG4gICAgY29sb3I6ICNhZjc2MmYgIWltcG9ydGFudDtcclxufVxyXG4uYnItZ3JheS1icmVhZHtcclxuICAgIGJvcmRlci1jb2xvcjogI2JlYTI4YztcclxufVxyXG4udHh0LWdyYXktYnJlYWR7XHJcbiAgICBjb2xvcjogI2JlYTI4YztcclxufVxyXG4uaG92LWdyYXktYnJlYWQ6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxOTAsIDE2MiwgMTQwLCAuNSkgIWltcG9ydGFudDtcclxufVxyXG4uaG92LWdyYXktYnJlYWQ6YWN0aXZlLCAuaG92LWdyYXktYnJlYWQ6aG92ZXJ7XHJcbiAgICBib3JkZXItY29sb3I6ICNiZWEyOGMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNiZWEyOGMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuaDV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaDU6Zm9jdXN7XHJcbiAgICBvdXRsaW5lLXdpZHRoOjAgIWltcG9ydGFudCA7XHJcbn1cclxuLm15LW5hdiB7XHJcbiAgbWFyZ2luLXRvcDogLTFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGU3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm15LWFkZG1lbnV7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS41cmVtICFpbXBvcnRhbnRcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router; // Логическая переменная, авторизирован пользователь или нет

        this.logOut = true;
        this.addMenu = false;
        this.name = "";
        this.role = "";
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Хук жизненного цикла по изменению
        // Проверяет наличие в LocalStorage элемента роли, чтобы понять авторизирован пользователь или нет

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.name = "";
          this.role = "";

          if (localStorage.getItem("role") !== null) {
            if (localStorage.getItem("role") == "1") {
              this.role = "Администратор";
            } else {
              if (localStorage.getItem("role") == "2") {
                this.role = "Менеджер";
              }
            }

            this.name = localStorage.getItem("name"); // console.log("Роль: ", this.role);
            // console.log("Имя: ", this.name);

            this.logOut = false;
          }
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.addMenu = !this.addMenu;
          console.log(this.addMenu);
        } // Функция, срабатывающая при выходе из аккаунта, очищает LocalStorage и переводит на каталог товаров

      }, {
        key: "onLogOut",
        value: function onLogOut() {
          this.logOut = true;
          localStorage.clear();
          this.router.navigate(["/"]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/item/item.component.css":
  /*!*****************************************!*\
    !*** ./src/app/item/item.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppItemItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon {\r\n  right: 10px;\r\n  top: 10px;\r\n  width: 2rem;\r\n  height: 1.8rem;\r\n  cursor: pointer;\r\n  position: absolute;\r\n}\r\n.photo{\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  cursor: pointer;\r\n  height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMTBweDtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDEuOHJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5waG90b3tcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/item/item.component.ts":
  /*!****************************************!*\
    !*** ./src/app/item/item.component.ts ***!
    \****************************************/

  /*! exports provided: ItemComponent */

  /***/
  function srcAppItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
      return ItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");

    var ItemComponent = /*#__PURE__*/function () {
      function ItemComponent(router, mainService) {
        _classCallCheck(this, ItemComponent);

        this.router = router;
        this.mainService = mainService; // Логическая переменная определяющая наличие или отсуствие кнопки Удалить в карточке

        this.hide1 = true;
        this.hide2 = true;
        this.hide3 = true;
        this.heart = false;
        this.demonstrate = true;
        this.del = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this3 = this;

            var response, all, index;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.demonstrate = false;

                    if (!(localStorage.getItem("id") !== null)) {
                      _context11.next = 17;
                      break;
                    }

                    _context11.prev = 2;
                    _context11.next = 5;
                    return this.mainService.get("/favour/".concat(localStorage.getItem("id")));

                  case 5:
                    response = _context11.sent;
                    all = response;
                    console.log(all);
                    index = all.findIndex(function (el) {
                      return el.id == _this3.item.id;
                    });
                    console.log("index");
                    console.log(index);

                    if (index == -1) {
                      this.heart = false;
                    } else this.heart = true;

                    _context11.next = 17;
                    break;

                  case 14:
                    _context11.prev = 14;
                    _context11.t0 = _context11["catch"](2);
                    console.log(_context11.t0);

                  case 17:
                    // Определение фразы о наличии товара
                    if (this.item.number == 0) {
                      this.hasOrNot = "Отсутствует в продаже";
                    } else {
                      this.hasOrNot = "".concat(this.item.number, " \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438");
                    }

                    this.demonstrate = true;

                  case 19:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[2, 14]]);
          }));
        } // Хук жизненного цикла по изменению
        // Проверяет наличие в LocalStorage элемента роли, чтобы понять авторизирован пользователь или нет

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.hide1 = true;
          this.hide2 = true;
          this.hide3 = true;

          if (localStorage.getItem("role") == "1") {
            this.hide1 = false;
            this.hide2 = false;
            this.hide3 = false;
          }

          if (localStorage.getItem("role") == "2") {
            this.hide1 = true;
            this.hide2 = false;
            this.hide3 = false;
          }

          if (localStorage.getItem("role") == "3") {
            this.hide1 = true;
            this.hide2 = true;
            this.hide3 = false;
          }
        } // Функция, которая переводит на страницу карточки выбранного товара по клику

      }, {
        key: "onLink",
        value: function onLink(id) {
          this.router.navigate(["/products", id]);
        } // Функция удаления товара из БД

      }, {
        key: "onDelete",
        value: function onDelete(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var result, result2;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.prev = 0;
                    _context12.next = 3;
                    return this.mainService["delete"]("/delete/".concat(item.id));

                  case 3:
                    result = _context12.sent;
                    _context12.next = 6;
                    return this.mainService.post(JSON.stringify(item), "/archive");

                  case 6:
                    result2 = _context12.sent;
                    _context12.next = 12;
                    break;

                  case 9:
                    _context12.prev = 9;
                    _context12.t0 = _context12["catch"](0);
                    console.log(_context12.t0);

                  case 12:
                    this.del.emit(item.id);

                  case 13:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this, [[0, 9]]);
          }));
        }
      }, {
        key: "deleteFavourite",
        value: function deleteFavourite() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var result;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    console.log("Зашли в функцию удаления статьи из избранного");
                    _context13.prev = 1;
                    console.log("Отправили запрос на удаление статьи из избранного");
                    _context13.next = 5;
                    return this.mainService["delete"]("/favour/".concat(localStorage.getItem("id"), "/").concat(this.item.id));

                  case 5:
                    result = _context13.sent;
                    this.heart = false;
                    _context13.next = 12;
                    break;

                  case 9:
                    _context13.prev = 9;
                    _context13.t0 = _context13["catch"](1);
                    console.log(_context13.t0);

                  case 12:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this, [[1, 9]]);
          }));
        }
      }, {
        key: "addFavourite",
        value: function addFavourite() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var obj, result;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    console.log("Зашли в функцию добавление статьи в избранное");
                    _context14.prev = 1;
                    console.log("Отправили запрос на добавление статьи в избранное");
                    obj = {
                      iduser: localStorage.getItem("id"),
                      idproduct: this.item.id
                    };
                    _context14.next = 6;
                    return this.mainService.post(obj, "/favour");

                  case 6:
                    result = _context14.sent;
                    this.heart = true;
                    _context14.next = 13;
                    break;

                  case 10:
                    _context14.prev = 10;
                    _context14.t0 = _context14["catch"](1);
                    console.log(_context14.t0);

                  case 13:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this, [[1, 10]]);
          }));
        }
      }]);

      return ItemComponent;
    }();

    ItemComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ItemComponent.prototype, "del", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item.component.css */
      "./src/app/item/item.component.css"))["default"]]
    })], ItemComponent);
    /***/
  },

  /***/
  "./src/app/list-user/list-user.component.css":
  /*!***************************************************!*\
    !*** ./src/app/list-user/list-user.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListUserListUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrap-for-table {\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  _overflow: auto;\r\n  margin: 0 0 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC11c2VyL2xpc3QtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtHQUNoQixjQUFlO0VBQ2YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdXNlci9saXN0LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwLWZvci10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBfb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWFyZ2luOiAwIDAgMWVtO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/list-user/list-user.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/list-user/list-user.component.ts ***!
    \**************************************************/

  /*! exports provided: ListUserComponent */

  /***/
  function srcAppListUserListUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUserComponent", function () {
      return ListUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/models/user.model */
    "./src/app/shared/models/user.model.ts");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");

    var ListUserComponent = /*#__PURE__*/function () {
      function ListUserComponent(mainService) {
        _classCallCheck(this, ListUserComponent);

        this.mainService = mainService;
        this.loading = false;
        this.users = [];
      }

      _createClass(ListUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var result, one, name, role;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    // Получение списка всех cотрудников,  имеющихся в БД
                    this.loading = true;
                    this.id = localStorage.getItem("id");
                    _context15.prev = 2;
                    _context15.next = 5;
                    return this.mainService.get("/users");

                  case 5:
                    result = _context15.sent;

                    if (typeof result !== "undefined") {
                      console.log(result);

                      for (one in result) {
                        name = result[one].name;

                        if (localStorage.getItem("id") == result[one].id) {
                          name = "".concat(result[one].name, " (\u0412\u044B)");
                        }

                        role = result[one].role == "1" ? "Администратор" : "Менеджер";
                        this.users.push(new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](result[one].id, name, role, result[one].login, result[one].password));
                      }
                    }

                    _context15.next = 12;
                    break;

                  case 9:
                    _context15.prev = 9;
                    _context15.t0 = _context15["catch"](2);
                    console.log(_context15.t0);

                  case 12:
                    this.loading = false;

                  case 13:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this, [[2, 9]]);
          }));
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var result, index;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.prev = 0;
                    _context16.next = 3;
                    return this.mainService["delete"]("/users/".concat(id));

                  case 3:
                    result = _context16.sent;
                    _context16.next = 9;
                    break;

                  case 6:
                    _context16.prev = 6;
                    _context16.t0 = _context16["catch"](0);
                    console.log(_context16.t0);

                  case 9:
                    index = this.users.findIndex(function (el) {
                      return el.id == id;
                    });
                    this.users.splice(index, 1);

                  case 11:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this, [[0, 6]]);
          }));
        }
      }]);

      return ListUserComponent;
    }();

    ListUserComponent.ctorParameters = function () {
      return [{
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }];
    };

    ListUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-list-user",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-user/list-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-user.component.css */
      "./src/app/list-user/list-user.component.css"))["default"]]
    })], ListUserComponent);
    /***/
  },

  /***/
  "./src/app/list/list.component.css":
  /*!*****************************************!*\
    !*** ./src/app/list/list.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppListListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-search {\r\n    padding-right: 15px !important;\r\n    padding-left: 15px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktc2VhcmNoIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/list/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/list/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/models/product.model */
    "./src/app/shared/models/product.model.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(mainService) {
        _classCallCheck(this, ListComponent);

        this.mainService = mainService; // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях

        this.loading = false; // Логическая переменная, определяющая наличие или отсутсвие ссылки на страницу добавления нового товара

        this.hide1 = true;
        this.hide2 = true;
        this.hide3 = true;
        this.searchString = ""; // Логическая переменная, определяющая наличие или отсутсвие сообщения о ненайденных товарах

        this.notfound = false;
        this.products = [];
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var result, one;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    // Получение списка всех товаров,  имеющихся в БД
                    this.loading = true;
                    _context17.prev = 1;
                    _context17.next = 4;
                    return this.mainService.get("/products");

                  case 4:
                    result = _context17.sent;

                    if (typeof result[0] !== "undefined") {
                      this.notfound = false;
                      console.log(result);

                      for (one in result) {
                        this.products.push(new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_3__["Product"](result[one].id, result[one].name, result[one].filename, result[one].artikul, result[one].number, result[one].price, result[one].weight, result[one].description, result[one].ingredients));
                      }
                    } else {
                      this.notfound = true;
                    }

                    _context17.next = 11;
                    break;

                  case 8:
                    _context17.prev = 8;
                    _context17.t0 = _context17["catch"](1);
                    console.log(_context17.t0);

                  case 11:
                    this.loading = false;

                  case 12:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this, [[1, 8]]);
          }));
        } // Хук жизненного цикла по изменению
        // Проверяет наличие в LocalStorage элемента роли, чтобы понять авторизирован пользователь или нет

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.search(this.products, this.searchString);

          if (Object.keys(this.search(this.products, this.searchString)).length == 0) {
            console.log("пуст");
            this.notfound = true;
          } else this.notfound = false;

          this.hide1 = true;
          this.hide2 = true;
          this.hide3 = true;

          if (localStorage.getItem("role") == "1") {
            this.hide1 = false;
            this.hide2 = false;
            this.hide3 = false;
          }

          if (localStorage.getItem("role") == "2") {
            this.hide1 = true;
            this.hide2 = false;
            this.hide3 = false;
          }

          if (localStorage.getItem("role") == "3") {
            this.hide1 = true;
            this.hide2 = true;
            this.hide3 = false;
          }
        } // Удаление из локального массива товаров определенного товара по id

      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var index = this.products.findIndex(function (el) {
            return el.id == id;
          });
          this.products.splice(index, 1);

          if (this.products.length == 0) {
            this.notfound = true;
          }
        }
      }, {
        key: "search",
        value: function search(items, searchString) {
          if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(items) && searchString.trim().length > 0) {
            var newArr = items.filter(function (item) {
              return item.name.toLowerCase().indexOf(searchString.toLowerCase()) === 0 || item.artikul.toLowerCase().indexOf(searchString.toLowerCase()) === 0;
            });
            return newArr;
          } else {
            return items;
          }
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.css */
      "./src/app/list/list.component.css"))["default"]]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/old-delete/old-delete.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/old-delete/old-delete.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOldDeleteOldDeleteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n.photo {\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  cursor: pointer;\r\n  height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2xkLWRlbGV0ZS9vbGQtZGVsZXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9vbGQtZGVsZXRlL29sZC1kZWxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnBob3RvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/old-delete/old-delete.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/old-delete/old-delete.component.ts ***!
    \****************************************************/

  /*! exports provided: OldDeleteComponent */

  /***/
  function srcAppOldDeleteOldDeleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OldDeleteComponent", function () {
      return OldDeleteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/models/product.model */
    "./src/app/shared/models/product.model.ts");

    var OldDeleteComponent = /*#__PURE__*/function () {
      function OldDeleteComponent(router, mainService) {
        _classCallCheck(this, OldDeleteComponent);

        this.router = router;
        this.mainService = mainService;
        this.demonstrate = true;
        this.loading = false;
        this.notfound = false;
        this.products = [];
      }

      _createClass(OldDeleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var result, one;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    // Получение списка всех товаров,  имеющихся в БД
                    this.loading = true;
                    _context18.prev = 1;
                    _context18.next = 4;
                    return this.mainService.get("/archive");

                  case 4:
                    result = _context18.sent;

                    if (typeof result[0] !== "undefined") {
                      this.notfound = false;
                      console.log(result);

                      for (one in result) {
                        this.products.push(new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_4__["Product"](result[one].id, result[one].name, result[one].filename, result[one].artikul, "0", result[one].price, result[one].weight, result[one].description, result[one].ingredients));
                      }
                    } else {
                      this.notfound = true;
                    }

                    _context18.next = 11;
                    break;

                  case 8:
                    _context18.prev = 8;
                    _context18.t0 = _context18["catch"](1);
                    console.log(_context18.t0);

                  case 11:
                    this.loading = false;

                  case 12:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this, [[1, 8]]);
          }));
        } // Функция, которая переводит на страницу карточки выбранного товара по клику

      }, {
        key: "onLink",
        value: function onLink(id) {
          this.router.navigate(["/products", id]);
        } // Функция удаления товара из БД

      }, {
        key: "onDelete",
        value: function onDelete(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var result, index;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.prev = 0;
                    _context19.next = 3;
                    return this.mainService["delete"]("/archive/".concat(id));

                  case 3:
                    result = _context19.sent;
                    _context19.next = 9;
                    break;

                  case 6:
                    _context19.prev = 6;
                    _context19.t0 = _context19["catch"](0);
                    console.log(_context19.t0);

                  case 9:
                    index = this.products.findIndex(function (el) {
                      return el.id == id;
                    });
                    this.products.splice(index, 1);

                    if (this.products.length == 0) {
                      this.notfound = true;
                    }

                  case 12:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this, [[0, 6]]);
          }));
        }
      }, {
        key: "onAdd",
        value: function onAdd(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var result;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.prev = 0;
                    _context20.next = 3;
                    return this.mainService.post(JSON.stringify(product), "/add");

                  case 3:
                    result = _context20.sent;
                    _context20.next = 9;
                    break;

                  case 6:
                    _context20.prev = 6;
                    _context20.t0 = _context20["catch"](0);
                    console.log(_context20.t0);

                  case 9:
                    this.onDelete(product.id);

                  case 10:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this, [[0, 6]]);
          }));
        }
      }]);

      return OldDeleteComponent;
    }();

    OldDeleteComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }];
    };

    OldDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-old-delete",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./old-delete.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/old-delete/old-delete.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./old-delete.component.css */
      "./src/app/old-delete/old-delete.component.css"))["default"]]
    })], OldDeleteComponent);
    /***/
  },

  /***/
  "./src/app/registration/registration.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/registration/registration.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrationRegistrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flex {\r\n  height: 75vh;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n\r\n}\r\n\r\n.form-login {\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n\r\n.form-login input {\r\n  padding: 10px !important;\r\n  height: 46px;\r\n}\r\n\r\n.attention {\r\n  text-align: left !important;\r\n  color: red;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.attention span {\r\n  margin-top: -15px;\r\n  display: block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjs7QUFFdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcclxuICBoZWlnaHQ6IDc1dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcblxyXG59XHJcblxyXG4uZm9ybS1sb2dpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tbG9naW4gaW5wdXQge1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbn1cclxuXHJcbi5hdHRlbnRpb24ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5hdHRlbnRpb24gc3BhbiB7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(api, router) {
        _classCallCheck(this, RegistrationComponent);

        this.api = api;
        this.router = router; // Логическая переменная, определяющая наличие или отсутсвие сообщения о неправильном логине или пароле

        this.existLogin = true; // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях

        this.isEmpty = true;
        this.user = {
          id: "",
          login: "",
          password: "",
          name: "",
          role: ""
        };
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Инициализация FormGroup, создание FormControl, и назанчение Validators
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        } // Функция входа, отправляющая данные, полученные с формы на сервер, и реагирующая на ответ с сервера

      }, {
        key: "onRegistr",
        value: function onRegistr() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var infoAboutUser, ExistOrNot;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    localStorage.clear();

                    if (!(this.form.value.login == "" || this.form.value.name == "" || this.form.value.password == "")) {
                      _context21.next = 5;
                      break;
                    }

                    this.isEmpty = false;
                    _context21.next = 19;
                    break;

                  case 5:
                    this.isEmpty = true;
                    infoAboutUser = {
                      login: this.form.value.login,
                      password: this.form.value.password,
                      name: this.form.value.name,
                      role: "3"
                    };
                    console.log(infoAboutUser);
                    _context21.prev = 8;
                    _context21.next = 11;
                    return this.api.post(JSON.stringify(infoAboutUser), "/registration");

                  case 11:
                    ExistOrNot = _context21.sent;
                    this.form.reset();

                    if (ExistOrNot != "exist") {
                      console.log(ExistOrNot);
                      this.user.id = ExistOrNot[0].id;
                      this.user.login = ExistOrNot[0].login;
                      this.user.password = ExistOrNot[0].password;
                      this.user.name = ExistOrNot[0].name;
                      this.user.role = ExistOrNot[0].role;
                      console.log(this.user);
                      localStorage.setItem("role", this.user.role);
                      localStorage.setItem("id", this.user.id);
                      localStorage.setItem("name", this.user.name);
                      this.router.navigate(["/"]);
                    } else {
                      this.existLogin = false;
                      console.log("Логин уже существует");
                    }

                    _context21.next = 19;
                    break;

                  case 16:
                    _context21.prev = 16;
                    _context21.t0 = _context21["catch"](8);
                    console.log(_context21.t0);

                  case 19:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this, [[8, 16]]);
          }));
        } // Функция, убирает сообщения о неправильном логине или пароле и о незаполненных полях

      }, {
        key: "onFlag",
        value: function onFlag() {
          this.existLogin = true;
          this.isEmpty = true;
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ctorParameters = function () {
      return [{
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-registration",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.component.css */
      "./src/app/registration/registration.component.css"))["default"]]
    })], RegistrationComponent);
    /***/
  },

  /***/
  "./src/app/route-error-handler.ts":
  /*!****************************************!*\
    !*** ./src/app/route-error-handler.ts ***!
    \****************************************/

  /*! exports provided: RouteErrorHandler */

  /***/
  function srcAppRouteErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteErrorHandler", function () {
      return RouteErrorHandler;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RouteErrorHandler = /*#__PURE__*/function () {
      function RouteErrorHandler(injector) {
        _classCallCheck(this, RouteErrorHandler);

        this.injector = injector;
      }

      _createClass(RouteErrorHandler, [{
        key: "handleError",
        value: function handleError(error) {
          var router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);

          if (error.rejection.status === 401 || error.rejection.status === 403) {
            router.navigate(["/"]);
          }

          throw error;
        }
      }]);

      return RouteErrorHandler;
    }();

    RouteErrorHandler.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    RouteErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RouteErrorHandler);
    /***/
  },

  /***/
  "./src/app/route.guard.ts":
  /*!********************************!*\
    !*** ./src/app/route.guard.ts ***!
    \********************************/

  /*! exports provided: RouteGuard */

  /***/
  function srcAppRouteGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteGuard", function () {
      return RouteGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RouteGuard = /*#__PURE__*/function () {
      function RouteGuard(router) {
        _classCallCheck(this, RouteGuard);

        this.router = router;
      }

      _createClass(RouteGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          console.log(route.url[0].path);
          console.log(localStorage.getItem("id"));
          var path = route.url[0].path;

          if ((path == "registration" || path == "login") && localStorage.getItem("id") != null) {
            this.router.navigate(["/"]);
            return false;
          } else if ((localStorage.getItem("role") == null || localStorage.getItem("role") == "3") && (path == "add" || path == "add-role" || path == "list-user" || path == "dashboard" || path == "admin-comment" || path == "archive")) {
            this.router.navigate(["/"]);
            return false;
          } else if ((path == "add-role" || path == "list-user" || path == "dashboard" || path == "admin-comment") && localStorage.getItem("role") == "2") {
            this.router.navigate(["/"]);
            return false;
          } else return true;
        }
      }]);

      return RouteGuard;
    }();

    RouteGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RouteGuard);
    /***/
  },

  /***/
  "./src/app/shared/models/comm.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/models/comm.model.ts ***!
    \*********************************************/

  /*! exports provided: Comm */

  /***/
  function srcAppSharedModelsCommModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Comm", function () {
      return Comm;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // Модель класса Comment


    var Comm = function Comm(id, iduser, name, idproduct, text, date) {
      _classCallCheck(this, Comm);

      this.id = id;
      this.iduser = iduser;
      this.name = name;
      this.idproduct = idproduct;
      this.text = text;
      this.date = date;
    };
    /***/

  },

  /***/
  "./src/app/shared/models/product.model.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/models/product.model.ts ***!
    \************************************************/

  /*! exports provided: Product */

  /***/
  function srcAppSharedModelsProductModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // Модель класса Продукт


    var Product = function Product(id, name, filename, artikul, number, price, weight, description, ingredients) {
      _classCallCheck(this, Product);

      this.id = id;
      this.name = name;
      this.filename = filename;
      this.artikul = artikul;
      this.number = number;
      this.price = price;
      this.weight = weight;
      this.description = description;
      this.ingredients = ingredients;
    };
    /***/

  },

  /***/
  "./src/app/shared/models/user.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/models/user.model.ts ***!
    \*********************************************/

  /*! exports provided: User */

  /***/
  function srcAppSharedModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // Модель класса Продукт


    var User = function User(id, name, role, login, password) {
      _classCallCheck(this, User);

      this.id = id;
      this.name = name;
      this.role = role;
      this.login = login;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/shared/pipes/mypipe.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/pipes/mypipe.pipe.ts ***!
    \*********************************************/

  /*! exports provided: MypipePipe */

  /***/
  function srcAppSharedPipesMypipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MypipePipe", function () {
      return MypipePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);

    var MypipePipe = /*#__PURE__*/function () {
      function MypipePipe() {
        _classCallCheck(this, MypipePipe);
      }

      _createClass(MypipePipe, [{
        key: "transform",
        value: function transform(items, searchString) {
          if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(items) && searchString.trim().length > 0) {
            var newArr = items.filter(function (item) {
              return item.name.toLowerCase().indexOf(searchString.toLowerCase()) === 0 || item.artikul.toLowerCase().indexOf(searchString.toLowerCase()) === 0;
            });
            return newArr;
          } else {
            return items;
          }
        }
      }]);

      return MypipePipe;
    }();

    MypipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: "mypipe"
    })], MypipePipe);
    /***/
  },

  /***/
  "./src/app/shared/services/main.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/main.service.ts ***!
    \*************************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppSharedServicesMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MainService = /*#__PURE__*/function () {
      function MainService(http) {
        _classCallCheck(this, MainService);

        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]("Content-Type: application/json; charset=UTF-8");
      } //Создает полный адрес запроса


      _createClass(MainService, [{
        key: "getUrl",
        value: function getUrl() {
          var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          return "http://localhost:3001/api" + url;
        } // Отправляет запрос GET на сервер

      }, {
        key: "get",
        value: function get(url) {
          return this.http.get(this.getUrl(url), {
            headers: this.headers
          }).toPromise();
        } // Отправляет запрос POST на сервер

      }, {
        key: "post",
        value: function post(data, url) {
          return this.http.post(this.getUrl(url), data, {
            headers: this.headers
          }).toPromise();
        } // Отправляет запрос PUT на сервер

      }, {
        key: "put",
        value: function put(data, url) {
          console.log(data);
          this.http.put(this.getUrl(url), data, {
            headers: this.headers
          }).toPromise();
        } // Отправляет запрос DELETE на сервер

      }, {
        key: "delete",
        value: function _delete(url) {
          console.log(this.getUrl(url));
          return this.http["delete"](this.getUrl(url), {
            headers: this.headers
          }).toPromise();
        }
      }]);

      return MainService;
    }();

    MainService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MainService);
    /***/
  },

  /***/
  "./src/app/view/view.component.css":
  /*!*****************************************!*\
    !*** ./src/app/view/view.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\nbutton{\r\n    width: 100px !important;\r\n}\r\n.my-line{\r\n    line-height: 38px;\r\n}\r\ninput.my-line{\r\n    width: 100px;\r\n}\r\n.icon {\r\n  width: 2.5rem;\r\n  height: 2.25rem;\r\n  cursor: pointer;\r\n}\r\n.photo{\r\n     -o-object-fit: cover;\r\n        object-fit: cover;\r\n     max-height: 400px;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNDO0tBQ0ksb0JBQWlCO1FBQWpCLGlCQUFpQjtLQUNqQixpQkFBaUI7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5idXR0b257XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubXktbGluZXtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG59XHJcbmlucHV0Lm15LWxpbmV7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLmljb24ge1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gLnBob3Rve1xyXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gfVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/view/view.component.ts":
  /*!****************************************!*\
    !*** ./src/app/view/view.component.ts ***!
    \****************************************/

  /*! exports provided: ViewComponent */

  /***/
  function srcAppViewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/models/product.model */
    "./src/app/shared/models/product.model.ts");

    var ViewComponent = /*#__PURE__*/function () {
      // Получение параметра роута id
      function ViewComponent(router, activateRouter, mainService) {
        var _this4 = this;

        _classCallCheck(this, ViewComponent);

        this.router = router;
        this.activateRouter = activateRouter;
        this.mainService = mainService;
        this.del = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // Логическая переменная, определяющая наличие или отсутсвие прелоадера

        this.loading = false; // Лoгическая переменная, определяющая режим чтения или редактирования включен

        this.editOrNot = true;
        this.heart = false;
        this.hide3 = true;
        this.hide2 = true;
        this.hide1 = true;
        this.hasOrNot = "в наличии";
        this.product = {
          id: "",
          name: "",
          filename: "",
          artikul: "",
          price: "",
          weight: "",
          description: "",
          ingredients: ""
        };
        this.item = {
          id: 0
        };
        this.activateRouter.params.subscribe(function (param) {
          _this4.item.id = +param.id;
        });
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _this5 = this;

            var response, all, index;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    this.loading = true; // Отправка на сервер запроса для получения карточки товара по id

                    _context22.prev = 1;
                    _context22.next = 4;
                    return this.mainService.post(JSON.stringify(this.item), "/onecard");

                  case 4:
                    this.res = _context22.sent;
                    _context22.next = 10;
                    break;

                  case 7:
                    _context22.prev = 7;
                    _context22.t0 = _context22["catch"](1);
                    console.log(_context22.t0);

                  case 10:
                    this.product = this.res[0];

                    if (this.product.number == 0) {
                      this.hasOrNot = "Отсутствует в продаже";
                    } else {
                      this.hasOrNot = "".concat(this.product.number, " \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438");
                    }

                    this.old = this.product.number;
                    console.log(this.product);

                    if (!(localStorage.getItem("id") !== null)) {
                      _context22.next = 30;
                      break;
                    }

                    _context22.prev = 15;
                    _context22.next = 18;
                    return this.mainService.get("/favour/".concat(localStorage.getItem("id")));

                  case 18:
                    response = _context22.sent;
                    all = response;
                    console.log(all);
                    index = all.findIndex(function (el) {
                      return el.id == _this5.product.id;
                    });
                    console.log("index");
                    console.log(index);

                    if (index == -1) {
                      this.heart = false;
                    } else this.heart = true;

                    _context22.next = 30;
                    break;

                  case 27:
                    _context22.prev = 27;
                    _context22.t1 = _context22["catch"](15);
                    console.log(_context22.t1);

                  case 30:
                    this.loading = false;

                    if (this.product.id != "") {
                      // Инициализация FormGroup, создание FormControl, и назанчение Validators
                      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("".concat(this.product.price), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
                        number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("".concat(this.product.number), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])
                      });
                    }

                  case 32:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this, [[1, 7], [15, 27]]);
          }));
        } // Хук жизненного цикла по изменению
        // Проверяет наличие в LocalStorage элемента роли, чтобы понять авторизирован пользователь или нет

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.hide1 = true;
          this.hide2 = true;
          this.hide3 = true;

          if (localStorage.getItem("role") == "1") {
            this.hide1 = false;
            this.hide2 = false;
            this.hide3 = false;
          }

          if (localStorage.getItem("role") == "2") {
            this.hide1 = true;
            this.hide2 = false;
            this.hide3 = false;
          }

          if (localStorage.getItem("role") == "3") {
            this.hide1 = true;
            this.hide2 = true;
            this.hide3 = false;
          }
        } // Отправляет запрос удаления карточки на сервер

      }, {
        key: "onDelete",
        value: function onDelete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var result, result2;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.prev = 0;
                    _context23.next = 3;
                    return this.mainService["delete"]("/delete/".concat(this.product.id));

                  case 3:
                    result = _context23.sent;
                    _context23.next = 6;
                    return this.mainService.post(JSON.stringify(this.product), "/archive");

                  case 6:
                    result2 = _context23.sent;
                    _context23.next = 12;
                    break;

                  case 9:
                    _context23.prev = 9;
                    _context23.t0 = _context23["catch"](0);
                    console.log(_context23.t0);

                  case 12:
                    this.del.emit(this.product.id);
                    this.router.navigate(["/"]);

                  case 14:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this, [[0, 9]]);
          }));
        } // Оправляет запрос изменения информации в карточки на сервер или включает редим редактирования

      }, {
        key: "onChange",
        value: function onChange() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var changeNum, different, newProduct, obj, _res, _obj, _res2, res;

            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    changeNum = '';
                    different = 0;

                    if (this.editOrNot) {
                      _context24.next = 36;
                      break;
                    }

                    newProduct = new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_5__["Product"](this.product.id, this.product.name, this.product.filename, this.product.artikul, this.form.value.number, this.form.value.price, this.product.weight, this.product.description, this.product.ingredients);
                    this["new"] = this.form.value.number;
                    console.log('new ', this["new"]);
                    console.log('old ', this.old);
                    _context24.prev = 7;

                    if (!(this["new"] > this.old)) {
                      _context24.next = 16;
                      break;
                    }

                    console.log("увеличение товаров с ", this.old, " до ", this["new"]);
                    changeNum = "+";
                    different = this["new"] - this.old;
                    obj = {
                      idproduct: this.product.id,
                      operation: changeNum,
                      different: different
                    };
                    _context24.next = 15;
                    return this.mainService.post(JSON.stringify(obj), "/history");

                  case 15:
                    _res = _context24.sent;

                  case 16:
                    if (!(this["new"] < this.old)) {
                      _context24.next = 24;
                      break;
                    }

                    console.log("продажа товаров в числе  ", this.old - this["new"]);
                    changeNum = "-";
                    different = this.old - this["new"];
                    _obj = {
                      idproduct: this.product.id,
                      operation: changeNum,
                      different: different
                    };
                    _context24.next = 23;
                    return this.mainService.post(JSON.stringify(_obj), "/history");

                  case 23:
                    _res2 = _context24.sent;

                  case 24:
                    _context24.next = 26;
                    return this.mainService.put(JSON.stringify(newProduct), "/products/".concat(this.product.id));

                  case 26:
                    res = _context24.sent;
                    _context24.next = 32;
                    break;

                  case 29:
                    _context24.prev = 29;
                    _context24.t0 = _context24["catch"](7);
                    console.log(_context24.t0);

                  case 32:
                    this.old = this.form.value.number;
                    this.product.price = this.form.value.price;
                    this.product.number = this.form.value.number;
                    this.numberOfItem();

                  case 36:
                    this.editOrNot = !this.editOrNot;

                  case 37:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this, [[7, 29]]);
          }));
        } // Определяет фразу о наличии или отсутствии товара

      }, {
        key: "numberOfItem",
        value: function numberOfItem() {
          if (this.product.number == 0) {
            this.hasOrNot = "Отсутствует в продаже";
          } else {
            this.hasOrNot = "".concat(this.product.number, " \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438");
          }
        }
      }, {
        key: "deleteFavourite",
        value: function deleteFavourite() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var result;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    console.log("Зашли в функцию удаления статьи из избранного");
                    _context25.prev = 1;
                    console.log("Отправили запрос на удаление статьи из избранного");
                    _context25.next = 5;
                    return this.mainService["delete"]("/favour/".concat(localStorage.getItem("id"), "/").concat(this.product.id));

                  case 5:
                    result = _context25.sent;
                    this.heart = false;
                    console.log(this.heart);
                    _context25.next = 13;
                    break;

                  case 10:
                    _context25.prev = 10;
                    _context25.t0 = _context25["catch"](1);
                    console.log(_context25.t0);

                  case 13:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this, [[1, 10]]);
          }));
        }
      }, {
        key: "addFavourite",
        value: function addFavourite() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var obj, result;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    console.log("Зашли в функцию добавление статьи в избранное");
                    _context26.prev = 1;
                    console.log("Отправили запрос на добавление статьи в избранное");
                    obj = {
                      iduser: localStorage.getItem("id"),
                      idproduct: this.product.id
                    };
                    _context26.next = 6;
                    return this.mainService.post(obj, "/favour");

                  case 6:
                    result = _context26.sent;
                    this.heart = true;
                    console.log(this.heart);
                    _context26.next = 14;
                    break;

                  case 11:
                    _context26.prev = 11;
                    _context26.t0 = _context26["catch"](1);
                    console.log(_context26.t0);

                  case 14:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this, [[1, 11]]);
          }));
        }
      }]);

      return ViewComponent;
    }();

    ViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _shared_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ViewComponent.prototype, "del", void 0);
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-view",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view.component.css */
      "./src/app/view/view.component.css"))["default"]]
    })], ViewComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\dbely\OneDrive\Рабочий стол\Программная инженерия\project\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map