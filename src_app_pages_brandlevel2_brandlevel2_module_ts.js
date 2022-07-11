(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_brandlevel2_brandlevel2_module_ts"],{

/***/ 9227:
/*!*****************************************************************!*\
  !*** ./src/app/pages/brandlevel2/brandlevel2-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Brandlevel2PageRoutingModule": () => (/* binding */ Brandlevel2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _brandlevel2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brandlevel2.page */ 7280);




const routes = [
    {
        path: '',
        component: _brandlevel2_page__WEBPACK_IMPORTED_MODULE_0__.Brandlevel2Page
    }
];
let Brandlevel2PageRoutingModule = class Brandlevel2PageRoutingModule {
};
Brandlevel2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Brandlevel2PageRoutingModule);



/***/ }),

/***/ 8478:
/*!*********************************************************!*\
  !*** ./src/app/pages/brandlevel2/brandlevel2.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Brandlevel2PageModule": () => (/* binding */ Brandlevel2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _brandlevel2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brandlevel2-routing.module */ 9227);
/* harmony import */ var _brandlevel2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brandlevel2.page */ 7280);







let Brandlevel2PageModule = class Brandlevel2PageModule {
};
Brandlevel2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _brandlevel2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Brandlevel2PageRoutingModule
        ],
        declarations: [_brandlevel2_page__WEBPACK_IMPORTED_MODULE_1__.Brandlevel2Page]
    })
], Brandlevel2PageModule);



/***/ }),

/***/ 7280:
/*!*******************************************************!*\
  !*** ./src/app/pages/brandlevel2/brandlevel2.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Brandlevel2Page": () => (/* binding */ Brandlevel2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_brandlevel2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./brandlevel2.page.html */ 5126);
/* harmony import */ var _brandlevel2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brandlevel2.page.scss */ 6819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);








let Brandlevel2Page = class Brandlevel2Page {
    constructor(popoverController, http) {
        this.popoverController = popoverController;
        this.http = http;
        this.slideOptions = {
            initialSlide: 1,
            speed: 2000,
        };
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    ngOnInit() {
        this.getCategory();
    }
    getCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.location + '?route=api/product')
                .subscribe(Response => {
                var data = JSON.parse(JSON.stringify(Response));
                this.listProduct = data.products;
                console.log(this.listProduct);
            }, error => {
                const info = JSON.parse(JSON.stringify(error));
                // this.toastr.error(error.status === 0 ? '500 Internal Server Error' : (info.error.message != '' ? info.error.error : info.error.message));
            });
        });
    }
    menuOpen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__.MenuPage,
                cssClass: 'menuList',
            });
            yield popover.present();
        });
    }
};
Brandlevel2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
Brandlevel2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-brandlevel2',
        template: _raw_loader_brandlevel2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_brandlevel2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Brandlevel2Page);



/***/ }),

