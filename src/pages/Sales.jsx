import "../App.css";

export default function Sales({ setPage }) {

  const categories = [

    {
      title: "A",
      subtitle: "Sales Analytics",

      dashboards: [

        {
          name: "DSR Dashboard",
          link: "https://rrainsights.ril.com/#/views/RCPLDSR-Dashboards-Databricks_17721867833850/DSR"
        },

        {
          name: "Staples Dashboard",
          link: "https://rrainsights.ril.com/#/views/StaplesDashboard-Databricksnew/BeveragesDashboard"
        },

      ],
    },

    {
      title: "B",
      subtitle: "Food & Snacks",

      dashboards: [

        {
          name: "Food And Snacks",
          link: "https://rrainsights.ril.com/#/views/FoodAndSnacks-Databricks/FoodAndSnacks"
        },

        {
          name: "TMS Dashboard",
          link: "https://rrainsights.ril.com/#/views/TMS-Dashboard/TAT-TMS"
        },

      ],
    },

    {
      title: "C",
      subtitle: "Beverages",

      dashboards: [

        {
          name: "Beverages Dashboard",
          link: "https://rrainsights.ril.com/#/views/BeverageDashboard_17588041947640/BeveragesDashboard"
        },

        {
          name: "Biscuits Dashboard",
          link: "https://rrainsights.ril.com/#/views/Biscuits/Biscuits?id=2"
        },

      ],
    },

    {
      title: "D",
      subtitle: "Discounting",

      dashboards: [

        {
          name: "RCPL Discounting",
          link: "https://rrainsights.ril.com/#/views/RCPL-DiscountReporting_17782257104140/DiscountReporting?id=1"
        },

      ],
    },

  ];

  return (

    <div className="sales-page">

      {/* TOP BAR */}

      <div className="sales-topbar">

        <div className="topbar-left">

          <img
            src="/assets/reliance-logo.png"
            alt="Reliance Logo"
            className="sales-logo"
          />

          <div>

            <p className="breadcrumb">
              Home &gt; Sales
            </p>

            <h1>Sales Dashboards</h1>

            <span className="sales-subtitle">
              Select a category and access dashboards
              from multiple platforms.
            </span>

          </div>

        </div>

        <button
          className="back-btn"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>

      </div>

      {/* GRID */}

      <div className="sales-grid">

        {categories.map((item, index) => (

          <div className="sales-card" key={index}>

            <h2>{item.title}</h2>

            <p>{item.subtitle}</p>

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

    </div>
  );
}