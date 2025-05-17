// import { Product as PrismaProduct } from "@prisma/client"


export interface StatLive {
  clientCount: number; // Remplace totalProducts et stock normal
  liveSessionCount: number; // Remplace totalCategories (sessions live par mois)
  totalRevenue: number; // Remplace totalCategories (revenu par mois)
  orderCount: number; // Remplace totalTransactions
}

export interface OrderItem {
    productId: string;
    quantity: number;
    unit: string;
    imageUrl: string;
    name: string;
    availableQuantity: number;
};

// export interface Transaction extends PrismaTransaction {
//     categoryName: string;
//     productName: string;
//     imageUrl?: string;
//     price: number;
//     unit: string;
// }

// export interface ProductOverviewStats {
//     totalProducts: number;
//     totalCategories: number;
//     totalTransactions: number;
//     stockValue: number;
// }

export interface ChartData {
    name: string;
    value: number;
}

export interface StockSummary {
    inStockCount: number;
    lowStockCount: number;
    outOfStockCount: number;
  }