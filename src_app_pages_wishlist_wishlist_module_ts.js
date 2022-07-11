(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_wishlist_wishlist_module_ts"],{

/***/ 5115:
/*!***********************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistPageRoutingModule": () => (/* binding */ WishlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.page */ 1997);




const routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_0__.WishlistPage
    }
];
let WishlistPageRoutingModule = class WishlistPageRoutingModule {
};
WishlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WishlistPageRoutingModule);



/***/ }),

/***/ 9188:
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistPageModule": () => (/* binding */ WishlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist-routing.module */ 5115);
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.page */ 1997);







let WishlistPageModule = class WishlistPageModule {
};
WishlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.WishlistPageRoutingModule
        ],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_1__.WishlistPage]
    })
], WishlistPageModule);



/***/ }),

/***/ 1997:
/*!*************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistPage": () => (/* binding */ WishlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_wishlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./wishlist.page.html */ 5949);
/* harmony import */ var _wishlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.page.scss */ 6784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let WishlistPage = class WishlistPage {
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
WishlistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
WishlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-wishlist',
        template: _raw_loader_wishlist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_wishlist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WishlistPage);



/***/ }),

/***/ 6784:
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXNobGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5949:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Wishlist</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"noBg\">\n<ion-row>\n  <ion-col size=\"12\">\n    <div class=\"wishListHeading\">\n      <div class=\"leftProdHead\">Products</div>\n      <div class=\"itemsTotal\">04 Items</div>\n    </div>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n\n  <ion-col size=\"6\">\n    <div class=\"outerBorderedBox\">\n      <div class=\"prdctBorderdImg\">\n        <span class=\"delWlPrdct\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </span>\n        <img src=\"assets/img/current-booking-1.png\">\n      </div>\n      <div class=\"prodctDetail\">\n        <div>\n          <div class=\"prodctTitleWL\">Wella Shampoo</div>\n          <div class=\"priceAndStars\">&#8377;200 \n            <div class=\"starsPrdct\">\n              <ion-icon name=\"star-outline\"></ion-icon>\n              <ion-icon name=\"star-outline\"></ion-icon>\n              <ion-icon name=\"star-outline\"></ion-icon>\n              <ion-icon name=\"star-outline\"></ion-icon>\n              <ion-icon name=\"star-outline\"></ion-icon>\n            </div>\n          </div>\n          </div>\n          <div class=\"prdctWishListIcon\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n          </div>\n      </div>    \n    <div class=\"buyNowButton\">\n      <button ion-button class=\"buy_button\" style=\"width: 120px;margin-top: 5px;\">Buy Now</button>\n    </div>\n  </div>  \n</ion-col>\n\n<ion-col size=\"6\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <span class=\"delWlPrdct\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </span>\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"priceAndStars\">&#8377;200 \n          <div class=\"starsPrdct\">\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n          </div>\n        </div>\n        </div>\n        <div class=\"prdctWishListIcon\">\n          <ion-icon name=\"heart-outline\"></ion-icon>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\" style=\"width: 120px;margin-top: 5px;\">Buy Now</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"6\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <span class=\"delWlPrdct\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </span>\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"priceAndStars\">&#8377;200 \n          <div class=\"starsPrdct\">\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n          </div>\n        </div>\n        </div>\n        <div class=\"prdctWishListIcon\">\n          <ion-icon name=\"heart-outline\"></ion-icon>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\" style=\"width: 120px;margin-top: 5px;\">Buy Now</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"6\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <span class=\"delWlPrdct\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </span>\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"priceAndStars\">&#8377;200 \n          <div class=\"starsPrdct\">\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n            <ion-icon name=\"star-outline\"></ion-icon>\n          </div>\n        </div>\n        </div>\n        <div class=\"prdctWishListIcon\">\n          <ion-icon name=\"heart-outline\"></ion-icon>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\" style=\"width: 120px;margin-top: 5px;\">Buy Now</button>\n  </div>\n</div>  \n</ion-col>\n\n  \n\n</ion-row>\n</ion-content>\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_wishlist_wishlist_module_ts.js.map