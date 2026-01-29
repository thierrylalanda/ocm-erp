import {
  require_intlTelInput
} from "./chunk-WYVYSZ3G.js";
import {
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EDGRTZKC.js";
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
  __esm,
  __toESM
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/setting/general-settings/security-settings/security-settings.component.html
var security_settings_component_default;
var init_security_settings_component = __esm({
  "angular:jit:template:src/app/features/setting/general-settings/security-settings/security-settings.component.html"() {
    security_settings_component_default = `        <div class="mb-3">
            <div class="pb-3 border-bottom mb-3">
                <h6 class="mb-0">Security</h6>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-lock-circle text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Password</h5>
                        <p class="fs-14">Set a unique password to secure the account</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="badge badge-md badge-soft-danger me-3">Last Changed, Jan 16, 2025</span>                                            
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#change_password"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-edit"></i></span></a>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-security-safe text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Two Factor Authentication</h5>
                        <p class="fs-14">Use your mobile phone to receive security PIN.</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="badge badge-md badge-soft-danger">Enabled, Jan 16, 2025</span>
                    <label class="d-flex align-items-center form-switch ps-3">
                        <input class="form-check-input m-0 me-2" type="checkbox" checked>
                    </label>
                    <a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#two-factor"><i class="isax isax-setting-2"></i></span></a>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">										
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <img src="assets/img/icons/google-icon.svg" class="w-75" alt="icon">
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Google Authentication</h5>
                        <p class="fs-14">Connect to Google</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="badge badge-outline-light text-dark border d-flex align-items-center"><i class="fa fa-circle text-success fs-8 me-1"></i>Connected</span>
                    <label class="d-flex align-items-center form-switch ps-3">
                        <input class="form-check-input m-0 me-2" type="checkbox" checked>
                    </label>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-call text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Phone Number Verification</h5>
                        <p class="fs-14">Phone Number associated with the account</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="badge badge-md badge-soft-success me-3">Verified<i class="isax isax-tick-circle ms-1"></i></span>
                    <a href="javascript:void(0);" class="me-3" data-bs-toggle="modal" data-bs-target="#phone_verification"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-edit"></i></span></a>
                    <a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-trash"></i></span></a>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-sms-tracking text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Email Verification</h5>
                        <p class="fs-14">Email Address associated with the account</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="badge badge-md badge-soft-success me-3">Verified<i class="isax isax-tick-circle ms-1"></i></span>
                    <a href="javascript:void(0);" class="me-3" data-bs-toggle="modal" data-bs-target="#email_verification"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-edit"></i></span></a>
                    <a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-trash"></i></span></a>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-device-message text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Browsers & Devices</h5>
                        <p class="fs-14">The browsers & devices associated with the account</p>
                    </div>
                </div>
                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_device"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-eye"></i></span></a>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-close-circle text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Deactivate Account</h5>
                        <p class="fs-14">This will shutdown your account. Your account will be reactive when you sign in again</p>
                    </div>
                </div>
                <a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-slash"></i></span></a>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div class="d-flex align-items-center">
                    <span class="avatar avatar-lg border bg-light me-2">
                        <i class="isax isax-info-circle text-dark fs-24"></i>
                    </span>
                    <div>
                        <h5 class="fs-16 fw-semibold mb-1">Delete Account</h5>
                        <p class="fs-14">Your account will be permanently deleted</p>
                    </div>
                </div>
                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-trash"></i></span></a>
            </div>
        </div>


        <!-- Start Change Password Modal  -->
		<div id="change_password" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<!-- Start modal header -->
					<div class="modal-header">
						<h4 class="modal-title">Change Password</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<form >
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">Current Password<span class="text-danger ms-1">*</span></label>
								<div class="pass-group input-group">
									<span class="input-group-text border-end-0">
										<i class="isax isax-lock"></i>
									</span>
									<span class="isax toggle-password " (click)="togglePassword(0)" [ngClass]="showPassword[0]?'isax-eye':'isax-eye-slash'"></span>
									<input type="password" [type]="showPassword[0]?'text':'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
								</div>
							</div>
							<div class="mb-3">
								<label class="form-label">New Password<span class="text-danger ms-1">*</span></label>
								<div class="pass-group input-group mb-3">
									<span class="input-group-text border-end-0">
										<i class="isax isax-lock"></i>
									</span>
									<span class="isax toggle-password " (click)="togglePassword(1)" [ngClass]="showPassword[1]?'isax-eye':'isax-eye-slash'"></span>
									<input type="password" [type]="showPassword[1]?'text':'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************" (input)="checkPasswordStrength($event)">
								</div>
                                <div id="passwordStrength" class="strength-meter password-strength d-flex" [ngClass]="{'poor-active':strengthLevel === 'poor','avg-active':strengthLevel === 'weak','strong-active':strengthLevel === 'strong','heavy-active':strengthLevel === 'heavy'}" >
                                    <span id="poor" [ngClass]="{'active': strengthLevel === 'poor'||strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                    <span id="weak" [ngClass]="{'active': strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                    <span id="strong" [ngClass]="{'active': strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                    <span id="heavy" [ngClass]="{'active': strengthLevel === 'heavy'}"></span>
                                  </div>
								
								<div id="passwordInfo" class="mb-2"></div>
								<p class="text-gray-5">Use 8 or more characters with a mix of letters, numbers & symbols.</p>
							</div>
							<div>
								<label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
								<div class="pass-group input-group">
									<span class="input-group-text border-end-0">
										<i class="isax isax-lock"></i>
									</span>
									<span class="isax toggle-password " (click)="togglePassword(2)" [ngClass]="showPassword[2]?'isax-eye':'isax-eye-slash'"></span>
									<input type="password" [type]="showPassword[2]?'text':'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
								</div>
							</div>
						</div><!-- End modal body -->
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
						</div><!-- End modal footer -->
					</form>
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End Change Password Modal -->

		<!-- Start Phone Verification Modal  -->
		<div id="phone_verification" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<!-- Start modal header -->
					<div class="modal-header">
						<h4 class="modal-title">Change Phone Number</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<form >
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">Current Phone Number<span class="text-danger ms-1">*</span></label>
								<input type="text" class="form-control" id="phone">
							</div>
							<div class="mb-3">
								<label class="form-label">New Phone Number<span class="text-danger ms-1">*</span></label>
								<input type="text" class="form-control" id="phone2">
								<p class="mt-2 d-inline-flex align-items-center"><i class="isax isax-info-circle me-1"></i>New phone number only updated once you verified </p>
							</div>
							<div>
								<label class="form-label">Current Password<span class="text-danger ms-1">*</span></label>
								<div class="pass-group input-group">
									<span class="input-group-text border-end-0">
										<i class="isax isax-lock"></i>
									</span>
									<span class="isax toggle-password " (click)="togglePassword(3)" [ngClass]="showPassword[3]?'isax-eye':'isax-eye-slash'"></span>
									<input type="password" [type]="showPassword[3]?'text':'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
								</div>
							</div>								
						</div><!-- End modal body -->
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
						</div><!-- End modal footer -->
					</form>
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End Phone Verification Modal -->

		<!-- Start Email Verification Modal  -->
		<div id="email_verification" class="modal fade">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<!-- End modal header -->
					<div class="modal-header">
						<h4 class="modal-title">Change Email Address</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<form >
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">Current Email Address<span class="text-danger ms-1">*</span></label>
								<input type="email" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">New Email Address<span class="text-danger ms-1">*</span></label>
								<input type="email" class="form-control">
								<p class="mt-2 d-inline-flex align-items-center"><i class="isax isax-info-circle me-1"></i>New email address only updated once you verified </p>
							</div>
							<div>
								<label class="form-label">Current Password<span class="text-danger ms-1">*</span></label>
								<div class="pass-group input-group">
									<span class="input-group-text border-end-0">
										<i class="isax isax-lock"></i>
									</span>
									<span class="isax toggle-password " (click)="togglePassword(4)" [ngClass]="showPassword[4]?'isax-eye':'isax-eye-slash'"></span>
									<input type="password" [type]="showPassword[4]?'text':'password'" class="pass-input form-control border-start-0 ps-0" placeholder="****************">
								</div>
							</div>								
						</div><!-- End modal body -->
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
						</div><!-- End modal footer -->
					</form>
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End Email Verification Modal -->

		<!-- Start two step -->
		<div id="two-factor" class="modal fade">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<!-- Start modal header -->
					<div class="modal-header">
						<h4 class="modal-title">SMS Two Factor Authentication</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<form >
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">Phone Number<span class="text-danger ms-1">*</span></label>
								<input type="text" class="form-control" id="phone3">
							</div>
							<p class="fs-13 mb-0">By providing your phone number, you agree to receive text messages from Figma to enable two-factor authentication when you log in. </p>							
						</div><!-- End modal body -->
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Verify</button>
						</div><!-- End modal footer -->
					</form>
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End two step -->

		<!-- Start View Device Modal  -->
		<div id="view_device" class="modal fade">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<!-- Start modal header -->
					<div class="modal-header">
						<h4 class="modal-title">Browsers & Devices</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<div class="modal-body">								
						<!-- Table List -->
						<div class="table-responsive border border-bottom-0">
							<table class="table">
								<thead class="thead-light">
									<tr>
										<th>Device</th>
										<th>Date</th>
										<th>IP Address</th>
										<th>Location</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="text-dark">Chrome - Windows</td>
										<td>24 Jan 2025, 10:00 AM</td>
										<td>232.222.12.72</td>
										<td>Newyork / USA</td>
										<td>
											<a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-logout"></i></span></a>	
										</td>
									</tr>
									<tr>
										<td class="text-dark">Safari Macos</td>
										<td>19 Dec 2024, 09:30 AM</td>
										<td>224.111.12.75</td>
										<td>Newyork / USA</td>
										<td>
											<a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-logout"></i></span></a>		
										</td>
									</tr>
									<tr>
										<td class="text-dark">Firefox Windows</td>
										<td>11 Dec 2024, 05:20 PM</td>
										<td>111.222.13.28</td>
										<td>Newyork / USA</td>
										<td>
											<a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-logout"></i></span></a>		
										</td>
									</tr>
									<tr>
										<td class="text-dark">Safari Macos</td>
										<td>29 Nov 2024, 04:45 PM</td>
										<td>333.555.10.54</td>
										<td>Newyork / USA</td>
										<td>
											<a href="javascript:void(0);"><span class="badge badge-soft-light text-dark d-inline-flex align-items-center"><i class="isax isax-logout"></i></span></a>		
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- /Table List -->
					</div><!-- End modal body -->
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End View Device Modal -->

		<!-- Start Delete Account  -->
		<div id="delete_modal" class="modal fade">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<!-- Start modal header -->
					<div class="modal-header">
						<h4 class="modal-title">Delete Account</h4>
						<button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
					</div>
					<!-- End modal header -->
					<form >
						<div class="modal-body">
							<div class="mb-3">
								<p class="text-dark fw-semibold mb-0">Why Are You Deleting Your Account?</p>
								<p class="fs-13">We're sorry to see you go! To help us improve, please let us know your reason for deleting your account</p>
							</div>
							<div>
								<div class="form-check mb-3 d-flex align-items-center">
									<input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-1">
									<div class="ms-2">
										<p class="text-dark fw-semibold mb-0">No longer using the service</p>
										<label class="form-check-label fs-13" for="Radio-sm-1">
											I no longer need this service and won\u2019t be using it in the future.
										</label>
									</div>
								</div>
								<div class="form-check mb-3 d-flex align-items-center">
									<input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-2">
									<div class="ms-2">
										<p class="text-dark fw-semibold mb-0">Privacy concerns</p>
										<label class="form-check-label fs-13" for="Radio-sm-2">
											I am concerned about how my data is handled and want to remove
										</label>
									</div>
								</div>
								<div class="form-check mb-3 d-flex align-items-center">
									<input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-3">
									<div class="ms-2">
										<p class="text-dark fw-semibold mb-0">Too many notifications/emails</p>
										<label class="form-check-label fs-13" for="Radio-sm-3">
											I\u2019m overwhelmed by the volume of notifications or emails
										</label>
									</div>
								</div>
								<div class="form-check mb-3 d-flex align-items-center">
									<input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-4">
									<div class="ms-2">
										<p class="text-dark fw-semibold mb-0">Poor user experience</p>
										<label class="form-check-label fs-13" for="Radio-sm-4">
											I\u2019ve had difficulty using the platform, and it didn\u2019t meet my expectations
										</label>
									</div>
								</div>
								<div class="form-check mb-3">
									<input class="form-check-input" type="radio" name="Radio-2" id="Radio-sm-5" checked>
									<label class="form-check-label text-dark fw-semibold" for="Radio-sm-5">
										Other (Please specify)
									</label>
								</div>
							</div>	
							<div>
								<label class="form-label">Reason<span class="text-danger ms-1">*</span></label>
								<textarea class="form-control" rows="3"></textarea>
							</div>					
						</div><!-- End modal body -->
						<div class="modal-footer d-flex align-items-center justify-content-between gap-1">
							<button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary">Confirm & Delete</button>
						</div><!-- End modal footer -->
					</form>
				</div><!-- End modal content-->
			</div><!-- End modal dialog-->
		</div>
		<!-- / End Delete Account  -->`;
  }
});

// angular:jit:style:src/app/features/setting/general-settings/security-settings/security-settings.component.scss
var security_settings_component_default2;
var init_security_settings_component2 = __esm({
  "angular:jit:style:src/app/features/setting/general-settings/security-settings/security-settings.component.scss"() {
    security_settings_component_default2 = "/* src/app/features/setting/general-settings/security-settings/security-settings.component.scss */\n/*# sourceMappingURL=security-settings.component.css.map */\n";
  }
});

// src/app/features/setting/general-settings/security-settings/security-settings.component.ts
var import_intl_tel_input, SecuritySettingsComponent;
var init_security_settings_component3 = __esm({
  "src/app/features/setting/general-settings/security-settings/security-settings.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_security_settings_component();
    init_security_settings_component2();
    init_core();
    init_core_index();
    import_intl_tel_input = __toESM(require_intlTelInput());
    init_common();
    SecuritySettingsComponent = class SecuritySettingsComponent2 {
      routes = routes;
      showPassword = [false];
      togglePassword(index) {
        this.showPassword[index] = !this.showPassword[index];
      }
      passwordValue = "";
      strengthLevel = "";
      passwordInfoMessage = null;
      passwordInfoColor = "";
      poorRegExp = /[a-z]/;
      weakRegExp = /(?=.*?[0-9])/;
      strongRegExp = /(?=.*?[#?!@$%^&*-])/;
      whitespaceRegExp = /^$|\s+/;
      checkPasswordStrength(event) {
        const inputElement = event.target;
        const password = inputElement.value;
        this.passwordValue = password;
        const passwordLength = password.length;
        const hasPoor = this.poorRegExp.test(password);
        const hasWeak = this.weakRegExp.test(password);
        const hasStrong = this.strongRegExp.test(password);
        const hasWhitespace = this.whitespaceRegExp.test(password);
        if (password === "") {
          this.resetStrength();
          return;
        }
        if (hasWhitespace) {
          this.passwordInfoMessage = "Whitespaces are not allowed";
          this.passwordInfoColor = "red";
          this.strengthLevel = "";
          return;
        }
        if (passwordLength < 8) {
          this.strengthLevel = "poor";
          this.passwordInfoMessage = "Weak. Must contain at least 8 characters.";
          this.passwordInfoColor = "red";
        } else if (hasPoor || hasWeak || hasStrong) {
          this.strengthLevel = "weak";
          this.passwordInfoMessage = "Average. Must contain at least 1 letter or number.";
          this.passwordInfoColor = "#FFB54A";
        }
        if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
          this.strengthLevel = "strong";
          this.passwordInfoMessage = "Almost strong. Must contain a special symbol.";
          this.passwordInfoColor = "#1D9CFD";
        }
        if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
          this.strengthLevel = "heavy";
          this.passwordInfoMessage = "Awesome! You have a secure password.";
          this.passwordInfoColor = "#159F46";
        }
      }
      resetStrength() {
        this.strengthLevel = "";
        this.passwordInfoMessage = null;
      }
      ngAfterViewInit() {
        const input = document.querySelector("#phone");
        const input2 = document.querySelector("#phone2");
        const input3 = document.querySelector("#phone3");
        (0, import_intl_tel_input.default)(input, {
          initialCountry: "us",
          preferredCountries: ["us", "gb", "in"],
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
        });
        (0, import_intl_tel_input.default)(input2, {
          initialCountry: "us",
          preferredCountries: ["us", "gb", "in"],
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
        });
        (0, import_intl_tel_input.default)(input3, {
          initialCountry: "us",
          preferredCountries: ["us", "gb", "in"],
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
        });
        input.addEventListener("input", () => {
          input.value = input.value.replace(/[^0-9+()-\s]/g, "");
        });
        input2.addEventListener("input", () => {
          input2.value = input2.value.replace(/[^0-9+()-\s]/g, "");
        });
        input3.addEventListener("input", () => {
          input3.value = input3.value.replace(/[^0-9+()-\s]/g, "");
        });
      }
    };
    SecuritySettingsComponent = __decorate([
      Component({
        selector: "app-security-settings",
        imports: [CommonModule],
        template: security_settings_component_default,
        styles: [security_settings_component_default2]
      })
    ], SecuritySettingsComponent);
  }
});

// src/app/features/setting/general-settings/security-settings/security-settings.component.spec.ts
var require_security_settings_component_spec = __commonJS({
  "src/app/features/setting/general-settings/security-settings/security-settings.component.spec.ts"(exports) {
    init_testing();
    init_security_settings_component3();
    describe("SecuritySettingsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SecuritySettingsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SecuritySettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_security_settings_component_spec();
//# sourceMappingURL=spec-app-features-setting-general-settings-security-settings-security-settings.component.spec.js.map
