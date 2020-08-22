(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-progress-team-progress-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/team-progress/team-progress.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/team-progress/team-progress.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header class=\"ion-no-margin\">\n  <ion-toolbar>\n    <ion-icon\n      name=\"people-outline\"\n      color=\"primary\"\n      size=\"large\"\n      slot=\"start\"\n      style=\"\n        width: 24px !important;\n        height: 24px !important;\n        margin-right: 5px;\n        margin-left: 5px;\n      \"\n    ></ion-icon>\n    <ion-label slot=\"start\" color=\"primary\"> <p>Team Progress</p></ion-label>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button [routerLink]=\"['/', 'tasktracker', 'submit-my-progress', 'new']\"> -->\n      <ion-button #btnRefresh id=\"btnRefresh\" (click)=\"doRefresh($event)\">\n        <ion-icon slot=\"icon-only\" name=\"sync-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-no-margin ; no-padding\">\n      <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\n        <div\n          style=\"\n            height: 0px;\n            text-align: center !important;\n            position: relative;\n            z-index: 1;\n          \"\n          *ngIf=\"isLoaded\"\n        >\n          <ion-spinner\n            style=\"position: relative; z-index: 2; top: 0px;\"\n            name=\"crescent\"\n          ></ion-spinner>\n        </div>\n\n        <ion-list\n          *ngFor=\"let item of userProgress; let i = index\"\n          [(ngModel)]=\"userProgress\"\n          ngDefaultControl\n          name=\"lstTaskProgress\"\n        >\n          <ion-row style=\"justify-items: left;\">\n            <ion-col>\n              <ion-item [routerLink]=\"['./', item.userId]\" detail=\"true\">\n                <ion-avatar slot=\"start\" name=\"avatar\">\n                  <img src=\"../assets/images/avatar.svg\" />\n                </ion-avatar>\n                <ion-label class=\"ion-text-start ion-text-capitalize\">\n                  <ion-label color=\"primary\" mode=\"ios\" position=\"stacked\">\n                    <b>{{ item.userName }}</b></ion-label\n                  >\n\n                  <ion-label mode=\"ios\" position=\"stacked\">\n                    Total Tasks <b>({{ item.totaltasks }}) </b>\n                  </ion-label>\n                  <ion-label mode=\"ios\" position=\"stacked\">\n                    <ion-badge\n                      style=\"margin: 0px;\"\n                      [color]=\"\n                        item.avgProgress > 99\n                          ? 'success'\n                          : item.avgProgress < 50\n                          ? 'warning'\n                          : 'primary'\n                      \"\n                    >\n                      {{ item.avgProgress }}%\n                    </ion-badge>\n                  </ion-label>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"auto\">\n              <ion-icon\n                color=\"primary\"\n                name=\"chatbox-ellipses-outline\"\n                style=\"\n                  flex: left;\n                  margin-top: 10px;\n                  margin-left: 5px;\n                  margin-right: 5px;\n                  width: 20px;\n                  height: 20px;\n                \"\n                class=\"ion-text-start\"\n              ></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid no-padding ion-no-margin>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-buttons slot=\"start\">\n                <ion-back-button\n                  text=\"\"\n                  defaultHref=\"tasktracker/team-progress\"\n                ></ion-back-button>\n              </ion-buttons>\n\n              <ion-label slot=\"\" color=\"primary\">\n                <b> {{user.userName}}</b>\n              </ion-label>\n              <ion-avatar slot=\"start\" name=\"avatar\">\n                <img src=\"../assets/images/avatar.svg\" />\n              </ion-avatar>\n            </ion-item>\n          </ion-col> </ion-row\n        ><ion-row>\n          <ion-col size=\"auto\">\n            <ion-chip outline color=\"primary\">\n              <ion-label> Tasks <b>({{userProgress.length}}) </b></ion-label>\n            </ion-chip>\n          </ion-col>\n          <ion-col size=\"auto\">\n            <ion-chip outline color=\"warning\">\n              <ion-label>\n                In-Progress <b>({{getTotalInProgress()}}) </b>\n              </ion-label>\n            </ion-chip>\n          </ion-col>\n          <ion-col size=\"auto\">\n            <ion-chip outline color=\"success\">\n              <ion-label> Done <b>({{getTotalCompleted()}}) </b> </ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-row>\n        <ion-list>\n          <ion-row\n            *ngFor=\"let item of userProgress; let i = index\"\n            style=\"justify-items: left;\"\n          >\n            <ion-col>\n              <ion-item>\n                <ion-label\n                  class=\"ion-text-start ion-text-capitalize ion-text-wrap\"\n                >\n                  <h3><b> {{i+1}}- </b>{{ item.task }}</h3>\n\n                  <ion-note size=\"samll\" slot=\"start\" class=\"default\">\n                    <i style=\"font-size: smaller;\"> {{item.taskdate}}</i>\n                  </ion-note>\n                </ion-label>\n\n                <ion-badge\n                  [color]=\"\n                      item.progress > 0.99\n                        ? 'success'\n                        : item.progress < 0.50\n                        ? 'warning'\n                        : 'primary'\n                    \"\n                >\n                  {{ item.progress|percent }}\n                </ion-badge>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Models/user-progress.ts":
/*!*****************************************!*\
  !*** ./src/app/Models/user-progress.ts ***!
  \*****************************************/
/*! exports provided: UserProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProgress", function() { return UserProgress; });
class UserProgress {
    constructor(userid, username, avgProgress, totaltasks, totalInProgress, totalInCompeletd) {
        this.userId = userid;
        this.userName = username;
        this.avgProgress = avgProgress;
        this.totaltasks = totaltasks;
        this.totalInProgress = totalInProgress;
        this.totalInCompeletd = totalInCompeletd;
    }
}


/***/ }),

