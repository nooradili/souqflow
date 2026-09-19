import {
  BarChart3,
  Bell,
  Box,
  ChevronDown,
  LayoutDashboard,
  Menu,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Users,
} 
from "lucide-react";

import "./index.css";
import { orders, stats } from "./data/dashboard";


function App() {
  return (
    <div className="app-shell" dir="rtl">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <Box size={21} strokeWidth={2.5} />
          </div>
          <div>
            <h1>SouqFlow</h1>
            <span>إدارة متجرك بذكاء</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-label">القائمة الرئيسية</p>

          <a className="nav-item active" href="#">
            <LayoutDashboard size={19} />
            <span>نظرة عامة</span>
          </a>

          <a className="nav-item" href="#">
            <ShoppingCart size={19} />
            <span>الطلبات</span>
            <span className="nav-badge">12</span>
          </a>

          <a className="nav-item" href="#">
            <Package size={19} />
            <span>المنتجات</span>
          </a>

          <a className="nav-item" href="#">
            <BarChart3 size={19} />
            <span>التحليلات</span>
          </a>

          <p className="nav-label second-label">الإدارة</p>

          <a className="nav-item" href="#">
            <Users size={19} />
            <span>العملاء</span>
          </a>

          <a className="nav-item" href="#">
            <Settings size={19} />
            <span>الإعدادات</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="upgrade-card">
            <div className="upgrade-icon">
              <BarChart3 size={18} />
            </div>
            <strong>طوّر متجرك</strong>
            <p>احصل على تقارير وتحليلات أعمق.</p>
            <button>اكتشف المزيد</button>
          </div>

          <div className="user-card">
            <div className="avatar">م</div>
            <div className="user-info">
              <strong>محمد أحمد</strong>
              <span>مدير المتجر</span>
            </div>
            <ChevronDown size={16} className="user-chevron" />
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="mobile-menu" aria-label="فتح القائمة">
            <Menu size={21} />
          </button>

          <div className="breadcrumb">
            <span>لوحة التحكم</span>
            <span className="breadcrumb-separator">/</span>
            <strong>نظرة عامة</strong>
          </div>

          <div className="topbar-actions">
            <label className="search-box">
              <Search size={18} />
              <input type="search" placeholder="ابحث في متجرك..." />
              <kbd>⌘ K</kbd>
            </label>

            <button className="icon-button notification-button" aria-label="الإشعارات">
              <Bell size={19} />
              <span className="notification-dot" />
            </button>

            <div className="topbar-avatar">م</div>
          </div>
        </header>

        <section className="page-content">
          <div className="page-heading">
            <div>
              <p className="eyebrow">السبت، 19 سبتمبر 2026</p>
              <h2>صباح الخير، محمد <span>👋</span></h2>
              <p className="heading-description">
                إليك ملخص أداء متجرك لهذا اليوم.
              </p>
            </div>

            <button className="primary-button">
              <span>+</span>
              إضافة منتج
            </button>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article className="stat-card" key={stat.title}>
                  <div className={`stat-icon ${stat.tone}`}>
                    <Icon size={20} />
                  </div>
                  <div className="stat-card-top">
                    <span>{stat.title}</span>
                    <button className="more-button" aria-label="خيارات">
                      •••
                    </button>
                  </div>
                  <strong className="stat-value">{stat.value}</strong>
                  <div className="stat-change">
                    <span>↗ {stat.change}</span>
                    <small>من الشهر الماضي</small>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="dashboard-grid">
            <section className="panel sales-panel">
              <div className="panel-heading">
                <div>
                  <h3>نظرة على المبيعات</h3>
                  <p>مقارنة المبيعات خلال آخر 7 أيام</p>
                </div>
                <button className="period-select">
                  آخر 7 أيام
                  <ChevronDown size={15} />
                </button>
              </div>

              <div className="chart-area">
                <div className="chart-y-axis">
                  <span>$8k</span>
                  <span>$6k</span>
                  <span>$4k</span>
                  <span>$2k</span>
                  <span>$0</span>
                </div>

                <div className="chart">
                  <div className="chart-grid-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>

                  <svg
                    className="sales-line"
                    viewBox="0 0 700 220"
                    preserveAspectRatio="none"
                    aria-label="رسم بياني للمبيعات"
                  >
                    <defs>
                      <linearGradient id="salesGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      className="chart-fill"
                      d="M0,170 C55,155 65,115 120,130 S185,170 235,112 S300,80 350,105 S415,135 465,82 S530,50 580,72 S645,38 700,20 L700,220 L0,220 Z"
                    />
                    <path
                      className="chart-stroke"
                      d="M0,170 C55,155 65,115 120,130 S185,170 235,112 S300,80 350,105 S415,135 465,82 S530,50 580,72 S645,38 700,20"
                    />
                  </svg>

                  <div className="chart-x-axis">
                    <span>الأحد</span>
                    <span>الإثنين</span>
                    <span>الثلاثاء</span>
                    <span>الأربعاء</span>
                    <span>الخميس</span>
                    <span>الجمعة</span>
                    <span>السبت</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="panel traffic-panel">
              <div className="panel-heading">
                <div>
                  <h3>مصادر الزيارات</h3>
                  <p>أين يأتي عملاؤك؟</p>
                </div>
                <button className="more-button" aria-label="خيارات">
                  •••
                </button>
              </div>

              <div className="donut-wrapper">
                <div className="donut-chart">
                  <div className="donut-center">
                    <strong>12.8k</strong>
                    <span>زيارة</span>
                  </div>
                </div>
              </div>

              <div className="traffic-legend">
                <div>
                  <span><i className="legend-dot purple" /> البحث العضوي</span>
                  <strong>42%</strong>
                </div>
                <div>
                  <span><i className="legend-dot blue" /> وسائل التواصل</span>
                  <strong>28%</strong>
                </div>
                <div>
                  <span><i className="legend-dot green" /> الزيارات المباشرة</span>
                  <strong>18%</strong>
                </div>
                <div>
                  <span><i className="legend-dot orange" /> مصادر أخرى</span>
                  <strong>12%</strong>
                </div>
              </div>
            </section>
          </div>

          <section className="panel orders-panel">
            <div className="panel-heading">
              <div>
                <h3>آخر الطلبات</h3>
                <p>تابع أحدث عمليات الشراء في متجرك</p>
              </div>
              <button className="text-button">عرض كل الطلبات ←</button>
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
        </section>
      </main>
    </div>
  );
}

export default App;
