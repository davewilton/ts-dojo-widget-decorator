/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
declare var BaseWidget: any; // there is no ts definition of BaseWidget yet

// dojo
import dojoDeclare = require("dojo/_base/declare");
import domConstruct = require("dojo/dom-construct");


// local
import Widget = require("./demoTs/demoTs");
import declare  = require("./demoTs/declareDecorator");

// esri
import Map = require("esri/map");

@declare(BaseWidget)
class MyWidget {
     // description:
    baseClass: "demo-ts-widget";
    domNode: HTMLElement;
    map: Map;
    config: any;

    postCreate(): void {
        console.log(this.baseClass + "::postCreate");
    }

    startup(args: any): void {
        // not allowed in option strict this.inherited(arguments);
        BaseWidget.prototype.startup.call(this, args);
        console.log(this.baseClass + "::startup");

        // create an instance of our widget and place on the widget dom
        var widgetDiv: HTMLElement = domConstruct.create("div", null, this.domNode);
        var widget: Widget = new Widget({
            map: this.map,
            config: this.config
        }, widgetDiv);

        widget.startup();
    }

}


export = MyWidget;


