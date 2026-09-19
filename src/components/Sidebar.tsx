import {
  BarChart3,
  Box,
  ChevronDown,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

function Sidebar() {
  return (
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
          <button type="button">اكتشف المزيد</button>
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
  );
}

export default Sidebar;
