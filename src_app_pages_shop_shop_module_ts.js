(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_shop_shop_module_ts"],{

/***/ 7700:
/*!***************************************************!*\
  !*** ./src/app/pages/shop/shop-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopPageRoutingModule": () => (/* binding */ ShopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.page */ 737);




const routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_0__.ShopPage
    }
];
let ShopPageRoutingModule = class ShopPageRoutingModule {
};
ShopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShopPageRoutingModule);



/***/ }),

/***/ 1159:
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopPageModule": () => (/* binding */ ShopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop-routing.module */ 7700);
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.page */ 737);
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-responsive-carousel */ 6662);








let ShopPageModule = class ShopPageModule {
};
ShopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopPageRoutingModule,
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__.IvyCarouselModule
        ],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_1__.ShopPage]
    })
], ShopPageModule);



/***/ }),

/***/ 737:
/*!*****************************************!*\
  !*** ./src/app/pages/shop/shop.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopPage": () => (/* binding */ ShopPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_shop_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shop.page.html */ 3978);
/* harmony import */ var _shop_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.page.scss */ 1248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let ShopPage = class ShopPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.slideOptions = {
            initialSlide: 1,
            speed: 2000,
        };
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 3,
            autoplay: true,
            spaceBetween: 20,
        };
        this.slideOptsTwo = {
            initialSlide: 0,
            slidesPerView: 3,
            autoplay: true,
            spaceBetween: 20,
        };
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    ngOnInit() {
    }
    slideNext(object, slideView) {
        slideView.slideNext(500).then(() => {
        });
    }
    //Move to previous slide
    slidePrev(object, slideView) {
        slideView.slidePrev(500).then(() => {
        });
        ;
    }
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
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
ShopPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
ShopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-shop',
        template: _raw_loader_shop_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shop_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShopPage);



/***/ }),

