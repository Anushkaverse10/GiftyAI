import { useState } from "react";
import GiftCard from "./GiftCard";
import { GIFTS } from "../data/gifts";

const INTERESTS = [
  { id:"books",     label:"📚 Books" },
  { id:"music",     label:"🎵 Music" },
  { id:"gaming",    label:"🎮 Gaming" },
  { id:"fitness",   label:"💪 Fitness" },
  { id:"cooking",   label:"🍳 Cooking" },
  { id:"travel",    label:"✈️ Travel" },
  { id:"fashion",   label:"👗 Fashion" },
  { id:"art",       label:"🎨 Art" },
  { id:"tech",      label:"💻 Tech" },
  { id:"gardening", label:"🌿 Gardening" },
  { id:"movies",    label:"🎬 Movies" },
  { id:"pets",      label:"🐾 Pets" },
];

function GiftForm() {
  const [relationship, setRelationship] = useState("");
  const [budget, setBudget]             = useState("");
  const [selected, setSelected]         = useState([]);
  const [results, setResults]           = useState(null);
  const [error, setError]               = useState("");

  function toggleInterest(id) {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }

  function handleSubmit() {
    if (!relationship) { setError("Please select a relationship! 💝"); return; }
    if (!budget || budget <= 0) { setError("Please enter a valid budget! 💰"); return; }
    if (selected.length === 0) { setError("Pick at least one interest! ✨"); return; }
    setError("");
    const filtered = GIFTS.filter(g =>
      g.priceMin <= parseFloat(budget) &&
      g.relationships.includes(relationship) &&
      selected.some(i => g.interests.includes(i))
    );
    setResults(filtered);
  }

  function handleReset() {
    setRelationship(""); setBudget("");
    setSelected([]); setResults(null); setError("");
  }

  return (
    <main className="main">
      {results === null ? (
        <section className="form-section">
          <div className="section-label">✦ Tell us about your recipient</div>
          <h2 className="section-title">Let's find <em>the one</em> gift.</h2>
          <div className="card form-card">
            {error && <p style={{color:"#c4622d",marginBottom:"16px"}}>{error}</p>}

            <div className="form-group">
              <label className="form-label">
                <span className="step-badge">01</span> Who is this gift for?
              </label>
              <div className="select-wrapper">
                <select className="form-select" value={relationship}
                  onChange={e => setRelationship(e.target.value)}>
                  <option value="" disabled>Choose a relationship…</option>
                  <option value="mom">Mom</option>
                  <option value="dad">Dad</option>
                  <option value="partner">Partner / Spouse</option>
                  <option value="friend">Best Friend</option>
                  <option value="sibling">Sibling</option>
                  <option value="colleague">Colleague</option>
                  <option value="child">Child</option>
                  <option value="teacher">Teacher</option>
                </select>
                <span className="select-arrow">↓</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                <span className="step-badge">02</span> What's your budget?
              </label>
              <div className="budget-wrapper">
                <span className="budget-symbol">₹</span>
                <input type="number" className="form-input" value={budget}
                  onChange={e => setBudget(e.target.value)} placeholder="e.g. 500" />
              </div>
              <div className="budget-chips">
                {[200,500,1000,2000,5000].map(v => (
                  <button key={v} className={`chip ${budget==v?"active":""}`}
                    onClick={() => setBudget(v)}>
                    {v===5000 ? "₹5000+" : `Under ₹${v}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                <span className="step-badge">03</span> Pick their interests
              </label>
              <div className="interests-grid">
                {INTERESTS.map(i => (
                  <button key={i.id}
                    className={`interest-btn ${selected.includes(i.id)?"selected":""}`}
                    onClick={() => toggleInterest(i.id)}>
                    {i.label}
                  </button>
                ))}
              </div>
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              Find My Gifts ✦
            </button>
          </div>
        </section>
      ) : (
        <section className="results-section">
          <div className="section-label">✦ Curated just for you</div>
          <h2 className="section-title">Here are your <em>gift ideas</em>.</h2>
          {results.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🤔</div>
              <h3>No matches found</h3>
              <p>Try adjusting your budget or adding more interests!</p>
            </div>
          ) : (
            <div className="results-grid">
              {results.slice(0,9).map((gift,i) => (
                <GiftCard key={i} gift={gift} />
              ))}
            </div>
          )}
          <button className="reset-btn" onClick={handleReset}>← Start Over</button>
        </section>
      )}
    </main>
  );
}
export default GiftForm;