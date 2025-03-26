interface DashboardDataType {
  period: "weekly";
  providers: {
    total: number;
    growth: string;
    status: "down" | "up";
  };
  consumers: {
    total: number;
    growth: string;
    status: "down" | "up";
  };
  earnings: {
    total: number;
    growth: string;
    status: "down" | "up";
  };
  chartData: {
    date: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
    revenue: number;
  }[];
  totalRevenue: string;
  revenueDifference: string;
  tooltipData: {
    revenue: string;
    date: string;
  };
}

export interface ProvDashboardType {
  period: string;
  consumers: MetricData;
  transactions: MetricData;
  earnings: MetricData;
  chartData: ChartDataItem[];
  totalRevenue: string;
  revenueDifference: string;
  tooltipData: TooltipData;
}

interface MetricData {
  total: number;
  growth: string;
  status: string;
}

interface ChartDataItem {
  date: string;
  revenue: number;
}

interface TooltipData {
  revenue: string;
  date: string;
}

export default DashboardDataType;
