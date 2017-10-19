define(["require", "exports", "dojo/_base/declare"], function (require, exports, declare) {
    return function () {
        var mixins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mixins[_i] = arguments[_i];
        }
        return function (target) {
            return declare(mixins, target.prototype);
        };
    };
});
//# sourceMappingURL=declareDecorator.js.map