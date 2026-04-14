export default function MealCard({ meal, onAdd, isSelected }) {
  return (
    <div className={`meal-card ${!meal.isAvailable ? "unavailable" : ""} ${isSelected ? "selected" : ""}`}>
      <div className="meal-emoji">{meal.emoji}</div>
      <div className="meal-info">
        <h3 className="meal-name">{meal.name}</h3>
        <p className="meal-chef">by {meal.chef}</p>
        <div className="meal-footer">
          <span className="meal-price">${meal.price.toFixed(2)}</span>
          {meal.isAvailable ? (
            <button
              className={`add-btn ${isSelected ? "added" : ""}`}
              onClick={() => onAdd(meal)}
              disabled={isSelected}
            >
              {isSelected ? "✓ Added" : "+ Add"}
            </button>
          ) : (
            <span className="unavailable-badge">Unavailable</span>
          )}
        </div>
      </div>
    </div>
  );
}
