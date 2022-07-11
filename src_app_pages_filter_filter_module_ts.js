(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_filter_filter_module_ts"],{

/***/ 7047:
/*!*******************************************************!*\
  !*** ./src/app/pages/filter/filter-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPageRoutingModule": () => (/* binding */ FilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.page */ 9415);




const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_0__.FilterPage
    }
];
let FilterPageRoutingModule = class FilterPageRoutingModule {
};
FilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilterPageRoutingModule);



/***/ }),

/***/ 6827:
/*!***********************************************!*\
  !*** ./src/app/pages/filter/filter.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPageModule": () => (/* binding */ FilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-routing.module */ 7047);
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page */ 9415);







let FilterPageModule = class FilterPageModule {
};
FilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilterPageRoutingModule
        ],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_1__.FilterPage]
    })
], FilterPageModule);



/***/ }),

/***/ 9415:
/*!*********************************************!*\
  !*** ./src/app/pages/filter/filter.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPage": () => (/* binding */ FilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter.page.html */ 3489);
/* harmony import */ var _filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page.scss */ 9203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let FilterPage = class FilterPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() {
        this.genderShow = true;
        this.pricesShow = true;
        this.avgShow = true;
        this.colorShow = true;
        this.concernShow = true;
        this.concernfilterShow = true;
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
    gender() {
        if (this.genderShow == true) {
            this.genderShow = false;
        }
        else {
            this.genderShow = true;
        }
    }
    price() {
        if (this.pricesShow == true) {
            this.pricesShow = false;
        }
        else {
            this.pricesShow = true;
        }
    }
    avg() {
        if (this.avgShow == true) {
            this.avgShow = false;
        }
        else {
            this.avgShow = true;
        }
    }
    color() {
        if (this.colorShow == true) {
            this.colorShow = false;
        }
        else {
            this.colorShow = true;
        }
    }
    concern() {
        if (this.concernShow == true) {
            this.concernShow = false;
        }
        else {
            this.concernShow = true;
        }
    }
    concernfilter() {
        if (this.concernfilterShow == true) {
            this.concernfilterShow = false;
        }
        else {
            this.concernfilterShow = true;
        }
    }
};
FilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
FilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-filter',
        template: _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterPage);



/***/ }),

