(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_productdetail_productdetail_module_ts"],{

/***/ 231:
/*!*********************************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductdetailPageRoutingModule": () => (/* binding */ ProductdetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _productdetail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productdetail.page */ 4530);




const routes = [
    {
        path: '',
        component: _productdetail_page__WEBPACK_IMPORTED_MODULE_0__.ProductdetailPage
    }
];
let ProductdetailPageRoutingModule = class ProductdetailPageRoutingModule {
};
ProductdetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductdetailPageRoutingModule);



/***/ }),

/***/ 6880:
/*!*************************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductdetailPageModule": () => (/* binding */ ProductdetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _productdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productdetail-routing.module */ 231);
/* harmony import */ var _productdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productdetail.page */ 4530);







let ProductdetailPageModule = class ProductdetailPageModule {
};
ProductdetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _productdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductdetailPageRoutingModule
        ],
        declarations: [_productdetail_page__WEBPACK_IMPORTED_MODULE_1__.ProductdetailPage]
    })
], ProductdetailPageModule);



/***/ }),

/***/ 4530:
/*!***********************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductdetailPage": () => (/* binding */ ProductdetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_productdetail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./productdetail.page.html */ 2367);
/* harmony import */ var _productdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productdetail.page.scss */ 6002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let ProductdetailPage = class ProductdetailPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.slideOptions = {
            initialSlide: 1,
            speed: 2000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        };
        this.slideOptsTwo = {
            initialSlide: 0,
            slidesPerView: 3,
            autoplay: true,
            spaceBetween: 20,
        };
        this.colorSelected = "RAW";
        this.bgColorSel = "#ddd";
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    ngOnInit() {
    }
    next(slides) {
        slides.slideNext();
    }
    prev(slides) {
        slides.slidePrev();
    }
    SlideDidChange(object, slideView) {
    }
    openOption() {
        document.getElementById('color_list').style.height = "auto";
    }
    colorSelector() {
        document.getElementById('color_list').style.height = "0";
    }
    openOptionSize() {
        document.getElementById('sizeList_list').style.height = "auto";
    }
    sizeSelector() {
        document.getElementById('sizeList_list').style.height = "0";
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
ProductdetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
ProductdetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-productdetail',
        template: _raw_loader_productdetail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_productdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductdetailPage);



/***/ }),