/***/ 1248:
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 3978:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\"\n          ><ion-icon name=\"search-outline\"></ion-icon\n        ></span>\n        <span class=\"filterIcon\" route\n          ><a routerLink=\"/filter\"><img src=\"assets/img/filter-icon.png\" /></a\n        ></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"inner_banner_box\">\n    <img src=\"assets/img/shop-banner.png\" />\n    <div class=\"banner_container\">\n      <div class=\"bigTxtBanner\">Get 20% off<br />on full Body Spa</div>\n      <div class=\"smallTxtBanner\">FREE SHIPPING ON ORDER OVER $100</div>\n    </div>\n  </div>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"cateSelect\">\n        <div class=\"cateSelection\" style=\"border-right: 1px solid #ddd\">\n          <img src=\"assets/img/cat-1.png\" />\n          <span class=\"cat_txt\">Men</span>\n        </div>\n        <div class=\"cateSelection\">\n          <img src=\"assets/img/cat-2.png\" />\n          <span class=\"cat_txt\">Women</span>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div class=\"sliderShop\">\n    <ion-slides\n      autoplay=\"400\"\n      loop=\"true\"\n      [options]=\"slideOptions\"\n      #slider\n      (ionSlidesDidLoad)=\"slidesDidLoad(slider)\"\n    >\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"assets/img/banner.png\" />\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/img/banner.png\" />\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/img/banner.png\" />\n      </ion-slide>\n\n      <ion-slide>\n        <img src=\"assets/img/banner.png\" />\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div\n        class=\"\"\n        style=\"\n          font-weight: 600;\n          font-size: 16px;\n          text-align: center;\n          margin-bottom: 10px;\n        \"\n      >\n        Discounts at Brands\n      </div>\n      <div class=\"discountImage\">\n        <img src=\"assets/img/discount-banner.png\" />\n      </div>\n      <div class=\"moreDiscountsTxt\">More Discounts...</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"sliderTopTitle\">Hair Cosmetic Brands</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"shopPageSlide\">\n    <ion-col size=\"1\" class=\"arrowSliderBox leftArrowSlider\">\n      <span\n        class=\"slider-nav arrow-prev\"\n        (click)=\"slidePrev(sliderTwo,slideWithNav1)\"\n      >\n        <div class=\"prev-icon-custom custon-nav\">\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </div>\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-slides\n        pager=\"false\"\n        [options]=\"slideOptsTwo\"\n        #slideWithNav1\n        (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav1)\"\n      >\n        <ion-slide>\n          <img src=\"assets/img/brand-1.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-2.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-3.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-1.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-2.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-3.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-1.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-2.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-3.png\" />\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\" class=\"arrowSliderBox rightArrowSlider\">\n      <span\n        class=\"slider-nav arrow-next\"\n        (click)=\"slideNext(sliderTwo,slideWithNav1)\"\n      >\n        <div class=\"next-icon-custom custon-nav\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </div>\n      </span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"shopPageSlide\">\n    <ion-col size=\"12\">\n      <div class=\"sliderTopTitle\">Facial Cosmetic Brands</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"shopPageSlide\">\n    <ion-col size=\"1\" class=\"arrowSliderBox leftArrowSlider\">\n      <span\n        class=\"slider-nav arrow-prev\"\n        (click)=\"slidePrev(sliderTwo,slideWithNav2)\"\n      >\n        <div class=\"prev-icon-custom custon-nav\">\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </div>\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-slides\n        pager=\"false\"\n        [options]=\"slideOptsTwo\"\n        #slideWithNav2\n        (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\"\n      >\n        <ion-slide>\n          <img src=\"assets/img/brand-4.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-5.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-6.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-4.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-5.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-6.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-4.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-5.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-6.png\" />\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\" class=\"arrowSliderBox rightArrowSlider\">\n      <span\n        class=\"slider-nav arrow-next\"\n        (click)=\"slideNext(sliderTwo,slideWithNav2)\"\n      >\n        <div class=\"next-icon-custom custon-nav\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </div>\n      </span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"shopPageSlide\">\n    <ion-col size=\"12\">\n      <div class=\"sliderTopTitle\">Skin Care Cosmetic Brands</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"shopPageSlide\">\n    <ion-col size=\"1\" class=\"arrowSliderBox leftArrowSlider\">\n      <span\n        class=\"slider-nav arrow-prev\"\n        (click)=\"slidePrev(sliderTwo,slideWithNav3)\"\n      >\n        <div class=\"prev-icon-custom custon-nav\">\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </div>\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-slides\n        pager=\"false\"\n        [options]=\"slideOptsTwo\"\n        #slideWithNav3\n        (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav3)\"\n      >\n        <ion-slide>\n          <img src=\"assets/img/brand-7.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-8.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-9.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-7.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-8.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-9.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-7.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-8.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-9.png\" />\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\" class=\"arrowSliderBox rightArrowSlider\">\n      <span\n        class=\"slider-nav arrow-next\"\n        (click)=\"slideNext(sliderTwo,slideWithNav3)\"\n      >\n        <div class=\"next-icon-custom custon-nav\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </div>\n      </span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"shopPageSlide\">\n    <ion-col size=\"12\">\n      <div class=\"sliderTopTitle\">Facial Cosmetic Brands</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"shopPageSlide\">\n    <ion-col size=\"1\" class=\"arrowSliderBox leftArrowSlider\">\n      <span\n        class=\"slider-nav arrow-prev\"\n        (click)=\"slidePrev(sliderTwo,slideWithNav4)\"\n      >\n        <div class=\"prev-icon-custom custon-nav\">\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </div>\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-slides\n        pager=\"false\"\n        [options]=\"slideOptsTwo\"\n        #slideWithNav4\n        (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav4)\"\n      >\n        <ion-slide>\n          <img src=\"assets/img/brand-10.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-11.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-12.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-10.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-11.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-12.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-10.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-11.png\" />\n        </ion-slide>\n        <ion-slide>\n          <img src=\"assets/img/brand-12.png\" />\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n\n    <ion-col size=\"1\" class=\"arrowSliderBox rightArrowSlider\">\n      <span\n        class=\"slider-nav arrow-next\"\n        (click)=\"slideNext(sliderTwo,slideWithNav4)\"\n      >\n        <div class=\"next-icon-custom custon-nav\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </div>\n      </span>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_shop_shop_module_ts.js.map