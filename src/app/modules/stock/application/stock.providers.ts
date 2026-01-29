import { Provider } from '@angular/core';

// Products Use Cases
import { GET_PRODUCTS_USE_CASE } from './use-cases/products/get-products.use-case';
import { GetProductsUseCaseImpl } from './use-cases/products/get-products.use-case.impl';
import { CREATE_PRODUCT_USE_CASE } from './use-cases/products/create-product.use-case';
import { CreateProductUseCaseImpl } from './use-cases/products/create-product.use-case.impl';
import { UPDATE_PRODUCT_USE_CASE } from './use-cases/products/update-product.use-case';
import { UpdateProductUseCaseImpl } from './use-cases/products/update-product.use-case.impl';
import { DELETE_PRODUCT_USE_CASE } from './use-cases/products/delete-product.use-case';
import { DeleteProductUseCaseImpl } from './use-cases/products/delete-product.use-case.impl';
import { GET_PRODUCT_BY_ID_USE_CASE } from './use-cases/products/get-product-by-id.use-case';
import { GetProductByIdUseCaseImpl } from './use-cases/products/get-product-by-id.use-case.impl';

// Categories Use Cases
import { GET_PRODUCT_CATEGORIES_USE_CASE } from './use-cases/categories/get-product-categories.use-case';
import { GetProductCategoriesUseCaseImpl } from './use-cases/categories/get-product-categories.use-case.impl';
import { CREATE_PRODUCT_CATEGORY_USE_CASE } from './use-cases/categories/create-product-category.use-case';
import { CreateProductCategoryUseCaseImpl } from './use-cases/categories/create-product-category.use-case.impl';
import { UPDATE_PRODUCT_CATEGORY_USE_CASE } from './use-cases/categories/update-product-category.use-case';
import { UpdateProductCategoryUseCaseImpl } from './use-cases/categories/update-product-category.use-case.impl';
import { DELETE_PRODUCT_CATEGORY_USE_CASE } from './use-cases/categories/delete-product-category.use-case';
import { DeleteProductCategoryUseCaseImpl } from './use-cases/categories/delete-product-category.use-case.impl';

// Stock Movements Use Cases
import { GET_STOCK_MOVEMENTS_USE_CASE } from './use-cases/movements/get-stock-movements.use-case';
import { GetStockMovementsUseCaseImpl } from './use-cases/movements/get-stock-movements.use-case.impl';
import { CREATE_STOCK_MOVEMENT_USE_CASE } from './use-cases/movements/create-stock-movement.use-case';
import { CreateStockMovementUseCaseImpl } from './use-cases/movements/create-stock-movement.use-case.impl';

// Warehouses Use Cases
import { GET_WAREHOUSES_USE_CASE } from './use-cases/warehouses/get-warehouses.use-case';
import { GetWarehousesUseCaseImpl } from './use-cases/warehouses/get-warehouses.use-case.impl';
import { CREATE_WAREHOUSE_USE_CASE } from './use-cases/warehouses/create-warehouse.use-case';
import { CreateWarehouseUseCaseImpl } from './use-cases/warehouses/create-warehouse.use-case.impl';
import { UPDATE_WAREHOUSE_USE_CASE } from './use-cases/warehouses/update-warehouse.use-case';
import { UpdateWarehouseUseCaseImpl } from './use-cases/warehouses/update-warehouse.use-case.impl';
import { DELETE_WAREHOUSE_USE_CASE } from './use-cases/warehouses/delete-warehouse.use-case';
import { DeleteWarehouseUseCaseImpl } from './use-cases/warehouses/delete-warehouse.use-case.impl';

// Inventory Use Cases
import { GET_STOCK_LEVEL_USE_CASE } from './use-cases/inventory/get-stock-level.use-case';
import { GetStockLevelUseCaseImpl } from './use-cases/inventory/get-stock-level.use-case.impl';
import { GET_INVENTORY_BY_WAREHOUSE_USE_CASE } from './use-cases/inventory/get-inventory-by-warehouse.use-case';
import { GetInventoryByWarehouseUseCaseImpl } from './use-cases/inventory/get-inventory-by-warehouse.use-case.impl';

// Settings Use Cases
import { GET_STOCK_SETTINGS_USE_CASE } from './use-cases/settings/get-stock-settings.use-case';
import { GetStockSettingsUseCaseImpl } from './use-cases/settings/get-stock-settings.use-case.impl';
import { UPDATE_STOCK_SETTINGS_USE_CASE } from './use-cases/settings/update-stock-settings.use-case';
import { UpdateStockSettingsUseCaseImpl } from './use-cases/settings/update-stock-settings.use-case.impl';

