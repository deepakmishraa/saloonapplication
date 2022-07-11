(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_brands_brands_module_ts"],{

/***/ 2330:
/*!*******************************************************!*\
  !*** ./src/app/pages/brands/brands-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandsPageRoutingModule": () => (/* binding */ BrandsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _brands_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands.page */ 5688);




const routes = [
    {
        path: '',
        component: _brands_page__WEBPACK_IMPORTED_MODULE_0__.BrandsPage
    }
];
let BrandsPageRoutingModule = class BrandsPageRoutingModule {
};
BrandsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BrandsPageRoutingModule);



/***/ }),

/***/ 2697:
/*!***********************************************!*\
  !*** ./src/app/pages/brands/brands.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandsPageModule": () => (/* binding */ BrandsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _brands_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands-routing.module */ 2330);
/* harmony import */ var _brands_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brands.page */ 5688);







let BrandsPageModule = class BrandsPageModule {
};
BrandsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _brands_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrandsPageRoutingModule
        ],
        declarations: [_brands_page__WEBPACK_IMPORTED_MODULE_1__.BrandsPage]
    })
], BrandsPageModule);



/***/ }),

/***/ 5688:
/*!*********************************************!*\
  !*** ./src/app/pages/brands/brands.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandsPage": () => (/* binding */ BrandsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_brands_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./brands.page.html */ 2187);
/* harmony import */ var _brands_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brands.page.scss */ 6798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let BrandsPage = class BrandsPage {
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
BrandsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
BrandsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-brands',
        template: _raw_loader_brands_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_brands_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BrandsPage);



/***/ }),

/***/ 6798:
/*!***********************************************!*\
  !*** ./src/app/pages/brands/brands.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2187:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brands/brands.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Available Brands</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-1.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-2.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-3.png\">\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-4.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-5.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-6.png\">\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-7.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-8.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-9.png\">\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-10.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-11.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-12.png\">\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-13.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-14.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"inner_borderd_box\">\n          <img src=\"assets/img/brand-15.png\">\n        </div>\n      </ion-col>\n    </ion-row>\n</ion-content>\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_brands_brands_module_ts.js.map