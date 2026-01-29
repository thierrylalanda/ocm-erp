import {
  COMPOSITION_BUFFER_MODE,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  MinLengthValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  init_forms,
  ɵNgNoValidate
} from "./chunk-2RBILSOV.js";
import {
  animate,
  init_animations,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "./chunk-5B5ZAECM.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  init_common
} from "./chunk-HQHIWYWO.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostBinding,
  HostListener,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  Pipe,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  core_exports,
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  forwardRef,
  init_core,
  init_esm,
  init_operators,
  map,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule,
  ɵɵngDeclarePipe
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// node_modules/ng2-material-dropdown/fesm2020/ng2-material-dropdown.mjs
function onEscape() {
  this.hide();
}
function arrowKeysHandler(event) {
  if ([38, 40].indexOf(event.keyCode) > -1) {
    event.preventDefault();
  }
}
var Ng2DropdownButton, KEYS, onSwitchNext, onSwitchPrev, onBackspace, onItemClicked, ACTIONS, Ng2DropdownState, DropdownStateService, Ng2MenuItem, Ng2DropdownMenu, Ng2Dropdown, Ng2DropdownModule;
var init_ng2_material_dropdown = __esm({
  "node_modules/ng2-material-dropdown/fesm2020/ng2-material-dropdown.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_common();
    init_animations();
    Ng2DropdownButton = class {
      constructor(element) {
        this.element = element;
        this.onMenuToggled = new EventEmitter();
        this.showCaret = true;
      }
      /**
       * @name toggleMenu
       * @desc emits event to toggle menu
       */
      toggleMenu() {
        this.onMenuToggled.emit(true);
      }
      /**
       * @name getPosition
       * @desc returns position of the button
       */
      getPosition() {
        return this.element.nativeElement.getBoundingClientRect();
      }
    };
    Ng2DropdownButton.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2DropdownButton, deps: [{ token: ElementRef }], target: FactoryTarget.Component });
    Ng2DropdownButton.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: Ng2DropdownButton, selector: "ng2-dropdown-button", inputs: { showCaret: "showCaret" }, outputs: { onMenuToggled: "onMenuToggled" }, ngImport: core_exports, template: `<button class='ng2-dropdown-button' type="button" (click)="toggleMenu()" tabindex="0s">
    <span class="ng2-dropdown-button__label">
        <ng-content></ng-content>
    </span>

    <span class="ng2-dropdown-button__caret" *ngIf="showCaret">
        <svg enable-background="new 0 0 32 32" height="16px" id="\u0421\u043B\u043E\u0439_1" version="1.1" viewBox="0 0 32 32" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z" fill="#121313" id="Expand_More"/><g/><g/><g/><g/><g/><g/></svg>
    </span>
</button>
`, styles: [".ng2-dropdown-button{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196F3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}\n"], directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2DropdownButton, decorators: [{
      type: Component,
      args: [{ selector: "ng2-dropdown-button", template: `<button class='ng2-dropdown-button' type="button" (click)="toggleMenu()" tabindex="0s">
    <span class="ng2-dropdown-button__label">
        <ng-content></ng-content>
    </span>

    <span class="ng2-dropdown-button__caret" *ngIf="showCaret">
        <svg enable-background="new 0 0 32 32" height="16px" id="\u0421\u043B\u043E\u0439_1" version="1.1" viewBox="0 0 32 32" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z" fill="#121313" id="Expand_More"/><g/><g/><g/><g/><g/><g/></svg>
    </span>
</button>
`, styles: [".ng2-dropdown-button{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196F3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}\n"] }]
    }], ctorParameters: function() {
      return [{ type: ElementRef }];
    }, propDecorators: { onMenuToggled: [{
      type: Output
    }], showCaret: [{
      type: Input
    }] } });
    KEYS = {
      BACKSPACE: 9,
      PREV: 38,
      NEXT: 40,
      ENTER: 13,
      ESCAPE: 27
    };
    onSwitchNext = (index, items, state2) => {
      if (index < items.length - 1) {
        state2.select(items[index + 1], true);
      }
    };
    onSwitchPrev = (index, items, state2) => {
      if (index > 0) {
        state2.select(items[index - 1], true);
      }
    };
    onBackspace = (index, items, state2) => {
      if (index < items.length - 1) {
        state2.select(items[index + 1], true);
      } else {
        state2.select(items[0], true);
      }
    };
    onItemClicked = (index, items, state2) => {
      return state2.selectedItem ? state2.selectedItem.click() : void 0;
    };
    ACTIONS = {
      [KEYS.BACKSPACE]: onBackspace,
      [KEYS.PREV]: onSwitchPrev,
      [KEYS.NEXT]: onSwitchNext,
      [KEYS.ENTER]: onItemClicked,
      [KEYS.ESCAPE]: onEscape
    };
    Ng2DropdownState = class {
      constructor() {
        this.onItemSelected = new EventEmitter();
        this.onItemClicked = new EventEmitter();
        this.onItemDestroyed = new EventEmitter();
      }
      /**
       * @name selectedItem
       * @desc getter for _selectedItem
       */
      get selectedItem() {
        return this._selectedItem;
      }
      /**
       * @name selects a menu item and emits event
       * @param item
       */
      select(item, dispatchEvent = true) {
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
          return;
        }
        item.focus();
        this.onItemSelected.emit(item);
      }
      /**
       * @name unselect
       * @desc sets _selectedItem as undefined
       */
      unselect() {
        this._selectedItem = void 0;
      }
    };
    DropdownStateService = class {
      constructor() {
        this.menuState = {
          isVisible: false,
          toString() {
            return this.isVisible === true ? "visible" : "hidden";
          }
        };
        this.dropdownState = new Ng2DropdownState();
      }
    };
    DropdownStateService.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: DropdownStateService, deps: [], target: FactoryTarget.Injectable });
    DropdownStateService.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: DropdownStateService });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: DropdownStateService, decorators: [{
      type: Injectable
    }] });
    Ng2MenuItem = class {
      constructor(state2, element) {
        this.state = state2;
        this.element = element;
        this.preventClose = false;
      }
      ngOnDestroy() {
        this.state.dropdownState.onItemDestroyed.emit(this);
      }
      /**
       * @name isSelected
       * @desc returns current selected item
       */
      get isSelected() {
        return this === this.state.dropdownState.selectedItem;
      }
      /**
       * @name click
       * @desc emits select event
       */
      select($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
          $event.stopPropagation();
          $event.preventDefault();
        }
      }
      /**
       * @name click
       * @desc emits click event
       */
      click() {
        this.state.dropdownState.onItemClicked.emit(this);
      }
      /**
       * @name focus
       */
      focus() {
        this.element.nativeElement.children[0].focus();
      }
    };
    Ng2MenuItem.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2MenuItem, deps: [{ token: DropdownStateService }, { token: ElementRef }], target: FactoryTarget.Component });
    Ng2MenuItem.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: Ng2MenuItem, selector: "ng2-menu-item", inputs: { preventClose: "preventClose", value: "value" }, ngImport: core_exports, template: `
        <div
            class="ng2-menu-item"
            role="button"
            tabindex="0"
            [class.ng2-menu-item--selected]="isSelected"
            (keydown.enter)="click()"
            (click)="click()"
            (mouseover)="select()"
        >
            <ng-content></ng-content>
        </div>
    `, isInline: true, styles: [".ng2-menu-item{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;color:#000000de;cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) ::ng-deep [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:#00000070}\n"] });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2MenuItem, decorators: [{
      type: Component,
      args: [{ selector: "ng2-menu-item", template: `
        <div
            class="ng2-menu-item"
            role="button"
            tabindex="0"
            [class.ng2-menu-item--selected]="isSelected"
            (keydown.enter)="click()"
            (click)="click()"
            (mouseover)="select()"
        >
            <ng-content></ng-content>
        </div>
    `, styles: [".ng2-menu-item{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;color:#000000de;cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) ::ng-deep [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:#00000070}\n"] }]
    }], ctorParameters: function() {
      return [{ type: DropdownStateService }, { type: ElementRef }];
    }, propDecorators: { preventClose: [{
      type: Input
    }], value: [{
      type: Input
    }] } });
    Ng2DropdownMenu = class {
      constructor(dropdownState, element, renderer) {
        this.dropdownState = dropdownState;
        this.element = element;
        this.renderer = renderer;
        this.width = 4;
        this.focusFirstElement = true;
        this.appendToBody = true;
        this.zIndex = 1e3;
        this.listeners = {
          arrowHandler: void 0,
          handleKeypress: void 0
        };
      }
      /**
       * @name show
       * @shows menu and selects first item
       */
      show(position, dynamic = true) {
        const dc = typeof document !== "undefined" ? document : void 0;
        const wd = typeof window !== "undefined" ? window : void 0;
        if (!this.dropdownState.menuState.isVisible) {
          this.listeners.handleKeypress = this.renderer.listen(dc.body, "keydown", this.handleKeypress.bind(this));
          this.listeners.arrowHandler = this.renderer.listen(wd, "keydown", arrowKeysHandler);
        }
        this.dropdownState.menuState.isVisible = true;
        if (position) {
          this.updatePosition(position, dynamic);
        }
      }
      /**
       * @name hide
       * @desc hides menu
       */
      hide() {
        this.dropdownState.menuState.isVisible = false;
        this.dropdownState.dropdownState.unselect();
        this.listeners.arrowHandler && this.listeners.arrowHandler();
        this.listeners.handleKeypress && this.listeners.handleKeypress();
      }
      /**
       * @name updatePosition
       * @desc updates the menu position every time it is toggled
       * @param position {ClientRect}
       * @param dynamic {boolean}
       */
      updatePosition(position, dynamic) {
        this.position = position;
        this.updateOnChange(dynamic);
      }
      /**
       * @name handleKeypress
       * @desc executes functions on keyPress based on the key pressed
       * @param $event
       */
      handleKeypress($event) {
        const key = $event.keyCode;
        const items = this.items.toArray();
        const index = items.indexOf(this.dropdownState.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
          return;
        }
        ACTIONS[key].call(this, index, items, this.dropdownState.dropdownState);
      }
      /**
       * @name getMenuElement
       */
      getMenuElement() {
        return this.element.nativeElement.children[0];
      }
      /**
       * @name calcPositionOffset
       * @param position
       */
      calcPositionOffset(position) {
        const wd = typeof window !== "undefined" ? window : void 0;
        const dc = typeof document !== "undefined" ? document : void 0;
        if (!wd || !dc || !position) {
          return;
        }
        const element = this.getMenuElement();
        const supportPageOffset = wd.pageXOffset !== void 0;
        const isCSS1Compat = (dc.compatMode || "") === "CSS1Compat";
        const x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ? dc.documentElement.scrollLeft : dc.body.scrollLeft;
        const y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ? dc.documentElement.scrollTop : dc.body.scrollTop;
        let { top, left } = this.applyOffset(`${position.top + (this.appendToBody ? y - 15 : 0)}px`, `${position.left + x - 5}px`);
        const clientWidth = element.clientWidth;
        const clientHeight = element.clientHeight;
        const marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        const marginFromRight = parseInt(left) + clientWidth;
        const windowScrollHeight = wd.innerHeight + wd.scrollY;
        const windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
          top = `${parseInt(top.replace("px", "")) - clientHeight}px`;
        }
        if (marginFromRight >= windowScrollWidth) {
          const marginRight = marginFromRight - windowScrollWidth + 30;
          left = `${parseInt(left.replace("px", "")) - marginRight}px`;
        }
        return { top, left };
      }
      applyOffset(top, left) {
        if (!this.offset) {
          return { top, left };
        }
        const offset = this.offset.split(" ");
        if (!offset[1]) {
          offset[1] = "0";
        }
        top = `${parseInt(top.replace("px", "")) + parseInt(offset[0])}px`;
        left = `${parseInt(left.replace("px", "")) + parseInt(offset[1])}px`;
        return { top, left };
      }
      ngOnInit() {
        const dc = typeof document !== "undefined" ? document : void 0;
        if (this.appendToBody) {
          dc.body.appendChild(this.element.nativeElement);
        }
      }
      updateOnChange(dynamic = true) {
        const element = this.getMenuElement();
        const position = this.calcPositionOffset(this.position);
        if (position) {
          this.renderer.setStyle(element, "top", position.top.toString());
          this.renderer.setStyle(element, "left", position.left.toString());
        }
        if (this.focusFirstElement && this.items.first && !this.dropdownState.dropdownState.selectedItem) {
          this.dropdownState.dropdownState.select(this.items.first, false);
        }
      }
      ngOnDestroy() {
        const elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
          this.listeners.handleKeypress();
        }
      }
    };
    Ng2DropdownMenu.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2DropdownMenu, deps: [{ token: DropdownStateService }, { token: ElementRef }, { token: Renderer2 }], target: FactoryTarget.Component });
    Ng2DropdownMenu.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: Ng2DropdownMenu, selector: "ng2-dropdown-menu", inputs: { width: "width", focusFirstElement: "focusFirstElement", offset: "offset", appendToBody: "appendToBody", zIndex: "zIndex" }, queries: [{ propertyName: "items", predicate: Ng2MenuItem, descendants: true }], ngImport: core_exports, template: `
        <!-- MENU -->
        <div
            class="ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}"
            [class.ng2-dropdown-menu--inside-element]="!appendToBody"
            [class.ng2-dropdown-menu--open]="dropdownState.menuState.isVisible"
            [style.z-index]="zIndex"
            [@fade]="dropdownState.menuState.toString()"
        >
            <div
                class="ng2-dropdown-menu__options-container"
                [@opacity]="dropdownState.menuState.toString()"
            >
                <ng-content></ng-content>
            </div>
        </div>

        <!-- BACKDROP -->
        <div
            class="ng2-dropdown-backdrop"
            *ngIf="dropdownState.menuState.isVisible"
            (click)="hide()"
        ></div>
    `, isInline: true, styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px #0000004d;position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host ::ng-deep .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}\n"], directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], animations: [
      trigger("fade", [
        state("visible", style({ opacity: 1, height: "*", width: "*" })),
        state("hidden", style({ opacity: 0, overflow: "hidden", height: 0, width: 0 })),
        transition("hidden => visible", [
          animate("250ms ease-in", style({ opacity: 1, height: "*", width: "*" }))
        ]),
        transition("visible => hidden", [
          animate("350ms ease-out", style({ opacity: 0, width: 0, height: 0 }))
        ])
      ]),
      trigger("opacity", [
        transition("hidden => visible", [
          animate("450ms ease-in", keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 })
          ]))
        ]),
        transition("visible => hidden", [
          animate("250ms ease-out", keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0.5, offset: 0.3 }),
            style({ opacity: 0, offset: 1 })
          ]))
        ])
      ])
    ] });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2DropdownMenu, decorators: [{
      type: Component,
      args: [{ selector: "ng2-dropdown-menu", template: `
        <!-- MENU -->
        <div
            class="ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}"
            [class.ng2-dropdown-menu--inside-element]="!appendToBody"
            [class.ng2-dropdown-menu--open]="dropdownState.menuState.isVisible"
            [style.z-index]="zIndex"
            [@fade]="dropdownState.menuState.toString()"
        >
            <div
                class="ng2-dropdown-menu__options-container"
                [@opacity]="dropdownState.menuState.toString()"
            >
                <ng-content></ng-content>
            </div>
        </div>

        <!-- BACKDROP -->
        <div
            class="ng2-dropdown-backdrop"
            *ngIf="dropdownState.menuState.isVisible"
            (click)="hide()"
        ></div>
    `, animations: [
        trigger("fade", [
          state("visible", style({ opacity: 1, height: "*", width: "*" })),
          state("hidden", style({ opacity: 0, overflow: "hidden", height: 0, width: 0 })),
          transition("hidden => visible", [
            animate("250ms ease-in", style({ opacity: 1, height: "*", width: "*" }))
          ]),
          transition("visible => hidden", [
            animate("350ms ease-out", style({ opacity: 0, width: 0, height: 0 }))
          ])
        ]),
        trigger("opacity", [
          transition("hidden => visible", [
            animate("450ms ease-in", keyframes([
              style({ opacity: 0, offset: 0 }),
              style({ opacity: 1, offset: 1 })
            ]))
          ]),
          transition("visible => hidden", [
            animate("250ms ease-out", keyframes([
              style({ opacity: 1, offset: 0 }),
              style({ opacity: 0.5, offset: 0.3 }),
              style({ opacity: 0, offset: 1 })
            ]))
          ])
        ])
      ], styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px #0000004d;position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host ::ng-deep .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}\n"] }]
    }], ctorParameters: function() {
      return [{ type: DropdownStateService }, { type: ElementRef }, { type: Renderer2 }];
    }, propDecorators: { width: [{
      type: Input
    }], focusFirstElement: [{
      type: Input
    }], offset: [{
      type: Input
    }], appendToBody: [{
      type: Input
    }], zIndex: [{
      type: Input
    }], items: [{
      type: ContentChildren,
      args: [Ng2MenuItem, { descendants: true }]
    }] } });
    Ng2Dropdown = class {
      constructor(state2) {
        this.state = state2;
        this.dynamicUpdate = true;
        this.onItemClicked = new EventEmitter();
        this.onItemSelected = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
      }
      ngOnInit() {
        this.state.dropdownState.onItemClicked.subscribe((item) => {
          this.onItemClicked.emit(item);
          if (item.preventClose) {
            return;
          }
          this.hide.call(this);
        });
        if (this.button) {
          this.button.onMenuToggled.subscribe(() => {
            this.toggleMenu();
          });
        }
        this.state.dropdownState.onItemSelected.subscribe((item) => {
          this.onItemSelected.emit(item);
        });
        this.state.dropdownState.onItemDestroyed.subscribe((item) => {
          let newSelectedItem;
          const items = this.menu.items.toArray();
          if (item !== this.state.dropdownState.selectedItem) {
            return;
          }
          if (this.menu.focusFirstElement) {
            newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
          }
          this.state.dropdownState.select(newSelectedItem);
        });
      }
      /**
       * @name toggleMenu
       * @desc toggles menu visibility
       */
      toggleMenu(position = this.button.getPosition()) {
        this.state.menuState.isVisible ? this.hide() : this.show(position);
      }
      /**
       * - hides dropdown
       * @name hide
       */
      hide() {
        this.menu.hide();
        this.onHide.emit(this);
      }
      /**
       * - shows dropdown
       * @name show
       * @param position
       */
      show(position = this.button.getPosition()) {
        this.menu.show(position, this.dynamicUpdate);
        this.onShow.emit(this);
      }
      /**
       * @name scrollListener
       */
      scrollListener() {
        if (this.button && this.dynamicUpdate) {
          this.menu.updatePosition(this.button.getPosition(), true);
        }
      }
    };
    Ng2Dropdown.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2Dropdown, deps: [{ token: DropdownStateService }], target: FactoryTarget.Component });
    Ng2Dropdown.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: Ng2Dropdown, selector: "ng2-dropdown", inputs: { dynamicUpdate: "dynamicUpdate" }, outputs: { onItemClicked: "onItemClicked", onItemSelected: "onItemSelected", onShow: "onShow", onHide: "onHide" }, host: { listeners: { "window:scroll": "scrollListener()" } }, providers: [DropdownStateService], queries: [{ propertyName: "button", first: true, predicate: Ng2DropdownButton, descendants: true, static: true }, { propertyName: "menu", first: true, predicate: Ng2DropdownMenu, descendants: true, static: true }], ngImport: core_exports, template: `
        <div class="ng2-dropdown-container">
            <ng-content select="ng2-dropdown-button"></ng-content>
            <ng-content select="ng2-dropdown-menu"></ng-content>
        </div>
    `, isInline: true });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2Dropdown, decorators: [{
      type: Component,
      args: [{
        selector: "ng2-dropdown",
        template: `
        <div class="ng2-dropdown-container">
            <ng-content select="ng2-dropdown-button"></ng-content>
            <ng-content select="ng2-dropdown-menu"></ng-content>
        </div>
    `,
        providers: [DropdownStateService]
      }]
    }], ctorParameters: function() {
      return [{ type: DropdownStateService }];
    }, propDecorators: { button: [{
      type: ContentChild,
      args: [Ng2DropdownButton, { static: true }]
    }], menu: [{
      type: ContentChild,
      args: [Ng2DropdownMenu, { static: true }]
    }], dynamicUpdate: [{
      type: Input
    }], onItemClicked: [{
      type: Output
    }], onItemSelected: [{
      type: Output
    }], onShow: [{
      type: Output
    }], onHide: [{
      type: Output
    }], scrollListener: [{
      type: HostListener,
      args: ["window:scroll"]
    }] } });
    Ng2DropdownModule = class {
    };
    Ng2DropdownModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2DropdownModule, deps: [], target: FactoryTarget.NgModule });
    Ng2DropdownModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2DropdownModule, declarations: [
      Ng2Dropdown,
      Ng2MenuItem,
      Ng2DropdownButton,
      Ng2DropdownMenu
    ], imports: [CommonModule], exports: [
      Ng2MenuItem,
      Ng2DropdownButton,
      Ng2DropdownMenu,
      Ng2Dropdown
    ] });
    Ng2DropdownModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2DropdownModule, imports: [[
      CommonModule
    ]] });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: Ng2DropdownModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [
          Ng2MenuItem,
          Ng2DropdownButton,
          Ng2DropdownMenu,
          Ng2Dropdown
        ],
        declarations: [
          Ng2Dropdown,
          Ng2MenuItem,
          Ng2DropdownButton,
          Ng2DropdownMenu
        ],
        imports: [
          CommonModule
        ]
      }]
    }] });
  }
});