// Dashboard Use Cases
import { GET_STOCK_STATS_USE_CASE } from './use-cases/dashboard/get-stock-stats.use-case';
import { GetStockStatsUseCaseImpl } from './use-cases/dashboard/get-stock-stats.use-case.impl';
import { GET_LOW_STOCK_ALERTS_USE_CASE } from './use-cases/dashboard/get-low-stock-alerts.use-case';
import { GetLowStockAlertsUseCaseImpl } from './use-cases/dashboard/get-low-stock-alerts.use-case.impl';
import { GET_PENDING_RECEPTIONS_USE_CASE } from './use-cases/dashboard/get-pending-receptions.use-case';
import { GetPendingReceptionsUseCaseImpl } from './use-cases/dashboard/get-pending-receptions.use-case';
import { GET_PENDING_SHIPMENTS_USE_CASE } from './use-cases/dashboard/get-pending-shipments.use-case';
import { GetPendingShipmentsUseCaseImpl } from './use-cases/dashboard/get-pending-shipments.use-case';

// Lots Use Cases
import { CREATE_LOT_USE_CASE } from './use-cases/lots/create-lot.use-case';
import { CreateLotUseCaseImpl } from './use-cases/lots/create-lot.use-case.impl';
import { GET_LOTS_BY_PRODUCT_USE_CASE } from './use-cases/lots/get-lots-by-product.use-case';
import { GetLotsByProductUseCaseImpl } from './use-cases/lots/get-lots-by-product.use-case.impl';
import { GET_EXPIRING_LOTS_USE_CASE } from './use-cases/lots/get-expiring-lots.use-case';
import { GetExpiringLotsUseCaseImpl } from './use-cases/lots/get-expiring-lots.use-case.impl';

/**
 * Providers pour les use-cases du module Stock
 */
export const STOCK_USE_CASE_PROVIDERS: Provider[] = [
    // Products
    { provide: GET_PRODUCTS_USE_CASE, useClass: GetProductsUseCaseImpl },
    { provide: CREATE_PRODUCT_USE_CASE, useClass: CreateProductUseCaseImpl },
    { provide: UPDATE_PRODUCT_USE_CASE, useClass: UpdateProductUseCaseImpl },
    { provide: DELETE_PRODUCT_USE_CASE, useClass: DeleteProductUseCaseImpl },
    { provide: GET_PRODUCT_BY_ID_USE_CASE, useClass: GetProductByIdUseCaseImpl },

    // Categories
    { provide: GET_PRODUCT_CATEGORIES_USE_CASE, useClass: GetProductCategoriesUseCaseImpl },
    { provide: CREATE_PRODUCT_CATEGORY_USE_CASE, useClass: CreateProductCategoryUseCaseImpl },
    { provide: UPDATE_PRODUCT_CATEGORY_USE_CASE, useClass: UpdateProductCategoryUseCaseImpl },
    { provide: DELETE_PRODUCT_CATEGORY_USE_CASE, useClass: DeleteProductCategoryUseCaseImpl },

    // Stock Movements
    { provide: GET_STOCK_MOVEMENTS_USE_CASE, useClass: GetStockMovementsUseCaseImpl },
    { provide: CREATE_STOCK_MOVEMENT_USE_CASE, useClass: CreateStockMovementUseCaseImpl },

    // Warehouses
    { provide: GET_WAREHOUSES_USE_CASE, useClass: GetWarehousesUseCaseImpl },
    { provide: CREATE_WAREHOUSE_USE_CASE, useClass: CreateWarehouseUseCaseImpl },
    { provide: UPDATE_WAREHOUSE_USE_CASE, useClass: UpdateWarehouseUseCaseImpl },
    { provide: DELETE_WAREHOUSE_USE_CASE, useClass: DeleteWarehouseUseCaseImpl },

    // Inventory
    { provide: GET_STOCK_LEVEL_USE_CASE, useClass: GetStockLevelUseCaseImpl },
    { provide: GET_INVENTORY_BY_WAREHOUSE_USE_CASE, useClass: GetInventoryByWarehouseUseCaseImpl },

    // Settings
    { provide: GET_STOCK_SETTINGS_USE_CASE, useClass: GetStockSettingsUseCaseImpl },
    { provide: UPDATE_STOCK_SETTINGS_USE_CASE, useClass: UpdateStockSettingsUseCaseImpl },

    // Dashboard
    { provide: GET_STOCK_STATS_USE_CASE, useClass: GetStockStatsUseCaseImpl },
    { provide: GET_LOW_STOCK_ALERTS_USE_CASE, useClass: GetLowStockAlertsUseCaseImpl },
    { provide: GET_PENDING_RECEPTIONS_USE_CASE, useClass: GetPendingReceptionsUseCaseImpl },
    { provide: GET_PENDING_SHIPMENTS_USE_CASE, useClass: GetPendingShipmentsUseCaseImpl },

    // Lots
    { provide: CREATE_LOT_USE_CASE, useClass: CreateLotUseCaseImpl },
    { provide: GET_LOTS_BY_PRODUCT_USE_CASE, useClass: GetLotsByProductUseCaseImpl },
    { provide: GET_EXPIRING_LOTS_USE_CASE, useClass: GetExpiringLotsUseCaseImpl }
];
