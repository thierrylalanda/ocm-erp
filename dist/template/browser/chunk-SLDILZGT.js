import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/base-ui/accordions/accordions.component.ts
var AccordionsComponent = class _AccordionsComponent {
  static \u0275fac = function AccordionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccordionsComponent, selectors: [["app-accordions"]], decls: 971, vars: 0, consts: [[1, ""], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "accordionExample", 1, "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [1, "text-muted"], ["id", "accordionFlushExample", 1, "accordion", "accordion-flush"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne", 1, "accordion-button"], ["id", "flush-collapseOne", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse", "show"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseTwo", "aria-expanded", "false", "aria-controls", "flush-collapseTwo", 1, "accordion-button", "collapsed"], ["id", "flush-collapseTwo", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseThree", "aria-expanded", "false", "aria-controls", "flush-collapseThree", 1, "accordion-button", "collapsed"], ["id", "flush-collapseThree", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["id", "BorderedaccordionExample", 1, "accordion", "accordion-bordered"], ["id", "BorderedheadingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#BorderedcollapseOne", "aria-expanded", "true", "aria-controls", "BorderedcollapseOne", 1, "accordion-button"], ["id", "BorderedcollapseOne", "aria-labelledby", "BorderedheadingOne", "data-bs-parent", "#BorderedaccordionExample", 1, "accordion-collapse", "collapse", "show"], ["id", "BorderedheadingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#BorderedcollapseTwo", "aria-expanded", "false", "aria-controls", "BorderedcollapseTwo", 1, "accordion-button", "collapsed"], ["id", "BorderedcollapseTwo", "aria-labelledby", "BorderedheadingTwo", "data-bs-parent", "#BorderedaccordionExample", 1, "accordion-collapse", "collapse"], ["id", "BorderedheadingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#BorderedcollapseThree", "aria-expanded", "false", "aria-controls", "BorderedcollapseThree", 1, "accordion-button", "collapsed"], ["id", "BorderedcollapseThree", "aria-labelledby", "BorderedheadingThree", "data-bs-parent", "#BorderedaccordionExample", 1, "accordion-collapse", "collapse"], ["id", "CustomIconaccordionExample", 1, "accordion", "accordion-bordered", "accordion-custom-icon", "accordion-arrow-none"], ["id", "CustomIconheadingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#CustomIconcollapseOne", "aria-expanded", "true", "aria-controls", "CustomIconcollapseOne", 1, "accordion-button"], [1, "ti", "ti-plus", "accordion-icon", "accordion-icon-on"], [1, "ti", "ti-minus", "accordion-icon", "accordion-icon-off"], ["id", "CustomIconcollapseOne", "aria-labelledby", "CustomIconheadingOne", "data-bs-parent", "#CustomIconaccordionExample", 1, "accordion-collapse", "collapse", "show"], ["id", "CustomIconheadingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#CustomIconcollapseTwo", "aria-expanded", "false", "aria-controls", "CustomIconcollapseTwo", 1, "accordion-button", "collapsed"], [1, "ti", "ti-circle-plus", "accordion-icon", "accordion-icon-on"], [1, "ti", "ti-circle-minus", "accordion-icon", "accordion-icon-off"], ["id", "CustomIconcollapseTwo", "aria-labelledby", "CustomIconheadingTwo", "data-bs-parent", "#CustomIconaccordionExample", 1, "accordion-collapse", "collapse"], ["id", "CustomIconheadingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#CustomIconcollapseThree", "aria-expanded", "false", "aria-controls", "CustomIconcollapseThree", 1, "accordion-button", "collapsed"], [1, "ti", "ti-square-plus", "accordion-icon", "accordion-icon-on"], [1, "ti", "ti-square-minus", "accordion-icon", "accordion-icon-off"], ["id", "CustomIconcollapseThree", "aria-labelledby", "CustomIconheadingThree", "data-bs-parent", "#CustomIconaccordionExample", 1, "accordion-collapse", "collapse"], [1, "card", "card-h-100"], ["id", "accordionPanelsStayOpenExample", 1, "accordion"], ["id", "panelsStayOpen-headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseOne", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseOne", 1, "accordion-button"], ["id", "panelsStayOpen-collapseOne", "aria-labelledby", "panelsStayOpen-headingOne", 1, "accordion-collapse", "collapse", "show"], ["id", "panelsStayOpen-headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseTwo", "aria-expanded", "false", "aria-controls", "panelsStayOpen-collapseTwo", 1, "accordion-button", "collapsed"], ["id", "panelsStayOpen-collapseTwo", "aria-labelledby", "panelsStayOpen-headingTwo", 1, "accordion-collapse", "collapse"], ["id", "panelsStayOpen-headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseThree", "aria-expanded", "false", "aria-controls", "panelsStayOpen-collapseThree", 1, "accordion-button", "collapsed"], ["id", "panelsStayOpen-collapseThree", "aria-labelledby", "panelsStayOpen-headingThree", 1, "accordion-collapse", "collapse"], ["id", "withoutarrowaccordionExample", 1, "accordion", "accordion-arrow-none"], ["id", "withoutarrowheadingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#withoutarrowcollapseOne", "aria-expanded", "true", "aria-controls", "withoutarrowcollapseOne", 1, "accordion-button"], ["id", "withoutarrowcollapseOne", "aria-labelledby", "withoutarrowheadingOne", "data-bs-parent", "#withoutarrowaccordionExample", 1, "accordion-collapse", "collapse", "show"], ["id", "withoutarrowheadingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#withoutarrowcollapseTwo", "aria-expanded", "false", "aria-controls", "withoutarrowcollapseTwo", 1, "accordion-button", "collapsed"], ["id", "withoutarrowcollapseTwo", "aria-labelledby", "withoutarrowheadingTwo", "data-bs-parent", "#withoutarrowaccordionExample", 1, "accordion-collapse", "collapse"], ["id", "withoutarrowheadingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#withoutarrowcollapseThree", "aria-expanded", "false", "aria-controls", "withoutarrowcollapseThree", 1, "accordion-button", "collapsed"], ["id", "withoutarrowcollapseThree", "aria-labelledby", "withoutarrowheadingThree", "data-bs-parent", "#withoutarrowaccordionExample", 1, "accordion-collapse", "collapse"], ["id", "accordionPrimaryExample", 1, "accordion", "accordion-primary"], ["id", "headingPrimaryOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapsePrimaryOne", "aria-expanded", "true", "aria-controls", "collapsePrimaryOne", 1, "accordion-button"], ["id", "collapsePrimaryOne", "aria-labelledby", "headingPrimaryOne", "data-bs-parent", "#accordionPrimaryExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingPrimaryTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapsePrimaryTwo", "aria-expanded", "false", "aria-controls", "collapsePrimaryTwo", 1, "accordion-button", "collapsed"], ["id", "collapsePrimaryTwo", "aria-labelledby", "headingPrimaryTwo", "data-bs-parent", "#accordionPrimaryExample", 1, "accordion-collapse", "collapse"], ["id", "headingPrimaryThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapsePrimaryThree", "aria-expanded", "false", "aria-controls", "collapsePrimaryThree", 1, "accordion-button", "collapsed"], ["id", "collapsePrimaryThree", "aria-labelledby", "headingPrimaryThree", "data-bs-parent", "#accordionPrimaryExample", 1, "accordion-collapse", "collapse"], ["id", "accordionSecondaryExample", 1, "accordion", "accordion-secondary"], ["id", "headingSecondaryOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSecondaryOne", "aria-expanded", "true", "aria-controls", "collapseSecondaryOne", 1, "accordion-button"], ["id", "collapseSecondaryOne", "aria-labelledby", "headingSecondaryOne", "data-bs-parent", "#accordionSecondaryExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingSecondaryTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSecondaryTwo", "aria-expanded", "false", "aria-controls", "collapseSecondaryTwo", 1, "accordion-button", "collapsed"], ["id", "collapseSecondaryTwo", "aria-labelledby", "headingSecondaryTwo", "data-bs-parent", "#accordionSecondaryExample", 1, "accordion-collapse", "collapse"], ["id", "headingSecondaryThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSecondaryThree", "aria-expanded", "false", "aria-controls", "collapseSecondaryThree", 1, "accordion-button", "collapsed"], ["id", "collapseSecondaryThree", "aria-labelledby", "headingSecondaryThree", "data-bs-parent", "#accordionSecondaryExample", 1, "accordion-collapse", "collapse"], ["id", "accordionPrimarySolidExample", 1, "accordion", "accordion-solid-primary"], ["id", "headingPrimarySolidOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapsePrimarySolidOne", "aria-expanded", "true", "aria-controls", "collapsePrimarySolidOne", 1, "accordion-button"], ["id", "collapsePrimarySolidOne", "aria-labelledby", "headingPrimarySolidOne", "data-bs-parent", "#accordionPrimarySolidExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingPrimarySolidTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapsePrimarySolidTwo", "aria-expanded", "false", "aria-controls", "collapsePrimarySolidTwo", 1, "accordion-button", "collapsed"], ["id", "collapsePrimarySolidTwo", "aria-labelledby", "headingPrimarySolidTwo", "data-bs-parent", "#accordionPrimarySolidExample", 1, "accordion-collapse", "collapse"], ["id", "headingPrimarySolidThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapsePrimarySolidThree", "aria-expanded", "false", "aria-controls", "collapsePrimarySolidThree", 1, "accordion-button", "collapsed"], ["id", "collapsePrimarySolidThree", "aria-labelledby", "headingPrimarySolidThree", "data-bs-parent", "#accordionPrimarySolidExample", 1, "accordion-collapse", "collapse"], ["id", "accordionSecondarySolidExample", 1, "accordion", "accordion-solid-secondary"], ["id", "headingSecondarySolidOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSecondarySolidOne", "aria-expanded", "true", "aria-controls", "collapseSecondarySolidOne", 1, "accordion-button"], ["id", "collapseSecondarySolidOne", "aria-labelledby", "headingSecondarySolidOne", "data-bs-parent", "#accordionSecondarySolidExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingSecondarySolidTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSecondarySolidTwo", "aria-expanded", "false", "aria-controls", "collapseSecondarySolidTwo", 1, "accordion-button", "collapsed"], ["id", "collapseSecondarySolidTwo", "aria-labelledby", "headingSecondarySolidTwo", "data-bs-parent", "#accordionSecondarySolidExample", 1, "accordion-collapse", "collapse"], ["id", "headingSecondarySolidThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSecondarySolidThree", "aria-expanded", "false", "aria-controls", "collapseSecondarySolidThree", 1, "accordion-button", "collapsed"], ["id", "collapseSecondarySolidThree", "aria-labelledby", "headingSecondarySolidThree", "data-bs-parent", "#accordionSecondarySolidExample", 1, "accordion-collapse", "collapse"], ["id", "accordionWarningSolidExample", 1, "accordion", "accordion-solid-warning"], ["id", "headingWarningSolidOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseWarningSolidOne", "aria-expanded", "true", "aria-controls", "collapseWarningSolidOne", 1, "accordion-button"], ["id", "collapseWarningSolidOne", "aria-labelledby", "headingWarningSolidOne", "data-bs-parent", "#accordionWarningSolidExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingWarningSolidTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseWarningSolidTwo", "aria-expanded", "false", "aria-controls", "collapseWarningSolidTwo", 1, "accordion-button", "collapsed"], ["id", "collapseWarningSolidTwo", "aria-labelledby", "headingWarningSolidTwo", "data-bs-parent", "#accordionWarningSolidExample", 1, "accordion-collapse", "collapse"], ["id", "headingWarningSolidThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseWarningSolidThree", "aria-expanded", "false", "aria-controls", "collapseWarningSolidThree", 1, "accordion-button", "collapsed"], ["id", "collapseWarningSolidThree", "aria-labelledby", "headingWarningSolidThree", "data-bs-parent", "#accordionWarningSolidExample", 1, "accordion-collapse", "collapse"], ["id", "accordionInfoSolidExample", 1, "accordion", "accordion-solid-info"], ["id", "headingInfoSolidOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseInfoSolidOne", "aria-expanded", "true", "aria-controls", "collapseInfoSolidOne", 1, "accordion-button"], ["id", "collapseInfoSolidOne", "aria-labelledby", "headingInfoSolidOne", "data-bs-parent", "#accordionInfoSolidExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingInfoSolidTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseInfoSolidTwo", "aria-expanded", "false", "aria-controls", "collapseInfoSolidTwo", 1, "accordion-button", "collapsed"], ["id", "collapseInfoSolidTwo", "aria-labelledby", "headingInfoSolidTwo", "data-bs-parent", "#accordionInfoSolidExample", 1, "accordion-collapse", "collapse"], ["id", "headingInfoSolidThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseInfoSolidThree", "aria-expanded", "false", "aria-controls", "collapseInfoSolidThree", 1, "accordion-button", "collapsed"], ["id", "collapseInfoSolidThree", "aria-labelledby", "headingInfoSolidThree", "data-bs-parent", "#accordionInfoSolidExample", 1, "accordion-collapse", "collapse"], ["id", "accordionSuccessSolidExample", 1, "accordion", "accordion-solid-success"], ["id", "headingSuccessSolidOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSuccessSolidOne", "aria-expanded", "true", "aria-controls", "collapseSuccessSolidOne", 1, "accordion-button"], ["id", "collapseSuccessSolidOne", "aria-labelledby", "headingSuccessSolidOne", "data-bs-parent", "#accordionSuccessSolidExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingSuccessSolidTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSuccessSolidTwo", "aria-expanded", "false", "aria-controls", "collapseSuccessSolidTwo", 1, "accordion-button", "collapsed"], ["id", "collapseSuccessSolidTwo", "aria-labelledby", "headingSuccessSolidTwo", "data-bs-parent", "#accordionSuccessSolidTwo", 1, "accordion-collapse", "collapse"], ["id", "headingSuccessSolidThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSuccessSolidThree", "aria-expanded", "false", "aria-controls", "collapseSuccessSolidThree", 1, "accordion-button", "collapsed"], ["id", "collapseSuccessSolidThree", "aria-labelledby", "headingSuccessSolidThree", "data-bs-parent", "#accordionSuccessSolidThree", 1, "accordion-collapse", "collapse"], ["id", "accordionDangerSolidExample", 1, "accordion", "accordion-solid-danger"], ["id", "headingDangerSolidOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseDangerSolidOne", "aria-expanded", "true", "aria-controls", "collapseDangerSolidOne", 1, "accordion-button"], ["id", "collapseDangerSolidOne", "aria-labelledby", "headingDangerSolidOne", "data-bs-parent", "#accordionDangerSolidExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingDangerSolidTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseDangerSolidTwo", "aria-expanded", "false", "aria-controls", "collapseDangerSolidTwo", 1, "accordion-button", "collapsed"], ["id", "collapseDangerSolidTwo", "aria-labelledby", "headingDangerSolidTwo", "data-bs-parent", "#accordionDangerSolidExample", 1, "accordion-collapse", "collapse"], ["id", "headingDangerSolidThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseDangerSolidThree", "aria-expanded", "false", "aria-controls", "collapseDangerSolidThree", 1, "accordion-button", "collapsed"], ["id", "collapseDangerSolidThree", "aria-labelledby", "headingDangerSolidThree", "data-bs-parent", "#accordionDangerSolidExample", 1, "accordion-collapse", "collapse"], ["id", "accordionprimaryborderExample", 1, "accordion", "accordion-border-primary", "accordions-items-seperate"], ["id", "headingborderprimaryOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#primaryBorderOne", "aria-expanded", "true", "aria-controls", "primaryBorderOne", 1, "accordion-button"], ["id", "primaryBorderOne", "aria-labelledby", "headingborderprimaryOne", "data-bs-parent", "#accordionprimaryborderExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingborderprimaryTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#primaryBorderTwo", "aria-expanded", "false", "aria-controls", "primaryBorderTwo", 1, "accordion-button", "collapsed"], ["id", "primaryBorderTwo", "aria-labelledby", "headingborderprimaryTwo", "data-bs-parent", "#accordionprimaryborderExample", 1, "accordion-collapse", "collapse"], ["id", "headingborderprimaryThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#primaryBorderThree", "aria-expanded", "false", "aria-controls", "primaryBorderThree", 1, "accordion-button", "collapsed"], ["id", "primaryBorderThree", "aria-labelledby", "headingborderprimaryThree", "data-bs-parent", "#accordionprimaryborderExample", 1, "accordion-collapse", "collapse"], ["id", "accordioninfoborderExample", 1, "accordion", "accordion-border-secondary", "accordions-items-seperate"], ["id", "headingborderinfoOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#infoBorderOne", "aria-expanded", "true", "aria-controls", "infoBorderOne", 1, "accordion-button"], ["id", "infoBorderOne", "aria-labelledby", "headingborderinfoOne", "data-bs-parent", "#accordioninfoborderExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingborderinfoTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#infoBorderTwo", "aria-expanded", "false", "aria-controls", "infoBorderTwo", 1, "accordion-button", "collapsed"], ["id", "infoBorderTwo", "aria-labelledby", "headingborderinfoTwo", "data-bs-parent", "#accordioninfoborderExample", 1, "accordion-collapse", "collapse"], ["id", "headingborderinfoThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#infoBorderThree", "aria-expanded", "false", "aria-controls", "infoBorderThree", 1, "accordion-button", "collapsed"], ["id", "infoBorderThree", "aria-labelledby", "headingborderinfoThree", "data-bs-parent", "#accordioninfoborderExample", 1, "accordion-collapse", "collapse"], ["id", "accordionsuccessborderExample", 1, "accordion", "accordion-border-success", "accordions-items-seperate"], ["id", "headingbordersuccessOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#successBorderOne", "aria-expanded", "true", "aria-controls", "successBorderOne", 1, "accordion-button"], ["id", "successBorderOne", "aria-labelledby", "headingbordersuccessOne", "data-bs-parent", "#accordionsuccessborderExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingbordersuccessTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#successBorderTwo", "aria-expanded", "false", "aria-controls", "successBorderTwo", 1, "accordion-button", "collapsed"], ["id", "successBorderTwo", "aria-labelledby", "headingbordersuccessTwo", "data-bs-parent", "#accordionsuccessborderExample", 1, "accordion-collapse", "collapse"], ["id", "headingbordersuccessThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#successBorderThree", "aria-expanded", "false", "aria-controls", "successBorderThree", 1, "accordion-button", "collapsed"], ["id", "successBorderThree", "aria-labelledby", "headingbordersuccessThree", "data-bs-parent", "#accordionsuccessborderExample", 1, "accordion-collapse", "collapse"], ["id", "accordioninfoborderExampleTwo", 1, "accordion", "accordion-border-info", "accordions-items-seperate"], ["id", "headingborderinfoTwos", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#infoBorderOnes", "aria-expanded", "true", "aria-controls", "infoBorderOnes", 1, "accordion-button"], ["id", "infoBorderOnes", "aria-labelledby", "headingborderinfoTwos", "data-bs-parent", "#accordioninfoborderExampleTwo", 1, "accordion-collapse", "collapse", "show"], ["id", "headingborderinfoTwoo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#infoBorderTwos", "aria-expanded", "false", "aria-controls", "infoBorderTwos", 1, "accordion-button", "collapsed"], ["id", "infoBorderTwos", "aria-labelledby", "headingborderinfoTwoo", "data-bs-parent", "#accordioninfoborderExample2", 1, "accordion-collapse", "collapse"], ["id", "headingborderinfoThrees", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#infoBorderThrees", "aria-expanded", "false", "aria-controls", "infoBorderThrees", 1, "accordion-button", "collapsed"], ["id", "infoBorderThrees", "aria-labelledby", "headingborderinfoThrees", "data-bs-parent", "#accordioninfoborderExample2", 1, "accordion-collapse", "collapse"], ["id", "accordionwarningborderExample", 1, "accordion", "accordion-border-warning", "accordions-items-seperate"], ["id", "headingborderwarningOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#warningBorderOne", "aria-expanded", "true", "aria-controls", "warningBorderOne", 1, "accordion-button"], ["id", "warningBorderOne", "aria-labelledby", "headingborderwarningOne", "data-bs-parent", "#accordionwarningborderExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingborderwarningTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#warningBorderTwo", "aria-expanded", "false", "aria-controls", "warningBorderTwo", 1, "accordion-button", "collapsed"], ["id", "warningBorderTwo", "aria-labelledby", "headingborderwarningTwo", "data-bs-parent", "#accordionwarningborderExample", 1, "accordion-collapse", "collapse"], ["id", "headingborderwarningThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#warningBorderThree", "aria-expanded", "false", "aria-controls", "warningBorderThree", 1, "accordion-button", "collapsed"], ["id", "warningBorderThree", "aria-labelledby", "headingborderwarningThree", "data-bs-parent", "#accordionwarningborderExample", 1, "accordion-collapse", "collapse"], ["id", "accordiondangerborderExample", 1, "accordion", "accordion-border-danger", "accordions-items-seperate"], ["id", "headingborderdangerOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#dangerBorderOne", "aria-expanded", "true", "aria-controls", "dangerBorderOne", 1, "accordion-button"], ["id", "dangerBorderOne", "aria-labelledby", "headingborderdangerOne", "data-bs-parent", "#accordiondangerborderExample", 1, "accordion-collapse", "collapse", "show"], ["id", "headingborderdangerTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#dangerBorderTwo", "aria-expanded", "false", "aria-controls", "dangerBorderTwo", 1, "accordion-button", "collapsed"], ["id", "dangerBorderTwo", "aria-labelledby", "headingborderdangerTwo", "data-bs-parent", "#accordiondangerborderExample", 1, "accordion-collapse", "collapse"], ["id", "headingborderdangerThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#dangerBorderThree", "aria-expanded", "false", "aria-controls", "dangerBorderThree", 1, "accordion-button", "collapsed"], ["id", "dangerBorderThree", "aria-labelledby", "headingborderdangerThree", "data-bs-parent", "#accordiondangerborderExample", 1, "accordion-collapse", "collapse"]], template: function AccordionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Accordions");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "li", 6)(11, "a", 7);
      \u0275\u0275text(12, "Base UI");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "li", 8);
      \u0275\u0275text(14, "Accordions");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "h5", 13);
      \u0275\u0275text(20, "Default Accordion");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "h2", 17)(25, "button", 18);
      \u0275\u0275text(26, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "div", 19)(28, "div", 20)(29, "strong");
      \u0275\u0275text(30, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(31, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(32, "code");
      \u0275\u0275text(33, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(34, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(35, "div", 16)(36, "h2", 21)(37, "button", 22);
      \u0275\u0275text(38, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(39, "div", 23)(40, "div", 20)(41, "strong");
      \u0275\u0275text(42, "This is the second item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(43, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(44, "code");
      \u0275\u0275text(45, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(46, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(47, "div", 16)(48, "h2", 24)(49, "button", 25);
      \u0275\u0275text(50, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(51, "div", 26)(52, "div", 20)(53, "strong");
      \u0275\u0275text(54, "This is the third item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(55, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(56, "code");
      \u0275\u0275text(57, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(58, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(59, "div", 10)(60, "div", 11)(61, "div", 12)(62, "h5", 13);
      \u0275\u0275text(63, "Flush Accordions");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(64, "div", 14)(65, "p", 27);
      \u0275\u0275text(66, "Add ");
      \u0275\u0275domElementStart(67, "code");
      \u0275\u0275text(68, ".accordion-flush");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(69, " to remove the default ");
      \u0275\u0275domElementStart(70, "code");
      \u0275\u0275text(71, "background-color");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(72, ", some borders, and some rounded corners to render accordions edge-to-edge with their parent container.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "div", 28)(74, "div", 16)(75, "h2", 29)(76, "button", 30);
      \u0275\u0275text(77, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(78, "div", 31)(79, "div", 20);
      \u0275\u0275text(80, "Placeholder content for this accordion, which is intended to demonstrate the ");
      \u0275\u0275domElementStart(81, "code");
      \u0275\u0275text(82, ".accordion-flush");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(83, " class. This is the first item's accordion body.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(84, "div", 16)(85, "h2", 29)(86, "button", 32);
      \u0275\u0275text(87, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(88, "div", 33)(89, "div", 20);
      \u0275\u0275text(90, " Placeholder content for this accordion, which is intended to demonstrate the ");
      \u0275\u0275domElementStart(91, "code");
      \u0275\u0275text(92, ".accordion-flush");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(93, " class. This is the second item's accordion body. Let's imagine this being filled with some actual content. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(94, "div", 16)(95, "h2", 29)(96, "button", 34);
      \u0275\u0275text(97, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(98, "div", 35)(99, "div", 20);
      \u0275\u0275text(100, " Placeholder content for this accordion, which is intended to demonstrate the ");
      \u0275\u0275domElementStart(101, "code");
      \u0275\u0275text(102, ".accordion-flush");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(103, " class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application. ");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(104, "div", 9)(105, "div", 10)(106, "div", 11)(107, "div", 12)(108, "h5", 13);
      \u0275\u0275text(109, "Bordered Accordions");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(110, "div", 14)(111, "p", 27);
      \u0275\u0275text(112, "Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use ");
      \u0275\u0275domElementStart(113, "code");
      \u0275\u0275text(114, ".accordion");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(115, " as a wrapper.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(116, "div", 36)(117, "div", 16)(118, "h2", 37)(119, "button", 38);
      \u0275\u0275text(120, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(121, "div", 39)(122, "div", 20)(123, "strong");
      \u0275\u0275text(124, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(125, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(126, "code");
      \u0275\u0275text(127, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(128, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(129, "div", 16)(130, "h2", 40)(131, "button", 41);
      \u0275\u0275text(132, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(133, "div", 42)(134, "div", 20)(135, "strong");
      \u0275\u0275text(136, "This is the second item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(137, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(138, "code");
      \u0275\u0275text(139, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(140, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(141, "div", 16)(142, "h2", 43)(143, "button", 44);
      \u0275\u0275text(144, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(145, "div", 45)(146, "div", 20)(147, "strong");
      \u0275\u0275text(148, "This is the third item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(149, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(150, "code");
      \u0275\u0275text(151, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(152, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(153, "div", 10)(154, "div", 11)(155, "div", 12)(156, "h5", 13);
      \u0275\u0275text(157, "Custom Icon Accordion");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(158, "div", 14)(159, "p", 27);
      \u0275\u0275text(160, "Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use ");
      \u0275\u0275domElementStart(161, "code");
      \u0275\u0275text(162, ".accordion");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(163, " as a wrapper.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(164, "div", 46)(165, "div", 16)(166, "h2", 47)(167, "button", 48);
      \u0275\u0275text(168, " Accordion item with tabler icons ");
      \u0275\u0275domElement(169, "i", 49)(170, "i", 50);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(171, "div", 51)(172, "div", 20)(173, "strong");
      \u0275\u0275text(174, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(175, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(176, "code");
      \u0275\u0275text(177, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(178, ", though the transition does limit overflow.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(179, "div", 16)(180, "h2", 52)(181, "button", 53);
      \u0275\u0275text(182, " Accordion item with tabler icons ");
      \u0275\u0275domElement(183, "i", 54)(184, "i", 55);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(185, "div", 56)(186, "div", 20)(187, "strong");
      \u0275\u0275text(188, "This is the second item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(189, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(190, "code");
      \u0275\u0275text(191, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(192, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(193, "div", 16)(194, "h2", 57)(195, "button", 58);
      \u0275\u0275text(196, " Accordion item with tabler icons ");
      \u0275\u0275domElement(197, "i", 59)(198, "i", 60);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(199, "div", 61)(200, "div", 20)(201, "strong");
      \u0275\u0275text(202, "This is the second item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(203, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(204, "code");
      \u0275\u0275text(205, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(206, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(207, "div", 10)(208, "div", 62)(209, "div", 12)(210, "h5", 13);
      \u0275\u0275text(211, "Always Open Accordions");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(212, "div", 14)(213, "p", 27);
      \u0275\u0275text(214, "Omit the ");
      \u0275\u0275domElementStart(215, "code");
      \u0275\u0275text(216, "data-bs-parent");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(217, " attribute on each ");
      \u0275\u0275domElementStart(218, "code");
      \u0275\u0275text(219, ".accordion-collapse");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(220, " to make accordion items stay open when another item is opened.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(221, "div", 63)(222, "div", 16)(223, "h2", 64)(224, "button", 65);
      \u0275\u0275text(225, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(226, "div", 66)(227, "div", 20)(228, "strong");
      \u0275\u0275text(229, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(230, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(231, "code");
      \u0275\u0275text(232, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(233, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(234, "div", 16)(235, "h2", 67)(236, "button", 68);
      \u0275\u0275text(237, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(238, "div", 69)(239, "div", 20)(240, "strong");
      \u0275\u0275text(241, "This is the second item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(242, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(243, "code");
      \u0275\u0275text(244, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(245, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(246, "div", 16)(247, "h2", 70)(248, "button", 71);
      \u0275\u0275text(249, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(250, "div", 72)(251, "div", 20)(252, "strong");
      \u0275\u0275text(253, "This is the third item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(254, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(255, "code");
      \u0275\u0275text(256, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(257, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(258, "div", 10)(259, "div", 11)(260, "div", 12)(261, "h5", 13);
      \u0275\u0275text(262, "Accordion Without Arrow");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(263, "div", 14)(264, "p", 27);
      \u0275\u0275text(265, " Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use ");
      \u0275\u0275domElementStart(266, "code");
      \u0275\u0275text(267, ".accordion");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(268, " as a wrapper. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(269, "div", 73)(270, "div", 16)(271, "h2", 74)(272, "button", 75);
      \u0275\u0275text(273, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(274, "div", 76)(275, "div", 20)(276, "strong");
      \u0275\u0275text(277, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(278, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(279, "code");
      \u0275\u0275text(280, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(281, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(282, "div", 16)(283, "h2", 77)(284, "button", 78);
      \u0275\u0275text(285, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(286, "div", 79)(287, "div", 20)(288, "strong");
      \u0275\u0275text(289, "This is the second item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(290, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(291, "code");
      \u0275\u0275text(292, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(293, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(294, "div", 16)(295, "h2", 80)(296, "button", 81);
      \u0275\u0275text(297, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(298, "div", 82)(299, "div", 20)(300, "strong");
      \u0275\u0275text(301, "This is the third item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(302, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(303, "code");
      \u0275\u0275text(304, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(305, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(306, "div", 9)(307, "div", 10)(308, "div", 11)(309, "div", 12)(310, "h5", 13);
      \u0275\u0275text(311, "Primary - Light Color");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(312, "div", 14)(313, "div", 83)(314, "div", 16)(315, "h2", 84)(316, "button", 85);
      \u0275\u0275text(317, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(318, "div", 86)(319, "div", 20)(320, "strong");
      \u0275\u0275text(321, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(322, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(323, "code");
      \u0275\u0275text(324, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(325, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(326, "div", 16)(327, "h2", 87)(328, "button", 88);
      \u0275\u0275text(329, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(330, "div", 89)(331, "div", 20)(332, "strong");
      \u0275\u0275text(333, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(334, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(335, "code");
      \u0275\u0275text(336, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(337, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(338, "div", 16)(339, "h2", 90)(340, "button", 91);
      \u0275\u0275text(341, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(342, "div", 92)(343, "div", 20)(344, "strong");
      \u0275\u0275text(345, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(346, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(347, "code");
      \u0275\u0275text(348, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(349, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(350, "div", 10)(351, "div", 11)(352, "div", 12)(353, "h5", 13);
      \u0275\u0275text(354, "Secondary - Light Color");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(355, "div", 14)(356, "div", 93)(357, "div", 16)(358, "h2", 94)(359, "button", 95);
      \u0275\u0275text(360, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(361, "div", 96)(362, "div", 20)(363, "strong");
      \u0275\u0275text(364, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(365, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(366, "code");
      \u0275\u0275text(367, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(368, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(369, "div", 16)(370, "h2", 97)(371, "button", 98);
      \u0275\u0275text(372, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(373, "div", 99)(374, "div", 20)(375, "strong");
      \u0275\u0275text(376, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(377, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(378, "code");
      \u0275\u0275text(379, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(380, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(381, "div", 16)(382, "h2", 100)(383, "button", 101);
      \u0275\u0275text(384, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(385, "div", 102)(386, "div", 20)(387, "strong");
      \u0275\u0275text(388, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(389, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(390, "code");
      \u0275\u0275text(391, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(392, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(393, "div", 9)(394, "div", 10)(395, "div", 11)(396, "div", 12)(397, "h5", 13);
      \u0275\u0275text(398, "Primary - Solid Color");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(399, "div", 14)(400, "p", 27);
      \u0275\u0275text(401, "Use the ");
      \u0275\u0275domElementStart(402, "code");
      \u0275\u0275text(403, ".accordion-solid-primary");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(404, " to create a solid primary accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(405, "div", 103)(406, "div", 16)(407, "h2", 104)(408, "button", 105);
      \u0275\u0275text(409, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(410, "div", 106)(411, "div", 20)(412, "strong");
      \u0275\u0275text(413, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(414, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(415, "code");
      \u0275\u0275text(416, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(417, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(418, "div", 16)(419, "h2", 107)(420, "button", 108);
      \u0275\u0275text(421, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(422, "div", 109)(423, "div", 20)(424, "strong");
      \u0275\u0275text(425, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(426, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(427, "code");
      \u0275\u0275text(428, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(429, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(430, "div", 16)(431, "h2", 110)(432, "button", 111);
      \u0275\u0275text(433, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(434, "div", 112)(435, "div", 20)(436, "strong");
      \u0275\u0275text(437, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(438, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(439, "code");
      \u0275\u0275text(440, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(441, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(442, "div", 10)(443, "div", 11)(444, "div", 12)(445, "h5", 13);
      \u0275\u0275text(446, "Secondary - Solid Color");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(447, "div", 14)(448, "p", 27);
      \u0275\u0275text(449, "Use the ");
      \u0275\u0275domElementStart(450, "code");
      \u0275\u0275text(451, ".accordion-solid-secondary");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(452, " to create a solid secondary accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(453, "div", 113)(454, "div", 16)(455, "h2", 114)(456, "button", 115);
      \u0275\u0275text(457, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(458, "div", 116)(459, "div", 20)(460, "strong");
      \u0275\u0275text(461, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(462, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(463, "code");
      \u0275\u0275text(464, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(465, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(466, "div", 16)(467, "h2", 117)(468, "button", 118);
      \u0275\u0275text(469, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(470, "div", 119)(471, "div", 20)(472, "strong");
      \u0275\u0275text(473, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(474, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(475, "code");
      \u0275\u0275text(476, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(477, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(478, "div", 16)(479, "h2", 120)(480, "button", 121);
      \u0275\u0275text(481, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(482, "div", 122)(483, "div", 20)(484, "strong");
      \u0275\u0275text(485, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(486, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(487, "code");
      \u0275\u0275text(488, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(489, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(490, "div", 10)(491, "div", 11)(492, "div", 12)(493, "h5", 13);
      \u0275\u0275text(494, "Warning - Solid Color");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(495, "div", 14)(496, "p", 27);
      \u0275\u0275text(497, "Use the ");
      \u0275\u0275domElementStart(498, "code");
      \u0275\u0275text(499, ".accordion-solid-warning");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(500, " to create a solid warning accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(501, "div", 123)(502, "div", 16)(503, "h2", 124)(504, "button", 125);
      \u0275\u0275text(505, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(506, "div", 126)(507, "div", 20)(508, "strong");
      \u0275\u0275text(509, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(510, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(511, "code");
      \u0275\u0275text(512, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(513, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(514, "div", 16)(515, "h2", 127)(516, "button", 128);
      \u0275\u0275text(517, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(518, "div", 129)(519, "div", 20)(520, "strong");
      \u0275\u0275text(521, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(522, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(523, "code");
      \u0275\u0275text(524, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(525, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(526, "div", 16)(527, "h2", 130)(528, "button", 131);
      \u0275\u0275text(529, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(530, "div", 132)(531, "div", 20)(532, "strong");
      \u0275\u0275text(533, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(534, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(535, "code");
      \u0275\u0275text(536, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(537, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(538, "div", 10)(539, "div", 11)(540, "div", 12)(541, "h5", 13);
      \u0275\u0275text(542, "Info - Solid Color");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(543, "div", 14)(544, "p", 27);
      \u0275\u0275text(545, "Use the ");
      \u0275\u0275domElementStart(546, "code");
      \u0275\u0275text(547, ".accordion-solid-info");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(548, " to create a solid info accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(549, "div", 133)(550, "div", 16)(551, "h2", 134)(552, "button", 135);
      \u0275\u0275text(553, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(554, "div", 136)(555, "div", 20)(556, "strong");
      \u0275\u0275text(557, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(558, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(559, "code");
      \u0275\u0275text(560, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(561, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(562, "div", 16)(563, "h2", 137)(564, "button", 138);
      \u0275\u0275text(565, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(566, "div", 139)(567, "div", 20)(568, "strong");
      \u0275\u0275text(569, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(570, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(571, "code");
      \u0275\u0275text(572, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(573, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(574, "div", 16)(575, "h2", 140)(576, "button", 141);
      \u0275\u0275text(577, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(578, "div", 142)(579, "div", 20)(580, "strong");
      \u0275\u0275text(581, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(582, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(583, "code");
      \u0275\u0275text(584, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(585, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(586, "div", 10)(587, "div", 11)(588, "div", 12)(589, "h5", 13);
      \u0275\u0275text(590, "Success - Solid Color");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(591, "div", 14)(592, "p", 27);
      \u0275\u0275text(593, "Use the ");
      \u0275\u0275domElementStart(594, "code");
      \u0275\u0275text(595, ".accordion-solid-success");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(596, " to create a solid success accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(597, "div", 143)(598, "div", 16)(599, "h2", 144)(600, "button", 145);
      \u0275\u0275text(601, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(602, "div", 146)(603, "div", 20)(604, "strong");
      \u0275\u0275text(605, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(606, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(607, "code");
      \u0275\u0275text(608, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(609, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(610, "div", 16)(611, "h2", 147)(612, "button", 148);
      \u0275\u0275text(613, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(614, "div", 149)(615, "div", 20)(616, "strong");
      \u0275\u0275text(617, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(618, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(619, "code");
      \u0275\u0275text(620, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(621, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(622, "div", 16)(623, "h2", 150)(624, "button", 151);
      \u0275\u0275text(625, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(626, "div", 152)(627, "div", 20)(628, "strong");
      \u0275\u0275text(629, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(630, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(631, "code");
      \u0275\u0275text(632, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(633, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(634, "div", 10)(635, "div", 11)(636, "div", 12)(637, "h5", 13);
      \u0275\u0275text(638, "Danger - Solid Color");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(639, "div", 14)(640, "p", 27);
      \u0275\u0275text(641, "Use the ");
      \u0275\u0275domElementStart(642, "code");
      \u0275\u0275text(643, ".accordion-solid-danger");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(644, " to create a solid danger accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(645, "div", 153)(646, "div", 16)(647, "h2", 154)(648, "button", 155);
      \u0275\u0275text(649, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(650, "div", 156)(651, "div", 20)(652, "strong");
      \u0275\u0275text(653, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(654, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(655, "code");
      \u0275\u0275text(656, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(657, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(658, "div", 16)(659, "h2", 157)(660, "button", 158);
      \u0275\u0275text(661, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(662, "div", 159)(663, "div", 20)(664, "strong");
      \u0275\u0275text(665, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(666, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(667, "code");
      \u0275\u0275text(668, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(669, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(670, "div", 16)(671, "h2", 160)(672, "button", 161);
      \u0275\u0275text(673, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(674, "div", 162)(675, "div", 20)(676, "strong");
      \u0275\u0275text(677, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(678, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(679, "code");
      \u0275\u0275text(680, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(681, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(682, "div", 9)(683, "div", 10)(684, "div", 11)(685, "div", 12)(686, "h5", 13);
      \u0275\u0275text(687, "Primary - Colored Border");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(688, "div", 14)(689, "p", 27);
      \u0275\u0275text(690, "Use the ");
      \u0275\u0275domElementStart(691, "code");
      \u0275\u0275text(692, ".accordion-border-primary");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(693, " to create a primary border accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(694, "div", 163)(695, "div", 16)(696, "h2", 164)(697, "button", 165);
      \u0275\u0275text(698, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(699, "div", 166)(700, "div", 20)(701, "strong");
      \u0275\u0275text(702, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(703, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(704, "code");
      \u0275\u0275text(705, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(706, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(707, "div", 16)(708, "h2", 167)(709, "button", 168);
      \u0275\u0275text(710, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(711, "div", 169)(712, "div", 20)(713, "strong");
      \u0275\u0275text(714, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(715, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(716, "code");
      \u0275\u0275text(717, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(718, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(719, "div", 16)(720, "h2", 170)(721, "button", 171);
      \u0275\u0275text(722, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(723, "div", 172)(724, "div", 20)(725, "strong");
      \u0275\u0275text(726, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(727, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(728, "code");
      \u0275\u0275text(729, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(730, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(731, "div", 10)(732, "div", 11)(733, "div", 12)(734, "h5", 13);
      \u0275\u0275text(735, "Secondary - Colored Border");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(736, "div", 14)(737, "p", 27);
      \u0275\u0275text(738, "Use the ");
      \u0275\u0275domElementStart(739, "code");
      \u0275\u0275text(740, ".accordion-border-secondary");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(741, " to create a secondary border accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(742, "div", 173)(743, "div", 16)(744, "h2", 174)(745, "button", 175);
      \u0275\u0275text(746, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(747, "div", 176)(748, "div", 20)(749, "strong");
      \u0275\u0275text(750, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(751, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(752, "code");
      \u0275\u0275text(753, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(754, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(755, "div", 16)(756, "h2", 177)(757, "button", 178);
      \u0275\u0275text(758, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(759, "div", 179)(760, "div", 20)(761, "strong");
      \u0275\u0275text(762, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(763, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(764, "code");
      \u0275\u0275text(765, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(766, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(767, "div", 16)(768, "h2", 180)(769, "button", 181);
      \u0275\u0275text(770, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(771, "div", 182)(772, "div", 20)(773, "strong");
      \u0275\u0275text(774, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(775, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(776, "code");
      \u0275\u0275text(777, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(778, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(779, "div", 10)(780, "div", 11)(781, "div", 12)(782, "h5", 13);
      \u0275\u0275text(783, "Success - Colored Border");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(784, "div", 14)(785, "p", 27);
      \u0275\u0275text(786, "Use the ");
      \u0275\u0275domElementStart(787, "code");
      \u0275\u0275text(788, ".accordion-border-success");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(789, " to create a success border accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(790, "div", 183)(791, "div", 16)(792, "h2", 184)(793, "button", 185);
      \u0275\u0275text(794, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(795, "div", 186)(796, "div", 20)(797, "strong");
      \u0275\u0275text(798, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(799, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(800, "code");
      \u0275\u0275text(801, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(802, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(803, "div", 16)(804, "h2", 187)(805, "button", 188);
      \u0275\u0275text(806, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(807, "div", 189)(808, "div", 20)(809, "strong");
      \u0275\u0275text(810, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(811, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(812, "code");
      \u0275\u0275text(813, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(814, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(815, "div", 16)(816, "h2", 190)(817, "button", 191);
      \u0275\u0275text(818, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(819, "div", 192)(820, "div", 20)(821, "strong");
      \u0275\u0275text(822, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(823, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(824, "code");
      \u0275\u0275text(825, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(826, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(827, "div", 10)(828, "div", 11)(829, "div", 12)(830, "h5", 13);
      \u0275\u0275text(831, "Info - Colored Border");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(832, "div", 14)(833, "p", 27);
      \u0275\u0275text(834, "Use the ");
      \u0275\u0275domElementStart(835, "code");
      \u0275\u0275text(836, ".accordion-border-info");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(837, " to create a info border accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(838, "div", 193)(839, "div", 16)(840, "h2", 194)(841, "button", 195);
      \u0275\u0275text(842, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(843, "div", 196)(844, "div", 20)(845, "strong");
      \u0275\u0275text(846, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(847, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(848, "code");
      \u0275\u0275text(849, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(850, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(851, "div", 16)(852, "h2", 197)(853, "button", 198);
      \u0275\u0275text(854, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(855, "div", 199)(856, "div", 20)(857, "strong");
      \u0275\u0275text(858, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(859, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(860, "code");
      \u0275\u0275text(861, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(862, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(863, "div", 16)(864, "h2", 200)(865, "button", 201);
      \u0275\u0275text(866, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(867, "div", 202)(868, "div", 20)(869, "strong");
      \u0275\u0275text(870, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(871, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(872, "code");
      \u0275\u0275text(873, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(874, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(875, "div", 10)(876, "div", 11)(877, "div", 12)(878, "h5", 13);
      \u0275\u0275text(879, "Warning - Colored Border");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(880, "div", 14)(881, "p", 27);
      \u0275\u0275text(882, "Use the ");
      \u0275\u0275domElementStart(883, "code");
      \u0275\u0275text(884, ".accordion-border-warning");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(885, " to create a warning border accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(886, "div", 203)(887, "div", 16)(888, "h2", 204)(889, "button", 205);
      \u0275\u0275text(890, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(891, "div", 206)(892, "div", 20)(893, "strong");
      \u0275\u0275text(894, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(895, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(896, "code");
      \u0275\u0275text(897, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(898, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(899, "div", 16)(900, "h2", 207)(901, "button", 208);
      \u0275\u0275text(902, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(903, "div", 209)(904, "div", 20)(905, "strong");
      \u0275\u0275text(906, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(907, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(908, "code");
      \u0275\u0275text(909, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(910, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(911, "div", 16)(912, "h2", 210)(913, "button", 211);
      \u0275\u0275text(914, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(915, "div", 212)(916, "div", 20)(917, "strong");
      \u0275\u0275text(918, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(919, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(920, "code");
      \u0275\u0275text(921, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(922, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(923, "div", 10)(924, "div", 11)(925, "div", 12)(926, "h5", 13);
      \u0275\u0275text(927, "Danger - Colored Border");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(928, "div", 14)(929, "p", 27);
      \u0275\u0275text(930, "Use the ");
      \u0275\u0275domElementStart(931, "code");
      \u0275\u0275text(932, ".accordion-border-danger");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(933, " to create a danger border accordion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(934, "div", 213)(935, "div", 16)(936, "h2", 214)(937, "button", 215);
      \u0275\u0275text(938, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(939, "div", 216)(940, "div", 20)(941, "strong");
      \u0275\u0275text(942, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(943, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(944, "code");
      \u0275\u0275text(945, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(946, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(947, "div", 16)(948, "h2", 217)(949, "button", 218);
      \u0275\u0275text(950, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(951, "div", 219)(952, "div", 20)(953, "strong");
      \u0275\u0275text(954, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(955, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(956, "code");
      \u0275\u0275text(957, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(958, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(959, "div", 16)(960, "h2", 220)(961, "button", 221);
      \u0275\u0275text(962, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(963, "div", 222)(964, "div", 20)(965, "strong");
      \u0275\u0275text(966, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(967, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(968, "code");
      \u0275\u0275text(969, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(970, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionsComponent, [{
    type: Component,
    args: [{ selector: "app-accordions", imports: [CommonModule], template: `            <!-- Start Content -->
            <div class="">

              <!-- Page Header -->
              <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
                  <div class="flex-grow-1">
                      <h4 class="fs-18 fw-semibold mb-0">Accordions</h4>
                  </div>
                  <div class="text-end">
                      <ol class="breadcrumb m-0 py-0">
                          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                          <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>
                          <li class="breadcrumb-item active">Accordions</li>
                      </ol>
                  </div>
              </div>
              <!-- End Page Header -->

              <!-- start row -->
              <div class="row">
                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Default Accordion</h5>
                          </div>
                          <div class="card-body">
                              <div class="accordion" id="accordionExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div>
                  <!-- end col -->
                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Flush Accordions</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Add <code>.accordion-flush</code> to remove the default <code>background-color</code>, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</p>
                              <div class="accordion accordion-flush" id="accordionFlushExample">

                                  <!-- item -->
                                  <div class="accordion-item">
                                      <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                      </div>
                                  </div>

                                  <!-- item -->
                                  <div class="accordion-item">
                                      <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                          <div class="accordion-body">
                                              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual
                                              content.
                                          </div>
                                      </div>
                                  </div>

                                  <!-- item -->
                                  <div class="accordion-item">
                                      <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                          <div class="accordion-body">
                                              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of
                                              content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div><!-- end card body-->
                      </div><!-- end card -->
                  </div><!-- end col -->

              </div>
              <!-- end row -->

              <!-- start row -->
              <div class="row">
                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Bordered Accordions</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use <code>.accordion</code> as a wrapper.</p>
                              <div class="accordion accordion-bordered" id="BorderedaccordionExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="BorderedheadingOne">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#BorderedcollapseOne" aria-expanded="true" aria-controls="BorderedcollapseOne">
                                              Accordion Item #1
                                          </button>
                                      </h2>
                                      <div id="BorderedcollapseOne" class="accordion-collapse collapse show" aria-labelledby="BorderedheadingOne" data-bs-parent="#BorderedaccordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="BorderedheadingTwo">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#BorderedcollapseTwo" aria-expanded="false" aria-controls="BorderedcollapseTwo">
                                              Accordion Item #2
                                          </button>
                                      </h2>
                                      <div id="BorderedcollapseTwo" class="accordion-collapse collapse" aria-labelledby="BorderedheadingTwo" data-bs-parent="#BorderedaccordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="BorderedheadingThree">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#BorderedcollapseThree" aria-expanded="false" aria-controls="BorderedcollapseThree">
                                              Accordion Item #3
                                          </button>
                                      </h2>
                                      <div id="BorderedcollapseThree" class="accordion-collapse collapse" aria-labelledby="BorderedheadingThree" data-bs-parent="#BorderedaccordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->
                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Custom Icon Accordion</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use <code>.accordion</code> as a wrapper.</p>
                              <div class="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="CustomIconheadingOne">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapseOne" aria-expanded="true" aria-controls="CustomIconcollapseOne">
                                              Accordion item with tabler icons
                                              <i class="ti ti-plus accordion-icon accordion-icon-on"></i>
                                              <i class="ti ti-minus accordion-icon accordion-icon-off"></i>
                                          </button>
                                      </h2>
                                      <div id="CustomIconcollapseOne" class="accordion-collapse collapse show" aria-labelledby="CustomIconheadingOne" data-bs-parent="#CustomIconaccordionExample">
                                          <div class="accordion-body"> <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="CustomIconheadingTwo">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapseTwo" aria-expanded="false" aria-controls="CustomIconcollapseTwo">
                                              Accordion item with tabler icons
                                              <i class="ti ti-circle-plus accordion-icon accordion-icon-on"></i>
                                              <i class="ti ti-circle-minus accordion-icon accordion-icon-off"></i>
                                          </button>
                                      </h2>
                                      <div id="CustomIconcollapseTwo" class="accordion-collapse collapse" aria-labelledby="CustomIconheadingTwo" data-bs-parent="#CustomIconaccordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="CustomIconheadingThree">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapseThree" aria-expanded="false" aria-controls="CustomIconcollapseThree">
                                              Accordion item with tabler icons
                                              <i class="ti ti-square-plus accordion-icon accordion-icon-on"></i>
                                              <i class="ti ti-square-minus accordion-icon accordion-icon-off"></i>
                                          </button>
                                      </h2>
                                      <div id="CustomIconcollapseThree" class="accordion-collapse collapse" aria-labelledby="CustomIconheadingThree" data-bs-parent="#CustomIconaccordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card card-h-100">
                          <div class="card-header">
                              <h5 class="card-title">Always Open Accordions</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Omit the <code>data-bs-parent</code> attribute on each <code>.accordion-collapse</code> to make accordion items stay open when another item is opened.</p>
                              <div class="accordion" id="accordionPanelsStayOpenExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                              Accordion Item #1
                                          </button>
                                      </h2>
                                      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                              Accordion Item #2
                                          </button>
                                      </h2>
                                      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                          <div class="accordion-body">
                                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                              Accordion Item #3
                                          </button>
                                      </h2>
                                      <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                          <div class="accordion-body">
                                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Accordion Without Arrow</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">
                                  Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use <code>.accordion</code> as a wrapper.
                              </p>
                              <div class="accordion accordion-arrow-none" id="withoutarrowaccordionExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="withoutarrowheadingOne">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#withoutarrowcollapseOne" aria-expanded="true" aria-controls="withoutarrowcollapseOne">
                                              Accordion Item #1
                                          </button>
                                      </h2>
                                      <div id="withoutarrowcollapseOne" class="accordion-collapse collapse show" aria-labelledby="withoutarrowheadingOne" data-bs-parent="#withoutarrowaccordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="withoutarrowheadingTwo">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#withoutarrowcollapseTwo" aria-expanded="false" aria-controls="withoutarrowcollapseTwo">
                                              Accordion Item #2
                                          </button>
                                      </h2>
                                      <div id="withoutarrowcollapseTwo" class="accordion-collapse collapse" aria-labelledby="withoutarrowheadingTwo" data-bs-parent="#withoutarrowaccordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="withoutarrowheadingThree">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#withoutarrowcollapseThree" aria-expanded="false" aria-controls="withoutarrowcollapseThree">
                                              Accordion Item #3
                                          </button>
                                      </h2>
                                      <div id="withoutarrowcollapseThree" class="accordion-collapse collapse" aria-labelledby="withoutarrowheadingThree" data-bs-parent="#withoutarrowaccordionExample">
                                          <div class="accordion-body">
                                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->
              </div>
              <!-- end row -->

              <!-- start row -->
              <div class="row">
                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Primary - Light Color</h5>
                          </div>
                          <div class="card-body">
                              <div class="accordion accordion-primary" id="accordionPrimaryExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingPrimaryOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrimaryOne" aria-expanded="true" aria-controls="collapsePrimaryOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="collapsePrimaryOne" class="accordion-collapse collapse show" aria-labelledby="headingPrimaryOne" data-bs-parent="#accordionPrimaryExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingPrimaryTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrimaryTwo" aria-expanded="false" aria-controls="collapsePrimaryTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="collapsePrimaryTwo" class="accordion-collapse collapse" aria-labelledby="headingPrimaryTwo" data-bs-parent="#accordionPrimaryExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingPrimaryThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrimaryThree" aria-expanded="false" aria-controls="collapsePrimaryThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="collapsePrimaryThree" class="accordion-collapse collapse" aria-labelledby="headingPrimaryThree" data-bs-parent="#accordionPrimaryExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Secondary - Light Color</h5>
                          </div>
                          <div class="card-body">
                              <div class="accordion accordion-secondary" id="accordionSecondaryExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingSecondaryOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSecondaryOne" aria-expanded="true" aria-controls="collapseSecondaryOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="collapseSecondaryOne" class="accordion-collapse collapse show" aria-labelledby="headingSecondaryOne" data-bs-parent="#accordionSecondaryExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingSecondaryTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSecondaryTwo" aria-expanded="false" aria-controls="collapseSecondaryTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="collapseSecondaryTwo" class="accordion-collapse collapse" aria-labelledby="headingSecondaryTwo" data-bs-parent="#accordionSecondaryExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingSecondaryThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSecondaryThree" aria-expanded="false" aria-controls="collapseSecondaryThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="collapseSecondaryThree" class="accordion-collapse collapse" aria-labelledby="headingSecondaryThree" data-bs-parent="#accordionSecondaryExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->
              </div>
              <!-- end row -->

              <!-- start row -->
              <div class="row">
                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Primary - Solid Color</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-solid-primary</code> to create a solid primary accordion.</p>
                              <div class="accordion accordion-solid-primary" id="accordionPrimarySolidExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingPrimarySolidOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrimarySolidOne" aria-expanded="true" aria-controls="collapsePrimarySolidOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="collapsePrimarySolidOne" class="accordion-collapse collapse show" aria-labelledby="headingPrimarySolidOne" data-bs-parent="#accordionPrimarySolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingPrimarySolidTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrimarySolidTwo" aria-expanded="false" aria-controls="collapsePrimarySolidTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="collapsePrimarySolidTwo" class="accordion-collapse collapse" aria-labelledby="headingPrimarySolidTwo" data-bs-parent="#accordionPrimarySolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingPrimarySolidThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrimarySolidThree" aria-expanded="false" aria-controls="collapsePrimarySolidThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="collapsePrimarySolidThree" class="accordion-collapse collapse" aria-labelledby="headingPrimarySolidThree" data-bs-parent="#accordionPrimarySolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Secondary - Solid Color</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-solid-secondary</code> to create a solid secondary accordion.</p>
                              <div class="accordion accordion-solid-secondary" id="accordionSecondarySolidExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingSecondarySolidOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSecondarySolidOne" aria-expanded="true" aria-controls="collapseSecondarySolidOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="collapseSecondarySolidOne" class="accordion-collapse collapse show" aria-labelledby="headingSecondarySolidOne" data-bs-parent="#accordionSecondarySolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingSecondarySolidTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSecondarySolidTwo" aria-expanded="false" aria-controls="collapseSecondarySolidTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="collapseSecondarySolidTwo" class="accordion-collapse collapse" aria-labelledby="headingSecondarySolidTwo" data-bs-parent="#accordionSecondarySolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingSecondarySolidThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSecondarySolidThree" aria-expanded="false" aria-controls="collapseSecondarySolidThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="collapseSecondarySolidThree" class="accordion-collapse collapse" aria-labelledby="headingSecondarySolidThree" data-bs-parent="#accordionSecondarySolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Warning - Solid Color</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-solid-warning</code> to create a solid warning accordion.</p>
                              <div class="accordion accordion-solid-warning" id="accordionWarningSolidExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingWarningSolidOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWarningSolidOne" aria-expanded="true" aria-controls="collapseWarningSolidOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="collapseWarningSolidOne" class="accordion-collapse collapse show" aria-labelledby="headingWarningSolidOne" data-bs-parent="#accordionWarningSolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingWarningSolidTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWarningSolidTwo" aria-expanded="false" aria-controls="collapseWarningSolidTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="collapseWarningSolidTwo" class="accordion-collapse collapse" aria-labelledby="headingWarningSolidTwo" data-bs-parent="#accordionWarningSolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingWarningSolidThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWarningSolidThree" aria-expanded="false" aria-controls="collapseWarningSolidThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="collapseWarningSolidThree" class="accordion-collapse collapse" aria-labelledby="headingWarningSolidThree" data-bs-parent="#accordionWarningSolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Info - Solid Color</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-solid-info</code> to create a solid info accordion.</p>
                              <div class="accordion accordion-solid-info" id="accordionInfoSolidExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingInfoSolidOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInfoSolidOne" aria-expanded="true" aria-controls="collapseInfoSolidOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="collapseInfoSolidOne" class="accordion-collapse collapse show" aria-labelledby="headingInfoSolidOne" data-bs-parent="#accordionInfoSolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingInfoSolidTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInfoSolidTwo" aria-expanded="false" aria-controls="collapseInfoSolidTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="collapseInfoSolidTwo" class="accordion-collapse collapse" aria-labelledby="headingInfoSolidTwo" data-bs-parent="#accordionInfoSolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingInfoSolidThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInfoSolidThree" aria-expanded="false" aria-controls="collapseInfoSolidThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="collapseInfoSolidThree" class="accordion-collapse collapse" aria-labelledby="headingInfoSolidThree" data-bs-parent="#accordionInfoSolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Success - Solid Color</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-solid-success</code> to create a solid success accordion.</p>
                              <div class="accordion accordion-solid-success" id="accordionSuccessSolidExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingSuccessSolidOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSuccessSolidOne" aria-expanded="true" aria-controls="collapseSuccessSolidOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="collapseSuccessSolidOne" class="accordion-collapse collapse show" aria-labelledby="headingSuccessSolidOne" data-bs-parent="#accordionSuccessSolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingSuccessSolidTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSuccessSolidTwo" aria-expanded="false" aria-controls="collapseSuccessSolidTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="collapseSuccessSolidTwo" class="accordion-collapse collapse" aria-labelledby="headingSuccessSolidTwo" data-bs-parent="#accordionSuccessSolidTwo">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingSuccessSolidThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSuccessSolidThree" aria-expanded="false" aria-controls="collapseSuccessSolidThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="collapseSuccessSolidThree" class="accordion-collapse collapse" aria-labelledby="headingSuccessSolidThree" data-bs-parent="#accordionSuccessSolidThree">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Danger - Solid Color</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-solid-danger</code> to create a solid danger accordion.</p>
                              <div class="accordion accordion-solid-danger" id="accordionDangerSolidExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingDangerSolidOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDangerSolidOne" aria-expanded="true" aria-controls="collapseDangerSolidOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="collapseDangerSolidOne" class="accordion-collapse collapse show" aria-labelledby="headingDangerSolidOne" data-bs-parent="#accordionDangerSolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingDangerSolidTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDangerSolidTwo" aria-expanded="false" aria-controls="collapseDangerSolidTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="collapseDangerSolidTwo" class="accordion-collapse collapse" aria-labelledby="headingDangerSolidTwo" data-bs-parent="#accordionDangerSolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingDangerSolidThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDangerSolidThree" aria-expanded="false" aria-controls="collapseDangerSolidThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="collapseDangerSolidThree" class="accordion-collapse collapse" aria-labelledby="headingDangerSolidThree" data-bs-parent="#accordionDangerSolidExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->
              </div>
              <!-- end row -->

              <!-- start row -->
              <div class="row">
                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Primary - Colored Border</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-border-primary</code> to create a primary border accordion.</p>
                              <div class="accordion accordion-border-primary accordions-items-seperate" id="accordionprimaryborderExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderprimaryOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#primaryBorderOne" aria-expanded="true" aria-controls="primaryBorderOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="primaryBorderOne" class="accordion-collapse collapse show" aria-labelledby="headingborderprimaryOne" data-bs-parent="#accordionprimaryborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderprimaryTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#primaryBorderTwo" aria-expanded="false" aria-controls="primaryBorderTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="primaryBorderTwo" class="accordion-collapse collapse" aria-labelledby="headingborderprimaryTwo" data-bs-parent="#accordionprimaryborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderprimaryThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#primaryBorderThree" aria-expanded="false" aria-controls="primaryBorderThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="primaryBorderThree" class="accordion-collapse collapse" aria-labelledby="headingborderprimaryThree" data-bs-parent="#accordionprimaryborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Secondary - Colored Border</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-border-secondary</code> to create a secondary border accordion.</p>
                              <div class="accordion accordion-border-secondary accordions-items-seperate" id="accordioninfoborderExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderinfoOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#infoBorderOne" aria-expanded="true" aria-controls="infoBorderOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="infoBorderOne" class="accordion-collapse collapse show" aria-labelledby="headingborderinfoOne" data-bs-parent="#accordioninfoborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderinfoTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#infoBorderTwo" aria-expanded="false" aria-controls="infoBorderTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="infoBorderTwo" class="accordion-collapse collapse" aria-labelledby="headingborderinfoTwo" data-bs-parent="#accordioninfoborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderinfoThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#infoBorderThree" aria-expanded="false" aria-controls="infoBorderThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="infoBorderThree" class="accordion-collapse collapse" aria-labelledby="headingborderinfoThree" data-bs-parent="#accordioninfoborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Success - Colored Border</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-border-success</code> to create a success border accordion.</p>
                              <div class="accordion accordion-border-success accordions-items-seperate" id="accordionsuccessborderExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingbordersuccessOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#successBorderOne" aria-expanded="true" aria-controls="successBorderOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="successBorderOne" class="accordion-collapse collapse show" aria-labelledby="headingbordersuccessOne" data-bs-parent="#accordionsuccessborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingbordersuccessTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#successBorderTwo" aria-expanded="false" aria-controls="successBorderTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="successBorderTwo" class="accordion-collapse collapse" aria-labelledby="headingbordersuccessTwo" data-bs-parent="#accordionsuccessborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingbordersuccessThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#successBorderThree" aria-expanded="false" aria-controls="successBorderThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="successBorderThree" class="accordion-collapse collapse" aria-labelledby="headingbordersuccessThree" data-bs-parent="#accordionsuccessborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Info - Colored Border</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-border-info</code> to create a info border accordion.</p>
                              <div class="accordion accordion-border-info accordions-items-seperate" id="accordioninfoborderExampleTwo">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderinfoTwos">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#infoBorderOnes" aria-expanded="true" aria-controls="infoBorderOnes">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="infoBorderOnes" class="accordion-collapse collapse show" aria-labelledby="headingborderinfoTwos" data-bs-parent="#accordioninfoborderExampleTwo">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderinfoTwoo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#infoBorderTwos" aria-expanded="false" aria-controls="infoBorderTwos">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="infoBorderTwos" class="accordion-collapse collapse" aria-labelledby="headingborderinfoTwoo" data-bs-parent="#accordioninfoborderExample2">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderinfoThrees">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#infoBorderThrees" aria-expanded="false" aria-controls="infoBorderThrees">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="infoBorderThrees" class="accordion-collapse collapse" aria-labelledby="headingborderinfoThrees" data-bs-parent="#accordioninfoborderExample2">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Warning - Colored Border</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-border-warning</code> to create a warning border accordion.</p>
                              <div class="accordion accordion-border-warning accordions-items-seperate" id="accordionwarningborderExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderwarningOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#warningBorderOne" aria-expanded="true" aria-controls="warningBorderOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="warningBorderOne" class="accordion-collapse collapse show" aria-labelledby="headingborderwarningOne" data-bs-parent="#accordionwarningborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderwarningTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#warningBorderTwo" aria-expanded="false" aria-controls="warningBorderTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="warningBorderTwo" class="accordion-collapse collapse" aria-labelledby="headingborderwarningTwo" data-bs-parent="#accordionwarningborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderwarningThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#warningBorderThree" aria-expanded="false" aria-controls="warningBorderThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="warningBorderThree" class="accordion-collapse collapse" aria-labelledby="headingborderwarningThree" data-bs-parent="#accordionwarningborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->

                  <div class="col-xl-6">
                      <div class="card">
                          <div class="card-header">
                              <h5 class="card-title">Danger - Colored Border</h5>
                          </div>
                          <div class="card-body">
                              <p class="text-muted">Use the <code>.accordion-border-danger</code> to create a danger border accordion.</p>
                              <div class="accordion accordion-border-danger accordions-items-seperate" id="accordiondangerborderExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderdangerOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#dangerBorderOne" aria-expanded="true" aria-controls="dangerBorderOne">
                      Accordion Item #1
                    </button>
                  </h2>
                                      <div id="dangerBorderOne" class="accordion-collapse collapse show" aria-labelledby="headingborderdangerOne" data-bs-parent="#accordiondangerborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderdangerTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dangerBorderTwo" aria-expanded="false" aria-controls="dangerBorderTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                                      <div id="dangerBorderTwo" class="accordion-collapse collapse" aria-labelledby="headingborderdangerTwo" data-bs-parent="#accordiondangerborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingborderdangerThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dangerBorderThree" aria-expanded="false" aria-controls="dangerBorderThree">
                      Accordion Item #3
                    </button>
                  </h2>
                                      <div id="dangerBorderThree" class="accordion-collapse collapse" aria-labelledby="headingborderdangerThree" data-bs-parent="#accordiondangerborderExample">
                                          <div class="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                                              the
                                              <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div><!-- end card body -->
                      </div><!-- end card -->
                  </div><!-- end col -->
              </div>
              <!-- end row -->

          </div>
          <!-- End Content -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccordionsComponent, { className: "AccordionsComponent", filePath: "src/app/features/ui-interface/base-ui/accordions/accordions.component.ts", lineNumber: 10 });
})();
export {
  AccordionsComponent
};
//# sourceMappingURL=chunk-SLDILZGT.js.map
