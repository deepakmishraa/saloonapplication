(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_catalog_catalog_module_ts"],{

/***/ 1427:
/*!*********************************************************!*\
  !*** ./src/app/pages/catalog/catalog-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogPageRoutingModule": () => (/* binding */ CatalogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _catalog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog.page */ 2754);




const routes = [
    {
        path: '',
        component: _catalog_page__WEBPACK_IMPORTED_MODULE_0__.CatalogPage
    }
];
let CatalogPageRoutingModule = class CatalogPageRoutingModule {
};
CatalogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CatalogPageRoutingModule);



/***/ }),

/***/ 7120:
/*!*************************************************!*\
  !*** ./src/app/pages/catalog/catalog.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogPageModule": () => (/* binding */ CatalogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _catalog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog-routing.module */ 1427);
/* harmony import */ var _catalog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog.page */ 2754);







let CatalogPageModule = class CatalogPageModule {
};
CatalogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _catalog_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogPageRoutingModule
        ],
        declarations: [_catalog_page__WEBPACK_IMPORTED_MODULE_1__.CatalogPage]
    })
], CatalogPageModule);



/***/ }),

/***/ 2754:
/*!***********************************************!*\
  !*** ./src/app/pages/catalog/catalog.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogPage": () => (/* binding */ CatalogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_catalog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./catalog.page.html */ 1080);
/* harmony import */ var _catalog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog.page.scss */ 1372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let CatalogPage = class CatalogPage {
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
CatalogPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
CatalogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-catalog',
        template: _raw_loader_catalog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_catalog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CatalogPage);



/***/ }),

/***/ 1372:
/*!*************************************************!*\
  !*** ./src/app/pages/catalog/catalog.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1080:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/catalog/catalog.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Service Catalog</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"inner_banner_box\">\n    <img src=\"assets/img/shop-banner.png\">\n    <div class=\"banner_container\">\n      <div class=\"bigTxtBanner\">Get 20% off<br>on full Body Spa</div>\n      <div class=\"smallTxtBanner\">FREE SHIPPING ON ORDER OVER $100</div>\n    </div>\n  </div>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"cateSelect\">\n        <div class=\"cateSelection\" style=\"border-right: 1px solid #ddd;\">\n          <img src=\"assets/img/cat-1.png\">\n          <span class=\"cat_txt\">Men</span>\n        </div>\n        <div class=\"cateSelection\">\n          <img src=\"assets/img/cat-2.png\">\n          <span class=\"cat_txt\">Women</span>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"topSellerBanner\">\n    <img src=\"assets/img/catalog-1.png\">\n  </div> \n\n  <div class=\"topSellerBanner\">\n    <img src=\"assets/img/catalog-2.png\">\n  </div> \n\n  <div class=\"topSellerBanner\">\n    <img src=\"assets/img/catalog-3.png\">\n  </div> \n\n\n  <div class=\"sliderShop\" style=\"padding: 0; box-shadow: none;\">\n    <ion-slides autoplay=\"400\" loop=\"true\" [options]=\"slideOptions\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\n  \n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"assets/img/catalog-4.png\">\n        </div>\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/catalog-4.png\">\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/catalog-4.png\">\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/catalog-4.png\">\n      </ion-slide>\n    </ion-slides>\n    </div>\n</ion-content> \n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalog_catalog_module_ts.js.map