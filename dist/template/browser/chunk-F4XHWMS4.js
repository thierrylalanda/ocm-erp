import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from "./chunk-TFXGYYMY.js";
import "./chunk-AZWQ5RV7.js";
import "./chunk-RIL4TINW.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-YKL5IIDX.js";
import {
  CommonModule
} from "./chunk-ZV6UYXXV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.ts
function DrapDropComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 23)(2, "div", 12)(3, "h5", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r1.colorClass);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.tittle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r1.content, " ");
  }
}
function DrapDropComponent_For_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function DrapDropComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275template(1, DrapDropComponent_For_27_div_1_Template, 1, 0, "div", 25);
    \u0275\u0275elementStart(2, "div", 26)(3, "div", 27)(4, "h5", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.tittle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.content);
  }
}
function DrapDropComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17)(1, "span", 29);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r3, " ");
  }
}
function DrapDropComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17)(1, "span", 29);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
  }
}
var DrapDropComponent = class _DrapDropComponent {
  dragCardOne = [
    {
      tittle: "Draggable Card 1",
      content: "Jelly beans sugar plum cheesecake cookie oat cake souffl\xE9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.",
      colorClass: "bg-secondary"
    },
    {
      tittle: "Draggable Card 2",
      content: "Jelly beans sugar plum cheesecake cookie oat cake souffl\xE9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.",
      colorClass: "bg-primary"
    },
    {
      tittle: "Draggable Card 3",
      content: "Jelly beans sugar plum cheesecake cookie oat cake souffl\xE9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.",
      colorClass: "bg-success"
    },
    {
      tittle: "Draggable Card 4",
      content: "Jelly beans sugar plum cheesecake cookie oat cake souffl\xE9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.",
      colorClass: "bg-info"
    },
    {
      tittle: "Draggable Card 6",
      content: "Jelly beans sugar plum cheesecake cookie oat cake souffl\xE9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.",
      colorClass: "bg-warning"
    },
    {
      tittle: "Draggable Card 6",
      content: "Jelly beans sugar plum cheesecake cookie oat cake souffl\xE9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.",
      colorClass: "bg-danger"
    }
  ];
  basicListGroup = [
    {
      tittle: "Darren Elder",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      tittle: "Linda Ellis",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      tittle: "Toney Ritch",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      tittle: "Flora Jag",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      tittle: "Linda Marris",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    }
  ];
  todoList = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros"
  ];
  doneList = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros"
  ];
  drop(event) {
    moveItemInArray(this.basicListGroup, event.previousIndex, event.currentIndex);
  }
  dropTodo(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  static \u0275fac = function DrapDropComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrapDropComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DrapDropComponent, selectors: [["app-drap-drop"]], decls: 48, vars: 2, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], ["cdkDrag", "", 1, "col-md-4"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["cdkDropList", "", 3, "cdkDropListDropped"], [1, "list-group"], ["cdkDrag", "", 1, "list-group-item"], ["cdkDropListGroup", "", 1, "card"], [1, "col-sm-6"], [1, "my-1"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "list-group", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDropList", "", 1, "list-group", 3, "cdkDropListDropped", "cdkDropListData"], [1, "card", "mb-0", "mt-3", "text-white"], [1, "card-title", "text-white"], [4, "cdkDragPlaceholder"], [1, "media"], [1, "media-body"], [1, "mt-0"], [1, "handle"]], template: function DrapDropComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Drag Drop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Advanced UI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Drag Drop");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8);
      \u0275\u0275repeaterCreate(15, DrapDropComponent_For_16_Template, 8, 4, "div", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 8)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "h5", 13);
      \u0275\u0275text(22, "Basic List Group Sortable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 14)(24, "div", 15);
      \u0275\u0275listener("cdkDropListDropped", function DrapDropComponent_Template_div_cdkDropListDropped_24_listener($event) {
        return ctx.drop($event);
      });
      \u0275\u0275elementStart(25, "ul", 16);
      \u0275\u0275repeaterCreate(26, DrapDropComponent_For_27_Template, 8, 2, "li", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(28, "div", 8)(29, "div", 10)(30, "div", 18)(31, "div", 12)(32, "h5", 13);
      \u0275\u0275text(33, "Drag Handler");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 14)(35, "div", 8)(36, "div", 19)(37, "h4", 20);
      \u0275\u0275text(38, "To Do");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "ul", 21);
      \u0275\u0275listener("cdkDropListDropped", function DrapDropComponent_Template_ul_cdkDropListDropped_39_listener($event) {
        return ctx.dropTodo($event);
      });
      \u0275\u0275repeaterCreate(40, DrapDropComponent_For_41_Template, 4, 1, "li", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 19)(43, "h4", 20);
      \u0275\u0275text(44, "Done");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "ul", 22);
      \u0275\u0275listener("cdkDropListDropped", function DrapDropComponent_Template_ul_cdkDropListDropped_45_listener($event) {
        return ctx.dropTodo($event);
      });
      \u0275\u0275repeaterCreate(46, DrapDropComponent_For_47_Template, 4, 1, "li", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.dragCardOne);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.basicListGroup);
      \u0275\u0275advance(13);
      \u0275\u0275property("cdkDropListData", ctx.todoList);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.todoList);
      \u0275\u0275advance(5);
      \u0275\u0275property("cdkDropListData", ctx.doneList);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.doneList);
    }
  }, dependencies: [CommonModule, DragDropModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragPlaceholder], styles: ["\n\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #c8bebe;\n}\n/*# sourceMappingURL=drap-drop.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrapDropComponent, [{
    type: Component,
    args: [{ selector: "app-drap-drop", imports: [CommonModule, DragDropModule], template: '<!-- Page Header -->\n<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Drag Drop</h4>\n  </div>\n\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>\n\n          <li class="breadcrumb-item active">Drag Drop</li>\n      </ol>\n  </div>\n</div>\n<!-- /Page Header -->\n<div class="row">\n  @for (item of dragCardOne; track item) {\n    <!-- Drag Card -->\n    <div class="col-md-4" cdkDrag>\n      <div class="card mb-0 mt-3  text-white" [class]="item.colorClass">\n        <div class="card-header ">\n          <h5 class="card-title text-white">{{ item.tittle }}</h5>\n        </div>\n        <div class="card-body">\n          <p>\n            {{ item.content }}\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- /Drag Card -->\n  }\n</div>\n\n<div class="row">\n  <div class="col-md-12">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Basic List Group Sortable</h5>\n      </div>\n      <div class="card-body">\n        <div cdkDropList (cdkDropListDropped)="drop($event)">\n          <!-- Drag Card -->\n          <ul class="list-group">\n            @for (item of basicListGroup; track item) {\n              <li\n                class="list-group-item"\n                cdkDrag\n                >\n                <div *cdkDragPlaceholder></div>\n                <div class="media">\n                  <div class="media-body">\n                    <h5 class="mt-0">{{ item.tittle }}</h5>\n                    <p>{{ item.content }}</p>\n                  </div>\n                </div>\n              </li>\n            }\n          </ul>\n        </div>\n        <!-- /Drag Card -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  <!-- Drag Card -->\n  <div class="col-md-12">\n    <div class="card" cdkDropListGroup>\n      <div class="card-header">\n        <h5 class="card-title">Drag Handler</h5>\n      </div>\n      <div class="card-body">\n        <div class="row">\n          <div class="col-sm-6">\n            <h4 class="my-1">To Do</h4>\n            <ul\n              class="list-group"\n              cdkDropList\n              cdkDropListSortingDisabled\n              [cdkDropListData]="todoList"\n              (cdkDropListDropped)="dropTodo($event)"\n              >\n              @for (item of todoList; track item) {\n                <li cdkDrag class="list-group-item">\n                  <span class="handle">+</span> {{ item }}\n                </li>\n              }\n            </ul>\n          </div>\n          <div class="col-sm-6">\n            <h4 class="my-1">Done</h4>\n            <ul\n              class="list-group"\n              cdkDropList\n              [cdkDropListData]="doneList"\n              (cdkDropListDropped)="dropTodo($event)"\n              >\n              @for (item of doneList; track item) {\n                <li cdkDrag class="list-group-item">\n                  <span class="handle">+</span> {{ item }}\n                </li>\n              }\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Drag Card -->\n</div>\n', styles: ["/* src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.scss */\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.list-group-item {\n  background-color: white;\n  border: 1px solid #c8bebe;\n}\n/*# sourceMappingURL=drap-drop.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DrapDropComponent, { className: "DrapDropComponent", filePath: "src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.ts", lineNumber: 11 });
})();
export {
  DrapDropComponent
};
//# sourceMappingURL=chunk-F4XHWMS4.js.map
