(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-tasks-user-tasks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid no-padding ion-no-margin>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-buttons slot=\"start\">\n                <ion-back-button\n                  text=\"\"\n                  defaultHref=\"tasktracker/team-progress\"\n                ></ion-back-button>\n              </ion-buttons>\n\n              <ion-label slot=\"\" color=\"primary\">\n                <b> {{user.userName}}</b>\n              </ion-label>\n              <ion-avatar slot=\"start\" name=\"avatar\">\n                <!-- <img src=\"../assets/images/avatar.svg\" /> -->\n                <text-avatar  text ={{user.userName}}></text-avatar>\n              </ion-avatar>\n            </ion-item>\n          </ion-col> </ion-row\n        ><ion-row>\n          <ion-col size=\"auto\" (click)=\"getUserTasks()\">\n            <ion-chip outline color=\"primary\">\n              <ion-label>\n                Tasks <b>({{userProgressList.length}}) </b></ion-label\n              >\n            </ion-chip>\n          </ion-col>\n          <ion-col size=\"auto\" (click)=\"getInprogress()\">\n            <ion-chip outline color=\"warning\">\n              <ion-label>\n                In-Progress <b>({{getTotalInProgress()}}) </b>\n              </ion-label>\n            </ion-chip>\n          </ion-col>\n          <ion-col size=\"auto\" (click)=\"getCompleted()\">\n            <ion-chip outline color=\"success\">\n              <ion-label> Done <b>({{getTotalCompleted()}}) </b> </ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-row>\n        <ion-list>\n          <ion-row\n            *ngFor=\"let item of userProgress; let i = index\"\n            style=\"justify-items: left\"\n          >\n            <ion-col>\n              <ion-item\n                [routerLink]=\"['/', 'tasktracker', 'taskview', item.id]\"\n                detail=\"true\"\n              >\n                <ion-label\n                  class=\"ion-text-start ion-text-capitalize ion-text-wrap\"\n                >\n                  <h3><b> {{i+1}}- </b>{{ item.task }}</h3>\n\n                  <ion-note\n                    size=\"samll\"\n                    slot=\"start\"\n                    class=\"default\"\n                    color=\"secondary\"\n                  >\n                    <i style=\"font-size: smaller\"> {{item.taskdate|date}}</i>\n                  </ion-note>\n                </ion-label>\n\n                <ion-badge\n                  [color]=\"\n                      item.progress > 0.99\n                        ? 'success'\n                        : item.progress < 0.50\n                        ? 'warning'\n                        : 'primary'\n                    \"\n                >\n                  {{ item.progress|percent }}\n                </ion-badge>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/user-tasks/user-tasks-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UserTasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksRoutingModule", function() { return UserTasksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_tasks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-tasks.page */ "./src/app/Pages/user-tasks/user-tasks.page.ts");




var routes = [
    {
        path: '',
        component: _user_tasks_page__WEBPACK_IMPORTED_MODULE_3__["UserTasksPage"],
    }
];
var UserTasksRoutingModule = /** @class */ (function () {
    function UserTasksRoutingModule() {
    }
    UserTasksRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserTasksRoutingModule);
    return UserTasksRoutingModule;
}());



/***/ }),

/***/ "./src/app/Pages/user-tasks/user-tasks.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks.module.ts ***!
  \*******************************************************/
/*! exports provided: UserTasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksModule", function() { return UserTasksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Pages_user_tasks_user_tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pages/user-tasks/user-tasks-routing.module */ "./src/app/Pages/user-tasks/user-tasks-routing.module.ts");
/* harmony import */ var _Pages_user_tasks_user_tasks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pages/user-tasks/user-tasks.page */ "./src/app/Pages/user-tasks/user-tasks.page.ts");
/* harmony import */ var _directives_text_avatar_directive_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/text-avatar.directive.module */ "./src/app/directives/text-avatar.directive.module.ts");








var UserTasksModule = /** @class */ (function () {
    function UserTasksModule() {
    }
    UserTasksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _Pages_user_tasks_user_tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserTasksRoutingModule"],
                _directives_text_avatar_directive_module__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"]
            ],
            declarations: [_Pages_user_tasks_user_tasks_page__WEBPACK_IMPORTED_MODULE_6__["UserTasksPage"]]
        })
    ], UserTasksModule);
    return UserTasksModule;
}());



