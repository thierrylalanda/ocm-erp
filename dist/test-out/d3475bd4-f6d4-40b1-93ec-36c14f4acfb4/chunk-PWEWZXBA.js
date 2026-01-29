import {
  init_common,
  isPlatformBrowser
} from "./chunk-HQHIWYWO.js";
import {
  ChangeDetectionStrategy,
  Component,
  FactoryTarget,
  NgModule,
  NgZone,
  PLATFORM_ID,
  asapScheduler,
  core_exports,
  init_core,
  init_esm,
  inject,
  input,
  output,
  signal,
  viewChild,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __esm
} from "./chunk-FWMZPJRE.js";

// node_modules/ng-apexcharts/fesm2022/ng-apexcharts.mjs
var _ChartComponent, ChartComponent, declarations, _NgApexchartsModule, NgApexchartsModule;
var init_ng_apexcharts = __esm({
  "node_modules/ng-apexcharts/fesm2022/ng-apexcharts.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_esm();
    _ChartComponent = class _ChartComponent {
      constructor() {
        this.chart = input();
        this.annotations = input();
        this.colors = input();
        this.dataLabels = input();
        this.series = input();
        this.stroke = input();
        this.labels = input();
        this.legend = input();
        this.markers = input();
        this.noData = input();
        this.parsing = input();
        this.fill = input();
        this.tooltip = input();
        this.plotOptions = input();
        this.responsive = input();
        this.xaxis = input();
        this.yaxis = input();
        this.forecastDataPoints = input();
        this.grid = input();
        this.states = input();
        this.title = input();
        this.subtitle = input();
        this.theme = input();
        this.autoUpdateSeries = input(true);
        this.chartReady = output();
        this.chartInstance = signal(null);
        this.chartElement = viewChild.required("chart");
        this.ngZone = inject(NgZone);
        this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
      }
      ngOnChanges(changes) {
        if (!this.isBrowser)
          return;
        this.ngZone.runOutsideAngular(() => {
          asapScheduler.schedule(() => this.hydrate(changes));
        });
      }
      ngOnDestroy() {
        this.destroy();
      }
      hydrate(changes) {
        const shouldUpdateSeries = this.autoUpdateSeries() && Object.keys(changes).filter((c) => c !== "series").length === 0;
        if (shouldUpdateSeries) {
          this.updateSeries(this.series(), true);
          return;
        }
        this.createElement();
      }
      createElement() {
        return __async(this, null, function* () {
          const { default: ApexCharts } = yield import("./chunk-DRVBZYZ7.js");
          window.ApexCharts ||= ApexCharts;
          const options = {};
          const properties = [
            "annotations",
            "chart",
            "colors",
            "dataLabels",
            "series",
            "stroke",
            "labels",
            "legend",
            "fill",
            "tooltip",
            "plotOptions",
            "responsive",
            "markers",
            "noData",
            "parsing",
            "xaxis",
            "yaxis",
            "forecastDataPoints",
            "grid",
            "states",
            "title",
            "subtitle",
            "theme"
          ];
          properties.forEach((property) => {
            const value = this[property]();
            if (value) {
              options[property] = value;
            }
          });
          this.destroy();
          const chartInstance = this.ngZone.runOutsideAngular(() => new ApexCharts(this.chartElement().nativeElement, options));
          this.chartInstance.set(chartInstance);
          this.render();
          this.chartReady.emit({ chartObj: chartInstance });
        });
      }
      render() {
        return this.ngZone.runOutsideAngular(() => this.chartInstance()?.render());
      }
      updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
        return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateOptions(options, redrawPaths, animate, updateSyncedCharts));
      }
      updateSeries(newSeries, animate) {
        return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateSeries(newSeries, animate));
      }
      appendSeries(newSeries, animate) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendSeries(newSeries, animate));
      }
      appendData(newData) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendData(newData));
      }
      highlightSeries(seriesName) {
        return this.ngZone.runOutsideAngular(() => this.chartInstance()?.highlightSeries(seriesName));
      }
      toggleSeries(seriesName) {
        return this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleSeries(seriesName));
      }
      showSeries(seriesName) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.showSeries(seriesName));
      }
      hideSeries(seriesName) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.hideSeries(seriesName));
      }
      resetSeries() {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.resetSeries());
      }
      zoomX(min, max) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.zoomX(min, max));
      }
      toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleDataPointSelection(seriesIndex, dataPointIndex));
      }
      destroy() {
        this.chartInstance()?.destroy();
        this.chartInstance.set(null);
      }
      setLocale(localeName) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.setLocale(localeName));
      }
      paper() {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.paper());
      }
      addXaxisAnnotation(options, pushToMemory, context) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.addXaxisAnnotation(options, pushToMemory, context));
      }
      addYaxisAnnotation(options, pushToMemory, context) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.addYaxisAnnotation(options, pushToMemory, context));
      }
      addPointAnnotation(options, pushToMemory, context) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.addPointAnnotation(options, pushToMemory, context));
      }
      removeAnnotation(id, options) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.removeAnnotation(id, options));
      }
      clearAnnotations(options) {
        this.ngZone.runOutsideAngular(() => this.chartInstance()?.clearAnnotations(options));
      }
      dataURI(options) {
        return this.chartInstance()?.dataURI(options);
      }
    };
    _ChartComponent.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: _ChartComponent, deps: [], target: FactoryTarget.Component });
    _ChartComponent.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.2.0", version: "20.0.2", type: _ChartComponent, isStandalone: true, selector: "apx-chart", inputs: { chart: { classPropertyName: "chart", publicName: "chart", isSignal: true, isRequired: false, transformFunction: null }, annotations: { classPropertyName: "annotations", publicName: "annotations", isSignal: true, isRequired: false, transformFunction: null }, colors: { classPropertyName: "colors", publicName: "colors", isSignal: true, isRequired: false, transformFunction: null }, dataLabels: { classPropertyName: "dataLabels", publicName: "dataLabels", isSignal: true, isRequired: false, transformFunction: null }, series: { classPropertyName: "series", publicName: "series", isSignal: true, isRequired: false, transformFunction: null }, stroke: { classPropertyName: "stroke", publicName: "stroke", isSignal: true, isRequired: false, transformFunction: null }, labels: { classPropertyName: "labels", publicName: "labels", isSignal: true, isRequired: false, transformFunction: null }, legend: { classPropertyName: "legend", publicName: "legend", isSignal: true, isRequired: false, transformFunction: null }, markers: { classPropertyName: "markers", publicName: "markers", isSignal: true, isRequired: false, transformFunction: null }, noData: { classPropertyName: "noData", publicName: "noData", isSignal: true, isRequired: false, transformFunction: null }, parsing: { classPropertyName: "parsing", publicName: "parsing", isSignal: true, isRequired: false, transformFunction: null }, fill: { classPropertyName: "fill", publicName: "fill", isSignal: true, isRequired: false, transformFunction: null }, tooltip: { classPropertyName: "tooltip", publicName: "tooltip", isSignal: true, isRequired: false, transformFunction: null }, plotOptions: { classPropertyName: "plotOptions", publicName: "plotOptions", isSignal: true, isRequired: false, transformFunction: null }, responsive: { classPropertyName: "responsive", publicName: "responsive", isSignal: true, isRequired: false, transformFunction: null }, xaxis: { classPropertyName: "xaxis", publicName: "xaxis", isSignal: true, isRequired: false, transformFunction: null }, yaxis: { classPropertyName: "yaxis", publicName: "yaxis", isSignal: true, isRequired: false, transformFunction: null }, forecastDataPoints: { classPropertyName: "forecastDataPoints", publicName: "forecastDataPoints", isSignal: true, isRequired: false, transformFunction: null }, grid: { classPropertyName: "grid", publicName: "grid", isSignal: true, isRequired: false, transformFunction: null }, states: { classPropertyName: "states", publicName: "states", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, subtitle: { classPropertyName: "subtitle", publicName: "subtitle", isSignal: true, isRequired: false, transformFunction: null }, theme: { classPropertyName: "theme", publicName: "theme", isSignal: true, isRequired: false, transformFunction: null }, autoUpdateSeries: { classPropertyName: "autoUpdateSeries", publicName: "autoUpdateSeries", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { chartReady: "chartReady" }, viewQueries: [{ propertyName: "chartElement", first: true, predicate: ["chart"], descendants: true, isSignal: true }], usesOnChanges: true, ngImport: core_exports, template: `<div #chart></div>`, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush });
    ChartComponent = _ChartComponent;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: ChartComponent, decorators: [{
      type: Component,
      args: [{
        selector: "apx-chart",
        template: `<div #chart></div>`,
        changeDetection: ChangeDetectionStrategy.OnPush,
        standalone: true
      }]
    }] });
    declarations = [ChartComponent];
    _NgApexchartsModule = class _NgApexchartsModule {
    };
    _NgApexchartsModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: _NgApexchartsModule, deps: [], target: FactoryTarget.NgModule });
    _NgApexchartsModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.2", ngImport: core_exports, type: _NgApexchartsModule, imports: [ChartComponent], exports: [ChartComponent] });
    _NgApexchartsModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: _NgApexchartsModule });
    NgApexchartsModule = _NgApexchartsModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: core_exports, type: NgApexchartsModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [declarations],
        exports: [declarations]
      }]
    }] });
  }
});

export {
  NgApexchartsModule,
  init_ng_apexcharts
};
//# sourceMappingURL=chunk-PWEWZXBA.js.map
