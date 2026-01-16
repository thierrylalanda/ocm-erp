import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/base-ui/collapse/collapse.component.ts
var CollapseComponent = class _CollapseComponent {
  static \u0275fac = function CollapseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollapseComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollapseComponent, selectors: [["app-collapse"]], decls: 99, vars: 0, consts: [[1, ""], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-muted", "mb-3"], ["href", "https://getbootstrap.com/docs/5.2/components/collapse/", "target", "_blank"], ["data-bs-toggle", "collapse", "href", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-primary", "ms-1"], ["id", "collapseExample", 1, "collapse", "show"], [1, "card", "card-body", "mb-0"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseWidthExample", "aria-expanded", "false", "aria-controls", "collapseWidthExample", 1, "btn", "btn-primary"], [2, "min-height", "105px"], ["id", "collapseWidthExample", 1, "collapse", "collapse-horizontal"], [1, "card", "card-body", "mb-0", 2, "width", "300px"], [1, "col-xl-12"], [1, "mb-0"], ["data-bs-toggle", "collapse", "href", "#multiCollapseExample1", "role", "button", "aria-expanded", "false", "aria-controls", "multiCollapseExample1", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#multiCollapseExample2", "aria-expanded", "false", "aria-controls", "multiCollapseExample2", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", ".multi-collapse", "aria-expanded", "false", "aria-controls", "multiCollapseExample1 multiCollapseExample2", 1, "btn", "btn-primary"], [1, "col"], ["id", "multiCollapseExample1", 1, "collapse", "multi-collapsee", "mt-2"], ["id", "multiCollapseExample2", 1, "collapse", "multi-collapse", "mt-2"]], template: function CollapseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Collapse");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "li", 6)(11, "a", 7);
      \u0275\u0275text(12, "Base UI");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "li", 8);
      \u0275\u0275text(14, "Collapse");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "h5", 13);
      \u0275\u0275text(20, "Collapse");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 14)(22, "p", 15);
      \u0275\u0275text(23, "Bootstrap's collapse provides the way to toggle the visibility of any content or element. Please read the official ");
      \u0275\u0275domElementStart(24, "a", 16);
      \u0275\u0275text(25, "Bootstrap");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(26, " documentation for a full list of options.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "p")(28, "a", 17);
      \u0275\u0275text(29, " Link with href ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "button", 18);
      \u0275\u0275text(31, " Button with data-bs-target ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "div", 19)(33, "div", 20);
      \u0275\u0275text(34, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(35, "div", 10)(36, "div", 11)(37, "div", 12)(38, "h5", 13);
      \u0275\u0275text(39, "Collapse Horizontal");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(40, "div", 14)(41, "p", 15);
      \u0275\u0275text(42, "The collapse plugin also supports horizontal collapsing. Add the ");
      \u0275\u0275domElementStart(43, "code");
      \u0275\u0275text(44, ".collapse-horizontal");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(45, " modifier class to transition the ");
      \u0275\u0275domElementStart(46, "code");
      \u0275\u0275text(47, "width");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(48, " instead of ");
      \u0275\u0275domElementStart(49, "code");
      \u0275\u0275text(50, "height");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(51, " and set a ");
      \u0275\u0275domElementStart(52, "code");
      \u0275\u0275text(53, "width");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(54, " on the immediate child element.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "p")(56, "button", 21);
      \u0275\u0275text(57, " Toggle width collapse ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(58, "div", 22)(59, "div", 23)(60, "div", 24);
      \u0275\u0275text(61, " This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(62, "div", 9)(63, "div", 25)(64, "div", 11)(65, "div", 12)(66, "h5", 13);
      \u0275\u0275text(67, "Multiple Targets");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(68, "div", 14)(69, "p", 15);
      \u0275\u0275text(70, " Multiple ");
      \u0275\u0275domElementStart(71, "code");
      \u0275\u0275text(72, "<button>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(73, " or ");
      \u0275\u0275domElementStart(74, "code");
      \u0275\u0275text(75, "<a>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(76, " can show and hide an element if they each reference it with their ");
      \u0275\u0275domElementStart(77, "code");
      \u0275\u0275text(78, "href");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(79, " or ");
      \u0275\u0275domElementStart(80, "code");
      \u0275\u0275text(81, "data-bs-target");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(82, " attribute ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(83, "p", 26)(84, "a", 27);
      \u0275\u0275text(85, "Toggle first element");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "button", 28);
      \u0275\u0275text(87, "Toggle second element");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(88, "button", 29);
      \u0275\u0275text(89, "Toggle both elements");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(90, "div", 9)(91, "div", 30)(92, "div", 31)(93, "div", 20);
      \u0275\u0275text(94, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(95, "div", 30)(96, "div", 32)(97, "div", 20);
      \u0275\u0275text(98, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
      \u0275\u0275domElementEnd()()()()()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapseComponent, [{
    type: Component,
    args: [{ selector: "app-collapse", imports: [CommonModule], template: `			<!-- Start Content -->
            <div class="">

                <!-- Page Header -->
                <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
                    <div class="flex-grow-1">
                        <h4 class="fs-18 fw-semibold mb-0">Collapse</h4>
                    </div>
                    <div class="text-end">
                        <ol class="breadcrumb m-0 py-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                            
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>
                            
                            <li class="breadcrumb-item active">Collapse</li>
                        </ol>
                    </div>
				</div>
				<!-- End Page Header -->
                
                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Collapse</h5>
                            </div><!-- end card header -->
                            <div class="card-body">
                                <p class="text-muted mb-3">Bootstrap's collapse provides the way to toggle the visibility of any content or element. Please read the official <a href="https://getbootstrap.com/docs/5.2/components/collapse/" target="_blank">Bootstrap</a> documentation for a full list of options.</p>

                                <p>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Link with href
                                    </a>
                                    <button class="btn btn-primary ms-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Button with data-bs-target
                                    </button>
                                </p>
                                <div class="collapse show" id="collapseExample">
                                    <div class="card card-body mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </div>
                            </div> <!-- end card-body-->
                        </div> <!-- end card-->
                    </div> <!-- end col-->


                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Collapse Horizontal</h5>
                            </div><!-- end card header -->

                            <div class="card-body">
                                <p class="text-muted mb-3">The collapse plugin also supports horizontal collapsing. Add the <code>.collapse-horizontal</code> modifier class to transition the <code>width</code> instead of <code>height</code> and set a <code>width</code> on the immediate child element.</p>
                                <p>
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                        Toggle width collapse
                                    </button>
                                </p>
                                <div style="min-height: 105px;">
                                    <div class="collapse collapse-horizontal" id="collapseWidthExample">
                                        <div class="card card-body mb-0" style="width: 300px;">
                                            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- end card-body-->
                        </div> <!-- end card-->
                    </div> <!-- end col-->
                </div> <!-- end row-->
                

                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Multiple Targets</h5>
                            </div><!-- end card header -->

                            <div class="card-body">
                                <p class="text-muted mb-3"> Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide an element if they each reference it with their <code>href</code> or <code>data-bs-target</code> attribute </p>

                                <p class="mb-0">
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
                                </p>
								
                                <div class="row">
                                    <div class="col">
                                        <div class="collapse multi-collapsee mt-2" id="multiCollapseExample1">
                                            <div class="card card-body mb-0">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="collapse multi-collapse mt-2" id="multiCollapseExample2">
                                            <div class="card card-body mb-0">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div> <!-- end col -->
                                </div> <!-- end row-->
								
                            </div> <!-- end card-body-->
                        </div> <!-- end card-->
                    </div> <!-- end col-->
                </div> <!-- end row-->


            </div> 
			<!--End container -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollapseComponent, { className: "CollapseComponent", filePath: "src/app/features/ui-interface/base-ui/collapse/collapse.component.ts", lineNumber: 10 });
})();
export {
  CollapseComponent
};
//# sourceMappingURL=chunk-BRNK5P6X.js.map