/***/ "./src/app/Pages/team-progress/team-progress-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Pages/team-progress/team-progress-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TeamProgressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProgressPageRoutingModule", function() { return TeamProgressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_progress_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-progress.page */ "./src/app/Pages/team-progress/team-progress.page.ts");




const routes = [
    {
        path: "",
        component: _team_progress_page__WEBPACK_IMPORTED_MODULE_3__["TeamProgressPage"],
    },
    {
        path: ":userid",
        loadChildren: () => __webpack_require__.e(/*! import() | user-tasks-user-tasks-module */ "user-tasks-user-tasks-module").then(__webpack_require__.bind(null, /*! ../user-tasks/user-tasks.module */ "./src/app/Pages/user-tasks/user-tasks.module.ts")).then((m) => m.UserTasksModule),
    },
];
let TeamProgressPageRoutingModule = class TeamProgressPageRoutingModule {
};
TeamProgressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamProgressPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/team-progress/team-progress.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/team-progress/team-progress.module.ts ***!
  \*************************************************************/
/*! exports provided: TeamProgressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProgressPageModule", function() { return TeamProgressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _team_progress_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-progress-routing.module */ "./src/app/Pages/team-progress/team-progress-routing.module.ts");
/* harmony import */ var _team_progress_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-progress.page */ "./src/app/Pages/team-progress/team-progress.page.ts");
/* harmony import */ var _user_tasks_user_tasks_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-tasks/user-tasks.page */ "./src/app/Pages/user-tasks/user-tasks.page.ts");








let TeamProgressPageModule = class TeamProgressPageModule {
};
TeamProgressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _team_progress_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamProgressPageRoutingModule"]
        ],
        declarations: [_team_progress_page__WEBPACK_IMPORTED_MODULE_6__["TeamProgressPage"], _user_tasks_user_tasks_page__WEBPACK_IMPORTED_MODULE_7__["UserTasksPage"]]
    })
], TeamProgressPageModule);



/***/ }),

