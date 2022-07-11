(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_currentbookingstatus_currentbookingstatus_module_ts"],{

/***/ 9635:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/currentbookingstatus/currentbookingstatus-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentbookingstatusPageRoutingModule": () => (/* binding */ CurrentbookingstatusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _currentbookingstatus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentbookingstatus.page */ 8908);




const routes = [
    {
        path: '',
        component: _currentbookingstatus_page__WEBPACK_IMPORTED_MODULE_0__.CurrentbookingstatusPage
    }
];
let CurrentbookingstatusPageRoutingModule = class CurrentbookingstatusPageRoutingModule {
};
CurrentbookingstatusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CurrentbookingstatusPageRoutingModule);



/***/ }),

/***/ 2820:
/*!***************************************************************************!*\
  !*** ./src/app/pages/currentbookingstatus/currentbookingstatus.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentbookingstatusPageModule": () => (/* binding */ CurrentbookingstatusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _currentbookingstatus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentbookingstatus-routing.module */ 9635);
/* harmony import */ var _currentbookingstatus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentbookingstatus.page */ 8908);







let CurrentbookingstatusPageModule = class CurrentbookingstatusPageModule {
};
CurrentbookingstatusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _currentbookingstatus_routing_module__WEBPACK_IMPORTED_MODULE_0__.CurrentbookingstatusPageRoutingModule
        ],
        declarations: [_currentbookingstatus_page__WEBPACK_IMPORTED_MODULE_1__.CurrentbookingstatusPage]
    })
], CurrentbookingstatusPageModule);



/***/ }),

/***/ 8908:
/*!*************************************************************************!*\
  !*** ./src/app/pages/currentbookingstatus/currentbookingstatus.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentbookingstatusPage": () => (/* binding */ CurrentbookingstatusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_currentbookingstatus_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./currentbookingstatus.page.html */ 4947);
/* harmony import */ var _currentbookingstatus_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentbookingstatus.page.scss */ 6875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let CurrentbookingstatusPage = class CurrentbookingstatusPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() {
    }
    menuOpen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__.MenuPage,
                cssClass: 'menuList',
            });
            yield popover.present();
        });
    }
};
CurrentbookingstatusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
CurrentbookingstatusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-currentbookingstatus',
        template: _raw_loader_currentbookingstatus_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_currentbookingstatus_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CurrentbookingstatusPage);



/***/ }),

/***/ 6875:
/*!***************************************************************************!*\
  !*** ./src/app/pages/currentbookingstatus/currentbookingstatus.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW50Ym9va2luZ3N0YXR1cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 4947:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/currentbookingstatus/currentbookingstatus.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Current Booking Status</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"innerShadower\">\n        <div class=\"flexBoxInner\">\n          <div class=\"leftOrderDetail\">\n            <div class=\"imgCrrentOrdr\">\n              <img src=\"assets/img/current-booking-1.png\">\n            </div>\n            <div class=\"currentProdDetail\">\n              <div>Order ID: 8374398</div>\n              <div style=\"font-weight: 600; margin: 5px 0;\">Volume Bloom</div>\n              <div>Body Lotion</div>\n            </div>\n          </div>\n          <div class=\"rightOrderDetail\">\n             <div><ion-icon name=\"repeat-outline\"></ion-icon> <span style=\"color: #2496ff;\">Reorder</span></div>\n             <div>Date: 20/11/2018</div> \n             <div style=\"font-weight: 600;\">Time left: 20 Min</div>\n             <div style=\"font-weight: 600;\">Time Alloted : 2 PM</div>\n          </div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>  \n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"bottom_action_buttons\">\n        <div class=\"saveButton\">\n          Modify Order\n        </div>\n        <div class=\"addToCartBtn\">\n          Cancel Order\n        </div>\n        </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_currentbookingstatus_currentbookingstatus_module_ts.js.map