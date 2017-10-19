/// <amd-dependency path="dojo/text!./templates/demoTs.html" name="template" />
/// <amd-dependency path="dojo/i18n!widgets/demoTsWidget/demoTs/nls/strings" name="nls" />
/// <amd-dependency path="xstyle/css!./resources/demoTs.css" name="style" />
declare var template: any;
declare var nls: any;
declare var style: any;

// dojo
import dojoDeclare = require("dojo/_base/declare");
import lang = require("dojo/_base/lang");

// dijit
import WidgetBase = require("dijit/_WidgetBase");
import TemplatedMixin = require("dijit/_TemplatedMixin");
import WidgetsInTemplateMixin = require("dijit/_WidgetsInTemplateMixin");

// esri
import Map = require("esri/map");

// local
import IConfig = require("./IConfigdemoTs");
import declare = require("widgets/demoTsWidget/declareDecorator");

@declare(WidgetBase, TemplatedMixin, WidgetsInTemplateMixin)
class MyWidget {
    // description:
    templateString = template;
    baseClass = "demo-ts-widget";
    nls = nls;
    config: IConfig;
    map: Map;

    constructor(...options: Array<any>) {
        options.forEach((o) => {
            lang.mixin(this, options);
        });
    }

    postCreate(): void {
        console.log(this.baseClass + "::postCreate");
    }

    startup(args?: any): void {
        // not allowed in option strict this.inherited(arguments);
        WidgetBase.prototype.startup.call(this, args);
        // check we have the config
        console.log(this.config.serviceUrl);
        // check we have a map
        console.log(this.map.extent);
    }

}

export = MyWidget;