/***/ "./src/app/Pages/team-progress/team-progress.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/Pages/team-progress/team-progress.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RlYW0tcHJvZ3Jlc3MvdGVhbS1wcm9ncmVzcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Pages/team-progress/team-progress.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/Pages/team-progress/team-progress.page.ts ***!
  \***********************************************************/
/*! exports provided: TeamProgressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProgressPage", function() { return TeamProgressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Models_user_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/user-progress */ "./src/app/Models/user-progress.ts");
/* harmony import */ var src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/task-progress-service.service */ "./src/app/Services/task-progress-service.service.ts");
/* harmony import */ var src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/report.service */ "./src/app/Services/report.service.ts");
/* harmony import */ var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/users.service */ "./src/app/Services/users.service.ts");
/* harmony import */ var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/tasks.service */ "./src/app/Services/tasks.service.ts");







let TeamProgressPage = class TeamProgressPage {
    constructor(datasev, repServ, usrServ, taskServ) {
        this.datasev = datasev;
        this.repServ = repServ;
        this.usrServ = usrServ;
        this.taskServ = taskServ;
        this.userProgress = new Array();
        this.tasks = new Array();
        this.users = new Array();
        this.isLoaded = false;
        this.repServ.getTasks().subscribe((data) => {
            this.tasks = data;
            this.userProgress = this.getUserProgress();
        });
        //Get All Users
        this.users = this.usrServ.usersList;
    }
    ngOnInit() {
        this.doRefresh(undefined);
        //  this.isLoaded = true;
        //  this.getTotalUserTasks();
    }
    // ionViewWillLeave() {}
    // ionViewDidLeave() {}
    // ionViewDidEnter() {}
    ionViewWillEnter() {
        // this.userProgress = this.getUserProgress();
    }
    getUserProgress() {
        //  if (!this.isLoaded) {
        let userProgAr = new Array();
        console.log("ionViewWillEnter this.tasks", this.tasks);
        //Group the Tasks By User ID
        let tasksGroupByUsr = new Array();
        tasksGroupByUsr = this.tasks.reduce((r, a) => {
            r[a.userid] = r[a.userid] || [];
            r[a.userid].push(a);
            return r;
        }, Object.create(null));
        let prom = new Promise((resolve) => {
            resolve(tasksGroupByUsr);
        })
            .then((res) => {
            console.log("Array<Array<Task>> ", res);
            return Array.of(res);
        })
            .then((res) => {
            let up;
            let totaltasks, totalInProgress, totalInCompeletd, avgProgress;
            // Iterate over the grouped Array by  group by value :
            for (let id of Object.keys(res[0])) {
                up = new src_app_Models_user_progress__WEBPACK_IMPORTED_MODULE_2__["UserProgress"]();
                totaltasks = totalInProgress = totalInCompeletd = avgProgress = 0;
                up.userId = id;
                up.userName = this.users.find((x) => x.userId == id).userName;
                let val = res[0][id];
                console.log("id, val", id, val);
                //Get the Task Object from the arry
                for (let tid of Object.keys(val)) {
                    ++totaltasks;
                    let percentage = this.parsPercentage(val[tid].progress);
                    let val2 = val[tid].task;
                    if (percentage < 100) {
                        avgProgress += percentage;
                        ++totalInProgress;
                    }
                    if (percentage >= 100)
                        ++totalInCompeletd;
                    console.log("tid, val2", tid, val2);
                }
                up.totaltasks = totaltasks;
                up.totalInCompeletd = totalInCompeletd;
                up.totalInProgress = totalInProgress;
                if (avgProgress > 0 && totalInProgress > 0)
                    avgProgress = avgProgress / totalInProgress;
                up.avgProgress = Number(avgProgress.toFixed(2)); //round the number
                userProgAr.push(up);
            }
        });
        console.log("userProgAr", userProgAr);
        this.isLoaded = false;
        return userProgAr;
        // }
    }
    parsPercentage(val) {
        return Number((parseFloat(val) >= 1 ? parseFloat(val) : parseFloat(val) * 100).toFixed(0));
    }
    doRefresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoaded = true;
            yield new Promise(() => {
                event.target ? (event.target.disabled = true) : false;
                setTimeout(() => {
                    this.ionViewWillEnter();
                    event.target ? (event.target.disabled = false) : true;
                    this.isLoaded = false;
                }, 1500);
            }).catch((error) => error);
        });
    }
};
TeamProgressPage.ctorParameters = () => [
    { type: src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_3__["TaskProgressService"] },
    { type: src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] },
    { type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_6__["TasksService"] }
];
TeamProgressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-team-progress",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team-progress.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/team-progress/team-progress.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team-progress.page.scss */ "./src/app/Pages/team-progress/team-progress.page.scss")).default]
    })
], TeamProgressPage);



