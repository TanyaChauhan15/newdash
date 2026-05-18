import "../App.css";

export default function Sales({ setPage }) {
  const categories = [
    {
      title: "A",
      subtitle: "Sales Analytics",
      dashboards: [
        {
          name: "DSR Dashboard",
          link: "https://rrainsights.ril.com/#/views/RCPLDSR-Dashboards-Databricks_17721867833850/DSR",
        },
        {
          name: "Staples Dashboard",
          link: "https://rrainsights.ril.com/#/views/StaplesDashboard-Databricksnew/BeveragesDashboard",
        },
      ],
    },
    {
      title: "B",
      subtitle: "Food & Snacks",
      dashboards: [
        {
          name: "Food And Snacks",
          link: "https://rrainsights.ril.com/#/views/FoodAndSnacks-Databricks/FoodAndSnacks",
        },
        {
          name: "TMS Dashboard",
          link: "https://rrainsights.ril.com/#/views/TMS-Dashboard/TAT-TMS",
        },
      ],
    },
    {
      title: "C",
      subtitle: "Beverages",
      dashboards: [
        {
          name: "Beverages Dashboard",
          link: "https://rrainsights.ril.com/#/views/BeverageDashboard_17588041947640/BeveragesDashboard",
        },
        {
          name: "Biscuits Dashboard",
          link: "https://rrainsights.ril.com/#/views/Biscuits/Biscuits?id=2",
        },
      ],
    },
    {
      title: "D",
      subtitle: "Discounting",
      dashboards: [
        {
          name: "RCPL Discounting",
          link: "https://rrainsights.ril.com/#/views/RCPL-DiscountReporting_17782257104140/DiscountReporting?id=1",
        },
      ],
    },
  ];

  return (
    <div className="sales-page">
      <div className="sales-nav">
        <img
          src="/assets/reliance-logo.png"
          alt="Reliance Logo"
          className="sales-nav-logo"
        />

        <div className="nav-title">
          <p>Home &gt; Sales</p>
          <h1>
            <span>Sales</span> Dashboards
          </h1>
          <small>
            Select a category and access dashboards from multiple platforms.
          </small>
        </div>

        <div className="sales-nav-right">
          <span>Welcome, Admin</span>
          <button className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="action-row">
        <button className="back-btn" onClick={() => setPage("home")}>
          ← Back to Home
        </button>
      </div>

      <div className="sales-grid">
        {categories.map((item, index) => (
          <div className="sales-card" key={index}>
            <div className="category-circle">{item.title}</div>

            <h2>{item.subtitle}</h2>

            <div className="dashboard-links">
              {item.dashboards.map((dash, idx) => (
                <a
                  key={idx}
                  href={dash.link}
                  target="_blank"
                  rel="noreferrer"
                  className="dashboard-link"
                >
                  {dash.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        © 2026 Reliance Consumer Products Limited.
      </div>
    </div>
  );
}