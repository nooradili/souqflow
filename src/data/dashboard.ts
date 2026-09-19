import type { LucideIcon } from "lucide-react";
import {
  CircleDollarSign,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

export type StatTone = "green" | "blue" | "purple" | "orange";

export type Stat = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  tone: StatTone;
};

export type Order = {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: string;
  statusClass: "completed" | "processing" | "shipping";
};

export const stats: Stat[] = [
  {
    title: "إجمالي المبيعات",
    value: "$24,560",
    change: "+12.5%",
    icon: CircleDollarSign,
    tone: "green",
  },
  {
    title: "الطلبات الجديدة",
    value: "186",
    change: "+8.2%",
    icon: ShoppingCart,
    tone: "blue",
  },
  {
    title: "المنتجات",
    value: "1,248",
    change: "+4.6%",
    icon: Package,
    tone: "purple",
  },
  {
    title: "العملاء",
    value: "3,892",
    change: "+10.1%",
    icon: Users,
    tone: "orange",
  },
];

export const orders: Order[] = [
  {
    id: "#SF-1048",
    customer: "أحمد محمد",
    product: "سماعات لاسلكية Pro",
    amount: "$129.00",
    status: "مكتمل",
    statusClass: "completed",
  },
  {
    id: "#SF-1047",
    customer: "سارة خالد",
    product: "لوحة مفاتيح ميكانيكية",
    amount: "$89.00",
    status: "قيد التجهيز",
    statusClass: "processing",
  },
  {
    id: "#SF-1046",
    customer: "محمد علي",
    product: "حقيبة ظهر عملية",
    amount: "$64.50",
    status: "قيد الشحن",
    statusClass: "shipping",
  },
  {
    id: "#SF-1045",
    customer: "ليان أحمد",
    product: "مصباح مكتبي ذكي",
    amount: "$42.00",
    status: "مكتمل",
    statusClass: "completed",
  },
];
