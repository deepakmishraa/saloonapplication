(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_cart_cart_module_ts"],{

/***/ 485:
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": () => (/* binding */ CartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 3278);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 313:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": () => (/* binding */ CartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-routing.module */ 485);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page */ 3278);







let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_1__.CartPage]
    })
], CartPageModule);



/***/ }),

/***/ 3278:
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart.page.html */ 3516);
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss */ 8365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let CartPage = class CartPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.itemSum = 1;
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
    increaseItem() {
        this.itemSum = this.itemSum + 1;
    }
    decreaseItem() {
        if (this.itemSum > 1)
            this.itemSum = this.itemSum - 1;
    }
};
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CartPage);



/***/ }),

/***/ 8365:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 3516:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Cart List</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<div class=\"topTabsSelector\">\n  <div class=\"leftCartSelector cartTabInner active\">Cart (4)</div>\n  <div class=\"rightSavedSelector cartTabInner\">Saved (0)</div>\n</div>\n\n<ion-row>\n  <ion-col size=\"12\">\n    <div class=\"bookingProductBox\">\n      <div class=\"leftProductImg\">\n        <div class=\"productImgBking\">\n          <img src=\"assets/img/booking-1.png\">\n        </div>\n        <div class=\"productImgDtl\">\n          <div class=\"prdctNameBking\">Volume Bloom</div>\n          <div class=\"productSubMane\">Body Lotion</div>\n        </div>\n      </div>\n\n      <div class=\"rightPriceBox\">\n        <div class=\"cartIncrDecr\" style=\"margin-bottom: 20px;\">\n          <div class=\"actionIconCart\" (click)=\"decreaseItem()\">-</div>\n          <div class=\"quantityRounder\" style=\"margin-bottom: 0;\">{{itemSum}}</div>\n          <div class=\"actionIconCart\" style=\"font-size: 25px;\" (click)=\"increaseItem()\">+</div>\n        </div>\n        <div class=\"\" style=\"font-weight: 600;text-align: center;\">&#8377;1200</div>\n      </div>\n    </div>\n  </ion-col> \n</ion-row>\n\n<div class=\"applyPromoCode\">\n  <ion-row>\n    <ion-col size=\"12\" style=\"color: #999;\">\n        Apply Promo Code\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"promoform\">\n        <div class=\"innerFlexBox\">\n        <ion-input type=\"text\" placeholder=\"SalonwaaleCODE05\"></ion-input>\n        <button ion-button class=\"\">Apply</button>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"priceFlexOuter\">\n      <div class=\"totalPriceInfo\">\n        <div class=\"left_priceInfo\">\n          Total Price\n        </div>\n        <div class=\"rightPriceProd\">\n          &#8377;1200\n        </div>\n      </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <button ion-button class=\"button-default primary\">Checkout</button>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_cart_module_ts.js.map