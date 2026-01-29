import { Provider } from '@angular/core';
import { PRODUCT_REPOSITORY } from '../domain/repositories/product.repository';
import { STOCK_REPOSITORY } from '../domain/repositories/stock.repository';
import { HttpProductRepository } from './repositories/http-product.repository';
import { HttpStockRepository } from './repositories/http-stock.repository';
import { PRODUCT_CATEGORY_REPOSITORY } from '../domain/repositories/product-category.repository';
import { HttpProductCategoryRepository } from './repositories/http-product-category.repository';
import { WAREHOUSE_REPOSITORY } from '../domain/repositories/warehouse.repository';
import { HttpWarehouseRepository } from './repositories/http-warehouse.repository';
import { LOT_REPOSITORY } from '../domain/repositories/lot.repository';
import { HttpLotRepository } from './repositories/http-lot.repository';
import { RECEPTION_REPOSITORY } from '../domain/repositories/reception.repository';
import { MockReceptionRepository } from './repositories/mock-reception.repository';
import { SHIPMENT_REPOSITORY } from '../domain/repositories/shipment.repository';
import { MockShipmentRepository } from './repositories/mock-shipment.repository';

/**
 * Providers pour les repositories du module Stock
 */
export const STOCK_REPOSITORY_PROVIDERS: Provider[] = [
    { provide: PRODUCT_REPOSITORY, useClass: HttpProductRepository },
    { provide: STOCK_REPOSITORY, useClass: HttpStockRepository },
    { provide: PRODUCT_CATEGORY_REPOSITORY, useClass: HttpProductCategoryRepository },
    { provide: WAREHOUSE_REPOSITORY, useClass: HttpWarehouseRepository },
    { provide: LOT_REPOSITORY, useClass: HttpLotRepository },
    { provide: RECEPTION_REPOSITORY, useClass: MockReceptionRepository },
    { provide: SHIPMENT_REPOSITORY, useClass: MockShipmentRepository }
];
