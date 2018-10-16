# Vue SPA Boilerplate application wrapper

Using a Layers first layout with `vue-router` && `vuex` to enable a fullscreen experience Single Page Application.  

### Layers

These follow a **z-index** hierarchy.

The **Background** layer will contain a **media backdrop** (video / image) and will be managed by **vuex state** controlled via **router** events.

The **Router** is master to the `router-view` inside the `layer-view` component, that drives the main content following a nested hierarchy, as follows:

```
/:page/:view-type/:child/:child-focus
```

> _this could be described as_ **/location-a/360/item-1/preview/colour**

The **HUD** is simply the **navigation** layer, including **menus** and and any **global app state** access.

The **Foreground** layer is where you can find **top level notifications**, or experience breaking **modals**.

**Layer Example**

```
//- VIDEO PLAYER
//- PAGE => VIEW-TYPE => CHILD-ITEM => CHILD-FOCUS
//- HUD => MENU => LINKS
//- MODAL => LOGIN
```



---

**notes**

* `js/core/onload.js` - allows css scripts to be loaded in async via the `link rel=preload as=style`
* `ENV variables` are available, see `npm run production` and in `js/main.js`. Also `rollup.config.js` detects `ENV` and `uglifies` where applicable.
* [eslint](http://eslint.org/docs/user-guide/configuring) check the manual for any issues with ES6