/***/ }),

/***/ "./src/app/Pages/user-tasks/user-tasks.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popover-content {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .popover-content {\n  background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdXNlci10YXNrcy9EOlxcV29ya1xcTFRJXFxQcm9qZWN0c1xcSW9uaWNcXFRhc2tUcmFja2VyL3NyY1xcYXBwXFxQYWdlc1xcdXNlci10YXNrc1xcdXNlci10YXNrcy5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3VzZXItdGFza3MvdXNlci10YXNrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVFLHVFQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3VzZXItdGFza3MvdXNlci10YXNrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wb3Zlci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbiAgLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfSIsIi5wb3BvdmVyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xuLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzIyMjtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/task-progress-service.service */ "./src/app/Services/task-progress-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/user */ "./src/app/Models/user.ts");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");
/* harmony import */ var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/users.service */ "./src/app/Services/users.service.ts");
/* harmony import */ var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/tasks.service */ "./src/app/Services/tasks.service.ts");








let UserTasksPage = class UserTasksPage {
    //  listingdata:Array<any> = [];
    constructor(datasev, activeroute, aut, usrServ, taskServ) {
        this.datasev = datasev;
        this.activeroute = activeroute;
        this.aut = aut;
        this.usrServ = usrServ;
        this.taskServ = taskServ;
        this.userProgress = [];
        this.tasks = new Array();
        this.user = Object.create(src_app_Models_user__WEBPACK_IMPORTED_MODULE_4__["User"]);
    }
    getUserTasks() {
        let userid;
        this.activeroute.paramMap.subscribe((param) => {
            if (!param.has("userid")) {
                //console.log("return");
                return;
            }
            userid = Number.parseInt(param.get("userid"));
            this.user.userId = userid;
            // console.log(userid);
            this.taskServ.fetchMyTasks("" + userid).subscribe((tasks) => {
                this.userProgress = tasks.slice();
            });
        });
    }
    ngOnInit() { }
    ionViewWillEnter() {
        //  console.log("this.ionViewWillEnter");
        this.getUserTasks();
        this.user = this.usrServ.getUserById(this.user.userId);
        //console.log(this.userProgress);
    }
    ionViewDidLoad() {
        // console.log("this.ionViewDidLoad");
    }
    getTotalInProgress() {
        return this.userProgress.filter((x) => this.parsPercentage(x.progress) < 100).slice().length;
    }
    getTotalCompleted() {
        return this.userProgress.filter((x) => this.parsPercentage(x.progress) >= 100).slice().length;
    }
    parsPercentage(val) {
        return parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100;
    }
};
UserTasksPage.ctorParameters = () => [
    { type: src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskProgressService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
    { type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"] }
];
UserTasksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user-tasks",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-tasks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-tasks.page.scss */ "./src/app/Pages/user-tasks/user-tasks.page.scss")).default]
    })
], UserTasksPage);



/***/ })

}]);
//# sourceMappingURL=team-progress-team-progress-module-es2015.js.map