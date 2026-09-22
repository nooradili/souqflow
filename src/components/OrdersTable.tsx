import type { Order } from "../data/dashboard";

type OrderFilter = "all" | "completed" | "processing" | "shipping";

type OrdersTableProps = {
  orders: Order[];
  searchTerm?: string;
  activeFilter: OrderFilter;
  onFilterChange: (filter: OrderFilter) => void;
};

const filters: { value: OrderFilter; label: string }[] = [
  { value: "all", label: "الكل" },
  { value: "completed", label: "مكتمل" },
  { value: "processing", label: "قيد التجهيز" },
  { value: "shipping", label: "قيد الشحن" },
];

function OrdersTable({
  orders,
  searchTerm = "",
  activeFilter,
  onFilterChange,
}: OrdersTableProps) {
  return (
    <section className="panel orders-panel">
      <div className="panel-heading">
        <div>
          <h3>آخر الطلبات</h3>

          <p>
            {searchTerm.trim()
              ? `نتائج البحث عن: ${searchTerm}`
              : "تابع أحدث عمليات الشراء في متجرك"}
          </p>
        </div>

        <button className="text-button" type="button">
          عرض كل الطلبات ←
        </button>
      </div>

      <div className="order-filters">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={activeFilter === filter.value ? "active" : ""}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="table-wrapper">
        {orders.length === 0 ? (
          <div className="empty-state">
            <strong>لا توجد طلبات مطابقة</strong>
            <span>جرّب تغيير البحث أو فلتر الحالة.</span>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>رقم الطلب</th>
                <th>العميل</th>
                <th>المنتج</th>
                <th>القيمة</th>
                <th>الحالة</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td className="amount">{order.amount}</td>
                  <td>
                    <span className={`status-pill ${order.statusClass}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default OrdersTable;
