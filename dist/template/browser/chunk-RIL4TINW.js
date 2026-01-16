import {
  APP_ID,
  ApplicationRef,
  EnvironmentInjector,
  Injectable,
  Injector,
  createComponent,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-U4CEU3KS.js";

// node_modules/@angular/cdk/fesm2022/fake-event-detection-DWOdFTFz.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

// node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
  _appRef;
  _injector = inject(Injector);
  _environmentInjector = inject(EnvironmentInjector);
  /**
   * Loads a set of styles.
   * @param loader Component which will be instantiated to load the styles.
   */
  load(loader) {
    const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
    let data = appsWithLoaders.get(appRef);
    if (!data) {
      data = {
        loaders: /* @__PURE__ */ new Set(),
        refs: []
      };
      appsWithLoaders.set(appRef, data);
      appRef.onDestroy(() => {
        appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
        appsWithLoaders.delete(appRef);
      });
    }
    if (!data.loaders.has(loader)) {
      data.loaders.add(loader);
      data.refs.push(createComponent(loader, {
        environmentInjector: this._environmentInjector
      }));
    }
  }
  static \u0275fac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __CdkPrivateStyleLoader,
    factory: __CdkPrivateStyleLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/id-generator-LuoRZSid.mjs
var counters = {};
var _IdGenerator = class __IdGenerator {
  _appId = inject(APP_ID);
  /**
   * Generates a unique ID with a specific prefix.
   * @param prefix Prefix to add to the ID.
   */
  getId(prefix) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    if (!counters.hasOwnProperty(prefix)) {
      counters[prefix] = 0;
    }
    return `${prefix}${counters[prefix]++}`;
  }
  static \u0275fac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __IdGenerator)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __IdGenerator,
    factory: __IdGenerator.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  _CdkPrivateStyleLoader,
  _IdGenerator
};
//# sourceMappingURL=chunk-RIL4TINW.js.map
