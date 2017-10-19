var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "dojo/text!./templates/demoTs.html", "dojo/i18n!widgets/demoTsWidget/demoTs/nls/strings", "xstyle/css!./resources/demoTs.css", "dojo/_base/lang", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "widgets/demoTsWidget/declareDecorator"], function (require, exports, template, nls, style, lang, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, declare) {
    /// <amd-dependency path="dojo/text!./templates/demoTs.html" name="template" />
    /// <amd-dependency path="dojo/i18n!widgets/demoTsWidget/demoTs/nls/strings" name="nls" />
    /// <amd-dependency path="xstyle/css!./resources/demoTs.css" name="style" />
    var MyWidget = /** @class */ (function () {
        function MyWidget() {
            var options = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                options[_i] = arguments[_i];
            }
            var _this = this;
            // description:
            this.templateString = template;
            this.baseClass = "demo-ts-widget";
            this.nls = nls;
            options.forEach(function (o) {
                lang.mixin(_this, options);
            });
        }
        MyWidget.prototype.postCreate = function () {
            console.log(this.baseClass + "::postCreate");
        };
        MyWidget.prototype.startup = function (args) {
            // not allowed in option strict this.inherited(arguments);
            WidgetBase.prototype.startup.call(this, args);
            // check we have the config
            console.log(this.config.serviceUrl);
            // check we have a map
            console.log(this.map.extent);
        };
        MyWidget = __decorate([
            declare(WidgetBase, TemplatedMixin, WidgetsInTemplateMixin)
        ], MyWidget);
        return MyWidget;
    }());
    return MyWidget;
});
//# sourceMappingURL=demoTs.js.map