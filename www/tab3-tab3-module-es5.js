function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tab3/tab3.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tab3/tab3.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-margin\">\r\n  <ion-toolbar>\r\n    <ion-icon\r\n      name=\"list-circle-outline\"\r\n      color=\"primary\"\r\n      size=\"large\"\r\n      slot=\"start\"\r\n      style=\"width: 24px !important;height: 24px !important;margin-right: 5px;margin-left: 5px;\"\r\n    ></ion-icon>\r\n    <ion-label slot=\"start\" color=\"primary\"> <p>My Tasks</p></ion-label>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <!-- <ion-button [routerLink]=\"['/', 'tasktracker', 'submit-my-progress', 'new']\"> -->\r\n      <ion-button (click)=\"openNewTaskModal()\">\r\n        <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid no-padding ion-no-margin>\r\n    <ion-row>\r\n      <ion-col\r\n        *ngIf=\"isLoading\"\r\n        size=\"12\"\r\n        size-lg=\"6\"\r\n        offset-med=\"3\"\r\n        offset-lg=\"3\"\r\n      >\r\n        <div class=\"ion-text-center\">\r\n          <ion-spinner color=\"primary\"></ion-spinner>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"loadedTasks.length <= 0\">\r\n      <ion-col size=\"12\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n        <ion-chip class=\"ion-text-center\" outline color=\"danger\">\r\n          <ion-label>\r\n            <b>You don't have any assigend tasks </b>\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"!isLoading && loadedTasks.length >0\">\r\n      <ion-col size=\"12\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n        <ion-row>\r\n          <ion-col size=\"auto\">\r\n            <ion-chip outline color=\"primary\">\r\n              <ion-label> Tasks <b>({{loadedTasks.length}}) </b></ion-label>\r\n            </ion-chip>\r\n          </ion-col>\r\n          <ion-col size=\"auto\">\r\n            <ion-chip outline color=\"warning\">\r\n              <ion-label> In-Progress <b>({{getTotalInProgress()}}) </b> </ion-label>\r\n            </ion-chip>\r\n          </ion-col>\r\n          <ion-col size=\"auto\">\r\n            <ion-chip outline color=\"success\">\r\n              <ion-label> Done <b>({{getTotalCompleted()}}) </b> </ion-label>\r\n            </ion-chip>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-list>\r\n          <ion-row\r\n            *ngFor=\"let tk of loadedTasks let i = index\"\r\n            style=\"justify-items: left;\"\r\n          >\r\n            <ion-col>\r\n              <ion-item-sliding #slidingItem>\r\n                <ion-item\r\n                  [routerLink]=\"['/', 'tasktracker', 'mytasks', tk.id ]\"\r\n                >\r\n                  <ion-label\r\n                    class=\"ion-text-start ion-text-capitalize ion-text-wrap\"\r\n                  >\r\n                    <h3><b> {{i+1}}- </b>{{ tk.task}}</h3>\r\n\r\n                    <ion-note size=\"samll\" slot=\"start\" class=\"default\">\r\n                      {{tk.taskdate}}\r\n                    </ion-note>\r\n                    <ion-badge\r\n                      slot=\"end\"\r\n                      style=\"float: right;\"\r\n                      [color]=\"\r\n                    tk.progress  > 0.99\r\n                          ? 'success'\r\n                          : tk.progress  < 0.50\r\n                          ? 'warning'\r\n                          : 'primary'\r\n                      \"\r\n                    >\r\n                      {{ tk.progress | percent}}\r\n                    </ion-badge>\r\n                  </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-item-options>\r\n                  <ion-item-option\r\n                    color=\"secondary\"\r\n                    (click)=\"onEdit(tk.id, slidingItem)\"\r\n                  >\r\n                    <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\r\n                  </ion-item-option>\r\n                  <ion-item-option color=\"danger\">\r\n                    <ion-icon\r\n                      name=\"trash\"\r\n                      slot=\"icon-only\"\r\n                      (click)=\"onDelete(tk, slidingItem)\"\r\n                    ></ion-icon>\r\n                  </ion-item-option>\r\n                </ion-item-options>\r\n              </ion-item-sliding>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/Pages/tab3/tab3-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/Pages/tab3/tab3-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppPagesTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
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


    var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/Pages/tab3/tab3.page.ts");

    var routes = [{
      path: '',
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
    }, {
      path: ':taskId',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | task-detial-task-detial-module */
        "task-detial-task-detial-module").then(__webpack_require__.bind(null,
        /*! ../task-detial/task-detial.module */
        "./src/app/Pages/task-detial/task-detial.module.ts")).then(function (m) {
          return m.TaskDetialPageModule;
        });
      }
    }, {
      path: 'new',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Components-new-task-new-task-component */
        "Components-new-task-new-task-component").then(__webpack_require__.bind(null,
        /*! ../../Components/new-task/new-task.component */
        "./src/app/Components/new-task/new-task.component.ts")).then(function (m) {
          return m.NewTaskComponent;
        });
      }
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/tab3/tab3.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/Pages/tab3/tab3.module.ts ***!
    \*******************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppPagesTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/Pages/tab3/tab3.page.ts");
    /* harmony import */


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/Pages/tab3/tab3-routing.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab3PageRoutingModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/Pages/tab3/tab3.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/Pages/tab3/tab3.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/tab3/tab3.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/Pages/tab3/tab3.page.ts ***!
    \*****************************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppPagesTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _Services_tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Services/tasks.service */
    "./src/app/Services/tasks.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_Pages_create_task_create_task_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Pages/create-task/create-task.page */
    "./src/app/Pages/create-task/create-task.page.ts");

    var Tab3Page = /*#__PURE__*/function () {
      function Tab3Page(tasksService, router, modalCtrl) {
        _classCallCheck(this, Tab3Page);

        this.tasksService = tasksService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.isLoading = false;
        this.isLoadingError = false;
        this.isRefreshing = false;
      }

      _createClass(Tab3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.taskSub = this.tasksService.myTasks.subscribe(function (tasks) {
            _this.loadedTasks = tasks.slice();
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          // this.loadedTasks = this.tasksService.myTasks;
          if (this.tasksService.loginedUser) {
            this.isLoading = true;
          } else {
            this.isLoadingError = true; //  return;
          } // Testing
          // TODO: Need to pass the right userId into fetchMyTasks


          this.tasksService.fetchMyTasks(this.tasksService.loginedUser.userId).subscribe(function () {
            _this2.isLoading = false;
          }); // Access API
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {}
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this3 = this;

          this.isRefreshing = true;
          setTimeout(function () {
            _this3.ionViewWillEnter();

            event.target.complete();
            _this3.isRefreshing = false;
          }, 2000);
        }
      }, {
        key: "onEdit",
        value: function onEdit(taskId, slidingItem) {
          console.log("Getting into onEdit");
          console.log("Tast ID is: ", taskId);
          slidingItem.close();
          this.router.navigate(["/", "tasktracker", "mytasks", taskId]);
        }
      }, {
        key: "openNewTaskModal",
        value: function openNewTaskModal() {
          this.modalCtrl.create({
            component: src_app_Pages_create_task_create_task_page__WEBPACK_IMPORTED_MODULE_5__["CreateTaskPage"]
          }).then(function (modalElement) {
            modalElement.present();
            return modalElement.onDidDismiss();
          }).then(function (resultData) {
            console.log("ResultData: ", resultData);
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(task, slidingItem) {
          slidingItem.close();
          this.tasksService.deleteTask(task);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.taskSub) {
            this.taskSub.unsubscribe();
          }
        }
      }, {
        key: "getTotalInProgress",
        value: function getTotalInProgress() {
          var _this4 = this;

          return this.loadedTasks.filter(function (x) {
            return _this4.parsPercentage(x.progress) < 100;
          }).slice().length;
        }
      }, {
        key: "getTotalCompleted",
        value: function getTotalCompleted() {
          var _this5 = this;

          return this.loadedTasks.filter(function (x) {
            return _this5.parsPercentage(x.progress) >= 100;
          }).slice().length;
        }
      }, {
        key: "parsPercentage",
        value: function parsPercentage(val) {
          return parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100;
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _Services_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tab3",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tab3/tab3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/Pages/tab3/tab3.page.scss"))["default"]]
    })], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map