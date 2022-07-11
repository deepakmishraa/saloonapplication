(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_servicelist_servicelist_module_ts"],{

/***/ 229:
/*!*****************************************************************!*\
  !*** ./src/app/pages/servicelist/servicelist-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicelistPageRoutingModule": () => (/* binding */ ServicelistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _servicelist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicelist.page */ 8205);




const routes = [
    {
        path: '',
        component: _servicelist_page__WEBPACK_IMPORTED_MODULE_0__.ServicelistPage
    }
];
let ServicelistPageRoutingModule = class ServicelistPageRoutingModule {
};
ServicelistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServicelistPageRoutingModule);



/***/ }),

/***/ 5518:
/*!*********************************************************!*\
  !*** ./src/app/pages/servicelist/servicelist.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicelistPageModule": () => (/* binding */ ServicelistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _servicelist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicelist-routing.module */ 229);
/* harmony import */ var _servicelist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicelist.page */ 8205);







let ServicelistPageModule = class ServicelistPageModule {
};
ServicelistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _servicelist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServicelistPageRoutingModule
        ],
        declarations: [_servicelist_page__WEBPACK_IMPORTED_MODULE_1__.ServicelistPage]
    })
], ServicelistPageModule);



/***/ }),

/***/ 8205:
/*!*******************************************************!*\
  !*** ./src/app/pages/servicelist/servicelist.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicelistPage": () => (/* binding */ ServicelistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_servicelist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./servicelist.page.html */ 7627);
/* harmony import */ var _servicelist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicelist.page.scss */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let ServicelistPage = class ServicelistPage {
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
ServicelistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
ServicelistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-servicelist',
        template: _raw_loader_servicelist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_servicelist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServicelistPage);



/***/ }),

/***/ 4666:
/*!*********************************************************!*\
  !*** ./src/app/pages/servicelist/servicelist.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 7627:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/servicelist/servicelist.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Service List</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <img src=\"assets/img/catalog-2.png\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"collapseBox\">\n        <div class=\"box_heading\">Luxury Facials/Ritualt\n        <span class=\"rightOpenArrow\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n        </div>\n      </div>\n      <div class=\"collapseBox\">\n        <div class=\"box_heading\">Upper Lips\n        <span class=\"rightOpenArrow\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n        </div>\n      </div>\n      <div class=\"collapseBox\">\n        <div class=\"box_heading\">Body Polishing/Rejuvenation\n        <span class=\"rightOpenArrow\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n        </div>\n      </div>\n      <div class=\"collapseBox\">\n        <div class=\"box_heading\">Clean Ups\n        <span class=\"rightOpenArrow\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n        </div>\n      </div>\n      <div class=\"collapseBox\">\n        <div class=\"box_heading\">Luxury Facials/Ritualt Engagement\n        <span class=\"rightOpenArrow\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n        </div>\n      </div>      \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <img src=\"assets/img/cat-2-banner.png\" style=\"width: 100%; margin-bottom: 5px;\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"collapseBox\">\n        <div class=\"box_heading\">Make Up\n        <span class=\"rightOpenArrow\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n        </div>\n      </div>\n      <div class=\"collapseBox\">\n        <div class=\"box_heading\">Base Make Up\n        <span class=\"rightOpenArrow\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n        </div>\n      </div>  \n      <div class=\"collapseBox\">\n        <div class=\"box_heading\">Eye Make-Up\n        <span class=\"rightOpenArrow\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n        </div>\n      </div>        \n    </ion-col>\n  </ion-row>\n\n</ion-content> \n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_servicelist_servicelist_module_ts.js.map