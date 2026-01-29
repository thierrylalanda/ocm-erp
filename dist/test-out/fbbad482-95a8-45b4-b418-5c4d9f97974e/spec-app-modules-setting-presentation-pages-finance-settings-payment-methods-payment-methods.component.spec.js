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

// angular:jit:template:src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.html
var payment_methods_component_default;
var init_payment_methods_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.html"() {
    payment_methods_component_default = `<div class="">
    <div class="mb-0">
        <div class="pb-3 border-bottom mb-3">
            <h6 class="mb-0">Payments Method</h6>
        </div>
        <form >
            <div class="card-body">
                <!-- start row -->
                <div class="row align-items-center saas-settings">
                    <div class="col-md-6">
                        <div class="card shadow-none">
                            <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span><img src="assets/img/icons/paypal-name.svg" alt="image"></span>
                                        <span class="badge badge-soft-success d-inline-flex align-items-center ms-2"><span class="badge-dot bg-success me-1"></span>Connected</span>
                                    </div>
                                <p class="text-truncate line-clamb-2">PayPal is the faster, safer way to send and receive money </p>
                            </div> <!-- end card body -->
                            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_paypall"><i class="isax isax-setting-2"></i></a>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input m-0" type="checkbox" checked="">
                                </div>
                            </div> <!-- end card footer -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-md-6">
                        <div class="card shadow-none">
                            <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span><img src="assets/img/icons/stripe-icon.svg" alt="image"></span>
                                        <span class="badge badge-soft-success d-inline-flex align-items-center ms-2"><span class="badge-dot bg-success me-1"></span>Connected</span>
                                    </div>
                                <p class="text-truncate line-clamb-2">APIs to accept cards, manage subscriptions, send money. </p>
                            </div> <!-- end card body -->
                            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_strip"><i class="isax isax-setting-2"></i></a>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input m-0" type="checkbox" checked="">
                                </div>
                            </div> <!-- end card footer -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-md-6">
                        <div class="card shadow-none">
                            <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span><img src="assets/img/icons/razorpay-icon.svg" alt="image"></span>
                                        <span class="badge badge-soft-success d-inline-flex align-items-center ms-2"><span class="badge-dot bg-success me-1"></span>Connected</span>
                                    </div>
                                <p class="text-truncate line-clamb-2">Razorpay is an India's all in one payment solution. </p>
                            </div> <!-- end card body -->
                            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_razorpay"><i class="isax isax-setting-2"></i></a>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input m-0" type="checkbox" checked="">
                                </div>
                            </div> <!-- end card footer -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-md-6">
                        <div class="card shadow-none">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <span><img src="assets/img/icons/applepay-icon.svg" alt="image"></span>
                                    <span class="badge badge-soft-primary d-inline-flex align-items-center ms-2"><span class="badge-dot bg-dark me-1"></span>Not Connected</span>
                                </div>
                                <p class="text-truncate line-clamb-2">PayPal is the faster, safer way to send and<br> receive money </p>
                            </div> <!-- end col -->
                            <div class="card-footer bg-light d-flex align-items-center justify-content-between ">
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1 me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                                    <a class="btn btn-sm btn-dark rounded-2 d-inline-flex align-items-center justify-content-center p-1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_applepay"><i class="isax isax-setting-2"></i></a>
                                </div>
                            </div>  <!-- end card footer -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div> <!-- end card body -->
        </form>
    </div> 
</div> <!-- end col -->


		<!-- Start Add Modal  -->
		<div id="add_paypall" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">PayPal</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<form>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">From Email Address <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">API Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
							<div class="mb-0">
								<label class="form-label">Secret Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
						</div>
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- End Add Modal -->

		<!-- Start Add Modal  -->
		<div id="add_strip" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Strip</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<form>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">From Email Address <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">API Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
							<div class="mb-0">
								<label class="form-label">Secret Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
						</div>
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- End Add Modal -->

		<!-- Start Add Modal  -->
		<div id="add_razorpay" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Razorpay</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<form>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">From Email Address <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">API Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
							<div class="mb-0">
								<label class="form-label">Secret Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
						</div>
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- End Add Modal -->

		<!-- Start Add Modal  -->
		<div id="add_applepay" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Apple Pay</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<form>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">From Email Address <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">API Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
							<div class="mb-0">
								<label class="form-label">Secret Key <span class="text-danger">*</span></label>
								<input type="text" class="form-control">                           
							</div>
						</div>
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- End Add Modal -->

		<!-- Start Delete Modal  -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Payment Method</h6>
                        <p class="mb-3">Are you sure, you want to delete payment method?</p>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Delete Modal  -->`;
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.scss
var payment_methods_component_default2;
var init_payment_methods_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.scss"() {
    payment_methods_component_default2 = "/* src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.scss */\n/*# sourceMappingURL=payment-methods.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.ts
var PaymentMethodsComponent;
var init_payment_methods_component3 = __esm({
  "src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_payment_methods_component();
    init_payment_methods_component2();
    init_core();
    PaymentMethodsComponent = class PaymentMethodsComponent2 {
    };
    PaymentMethodsComponent = __decorate([
      Component({
        selector: "app-payment-methods",
        imports: [],
        template: payment_methods_component_default,
        styles: [payment_methods_component_default2]
      })
    ], PaymentMethodsComponent);
  }
});

// src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.spec.ts
var require_payment_methods_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/finance-settings/payment-methods/payment-methods.component.spec.ts"(exports) {
    init_testing();
    init_payment_methods_component3();
    describe("PaymentMethodsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [PaymentMethodsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PaymentMethodsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_payment_methods_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-finance-settings-payment-methods-payment-methods.component.spec.js.map