/***/ 9203:
/*!***********************************************!*\
  !*** ./src/app/pages/filter/filter.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".title {\n  color: var(--gravel-22);\n  font-family: \"GlacialIndifference-Regular\";\n  font-size: 30px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 20px;\n  min-height: 25px;\n  font-style: normal;\n  font-weight: 400 !important;\n}\n\n@font-face {\n  font-family: \"GlacialIndifference-Regular\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/GlacialIndifference-Regular\") format(\"opentype\");\n}\n\n.gender-1 {\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 12px;\n  min-height: 18px;\n}\n\ninput[type=checkbox] {\n  accent-color: orange;\n}\n\n.checkboxtext {\n  font-weight: 700 !important;\n  text-transform: capitalize;\n}\n\n.filtertitles {\n  color: var(--gravel-22);\n  font-family: \"GlacialIndifference-Regular\";\n  font-size: 25px;\n  font-weight: 700;\n  letter-spacing: 0;\n  line-height: 20px;\n  min-height: 25px;\n  font-style: normal;\n  font-weight: 400 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUYsa0JBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUVFO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUZBQUE7QUFDSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxvQkFBQTtBQURKOztBQUdFO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdFO0VBQ0UsdUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVGLGtCQUFBO0VBQ0EsMkJBQUE7QUFERiIsImZpbGUiOiJmaWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF2ZWwtMjIpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyXCI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XHJcblxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR2xhY2lhbEluZGlmZmVyZW5jZS1SZWd1bGFyXCI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiB1cmwoXCJodHRwczovL2ZvbnRzLmFuaW1hYXBwLmNvbS9HbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXJcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmdlbmRlci0xIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgbWluLWhlaWdodDogMThweDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIGFjY2VudC1jb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuICAuY2hlY2tib3h0ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAuZmlsdGVydGl0bGVze1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXZlbC0yMik7XHJcbiAgICBmb250LWZhbWlseTogXCJHbGFjaWFsSW5kaWZmZXJlbmNlLVJlZ3VsYXJcIjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjVweDtcclxuXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 3489:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\"\n          ><ion-icon name=\"search-outline\"></ion-icon\n        ></span>\n        <span class=\"filterIcon\"><img src=\"assets/img/filter-icon.png\" /></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: white\">\n  <div class=\"\">\n    <ion-searchbar></ion-searchbar>\n  </div>\n  <div style=\"padding: 30px\">\n    <p class=\"title\">Filters</p>\n    <div class=\"container\">\n      <div class=\"row pt-2\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\">Gender</p>\n        </div>\n        <div class=\"col-2\" (click)=\"gender()\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"this.genderShow == true\">\n        <div class=\"col-6\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext px-2\">Man</span>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext px-2\">Women</span>\n        </div>\n      </div>\n\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\">Prices</p>\n        </div>\n        <div class=\"col-2\" (click)=\"price()\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"this.pricesShow == true\">\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Rs. 0 - Rs. 499 (448)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Rs. 500 - Rs. 999 (199)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\"\n            >Rs. 1000 - Rs. 1999 (22)</span\n          >\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Rs. 2000 - Rs. 3999 (3)</span>\n        </div>\n      </div>\n\n      <div class=\"row pt-3\" (click)=\"avg()\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\" style=\"font-size: 22px !important\">\n            AVG CUSTOMER RATING\n          </p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"this.avgShow == true\">\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">3 start & Above(638)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">start & Above(645)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">1 start & Above(645)</span>\n        </div>\n      </div>\n\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\" style=\"font-size: 22px !important\">Color</p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">pink (156)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Red (118)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Node (75)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">brown (74)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">orange (64)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Maroon (61)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">black (39)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">purple (21)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">green (17)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">blue (14)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">gray (12)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">multi-color (9)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">gold (6)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">silver (5)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Yellow (5)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">transprant (3)</span>\n        </div>\n      </div>\n\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\" style=\"font-size: 22px !important\">\n            Concern Filters\n          </p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">sun protection (72)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">dullness (45)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">dryness (40)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">acne/blemishes (31)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\"\n            >dark sports/pigmention (25)</span\n          >\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">uneven skin tone (21)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">chapped lips (17)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">chapped lips (16)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Daily use (13)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Anti-tan (16)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">fin lines/wrinkles (7)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">under eye Concern (6)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\"\n            >pores/blackheads/whiteheads (4)</span\n          >\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">sun damage (3)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">oli Control (3)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">anti-ageing (3)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">wrinkles (2)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">fiming (2)</span>\n        </div>\n      </div>\n\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\" style=\"font-size: 22px !important\">\n            Concern Filters\n          </p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">gel (5)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">satin (3)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">mattalic (3)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">specialEffects (2)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">clear (2)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Glitter (1)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">chapped lips (17)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">chapped lips (16)</span>\n        </div>\n        <div class=\"col-12\">\n          <input type=\"checkbox\" />\n          <span class=\"checkboxtext fw-bold px-2\">Daily-use (13)</span>\n        </div>\n      </div>\n\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p\n            class=\"filtertitles\"\n            style=\"\n              font-size: 25px !important;\n              text-transform: uppercase !important;\n            \"\n          >\n            other Filters\n          </p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\" style=\"font-size: 22px !important\">\n            benefits\n          </p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\" style=\"font-size: 22px !important\">\n            skin type\n          </p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\" style=\"font-size: 22px !important\">\n            skin type\n          </p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\" style=\"font-size: 22px !important\">\n            coverage\n          </p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\" style=\"font-size: 22px !important\">\n            preferance\n          </p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row pt-3\">\n        <div class=\"col-10\">\n          <p class=\"filtertitles\" style=\"font-size: 22px !important\">SPF</p>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_filter_filter_module_ts.js.map