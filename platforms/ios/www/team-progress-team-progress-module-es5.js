function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-progress-team-progress-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/today-tasks/today-tasks.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/today-tasks/today-tasks.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTodayTasksTodayTasksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div\r\n    class=\"ion-no-margin ; no-padding\"\r\n    style=\"\r\n      height: 0px;\r\n      text-align: center !important;\r\n      position: relative;\r\n      z-index: 1;\r\n    \"\r\n  >\r\n    <ion-refresher\r\n      style=\"position: relative; z-index: 2; top: 0px;\"\r\n      slot=\"fixed\"\r\n      (ionRefresh)=\"doRefresh($event)\"\r\n    >\r\n      <ion-refresher-content refreshingSpinner=\"crescent\">\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n  </div>\r\n\r\n  <!-- <ion-grid *ngIf=\"userProgress.length > 0\">\r\n    <ion-row class=\"ion-no-margin ; no-padding\">\r\n      <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n        <ion-list\r\n          *ngFor=\"let item of userProgress; let i = index\"\r\n          [(ngModel)]=\"userProgress\"\r\n          ngDefaultControl\r\n          name=\"lstTaskProgress\"\r\n        >\r\n          <ion-row style=\"justify-items: left;\">\r\n            <ion-col>\r\n              <ion-item\r\n                [routerLink]=\"['/', 'tasktracker', 'taskview', item.id]\"\r\n                detail=\"true\"\r\n                md=\"ellipsis-vertical\"\r\n                ios=\"ellipsis-vertical \"\r\n              >\r\n                <ion-avatar slot=\"start\" name=\"avatar\">\r\n                  <img src=\"../assets/images/avatar.svg\" />\r\n                </ion-avatar>\r\n                <ion-label class=\"ion-text-start ion-text-capitalize\">\r\n                  <ion-label color=\"primary\" mode=\"ios\" position=\"stacked\">\r\n                    <b>{{ item.userName }}</b></ion-label\r\n                  >\r\n\r\n                  <ion-label mode=\"ios\" position=\"stacked\">\r\n                \r\n                    {{ i + 1 }}.{{ item.task }}\r\n\r\n                    <ion-label mode=\"ios\" style=\"float: right;\">\r\n                      <ion-badge\r\n                        style=\"float: right;\"\r\n                        [color]=\"\r\n                          item.progress > 99\r\n                            ? 'success'\r\n                            : item.progress < 50\r\n                            ? 'warning'\r\n                            : 'primary'\r\n                        \"\r\n                      >\r\n                        {{ item.progress }}%\r\n                      </ion-badge>\r\n                    </ion-label>\r\n                  </ion-label>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"auto\">\r\n\r\n              <ion-icon  \r\n              [routerLink]=\"['/tasktracker','chat',user? user.email:'',user? user.userId:'']\"\r\n                color=\"primary\"\r\n                name=\"chatbox-ellipses-outline\"\r\n                style=\"\r\n                  flex: left;\r\n                  margin-top: 10px;\r\n                  margin-left: 5px;\r\n                  margin-right: 5px;\r\n                  width: 20px;\r\n                  height: 20px;\r\n                \"\r\n                class=\"ion-text-start\"\r\n              ></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n\r\n  <ion-grid  *ngIf=\"userProgress.length > 0\" >\r\n    <ion-row class=\"ion-no-margin ; no-padding\">\r\n      <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n \r\n        <ion-list\r\n        *ngFor=\"let item of userProgress; let i = index\"\r\n        [(ngModel)]=\"userProgress\"\r\n        ngDefaultControl\r\n        name=\"lstTaskProgress\"\r\n      >\r\n          <ion-row style=\"justify-items: left;\">\r\n            <ion-col>\r\n              <ion-item     [routerLink]=\"['/', 'tasktracker', 'taskview', item.id]\"\r\n              detail=\"true\">\r\n                <ion-avatar slot=\"start\" name=\"avatar\">\r\n                  <img src=\"../assets/images/avatar.svg\" />\r\n                </ion-avatar>\r\n                <ion-label class=\"ion-text-start ion-text-capitalize\">\r\n                  <ion-label color=\"primary\" mode=\"ios\" position=\"stacked\">\r\n                    <b>{{ item.userName }} </b></ion-label\r\n                  >\r\n<!-- \r\n                  <ion-label mode=\"ios\" position=\"stacked\">\r\n                    Total Tasks <b>({{ item.totaltasks }}) </b>\r\n                  </ion-label> -->\r\n                  <ion-label mode=\"ios\" position=\"stacked\">\r\n                    <ion-badge\r\n                      style=\"margin: 0px;\"\r\n                      [color]=\"\r\n                        item.progress > 99\r\n                          ? 'success'\r\n                          : item.progress < 50\r\n                          ? 'warning'\r\n                          : 'primary'\r\n                      \"\r\n                    >\r\n                      {{ item.progress }}%\r\n                    </ion-badge>\r\n                  </ion-label>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"auto\">\r\n              <ion-icon\r\n                [routerLink]=\"['/tasktracker','chat',user? user.email:'',user? user.userId:'']\"\r\n                color=\"primary\"\r\n                name=\"chatbox-ellipses-outline\"\r\n                style=\"\r\n                  flex: left;\r\n                  margin-top: 10px;\r\n                  margin-left: 5px;\r\n                  margin-right: 5px;\r\n                  width: 20px;\r\n                  height: 20px;\r\n                \"\r\n                class=\"ion-text-start\"\r\n              ></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div\r\n    #divMsg\r\n    style=\"display: none;\"\r\n    class=\"ion-no-padding ion-margin-top ion-margin-horizontal\"\r\n  >\r\n    <ion-chip\r\n      color=\"danger\"\r\n      class=\"ion-justify-content-center\"\r\n      style=\"width: 98%;\"\r\n    >\r\n      <ion-label>There is no task(s) for anyone today .</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/team-progress/team-progress.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/team-progress/team-progress.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamProgressTeamProgressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-margin\">\n  <ion-toolbar>\n    <ion-segment color=\"secondary\" (ionChange)=\"0\" #checkTeam value=\"calendar\">\n      <ion-segment-button size=\"small\" value=\"calendar\" layout=\"icon-start\">\n        <ion-label position=\"float\">Today Tasks</ion-label>\n        <ion-icon name=\"calendar-outline\"></ion-icon>\n      </ion-segment-button>\n\n      <ion-segment-button size=\"small\" value=\"team\" layout=\"icon-start\">\n        <ion-label position=\"float\">Team Progress</ion-label>\n        <ion-icon name=\"people-outline\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div\n    class=\"ion-no-margin ; no-padding\"\n    style=\"\n      height: 0px;\n      text-align: center !important;\n      position: relative;\n      z-index: 1;\n    \"\n  >\n    <ion-refresher\n      #refTeamProgress\n      id=\"refTeamProgress\"\n      style=\"position: relative; z-index: 2; top: 0px;\"\n      slot=\"fixed\"\n      (ionRefresh)=\"doRefresh($event)\"\n    >\n      <ion-refresher-content color=\"primary\" refreshingSpinner=\"crescent\">\n      </ion-refresher-content>\n    </ion-refresher>\n  </div>\n  <ion-grid *ngIf=' checkTeam.value==\"team\" '>\n    <ion-row class=\"ion-no-margin ; no-padding\">\n      <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\n        <!-- <div\n          style=\"\n            height: 0px;\n            text-align: center !important;\n            position: relative;\n            z-index: 1;\n          \"\n          *ngIf=\"isLoaded\"\n        >\n          <ion-spinner\n            style=\"position: relative; z-index: 2; top: 0px;\"\n            name=\"crescent\"\n          ></ion-spinner>\n        </div> -->\n\n        <ion-list\n          *ngFor=\"let item of userProgress; let i = index\"\n          [(ngModel)]=\"userProgress\"\n          ngDefaultControl\n          name=\"lstTaskProgress\"\n        >\n          <ion-row style=\"justify-items: left;\">\n            <ion-col>\n              <ion-item [routerLink]=\"['./', item.userId]\" detail=\"true\">\n                <ion-avatar slot=\"start\" name=\"avatar\">\n                  <img src=\"../assets/images/avatar.svg\" />\n                </ion-avatar>\n                <ion-label class=\"ion-text-start ion-text-capitalize\">\n                  <ion-label color=\"primary\" mode=\"ios\" position=\"stacked\">\n                    <b>{{ item.userName }}</b></ion-label\n                  >\n\n                  <ion-label mode=\"ios\" position=\"stacked\">\n                    Total Tasks <b>({{ item.totaltasks }}) </b>\n                  </ion-label>\n                  <ion-label mode=\"ios\" position=\"stacked\">\n                    <ion-badge\n                      style=\"margin: 0px;\"\n                      [color]=\"\n                        item.avgProgress > 99\n                          ? 'success'\n                          : item.avgProgress < 50\n                          ? 'warning'\n                          : 'primary'\n                      \"\n                    >\n                      {{ item.avgProgress }}%\n                    </ion-badge>\n                  </ion-label>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"auto\">\n              <ion-icon\n                color=\"primary\"\n                name=\"chatbox-ellipses-outline\"\n                style=\"\n                  flex: left;\n                  margin-top: 10px;\n                  margin-left: 5px;\n                  margin-right: 5px;\n                  width: 20px;\n                  height: 20px;\n                \"\n                class=\"ion-text-start\"\n              ></ion-icon>\n              <!-- <ion-icon\n              [routerLink]=\"['/tasktracker','chat',user? user.email:'',user? user.userId:'']\"\n              color=\"primary\"\n              name=\"chatbox-ellipses-outline\"\n              style=\"\n                flex: left;\n                margin-top: 10px;\n                margin-left: 5px;\n                margin-right: 5px;\n                width: 20px;\n                height: 20px;\n              \"\n              class=\"ion-text-start\"\n            ></ion-icon> -->\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-today-tasks *ngIf='checkTeam.value ==\"calendar\"'></app-today-tasks>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserTasksUserTasksPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid no-padding ion-no-margin>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-buttons slot=\"start\">\n                <ion-back-button\n                  text=\"\"\n                  defaultHref=\"tasktracker/team-progress\"\n               \n                ></ion-back-button>\n              </ion-buttons>\n\n              <ion-label slot=\"\" color=\"primary\">\n                <b> {{user.userName}}</b>\n              </ion-label>\n              <ion-avatar slot=\"start\" name=\"avatar\">\n                <img src=\"../assets/images/avatar.svg\" />\n              </ion-avatar>\n            </ion-item>\n          </ion-col> </ion-row\n        ><ion-row>\n          <ion-col size=\"auto\">\n            <ion-chip outline color=\"primary\">\n              <ion-label> Tasks <b>({{userProgress.length}}) </b></ion-label>\n            </ion-chip>\n          </ion-col>\n          <ion-col size=\"auto\">\n            <ion-chip outline color=\"warning\">\n              <ion-label>\n                In-Progress <b>({{getTotalInProgress()}}) </b>\n              </ion-label>\n            </ion-chip>\n          </ion-col>\n          <ion-col size=\"auto\">\n            <ion-chip outline color=\"success\">\n              <ion-label> Done <b>({{getTotalCompleted()}}) </b> </ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-row>\n        <ion-list>\n          <ion-row\n            *ngFor=\"let item of userProgress; let i = index\"\n            style=\"justify-items: left;\"\n          >\n            <ion-col>\n              <ion-item       [routerLink]=\"['/', 'tasktracker', 'taskview', item.id]\"\n              detail=\"true\">\n                <ion-label\n                  class=\"ion-text-start ion-text-capitalize ion-text-wrap\"\n                >\n                  <h3><b> {{i+1}}- </b>{{ item.task }}</h3>\n\n                  <ion-note size=\"samll\" slot=\"start\" class=\"default\" color=\"secondary\">\n                    <i style=\"font-size: smaller;\"> {{item.taskdate|date}}</i>\n                  </ion-note>\n                </ion-label>\n\n                <ion-badge\n                  [color]=\"\n                      item.progress > 0.99\n                        ? 'success'\n                        : item.progress < 0.50\n                        ? 'warning'\n                        : 'primary'\n                    \"\n                >\n                  {{ item.progress|percent }}\n                </ion-badge>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Components/today-tasks/users-progress.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/Components/today-tasks/users-progress.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTodayTasksUsersProgressComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".popover-content {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .popover-content {\n  background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODI2L3NyYy9hcHAvQ29tcG9uZW50cy90b2RheS10YXNrcy91c2Vycy1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy90b2RheS10YXNrcy91c2Vycy1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUUsdUVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy90b2RheS10YXNrcy91c2Vycy1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3BvdmVyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICB9XHJcbiAgXHJcbiAgLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuICAubXktY3VzdG9tLWNsYXNzIC5wb3BvdmVyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICB9IiwiLnBvcG92ZXItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG59XG5cbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXG4ubXktY3VzdG9tLWNsYXNzIC5wb3BvdmVyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/today-tasks/users-progress.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Components/today-tasks/users-progress.component.ts ***!
    \********************************************************************/

  /*! exports provided: TodayTasksComponent */

  /***/
  function srcAppComponentsTodayTasksUsersProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodayTasksComponent", function () {
      return TodayTasksComponent;
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


    var src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/report.service */
    "./src/app/Services/report.service.ts");
    /* harmony import */


    var src_app_Models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Models/user */
    "./src/app/Models/user.ts");
    /* harmony import */


    var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/users.service */
    "./src/app/Services/users.service.ts");
    /* harmony import */


    var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/authService.service */
    "./src/app/Services/authService.service.ts");

    var TodayTasksComponent = /*#__PURE__*/function () {
      function TodayTasksComponent(repServ, usrServ, auth) {
        _classCallCheck(this, TodayTasksComponent);

        this.repServ = repServ;
        this.usrServ = usrServ;
        this.auth = auth;
        this.userProgress = new Array();
        this.tasks = new Array();
        this.users = new Array();
        this.user = new src_app_Models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.nodata = false;
        this.isLoaded = false; //Get All Users

        this.getUsersTodayTasks();
        this.nodata = false;
      }

      _createClass(TodayTasksComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.auth.getLoggedUser(); // this.doRefresh();
          //  this.isLoaded = true;
          //  this.getTotalUserTasks();
          // this.userProgress = this.getUsersTodayTasks();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {}
      }, {
        key: "getUsersTodayTasks",
        value: function getUsersTodayTasks() {
          var _this = this;

          //  if (!this.isLoaded) {
          this.repServ.getTasksToday().then(function (data) {
            _this.users = _this.usrServ.usersList;
            _this.tasks = data;
            var userProgAr = new Array();
            console.log("ionViewWillEnter this.tasks", _this.tasks);

            var _iterator = _createForOfIteratorHelper(_this.tasks),
                _step;

            try {
              var _loop = function _loop() {
                var t = _step.value;
                var obj = {
                  id: t.id,
                  task: t.task,
                  taskdate: t.taskdate,
                  userid: t.userid,
                  userName: _this.users.find(function (u) {
                    return u.userId + "" == t.userid;
                  }).userName,
                  progress: _this.parsPercentage(t.progress)
                };
                console.log("   userProgAr.push(obj);", obj);
                userProgAr.push(obj);
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            console.log("getUsersTodayTasks", userProgAr);
            _this.userProgress = userProgAr;
            _this.userProgress.length < 1 ? _this.divMsg.nativeElement.style.display = "block" : "none";
          }); // }
        }
      }, {
        key: "parsPercentage",
        value: function parsPercentage(val) {
          return parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100;
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(e) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("UsersProgressComponent.doRefresh started");
                    _context.next = 3;
                    return new Promise(function () {
                      _this2.isLoaded = true;
                      setTimeout(function () {
                        _this2.getUsersTodayTasks();

                        e.target.complete(); // this.ionViewWillEnter();

                        _this2.isLoaded = false;
                      }, 1000);
                    })["catch"](function (error) {
                      return error;
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return TodayTasksComponent;
    }();

    TodayTasksComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]
      }, {
        type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
      }, {
        type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("divMsg")], TodayTasksComponent.prototype, "divMsg", void 0);
    TodayTasksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-today-tasks",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./today-tasks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/today-tasks/today-tasks.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./users-progress.component.scss */
      "./src/app/Components/today-tasks/users-progress.component.scss"))["default"]]
    })], TodayTasksComponent);
    /***/
  },

  /***/
  "./src/app/Models/user-progress.ts":
  /*!*****************************************!*\
    !*** ./src/app/Models/user-progress.ts ***!
    \*****************************************/

  /*! exports provided: UserProgress */

  /***/
  function srcAppModelsUserProgressTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProgress", function () {
      return UserProgress;
    });

    var UserProgress = function UserProgress(userid, username, avgProgress, totaltasks, totalInProgress, totalInCompeletd) {
      _classCallCheck(this, UserProgress);

      this.userId = userid;
      this.userName = username;
      this.avgProgress = avgProgress;
      this.totaltasks = totaltasks;
      this.totalInProgress = totalInProgress;
      this.totalInCompeletd = totalInCompeletd;
    };
    /***/

  },

  /***/
  "./src/app/Pages/team-progress/team-progress-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Pages/team-progress/team-progress-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TeamProgressPageRoutingModule */

  /***/
  function srcAppPagesTeamProgressTeamProgressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamProgressPageRoutingModule", function () {
      return TeamProgressPageRoutingModule;
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


    var _team_progress_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./team-progress.page */
    "./src/app/Pages/team-progress/team-progress.page.ts");

    var routes = [{
      path: "",
      component: _team_progress_page__WEBPACK_IMPORTED_MODULE_3__["TeamProgressPage"]
    }, {
      path: ":userid",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | user-tasks-user-tasks-module */
        "user-tasks-user-tasks-module").then(__webpack_require__.bind(null,
        /*! ../user-tasks/user-tasks.module */
        "./src/app/Pages/user-tasks/user-tasks.module.ts")).then(function (m) {
          return m.UserTasksModule;
        });
      }
    }];

    var TeamProgressPageRoutingModule = function TeamProgressPageRoutingModule() {
      _classCallCheck(this, TeamProgressPageRoutingModule);
    };

    TeamProgressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TeamProgressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/team-progress/team-progress.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Pages/team-progress/team-progress.module.ts ***!
    \*************************************************************/

  /*! exports provided: TeamProgressPageModule */

  /***/
  function srcAppPagesTeamProgressTeamProgressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamProgressPageModule", function () {
      return TeamProgressPageModule;
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


    var _team_progress_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./team-progress-routing.module */
    "./src/app/Pages/team-progress/team-progress-routing.module.ts");
    /* harmony import */


    var _team_progress_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./team-progress.page */
    "./src/app/Pages/team-progress/team-progress.page.ts");
    /* harmony import */


    var _user_tasks_user_tasks_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../user-tasks/user-tasks.page */
    "./src/app/Pages/user-tasks/user-tasks.page.ts");
    /* harmony import */


    var src_app_Components_today_tasks_users_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/Components/today-tasks/users-progress.component */
    "./src/app/Components/today-tasks/users-progress.component.ts");

    var TeamProgressPageModule = function TeamProgressPageModule() {
      _classCallCheck(this, TeamProgressPageModule);
    };

    TeamProgressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _team_progress_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamProgressPageRoutingModule"]],
      declarations: [_team_progress_page__WEBPACK_IMPORTED_MODULE_6__["TeamProgressPage"], _user_tasks_user_tasks_page__WEBPACK_IMPORTED_MODULE_7__["UserTasksPage"], src_app_Components_today_tasks_users_progress_component__WEBPACK_IMPORTED_MODULE_8__["TodayTasksComponent"]]
    })], TeamProgressPageModule);
    /***/
  },

  /***/
  "./src/app/Pages/team-progress/team-progress.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/Pages/team-progress/team-progress.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTeamProgressTeamProgressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RlYW0tcHJvZ3Jlc3MvdGVhbS1wcm9ncmVzcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/team-progress/team-progress.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Pages/team-progress/team-progress.page.ts ***!
    \***********************************************************/

  /*! exports provided: TeamProgressPage */

  /***/
  function srcAppPagesTeamProgressTeamProgressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamProgressPage", function () {
      return TeamProgressPage;
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


    var src_app_Models_user_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Models/user-progress */
    "./src/app/Models/user-progress.ts");
    /* harmony import */


    var src_app_Models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Models/user */
    "./src/app/Models/user.ts");
    /* harmony import */


    var src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/task-progress-service.service */
    "./src/app/Services/task-progress-service.service.ts");
    /* harmony import */


    var src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/report.service */
    "./src/app/Services/report.service.ts");
    /* harmony import */


    var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/users.service */
    "./src/app/Services/users.service.ts");
    /* harmony import */


    var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Services/tasks.service */
    "./src/app/Services/tasks.service.ts");
    /* harmony import */


    var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/Services/authService.service */
    "./src/app/Services/authService.service.ts");

    var TeamProgressPage = /*#__PURE__*/function () {
      function TeamProgressPage(datasev, repServ, usrServ, taskServ, auth) {
        _classCallCheck(this, TeamProgressPage);

        this.datasev = datasev;
        this.repServ = repServ;
        this.usrServ = usrServ;
        this.taskServ = taskServ;
        this.auth = auth;
        this.userProgress = new Array();
        this.tasks = new Array();
        this.users = new Array();
        this.user = new src_app_Models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.isLoaded = false;
        this.getUserProgress();
      }

      _createClass(TeamProgressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.auth.getLoggedUser(); //  this.isLoaded = true;
          //  this.getTotalUserTasks();
        } // ionViewWillLeave() {}
        // ionViewDidLeave() {}
        // ionViewDidEnter() {}

      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getUserProgress();
        }
      }, {
        key: "getUserProgress",
        value: function getUserProgress() {
          var _this3 = this;

          //  if (!this.isLoaded) {
          //Get All Users
          this.users = this.usrServ.usersList;
          var userProgAr = new Array();
          var tasksGroupByUsr = new Array();
          this.repServ.getTasks().subscribe(function (data) {
            console.log("ionViewWillEnter this.tasks", data);
            tasksGroupByUsr = data.reduce(function (r, a) {
              r[a.userid] = r[a.userid] || [];
              r[a.userid].push(a);
              return r;
            }, Object.create(null));
            new Promise(function (resolve) {
              resolve(tasksGroupByUsr);
            }).then(function (res) {
              console.log("Array<Array<Task>> ", res);
              return Array.of(res);
            }).then(function (res) {
              var taskid = ""; // Iterate over the grouped Array by  group by value :

              var _loop2 = function _loop2() {
                var id = _Object$keys[_i];
                var up = new src_app_Models_user_progress__WEBPACK_IMPORTED_MODULE_2__["UserProgress"]();
                var totaltasks = 0;
                var totalInProgress = 0;
                var totalInCompeletd = 0;
                var avgProgress = 0;
                var taskid = "";
                up.userId = id;
                up.userName = _this3.users.find(function (x) {
                  return x.userId == id;
                }).userName;
                var val = res[0][id];
                console.log("userid, val", id, val); //Get the Task Object from the arry

                for (var _i2 = 0, _Object$keys2 = Object.keys(val); _i2 < _Object$keys2.length; _i2++) {
                  var tid = _Object$keys2[_i2];
                  totaltasks++;
                  var percentage = 0;
                  percentage = _this3.parsPercentage(val[tid].progress);
                  var val2 = val[tid].task;

                  if (percentage < 100) {
                    console.log("if (percentage < 100) ", percentage, percentage < 100);
                    avgProgress = percentage + avgProgress;
                    taskid = val[tid].id;
                    totalInProgress++;
                    console.log(" totalInProgress++", totalInProgress, id);
                  } else if (percentage >= 100) ++totalInCompeletd;

                  console.log("tid, val2", tid, val2);
                }

                up.totaltasks = totaltasks;
                up.totalInCompeletd = totalInCompeletd;
                up.totalInProgress = totalInProgress;

                if (avgProgress > 0 && totalInProgress > 0) {
                  var avg = avgProgress / totalInProgress;
                  up.avgProgress = Number(avg.toFixed(2)); //round the number
                }

                userProgAr.push(up);
              };

              for (var _i = 0, _Object$keys = Object.keys(res[0]); _i < _Object$keys.length; _i++) {
                _loop2();
              }

              _this3.userProgress = userProgAr;
            }); //Group the Tasks By User ID
          });
          console.log("userProgAr", userProgAr);
          this.isLoaded = false; //  return userProgAr;
          // }
        }
      }, {
        key: "parsPercentage",
        value: function parsPercentage(val) {
          console.log("val", val);
          var progress = (parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100).toFixed(0);
          console.log("progress", progress);
          return Number((parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100).toFixed(0));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(e) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return new Promise(function () {
                      _this4.isLoaded = true;
                      setTimeout(function () {
                        _this4.ionViewWillEnter();

                        e.target.complete();
                        _this4.isLoaded = false;
                      }, 1500);
                    })["catch"](function (error) {
                      return error;
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }]);

      return TeamProgressPage;
    }();

    TeamProgressPage.ctorParameters = function () {
      return [{
        type: src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_4__["TaskProgressService"]
      }, {
        type: src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]
      }, {
        type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
      }, {
        type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"]
      }, {
        type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }];
    };

    TeamProgressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-team-progress",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./team-progress.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/team-progress/team-progress.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./team-progress.page.scss */
      "./src/app/Pages/team-progress/team-progress.page.scss"))["default"]]
    })], TeamProgressPage);
    /***/
  },

  /***/
  "./src/app/Pages/user-tasks/user-tasks.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/Pages/user-tasks/user-tasks.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserTasksUserTasksPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".popover-content {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .popover-content {\n  background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODI2L3NyYy9hcHAvUGFnZXMvdXNlci10YXNrcy91c2VyLXRhc2tzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvdXNlci10YXNrcy91c2VyLXRhc2tzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUUsdUVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvdXNlci10YXNrcy91c2VyLXRhc2tzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3BvdmVyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICB9XHJcbiAgXHJcbiAgLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuICAubXktY3VzdG9tLWNsYXNzIC5wb3BvdmVyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICB9IiwiLnBvcG92ZXItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG59XG5cbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXG4ubXktY3VzdG9tLWNsYXNzIC5wb3BvdmVyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/user-tasks/user-tasks.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Pages/user-tasks/user-tasks.page.ts ***!
    \*****************************************************/

  /*! exports provided: UserTasksPage */

  /***/
  function srcAppPagesUserTasksUserTasksPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTasksPage", function () {
      return UserTasksPage;
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


    var src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/task-progress-service.service */
    "./src/app/Services/task-progress-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_Models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/user */
    "./src/app/Models/user.ts");
    /* harmony import */


    var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/authService.service */
    "./src/app/Services/authService.service.ts");
    /* harmony import */


    var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/users.service */
    "./src/app/Services/users.service.ts");
    /* harmony import */


    var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Services/tasks.service */
    "./src/app/Services/tasks.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var UserTasksPage = /*#__PURE__*/function () {
      //  listingdata:Array<any> = [];
      function UserTasksPage(datasev, activeroute, aut, usrServ, taskServ, navCtr) {
        _classCallCheck(this, UserTasksPage);

        this.datasev = datasev;
        this.activeroute = activeroute;
        this.aut = aut;
        this.usrServ = usrServ;
        this.taskServ = taskServ;
        this.navCtr = navCtr;
        this.userProgress = [];
        this.tasks = new Array();
        this.user = Object.create(src_app_Models_user__WEBPACK_IMPORTED_MODULE_4__["User"]);
      }

      _createClass(UserTasksPage, [{
        key: "getUserTasks",
        value: function getUserTasks() {
          var _this5 = this;

          var userid;
          this.activeroute.paramMap.subscribe(function (param) {
            if (!param.has("userid")) {
              //console.log("return");
              return;
            }

            userid = Number.parseInt(param.get("userid"));
            _this5.user.userId = userid; // console.log(userid);

            _this5.taskServ.fetchMyTasks("" + userid).subscribe(function (tasks) {
              _this5.userProgress = tasks.slice();
            });
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtr.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          //  console.log("this.ionViewWillEnter");
          this.getUserTasks();
          this.user = this.usrServ.getUserById(this.user.userId); //console.log(this.userProgress);
        }
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {// console.log("this.ionViewDidLoad");
        }
      }, {
        key: "getTotalInProgress",
        value: function getTotalInProgress() {
          var _this6 = this;

          return this.userProgress.filter(function (x) {
            return _this6.parsPercentage(x.progress) < 100;
          }).slice().length;
        }
      }, {
        key: "getTotalCompleted",
        value: function getTotalCompleted() {
          var _this7 = this;

          return this.userProgress.filter(function (x) {
            return _this7.parsPercentage(x.progress) >= 100;
          }).slice().length;
        }
      }, {
        key: "parsPercentage",
        value: function parsPercentage(val) {
          return parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100;
        }
      }]);

      return UserTasksPage;
    }();

    UserTasksPage.ctorParameters = function () {
      return [{
        type: src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskProgressService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
      }, {
        type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
      }];
    };

    UserTasksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-user-tasks",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-tasks.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-tasks.page.scss */
      "./src/app/Pages/user-tasks/user-tasks.page.scss"))["default"]]
    })], UserTasksPage);
    /***/
  }
}]);
//# sourceMappingURL=team-progress-team-progress-module-es5.js.map