/***/ 6819:
/*!*********************************************************!*\
  !*** ./src/app/pages/brandlevel2/brandlevel2.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZGxldmVsMi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5126:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brandlevel2/brandlevel2.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Brand Category</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"sliderShop\" style=\"padding: 0; box-shadow: none;\">\n    <ion-slides autoplay=\"400\" loop=\"true\" [options]=\"slideOptions\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\n  \n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"assets/img/catalog-4.png\">\n        </div>\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/catalog-4.png\">\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/catalog-4.png\">\n      </ion-slide>\n  \n      <ion-slide>\n        <img src=\"assets/img/catalog-4.png\">\n      </ion-slide>\n    </ion-slides>\n    </div>\n\n \n<ion-row class=\"brandCatPage\">\n\n  <ion-col size=\"3\" *ngFor=\"\n  let list of this.listProduct;\n  let i = index\n\">\n    <div class=\"outerBorderedBox\">\n      <div class=\"prdctBorderdImg\">\n        <img src=\"{{list.thumb}}\">\n      </div>\n      <div class=\"prodctDetail\">\n        <div>\n          <div class=\"prodctTitleWL\">{{list.name.slice(0, 15)}}</div>\n          <div class=\"crossPrice\">{{list.price}}</div><br>\n          <div class=\"finalPriceTag\">{{list.special==false ? 'No Discount':list.special}}</div>\n          </div>\n      </div>    \n    <div class=\"buyNowButton\">\n      <button ion-button class=\"buy_button\">Add to Cart</button>\n    </div>\n  </div>  \n</ion-col>\n\n<!-- <ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">250</div>\n          <div class=\"finalPriceTag\">200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">250</div>\n          <div class=\"finalPriceTag\">200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">250</div>\n          <div class=\"finalPriceTag\">200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col> -->\n\n</ion-row>   \n\n \n<!-- <ion-row class=\"brandCatPage\">\n\n  <ion-col size=\"3\">\n    <div class=\"outerBorderedBox\">\n      <div class=\"prdctBorderdImg\">\n        <img src=\"assets/img/current-booking-1.png\">\n      </div>\n      <div class=\"prodctDetail\">\n        <div>\n          <div class=\"prodctTitleWL\">Wella Shampoo</div>\n          <div class=\"crossPrice\">250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n          </div>\n      </div>    \n    <div class=\"buyNowButton\">\n      <button ion-button class=\"buy_button\">Add to Cart</button>\n    </div>\n  </div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n</ion-row>   \n\n\n \n<ion-row class=\"brandCatPage\">\n\n  <ion-col size=\"3\">\n    <div class=\"outerBorderedBox\">\n      <div class=\"prdctBorderdImg\">\n        <img src=\"assets/img/current-booking-1.png\">\n      </div>\n      <div class=\"prodctDetail\">\n        <div>\n          <div class=\"prodctTitleWL\">Wella Shampoo</div>\n          <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n          </div>\n      </div>    \n    <div class=\"buyNowButton\">\n      <button ion-button class=\"buy_button\">Add to Cart</button>\n    </div>\n  </div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n</ion-row>   \n\n\n \n<ion-row class=\"brandCatPage\">\n\n  <ion-col size=\"3\">\n    <div class=\"outerBorderedBox\">\n      <div class=\"prdctBorderdImg\">\n        <img src=\"assets/img/current-booking-1.png\">\n      </div>\n      <div class=\"prodctDetail\">\n        <div>\n          <div class=\"prodctTitleWL\">Wella Shampoo</div>\n          <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n          </div>\n      </div>    \n    <div class=\"buyNowButton\">\n      <button ion-button class=\"buy_button\">Add to Cart</button>\n    </div>\n  </div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n</ion-row>   \n\n\n \n<ion-row class=\"brandCatPage\">\n\n  <ion-col size=\"3\">\n    <div class=\"outerBorderedBox\">\n      <div class=\"prdctBorderdImg\">\n        <img src=\"assets/img/current-booking-1.png\">\n      </div>\n      <div class=\"prodctDetail\">\n        <div>\n          <div class=\"prodctTitleWL\">Wella Shampoo</div>\n          <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n          </div>\n      </div>    \n    <div class=\"buyNowButton\">\n      <button ion-button class=\"buy_button\">Add to Cart</button>\n    </div>\n  </div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n<ion-col size=\"3\">\n  <div class=\"outerBorderedBox\">\n    <div class=\"prdctBorderdImg\">\n      <img src=\"assets/img/current-booking-1.png\">\n    </div>\n    <div class=\"prodctDetail\">\n      <div>\n        <div class=\"prodctTitleWL\">Wella Shampoo</div>\n        <div class=\"crossPrice\">&#8377;250</div>\n          <div class=\"finalPriceTag\">&#8377;200</div>\n        </div>\n    </div>    \n  <div class=\"buyNowButton\">\n    <button ion-button class=\"buy_button\">Add to Cart</button>\n  </div>\n</div>  \n</ion-col>\n\n</ion-row>    -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_brandlevel2_brandlevel2_module_ts.js.map