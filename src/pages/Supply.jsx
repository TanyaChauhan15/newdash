import { useState } from "react";
import "../App.css";

export default function Supply({ setPage, handleLogout }) {
  const [searchTerm, setSearchTerm] = useState("");

  const dashboards = [
    {
      name: "Legacy Asset Inventory Report",
      platform: "Looker Studio",
      link: "https://datastudio.google.com/reporting/b28c1167-ca3f-4685-b7b5-789a3303b55e/page/zyltF",
    },
  ];

  const filteredDashboards = dashboards.filter((dash) =>
    dash.name.toLowerCase().includes(searchTerm.toLowerCase())
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
            Home <span>›</span> Supply Chain
          </p>

          <h1>
            <span>Supply</span> Chain
          </h1>

          <small>Logistics, inventory & operational dashboards</small>
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
          placeholder="Search Supply dashboards"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="back-btn" onClick={() => setPage("home")}>
          ← Back to Home
        </button>
      </div>

      <div className="sales-grid">
        <div className="sales-card hr-card">
          <h2>Supply Chain Dashboards</h2>

          <p className="category-subtitle">
            Inventory & logistics monitoring reports
          </p>

          <div className="dashboard-links">
            {filteredDashboards.map((dash, index) => (
              <a
                key={index}
                href={dash.link}
                target="_blank"
                rel="noreferrer"
                className="dashboard-link"
              >
                <div className="dashboard-info">
                  <span>{dash.name}</span>

                  <small className="dashboard-platform">
                    {dash.platform}
                  </small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {filteredDashboards.length === 0 && (
        <p className="no-results">No Supply Chain dashboards found.</p>
      )}

      <div className="footer">
        © 2026 Reliance Consumer Products Limited.
      </div>
    </div>
  );
}