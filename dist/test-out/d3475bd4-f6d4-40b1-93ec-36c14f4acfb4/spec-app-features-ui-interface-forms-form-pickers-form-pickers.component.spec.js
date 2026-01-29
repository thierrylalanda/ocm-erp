import {
  BaseComponent,
  BaseStyle,
  C,
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  D,
  Ht,
  I,
  K,
  Kt,
  O,
  OverlayService,
  PrimeTemplate,
  Qt,
  R,
  Rt,
  S,
  SharedModule,
  SpinnerIcon,
  T,
  TimesIcon,
  TranslationKeys,
  Tt,
  W,
  Y,
  Yt,
  a,
  b,
  dt,
  f,
  init_dist,
  init_dist2,
  init_primeng_api,
  init_primeng_base,
  init_primeng_basecomponent,
  init_primeng_icons,
  init_primeng_utils,
  rr,
  s,
  s2,
  st,
  ut,
  v,
  x,
  z,
  zindexutils
} from "./chunk-MWAVVFZJ.js";
import {
  BsDatepickerDirective,
  BsDatepickerModule,
  init_ngx_bootstrap_datepicker
} from "./chunk-WSBEZP5X.js";
import "./chunk-SR4JAI3W.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  init_core_index
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import {
  animate,
  init_animations,
  state,
  style,
  transition,
  trigger
} from "./chunk-5B5ZAECM.js";
import {
  CommonService
} from "./chunk-2O5UQ647.js";
import "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  init_common,
  isPlatformBrowser
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostListener,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  __decorate,
  booleanAttribute,
  computed,
  contentChild,
  core_exports,
  effect,
  forwardRef,
  init_core,
  init_tslib_es6,
  inject,
  input,
  numberAttribute,
  signal,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/ui-interface/forms/form-pickers/form-pickers.component.html
var form_pickers_component_default;
var init_form_pickers_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/forms/form-pickers/form-pickers.component.html"() {
    form_pickers_component_default = ' <!-- Page Header -->\n <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Form Picker</h4>\n  </div>\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n          <li class="breadcrumb-item active">Form Picker</li>\n      </ol>\n  </div>\n</div>\n<!-- End Page Header -->\n\n<div class="row">\n<!-- Date Picker -->\n<div class="col-12 mb-6">\n  <div class="card">\n    <h5 class="card-header">Datepickr</h5>\n    <div class="card-body">\n      <div class="row">\n        <!-- Date Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <div class="ngx-date3">\n                <label class="form-label">Date Picker</label>\n                <div class="input-icon-end position-relative">\n                    <input\n                      type="text"\n                      class="form-control datetimepicker"\n                      bsDatepicker\n                      container=".ngx-date3"\n                      [bsConfig]="{ adaptivePosition: true }"\n                      placeholder="dd/mm/yyyy"\n                      value="02-05-2024"\n                    />\n                    <span class="input-icon-addon">\n                      <i class="ti ti-calendar text-gray-7"></i>\n                    </span>\n                  </div>\n\n            </div>\n        </div>\n        <!-- /Date Picker -->\n\n        <!-- Time Picker-->\n        <div class="col-md-6 col-12 mb-6">\n          <label for="flatpickr-time" class="form-label">Time Picker</label>\n          <p-datePicker class="timepick" placeholder="HH : MM" inputId="calendar-timeonly" [(ngModel)]="time"  [timeOnly]="true" />\n        </div>\n        <!-- /Time Picker -->\n\n        <!-- Date Range Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <div class="mb-3">\n                <label class="form-label">Date Range Picker</label>\n                <input type="text" placeholder="Daterangepicker" class="form-control" bsDaterangepicker>\n            </div>\n        </div>\n        <!-- /Date Range Picker-->\n\n        <!-- Range Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <div class="ngx-year">\n                <label class="form-label">Year Picker</label>\n                <div class="input-icon position-relative">\n                <span class="input-icon-addon">\n                    <i class="ti ti-calendar text-gray-9"></i>\n                  </span>\n                  <input\n                    type="text"\n                    placeholder="yyyy"\n                    class="form-control yearpicker"\n                    container=".ngx-year"\n                    bsDatepicker\n                    [bsConfig]="bsConfig"\n                    [(ngModel)]="selectedYear"\n                    [ngModelOptions]="{ standalone: true }"\n                  />\n                </div>\n              </div>\n        </div>\n        <!-- /Range Picker-->\n\n        <!-- Human Friendly Date Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <bs-datepicker-inline [bsValue]="bsInlineValue"></bs-datepicker-inline>\n        </div>\n        <!-- /Human Friendly Date Picker-->\n\n        <!-- Disabled Range-->\n        <div class="col-md-6 col-12 mb-md-0 mb-6">\n          <label for="flatpickr-disabled-range" class="form-label">Month Range</label>\n          <input type="text"\n           class="form-control"\n           [bsConfig]="bsConfig"\n           #dp="bsDatepicker"\n           bsDatepicker [(bsValue)]="datePickerValue">\n        </div>\n        <!-- /Disabled Range-->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Datepickr -->\n\n<!-- Color Picker -->\n<div class="col-12">\n  <div class="card">\n    <h5 class="card-header">Color Picker</h5>\n    <div class="card-body">\n      <div class="row">\n        <div class="classic col col-sm-3 col-lg-2">\n            <p-colorPicker [(ngModel)]="color" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Color Picker-->\n</div>';
  }
});

// angular:jit:style:src/app/features/ui-interface/forms/form-pickers/form-pickers.component.scss
var form_pickers_component_default2;
var init_form_pickers_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/forms/form-pickers/form-pickers.component.scss"() {
    form_pickers_component_default2 = "/* src/app/features/ui-interface/forms/form-pickers/form-pickers.component.scss */\n.p-calendar .p-inputtext {\n  max-height: 37px;\n}\n/*# sourceMappingURL=form-pickers.component.css.map */\n";
  }
});

