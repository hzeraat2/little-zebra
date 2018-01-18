webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#donate {\n    min-height: 550px;\n    color: #4b4f57;\n    display: block;\n    position: relative;\n    background-color: #bbb;\n    padding: 2%;\n}\n\n#what-we-do {\n    min-height: 625px;\n    padding: 2%;\n}\n\n#green-theme {\n    color: #6db420;\n}\n\n#form-update{\n    padding: 5%;\n    max-width: 50%;\n}\n\n#widget {\n    background-color: #fff;\n    max-width : 800px;\n    height: 600px;\n    margin: 0 auto;\n    position: relative;\n}\n\n.amount-box, .amount-box2{\n    padding: 5px;\n    border: 1px solid #474c55;\n    color: #474c55;\n    background-color: #fff;\n    border-radius: .25rem;\n    cursor: pointer;\n}\n\n.amount-box:hover{\n    background-color: #474c55;\n    color: #fff;\n}\n\n#content{\n    max-width: 50%;\n}\n\n#img-container{\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    max-width: 280px;\n    width: 240px;\n    height: 600px;\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/giraffe-image.jpg")) + ") center center no-repeat;\n}\n\n#tiger{\n    position: relative;    \n    display: -webkit-box;    \n    display: -ms-flexbox;    \n    display: flex;\n    max-width: 460px;\n    height: 390px;\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/leopard-image.png")) + ") center center no-repeat;\n}\n\n\n@media only screen and (max-width: 575px) {\n    #img-container{\n        max-width: 160px;\n        width: 120px;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container-fluid\" id=\"page\">\n    <div id=\"donate\">\n        <div class=\"text-center\">\n            <h4>DONATE TODAY</h4>\n            <br>\n            <p>Help protecting the planet today, become a Little Zebra ambassador</p>\n        </div>\n        <div>\n\n            <div id=\"widget\">\n                <div class=\"row\">\n                    <div class=\"col-8\" id=\"form-update\">\n                        <h4 class=\"text-center\" id=\"green-theme\">MAKE A DONATION</h4>\n                        <br>\n                        <div class=\"form-group\">\n                            <label for=\"selectanimal\">I want to help</label>\n                            <select class=\"form-control\" (change)=\"chooseAnimal($event)\">\n                                <option>a giraffe</option>\n                                <option>a tiger</option>\n                                <option>a rhino</option>\n                            </select>\n                            <br>\n\n                            <label for=\"\">I want to donate&nbsp;\n                        </label><span class=\"amount-box icon-bar\">£3</span>&nbsp;<span class=\"amount-box icon-bar\">\n                        £5</span>&nbsp;<span class=\"amount-box icon-bar\">£10</span> or <input type=\"text\" value=\"£\" style=\"width:18%;\" class=\"amount-box2 icon-bar\">\n                            <br><br>\n                            <input type=\"checkbox\"><label for=\"\">&nbsp;I want to do a monthly donation</label>\n                            <br><br>\n                            <button class=\"btn my-2 my-sm-0\" id=\"green-btn\" type=\"submit\">Donate Now</button>\n                        </div>\n                        <br><br>\n\n                    </div>\n                    <div class=\"col\"><span id=\"img-container\" class=\"float-right\"></span></div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div id=\"what-we-do\">\n        <div class=\"container\">\n\n            <div class=\"text-center\">\n                <h4>What we do</h4>\n                <p>Discover more about the Little Zebra foundation and how you can help us</p>\n            </div><br>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet, magna sit amet suscipit laoreet, ante velit scelerisque massa, ac mattis ex magna et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>\n\n                    <p>Aliquam efficitur tellus vitae erat laoreet sodales. Donec mollis, augue nec feugiat accumsan, ante dui aliquet ante, sit amet vestibulum ligula ex non mi. Nunc quis imperdiet leo, blandit maximus orci. Phasellus porttitor test eros magna, et viverra massa cursus ut. Cras nec est et urna ullamcorper volutpat et tristique augue. Nullam sit amet odio eget tortor rhoncus volutpat nec sed ipsum. Vivamus semper a ligula a sodales.</p>\n\n                    <p>Morbi mi dui, luctus ac vestibulum in, dapibus id ante. Vivamus eu odio non mi finibus dapibus a a erat. Cras commodo pharetra sapien, non ultrices nisl egestas eu.</p>\n                </div>\n                <div class=\"col-4\">\n                    <div id=\"tiger\"></div>\n                </div>\n            </div>\n\n\n            <button class=\"btn my-2 my-sm-0\" id=\"black-btn\" type=\"submit\">Our history</button>&nbsp;\n            <button class=\"btn my-2 my-sm-0\" id=\"yellow-btn\" type=\"submit\">Get involved</button>\n        </div>\n    </div>\n</div>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.chooseAnimal = function (e) {
        this.animalImage = document.getElementById("img-container");
        var animal = e.target.value;
        var tempImg;
        switch (animal) {
            case "a giraffe":
                tempImg = "../assets/giraffe-image.jpg";
                break;
            case "a tiger":
                tempImg = "../assets/tiger-image.jpg";
                break;
            case "a rhino":
                tempImg = "../assets/rhino-image.jpg";
                break;
            default:
                tempImg = "../assets/giraffe-image.jpg";
                break;
        }
        this.animalImage.style.background = "url(" + tempImg + ") center center no-repeat";
        console.log(tempImg);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer{\n    background-color: #484d55;\n    color: #fff;\n    height: 275px;\n    padding-top: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm\">\n                <b>WHO WE ARE</b><br><br>\n                <span>Our history</span><br>\n                <span>Press centre</span><br>\n                <span>Contact us</span>\n            </div>\n            <div class=\"col-sm\">\n                <b>GET INVOLVED</b><br><br>\n                <span>Join us</span><br>\n                <span>Donate</span><br>\n                <span>Careers</span><br>\n                <span>Shop</span>\n            </div>\n            <div class=\"col-4\">\n                <p><b>FOLLOW US</b></p>\n                <a href=\"\"><img src=\"assets/facebook-logo.svg\" alt=\"facebook\"></a>&nbsp;&nbsp;\n                <a href=\"\"><img src=\"assets/pinterest-logo.svg\" alt=\"pinterest\"></a>&nbsp;&nbsp;\n                <a href=\"\"><img src=\"assets/twitter-logo.svg\" alt=\"twitter\"></a>&nbsp;&nbsp;\n                <a href=\"\"><img src=\"assets/youtube-logo.svg\" alt=\"youtube\"></a>&nbsp;&nbsp;\n            </div>\n            <div class=\"col-4\">\n               <img src=\"assets/lts-logo-light.svg\" alt=\"logo\"><br><br>\n                <div class=\"float-right\">\n                    <p>3 Warren Rd,<br> Mary Tavy,<br> Tavistock PL19 9PF,<br> United Kingdom</p>\n                </div>\n                \n            </div>\n            \n        </div>\n    </div>\n\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#top-header{\n    background-color: #fec01e;\n    height: 10px;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div id=\"top-header\"></div>\n    <div class=\"container\">\n            <nav class=\"navbar navbar-default\">\n                <div class=\"container-fluid\" >\n                <img src=\"assets/lts-logo-dark.svg\" alt=\"logo\">\n                <span class=\"icon-bar\">What we do</span><span class=\"icon-bar\">Get involved</span>\n                    <span class=\"icon-bar\">Shop</span><span class=\"icon-bar\">News</span>\n                <form class=\"form-inline\">\n                    \n                    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\"><span class=\"glyphicon-class\"></span>\n                    <button class=\"btn my-2 my-sm-0\" id=\"green-btn\" type=\"submit\">Donate Now</button>\n                </form>\n                </div>\n            </nav>      \n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/giraffe-image.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "giraffe-image.e40e8e19590722214506.jpg";

/***/ }),

/***/ "../../../../../src/assets/leopard-image.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "leopard-image.57eefc4c1b0c0a1402ed.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map