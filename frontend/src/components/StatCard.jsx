export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon
}) {

  return (
    <div className="stat-card">

      <div className="stat-icon">
        {Icon && <Icon size={24} />}
      </div>

      <div>

        <p>{title}</p>

        <h3>{value}</h3>

        {subtitle && (
          <span>{subtitle}</span>
        )}

      </div>

    </div>
  );
}