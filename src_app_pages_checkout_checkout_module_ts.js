(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_checkout_checkout_module_ts"],{

/***/ 3303:
/*!***********************************************************!*\
  !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageRoutingModule": () => (/* binding */ CheckoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page */ 4300);




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_0__.CheckoutPage
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ 8810:
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageModule": () => (/* binding */ CheckoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-routing.module */ 3303);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page */ 4300);







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutPageRoutingModule
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_1__.CheckoutPage]
    })
], CheckoutPageModule);



/***/ }),

/***/ 4300:
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPage": () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./checkout.page.html */ 3394);
/* harmony import */ var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page.scss */ 1069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let CheckoutPage = class CheckoutPage {
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
CheckoutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
CheckoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckoutPage);



/***/ }),

/***/ 1069:
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3394:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Checkout</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"text-center\" style=\"margin: 20px 0; font-size: 14px;\">\n    <ion-col size=\"4\">\n      <div class=\"iconBoxCheckout\">\n          <img src=\"assets/img/checkout-icon-1.png\">\n      </div>\n      <div class=\"iconTxtCheckout\">Booking</div>\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <div class=\"iconBoxCheckout\">\n          <img src=\"assets/img/checkout-icon-2.png\">\n      </div>\n      <div class=\"iconTxtCheckout\">Billing</div>\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <div class=\"iconBoxCheckout\">\n          <img src=\"assets/img/checkout-icon-3.png\">\n      </div>\n      <div class=\"iconTxtCheckout\">Payment</div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"innerRounderBox\">\n        <ion-row>\n          <ion-col size=\"7\">\n            Item Total\n          </ion-col>\n          <ion-col size=\"5\" class=\"text-right\">\n            &#8377;<span style=\"font-weight: 600;\">1200</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"7\">\n            Shipping & Handling\n          </ion-col>\n          <ion-col size=\"5\" class=\"text-right\">\n            &#8377;0.00\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"7\">\n            Tax\n          </ion-col>\n          <ion-col size=\"5\" class=\"text-right\">\n            &#8377;0.00\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"7\">\n            Promo Code Discount\n          </ion-col>\n          <ion-col size=\"5\" class=\"text-right\">\n            &#8377;<span style=\"font-weight: 600;\">30</span>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"totalAmountTxt\">\n          <ion-col size=\"6\">\n            <span style=\"font-weight: 600;\">Order Total</span>\n          </ion-col>\n          <ion-col size=\"6\" class=\"text-right\">\n            <span style=\"font-weight: 600;\">&#8377;1,170</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"font-weight: 600;\">\n          <ion-col size=\"12\">\n            <ion-icon style=\"color: #24c71a;font-size: 17px;vertical-align: bottom;\" name=\"checkmark-circle-outline\"></ion-icon> Shipping Address\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\" style=\"padding-left: 25px;font-weight: 600;\">\n            John Smith<br>\n            Plot No-2, Jeet Nagar<br>\n            Manewada<br>\n            Nagpur - 440024<br>\n            Maharashtra<br>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col style=\"font-size: 18px;margin-top: 20px;\">\n            Add New Address\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col>\n            <ion-label>Select State</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-select class=\"borderd_input\">\n              <ion-select-option>Rajasthan</ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-top: 30px;\">\n    <ion-col size=\"12\">\n      <button ion-button class=\"button-default primary\">&#8377;1,200</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_checkout_checkout_module_ts.js.map