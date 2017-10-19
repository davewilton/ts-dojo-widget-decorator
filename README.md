# ts-dojo-widget-decorator
demo of widget for use with esri WAB using decorators

Allows the use of a decorator to allow dojos inheritance

for the WAB BaseWidget

```

@declare(BaseWidget)
class MyWidget {
    baseClass: "demo-ts-widget";
    postCreate(): void {
        console.log(this.baseClass + "::postCreate");
    }

}
export = MyWidget;

```

for a pure dojo widget

```

@declare(WidgetBase, TemplatedMixin, WidgetsInTemplateMixin)
class MyWidget {
    baseClass = "demo-ts-widget";
    templateString = template;
    nls = nls;
    config: IConfig;
    map: Map;
    constructor(...options: Array<any>) {
        options.forEach((o) => {
            lang.mixin(this, options);
        });
    }
}

export = MyWidget;

```
