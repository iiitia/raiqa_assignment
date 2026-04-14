import { useState, useEffect } from "react";
import { MEALS } from "./data/meals";
import MealCard from "./components/MealCard";
import SelectedMeals from "./components/SelectedMeals";
import "./App.css";

export default function App() {
  const [showAll, setShowAll] = useState(false);
  const [sortAsc, setSortAsc] = useState(true);
  const [selected, setSelected] = useState(() => {
    try {
      const saved = localStorage.getItem("raiqa_selected");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("raiqa_selected", JSON.stringify(selected));
  }, [selected]);

  const handleAdd = (meal) => {
    setSelected((prev) =>
      prev.find((m) => m.id === meal.id) ? prev : [...prev, meal]
    );
  };

  const handleReset = () => setSelected([]);

  const displayedMeals = MEALS.filter((m) => showAll || m.isAvailable).sort(
    (a, b) => sortAsc ? a.price - b.price : b.price - a.price
  );

  const selectedIds = new Set(selected.map((m) => m.id));

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">🍽️</span>
            <span className="logo-text">Raiqa Assignment</span>
          </div>
          <p className="tagline">Made by Shruti</p>
        </div>
      </header>

      <main className="app-body">
        <section className="meals-section">
          <div className="controls">
            <div className="control-group">
              <span className="meals-count">
                {displayedMeals.length} meal{displayedMeals.length !== 1 ? "s" : ""}
              </span>
              <button
                className="control-btn"
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll ? "⚡ Available only" : "🌐 Show all meals"}
              </button>
              <button
                className="control-btn"
                onClick={() => setSortAsc((v) => !v)}
              >
                {sortAsc ? "↓ Price: High → Low" : "↑ Price: Low → High"}
              </button>
            </div>
          </div>

          <div className="meals-grid">
            {displayedMeals.map((meal) => (
              <MealCard
                key={meal.id}
                meal={meal}
                onAdd={handleAdd}
                isSelected={selectedIds.has(meal.id)}
              />
            ))}
          </div>
        </section>

        <SelectedMeals meals={selected} onReset={handleReset} />
      </main>
    </div>
  );
}
