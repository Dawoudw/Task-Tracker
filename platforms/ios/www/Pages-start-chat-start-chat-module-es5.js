function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-start-chat-start-chat-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/start-chat/start-chat.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/start-chat/start-chat.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStartChatStartChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/group-chat\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Creating a new Group</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider>\n    <ion-label>\n      Signed in as: {{ currentUserEmail }}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-input placeholder=\"Please enter a name for this new group\" [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n<br>\n\n  <!-- shows users added to this group -->\n  <ion-item-divider *ngIf=\"users.length!=0\">\n    <!-- <ion-label *ngIf=\"(users | async)?.length!=0\"> -->\n    <ion-label>\n      Users added to this group\n    </ion-label>\n  </ion-item-divider>\n  <ion-item *ngFor=\"let usr of users\">\n    <ion-label>\n      {{ usr.email }}\n      <p>{{ usr.nickname }}</p>\n    </ion-label>\n  </ion-item>\n\n<br><br>\n  <ion-item-divider>\n    <ion-label>\n      Contacts (All Available Users)\n    </ion-label>\n  </ion-item-divider>\n  <ion-item button *ngFor=\"let item of listOfUsers;\">\n    <ion-label>\n      {{ item.payload.doc.data().email }}\n      <p>{{ item.payload.doc.data().userName }}</p>\n    </ion-label>\n    <ion-button icon-only (click)=\"addUser(item.payload.doc.data().email)\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-button>\n    <!-- Keep either a button or a routerlink--both togather will not work -->\n    <!-- <ion-button icon-only (click)=\"oneOnOneChat(item.payload.doc.data().email,item.payload.doc.data().nickname)\">\n      <ion-icon name=\"chatbubble-outline\"></ion-icon>\n    </ion-button> -->\n    <!-- <ion-button icon-only>\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-button> -->\n  </ion-item>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button color=\"light\" expand=\"full\" fill=\"clear\" [disabled]=\"title == '' || users.length == 0\" \n    (click)=\"createGroup()\">Start\n      Group</ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/Pages/start-chat/start-chat-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Pages/start-chat/start-chat-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: StartChatPageRoutingModule */

  /***/
  function srcAppPagesStartChatStartChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartChatPageRoutingModule", function () {
      return StartChatPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _start_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./start-chat.page */
    "./src/app/Pages/start-chat/start-chat.page.ts");

    var routes = [{
      path: '',
      component: _start_chat_page__WEBPACK_IMPORTED_MODULE_3__["StartChatPage"]
    }];

    var StartChatPageRoutingModule = function StartChatPageRoutingModule() {
      _classCallCheck(this, StartChatPageRoutingModule);
    };

    StartChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StartChatPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/start-chat/start-chat.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Pages/start-chat/start-chat.module.ts ***!
    \*******************************************************/

  /*! exports provided: StartChatPageModule */

  /***/
  function srcAppPagesStartChatStartChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartChatPageModule", function () {
      return StartChatPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _start_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./start-chat-routing.module */
    "./src/app/Pages/start-chat/start-chat-routing.module.ts");
    /* harmony import */


    var _start_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./start-chat.page */
    "./src/app/Pages/start-chat/start-chat.page.ts");

    var StartChatPageModule = function StartChatPageModule() {
      _classCallCheck(this, StartChatPageModule);
    };

    StartChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _start_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartChatPageRoutingModule"]],
      declarations: [_start_chat_page__WEBPACK_IMPORTED_MODULE_6__["StartChatPage"]]
    })], StartChatPageModule);
    /***/
  },

  /***/
  "./src/app/Pages/start-chat/start-chat.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/Pages/start-chat/start-chat.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStartChatStartChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3N0YXJ0LWNoYXQvc3RhcnQtY2hhdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/start-chat/start-chat.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Pages/start-chat/start-chat.page.ts ***!
    \*****************************************************/

  /*! exports provided: StartChatPage */

  /***/
  function srcAppPagesStartChatStartChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartChatPage", function () {
      return StartChatPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/chat.service */
    "./src/app/Services/chat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StartChatPage = /*#__PURE__*/function () {
      function StartChatPage(chatService, router) {
        _classCallCheck(this, StartChatPage);

        this.chatService = chatService;
        this.router = router;
        this.listOfUsers = [];
        this.currentUserEmail = this.chatService.currentUser.email;
        this.users = [];
        this.participant = '';
        this.participant1 = '';
        this.title = '';
      }

      _createClass(StartChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //this gets a list of all users
          this.listOfUsers = [];
          this.chatService.getAllUsers().subscribe(function (result) {
            result.forEach(function (r) {
              if (r.payload.doc.data()['email'] != _this.chatService.currentUser.email) {
                _this.listOfUsers.push(r);
              }
            });
          });
        }
      }, {
        key: "addUser",
        value: function addUser(participant1) {
          var _this2 = this;

          // console.log("when calling addUser function, users array =");
          // console.log(this.users);
          this.participant = participant1;
          var obs = this.chatService.findUser(this.participant);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(obs).subscribe(function (res) {
            var _iterator = _createForOfIteratorHelper(res),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var data = _step.value;

                if (data.length > 0) {
                  if (_this2.users.indexOf(data[0]) > -1) {} else {
                    console.log("data[0]");
                    console.log(data[0]);

                    _this2.users.push(data[0]);
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this2.participant = '';
          });
        }
      }, {
        key: "createGroup",
        value: function createGroup() {
          var _this3 = this;

          console.log("this.title");
          console.log(this.title);
          console.log("this.users");
          console.log(this.users);
          console.log("users array length: ");
          console.log(this.users.length);
          this.chatService.createGroup(this.title, this.users).then(function (res) {
            console.log("group created");

            _this3.router.navigateByUrl('/chats');
          });
          this.users = [];
        }
      }]);

      return StartChatPage;
    }();

    StartChatPage.ctorParameters = function () {
      return [{
        type: src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    StartChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./start-chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/start-chat/start-chat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./start-chat.page.scss */
      "./src/app/Pages/start-chat/start-chat.page.scss"))["default"]]
    })], StartChatPage);
    /***/
  }
}]);
//# sourceMappingURL=Pages-start-chat-start-chat-module-es5.js.map