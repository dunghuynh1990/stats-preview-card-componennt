import "./App.scss";

function App() {
  return (
    <div className="card-container">
      <div className="card-gap"></div>
      <div className="card-layout">
        <div className="text-layout">
          <div id="fInter700">
            Get <span id="violet">insights</span> that help your business grow.
          </div>
          <div className="mt-3 paragraph">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </div>
          <div className="stats-layout">
            <div style={{ flex: 1 }}>
              <div id="stats">10k+</div>
              <div id="stats-desc">COMPANIES</div>
            </div>
            <div style={{ flex: 1 }}>
              <div id="stats">314</div>
              <div id="stats-desc">TEMPLATES</div>
            </div>
            <div style={{ flex: 1 }}>
              <div id="stats">12M+</div>
              <div id="stats-desc">QUERIES</div>
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
