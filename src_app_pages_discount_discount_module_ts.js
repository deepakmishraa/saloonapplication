(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_discount_discount_module_ts"],{

/***/ 1578:
/*!***********************************************************!*\
  !*** ./src/app/pages/discount/discount-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscountPageRoutingModule": () => (/* binding */ DiscountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _discount_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discount.page */ 2316);




const routes = [
    {
        path: '',
        component: _discount_page__WEBPACK_IMPORTED_MODULE_0__.DiscountPage
    }
];
let DiscountPageRoutingModule = class DiscountPageRoutingModule {
};
DiscountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DiscountPageRoutingModule);



/***/ }),

/***/ 860:
/*!***************************************************!*\
  !*** ./src/app/pages/discount/discount.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscountPageModule": () => (/* binding */ DiscountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _discount_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discount-routing.module */ 1578);
/* harmony import */ var _discount_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discount.page */ 2316);
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-responsive-carousel */ 6662);








let DiscountPageModule = class DiscountPageModule {
};
DiscountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _discount_routing_module__WEBPACK_IMPORTED_MODULE_0__.DiscountPageRoutingModule,
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__.IvyCarouselModule
        ],
        declarations: [_discount_page__WEBPACK_IMPORTED_MODULE_1__.DiscountPage]
    })
], DiscountPageModule);



/***/ }),

/***/ 2316:
/*!*************************************************!*\
  !*** ./src/app/pages/discount/discount.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscountPage": () => (/* binding */ DiscountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_discount_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./discount.page.html */ 8748);
/* harmony import */ var _discount_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discount.page.scss */ 4908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let DiscountPage = class DiscountPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.slideOptions = {
            initialSlide: 1,
            speed: 2000,
        };
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
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
DiscountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
DiscountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-discount',
        template: _raw_loader_discount_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_discount_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DiscountPage);



/***/ }),

/***/ 4908:
/*!***************************************************!*\
  !*** ./src/app/pages/discount/discount.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3VudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 8748:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/discount/discount.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\"><ion-icon name=\"search-outline\"></ion-icon></span>\n        <span class=\"filterIcon\">Sort <img src=\"assets/img/sort-arrow.png\" style=\"margin-left: 10px;max-height: 12px;\"></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"inner_banner_box\">\n    <img src=\"assets/img/shop-banner.png\">\n    <div class=\"banner_container\">\n      <div class=\"bigTxtBanner\">Get 20% off<br>on full Body Spa</div>\n      <div class=\"smallTxtBanner\">FREE SHIPPING ON ORDER OVER $100</div>\n    </div>\n  </div>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"cateSelect\">\n        <div class=\"cateSelection\" style=\"border-right: 1px solid #ddd;\">\n          <img src=\"assets/img/cat-1.png\">\n          <span class=\"cat_txt\">Men</span>\n        </div>\n        <div class=\"cateSelection\">\n          <img src=\"assets/img/cat-2.png\">\n          <span class=\"cat_txt\">Women</span>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"sliderShop\" style=\"padding: 0; box-shadow: none;\">\n    <ion-slides autoplay=\"400\" loop=\"true\" [options]=\"slideOptions\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\n  \n      <ion-slide>\n        <div class=\"slide\">\n         <img src=\"assets/img/discount-banner-1.png\">\n        </div>\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/discount-banner-1.png\">\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/discount-banner-1.png\">\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/discount-banner-1.png\">\n      </ion-slide>\n    </ion-slides>\n    </div>\n\n  <div class=\"topSellerBanner\">\n    <img src=\"assets/img/discount-banner-2.png\">\n  </div>\n  \n  <div class=\"topSellerBanner\">\n    <img src=\"assets/img/discount-banner-3.png\">\n  </div> \n  \n  <div class=\"sliderShop\" style=\"padding: 0; box-shadow: none;\">\n    <ion-slides autoplay=\"500\" loop=\"true\" [options]=\"slideOptions\" #slider2 (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\n  \n      <ion-slide>\n        <div class=\"slide\">\n         <img src=\"assets/img/discount-banner-4.png\">\n        </div>\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/discount-banner-4.png\">\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"slide\">\n         <img src=\"assets/img/discount-banner-4.png\">\n        </div>\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/discount-banner-4.png\">\n      </ion-slide>\n  \n    </ion-slides>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_discount_discount_module_ts.js.map