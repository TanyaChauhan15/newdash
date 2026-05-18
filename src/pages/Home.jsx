import "../App.css";

export default function Home({ setPage }) {
  return (
    <div className="home-page">
      <div className="mindmap-container">

        <div className="center-circle">
          <img
            src="/assets/reliance-logo.png"
            alt="Reliance Logo"
            className="center-logo-img"
          />
        </div>

        <button className="branch branch-finance">
          💰 Finance
        </button>

        <button className="branch branch-supply">
          🚚 Supply Chain
        </button>

        <button
          className="branch branch-sales"
          onClick={() => setPage("sales")}
        >
          📈 Sales
        </button>

        <button className="branch branch-hr">
          👥 HR
        </button>

        <button className="branch branch-after-sales">
          🛠 After Sales
        </button>

        <div className="line line-finance"></div>
        <div className="line line-supply"></div>
        <div className="line line-sales"></div>
        <div className="line line-hr"></div>
        <div className="line line-after-sales"></div>

      </div>
    </div>
  );
}   