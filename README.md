# Travelpayouts Test Task - Widget

This is a test task implementaion for Aviasales(Travelpayouts) Frontend position. The goal is to build web UI widget that can be embedded into 3rd party website. The task description can be found and markup 👉 [here](https://github.com/KosyanMedia/Front-end_TP_test).

Two articles by Jenya Y. served as a main reference and guideline. See the walkthough for details: 👉 [here](https://blog.jenyay.com/building-javascript-widget/) and 👉 [here](https://blog.jenyay.com/web-ui-widget/)

This structure provides those advantages:

## Usage

In order to embed the widget on the hosting page:

1️⃣ Add the container element/elements that will hold the widget at the desired location and provide `travelpayouts-widget` class:

```html
<div class="travelpayouts-widget"></div>
```

2️⃣ Add the following snippet at any location:

```html
<script>
  (function (w, d, s, o, f, js, fjs) {
    w[o] =
      w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, 'script', '_tpw', './widget.js');
  _hw('init');
</script>
```

Color and font configurations can be passed to widget like so:

```diff
-_tpw('init');
+_tpw('init', { palette: { primary: { zero: '#ededed' }}});
```

### Examples:

- Default:
  ![Default Configuration Widget Screenshot](https://github.com/mezentsv/travelpayouts-widget/tree/main/src/screenshots/customized-widget.png)

###

- Customized palette:

```diff
-_tpw('init');
+_tpw('init', {
+        debug: true,
+        palette: {
+          primary: { zero: '#50C9CE', one: '#445E93' },
+          secondary: { zero: '#FCD3DE' },
+          text: { zero: '#445E93' }
+        }
+      });
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![Custom Configuration Widget Screenshot](https://github.com/mezentsv/travelpayouts-widget/tree/main/src/screenshots/default-widget.png)

##

The full list of configurations can be found in `AppConfigurations` interface of `src/models.ts` file.

## Develop

To get started run the following comands in the `Terminal`:

```bash
npm i
npm start
```

This will spin up the `webpack-dev-server` and open the default browser with "demo" page that hosts several instances of the widget in different locations.

## Additional Notes

There are a couple of things to keep in mind when developing a widget:

- Widget should not have an impact on the website perfomance that hosts it.
- It should be isolated and not affected by or rely on the website it's being hosted on.
- It should provide the broad browser support

## Acknowledgements

- [Building JavaScript widget
  ](https://blog.jenyay.com/building-javascript-widget/)
- [Web UI widget
  ](https://blog.jenyay.com/web-ui-widget/)
- [Jenya Y.](https://github.com/jenyayel)

## License

The source and documentation in this project are released under the [MIT License](LICENSE)