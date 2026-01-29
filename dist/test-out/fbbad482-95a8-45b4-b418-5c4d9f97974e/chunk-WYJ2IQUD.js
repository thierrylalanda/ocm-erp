import {
  init_layout
} from "./chunk-I2GXMQDC.js";
import {
  MediaMatcher
} from "./chunk-UJXPUDZY.js";
import {
  ANIMATION_MODULE_TYPE,
  InjectionToken,
  init_core,
  inject
} from "./chunk-W6MIRXHE.js";
import {
  __esm
} from "./chunk-FWMZPJRE.js";

// node_modules/@angular/material/fesm2022/animation-ChQ1vjiF.mjs
function _getAnimationsState() {
  if (inject(MATERIAL_ANIMATIONS, { optional: true })?.animationsDisabled || inject(ANIMATION_MODULE_TYPE, { optional: true }) === "NoopAnimations") {
    return "di-disabled";
  }
  reducedMotion ??= inject(MediaMatcher).matchMedia("(prefers-reduced-motion)").matches;
  return reducedMotion ? "reduced-motion" : "enabled";
}
function _animationsDisabled() {
  return _getAnimationsState() !== "enabled";
}
var MATERIAL_ANIMATIONS, reducedMotion;
var init_animation_ChQ1vjiF = __esm({
  "node_modules/@angular/material/fesm2022/animation-ChQ1vjiF.mjs"() {
    "use strict";
    init_layout();
    init_core();
    MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
    reducedMotion = null;
  }
});

export {
  _animationsDisabled,
  init_animation_ChQ1vjiF
};
//# sourceMappingURL=chunk-WYJ2IQUD.js.map