/***/ }),

/***/ "./src/app/Pages/user-tasks/user-tasks.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popover-content {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .popover-content {\n  background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODMwL3NyYy9hcHAvUGFnZXMvdXNlci10YXNrcy91c2VyLXRhc2tzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvdXNlci10YXNrcy91c2VyLXRhc2tzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUUsdUVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvdXNlci10YXNrcy91c2VyLXRhc2tzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3BvdmVyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICB9XHJcbiAgXHJcbiAgLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuICAubXktY3VzdG9tLWNsYXNzIC5wb3BvdmVyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICB9IiwiLnBvcG92ZXItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG59XG5cbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXG4ubXktY3VzdG9tLWNsYXNzIC5wb3BvdmVyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Pages/user-tasks/user-tasks.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks.page.ts ***!
  \*****************************************************/
/*! exports provided: UserTasksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksPage", function() { return UserTasksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/task-progress-service.service */ "./src/app/Services/task-progress-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/user */ "./src/app/Models/user.ts");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");
/* harmony import */ var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/users.service */ "./src/app/Services/users.service.ts");
/* harmony import */ var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/tasks.service */ "./src/app/Services/tasks.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");









var UserTasksPage = /** @class */ (function () {
    //  listingdata:Array<any> = [];
    function UserTasksPage(datasev, activeroute, aut, usrServ, taskServ, navCtr) {
        this.datasev = datasev;
        this.activeroute = activeroute;
        this.aut = aut;
        this.usrServ = usrServ;
        this.taskServ = taskServ;
        this.navCtr = navCtr;
        this.userProgress = [];
        this.userProgressList = [];
        this.tasks = new Array();
        this.user = Object.create(src_app_Models_user__WEBPACK_IMPORTED_MODULE_4__["User"]);
    }
    UserTasksPage.prototype.getUserTasks = function () {
        var _this = this;
        var userid;
        this.activeroute.paramMap.subscribe(function (param) {
            if (!param.has("userid")) {
                //console.log("return");
                return;
            }
            userid = Number.parseInt(param.get("userid"));
            _this.user.userId = userid;
            // console.log(userid);
            _this.taskServ.fetchMyTasks("" + userid).subscribe(function (tasks) {
                _this.userProgressList = tasks.slice();
                _this.userProgress = new Array();
                _this.userProgress = tasks.slice();
            });
        });
    };
    UserTasksPage.prototype.back = function () {
        this.navCtr.back();
    };
    UserTasksPage.prototype.ngOnInit = function () { };
    UserTasksPage.prototype.ionViewWillEnter = function () {
        //  console.log("this.ionViewWillEnter");
        this.getUserTasks();
        this.user = this.usrServ.getUserById(this.user.userId);
        //console.log(this.userProgress);
    };
    UserTasksPage.prototype.ionViewDidLoad = function () {
        // console.log("this.ionViewDidLoad");
    };
    UserTasksPage.prototype.getInprogress = function () {
        var _this = this;
        this.userProgress = new Array();
        this.userProgress = this.userProgressList.filter(function (x) { return _this.parsPercentage(x.progress) < 100; }).slice();
    };
    UserTasksPage.prototype.getCompleted = function () {
        var _this = this;
        this.userProgress = new Array();
        this.userProgress = this.userProgressList.filter(function (x) { return _this.parsPercentage(x.progress) >= 100; }).slice();
        console.log("getCompleted", this.userProgress);
    };
    UserTasksPage.prototype.getTotalInProgress = function () {
        var _this = this;
        return this.userProgressList.filter(function (x) { return _this.parsPercentage(x.progress) < 100; }).slice().length;
    };
    UserTasksPage.prototype.getTotalCompleted = function () {
        var _this = this;
        return this.userProgressList.filter(function (x) { return _this.parsPercentage(x.progress) >= 100; }).slice().length;
    };
    UserTasksPage.prototype.parsPercentage = function (val) {
        return parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100;
    };
    UserTasksPage.ctorParameters = function () { return [
        { type: src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskProgressService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
        { type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] }
    ]; };
    UserTasksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-tasks",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-tasks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-tasks.page.scss */ "./src/app/Pages/user-tasks/user-tasks.page.scss")).default]
        })
    ], UserTasksPage);
    return UserTasksPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-tasks-user-tasks-module.js.map