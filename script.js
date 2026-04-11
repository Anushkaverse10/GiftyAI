const GIFTS = [

  /* ── BOOKS ── */
  { name: "Personal Journal", emoji: "📔", priceMin: 100, priceMax: 400,
    desc: "A beautiful hardcover journal for thoughts, dreams, and goals.", tag: "Thoughtful",
    interests: ["books", "art"], relationships: ["mom", "friend", "sibling", "partner", "teacher"] },

  { name: "Bestseller Fiction Book", emoji: "📚", priceMin: 150, priceMax: 500,
    desc: "Pick a celebrated novel they'll lose themselves in for hours.", tag: "Classic",
    interests: ["books"], relationships: ["mom", "dad", "friend", "sibling", "partner", "teacher", "colleague"] },

  { name: "Illustrated Art Book", emoji: "🖼️", priceMin: 400, priceMax: 1200,
    desc: "A gorgeous coffee-table book packed with stunning visuals.", tag: "Premium",
    interests: ["books", "art"], relationships: ["partner", "friend", "colleague", "teacher"] },

  /* ── MUSIC ── */
  { name: "Wireless Earbuds", emoji: "🎧", priceMin: 800, priceMax: 3000,
    desc: "Crystal-clear sound with comfortable in-ear fit for music lovers.", tag: "Tech Pick",
    interests: ["music", "tech", "fitness"], relationships: ["partner", "sibling", "friend", "child"] },

  { name: "Mini Bluetooth Speaker", emoji: "🔊", priceMin: 500, priceMax: 1800,
    desc: "Portable, loud, and perfect for music on the go.", tag: "Popular",
    interests: ["music", "travel", "fitness"], relationships: ["friend", "sibling", "partner", "child"] },

  { name: "Music Wall Art Print", emoji: "🎵", priceMin: 150, priceMax: 600,
    desc: "A stylish print of music notes or their favourite album cover.", tag: "Artsy",
    interests: ["music", "art"], relationships: ["friend", "sibling", "partner"] },

  /* ── GAMING ── */
  { name: "Gaming Mouse Pad XXL", emoji: "🖱️", priceMin: 300, priceMax: 900,
    desc: "Extra-large smooth surface for precision gaming sessions.", tag: "Gamer Fave",
    interests: ["gaming", "tech"], relationships: ["sibling", "friend", "child", "partner"] },

  { name: "Game Gift Card", emoji: "🎮", priceMin: 200, priceMax: 2000,
    desc: "Let them choose their own adventure in their favourite game store.", tag: "Always Right",
    interests: ["gaming"], relationships: ["child", "sibling", "friend", "partner"] },

  { name: "Gaming LED Desk Lamp", emoji: "💡", priceMin: 400, priceMax: 1200,
    desc: "RGB colour-changing lamp that sets the perfect gaming mood.", tag: "Cool",
    interests: ["gaming", "tech"], relationships: ["sibling", "child", "friend"] },

  /* ── FITNESS ── */
  { name: "Yoga Mat Premium", emoji: "🧘", priceMin: 400, priceMax: 1500,
    desc: "Non-slip, thick cushioned mat for yoga or home workouts.", tag: "Wellness",
    interests: ["fitness"], relationships: ["mom", "friend", "sibling", "partner", "colleague"] },

  { name: "Resistance Bands Set", emoji: "💪", priceMin: 200, priceMax: 800,
    desc: "Versatile bands for strength training anywhere, anytime.", tag: "Active",
    interests: ["fitness"], relationships: ["dad", "sibling", "friend", "partner"] },

  { name: "Smart Water Bottle", emoji: "💧", priceMin: 500, priceMax: 2000,
    desc: "Tracks hydration and reminds them to drink more water.", tag: "Smart",
    interests: ["fitness", "tech"], relationships: ["mom", "dad", "friend", "colleague", "partner"] },

  /* ── COOKING ── */
  { name: "Spice Gift Box", emoji: "🧂", priceMin: 300, priceMax: 1000,
    desc: "Curated set of exotic spices to elevate every dish.", tag: "Foodie",
    interests: ["cooking"], relationships: ["mom", "dad", "partner", "friend", "colleague"] },

  { name: "Recipe Book", emoji: "👨‍🍳", priceMin: 250, priceMax: 700,
    desc: "A beautiful cookbook filled with new culinary inspirations.", tag: "Classic",
    interests: ["cooking", "books"], relationships: ["mom", "dad", "partner", "teacher"] },

  { name: "Kitchen Gadget Set", emoji: "🔪", priceMin: 500, priceMax: 2500,
    desc: "Handy tools like a mandoline, peeler, or silicone spatulas.", tag: "Practical",
    interests: ["cooking"], relationships: ["mom", "dad", "partner", "sibling"] },

  /* ── TRAVEL ── */
  { name: "Travel Packing Cubes", emoji: "🧳", priceMin: 400, priceMax: 1200,
    desc: "Keep luggage organised with colour-coded compression cubes.", tag: "Traveller",
    interests: ["travel"], relationships: ["friend", "sibling", "partner", "colleague"] },

  { name: "World Scratch Map", emoji: "🗺️", priceMin: 350, priceMax: 900,
    desc: "Scratch off every country they've visited — a living trophy.", tag: "Unique",
    interests: ["travel", "art"], relationships: ["partner", "friend", "sibling"] },

  { name: "Passport Holder & Wallet", emoji: "✈️", priceMin: 200, priceMax: 800,
    desc: "Slim leather passport cover to travel in style.", tag: "Practical",
    interests: ["travel", "fashion"], relationships: ["dad", "friend", "colleague", "partner"] },

  /* ── FASHION ── */
  { name: "Scented Candle Set", emoji: "🕯️", priceMin: 200, priceMax: 900,
    desc: "Luxurious fragrant candles to create a cosy, elegant atmosphere.", tag: "Cosy",
    interests: ["fashion", "art"], relationships: ["mom", "partner", "friend", "teacher"] },

  { name: "Minimalist Watch", emoji: "⌚", priceMin: 1000, priceMax: 5000,
    desc: "A sleek, timeless watch that goes with every outfit.", tag: "Premium",
    interests: ["fashion", "tech"], relationships: ["dad", "partner", "colleague"] },

  { name: "Personalised Tote Bag", emoji: "👜", priceMin: 250, priceMax: 700,
    desc: "A custom canvas tote with their name or a fun message.", tag: "Personal",
    interests: ["fashion"], relationships: ["mom", "friend", "sibling", "teacher"] },

  /* ── ART ── */
  { name: "Watercolour Paint Set", emoji: "🎨", priceMin: 300, priceMax: 1200,
    desc: "Professional-quality watercolours to unleash creativity.", tag: "Creative",
    interests: ["art"], relationships: ["friend", "sibling", "child", "partner"] },

  { name: "Sketchbook Bundle", emoji: "✏️", priceMin: 150, priceMax: 500,
    desc: "High-quality sketchbooks with fine-tip pens and pencils.", tag: "Artsy",
    interests: ["art", "books"], relationships: ["child", "sibling", "friend"] },

  /* ── TECH ── */
  { name: "Portable Charger 20000mAh", emoji: "🔋", priceMin: 600, priceMax: 2000,
    desc: "Never run out of battery again with this powerful power bank.", tag: "Essential",
    interests: ["tech", "travel"], relationships: ["dad", "friend", "sibling", "colleague", "partner"] },

  { name: "USB-C Hub Multiport", emoji: "🔌", priceMin: 500, priceMax: 1800,
    desc: "Expand connectivity with HDMI, USB, and card reader ports.", tag: "Work Smart",
    interests: ["tech"], relationships: ["dad", "colleague", "partner", "teacher"] },

  { name: "Smart Night Light", emoji: "🌙", priceMin: 300, priceMax: 1000,
    desc: "App-controlled ambient light to set the perfect bedroom mood.", tag: "Cosy Tech",
    interests: ["tech", "art"], relationships: ["child", "sibling", "friend", "partner"] },

  /* ── GARDENING ── */
  { name: "Succulent Planter Set", emoji: "🌵", priceMin: 200, priceMax: 800,
    desc: "Cute low-maintenance succulents with decorative ceramic pots.", tag: "Green",
    interests: ["gardening"], relationships: ["mom", "teacher", "colleague", "friend"] },

  { name: "Herb Growing Kit", emoji: "🌿", priceMin: 300, priceMax: 900,
    desc: "Grow fresh basil, mint, and coriander right on the windowsill.", tag: "Useful",
    interests: ["gardening", "cooking"], relationships: ["mom", "dad", "partner", "teacher"] },

  /* ── MOVIES ── */
  { name: "OTT Subscription Card", emoji: "🎬", priceMin: 200, priceMax: 600,
    desc: "Gift them a month of Netflix, Prime, or Hotstar to binge-watch.", tag: "Entertainment",
    interests: ["movies"], relationships: ["friend", "sibling", "child", "partner", "colleague"] },

  { name: "Movie Night Kit", emoji: "🍿", priceMin: 350, priceMax: 1000,
    desc: "Popcorn, cosy blanket, and movie snacks for the perfect night in.", tag: "Cosy",
    interests: ["movies"], relationships: ["partner", "friend", "sibling", "child"] },

  /* ── PETS ── */
  { name: "Pet Treat Hamper", emoji: "🐾", priceMin: 300, priceMax: 1200,
    desc: "A curated box of premium treats and toys for their furry friend.", tag: "Pet Love",
    interests: ["pets"], relationships: ["friend", "sibling", "colleague", "partner"] },

  { name: "Custom Pet Portrait", emoji: "🐶", priceMin: 500, priceMax: 2000,
    desc: "A hand-drawn digital portrait of their pet — a keepsake forever.", tag: "Unique",
    interests: ["pets", "art"], relationships: ["friend", "partner", "sibling"] },

];


