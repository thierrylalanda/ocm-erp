import {
  init_core_index,
  routes
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import {
  RouterLink,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
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

// angular:jit:template:src/app/features/invoice-modals/general-invoice-1/general-invoice-1.component.html
var general_invoice_1_component_default;
var init_general_invoice_1_component = __esm({
  "angular:jit:template:src/app/features/invoice-modals/general-invoice-1/general-invoice-1.component.html"() {
    general_invoice_1_component_default = '		<!-- Start Content -->\n		<div class="p-4">\n\n			<!-- start row -->\n			<div class="row">\n				<div class="col-md-10 mx-auto">\n					<div class="mb-3">\n                        <h6><a [routerLink]="routes.invoiceTemplate"><i class="isax isax-arrow-left me-1"></i>Back</a></h6>\n                    </div>\n					<div>\n						<div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 mb-3 pb-3">\n							<div>\n								<div class="mb-1"><img src="assets/img/invoice-logo.svg" alt="User Img"></div>\n								<p>Original For Recipient</p>\n							</div>\n							<div>\n								<h5 class="mb-1">TAX INVOICE</h5>\n								<div class="d-flex align-items-center">\n									<p class="mb-0 me-3">Date : <span class="text-dark"> 05/12/2024</span></p>\n									<p>Invoice No : <span class="text-dark"> INV 00001</span></p>\n								</div>\n							</div>\n						</div>\n\n						<!-- start row -->\n						<div class="row">\n							<div class="col-lg-7">\n								<div class="row">\n									<div class="col-md-6">\n										<div class="mb-3">\n											<h6 class="fs-16 text-primary mb-2">Invoice To :</h6>\n											<div>\n												<p class="mb-0 text-dark">Walter Roberson</p>\n												<p class="mb-0 text-dark">299 Star Trek Drive, Panama City, <br> Florida, 32405, USA.</p>\n												<p class="mb-0 text-dark">walter&#64;gmail.com</p>\n												<p class="mb-0 text-dark">+45 5421 4523</p>\n											</div>\n										</div>\n									</div> <!-- end col -->\n									<div class="col-md-6">\n										<div class="mb-3">\n											<h6 class="fs-16 text-primary mb-2">Pay To :</h6>\n											<div>\n												<p class="mb-0 text-dark">Lowell H. Dominguez</p>\n												<p class="mb-0 text-dark">84 Spilman Street, London <br> United King</p>\n												<p class="mb-0 text-dark">domlowell&#64;gmail.com</p>\n												<p class="mb-0 text-dark">+45 5421 2154</p>\n											</div>\n										</div>\n									</div> <!-- end col -->\n								</div> <!-- end row -->\n							</div> <!-- end col -->\n							<div class="col-lg-5">\n								<div class="mb-3">\n									<h6 class="fs-16 text-primary mb-2">Dreamstechnologies</h6>\n									<div>\n										<p class="mb-1">GST IN : <span class="text-dark"> 22AABCU9603R1ZX</span></p>\n										<p class="mb-1">Address : <span class="text-dark"> 15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</span></p>\n										<p class="mb-0">Mobile : <span class="text-dark"> +91 98765 43210</span></p>\n									</div>\n								</div>\n							</div> <!-- end col -->\n						</div> \n						<!-- end row -->\n\n						<div class="table-responsive">\n							<table class="table">\n								<thead class="thead-light">\n									<tr>\n										<th>#</th>\n										<th>Item</th>\n										<th>Tax Value</th>\n										<th>Qty</th>\n										<th>Price</th>\n										<th class="text-end">Total</th>\n									</tr>\n								</thead>\n								<tbody>\n									<tr>\n										<td class="text-dark">1</td>\n										<td class="text-dark">Website Design</td>\n										<td class="text-dark">Four plus web pages design and two rivision</td>\n										<td class="text-dark">1</td>\n										<td class="text-dark">$350</td>\n										<td class="text-dark text-end">$350</td>\n									</tr>\n									<tr>\n										<td class="text-dark">2</td>\n										<td class="text-dark">Web Development</td>\n										<td class="text-dark">Dynamic frontend design</td>\n										<td class="text-dark">1</td>\n										<td class="text-dark">$600</td>\n										<td class="text-dark text-end">$600</td>\n									</tr>\n									<tr>\n										<td class="text-dark">3</td>\n										<td class="text-dark">App Development</td>\n										<td class="text-dark">Android and Ios App design</td>\n										<td class="text-dark">2</td>\n										<td class="text-dark">$200</td>\n										<td class="text-dark text-end">$400</td>\n									</tr>\n									<tr>\n										<td class="text-dark">4</td>\n										<td class="text-dark">Digital Marketing</td>\n										<td class="text-dark">Facebook and instagram marketing</td>\n										<td class="text-dark">3</td>\n										<td class="text-dark">$100</td>\n										<td class="text-dark text-end">$300</td>\n									</tr>\n									<tr>\n										<td colspan="3" class="border-0"></td>\n										<td colspan="2" class="text-dark fw-medium border-0">Taxable Amount</td>\n										<td class="text-dark text-end fw-medium border-0">$1650.00</td>\n									</tr>\n									<tr>\n										<td colspan="3"></td>\n										<td colspan="2" class="text-dark fw-medium">IGST 18.0%</td>\n										<td class="text-dark text-end fw-medium">$165.00</td>\n									</tr>\n									<tr>\n										<td colspan="3" class="text-dark">Total Items / Qty : 4 / 4.00</td>\n										<td colspan="2" class="text-dark fw-medium"><h6>Total</h6></td>\n										<td class="text-dark text-end fw-medium"><h6>$1,815.00</h6></td>\n									</tr>\n								</tbody>\n							</table>\n						</div>\n						<div class="py-3 border-bottom mb-3">\n							<p class="text-dark">Total amount ( in words):   One Thousand Eight Hundred Fifteen Dollars Only.</p>\n						</div>\n						<div class="d-flex align-items-center justify-content-between flex-wrap border-bottom mb-3">\n							<div class="mb-3">\n								<h6 class="mb-2">Bank Details</h6>\n								<div>\n									<p class="mb-1">Bank Name :  <span class="text-dark">YES Bank</span></p>\n									<p class="mb-1">Account # :  <span class="text-dark">6677889944551</span></p>\n									<p class="mb-1">IFSC :  <span class="text-dark">YESBBIN4567</span></p>\n									<p class="mb-0">BRANCH :  <span class="text-dark">RS Puram</span></p>\n								</div>\n							</div>\n							<div class="text-center mb-3">\n								<p class="mb-1">For Dreamstechnologies</p>\n								<span><img src="assets/img/icons/sign-01.png" alt="User Img"></span>\n							</div>\n						</div>\n						<div class="border-bottom mb-3 pb-3">\n							<h6 class="mb-2">Terms & Conditions : </h6>\n							<p class="mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>\n							<p>2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>\n						</div>\n						<div class="border-bottom pb-3">\n							<p>Thanks for your Business</p>\n						</div>\n					</div>\n				</div> <!-- end col -->\n			</div>\n			<!-- end row -->\n		</div>\n		<!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/invoice-modals/general-invoice-1/general-invoice-1.component.scss
var general_invoice_1_component_default2;
var init_general_invoice_1_component2 = __esm({
  "angular:jit:style:src/app/features/invoice-modals/general-invoice-1/general-invoice-1.component.scss"() {
    general_invoice_1_component_default2 = "/* src/app/features/invoice-modals/general-invoice-1/general-invoice-1.component.scss */\n/*# sourceMappingURL=general-invoice-1.component.css.map */\n";
  }
});

// src/app/features/invoice-modals/general-invoice-1/general-invoice-1.component.ts
var GeneralInvoice1Component;
var init_general_invoice_1_component3 = __esm({
  "src/app/features/invoice-modals/general-invoice-1/general-invoice-1.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_general_invoice_1_component();
    init_general_invoice_1_component2();
    init_core();
    init_core_index();
    init_common();
    init_router();
    GeneralInvoice1Component = class GeneralInvoice1Component2 {
      routes = routes;
    };
    GeneralInvoice1Component = __decorate([
      Component({
        selector: "app-general-invoice-1",
        imports: [CommonModule, RouterLink],
        template: general_invoice_1_component_default,
        styles: [general_invoice_1_component_default2]
      })
    ], GeneralInvoice1Component);
  }
});

// src/app/features/invoice-modals/general-invoice-1/general-invoice-1.component.spec.ts
var require_general_invoice_1_component_spec = __commonJS({
  "src/app/features/invoice-modals/general-invoice-1/general-invoice-1.component.spec.ts"(exports) {
    init_testing();
    init_general_invoice_1_component3();
    describe("GeneralInvoice1Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [GeneralInvoice1Component]
        }).compileComponents();
        fixture = TestBed.createComponent(GeneralInvoice1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_general_invoice_1_component_spec();
//# sourceMappingURL=spec-app-features-invoice-modals-general-invoice-1-general-invoice-1.component.spec.js.map
