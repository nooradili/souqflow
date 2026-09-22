import type { Order } from "../data/dashboard";

type OrdersTableProps = {
  orders: Order[];
  searchTerm?: string;
};

function OrdersTable({ orders, searchTerm = "" }: OrdersTableProps) {
  return (
    <section className="panel orders-panel">
      <div className="panel-heading">
        <div>
         <h3>TEST ORDERS TABLE 123</h3>


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

      <div className="table-wrapper">
        {orders.length === 0 ? (
          <div className="empty-state">
            <strong>لا توجد طلبات مطابقة</strong>
            <span>جرّب اسم العميل أو رقم الطلب.</span>
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
              {orders.map((order: Order) => (
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