// node_modules/primeng/fesm2022/primeng-dom.mjs
function blockBodyScroll() {
  st({ variableName: rr("scrollbar.width").name });
}
function unblockBodyScroll() {
  dt({ variableName: rr("scrollbar.width").name });
}
var DomHandler, ConnectedOverlayScrollHandler;
var init_primeng_dom = __esm({
  "node_modules/primeng/fesm2022/primeng-dom.mjs"() {
    "use strict";
    init_dist();
    init_dist();
    init_dist2();
    DomHandler = class _DomHandler {
      static zindex = 1e3;
      static calculatedScrollbarWidth = null;
      static calculatedScrollbarHeight = null;
      static browser;
      static addClass(element, className) {
        if (element && className) {
          if (element.classList)
            element.classList.add(className);
          else
            element.className += " " + className;
        }
      }
      static addMultipleClasses(element, className) {
        if (element && className) {
          if (element.classList) {
            let styles = className.trim().split(" ");
            for (let i = 0; i < styles.length; i++) {
              element.classList.add(styles[i]);
            }
          } else {
            let styles = className.split(" ");
            for (let i = 0; i < styles.length; i++) {
              element.className += " " + styles[i];
            }
          }
        }
      }
      static removeClass(element, className) {
        if (element && className) {
          if (element.classList)
            element.classList.remove(className);
          else
            element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
      }
      static removeMultipleClasses(element, classNames) {
        if (element && classNames) {
          [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
        }
      }
      static hasClass(element, className) {
        if (element && className) {
          if (element.classList)
            return element.classList.contains(className);
          else
            return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
        }
        return false;
      }
      static siblings(element) {
        return Array.prototype.filter.call(element.parentNode.children, function(child) {
          return child !== element;
        });
      }
      static find(element, selector) {
        return Array.from(element.querySelectorAll(selector));
      }
      static findSingle(element, selector) {
        return this.isElement(element) ? element.querySelector(selector) : null;
      }
      static index(element) {
        let children = element.parentNode.childNodes;
        let num = 0;
        for (var i = 0; i < children.length; i++) {
          if (children[i] == element)
            return num;
          if (children[i].nodeType == 1)
            num++;
        }
        return -1;
      }
      static indexWithinGroup(element, attributeName) {
        let children = element.parentNode ? element.parentNode.childNodes : [];
        let num = 0;
        for (var i = 0; i < children.length; i++) {
          if (children[i] == element)
            return num;
          if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1)
            num++;
        }
        return -1;
      }
      static appendOverlay(overlay, target, appendTo = "self") {
        if (appendTo !== "self" && overlay && target) {
          this.appendChild(overlay, target);
        }
      }
      static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
        if (overlay && target) {
          if (calculateMinWidth) {
            overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
          }
          if (appendTo === "self") {
            this.relativePosition(overlay, target);
          } else {
            this.absolutePosition(overlay, target);
          }
        }
      }
      static relativePosition(element, target, gutter = true) {
        const getClosestRelativeElement = (el) => {
          if (!el)
            return;
          return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
        };
        const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        const targetHeight = target.offsetHeight;
        const targetOffset = target.getBoundingClientRect();
        const windowScrollTop = this.getWindowScrollTop();
        const windowScrollLeft = this.getWindowScrollLeft();
        const viewport = this.getViewport();
        const relativeElement = getClosestRelativeElement(element);
        const relativeElementOffset = relativeElement?.getBoundingClientRect() || {
          top: -1 * windowScrollTop,
          left: -1 * windowScrollLeft
        };
        let top, left, origin2 = "top";
        if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
          top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
          origin2 = "bottom";
          if (targetOffset.top + top < 0) {
            top = -1 * targetOffset.top;
          }
        } else {
          top = targetHeight + targetOffset.top - relativeElementOffset.top;
          origin2 = "top";
        }
        const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
        const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
        if (elementDimensions.width > viewport.width) {
          left = (targetOffset.left - relativeElementOffset.left) * -1;
        } else if (horizontalOverflow > 0) {
          left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
        } else {
          left = targetOffset.left - relativeElementOffset.left;
        }
        element.style.top = top + "px";
        element.style.left = left + "px";
        element.style.transformOrigin = origin2;
        if (gutter) {
          const gutterValue = x(/-anchor-gutter$/)?.value;
          element.style.marginTop = origin2 === "bottom" ? `calc(${gutterValue ?? "2px"} * -1)` : gutterValue ?? "";
        }
      }
      static absolutePosition(element, target, gutter = true) {
        const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        const elementOuterHeight = elementDimensions.height;
        const elementOuterWidth = elementDimensions.width;
        const targetOuterHeight = target.offsetHeight;
        const targetOuterWidth = target.offsetWidth;
        const targetOffset = target.getBoundingClientRect();
        const windowScrollTop = this.getWindowScrollTop();
        const windowScrollLeft = this.getWindowScrollLeft();
        const viewport = this.getViewport();
        let top, left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
          top = targetOffset.top + windowScrollTop - elementOuterHeight;
          element.style.transformOrigin = "bottom";
          if (top < 0) {
            top = windowScrollTop;
          }
        } else {
          top = targetOuterHeight + targetOffset.top + windowScrollTop;
          element.style.transformOrigin = "top";
        }
        if (targetOffset.left + elementOuterWidth > viewport.width)
          left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else
          left = targetOffset.left + windowScrollLeft;
        element.style.top = top + "px";
        element.style.left = left + "px";
        gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
      }
      static getParents(element, parents = []) {
        return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
      }
      static getScrollableParents(element) {
        let scrollableParents = [];
        if (element) {
          let parents = this.getParents(element);
          const overflowRegex = /(auto|scroll)/;
          const overflowCheck = (node) => {
            let styleDeclaration = window["getComputedStyle"](node, null);
            return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
          };
          for (let parent of parents) {
            let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
            if (scrollSelectors) {
              let selectors = scrollSelectors.split(",");
              for (let selector of selectors) {
                let el = this.findSingle(parent, selector);
                if (el && overflowCheck(el)) {
                  scrollableParents.push(el);
                }
              }
            }
            if (parent.nodeType !== 9 && overflowCheck(parent)) {
              scrollableParents.push(parent);
            }
          }
        }
        return scrollableParents;
      }
      static getHiddenElementOuterHeight(element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        let elementHeight = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementHeight;
      }
      static getHiddenElementOuterWidth(element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        let elementWidth = element.offsetWidth;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementWidth;
      }
      static getHiddenElementDimensions(element) {
        let dimensions = {};
        element.style.visibility = "hidden";
        element.style.display = "block";
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
        return dimensions;
      }
      static scrollInView(container, item) {
        let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
        let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
        let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        let scroll = container.scrollTop;
        let elementHeight = container.clientHeight;
        let itemHeight = this.getOuterHeight(item);
        if (offset < 0) {
          container.scrollTop = scroll + offset;
        } else if (offset + itemHeight > elementHeight) {
          container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
      }
      static fadeIn(element, duration) {
        element.style.opacity = 0;
        let last = +/* @__PURE__ */ new Date();
        let opacity = 0;
        let tick = function() {
          opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
          element.style.opacity = opacity;
          last = +/* @__PURE__ */ new Date();
          if (+opacity < 1) {
            window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
          }
        };
        tick();
      }
      static fadeOut(element, ms) {
        var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
        let fading = setInterval(() => {
          opacity = opacity - gap;
          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fading);
          }
          element.style.opacity = opacity;
        }, interval);
      }
      static getWindowScrollTop() {
        let doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      }
      static getWindowScrollLeft() {
        let doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      }
      static matches(element, selector) {
        var p = Element.prototype;
        var f2 = p["matches"] || p.webkitMatchesSelector || p["mozMatchesSelector"] || p["msMatchesSelector"] || function(s3) {
          return [].indexOf.call(document.querySelectorAll(s3), this) !== -1;
        };
        return f2.call(element, selector);
      }
      static getOuterWidth(el, margin) {
        let width = el.offsetWidth;
        if (margin) {
          let style9 = getComputedStyle(el);
          width += parseFloat(style9.marginLeft) + parseFloat(style9.marginRight);
        }
        return width;
      }
      static getHorizontalPadding(el) {
        let style9 = getComputedStyle(el);
        return parseFloat(style9.paddingLeft) + parseFloat(style9.paddingRight);
      }
      static getHorizontalMargin(el) {
        let style9 = getComputedStyle(el);
        return parseFloat(style9.marginLeft) + parseFloat(style9.marginRight);
      }
      static innerWidth(el) {
        let width = el.offsetWidth;
        let style9 = getComputedStyle(el);
        width += parseFloat(style9.paddingLeft) + parseFloat(style9.paddingRight);
        return width;
      }
      static width(el) {
        let width = el.offsetWidth;
        let style9 = getComputedStyle(el);
        width -= parseFloat(style9.paddingLeft) + parseFloat(style9.paddingRight);
        return width;
      }
      static getInnerHeight(el) {
        let height = el.offsetHeight;
        let style9 = getComputedStyle(el);
        height += parseFloat(style9.paddingTop) + parseFloat(style9.paddingBottom);
        return height;
      }
      static getOuterHeight(el, margin) {
        let height = el.offsetHeight;
        if (margin) {
          let style9 = getComputedStyle(el);
          height += parseFloat(style9.marginTop) + parseFloat(style9.marginBottom);
        }
        return height;
      }
      static getHeight(el) {
        let height = el.offsetHeight;
        let style9 = getComputedStyle(el);
        height -= parseFloat(style9.paddingTop) + parseFloat(style9.paddingBottom) + parseFloat(style9.borderTopWidth) + parseFloat(style9.borderBottomWidth);
        return height;
      }
      static getWidth(el) {
        let width = el.offsetWidth;
        let style9 = getComputedStyle(el);
        width -= parseFloat(style9.paddingLeft) + parseFloat(style9.paddingRight) + parseFloat(style9.borderLeftWidth) + parseFloat(style9.borderRightWidth);
        return width;
      }
      static getViewport() {
        let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
        return { width: w, height: h };
      }
      static getOffset(el) {
        var rect = el.getBoundingClientRect();
        return {
          top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
        };
      }
      static replaceElementWith(element, replacementElement) {
        let parentNode = element.parentNode;
        if (!parentNode)
          throw `Can't replace element`;
        return parentNode.replaceChild(replacementElement, element);
      }
      static getUserAgent() {
        if (navigator && this.isClient()) {
          return navigator.userAgent;
        }
      }
      static isIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0) {
          return true;
        }
        var trident = ua.indexOf("Trident/");
        if (trident > 0) {
          var rv = ua.indexOf("rv:");
          return true;
        }
        var edge = ua.indexOf("Edge/");
        if (edge > 0) {
          return true;
        }
        return false;
      }
      static isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
      }
      static isAndroid() {
        return /(android)/i.test(navigator.userAgent);
      }
      static isTouchDevice() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
      }
      static appendChild(element, target) {
        if (this.isElement(target))
          target.appendChild(element);
        else if (target && target.el && target.el.nativeElement)
          target.el.nativeElement.appendChild(element);
        else
          throw "Cannot append " + target + " to " + element;
      }
      static removeChild(element, target) {
        if (this.isElement(target))
          target.removeChild(element);
        else if (target.el && target.el.nativeElement)
          target.el.nativeElement.removeChild(element);
        else
          throw "Cannot remove " + element + " from " + target;
      }
      static removeElement(element) {
        if (!("remove" in Element.prototype))
          element.parentNode.removeChild(element);
        else
          element.remove();
      }
      static isElement(obj) {
        return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
      }
      static calculateScrollbarWidth(el) {
        if (el) {
          let style9 = getComputedStyle(el);
          return el.offsetWidth - el.clientWidth - parseFloat(style9.borderLeftWidth) - parseFloat(style9.borderRightWidth);
        } else {
          if (this.calculatedScrollbarWidth !== null)
            return this.calculatedScrollbarWidth;
          let scrollDiv = document.createElement("div");
          scrollDiv.className = "p-scrollbar-measure";
          document.body.appendChild(scrollDiv);
          let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          this.calculatedScrollbarWidth = scrollbarWidth;
          return scrollbarWidth;
        }
      }
      static calculateScrollbarHeight() {
        if (this.calculatedScrollbarHeight !== null)
          return this.calculatedScrollbarHeight;
        let scrollDiv = document.createElement("div");
        scrollDiv.className = "p-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarHeight;
        return scrollbarHeight;
      }
      static invokeElementMethod(element, methodName, args) {
        element[methodName].apply(element, args);
      }
      static clearSelection() {
        if (window.getSelection) {
          if (window.getSelection().empty) {
            window.getSelection().empty();
          } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
            window.getSelection().removeAllRanges();
          }
        } else if (document["selection"] && document["selection"].empty) {
          try {
            document["selection"].empty();
          } catch (error) {
          }
        }
      }
      static getBrowser() {
        if (!this.browser) {
          let matched = this.resolveUserAgent();
          this.browser = {};
          if (matched.browser) {
            this.browser[matched.browser] = true;
            this.browser["version"] = matched.version;
          }
          if (this.browser["chrome"]) {
            this.browser["webkit"] = true;
          } else if (this.browser["webkit"]) {
            this.browser["safari"] = true;
          }
        }
        return this.browser;
      }
      static resolveUserAgent() {
        let ua = navigator.userAgent.toLowerCase();
        let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
        return {
          browser: match[1] || "",
          version: match[2] || "0"
        };
      }
      static isInteger(value) {
        if (Number.isInteger) {
          return Number.isInteger(value);
        } else {
          return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
        }
      }
      static isHidden(element) {
        return !element || element.offsetParent === null;
      }
      static isVisible(element) {
        return element && element.offsetParent != null;
      }
      static isExist(element) {
        return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
      }
      static focus(element, options) {
        element && document.activeElement !== element && element.focus(options);
      }
      static getFocusableSelectorString(selector = "") {
        return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
      }
      static getFocusableElements(element, selector = "") {
        let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
        let visibleFocusableElements = [];
        for (let focusableElement of focusableElements) {
          const computedStyle = getComputedStyle(focusableElement);
          if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
            visibleFocusableElements.push(focusableElement);
        }
        return visibleFocusableElements;
      }
      static getFocusableElement(element, selector = "") {
        let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
        if (focusableElement) {
          const computedStyle = getComputedStyle(focusableElement);
          if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
            return focusableElement;
        }
        return null;
      }
      static getFirstFocusableElement(element, selector = "") {
        const focusableElements = this.getFocusableElements(element, selector);
        return focusableElements.length > 0 ? focusableElements[0] : null;
      }
      static getLastFocusableElement(element, selector) {
        const focusableElements = this.getFocusableElements(element, selector);
        return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
      }
      static getNextFocusableElement(element, reverse = false) {
        const focusableElements = _DomHandler.getFocusableElements(element);
        let index = 0;
        if (focusableElements && focusableElements.length > 0) {
          const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
          if (reverse) {
            if (focusedIndex == -1 || focusedIndex === 0) {
              index = focusableElements.length - 1;
            } else {
              index = focusedIndex - 1;
            }
          } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
            index = focusedIndex + 1;
          }
        }
        return focusableElements[index];
      }
      static generateZIndex() {
        this.zindex = this.zindex || 999;
        return ++this.zindex;
      }
      static getSelection() {
        if (window.getSelection)
          return window.getSelection().toString();
        else if (document.getSelection)
          return document.getSelection().toString();
        else if (document["selection"])
          return document["selection"].createRange().text;
        return null;
      }
      static getTargetElement(target, el) {
        if (!target)
          return null;
        switch (target) {
          case "document":
            return document;
          case "window":
            return window;
          case "@next":
            return el?.nextElementSibling;
          case "@prev":
            return el?.previousElementSibling;
          case "@parent":
            return el?.parentElement;
          case "@grandparent":
            return el?.parentElement.parentElement;
          default:
            const type = typeof target;
            if (type === "string") {
              return document.querySelector(target);
            } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
              return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
            }
            const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
            const element = isFunction(target) ? target() : target;
            return element && element.nodeType === 9 || this.isExist(element) ? element : null;
        }
      }
      static isClient() {
        return !!(typeof window !== "undefined" && window.document && window.document.createElement);
      }
      static getAttribute(element, name) {
        if (element) {
          const value = element.getAttribute(name);
          if (!isNaN(value)) {
            return +value;
          }
          if (value === "true" || value === "false") {
            return value === "true";
          }
          return value;
        }
        return void 0;
      }
      static calculateBodyScrollbarWidth() {
        return window.innerWidth - document.documentElement.offsetWidth;
      }
      static blockBodyScroll(className = "p-overflow-hidden") {
        document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
        this.addClass(document.body, className);
      }
      static unblockBodyScroll(className = "p-overflow-hidden") {
        document.body.style.removeProperty("--scrollbar-width");
        this.removeClass(document.body, className);
      }
      static createElement(type, attributes = {}, ...children) {
        if (type) {
          const element = document.createElement(type);
          this.setAttributes(element, attributes);
          element.append(...children);
          return element;
        }
        return void 0;
      }
      static setAttribute(element, attribute = "", value) {
        if (this.isElement(element) && value !== null && value !== void 0) {
          element.setAttribute(attribute, value);
        }
      }
      static setAttributes(element, attributes = {}) {
        if (this.isElement(element)) {
          const computedStyles = (rule, value) => {
            const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
            return [value].flat().reduce((cv, v2) => {
              if (v2 !== null && v2 !== void 0) {
                const type = typeof v2;
                if (type === "string" || type === "number") {
                  cv.push(v2);
                } else if (type === "object") {
                  const _cv = Array.isArray(v2) ? computedStyles(rule, v2) : Object.entries(v2).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
                  cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
                }
              }
              return cv;
            }, styles);
          };
          Object.entries(attributes).forEach(([key, value]) => {
            if (value !== void 0 && value !== null) {
              const matchedEvent = key.match(/^on(.+)/);
              if (matchedEvent) {
                element.addEventListener(matchedEvent[1].toLowerCase(), value);
              } else if (key === "pBind") {
                this.setAttributes(element, value);
              } else {
                value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
                (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
                element.setAttribute(key, value);
              }
            }
          });
        }
      }
      static isFocusableElement(element, selector = "") {
        return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
      }
    };
    ConnectedOverlayScrollHandler = class {
      element;
      listener;
      scrollableParents;
      constructor(element, listener = () => {
      }) {
        this.element = element;
        this.listener = listener;
      }
      bindScrollListener() {
        this.scrollableParents = DomHandler.getScrollableParents(this.element);
        for (let i = 0; i < this.scrollableParents.length; i++) {
          this.scrollableParents[i].addEventListener("scroll", this.listener);
        }
      }
      unbindScrollListener() {
        if (this.scrollableParents) {
          for (let i = 0; i < this.scrollableParents.length; i++) {
            this.scrollableParents[i].removeEventListener("scroll", this.listener);
          }
        }
      }
      destroy() {
        this.unbindScrollListener();
        this.element = null;
        this.listener = null;
        this.scrollableParents = null;
      }
    };
  }
});

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus, AutoFocusModule;
var init_primeng_autofocus = __esm({
  "node_modules/primeng/fesm2022/primeng-autofocus.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_primeng_basecomponent();
    init_primeng_dom();
    AutoFocus = class _AutoFocus extends BaseComponent {
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      autofocus = false;
      focused = false;
      platformId = inject(PLATFORM_ID);
      document = inject(DOCUMENT);
      host = inject(ElementRef);
      ngAfterContentChecked() {
        if (this.autofocus === false) {
          this.host.nativeElement.removeAttribute("autofocus");
        } else {
          this.host.nativeElement.setAttribute("autofocus", true);
        }
        if (!this.focused) {
          this.autoFocus();
        }
      }
      ngAfterViewChecked() {
        if (!this.focused) {
          this.autoFocus();
        }
      }
      autoFocus() {
        if (isPlatformBrowser(this.platformId) && this.autofocus) {
          setTimeout(() => {
            const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
            if (focusableElements.length === 0) {
              this.host.nativeElement.focus();
            }
            if (focusableElements.length > 0) {
              focusableElements[0].focus();
            }
            this.focused = true;
          });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _AutoFocus, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.3", type: _AutoFocus, isStandalone: true, selector: "[pAutoFocus]", inputs: { autofocus: ["pAutoFocus", "autofocus"] }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: AutoFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[pAutoFocus]",
        standalone: true
      }]
    }], propDecorators: { autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }] } });
    AutoFocusModule = class _AutoFocusModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _AutoFocusModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _AutoFocusModule, imports: [AutoFocus], exports: [AutoFocus] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _AutoFocusModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: AutoFocusModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [AutoFocus],
        exports: [AutoFocus]
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
var BaseModelHolder;
var init_primeng_basemodelholder = __esm({
  "node_modules/primeng/fesm2022/primeng-basemodelholder.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_basecomponent();
    BaseModelHolder = class _BaseModelHolder extends BaseComponent {
      modelValue = signal(void 0, ...ngDevMode ? [{ debugName: "modelValue" }] : []);
      $filled = computed(() => s(this.modelValue()), ...ngDevMode ? [{ debugName: "$filled" }] : []);
      writeModelValue(value) {
        this.modelValue.set(value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BaseModelHolder, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.3", type: _BaseModelHolder, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BaseModelHolder, decorators: [{
      type: Directive,
      args: [{ standalone: true }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder;
var init_primeng_baseeditableholder = __esm({
  "node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_basemodelholder();
    BaseEditableHolder = class _BaseEditableHolder extends BaseModelHolder {
      /**
       * There must be a value (if set).
       * @defaultValue false
       * @group Props
       */
      required = input(void 0, ...ngDevMode ? [{ debugName: "required", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * When present, it specifies that the component should have invalid state style.
       * @defaultValue false
       * @group Props
       */
      invalid = input(void 0, ...ngDevMode ? [{ debugName: "invalid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * When present, it specifies that the component should have disabled state style.
       * @defaultValue false
       * @group Props
       */
      disabled = input(void 0, ...ngDevMode ? [{ debugName: "disabled", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * When present, it specifies that the name of the input.
       * @defaultValue undefined
       * @group Props
       */
      name = input(...ngDevMode ? [void 0, { debugName: "name" }] : []);
      _disabled = signal(false, ...ngDevMode ? [{ debugName: "_disabled" }] : []);
      $disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{ debugName: "$disabled" }] : []);
      onModelChange = () => {
      };
      onModelTouched = () => {
      };
      writeDisabledState(value) {
        this._disabled.set(value);
      }
      writeControlValue(value, setModelValue) {
      }
      /**** Angular ControlValueAccessors ****/
      writeValue(value) {
        this.writeControlValue(value, this.writeModelValue.bind(this));
      }
      registerOnChange(fn) {
        this.onModelChange = fn;
      }
      registerOnTouched(fn) {
        this.onModelTouched = fn;
      }
      setDisabledState(val) {
        this.writeDisabledState(val);
        this.cd.markForCheck();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BaseEditableHolder, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.1.3", type: _BaseEditableHolder, isStandalone: true, inputs: { required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, invalid: { classPropertyName: "invalid", publicName: "invalid", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BaseEditableHolder, decorators: [{
      type: Directive,
      args: [{ standalone: true }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/colorpicker/index.mjs
var style2;
var init_colorpicker = __esm({
  "node_modules/@primeuix/styles/dist/colorpicker/index.mjs"() {
    "use strict";
    style2 = "\n    .p-colorpicker {\n        display: inline-block;\n        position: relative;\n    }\n\n    .p-colorpicker-dragging {\n        cursor: pointer;\n    }\n\n    .p-colorpicker-preview {\n        width: dt('colorpicker.preview.width');\n        height: dt('colorpicker.preview.height');\n        padding: 0;\n        border: 0 none;\n        border-radius: dt('colorpicker.preview.border.radius');\n        transition:\n            background dt('colorpicker.transition.duration'),\n            color dt('colorpicker.transition.duration'),\n            border-color dt('colorpicker.transition.duration'),\n            outline-color dt('colorpicker.transition.duration'),\n            box-shadow dt('colorpicker.transition.duration');\n        outline-color: transparent;\n        cursor: pointer;\n    }\n\n    .p-colorpicker-preview:enabled:focus-visible {\n        border-color: dt('colorpicker.preview.focus.border.color');\n        box-shadow: dt('colorpicker.preview.focus.ring.shadow');\n        outline: dt('colorpicker.preview.focus.ring.width') dt('colorpicker.preview.focus.ring.style') dt('colorpicker.preview.focus.ring.color');\n        outline-offset: dt('colorpicker.preview.focus.ring.offset');\n    }\n\n    .p-colorpicker-panel {\n        background: dt('colorpicker.panel.background');\n        border: 1px solid dt('colorpicker.panel.border.color');\n        border-radius: dt('colorpicker.panel.border.radius');\n        box-shadow: dt('colorpicker.panel.shadow');\n        width: 193px;\n        height: 166px;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    .p-colorpicker-panel-inline {\n        box-shadow: none;\n        position: static;\n    }\n\n    .p-colorpicker-content {\n        position: relative;\n    }\n\n    .p-colorpicker-color-selector {\n        width: 150px;\n        height: 150px;\n        inset-block-start: 8px;\n        inset-inline-start: 8px;\n        position: absolute;\n    }\n\n    .p-colorpicker-color-background {\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);\n    }\n\n    .p-colorpicker-color-handle {\n        position: absolute;\n        inset-block-start: 0px;\n        inset-inline-start: 150px;\n        border-radius: 100%;\n        width: 10px;\n        height: 10px;\n        border-width: 1px;\n        border-style: solid;\n        margin: -5px 0 0 -5px;\n        cursor: pointer;\n        opacity: 0.85;\n        border-color: dt('colorpicker.handle.color');\n    }\n\n    .p-colorpicker-hue {\n        width: 17px;\n        height: 150px;\n        inset-block-start: 8px;\n        inset-inline-start: 167px;\n        position: absolute;\n        opacity: 0.85;\n        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);\n    }\n\n    .p-colorpicker-hue-handle {\n        position: absolute;\n        inset-block-start: 150px;\n        inset-inline-start: 0px;\n        width: 21px;\n        margin-inline-start: -2px;\n        margin-block-start: -5px;\n        height: 10px;\n        border-width: 2px;\n        border-style: solid;\n        opacity: 0.85;\n        cursor: pointer;\n        border-color: dt('colorpicker.handle.color');\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-colorpicker.mjs
var classes, ColorPickerStyle, ColorPickerClasses, COLORPICKER_VALUE_ACCESSOR, ColorPicker, ColorPickerModule;
var init_primeng_colorpicker = __esm({
  "node_modules/primeng/fesm2022/primeng-colorpicker.mjs"() {
    "use strict";
    init_animations();
    init_common();
    init_common();
    init_core();
    init_core();
    init_forms();
    init_dist();
    init_primeng_api();
    init_primeng_api();
    init_primeng_autofocus();
    init_primeng_autofocus();
    init_primeng_baseeditableholder();
    init_primeng_dom();
    init_primeng_utils();
    init_colorpicker();
    init_primeng_base();
    classes = {
      root: ({ instance }) => ["p-colorpicker p-component", { "p-colorpicker-overlay": !instance.inline, "p-colorpicker-dragging": instance.colorDragging || instance.hueDragging }],
      preview: ({ instance }) => ["p-colorpicker-preview", { "p-disabled": instance.$disabled() }],
      panel: ({ instance }) => [
        "p-colorpicker-panel",
        {
          "p-colorpicker-panel-inline": instance.inline,
          "p-disabled": instance.$disabled()
        }
      ],
      content: "p-colorpicker-content",
      colorSelector: "p-colorpicker-color-selector",
      colorBackground: "p-colorpicker-color-background",
      colorHandle: "p-colorpicker-color-handle",
      hue: "p-colorpicker-hue",
      hueHandle: "p-colorpicker-hue-handle"
    };
    ColorPickerStyle = class _ColorPickerStyle extends BaseStyle {
      name = "colorpicker";
      theme = style2;
      classes = classes;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ColorPickerStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ColorPickerStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ColorPickerStyle, decorators: [{
      type: Injectable
    }] });
    (function(ColorPickerClasses2) {
      ColorPickerClasses2["root"] = "p-colorpicker";
      ColorPickerClasses2["preview"] = "p-colorpicker-preview";
      ColorPickerClasses2["panel"] = "p-colorpicker-panel";
      ColorPickerClasses2["colorSelector"] = "p-colorpicker-color-selector";
      ColorPickerClasses2["colorBackground"] = "p-colorpicker-color-background";
      ColorPickerClasses2["colorHandle"] = "p-colorpicker-color-handle";
      ColorPickerClasses2["hue"] = "p-colorpicker-hue";
      ColorPickerClasses2["hueHandle"] = "p-colorpicker-hue-handle";
    })(ColorPickerClasses || (ColorPickerClasses = {}));
    COLORPICKER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPicker),
      multi: true
    };
    ColorPicker = class _ColorPicker extends BaseEditableHolder {
      overlayService;
      /**
       * Style class of the component.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Whether to display as an overlay or not.
       * @group Props
       */
      inline;
      /**
       * Format to use in value binding.
       * @group Props
       */
      format = "hex";
      /**
       * Index of the element in tabbing order.
       * @group Props
       */
      tabindex;
      /**
       * Identifier of the focus input to match a label defined for the dropdown.
       * @group Props
       */
      inputId;
      /**
       * Whether to automatically manage layering.
       * @group Props
       */
      autoZIndex = true;
      /**
       * Transition options of the show animation.
       * @group Props
       */
      showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
      /**
       * Transition options of the hide animation.
       * @group Props
       */
      hideTransitionOptions = ".1s linear";
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      autofocus;
      /**
       * Default color to display initially when model value is not present.
       * @group Props
       */
      defaultColor = "ff0000";
      /**
       * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
       * @defaultValue 'self'
       * @group Props
       */
      appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : []);
      /**
       * Callback to invoke on value change.
       * @param {ColorPickerChangeEvent} event - Custom value change event.
       * @group Emits
       */
      onChange = new EventEmitter();
      /**
       * Callback to invoke on panel is shown.
       * @group Emits
       */
      onShow = new EventEmitter();
      /**
       * Callback to invoke on panel is hidden.
       * @group Emits
       */
      onHide = new EventEmitter();
      inputViewChild;
      $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : []);
      value = { h: 0, s: 100, b: 100 };
      inputBgColor;
      shown;
      overlayVisible;
      documentClickListener;
      documentResizeListener;
      documentMousemoveListener;
      documentMouseupListener;
      documentHueMoveListener;
      scrollHandler;
      selfClick;
      colorDragging;
      hueDragging;
      overlay;
      colorSelectorViewChild;
      colorHandleViewChild;
      hueViewChild;
      hueHandleViewChild;
      _componentStyle = inject(ColorPickerStyle);
      constructor(overlayService) {
        super();
        this.overlayService = overlayService;
      }
      set colorSelector(element) {
        this.colorSelectorViewChild = element;
      }
      set colorHandle(element) {
        this.colorHandleViewChild = element;
      }
      set hue(element) {
        this.hueViewChild = element;
      }
      set hueHandle(element) {
        this.hueHandleViewChild = element;
      }
      get ariaLabel() {
        return this.config?.getTranslation(TranslationKeys.ARIA)[TranslationKeys.SELECT_COLOR];
      }
      onHueMousedown(event2) {
        if (this.$disabled()) {
          return;
        }
        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();
        this.hueDragging = true;
        this.pickHue(event2);
      }
      onHueDragStart(event2) {
        if (this.$disabled()) {
          return;
        }
        this.hueDragging = true;
        this.pickHue(event2, event2.changedTouches[0]);
      }
      onColorDragStart(event2) {
        if (this.$disabled()) {
          return;
        }
        this.colorDragging = true;
        this.pickColor(event2, event2.changedTouches[0]);
      }
      pickHue(event2, position) {
        let pageY = position ? position.pageY : event2.pageY;
        let top = this.hueViewChild?.nativeElement.getBoundingClientRect().top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
        this.value = this.validateHSB({
          h: Math.floor(360 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150),
          s: this.value.s,
          b: this.value.b
        });
        this.updateColorSelector();
        this.updateUI();
        this.updateModel();
        this.onChange.emit({ originalEvent: event2, value: this.getValueToUpdate() });
      }
      onColorMousedown(event2) {
        if (this.$disabled()) {
          return;
        }
        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();
        this.colorDragging = true;
        this.pickColor(event2);
      }
      onDrag(event2) {
        if (this.colorDragging) {
          this.pickColor(event2, event2.changedTouches[0]);
          event2.preventDefault();
        }
        if (this.hueDragging) {
          this.pickHue(event2, event2.changedTouches[0]);
          event2.preventDefault();
        }
      }
      onDragEnd() {
        this.colorDragging = false;
        this.hueDragging = false;
        this.unbindDocumentMousemoveListener();
        this.unbindDocumentMouseupListener();
      }
      pickColor(event2, position) {
        let pageX = position ? position.pageX : event2.pageX;
        let pageY = position ? position.pageY : event2.pageY;
        let rect = this.colorSelectorViewChild?.nativeElement.getBoundingClientRect();
        let top = rect.top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
        let left = rect.left + this.document.body.scrollLeft;
        let saturation = Math.floor(100 * Math.max(0, Math.min(150, pageX - left)) / 150);
        let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150);
        this.value = this.validateHSB({
          h: this.value.h,
          s: saturation,
          b: brightness
        });
        this.updateUI();
        this.updateModel();
        this.onChange.emit({ originalEvent: event2, value: this.getValueToUpdate() });
      }
      getValueToUpdate() {
        let val;
        switch (this.format) {
          case "hex":
            val = "#" + this.HSBtoHEX(this.value);
            break;
          case "rgb":
            val = this.HSBtoRGB(this.value);
            break;
          case "hsb":
            val = this.value;
            break;
        }
        return val;
      }
      updateModel() {
        this.onModelChange(this.getValueToUpdate());
        this.cd.markForCheck();
      }
      updateColorSelector() {
        if (this.colorSelectorViewChild) {
          const hsb = {};
          hsb.s = 100;
          hsb.b = 100;
          hsb.h = this.value.h;
          this.colorSelectorViewChild.nativeElement.style.backgroundColor = "#" + this.HSBtoHEX(hsb);
        }
      }
      updateUI() {
        if (this.colorHandleViewChild && this.hueHandleViewChild?.nativeElement) {
          this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + "px";
          this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + "px";
          this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - 150 * this.value.h / 360) + "px";
        }
        this.inputBgColor = "#" + this.HSBtoHEX(this.value);
      }
      onInputFocus() {
        this.onModelTouched();
      }
      show() {
        this.overlayVisible = true;
        this.cd.markForCheck();
      }
      onOverlayAnimationStart(event2) {
        switch (event2.toState) {
          case "visible":
            if (!this.inline) {
              this.overlay = event2.element;
              this.attrSelector && this.overlay.setAttribute(this.attrSelector, "");
              this.appendOverlay();
              if (this.autoZIndex) {
                zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
              }
              this.alignOverlay();
              this.bindDocumentClickListener();
              this.bindDocumentResizeListener();
              this.bindScrollListener();
              this.updateColorSelector();
              this.updateUI();
            }
            break;
          case "void":
            this.onOverlayHide();
            break;
        }
      }
      onOverlayAnimationEnd(event2) {
        switch (event2.toState) {
          case "visible":
            if (!this.inline) {
              this.onShow.emit({});
            }
            break;
          case "void":
            if (this.autoZIndex) {
              zindexutils.clear(event2.element);
            }
            this.onHide.emit({});
            break;
        }
      }
      appendOverlay() {
        DomHandler.appendOverlay(this.overlay, this.$appendTo() === "body" ? this.document.body : this.$appendTo(), this.$appendTo());
      }
      restoreOverlayAppend() {
        if (this.overlay && this.$appendTo() !== "self") {
          this.renderer.appendChild(this.inputViewChild?.nativeElement, this.overlay);
        }
      }
      alignOverlay() {
        if (this.$appendTo() === "self")
          I(this.overlay, this.inputViewChild?.nativeElement);
        else
          D(this.overlay, this.inputViewChild?.nativeElement);
      }
      hide() {
        this.overlayVisible = false;
        this.cd.markForCheck();
      }
      onInputClick() {
        this.selfClick = true;
        this.togglePanel();
      }
      togglePanel() {
        if (!this.overlayVisible)
          this.show();
        else
          this.hide();
      }
      onInputKeydown(event2) {
        switch (event2.code) {
          case "Space":
            this.togglePanel();
            event2.preventDefault();
            break;
          case "Escape":
          case "Tab":
            this.hide();
            break;
          default:
            break;
        }
      }
      onOverlayClick(event2) {
        this.overlayService.add({
          originalEvent: event2,
          target: this.el.nativeElement
        });
        this.selfClick = true;
      }
      bindDocumentClickListener() {
        if (!this.documentClickListener) {
          const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
          this.documentClickListener = this.renderer.listen(documentTarget, "click", () => {
            if (!this.selfClick) {
              this.overlayVisible = false;
              this.unbindDocumentClickListener();
            }
            this.selfClick = false;
            this.cd.markForCheck();
          });
        }
      }
      unbindDocumentClickListener() {
        if (this.documentClickListener) {
          this.documentClickListener();
          this.documentClickListener = null;
        }
      }
      bindDocumentMousemoveListener() {
        if (!this.documentMousemoveListener) {
          const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
          this.documentMousemoveListener = this.renderer.listen(documentTarget, "mousemove", (event2) => {
            if (this.colorDragging) {
              this.pickColor(event2);
            }
            if (this.hueDragging) {
              this.pickHue(event2);
            }
          });
        }
      }
      unbindDocumentMousemoveListener() {
        if (this.documentMousemoveListener) {
          this.documentMousemoveListener();
          this.documentMousemoveListener = null;
        }
      }
      bindDocumentMouseupListener() {
        if (!this.documentMouseupListener) {
          const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
          this.documentMouseupListener = this.renderer.listen(documentTarget, "mouseup", () => {
            this.colorDragging = false;
            this.hueDragging = false;
            this.unbindDocumentMousemoveListener();
            this.unbindDocumentMouseupListener();
          });
        }
      }
      unbindDocumentMouseupListener() {
        if (this.documentMouseupListener) {
          this.documentMouseupListener();
          this.documentMouseupListener = null;
        }
      }
      bindDocumentResizeListener() {
        if (isPlatformBrowser(this.platformId)) {
          this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", this.onWindowResize.bind(this));
        }
      }
      unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
          this.documentResizeListener();
          this.documentResizeListener = null;
        }
      }
      onWindowResize() {
        if (this.overlayVisible && !Yt()) {
          this.hide();
        }
      }
      bindScrollListener() {
        if (!this.scrollHandler) {
          this.scrollHandler = new ConnectedOverlayScrollHandler(this.el?.nativeElement, () => {
            if (this.overlayVisible) {
              this.hide();
            }
          });
        }
        this.scrollHandler.bindScrollListener();
      }
      unbindScrollListener() {
        if (this.scrollHandler) {
          this.scrollHandler.unbindScrollListener();
        }
      }
      validateHSB(hsb) {
        return {
          h: Math.min(360, Math.max(0, hsb.h)),
          s: Math.min(100, Math.max(0, hsb.s)),
          b: Math.min(100, Math.max(0, hsb.b))
        };
      }
      validateRGB(rgb) {
        return {
          r: Math.min(255, Math.max(0, rgb.r)),
          g: Math.min(255, Math.max(0, rgb.g)),
          b: Math.min(255, Math.max(0, rgb.b))
        };
      }
      validateHEX(hex) {
        var len = 6 - hex.length;
        if (len > 0) {
          var o = [];
          for (var i = 0; i < len; i++) {
            o.push("0");
          }
          o.push(hex);
          hex = o.join("");
        }
        return hex;
      }
      HEXtoRGB(hex) {
        let hexValue = parseInt(hex.indexOf("#") > -1 ? hex.substring(1) : hex, 16);
        return { r: hexValue >> 16, g: (hexValue & 65280) >> 8, b: hexValue & 255 };
      }
      HEXtoHSB(hex) {
        return this.RGBtoHSB(this.HEXtoRGB(hex));
      }
      RGBtoHSB(rgb) {
        var hsb = {
          h: 0,
          s: 0,
          b: 0
        };
        var min = Math.min(rgb.r, rgb.g, rgb.b);
        var max = Math.max(rgb.r, rgb.g, rgb.b);
        var delta = max - min;
        hsb.b = max;
        hsb.s = max != 0 ? 255 * delta / max : 0;
        if (hsb.s != 0) {
          if (rgb.r == max) {
            hsb.h = (rgb.g - rgb.b) / delta;
          } else if (rgb.g == max) {
            hsb.h = 2 + (rgb.b - rgb.r) / delta;
          } else {
            hsb.h = 4 + (rgb.r - rgb.g) / delta;
          }
        } else {
          hsb.h = -1;
        }
        hsb.h *= 60;
        if (hsb.h < 0) {
          hsb.h += 360;
        }
        hsb.s *= 100 / 255;
        hsb.b *= 100 / 255;
        return hsb;
      }
      HSBtoRGB(hsb) {
        var rgb = {
          r: 0,
          g: 0,
          b: 0
        };
        let h = hsb.h;
        let s3 = hsb.s * 255 / 100;
        let v2 = hsb.b * 255 / 100;
        if (s3 == 0) {
          rgb = {
            r: v2,
            g: v2,
            b: v2
          };
        } else {
          let t1 = v2;
          let t2 = (255 - s3) * v2 / 255;
          let t3 = (t1 - t2) * (h % 60) / 60;
          if (h == 360)
            h = 0;
          if (h < 60) {
            rgb.r = t1;
            rgb.b = t2;
            rgb.g = t2 + t3;
          } else if (h < 120) {
            rgb.g = t1;
            rgb.b = t2;
            rgb.r = t1 - t3;
          } else if (h < 180) {
            rgb.g = t1;
            rgb.r = t2;
            rgb.b = t2 + t3;
          } else if (h < 240) {
            rgb.b = t1;
            rgb.r = t2;
            rgb.g = t1 - t3;
          } else if (h < 300) {
            rgb.b = t1;
            rgb.g = t2;
            rgb.r = t2 + t3;
          } else if (h < 360) {
            rgb.r = t1;
            rgb.g = t2;
            rgb.b = t1 - t3;
          } else {
            rgb.r = 0;
            rgb.g = 0;
            rgb.b = 0;
          }
        }
        return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
      }
      RGBtoHEX(rgb) {
        var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
        for (var key in hex) {
          if (hex[key].length == 1) {
            hex[key] = "0" + hex[key];
          }
        }
        return hex.join("");
      }
      HSBtoHEX(hsb) {
        return this.RGBtoHEX(this.HSBtoRGB(hsb));
      }
      onOverlayHide() {
        this.unbindScrollListener();
        this.unbindDocumentResizeListener();
        this.unbindDocumentClickListener();
        this.overlay = null;
      }
      ngAfterViewInit() {
        if (this.inline) {
          this.updateColorSelector();
          this.updateUI();
        }
      }
      /**
       * @override
       *
       * @see {@link BaseEditableHolder.writeControlValue}
       * Writes the value to the control.
       */
      writeControlValue(value) {
        if (value) {
          switch (this.format) {
            case "hex":
              this.value = this.HEXtoHSB(value);
              break;
            case "rgb":
              this.value = this.RGBtoHSB(value);
              break;
            case "hsb":
              this.value = value;
              break;
          }
        } else {
          this.value = this.HEXtoHSB(this.defaultColor);
        }
        this.updateColorSelector();
        this.updateUI();
        this.cd.markForCheck();
      }
      ngOnDestroy() {
        if (this.scrollHandler) {
          this.scrollHandler.destroy();
          this.scrollHandler = null;
        }
        if (this.overlay && this.autoZIndex) {
          zindexutils.clear(this.overlay);
        }
        this.restoreOverlayAppend();
        this.onOverlayHide();
      }
      cn = f;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ColorPicker, deps: [{ token: OverlayService }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.1.3", type: _ColorPicker, isStandalone: true, selector: "p-colorPicker, p-colorpicker, p-color-picker", inputs: { styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: false, isRequired: false, transformFunction: null }, inline: { classPropertyName: "inline", publicName: "inline", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, format: { classPropertyName: "format", publicName: "format", isSignal: false, isRequired: false, transformFunction: null }, tabindex: { classPropertyName: "tabindex", publicName: "tabindex", isSignal: false, isRequired: false, transformFunction: null }, inputId: { classPropertyName: "inputId", publicName: "inputId", isSignal: false, isRequired: false, transformFunction: null }, autoZIndex: { classPropertyName: "autoZIndex", publicName: "autoZIndex", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, showTransitionOptions: { classPropertyName: "showTransitionOptions", publicName: "showTransitionOptions", isSignal: false, isRequired: false, transformFunction: null }, hideTransitionOptions: { classPropertyName: "hideTransitionOptions", publicName: "hideTransitionOptions", isSignal: false, isRequired: false, transformFunction: null }, autofocus: { classPropertyName: "autofocus", publicName: "autofocus", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, defaultColor: { classPropertyName: "defaultColor", publicName: "defaultColor", isSignal: false, isRequired: false, transformFunction: null }, appendTo: { classPropertyName: "appendTo", publicName: "appendTo", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onChange: "onChange", onShow: "onShow", onHide: "onHide" }, host: { properties: { "class": "cn(cx('root'), styleClass)", "attr.data-pc-name": '"colorpicker"', "attr.data-pc-section": '"root"' } }, providers: [COLORPICKER_VALUE_ACCESSOR, ColorPickerStyle], viewQueries: [{ propertyName: "inputViewChild", first: true, predicate: ["input"], descendants: true }, { propertyName: "colorSelector", first: true, predicate: ["colorSelector"], descendants: true }, { propertyName: "colorHandle", first: true, predicate: ["colorHandle"], descendants: true }, { propertyName: "hue", first: true, predicate: ["hue"], descendants: true }, { propertyName: "hueHandle", first: true, predicate: ["hueHandle"], descendants: true }], usesInheritance: true, ngImport: core_exports, template: `
        <input
            *ngIf="!inline"
            #input
            type="text"
            [class]="cx('preview')"
            readonly
            [attr.tabindex]="tabindex"
            [attr.disabled]="$disabled() ? '' : undefined"
            (click)="onInputClick()"
            (keydown)="onInputKeydown($event)"
            (focus)="onInputFocus()"
            [attr.id]="inputId"
            [style.backgroundColor]="inputBgColor"
            [attr.data-pc-section]="'input'"
            [attr.aria-label]="ariaLabel"
            [pAutoFocus]="autofocus"
        />
        <div
            *ngIf="inline || overlayVisible"
            [class]="cx('panel')"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [@.disabled]="inline === true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            [attr.data-pc-section]="'panel'"
        >
            <div [class]="cx('content')" [attr.data-pc-section]="'content'">
                <div #colorSelector [class]="cx('colorSelector')" (touchstart)="onColorDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" (mousedown)="onColorMousedown($event)" [attr.data-pc-section]="'selector'">
                    <div [class]="cx('colorBackground')" [attr.data-pc-section]="'color'">
                        <div #colorHandle [class]="cx('colorHandle')" [attr.data-pc-section]="'colorHandle'"></div>
                    </div>
                </div>
                <div #hue [class]="cx('hue')" (mousedown)="onHueMousedown($event)" (touchstart)="onHueDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" [attr.data-pc-section]="'hue'">
                    <div #hueHandle [class]="cx('hueHandle')" [attr.data-pc-section]="'hueHandle'"></div>
                </div>
            </div>
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: AutoFocusModule }, { kind: "directive", type: AutoFocus, selector: "[pAutoFocus]", inputs: ["pAutoFocus"] }, { kind: "ngmodule", type: SharedModule }], animations: [trigger("overlayAnimation", [transition(":enter", [style({ opacity: 0, transform: "scaleY(0.8)" }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({ opacity: 0 }))])])], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ColorPicker, decorators: [{
      type: Component,
      args: [{
        selector: "p-colorPicker, p-colorpicker, p-color-picker",
        standalone: true,
        imports: [CommonModule, AutoFocusModule, SharedModule],
        template: `
        <input
            *ngIf="!inline"
            #input
            type="text"
            [class]="cx('preview')"
            readonly
            [attr.tabindex]="tabindex"
            [attr.disabled]="$disabled() ? '' : undefined"
            (click)="onInputClick()"
            (keydown)="onInputKeydown($event)"
            (focus)="onInputFocus()"
            [attr.id]="inputId"
            [style.backgroundColor]="inputBgColor"
            [attr.data-pc-section]="'input'"
            [attr.aria-label]="ariaLabel"
            [pAutoFocus]="autofocus"
        />
        <div
            *ngIf="inline || overlayVisible"
            [class]="cx('panel')"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [@.disabled]="inline === true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            [attr.data-pc-section]="'panel'"
        >
            <div [class]="cx('content')" [attr.data-pc-section]="'content'">
                <div #colorSelector [class]="cx('colorSelector')" (touchstart)="onColorDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" (mousedown)="onColorMousedown($event)" [attr.data-pc-section]="'selector'">
                    <div [class]="cx('colorBackground')" [attr.data-pc-section]="'color'">
                        <div #colorHandle [class]="cx('colorHandle')" [attr.data-pc-section]="'colorHandle'"></div>
                    </div>
                </div>
                <div #hue [class]="cx('hue')" (mousedown)="onHueMousedown($event)" (touchstart)="onHueDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" [attr.data-pc-section]="'hue'">
                    <div #hueHandle [class]="cx('hueHandle')" [attr.data-pc-section]="'hueHandle'"></div>
                </div>
            </div>
        </div>
    `,
        animations: [trigger("overlayAnimation", [transition(":enter", [style({ opacity: 0, transform: "scaleY(0.8)" }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({ opacity: 0 }))])])],
        providers: [COLORPICKER_VALUE_ACCESSOR, ColorPickerStyle],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        host: {
          "[class]": "cn(cx('root'), styleClass)",
          "[attr.data-pc-name]": '"colorpicker"',
          "[attr.data-pc-section]": '"root"'
        }
      }]
    }], ctorParameters: () => [{ type: OverlayService }], propDecorators: { styleClass: [{
      type: Input
    }], inline: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], format: [{
      type: Input
    }], tabindex: [{
      type: Input
    }], inputId: [{
      type: Input
    }], autoZIndex: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showTransitionOptions: [{
      type: Input
    }], hideTransitionOptions: [{
      type: Input
    }], autofocus: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], defaultColor: [{
      type: Input
    }], onChange: [{
      type: Output
    }], onShow: [{
      type: Output
    }], onHide: [{
      type: Output
    }], inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }], colorSelector: [{
      type: ViewChild,
      args: ["colorSelector"]
    }], colorHandle: [{
      type: ViewChild,
      args: ["colorHandle"]
    }], hue: [{
      type: ViewChild,
      args: ["hue"]
    }], hueHandle: [{
      type: ViewChild,
      args: ["hueHandle"]
    }] } });
    ColorPickerModule = class _ColorPickerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ColorPickerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _ColorPickerModule, imports: [ColorPicker, SharedModule], exports: [ColorPicker, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ColorPickerModule, imports: [ColorPicker, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ColorPickerModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [ColorPicker, SharedModule],
        exports: [ColorPicker, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/progressbar/index.mjs
var style3;
var init_progressbar = __esm({
  "node_modules/@primeuix/styles/dist/progressbar/index.mjs"() {
    "use strict";
    style3 = "\n    .p-progressbar {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        height: dt('progressbar.height');\n        background: dt('progressbar.background');\n        border-radius: dt('progressbar.border.radius');\n    }\n\n    .p-progressbar-value {\n        margin: 0;\n        background: dt('progressbar.value.background');\n    }\n\n    .p-progressbar-label {\n        color: dt('progressbar.label.color');\n        font-size: dt('progressbar.label.font.size');\n        font-weight: dt('progressbar.label.font.weight');\n    }\n\n    .p-progressbar-determinate .p-progressbar-value {\n        height: 100%;\n        width: 0%;\n        position: absolute;\n        display: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        transition: width 1s ease-in-out;\n    }\n\n    .p-progressbar-determinate .p-progressbar-label {\n        display: inline-flex;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::before {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::after {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n        animation-delay: 1.15s;\n    }\n\n    @keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n\n    @keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-fluid.mjs
var classes2, FluidStyle, FluidClasses, Fluid, FluidModule;
var init_primeng_fluid = __esm({
  "node_modules/primeng/fesm2022/primeng-fluid.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_primeng_basecomponent();
    init_progressbar();
    init_primeng_base();
    classes2 = {
      root: "p-fluid"
    };
    FluidStyle = class _FluidStyle extends BaseStyle {
      name = "fluid";
      classes = classes2;
      theme = style3;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _FluidStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _FluidStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: FluidStyle, decorators: [{
      type: Injectable
    }] });
    (function(FluidClasses2) {
      FluidClasses2["root"] = "p-fluid";
    })(FluidClasses || (FluidClasses = {}));
    Fluid = class _Fluid extends BaseComponent {
      _componentStyle = inject(FluidStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Fluid, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.1.3", type: _Fluid, isStandalone: true, selector: "p-fluid", host: { properties: { "class": "cx('root')" } }, providers: [FluidStyle], usesInheritance: true, ngImport: core_exports, template: ` <ng-content></ng-content> `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Fluid, decorators: [{
      type: Component,
      args: [{
        selector: "p-fluid",
        template: ` <ng-content></ng-content> `,
        standalone: true,
        imports: [CommonModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [FluidStyle],
        host: {
          "[class]": "cx('root')"
        }
      }]
    }] });
    FluidModule = class _FluidModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _FluidModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _FluidModule, imports: [Fluid], exports: [Fluid] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _FluidModule, imports: [Fluid] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: FluidModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Fluid],
        exports: [Fluid]
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-baseinput.mjs
var BaseInput;
var init_primeng_baseinput = __esm({
  "node_modules/primeng/fesm2022/primeng-baseinput.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_baseeditableholder();
    init_primeng_fluid();
    BaseInput = class _BaseInput extends BaseEditableHolder {
      pcFluid = inject(Fluid, { optional: true, host: true, skipSelf: true });
      /**
       * Spans 100% width of the container when enabled.
       * @defaultValue false
       * @group Props
       */
      fluid = input(void 0, ...ngDevMode ? [{ debugName: "fluid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * Specifies the input variant of the component.
       * @defaultValue 'outlined'
       * @group Props
       */
      variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : []);
      /**
       * Specifies the size of the component.
       * @defaultValue undefined
       * @group Props
       */
      size = input(...ngDevMode ? [void 0, { debugName: "size" }] : []);
      /**
       * Specifies the visible width of the input element in characters.
       * @defaultValue undefined
       * @group Props
       */
      inputSize = input(...ngDevMode ? [void 0, { debugName: "inputSize" }] : []);
      /**
       * Specifies the value must match the pattern.
       * @defaultValue undefined
       * @group Props
       */
      pattern = input(...ngDevMode ? [void 0, { debugName: "pattern" }] : []);
      /**
       * The value must be greater than or equal to the value.
       * @defaultValue undefined
       * @group Props
       */
      min = input(...ngDevMode ? [void 0, { debugName: "min" }] : []);
      /**
       * The value must be less than or equal to the value.
       * @defaultValue undefined
       * @group Props
       */
      max = input(...ngDevMode ? [void 0, { debugName: "max" }] : []);
      /**
       * Unless the step is set to the any literal, the value must be min + an integral multiple of the step.
       * @defaultValue undefined
       * @group Props
       */
      step = input(...ngDevMode ? [void 0, { debugName: "step" }] : []);
      /**
       * The number of characters (code points) must not be less than the value of the attribute, if non-empty.
       * @defaultValue undefined
       * @group Props
       */
      minlength = input(...ngDevMode ? [void 0, { debugName: "minlength" }] : []);
      /**
       * The number of characters (code points) must not exceed the value of the attribute.
       * @defaultValue undefined
       * @group Props
       */
      maxlength = input(...ngDevMode ? [void 0, { debugName: "maxlength" }] : []);
      $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{ debugName: "$variant" }] : []);
      get hasFluid() {
        return this.fluid() ?? !!this.pcFluid;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BaseInput, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.1.3", type: _BaseInput, isStandalone: true, inputs: { fluid: { classPropertyName: "fluid", publicName: "fluid", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, inputSize: { classPropertyName: "inputSize", publicName: "inputSize", isSignal: true, isRequired: false, transformFunction: null }, pattern: { classPropertyName: "pattern", publicName: "pattern", isSignal: true, isRequired: false, transformFunction: null }, min: { classPropertyName: "min", publicName: "min", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, step: { classPropertyName: "step", publicName: "step", isSignal: true, isRequired: false, transformFunction: null }, minlength: { classPropertyName: "minlength", publicName: "minlength", isSignal: true, isRequired: false, transformFunction: null }, maxlength: { classPropertyName: "maxlength", publicName: "maxlength", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BaseInput, decorators: [{
      type: Directive,
      args: [{ standalone: true }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/badge/index.mjs
var style4;
var init_badge = __esm({
  "node_modules/@primeuix/styles/dist/badge/index.mjs"() {
    "use strict";
    style4 = "\n    .p-badge {\n        display: inline-flex;\n        border-radius: dt('badge.border.radius');\n        align-items: center;\n        justify-content: center;\n        padding: dt('badge.padding');\n        background: dt('badge.primary.background');\n        color: dt('badge.primary.color');\n        font-size: dt('badge.font.size');\n        font-weight: dt('badge.font.weight');\n        min-width: dt('badge.min.width');\n        height: dt('badge.height');\n    }\n\n    .p-badge-dot {\n        width: dt('badge.dot.size');\n        min-width: dt('badge.dot.size');\n        height: dt('badge.dot.size');\n        border-radius: 50%;\n        padding: 0;\n    }\n\n    .p-badge-circle {\n        padding: 0;\n        border-radius: 50%;\n    }\n\n    .p-badge-secondary {\n        background: dt('badge.secondary.background');\n        color: dt('badge.secondary.color');\n    }\n\n    .p-badge-success {\n        background: dt('badge.success.background');\n        color: dt('badge.success.color');\n    }\n\n    .p-badge-info {\n        background: dt('badge.info.background');\n        color: dt('badge.info.color');\n    }\n\n    .p-badge-warn {\n        background: dt('badge.warn.background');\n        color: dt('badge.warn.color');\n    }\n\n    .p-badge-danger {\n        background: dt('badge.danger.background');\n        color: dt('badge.danger.color');\n    }\n\n    .p-badge-contrast {\n        background: dt('badge.contrast.background');\n        color: dt('badge.contrast.color');\n    }\n\n    .p-badge-sm {\n        font-size: dt('badge.sm.font.size');\n        min-width: dt('badge.sm.min.width');\n        height: dt('badge.sm.height');\n    }\n\n    .p-badge-lg {\n        font-size: dt('badge.lg.font.size');\n        min-width: dt('badge.lg.min.width');\n        height: dt('badge.lg.height');\n    }\n\n    .p-badge-xl {\n        font-size: dt('badge.xl.font.size');\n        min-width: dt('badge.xl.min.width');\n        height: dt('badge.xl.height');\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-badge.mjs
var theme, classes3, BadgeStyle, BadgeClasses, BadgeDirective, Badge, BadgeModule;
var init_primeng_badge = __esm({
  "node_modules/primeng/fesm2022/primeng-badge.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_basecomponent();
    init_badge();
    init_primeng_base();
    theme = /*css*/
    `
    ${style4}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`;
    classes3 = {
      root: ({ instance }) => [
        "p-badge p-component",
        {
          "p-badge-circle": s(instance.value()) && String(instance.value()).length === 1,
          "p-badge-dot": a(instance.value()),
          "p-badge-sm": instance.size() === "small" || instance.badgeSize() === "small",
          "p-badge-lg": instance.size() === "large" || instance.badgeSize() === "large",
          "p-badge-xl": instance.size() === "xlarge" || instance.badgeSize() === "xlarge",
          "p-badge-info": instance.severity() === "info",
          "p-badge-success": instance.severity() === "success",
          "p-badge-warn": instance.severity() === "warn",
          "p-badge-danger": instance.severity() === "danger",
          "p-badge-secondary": instance.severity() === "secondary",
          "p-badge-contrast": instance.severity() === "contrast"
        }
      ]
    };
    BadgeStyle = class _BadgeStyle extends BaseStyle {
      name = "badge";
      theme = theme;
      classes = classes3;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BadgeStyle, decorators: [{
      type: Injectable
    }] });
    (function(BadgeClasses2) {
      BadgeClasses2["root"] = "p-badge";
    })(BadgeClasses || (BadgeClasses = {}));
    BadgeDirective = class _BadgeDirective extends BaseComponent {
      /**
       * When specified, disables the component.
       * @group Props
       */
      disabled;
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       */
      badgeSize;
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       * @deprecated use badgeSize instead.
       */
      set size(value) {
        this._size = value;
        console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
      }
      get size() {
        return this._size;
      }
      _size;
      /**
       * Severity type of the badge.
       * @group Props
       */
      severity;
      /**
       * Value to display inside the badge.
       * @group Props
       */
      value;
      /**
       * Inline style of the element.
       * @group Props
       */
      badgeStyle;
      /**
       * Class of the element.
       * @group Props
       */
      badgeStyleClass;
      id;
      badgeEl;
      _componentStyle = inject(BadgeStyle);
      get activeElement() {
        return this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
      }
      get canUpdateBadge() {
        return this.id && !this.disabled;
      }
      constructor() {
        super();
      }
      ngOnChanges({ value, size, severity, disabled, badgeStyle, badgeStyleClass }) {
        super.ngOnChanges({ value, size, severity, disabled });
        if (disabled) {
          this.toggleDisableState();
        }
        if (!this.canUpdateBadge) {
          return;
        }
        if (severity) {
          this.setSeverity(severity.previousValue);
        }
        if (size) {
          this.setSizeClasses();
        }
        if (value) {
          this.setValue();
        }
        if (badgeStyle || badgeStyleClass) {
          this.applyStyles();
        }
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        this.id = s2("pn_id_") + "_badge";
        this.renderBadgeContent();
      }
      setValue(element) {
        const badge = element ?? this.document.getElementById(this.id);
        if (!badge) {
          return;
        }
        if (this.value != null) {
          if (R(badge, "p-badge-dot")) {
            O(badge, "p-badge-dot");
          }
          if (this.value && String(this.value).length === 1) {
            W(badge, "p-badge-circle");
          } else {
            O(badge, "p-badge-circle");
          }
        } else {
          if (!R(badge, "p-badge-dot")) {
            W(badge, "p-badge-dot");
          }
          O(badge, "p-badge-circle");
        }
        badge.innerHTML = "";
        const badgeValue = this.value != null ? String(this.value) : "";
        this.renderer.appendChild(badge, this.document.createTextNode(badgeValue));
      }
      setSizeClasses(element) {
        const badge = element ?? this.document.getElementById(this.id);
        if (!badge) {
          return;
        }
        if (this.badgeSize) {
          if (this.badgeSize === "large") {
            W(badge, "p-badge-lg");
            O(badge, "p-badge-xl");
          }
          if (this.badgeSize === "xlarge") {
            W(badge, "p-badge-xl");
            O(badge, "p-badge-lg");
          }
        } else if (this.size && !this.badgeSize) {
          if (this.size === "large") {
            W(badge, "p-badge-lg");
            O(badge, "p-badge-xl");
          }
          if (this.size === "xlarge") {
            W(badge, "p-badge-xl");
            O(badge, "p-badge-lg");
          }
        } else {
          O(badge, "p-badge-lg");
          O(badge, "p-badge-xl");
        }
      }
      renderBadgeContent() {
        if (this.disabled) {
          return null;
        }
        const el = this.activeElement;
        const badge = this.document.createElement("span");
        badge.id = this.id;
        badge.className = "p-badge p-component";
        this.setSeverity(null, badge);
        this.setSizeClasses(badge);
        this.setValue(badge);
        W(el, "p-overlay-badge");
        this.renderer.appendChild(el, badge);
        this.badgeEl = badge;
        this.applyStyles();
      }
      applyStyles() {
        if (this.badgeEl && this.badgeStyle && typeof this.badgeStyle === "object") {
          for (const [key, value] of Object.entries(this.badgeStyle)) {
            this.renderer.setStyle(this.badgeEl, key, value);
          }
        }
        if (this.badgeEl && this.badgeStyleClass) {
          this.badgeEl.classList.add(...this.badgeStyleClass.split(" "));
        }
      }
      setSeverity(oldSeverity, element) {
        const badge = element ?? this.document.getElementById(this.id);
        if (!badge) {
          return;
        }
        if (this.severity) {
          W(badge, `p-badge-${this.severity}`);
        }
        if (oldSeverity) {
          O(badge, `p-badge-${oldSeverity}`);
        }
      }
      toggleDisableState() {
        if (!this.id) {
          return;
        }
        if (this.disabled) {
          const badge = this.activeElement?.querySelector(`#${this.id}`);
          if (badge) {
            this.renderer.removeChild(this.activeElement, badge);
          }
        } else {
          this.renderBadgeContent();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.3", type: _BadgeDirective, isStandalone: true, selector: "[pBadge]", inputs: { disabled: ["badgeDisabled", "disabled"], badgeSize: "badgeSize", size: "size", severity: "severity", value: "value", badgeStyle: "badgeStyle", badgeStyleClass: "badgeStyleClass" }, providers: [BadgeStyle], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BadgeDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[pBadge]",
        providers: [BadgeStyle],
        standalone: true
      }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input,
      args: ["badgeDisabled"]
    }], badgeSize: [{
      type: Input
    }], size: [{
      type: Input
    }], severity: [{
      type: Input
    }], value: [{
      type: Input
    }], badgeStyle: [{
      type: Input
    }], badgeStyleClass: [{
      type: Input
    }] } });
    Badge = class _Badge extends BaseComponent {
      /**
       * Class of the element.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass = input(...ngDevMode ? [void 0, { debugName: "styleClass" }] : []);
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       */
      badgeSize = input(...ngDevMode ? [void 0, { debugName: "badgeSize" }] : []);
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       */
      size = input(...ngDevMode ? [void 0, { debugName: "size" }] : []);
      /**
       * Severity type of the badge.
       * @group Props
       */
      severity = input(...ngDevMode ? [void 0, { debugName: "severity" }] : []);
      /**
       * Value to display inside the badge.
       * @group Props
       */
      value = input(...ngDevMode ? [void 0, { debugName: "value" }] : []);
      /**
       * When specified, disables the component.
       * @group Props
       */
      badgeDisabled = input(false, ...ngDevMode ? [{ debugName: "badgeDisabled", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      _componentStyle = inject(BadgeStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Badge, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.1.3", type: _Badge, isStandalone: true, selector: "p-badge", inputs: { styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: true, isRequired: false, transformFunction: null }, badgeSize: { classPropertyName: "badgeSize", publicName: "badgeSize", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, severity: { classPropertyName: "severity", publicName: "severity", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, badgeDisabled: { classPropertyName: "badgeDisabled", publicName: "badgeDisabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class": "cn(cx('root'), styleClass())", "style.display": 'badgeDisabled() ? "none" : null' } }, providers: [BadgeStyle], usesInheritance: true, ngImport: core_exports, template: `{{ value() }}`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Badge, decorators: [{
      type: Component,
      args: [{
        selector: "p-badge",
        template: `{{ value() }}`,
        standalone: true,
        imports: [CommonModule, SharedModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [BadgeStyle],
        host: {
          "[class]": "cn(cx('root'), styleClass())",
          "[style.display]": 'badgeDisabled() ? "none" : null'
        }
      }]
    }] });
    BadgeModule = class _BadgeModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeModule, imports: [Badge, BadgeDirective, SharedModule], exports: [Badge, BadgeDirective, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeModule, imports: [Badge, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BadgeModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Badge, BadgeDirective, SharedModule],
        exports: [Badge, BadgeDirective, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/ripple/index.mjs
var style5;
var init_ripple = __esm({
  "node_modules/@primeuix/styles/dist/ripple/index.mjs"() {
    "use strict";
    style5 = "\n    .p-ink {\n        display: block;\n        position: absolute;\n        background: dt('ripple.background');\n        border-radius: 100%;\n        transform: scale(0);\n        pointer-events: none;\n    }\n\n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n\n    @keyframes ripple {\n        100% {\n            opacity: 0;\n            transform: scale(2.5);\n        }\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-ripple.mjs
var theme2, classes4, RippleStyle, RippleClasses, Ripple, RippleModule;
var init_primeng_ripple = __esm({
  "node_modules/primeng/fesm2022/primeng-ripple.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_basecomponent();
    init_ripple();
    init_primeng_base();
    theme2 = /*css*/
    `
    ${style5}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;
    classes4 = {
      root: "p-ink"
    };
    RippleStyle = class _RippleStyle extends BaseStyle {
      name = "ripple";
      theme = theme2;
      classes = classes4;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _RippleStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _RippleStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: RippleStyle, decorators: [{
      type: Injectable
    }] });
    (function(RippleClasses2) {
      RippleClasses2["root"] = "p-ink";
    })(RippleClasses || (RippleClasses = {}));
    Ripple = class _Ripple extends BaseComponent {
      zone = inject(NgZone);
      _componentStyle = inject(RippleStyle);
      animationListener;
      mouseDownListener;
      timeout;
      constructor() {
        super();
        effect(() => {
          if (isPlatformBrowser(this.platformId)) {
            if (this.config.ripple()) {
              this.zone.runOutsideAngular(() => {
                this.create();
                this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
              });
            } else {
              this.remove();
            }
          }
        });
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
      }
      onMouseDown(event2) {
        let ink = this.getInk();
        if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") {
          return;
        }
        O(ink, "p-ink-active");
        if (!Tt(ink) && !Rt(ink)) {
          let d = Math.max(v(this.el.nativeElement), C(this.el.nativeElement));
          ink.style.height = d + "px";
          ink.style.width = d + "px";
        }
        let offset = K(this.el.nativeElement);
        let x2 = event2.pageX - offset.left + this.document.body.scrollTop - Rt(ink) / 2;
        let y = event2.pageY - offset.top + this.document.body.scrollLeft - Tt(ink) / 2;
        this.renderer.setStyle(ink, "top", y + "px");
        this.renderer.setStyle(ink, "left", x2 + "px");
        W(ink, "p-ink-active");
        this.timeout = setTimeout(() => {
          let ink2 = this.getInk();
          if (ink2) {
            O(ink2, "p-ink-active");
          }
        }, 401);
      }
      getInk() {
        const children = this.el.nativeElement.children;
        for (let i = 0; i < children.length; i++) {
          if (typeof children[i].className === "string" && children[i].className.indexOf("p-ink") !== -1) {
            return children[i];
          }
        }
        return null;
      }
      resetInk() {
        let ink = this.getInk();
        if (ink) {
          O(ink, "p-ink-active");
        }
      }
      onAnimationEnd(event2) {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        O(event2.currentTarget, "p-ink-active");
      }
      create() {
        let ink = this.renderer.createElement("span");
        this.renderer.addClass(ink, "p-ink");
        this.renderer.appendChild(this.el.nativeElement, ink);
        this.renderer.setAttribute(ink, "aria-hidden", "true");
        this.renderer.setAttribute(ink, "role", "presentation");
        if (!this.animationListener) {
          this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
        }
      }
      remove() {
        let ink = this.getInk();
        if (ink) {
          this.mouseDownListener && this.mouseDownListener();
          this.animationListener && this.animationListener();
          this.mouseDownListener = null;
          this.animationListener = null;
          Qt(ink);
        }
      }
      ngOnDestroy() {
        if (this.config && this.config.ripple()) {
          this.remove();
        }
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Ripple, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.3", type: _Ripple, isStandalone: true, selector: "[pRipple]", host: { classAttribute: "p-ripple" }, providers: [RippleStyle], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Ripple, decorators: [{
      type: Directive,
      args: [{
        selector: "[pRipple]",
        host: {
          class: "p-ripple"
        },
        standalone: true,
        providers: [RippleStyle]
      }]
    }], ctorParameters: () => [] });
    RippleModule = class _RippleModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _RippleModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _RippleModule, imports: [Ripple], exports: [Ripple] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _RippleModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: RippleModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Ripple],
        exports: [Ripple]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/button/index.mjs
var style6;
var init_button = __esm({
  "node_modules/@primeuix/styles/dist/button/index.mjs"() {
    "use strict";
    style6 = `
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;
  }
});

// node_modules/primeng/fesm2022/primeng-button.mjs
var classes5, ButtonStyle, ButtonClasses, INTERNAL_BUTTON_CLASSES, ButtonLabel, ButtonIcon, ButtonDirective, Button, ButtonModule;
var init_primeng_button = __esm({
  "node_modules/primeng/fesm2022/primeng-button.mjs"() {
    "use strict";
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_autofocus();
    init_primeng_badge();
    init_primeng_badge();
    init_primeng_basecomponent();
    init_primeng_fluid();
    init_primeng_icons();
    init_primeng_ripple();
    init_button();
    init_primeng_base();
    classes5 = {
      root: ({ instance }) => [
        "p-button p-component",
        {
          "p-button-icon-only": (instance.icon || instance.buttonProps?.icon || instance.iconTemplate || instance._iconTemplate || instance.loadingIcon || instance.loadingIconTemplate || instance._loadingIconTemplate) && !instance.label && !instance.buttonProps?.label,
          "p-button-vertical": (instance.iconPos === "top" || instance.iconPos === "bottom") && instance.label,
          "p-button-loading": instance.loading || instance.buttonProps?.loading,
          "p-button-link": instance.link || instance.buttonProps?.link,
          [`p-button-${instance.severity || instance.buttonProps?.severity}`]: instance.severity || instance.buttonProps?.severity,
          "p-button-raised": instance.raised || instance.buttonProps?.raised,
          "p-button-rounded": instance.rounded || instance.buttonProps?.rounded,
          "p-button-text": instance.text || instance.variant === "text" || instance.buttonProps?.text || instance.buttonProps?.variant === "text",
          "p-button-outlined": instance.outlined || instance.variant === "outlined" || instance.buttonProps?.outlined || instance.buttonProps?.variant === "outlined",
          "p-button-sm": instance.size === "small" || instance.buttonProps?.size === "small",
          "p-button-lg": instance.size === "large" || instance.buttonProps?.size === "large",
          "p-button-plain": instance.plain || instance.buttonProps?.plain,
          "p-button-fluid": instance.hasFluid
        }
      ],
      loadingIcon: "p-button-loading-icon",
      icon: ({ instance }) => [
        "p-button-icon",
        {
          [`p-button-icon-${instance.iconPos || instance.buttonProps?.iconPos}`]: instance.label || instance.buttonProps?.label,
          "p-button-icon-left": (instance.iconPos === "left" || instance.buttonProps?.iconPos === "left") && instance.label || instance.buttonProps?.label,
          "p-button-icon-right": (instance.iconPos === "right" || instance.buttonProps?.iconPos === "right") && instance.label || instance.buttonProps?.label
        },
        instance.icon,
        instance.buttonProps?.icon
      ],
      spinnerIcon: ({ instance }) => {
        return Object.entries(instance.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
      },
      label: "p-button-label"
    };
    ButtonStyle = class _ButtonStyle extends BaseStyle {
      name = "button";
      theme = style6;
      classes = classes5;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ButtonStyle, decorators: [{
      type: Injectable
    }] });
    (function(ButtonClasses2) {
      ButtonClasses2["root"] = "p-button";
      ButtonClasses2["loadingIcon"] = "p-button-loading-icon";
      ButtonClasses2["icon"] = "p-button-icon";
      ButtonClasses2["label"] = "p-button-label";
    })(ButtonClasses || (ButtonClasses = {}));
    INTERNAL_BUTTON_CLASSES = {
      button: "p-button",
      component: "p-component",
      iconOnly: "p-button-icon-only",
      disabled: "p-disabled",
      loading: "p-button-loading",
      labelOnly: "p-button-loading-label-only"
    };
    ButtonLabel = class _ButtonLabel extends BaseComponent {
      _componentStyle = inject(ButtonStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonLabel, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.3", type: _ButtonLabel, isStandalone: true, selector: "[pButtonLabel]", host: { properties: { "class.p-button-label": "true" } }, providers: [ButtonStyle], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ButtonLabel, decorators: [{
      type: Directive,
      args: [{
        selector: "[pButtonLabel]",
        providers: [ButtonStyle],
        standalone: true,
        host: {
          "[class.p-button-label]": "true"
        }
      }]
    }] });
    ButtonIcon = class _ButtonIcon extends BaseComponent {
      _componentStyle = inject(ButtonStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonIcon, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.3", type: _ButtonIcon, isStandalone: true, selector: "[pButtonIcon]", host: { properties: { "class.p-button-icon": "true" } }, providers: [ButtonStyle], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ButtonIcon, decorators: [{
      type: Directive,
      args: [{
        selector: "[pButtonIcon]",
        providers: [ButtonStyle],
        standalone: true,
        host: {
          "[class.p-button-icon]": "true"
        }
      }]
    }] });
    ButtonDirective = class _ButtonDirective extends BaseComponent {
      /**
       * Position of the icon.
       * @deprecated utilize pButtonIcon and pButtonLabel directives.
       * @group Props
       */
      iconPos = "left";
      /**
       * Uses to pass attributes to the loading icon's DOM element.
       * @deprecated utilize pButonIcon instead.
       * @group Props
       */
      loadingIcon;
      set label(val) {
        this._label = val;
        if (this.initialized) {
          this.updateLabel();
          this.updateIcon();
          this.setStyleClass();
        }
      }
      set icon(val) {
        this._icon = val;
        if (this.initialized) {
          this.updateIcon();
          this.setStyleClass();
        }
      }
      /**
       * Whether the button is in loading state.
       * @group Props
       */
      get loading() {
        return this._loading;
      }
      set loading(val) {
        this._loading = val;
        if (this.initialized) {
          this.updateIcon();
          this.setStyleClass();
        }
      }
      _buttonProps;
      iconSignal = contentChild(ButtonIcon, ...ngDevMode ? [{ debugName: "iconSignal" }] : []);
      labelSignal = contentChild(ButtonLabel, ...ngDevMode ? [{ debugName: "labelSignal" }] : []);
      isIconOnly = computed(() => !!(!this.labelSignal() && this.iconSignal()), ...ngDevMode ? [{ debugName: "isIconOnly" }] : []);
      set buttonProps(val) {
        this._buttonProps = val;
        if (val && typeof val === "object") {
          Object.entries(val).forEach(([k, v2]) => this[`_${k}`] !== v2 && (this[`_${k}`] = v2));
        }
      }
      _severity;
      /**
       * Defines the style of the button.
       * @group Props
       */
      get severity() {
        return this._severity;
      }
      set severity(value) {
        this._severity = value;
        if (this.initialized) {
          this.setStyleClass();
        }
      }
      /**
       * Add a shadow to indicate elevation.
       * @group Props
       */
      raised = false;
      /**
       * Add a circular border radius to the button.
       * @group Props
       */
      rounded = false;
      /**
       * Add a textual class to the button without a background initially.
       * @group Props
       */
      text = false;
      /**
       * Add a border class without a background initially.
       * @group Props
       */
      outlined = false;
      /**
       * Defines the size of the button.
       * @group Props
       */
      size = null;
      /**
       * Add a plain textual class to the button without a background initially.
       * @group Props
       */
      plain = false;
      /**
       * Spans 100% width of the container when enabled.
       * @defaultValue undefined
       * @group Props
       */
      fluid = input(void 0, ...ngDevMode ? [{ debugName: "fluid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      _label;
      _icon;
      _loading = false;
      initialized;
      get htmlElement() {
        return this.el.nativeElement;
      }
      _internalClasses = Object.values(INTERNAL_BUTTON_CLASSES);
      pcFluid = inject(Fluid, { optional: true, host: true, skipSelf: true });
      isTextButton = computed(() => !!(!this.iconSignal() && this.labelSignal() && this.text), ...ngDevMode ? [{ debugName: "isTextButton" }] : []);
      /**
       * Text of the button.
       * @deprecated use pButtonLabel directive instead.
       * @group Props
       */
      get label() {
        return this._label;
      }
      /**
       * Name of the icon.
       * @deprecated use pButtonIcon directive instead
       * @group Props
       */
      get icon() {
        return this._icon;
      }
      /**
       * Used to pass all properties of the ButtonProps to the Button component.
       * @deprecated assign props directly to the button element.
       * @group Props
       */
      get buttonProps() {
        return this._buttonProps;
      }
      spinnerIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;
      _componentStyle = inject(ButtonStyle);
      ngAfterViewInit() {
        super.ngAfterViewInit();
        W(this.htmlElement, this.getStyleClass().join(" "));
        this.createIcon();
        this.createLabel();
        this.initialized = true;
      }
      getStyleClass() {
        const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
        if (this.icon && !this.label && a(this.htmlElement.textContent)) {
          styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
        }
        if (this.loading) {
          styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
          if (!this.icon && this.label) {
            styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
          }
          if (this.icon && !this.label && !a(this.htmlElement.textContent)) {
            styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
          }
        }
        if (this.text) {
          styleClass.push("p-button-text");
        }
        if (this.severity) {
          styleClass.push(`p-button-${this.severity}`);
        }
        if (this.plain) {
          styleClass.push("p-button-plain");
        }
        if (this.raised) {
          styleClass.push("p-button-raised");
        }
        if (this.size) {
          styleClass.push(`p-button-${this.size}`);
        }
        if (this.outlined) {
          styleClass.push("p-button-outlined");
        }
        if (this.rounded) {
          styleClass.push("p-button-rounded");
        }
        if (this.size === "small") {
          styleClass.push("p-button-sm");
        }
        if (this.size === "large") {
          styleClass.push("p-button-lg");
        }
        if (this.hasFluid) {
          styleClass.push("p-button-fluid");
        }
        return styleClass;
      }
      get hasFluid() {
        return this.fluid() ?? !!this.pcFluid;
      }
      setStyleClass() {
        const styleClass = this.getStyleClass();
        this.removeExistingSeverityClass();
        this.htmlElement.classList.remove(...this._internalClasses);
        this.htmlElement.classList.add(...styleClass);
      }
      removeExistingSeverityClass() {
        const severityArray = ["success", "info", "warn", "danger", "help", "primary", "secondary", "contrast"];
        const existingSeverityClass = this.htmlElement.classList.value.split(" ").find((cls) => severityArray.some((severity) => cls === `p-button-${severity}`));
        if (existingSeverityClass) {
          this.htmlElement.classList.remove(existingSeverityClass);
        }
      }
      createLabel() {
        const created = z(this.htmlElement, ".p-button-label");
        if (!created && this.label) {
          let labelElement = this.document.createElement("span");
          if (this.icon && !this.label) {
            labelElement.setAttribute("aria-hidden", "true");
          }
          labelElement.className = "p-button-label";
          labelElement.appendChild(this.document.createTextNode(this.label));
          this.htmlElement.appendChild(labelElement);
        }
      }
      createIcon() {
        const created = z(this.htmlElement, ".p-button-icon");
        if (!created && (this.icon || this.loading)) {
          let iconElement = this.document.createElement("span");
          iconElement.className = "p-button-icon";
          iconElement.setAttribute("aria-hidden", "true");
          let iconPosClass = this.label ? "p-button-icon-" + this.iconPos : null;
          if (iconPosClass) {
            W(iconElement, iconPosClass);
          }
          let iconClass = this.getIconClass();
          if (iconClass) {
            W(iconElement, iconClass);
          }
          if (!this.loadingIcon && this.loading) {
            iconElement.innerHTML = this.spinnerIcon;
          }
          this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
        }
      }
      updateLabel() {
        let labelElement = z(this.htmlElement, ".p-button-label");
        if (!this.label) {
          labelElement && this.htmlElement.removeChild(labelElement);
          return;
        }
        labelElement ? labelElement.textContent = this.label : this.createLabel();
      }
      updateIcon() {
        let iconElement = z(this.htmlElement, ".p-button-icon");
        let labelElement = z(this.htmlElement, ".p-button-label");
        if (this.loading && !this.loadingIcon && iconElement) {
          iconElement.innerHTML = this.spinnerIcon;
        } else if (iconElement?.innerHTML) {
          iconElement.innerHTML = "";
        }
        if (iconElement) {
          if (this.iconPos) {
            iconElement.className = "p-button-icon " + (labelElement ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass();
          } else {
            iconElement.className = "p-button-icon " + this.getIconClass();
          }
        } else {
          this.createIcon();
        }
      }
      getIconClass() {
        return this.loading ? "p-button-loading-icon " + (this.loadingIcon ? this.loadingIcon : "p-icon") : this.icon || "p-hidden";
      }
      ngOnDestroy() {
        this.initialized = false;
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonDirective, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.2.0", version: "20.1.3", type: _ButtonDirective, isStandalone: true, selector: "[pButton]", inputs: { iconPos: { classPropertyName: "iconPos", publicName: "iconPos", isSignal: false, isRequired: false, transformFunction: null }, loadingIcon: { classPropertyName: "loadingIcon", publicName: "loadingIcon", isSignal: false, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: false, isRequired: false, transformFunction: null }, severity: { classPropertyName: "severity", publicName: "severity", isSignal: false, isRequired: false, transformFunction: null }, raised: { classPropertyName: "raised", publicName: "raised", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, rounded: { classPropertyName: "rounded", publicName: "rounded", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, text: { classPropertyName: "text", publicName: "text", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, outlined: { classPropertyName: "outlined", publicName: "outlined", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, size: { classPropertyName: "size", publicName: "size", isSignal: false, isRequired: false, transformFunction: null }, plain: { classPropertyName: "plain", publicName: "plain", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, fluid: { classPropertyName: "fluid", publicName: "fluid", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: false, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: false, isRequired: false, transformFunction: null }, buttonProps: { classPropertyName: "buttonProps", publicName: "buttonProps", isSignal: false, isRequired: false, transformFunction: null } }, host: { properties: { "class.p-button-icon-only": "isIconOnly()", "class.p-button-text": "isTextButton()" } }, providers: [ButtonStyle], queries: [{ propertyName: "iconSignal", first: true, predicate: ButtonIcon, descendants: true, isSignal: true }, { propertyName: "labelSignal", first: true, predicate: ButtonLabel, descendants: true, isSignal: true }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ButtonDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[pButton]",
        standalone: true,
        providers: [ButtonStyle],
        host: {
          "[class.p-button-icon-only]": "isIconOnly()",
          "[class.p-button-text]": "isTextButton()"
        }
      }]
    }], propDecorators: { iconPos: [{
      type: Input
    }], loadingIcon: [{
      type: Input
    }], loading: [{
      type: Input
    }], severity: [{
      type: Input
    }], raised: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], rounded: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], text: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], outlined: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], size: [{
      type: Input
    }], plain: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], label: [{
      type: Input
    }], icon: [{
      type: Input
    }], buttonProps: [{
      type: Input
    }] } });
    Button = class _Button extends BaseComponent {
      /**
       * Type of the button.
       * @group Props
       */
      type = "button";
      /**
       * Position of the icon.
       * @group Props
       */
      iconPos = "left";
      /**
       * Name of the icon.
       * @group Props
       */
      icon;
      /**
       * Value of the badge.
       * @group Props
       */
      badge;
      /**
       * Uses to pass attributes to the label's DOM element.
       * @group Props
       */
      label;
      /**
       * When present, it specifies that the component should be disabled.
       * @group Props
       */
      disabled;
      /**
       * Whether the button is in loading state.
       * @group Props
       */
      loading = false;
      /**
       * Icon to display in loading state.
       * @group Props
       */
      loadingIcon;
      /**
       * Add a shadow to indicate elevation.
       * @group Props
       */
      raised = false;
      /**
       * Add a circular border radius to the button.
       * @group Props
       */
      rounded = false;
      /**
       * Add a textual class to the button without a background initially.
       * @group Props
       */
      text = false;
      /**
       * Add a plain textual class to the button without a background initially.
       * @group Props
       */
      plain = false;
      /**
       * Defines the style of the button.
       * @group Props
       */
      severity;
      /**
       * Add a border class without a background initially.
       * @group Props
       */
      outlined = false;
      /**
       * Add a link style to the button.
       * @group Props
       */
      link = false;
      /**
       * Add a tabindex to the button.
       * @group Props
       */
      tabindex;
      /**
       * Defines the size of the button.
       * @group Props
       */
      size;
      /**
       * Specifies the variant of the component.
       * @group Props
       */
      variant;
      /**
       * Inline style of the element.
       * @group Props
       */
      style;
      /**
       * Class of the element.
       * @group Props
       */
      styleClass;
      /**
       * Style class of the badge.
       * @group Props
       * @deprecated use badgeSeverity instead.
       */
      badgeClass;
      /**
       * Severity type of the badge.
       * @group Props
       * @defaultValue secondary
       */
      badgeSeverity = "secondary";
      /**
       * Used to define a string that autocomplete attribute the current element.
       * @group Props
       */
      ariaLabel;
      /**
       * Button props as an object.
       * @group Props
       */
      buttonProps;
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      autofocus;
      /**
       * Spans 100% width of the container when enabled.
       * @defaultValue undefined
       * @group Props
       */
      fluid = input(void 0, ...ngDevMode ? [{ debugName: "fluid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * Callback to execute when button is clicked.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
       * @param {MouseEvent} event - Mouse event.
       * @group Emits
       */
      onClick = new EventEmitter();
      /**
       * Callback to execute when button is focused.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
       * @param {FocusEvent} event - Focus event.
       * @group Emits
       */
      onFocus = new EventEmitter();
      /**
       * Callback to execute when button loses focus.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
       * @param {FocusEvent} event - Focus event.
       * @group Emits
       */
      onBlur = new EventEmitter();
      /**
       * Template of the content.
       * @group Templates
       **/
      contentTemplate;
      /**
       * Template of the loading.
       * @group Templates
       **/
      loadingIconTemplate;
      /**
       * Template of the icon.
       * @group Templates
       **/
      iconTemplate;
      templates;
      pcFluid = inject(Fluid, { optional: true, host: true, skipSelf: true });
      get hasFluid() {
        return this.fluid() ?? !!this.pcFluid;
      }
      _componentStyle = inject(ButtonStyle);
      _contentTemplate;
      _iconTemplate;
      _loadingIconTemplate;
      ngAfterContentInit() {
        this.templates?.forEach((item) => {
          switch (item.getType()) {
            case "content":
              this._contentTemplate = item.template;
              break;
            case "icon":
              this._iconTemplate = item.template;
              break;
            case "loadingicon":
              this._loadingIconTemplate = item.template;
              break;
            default:
              this._contentTemplate = item.template;
              break;
          }
        });
      }
      spinnerIconClass() {
        return Object.entries(this.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
      }
      iconClass() {
        return {
          [`p-button-loading-icon pi-spin ${this.loadingIcon ?? ""}`]: this.loading,
          "p-button-icon": true,
          "p-button-icon-left": this.iconPos === "left" && this.label,
          "p-button-icon-right": this.iconPos === "right" && this.label,
          "p-button-icon-top": this.iconPos === "top" && this.label,
          "p-button-icon-bottom": this.iconPos === "bottom" && this.label
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Button, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.1.3", type: _Button, isStandalone: true, selector: "p-button", inputs: { type: { classPropertyName: "type", publicName: "type", isSignal: false, isRequired: false, transformFunction: null }, iconPos: { classPropertyName: "iconPos", publicName: "iconPos", isSignal: false, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: false, isRequired: false, transformFunction: null }, badge: { classPropertyName: "badge", publicName: "badge", isSignal: false, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: false, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, loadingIcon: { classPropertyName: "loadingIcon", publicName: "loadingIcon", isSignal: false, isRequired: false, transformFunction: null }, raised: { classPropertyName: "raised", publicName: "raised", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, rounded: { classPropertyName: "rounded", publicName: "rounded", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, text: { classPropertyName: "text", publicName: "text", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, plain: { classPropertyName: "plain", publicName: "plain", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, severity: { classPropertyName: "severity", publicName: "severity", isSignal: false, isRequired: false, transformFunction: null }, outlined: { classPropertyName: "outlined", publicName: "outlined", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, link: { classPropertyName: "link", publicName: "link", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, tabindex: { classPropertyName: "tabindex", publicName: "tabindex", isSignal: false, isRequired: false, transformFunction: numberAttribute }, size: { classPropertyName: "size", publicName: "size", isSignal: false, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: false, isRequired: false, transformFunction: null }, style: { classPropertyName: "style", publicName: "style", isSignal: false, isRequired: false, transformFunction: null }, styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: false, isRequired: false, transformFunction: null }, badgeClass: { classPropertyName: "badgeClass", publicName: "badgeClass", isSignal: false, isRequired: false, transformFunction: null }, badgeSeverity: { classPropertyName: "badgeSeverity", publicName: "badgeSeverity", isSignal: false, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: false, isRequired: false, transformFunction: null }, buttonProps: { classPropertyName: "buttonProps", publicName: "buttonProps", isSignal: false, isRequired: false, transformFunction: null }, autofocus: { classPropertyName: "autofocus", publicName: "autofocus", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, fluid: { classPropertyName: "fluid", publicName: "fluid", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onClick: "onClick", onFocus: "onFocus", onBlur: "onBlur" }, providers: [ButtonStyle], queries: [{ propertyName: "contentTemplate", first: true, predicate: ["content"], descendants: true }, { propertyName: "loadingIconTemplate", first: true, predicate: ["loadingicon"], descendants: true }, { propertyName: "iconTemplate", first: true, predicate: ["icon"], descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, ngImport: core_exports, template: `
        <button
            [attr.type]="type || buttonProps?.type"
            [attr.aria-label]="ariaLabel || buttonProps?.ariaLabel"
            [ngStyle]="style || buttonProps?.style"
            [disabled]="disabled || loading || buttonProps?.disabled"
            [class]="cn(cx('root'), styleClass, buttonProps?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.data-pc-name]="'button'"
            [attr.data-pc-section]="'root'"
            [attr.tabindex]="tabindex || buttonProps?.tabindex"
            [pAutoFocus]="autofocus || buttonProps?.autofocus"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="cx('loadingIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'"></span>
                    <svg data-p-icon="spinner" *ngIf="!loadingIcon" [class]="cn(cx('loadingIcon'), spinnerIconClass())" [spin]="true" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: cx('loadingIcon') }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!loading">
                <span *ngIf="icon && !iconTemplate && !_iconTemplate" [class]="cx('icon')" [attr.data-pc-section]="'icon'"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: cx('icon') }"></ng-template>
            </ng-container>
            <span [class]="cx('label')" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate && !_contentTemplate && label" [attr.data-pc-section]="'label'">{{ label }}</span>
            <p-badge *ngIf="!contentTemplate && !_contentTemplate && badge" [value]="badge" [severity]="badgeSeverity"></p-badge>
        </button>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: Ripple, selector: "[pRipple]" }, { kind: "directive", type: AutoFocus, selector: "[pAutoFocus]", inputs: ["pAutoFocus"] }, { kind: "component", type: SpinnerIcon, selector: '[data-p-icon="spinner"]' }, { kind: "ngmodule", type: BadgeModule }, { kind: "component", type: Badge, selector: "p-badge", inputs: ["styleClass", "badgeSize", "size", "severity", "value", "badgeDisabled"] }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Button, decorators: [{
      type: Component,
      args: [{
        selector: "p-button",
        standalone: true,
        imports: [CommonModule, Ripple, AutoFocus, SpinnerIcon, BadgeModule, SharedModule],
        template: `
        <button
            [attr.type]="type || buttonProps?.type"
            [attr.aria-label]="ariaLabel || buttonProps?.ariaLabel"
            [ngStyle]="style || buttonProps?.style"
            [disabled]="disabled || loading || buttonProps?.disabled"
            [class]="cn(cx('root'), styleClass, buttonProps?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.data-pc-name]="'button'"
            [attr.data-pc-section]="'root'"
            [attr.tabindex]="tabindex || buttonProps?.tabindex"
            [pAutoFocus]="autofocus || buttonProps?.autofocus"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="cx('loadingIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'"></span>
                    <svg data-p-icon="spinner" *ngIf="!loadingIcon" [class]="cn(cx('loadingIcon'), spinnerIconClass())" [spin]="true" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: cx('loadingIcon') }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!loading">
                <span *ngIf="icon && !iconTemplate && !_iconTemplate" [class]="cx('icon')" [attr.data-pc-section]="'icon'"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: cx('icon') }"></ng-template>
            </ng-container>
            <span [class]="cx('label')" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate && !_contentTemplate && label" [attr.data-pc-section]="'label'">{{ label }}</span>
            <p-badge *ngIf="!contentTemplate && !_contentTemplate && badge" [value]="badge" [severity]="badgeSeverity"></p-badge>
        </button>
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [ButtonStyle]
      }]
    }], propDecorators: { type: [{
      type: Input
    }], iconPos: [{
      type: Input
    }], icon: [{
      type: Input
    }], badge: [{
      type: Input
    }], label: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], loading: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], loadingIcon: [{
      type: Input
    }], raised: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], rounded: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], text: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], plain: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], severity: [{
      type: Input
    }], outlined: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], link: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabindex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], size: [{
      type: Input
    }], variant: [{
      type: Input
    }], style: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], badgeClass: [{
      type: Input
    }], badgeSeverity: [{
      type: Input
    }], ariaLabel: [{
      type: Input
    }], buttonProps: [{
      type: Input
    }], autofocus: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], onClick: [{
      type: Output
    }], onFocus: [{
      type: Output
    }], onBlur: [{
      type: Output
    }], contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }], loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon"]
    }], iconTemplate: [{
      type: ContentChild,
      args: ["icon"]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    ButtonModule = class _ButtonModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonModule, imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon], exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonModule, imports: [CommonModule, Button, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ButtonModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
        exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/inputtext/index.mjs
var style7;
var init_inputtext = __esm({
  "node_modules/@primeuix/styles/dist/inputtext/index.mjs"() {
    "use strict";
    style7 = "\n    .p-inputtext {\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: dt('inputtext.color');\n        background: dt('inputtext.background');\n        padding-block: dt('inputtext.padding.y');\n        padding-inline: dt('inputtext.padding.x');\n        border: 1px solid dt('inputtext.border.color');\n        transition:\n            background dt('inputtext.transition.duration'),\n            color dt('inputtext.transition.duration'),\n            border-color dt('inputtext.transition.duration'),\n            outline-color dt('inputtext.transition.duration'),\n            box-shadow dt('inputtext.transition.duration');\n        appearance: none;\n        border-radius: dt('inputtext.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('inputtext.shadow');\n    }\n\n    .p-inputtext:enabled:hover {\n        border-color: dt('inputtext.hover.border.color');\n    }\n\n    .p-inputtext:enabled:focus {\n        border-color: dt('inputtext.focus.border.color');\n        box-shadow: dt('inputtext.focus.ring.shadow');\n        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');\n        outline-offset: dt('inputtext.focus.ring.offset');\n    }\n\n    .p-inputtext.p-invalid {\n        border-color: dt('inputtext.invalid.border.color');\n    }\n\n    .p-inputtext.p-variant-filled {\n        background: dt('inputtext.filled.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:hover {\n        background: dt('inputtext.filled.hover.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:focus {\n        background: dt('inputtext.filled.focus.background');\n    }\n\n    .p-inputtext:disabled {\n        opacity: 1;\n        background: dt('inputtext.disabled.background');\n        color: dt('inputtext.disabled.color');\n    }\n\n    .p-inputtext::placeholder {\n        color: dt('inputtext.placeholder.color');\n    }\n\n    .p-inputtext.p-invalid::placeholder {\n        color: dt('inputtext.invalid.placeholder.color');\n    }\n\n    .p-inputtext-sm {\n        font-size: dt('inputtext.sm.font.size');\n        padding-block: dt('inputtext.sm.padding.y');\n        padding-inline: dt('inputtext.sm.padding.x');\n    }\n\n    .p-inputtext-lg {\n        font-size: dt('inputtext.lg.font.size');\n        padding-block: dt('inputtext.lg.padding.y');\n        padding-inline: dt('inputtext.lg.padding.x');\n    }\n\n    .p-inputtext-fluid {\n        width: 100%;\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var theme3, classes6, InputTextStyle, InputTextClasses, InputText, InputTextModule;
var init_primeng_inputtext = __esm({
  "node_modules/primeng/fesm2022/primeng-inputtext.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_forms();
    init_primeng_basemodelholder();
    init_primeng_fluid();
    init_inputtext();
    init_primeng_base();
    theme3 = /*css*/
    `
    ${style7}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;
    classes6 = {
      root: ({ instance }) => [
        "p-inputtext p-component",
        {
          "p-filled": instance.$filled(),
          "p-inputtext-sm": instance.pSize === "small",
          "p-inputtext-lg": instance.pSize === "large",
          "p-invalid": instance.invalid(),
          "p-variant-filled": instance.$variant() === "filled",
          "p-inputtext-fluid": instance.hasFluid
        }
      ]
    };
    InputTextStyle = class _InputTextStyle extends BaseStyle {
      name = "inputtext";
      theme = theme3;
      classes = classes6;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _InputTextStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _InputTextStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: InputTextStyle, decorators: [{
      type: Injectable
    }] });
    (function(InputTextClasses2) {
      InputTextClasses2["root"] = "p-inputtext";
    })(InputTextClasses || (InputTextClasses = {}));
    InputText = class _InputText extends BaseModelHolder {
      ngControl = inject(NgControl, { optional: true, self: true });
      pcFluid = inject(Fluid, { optional: true, host: true, skipSelf: true });
      /**
       * Defines the size of the component.
       * @group Props
       */
      pSize;
      /**
       * Specifies the input variant of the component.
       * @defaultValue undefined
       * @group Props
       */
      variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : []);
      /**
       * Spans 100% width of the container when enabled.
       * @defaultValue undefined
       * @group Props
       */
      fluid = input(void 0, ...ngDevMode ? [{ debugName: "fluid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * When present, it specifies that the component should have invalid state style.
       * @defaultValue false
       * @group Props
       */
      invalid = input(void 0, ...ngDevMode ? [{ debugName: "invalid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{ debugName: "$variant" }] : []);
      _componentStyle = inject(InputTextStyle);
      ngAfterViewInit() {
        super.ngAfterViewInit();
        this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
        this.cd.detectChanges();
      }
      ngDoCheck() {
        this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
      }
      onInput() {
        this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
      }
      get hasFluid() {
        return this.fluid() ?? !!this.pcFluid;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _InputText, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.1.3", type: _InputText, isStandalone: true, selector: "[pInputText]", inputs: { pSize: { classPropertyName: "pSize", publicName: "pSize", isSignal: false, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, fluid: { classPropertyName: "fluid", publicName: "fluid", isSignal: true, isRequired: false, transformFunction: null }, invalid: { classPropertyName: "invalid", publicName: "invalid", isSignal: true, isRequired: false, transformFunction: null } }, host: { listeners: { "input": "onInput($event)" }, properties: { "class": "cx('root')" } }, providers: [InputTextStyle], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: InputText, decorators: [{
      type: Directive,
      args: [{
        selector: "[pInputText]",
        standalone: true,
        host: {
          "[class]": "cx('root')"
        },
        providers: [InputTextStyle]
      }]
    }], propDecorators: { pSize: [{
      type: Input,
      args: ["pSize"]
    }], onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }] } });
    InputTextModule = class _InputTextModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _InputTextModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _InputTextModule, imports: [InputText], exports: [InputText] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _InputTextModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: InputTextModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [InputText],
        exports: [InputText]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/datepicker/index.mjs
var style8;
var init_datepicker = __esm({
  "node_modules/@primeuix/styles/dist/datepicker/index.mjs"() {
    "use strict";
    style8 = "\n    .p-datepicker {\n        display: inline-flex;\n        max-width: 100%;\n    }\n\n    .p-datepicker-input {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-datepicker-dropdown {\n        cursor: pointer;\n        display: inline-flex;\n        user-select: none;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        width: dt('datepicker.dropdown.width');\n        border-start-end-radius: dt('datepicker.dropdown.border.radius');\n        border-end-end-radius: dt('datepicker.dropdown.border.radius');\n        background: dt('datepicker.dropdown.background');\n        border: 1px solid dt('datepicker.dropdown.border.color');\n        border-inline-start: 0 none;\n        color: dt('datepicker.dropdown.color');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-datepicker-dropdown:not(:disabled):hover {\n        background: dt('datepicker.dropdown.hover.background');\n        border-color: dt('datepicker.dropdown.hover.border.color');\n        color: dt('datepicker.dropdown.hover.color');\n    }\n\n    .p-datepicker-dropdown:not(:disabled):active {\n        background: dt('datepicker.dropdown.active.background');\n        border-color: dt('datepicker.dropdown.active.border.color');\n        color: dt('datepicker.dropdown.active.color');\n    }\n\n    .p-datepicker-dropdown:focus-visible {\n        box-shadow: dt('datepicker.dropdown.focus.ring.shadow');\n        outline: dt('datepicker.dropdown.focus.ring.width') dt('datepicker.dropdown.focus.ring.style') dt('datepicker.dropdown.focus.ring.color');\n        outline-offset: dt('datepicker.dropdown.focus.ring.offset');\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) {\n        position: relative;\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-datepicker-input-icon-container {\n        cursor: pointer;\n        position: absolute;\n        top: 50%;\n        inset-inline-end: dt('form.field.padding.x');\n        margin-block-start: calc(-1 * (dt('icon.size') / 2));\n        color: dt('datepicker.input.icon.color');\n        line-height: 1;\n    }\n\n    .p-datepicker-fluid {\n        display: flex;\n    }\n\n    .p-datepicker-fluid .p-datepicker-input {\n        width: 1%;\n    }\n\n    .p-datepicker .p-datepicker-panel {\n        min-width: 100%;\n    }\n\n    .p-datepicker-panel {\n        width: auto;\n        padding: dt('datepicker.panel.padding');\n        background: dt('datepicker.panel.background');\n        color: dt('datepicker.panel.color');\n        border: 1px solid dt('datepicker.panel.border.color');\n        border-radius: dt('datepicker.panel.border.radius');\n        box-shadow: dt('datepicker.panel.shadow');\n    }\n\n    .p-datepicker-panel-inline {\n        display: inline-block;\n        overflow-x: auto;\n        box-shadow: none;\n    }\n\n    .p-datepicker-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: dt('datepicker.header.padding');\n        background: dt('datepicker.header.background');\n        color: dt('datepicker.header.color');\n        border-block-end: 1px solid dt('datepicker.header.border.color');\n    }\n\n    .p-datepicker-next-button:dir(rtl) {\n        order: -1;\n    }\n\n    .p-datepicker-prev-button:dir(rtl) {\n        order: 1;\n    }\n\n    .p-datepicker-title {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: dt('datepicker.title.gap');\n        font-weight: dt('datepicker.title.font.weight');\n    }\n\n    .p-datepicker-select-year,\n    .p-datepicker-select-month {\n        border: none;\n        background: transparent;\n        margin: 0;\n        cursor: pointer;\n        font-weight: inherit;\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration');\n    }\n\n    .p-datepicker-select-month {\n        padding: dt('datepicker.select.month.padding');\n        color: dt('datepicker.select.month.color');\n        border-radius: dt('datepicker.select.month.border.radius');\n    }\n\n    .p-datepicker-select-year {\n        padding: dt('datepicker.select.year.padding');\n        color: dt('datepicker.select.year.color');\n        border-radius: dt('datepicker.select.year.border.radius');\n    }\n\n    .p-datepicker-select-month:enabled:hover {\n        background: dt('datepicker.select.month.hover.background');\n        color: dt('datepicker.select.month.hover.color');\n    }\n\n    .p-datepicker-select-year:enabled:hover {\n        background: dt('datepicker.select.year.hover.background');\n        color: dt('datepicker.select.year.hover.color');\n    }\n\n    .p-datepicker-select-month:focus-visible,\n    .p-datepicker-select-year:focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-calendar-container {\n        display: flex;\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar {\n        flex: 1 1 auto;\n        border-inline-start: 1px solid dt('datepicker.group.border.color');\n        padding-inline-end: dt('datepicker.group.gap');\n        padding-inline-start: dt('datepicker.group.gap');\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar:first-child {\n        padding-inline-start: 0;\n        border-inline-start: 0 none;\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar:last-child {\n        padding-inline-end: 0;\n    }\n\n    .p-datepicker-day-view {\n        width: 100%;\n        border-collapse: collapse;\n        font-size: 1rem;\n        margin: dt('datepicker.day.view.margin');\n    }\n\n    .p-datepicker-weekday-cell {\n        padding: dt('datepicker.week.day.padding');\n    }\n\n    .p-datepicker-weekday {\n        font-weight: dt('datepicker.week.day.font.weight');\n        color: dt('datepicker.week.day.color');\n    }\n\n    .p-datepicker-day-cell {\n        padding: dt('datepicker.date.padding');\n    }\n\n    .p-datepicker-day {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        margin: 0 auto;\n        overflow: hidden;\n        position: relative;\n        width: dt('datepicker.date.width');\n        height: dt('datepicker.date.height');\n        border-radius: dt('datepicker.date.border.radius');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border: 1px solid transparent;\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n    }\n\n    .p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {\n        background: dt('datepicker.date.hover.background');\n        color: dt('datepicker.date.hover.color');\n    }\n\n    .p-datepicker-day:focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-day-selected {\n        background: dt('datepicker.date.selected.background');\n        color: dt('datepicker.date.selected.color');\n    }\n\n    .p-datepicker-day-selected-range {\n        background: dt('datepicker.date.range.selected.background');\n        color: dt('datepicker.date.range.selected.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day {\n        background: dt('datepicker.today.background');\n        color: dt('datepicker.today.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day-selected {\n        background: dt('datepicker.date.selected.background');\n        color: dt('datepicker.date.selected.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day-selected-range {\n        background: dt('datepicker.date.range.selected.background');\n        color: dt('datepicker.date.range.selected.color');\n    }\n\n    .p-datepicker-weeknumber {\n        text-align: center;\n    }\n\n    .p-datepicker-month-view {\n        margin: dt('datepicker.month.view.margin');\n    }\n\n    .p-datepicker-month {\n        width: 33.3%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n        padding: dt('datepicker.month.padding');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border-radius: dt('datepicker.month.border.radius');\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n    }\n\n    .p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {\n        color: dt('datepicker.date.hover.color');\n        background: dt('datepicker.date.hover.background');\n    }\n\n    .p-datepicker-month-selected {\n        color: dt('datepicker.date.selected.color');\n        background: dt('datepicker.date.selected.background');\n    }\n\n    .p-datepicker-month:not(.p-disabled):focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-year-view {\n        margin: dt('datepicker.year.view.margin');\n    }\n\n    .p-datepicker-year {\n        width: 50%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n        padding: dt('datepicker.year.padding');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border-radius: dt('datepicker.year.border.radius');\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n    }\n\n    .p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {\n        color: dt('datepicker.date.hover.color');\n        background: dt('datepicker.date.hover.background');\n    }\n\n    .p-datepicker-year-selected {\n        color: dt('datepicker.date.selected.color');\n        background: dt('datepicker.date.selected.background');\n    }\n\n    .p-datepicker-year:not(.p-disabled):focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-buttonbar {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: dt('datepicker.buttonbar.padding');\n        border-block-start: 1px solid dt('datepicker.buttonbar.border.color');\n    }\n\n    .p-datepicker-buttonbar .p-button {\n        width: auto;\n    }\n\n    .p-datepicker-time-picker {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-block-start: 1px solid dt('datepicker.time.picker.border.color');\n        padding: 0;\n        gap: dt('datepicker.time.picker.gap');\n    }\n\n    .p-datepicker-calendar-container + .p-datepicker-time-picker {\n        padding: dt('datepicker.time.picker.padding');\n    }\n\n    .p-datepicker-time-picker > div {\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        gap: dt('datepicker.time.picker.button.gap');\n    }\n\n    .p-datepicker-time-picker span {\n        font-size: 1rem;\n    }\n\n    .p-datepicker-timeonly .p-datepicker-time-picker {\n        border-block-start: 0 none;\n    }\n\n    .p-datepicker-time-picker:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {\n        width: dt('datepicker.dropdown.sm.width');\n    }\n\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n    }\n\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {\n        width: dt('datepicker.dropdown.lg.width');\n    }\n\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n    }\n\n    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-clear-icon,\n    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-clear-icon {\n        inset-inline-end: calc(dt('datepicker.dropdown.width') + dt('form.field.padding.x'));\n    }\n\n    .p-datepicker-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        cursor: pointer;\n        color: dt('form.field.icon.color');\n        inset-inline-end: dt('form.field.padding.x');\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-datepicker.mjs
var theme4, inlineStyles, classes7, DatePickerStyle, DatePickerClasses, DATEPICKER_VALUE_ACCESSOR, DatePicker, DatePickerModule;
var init_primeng_datepicker = __esm({
  "node_modules/primeng/fesm2022/primeng-datepicker.mjs"() {
    "use strict";
    init_animations();
    init_common();
    init_common();
    init_core();
    init_core();
    init_forms();
    init_dist();
    init_primeng_api();
    init_primeng_api();
    init_primeng_autofocus();
    init_primeng_baseinput();
    init_primeng_button();
    init_primeng_dom();
    init_primeng_icons();
    init_primeng_inputtext();
    init_primeng_ripple();
    init_primeng_utils();
    init_datepicker();
    init_primeng_base();
    theme4 = /*css*/
    `
    ${style8}

    /* For PrimeNG */
    .p-datepicker.ng-invalid.ng-dirty .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }
`;
    inlineStyles = {
      root: () => ({ position: "relative" })
    };
    classes7 = {
      root: ({ instance }) => [
        "p-datepicker p-component p-inputwrapper",
        {
          "p-invalid": instance.invalid(),
          "p-datepicker-fluid": instance.hasFluid,
          "p-inputwrapper-filled": instance.$filled(),
          "p-variant-filled": instance.$variant() === "filled",
          "p-inputwrapper-focus": instance.focus || instance.overlayVisible,
          "p-focus": instance.focus || instance.overlayVisible
        }
      ],
      pcInputText: "p-datepicker-input",
      dropdown: "p-datepicker-dropdown",
      inputIconContainer: "p-datepicker-input-icon-container",
      inputIcon: "p-datepicker-input-icon",
      panel: ({ instance }) => [
        "p-datepicker-panel p-component",
        {
          "p-datepicker-panel p-component": true,
          "p-datepicker-panel-inline": instance.inline,
          "p-disabled": instance.$disabled(),
          "p-datepicker-timeonly": instance.timeOnly
        }
      ],
      calendarContainer: "p-datepicker-calendar-container",
      calendar: "p-datepicker-calendar",
      header: "p-datepicker-header",
      pcPrevButton: "p-datepicker-prev-button",
      title: "p-datepicker-title",
      selectMonth: "p-datepicker-select-month",
      selectYear: "p-datepicker-select-year",
      decade: "p-datepicker-decade",
      pcNextButton: "p-datepicker-next-button",
      dayView: "p-datepicker-day-view",
      weekHeader: "p-datepicker-weekheader p-disabled",
      weekNumber: "p-datepicker-weeknumber",
      weekLabelContainer: "p-datepicker-weeklabel-container p-disabled",
      weekDayCell: "p-datepicker-weekday-cell",
      weekDay: "p-datepicker-weekday",
      dayCell: ({ date }) => [
        "p-datepicker-day-cell",
        {
          "p-datepicker-other-month": date.otherMonth,
          "p-datepicker-today": date.today
        }
      ],
      day: ({ instance, date }) => {
        let selectedDayClass = "";
        if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
          const startDate = instance.value[0];
          const endDate = instance.value[1];
          const isStart = startDate && date.year === startDate.getFullYear() && date.month === startDate.getMonth() && date.day === startDate.getDate();
          const isEnd = endDate && date.year === endDate.getFullYear() && date.month === endDate.getMonth() && date.day === endDate.getDate();
          selectedDayClass = isStart || isEnd ? "p-datepicker-day-selected" : "p-datepicker-day-selected-range";
        }
        return {
          "p-datepicker-day": true,
          "p-datepicker-day-selected": !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
          "p-disabled": instance.$disabled() || !date.selectable,
          [selectedDayClass]: true
        };
      },
      monthView: "p-datepicker-month-view",
      month: ({ instance, index }) => [
        "p-datepicker-month",
        {
          "p-datepicker-month-selected": instance.isMonthSelected(index),
          "p-disabled": instance.isMonthDisabled(index)
        }
      ],
      yearView: "p-datepicker-year-view",
      year: ({ instance, year }) => [
        "p-datepicker-year",
        {
          "p-datepicker-year-selected": instance.isYearSelected(year),
          "p-disabled": instance.isYearDisabled(year)
        }
      ],
      timePicker: "p-datepicker-time-picker",
      hourPicker: "p-datepicker-hour-picker",
      pcIncrementButton: "p-datepicker-increment-button",
      pcDecrementButton: "p-datepicker-decrement-button",
      separator: "p-datepicker-separator",
      minutePicker: "p-datepicker-minute-picker",
      secondPicker: "p-datepicker-second-picker",
      ampmPicker: "p-datepicker-ampm-picker",
      buttonbar: "p-datepicker-buttonbar",
      pcTodayButton: "p-datepicker-today-button",
      pcClearButton: "p-datepicker-clear-button",
      clearIcon: "p-datepicker-clear-icon"
    };
    DatePickerStyle = class _DatePickerStyle extends BaseStyle {
      name = "datepicker";
      theme = theme4;
      classes = classes7;
      inlineStyles = inlineStyles;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _DatePickerStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _DatePickerStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: DatePickerStyle, decorators: [{
      type: Injectable
    }] });
    (function(DatePickerClasses2) {
      DatePickerClasses2["root"] = "p-datepicker";
      DatePickerClasses2["pcInputText"] = "p-datepicker-input";
      DatePickerClasses2["dropdown"] = "p-datepicker-dropdown";
      DatePickerClasses2["inputIconContainer"] = "p-datepicker-input-icon-container";
      DatePickerClasses2["inputIcon"] = "p-datepicker-input-icon";
      DatePickerClasses2["panel"] = "p-datepicker-panel";
      DatePickerClasses2["calendarContainer"] = "p-datepicker-calendar-container";
      DatePickerClasses2["calendar"] = "p-datepicker-calendar";
      DatePickerClasses2["header"] = "p-datepicker-header";
      DatePickerClasses2["pcPrevButton"] = "p-datepicker-prev-button";
      DatePickerClasses2["title"] = "p-datepicker-title";
      DatePickerClasses2["selectMonth"] = "p-datepicker-select-month";
      DatePickerClasses2["selectYear"] = "p-datepicker-select-year";
      DatePickerClasses2["decade"] = "p-datepicker-decade";
      DatePickerClasses2["pcNextButton"] = "p-datepicker-next-button";
      DatePickerClasses2["dayView"] = "p-datepicker-day-view";
      DatePickerClasses2["weekHeader"] = "p-datepicker-weekheader";
      DatePickerClasses2["weekNumber"] = "p-datepicker-weeknumber";
      DatePickerClasses2["weekLabelContainer"] = "p-datepicker-weeklabel-container";
      DatePickerClasses2["weekDayCell"] = "p-datepicker-weekday-cell";
      DatePickerClasses2["weekDay"] = "p-datepicker-weekday";
      DatePickerClasses2["dayCell"] = "p-datepicker-day-cell";
      DatePickerClasses2["day"] = "p-datepicker-day";
      DatePickerClasses2["monthView"] = "p-datepicker-month-view";
      DatePickerClasses2["month"] = "p-datepicker-month";
      DatePickerClasses2["yearView"] = "p-datepicker-year-view";
      DatePickerClasses2["year"] = "p-datepicker-year";
      DatePickerClasses2["timePicker"] = "p-datepicker-time-picker";
      DatePickerClasses2["hourPicker"] = "p-datepicker-hour-picker";
      DatePickerClasses2["pcIncrementButton"] = "p-datepicker-increment-button";
      DatePickerClasses2["pcDecrementButton"] = "p-datepicker-decrement-button";
      DatePickerClasses2["separator"] = "p-datepicker-separator";
      DatePickerClasses2["minutePicker"] = "p-datepicker-minute-picker";
      DatePickerClasses2["secondPicker"] = "p-datepicker-second-picker";
      DatePickerClasses2["ampmPicker"] = "p-datepicker-ampm-picker";
      DatePickerClasses2["buttonbar"] = "p-datepicker-buttonbar";
      DatePickerClasses2["pcTodayButton"] = "p-datepicker-today-button";
      DatePickerClasses2["pcClearButton"] = "p-datepicker-clear-button";
      DatePickerClasses2["clearIcon"] = "p-datepicker-clear-icon";
    })(DatePickerClasses || (DatePickerClasses = {}));
    DATEPICKER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePicker),
      multi: true
    };
    DatePicker = class _DatePicker extends BaseInput {
      zone;
      overlayService;
      iconDisplay = "button";
      /**
       * Style class of the component.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Inline style of the input field.
       * @group Props
       */
      inputStyle;
      /**
       * Identifier of the focus input to match a label defined for the component.
       * @group Props
       */
      inputId;
      /**
       * Style class of the input field.
       * @group Props
       */
      inputStyleClass;
      /**
       * Placeholder text for the input.
       * @group Props
       */
      placeholder;
      /**
       * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
       * @group Props
       */
      ariaLabelledBy;
      /**
       * Defines a string that labels the input for accessibility.
       * @group Props
       */
      ariaLabel;
      /**
       * Defines a string that labels the icon button for accessibility.
       * @group Props
       */
      iconAriaLabel;
      /**
       * Format of the date which can also be defined at locale settings.
       * @group Props
       */
      get dateFormat() {
        return this._dateFormat;
      }
      set dateFormat(value) {
        this._dateFormat = value;
        if (this.initialized) {
          this.updateInputfield();
        }
      }
      /**
       * Separator for multiple selection mode.
       * @group Props
       */
      multipleSeparator = ",";
      /**
       * Separator for joining start and end dates on range selection mode.
       * @group Props
       */
      rangeSeparator = "-";
      /**
       * When enabled, displays the datepicker as inline. Default is false for popup mode.
       * @group Props
       */
      inline = false;
      /**
       * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
       * @group Props
       */
      showOtherMonths = true;
      /**
       * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
       * @group Props
       */
      selectOtherMonths;
      /**
       * When enabled, displays a button with icon next to input.
       * @group Props
       */
      showIcon;
      /**
       * Icon of the datepicker button.
       * @group Props
       */
      icon;
      /**
       * When specified, prevents entering the date manually with keyboard.
       * @group Props
       */
      readonlyInput;
      /**
       * The cutoff year for determining the century for a date.
       * @group Props
       */
      shortYearCutoff = "+10";
      /**
       * Specifies 12 or 24 hour format.
       * @group Props
       */
      get hourFormat() {
        return this._hourFormat;
      }
      set hourFormat(value) {
        this._hourFormat = value;
        if (this.initialized) {
          this.updateInputfield();
        }
      }
      /**
       * Whether to display timepicker only.
       * @group Props
       */
      timeOnly;
      /**
       * Hours to change per step.
       * @group Props
       */
      stepHour = 1;
      /**
       * Minutes to change per step.
       * @group Props
       */
      stepMinute = 1;
      /**
       * Seconds to change per step.
       * @group Props
       */
      stepSecond = 1;
      /**
       * Whether to show the seconds in time picker.
       * @group Props
       */
      showSeconds = false;
      /**
       * When disabled, datepicker will not be visible with input focus.
       * @group Props
       */
      showOnFocus = true;
      /**
       * When enabled, datepicker will show week numbers.
       * @group Props
       */
      showWeek = false;
      /**
       * When enabled, datepicker will start week numbers from first day of the year.
       * @group Props
       */
      startWeekFromFirstDayOfYear = false;
      /**
       * When enabled, a clear icon is displayed to clear the value.
       * @group Props
       */
      showClear = false;
      /**
       * Type of the value to write back to ngModel, default is date and alternative is string.
       * @group Props
       */
      dataType = "date";
      /**
       * Defines the quantity of the selection, valid values are "single", "multiple" and "range".
       * @group Props
       */
      selectionMode = "single";
      /**
       * Maximum number of selectable dates in multiple mode.
       * @group Props
       */
      maxDateCount;
      /**
       * Whether to display today and clear buttons at the footer
       * @group Props
       */
      showButtonBar;
      /**
       * Style class of the today button.
       * @group Props
       */
      todayButtonStyleClass;
      /**
       * Style class of the clear button.
       * @group Props
       */
      clearButtonStyleClass;
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      autofocus;
      /**
       * Whether to automatically manage layering.
       * @group Props
       */
      autoZIndex = true;
      /**
       * Base zIndex value to use in layering.
       * @group Props
       */
      baseZIndex = 0;
      /**
       * Style class of the datetimepicker container element.
       * @group Props
       */
      panelStyleClass;
      /**
       * Inline style of the datetimepicker container element.
       * @group Props
       */
      panelStyle;
      /**
       * Keep invalid value when input blur.
       * @group Props
       */
      keepInvalid = false;
      /**
       * Whether to hide the overlay on date selection.
       * @group Props
       */
      hideOnDateTimeSelect = true;
      /**
       * When enabled, datepicker overlay is displayed as optimized for touch devices.
       * @group Props
       */
      touchUI;
      /**
       * Separator of time selector.
       * @group Props
       */
      timeSeparator = ":";
      /**
       * When enabled, can only focus on elements inside the datepicker.
       * @group Props
       */
      focusTrap = true;
      /**
       * Transition options of the show animation.
       * @group Props
       */
      showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
      /**
       * Transition options of the hide animation.
       * @group Props
       */
      hideTransitionOptions = ".1s linear";
      /**
       * Index of the element in tabbing order.
       * @group Props
       */
      tabindex;
      /**
       * The minimum selectable date.
       * @group Props
       */
      get minDate() {
        return this._minDate;
      }
      set minDate(date) {
        this._minDate = date;
        if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }
      /**
       * The maximum selectable date.
       * @group Props
       */
      get maxDate() {
        return this._maxDate;
      }
      set maxDate(date) {
        this._maxDate = date;
        if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }
      /**
       * Array with dates that should be disabled (not selectable).
       * @group Props
       */
      get disabledDates() {
        return this._disabledDates;
      }
      set disabledDates(disabledDates) {
        this._disabledDates = disabledDates;
        if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }
      /**
       * Array with weekday numbers that should be disabled (not selectable).
       * @group Props
       */
      get disabledDays() {
        return this._disabledDays;
      }
      set disabledDays(disabledDays) {
        this._disabledDays = disabledDays;
        if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }
      /**
       * Whether to display timepicker.
       * @group Props
       */
      get showTime() {
        return this._showTime;
      }
      set showTime(showTime) {
        this._showTime = showTime;
        if (this.currentHour === void 0) {
          this.initTime(this.value || /* @__PURE__ */ new Date());
        }
        this.updateInputfield();
      }
      /**
       * An array of options for responsive design.
       * @group Props
       */
      get responsiveOptions() {
        return this._responsiveOptions;
      }
      set responsiveOptions(responsiveOptions) {
        this._responsiveOptions = responsiveOptions;
        this.destroyResponsiveStyleElement();
        this.createResponsiveStyle();
      }
      /**
       * Number of months to display.
       * @group Props
       */
      get numberOfMonths() {
        return this._numberOfMonths;
      }
      set numberOfMonths(numberOfMonths) {
        this._numberOfMonths = numberOfMonths;
        this.destroyResponsiveStyleElement();
        this.createResponsiveStyle();
      }
      /**
       * Defines the first of the week for various date calculations.
       * @group Props
       */
      get firstDayOfWeek() {
        return this._firstDayOfWeek;
      }
      set firstDayOfWeek(firstDayOfWeek) {
        this._firstDayOfWeek = firstDayOfWeek;
        this.createWeekDays();
      }
      /**
       * Type of view to display, valid values are "date" for datepicker and "month" for month picker.
       * @group Props
       */
      get view() {
        return this._view;
      }
      set view(view) {
        this._view = view;
        this.currentView = this._view;
      }
      /**
       * Set the date to highlight on first opening if the field is blank.
       * @group Props
       */
      get defaultDate() {
        return this._defaultDate;
      }
      set defaultDate(defaultDate) {
        this._defaultDate = defaultDate;
        if (this.initialized) {
          const date = defaultDate || /* @__PURE__ */ new Date();
          this.currentMonth = date.getMonth();
          this.currentYear = date.getFullYear();
          this.initTime(date);
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }
      /**
       * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
       * @defaultValue 'self'
       * @group Props
       */
      appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : []);
      /**
       * Callback to invoke on focus of input field.
       * @param {Event} event - browser event.
       * @group Emits
       */
      onFocus = new EventEmitter();
      /**
       * Callback to invoke on blur of input field.
       * @param {Event} event - browser event.
       * @group Emits
       */
      onBlur = new EventEmitter();
      /**
       * Callback to invoke when date panel closed.
       * @param {Event} event - Mouse event
       * @group Emits
       */
      onClose = new EventEmitter();
      /**
       * Callback to invoke on date select.
       * @param {Date} date - date value.
       * @group Emits
       */
      onSelect = new EventEmitter();
      /**
       * Callback to invoke when input field cleared.
       * @group Emits
       */
      onClear = new EventEmitter();
      /**
       * Callback to invoke when input field is being typed.
       * @param {Event} event - browser event
       * @group Emits
       */
      onInput = new EventEmitter();
      /**
       * Callback to invoke when today button is clicked.
       * @param {Date} date - today as a date instance.
       * @group Emits
       */
      onTodayClick = new EventEmitter();
      /**
       * Callback to invoke when clear button is clicked.
       * @param {Event} event - browser event.
       * @group Emits
       */
      onClearClick = new EventEmitter();
      /**
       * Callback to invoke when a month is changed using the navigators.
       * @param {DatePickerMonthChangeEvent} event - custom month change event.
       * @group Emits
       */
      onMonthChange = new EventEmitter();
      /**
       * Callback to invoke when a year is changed using the navigators.
       * @param {DatePickerYearChangeEvent} event - custom year change event.
       * @group Emits
       */
      onYearChange = new EventEmitter();
      /**
       * Callback to invoke when clicked outside of the date panel.
       * @group Emits
       */
      onClickOutside = new EventEmitter();
      /**
       * Callback to invoke when datepicker panel is shown.
       * @group Emits
       */
      onShow = new EventEmitter();
      inputfieldViewChild;
      set content(content) {
        this.contentViewChild = content;
        if (this.contentViewChild) {
          if (this.isMonthNavigate) {
            Promise.resolve(null).then(() => this.updateFocus());
            this.isMonthNavigate = false;
          } else {
            if (!this.focus && !this.inline) {
              this.initFocusableCell();
            }
          }
        }
      }
      _componentStyle = inject(DatePickerStyle);
      contentViewChild;
      value;
      dates;
      months;
      weekDays;
      currentMonth;
      currentYear;
      currentHour;
      currentMinute;
      currentSecond;
      p;
      pm;
      mask;
      maskClickListener;
      overlay;
      responsiveStyleElement;
      overlayVisible;
      $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : []);
      calendarElement;
      timePickerTimer;
      documentClickListener;
      animationEndListener;
      ticksTo1970;
      yearOptions;
      focus;
      isKeydown;
      _minDate;
      _maxDate;
      _dateFormat;
      _hourFormat = "24";
      _showTime;
      _yearRange;
      preventDocumentListener;
      dayClass(date) {
        return this._componentStyle.classes.day({ instance: this, date });
      }
      /**
       * Custom template for date cells.
       * @group Templates
       */
      dateTemplate;
      /**
       * Custom template for header section.
       * @group Templates
       */
      headerTemplate;
      /**
       * Custom template for footer section.
       * @group Templates
       */
      footerTemplate;
      /**
       * Custom template for disabled date cells.
       * @group Templates
       */
      disabledDateTemplate;
      /**
       * Custom template for decade view.
       * @group Templates
       */
      decadeTemplate;
      /**
       * Custom template for previous month icon.
       * @group Templates
       */
      previousIconTemplate;
      /**
       * Custom template for next month icon.
       * @group Templates
       */
      nextIconTemplate;
      /**
       * Custom template for trigger icon.
       * @group Templates
       */
      triggerIconTemplate;
      /**
       * Custom template for clear icon.
       * @group Templates
       */
      clearIconTemplate;
      /**
       * Custom template for decrement icon.
       * @group Templates
       */
      decrementIconTemplate;
      /**
       * Custom template for increment icon.
       * @group Templates
       */
      incrementIconTemplate;
      /**
       * Custom template for input icon.
       * @group Templates
       */
      inputIconTemplate;
      _dateTemplate;
      _headerTemplate;
      _footerTemplate;
      _disabledDateTemplate;
      _decadeTemplate;
      _previousIconTemplate;
      _nextIconTemplate;
      _triggerIconTemplate;
      _clearIconTemplate;
      _decrementIconTemplate;
      _incrementIconTemplate;
      _inputIconTemplate;
      _disabledDates;
      _disabledDays;
      selectElement;
      todayElement;
      focusElement;
      scrollHandler;
      documentResizeListener;
      navigationState = null;
      isMonthNavigate;
      initialized;
      translationSubscription;
      _locale;
      _responsiveOptions;
      currentView;
      attributeSelector;
      panelId;
      _numberOfMonths = 1;
      _firstDayOfWeek;
      _view = "date";
      preventFocus;
      _defaultDate;
      _focusKey = null;
      window;
      get locale() {
        return this._locale;
      }
      get iconButtonAriaLabel() {
        return this.iconAriaLabel ? this.iconAriaLabel : this.getTranslation("chooseDate");
      }
      get prevIconAriaLabel() {
        return this.currentView === "year" ? this.getTranslation("prevDecade") : this.currentView === "month" ? this.getTranslation("prevYear") : this.getTranslation("prevMonth");
      }
      get nextIconAriaLabel() {
        return this.currentView === "year" ? this.getTranslation("nextDecade") : this.currentView === "month" ? this.getTranslation("nextYear") : this.getTranslation("nextMonth");
      }
      constructor(zone, overlayService) {
        super();
        this.zone = zone;
        this.overlayService = overlayService;
        this.window = this.document.defaultView;
      }
      ngOnInit() {
        super.ngOnInit();
        this.attributeSelector = s2("pn_id_");
        this.panelId = this.attributeSelector + "_panel";
        const date = this.defaultDate || /* @__PURE__ */ new Date();
        this.createResponsiveStyle();
        this.currentMonth = date.getMonth();
        this.currentYear = date.getFullYear();
        this.yearOptions = [];
        this.currentView = this.view;
        if (this.view === "date") {
          this.createWeekDays();
          this.initTime(date);
          this.createMonths(this.currentMonth, this.currentYear);
          this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7;
        }
        this.translationSubscription = this.config.translationObserver.subscribe(() => {
          this.createWeekDays();
          this.cd.markForCheck();
        });
        this.initialized = true;
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.inline) {
          this.contentViewChild && this.contentViewChild.nativeElement.setAttribute(this.attributeSelector, "");
          if (!this.$disabled() && !this.inline) {
            this.initFocusableCell();
            if (this.numberOfMonths === 1) {
              if (this.contentViewChild && this.contentViewChild.nativeElement) {
                this.contentViewChild.nativeElement.style.width = v(this.el?.nativeElement) + "px";
              }
            }
          }
        }
      }
      templates;
      ngAfterContentInit() {
        this.templates.forEach((item) => {
          switch (item.getType()) {
            case "date":
              this._dateTemplate = item.template;
              break;
            case "decade":
              this._decadeTemplate = item.template;
              break;
            case "disabledDate":
              this._disabledDateTemplate = item.template;
              break;
            case "header":
              this._headerTemplate = item.template;
              break;
            case "inputicon":
              this._inputIconTemplate = item.template;
              break;
            case "previousicon":
              this._previousIconTemplate = item.template;
              break;
            case "nexticon":
              this._nextIconTemplate = item.template;
              break;
            case "triggericon":
              this._triggerIconTemplate = item.template;
              break;
            case "clearicon":
              this._clearIconTemplate = item.template;
              break;
            case "decrementicon":
              this._decrementIconTemplate = item.template;
              break;
            case "incrementicon":
              this._incrementIconTemplate = item.template;
              break;
            case "footer":
              this._footerTemplate = item.template;
              break;
            default:
              this._dateTemplate = item.template;
              break;
          }
        });
      }
      getTranslation(option) {
        return this.config.getTranslation(option);
      }
      populateYearOptions(start, end) {
        this.yearOptions = [];
        for (let i = start; i <= end; i++) {
          this.yearOptions.push(i);
        }
      }
      createWeekDays() {
        this.weekDays = [];
        let dayIndex = this.getFirstDateOfWeek();
        let dayLabels = this.getTranslation(TranslationKeys.DAY_NAMES_MIN);
        for (let i = 0; i < 7; i++) {
          this.weekDays.push(dayLabels[dayIndex]);
          dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
        }
      }
      monthPickerValues() {
        let monthPickerValues = [];
        for (let i = 0; i <= 11; i++) {
          monthPickerValues.push(this.config.getTranslation("monthNamesShort")[i]);
        }
        return monthPickerValues;
      }
      yearPickerValues() {
        let yearPickerValues = [];
        let base = this.currentYear - this.currentYear % 10;
        for (let i = 0; i < 10; i++) {
          yearPickerValues.push(base + i);
        }
        return yearPickerValues;
      }
      createMonths(month, year) {
        this.months = this.months = [];
        for (let i = 0; i < this.numberOfMonths; i++) {
          let m = month + i;
          let y = year;
          if (m > 11) {
            m = m % 12;
            y = year + Math.floor((month + i) / 12);
          }
          this.months.push(this.createMonth(m, y));
        }
      }
      getWeekNumber(date) {
        let checkDate = new Date(date.getTime());
        if (this.startWeekFromFirstDayOfYear) {
          let firstDayOfWeek = +this.getFirstDateOfWeek();
          checkDate.setDate(checkDate.getDate() + 6 + firstDayOfWeek - checkDate.getDay());
        } else {
          checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        }
        let time = checkDate.getTime();
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate.getTime()) / 864e5) / 7) + 1;
      }
      createMonth(month, year) {
        let dates = [];
        let firstDay = this.getFirstDayOfMonthIndex(month, year);
        let daysLength = this.getDaysCountInMonth(month, year);
        let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
        let dayNo = 1;
        let today = /* @__PURE__ */ new Date();
        let weekNumbers = [];
        let monthRows = Math.ceil((daysLength + firstDay) / 7);
        for (let i = 0; i < monthRows; i++) {
          let week = [];
          if (i == 0) {
            for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
              let prev = this.getPreviousMonthAndYear(month, year);
              week.push({
                day: j,
                month: prev.month,
                year: prev.year,
                otherMonth: true,
                today: this.isToday(today, j, prev.month, prev.year),
                selectable: this.isSelectable(j, prev.month, prev.year, true)
              });
            }
            let remainingDaysLength = 7 - week.length;
            for (let j = 0; j < remainingDaysLength; j++) {
              week.push({
                day: dayNo,
                month,
                year,
                today: this.isToday(today, dayNo, month, year),
                selectable: this.isSelectable(dayNo, month, year, false)
              });
              dayNo++;
            }
          } else {
            for (let j = 0; j < 7; j++) {
              if (dayNo > daysLength) {
                let next = this.getNextMonthAndYear(month, year);
                week.push({
                  day: dayNo - daysLength,
                  month: next.month,
                  year: next.year,
                  otherMonth: true,
                  today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                  selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
                });
              } else {
                week.push({
                  day: dayNo,
                  month,
                  year,
                  today: this.isToday(today, dayNo, month, year),
                  selectable: this.isSelectable(dayNo, month, year, false)
                });
              }
              dayNo++;
            }
          }
          if (this.showWeek) {
            weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
          }
          dates.push(week);
        }
        return {
          month,
          year,
          dates,
          weekNumbers
        };
      }
      initTime(date) {
        this.pm = date.getHours() > 11;
        if (this.showTime) {
          this.currentMinute = date.getMinutes();
          this.currentSecond = date.getSeconds();
          this.setCurrentHourPM(date.getHours());
        } else if (this.timeOnly) {
          this.currentMinute = 0;
          this.currentHour = 0;
          this.currentSecond = 0;
        }
      }
      navBackward(event2) {
        if (this.$disabled()) {
          event2.preventDefault();
          return;
        }
        this.isMonthNavigate = true;
        if (this.currentView === "month") {
          this.decrementYear();
          setTimeout(() => {
            this.updateFocus();
          }, 1);
        } else if (this.currentView === "year") {
          this.decrementDecade();
          setTimeout(() => {
            this.updateFocus();
          }, 1);
        } else {
          if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.decrementYear();
          } else {
            this.currentMonth--;
          }
          this.onMonthChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }
      navForward(event2) {
        if (this.$disabled()) {
          event2.preventDefault();
          return;
        }
        this.isMonthNavigate = true;
        if (this.currentView === "month") {
          this.incrementYear();
          setTimeout(() => {
            this.updateFocus();
          }, 1);
        } else if (this.currentView === "year") {
          this.incrementDecade();
          setTimeout(() => {
            this.updateFocus();
          }, 1);
        } else {
          if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.incrementYear();
          } else {
            this.currentMonth++;
          }
          this.onMonthChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }
      decrementYear() {
        this.currentYear--;
        let _yearOptions = this.yearOptions;
        if (this.currentYear < _yearOptions[0]) {
          let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
          this.populateYearOptions(_yearOptions[0] - difference, _yearOptions[_yearOptions.length - 1] - difference);
        }
      }
      decrementDecade() {
        this.currentYear = this.currentYear - 10;
      }
      incrementDecade() {
        this.currentYear = this.currentYear + 10;
      }
      incrementYear() {
        this.currentYear++;
        let _yearOptions = this.yearOptions;
        if (this.currentYear > _yearOptions[_yearOptions.length - 1]) {
          let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
          this.populateYearOptions(_yearOptions[0] + difference, _yearOptions[_yearOptions.length - 1] + difference);
        }
      }
      switchToMonthView(event2) {
        this.setCurrentView("month");
        event2.preventDefault();
      }
      switchToYearView(event2) {
        this.setCurrentView("year");
        event2.preventDefault();
      }
      onDateSelect(event2, dateMeta) {
        if (this.$disabled() || !dateMeta.selectable) {
          event2.preventDefault();
          return;
        }
        if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
          this.value = this.value.filter((date, i) => {
            return !this.isDateEquals(date, dateMeta);
          });
          if (this.value.length === 0) {
            this.value = null;
          }
          this.updateModel(this.value);
        } else {
          if (this.shouldSelectDate(dateMeta)) {
            this.selectDate(dateMeta);
          }
        }
        if (this.hideOnDateTimeSelect && (this.isSingleSelection() || this.isRangeSelection() && this.value[1])) {
          setTimeout(() => {
            event2.preventDefault();
            this.hideOverlay();
            if (this.mask) {
              this.disableModality();
            }
            this.cd.markForCheck();
          }, 150);
        }
        this.updateInputfield();
        event2.preventDefault();
      }
      shouldSelectDate(dateMeta) {
        if (this.isMultipleSelection())
          return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;
        else
          return true;
      }
      onMonthSelect(event2, index) {
        if (this.view === "month") {
          this.onDateSelect(event2, { year: this.currentYear, month: index, day: 1, selectable: true });
        } else {
          this.currentMonth = index;
          this.createMonths(this.currentMonth, this.currentYear);
          this.setCurrentView("date");
          this.onMonthChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
        }
      }
      onYearSelect(event2, year) {
        if (this.view === "year") {
          this.onDateSelect(event2, { year, month: 0, day: 1, selectable: true });
        } else {
          this.currentYear = year;
          this.setCurrentView("month");
          this.onYearChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
        }
      }
      updateInputfield() {
        let formattedValue = "";
        if (this.value) {
          if (this.isSingleSelection()) {
            formattedValue = this.formatDateTime(this.value);
          } else if (this.isMultipleSelection()) {
            for (let i = 0; i < this.value.length; i++) {
              let dateAsString = this.formatDateTime(this.value[i]);
              formattedValue += dateAsString;
              if (i !== this.value.length - 1) {
                formattedValue += this.multipleSeparator + " ";
              }
            }
          } else if (this.isRangeSelection()) {
            if (this.value && this.value.length) {
              let startDate = this.value[0];
              let endDate = this.value[1];
              formattedValue = this.formatDateTime(startDate);
              if (endDate) {
                formattedValue += " " + this.rangeSeparator + " " + this.formatDateTime(endDate);
              }
            }
          }
        }
        this.writeModelValue(formattedValue);
        this.inputFieldValue = formattedValue;
        if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
          this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
        }
      }
      inputFieldValue = null;
      formatDateTime(date) {
        let formattedValue = this.keepInvalid ? date : null;
        const isDateValid = this.isValidDateForTimeConstraints(date);
        if (this.isValidDate(date)) {
          if (this.timeOnly) {
            formattedValue = this.formatTime(date);
          } else {
            formattedValue = this.formatDate(date, this.getDateFormat());
            if (this.showTime) {
              formattedValue += " " + this.formatTime(date);
            }
          }
        } else if (this.dataType === "string") {
          formattedValue = date;
        }
        formattedValue = isDateValid ? formattedValue : "";
        return formattedValue;
      }
      formatDateMetaToDate(dateMeta) {
        return new Date(dateMeta.year, dateMeta.month, dateMeta.day);
      }
      formatDateKey(date) {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      }
      setCurrentHourPM(hours) {
        if (this.hourFormat == "12") {
          this.pm = hours > 11;
          if (hours >= 12) {
            this.currentHour = hours == 12 ? 12 : hours - 12;
          } else {
            this.currentHour = hours == 0 ? 12 : hours;
          }
        } else {
          this.currentHour = hours;
        }
      }
      setCurrentView(currentView) {
        this.currentView = currentView;
        this.cd.detectChanges();
        this.alignOverlay();
      }
      selectDate(dateMeta) {
        let date = this.formatDateMetaToDate(dateMeta);
        if (this.showTime) {
          if (this.hourFormat == "12") {
            if (this.currentHour === 12)
              date.setHours(this.pm ? 12 : 0);
            else
              date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
          } else {
            date.setHours(this.currentHour);
          }
          date.setMinutes(this.currentMinute);
          date.setSeconds(this.currentSecond);
        }
        if (this.minDate && this.minDate > date) {
          date = this.minDate;
          this.setCurrentHourPM(date.getHours());
          this.currentMinute = date.getMinutes();
          this.currentSecond = date.getSeconds();
        }
        if (this.maxDate && this.maxDate < date) {
          date = this.maxDate;
          this.setCurrentHourPM(date.getHours());
          this.currentMinute = date.getMinutes();
          this.currentSecond = date.getSeconds();
        }
        if (this.isSingleSelection()) {
          this.updateModel(date);
        } else if (this.isMultipleSelection()) {
          this.updateModel(this.value ? [...this.value, date] : [date]);
        } else if (this.isRangeSelection()) {
          if (this.value && this.value.length) {
            let startDate = this.value[0];
            let endDate = this.value[1];
            if (!endDate && date.getTime() >= startDate.getTime()) {
              endDate = date;
            } else {
              startDate = date;
              endDate = null;
            }
            this.updateModel([startDate, endDate]);
          } else {
            this.updateModel([date, null]);
          }
        }
        this.onSelect.emit(date);
      }
      updateModel(value) {
        this.value = value;
        if (this.dataType == "date") {
          this.writeModelValue(this.value);
          this.onModelChange(this.value);
        } else if (this.dataType == "string") {
          if (this.isSingleSelection()) {
            this.onModelChange(this.formatDateTime(this.value));
          } else {
            let stringArrValue = null;
            if (Array.isArray(this.value)) {
              stringArrValue = this.value.map((date) => this.formatDateTime(date));
            }
            this.writeModelValue(stringArrValue);
            this.onModelChange(stringArrValue);
          }
        }
      }
      getFirstDayOfMonthIndex(month, year) {
        let day = /* @__PURE__ */ new Date();
        day.setDate(1);
        day.setMonth(month);
        day.setFullYear(year);
        let dayIndex = day.getDay() + this.getSundayIndex();
        return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
      }
      getDaysCountInMonth(month, year) {
        return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
      }
      getDaysCountInPrevMonth(month, year) {
        let prev = this.getPreviousMonthAndYear(month, year);
        return this.getDaysCountInMonth(prev.month, prev.year);
      }
      getPreviousMonthAndYear(month, year) {
        let m, y;
        if (month === 0) {
          m = 11;
          y = year - 1;
        } else {
          m = month - 1;
          y = year;
        }
        return { month: m, year: y };
      }
      getNextMonthAndYear(month, year) {
        let m, y;
        if (month === 11) {
          m = 0;
          y = year + 1;
        } else {
          m = month + 1;
          y = year;
        }
        return { month: m, year: y };
      }
      getSundayIndex() {
        let firstDayOfWeek = this.getFirstDateOfWeek();
        return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
      }
      isSelected(dateMeta) {
        if (this.value) {
          if (this.isSingleSelection()) {
            return this.isDateEquals(this.value, dateMeta);
          } else if (this.isMultipleSelection()) {
            let selected = false;
            for (let date of this.value) {
              selected = this.isDateEquals(date, dateMeta);
              if (selected) {
                break;
              }
            }
            return selected;
          } else if (this.isRangeSelection()) {
            if (this.value[1])
              return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
            else
              return this.isDateEquals(this.value[0], dateMeta);
          }
        } else {
          return false;
        }
      }
      isComparable() {
        return this.value != null && typeof this.value !== "string";
      }
      isMonthSelected(month) {
        if (!this.isComparable())
          return false;
        if (this.isMultipleSelection()) {
          return this.value.some((currentValue) => currentValue.getMonth() === month && currentValue.getFullYear() === this.currentYear);
        } else if (this.isRangeSelection()) {
          if (!this.value[1]) {
            return this.value[0]?.getFullYear() === this.currentYear && this.value[0]?.getMonth() === month;
          } else {
            const currentDate = new Date(this.currentYear, month, 1);
            const startDate = new Date(this.value[0].getFullYear(), this.value[0].getMonth(), 1);
            const endDate = new Date(this.value[1].getFullYear(), this.value[1].getMonth(), 1);
            return currentDate >= startDate && currentDate <= endDate;
          }
        } else {
          return this.value.getMonth() === month && this.value.getFullYear() === this.currentYear;
        }
      }
      isMonthDisabled(month, year) {
        const yearToCheck = year ?? this.currentYear;
        for (let day = 1; day < this.getDaysCountInMonth(month, yearToCheck) + 1; day++) {
          if (this.isSelectable(day, month, yearToCheck, false)) {
            return false;
          }
        }
        return true;
      }
      isYearDisabled(year) {
        return Array(12).fill(0).every((v2, month) => this.isMonthDisabled(month, year));
      }
      isYearSelected(year) {
        if (this.isComparable()) {
          let value = this.isRangeSelection() ? this.value[0] : this.value;
          return !this.isMultipleSelection() ? value.getFullYear() === year : false;
        }
        return false;
      }
      isDateEquals(value, dateMeta) {
        if (value && T(value))
          return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
        else
          return false;
      }
      isDateBetween(start, end, dateMeta) {
        let between = false;
        if (T(start) && T(end)) {
          let date = this.formatDateMetaToDate(dateMeta);
          return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
        }
        return between;
      }
      isSingleSelection() {
        return this.selectionMode === "single";
      }
      isRangeSelection() {
        return this.selectionMode === "range";
      }
      isMultipleSelection() {
        return this.selectionMode === "multiple";
      }
      isToday(today, day, month, year) {
        return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
      }
      isSelectable(day, month, year, otherMonth) {
        let validMin = true;
        let validMax = true;
        let validDate = true;
        let validDay = true;
        if (otherMonth && !this.selectOtherMonths) {
          return false;
        }
        if (this.minDate) {
          if (this.minDate.getFullYear() > year) {
            validMin = false;
          } else if (this.minDate.getFullYear() === year && this.currentView != "year") {
            if (this.minDate.getMonth() > month) {
              validMin = false;
            } else if (this.minDate.getMonth() === month) {
              if (this.minDate.getDate() > day) {
                validMin = false;
              }
            }
          }
        }
        if (this.maxDate) {
          if (this.maxDate.getFullYear() < year) {
            validMax = false;
          } else if (this.maxDate.getFullYear() === year) {
            if (this.maxDate.getMonth() < month) {
              validMax = false;
            } else if (this.maxDate.getMonth() === month) {
              if (this.maxDate.getDate() < day) {
                validMax = false;
              }
            }
          }
        }
        if (this.disabledDates) {
          validDate = !this.isDateDisabled(day, month, year);
        }
        if (this.disabledDays) {
          validDay = !this.isDayDisabled(day, month, year);
        }
        return validMin && validMax && validDate && validDay;
      }
      isDateDisabled(day, month, year) {
        if (this.disabledDates) {
          for (let disabledDate of this.disabledDates) {
            if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
              return true;
            }
          }
        }
        return false;
      }
      isDayDisabled(day, month, year) {
        if (this.disabledDays) {
          let weekday = new Date(year, month, day);
          let weekdayNumber = weekday.getDay();
          return this.disabledDays.indexOf(weekdayNumber) !== -1;
        }
        return false;
      }
      onInputFocus(event2) {
        this.focus = true;
        if (this.showOnFocus) {
          this.showOverlay();
        }
        this.onFocus.emit(event2);
      }
      onInputClick() {
        if (this.showOnFocus && !this.overlayVisible) {
          this.showOverlay();
        }
      }
      onInputBlur(event2) {
        this.focus = false;
        this.onBlur.emit(event2);
        if (!this.keepInvalid) {
          this.updateInputfield();
        }
        this.onModelTouched();
      }
      onButtonClick(event2, inputfield = this.inputfieldViewChild?.nativeElement) {
        if (this.$disabled()) {
          return;
        }
        if (!this.overlayVisible) {
          inputfield.focus();
          this.showOverlay();
        } else {
          this.hideOverlay();
        }
      }
      clear() {
        this.value = null;
        this.inputFieldValue = null;
        this.writeModelValue(this.value);
        this.onModelChange(this.value);
        this.updateInputfield();
        this.onClear.emit();
      }
      onOverlayClick(event2) {
        this.overlayService.add({
          originalEvent: event2,
          target: this.el.nativeElement
        });
      }
      getMonthName(index) {
        return this.config.getTranslation("monthNames")[index];
      }
      getYear(month) {
        return this.currentView === "month" ? this.currentYear : month.year;
      }
      switchViewButtonDisabled() {
        return this.numberOfMonths > 1 || this.$disabled();
      }
      onPrevButtonClick(event2) {
        this.navigationState = { backward: true, button: true };
        this.navBackward(event2);
      }
      onNextButtonClick(event2) {
        this.navigationState = { backward: false, button: true };
        this.navForward(event2);
      }
      onContainerButtonKeydown(event2) {
        switch (event2.which) {
          //tab
          case 9:
            if (!this.inline) {
              this.trapFocus(event2);
            }
            if (this.inline) {
              const headerElements = z(this.el?.nativeElement, ".p-datepicker-header");
              const element = event2.target;
              if (this.timeOnly) {
                return;
              } else {
                if (element == headerElements.children[headerElements?.children?.length - 1]) {
                  this.initFocusableCell();
                }
              }
            }
            break;
          //escape
          case 27:
            this.inputfieldViewChild?.nativeElement.focus();
            this.overlayVisible = false;
            event2.preventDefault();
            break;
          default:
            break;
        }
      }
      onInputKeydown(event2) {
        this.isKeydown = true;
        if (event2.keyCode === 40 && this.contentViewChild) {
          this.trapFocus(event2);
        } else if (event2.keyCode === 27) {
          if (this.overlayVisible) {
            this.inputfieldViewChild?.nativeElement.focus();
            this.overlayVisible = false;
            event2.preventDefault();
          }
        } else if (event2.keyCode === 13) {
          if (this.overlayVisible) {
            this.overlayVisible = false;
            event2.preventDefault();
          }
        } else if (event2.keyCode === 9 && this.contentViewChild) {
          b(this.contentViewChild.nativeElement).forEach((el) => el.tabIndex = "-1");
          if (this.overlayVisible) {
            this.overlayVisible = false;
          }
        }
      }
      onDateCellKeydown(event2, dateMeta, groupIndex) {
        const cellContent = event2.currentTarget;
        const cell = cellContent.parentElement;
        const currentDate = this.formatDateMetaToDate(dateMeta);
        switch (event2.which) {
          //down arrow
          case 40: {
            cellContent.tabIndex = "-1";
            let cellIndex = Ht(cell);
            let nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
              let focusCell = nextRow.children[cellIndex].children[0];
              if (R(focusCell, "p-disabled")) {
                this.navigationState = { backward: false };
                this.navForward(event2);
              } else {
                nextRow.children[cellIndex].children[0].tabIndex = "0";
                nextRow.children[cellIndex].children[0].focus();
              }
            } else {
              this.navigationState = { backward: false };
              this.navForward(event2);
            }
            event2.preventDefault();
            break;
          }
          //up arrow
          case 38: {
            cellContent.tabIndex = "-1";
            let cellIndex = Ht(cell);
            let prevRow = cell.parentElement.previousElementSibling;
            if (prevRow) {
              let focusCell = prevRow.children[cellIndex].children[0];
              if (R(focusCell, "p-disabled")) {
                this.navigationState = { backward: true };
                this.navBackward(event2);
              } else {
                focusCell.tabIndex = "0";
                focusCell.focus();
              }
            } else {
              this.navigationState = { backward: true };
              this.navBackward(event2);
            }
            event2.preventDefault();
            break;
          }
          //left arrow
          case 37: {
            cellContent.tabIndex = "-1";
            let prevCell = cell.previousElementSibling;
            if (prevCell) {
              let focusCell = prevCell.children[0];
              if (R(focusCell, "p-disabled") || R(focusCell.parentElement, "p-datepicker-weeknumber")) {
                this.navigateToMonth(true, groupIndex);
              } else {
                focusCell.tabIndex = "0";
                focusCell.focus();
              }
            } else {
              this.navigateToMonth(true, groupIndex);
            }
            event2.preventDefault();
            break;
          }
          //right arrow
          case 39: {
            cellContent.tabIndex = "-1";
            let nextCell = cell.nextElementSibling;
            if (nextCell) {
              let focusCell = nextCell.children[0];
              if (R(focusCell, "p-disabled")) {
                this.navigateToMonth(false, groupIndex);
              } else {
                focusCell.tabIndex = "0";
                focusCell.focus();
              }
            } else {
              this.navigateToMonth(false, groupIndex);
            }
            event2.preventDefault();
            break;
          }
          //enter
          //space
          case 13:
          case 32: {
            this.onDateSelect(event2, dateMeta);
            event2.preventDefault();
            break;
          }
          //escape
          case 27: {
            this.inputfieldViewChild?.nativeElement.focus();
            this.overlayVisible = false;
            event2.preventDefault();
            break;
          }
          //tab
          case 9: {
            if (!this.inline) {
              this.trapFocus(event2);
            }
            break;
          }
          // page up
          case 33: {
            cellContent.tabIndex = "-1";
            const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
            const focusKey = this.formatDateKey(dateToFocus);
            this.navigateToMonth(true, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
            event2.preventDefault();
            break;
          }
          // page down
          case 34: {
            cellContent.tabIndex = "-1";
            const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
            const focusKey = this.formatDateKey(dateToFocus);
            this.navigateToMonth(false, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
            event2.preventDefault();
            break;
          }
          //home
          case 36:
            cellContent.tabIndex = "-1";
            const firstDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const firstDayDateKey = this.formatDateKey(firstDayDate);
            const firstDayCell = z(cellContent.offsetParent, `span[data-date='${firstDayDateKey}']:not(.p-disabled):not(.p-ink)`);
            if (firstDayCell) {
              firstDayCell.tabIndex = "0";
              firstDayCell.focus();
            }
            event2.preventDefault();
            break;
          //end
          case 35:
            cellContent.tabIndex = "-1";
            const lastDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            const lastDayDateKey = this.formatDateKey(lastDayDate);
            const lastDayCell = z(cellContent.offsetParent, `span[data-date='${lastDayDateKey}']:not(.p-disabled):not(.p-ink)`);
            if (lastDayDate) {
              lastDayCell.tabIndex = "0";
              lastDayCell.focus();
            }
            event2.preventDefault();
            break;
          default:
            break;
        }
      }
      onMonthCellKeydown(event2, index) {
        const cell = event2.currentTarget;
        switch (event2.which) {
          //arrows
          case 38:
          case 40: {
            cell.tabIndex = "-1";
            var cells = cell.parentElement.children;
            var cellIndex = Ht(cell);
            let nextCell = cells[event2.which === 40 ? cellIndex + 3 : cellIndex - 3];
            if (nextCell) {
              nextCell.tabIndex = "0";
              nextCell.focus();
            }
            event2.preventDefault();
            break;
          }
          //left arrow
          case 37: {
            cell.tabIndex = "-1";
            let prevCell = cell.previousElementSibling;
            if (prevCell) {
              prevCell.tabIndex = "0";
              prevCell.focus();
            } else {
              this.navigationState = { backward: true };
              this.navBackward(event2);
            }
            event2.preventDefault();
            break;
          }
          //right arrow
          case 39: {
            cell.tabIndex = "-1";
            let nextCell = cell.nextElementSibling;
            if (nextCell) {
              nextCell.tabIndex = "0";
              nextCell.focus();
            } else {
              this.navigationState = { backward: false };
              this.navForward(event2);
            }
            event2.preventDefault();
            break;
          }
          //enter
          //space
          case 13:
          case 32: {
            this.onMonthSelect(event2, index);
            event2.preventDefault();
            break;
          }
          //escape
          case 27: {
            this.inputfieldViewChild?.nativeElement.focus();
            this.overlayVisible = false;
            event2.preventDefault();
            break;
          }
          //tab
          case 9: {
            if (!this.inline) {
              this.trapFocus(event2);
            }
            break;
          }
          default:
            break;
        }
      }
      onYearCellKeydown(event2, index) {
        const cell = event2.currentTarget;
        switch (event2.which) {
          //arrows
          case 38:
          case 40: {
            cell.tabIndex = "-1";
            var cells = cell.parentElement.children;
            var cellIndex = Ht(cell);
            let nextCell = cells[event2.which === 40 ? cellIndex + 2 : cellIndex - 2];
            if (nextCell) {
              nextCell.tabIndex = "0";
              nextCell.focus();
            }
            event2.preventDefault();
            break;
          }
          //left arrow
          case 37: {
            cell.tabIndex = "-1";
            let prevCell = cell.previousElementSibling;
            if (prevCell) {
              prevCell.tabIndex = "0";
              prevCell.focus();
            } else {
              this.navigationState = { backward: true };
              this.navBackward(event2);
            }
            event2.preventDefault();
            break;
          }
          //right arrow
          case 39: {
            cell.tabIndex = "-1";
            let nextCell = cell.nextElementSibling;
            if (nextCell) {
              nextCell.tabIndex = "0";
              nextCell.focus();
            } else {
              this.navigationState = { backward: false };
              this.navForward(event2);
            }
            event2.preventDefault();
            break;
          }
          //enter
          //space
          case 13:
          case 32: {
            this.onYearSelect(event2, index);
            event2.preventDefault();
            break;
          }
          //escape
          case 27: {
            this.inputfieldViewChild?.nativeElement.focus();
            this.overlayVisible = false;
            event2.preventDefault();
            break;
          }
          //tab
          case 9: {
            this.trapFocus(event2);
            break;
          }
          default:
            break;
        }
      }
      navigateToMonth(prev, groupIndex, focusKey) {
        if (prev) {
          if (this.numberOfMonths === 1 || groupIndex === 0) {
            this.navigationState = { backward: true };
            this._focusKey = focusKey;
            this.navBackward(event);
          } else {
            let prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
            if (focusKey) {
              const firstDayCell = z(prevMonthContainer, focusKey);
              firstDayCell.tabIndex = "0";
              firstDayCell.focus();
            } else {
              let cells = Y(prevMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
              let focusCell = cells[cells.length - 1];
              focusCell.tabIndex = "0";
              focusCell.focus();
            }
          }
        } else {
          if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
            this.navigationState = { backward: false };
            this._focusKey = focusKey;
            this.navForward(event);
          } else {
            let nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];
            if (focusKey) {
              const firstDayCell = z(nextMonthContainer, focusKey);
              firstDayCell.tabIndex = "0";
              firstDayCell.focus();
            } else {
              let focusCell = z(nextMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
              focusCell.tabIndex = "0";
              focusCell.focus();
            }
          }
        }
      }
      updateFocus() {
        let cell;
        if (this.navigationState) {
          if (this.navigationState.button) {
            this.initFocusableCell();
            if (this.navigationState.backward)
              z(this.contentViewChild.nativeElement, ".p-datepicker-prev-button").focus();
            else
              z(this.contentViewChild.nativeElement, ".p-datepicker-next-button").focus();
          } else {
            if (this.navigationState.backward) {
              let cells;
              if (this.currentView === "month") {
                cells = Y(this.contentViewChild.nativeElement, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
              } else if (this.currentView === "year") {
                cells = Y(this.contentViewChild.nativeElement, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
              } else {
                cells = Y(this.contentViewChild.nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
              }
              if (cells && cells.length > 0) {
                cell = cells[cells.length - 1];
              }
            } else {
              if (this.currentView === "month") {
                cell = z(this.contentViewChild.nativeElement, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
              } else if (this.currentView === "year") {
                cell = z(this.contentViewChild.nativeElement, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
              } else {
                cell = z(this.contentViewChild.nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
              }
            }
            if (cell) {
              cell.tabIndex = "0";
              cell.focus();
            }
          }
          this.navigationState = null;
          this._focusKey = null;
        } else {
          this.initFocusableCell();
        }
      }
      initFocusableCell() {
        const contentEl = this.contentViewChild?.nativeElement;
        let cell;
        if (this.currentView === "month") {
          let cells = Y(contentEl, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
          let selectedCell = z(contentEl, ".p-datepicker-month-view .p-datepicker-month.p-highlight");
          cells.forEach((cell2) => cell2.tabIndex = -1);
          cell = selectedCell || cells[0];
          if (cells.length === 0) {
            let disabledCells = Y(contentEl, '.p-datepicker-month-view .p-datepicker-month.p-disabled[tabindex = "0"]');
            disabledCells.forEach((cell2) => cell2.tabIndex = -1);
          }
        } else if (this.currentView === "year") {
          let cells = Y(contentEl, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
          let selectedCell = z(contentEl, ".p-datepicker-year-view .p-datepicker-year.p-highlight");
          cells.forEach((cell2) => cell2.tabIndex = -1);
          cell = selectedCell || cells[0];
          if (cells.length === 0) {
            let disabledCells = Y(contentEl, '.p-datepicker-year-view .p-datepicker-year.p-disabled[tabindex = "0"]');
            disabledCells.forEach((cell2) => cell2.tabIndex = -1);
          }
        } else {
          cell = z(contentEl, "span.p-highlight");
          if (!cell) {
            let todayCell = z(contentEl, "td.p-datepicker-today span:not(.p-disabled):not(.p-ink)");
            if (todayCell)
              cell = todayCell;
            else
              cell = z(contentEl, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
        }
        if (cell) {
          cell.tabIndex = "0";
          if (!this.preventFocus && (!this.navigationState || !this.navigationState.button)) {
            setTimeout(() => {
              if (!this.$disabled()) {
                cell.focus();
              }
            }, 1);
          }
          this.preventFocus = false;
        }
      }
      trapFocus(event2) {
        let focusableElements = b(this.contentViewChild.nativeElement);
        if (focusableElements && focusableElements.length > 0) {
          if (!focusableElements[0].ownerDocument.activeElement) {
            focusableElements[0].focus();
          } else {
            let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
            if (event2.shiftKey) {
              if (focusedIndex == -1 || focusedIndex === 0) {
                if (this.focusTrap) {
                  focusableElements[focusableElements.length - 1].focus();
                } else {
                  if (focusedIndex === -1)
                    return this.hideOverlay();
                  else if (focusedIndex === 0)
                    return;
                }
              } else {
                focusableElements[focusedIndex - 1].focus();
              }
            } else {
              if (focusedIndex == -1) {
                if (this.timeOnly) {
                  focusableElements[0].focus();
                } else {
                  let spanIndex = 0;
                  for (let i = 0; i < focusableElements.length; i++) {
                    if (focusableElements[i].tagName === "SPAN")
                      spanIndex = i;
                  }
                  focusableElements[spanIndex].focus();
                }
              } else if (focusedIndex === focusableElements.length - 1) {
                if (!this.focusTrap && focusedIndex != -1)
                  return this.hideOverlay();
                focusableElements[0].focus();
              } else {
                focusableElements[focusedIndex + 1].focus();
              }
            }
          }
        }
        event2.preventDefault();
      }
      onMonthDropdownChange(m) {
        this.currentMonth = parseInt(m);
        this.onMonthChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
        this.createMonths(this.currentMonth, this.currentYear);
      }
      onYearDropdownChange(y) {
        this.currentYear = parseInt(y);
        this.onYearChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
        this.createMonths(this.currentMonth, this.currentYear);
      }
      convertTo24Hour(hours, pm) {
        if (this.hourFormat == "12") {
          if (hours === 12) {
            return pm ? 12 : 0;
          } else {
            return pm ? hours + 12 : hours;
          }
        }
        return hours;
      }
      constrainTime(hour, minute, second, pm) {
        let returnTimeTriple = [hour, minute, second];
        let minHoursExceeds12;
        let value = this.value;
        const convertedHour = this.convertTo24Hour(hour, pm);
        const isRange = this.isRangeSelection(), isMultiple = this.isMultipleSelection(), isMultiValue = isRange || isMultiple;
        if (isMultiValue) {
          if (!this.value) {
            this.value = [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()];
          }
          if (isRange) {
            value = this.value[1] || this.value[0];
          }
          if (isMultiple) {
            value = this.value[this.value.length - 1];
          }
        }
        const valueDateString = value ? value.toDateString() : null;
        let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
        let isMaxDate = this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString;
        if (isMinDate) {
          minHoursExceeds12 = this.minDate.getHours() >= 12;
        }
        switch (true) {
          case (isMinDate && minHoursExceeds12 && this.minDate.getHours() === 12 && this.minDate.getHours() > convertedHour):
            returnTimeTriple[0] = 11;
          case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
            returnTimeTriple[1] = this.minDate.getMinutes();
          case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
            returnTimeTriple[2] = this.minDate.getSeconds();
            break;
          case (isMinDate && !minHoursExceeds12 && this.minDate.getHours() - 1 === convertedHour && this.minDate.getHours() > convertedHour):
            returnTimeTriple[0] = 11;
            this.pm = true;
          case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
            returnTimeTriple[1] = this.minDate.getMinutes();
          case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
            returnTimeTriple[2] = this.minDate.getSeconds();
            break;
          case (isMinDate && minHoursExceeds12 && this.minDate.getHours() > convertedHour && convertedHour !== 12):
            this.setCurrentHourPM(this.minDate.getHours());
            returnTimeTriple[0] = this.currentHour;
          case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
            returnTimeTriple[1] = this.minDate.getMinutes();
          case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
            returnTimeTriple[2] = this.minDate.getSeconds();
            break;
          case (isMinDate && this.minDate.getHours() > convertedHour):
            returnTimeTriple[0] = this.minDate.getHours();
          case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
            returnTimeTriple[1] = this.minDate.getMinutes();
          case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
            returnTimeTriple[2] = this.minDate.getSeconds();
            break;
          case (isMaxDate && this.maxDate.getHours() < convertedHour):
            returnTimeTriple[0] = this.maxDate.getHours();
          case (isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() < minute):
            returnTimeTriple[1] = this.maxDate.getMinutes();
          case (isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() === minute && this.maxDate.getSeconds() < second):
            returnTimeTriple[2] = this.maxDate.getSeconds();
            break;
        }
        return returnTimeTriple;
      }
      incrementHour(event2) {
        const prevHour = this.currentHour ?? 0;
        let newHour = (this.currentHour ?? 0) + this.stepHour;
        let newPM = this.pm;
        if (this.hourFormat == "24")
          newHour = newHour >= 24 ? newHour - 24 : newHour;
        else if (this.hourFormat == "12") {
          if (prevHour < 12 && newHour > 11) {
            newPM = !this.pm;
          }
          newHour = newHour >= 13 ? newHour - 12 : newHour;
        }
        this.toggleAMPMIfNotMinDate(newPM);
        [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
        event2.preventDefault();
      }
      toggleAMPMIfNotMinDate(newPM) {
        let value = this.value;
        const valueDateString = value ? value.toDateString() : null;
        let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
        if (isMinDate && this.minDate.getHours() >= 12) {
          this.pm = true;
        } else {
          this.pm = newPM;
        }
      }
      onTimePickerElementMouseDown(event2, type, direction) {
        if (!this.$disabled()) {
          this.repeat(event2, null, type, direction);
          event2.preventDefault();
        }
      }
      onTimePickerElementMouseUp(event2) {
        if (!this.$disabled()) {
          this.clearTimePickerTimer();
          this.updateTime();
        }
      }
      onTimePickerElementMouseLeave() {
        if (!this.$disabled() && this.timePickerTimer) {
          this.clearTimePickerTimer();
          this.updateTime();
        }
      }
      repeat(event2, interval, type, direction) {
        let i = interval || 500;
        this.clearTimePickerTimer();
        this.timePickerTimer = setTimeout(() => {
          this.repeat(event2, 100, type, direction);
          this.cd.markForCheck();
        }, i);
        switch (type) {
          case 0:
            if (direction === 1)
              this.incrementHour(event2);
            else
              this.decrementHour(event2);
            break;
          case 1:
            if (direction === 1)
              this.incrementMinute(event2);
            else
              this.decrementMinute(event2);
            break;
          case 2:
            if (direction === 1)
              this.incrementSecond(event2);
            else
              this.decrementSecond(event2);
            break;
        }
        this.updateInputfield();
      }
      clearTimePickerTimer() {
        if (this.timePickerTimer) {
          clearTimeout(this.timePickerTimer);
          this.timePickerTimer = null;
        }
      }
      decrementHour(event2) {
        let newHour = (this.currentHour ?? 0) - this.stepHour;
        let newPM = this.pm;
        if (this.hourFormat == "24")
          newHour = newHour < 0 ? 24 + newHour : newHour;
        else if (this.hourFormat == "12") {
          if (this.currentHour === 12) {
            newPM = !this.pm;
          }
          newHour = newHour <= 0 ? 12 + newHour : newHour;
        }
        this.toggleAMPMIfNotMinDate(newPM);
        [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
        event2.preventDefault();
      }
      incrementMinute(event2) {
        let newMinute = (this.currentMinute ?? 0) + this.stepMinute;
        newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
        [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, newMinute, this.currentSecond, this.pm);
        event2.preventDefault();
      }
      decrementMinute(event2) {
        let newMinute = (this.currentMinute ?? 0) - this.stepMinute;
        newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
        [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, newMinute, this.currentSecond, this.pm);
        event2.preventDefault();
      }
      incrementSecond(event2) {
        let newSecond = this.currentSecond + this.stepSecond;
        newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
        [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, newSecond, this.pm);
        event2.preventDefault();
      }
      decrementSecond(event2) {
        let newSecond = this.currentSecond - this.stepSecond;
        newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
        [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, newSecond, this.pm);
        event2.preventDefault();
      }
      updateTime() {
        let value = this.value;
        if (this.isRangeSelection()) {
          value = this.value[1] || this.value[0];
        }
        if (this.isMultipleSelection()) {
          value = this.value[this.value.length - 1];
        }
        value = value ? new Date(value.getTime()) : /* @__PURE__ */ new Date();
        if (this.hourFormat == "12") {
          if (this.currentHour === 12)
            value.setHours(this.pm ? 12 : 0);
          else
            value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
        } else {
          value.setHours(this.currentHour);
        }
        value.setMinutes(this.currentMinute);
        value.setSeconds(this.currentSecond);
        if (this.isRangeSelection()) {
          if (this.value[1])
            value = [this.value[0], value];
          else
            value = [value, null];
        }
        if (this.isMultipleSelection()) {
          value = [...this.value.slice(0, -1), value];
        }
        this.updateModel(value);
        this.onSelect.emit(value);
        this.updateInputfield();
      }
      toggleAMPM(event2) {
        const newPM = !this.pm;
        this.pm = newPM;
        [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, this.currentSecond, newPM);
        this.updateTime();
        event2.preventDefault();
      }
      onUserInput(event2) {
        if (!this.isKeydown) {
          return;
        }
        this.isKeydown = false;
        let val = event2.target.value;
        try {
          let value = this.parseValueFromString(val);
          if (this.isValidSelection(value)) {
            this.updateModel(value);
            this.updateUI();
          } else if (this.keepInvalid) {
            this.updateModel(value);
          }
        } catch (err) {
          let value = this.keepInvalid ? val : null;
          this.updateModel(value);
        }
        this.onInput.emit(event2);
      }
      isValidSelection(value) {
        if (this.isSingleSelection()) {
          return this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false);
        }
        let isValid = value.every((v2) => this.isSelectable(v2.getDate(), v2.getMonth(), v2.getFullYear(), false));
        if (isValid && this.isRangeSelection()) {
          isValid = value.length === 1 || value.length > 1 && value[1] >= value[0];
        }
        return isValid;
      }
      parseValueFromString(text) {
        if (!text || text.trim().length === 0) {
          return null;
        }
        let value;
        if (this.isSingleSelection()) {
          value = this.parseDateTime(text);
        } else if (this.isMultipleSelection()) {
          let tokens = text.split(this.multipleSeparator);
          value = [];
          for (let token of tokens) {
            value.push(this.parseDateTime(token.trim()));
          }
        } else if (this.isRangeSelection()) {
          let tokens = text.split(" " + this.rangeSeparator + " ");
          value = [];
          for (let i = 0; i < tokens.length; i++) {
            value[i] = this.parseDateTime(tokens[i].trim());
          }
        }
        return value;
      }
      parseDateTime(text) {
        let date;
        let parts = text.split(" ");
        if (this.timeOnly) {
          date = /* @__PURE__ */ new Date();
          this.populateTime(date, parts[0], parts[1]);
        } else {
          const dateFormat = this.getDateFormat();
          if (this.showTime) {
            let ampm = this.hourFormat == "12" ? parts.pop() : null;
            let timeString = parts.pop();
            date = this.parseDate(parts.join(" "), dateFormat);
            this.populateTime(date, timeString, ampm);
          } else {
            date = this.parseDate(text, dateFormat);
          }
        }
        return date;
      }
      populateTime(value, timeString, ampm) {
        if (this.hourFormat == "12" && !ampm) {
          throw "Invalid Time";
        }
        this.pm = ampm === "PM" || ampm === "pm";
        let time = this.parseTime(timeString);
        value.setHours(time.hour);
        value.setMinutes(time.minute);
        value.setSeconds(time.second);
      }
      isValidDate(date) {
        return T(date) && s(date);
      }
      updateUI() {
        let propValue = this.value;
        if (Array.isArray(propValue)) {
          propValue = propValue.length === 2 ? propValue[1] : propValue[0];
        }
        let val = this.defaultDate && this.isValidDate(this.defaultDate) && !this.value ? this.defaultDate : propValue && this.isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
        this.currentMonth = val.getMonth();
        this.currentYear = val.getFullYear();
        this.createMonths(this.currentMonth, this.currentYear);
        if (this.showTime || this.timeOnly) {
          this.setCurrentHourPM(val.getHours());
          this.currentMinute = val.getMinutes();
          this.currentSecond = val.getSeconds();
        }
      }
      showOverlay() {
        if (!this.overlayVisible) {
          this.updateUI();
          if (!this.touchUI) {
            this.preventFocus = true;
          }
          this.overlayVisible = true;
        }
      }
      hideOverlay() {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        this.clearTimePickerTimer();
        if (this.touchUI) {
          this.disableModality();
        }
        this.cd.markForCheck();
      }
      toggle() {
        if (!this.inline) {
          if (!this.overlayVisible) {
            this.showOverlay();
            this.inputfieldViewChild?.nativeElement.focus();
          } else {
            this.hideOverlay();
          }
        }
      }
      onOverlayAnimationStart(event2) {
        switch (event2.toState) {
          case "visible":
          case "visibleTouchUI":
            if (!this.inline) {
              this.overlay = event2.element;
              this.attrSelector && this.overlay.setAttribute(this.attrSelector, "");
              const styles = !this.inline ? { position: "absolute", top: "0" } : void 0;
              S(this.overlay, styles);
              this.appendOverlay();
              this.updateFocus();
              if (this.autoZIndex) {
                if (this.touchUI)
                  zindexutils.set("modal", this.overlay, this.baseZIndex || this.config.zIndex.modal);
                else
                  zindexutils.set("overlay", this.overlay, this.baseZIndex || this.config.zIndex.overlay);
              }
              this.alignOverlay();
              this.onShow.emit(event2);
            }
            break;
          case "void":
            this.onOverlayHide();
            this.onClose.emit(event2);
            break;
        }
      }
      onOverlayAnimationDone(event2) {
        switch (event2.toState) {
          case "visible":
          case "visibleTouchUI":
            if (!this.inline) {
              this.bindDocumentClickListener();
              this.bindDocumentResizeListener();
              this.bindScrollListener();
            }
            break;
          case "void":
            if (this.autoZIndex) {
              zindexutils.clear(event2.element);
            }
            break;
        }
      }
      appendOverlay() {
        if (this.$appendTo() && this.$appendTo() !== "self") {
          if (this.$appendTo() === "body")
            this.document.body.appendChild(this.overlay);
          else
            ut(this.$appendTo(), this.overlay);
        }
      }
      restoreOverlayAppend() {
        if (this.overlay && this.$appendTo() !== "self") {
          this.el.nativeElement.appendChild(this.overlay);
        }
      }
      alignOverlay() {
        if (this.touchUI) {
          this.enableModality(this.overlay);
        } else if (this.overlay) {
          if (this.view === "date") {
            if (!this.overlay.style.width) {
              this.overlay.style.width = v(this.overlay) + "px";
            }
            if (!this.overlay.style.minWidth) {
              this.overlay.style.minWidth = v(this.inputfieldViewChild?.nativeElement) + "px";
            }
          } else {
            if (!this.overlay.style.width) {
              this.overlay.style.width = v(this.inputfieldViewChild?.nativeElement) + "px";
            }
          }
          if (this.$appendTo() && this.$appendTo() !== "self") {
            D(this.overlay, this.inputfieldViewChild?.nativeElement);
          } else {
            I(this.overlay, this.inputfieldViewChild?.nativeElement);
          }
        }
      }
      enableModality(element) {
        if (!this.mask && this.touchUI) {
          this.mask = this.renderer.createElement("div");
          this.renderer.setStyle(this.mask, "zIndex", String(parseInt(element.style.zIndex) - 1));
          let maskStyleClass = "p-overlay-mask p-datepicker-mask p-datepicker-mask-scrollblocker p-overlay-mask p-overlay-mask-enter";
          W(this.mask, maskStyleClass);
          this.maskClickListener = this.renderer.listen(this.mask, "click", (event2) => {
            this.disableModality();
            this.overlayVisible = false;
          });
          this.renderer.appendChild(this.document.body, this.mask);
          blockBodyScroll();
        }
      }
      disableModality() {
        if (this.mask) {
          W(this.mask, "p-overlay-mask-leave");
          if (!this.animationEndListener) {
            this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyMask.bind(this));
          }
        }
      }
      destroyMask() {
        if (!this.mask) {
          return;
        }
        this.renderer.removeChild(this.document.body, this.mask);
        let bodyChildren = this.document.body.children;
        let hasBlockerMasks;
        for (let i = 0; i < bodyChildren.length; i++) {
          let bodyChild = bodyChildren[i];
          if (R(bodyChild, "p-datepicker-mask-scrollblocker")) {
            hasBlockerMasks = true;
            break;
          }
        }
        if (!hasBlockerMasks) {
          unblockBodyScroll();
        }
        this.unbindAnimationEndListener();
        this.unbindMaskClickListener();
        this.mask = null;
      }
      unbindMaskClickListener() {
        if (this.maskClickListener) {
          this.maskClickListener();
          this.maskClickListener = null;
        }
      }
      unbindAnimationEndListener() {
        if (this.animationEndListener && this.mask) {
          this.animationEndListener();
          this.animationEndListener = null;
        }
      }
      getDateFormat() {
        return this.dateFormat || this.getTranslation("dateFormat");
      }
      getFirstDateOfWeek() {
        return this._firstDayOfWeek || this.getTranslation(TranslationKeys.FIRST_DAY_OF_WEEK);
      }
      // Ported from jquery-ui datepicker formatDate
      formatDate(date, format) {
        if (!date) {
          return "";
        }
        let iFormat;
        const lookAhead = (match) => {
          const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
          if (matches) {
            iFormat++;
          }
          return matches;
        }, formatNumber = (match, value, len) => {
          let num = "" + value;
          if (lookAhead(match)) {
            while (num.length < len) {
              num = "0" + num;
            }
          }
          return num;
        }, formatName = (match, value, shortNames, longNames) => {
          return lookAhead(match) ? longNames[value] : shortNames[value];
        };
        let output = "";
        let literal = false;
        if (date) {
          for (iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
              if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                literal = false;
              } else {
                output += format.charAt(iFormat);
              }
            } else {
              switch (format.charAt(iFormat)) {
                case "d":
                  output += formatNumber("d", date.getDate(), 2);
                  break;
                case "D":
                  output += formatName("D", date.getDay(), this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
                  break;
                case "o":
                  output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                  break;
                case "m":
                  output += formatNumber("m", date.getMonth() + 1, 2);
                  break;
                case "M":
                  output += formatName("M", date.getMonth(), this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
                  break;
                case "y":
                  output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
                  break;
                case "@":
                  output += date.getTime();
                  break;
                case "!":
                  output += date.getTime() * 1e4 + this.ticksTo1970;
                  break;
                case "'":
                  if (lookAhead("'")) {
                    output += "'";
                  } else {
                    literal = true;
                  }
                  break;
                default:
                  output += format.charAt(iFormat);
              }
            }
          }
        }
        return output;
      }
      formatTime(date) {
        if (!date) {
          return "";
        }
        let output = "";
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if (this.hourFormat == "12" && hours > 11 && hours != 12) {
          hours -= 12;
        }
        if (this.hourFormat == "12") {
          output += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
        } else {
          output += hours < 10 ? "0" + hours : hours;
        }
        output += ":";
        output += minutes < 10 ? "0" + minutes : minutes;
        if (this.showSeconds) {
          output += ":";
          output += seconds < 10 ? "0" + seconds : seconds;
        }
        if (this.hourFormat == "12") {
          output += date.getHours() > 11 ? " PM" : " AM";
        }
        return output;
      }
      parseTime(value) {
        let tokens = value.split(":");
        let validTokenLength = this.showSeconds ? 3 : 2;
        if (tokens.length !== validTokenLength) {
          throw "Invalid time";
        }
        let h = parseInt(tokens[0]);
        let m = parseInt(tokens[1]);
        let s3 = this.showSeconds ? parseInt(tokens[2]) : null;
        if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == "12" && h > 12 || this.showSeconds && (isNaN(s3) || s3 > 59)) {
          throw "Invalid time";
        } else {
          if (this.hourFormat == "12") {
            if (h !== 12 && this.pm) {
              h += 12;
            } else if (!this.pm && h === 12) {
              h -= 12;
            }
          }
          return { hour: h, minute: m, second: s3 };
        }
      }
      // Ported from jquery-ui datepicker parseDate
      parseDate(value, format) {
        if (format == null || value == null) {
          throw "Invalid arguments";
        }
        value = typeof value === "object" ? value.toString() : value + "";
        if (value === "") {
          return null;
        }
        let iFormat, dim, extra, iValue = 0, shortYearCutoff = typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(this.shortYearCutoff, 10), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = (match) => {
          let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
          if (matches) {
            iFormat++;
          }
          return matches;
        }, getNumber = (match) => {
          let isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
          if (!num) {
            throw "Missing number at position " + iValue;
          }
          iValue += num[0].length;
          return parseInt(num[0], 10);
        }, getName = (match, shortNames, longNames) => {
          let index = -1;
          let arr = lookAhead(match) ? longNames : shortNames;
          let names = [];
          for (let i = 0; i < arr.length; i++) {
            names.push([i, arr[i]]);
          }
          names.sort((a2, b2) => {
            return -(a2[1].length - b2[1].length);
          });
          for (let i = 0; i < names.length; i++) {
            let name = names[i][1];
            if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
              index = names[i][0];
              iValue += name.length;
              break;
            }
          }
          if (index !== -1) {
            return index + 1;
          } else {
            throw "Unknown name at position " + iValue;
          }
        }, checkLiteral = () => {
          if (value.charAt(iValue) !== format.charAt(iFormat)) {
            throw "Unexpected literal at position " + iValue;
          }
          iValue++;
        };
        if (this.view === "month") {
          day = 1;
        }
        for (iFormat = 0; iFormat < format.length; iFormat++) {
          if (literal) {
            if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
              literal = false;
            } else {
              checkLiteral();
            }
          } else {
            switch (format.charAt(iFormat)) {
              case "d":
                day = getNumber("d");
                break;
              case "D":
                getName("D", this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
                break;
              case "o":
                doy = getNumber("o");
                break;
              case "m":
                month = getNumber("m");
                break;
              case "M":
                month = getName("M", this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
                break;
              case "y":
                year = getNumber("y");
                break;
              case "@":
                date = new Date(getNumber("@"));
                year = date.getFullYear();
                month = date.getMonth() + 1;
                day = date.getDate();
                break;
              case "!":
                date = new Date((getNumber("!") - this.ticksTo1970) / 1e4);
                year = date.getFullYear();
                month = date.getMonth() + 1;
                day = date.getDate();
                break;
              case "'":
                if (lookAhead("'")) {
                  checkLiteral();
                } else {
                  literal = true;
                }
                break;
              default:
                checkLiteral();
            }
          }
        }
        if (iValue < value.length) {
          extra = value.substr(iValue);
          if (!/^\s+/.test(extra)) {
            throw "Extra/unparsed characters found in date: " + extra;
          }
        }
        if (year === -1) {
          year = (/* @__PURE__ */ new Date()).getFullYear();
        } else if (year < 100) {
          year += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
        }
        if (doy > -1) {
          month = 1;
          day = doy;
          do {
            dim = this.getDaysCountInMonth(year, month - 1);
            if (day <= dim) {
              break;
            }
            month++;
            day -= dim;
          } while (true);
        }
        if (this.view === "year") {
          month = month === -1 ? 1 : month;
          day = day === -1 ? 1 : day;
        }
        date = this.daylightSavingAdjust(new Date(year, month - 1, day));
        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
          throw "Invalid date";
        }
        return date;
      }
      daylightSavingAdjust(date) {
        if (!date) {
          return null;
        }
        date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
        return date;
      }
      isValidDateForTimeConstraints(selectedDate) {
        if (this.keepInvalid) {
          return true;
        }
        return (!this.minDate || selectedDate >= this.minDate) && (!this.maxDate || selectedDate <= this.maxDate);
      }
      onTodayButtonClick(event2) {
        const date = /* @__PURE__ */ new Date();
        const dateMeta = {
          day: date.getDate(),
          month: date.getMonth(),
          year: date.getFullYear(),
          otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
          today: true,
          selectable: true
        };
        this.createMonths(date.getMonth(), date.getFullYear());
        this.onDateSelect(event2, dateMeta);
        this.onTodayClick.emit(date);
      }
      onClearButtonClick(event2) {
        this.updateModel(null);
        this.updateInputfield();
        this.hideOverlay();
        this.onClearClick.emit(event2);
      }
      createResponsiveStyle() {
        if (this.numberOfMonths > 1 && this.responsiveOptions) {
          if (!this.responsiveStyleElement) {
            this.responsiveStyleElement = this.renderer.createElement("style");
            this.responsiveStyleElement.type = "text/css";
            this.renderer.appendChild(this.document.body, this.responsiveStyleElement);
          }
          let innerHTML = "";
          if (this.responsiveOptions) {
            let responsiveOptions = [...this.responsiveOptions].filter((o) => !!(o.breakpoint && o.numMonths)).sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, void 0, { numeric: true }));
            for (let i = 0; i < responsiveOptions.length; i++) {
              let { breakpoint, numMonths } = responsiveOptions[i];
              let styles = `
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;
              for (let j = numMonths; j < this.numberOfMonths; j++) {
                styles += `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                display: none !important;
                            }
                        `;
              }
              innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            ${styles}
                        }
                    `;
            }
          }
          this.responsiveStyleElement.innerHTML = innerHTML;
          Kt(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
        }
      }
      destroyResponsiveStyleElement() {
        if (this.responsiveStyleElement) {
          this.responsiveStyleElement.remove();
          this.responsiveStyleElement = null;
        }
      }
      bindDocumentClickListener() {
        if (!this.documentClickListener) {
          this.zone.runOutsideAngular(() => {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
            this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event2) => {
              if (this.isOutsideClicked(event2) && this.overlayVisible) {
                this.zone.run(() => {
                  this.hideOverlay();
                  this.onClickOutside.emit(event2);
                  this.cd.markForCheck();
                });
              }
            });
          });
        }
      }
      unbindDocumentClickListener() {
        if (this.documentClickListener) {
          this.documentClickListener();
          this.documentClickListener = null;
        }
      }
      bindDocumentResizeListener() {
        if (!this.documentResizeListener && !this.touchUI) {
          this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
        }
      }
      unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
          this.documentResizeListener();
          this.documentResizeListener = null;
        }
      }
      bindScrollListener() {
        if (!this.scrollHandler) {
          this.scrollHandler = new ConnectedOverlayScrollHandler(this.el?.nativeElement, () => {
            if (this.overlayVisible) {
              this.hideOverlay();
            }
          });
        }
        this.scrollHandler.bindScrollListener();
      }
      unbindScrollListener() {
        if (this.scrollHandler) {
          this.scrollHandler.unbindScrollListener();
        }
      }
      isOutsideClicked(event2) {
        return !(this.el.nativeElement.isSameNode(event2.target) || this.isNavIconClicked(event2) || this.el.nativeElement.contains(event2.target) || this.overlay && this.overlay.contains(event2.target));
      }
      isNavIconClicked(event2) {
        return R(event2.target, "p-datepicker-prev-button") || R(event2.target, "p-datepicker-prev-icon") || R(event2.target, "p-datepicker-next-button") || R(event2.target, "p-datepicker-next-icon");
      }
      onWindowResize() {
        if (this.overlayVisible && !Yt()) {
          this.hideOverlay();
        }
      }
      onOverlayHide() {
        this.currentView = this.view;
        if (this.mask) {
          this.destroyMask();
        }
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
        this.overlay = null;
      }
      /**
       * @override
       *
       * @see {@link BaseEditableHolder.writeControlValue}
       * Writes the value to the control.
       */
      writeControlValue(value) {
        this.value = value;
        if (this.value && typeof this.value === "string") {
          try {
            this.value = this.parseValueFromString(this.value);
          } catch {
            if (this.keepInvalid) {
              this.value = value;
            }
          }
        }
        this.updateInputfield();
        this.updateUI();
        this.cd.markForCheck();
      }
      ngOnDestroy() {
        if (this.scrollHandler) {
          this.scrollHandler.destroy();
          this.scrollHandler = null;
        }
        if (this.translationSubscription) {
          this.translationSubscription.unsubscribe();
        }
        if (this.overlay && this.autoZIndex) {
          zindexutils.clear(this.overlay);
        }
        this.destroyResponsiveStyleElement();
        this.clearTimePickerTimer();
        this.restoreOverlayAppend();
        this.onOverlayHide();
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _DatePicker, deps: [{ token: NgZone }, { token: OverlayService }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.1.3", type: _DatePicker, isStandalone: true, selector: "p-datePicker, p-datepicker, p-date-picker", inputs: { iconDisplay: { classPropertyName: "iconDisplay", publicName: "iconDisplay", isSignal: false, isRequired: false, transformFunction: null }, styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: false, isRequired: false, transformFunction: null }, inputStyle: { classPropertyName: "inputStyle", publicName: "inputStyle", isSignal: false, isRequired: false, transformFunction: null }, inputId: { classPropertyName: "inputId", publicName: "inputId", isSignal: false, isRequired: false, transformFunction: null }, inputStyleClass: { classPropertyName: "inputStyleClass", publicName: "inputStyleClass", isSignal: false, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: false, isRequired: false, transformFunction: null }, ariaLabelledBy: { classPropertyName: "ariaLabelledBy", publicName: "ariaLabelledBy", isSignal: false, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: false, isRequired: false, transformFunction: null }, iconAriaLabel: { classPropertyName: "iconAriaLabel", publicName: "iconAriaLabel", isSignal: false, isRequired: false, transformFunction: null }, dateFormat: { classPropertyName: "dateFormat", publicName: "dateFormat", isSignal: false, isRequired: false, transformFunction: null }, multipleSeparator: { classPropertyName: "multipleSeparator", publicName: "multipleSeparator", isSignal: false, isRequired: false, transformFunction: null }, rangeSeparator: { classPropertyName: "rangeSeparator", publicName: "rangeSeparator", isSignal: false, isRequired: false, transformFunction: null }, inline: { classPropertyName: "inline", publicName: "inline", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, showOtherMonths: { classPropertyName: "showOtherMonths", publicName: "showOtherMonths", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, selectOtherMonths: { classPropertyName: "selectOtherMonths", publicName: "selectOtherMonths", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, showIcon: { classPropertyName: "showIcon", publicName: "showIcon", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: false, isRequired: false, transformFunction: null }, readonlyInput: { classPropertyName: "readonlyInput", publicName: "readonlyInput", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, shortYearCutoff: { classPropertyName: "shortYearCutoff", publicName: "shortYearCutoff", isSignal: false, isRequired: false, transformFunction: null }, hourFormat: { classPropertyName: "hourFormat", publicName: "hourFormat", isSignal: false, isRequired: false, transformFunction: null }, timeOnly: { classPropertyName: "timeOnly", publicName: "timeOnly", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, stepHour: { classPropertyName: "stepHour", publicName: "stepHour", isSignal: false, isRequired: false, transformFunction: numberAttribute }, stepMinute: { classPropertyName: "stepMinute", publicName: "stepMinute", isSignal: false, isRequired: false, transformFunction: numberAttribute }, stepSecond: { classPropertyName: "stepSecond", publicName: "stepSecond", isSignal: false, isRequired: false, transformFunction: numberAttribute }, showSeconds: { classPropertyName: "showSeconds", publicName: "showSeconds", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, showOnFocus: { classPropertyName: "showOnFocus", publicName: "showOnFocus", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, showWeek: { classPropertyName: "showWeek", publicName: "showWeek", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, startWeekFromFirstDayOfYear: { classPropertyName: "startWeekFromFirstDayOfYear", publicName: "startWeekFromFirstDayOfYear", isSignal: false, isRequired: false, transformFunction: null }, showClear: { classPropertyName: "showClear", publicName: "showClear", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, dataType: { classPropertyName: "dataType", publicName: "dataType", isSignal: false, isRequired: false, transformFunction: null }, selectionMode: { classPropertyName: "selectionMode", publicName: "selectionMode", isSignal: false, isRequired: false, transformFunction: null }, maxDateCount: { classPropertyName: "maxDateCount", publicName: "maxDateCount", isSignal: false, isRequired: false, transformFunction: numberAttribute }, showButtonBar: { classPropertyName: "showButtonBar", publicName: "showButtonBar", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, todayButtonStyleClass: { classPropertyName: "todayButtonStyleClass", publicName: "todayButtonStyleClass", isSignal: false, isRequired: false, transformFunction: null }, clearButtonStyleClass: { classPropertyName: "clearButtonStyleClass", publicName: "clearButtonStyleClass", isSignal: false, isRequired: false, transformFunction: null }, autofocus: { classPropertyName: "autofocus", publicName: "autofocus", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, autoZIndex: { classPropertyName: "autoZIndex", publicName: "autoZIndex", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, baseZIndex: { classPropertyName: "baseZIndex", publicName: "baseZIndex", isSignal: false, isRequired: false, transformFunction: numberAttribute }, panelStyleClass: { classPropertyName: "panelStyleClass", publicName: "panelStyleClass", isSignal: false, isRequired: false, transformFunction: null }, panelStyle: { classPropertyName: "panelStyle", publicName: "panelStyle", isSignal: false, isRequired: false, transformFunction: null }, keepInvalid: { classPropertyName: "keepInvalid", publicName: "keepInvalid", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, hideOnDateTimeSelect: { classPropertyName: "hideOnDateTimeSelect", publicName: "hideOnDateTimeSelect", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, touchUI: { classPropertyName: "touchUI", publicName: "touchUI", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, timeSeparator: { classPropertyName: "timeSeparator", publicName: "timeSeparator", isSignal: false, isRequired: false, transformFunction: null }, focusTrap: { classPropertyName: "focusTrap", publicName: "focusTrap", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, showTransitionOptions: { classPropertyName: "showTransitionOptions", publicName: "showTransitionOptions", isSignal: false, isRequired: false, transformFunction: null }, hideTransitionOptions: { classPropertyName: "hideTransitionOptions", publicName: "hideTransitionOptions", isSignal: false, isRequired: false, transformFunction: null }, tabindex: { classPropertyName: "tabindex", publicName: "tabindex", isSignal: false, isRequired: false, transformFunction: numberAttribute }, minDate: { classPropertyName: "minDate", publicName: "minDate", isSignal: false, isRequired: false, transformFunction: null }, maxDate: { classPropertyName: "maxDate", publicName: "maxDate", isSignal: false, isRequired: false, transformFunction: null }, disabledDates: { classPropertyName: "disabledDates", publicName: "disabledDates", isSignal: false, isRequired: false, transformFunction: null }, disabledDays: { classPropertyName: "disabledDays", publicName: "disabledDays", isSignal: false, isRequired: false, transformFunction: null }, showTime: { classPropertyName: "showTime", publicName: "showTime", isSignal: false, isRequired: false, transformFunction: null }, responsiveOptions: { classPropertyName: "responsiveOptions", publicName: "responsiveOptions", isSignal: false, isRequired: false, transformFunction: null }, numberOfMonths: { classPropertyName: "numberOfMonths", publicName: "numberOfMonths", isSignal: false, isRequired: false, transformFunction: null }, firstDayOfWeek: { classPropertyName: "firstDayOfWeek", publicName: "firstDayOfWeek", isSignal: false, isRequired: false, transformFunction: null }, view: { classPropertyName: "view", publicName: "view", isSignal: false, isRequired: false, transformFunction: null }, defaultDate: { classPropertyName: "defaultDate", publicName: "defaultDate", isSignal: false, isRequired: false, transformFunction: null }, appendTo: { classPropertyName: "appendTo", publicName: "appendTo", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onFocus: "onFocus", onBlur: "onBlur", onClose: "onClose", onSelect: "onSelect", onClear: "onClear", onInput: "onInput", onTodayClick: "onTodayClick", onClearClick: "onClearClick", onMonthChange: "onMonthChange", onYearChange: "onYearChange", onClickOutside: "onClickOutside", onShow: "onShow" }, host: { properties: { "class": "cn(cx('root'), styleClass)", "style": "sx('root')" } }, providers: [DATEPICKER_VALUE_ACCESSOR, DatePickerStyle], queries: [{ propertyName: "dateTemplate", first: true, predicate: ["date"] }, { propertyName: "headerTemplate", first: true, predicate: ["header"] }, { propertyName: "footerTemplate", first: true, predicate: ["footer"] }, { propertyName: "disabledDateTemplate", first: true, predicate: ["disabledDate"] }, { propertyName: "decadeTemplate", first: true, predicate: ["decade"] }, { propertyName: "previousIconTemplate", first: true, predicate: ["previousicon"] }, { propertyName: "nextIconTemplate", first: true, predicate: ["nexticon"] }, { propertyName: "triggerIconTemplate", first: true, predicate: ["triggericon"] }, { propertyName: "clearIconTemplate", first: true, predicate: ["clearicon"] }, { propertyName: "decrementIconTemplate", first: true, predicate: ["decrementicon"] }, { propertyName: "incrementIconTemplate", first: true, predicate: ["incrementicon"] }, { propertyName: "inputIconTemplate", first: true, predicate: ["inputicon"] }, { propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "inputfieldViewChild", first: true, predicate: ["inputfield"], descendants: true }, { propertyName: "content", first: true, predicate: ["contentWrapper"], descendants: true }], usesInheritance: true, ngImport: core_exports, template: `
        <ng-template [ngIf]="!inline">
            <input
                #inputfield
                pInputText
                [pSize]="size()"
                [attr.size]="inputSize()"
                type="text"
                role="combobox"
                [attr.id]="inputId"
                [attr.name]="name()"
                [attr.aria-required]="required()"
                aria-autocomplete="none"
                aria-haspopup="dialog"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? panelId : null"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [value]="inputFieldValue"
                (focus)="onInputFocus($event)"
                (keydown)="onInputKeydown($event)"
                (click)="onInputClick()"
                (blur)="onInputBlur($event)"
                [attr.required]="required() ? '' : undefined"
                [attr.readonly]="readonlyInput ? '' : undefined"
                [attr.disabled]="$disabled() ? '' : undefined"
                (input)="onUserInput($event)"
                [ngStyle]="inputStyle"
                [class]="cn(cx('pcInputText'), inputStyleClass)"
                [attr.placeholder]="placeholder"
                [attr.tabindex]="tabindex"
                [attr.inputmode]="touchUI ? 'off' : null"
                autocomplete="off"
                [pAutoFocus]="autofocus"
                [variant]="$variant()"
                [fluid]="hasFluid"
                [invalid]="invalid()"
            />
            <ng-container *ngIf="showClear && !$disabled() && value != null">
                <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [class]="cx('clearIcon')" (click)="clear()" />
                <span *ngIf="clearIconTemplate || _clearIconTemplate" [class]="cx('clearIcon')" (click)="clear()">
                    <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
                </span>
            </ng-container>
            <button
                type="button"
                [attr.aria-label]="iconButtonAriaLabel"
                aria-haspopup="dialog"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? panelId : null"
                *ngIf="showIcon && iconDisplay === 'button'"
                (click)="onButtonClick($event, inputfield)"
                [class]="cx('dropdown')"
                [disabled]="$disabled()"
                tabindex="0"
            >
                <span *ngIf="icon" [ngClass]="icon"></span>
                <ng-container *ngIf="!icon">
                    <svg data-p-icon="calendar" *ngIf="!triggerIconTemplate && !_triggerIconTemplate" />
                    <ng-template *ngTemplateOutlet="triggerIconTemplate || _triggerIconTemplate"></ng-template>
                </ng-container>
            </button>
            <ng-container *ngIf="iconDisplay === 'input' && showIcon">
                <span [class]="cx('inputIconContainer')">
                    <svg data-p-icon="calendar" (click)="onButtonClick($event)" *ngIf="!inputIconTemplate && !_inputIconTemplate" [class]="cx('inputIcon')" />

                    <ng-container *ngTemplateOutlet="inputIconTemplate || _inputIconTemplate; context: { clickCallBack: onButtonClick.bind(this) }"></ng-container>
                </span>
            </ng-container>
        </ng-template>
        <div
            #contentWrapper
            [attr.id]="panelId"
            [ngStyle]="panelStyle"
            [class]="cn(cx('panel'), panelStyleClass)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [attr.aria-label]="getTranslation('chooseDate')"
            [attr.role]="inline ? null : 'dialog'"
            [attr.aria-modal]="inline ? null : 'true'"
            [@.disabled]="inline === true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationDone($event)"
            (click)="onOverlayClick($event)"
            *ngIf="inline || overlayVisible"
        >
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
            <ng-container *ngIf="!timeOnly">
                <div [class]="cx('calendarContainer')">
                    <div [class]="cx('calendar')" *ngFor="let month of months; let i = index">
                        <div [class]="cx('header')">
                            <p-button
                                rounded
                                variant="text"
                                severity="secondary"
                                (keydown)="onContainerButtonKeydown($event)"
                                [styleClass]="cx('pcPrevButton')"
                                (onClick)="onPrevButtonClick($event)"
                                [ngStyle]="{ visibility: i === 0 ? 'visible' : 'hidden' }"
                                type="button"
                                [ariaLabel]="prevIconAriaLabel"
                            >
                                <ng-template #icon>
                                    <svg data-p-icon="chevron-left" *ngIf="!previousIconTemplate && !_previousIconTemplate" />
                                    <span *ngIf="previousIconTemplate || _previousIconTemplate">
                                        <ng-template *ngTemplateOutlet="previousIconTemplate || _previousIconTemplate"></ng-template>
                                    </span>
                                </ng-template>
                            </p-button>
                            <div [class]="cx('title')">
                                <button
                                    *ngIf="currentView === 'date'"
                                    type="button"
                                    (click)="switchToMonthView($event)"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    [class]="cx('selectMonth')"
                                    [attr.disabled]="switchViewButtonDisabled() ? '' : undefined"
                                    [attr.aria-label]="this.getTranslation('chooseMonth')"
                                    pRipple
                                >
                                    {{ getMonthName(month.month) }}
                                </button>
                                <button
                                    *ngIf="currentView !== 'year'"
                                    type="button"
                                    (click)="switchToYearView($event)"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    [class]="cx('selectYear')"
                                    [attr.disabled]="switchViewButtonDisabled() ? '' : undefined"
                                    [attr.aria-label]="getTranslation('chooseYear')"
                                    pRipple
                                >
                                    {{ getYear(month) }}
                                </button>
                                <span [class]="cx('decade')" *ngIf="currentView === 'year'">
                                    <ng-container *ngIf="!decadeTemplate && !_decadeTemplate">{{ yearPickerValues()[0] }} - {{ yearPickerValues()[yearPickerValues().length - 1] }}</ng-container>
                                    <ng-container *ngTemplateOutlet="decadeTemplate || _decadeTemplate; context: { $implicit: yearPickerValues }"></ng-container>
                                </span>
                            </div>
                            <p-button
                                rounded
                                variant="text"
                                severity="secondary"
                                (keydown)="onContainerButtonKeydown($event)"
                                [styleClass]="cx('pcNextButton')"
                                (onClick)="onNextButtonClick($event)"
                                [ngStyle]="{ visibility: i === months.length - 1 ? 'visible' : 'hidden' }"
                                [ariaLabel]="nextIconAriaLabel"
                            >
                                <ng-template #icon>
                                    <svg data-p-icon="chevron-right" *ngIf="!nextIconTemplate && !_nextIconTemplate" />
                                    <ng-container *ngIf="nextIconTemplate || _nextIconTemplate">
                                        <ng-template *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate"></ng-template>
                                    </ng-container>
                                </ng-template>
                            </p-button>
                        </div>
                        <table [class]="cx('dayView')" role="grid" *ngIf="currentView === 'date'">
                            <thead>
                                <tr>
                                    <th *ngIf="showWeek" [class]="cx('weekHeader')">
                                        <span>{{ getTranslation('weekHeader') }}</span>
                                    </th>
                                    <th [class]="cx('weekDayCell')" scope="col" *ngFor="let weekDay of weekDays; let begin = first; let end = last">
                                        <span [class]="cx('weekDay')">{{ weekDay }}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let week of month.dates; let j = index">
                                    <td *ngIf="showWeek" [class]="cx('weekNumber')">
                                        <span [class]="cx('weekLabelContainer')">
                                            {{ month.weekNumbers[j] }}
                                        </span>
                                    </td>
                                    <td *ngFor="let date of week" [attr.aria-label]="date.day" [class]="cx('dayCell', { date })">
                                        <ng-container *ngIf="date.otherMonth ? showOtherMonths : true">
                                            <span [ngClass]="dayClass(date)" (click)="onDateSelect($event, date)" draggable="false" [attr.data-date]="formatDateKey(formatDateMetaToDate(date))" (keydown)="onDateCellKeydown($event, date, i)" pRipple>
                                                <ng-container *ngIf="!dateTemplate && !_dateTemplate && (date.selectable || (!disabledDateTemplate && !_disabledDateTemplate))">{{ date.day }}</ng-container>
                                                <ng-container *ngIf="date.selectable || (!disabledDateTemplate && !_disabledDateTemplate)">
                                                    <ng-container *ngTemplateOutlet="dateTemplate || _dateTemplate; context: { $implicit: date }"></ng-container>
                                                </ng-container>
                                                <ng-container *ngIf="!date.selectable">
                                                    <ng-container *ngTemplateOutlet="disabledDateTemplate || _disabledDateTemplate; context: { $implicit: date }"></ng-container>
                                                </ng-container>
                                            </span>
                                            <div *ngIf="isSelected(date)" class="p-hidden-accessible" aria-live="polite">
                                                {{ date.day }}
                                            </div>
                                        </ng-container>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div [class]="cx('monthView')" *ngIf="currentView === 'month'">
                    <span *ngFor="let m of monthPickerValues(); let i = index" (click)="onMonthSelect($event, i)" (keydown)="onMonthCellKeydown($event, i)" [class]="cx('month', { month: m, index: i })" pRipple>
                        {{ m }}
                        <div *ngIf="isMonthSelected(i)" class="p-hidden-accessible" aria-live="polite">
                            {{ m }}
                        </div>
                    </span>
                </div>
                <div [class]="cx('yearView')" *ngIf="currentView === 'year'">
                    <span *ngFor="let y of yearPickerValues()" (click)="onYearSelect($event, y)" (keydown)="onYearCellKeydown($event, y)" [class]="cx('year', { year: y })" pRipple>
                        {{ y }}
                        <div *ngIf="isYearSelected(y)" class="p-hidden-accessible" aria-live="polite">
                            {{ y }}
                        </div>
                    </span>
                </div>
            </ng-container>
            <div [class]="cx('timePicker')" *ngIf="(showTime || timeOnly) && currentView === 'date'">
                <div [class]="cx('hourPicker')">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementHour($event)"
                        (keydown.space)="incrementHour($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 0, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextHour')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span><ng-container *ngIf="currentHour < 10">0</ng-container>{{ currentHour }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementHour($event)"
                        (keydown.space)="decrementHour($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 0, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevHour')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div class="p-datepicker-separator">
                    <span>{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('minutePicker')">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementMinute($event)"
                        (keydown.space)="incrementMinute($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 1, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextMinute')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span><ng-container *ngIf="currentMinute < 10">0</ng-container>{{ currentMinute }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementMinute($event)"
                        (keydown.space)="decrementMinute($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 1, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevMinute')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div [class]="cx('separator')" *ngIf="showSeconds">
                    <span>{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('secondPicker')" *ngIf="showSeconds">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementSecond($event)"
                        (keydown.space)="incrementSecond($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 2, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextSecond')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span><ng-container *ngIf="currentSecond < 10">0</ng-container>{{ currentSecond }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementSecond($event)"
                        (keydown.space)="decrementSecond($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 2, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevSecond')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div [class]="cx('separator')" *ngIf="hourFormat == '12'">
                    <span>{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('ampmPicker')" *ngIf="hourFormat == '12'">
                    <p-button
                        text
                        rounded
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (onClick)="toggleAMPM($event)"
                        (keydown.enter)="toggleAMPM($event)"
                        [attr.aria-label]="getTranslation('am')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span>{{ pm ? 'PM' : 'AM' }}</span>
                    <p-button
                        text
                        rounded
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (click)="toggleAMPM($event)"
                        (keydown.enter)="toggleAMPM($event)"
                        [attr.aria-label]="getTranslation('pm')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
            </div>
            <div [class]="cx('buttonbar')" *ngIf="showButtonBar">
                <p-button
                    size="small"
                    [styleClass]="cx('pcTodayButton')"
                    [label]="getTranslation('today')"
                    (keydown)="onContainerButtonKeydown($event)"
                    (onClick)="onTodayButtonClick($event)"
                    [ngClass]="todayButtonStyleClass"
                    severity="secondary"
                    variant="text"
                    size="small"
                />
                <p-button
                    size="small"
                    [styleClass]="cx('pcClearButton')"
                    [label]="getTranslation('clear')"
                    (keydown)="onContainerButtonKeydown($event)"
                    (onClick)="onClearButtonClick($event)"
                    [ngClass]="clearButtonStyleClass"
                    severity="secondary"
                    variant="text"
                    size="small"
                />
            </div>
            <ng-content select="p-footer"></ng-content>
            <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "buttonProps", "autofocus", "fluid"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "directive", type: Ripple, selector: "[pRipple]" }, { kind: "component", type: ChevronLeftIcon, selector: '[data-p-icon="chevron-left"]' }, { kind: "component", type: ChevronRightIcon, selector: '[data-p-icon="chevron-right"]' }, { kind: "component", type: ChevronUpIcon, selector: '[data-p-icon="chevron-up"]' }, { kind: "component", type: ChevronDownIcon, selector: '[data-p-icon="chevron-down"]' }, { kind: "component", type: TimesIcon, selector: '[data-p-icon="times"]' }, { kind: "component", type: CalendarIcon, selector: '[data-p-icon="calendar"]' }, { kind: "directive", type: AutoFocus, selector: "[pAutoFocus]", inputs: ["pAutoFocus"] }, { kind: "directive", type: InputText, selector: "[pInputText]", inputs: ["pSize", "variant", "fluid", "invalid"] }, { kind: "ngmodule", type: SharedModule }], animations: [
        trigger("overlayAnimation", [
          state("visibleTouchUI", style({
            transform: "translate(-50%,-50%)",
            opacity: 1
          })),
          transition("void => visible", [style({ opacity: 0, transform: "scaleY(0.8)" }), animate("{{showTransitionParams}}", style({ opacity: 1, transform: "*" }))]),
          transition("visible => void", [animate("{{hideTransitionParams}}", style({ opacity: 0 }))]),
          transition("void => visibleTouchUI", [style({ opacity: 0, transform: "translate3d(-50%, -40%, 0) scale(0.9)" }), animate("{{showTransitionParams}}")]),
          transition("visibleTouchUI => void", [
            animate("{{hideTransitionParams}}", style({
              opacity: 0,
              transform: "translate3d(-50%, -40%, 0) scale(0.9)"
            }))
          ])
        ])
      ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: DatePicker, decorators: [{
      type: Component,
      args: [{
        selector: "p-datePicker, p-datepicker, p-date-picker",
        standalone: true,
        imports: [CommonModule, Button, Ripple, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon, AutoFocus, InputText, SharedModule],
        template: `
        <ng-template [ngIf]="!inline">
            <input
                #inputfield
                pInputText
                [pSize]="size()"
                [attr.size]="inputSize()"
                type="text"
                role="combobox"
                [attr.id]="inputId"
                [attr.name]="name()"
                [attr.aria-required]="required()"
                aria-autocomplete="none"
                aria-haspopup="dialog"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? panelId : null"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [value]="inputFieldValue"
                (focus)="onInputFocus($event)"
                (keydown)="onInputKeydown($event)"
                (click)="onInputClick()"
                (blur)="onInputBlur($event)"
                [attr.required]="required() ? '' : undefined"
                [attr.readonly]="readonlyInput ? '' : undefined"
                [attr.disabled]="$disabled() ? '' : undefined"
                (input)="onUserInput($event)"
                [ngStyle]="inputStyle"
                [class]="cn(cx('pcInputText'), inputStyleClass)"
                [attr.placeholder]="placeholder"
                [attr.tabindex]="tabindex"
                [attr.inputmode]="touchUI ? 'off' : null"
                autocomplete="off"
                [pAutoFocus]="autofocus"
                [variant]="$variant()"
                [fluid]="hasFluid"
                [invalid]="invalid()"
            />
            <ng-container *ngIf="showClear && !$disabled() && value != null">
                <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [class]="cx('clearIcon')" (click)="clear()" />
                <span *ngIf="clearIconTemplate || _clearIconTemplate" [class]="cx('clearIcon')" (click)="clear()">
                    <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
                </span>
            </ng-container>
            <button
                type="button"
                [attr.aria-label]="iconButtonAriaLabel"
                aria-haspopup="dialog"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? panelId : null"
                *ngIf="showIcon && iconDisplay === 'button'"
                (click)="onButtonClick($event, inputfield)"
                [class]="cx('dropdown')"
                [disabled]="$disabled()"
                tabindex="0"
            >
                <span *ngIf="icon" [ngClass]="icon"></span>
                <ng-container *ngIf="!icon">
                    <svg data-p-icon="calendar" *ngIf="!triggerIconTemplate && !_triggerIconTemplate" />
                    <ng-template *ngTemplateOutlet="triggerIconTemplate || _triggerIconTemplate"></ng-template>
                </ng-container>
            </button>
            <ng-container *ngIf="iconDisplay === 'input' && showIcon">
                <span [class]="cx('inputIconContainer')">
                    <svg data-p-icon="calendar" (click)="onButtonClick($event)" *ngIf="!inputIconTemplate && !_inputIconTemplate" [class]="cx('inputIcon')" />

                    <ng-container *ngTemplateOutlet="inputIconTemplate || _inputIconTemplate; context: { clickCallBack: onButtonClick.bind(this) }"></ng-container>
                </span>
            </ng-container>
        </ng-template>
        <div
            #contentWrapper
            [attr.id]="panelId"
            [ngStyle]="panelStyle"
            [class]="cn(cx('panel'), panelStyleClass)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [attr.aria-label]="getTranslation('chooseDate')"
            [attr.role]="inline ? null : 'dialog'"
            [attr.aria-modal]="inline ? null : 'true'"
            [@.disabled]="inline === true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationDone($event)"
            (click)="onOverlayClick($event)"
            *ngIf="inline || overlayVisible"
        >
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
            <ng-container *ngIf="!timeOnly">
                <div [class]="cx('calendarContainer')">
                    <div [class]="cx('calendar')" *ngFor="let month of months; let i = index">
                        <div [class]="cx('header')">
                            <p-button
                                rounded
                                variant="text"
                                severity="secondary"
                                (keydown)="onContainerButtonKeydown($event)"
                                [styleClass]="cx('pcPrevButton')"
                                (onClick)="onPrevButtonClick($event)"
                                [ngStyle]="{ visibility: i === 0 ? 'visible' : 'hidden' }"
                                type="button"
                                [ariaLabel]="prevIconAriaLabel"
                            >
                                <ng-template #icon>
                                    <svg data-p-icon="chevron-left" *ngIf="!previousIconTemplate && !_previousIconTemplate" />
                                    <span *ngIf="previousIconTemplate || _previousIconTemplate">
                                        <ng-template *ngTemplateOutlet="previousIconTemplate || _previousIconTemplate"></ng-template>
                                    </span>
                                </ng-template>
                            </p-button>
                            <div [class]="cx('title')">
                                <button
                                    *ngIf="currentView === 'date'"
                                    type="button"
                                    (click)="switchToMonthView($event)"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    [class]="cx('selectMonth')"
                                    [attr.disabled]="switchViewButtonDisabled() ? '' : undefined"
                                    [attr.aria-label]="this.getTranslation('chooseMonth')"
                                    pRipple
                                >
                                    {{ getMonthName(month.month) }}
                                </button>
                                <button
                                    *ngIf="currentView !== 'year'"
                                    type="button"
                                    (click)="switchToYearView($event)"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    [class]="cx('selectYear')"
                                    [attr.disabled]="switchViewButtonDisabled() ? '' : undefined"
                                    [attr.aria-label]="getTranslation('chooseYear')"
                                    pRipple
                                >
                                    {{ getYear(month) }}
                                </button>
                                <span [class]="cx('decade')" *ngIf="currentView === 'year'">
                                    <ng-container *ngIf="!decadeTemplate && !_decadeTemplate">{{ yearPickerValues()[0] }} - {{ yearPickerValues()[yearPickerValues().length - 1] }}</ng-container>
                                    <ng-container *ngTemplateOutlet="decadeTemplate || _decadeTemplate; context: { $implicit: yearPickerValues }"></ng-container>
                                </span>
                            </div>
                            <p-button
                                rounded
                                variant="text"
                                severity="secondary"
                                (keydown)="onContainerButtonKeydown($event)"
                                [styleClass]="cx('pcNextButton')"
                                (onClick)="onNextButtonClick($event)"
                                [ngStyle]="{ visibility: i === months.length - 1 ? 'visible' : 'hidden' }"
                                [ariaLabel]="nextIconAriaLabel"
                            >
                                <ng-template #icon>
                                    <svg data-p-icon="chevron-right" *ngIf="!nextIconTemplate && !_nextIconTemplate" />
                                    <ng-container *ngIf="nextIconTemplate || _nextIconTemplate">
                                        <ng-template *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate"></ng-template>
                                    </ng-container>
                                </ng-template>
                            </p-button>
                        </div>
                        <table [class]="cx('dayView')" role="grid" *ngIf="currentView === 'date'">
                            <thead>
                                <tr>
                                    <th *ngIf="showWeek" [class]="cx('weekHeader')">
                                        <span>{{ getTranslation('weekHeader') }}</span>
                                    </th>
                                    <th [class]="cx('weekDayCell')" scope="col" *ngFor="let weekDay of weekDays; let begin = first; let end = last">
                                        <span [class]="cx('weekDay')">{{ weekDay }}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let week of month.dates; let j = index">
                                    <td *ngIf="showWeek" [class]="cx('weekNumber')">
                                        <span [class]="cx('weekLabelContainer')">
                                            {{ month.weekNumbers[j] }}
                                        </span>
                                    </td>
                                    <td *ngFor="let date of week" [attr.aria-label]="date.day" [class]="cx('dayCell', { date })">
                                        <ng-container *ngIf="date.otherMonth ? showOtherMonths : true">
                                            <span [ngClass]="dayClass(date)" (click)="onDateSelect($event, date)" draggable="false" [attr.data-date]="formatDateKey(formatDateMetaToDate(date))" (keydown)="onDateCellKeydown($event, date, i)" pRipple>
                                                <ng-container *ngIf="!dateTemplate && !_dateTemplate && (date.selectable || (!disabledDateTemplate && !_disabledDateTemplate))">{{ date.day }}</ng-container>
                                                <ng-container *ngIf="date.selectable || (!disabledDateTemplate && !_disabledDateTemplate)">
                                                    <ng-container *ngTemplateOutlet="dateTemplate || _dateTemplate; context: { $implicit: date }"></ng-container>
                                                </ng-container>
                                                <ng-container *ngIf="!date.selectable">
                                                    <ng-container *ngTemplateOutlet="disabledDateTemplate || _disabledDateTemplate; context: { $implicit: date }"></ng-container>
                                                </ng-container>
                                            </span>
                                            <div *ngIf="isSelected(date)" class="p-hidden-accessible" aria-live="polite">
                                                {{ date.day }}
                                            </div>
                                        </ng-container>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div [class]="cx('monthView')" *ngIf="currentView === 'month'">
                    <span *ngFor="let m of monthPickerValues(); let i = index" (click)="onMonthSelect($event, i)" (keydown)="onMonthCellKeydown($event, i)" [class]="cx('month', { month: m, index: i })" pRipple>
                        {{ m }}
                        <div *ngIf="isMonthSelected(i)" class="p-hidden-accessible" aria-live="polite">
                            {{ m }}
                        </div>
                    </span>
                </div>
                <div [class]="cx('yearView')" *ngIf="currentView === 'year'">
                    <span *ngFor="let y of yearPickerValues()" (click)="onYearSelect($event, y)" (keydown)="onYearCellKeydown($event, y)" [class]="cx('year', { year: y })" pRipple>
                        {{ y }}
                        <div *ngIf="isYearSelected(y)" class="p-hidden-accessible" aria-live="polite">
                            {{ y }}
                        </div>
                    </span>
                </div>
            </ng-container>
            <div [class]="cx('timePicker')" *ngIf="(showTime || timeOnly) && currentView === 'date'">
                <div [class]="cx('hourPicker')">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementHour($event)"
                        (keydown.space)="incrementHour($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 0, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextHour')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span><ng-container *ngIf="currentHour < 10">0</ng-container>{{ currentHour }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementHour($event)"
                        (keydown.space)="decrementHour($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 0, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevHour')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div class="p-datepicker-separator">
                    <span>{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('minutePicker')">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementMinute($event)"
                        (keydown.space)="incrementMinute($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 1, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextMinute')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span><ng-container *ngIf="currentMinute < 10">0</ng-container>{{ currentMinute }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementMinute($event)"
                        (keydown.space)="decrementMinute($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 1, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevMinute')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div [class]="cx('separator')" *ngIf="showSeconds">
                    <span>{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('secondPicker')" *ngIf="showSeconds">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementSecond($event)"
                        (keydown.space)="incrementSecond($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 2, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextSecond')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span><ng-container *ngIf="currentSecond < 10">0</ng-container>{{ currentSecond }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementSecond($event)"
                        (keydown.space)="decrementSecond($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 2, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevSecond')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div [class]="cx('separator')" *ngIf="hourFormat == '12'">
                    <span>{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('ampmPicker')" *ngIf="hourFormat == '12'">
                    <p-button
                        text
                        rounded
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (onClick)="toggleAMPM($event)"
                        (keydown.enter)="toggleAMPM($event)"
                        [attr.aria-label]="getTranslation('am')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span>{{ pm ? 'PM' : 'AM' }}</span>
                    <p-button
                        text
                        rounded
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (click)="toggleAMPM($event)"
                        (keydown.enter)="toggleAMPM($event)"
                        [attr.aria-label]="getTranslation('pm')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
            </div>
            <div [class]="cx('buttonbar')" *ngIf="showButtonBar">
                <p-button
                    size="small"
                    [styleClass]="cx('pcTodayButton')"
                    [label]="getTranslation('today')"
                    (keydown)="onContainerButtonKeydown($event)"
                    (onClick)="onTodayButtonClick($event)"
                    [ngClass]="todayButtonStyleClass"
                    severity="secondary"
                    variant="text"
                    size="small"
                />
                <p-button
                    size="small"
                    [styleClass]="cx('pcClearButton')"
                    [label]="getTranslation('clear')"
                    (keydown)="onContainerButtonKeydown($event)"
                    (onClick)="onClearButtonClick($event)"
                    [ngClass]="clearButtonStyleClass"
                    severity="secondary"
                    variant="text"
                    size="small"
                />
            </div>
            <ng-content select="p-footer"></ng-content>
            <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
        </div>
    `,
        animations: [
          trigger("overlayAnimation", [
            state("visibleTouchUI", style({
              transform: "translate(-50%,-50%)",
              opacity: 1
            })),
            transition("void => visible", [style({ opacity: 0, transform: "scaleY(0.8)" }), animate("{{showTransitionParams}}", style({ opacity: 1, transform: "*" }))]),
            transition("visible => void", [animate("{{hideTransitionParams}}", style({ opacity: 0 }))]),
            transition("void => visibleTouchUI", [style({ opacity: 0, transform: "translate3d(-50%, -40%, 0) scale(0.9)" }), animate("{{showTransitionParams}}")]),
            transition("visibleTouchUI => void", [
              animate("{{hideTransitionParams}}", style({
                opacity: 0,
                transform: "translate3d(-50%, -40%, 0) scale(0.9)"
              }))
            ])
          ])
        ],
        providers: [DATEPICKER_VALUE_ACCESSOR, DatePickerStyle],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        host: {
          "[class]": "cn(cx('root'), styleClass)",
          "[style]": "sx('root')"
        }
      }]
    }], ctorParameters: () => [{ type: NgZone }, { type: OverlayService }], propDecorators: { iconDisplay: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], inputStyle: [{
      type: Input
    }], inputId: [{
      type: Input
    }], inputStyleClass: [{
      type: Input
    }], placeholder: [{
      type: Input
    }], ariaLabelledBy: [{
      type: Input
    }], ariaLabel: [{
      type: Input
    }], iconAriaLabel: [{
      type: Input
    }], dateFormat: [{
      type: Input
    }], multipleSeparator: [{
      type: Input
    }], rangeSeparator: [{
      type: Input
    }], inline: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showOtherMonths: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], selectOtherMonths: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showIcon: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], icon: [{
      type: Input
    }], readonlyInput: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], shortYearCutoff: [{
      type: Input
    }], hourFormat: [{
      type: Input
    }], timeOnly: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], stepHour: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], stepMinute: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], stepSecond: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], showSeconds: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showOnFocus: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showWeek: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], startWeekFromFirstDayOfYear: [{
      type: Input
    }], showClear: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], dataType: [{
      type: Input
    }], selectionMode: [{
      type: Input
    }], maxDateCount: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], showButtonBar: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], todayButtonStyleClass: [{
      type: Input
    }], clearButtonStyleClass: [{
      type: Input
    }], autofocus: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], autoZIndex: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], baseZIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], panelStyleClass: [{
      type: Input
    }], panelStyle: [{
      type: Input
    }], keepInvalid: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], hideOnDateTimeSelect: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], touchUI: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], timeSeparator: [{
      type: Input
    }], focusTrap: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showTransitionOptions: [{
      type: Input
    }], hideTransitionOptions: [{
      type: Input
    }], tabindex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], minDate: [{
      type: Input
    }], maxDate: [{
      type: Input
    }], disabledDates: [{
      type: Input
    }], disabledDays: [{
      type: Input
    }], showTime: [{
      type: Input
    }], responsiveOptions: [{
      type: Input
    }], numberOfMonths: [{
      type: Input
    }], firstDayOfWeek: [{
      type: Input
    }], view: [{
      type: Input
    }], defaultDate: [{
      type: Input
    }], onFocus: [{
      type: Output
    }], onBlur: [{
      type: Output
    }], onClose: [{
      type: Output
    }], onSelect: [{
      type: Output
    }], onClear: [{
      type: Output
    }], onInput: [{
      type: Output
    }], onTodayClick: [{
      type: Output
    }], onClearClick: [{
      type: Output
    }], onMonthChange: [{
      type: Output
    }], onYearChange: [{
      type: Output
    }], onClickOutside: [{
      type: Output
    }], onShow: [{
      type: Output
    }], inputfieldViewChild: [{
      type: ViewChild,
      args: ["inputfield", { static: false }]
    }], content: [{
      type: ViewChild,
      args: ["contentWrapper", { static: false }]
    }], dateTemplate: [{
      type: ContentChild,
      args: ["date", { descendants: false }]
    }], headerTemplate: [{
      type: ContentChild,
      args: ["header", { descendants: false }]
    }], footerTemplate: [{
      type: ContentChild,
      args: ["footer", { descendants: false }]
    }], disabledDateTemplate: [{
      type: ContentChild,
      args: ["disabledDate", { descendants: false }]
    }], decadeTemplate: [{
      type: ContentChild,
      args: ["decade", { descendants: false }]
    }], previousIconTemplate: [{
      type: ContentChild,
      args: ["previousicon", { descendants: false }]
    }], nextIconTemplate: [{
      type: ContentChild,
      args: ["nexticon", { descendants: false }]
    }], triggerIconTemplate: [{
      type: ContentChild,
      args: ["triggericon", { descendants: false }]
    }], clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", { descendants: false }]
    }], decrementIconTemplate: [{
      type: ContentChild,
      args: ["decrementicon", { descendants: false }]
    }], incrementIconTemplate: [{
      type: ContentChild,
      args: ["incrementicon", { descendants: false }]
    }], inputIconTemplate: [{
      type: ContentChild,
      args: ["inputicon", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    DatePickerModule = class _DatePickerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _DatePickerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _DatePickerModule, imports: [DatePicker, SharedModule], exports: [DatePicker, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _DatePickerModule, imports: [DatePicker, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: DatePickerModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [DatePicker, SharedModule],
        exports: [DatePicker, SharedModule]
      }]
    }] });
  }
});

// src/app/features/ui-interface/forms/form-pickers/form-pickers.component.ts
var FormPickersComponent;
var init_form_pickers_component3 = __esm({
  "src/app/features/ui-interface/forms/form-pickers/form-pickers.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_form_pickers_component();
    init_form_pickers_component2();
    init_core();
    init_common();
    init_ngx_bootstrap_datepicker();
    init_core_index();
    init_primeng_colorpicker();
    init_forms();
    init_primeng_datepicker();
    FormPickersComponent = class FormPickersComponent2 {
      common;
      date;
      time;
      bsInlineValue = /* @__PURE__ */ new Date();
      bsInlineRangeValue;
      color;
      maxDate = /* @__PURE__ */ new Date();
      datePickerValue = new Date(2020, 7);
      dateRangePickerValue;
      range1 = new Date(2020, 5);
      range2 = new Date(2020, 8);
      minMode = "month";
      selectedYear;
      datepicker;
      bsConfig;
      constructor(common) {
        this.common = common;
        this.selectedYear = new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1);
        this.bsConfig = {
          minMode: "year",
          dateInputFormat: "YYYY"
          // Display only the year in the input
        };
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
      }
      ngOnInit() {
        this.dateRangePickerValue = [this.range1, this.range2];
        this.bsConfig = Object.assign({}, {
          minMode: this.minMode
        });
      }
      static ctorParameters = () => [
        { type: CommonService }
      ];
      static propDecorators = {
        datepicker: [{ type: ViewChild, args: [BsDatepickerDirective, { static: false }] }]
      };
    };
    FormPickersComponent = __decorate([
      Component({
        selector: "app-form-pickers",
        template: form_pickers_component_default,
        imports: [CommonModule, ColorPickerModule, FormsModule, BsDatepickerModule, DatePickerModule],
        styles: [form_pickers_component_default2]
      })
    ], FormPickersComponent);
  }
});

// src/app/features/ui-interface/forms/form-pickers/form-pickers.component.spec.ts
var require_form_pickers_component_spec = __commonJS({
  "src/app/features/ui-interface/forms/form-pickers/form-pickers.component.spec.ts"(exports) {
    init_testing();
    init_form_pickers_component3();
    describe("FormPickersComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [FormPickersComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(FormPickersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_form_pickers_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-forms-form-pickers-form-pickers.component.spec.js.map
