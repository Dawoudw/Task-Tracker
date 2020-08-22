(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-new-task-new-task-component"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/new-task/new-task.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/new-task/new-task.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onCancel()\" id=\"backbutton\" #backbutton>\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title size=\"small\" color=\"primary\" class=\"ion-text-center\"\n      ><h4>Create New Task</h4></ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Task Title</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Task Details</ion-label>\n            <ion-textarea\n              rows=\"10\"\n              cols=\"20\"\n              autocomplete\n              autocorrect\n              formControlName=\"description\"\n            ></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col\n          size-sm=\"6\"\n          offset-sm=\"3\"\n          size-md=\"6\"\n          offset-sm=\"3\"\n          size-lg=\"4\"\n          offset-sm=\"4\"\n        >\n          <ion-item deatil=\"false\">\n            <ion-button class=\"primary\" expand=\"block\" (click)=\"onCreateTask()\"\n              >Create</ion-button\n            >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Components/new-task/new-task.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Components/new-task/new-task.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbmV3LXRhc2svbmV3LXRhc2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Components/new-task/new-task.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/new-task/new-task.component.ts ***!
  \***********************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/tasks.service */ "./src/app/Services/tasks.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let NewTaskComponent = class NewTaskComponent {
    constructor(modalCtrl, tasksService, router, navCtrl
    // private formBuilder: FormBuilder
    ) {
        this.modalCtrl = modalCtrl;
        this.tasksService = tasksService;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    // @HostListener('click')
    ngOnDestroy() {
        this.router.navigate(['tasktracker/mytasks']);
        // this.backbuttonSubscription.unsubscribe();
    }
    ngOnInit() {
        // const event = fromEvent(document, 'backbutton');
        // this.backbuttonSubscription = event.subscribe(async () => {
        //     const modal = await this.modalCtrl.getTop();
        //     if (modal) {
        //         modal.dismiss();
        //     }
        // });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            })
        });
    }
    onCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //await this.navCtrl.back() ;
            //  await this.modalCtrl.dismiss(null, 'cancel').then(()=>{ this.router.navigate(['tasktracker/mytasks'])});
        });
    }
    onCreateTask() {
        console.log("New-Task Page From FORM: ", this.form.value.title, this.form.value.description);
        // this.tasksService.addTask(this.form.value.title, this.form.value.description).subscribe();
        this.form.reset();
        // this.modalCtrl.dismiss(null, 'task created');
    }
};
NewTaskComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
NewTaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-task',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/new-task/new-task.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-task.component.scss */ "./src/app/Components/new-task/new-task.component.scss")).default]
    })
], NewTaskComponent);



/***/ })

}]);
//# sourceMappingURL=Components-new-task-new-task-component-es2015.js.map