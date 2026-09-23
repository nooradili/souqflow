import { Package, Plus, Search } from "lucide-react";

const products = [
    {
        id: "PR-001",
        name: "سماعات لاسلكية Pro",
        category: "إلكترونيات",
        price: "$129.00",
        stock: 42,
        status: "متوفر",
        statusClass: "in-stock",
    },
    {
        id: "PR-002",
        name: "لوحة مفاتيح ميكانيكية",
        category: "إكسسوارات",
        price: "$89.00",
        stock: 18,
        status: "متوفر",
        statusClass: "in-stock",
    },
    {
        id: "PR-003",
        name: "حقيبة ظهر عملية",
        category: "حقائب",
        price: "$64.50",
        stock: 7,
        status: "مخزون منخفض",
        statusClass: "low-stock",
    },
    {
        id: "PR-004",
        name: "مصباح مكتبي ذكي",
        category: "منزل",
        price: "$42.00",
        stock: 0,
        status: "نفد المخزون",
        statusClass: "out-of-stock",
    },
];

function Products() {
    return (
        <section className="page-content">
            <div className="page-heading">
                <div>
                    <p className="eyebrow">إدارة الكتالوج</p>
                    <h2>المنتجات</h2>
                    <p className="heading-description">
                        أدر منتجات متجرك وتابع مستويات المخزون.
                    </p>
                </div>

                <button className="primary-button" type="button">
                    <Plus size={17} />
                    إضافة منتج
                </button>
            </div>

            <section className="panel products-panel">
                <div className="products-toolbar">
                    <div>
                        <h3>كل المنتجات</h3>
                        <p>{products.length} منتجات في الكتالوج</p>
                    </div>

                    <label className="product-search">
                        <Search size={17} />
                        <input type="search" placeholder="ابحث عن منتج..." />
                    </label>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>المنتج</th>
                                <th>التصنيف</th>
                                <th>السعر</th>
                                <th>المخزون</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <div className="product-name">
                                            <div className="product-icon">
                                                <Package size={17} />
                                            </div>
                                            <div>
                                                <strong>{product.name}</strong>
                                                <small>{product.id}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.category}</td>
                                    <td className="amount">{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <span className={`status-pill ${product.statusClass}`}>
                                            {product.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    );
}

export default Products;
