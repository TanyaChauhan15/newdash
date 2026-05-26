import { useState } from "react";
import "../App.css";

export default function HR({ setPage, handleLogout }) {
  const [searchTerm, setSearchTerm] = useState("");

  const dashboards = [
    {
      name: "Onboarding Report",
      
      link: "https://datastudio.google.com/u/0/reporting/db97ad6a-5322-41d0-b736-237511e99235/page/p_lnuz953bnd",
    },
    {
      name: "User Details",
      
      link: "https://datastudio.google.com/u/0/reporting/ffed7ece-2189-4b92-99ce-4365bf1bb86c/page/p_t93n0pxbtd",
    },
    {
      name: "User Mapping Details",
      
      link: "https://datastudio.google.com/u/0/reporting/ffed7ece-2189-4b92-99ce-4365bf1bb86c/page/2sgNF",
    },
    {
      name: "CSO Login Activity",
      
      link: "https://datastudio.google.com/u/0/reporting/ffed7ece-2189-4b92-99ce-4365bf1bb86c/page/p_y00reuio2d",
    },
    {
      name: "Hierarchy Mapping",
      
      link: "https://datastudio.google.com/u/0/reporting/ffed7ece-2189-4b92-99ce-4365bf1bb86c/page/p_6rthaf6btd",
    },
  ];

  const filteredDashboards = dashboards.filter((dash) =>
    dash.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sales-page">

      {/* TOP NAVBAR */}

      <div className="sales-nav">

        <img
          src="/assets/reliance-logo.png"
          alt="Reliance Logo"
          className="sales-nav-logo"
        />

        <div className="nav-title">

          <p>
            Home <span>›</span> HR
          </p>

          <h1>
            <span>HR</span> Dashboards
          </h1>

          <small>
            Workforce management & operational dashboards
          </small>

        </div>

        <div className="sales-nav-right">

          <span>Welcome, Admin</span>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>

        </div>
      </div>

      {/* SEARCH + BACK */}

      <div className="sales-tools">

        <input
          type="text"
          placeholder="Search HR dashboards..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="back-btn"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>

      </div>

      {/* HR CARD */}

      <div className="sales-grid">

        <div className="sales-card hr-card">

          <h2>HR & Operations</h2>

          <p className="category-subtitle">
            User onboarding, workforce & operational dashboards
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

      {/* NO RESULTS */}

      {filteredDashboards.length === 0 && (
        <p className="no-results">
          No HR dashboards found.
        </p>
      )}

      {/* FOOTER */}

      <div className="footer">
        © 2026 Reliance Consumer Products Limited.
      </div>

    </div>
  );
}