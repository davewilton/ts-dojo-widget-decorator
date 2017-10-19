var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "jimu/BaseWidget", "dojo/dom-construct", "./declareDecorator", "./demoTs/demoTs"], function (require, exports, BaseWidget, domConstruct, declare, Widget) {
    /// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
    var MyWidget = /** @class */ (function () {
        function MyWidget() {
        }
        MyWidget.prototype.postCreate = function () {
            console.log(this.baseClass + "::postCreate");
        };
        MyWidget.prototype.startup = function (args) {
            // not allowed in option strict this.inherited(arguments);
            BaseWidget.prototype.startup.call(this, args);
            console.log(this.baseClass + "::startup");
            // create an instance of our widget and place on the widget dom
            var widgetDiv = domConstruct.create("div", null, this.domNode);
            var widget = new Widget({
                map: this.map,
                config: this.config
            }, widgetDiv);
            widget.startup();
        };
        MyWidget = __decorate([
            declare(BaseWidget)
        ], MyWidget);
        return MyWidget;
    }());
    return MyWidget;
});
//# sourceMappingURL=Widget.js.map