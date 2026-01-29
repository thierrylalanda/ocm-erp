import {
  APP_ID,
  ApplicationRef,
  EnvironmentInjector,
  FactoryTarget,
  Injectable,
  Injector,
  core_exports,
  createComponent,
  init_core,
  inject,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable
} from "./chunk-W6MIRXHE.js";
import {
  __esm
} from "./chunk-FWMZPJRE.js";

// node_modules/@angular/cdk/fesm2022/fake-event-detection-DWOdFTFz.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var init_fake_event_detection_DWOdFTFz = __esm({
  "node_modules/@angular/cdk/fesm2022/fake-event-detection-DWOdFTFz.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs
var appsWithLoaders, _CdkPrivateStyleLoader;
var init_style_loader_B2sGQXxD = __esm({
  "node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs"() {
    "use strict";
    init_core();
    init_core();
    appsWithLoaders = /* @__PURE__ */ new WeakMap();
    _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
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
          data = { loaders: /* @__PURE__ */ new Set(), refs: [] };
          appsWithLoaders.set(appRef, data);
          appRef.onDestroy(() => {
            appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
            appsWithLoaders.delete(appRef);
          });
        }
        if (!data.loaders.has(loader)) {
          data.loaders.add(loader);
          data.refs.push(createComponent(loader, { environmentInjector: this._environmentInjector }));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkPrivateStyleLoader, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkPrivateStyleLoader, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkPrivateStyleLoader, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/id-generator-LuoRZSid.mjs
var counters, _IdGenerator;
var init_id_generator_LuoRZSid = __esm({
  "node_modules/@angular/cdk/fesm2022/id-generator-LuoRZSid.mjs"() {
    "use strict";
    init_core();
    init_core();
    counters = {};
    _IdGenerator = class __IdGenerator {
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
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __IdGenerator, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __IdGenerator, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _IdGenerator, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

export {
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  init_fake_event_detection_DWOdFTFz,
  _CdkPrivateStyleLoader,
  init_style_loader_B2sGQXxD,
  _IdGenerator,
  init_id_generator_LuoRZSid
};
//# sourceMappingURL=chunk-V5QKIDZC.js.map