const relationshipEl = document.getElementById("relationship");
const budgetEl       = document.getElementById("budget");
const findBtn        = document.getElementById("findGifts");
const loader         = document.getElementById("loader");
const btnText        = document.querySelector(".submit-btn__text");
const resultsSection = document.getElementById("resultsSection");
const resultsGrid    = document.getElementById("resultsGrid");
const resultsTitle   = document.getElementById("resultsTitle");
const emptyState     = document.getElementById("emptyState");
const resetBtn       = document.getElementById("resetBtn");


const selectedInterests = new Set();

document.querySelectorAll(".interest-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const interest = btn.dataset.interest;
    if (selectedInterests.has(interest)) {
      selectedInterests.delete(interest);
      btn.classList.remove("selected");
    } else {
      selectedInterests.add(interest);
      btn.classList.add("selected");
    }
  });
});


document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    budgetEl.value = chip.dataset.value;
  });
});

budgetEl.addEventListener("input", () => {
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
});


findBtn.addEventListener("click", () => {
  const relationship = relationshipEl.value;
  const budget       = parseFloat(budgetEl.value);
  const interests    = [...selectedInterests];

  if (!relationship) {
    showAlert("Please select a relationship first! 💝");
    return;
  }
  if (!budget || budget <= 0) {
    showAlert("Please enter a valid budget! 💰");
    return;
  }
  if (interests.length === 0) {
    showAlert("Please pick at least one interest! ✨");
    return;
  }


  btnText.style.display = "none";
  loader.style.display  = "inline";
  findBtn.disabled = true;

  setTimeout(() => {
    const results = filterGifts(relationship, budget, interests);
    renderResults(results, relationship, budget);

    btnText.style.display = "inline";
    loader.style.display  = "none";
    findBtn.disabled = false;
  }, 700);
});


