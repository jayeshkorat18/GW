webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/pages/help/help.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.submitAttempt = false;
        this.isProfile = false;
        var profileData;
        if (Boolean(localStorage.getItem('profileData'))) {
            profileData = JSON.parse(localStorage.getItem('profileData'));
            this.isProfile = true;
        }
        this.register = this.formBuilder.group({
            name: [Boolean(profileData) ? profileData.name : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(50)])],
            age: [Boolean(profileData) ? profileData.age : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(3)])],
            height: [Boolean(profileData) ? profileData.height : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(3)])],
            weight: [Boolean(profileData) ? profileData.weight : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(3)])],
            type: [Boolean(profileData) ? profileData.type : '1'],
            dailyvalue: [Boolean(profileData) ? profileData.dailyvalue : ''],
            isMadication: [Boolean(profileData) ? profileData.isMadication : false],
            sulfonylureas: [Boolean(profileData) ? profileData.sulfonylureas : false],
            biguanides: [Boolean(profileData) ? profileData.biguanides : false],
            aglucosidese: [Boolean(profileData) ? profileData.aglucosidese : false],
            injection: [Boolean(profileData) ? profileData.injection : false]
        });
    }
    ProfilePage.prototype.resetBox = function () {
        this.register.controls['sulfonylureas'].setValue(false);
        this.register.controls['biguanides'].setValue(false);
        this.register.controls['aglucosidese'].setValue(false);
        this.register.controls['injection'].setValue(false);
    };
    ProfilePage.prototype.registerUser = function (form) {
        this.submitAttempt = true;
        if (this.register.valid) {
            if (form.type != 1) {
                if (form.dailyvalue >= 75 && form.dailyvalue <= 200) {
                    console.log(form);
                    localStorage.setItem('profileData', JSON.stringify(form));
                    this.goHome();
                }
                else {
                    var msg = Boolean(form.dailyvalue) ? 'Please enter average daily glucose value between 75 and 200' : 'Please enter average daily glucose value';
                    this.showTost(msg);
                }
            }
            else {
                //console.log(form);
                localStorage.setItem('profileData', JSON.stringify(form));
                this.showTost('Your profile successfully updated');
                this.goHome();
            }
        }
    };
    ProfilePage.prototype.goHome = function () {
        if (!this.isProfile) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    ProfilePage.prototype.showTost = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-home',template:/*ion-inline-start:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/pages/profile/profile.html"*/'<ion-header *ngIf="isProfile">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 *ngIf="!isProfile">Sign Up</h1>\n  <form [formGroup]="register" (ngSubmit)="registerUser(register.value)">\n    <div class="formContainer">\n      <div class="input-item">\n        <ion-item-divider color="light">Identity Information</ion-item-divider>\n        <ion-input type="text" formControlName="name" [class.invalid]="!register.controls.name.valid && submitAttempt && (register.controls.name.dirty || submitAttempt)"\n          placeholder="Name*"></ion-input>\n        <control-messages [control]="register.controls.name" Name="name" [submitAttempt]="submitAttempt"></control-messages>\n      </div>\n      <div class="input-item">\n        <ion-input type="number" formControlName="age" [class.invalid]="!register.controls.age.valid && submitAttempt && (register.controls.age.dirty || submitAttempt)"\n          placeholder="Age*"></ion-input>\n        <control-messages [control]="register.controls.age" Name="age" [submitAttempt]="submitAttempt"></control-messages>\n      </div>\n      <div class="input-item with-image">\n        <ion-item-divider color="light" class="margin-top-15">Physiological Information</ion-item-divider>\n        <div class="input-img">\n          <img src="assets/imgs/check.png" />\n        </div>\n        <ion-input type="number" formControlName="height" [class.invalid]="!register.controls.height.valid && submitAttempt && (register.controls.height.dirty || submitAttempt)"\n          placeholder="Height(inches)*"></ion-input>\n        <control-messages [control]="register.controls.height" Name="height" [submitAttempt]="submitAttempt"></control-messages>\n\n      </div>\n      <div class="input-item with-image">\n        <div class="input-img">\n          <img src="assets/imgs/check.png" />\n        </div>\n        <ion-input type="number" formControlName="weight" [class.invalid]="!register.controls.weight.valid && submitAttempt && (register.controls.weight.dirty || submitAttempt)"\n          placeholder="Weight(pound)*"></ion-input>\n        <control-messages [control]="register.controls.weight" Name="weight" [submitAttempt]="submitAttempt"></control-messages>\n      </div>\n      <div class="input-item">\n        <ion-item-divider color="light" class="margin-top-15">Medical Diagnostic</ion-item-divider>\n        <div class="lavel-lable">Bood Glucose Level Range*</div>\n        <ion-list radio-group formControlName="type" class="radio-group">\n          <label>\n            <ion-radio [value]="1"></ion-radio>\n            <span>No</span>\n          </label>\n          <label>\n            <ion-radio [value]="2"></ion-radio>\n            <span>Type 1</span>\n          </label>\n          <label>\n            <ion-radio [value]="3"></ion-radio>\n            <span>Type 2</span>\n          </label>\n        </ion-list>\n      </div>\n      <div class="bottom-block" *ngIf="register.controls.type.value!=\'1\'">\n        <div class="input-item">\n          <ion-item-divider color="light" class="margin-top-15">What is your average daily glucose value upon awakening in the morning?</ion-item-divider>\n          <ion-input type="number" formControlName="dailyvalue" [class.invalid]="!register.controls.dailyvalue.valid && submitAttempt && (register.controls.dailyvalue.dirty || submitAttempt)"\n            placeholder="Enter a value between 75 and 200*"></ion-input>\n        </div>\n        <div class="input-item">\n          <ion-item-divider color="light" class="">Medication</ion-item-divider>\n          <ion-row>\n            <label col-12>\n              <ion-checkbox (click)="resetBox()" formControlName="isMadication"></ion-checkbox>\n              <span>No Madication</span>\n            </label>\n          </ion-row>\n        </div>\n        <div class="input-item">\n          <ion-row>\n            <div class="label" col-6 >\n              <ion-checkbox formControlName="sulfonylureas" [disabled]="register.controls.isMadication.value"></ion-checkbox>\n              <span>Sulfonylureas</span>\n            </div>\n            <div col-6> Chlorpropamind,<br>Tolazamide,<br>Tolbutamide</div>\n          </ion-row>\n        </div>\n        <div class="input-item">\n          <ion-row>\n            <div class="label" col-6>\n              <ion-checkbox formControlName="biguanides" [disabled]="register.controls.isMadication.value"></ion-checkbox>\n              <span>Biguanides</span>\n            </div>\n            <div col-6> Metformin</div>\n          </ion-row>\n        </div>\n        <div class="input-item">\n          <ion-row>\n            <div class="label" col-6>\n              <ion-checkbox formControlName="aglucosidese" [disabled]="register.controls.isMadication.value"></ion-checkbox>\n              <span>a-glucosidase</span>\n            </div>\n            <div col-6> Miglitol,<br>Acarbose</div>\n          </ion-row>\n        </div>\n        <div class="input-item">\n          <ion-row>\n            <div class="label" col-6>\n              <ion-checkbox formControlName="injection" [disabled]="register.controls.isMadication.value"></ion-checkbox>\n              <span>Insulin Injection</span>\n            </div>\n            \n          </ion-row>\n        </div>\n      </div>\n      <div class="bottomContainer">\n        <!-- [disabled]="!register.valid" -->\n        <button ion-button full class="">\n          <span class="btn-text">{{isProfile ? \'Update\' : \'Sign Up Now\'}}</span>\n        </button>\n      </div>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/pages/test/test.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Test</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/pages/test/test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationProvider; });
var ValidationProvider = /** @class */ (function () {
    function ValidationProvider() {
    }
    ValidationProvider.getValidatorErrorMessage = function (controlName, validatorName, validatorValue) {
        var validation_messages = {
            'name': {
                required: 'Please enter Name',
            },
            'age': {
                required: 'Please enter age',
                maxlength: "Age maximum of " + validatorValue.requiredLength + " digit",
            },
            'height': {
                required: 'Please enter height',
                maxlength: "Height maximum of " + validatorValue.requiredLength + " digit",
            },
            'weight': {
                required: 'Please enter weight',
                maxlength: "Weight maximum of " + validatorValue.requiredLength + " digit",
            }
        };
        return validation_messages[controlName][validatorName];
    };
    return ValidationProvider;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_help_help__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_test_test__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_common_control_messages_control_messages_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_validation_validation__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_common_control_messages_control_messages_component__["a" /* ControlMessagesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_test_test__["a" /* TestPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_validation_validation__["a" /* ValidationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_help_help__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_test_test__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */];
        this.initializeApp();
        if (Boolean(localStorage.getItem('profileData'))) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        }
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Test', component: __WEBPACK_IMPORTED_MODULE_8__pages_test_test__["a" /* TestPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'History', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_7__pages_help_help__["a" /* HelpPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validation_validation__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (!this.control.valid && this.submitAttempt && (this.control.dirty || this.submitAttempt)) {
                    return __WEBPACK_IMPORTED_MODULE_2__providers_validation_validation__["a" /* ValidationProvider */].getValidatorErrorMessage(this.Name, propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */])
    ], ControlMessagesComponent.prototype, "control", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ControlMessagesComponent.prototype, "submitAttempt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ControlMessagesComponent.prototype, "Name", void 0);
    ControlMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'control-messages',
            template: "<div *ngIf=\"errorMessage !== null\" class=\"error\">{{errorMessage}}</div>"
        }),
        __metadata("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());

//# sourceMappingURL=control-messages.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_help__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.gotoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__help_help__["a" /* HelpPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary (click)="gotoPage()" >Go Page</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Tejas/Sites/ionic/GlucoseWizard/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map