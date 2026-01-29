import {
  SettingsService,
  init_settings_service
} from "./chunk-HBVQWAFR.js";
import "./chunk-2O5UQ647.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import "./chunk-W6MIRXHE.js";
import "./chunk-FWMZPJRE.js";

// src/app/core/services/settings/settings.service.spec.ts
init_testing();
init_settings_service();
describe("SettingsService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-core-services-settings-settings.service.spec.js.map
