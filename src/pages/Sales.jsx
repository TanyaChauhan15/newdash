import { useState } from "react";
import "../App.css";

export default function Sales({ setPage, handleLogout }) {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      title: "DSR Dashboards",
      subtitle: "Daily sales reporting dashboards",
      dashboards: [
        {
          name: "DSR Dashboard Overall",
          link: "https://rrainsights.ril.com/views/RCPLDSR-Dashboards-Databricks/DSR?:showAppBanner=false&:display_count=n&:showVizHome=n",
        },
        {
          name: "DSR Mobile View",
          link: "https://rrainsights.ril.com/views/RCPLDSR-MobileViews-4H-Sample/LandingPage?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },
        {
          name: "DSR Beverages",
          link: "https://rrainsights.ril.com/views/DSR-Beverage/BeveragesDashboard?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },
        {
          name: "DSR Staples",
          link: "https://rrainsights.ril.com/views/DSR-Staples/StaplesDashboard?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },
        {
          name: "DSR Food & Snacks",
          link: "https://rrainsights.ril.com/views/FoodAndSnacks-Databricks/FoodAndSnacks?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },
        {
          name: "DSR Lotus",
          link: "https://rrainsights.ril.com/views/DSR-LotusDashboardNew/AllvendorsQuarterwise-NetTaxbaseAmt?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },
        {
          name: "DSR Biscuits",
          link: "https://rrainsights.ril.com/views/Biscuits/Biscuits?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },
      ],
    },
    {
      title: "Secondary Sales",
      subtitle: "Secondary sales and order reports",
      dashboards: [
        {
          name: "Executive Summary - Secondary",
          link: "https://datastudio.google.com/u/0/reporting/db97ad6a-5322-41d0-b736-237511e99235/page/p_u24tb7vt2d",
        },
        {
          name: "Secondary Sales Reports",
          link: "https://datastudio.google.com/u/0/reporting/db97ad6a-5322-41d0-b736-237511e99235/page/p_x34r5haend",
        },
        {
          name: "Secondary Order Reports",
          link: "https://datastudio.google.com/u/0/reporting/db97ad6a-5322-41d0-b736-237511e99235/page/p_ddriefq6yd",
        },
        {
          name: "Onboarding and Sec Order Report-Beverages",
          link: "https://datastudio.google.com/u/0/reporting/db97ad6a-5322-41d0-b736-237511e99235/page/p_yd3fxelh2d",
        },
        {
          name: "Onboarding and Sec Order Report-Staples",
          link: "https://datastudio.google.com/u/0/reporting/db97ad6a-5322-41d0-b736-237511e99235/page/p_8pe5hix52d",
        },
        {
          name: "Onboarding and Sec Order Report-HPC",
          link: "https://datastudio.google.com/u/0/reporting/db97ad6a-5322-41d0-b736-237511e99235/page/p_67ssolvs2d",
        },
        {
          name: "Biscuits and Confectionery",
          link: "https://datastudio.google.com/u/0/reporting/db97ad6a-5322-41d0-b736-237511e99235/page/p_sh6ugbe02d",
        },
      ],
    },
    {
      title: "Assets & Outlets",
      subtitle: "Asset validation and outlet tracking",
      dashboards: [
        {
          name: "Legacy Asset Validation Status Report",
          link: "https://datastudio.google.com/reporting/b1d8e69d-b2ba-4391-b412-711e582195f6/page/tEnnC?s=hCORbt9OtPg",
        },
        {
          name: "New Asset Deployment Status Report",
          link: "https://datastudio.google.com/reporting/b1d8e69d-b2ba-4391-b412-711e582195f6/page/p_7Imt1lxfxd?s=hCORbt9OtPg",
        },
        {
          name: "Legacy Asset Validation Status Report - Atta Trolley",
          link: "https://datastudio.google.com/reporting/b1d8e69d-b2ba-4391-b412-711e582195f6/page/p_6epgtqf31d?s=hCORbt9OtPg",
        },
        {
          name: "Asset Validation Status Report - CTU",
          link: "https://datastudio.google.com/reporting/c4fd3e3b-6cc2-46aa-bae1-41760e0b016b/page/zH6sF",
        },
        {
          name: "Asset Penetration Dashboard - Beverages",
          link: "https://datastudio.google.com/u/0/reporting/ddb8c397-31c9-4a74-ae65-1069c6db3102/page/oPJkF?pIi=1",
        },
        {
          name: "Onboarding Outlets - Beverages",
          link: "https://datastudio.google.com/reporting/bcfbff78-d476-4eb0-a9ff-a0299cef5884/page/MlxfF",
        },
        {
          name: "RCPL - Signature Outlet Details",
          link: "https://datastudio.google.com/u/0/reporting/b797610e-e7f1-472f-8452-d2004ed59e6d/page/p_3rw3cparnd",
        },
      ],
    },
    {
      title: "Commercial",
      subtitle: "Discounting and Distributor Churn Dashbaord",
      dashboards: [
        {
          name: "Discount Reporting",
          link: "https://rrainsights.ril.com/views/RCPL-DiscountReporting2_0Invoice/DiscountReporting_1?:showAppBanner=false&:origin=viz_share_link&:display_count=n&:showVizHome=n",
        },
        {
          name: "Beverage - Sales Report",
          link: "https://datastudio.google.com/u/0/reporting/0755e761-2ee9-4ae8-8026-115c4364f00e/page/BMrIF",
        },
        {
          name: "Beverages - Brand Report",
          link: "https://datastudio.google.com/u/0/reporting/c8150acf-0929-4128-8340-75257a4a4ed4/page/AD0pF",
        },
        {
          name: "Beats",
          link: "https://datastudio.google.com/u/0/reporting/ffed7ece-2189-4b92-99ce-4365bf1bb86c/page/p_ukc0s25btd",
        },
        {
          name: "Hierarchy Mapping ",
          link: "https://datastudio.google.com/u/0/reporting/ffed7ece-2189-4b92-99ce-4365bf1bb86c/page/p_6rthaf6btd",
        },
        {
          name: "Distributor Churn Dashboard",
          link: "https://adb-429867542854005.5.azuredatabricks.net/dashboardsv3/01f15443933d1dec902c3665993d03bf/published?o=429867542854005",
        },
      ],
    },
  ];

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      dashboards: category.dashboards.filter((dash) =>
        dash.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.dashboards.length > 0
    );

  return (
    <div className="sales-page">
      <div className="sales-nav">
        <img
          src="/assets/reliance-logo.png"
          alt="Reliance Logo"
          className="sales-nav-logo"
        />

        <div className="nav-title">
          <p>
            Home <span>›</span> Sales
          </p>

          <h1>
            <span>Sales</span> Dashboards
          </h1>
        </div>

        <div className="sales-nav-right">
          <span>Welcome, Admin</span>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="sales-tools">
        <input
          type="text"
          placeholder="Search dashboards"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="back-btn" onClick={() => setPage("home")}>
          ← Back to Home
        </button>
      </div>

      <div className="sales-grid">
        {filteredCategories.map((item, index) => (
          <div className="sales-card" key={index}>
            <h2>{item.title}</h2>

            <p className="category-subtitle">{item.subtitle}</p>

            <div className="dashboard-links">
              {item.dashboards.map((dash, idx) => (
                <a
                  key={idx}
                  href={dash.link}
                  target="_blank"
                  rel="noreferrer"
                  className="dashboard-link"
                >
                  <div className="dashboard-info">
                    <span>{dash.name}</span>

                    <small className="dashboard-platform">
                     {dash.link.includes("datastudio")
                       ? "Looker Studio"
                       : dash.link.includes("databricks")
                       ? "Databricks"
                       : "Tableau"}
                    </small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <p className="no-results">No dashboards found.</p>
      )}

      <div className="footer">
        © 2026 Reliance Consumer Products Limited.
      </div>
    </div>
  );
}