import "./App.scss";

function App() {
  return (
    <div className="card-container">
      <div className="card-gap"></div>
      <div className="card-layout">
        <div className="text-layout">
          <div className="fInter700">
            Get <span id="violet">insights</span> that help your business grow.
          </div>
          <div className="mt-3 paragraph">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </div>
          <div className="stats-layout">
            <div style={{ flex: 1 }}>
              <div className="stats">10k+</div>
              <div className="stats-desc">COMPANIES</div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="stats">314</div>
              <div className="stats-desc">TEMPLATES</div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="stats">12M+</div>
              <div className="stats-desc">QUERIES</div>
            </div>
          </div>
        </div>
        <div className="image-layout">
          <img src="" alt=""/>
        </div>
      </div>
      <div className="card-gap"></div>
    </div>
  );
}

export default App;
