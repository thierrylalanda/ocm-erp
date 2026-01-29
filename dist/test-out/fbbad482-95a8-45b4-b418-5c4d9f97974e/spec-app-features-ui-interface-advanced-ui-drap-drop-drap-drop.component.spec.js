import {
  DragDropModule,
  init_drag_drop,
  moveItemInArray,
  transferArrayItem
} from "./chunk-VLP7WVYQ.js";
import "./chunk-BAYPUVG5.js";
import "./chunk-V5QKIDZC.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.html
var drap_drop_component_default;
var init_drap_drop_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.html"() {
    drap_drop_component_default = '<!-- Page Header -->\n<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Drag Drop</h4>\n  </div>\n\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>\n\n          <li class="breadcrumb-item active">Drag Drop</li>\n      </ol>\n  </div>\n</div>\n<!-- /Page Header -->\n<div class="row">\n  @for (item of dragCardOne; track item) {\n    <!-- Drag Card -->\n    <div class="col-md-4" cdkDrag>\n      <div class="card mb-0 mt-3  text-white" [class]="item.colorClass">\n        <div class="card-header ">\n          <h5 class="card-title text-white">{{ item.tittle }}</h5>\n        </div>\n        <div class="card-body">\n          <p>\n            {{ item.content }}\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- /Drag Card -->\n  }\n</div>\n\n<div class="row">\n  <div class="col-md-12">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Basic List Group Sortable</h5>\n      </div>\n      <div class="card-body">\n        <div cdkDropList (cdkDropListDropped)="drop($event)">\n          <!-- Drag Card -->\n          <ul class="list-group">\n            @for (item of basicListGroup; track item) {\n              <li\n                class="list-group-item"\n                cdkDrag\n                >\n                <div *cdkDragPlaceholder></div>\n                <div class="media">\n                  <div class="media-body">\n                    <h5 class="mt-0">{{ item.tittle }}</h5>\n                    <p>{{ item.content }}</p>\n                  </div>\n                </div>\n              </li>\n            }\n          </ul>\n        </div>\n        <!-- /Drag Card -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  <!-- Drag Card -->\n  <div class="col-md-12">\n    <div class="card" cdkDropListGroup>\n      <div class="card-header">\n        <h5 class="card-title">Drag Handler</h5>\n      </div>\n      <div class="card-body">\n        <div class="row">\n          <div class="col-sm-6">\n            <h4 class="my-1">To Do</h4>\n            <ul\n              class="list-group"\n              cdkDropList\n              cdkDropListSortingDisabled\n              [cdkDropListData]="todoList"\n              (cdkDropListDropped)="dropTodo($event)"\n              >\n              @for (item of todoList; track item) {\n                <li cdkDrag class="list-group-item">\n                  <span class="handle">+</span> {{ item }}\n                </li>\n              }\n            </ul>\n          </div>\n          <div class="col-sm-6">\n            <h4 class="my-1">Done</h4>\n            <ul\n              class="list-group"\n              cdkDropList\n              [cdkDropListData]="doneList"\n              (cdkDropListDropped)="dropTodo($event)"\n              >\n              @for (item of doneList; track item) {\n                <li cdkDrag class="list-group-item">\n                  <span class="handle">+</span> {{ item }}\n                </li>\n              }\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Drag Card -->\n</div>\n';
  }
});

// angular:jit:style:src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.scss
var drap_drop_component_default2;
var init_drap_drop_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.scss"() {
    drap_drop_component_default2 = "/* src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.scss */\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.list-group-item {\n  background-color: white;\n  border: 1px solid #c8bebe;\n}\n/*# sourceMappingURL=drap-drop.component.css.map */\n";
  }
});

// src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.ts
var DrapDropComponent;
var init_drap_drop_component3 = __esm({
  "src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_drap_drop_component();
    init_drap_drop_component2();
    init_core();
    init_common();
    init_drag_drop();
    DrapDropComponent = class DrapDropComponent2 {
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
    };
    DrapDropComponent = __decorate([
      Component({
        selector: "app-drap-drop",
        template: drap_drop_component_default,
        imports: [CommonModule, DragDropModule],
        styles: [drap_drop_component_default2]
      })
    ], DrapDropComponent);
  }
});

// src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.spec.ts
var require_drap_drop_component_spec = __commonJS({
  "src/app/features/ui-interface/advanced-ui/drap-drop/drap-drop.component.spec.ts"(exports) {
    init_testing();
    init_drap_drop_component3();
    describe("DrapDropComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [DrapDropComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DrapDropComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_drap_drop_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-advanced-ui-drap-drop-drap-drop.component.spec.js.map
