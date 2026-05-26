import "../App.css";

export default function Home({ setPage }) {
  const departments = [
    {
      name: "Finance",
      subtitle: "Budgets & P&L",
      icon: "💰",
      className: "dept-finance",
      action: null,
    },
    {
      name: "Sales*",
      subtitle: "Revenue & pipeline",
      icon: "📈",
      className: "dept-sales",
      action: () => setPage("sales"),
    },
    {
      name: "Supply Chain*",
      subtitle: "Logistics & inventory",
      icon: "🚚",
      className: "dept-supply",
      action: () => setPage("supply"),
    },
    {
      name: "HR*",
      subtitle: "People & workforce",
      icon: "👥",
      className: "dept-hr",
      action: () => setPage("hr"),
    },
    {
      name: "After Sales",
      subtitle: "Support & service",
      icon: "🛠",
      className: "dept-after",
      action: null,
    },
  ];

  return (
    <div className="home-page">
      <div className="home-header">
        <div className="home-header-left"></div>

        <div className="home-header-center">
          <img
            src="/assets/reliance-logo.png"
            alt="Reliance Logo"
            className="home-header-logo"
          />
        </div>

        <div className="home-header-right">
          Welcome, Admin
        </div>
      </div>

      <div className="hub-container">
        <div className="hub-center">
          <img
            src="/assets/reliance-logo.png"
            alt="Reliance Logo"
            className="hub-center-logo"
          />
        </div>

        {departments.map((dept, index) => (
          <button
            key={index}
            className={`hub-card ${dept.className}`}
            onClick={
              dept.action ||
              (() => alert(`${dept.name} module will be available soon.`))
            }
          >
            <span className="hub-icon">{dept.icon}</span>
            <h3>{dept.name}</h3>
            <p>{dept.subtitle}</p>
          </button>
        ))}

        <div className="hub-line line-to-finance"></div>
        <div className="hub-line line-to-sales"></div>
        <div className="hub-line line-to-supply"></div>
        <div className="hub-line line-to-hr"></div>
        <div className="hub-line line-to-after"></div>
      </div>
    </div>
  );
}