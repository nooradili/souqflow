import { useMemo, useState } from "react";

import {
 ChevronDown,
  
} 
from "lucide-react";

import "./index.css";
import { orders, stats } from "./data/dashboard";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import OrdersTable from "./components/OrdersTable";


function App() {
 const [searchTerm, setSearchTerm] = useState("");

const normalizeArabic = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه");

const filteredOrders = useMemo(() => {
  const normalizedSearch = normalizeArabic(searchTerm);

  if (!normalizedSearch) {
    return orders;
  }

  return orders.filter((order) =>
    [order.id, order.customer, order.product, order.status].some((value) =>
      normalizeArabic(value).includes(normalizedSearch),
    ),
  );
}, [searchTerm]);


  return (

    <div className="app-shell" dir="rtl">
   <Sidebar />


      <main className="main-content">
     <Topbar
  searchValue={searchTerm}
  onSearchChange={setSearchTerm}
/>



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
  {stats.map((stat) => (
    <StatCard key={stat.title} stat={stat} />
  ))}
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

       <OrdersTable
  orders={filteredOrders}
  searchTerm={searchTerm}
/>

        </section>
      </main>
    </div>
  );
}

export default App;
