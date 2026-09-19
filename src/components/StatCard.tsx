import type { Stat } from "../data/dashboard";

type StatCardProps = {
  stat: Stat;
};

function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon;

  return (
    <article className="stat-card">
      <div className={`stat-icon ${stat.tone}`}>
        <Icon size={20} />
      </div>

      <div className="stat-card-top">
        <span>{stat.title}</span>

        <button className="more-button" aria-label="خيارات" type="button">
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
}

export default StatCard;
