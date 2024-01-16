(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/androiddev/androiddev.component.css":
/*!*****************************************************!*\
  !*** ./src/app/androiddev/androiddev.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/androiddev/androiddev.component.html":
/*!******************************************************!*\
  !*** ./src/app/androiddev/androiddev.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-main\">\r\n  <section class=\"colorlib-about\" data-section=\"about\">\r\n     <div class=\"colorlib-narrow-content\">\r\n        <div class=\"row\">\r\n           <div class=\"col-md-12\">\r\n              <div class=\"row row-bottom-padded-sm animate-box\" data-animate-effect=\"fadeInLeft\">\r\n                 <div class=\"col-md-12\">\r\n                    <div class=\"about-desc\">\r\n                       <h2>Android Development</h2>\r\n                       <div class=\"col-md-12\">\r\n                          <tr class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInRight\" *ngFor=\"let androiddev of details.androiddevproject\">\r\n                           <hr>  \r\n                           <br>\r\n                             <ul class=\"fa-ul mb-0\">\r\n                                <!-- <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInRight\"> -->\r\n                                <li>\r\n                                   <i class=\"fa-li fa fa-check\"></i>\r\n                                   <div>\r\n                                      <a href=\"{{androiddev.preview}}\" style=\"text-decoration:none;\">\r\n                                         <div>\r\n                                            <h4 class=\"mb-3\">{{androiddev.projectname}}</h4>\r\n                                         </div>\r\n                                         <div\r\n                                            class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-3\">\r\n                                            <div id=\"divMain\">\r\n                                               <div id='left-div' class=\"resume-content\">\r\n                                                  <img style='float:left; margin:0 20px;' width='300px;' class='img-fluid'\r\n                                                     src='{{androiddev.image}}'>\r\n                                               </div>\r\n                                               <div id='right-div' class='resume-content'>\r\n                                                  <div class=\"subheading mb-0\">\r\n                                                     <p>{{androiddev.summary}}</p>\r\n                                                  </div>\r\n                                                  <div class=\"mb-0\">\r\n                                                     <span class='badge badge-secondary' *ngFor=\"let techs of androiddev.techstack\"> {{techs.name}}</span>\r\n                                                  </div>\r\n                                                  <br>\r\n                                               </div>\r\n                                            </div>\r\n                                         </div>\r\n                                      </a>\r\n                                   </div>\r\n                                </li>\r\n                             </ul>\r\n                           </tr>\r\n                       </div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/androiddev/androiddev.component.ts":
/*!****************************************************!*\
  !*** ./src/app/androiddev/androiddev.component.ts ***!
  \****************************************************/
/*! exports provided: AndroiddevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroiddevComponent", function() { return AndroiddevComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/details */ "./src/app/shared/details.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AndroiddevComponent = /** @class */ (function () {
    function AndroiddevComponent() {
        this.details = _shared_details__WEBPACK_IMPORTED_MODULE_1__["DETAILS"];
    }
    AndroiddevComponent.prototype.ngOnInit = function () {
    };
    AndroiddevComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-androiddev',
            template: __webpack_require__(/*! ./androiddev.component.html */ "./src/app/androiddev/androiddev.component.html"),
            styles: [__webpack_require__(/*! ./androiddev.component.css */ "./src/app/androiddev/androiddev.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AndroiddevComponent);
    return AndroiddevComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _androiddev_androiddev_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../androiddev/androiddev.component */ "./src/app/androiddev/androiddev.component.ts");
/* harmony import */ var _cpprofile_cpprofile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cpprofile/cpprofile.component */ "./src/app/cpprofile/cpprofile.component.ts");
/* harmony import */ var _softwaredev_softwaredev_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../softwaredev/softwaredev.component */ "./src/app/softwaredev/softwaredev.component.ts");
/* harmony import */ var _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webdev/webdev.component */ "./src/app/webdev/webdev.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'androiddev', component: _androiddev_androiddev_component__WEBPACK_IMPORTED_MODULE_1__["AndroiddevComponent"] },
    { path: 'cpprofile', component: _cpprofile_cpprofile_component__WEBPACK_IMPORTED_MODULE_2__["CpprofileComponent"] },
    { path: 'softwaredev', component: _softwaredev_softwaredev_component__WEBPACK_IMPORTED_MODULE_3__["SoftwaredevComponent"] },
    { path: 'webdev', component: _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_4__["WebdevComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-page\">\r\n  <div class=\"container-wrap\">\r\n      <a href=\"#\" id=\"navToggleIcon\" (click)=navClick() class=\"js-colorlib-nav-toggle colorlib-nav-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n          <i></i>\r\n      </a>  \r\n      <!-- GitHub Ribbon -->\r\n      <a href=\"https://github.com/AkshayChavan7\" class=\"github-corner\" aria-label=\"View source on GitHub\">\r\n        <svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\">\r\n           <path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path>\r\n           <path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path>\r\n           <path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path>\r\n        </svg>\r\n     </a>\r\n      <app-sidebar id=\"sideNav\" style=\"visibility: visible;\"></app-sidebar>\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular';
    }
    AppComponent.prototype.navClick = function () {
        // console.log('test->',document.getElementById('sideNav').style.visibility);
        if (document.getElementById('sideNav').style.visibility == 'visible') {
            console.log('yes');
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _androiddev_androiddev_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./androiddev/androiddev.component */ "./src/app/androiddev/androiddev.component.ts");
/* harmony import */ var _cpprofile_cpprofile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cpprofile/cpprofile.component */ "./src/app/cpprofile/cpprofile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webdev/webdev.component */ "./src/app/webdev/webdev.component.ts");
/* harmony import */ var _softwaredev_softwaredev_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./softwaredev/softwaredev.component */ "./src/app/softwaredev/softwaredev.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _cpprofile_cpprofile_component__WEBPACK_IMPORTED_MODULE_4__["CpprofileComponent"],
                _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_7__["WebdevComponent"],
                _softwaredev_softwaredev_component__WEBPACK_IMPORTED_MODULE_8__["SoftwaredevComponent"],
                _androiddev_androiddev_component__WEBPACK_IMPORTED_MODULE_3__["AndroiddevComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cpprofile/cpprofile.component.css":
/*!***************************************************!*\
  !*** ./src/app/cpprofile/cpprofile.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cpprofile/cpprofile.component.html":
/*!****************************************************!*\
  !*** ./src/app/cpprofile/cpprofile.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-main\">\r\n  <!------Skills---------------->\r\n  <section class=\"colorlib-skills\" data-section=\"skills\">\r\n     <div class=\"colorlib-narrow-content\">\r\n        <div class=\"row\">\r\n           <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\r\n              <!--\t<span class=\"heading-meta\">My Specialty</span> -->\r\n              <h2>Profile Links</h2>\r\n              <hr>\r\n           </div>\r\n        </div>\r\n        <div class=\"row\">\r\n           <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInLeft\" *ngFor=\"let profile of details.cpprofile\">\r\n              <div class=\"progress-wrap\">\r\n                 <strong>\r\n                    <a href=\"{{profile.link}}\">\r\n                       <p style=\"color:firebrick\">{{profile.name}}</p>\r\n                    </a>\r\n                 </strong>\r\n              </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </section>\r\n  <section class=\"colorlib-skills\" data-section=\"skills\">\r\n     <div class=\"colorlib-narrow-content\">\r\n        <div class=\"row\">\r\n           <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\r\n              <!--\t<span class=\"heading-meta\">My Specialty</span> -->\r\n              <h2>Social Links</h2>\r\n              <hr>\r\n           </div>\r\n        </div>\r\n        <div class=\"row\">\r\n         <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInLeft\" *ngFor=\"let socialprofile of details.socialMedia\">\r\n            <div class=\"progress-wrap\">\r\n               <strong>\r\n                  <a href=\"{{socialprofile.link}}\">\r\n                     <p style=\"color:dodgerblue\">{{socialprofile.name}}</p>\r\n                  </a>\r\n               </strong>\r\n            </div>\r\n         </div>\r\n      </div>\r\n     </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/cpprofile/cpprofile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cpprofile/cpprofile.component.ts ***!
  \**************************************************/
/*! exports provided: CpprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpprofileComponent", function() { return CpprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/details */ "./src/app/shared/details.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CpprofileComponent = /** @class */ (function () {
    function CpprofileComponent() {
        this.details = _shared_details__WEBPACK_IMPORTED_MODULE_1__["DETAILS"];
    }
    CpprofileComponent.prototype.ngOnInit = function () {
    };
    CpprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cpprofile',
            template: __webpack_require__(/*! ./cpprofile.component.html */ "./src/app/cpprofile/cpprofile.component.html"),
            styles: [__webpack_require__(/*! ./cpprofile.component.css */ "./src/app/cpprofile/cpprofile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CpprofileComponent);
    return CpprofileComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-main\">\r\n  <!-----Introduction ----------->\r\n  <section class=\"colorlib-about\" data-section=\"about\" id=\"about\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div\r\n            class=\"row row-bottom-padded-sm animate-box\"\r\n            data-animate-effect=\"fadeInLeft\"\r\n          >\r\n            <div class=\"col-md-12\">\r\n              <div class=\"about-desc\">\r\n                <!-- <h1 style=\"color: #f9bf3f\"><strong>{{details.name}}</strong></h1> -->\r\n                <h1>\r\n                  <strong\r\n                    >Akshay <span style=\"color: #f9bf3f\">Chavan</span></strong\r\n                  >\r\n                </h1>\r\n                <hr />\r\n                <p\r\n                  style=\"text-align: justify\"\r\n                  *ngFor=\"let summary of details.summary\"\r\n                >\r\n                  {{ summary }}\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInRight\">\r\n          <a routerLink=\"cpprofile\" routerLinkActive=\"router-link-active\">\r\n            <div class=\"services color-5 profile-box\">\r\n              <span class=\"icon2\"><i class=\"fa fa-desktop\"></i></span>\r\n              <h3>\r\n                Programming<br />\r\n                Profile\r\n              </h3>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInRight\">\r\n          <a routerLink=\"/webdev\">\r\n            <div class=\"services color-2 profile-box\">\r\n              <span class=\"icon2\"><i class=\"fa fa-code\"></i></span>\r\n              <h3>\r\n                Web<br />\r\n                Designing\r\n              </h3>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInRight\">\r\n          <a routerLink=\"/softwaredev\">\r\n            <div class=\"services color-3 profile-box\">\r\n              <span class=\"icon2\"><i class=\"fa fa-terminal\"></i></span>\r\n              <h3>Software Development</h3>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInRight\">\r\n          <a routerLink=\"/androiddev\">\r\n            <div class=\"services color-4 profile-box\">\r\n              <span class=\"icon2\"><i class=\"fa fa-android\"></i></span>\r\n              <h3>Android Applications</h3>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!------Programming profiles---------------->\r\n  <!-- <section class=\"colorlib-pp\" data-section=\"programming-profiles\" id=\"programming-profiles\">\r\n      <div class=\"colorlib-narrow-content\">\r\n         <div class=\"row\">\r\n            <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInRight\">\r\n               <a routerLink=\"cpprofile\" routerLinkActive=\"router-link-active\">\r\n                  <div class=\"services color-5\">\r\n                     <span class=\"icon2\"><i class=\"fa fa-desktop\"></i></span>\r\n                     <h3>Programming<br> Profile</h3>\r\n                  </div>\r\n               </a>\r\n            </div>\r\n            <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInRight\">\r\n               <a routerLink=\"/webdev\">\r\n                  <div class=\"services color-2\">\r\n                     <span class=\"icon2\"><i class=\"fa fa-code\"></i></span>\r\n                     <h3>Web<br> Designing</h3>\r\n                  </div>\r\n               </a>\r\n            </div>\r\n            <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInRight\">\r\n               <a routerLink=\"/softwaredev\">\r\n                  <div class=\"services color-3\">\r\n                     <span class=\"icon2\"><i class=\"fa fa-terminal\"></i></span>\r\n                     <h3>Software Development</h3>\r\n                  </div>\r\n               </a>\r\n            </div>\r\n            <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInRight\">\r\n               <a routerLink=\"/androiddev\">\r\n                  <div class=\"services color-4\">\r\n                     <span class=\"icon2\"><i class=\"fa fa-android\"></i></span>\r\n                     <h3>Android Applications</h3>\r\n                  </div>\r\n               </a>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </section> -->\r\n  <!------Skills---------------->\r\n  <section class=\"colorlib-skills\" data-section=\"skills\" id=\"skills\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n          data-animate-effect=\"fadeInLeft\"\r\n        >\r\n          <!--\t<span class=\"heading-meta\">My Specialty</span> -->\r\n          <div class=\"about-desc\">\r\n            <h1>Skills</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p>\r\n        Some of the significant aptitudes which will assist me with achieving\r\n        your objectives.\r\n      </p>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 animate-box\" data-animate-effect=\"fadeInLeft\">\r\n          <div class=\"progress-wrap\" *ngFor=\"let skill of details.skills\">\r\n            <h3 style=\"font-weight: 500\">{{ skill.name }}</h3>\r\n            <div class=\"progress\">\r\n              <div\r\n                class=\"progress-bar color-1\"\r\n                role=\"progressbar\"\r\n                aria-valuenow=\"70\"\r\n                aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\"\r\n                style=\"width: 70%\"\r\n                *ngIf=\"skill.index === 1\"\r\n              >\r\n                <span>{{ skill.progressval }}%</span>\r\n              </div>\r\n              <div\r\n                class=\"progress-bar color-2\"\r\n                role=\"progressbar\"\r\n                aria-valuenow=\"60\"\r\n                aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\"\r\n                style=\"width: 80%\"\r\n                *ngIf=\"skill.index === 2\"\r\n              >\r\n                <span>{{ skill.progressval }}%</span>\r\n              </div>\r\n              <div\r\n                class=\"progress-bar color-3\"\r\n                role=\"progressbar\"\r\n                aria-valuenow=\"40\"\r\n                aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\"\r\n                style=\"width: 80%\"\r\n                *ngIf=\"skill.index === 3\"\r\n              >\r\n                <span>{{ skill.progressval }}%</span>\r\n              </div>\r\n              <div\r\n                class=\"progress-bar color-4\"\r\n                role=\"progressbar\"\r\n                aria-valuenow=\"70\"\r\n                aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\"\r\n                style=\"width: 70%\"\r\n                *ngIf=\"skill.index === 4\"\r\n              >\r\n                <span>{{ skill.progressval }}%</span>\r\n              </div>\r\n              <div\r\n                class=\"progress-bar color-5\"\r\n                role=\"progressbar\"\r\n                aria-valuenow=\"70\"\r\n                aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\"\r\n                style=\"width: 50%\"\r\n                *ngIf=\"skill.index === 5\"\r\n              >\r\n                <span>{{ skill.progressval }}%</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!--------------Work Experience----------->\r\n  <section\r\n    class=\"colorlib-experience\"\r\n    data-section=\"experience\"\r\n    id=\"experience\"\r\n  >\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n          data-animate-effect=\"fadeInLeft\"\r\n        >\r\n          <div class=\"about-desc\">\r\n            <h1>Work <span style=\"color: #f9bf3f\">Experience</span></h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"timeline-centered\">\r\n            <article\r\n              class=\"timeline-entry animate-box\"\r\n              data-animate-effect=\"fadeInLeft\"\r\n              *ngFor=\"let workexp of details.workExperience\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-1\">\r\n                  <i class=\"fa fa-code\"></i>\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <h2>\r\n                    <a href=\"#\">{{ workexp.company }} </a>\r\n                    <span> {{ workexp.duration }}</span>\r\n                  </h2>\r\n                  <p>\r\n                    <strong>{{ workexp.role }}</strong>\r\n                  </p>\r\n\r\n                  <ul *ngFor=\"let summ of workexp.summary\">\r\n                    <li style=\"font-weight: 500; text-align: justify\">\r\n                      {{ summ.summaryline }}\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article\r\n              class=\"timeline-entry begin animate-box\"\r\n              data-animate-effect=\"fadeInBottom\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-none\"></div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!--------------Education----------->\r\n  <section class=\"colorlib-experience\" data-section=\"education\" id=\"education\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n          data-animate-effect=\"fadeInLeft\"\r\n        >\r\n          <div class=\"about-desc\">\r\n            <h1>Education</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"timeline-centered\">\r\n            <article\r\n              class=\"timeline-entry animate-box\"\r\n              data-animate-effect=\"fadeInLeft\"\r\n              *ngFor=\"let education of details.education\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-1\">\r\n                  <i class=\"fa fa-code\"></i>\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <h2>{{ education.degree }}</h2>\r\n                  <p style=\"margin-bottom: 0em !important\">\r\n                    <strong>{{ education.institute }}</strong>\r\n                  </p>\r\n                  <span style=\"text-align: right\">{{\r\n                    education.duration\r\n                  }}</span>\r\n                  <ul *ngFor=\"let summ of education.summary\">\r\n                    <li style=\"font-weight: 500\">{{ summ.summaryline }}</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article\r\n              class=\"timeline-entry begin animate-box\"\r\n              data-animate-effect=\"fadeInBottom\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-none\"></div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!------Certifications---------------->\r\n  <section\r\n    class=\"colorlib-skills\"\r\n    data-section=\"certifications\"\r\n    id=\"certifications\"\r\n  >\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n          data-animate-effect=\"fadeInLeft\"\r\n        >\r\n          <!--\t<span class=\"heading-meta\">My Specialty</span> -->\r\n          <div class=\"about-desc\">\r\n            <h1>Certifications</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"timeline-centered\">\r\n            <article\r\n              class=\"timeline-entry animate-box\"\r\n              data-animate-effect=\"fadeInLeft\"\r\n              *ngFor=\"let cert of details.certifications\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-1\">\r\n                  <i class=\"fa fa-code\"></i>\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <h2>\r\n                    <a href=\"#\">{{ cert.title }} </a>\r\n                    <!-- <img src={{cert.issuerIconPath}} style=\"height: 20px; width: 30px; float: right;\"/>  -->\r\n                  </h2>\r\n                  <p>\r\n                    <!-- <img src={{cert.issuerIconPath}} style=\"height: 40px; width: 40px;\"/> &nbsp; -->\r\n                    <strong>{{ cert.issuer }}</strong>\r\n                  </p>\r\n                  <p style=\"font-weight: 300; font-size: 15px\">\r\n                    Issue Date - {{ cert.issueDate }}\r\n                  </p>\r\n                  <p style=\"font-weight: 300; font-size: 15px\">\r\n                    Credentials -\r\n                    <a href=\"{{ cert.link }}\" style=\"color: #5d5d5d\"\r\n                      >{{ cert.credentials }}\r\n                    </a>\r\n                  </p>\r\n                  <p style=\"font-weight: 300; font-size: 15px\">\r\n                    <a\r\n                      href=\"{{ cert.link }}\"\r\n                      style=\"color: dodgerblue; font-weight: 600\"\r\n                      >View Certificate</a\r\n                    >\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article\r\n              class=\"timeline-entry begin animate-box\"\r\n              data-animate-effect=\"fadeInBottom\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-none\"></div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Achievements -->\r\n  <section\r\n    class=\"colorlib-achievements\"\r\n    data-section=\"achievements\"\r\n    id=\"achievements\"\r\n  >\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n          data-animate-effect=\"fadeInLeft\"\r\n        >\r\n          <div class=\"about-desc\">\r\n            <h1>Achievements</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"timeline-centered\">\r\n            <!-- Coding Competitions -->\r\n            <article\r\n              class=\"timeline-entry animate-box\"\r\n              data-animate-effect=\"fadeInLeft\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-1\">\r\n                  <i class=\"fa fa-code\"></i>\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <h2>Coding Competitions</h2>\r\n                  <hr\r\n                    style=\"\r\n                      display: block;\r\n                      height: 1px;\r\n                      border: 0;\r\n                      background: linear-gradient(to right, yellow, #fcc246);\r\n                      margin: 1em 0;\r\n                      padding: 0;\r\n                      width: 95%;\r\n                    \"\r\n                  />\r\n                  <div class=\"container\">\r\n                    <span *ngFor=\"let achievement of details.achievements\">\r\n                      <div class=\"row\" *ngIf=\"achievement.type === 'Coding'\">\r\n                        <div class=\"col-xl-3 col-lg-3 col-md-5 col-sm-6 col-12\">\r\n                          {{ achievement.title }}\r\n                        </div>\r\n                        <div class=\"col-xl-1 col-lg-1 col-md-2 col-sm-2 col-12\">\r\n                          {{ achievement.position }}\r\n                        </div>\r\n                        <div class=\"col-xl-2 col-lg-1 col-md-4 col-sm-4 col-12\">\r\n                          <a href=\"{{ achievement.link }}\">View Certificate</a>\r\n                        </div>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n\r\n            <!-- Project Competitions -->\r\n            <article\r\n              class=\"timeline-entry animate-box\"\r\n              data-animate-effect=\"fadeInLeft\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-1\">\r\n                  <i class=\"fa fa-code\"></i>\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <h2>Project Competitions</h2>\r\n                  <hr\r\n                    style=\"\r\n                      display: block;\r\n                      height: 1px;\r\n                      border: 0;\r\n                      background: linear-gradient(to right, yellow, #fcc246);\r\n                      margin: 1em 0;\r\n                      padding: 0;\r\n                      width: 95%;\r\n                    \"\r\n                  />\r\n                  <div class=\"container\">\r\n                    <span *ngFor=\"let achievement of details.achievements\">\r\n                      <div class=\"row\" *ngIf=\"achievement.type === 'Project'\">\r\n                        <div class=\"col-xl-3 col-lg-3 col-md-5 col-sm-6 col-12\">\r\n                          {{ achievement.title }}\r\n                        </div>\r\n                        <div class=\"col-xl-1 col-lg-1 col-md-2 col-sm-2 col-12\">\r\n                          {{ achievement.position }}\r\n                        </div>\r\n                        <div class=\"col-xl-2 col-lg-1 col-md-4 col-sm-4 col-12\">\r\n                          <a href=\"{{ achievement.link }}\">View Certificate</a>\r\n                        </div>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n\r\n            <!-- Paper Presentations -->\r\n            <article\r\n              class=\"timeline-entry animate-box\"\r\n              data-animate-effect=\"fadeInLeft\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-1\">\r\n                  <i class=\"fa fa-code\"></i>\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <h2>Paper Presentations</h2>\r\n                  <hr\r\n                    style=\"\r\n                      display: block;\r\n                      height: 1px;\r\n                      border: 0;\r\n                      background: linear-gradient(to right, yellow, #fcc246);\r\n                      margin: 1em 0;\r\n                      padding: 0;\r\n                      width: 95%;\r\n                    \"\r\n                  />\r\n                  <div class=\"container\">\r\n                    <span *ngFor=\"let achievement of details.achievements\">\r\n                      <div class=\"row\" *ngIf=\"achievement.type === 'Paper'\">\r\n                        <div class=\"col-xl-3 col-lg-3 col-md-5 col-sm-6 col-12\">\r\n                          {{ achievement.title }}\r\n                        </div>\r\n                        <div class=\"col-xl-1 col-lg-1 col-md-2 col-sm-2 col-12\">\r\n                          {{ achievement.position }}\r\n                        </div>\r\n                        <div class=\"col-xl-2 col-lg-1 col-md-4 col-sm-4 col-12\">\r\n                          <a href=\"{{ achievement.link }}\">View Certificate</a>\r\n                        </div>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n\r\n            <!-- Other -->\r\n            <article\r\n              class=\"timeline-entry animate-box\"\r\n              data-animate-effect=\"fadeInLeft\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-1\">\r\n                  <i class=\"fa fa-code\"></i>\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <h2>Other</h2>\r\n                  <hr\r\n                    style=\"\r\n                      display: block;\r\n                      height: 1px;\r\n                      border: 0;\r\n                      background: linear-gradient(to right, yellow, #fcc246);\r\n                      margin: 1em 0;\r\n                      padding: 0;\r\n                      width: 80%;\r\n                    \"\r\n                  />\r\n                  <div class=\"container\">\r\n                    <span *ngFor=\"let achievement of details.achievements\">\r\n                      <div class=\"row\" *ngIf=\"achievement.type === 'Other'\">\r\n                        <div class=\"col-xl-3 col-lg-3 col-md-5 col-sm-6 col-12\">\r\n                          {{ achievement.title }}\r\n                        </div>\r\n                        <div class=\"col-xl-1 col-lg-1 col-md-2 col-sm-2 col-12\">\r\n                          {{ achievement.position }}\r\n                        </div>\r\n                        <div class=\"col-xl-2 col-lg-1 col-md-4 col-sm-4 col-12\">\r\n                          <a href=\"{{ achievement.link }}\">View Certificate</a>\r\n                        </div>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n\r\n            <article\r\n              class=\"timeline-entry begin animate-box\"\r\n              data-animate-effect=\"fadeInBottom\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-none\"></div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!--------------Roles & Responsibilities----------->\r\n  <section\r\n    class=\"colorlib-experience\"\r\n    data-section=\"responsibilities\"\r\n    id=\"responsibilities\"\r\n  >\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n          data-animate-effect=\"fadeInLeft\"\r\n        >\r\n          <div class=\"about-desc\">\r\n            <h1>\r\n              Roles &<span style=\"color: #f9bf3f\"> Responsibilities</span>\r\n            </h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"timeline-centered\">\r\n            <article\r\n              class=\"timeline-entry animate-box\"\r\n              data-animate-effect=\"fadeInLeft\"\r\n              *ngFor=\"let role of details.rolesAndResponsibilities\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-1\">\r\n                  <i class=\"fa fa-code\"></i>\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <h2>\r\n                    <a href=\"#\">{{ role.organization }} </a>\r\n                    <span> {{ role.duration }}</span>\r\n                  </h2>\r\n                  <p>\r\n                    <strong>{{ role.role }}</strong>\r\n                  </p>\r\n                  <ul>\r\n                    <li\r\n                      style=\"font-weight: 500\"\r\n                      *ngFor=\"let summ of role.summary\"\r\n                    >\r\n                      {{ summ.summaryline }}\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article\r\n              class=\"timeline-entry begin animate-box\"\r\n              data-animate-effect=\"fadeInBottom\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-none\"></div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!--------Contact---------->\r\n  <section class=\"colorlib-contact\" data-section=\"contact\" id=\"contact\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div\r\n            class=\"row row-bottom-padded-sm animate-box\"\r\n            data-animate-effect=\"fadeInLeft\"\r\n          >\r\n            <div class=\"about-desc\">\r\n              <h1>Contact</h1>\r\n            </div>\r\n            <p>\r\n              On the off chance that you might want to connect with me, be it\r\n              for investigating innovation, business, or to simply say hello,\r\n              don't hesitate to send me an\r\n              <a href=\"mailto: akshaychavan.kkwedu@gmail.com\">email</a> or\r\n              simply <a href=\"https://wa.link/dge7w3\">ping</a> me.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!------------Footer------------->\r\n  <section class=\"colorlib-footer\" data-section=\"footer\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div\r\n            class=\"row row-bottom-padded-sm animate-box\"\r\n            data-animate-effect=\"fadeInLeft\"\r\n          >\r\n            <div class=\"hire\">\r\n              <p style=\"text-align: center\">\r\n                <strong\r\n                  >If you like my work and efforts, please consider buying me a\r\n                  coffee.<br />Thank you for your support!</strong\r\n                >\r\n              </p>\r\n              <div align=\"center\">\r\n                <link\r\n                  href=\"https://fonts.googleapis.com/css?family=Cookie\"\r\n                  rel=\"stylesheet\"\r\n                />\r\n                <a\r\n                  class=\"bmc-button\"\r\n                  target=\"_blank\"\r\n                  href=\"{{ details.buymecoffee }}\"\r\n                  ><img\r\n                    src=\"https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg\"\r\n                    alt=\"Buy me a coffee\"\r\n                  /><span style=\"margin-left: 5px\">Buy me a coffee</span></a\r\n                >\r\n                <br /><br />\r\n                <p style=\"font-size: 30px; margin-bottom: 0px\">\r\n                  <a href=\"{{ details.twitter }}\" style=\"color: black\"\r\n                    ><img\r\n                      style=\"width: 25px\"\r\n                      src=\"./assets/images/social icons/twitter.png\"\r\n                  /></a>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <a href=\"{{ details.linkdin }}\" style=\"color: black\"\r\n                    ><img\r\n                      style=\"width: 25px\"\r\n                      src=\"./assets/images/social icons/linkedin.png\"\r\n                  /></a>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <a href=\"{{ details.quora }}\" style=\"color: black\"\r\n                    ><img\r\n                      style=\"width: 25px\"\r\n                      src=\"./assets/images/social icons/quora.png\"\r\n                  /></a>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <a href=\"{{ details.github }}\" style=\"color: black\"\r\n                    ><img\r\n                      style=\"width: 25px\"\r\n                      src=\"./assets/images/social icons/github-sign.png\"\r\n                  /></a>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <a href=\"{{ details.instagram }}\" style=\"color: black\"\r\n                    ><img\r\n                      style=\"width: 25px\"\r\n                      src=\"./assets/images/social icons/instagram.png\"\r\n                  /></a>\r\n                </p>\r\n              </div>\r\n              <hr\r\n                style=\"\r\n                  display: block;\r\n                  height: 1px;\r\n                  border: 0;\r\n                  background: linear-gradient(\r\n                    to right,\r\n                    #f9bf3f,\r\n                    yellow,\r\n                    #f9bf3f\r\n                  );\r\n                  margin: 1em 0;\r\n                  padding: 0;\r\n                \"\r\n              />\r\n              <p style=\"text-align: center; margin-bottom: -20px\">\r\n                <strong\r\n                  >Made with <i class=\"fa fa-heart\" style=\"color: red\"></i> by\r\n                  Akshay :)</strong\r\n                >\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/details */ "./src/app/shared/details.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
// import { trigger, transition, animate, style } from '@angular/animations'
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.details = _shared_details__WEBPACK_IMPORTED_MODULE_1__["DETAILS"];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            animations: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/details.ts":
/*!***********************************!*\
  !*** ./src/app/shared/details.ts ***!
  \***********************************/
/*! exports provided: DETAILS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAILS", function() { return DETAILS; });
var DETAILS = {
    name: "Akshay Chavan",
    image: "./assets/images/profile photo.png",
    summary: [
        "Hi, there!👋 Welcome to my world of software development and exploration. I'm Akshay Chavan, a passionate Full-Stack Engineer at PriceLabs. With over 4 years of experience in the industry, I've had the opportunity to dive into a diverse range of tech stacks, from MEAN and MERN to Ruby on Rails, and even Android app development using Java. For me, coding is more than just a job – it's a thrilling puzzle-solving adventure that never gets old. I find joy in unraveling complex problem statements and crafting elegant solutions. But my love for exploration doesn't stop there. I believe in creating an environment where creativity flourishes, fostering efficiency and innovation.",
        "Beyond the realms of programming, I embrace an active and adventurous lifestyle. You'll often find me embarking on exhilarating treks, exploring new destinations, and engaging in various sports, ranging from the intensity of cricket and volleyball to the strategic depth of chess.",
        "Join me on this journey as I share my projects, insights, and experiences, celebrating the beauty of technology and its impact on our lives. Let's connect, innovate, and create together!",
    ],
    banner: "You will be happy to know that I have completed over 20+ projects successfully!",
    skills: [
        {
            index: 1,
            name: "Bootstrap/HTML/JavaScript/Angular/React",
            progress: "width:70%",
            progressval: "70",
        },
        {
            index: 2,
            name: "Java/Android",
            progress: "width:80%",
            progressval: "80",
        },
        {
            index: 3,
            name: "NodeJS",
            progress: "width:80%",
            progressval: "80",
        },
        {
            index: 4,
            name: "C/C++/Java/Python",
            progress: "width:70%",
            progressval: "70",
        },
        {
            index: 5,
            name: "Google Cloud",
            progress: "width:50%",
            progressval: "50",
        },
    ],
    certifications: [
        {
            title: "Cloud Computing",
            issuer: "Indian Institute of Technology, Kharagpur",
            issueDate: "August 2017",
            credentials: "NPTEL17CS23S158001",
            link: "https://nptel.ac.in/noc/Ecertificate/?q=noc17-cs23/NPTEL17CS23S1580001171003235.jpg",
        },
        {
            title: "Oracle Cloud Infrastructure Foundations 2020 Certified Associate",
            issuer: "Oracle",
            issueDate: "April 2020",
            credentials: "274345464OCIBF2020-F",
            link: "https://www.youracclaim.com/badges/177e2e49-8a1a-4fdb-8d5d-efb9db3e5f4a/linked_in_profile",
        },
        {
            title: "Python Code Challenges",
            issuer: "LinkedIn",
            issueDate: "April 2020",
            credentials: "ARiTh0qN7bKMuZVulmV7g02aP3jl",
            link: "https://drive.google.com/file/d/1vH3cp9_jiuMnefhUpNPK5RBggZ0y_UGT/view?usp=sharing",
        },
        {
            title: "Python for Data Science",
            issuer: "LinkedIn",
            issueDate: "April 2020",
            credentials: "AeKj6q98ku7M-UxHuBEaCYKBmJ8G",
            link: "https://drive.google.com/file/d/1DDx1dbN8P1kLSV1Q-h4VYUL0nCBQUmzB/view?usp=sharing",
        },
    ],
    github: "https://github.com/AkshayChavan7",
    githubusername: "AkshayChavan7",
    buymecoffee: "https://paytm.me/tg-w6uF",
    instagram: "https://www.instagram.com/_akshaychavan_7/",
    twitter: "https://twitter.com/Aksh_ayC7",
    quora: "https://www.quora.com/profile/Akshay-Chavan-187",
    linkdin: "https://www.linkedin.com/in/akshaychavan7/",
    workExperience: [
        /**
         *
    
         */
        {
            company: "PriceLabs",
            role: "Full Stack Engineer, Full Time",
            duration: "October 2022 - August 2023",
            summary: [
                {
                    summaryline: "Elevated the efficiency of the dynamic pricing strategy by 25% by streamlining workflow, leading to a 40% reduction in UI interactions and an 8% boost in customer satisfaction.",
                },
                {
                    summaryline: "Successfully integrated Zoho SalesIQ chat, gathering user data and using logged-in user context to pre-fill ticket data, enabling 20% faster ticket handling.",
                },
                {
                    summaryline: "Engineered an automated localization process, eradicating the need for manual intervention, resulting in a 100% reduction in errors and a significant reduction in the turnaround time.",
                },
                {
                    summaryline: "Flourished in an Agile environment, executing tasks within dynamic sprints and collaborating within diverse team setups, such as Squads.",
                },
                {
                    summaryline: "Contributed significantly to expanding the developer team by actively participating in the interviewing process and offering valuable support.",
                },
                {
                    summaryline: "Secured first place in the PriceLabs hackathon with the project \"TicketMinder,\" where we created an innovative Ticket Answering System utilizing historical data from the PriceLabs CRM system. Leveraging chatGPT's generative AI capabilities, we optimized data retrieval for user queries, resulting in a highly relevant and efficient system. Additionally, developed a user-friendly full-stack web application to seamlessly integrate the tool into PriceLabs' work environment, contributing to its ongoing success.",
                },
                {
                    summaryline: "Technologies: Ruby on Rails, Javascript, React.js, Ruby, jQuery, Bootstrap, MySQL, Redis, Minitest, JEST Testing, Git, Bitbucket, REST APIs",
                },
            ],
        },
        {
            company: "Quantiphi Analytics",
            role: "Full-Stack Developer | Applied AI, Full Time",
            duration: "July 2021 - October 2022",
            summary: [
                {
                    summaryline: "Conceptualized and built a comprehensive software solution powered by machine learning, achieving a 90% detection rate for construction defects, cutting field technician risk mitigation time by 30%, and saving $50,000 per project.",
                },
                {
                    summaryline: "Developed machine learning integrated Web and Android apps for speech analytics, KPI forecasting, and real-time agent feedback, fully automating customer service calls across multiple businesses, slashing operational costs by 70%.",
                },
                {
                    summaryline: "Designed and executed a robust transactional mechanism for seamless data synchronization between Firestore and MySQL databases, achieving a 98% reduction in data sync errors and boosting application reliability by 30%.",
                },
                {
                    summaryline: "Technologies: React, Angular, Node.js, Typescript, Express.js, Android, Java, Redis, Firestore, MongoDB, Google Cloud Platform, Git",
                },
            ],
        },
        {
            company: "FinIQ Consulting India",
            role: "Software Developer, Full Time",
            duration: "July 2019 - July 2021",
            summary: [
                {
                    summaryline: "Spearheaded the design and implementation of high-performance structured trading applications for leading banks in Asia, including Bank of China and UBS, contributing to a monthly revenue of over $1 million.",
                },
                {
                    summaryline: "Revamped backend processes and optimized code for multiple software products, resulting in a remarkable 15% performance boost and a 20% reduction in maintenance overhead.",
                },
                {
                    summaryline: "Implemented a robust CI/CD pipeline for a large-scale web app, reducing deployment time by 80% and enhancing release reliability through rigorous testing.",
                },
                {
                    summaryline: "Technologies: Angular, NodeJS, Typescript, Javascript, Express.js, Android, Java, MySQL, Git, Bitbucket, Postman",
                },
            ],
        },
        {
            company: "Computational Biology Department, Carnegie Mellon University",
            role: "Research Intern, Part Time",
            duration: "September 2020 - January 2021",
            summary: [
                {
                    summaryline: "Conducted research on optimizing preprocessing pipelines for Cryo-EM images using state-of-the-art deep learning architectures including VGG-16, ResNet, and Vision Transformers, resulting in a 5% improvement in feature extraction and classification accuracy compared to previous methods.",
                },
                {
                    summaryline: "Restructured the Xu Labs website, streamlining its architecture for improved user experience and accessibility.",
                },
                {
                    summaryline: "Collaborated effectively with esteemed professors and fellow team members, fostering a dynamic environment conducive to knowledge exchange and teamwork.",
                },
                {
                    summaryline: "Technologies: Python, Deep Learning, Scikit-Learn, TensorFlow, Google Cloud Platform (GCP), GitHub",
                },
            ],
        },
        {
            company: "The Sparks Foundation",
            role: "Mobile Application Development Intern, Part Time",
            duration: "November 2021 - December 2021",
            summary: [
                {
                    summaryline: "Successfully designed and developed mobile applications utilizing Android, DBBrowser, and SQLite, effectively meeting project requirements and achieving assigned tasks.",
                },
                {
                    summaryline: "Played a key role in supporting fellow interns by addressing their task-related queries and offering technical implementation guidance. This collaborative effort significantly contributed to team productivity and a positive working environment.",
                },
                {
                    summaryline: "Created detailed video demonstrations showcasing the functionality and features of the developed applications. These videos serve as comprehensive documentation and can be accessed for a closer look at the applications' capabilities: 1. Banking Application 2. Authentication using Social Platforms",
                },
                {
                    summaryline: "Technologies: Android, Java, SQLite, DB Browser for SQLite, Git, Google SDK, Facebook SDK.",
                },
            ],
        },
        {
            company: "FinIQ Consulting India",
            role: "SDE, Summer Internship",
            duration: "May 2018 - June 2018",
            summary: [
                {
                    summaryline: "Spearheaded the design and implementation of high-performance structured trading applications for leading banks in Asia, including Bank of China and UBS, contributing to a monthly revenue of over $1 million.",
                },
                {
                    summaryline: "Optimized code and streamlined backend procedures for multiple software products within FinIQ's development environment, yielding a remarkable 15% boost in product performance coupled with a 20% reduction in maintenance time.",
                },
                {
                    summaryline: "Established a CI/CD pipeline for a large-scale web application, slashing deployment time by 80% and elevating software release reliability. Employed rigorous code reviews, load/stress testing, and diverse testing frameworks to ensure impeccable software delivery.",
                },
                {
                    summaryline: "Technologies: Python, Angular 8, Node.js, Android, TypeScript, JavaScript, Cascading Style Sheets (CSS), Java, Git, HTML",
                },
            ],
        },
        {
            company: "International Routing Technologies",
            role: "Summer Internship",
            duration: "May 2015 - June 2015",
            summary: [
                {
                    summaryline: "Interned at International Routing Technologies and successfully completed the RedHat Certified System Administrator (RHCSA) certification course. Acquired proficiency in Linux commands, operating procedures, and Linux kernel systems during the internship period.",
                },
            ],
        },
    ],
    rolesAndResponsibilities: [
        {
            role: "Training & Placements Student Coordinator",
            organization: "Training & Placement Cell, K. K. W. I. E. E. R.",
            duration: "July 2017 - June 2020",
            summary: [
                {
                    summaryline: "Worked as a student placement coordinator on behalf of Computer Engineering Department in Training and Placement Cell of K. K. Wagh Institute of Engineering.",
                },
                {
                    summaryline: "Was responsible for all the training and placement activities of all students of department of computer engineering.",
                },
                {
                    summaryline: "During the tenure of this role, I interacted with many HR personnels of various organizations.",
                },
            ],
        },
        {
            role: "Event Head",
            organization: "Source Code, Equinox 2k18",
            duration: "March 2018 - March 2018",
            summary: [
                {
                    summaryline: "Source Code is a national level programming event held by Computer Engineering Department, K. K. Wagh Institute of Engineering, Nashik under the technical symposium of Equinox. Supported by Computer Society of India (CSI) and Debuggers' Club.",
                },
                {
                    summaryline: "As the head of event, I was responsible of managing all the activities of the event along with the entire source code team.",
                },
            ],
        },
        {
            role: "Secretary",
            organization: "ACTS Committee, Computer Technology Department",
            duration: "July 2015 - July 2016",
            summary: [
                {
                    summaryline: "ACTS (Association of Computer Technology Students) is a departmental committee of computer technology department of K. K. Wagh Polytechnic, Nashik.",
                },
                {
                    summaryline: "Being the secretary I was responsible for managing all the events and activities of the department.",
                },
            ],
        },
    ],
    education: [
        {
            degree: "Bachelors in Computer Science and Engineering",
            institute: "K. K. Wagh Institute of Engineering Education and Research, Nashik",
            duration: "August 2016 - June 2019",
            summary: [
                {
                    summaryline: "Coursework: Data Structures & Algorithms, Advanced Engineering Mathematics, Discrete Mathematics, Object Oriented Programming, Advanced Database Management, Computer Networks, Cloud Computing, Machine Learning, Data Mining, Compiler Design, Operating System.",
                },
                {
                    summaryline: "Activities and Societies: Training and Placement Student Coordinator, Event Head - Source Code, Member - CSI Club and Debuggers' club, Volunteer - Prayas Youth Forum (NGO)",
                },
            ],
        },
        {
            degree: "Diploma in Computer Technology",
            institute: "K. K. Wagh Polytechnic, Nashik",
            duration: "August 2013 - June 2016",
            summary: [
                {
                    summaryline: "Coursework: Engineering Mathematics, Data Structures & Algorithms, Object Oriented Programming, Database Management System, Computer Networks, Operating Systems, Software Engineering, Software Testing, Java Programming, Microprocessor and Programming, Computer Security.",
                },
                {
                    summaryline: "Activities and Societies: Secretary - ACTS Committee",
                },
            ],
        },
    ],
    mail: "akshaychavan.kkwedu@gmail.com",
    whatsapp: "https://wa.link/dge7w3",
    socialMedia: [
        {
            name: "Linkdin",
            link: "https://www.linkedin.com/in/akshay-chavan-30aa44148",
        },
        {
            name: "Twitter",
            link: "https://twitter.com/Aksh_ayC7",
        },
        {
            name: "Quora",
            link: "https://www.quora.com/profile/Akshay-Chavan-187",
        },
        {
            name: "Medium",
            link: "https://medium.com/@akshaychavan.kkwedu",
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/_akshaychavan_7/",
        },
    ],
    cpprofile: [
        {
            name: "HackerRank",
            link: "https://www.hackerrank.com/Chavan_Akshay_S?hr_r=1",
        },
        {
            name: "Leetcode",
            link: "https://leetcode.com/akshaychavan7/",
        },
    ],
    androiddevproject: [
        {
            projectname: "vaxicov",
            image: "./assets/images/vaxicov.png",
            summary: "An Android app for checking the availability of Covid19 vaccination slots and setting notification for  appointment booking.",
            preview: "https://github.com/AkshayChavan7/vaxicov-Covid19-Vaccine-Center-Availability-Checker",
            techstack: [
                {
                    name: "java",
                },
                {
                    name: "XML",
                },
                {
                    name: "Google SDK",
                },
                {
                    name: "APISetu API",
                },
            ],
        },
        {
            projectname: "Banking App",
            image: "./assets/images/banking_app.png",
            summary: "An Android app for implementing a simple Banking System with SQLite database along with Google and Facebook sign-in integration for authentication.",
            preview: "https://github.com/AkshayChavan7/Banking-App",
            techstack: [
                {
                    name: "java",
                },
                {
                    name: "XML",
                },
                {
                    name: "SQLite",
                },
                {
                    name: "Google SDK",
                },
                {
                    name: "Facebook SDK",
                },
            ],
        },
        {
            projectname: "Tic-Tac-Toe Game",
            image: "./assets/images/tictactoe.jpg",
            summary: "A fun game of tictactoe with two modes - 1. vs Player 2. vs Computer. It's my first try in the android development and a just for fun app. ",
            preview: "https://github.com/AkshayChavan7/Tic-Tac-Toe",
            techstack: [
                {
                    name: "java",
                },
                {
                    name: "XML",
                },
            ],
        },
        {
            projectname: "IOT based Color Changing Bulb",
            image: "./assets/images/colorchangingbulb.jpg",
            summary: "IOT based project to control the color of a light bulb  with the input from android application. It was a part of our IOT project with the idea of home automation.",
            preview: "https://github.com/AkshayChavan7/COLOR-CHANGING-BULB",
            techstack: [
                {
                    name: "arduino uno",
                },
                {
                    name: "arduino programming",
                },
                {
                    name: "android",
                },
            ],
        },
    ],
    softwaredevproject: [
        {
            projectname: "Portable Antivirus System",
            image: "./assets/images/portableantivirussystem.png",
            summary: "An antivirus system which can be kept in any kind of external drive and that portable device can be connected to the computer system using which we can perform scan on that computer system.",
            preview: "https://github.com/AkshayChavan7/PORTABLE-ANTIVIRUS-SYSTEM",
            techstack: [
                {
                    name: "DialogFlow",
                },
                {
                    name: "Firebase",
                },
            ],
        },
        {
            projectname: "Faculty Feedback System",
            image: "./assets/images/facultyfeedbacksystem.png",
            summary: "In order to replace the paper based feedback system of our college, I tried to develop a system which could automate the process and this system fulfills all the requirements of the same.",
            preview: "https://github.com/AkshayChavan7/FACULTY-FEEDBACK-SYSTEM",
            techstack: [
                {
                    name: "Java",
                },
                {
                    name: "MySQL",
                },
                {
                    name: "SQLite",
                },
            ],
        },
        {
            projectname: "Student Attendance Management System",
            image: "./assets/images/studentattendance.png",
            summary: "In our engineering college we had a convetional paper based attendance system which I felt is hard to manage. Thus, in order to solve this problem I develop this system which offers a lot more than the conventional system.",
            preview: "https://github.com/AkshayChavan7/Student-Attendance-Management-System",
            techstack: [
                {
                    name: "Java",
                },
                {
                    name: "MySQL",
                },
                {
                    name: "SQLite",
                },
            ],
        },
        {
            projectname: "Option Pricer",
            image: "./assets/images/optionpricer.PNG",
            summary: "An implementation of options pricing methods like Black Scholes, Monte-Carlo and Binomial option pricings which are used for stock market pricing simulations.",
            preview: "https://github.com/AkshayChavan7/Options-Pricer",
            techstack: [
                {
                    name: "C#",
                },
                {
                    name: ".Net",
                },
            ],
        },
    ],
    webdevproject: [
        {
            projectname: "Web-Porfolio",
            image: "./assets/images/portfolio.png",
            summary: "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
            preview: "https://github.com/AkshayChavan7/AkshayChavan7.github.io",
            techstack: [
                {
                    name: "Angular",
                },
                {
                    name: "Bootstrap",
                },
                {
                    name: "HTML5",
                },
                {
                    name: "CSS3",
                },
                {
                    name: "JavaScript",
                },
                {
                    name: "Jquery",
                },
            ],
        },
        {
            projectname: "Google Maps Marker Clusturer",
            image: "./assets/images/markerclusturer.PNG",
            summary: "A clustom marker clusturer implementation in Angular for the google maps geochart javascript API.",
            preview: "https://github.com/AkshayChavan7/Google-Maps-Marker-Clusterer",
            techstack: [
                {
                    name: "Angular 8",
                },
                {
                    name: "Nodejs",
                },
                {
                    name: "HTML5",
                },
                {
                    name: "CSS3",
                },
                {
                    name: "JavaScript",
                },
            ],
        },
        {
            projectname: "News Letter Website",
            image: "./assets/images/youthink_website.PNG",
            summary: "This is my very first attempt in the web development. It's a sample website for financial newsletter.",
            preview: "https://github.com/AkshayChavan7/Newsletter-Website",
            techstack: [
                {
                    name: "HTML5",
                },
                {
                    name: "CSS3",
                },
                {
                    name: "JavaScript",
                },
            ],
        },
    ],
    achievements: [
        // Coding
        {
            title: "Metastorm'17 - Programate",
            position: "1st",
            type: "Coding",
            link: "https://drive.google.com/file/d/1MVUq3RY_942PZDWdGpGXRMg5X9Cjmv37/view?usp=sharing",
        },
        {
            title: "Ignite'19 - Coding",
            position: "1st",
            type: "Coding",
            link: "https://drive.google.com/file/d/1McxNxNHFV5VzziXV8Mldmv4qJ9UlGo8L/view?usp=sharing",
        },
        {
            title: "Ignitra'18 - Coder's Treasure Hunt",
            position: "1st",
            type: "Coding",
            link: "https://drive.google.com/file/d/1yWY5_RY-8FeHiFn12V4Pshjs_ITxwB7t/view?usp=sharing",
        },
        {
            title: "Ignitra'17 - Code Breaker",
            position: "2nd",
            type: "Coding",
            link: "https://drive.google.com/file/d/1EDRa_B9sFvECxm-Y5NIjMO0iV_TMkfwF/view?usp=sharing",
        },
        {
            title: "Metastorm'19 - Programate",
            position: "2nd",
            type: "Coding",
            link: "https://drive.google.com/file/d/1N3n4LbdMP582J6ErmF6DbSETmg-N1YL7/view?usp=sharing",
        },
        {
            title: "MVP Kshitij'19 - CodeSprint",
            position: "2nd",
            type: "Coding",
            link: "https://drive.google.com/file/d/1UA6mfOL9RThA-N-YiQAgu3Fg0SXvREG6/view?usp=sharing",
        },
        {
            title: "Metastorm'17 - Profused",
            position: "2nd",
            type: "Coding",
            link: "https://drive.google.com/file/d/1wakUO4HOjW0_hpWuWmk5lvDjmyTY6ud9/view?usp=sharing",
        },
        {
            title: "ProJIT'17",
            position: "2nd",
            type: "Coding",
            link: "https://drive.google.com/file/d/1OdGJw4-l2mq2kjWFK6LDTnrSs0ag7vT8/view?usp=sharing",
        },
        {
            title: "ProJIT'18",
            position: "3rd",
            type: "Coding",
            link: "https://drive.google.com/file/d/1cNaR03QcdKjGMH9mCV8jYN4L4skSzwYS/view?usp=sharing",
        },
        {
            title: "Metastorm'18 - Profused",
            position: "3rd",
            type: "Coding",
            link: "https://drive.google.com/file/d/1TAPh_s06JdqCKnG_po3DM_UGJ2QSug4o/view?usp=sharing",
        },
        {
            title: "Telekinesis'17",
            position: "5th",
            type: "Coding",
            link: "https://drive.google.com/file/d/1nXXEGv0Oqz8Zli6zwxsCrCFJOP9uHh-p/view?usp=sharing",
        },
        // Project Competitions
        {
            title: "Pro Utsav'16",
            position: "1st",
            type: "Project",
            link: "https://drive.google.com/file/d/1bDI9Li77v_Of4OvIzzynqWCWd7QV4z4u/view?usp=sharing",
        },
        {
            title: "Prayukti'16",
            position: "1st",
            type: "Project",
            link: "https://drive.google.com/file/d/1-WCCt1eb4lvFTPsMWvcfSV4p6sEUXbWl/view?usp=sharing",
        },
        {
            title: "CSI IOT Project Competition",
            position: "3rd",
            type: "Project",
            link: "https://drive.google.com/file/d/1t01DJf9tZOr3pbKo0PB6Rt5EDQC67kAb/view?usp=sharing",
        },
        {
            title: "IET - Karmaveer Expo",
            position: "Consolation",
            type: "Project",
            link: "https://drive.google.com/file/d/1KGKfjV-8D1XSln8HclK4SLeJDCgFWm6n/view?usp=sharing",
        },
        // Paper Presentations
        {
            title: "METECH'17",
            position: "1st",
            type: "Paper",
            link: "https://drive.google.com/file/d/16kddUpaqg6Y-l4e3-md-JPFpRMyCKxcT/view?usp=sharing",
        },
        {
            title: "Meteorite'17",
            position: "1st",
            type: "Paper",
            link: "https://drive.google.com/file/d/1J53JP0hQ6V1dfrj-aeEiClkIxF4sreY3/view?usp=sharing",
        },
        {
            title: "Techmanthan 2015",
            position: "1st",
            type: "Paper",
            link: "https://drive.google.com/file/d/1EZhgBDI9KVbcUkvzLZqn2C2YUpahx93R/view?usp=sharing",
        },
        {
            title: "SAIT 2015",
            position: "2nd",
            type: "Paper",
            link: "https://drive.google.com/file/d/1VDlWGuOqmOEQOH6SOFVcWr7CQFh3n_oQ/view?usp=sharing",
        },
        // Others
        {
            title: "Departmental Topper (Diploma)",
            position: "2nd",
            type: "Other",
            link: "https://drive.google.com/file/d/1T5r1Ei-Ct_kX9IsMgJvtEJa7NxNNdLp4/view?usp=sharing",
        },
        {
            title: "Departmental Topper (SE Engineering)",
            position: "3rd",
            type: "Other",
            link: "https://drive.google.com/file/d/1KhJjuCMqu6Z4wlD_JjAQKfCjBRKnrj4-/view?usp=sharing",
        },
        {
            title: "NPTEL - Cloud Computing ",
            position: "All India Topper (Top 1%)",
            type: "Other",
            link: "https://nptel.ac.in/noc/Ecertificate/?q=noc17-cs23/NPTEL17CS23S1580001171003235.jpg",
        },
        {
            title: "Ignite'19 - Placement Practices",
            position: "1st",
            type: "Other",
            link: "https://drive.google.com/file/d/1N4R_CnGDApBSZwvq2ooQaxa7_d3d75fz/view?usp=sharing",
        },
        {
            title: "Metastorm'18 - Placement Practices",
            position: "2nd",
            type: "Other",
            link: "https://drive.google.com/file/d/15l1XFYWAz1ssphAhFDRqBtpGVUDaq4Bd/view?usp=sharing",
        },
        {
            title: "Maverick'18 - Quiz Competition",
            position: "2nd",
            type: "Other",
            link: "https://drive.google.com/file/d/18QQkqcyBm1K0y0vQxL8Gsdc0CkV13RTb/view?usp=sharing",
        },
        {
            title: "Electrosparx'17 - Quiz Competition",
            position: "3rd",
            type: "Other",
            link: "https://drive.google.com/file/d/15B9Y5B7B8m1tcluQF_x_kKXCEHHERc9E/view?usp=sharing",
        },
    ],
};


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside\r\n  id=\"colorlib-aside\"\r\n  role=\"complementary\"\r\n  class=\"border js-fullheight\"\r\n  style=\"height: 100%\"\r\n>\r\n  <!--height: 841px; -->\r\n  <div class=\"text-center\">\r\n    <img class=\"author-img\" src=\"{{ details.image }}\" />\r\n    <h1 id=\"colorlib-logo\"><a routerLink=\"/\">Akshay Chavan</a></h1>\r\n  </div>\r\n  <nav id=\"colorlib-main-menu\" role=\"navigation\" class=\"navbar\">\r\n    <img\r\n      id=\"nav-close-btn\"\r\n      class=\"navbar-close-icon\"\r\n      src=\"./assets/images/close_icon.svg\"\r\n      alt=\"close\"\r\n      width=\"25px\"\r\n      height=\"25px\"\r\n    />\r\n    <div id=\"navbar\" class=\"collapse\">\r\n      <ul>\r\n        <li><a href=\"#about\">About</a></li>\r\n        <li><a href=\"#skills\">Skills</a></li>\r\n        <li><a href=\"#experience\">Work Experience</a></li>\r\n        <li><a href=\"#education\">Education</a></li>\r\n        <li><a href=\"#certifications\">Certifications</a></li>\r\n        <li><a href=\"#achievements\">Achievements</a></li>\r\n        <li><a href=\"#responsibilities\">Roles & Responsibilities</a></li>\r\n        <li><a href=\"#contact\">Contact</a></li>\r\n        <li>\r\n          <a\r\n            download=\"Resume - Akshay Chavan\"\r\n            target=\"_blank\"\r\n            href=\"./assets/resume.pdf\"\r\n            >Download Resume</a\r\n          >\r\n        </li>\r\n\r\n        <!-- <li><a routerLink=\"/\" >Home</a></li>\r\n            <li><a routerLink=\"/cpprofile\" >Programming Profile</a></li>\r\n            <li><a routerLink=\"/webdev\" >Web Development</a></li>\r\n            <li><a routerLink=\"/softwaredev\" >Software Development</a></li>\r\n            <li><a routerLink=\"/androiddev\" >Android Development</a></li> -->\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/details */ "./src/app/shared/details.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.details = _shared_details__WEBPACK_IMPORTED_MODULE_1__["DETAILS"];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/softwaredev/softwaredev.component.css":
/*!*******************************************************!*\
  !*** ./src/app/softwaredev/softwaredev.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/softwaredev/softwaredev.component.html":
/*!********************************************************!*\
  !*** ./src/app/softwaredev/softwaredev.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-main\">\r\n  <section class=\"colorlib-about\" data-section=\"about\">\r\n     <div class=\"colorlib-narrow-content\">\r\n        <div class=\"row\">\r\n           <div class=\"col-md-12\">\r\n              <div class=\"row row-bottom-padded-sm animate-box\" data-animate-effect=\"fadeInLeft\">\r\n                 <div class=\"col-md-12\">\r\n                    <div class=\"about-desc\">\r\n                       <h2>Software Development</h2>\r\n                       <hr>\r\n                       <div class=\"col-md-12\">\r\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInRight\" *ngFor=\"let softwaredev of details.softwaredevproject\">\r\n                           <br>\r\n                           <ul class=\"fa-ul mb-0\">\r\n                              <!-- <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInRight\"> -->\r\n                              <li>\r\n                                 <i class=\"fa-li fa fa-check\"></i>\r\n                                 <div>\r\n                                    <a href=\"{{softwaredev.preview}}\" style=\"text-decoration:none;\">\r\n                                       <div>\r\n                                          <h4 class=\"mb-3\">{{softwaredev.projectname}}</h4>\r\n                                       </div>\r\n                                       <div\r\n                                          class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-3\">\r\n                                          <div id=\"divMain\">\r\n                                             <div id='left-div' class=\"resume-content\">\r\n                                                <img style='float:left; margin:0 20px;' width='300px;' class='img-fluid'\r\n                                                   src='{{softwaredev.image}}'>\r\n                                             </div>\r\n                                             <div id='right-div' class='resume-content'>\r\n                                                <div class=\"subheading mb-0\">\r\n                                                   <p>{{softwaredev.summary}}</p>\r\n                                                </div>\r\n                                                <div class=\"mb-0\">\r\n                                                   <span class='badge badge-secondary' *ngFor=\"let techs of softwaredev.techstack\"> {{techs.name}}</span>\r\n                                                </div>\r\n                                                <br><br>\r\n                                             </div>\r\n                                          </div>\r\n                                       </div>\r\n                                    </a>\r\n                                 </div>\r\n                              </li>\r\n                           </ul>\r\n                        </article>\r\n                     </div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/softwaredev/softwaredev.component.ts":
/*!******************************************************!*\
  !*** ./src/app/softwaredev/softwaredev.component.ts ***!
  \******************************************************/
/*! exports provided: SoftwaredevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwaredevComponent", function() { return SoftwaredevComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/details */ "./src/app/shared/details.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SoftwaredevComponent = /** @class */ (function () {
    function SoftwaredevComponent() {
        this.details = _shared_details__WEBPACK_IMPORTED_MODULE_1__["DETAILS"];
    }
    SoftwaredevComponent.prototype.ngOnInit = function () {
    };
    SoftwaredevComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-softwaredev',
            template: __webpack_require__(/*! ./softwaredev.component.html */ "./src/app/softwaredev/softwaredev.component.html"),
            styles: [__webpack_require__(/*! ./softwaredev.component.css */ "./src/app/softwaredev/softwaredev.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SoftwaredevComponent);
    return SoftwaredevComponent;
}());



/***/ }),

/***/ "./src/app/webdev/webdev.component.css":
/*!*********************************************!*\
  !*** ./src/app/webdev/webdev.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/webdev/webdev.component.html":
/*!**********************************************!*\
  !*** ./src/app/webdev/webdev.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-main\">\r\n  <section class=\"colorlib-about\" data-section=\"about\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div class=\"row row-bottom-padded-sm animate-box\" data-animate-effect=\"fadeInLeft\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"about-desc\">\r\n              <h2>Web Development</h2>\r\n              <hr>\r\n                <p>Websites and Web Apps are the first line of communication between enterprices and potential guests or visitors.</p>\r\n                <p>Web development services help your company to increase product knowledge, maintain communication between you and potential clients, sell your products or services, generate leads for the business, and increase the popularity of your company and much more.</p>\r\n                <div class=\"col-md-12\">\r\n                  <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInRight\" *ngFor=\"let webdev of details.webdevproject\">\r\n                     <br>\r\n                     <ul class=\"fa-ul mb-0\">\r\n                        <!-- <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInRight\"> -->\r\n                        <li>\r\n                           <i class=\"fa-li fa fa-check\"></i>\r\n                           <div>\r\n                              <a href=\"{{webdev.preview}}\" style=\"text-decoration:none;\">\r\n                                 <div>\r\n                                    <h4 class=\"mb-3\">{{webdev.projectname}}</h4>\r\n                                 </div>\r\n                                 <div\r\n                                    class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-3\">\r\n                                    <div id=\"divMain\">\r\n                                       <div id='left-div' class=\"resume-content\">\r\n                                          <img style='float:left; margin:0 20px;' width='300px;' class='img-fluid'\r\n                                             src='{{webdev.image}}'>\r\n                                       </div>\r\n                                       <div id='right-div' class='resume-content'>\r\n                                          <div class=\"subheading mb-0\">\r\n                                             <p>{{webdev.summary}}</p>\r\n                                          </div>\r\n                                          <div class=\"mb-0\">\r\n                                             <span  class='badge badge-secondary' *ngFor=\"let techs of webdev.techstack\"> {{techs.name}}</span>\r\n                                          </div>\r\n                                          <br><br>\r\n                                       </div>\r\n                                    </div>\r\n                                 </div>\r\n                              </a>\r\n                           </div>\r\n                        </li>\r\n                     </ul>\r\n                  </article>\r\n               </div>\r\n                <p>** All above projects are made up and converted as open-source projects, Feel free to use and contribute (No Copyright issues).</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/webdev/webdev.component.ts":
/*!********************************************!*\
  !*** ./src/app/webdev/webdev.component.ts ***!
  \********************************************/
/*! exports provided: WebdevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebdevComponent", function() { return WebdevComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/details */ "./src/app/shared/details.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebdevComponent = /** @class */ (function () {
    function WebdevComponent() {
        this.details = _shared_details__WEBPACK_IMPORTED_MODULE_1__["DETAILS"];
    }
    WebdevComponent.prototype.ngOnInit = function () {
    };
    WebdevComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-webdev',
            template: __webpack_require__(/*! ./webdev.component.html */ "./src/app/webdev/webdev.component.html"),
            styles: [__webpack_require__(/*! ./webdev.component.css */ "./src/app/webdev/webdev.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebdevComponent);
    return WebdevComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Learning Material\GitHub Profile\Personal Portfolio Code\Portfolio-Website-Codebase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map