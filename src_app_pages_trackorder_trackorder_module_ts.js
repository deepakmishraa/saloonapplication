(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["src_app_pages_trackorder_trackorder_module_ts"],{

/***/ 8841:
/*!***************************************************************!*\
  !*** ./src/app/pages/trackorder/trackorder-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackorderPageRoutingModule": () => (/* binding */ TrackorderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _trackorder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trackorder.page */ 7667);




const routes = [
    {
        path: '',
        component: _trackorder_page__WEBPACK_IMPORTED_MODULE_0__.TrackorderPage
    }
];
let TrackorderPageRoutingModule = class TrackorderPageRoutingModule {
};
TrackorderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrackorderPageRoutingModule);



/***/ }),

/***/ 4596:
/*!*******************************************************!*\
  !*** ./src/app/pages/trackorder/trackorder.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackorderPageModule": () => (/* binding */ TrackorderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _trackorder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trackorder-routing.module */ 8841);
/* harmony import */ var _trackorder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trackorder.page */ 7667);







let TrackorderPageModule = class TrackorderPageModule {
};
TrackorderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trackorder_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrackorderPageRoutingModule
        ],
        declarations: [_trackorder_page__WEBPACK_IMPORTED_MODULE_1__.TrackorderPage]
    })
], TrackorderPageModule);



/***/ }),

/***/ 7667:
/*!*****************************************************!*\
  !*** ./src/app/pages/trackorder/trackorder.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackorderPage": () => (/* binding */ TrackorderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_trackorder_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./trackorder.page.html */ 525);
/* harmony import */ var _trackorder_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trackorder.page.scss */ 6211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.page */ 7506);






let TrackorderPage = class TrackorderPage {
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
TrackorderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
TrackorderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-trackorder',
        template: _raw_loader_trackorder_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_trackorder_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrackorderPage);



/***/ }),

/***/ 6211:
/*!*******************************************************!*\
  !*** ./src/app/pages/trackorder/trackorder.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFja29yZGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 525:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trackorder/trackorder.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"borderBottomLight\">\n  <ion-toolbar>\n    <div class=\"headerContainer\">\n      <div class=\"menuOpener\">\n        <ion-icon name=\"menu-outline\" (click)=\"menuOpen()\"></ion-icon>\n      </div>\n      <div class=\"centerPageTitle\" style=\"font-weight: 600;\">Current Booking Status</div>\n      <div class=\"headerRightTool\">\n        <span class=\"searchIcon\" style=\"color: #F26B35;transform: rotate(-45deg); font-size: 25px;\"><ion-icon name=\"notifications-outline\"></ion-icon></span>\n        <span class=\"filterIcon\" style=\"color: #F26B35; font-size: 25px;\"><ion-icon name=\"cart-outline\"></ion-icon></span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"innerShadower\">\n        <div class=\"flexBoxInner\">\n          <div class=\"leftOrderDetail\">\n            <div class=\"imgCrrentOrdr\">\n              <img src=\"assets/img/current-booking-1.png\">\n            </div>\n            <div class=\"currentProdDetail\">\n              <div>Order ID: 8374398</div>\n              <div style=\"font-weight: 600; margin: 5px 0;\">Volume Bloom</div>\n              <div>Body Lotion</div>\n            </div>\n          </div>\n          <div class=\"rightOrderDetail\">\n             <div><ion-icon name=\"repeat-outline\"></ion-icon> <span style=\"color: #2496ff;\">Reorder</span></div>\n             <div>Date: 20/11/2018</div> \n             <div style=\"font-weight: 600;\">Time left: 20 Min</div>\n             <div style=\"font-weight: 600;\">Time Alloted : 2 PM</div>\n          </div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row> \n  \n  \n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"trackInnerBox\">\n        <div class=\"trackingStep\">\n          <div class=\"leftSignTrck active\">\n            <div class=\"innerSymbolSign\"></div>\n          </div>\n          <div class=\"trackInfo\">\n            <div class=\"orderStatus\">Order Confirm</div>\n            <div class=\"approxTime\">Approximate Time Left : 20 min</div>\n          </div>\n        </div>\n\n        <div class=\"trackingStep\">\n          <div class=\"leftSignTrck\">\n            <div class=\"innerSymbolSign\"></div>\n          </div>\n          <div class=\"trackInfo\">\n            <div class=\"orderStatus\">Shipping Maharashtra</div>\n            <div class=\"approxTime\">Approximate Time Left : 2 Days</div>\n          </div>\n        </div>\n\n        <div class=\"trackingStep finalStep\">\n          <div class=\"leftSignTrck\">\n            <div class=\"innerSymbolSign\"></div>\n          </div>\n          <div class=\"trackInfo\">\n            <div class=\"orderStatus\">Final Shipping</div>\n            <div class=\"approxTime\">Home</div>\n          </div>\n        </div>\n        </div>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_trackorder_trackorder_module_ts.js.map