// node_modules/ngx-chips/fesm2020/ngx-chips.mjs
function matchingFn(value, target) {
  const targetValue = target[this.displayBy].toString();
  return targetValue && targetValue.toLowerCase().indexOf(value.toLowerCase()) >= 0;
}
function isObject(obj) {
  return obj === Object(obj);
}
function listen(listenerType, action, condition = true) {
  if (!this.listeners.hasOwnProperty(listenerType)) {
    throw new Error("The event entered may be wrong");
  }
  if (!condition) {
    return;
  }
  this.listeners[listenerType].push(action);
}
var escape, HighlightPipe, PLACEHOLDER, SECONDARY_PLACEHOLDER, KEYDOWN, KEYUP, MAX_ITEMS_WARNING, ACTIONS_KEYS, KEY_PRESS_ACTIONS, DRAG_AND_DROP_KEY, NEXT, PREV, DragProvider, defaults, OptionsProvider, TagInputAccessor, TagInputForm, TagRipple, DeleteIconComponent, navigator, isChrome, TagComponent, animations, TagInputDropdown, CUSTOM_ACCESSOR, TagInputComponent, optionsProvider, TagInputModule;
var init_ngx_chips = __esm({
  "node_modules/ngx-chips/fesm2020/ngx-chips.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_forms();
    init_forms();
    init_common();
    init_common();
    init_ng2_material_dropdown();
    init_ng2_material_dropdown();
    init_esm();
    init_animations();
    init_operators();
    escape = (s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    HighlightPipe = class {
      /**
       * @name transform
       * @param value {string}
       * @param arg {string}
       */
      transform(value, arg) {
        if (!arg.trim()) {
          return value;
        }
        try {
          const regex = new RegExp(`(${escape(arg)})`, "i");
          return value.replace(regex, "<b>$1</b>");
        } catch (e) {
          return value;
        }
      }
    };
    HighlightPipe.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: HighlightPipe, deps: [], target: FactoryTarget.Pipe });
    HighlightPipe.\u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: HighlightPipe, name: "highlight" });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: HighlightPipe, decorators: [{
      type: Pipe,
      args: [{
        name: "highlight"
      }]
    }] });
    PLACEHOLDER = "+ Tag";
    SECONDARY_PLACEHOLDER = "Enter a new tag";
    KEYDOWN = "keydown";
    KEYUP = "keyup";
    MAX_ITEMS_WARNING = "The number of items specified was greater than the property max-items.";
    ACTIONS_KEYS = {
      DELETE: "DELETE",
      SWITCH_PREV: "SWITCH_PREV",
      SWITCH_NEXT: "SWITCH_NEXT",
      TAB: "TAB"
    };
    KEY_PRESS_ACTIONS = {
      8: ACTIONS_KEYS.DELETE,
      46: ACTIONS_KEYS.DELETE,
      37: ACTIONS_KEYS.SWITCH_PREV,
      39: ACTIONS_KEYS.SWITCH_NEXT,
      9: ACTIONS_KEYS.TAB
    };
    DRAG_AND_DROP_KEY = "Text";
    NEXT = "NEXT";
    PREV = "PREV";
    DragProvider = class {
      constructor() {
        this.state = {
          dragging: false,
          dropping: false,
          index: void 0
        };
      }
      /**
       * @name setDraggedItem
       * @param event
       * @param tag
       */
      setDraggedItem(event, tag) {
        if (event && event.dataTransfer) {
          event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
        }
      }
      /**
       * @name getDraggedItem
       * @param event
       */
      getDraggedItem(event) {
        if (event && event.dataTransfer) {
          const data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
          try {
            return JSON.parse(data);
          } catch {
            return;
          }
        }
      }
      /**
       * @name setSender
       * @param sender
       */
      setSender(sender) {
        this.sender = sender;
      }
      /**
       * @name setReceiver
       * @param receiver
       */
      setReceiver(receiver) {
        this.receiver = receiver;
      }
      /**
       * @name onTagDropped
       * @param tag
       * @param indexDragged
       * @param indexDropped
       */
      onTagDropped(tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
      }
      /**
       * @name setState
       * @param state
       */
      setState(state2) {
        this.state = __spreadValues(__spreadValues({}, this.state), state2);
      }
      /**
       * @name getState
       * @param key
       */
      getState(key) {
        return key ? this.state[key] : this.state;
      }
      /**
       * @name onDragEnd
       */
      onDragEnd() {
        this.setState({
          dragging: false,
          dropping: false,
          index: void 0
        });
      }
    };
    DragProvider.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: DragProvider, deps: [], target: FactoryTarget.Injectable });
    DragProvider.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: DragProvider });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: DragProvider, decorators: [{
      type: Injectable
    }] });
    defaults = {
      tagInput: {
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: "",
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: "",
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ",",
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: "",
        disable: false,
        dragZone: "",
        onRemoving: void 0,
        onAdding: void 0,
        displayBy: "display",
        identifyBy: "value",
        animationDuration: {
          enter: "250ms",
          leave: "150ms"
        }
      },
      dropdown: {
        displayBy: "display",
        identifyBy: "value",
        appendToBody: true,
        offset: "50 0",
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1e3,
        matchingFn
      }
    };
    OptionsProvider = class _OptionsProvider {
      setOptions(options) {
        _OptionsProvider.defaults.tagInput = __spreadValues(__spreadValues({}, defaults.tagInput), options.tagInput);
        _OptionsProvider.defaults.dropdown = __spreadValues(__spreadValues({}, defaults.dropdown), options.dropdown);
      }
    };
    OptionsProvider.defaults = defaults;
    TagInputAccessor = class {
      constructor() {
        this._items = [];
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
      }
      get items() {
        return this._items;
      }
      set items(items) {
        this._items = items;
        this._onChangeCallback(this._items);
      }
      onTouched() {
        this._onTouchedCallback();
      }
      writeValue(items) {
        this._items = items || [];
      }
      registerOnChange(fn) {
        this._onChangeCallback = fn;
      }
      registerOnTouched(fn) {
        this._onTouchedCallback = fn;
      }
      /**
       * @name getItemValue
       * @param item
       * @param fromDropdown
       */
      getItemValue(item, fromDropdown = false) {
        const property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
        return isObject(item) ? item[property] : item;
      }
      /**
       * @name getItemDisplay
       * @param item
       * @param fromDropdown
       */
      getItemDisplay(item, fromDropdown = false) {
        const property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
        return isObject(item) ? item[property] : item;
      }
      /**
       * @name getItemsWithout
       * @param index
       */
      getItemsWithout(index) {
        return this.items.filter((item, position) => position !== index);
      }
    };
    TagInputAccessor.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputAccessor, deps: [], target: FactoryTarget.Directive });
    TagInputAccessor.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TagInputAccessor, inputs: { displayBy: "displayBy", identifyBy: "identifyBy" }, ngImport: core_exports });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputAccessor, decorators: [{
      type: Directive
    }], propDecorators: { displayBy: [{
      type: Input
    }], identifyBy: [{
      type: Input
    }] } });
    TagInputForm = class {
      constructor() {
        this.onSubmit = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onKeyup = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.inputTextChange = new EventEmitter();
        this.validators = [];
        this.asyncValidators = [];
        this.tabindex = "";
        this.disabled = false;
        this.item = new FormControl({ value: "", disabled: this.disabled });
      }
      /**
       * @name inputText
       */
      get inputText() {
        return this.item.value;
      }
      /**
       * @name inputText
       * @param text {string}
       */
      set inputText(text) {
        this.item.setValue(text);
        this.inputTextChange.emit(text);
      }
      ngOnInit() {
        this.item.setValidators(this.validators);
        this.item.setAsyncValidators(this.asyncValidators);
        this.form = new FormGroup({
          item: this.item
        });
      }
      ngOnChanges(changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
          if (changes.disabled.currentValue) {
            this.form.controls["item"].disable();
          } else {
            this.form.controls["item"].enable();
          }
        }
      }
      /**
       * @name value
       */
      get value() {
        return this.form.get("item");
      }
      /**
       * @name isInputFocused
       */
      isInputFocused() {
        const doc = typeof document !== "undefined" ? document : void 0;
        return doc ? doc.activeElement === this.input.nativeElement : false;
      }
      /**
       * @name getErrorMessages
       * @param messages
       */
      getErrorMessages(messages) {
        return Object.keys(messages).filter((err) => this.value.hasError(err)).map((err) => messages[err]);
      }
      /**
       * @name hasErrors
       */
      hasErrors() {
        const { dirty, value, valid } = this.form;
        return dirty && value.item && !valid;
      }
      /**
       * @name focus
       */
      focus() {
        this.input.nativeElement.focus();
      }
      /**
       * @name blur
       */
      blur() {
        this.input.nativeElement.blur();
      }
      /**
       * @name getElementPosition
       */
      getElementPosition() {
        return this.input.nativeElement.getBoundingClientRect();
      }
      /**
       * - removes input from the component
       * @name destroy
       */
      destroy() {
        const input = this.input.nativeElement;
        input.parentElement.removeChild(input);
      }
      /**
       * @name onKeyDown
       * @param $event
       */
      onKeyDown($event) {
        this.inputText = this.value.value;
        if ($event.key === "Enter") {
          this.submit($event);
        } else {
          return this.onKeydown.emit($event);
        }
      }
      /**
       * @name onKeyUp
       * @param $event
       */
      onKeyUp($event) {
        this.inputText = this.value.value;
        return this.onKeyup.emit($event);
      }
      /**
       * @name submit
       */
      submit($event) {
        $event.preventDefault();
        this.onSubmit.emit($event);
      }
    };
    TagInputForm.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputForm, deps: [], target: FactoryTarget.Component });
    TagInputForm.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TagInputForm, selector: "tag-input-form", inputs: { placeholder: "placeholder", validators: "validators", asyncValidators: "asyncValidators", inputId: "inputId", inputClass: "inputClass", tabindex: "tabindex", disabled: "disabled", inputText: "inputText" }, outputs: { onSubmit: "onSubmit", onBlur: "onBlur", onFocus: "onFocus", onKeyup: "onKeyup", onKeydown: "onKeydown", inputTextChange: "inputTextChange" }, viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true }], usesOnChanges: true, ngImport: core_exports, template: '<!-- form -->\n<form (ngSubmit)="submit($event)" [formGroup]="form">\n    <input #input\n\n           type="text"\n           class="ng2-tag-input__text-input"\n           autocomplete="off"\n           tabindex="{{ disabled ? -1 : tabindex ? tabindex : 0 }}"\n           minlength="1"\n           formControlName="item"\n\n           [ngClass]="inputClass"\n           [attr.id]="inputId"\n           [attr.placeholder]="placeholder"\n           [attr.aria-label]="placeholder"\n           [attr.tabindex]="tabindex"\n           [attr.disabled]="disabled ? disabled : null"\n\n           (focus)="onFocus.emit($event)"\n           (blur)="onBlur.emit($event)"\n           (keydown)="onKeyDown($event)"\n           (keyup)="onKeyUp($event)"\n    />\n</form>\n', styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,Helvetica Neue,sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}\n"], directives: [{ type: \u0275NgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputForm, decorators: [{
      type: Component,
      args: [{ selector: "tag-input-form", template: '<!-- form -->\n<form (ngSubmit)="submit($event)" [formGroup]="form">\n    <input #input\n\n           type="text"\n           class="ng2-tag-input__text-input"\n           autocomplete="off"\n           tabindex="{{ disabled ? -1 : tabindex ? tabindex : 0 }}"\n           minlength="1"\n           formControlName="item"\n\n           [ngClass]="inputClass"\n           [attr.id]="inputId"\n           [attr.placeholder]="placeholder"\n           [attr.aria-label]="placeholder"\n           [attr.tabindex]="tabindex"\n           [attr.disabled]="disabled ? disabled : null"\n\n           (focus)="onFocus.emit($event)"\n           (blur)="onBlur.emit($event)"\n           (keydown)="onKeyDown($event)"\n           (keyup)="onKeyUp($event)"\n    />\n</form>\n', styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,Helvetica Neue,sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}\n"] }]
    }], propDecorators: { onSubmit: [{
      type: Output
    }], onBlur: [{
      type: Output
    }], onFocus: [{
      type: Output
    }], onKeyup: [{
      type: Output
    }], onKeydown: [{
      type: Output
    }], inputTextChange: [{
      type: Output
    }], placeholder: [{
      type: Input
    }], validators: [{
      type: Input
    }], asyncValidators: [{
      type: Input
    }], inputId: [{
      type: Input
    }], inputClass: [{
      type: Input
    }], tabindex: [{
      type: Input
    }], disabled: [{
      type: Input
    }], input: [{
      type: ViewChild,
      args: ["input"]
    }], inputText: [{
      type: Input
    }] } });
    TagRipple = class {
      constructor() {
        this.state = "none";
      }
    };
    TagRipple.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagRipple, deps: [], target: FactoryTarget.Component });
    TagRipple.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TagRipple, selector: "tag-ripple", inputs: { state: "state" }, ngImport: core_exports, template: `
        <div class="tag-ripple" [@ink]="state"></div>
    `, isInline: true, styles: [":host{width:100%;height:100%;left:0;overflow:hidden;position:absolute}.tag-ripple{background:rgba(0,0,0,.1);top:50%;left:50%;height:100%;transform:translate(-50%,-50%);position:absolute}\n"], animations: [
      trigger("ink", [
        state("none", style({ width: 0, opacity: 0 })),
        transition("none => clicked", [
          animate(300, keyframes([
            style({ opacity: 1, offset: 0, width: "30%", borderRadius: "100%" }),
            style({ opacity: 1, offset: 0.5, width: "50%" }),
            style({ opacity: 0.5, offset: 1, width: "100%", borderRadius: "16px" })
          ]))
        ])
      ])
    ] });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagRipple, decorators: [{
      type: Component,
      args: [{
        selector: "tag-ripple",
        styles: [`
        :host {
            width: 100%;
            height: 100%;
            left: 0;
            overflow: hidden;
            position: absolute;
        }

        .tag-ripple {
            background: rgba(0, 0, 0, 0.1);
            top: 50%;
            left: 50%;
            height: 100%;
            transform: translate(-50%, -50%);
            position: absolute;
        }
    `],
        template: `
        <div class="tag-ripple" [@ink]="state"></div>
    `,
        animations: [
          trigger("ink", [
            state("none", style({ width: 0, opacity: 0 })),
            transition("none => clicked", [
              animate(300, keyframes([
                style({ opacity: 1, offset: 0, width: "30%", borderRadius: "100%" }),
                style({ opacity: 1, offset: 0.5, width: "50%" }),
                style({ opacity: 0.5, offset: 1, width: "100%", borderRadius: "16px" })
              ]))
            ])
          ])
        ]
      }]
    }], propDecorators: { state: [{
      type: Input
    }] } });
    DeleteIconComponent = class {
    };
    DeleteIconComponent.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: DeleteIconComponent, deps: [], target: FactoryTarget.Component });
    DeleteIconComponent.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DeleteIconComponent, selector: "delete-icon", ngImport: core_exports, template: '<span>\n    <svg\n        height="16px"\n        viewBox="0 0 32 32"\n        width="16px"\n    >\n        <path\n            d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"\n            fill="#121313"\n        />\n    </svg>\n</span>', styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;transition:all .15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:focus) path,:host-context(tag:active) path{fill:#fff}:host-context(.dark tag:focus) path,:host-context(.dark tag:active) path{fill:#000}:host-context(.minimal tag:focus) path,:host-context(.minimal tag:active) path{fill:#000}:host-context(.bootstrap tag:focus) path,:host-context(.bootstrap tag:active) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}\n"] });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: DeleteIconComponent, decorators: [{
      type: Component,
      args: [{ selector: "delete-icon", template: '<span>\n    <svg\n        height="16px"\n        viewBox="0 0 32 32"\n        width="16px"\n    >\n        <path\n            d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"\n            fill="#121313"\n        />\n    </svg>\n</span>', styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;transition:all .15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:focus) path,:host-context(tag:active) path{fill:#fff}:host-context(.dark tag:focus) path,:host-context(.dark tag:active) path{fill:#000}:host-context(.minimal tag:focus) path,:host-context(.minimal tag:active) path{fill:#000}:host-context(.bootstrap tag:focus) path,:host-context(.bootstrap tag:active) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}\n"] }]
    }] });
    navigator = typeof window !== "undefined" ? window.navigator : {
      userAgent: "Chrome",
      vendor: "Google Inc"
    };
    isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    TagComponent = class {
      constructor(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.disabled = false;
        this.onSelect = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onTagEdited = new EventEmitter();
        this.editing = false;
        this.rippleState = "none";
      }
      /**
       * @name readonly {boolean}
       */
      get readonly() {
        return typeof this.model !== "string" && this.model.readonly === true;
      }
      /**
       * @name select
       */
      select($event) {
        if (this.readonly || this.disabled) {
          return;
        }
        if ($event) {
          $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
      }
      /**
       * @name remove
       */
      remove($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
      }
      /**
       * @name focus
       */
      focus() {
        this.element.nativeElement.focus();
      }
      move() {
        this.moving = true;
      }
      /**
       * @name keydown
       * @param event
       */
      keydown(event) {
        if (this.editing) {
          if (event.keyCode === 13) {
            return this.disableEditMode(event);
          }
        } else {
          this.onKeyDown.emit({ event, model: this.model });
        }
      }
      /**
       * @name blink
       */
      blink() {
        const classList = this.element.nativeElement.classList;
        classList.add("blink");
        setTimeout(() => classList.remove("blink"), 50);
      }
      /**
       * @name toggleEditMode
       */
      toggleEditMode() {
        if (this.editable) {
          return this.editing ? void 0 : this.activateEditMode();
        }
      }
      /**
       * @name onBlurred
       * @param event
       */
      onBlurred(event) {
        if (!this.editable) {
          return;
        }
        this.disableEditMode();
        const value = event.target.innerText;
        const result = typeof this.model === "string" ? value : __spreadProps(__spreadValues({}, this.model), { [this.displayBy]: value });
        this.onBlur.emit(result);
      }
      /**
       * @name getDisplayValue
       * @param item
       */
      getDisplayValue(item) {
        return typeof item === "string" ? item : item[this.displayBy];
      }
      /**
       * @desc returns whether the ripple is visible or not
       * only works in Chrome
       * @name isRippleVisible
       */
      get isRippleVisible() {
        return !this.readonly && !this.editing && isChrome && this.hasRipple;
      }
      /**
       * @name disableEditMode
       * @param $event
       */
      disableEditMode($event) {
        const classList = this.element.nativeElement.classList;
        const input = this.getContentEditableText();
        this.editing = false;
        classList.remove("tag--editing");
        if (!input) {
          this.setContentEditableText(this.model);
          return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
          $event.preventDefault();
        }
      }
      /**
       * @name isDeleteIconVisible
       */
      isDeleteIconVisible() {
        return !this.readonly && !this.disabled && this.removable && !this.editing;
      }
      /**
       * @name getContentEditableText
       */
      getContentEditableText() {
        const input = this.getContentEditable();
        return input ? input.innerText.trim() : "";
      }
      /**
       * @name setContentEditableText
       * @param model
       */
      setContentEditableText(model) {
        const input = this.getContentEditable();
        const value = this.getDisplayValue(model);
        input.innerText = value;
      }
      /**
       * @name
       */
      activateEditMode() {
        const classList = this.element.nativeElement.classList;
        classList.add("tag--editing");
        this.editing = true;
      }
      /**
       * @name storeNewValue
       * @param input
       */
      storeNewValue(input) {
        const exists = (tag) => {
          return typeof tag === "string" ? tag === input : tag[this.displayBy] === input;
        };
        const hasId = () => {
          return this.model[this.identifyBy] !== this.model[this.displayBy];
        };
        if (exists(this.model)) {
          return;
        }
        const model = typeof this.model === "string" ? input : {
          index: this.index,
          [this.identifyBy]: hasId() ? this.model[this.identifyBy] : input,
          [this.displayBy]: input
        };
        if (this.canAddTag(model)) {
          this.onTagEdited.emit({ tag: model, index: this.index });
        } else {
          this.setContentEditableText(this.model);
        }
      }
      /**
       * @name getContentEditable
       */
      getContentEditable() {
        return this.element.nativeElement.querySelector("[contenteditable]");
      }
    };
    TagComponent.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagComponent, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: ChangeDetectorRef }], target: FactoryTarget.Component });
    TagComponent.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TagComponent, selector: "tag", inputs: { model: "model", removable: "removable", editable: "editable", template: "template", displayBy: "displayBy", identifyBy: "identifyBy", index: "index", hasRipple: "hasRipple", disabled: "disabled", canAddTag: "canAddTag" }, outputs: { onSelect: "onSelect", onRemove: "onRemove", onBlur: "onBlur", onKeyDown: "onKeyDown", onTagEdited: "onTagEdited" }, host: { listeners: { "keydown": "keydown($event)" }, properties: { "class.moving": "this.moving" } }, viewQueries: [{ propertyName: "ripple", first: true, predicate: TagRipple, descendants: true }], ngImport: core_exports, template: `<div (click)="select($event)"
     (dblclick)="toggleEditMode()"
     (mousedown)="rippleState='clicked'"
     (mouseup)="rippleState='none'"
     [ngSwitch]="!!template"
     [class.disabled]="disabled"
     [attr.tabindex]="-1"
     [attr.aria-label]="getDisplayValue(model)">

    <div *ngSwitchCase="true" [attr.contenteditable]="editing">
        <!-- CUSTOM TEMPLATE -->
        <ng-template
            [ngTemplateOutletContext]="{ item: model, index: index }"
            [ngTemplateOutlet]="template">
        </ng-template>
    </div>

    <div *ngSwitchCase="false" class="tag-wrapper">
        <!-- TAG NAME -->
        <div [attr.contenteditable]="editing"
             [attr.title]="getDisplayValue(model)"
             class="tag__text inline"
             spellcheck="false"
             (keydown.enter)="disableEditMode($event)"
             (keydown.escape)="disableEditMode($event)"
             (click)="editing ? $event.stopPropagation() : undefined"
             (blur)="onBlurred($event)">
            {{ getDisplayValue(model) }}
        </div>

        <!-- 'X' BUTTON -->
        <delete-icon
            aria-label="Remove tag"
            role="button"
            (click)="remove($event)"
            *ngIf="isDeleteIconVisible()">
        </delete-icon>
    </div>
</div>

<tag-ripple [state]="rippleState"
            [attr.tabindex]="-1"
            *ngIf="isRippleVisible">
</tag-ripple>
`, styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:blink .3s normal forwards ease-in-out;animation:blink .3s normal forwards ease-in-out}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"], components: [{ type: DeleteIconComponent, selector: "delete-icon" }, { type: TagRipple, selector: "tag-ripple", inputs: ["state"] }], directives: [{ type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagComponent, decorators: [{
      type: Component,
      args: [{ selector: "tag", template: `<div (click)="select($event)"
     (dblclick)="toggleEditMode()"
     (mousedown)="rippleState='clicked'"
     (mouseup)="rippleState='none'"
     [ngSwitch]="!!template"
     [class.disabled]="disabled"
     [attr.tabindex]="-1"
     [attr.aria-label]="getDisplayValue(model)">

    <div *ngSwitchCase="true" [attr.contenteditable]="editing">
        <!-- CUSTOM TEMPLATE -->
        <ng-template
            [ngTemplateOutletContext]="{ item: model, index: index }"
            [ngTemplateOutlet]="template">
        </ng-template>
    </div>

    <div *ngSwitchCase="false" class="tag-wrapper">
        <!-- TAG NAME -->
        <div [attr.contenteditable]="editing"
             [attr.title]="getDisplayValue(model)"
             class="tag__text inline"
             spellcheck="false"
             (keydown.enter)="disableEditMode($event)"
             (keydown.escape)="disableEditMode($event)"
             (click)="editing ? $event.stopPropagation() : undefined"
             (blur)="onBlurred($event)">
            {{ getDisplayValue(model) }}
        </div>

        <!-- 'X' BUTTON -->
        <delete-icon
            aria-label="Remove tag"
            role="button"
            (click)="remove($event)"
            *ngIf="isDeleteIconVisible()">
        </delete-icon>
    </div>
</div>

<tag-ripple [state]="rippleState"
            [attr.tabindex]="-1"
            *ngIf="isRippleVisible">
</tag-ripple>
`, styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:blink .3s normal forwards ease-in-out;animation:blink .3s normal forwards ease-in-out}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] }]
    }], ctorParameters: function() {
      return [{ type: ElementRef }, { type: Renderer2 }, { type: ChangeDetectorRef }];
    }, propDecorators: { model: [{
      type: Input
    }], removable: [{
      type: Input
    }], editable: [{
      type: Input
    }], template: [{
      type: Input
    }], displayBy: [{
      type: Input
    }], identifyBy: [{
      type: Input
    }], index: [{
      type: Input
    }], hasRipple: [{
      type: Input
    }], disabled: [{
      type: Input
    }], canAddTag: [{
      type: Input
    }], onSelect: [{
      type: Output
    }], onRemove: [{
      type: Output
    }], onBlur: [{
      type: Output
    }], onKeyDown: [{
      type: Output
    }], onTagEdited: [{
      type: Output
    }], moving: [{
      type: HostBinding,
      args: ["class.moving"]
    }], ripple: [{
      type: ViewChild,
      args: [TagRipple]
    }], keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }] } });
    animations = [
      trigger("animation", [
        state("in", style({
          opacity: 1
        })),
        state("out", style({
          opacity: 0
        })),
        transition(":enter", [
          animate("{{ enter }}", keyframes([
            style({ opacity: 0, offset: 0, transform: "translate(0px, 20px)" }),
            style({ opacity: 0.3, offset: 0.3, transform: "translate(0px, -10px)" }),
            style({ opacity: 0.5, offset: 0.5, transform: "translate(0px, 0px)" }),
            style({ opacity: 0.75, offset: 0.75, transform: "translate(0px, 5px)" }),
            style({ opacity: 1, offset: 1, transform: "translate(0px, 0px)" })
          ]))
        ]),
        transition(":leave", [
          animate("{{ leave }}", keyframes([
            style({ opacity: 1, transform: "translateX(0)", offset: 0 }),
            style({ opacity: 1, transform: "translateX(-15px)", offset: 0.7 }),
            style({ opacity: 0, transform: "translateX(100%)", offset: 1 })
          ]))
        ])
      ])
    ];
    TagInputDropdown = class {
      constructor(injector) {
        this.injector = injector;
        this.offset = defaults.dropdown.offset;
        this.focusFirstElement = defaults.dropdown.focusFirstElement;
        this.showDropdownIfEmpty = defaults.dropdown.showDropdownIfEmpty;
        this.minimumTextLength = defaults.dropdown.minimumTextLength;
        this.limitItemsTo = defaults.dropdown.limitItemsTo;
        this.displayBy = defaults.dropdown.displayBy;
        this.identifyBy = defaults.dropdown.identifyBy;
        this.matchingFn = defaults.dropdown.matchingFn;
        this.appendToBody = defaults.dropdown.appendToBody;
        this.keepOpen = defaults.dropdown.keepOpen;
        this.dynamicUpdate = defaults.dropdown.dynamicUpdate;
        this.zIndex = defaults.dropdown.zIndex;
        this.items = [];
        this.tagInput = this.injector.get(TagInputComponent);
        this._autocompleteItems = [];
        this.show = () => {
          const maxItemsReached = this.tagInput.items.length === this.tagInput.maxItems;
          const value = this.getFormValue();
          const hasMinimumText = value.trim().length >= this.minimumTextLength;
          const position = this.calculatePosition();
          const items = this.getMatchingItems(value);
          const hasItems = items.length > 0;
          const isHidden = this.isVisible === false;
          const showDropdownIfEmpty = this.showDropdownIfEmpty && hasItems && !value;
          const isDisabled = this.tagInput.disable;
          const shouldShow = isHidden && (hasItems && hasMinimumText || showDropdownIfEmpty);
          const shouldHide = this.isVisible && !hasItems;
          if (this.autocompleteObservable && hasMinimumText) {
            return this.getItemsFromObservable(value);
          }
          if (!this.showDropdownIfEmpty && !value || maxItemsReached || isDisabled) {
            return this.dropdown.hide();
          }
          this.setItems(items);
          if (shouldShow) {
            this.dropdown.show(position);
          } else if (shouldHide) {
            this.hide();
          }
        };
        this.requestAdding = (item) => __async(this, null, function* () {
          const tag = this.createTagModel(item);
          yield this.tagInput.onAddingRequested(true, tag).catch(() => {
          });
        });
        this.resetItems = () => {
          this.items = [];
        };
        this.getItemsFromObservable = (text) => {
          this.setLoadingState(true);
          const subscribeFn = (data) => {
            this.setLoadingState(false).populateItems(data);
            this.setItems(this.getMatchingItems(text));
            if (this.items.length) {
              this.dropdown.show(this.calculatePosition());
            } else {
              this.dropdown.hide();
            }
          };
          this.autocompleteObservable(text).pipe(first()).subscribe(subscribeFn, () => this.setLoadingState(false));
        };
      }
      /**
       * @name autocompleteItems
       * @param items
       */
      set autocompleteItems(items) {
        this._autocompleteItems = items;
      }
      /**
       * @name autocompleteItems
       * @desc array of items that will populate the autocomplete
       */
      get autocompleteItems() {
        const items = this._autocompleteItems;
        if (!items) {
          return [];
        }
        return items.map((item) => {
          return typeof item === "string" ? {
            [this.displayBy]: item,
            [this.identifyBy]: item
          } : item;
        });
      }
      /**
       * @name ngAfterviewInit
       */
      ngAfterViewInit() {
        this.onItemClicked().subscribe((item) => {
          this.requestAdding(item);
        });
        this.onHide().subscribe(this.resetItems);
        const DEBOUNCE_TIME = 200;
        const KEEP_OPEN = this.keepOpen;
        this.tagInput.onTextChange.asObservable().pipe(distinctUntilChanged(), debounceTime(DEBOUNCE_TIME), filter((value) => {
          if (KEEP_OPEN === false) {
            return value.length > 0;
          }
          return true;
        })).subscribe(this.show);
      }
      /**
       * @name updatePosition
       */
      updatePosition() {
        const position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
      }
      /**
       * @name isVisible
       */
      get isVisible() {
        return this.dropdown.menu.dropdownState.menuState.isVisible;
      }
      /**
       * @name onHide
       */
      onHide() {
        return this.dropdown.onHide;
      }
      /**
       * @name onItemClicked
       */
      onItemClicked() {
        return this.dropdown.onItemClicked;
      }
      /**
       * @name selectedItem
       */
      get selectedItem() {
        return this.dropdown.menu.dropdownState.dropdownState.selectedItem;
      }
      /**
       * @name state
       */
      get state() {
        return this.dropdown.menu.dropdownState;
      }
      /**
       * @name hide
       */
      hide() {
        this.resetItems();
        this.dropdown.hide();
      }
      /**
       * @name scrollListener
       */
      scrollListener() {
        if (!this.isVisible || !this.dynamicUpdate) {
          return;
        }
        this.updatePosition();
      }
      /**
       * @name onWindowBlur
       */
      onWindowBlur() {
        this.dropdown.hide();
      }
      /**
       * @name getFormValue
       */
      getFormValue() {
        const formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : "";
      }
      /**
       * @name calculatePosition
       */
      calculatePosition() {
        return this.tagInput.inputForm.getElementPosition();
      }
      /**
       * @name createTagModel
       * @param item
       */
      createTagModel(item) {
        const display = typeof item.value === "string" ? item.value : item.value[this.displayBy];
        const value = typeof item.value === "string" ? item.value : item.value[this.identifyBy];
        return __spreadProps(__spreadValues({}, item.value), {
          [this.tagInput.displayBy]: display,
          [this.tagInput.identifyBy]: value
        });
      }
      /**
       *
       * @param value {string}
       */
      getMatchingItems(value) {
        if (!value && !this.showDropdownIfEmpty) {
          return [];
        }
        const dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter((item) => {
          const hasValue = dupesAllowed ? false : this.tagInput.tags.some((tag) => {
            const identifyBy = this.tagInput.identifyBy;
            const model = typeof tag.model === "string" ? tag.model : tag.model[identifyBy];
            return model === item[this.identifyBy];
          });
          return this.matchingFn(value, item) && hasValue === false;
        });
      }
      /**
       * @name setItems
       */
      setItems(items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
      }
      /**
       * @name populateItems
       * @param data
       */
      populateItems(data) {
        this.autocompleteItems = data.map((item) => {
          return typeof item === "string" ? {
            [this.displayBy]: item,
            [this.identifyBy]: item
          } : item;
        });
        return this;
      }
      /**
       * @name setLoadingState
       * @param state
       */
      setLoadingState(state2) {
        this.tagInput.isLoading = state2;
        return this;
      }
    };
    TagInputDropdown.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputDropdown, deps: [{ token: Injector }], target: FactoryTarget.Component });
    TagInputDropdown.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TagInputDropdown, selector: "tag-input-dropdown", inputs: { offset: "offset", focusFirstElement: "focusFirstElement", showDropdownIfEmpty: "showDropdownIfEmpty", autocompleteObservable: "autocompleteObservable", minimumTextLength: "minimumTextLength", limitItemsTo: "limitItemsTo", displayBy: "displayBy", identifyBy: "identifyBy", matchingFn: "matchingFn", appendToBody: "appendToBody", keepOpen: "keepOpen", dynamicUpdate: "dynamicUpdate", zIndex: "zIndex", autocompleteItems: "autocompleteItems" }, host: { listeners: { "window:scroll": "scrollListener()", "window:blur": "onWindowBlur()" } }, queries: [{ propertyName: "templates", predicate: TemplateRef }], viewQueries: [{ propertyName: "dropdown", first: true, predicate: Ng2Dropdown, descendants: true }], ngImport: core_exports, template: '<ng2-dropdown [dynamicUpdate]="dynamicUpdate">\n    <ng2-dropdown-menu [focusFirstElement]="focusFirstElement"\n                       [zIndex]="zIndex"\n                       [appendToBody]="appendToBody"\n                       [offset]="offset">\n        <ng2-menu-item *ngFor="let item of items; let index = index; let last = last"\n                       [value]="item"\n                       [ngSwitch]="!!templates.length">\n\n            <span *ngSwitchCase="false"\n                  [innerHTML]="item[displayBy] | highlight : tagInput.inputForm.value.value">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]="templates.first"\n                      [ngTemplateOutletContext]="{ item: item, index: index, last: last }">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n', components: [{ type: Ng2Dropdown, selector: "ng2-dropdown", inputs: ["dynamicUpdate"], outputs: ["onItemClicked", "onItemSelected", "onShow", "onHide"] }, { type: Ng2DropdownMenu, selector: "ng2-dropdown-menu", inputs: ["width", "focusFirstElement", "offset", "appendToBody", "zIndex"] }, { type: Ng2MenuItem, selector: "ng2-menu-item", inputs: ["preventClose", "value"] }], directives: [{ type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "highlight": HighlightPipe } });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputDropdown, decorators: [{
      type: Component,
      args: [{ selector: "tag-input-dropdown", template: '<ng2-dropdown [dynamicUpdate]="dynamicUpdate">\n    <ng2-dropdown-menu [focusFirstElement]="focusFirstElement"\n                       [zIndex]="zIndex"\n                       [appendToBody]="appendToBody"\n                       [offset]="offset">\n        <ng2-menu-item *ngFor="let item of items; let index = index; let last = last"\n                       [value]="item"\n                       [ngSwitch]="!!templates.length">\n\n            <span *ngSwitchCase="false"\n                  [innerHTML]="item[displayBy] | highlight : tagInput.inputForm.value.value">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]="templates.first"\n                      [ngTemplateOutletContext]="{ item: item, index: index, last: last }">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n' }]
    }], ctorParameters: function() {
      return [{ type: Injector }];
    }, propDecorators: { dropdown: [{
      type: ViewChild,
      args: [Ng2Dropdown]
    }], templates: [{
      type: ContentChildren,
      args: [TemplateRef]
    }], offset: [{
      type: Input
    }], focusFirstElement: [{
      type: Input
    }], showDropdownIfEmpty: [{
      type: Input
    }], autocompleteObservable: [{
      type: Input
    }], minimumTextLength: [{
      type: Input
    }], limitItemsTo: [{
      type: Input
    }], displayBy: [{
      type: Input
    }], identifyBy: [{
      type: Input
    }], matchingFn: [{
      type: Input
    }], appendToBody: [{
      type: Input
    }], keepOpen: [{
      type: Input
    }], dynamicUpdate: [{
      type: Input
    }], zIndex: [{
      type: Input
    }], autocompleteItems: [{
      type: Input
    }], scrollListener: [{
      type: HostListener,
      args: ["window:scroll"]
    }], onWindowBlur: [{
      type: HostListener,
      args: ["window:blur"]
    }] } });
    CUSTOM_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagInputComponent),
      multi: true
    };
    TagInputComponent = class extends TagInputAccessor {
      constructor(renderer, dragProvider) {
        super();
        this.renderer = renderer;
        this.dragProvider = dragProvider;
        this.separatorKeys = defaults.tagInput.separatorKeys;
        this.separatorKeyCodes = defaults.tagInput.separatorKeyCodes;
        this.placeholder = defaults.tagInput.placeholder;
        this.secondaryPlaceholder = defaults.tagInput.secondaryPlaceholder;
        this.maxItems = defaults.tagInput.maxItems;
        this.validators = defaults.tagInput.validators;
        this.asyncValidators = defaults.tagInput.asyncValidators;
        this.onlyFromAutocomplete = defaults.tagInput.onlyFromAutocomplete;
        this.errorMessages = defaults.tagInput.errorMessages;
        this.theme = defaults.tagInput.theme;
        this.onTextChangeDebounce = defaults.tagInput.onTextChangeDebounce;
        this.inputId = defaults.tagInput.inputId;
        this.inputClass = defaults.tagInput.inputClass;
        this.clearOnBlur = defaults.tagInput.clearOnBlur;
        this.hideForm = defaults.tagInput.hideForm;
        this.addOnBlur = defaults.tagInput.addOnBlur;
        this.addOnPaste = defaults.tagInput.addOnPaste;
        this.pasteSplitPattern = defaults.tagInput.pasteSplitPattern;
        this.blinkIfDupe = defaults.tagInput.blinkIfDupe;
        this.removable = defaults.tagInput.removable;
        this.editable = defaults.tagInput.editable;
        this.allowDupes = defaults.tagInput.allowDupes;
        this.modelAsStrings = defaults.tagInput.modelAsStrings;
        this.trimTags = defaults.tagInput.trimTags;
        this.ripple = defaults.tagInput.ripple;
        this.tabindex = defaults.tagInput.tabIndex;
        this.disable = defaults.tagInput.disable;
        this.dragZone = defaults.tagInput.dragZone;
        this.onRemoving = defaults.tagInput.onRemoving;
        this.onAdding = defaults.tagInput.onAdding;
        this.animationDuration = defaults.tagInput.animationDuration;
        this.onAdd = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onTextChange = new EventEmitter();
        this.onPaste = new EventEmitter();
        this.onValidationError = new EventEmitter();
        this.onTagEdited = new EventEmitter();
        this.isLoading = false;
        this.listeners = {
          [KEYDOWN]: [],
          [KEYUP]: []
        };
        this.inputTextChange = new EventEmitter();
        this.inputTextValue = "";
        this.errors = [];
        this.appendTag = (tag, index = this.items.length) => {
          const items = this.items;
          const model = this.modelAsStrings ? tag[this.identifyBy] : tag;
          this.items = [
            ...items.slice(0, index),
            model,
            ...items.slice(index, items.length)
          ];
        };
        this.createTag = (model) => {
          const trim = (val, key) => {
            return typeof val === "string" ? val.trim() : val[key];
          };
          return __spreadProps(__spreadValues({}, typeof model !== "string" ? model : {}), {
            [this.displayBy]: this.trimTags ? trim(model, this.displayBy) : model,
            [this.identifyBy]: this.trimTags ? trim(model, this.identifyBy) : model
          });
        };
        this.isTagValid = (tag, fromAutocomplete = false) => {
          const selectedItem = this.dropdown ? this.dropdown.selectedItem : void 0;
          const value = this.getItemDisplay(tag).trim();
          if (selectedItem && !fromAutocomplete || !value) {
            return false;
          }
          const dupe = this.findDupe(tag, fromAutocomplete);
          if (!this.allowDupes && dupe && this.blinkIfDupe) {
            const model = this.tags.find((item) => {
              return this.getItemValue(item.model) === this.getItemValue(dupe);
            });
            if (model) {
              model.blink();
            }
          }
          const isFromAutocomplete = fromAutocomplete && this.onlyFromAutocomplete;
          const assertions = [
            // 1. there must be no dupe OR dupes are allowed
            !dupe || this.allowDupes,
            // 2. check max items has not been reached
            !this.maxItemsReached,
            // 3. check item comes from autocomplete or onlyFromAutocomplete is false
            isFromAutocomplete || !this.onlyFromAutocomplete
          ];
          return assertions.filter(Boolean).length === assertions.length;
        };
        this.onPasteCallback = (data) => __async(this, null, function* () {
          const getText = () => {
            const isIE = Boolean(window.clipboardData);
            const clipboardData = isIE ? window.clipboardData : data.clipboardData;
            const type = isIE ? "Text" : "text/plain";
            return clipboardData === null ? "" : clipboardData.getData(type) || "";
          };
          const text = getText();
          const requests = text.split(this.pasteSplitPattern).map((item) => {
            const tag = this.createTag(item);
            this.setInputValue(tag[this.displayBy]);
            return this.onAddingRequested(false, tag);
          });
          const resetInput = () => setTimeout(() => this.setInputValue(""), 50);
          Promise.all(requests).then(() => {
            this.onPaste.emit(text);
            resetInput();
          }).catch(resetInput);
        });
      }
      /**
       * @name inputText
       */
      get inputText() {
        return this.inputTextValue;
      }
      /**
       * @name inputText
       * @param text
       */
      set inputText(text) {
        this.inputTextValue = text;
        this.inputTextChange.emit(text);
      }
      /**
       * @desc removes the tab index if it is set - it will be passed through to the input
       * @name tabindexAttr
       */
      get tabindexAttr() {
        return this.tabindex !== "" ? "-1" : "";
      }
      /**
       * @name ngAfterViewInit
       */
      ngAfterViewInit() {
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
          this.setUpTextChangeSubscriber();
        }
        if (this.clearOnBlur || this.addOnBlur) {
          this.setUpOnBlurSubscriber();
        }
        if (this.addOnPaste) {
          this.setUpOnPasteListener();
        }
        const statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(filter((status) => status !== "PENDING")).subscribe(() => {
          this.errors = this.inputForm.getErrorMessages(this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(map((status) => {
          return status === "PENDING" || this.isLoading;
        }));
        if (this.hideForm) {
          this.inputForm.destroy();
        }
      }
      /**
       * @name ngOnInit
       */
      ngOnInit() {
        const hasReachedMaxItems = this.maxItems !== void 0 && this.items && this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
          this.maxItems = this.items.length;
          console.warn(MAX_ITEMS_WARNING);
        }
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
      }
      /**
       * @name onRemoveRequested
       * @param tag
       * @param index
       */
      onRemoveRequested(tag, index) {
        return new Promise((resolve) => {
          const subscribeFn = (model) => {
            this.removeItem(model, index);
            resolve(tag);
          };
          this.onRemoving ? this.onRemoving(tag).pipe(first()).subscribe(subscribeFn) : subscribeFn(tag);
        });
      }
      /**
       * @name onAddingRequested
       * @param fromAutocomplete {boolean}
       * @param tag {TagModel}
       * @param index? {number}
       * @param giveupFocus? {boolean}
       */
      onAddingRequested(fromAutocomplete, tag, index, giveupFocus) {
        return new Promise((resolve, reject) => {
          const subscribeFn = (model) => {
            return this.addItem(fromAutocomplete, model, index, giveupFocus).then(resolve).catch(reject);
          };
          return this.onAdding ? this.onAdding(tag).pipe(first()).subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
      }
      /**
       * @name selectItem
       * @desc selects item passed as parameter as the selected tag
       * @param item
       * @param emit
       */
      selectItem(item, emit = true) {
        const isReadonly = item && typeof item !== "string" && item.readonly;
        if (isReadonly || this.selectedTag === item) {
          return;
        }
        this.selectedTag = item;
        if (emit) {
          this.onSelect.emit(item);
        }
      }
      /**
       * @name fireEvents
       * @desc goes through the list of the events for a given eventName, and fires each of them
       * @param eventName
       * @param $event
       */
      fireEvents(eventName, $event) {
        this.listeners[eventName].forEach((listener) => listener.call(this, $event));
      }
      /**
       * @name handleKeydown
       * @desc handles action when the user hits a keyboard key
       * @param data
       */
      handleKeydown(data) {
        const event = data.event;
        const key = event.keyCode || event.which;
        const shiftKey = event.shiftKey || false;
        switch (KEY_PRESS_ACTIONS[key]) {
          case ACTIONS_KEYS.DELETE:
            if (this.selectedTag && this.removable) {
              const index = this.items.indexOf(this.selectedTag);
              this.onRemoveRequested(this.selectedTag, index);
            }
            break;
          case ACTIONS_KEYS.SWITCH_PREV:
            this.moveToTag(data.model, PREV);
            break;
          case ACTIONS_KEYS.SWITCH_NEXT:
            this.moveToTag(data.model, NEXT);
            break;
          case ACTIONS_KEYS.TAB:
            if (shiftKey) {
              if (this.isFirstTag(data.model)) {
                return;
              }
              this.moveToTag(data.model, PREV);
            } else {
              if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                return;
              }
              this.moveToTag(data.model, NEXT);
            }
            break;
          default:
            return;
        }
        event.preventDefault();
      }
      onFormSubmit() {
        return __async(this, null, function* () {
          try {
            yield this.onAddingRequested(false, this.formValue);
          } catch {
            return;
          }
        });
      }
      /**
       * @name setInputValue
       * @param value
       */
      setInputValue(value, emitEvent = true) {
        const control = this.getControl();
        control.setValue(value, { emitEvent });
      }
      /**
       * @name getControl
       */
      getControl() {
        return this.inputForm.value;
      }
      /**
       * @name focus
       * @param applyFocus
       * @param displayAutocomplete
       */
      focus(applyFocus = false, displayAutocomplete = false) {
        if (this.dragProvider.getState("dragging")) {
          return;
        }
        this.selectItem(void 0, false);
        if (applyFocus) {
          this.inputForm.focus();
          this.onFocus.emit(this.formValue);
        }
      }
      /**
       * @name blur
       */
      blur() {
        this.onTouched();
        this.onBlur.emit(this.formValue);
      }
      /**
       * @name hasErrors
       */
      hasErrors() {
        return !!this.inputForm && this.inputForm.hasErrors();
      }
      /**
       * @name isInputFocused
       */
      isInputFocused() {
        return !!this.inputForm && this.inputForm.isInputFocused();
      }
      /**
       * - this is the one way I found to tell if the template has been passed and it is not
       * the template for the menu item
       * @name hasCustomTemplate
       */
      hasCustomTemplate() {
        const template = this.templates ? this.templates.first : void 0;
        const menuTemplate = this.dropdown && this.dropdown.templates ? this.dropdown.templates.first : void 0;
        return Boolean(template && template !== menuTemplate);
      }
      /**
       * @name maxItemsReached
       */
      get maxItemsReached() {
        return this.maxItems !== void 0 && this.items.length >= this.maxItems;
      }
      /**
       * @name formValue
       */
      get formValue() {
        const form = this.inputForm.value;
        return form ? form.value : "";
      }
      /**3
       * @name onDragStarted
       * @param event
       * @param index
       */
      onDragStarted(event, tag, index) {
        event.stopPropagation();
        const item = { zone: this.dragZone, tag, index };
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index });
      }
      /**
       * @name onDragOver
       * @param event
       */
      onDragOver(event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
      }
      /**
       * @name onTagDropped
       * @param event
       * @param index
       */
      onTagDropped(event, index) {
        const item = this.dragProvider.getDraggedItem(event);
        if (!item || item.zone !== this.dragZone) {
          return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
      }
      /**
       * @name isDropping
       */
      isDropping() {
        const isReceiver = this.dragProvider.receiver === this;
        const isDropping = this.dragProvider.getState("dropping");
        return Boolean(isReceiver && isDropping);
      }
      /**
       * @name onTagBlurred
       * @param changedElement {TagModel}
       * @param index {number}
       */
      onTagBlurred(changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
      }
      /**
       * @name trackBy
       * @param items
       */
      trackBy(index, item) {
        return item[this.identifyBy];
      }
      /**
       * @name updateEditedTag
       * @param tag
       */
      updateEditedTag(tag) {
        this.onTagEdited.emit(tag);
      }
      /**
       * @name moveToTag
       * @param item
       * @param direction
       */
      moveToTag(item, direction) {
        const isLast = this.isLastTag(item);
        const isFirst = this.isFirstTag(item);
        const stopSwitch = direction === NEXT && isLast || direction === PREV && isFirst;
        if (stopSwitch) {
          this.focus(true);
          return;
        }
        const offset = direction === NEXT ? 1 : -1;
        const index = this.getTagIndex(item) + offset;
        const tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
      }
      /**
       * @name isFirstTag
       * @param item {TagModel}
       */
      isFirstTag(item) {
        return this.tags.first.model === item;
      }
      /**
       * @name isLastTag
       * @param item {TagModel}
       */
      isLastTag(item) {
        return this.tags.last.model === item;
      }
      /**
       * @name getTagIndex
       * @param item
       */
      getTagIndex(item) {
        const tags = this.tags.toArray();
        return tags.findIndex((tag) => tag.model === item);
      }
      /**
       * @name getTagAtIndex
       * @param index
       */
      getTagAtIndex(index) {
        const tags = this.tags.toArray();
        return tags[index];
      }
      /**
       * @name removeItem
       * @desc removes an item from the array of the model
       * @param tag {TagModel}
       * @param index {number}
       */
      removeItem(tag, index) {
        this.items = this.getItemsWithout(index);
        if (this.selectedTag === tag) {
          this.selectItem(void 0, false);
        }
        this.focus(true, false);
        this.onRemove.emit(tag);
      }
      /**
       * @name addItem
       * @desc adds the current text model to the items array
       * @param fromAutocomplete {boolean}
       * @param item {TagModel}
       * @param index? {number}
       * @param giveupFocus? {boolean}
       */
      addItem(fromAutocomplete = false, item, index, giveupFocus) {
        const display = this.getItemDisplay(item);
        const tag = this.createTag(item);
        if (fromAutocomplete) {
          this.setInputValue(this.getItemValue(item, true));
        }
        return new Promise((resolve, reject) => {
          const reset = () => {
            this.setInputValue("");
            if (giveupFocus) {
              this.focus(false, false);
            } else {
              this.focus(true, false);
            }
            resolve(display);
          };
          const appendItem = () => {
            this.appendTag(tag, index);
            this.onAdd.emit(tag);
            if (!this.dropdown) {
              return;
            }
            this.dropdown.hide();
            if (this.dropdown.showDropdownIfEmpty) {
              this.dropdown.show();
            }
          };
          const status = this.inputForm.form.status;
          const isTagValid = this.isTagValid(tag, fromAutocomplete);
          const onValidationError = () => {
            this.onValidationError.emit(tag);
            return reject();
          };
          if (status === "VALID" && isTagValid) {
            appendItem();
            return reset();
          }
          if (status === "INVALID" || !isTagValid) {
            reset();
            return onValidationError();
          }
          if (status === "PENDING") {
            const statusUpdate$ = this.inputForm.form.statusChanges;
            return statusUpdate$.pipe(filter((statusUpdate) => statusUpdate !== "PENDING"), first()).subscribe((statusUpdate) => {
              if (statusUpdate === "VALID" && isTagValid) {
                appendItem();
                return reset();
              } else {
                reset();
                return onValidationError();
              }
            });
          }
        });
      }
      /**
       * @name setupSeparatorKeysListener
       */
      setupSeparatorKeysListener() {
        const useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        const listener = ($event) => {
          const hasKeyCode = this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
          const hasKey = this.separatorKeys.indexOf($event.key) >= 0;
          const isIMEProcessing = $event.keyCode === 229;
          if (hasKeyCode || hasKey && !isIMEProcessing) {
            $event.preventDefault();
            this.onAddingRequested(false, this.formValue).catch(() => {
            });
          }
        };
        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
      }
      /**
       * @name setUpKeypressListeners
       */
      setUpKeypressListeners() {
        const listener = ($event) => {
          const isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
          if (isCorrectKey && !this.formValue && this.items.length) {
            this.tags.last.select.call(this.tags.last);
          }
        };
        listen.call(this, KEYDOWN, listener);
      }
      /**
       * @name setUpKeydownListeners
       */
      setUpInputKeydownListeners() {
        this.inputForm.onKeydown.subscribe((event) => {
          if (event.key === "Backspace" && this.formValue.trim() === "") {
            event.preventDefault();
          }
        });
      }
      /**
       * @name setUpOnPasteListener
       */
      setUpOnPasteListener() {
        const input = this.inputForm.input.nativeElement;
        this.renderer.listen(input, "paste", (event) => {
          this.onPasteCallback(event);
          event.preventDefault();
          return true;
        });
      }
      /**
       * @name setUpTextChangeSubscriber
       */
      setUpTextChangeSubscriber() {
        this.inputForm.form.valueChanges.pipe(debounceTime(this.onTextChangeDebounce)).subscribe((value) => {
          this.onTextChange.emit(value.item);
        });
      }
      /**
       * @name setUpOnBlurSubscriber
       */
      setUpOnBlurSubscriber() {
        const filterFn = () => {
          const isVisible = this.dropdown && this.dropdown.isVisible;
          return !isVisible && !!this.formValue;
        };
        this.inputForm.onBlur.pipe(debounceTime(100), filter(filterFn)).subscribe(() => {
          const reset = () => this.setInputValue("");
          if (this.addOnBlur) {
            return this.onAddingRequested(false, this.formValue, void 0, true).then(reset).catch(reset);
          }
          reset();
        });
      }
      /**
       * @name findDupe
       * @param tag
       * @param isFromAutocomplete
       */
      findDupe(tag, isFromAutocomplete) {
        const identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        const id = tag[identifyBy];
        return this.items.find((item) => this.getItemValue(item) === id);
      }
      /**
       * @name setAnimationMetadata
       */
      setAnimationMetadata() {
        this.animationMetadata = {
          value: "in",
          params: __spreadValues({}, this.animationDuration)
        };
      }
    };
    TagInputComponent.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputComponent, deps: [{ token: Renderer2 }, { token: DragProvider }], target: FactoryTarget.Component });
    TagInputComponent.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TagInputComponent, selector: "tag-input", inputs: { separatorKeys: "separatorKeys", separatorKeyCodes: "separatorKeyCodes", placeholder: "placeholder", secondaryPlaceholder: "secondaryPlaceholder", maxItems: "maxItems", validators: "validators", asyncValidators: "asyncValidators", onlyFromAutocomplete: "onlyFromAutocomplete", errorMessages: "errorMessages", theme: "theme", onTextChangeDebounce: "onTextChangeDebounce", inputId: "inputId", inputClass: "inputClass", clearOnBlur: "clearOnBlur", hideForm: "hideForm", addOnBlur: "addOnBlur", addOnPaste: "addOnPaste", pasteSplitPattern: "pasteSplitPattern", blinkIfDupe: "blinkIfDupe", removable: "removable", editable: "editable", allowDupes: "allowDupes", modelAsStrings: "modelAsStrings", trimTags: "trimTags", inputText: "inputText", ripple: "ripple", tabindex: "tabindex", disable: "disable", dragZone: "dragZone", onRemoving: "onRemoving", onAdding: "onAdding", animationDuration: "animationDuration" }, outputs: { onAdd: "onAdd", onRemove: "onRemove", onSelect: "onSelect", onFocus: "onFocus", onBlur: "onBlur", onTextChange: "onTextChange", onPaste: "onPaste", onValidationError: "onValidationError", onTagEdited: "onTagEdited", inputTextChange: "inputTextChange" }, host: { properties: { "attr.tabindex": "this.tabindexAttr" } }, providers: [CUSTOM_ACCESSOR], queries: [{ propertyName: "dropdown", first: true, predicate: TagInputDropdown, descendants: true }, { propertyName: "templates", predicate: TemplateRef }], viewQueries: [{ propertyName: "inputForm", first: true, predicate: TagInputForm, descendants: true }, { propertyName: "tags", predicate: TagComponent, descendants: true }], usesInheritance: true, ngImport: core_exports, template: `<div
    [ngClass]="theme"
    class="ng2-tag-input"
    (click)="focus(true, false)"
    [attr.tabindex]="-1"
    (drop)="dragZone ? onTagDropped($event, undefined) : undefined"
    (dragenter)="dragZone ? onDragOver($event) : undefined"
    (dragover)="dragZone ? onDragOver($event) : undefined"
    (dragend)="dragZone ? dragProvider.onDragEnd() : undefined"
    [class.ng2-tag-input--dropping]="isDropping()"
    [class.ng2-tag-input--disabled]="disable"
    [class.ng2-tag-input--loading]="isLoading"
    [class.ng2-tag-input--invalid]="hasErrors()"
    [class.ng2-tag-input--focused]="isInputFocused()"
>

    <!-- TAGS -->
    <div class="ng2-tags-container">
        <tag
            *ngFor="let item of items; let i = index; trackBy: trackBy"
            (onSelect)="selectItem(item)"
            (onRemove)="onRemoveRequested(item, i)"
            (onKeyDown)="handleKeydown($event)"
            (onTagEdited)="updateEditedTag($event)"
            (onBlur)="onTagBlurred($event, i)"
            draggable="{{ editable }}"
            (dragstart)="dragZone ? onDragStarted($event, item, i) : undefined"
            (drop)="dragZone ? onTagDropped($event, i) : undefined"
            (dragenter)="dragZone ? onDragOver($event) : undefined"
            (dragover)="dragZone ? onDragOver($event, i) : undefined"
            (dragleave)="dragZone ? dragProvider.onDragEnd() : undefined"
            [canAddTag]="isTagValid"
            [attr.tabindex]="0"
            [disabled]="disable"
            [@animation]="animationMetadata"
            [hasRipple]="ripple"
            [index]="i"
            [removable]="removable"
            [editable]="editable"
            [displayBy]="displayBy"
            [identifyBy]="identifyBy"
            [template]="!!hasCustomTemplate() ? templates.first : undefined"
            [draggable]="dragZone"
            [model]="item"
        >
        </tag>

        <tag-input-form
            (onSubmit)="onFormSubmit()"
            (onBlur)="blur()"
            (click)="dropdown ? dropdown.show() : undefined"
            (onKeydown)="fireEvents('keydown', $event)"
            (onKeyup)="fireEvents('keyup', $event)"
            [inputText]="inputText"
            [disabled]="disable"
            [validators]="validators"
            [asyncValidators]="asyncValidators"
            [hidden]="maxItemsReached"
            [placeholder]="items.length ? placeholder : secondaryPlaceholder"
            [inputClass]="inputClass"
            [inputId]="inputId"
            [tabindex]="tabindex"
        >
        </tag-input-form>
    </div>

    <div
        class="progress-bar"
        *ngIf="isProgressBarVisible$ | async"
    ></div>
</div>

<!-- ERRORS -->
<div
    *ngIf="hasErrors()"
    [ngClass]="theme"
    class="error-messages"
>
    <p
        *ngFor="let error of errors"
        class="error-message"
    >
        <span>{{ error }}</span>
    </p>
</div>
<ng-content></ng-content>
`, styles: ['.dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:"";-webkit-animation:running-progress 2s cubic-bezier(.4,0,.2,1) infinite;animation:running-progress 2s cubic-bezier(.4,0,.2,1) infinite}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}to{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}to{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:all .3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196F3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:#000;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:#000;color:initial}.minimal tag:not(.readonly):not(.tag--editing):active{background:#d0d0d0;color:#000;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(.readonly):not(.tag--editing):active{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}\n'], components: [{ type: TagComponent, selector: "tag", inputs: ["model", "removable", "editable", "template", "displayBy", "identifyBy", "index", "hasRipple", "disabled", "canAddTag"], outputs: ["onSelect", "onRemove", "onBlur", "onKeyDown", "onTagEdited"] }, { type: TagInputForm, selector: "tag-input-form", inputs: ["placeholder", "validators", "asyncValidators", "inputId", "inputClass", "tabindex", "disabled", "inputText"], outputs: ["onSubmit", "onBlur", "onFocus", "onKeyup", "onKeydown", "inputTextChange"] }], directives: [{ type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": AsyncPipe }, animations });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputComponent, decorators: [{
      type: Component,
      args: [{ selector: "tag-input", providers: [CUSTOM_ACCESSOR], animations, template: `<div
    [ngClass]="theme"
    class="ng2-tag-input"
    (click)="focus(true, false)"
    [attr.tabindex]="-1"
    (drop)="dragZone ? onTagDropped($event, undefined) : undefined"
    (dragenter)="dragZone ? onDragOver($event) : undefined"
    (dragover)="dragZone ? onDragOver($event) : undefined"
    (dragend)="dragZone ? dragProvider.onDragEnd() : undefined"
    [class.ng2-tag-input--dropping]="isDropping()"
    [class.ng2-tag-input--disabled]="disable"
    [class.ng2-tag-input--loading]="isLoading"
    [class.ng2-tag-input--invalid]="hasErrors()"
    [class.ng2-tag-input--focused]="isInputFocused()"
>

    <!-- TAGS -->
    <div class="ng2-tags-container">
        <tag
            *ngFor="let item of items; let i = index; trackBy: trackBy"
            (onSelect)="selectItem(item)"
            (onRemove)="onRemoveRequested(item, i)"
            (onKeyDown)="handleKeydown($event)"
            (onTagEdited)="updateEditedTag($event)"
            (onBlur)="onTagBlurred($event, i)"
            draggable="{{ editable }}"
            (dragstart)="dragZone ? onDragStarted($event, item, i) : undefined"
            (drop)="dragZone ? onTagDropped($event, i) : undefined"
            (dragenter)="dragZone ? onDragOver($event) : undefined"
            (dragover)="dragZone ? onDragOver($event, i) : undefined"
            (dragleave)="dragZone ? dragProvider.onDragEnd() : undefined"
            [canAddTag]="isTagValid"
            [attr.tabindex]="0"
            [disabled]="disable"
            [@animation]="animationMetadata"
            [hasRipple]="ripple"
            [index]="i"
            [removable]="removable"
            [editable]="editable"
            [displayBy]="displayBy"
            [identifyBy]="identifyBy"
            [template]="!!hasCustomTemplate() ? templates.first : undefined"
            [draggable]="dragZone"
            [model]="item"
        >
        </tag>

        <tag-input-form
            (onSubmit)="onFormSubmit()"
            (onBlur)="blur()"
            (click)="dropdown ? dropdown.show() : undefined"
            (onKeydown)="fireEvents('keydown', $event)"
            (onKeyup)="fireEvents('keyup', $event)"
            [inputText]="inputText"
            [disabled]="disable"
            [validators]="validators"
            [asyncValidators]="asyncValidators"
            [hidden]="maxItemsReached"
            [placeholder]="items.length ? placeholder : secondaryPlaceholder"
            [inputClass]="inputClass"
            [inputId]="inputId"
            [tabindex]="tabindex"
        >
        </tag-input-form>
    </div>

    <div
        class="progress-bar"
        *ngIf="isProgressBarVisible$ | async"
    ></div>
</div>

<!-- ERRORS -->
<div
    *ngIf="hasErrors()"
    [ngClass]="theme"
    class="error-messages"
>
    <p
        *ngFor="let error of errors"
        class="error-message"
    >
        <span>{{ error }}</span>
    </p>
</div>
<ng-content></ng-content>
`, styles: ['.dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:"";-webkit-animation:running-progress 2s cubic-bezier(.4,0,.2,1) infinite;animation:running-progress 2s cubic-bezier(.4,0,.2,1) infinite}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}to{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}to{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:all .3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196F3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:#000;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:#000;color:initial}.minimal tag:not(.readonly):not(.tag--editing):active{background:#d0d0d0;color:#000;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(.readonly):not(.tag--editing):active{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}\n'] }]
    }], ctorParameters: function() {
      return [{ type: Renderer2 }, { type: DragProvider }];
    }, propDecorators: { separatorKeys: [{
      type: Input
    }], separatorKeyCodes: [{
      type: Input
    }], placeholder: [{
      type: Input
    }], secondaryPlaceholder: [{
      type: Input
    }], maxItems: [{
      type: Input
    }], validators: [{
      type: Input
    }], asyncValidators: [{
      type: Input
    }], onlyFromAutocomplete: [{
      type: Input
    }], errorMessages: [{
      type: Input
    }], theme: [{
      type: Input
    }], onTextChangeDebounce: [{
      type: Input
    }], inputId: [{
      type: Input
    }], inputClass: [{
      type: Input
    }], clearOnBlur: [{
      type: Input
    }], hideForm: [{
      type: Input
    }], addOnBlur: [{
      type: Input
    }], addOnPaste: [{
      type: Input
    }], pasteSplitPattern: [{
      type: Input
    }], blinkIfDupe: [{
      type: Input
    }], removable: [{
      type: Input
    }], editable: [{
      type: Input
    }], allowDupes: [{
      type: Input
    }], modelAsStrings: [{
      type: Input
    }], trimTags: [{
      type: Input
    }], inputText: [{
      type: Input
    }], ripple: [{
      type: Input
    }], tabindex: [{
      type: Input
    }], disable: [{
      type: Input
    }], dragZone: [{
      type: Input
    }], onRemoving: [{
      type: Input
    }], onAdding: [{
      type: Input
    }], animationDuration: [{
      type: Input
    }], onAdd: [{
      type: Output
    }], onRemove: [{
      type: Output
    }], onSelect: [{
      type: Output
    }], onFocus: [{
      type: Output
    }], onBlur: [{
      type: Output
    }], onTextChange: [{
      type: Output
    }], onPaste: [{
      type: Output
    }], onValidationError: [{
      type: Output
    }], onTagEdited: [{
      type: Output
    }], dropdown: [{
      type: ContentChild,
      args: [TagInputDropdown]
    }], templates: [{
      type: ContentChildren,
      args: [TemplateRef, { descendants: false }]
    }], inputForm: [{
      type: ViewChild,
      args: [TagInputForm]
    }], tags: [{
      type: ViewChildren,
      args: [TagComponent]
    }], inputTextChange: [{
      type: Output
    }], tabindexAttr: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }] } });
    optionsProvider = new OptionsProvider();
    TagInputModule = class {
      /**
       * @name withDefaults
       * @param options {Options}
       */
      static withDefaults(options) {
        optionsProvider.setOptions(options);
      }
    };
    TagInputModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputModule, deps: [], target: FactoryTarget.NgModule });
    TagInputModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputModule, declarations: [
      TagInputComponent,
      DeleteIconComponent,
      TagInputForm,
      TagComponent,
      HighlightPipe,
      TagInputDropdown,
      TagRipple
    ], imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      Ng2DropdownModule
    ], exports: [
      TagInputComponent,
      DeleteIconComponent,
      TagInputForm,
      TagComponent,
      HighlightPipe,
      TagInputDropdown,
      TagRipple
    ] });
    TagInputModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputModule, providers: [
      DragProvider,
      { provide: COMPOSITION_BUFFER_MODE, useValue: false }
    ], imports: [[
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      Ng2DropdownModule
    ]] });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: core_exports, type: TagInputModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          CommonModule,
          ReactiveFormsModule,
          FormsModule,
          Ng2DropdownModule
        ],
        declarations: [
          TagInputComponent,
          DeleteIconComponent,
          TagInputForm,
          TagComponent,
          HighlightPipe,
          TagInputDropdown,
          TagRipple
        ],
        exports: [
          TagInputComponent,
          DeleteIconComponent,
          TagInputForm,
          TagComponent,
          HighlightPipe,
          TagInputDropdown,
          TagRipple
        ],
        providers: [
          DragProvider,
          { provide: COMPOSITION_BUFFER_MODE, useValue: false }
        ]
      }]
    }] });
  }
});

export {
  TagInputModule,
  init_ngx_chips
};
//# sourceMappingURL=chunk-PLNAKAZW.js.map
