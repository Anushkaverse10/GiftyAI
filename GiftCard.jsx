function GiftCard({ gift }) {
  return (
    <div className="gift-card">
      <span className="gift-card__emoji">{gift.emoji}</span>
      <div className="gift-card__name">{gift.name}</div>
      <div className="gift-card__price">₹{gift.priceMin}–₹{gift.priceMax}</div>
      <p className="gift-card__desc">{gift.desc}</p>
      <span className="gift-card__tag">{gift.tag}</span>
    </div>
  );
}
export default GiftCard;