/***/ 6002:
/*!*************************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0ZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2367:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productdetail/productdetail.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Product Name</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <img src=\"assets/img/product-detail-banner.png\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <div style=\"position: relative;width: 130px;\">\n      <div style=\"position: relative;\" (click)=\"openOption()\">\n        <div class=\"\" style=\"display: flex;align-items: center;\">\n          <span class=\"color_selector\" [style.background] = \"bgColorSel\"></span> {{colorSelected}}</div>\n      <ion-icon style=\"position: absolute;right: 0;top: -3px;font-size: 25px;color: #999;\" name=\"chevron-down-outline\"></ion-icon>\n      </div>\n      <ion-list id=\"color_list\" style=\"position: absolute;top: 25px;width: 100%; height: 0; z-index: 20;\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\" (click)=\"colorSelector()\">\n          <span class=\"color_selector\" style=\"background: #ddd;\"></span> RAW \n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-no-padding\" (click)=\"colorSelector()\">\n          <span class=\"color_selector\" style=\"background: #ddd;\"></span> RAW \n        </ion-item>\n      </ion-list>\n      </div>\n    </ion-col>\n    \n    <ion-col size=\"6\">\n      <div style=\"position: relative;\"> \n        <div style=\"position: relative;display: flex;justify-content: space-evenly;\">Size\n      <div (click)=\"openOptionSize()\">\n        <div class=\"\" style=\"display: flex;align-items: center;\">\n          125 ml</div>\n        <ion-icon style=\"position: absolute;right: 0;top: -3px;font-size: 25px;color: #999;\" name=\"chevron-down-outline\"></ion-icon>\n      </div>\n      </div>\n      <ion-list id=\"sizeList_list\" style=\"height: 0;\">\n        <ion-item lines=\"none\" ion-no-padding (click)=\"sizeSelector()\">\n          125 ml\n        </ion-item>\n        <ion-item lines=\"none\" ion-no-padding (click)=\"sizeSelector()\">\n          250 ml\n        </ion-item>\n      </ion-list>\n      </div>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row style=\"margin-top: 30px;\">\n    <ion-col size=\"7\">\n        <div class=\"startingTxt\" style=\"font-size: 11px;font-weight: 600;\">Starting from</div>\n        <div class=\"priceBox\">\n          <div class=\"sellPrice\">&#8377;1,500</div>\n          <div class=\"crossPrice\">&#8377;1,800</div>\n        </div>\n        <div class=\"productName\">Matrix Biolage 250ML</div>\n        <div class=\"radtingBox\">\n          <span class=\"ratingGreen\">4.3 &nbsp; <ion-icon name=\"star-outline\"></ion-icon></span>\n          <div class=\"ratingCounter\"><span style=\"color: #999; font-weight: 600;margin-right: 5px;\">17 Rating</span> | 10 Reviews</div>\n        </div>\n    </ion-col>\n    <ion-col size=\"5\" class=\"text-right\">\n      <button ion-button class=\"buy_button\">BUY NOW</button>\n      <div class=\"iconsShareWish\">\n        <span><ion-icon name=\"share-social-outline\"></ion-icon></span>\n        <span><ion-icon name=\"heart-outline\"></ion-icon></span>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"dealsShadower\">\n        <div class=\"flexBox buttonsDealsRow\">\n          <span class=\"dealsButton\">DEALS</span>\n          <span class=\"uptoButton\">UPTO 72% OFF</span>\n          <span class=\"cashbackButton\">+10% CASHBACK</span>\n        </div>\n      \n      <div class=\"availableOffers\">\n        <div class=\"leftOffersDetails\">\n          <div class=\"availOfferTxt\">\n            Available Offers\n          </div>\n          <div class=\"moreDealsTxt\">+10 More Deals</div>\n        </div>\n        <div class=\"rightViewButton\">\n          <button ion-button class=\"buy_button\" style=\"padding: 10px 20px;\">VIEW</button>\n          <div style=\"font-size: 13px;color: #e36e24;font-weight: 600;\">FROM &#8377;999</div>\n        </div>\n      </div>\n    </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 10px;\">\n    <ion-col size=\"12\">\n        <div class=\"descrBox\">\n          <div class=\"descrTxtTitle\">Description</div>\n          <div class=\"description_product\">\n            Biolage R.A.W. is Real. Authentic. Wholesome. This powerful haircare regimen gives you the power to create the hair you’ve always dreamed of \n             while being good for you and good for the environment at the same time.\n          </div>\n        </div>\n    </ion-col>\n  </ion-row>\n<div class=\"similarSlider\" style=\"margin: 20px 0;\">\n  <ion-row>\n    <ion-col size=\"12\">\n      Similar Products\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"similarSliderBox\">\n    <ion-col size=\"12\">\n      <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav4\n        (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav4)\">\n        <ion-slide>\n          <div class=\"outerBorderedBox\">\n            <div class=\"prdctBorderdImg\">\n              <img src=\"assets/img/current-booking-1.png\">\n            </div>\n            <div class=\"prodctDetail\">\n              <div>\n                <div class=\"prodctTitleWL\">Wella Shampoo</div>\n                  <div class=\"finalPriceTag\">&#8377;200</div>\n                </div>\n            </div>    \n          <div class=\"buyNowButton\">\n            <button ion-button class=\"buy_button\">Add to Cart</button>\n          </div>\n        </div> \n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"outerBorderedBox\">\n            <div class=\"prdctBorderdImg\">\n              <img src=\"assets/img/current-booking-1.png\">\n            </div>\n            <div class=\"prodctDetail\">\n              <div>\n                <div class=\"prodctTitleWL\">Wella Shampoo</div>\n                  <div class=\"finalPriceTag\">&#8377;200</div>\n                </div>\n            </div>    \n          <div class=\"buyNowButton\">\n            <button ion-button class=\"buy_button\">Add to Cart</button>\n          </div>\n        </div> \n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"outerBorderedBox\">\n            <div class=\"prdctBorderdImg\">\n              <img src=\"assets/img/current-booking-1.png\">\n            </div>\n            <div class=\"prodctDetail\">\n              <div>\n                <div class=\"prodctTitleWL\">Wella Shampoo</div>\n                  <div class=\"finalPriceTag\">&#8377;200</div>\n                </div>\n            </div>    \n          <div class=\"buyNowButton\">\n            <button ion-button class=\"buy_button\">Add to Cart</button>\n          </div>\n        </div> \n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"outerBorderedBox\">\n            <div class=\"prdctBorderdImg\">\n              <img src=\"assets/img/current-booking-1.png\">\n            </div>\n            <div class=\"prodctDetail\">\n              <div>\n                <div class=\"prodctTitleWL\">Wella Shampoo</div>\n                  <div class=\"finalPriceTag\">&#8377;200</div>\n                </div>\n            </div>    \n          <div class=\"buyNowButton\">\n            <button ion-button class=\"buy_button\">Add to Cart</button>\n          </div>\n        </div> \n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"outerBorderedBox\">\n            <div class=\"prdctBorderdImg\">\n              <img src=\"assets/img/current-booking-1.png\">\n            </div>\n            <div class=\"prodctDetail\">\n              <div>\n                <div class=\"prodctTitleWL\">Wella Shampoo</div>\n                  <div class=\"finalPriceTag\">&#8377;200</div>\n                </div>\n            </div>    \n          <div class=\"buyNowButton\">\n            <button ion-button class=\"buy_button\">Add to Cart</button>\n          </div>\n        </div> \n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"outerBorderedBox\">\n            <div class=\"prdctBorderdImg\">\n              <img src=\"assets/img/current-booking-1.png\">\n            </div>\n            <div class=\"prodctDetail\">\n              <div>\n                <div class=\"prodctTitleWL\">Wella Shampoo</div>\n                  <div class=\"finalPriceTag\">&#8377;200</div>\n                </div>\n            </div>    \n          <div class=\"buyNowButton\">\n            <button ion-button class=\"buy_button\">Add to Cart</button>\n          </div>\n        </div> \n        </ion-slide>\n       \n      </ion-slides>\n  \n    </ion-col>\n  </ion-row>\n  </div>\n\n  <ion-row style=\"margin-top: 20px;\">\n    <ion-col size=\"12\">\n      <div class=\"descrTxtTitle\">Specifications</div>\n      <div style=\"margin-top: 5px;display: inline-block;width: 100%;\">\n        <div class=\"specificationsPoints\">\n          <span class=\"list_point\"></span> 95% natural-origin\n        </div>\n        <div class=\"specificationsPoints\">\n          <span class=\"list_point\"></span> 99% biodegradable\n        </div>\n        <div class=\"specificationsPoints\">\n          <span class=\"list_point\"></span> no silicones\n        </div>\n        <div class=\"specificationsPoints\">\n          <span class=\"list_point\"></span> no parabens\n        </div>\n        <div class=\"specificationsPoints\">\n          <span class=\"list_point\"></span> no artificial colorants\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 20px;\">\n    <ion-col size=\"12\">\n      <div class=\"descrTxtTitle\">Ratings & Feedback</div>\n      <div class=\"ratingList\" style=\"margin-top: 10px;\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <div class=\"ratingOuterBox flexBox\">\n              <div class=\"profilePicRating\">\n                <img src=\"assets/img/profile-1.png\">\n              </div>\n              <div class=\"commentBoxRating flexBox\">\n                <div class=\"leftCommetnTxt\">\n                   <div class=\"commenttxt\">Verna Hicks rated it</div> \n                   <div class=\"flexBox likeCommentBox\">\n                     <span class=\"likeTxt\">Like</span>\n                     <span class=\"commentTxt\">Comment</span>\n                    </div>\n                </div>\n                <div class=\"startCommentBox\">\n                    <div class=\"\">\n                      <ion-icon name=\"star-outline\"></ion-icon>\n                      <ion-icon name=\"star-outline\"></ion-icon>\n                      <ion-icon name=\"star-outline\"></ion-icon>\n                      <ion-icon name=\"star-outline\"></ion-icon>\n                      <ion-icon name=\"star-outline\"></ion-icon>\n                    </div>\n                </div>\n              </div>\n            </div>  \n            <div class=\"ratingOuterBox flexBox\">\n              <div class=\"profilePicRating\">\n                <img src=\"assets/img/profile-1.png\">\n              </div>\n              <div class=\"commentBoxRating flexBox\">\n                <div class=\"leftCommetnTxt\">\n                   <div class=\"commenttxt\">Verna Hicks rated it</div> \n                   <div class=\"flexBox likeCommentBox\">\n                     <span class=\"likeTxt\">Like</span>\n                     <span class=\"commentTxt\">Comment</span>\n                    </div>\n                </div>\n                <div class=\"startCommentBox\">\n                    <div class=\"\">\n                      <ion-icon name=\"star-outline\"></ion-icon>\n                      <ion-icon name=\"star-outline\"></ion-icon>\n                      <ion-icon name=\"star-outline\"></ion-icon>\n                      <ion-icon name=\"star-outline\"></ion-icon>\n                      <ion-icon name=\"star-outline\"></ion-icon>\n                    </div>\n                </div>\n              </div>\n            </div>  \n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"bottom_action_buttons\">\n        <div class=\"saveButton\"><ion-icon name=\"heart-outline\"></ion-icon> SAVE</div>\n        <div class=\"addToCartBtn\">ADD TO CART</div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_productdetail_productdetail_module_ts.js.map