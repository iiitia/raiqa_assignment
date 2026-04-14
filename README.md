# Raiqa Assignment

**Made by Shruti**

A clean, interactive meal browsing and selection app built with React + Vite.

---

## Features

| Feature | Description |
|---|---|
| Meal List | Displays meals with name, chef name, price, and availability |
| Show All Toggle | Toggle between available meals only (default) and all meals |
| Add to Selection | Click Add on any available meal to add it to your selection (no duplicates) |
| Added State | Button changes to "Added" and the card highlights once a meal is selected |
| Selection Panel | Right-side panel shows all selected meals with individual prices |
| Total Price | Live-calculated total shown at the bottom of the selection panel |
| Price Sort Toggle | Sort meals by price — switch between Low to High and High to Low |
| Smart Labels | Cheapest item is tagged "Best value", most expensive is tagged "Most expensive" |
| Clear All | One-click button to clear the entire selection |

---

## Project Structure

```
raiqa-assignment/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── MealCard.jsx          # Individual meal card (name, chef, price, add button)
│   │   ├── MealList.jsx          # Grid of MealCard components with filter/sort applied
│   │   ├── SelectionPanel.jsx    # Right panel: selected meals, labels, total, clear button
│   │   └── Toolbar.jsx           # Top bar: meal count, Show All toggle, Sort toggle
│   ├── data/
│   │   └── meals.js              # Static meal data (name, price, chef, available)
│   ├── App.jsx                   # Root component — state management and layout
│   ├── main.jsx                  # Vite entry point
│   └── index.css                 # Global styles
├── index.html
├── package.json
└── vite.config.js
```

---

## Static Data Shape

Each meal entry in `src/data/meals.js` follows this structure:

```js
{
  id: 1,
  name: "Greek Salad",
  chef: "Elena P.",
  price: 7.50,
  available: true
}
```

The full dataset includes 7 meals:

| Meal | Chef | Price | Available |
|---|---|---|---|
| Greek Salad | Elena P. | $7.50 | Yes |
| Shakshuka | Fatima A. | $8.50 | Yes |
| Pho Soup | Linh N. | $10.00 | Yes |
| Margherita Pizza | Marco R. | $10.50 | Yes |
| Pad Thai | Siri T. | $11.00 | Yes |
| Butter Chicken | Priya K. | $12.99 | Yes |
| Lamb Biryani | Arjun M. | $15.99 | Yes |

---

## How It Works

### 1. Meal Display
- On load, only available meals are shown (default filter).
- Clicking "Show all meals" toggles the filter to include unavailable meals too.

### 2. Adding Meals
- Clicking Add on a meal card adds it to the selection panel.
- If a meal is already selected, the button shows "Added" and is disabled — preventing duplicates.

### 3. Sort Toggle
- The Price sort toggle switches between High to Low and Low to High.
- Clicking the button re-renders the meal list in the updated order.

### 4. Selection Panel
- All selected meals appear in a right-side panel.
- The cheapest item gets a "Best value" label.
- The most expensive item gets a "Most expensive" label.
- A live total is calculated from selected meal prices.
- Clear all removes every meal from the selection at once.

---

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/raiqa-assignment.git
cd raiqa-assignment

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at http://localhost:5173

### Build for Production

```bash
npm run build
```

---

## Tech Stack

- React — UI components and state management
- Vite — Development server and build tool
- CSS — Custom styling (no external UI library)

---

## Design Highlights

- Dark header with branding
- Soft green card backgrounds for available meals
- Green pill buttons for add/added actions
- Two-column layout: meal grid on the left, selection panel on the right

---

## Notes

- All meal data is static (no API calls or database).
- State is managed locally in App.jsx using React useState.
- No external component libraries are used — all UI is custom-built.

---

*Assignment submission for Raiqa | Built by Shruti*
