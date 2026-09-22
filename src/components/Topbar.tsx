import { Bell, Menu, Search } from "lucide-react";

type TopbarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

function Topbar({ searchValue, onSearchChange }: TopbarProps) {
  return (
    <header className="topbar">
      <button className="mobile-menu" aria-label="فتح القائمة" type="button">
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

          <input
            type="search"
            placeholder="ابحث في الطلبات..."
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            aria-label="البحث في الطلبات"
          />

          <kbd>⌘ K</kbd>
        </label>

        <button
          className="icon-button notification-button"
          aria-label="الإشعارات"
          type="button"
        >
          <Bell size={19} />
          <span className="notification-dot" />
        </button>

        <div className="topbar-avatar">م</div>
      </div>
    </header>
  );
}

export default Topbar;
