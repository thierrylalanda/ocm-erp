import {
  __esm
} from "./chunk-FWMZPJRE.js";

// src/app/modules/_shared/domain/base/value-object.base.ts
var ValueObject;
var init_value_object_base = __esm({
  "src/app/modules/_shared/domain/base/value-object.base.ts"() {
    "use strict";
    ValueObject = class {
      value;
      constructor(value) {
        this.value = Object.freeze(value);
      }
      /**
       * Get the value
       */
      getValue() {
        return this.value;
      }
      /**
       * Compare two value objects for equality
       */
      equals(vo) {
        if (vo === null || vo === void 0) {
          return false;
        }
        if (vo.value === void 0) {
          return false;
        }
        return JSON.stringify(this.value) === JSON.stringify(vo.value);
      }
      /**
       * Convert to string representation
       */
      toString() {
        return String(this.value);
      }
    };
  }
});

export {
  ValueObject,
  init_value_object_base
};
//# sourceMappingURL=chunk-N3H5GIVS.js.map