function filterGifts(relationship, budget, interests) {
  return GIFTS.filter(gift => {
    const withinBudget      = gift.priceMin <= budget;
    const matchRelationship = gift.relationships.includes(relationship);
    const matchInterest     = interests.some(i => gift.interests.includes(i));
    return withinBudget && matchRelationship && matchInterest;
  });
}

function renderResults(gifts, relationship, budget) {
  
  resultsGrid.innerHTML = "";
  emptyState.style.display    = "none";
  resultsSection.style.display = "none";

  if (gifts.length === 0) {
    emptyState.style.display = "block";
    smoothScrollTo(emptyState);
    return;
  }

  const names = {
    mom: "Mom", dad: "Dad", partner: "your Partner",
    friend: "your Friend", sibling: "your Sibling",
    colleague: "a Colleague", child: "your Child", teacher: "your Teacher"
  };
  resultsTitle.innerHTML = `Top gift ideas for <em>${names[relationship] || "them"}</em>.`;

  gifts.slice(0, 9).forEach(gift => {
    const card = document.createElement("div");
    card.className = "gift-card";
    card.innerHTML = `
      <span class="gift-card__emoji">${gift.emoji}</span>
      <div class="gift-card__name">${gift.name}</div>
      <div class="gift-card__price">₹${gift.priceMin}–₹${gift.priceMax}</div>
      <p class="gift-card__desc">${gift.desc}</p>
      <span class="gift-card__tag">${gift.tag}</span>
    `;
    resultsGrid.appendChild(card);
  });

  resultsSection.style.display = "block";
  smoothScrollTo(resultsSection);
}


