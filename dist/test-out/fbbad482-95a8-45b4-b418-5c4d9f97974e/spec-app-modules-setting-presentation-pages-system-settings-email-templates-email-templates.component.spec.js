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

// angular:jit:template:src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.html
var email_templates_component_default;
var init_email_templates_component = __esm({
  "angular:jit:template:src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.html"() {
    email_templates_component_default = `<div class="">
    <div>
        <div class="pb-3 border-bottom mb-3">
            <h6 class="mb-0">Email Templates</h6>
        </div>
        <div class="mb-3">
            
            <!-- start row -->
            <div class="row">
                <div class="col-md-3">
                    <div class="input-icon-start position-relative mb-3">
                        <span class="input-icon-addon">
                            <i class="isax isax-search-normal"></i>
                        </span>
                        <input type="text" class="form-control form-control-sm bg-white" placeholder="Search">

                    </div>
                </div><!-- end col -->
                <div class="col-md-9">
                    <div class="d-flex justify-content-end align-items-center flex-wrap gap-2 mb-3">
                        <div>
                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal"><i class="isax isax-add-circle5 me-1"></i>New Templates</a>
                        </div>
                    </div>
                </div><!-- end col -->
            </div>
            <!-- end row -->

            <!-- Table List -->
            <div class="table-responsive table-nowrap">
                <table class="table border mb-0 dataTable">
                    <thead class="table-light">
                        <tr>
                            <th>Template Name</th>
                            <th>Created On</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">Welcome Email</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">24 Jan 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">Booking Confirmation</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">27 Dec 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">Booking Reminder</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">19 Dec 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">Booking Cancellation</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">08 Dec 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">Seasonal Promotions & Discounts</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">25 Nov 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 class="fw-medium fs-14"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_email">System Update</a></h6>
                            </td>
                            <td>
                                <p class="text-dark">20 Nov 2025</p>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" checked>
                                </div>
                            </td>
                            <td>
                                <div class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#view_email"><i class="isax isax-eye me-2"></i>View</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <!-- /Table List -->
        </div>
    </div>
</div><!-- end col -->



		<!-- Start Add Modal -->
        <div class="modal fade" id="add_modal">
            <div class="modal-dialog modal-dialog-centered modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="mb-0">Add Template</h5>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div class="modal-body ">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="mb-0">
                                    <label class="form-label">Template Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                        <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New</button>
                    </div>
                </div>
            </div>
        </div>
		<!-- End Edit Modal -->

		<!-- Start Edit Modal -->
        <div class="modal fade" id="edit_modal">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="mb-0">Edit Template</h5>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div class="modal-body ">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="border br-10 p-2 mb-3">
                                    <p>
                                        Hi <span class="text-info">{{'{'}}Customer Name{{'}'}}</span>,
                                        <br> Welcome to <span class="text-info">{{'{'}}Company Name{{'}'}}</span>!

                                    </p>
                                    <p>
                                        We\u2019re thrilled to have you as part of our community and are excited to support you in finding the perfect car rental solution. Thank you for choosing us \u2013 we truly appreciate your trust and confidence.
                                    </p>
                                    <p>
                                        At <span class="text-info">{{'{'}}Company Name{{'}'}}</span>, our mission is to make your experience as smooth and efficient as possible. Whether you\u2019re looking for the perfect vehicle or need assistance with booking, we\u2019re
                                        here to help you every step of the way. If you have any questions or need help, our dedicated support team is always ready to assist you. Feel free to reach out at any time \u2013 we\u2019re committed to ensuring you have
                                        the best experience possible
                                    </p>
                                    <p>
                                        Thank you again for choosing <span class="text-info">{{'{'}}Company Name{{'}'}}</span>. We\u2019re excited to be part of your journey and look forward to supporting you throughout your rental experience.
                                    </p>
                                    <p>
                                        Best
                                        <br> The <span class="text-info">{{'{'}}Company Name{{'}'}}</span>Team
                                    </p>
                                </div>
                                <div class="border rounded-3 p-3 mb-3">
                                    <label class="form-label">Tags</label>
                                    <ul class="d-flex flex-wrap gap-2">
                                        <li><span class="text-info">{{'{'}}Company Name{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Booking Number{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Booking Date{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Car Name{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Invoice ID{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Receipt ID{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Pickup Location{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Pickup Date{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Drop-off Location{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Drop-off Date{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Rental Price{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Website URL{{'}'}}</span></li>
                                        <li><span class="text-info">{{'{'}}Discount Code{{'}'}}</span></li>
                                    </ul>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <label class="form-label mb-0">
                                        Status
                                    </label>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" checked>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                        <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
		<!-- End Edit Modal -->

		<!-- Start View Email -->
        <div class="modal fade" id="view_email">
            <div class="modal-dialog modal-dialog-centered modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="mb-0">Preview Template</h5>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div class="modal-body ">
                        <div class="row">
                            <div class="col-lg-12">
                                <p>
                                    Hi <span class="text-info">{{'{'}}Customer Name{{'}'}}</span>,
                                    <br> Welcome to <span class="text-info">{{'{'}}Company Name{{'}'}}</span>!

                                </p>
                                <p>
                                    We\u2019re thrilled to have you as part of our community and are excited to support you in finding the perfect car rental solution. Thank you for choosing us \u2013 we truly appreciate your trust and confidence.
                                </p>
                                <p>
                                    At <span class="text-info">{{'{'}}Company Name{{'}'}}</span>, our mission is to make your experience as smooth and efficient as possible. Whether you\u2019re looking for the perfect vehicle or need assistance with booking, we\u2019re here
                                    to help you every step of the way. If you have any questions or need help, our dedicated support team is always ready to assist you. Feel free to reach out at any time \u2013 we\u2019re committed to ensuring you have the best
                                    experience possible
                                </p>
                                <p>
                                    Thank you again for choosing <span class="text-info">{{'{'}}Company Name{{'}'}}</span>. We\u2019re excited to be part of your journey and look forward to supporting you throughout your rental experience.
                                </p>
                                <p>
                                    Best
                                    <br> The <span class="text-info">{{'{'}}Company Name{{'}'}}</span>Team
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<!-- End View Email -->

        <!-- Start Delete Modal  -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Email Template</h6>
                        <p class="mb-3">Are you sure, you want to delete email template?</p>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Delete Modal  -->
`;
  }
});

// angular:jit:style:src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.scss
var email_templates_component_default2;
var init_email_templates_component2 = __esm({
  "angular:jit:style:src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.scss"() {
    email_templates_component_default2 = "/* src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.scss */\n/*# sourceMappingURL=email-templates.component.css.map */\n";
  }
});

// src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.ts
var EmailTemplatesComponent;
var init_email_templates_component3 = __esm({
  "src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_email_templates_component();
    init_email_templates_component2();
    init_core();
    EmailTemplatesComponent = class EmailTemplatesComponent2 {
    };
    EmailTemplatesComponent = __decorate([
      Component({
        selector: "app-email-templates",
        imports: [],
        template: email_templates_component_default,
        styles: [email_templates_component_default2]
      })
    ], EmailTemplatesComponent);
  }
});

// src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.spec.ts
var require_email_templates_component_spec = __commonJS({
  "src/app/modules/setting/presentation/pages/system-settings/email-templates/email-templates.component.spec.ts"(exports) {
    init_testing();
    init_email_templates_component3();
    describe("EmailTemplatesComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [EmailTemplatesComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(EmailTemplatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_email_templates_component_spec();
//# sourceMappingURL=spec-app-modules-setting-presentation-pages-system-settings-email-templates-email-templates.component.spec.js.map
