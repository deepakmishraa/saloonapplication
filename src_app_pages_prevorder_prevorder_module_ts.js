(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_prevorder_prevorder_module_ts"],{

/***/ 1738:
/*!*************************************************************!*\
  !*** ./src/app/pages/prevorder/prevorder-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrevorderPageRoutingModule": () => (/* binding */ PrevorderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _prevorder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prevorder.page */ 675);




const routes = [
    {
        path: '',
        component: _prevorder_page__WEBPACK_IMPORTED_MODULE_0__.PrevorderPage
    }
];
let PrevorderPageRoutingModule = class PrevorderPageRoutingModule {
};
PrevorderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrevorderPageRoutingModule);



/***/ }),

/***/ 7008:
/*!*****************************************************!*\
  !*** ./src/app/pages/prevorder/prevorder.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrevorderPageModule": () => (/* binding */ PrevorderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _prevorder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prevorder-routing.module */ 1738);
/* harmony import */ var _prevorder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prevorder.page */ 675);







let PrevorderPageModule = class PrevorderPageModule {
};
PrevorderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prevorder_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrevorderPageRoutingModule
        ],
        declarations: [_prevorder_page__WEBPACK_IMPORTED_MODULE_1__.PrevorderPage]
    })
], PrevorderPageModule);



/***/ }),

/***/ 675:
/*!***************************************************!*\
  !*** ./src/app/pages/prevorder/prevorder.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrevorderPage": () => (/* binding */ PrevorderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_prevorder_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prevorder.page.html */ 1204);
/* harmony import */ var _prevorder_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prevorder.page.scss */ 1918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let PrevorderPage = class PrevorderPage {
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
PrevorderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
PrevorderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-prevorder',
        template: _raw_loader_prevorder_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prevorder_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrevorderPage);



/***/ }),

/***/ 1918:
/*!*****************************************************!*\
  !*** ./src/app/pages/prevorder/prevorder.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmV2b3JkZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 1204:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prevorder/prevorder.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Previous Order</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row style=\"color: #999; display: flex; align-items: center; margin-top: 30px;\">\n    <ion-col size=\"6\">\n      Booking Date\n    </ion-col>\n    <ion-col size=\"6\" class=\"text-right\" style=\"font-size: 30px;\">\n      <ion-icon name=\"calendar-number-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col style=\"text-align: center; font-size: 20px;\">\n      12-Jan-2019\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"7\" style=\"font-size: 17px; font-weight: 600;\">\n      Booking Confirmation\n    </ion-col>\n    <ion-col size=\"5\" class=\"text-right\">\n      <div class=\"bookingSign\" style=\"background: #31b744;\"></div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"bookingProductBox\">\n        <div class=\"leftProductImg\">\n          <div class=\"productImgBking\">\n            <img src=\"assets/img/booking-1.png\">\n          </div>\n          <div class=\"productImgDtl\">\n            <div class=\"prdctNameBking\">Volume Bloom</div>\n            <div class=\"productSubMane\">Body Lotion</div>\n          </div>\n        </div>\n\n        <div class=\"rightPriceBox\">\n          <div class=\"quantityRounder\">1</div>\n          <div class=\"\">&#8377;1200</div>\n        </div>\n      </div>\n    </ion-col> \n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"paymentOptUsed flexBox\">\n        <div class=\"txtPaymentOpt\">Payment Option Used</div>\n        <div class=\"selPaymentOpt\">\n          <ion-icon style=\"color: #0c951f;\" name=\"checkmark-circle-outline\"></ion-icon>\n          Cash\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"totalOrdrDtl\">\n      <div class=\"\">Order Total</div>\n      <div>&#8377;1200</div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 50px;\">\n    <ion-col size=\"12\">\n      <button class=\"button-default primary\" ion-button>Current Order Invoice</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_prevorder_prevorder_module_ts.js.map