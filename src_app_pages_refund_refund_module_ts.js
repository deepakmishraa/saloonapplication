(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_refund_refund_module_ts"],{

/***/ 5989:
/*!*******************************************************!*\
  !*** ./src/app/pages/refund/refund-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundPageRoutingModule": () => (/* binding */ RefundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _refund_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refund.page */ 7495);




const routes = [
    {
        path: '',
        component: _refund_page__WEBPACK_IMPORTED_MODULE_0__.RefundPage
    }
];
let RefundPageRoutingModule = class RefundPageRoutingModule {
};
RefundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RefundPageRoutingModule);



/***/ }),

/***/ 3651:
/*!***********************************************!*\
  !*** ./src/app/pages/refund/refund.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundPageModule": () => (/* binding */ RefundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _refund_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refund-routing.module */ 5989);
/* harmony import */ var _refund_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refund.page */ 7495);







let RefundPageModule = class RefundPageModule {
};
RefundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _refund_routing_module__WEBPACK_IMPORTED_MODULE_0__.RefundPageRoutingModule
        ],
        declarations: [_refund_page__WEBPACK_IMPORTED_MODULE_1__.RefundPage]
    })
], RefundPageModule);



/***/ }),

/***/ 7495:
/*!*********************************************!*\
  !*** ./src/app/pages/refund/refund.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundPage": () => (/* binding */ RefundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_refund_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./refund.page.html */ 736);
/* harmony import */ var _refund_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refund.page.scss */ 2277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let RefundPage = class RefundPage {
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
RefundPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
RefundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-refund',
        template: _raw_loader_refund_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_refund_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RefundPage);



/***/ }),

/***/ 2277:
/*!***********************************************!*\
  !*** ./src/app/pages/refund/refund.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 736:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refund/refund.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Refund Initiated</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"bookingProductBox\">\n        <div class=\"leftProductImg\">\n          <div class=\"productImgBking\">\n            <img src=\"assets/img/booking-1.png\">\n          </div>\n          <div class=\"productImgDtl\">\n            <div class=\"prdctNameBking\">Volume Bloom</div>\n            <div class=\"productSubMane\">Body Lotion</div>\n          </div>\n        </div>\n\n        <div class=\"rightPriceBox\">\n          <div class=\"quantityRounder\">1</div>\n          <div class=\"\">&#8377;1200</div>\n        </div>\n      </div>\n    </ion-col> \n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"paymentOptUsed flexBox\">\n        <div class=\"txtPaymentOpt\">Payment Refund</div>\n        <div class=\"selPaymentOpt\">\n          <ion-icon style=\"color: #0c951f;\" name=\"checkmark-circle-outline\"></ion-icon>\n            Wallet\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"totalOrdrDtl\" style=\"font-size: 14px;\">\n        <div class=\"\">Total Refund</div>\n        <div>&#8377;1200</div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"6\">\n        <div class=\"headingCancellation\" style=\"padding-left: 10px; font-size: 14px;\">Cancellation Reason</div>\n    </ion-col>\n    <ion-col size=\"6\" class=\"text-right\">Treatment Postpone</ion-col>\n  </ion-row>\n\n</ion-content>\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_refund_refund_module_ts.js.map