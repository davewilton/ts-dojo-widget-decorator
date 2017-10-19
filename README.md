# ts-dojo-widget-decorator
demo of widget for use with esri WAB using decorators

Allows the use of a decorator to allow dojos inheritance

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
