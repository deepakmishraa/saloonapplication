(self["webpackChunksalonwaale"] = self["webpackChunksalonwaale"] || []).push([["common"],{

/***/ 8225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 9461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 7506:
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.page.html */ 538);
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss */ 6954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






let MenuPage = class MenuPage {
    constructor(router, popoverController) {
        this.router = router;
        this.popoverController = popoverController;
    }
    ngOnInit() {
    }
    gotoNav(e) {
        this.router.navigate([e]);
        this.popoverController.dismiss();
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuPage);



/***/ }),

/***/ 6954:
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 538:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <div class=\"menuMainBox\">\n    <div class=\"top_profile_box\">\n      <span class=\"homeIconMenuScreen\"><ion-icon name=\"home-outline\"></ion-icon></span>\n      <img src=\"assets/img/menu-top.png\">\n      <div class=\"profileName\">Hairen</div>\n      <div class=\"profileMobile\">99934999</div>\n    </div>\n    \n    <div class=\"menuBox\">\n      <div class=\"menuParent\" style=\"border-top: 1px solid #eee;\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-1.png\">\n        </span>\n        <span class=\"rightMenuTxt\">Edit Profile</span>\n      </div>\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-10.png\">\n        </span>\n        <span class=\"rightMenuTxt\">Resource Manager</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('shop')\">Product Shop</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('brandlevel2')\">Brand Category</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('catalog')\">Catalog</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('discount')\">Discount</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('servicelist')\">Service List</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('brands')\">Brands</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('productdetail')\">Product Details</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('checkout')\">Checkout</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('thankyou')\">Thank you</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('bookingconf')\">Booking Confirmation</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('currentbookingstatus')\">Current Booking Status</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('trackorder')\">Track Order</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('cancelorder')\">Cancel Order</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('refund')\">Refund</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-3.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('prevorder')\">Previous Order</span>\n      </div>\n      \n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-5.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('prevorder')\">Booking History</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-6.png\">\n        </span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('discount')\">Offers</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\"><img src=\"assets/img/icon-7.png\"></span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('wishlist')\">Wishlist</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\"><img src=\"assets/img/icon-7.png\"></span>\n        <span class=\"rightMenuTxt\" (click)=\"gotoNav('cart')\">Cart</span>\n      </div>\n\n      <div class=\"menuParent\">\n        <span class=\"iconLeft\">\n          <img src=\"assets/img/icon-4.png\">\n        </span>\n        <span class=\"rightMenuTxt\">My Pocket</span>\n      </div>\n\n      <div class=\"menuParent logoutMenu\" style=\"justify-content: center; padding-top: 40px;\">\n        <span class=\"iconLeft\"><img src=\"assets/img/icon-8.png\"></span>\n        <span class=\"rightMenuTxt\" style=\"font-weight: normal;\">Logout</span>\n        <span class=\"iconLeft\" style=\"margin-left: 15px;\"><img style=\"width: auto;height: 20px;\" src=\"assets/img/icon-9.png\"></span>\n      </div>\n\n\n    </div>\n  </div>\n\n</ion-content> \n");

/***/ })

}]);
//# sourceMappingURL=common.js.map