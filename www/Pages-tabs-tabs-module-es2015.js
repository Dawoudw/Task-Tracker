(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tabs/tabs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar #tasktracker id=\"tasktracker\" tabs=\"tasktracker\">\r\n      <ion-tab-button tab=\"home\">\r\n        <ion-icon name=\"home\"></ion-icon>\r\n        <ion-label\r\n          mode=\"md\"\r\n          style=\"font-size: smaller; font-stretch: condensed;\"\r\n          >Home</ion-label\r\n        >\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"mytasks\">\r\n        <ion-icon name=\"list-outline\"></ion-icon>\r\n        <ion-label\r\n          mode=\"md\"\r\n          style=\"font-size: smaller; font-stretch: condensed;\"\r\n          >My Tasks</ion-label\r\n        >\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"teamprogress\">\r\n        <ion-icon name=\"people-outline\"></ion-icon>\r\n        <ion-label\r\n          mode=\"md\"\r\n          style=\"font-size: smaller; font-stretch: condensed;\"\r\n          >Team Progress</ion-label\r\n        >\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"reports\">\r\n        <ion-icon name=\"bar-chart-outline\"></ion-icon>\r\n        <ion-label\r\n          mode=\"md\"\r\n          style=\"font-size: smaller; font-stretch: condensed;\"\r\n          >Reports</ion-label\r\n        >\r\n      </ion-tab-button>\r\n      \r\n      <ion-tab-button tab=\"group-chat\">\r\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n        <ion-label\r\n          mode=\"md\"\r\n          style=\"font-size: smaller; font-stretch: condensed;\"\r\n          >Chat</ion-label\r\n        >\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/Pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/Pages/tabs/tabs.page.ts");
/* harmony import */ var src_app_Services_activate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/activate.guard */ "./src/app/Services/activate.guard.ts");





const routes = [
    {
        path: "tasktracker",
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        // loadChildren: "../tabs/tabs.module#TabsPageModule",
        // pathMatch:'prefix',
        children: [
            {
                path: "home",
                children: [
                    {
                        path: "",
                        loadChildren: "../home/home.module#HomePageModule",
                    },
                ],
            },
            {
                path: "teamprogress",
                children: [
                    {
                        path: "",
                        loadChildren: "../team-progress/team-progress.module#TeamProgressPageModule",
                    },
                ],
            },
            {
                path: "taskview",
                children: [
                    {
                        path: ":taskid",
                        loadChildren: "../task-subview/task-subview.module#TaskSubviewPageModule",
                    },
                ],
            },
            {
                path: "create-subtask",
                children: [
                    {
                        path: ":taskid",
                        canActivate: [src_app_Services_activate_guard__WEBPACK_IMPORTED_MODULE_4__["ActivateGuard"]],
                        loadChildren: "../create-subtask/create-subtask.module#CreateSubtaskPageModule",
                    },
                ],
            },
            {
                path: "mytasks",
                canActivate: [src_app_Services_activate_guard__WEBPACK_IMPORTED_MODULE_4__["ActivateGuard"]],
                children: [
                    {
                        path: "",
                        loadChildren: "../tab3/tab3.module#Tab3PageModule",
                    },
                ],
            },
            {
                path: "reports",
                children: [
                    {
                        path: "",
                        loadChildren: "../tab2/tab2.module#Tab2PageModule",
                    },
                ],
            },
            {
                path: "group-chat",
                children: [
                    {
                        path: "",
                        loadChildren: "../group-chat/group-chat.module#GroupChatPageModule",
                    },
                ],
            },
            // {
            //   path: 'chat/:id',
            //   children: [
            //     {
            //       path: "",
            //       loadChildren: "../chat/chat.module#ChatPageModule",
            //     },
            //   ],
            // },
            // {
            //   path: "chat",
            //   children: [
            //     {
            //       path: "",
            //       children: [
            //         {
            //           path: ":email/:userid",
            //           loadChildren: "../chat/chat.module#ChatPageModule",
            //         },
            //       ],
            //     },
            //   ],
            // },
            // {
            //   path: "login",
            //   children: [
            //     {
            //       path: "",
            //       loadChildren: "../login/login.module#LoginPageModule",
            //     },
            //   ],
            // },
            {
                path: "",
                redirectTo: "tasktracker/home",
                pathMatch: "full",
            },
        ],
    },
    {
        path: "",
        redirectTo: "tasktracker/home",
        pathMatch: "full",
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);

/* Old Configs

// const routes: Routes = [
//   {
//     path: "",
//     component: TabsPage,
//       // pathMatch: "prefix",
//     // pathMatch:"full",
//     // redirectTo:"team-progress",
//     children: [
//       {
//         path: "team-progress", // loadChildren: () => //   import("../tab1/tab1.module").then((m) => m.Tab1PageModule), // loadChildren:'../tab1/tab1.module#Tab1PageModule',
//         //component:Tab1Page, //Eager Load
//         loadChildren: () =>
//           import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
//       },
//       {
//         path: "reports",
//         loadChildren: () =>
//           import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
//       },
//       {
//         path: "mytasks",
//         loadChildren: () =>
//           import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
//         canActivate: [ActivateGuard],
//       },
//       {
//         path: "home",
//         loadChildren: () =>
//           import("../home/home.module").then((m) => m.HomePageModule),

//       },
//     ],
//   },
// ];
*/


/***/ }),

/***/ "./src/app/Pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/Pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/Pages/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]],
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/Pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");
/* harmony import */ var src_app_Services_theme_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/theme-service.service */ "./src/app/Services/theme-service.service.ts");




let TabsPage = class TabsPage {
    constructor(auth, themeServ) {
        this.auth = auth;
        this.themeServ = themeServ;
    }
    ngOnInit() {
        let us = this.auth.getLoggedUser();
        console.log("TabsPage-ngOnInit-ngOnInit", us);
        if (us) {
            this.auth.userChange.emit(us);
        }
    }
};
TabsPage.ctorParameters = () => [
    { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_Services_theme_service_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tabs",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/Pages/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=Pages-tabs-tabs-module-es2015.js.map