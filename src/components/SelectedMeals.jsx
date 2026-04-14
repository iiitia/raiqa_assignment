export default function SelectedMeals({ meals, onReset }) {
  const total = meals.reduce((sum, m) => sum + m.price, 0);

  const maxPrice = meals.length > 0 ? Math.max(...meals.map((m) => m.price)) : null;
  const minPrice = meals.length > 0 ? Math.min(...meals.map((m) => m.price)) : null;

  return (
    <aside className="selected-panel">
      <div className="selected-header">
        <h2 className="panel-title">Your Selection</h2>
        {meals.length > 0 && (
          <button className="reset-btn" onClick={onReset}>
            Clear all
          </button>
        )}
      </div>

      {meals.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🛒</span>
          <p>No meals selected yet.</p>
        </div>
      ) : (
        <>
          <ul className="selected-list">
            {meals.map((meal) => {
              const isMax = meal.price === maxPrice && meals.filter((m) => m.price === maxPrice).length === 1;
              const isMin = meal.price === minPrice && meals.filter((m) => m.price === minPrice).length === 1;
              return (
                <li key={meal.id} className={`selected-item ${isMax ? "highlight-max" : ""} ${isMin ? "highlight-min" : ""}`}>
                  <span className="s-emoji">{meal.emoji}</span>
                  <span className="s-name">{meal.name}</span>
                  <span className="s-price">${meal.price.toFixed(2)}</span>
                  {isMax && <span className="tag tag-max">Most expensive</span>}
                  {isMin && <span className="tag tag-min">Best value</span>}
                </li>
              );
            })}
          </ul>
          <div className="total-row">
            <span>Total</span>
            <span className="total-amount">${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </aside>
  );
}
