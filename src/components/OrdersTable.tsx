import type { Order } from "../data/dashboard";

type OrdersTableProps = {
  orders: Order[];
};

function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <section className="panel orders-panel">
      <div className="panel-heading">
        <div>
          <h3>آخر الطلبات</h3>
          <p>تابع أحدث عمليات الشراء في متجرك</p>
        </div>

        <button className="text-button" type="button">
          عرض كل الطلبات ←
        </button>
      </div>

      <div className="table-wrapper">
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
      </div>
    </section>
  );
}

export default OrdersTable;