resetBtn.addEventListener("click", () => {
  
  relationshipEl.value = "";
  budgetEl.value = "";
  selectedInterests.clear();
  document.querySelectorAll(".interest-btn").forEach(b => b.classList.remove("selected"));
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));

  
  resultsSection.style.display = "none";
  emptyState.style.display = "none";

  
  smoothScrollTo(document.querySelector(".form-section"));
});

function showAlert(message) {
  
  const existing = document.querySelector(".alert-banner");
  if (existing) existing.remove();

  const banner = document.createElement("div");
  banner.className = "alert-banner";
  banner.textContent = message;
  banner.style.cssText = `
    position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    background: #2b2118; color: #fff; padding: 14px 28px;
    border-radius: 50px; font-family: 'DM Sans', sans-serif;
    font-size: .9rem; font-weight: 500; z-index: 9999;
    box-shadow: 0 6px 24px rgba(0,0,0,.2);
    animation: fadeUp .3s ease both;
  `;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 3000);
}

function smoothScrollTo(el) {
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function getAIGifts(prompt) {
  try {
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: prompt })
    });

    const text = await res.text(); // 👈 IMPORTANT
    console.log("RAW RESPONSE:", text);

    const data = JSON.parse(text);

    return data?.choices?.[0]?.message?.content || "No AI response";

  } catch (error) {
    console.error("ERROR:", error);
    return "Something went wrong 😢";
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const relationship = document.querySelector("select").value;
  const budget = document.querySelector("input").value;
  const interests = Array.from(document.querySelectorAll(".selected"))
                        .map(el => el.innerText);

  const prompt = `
Suggest gift ideas for:
Relationship: ${relationship}
Budget: ₹${budget}
Interests: ${interests.join(", ")}
`;

  const aiResponse = await getAIGifts(prompt);

  document.getElementById("results").innerText = aiResponse;
});

const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatMessages");

sendBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatBox.innerHTML += `<div>${userMessage}</div>`;

  chatInput.value = "";

  const aiReply = await getAIGifts(userMessage);

  chatBox.innerHTML += `<div>${aiReply}</div>`;
});