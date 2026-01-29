# Chart Component - Guide d'Utilisation

## Vue d'Ensemble

Le composant `Chart` est un wrapper Angular pour ApexCharts qui simplifie la création de graphiques.

## Installation

```bash
npm install apexcharts ng-apexcharts
```

```typescript
import { ChartComponent, ChartConfig } from '@modules/_shared/presentation/components';
```

## Types de Graphiques Supportés

- `line` - Graphique en ligne
- `area` - Graphique en aire
- `bar` - Barres horizontales
- `column` - Barres verticales
- `pie` - Camembert
- `donut` - Donut
- `radialBar` - Barre radiale
- `scatter` - Nuage de points
- `bubble` - Bulles
- `heatmap` - Carte de chaleur
- `candlestick` - Chandelier (finance)

## Utilisation Basique

```typescript
import { Component } from '@angular/core';
import { ChartComponent, ChartConfig } from '@modules/_shared/presentation/components';

@Component({
  selector: 'app-my-dashboard',
  standalone: true,
  imports: [ChartComponent],
  template: `
    <app-chart [config]="chartConfig" [series]="series"></app-chart>
  `
})
export class MyDashboardComponent {
  chartConfig: ChartConfig = {
    type: 'line',
    title: 'Ventes Mensuelles',
    categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin']
  };

  series = [{
    name: 'Ventes',
    data: [30, 40, 35, 50, 49, 60]
  }];
}
```

## Exemples par Type

### Line Chart

```typescript
chartConfig: ChartConfig = {
  type: 'line',
  title: 'Évolution des Ventes',
  categories: ['Jan', 'Fév', 'Mar', 'Avr'],
  height: 350
};

series = [{
  name: '2024',
  data: [30, 40, 35, 50]
}, {
  name: '2023',
  data: [25, 35, 30, 45]
}];
```

### Bar Chart

```typescript
chartConfig: ChartConfig = {
  type: 'bar',
  title: 'Ventes par Produit',
  categories: ['Produit A', 'Produit B', 'Produit C']
};

series = [{
  name: 'Ventes',
  data: [44, 55, 41]
}];
```

### Pie Chart

```typescript
chartConfig: ChartConfig = {
  type: 'pie',
  title: 'Répartition des Ventes'
};

series = [44, 55, 13, 33];
categories = ['Produit A', 'Produit B', 'Produit C', 'Produit D'];
```

### Donut Chart

```typescript
chartConfig: ChartConfig = {
  type: 'donut',
  title: 'Parts de Marché',
  colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
};

series = [44, 55, 13, 33];
```

## Configuration Avancée

### Options Personnalisées

```typescript
chartConfig: ChartConfig = {
  type: 'line',
  title: 'Graphique Personnalisé',
  options: {
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      size: 5
    },
    grid: {
      borderColor: '#e7e7e7'
    }
  }
};
```

### Thème Sombre

```typescript
chartConfig: ChartConfig = {
  type: 'area',
  theme: 'dark',
  title: 'Graphique Mode Sombre'
};
```

### Désactiver la Toolbar

```typescript
chartConfig: ChartConfig = {
  type: 'column',
  toolbar: false,
  zoom: false
};
```

## Méthodes

### exportChart()

Exporter le graphique en image :

```typescript
@ViewChild(ChartComponent) chart!: ChartComponent;

exportPNG() {
  this.chart.exportChart('png');
}

exportSVG() {
  this.chart.exportChart('svg');
}
```

### resetZoom()

Réinitialiser le zoom :

```typescript
resetChart() {
  this.chart.resetZoom();
}
```

## Responsive

Le composant est automatiquement responsive avec un breakpoint à 768px.

## Documentation ApexCharts

Pour plus d'options : https://apexcharts.com/docs/
