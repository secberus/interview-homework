export default {
  Morning: {
    "Make Breakfast": {
      Drink: "Coffee",
      Protein: "Eggs",
      Fiber: "Oatmeal",
    },
  },
  "Early Afternoon": {
    "Go to mall": {
      "Stores to go to": ["Computer store", "Clothing store", "Cookie stand"],
    },
    "Drive to Farmers Market": {
      Veggies: ["Leeks", "Red Onions", "Romaine Lettuce"],
      Fruits: ["Tomato", "Orange"],
      Protein: {
        Regular: "Chicken",
        Vegan: "Lentils",
      },
    },
  },
  "Late Afternoon": [
    "Cook a nice meal",
    "Watch TV with the friends",
    "Play charades",
    "Drink plenty of fluids",
  ],
  Evening: {
    "See the sights": new Map([
      ["Architecture", "Castle"],
      ["Ocean", "Local Bay"],
      ["Animals", "Dolphins"],
    ]),
  },
  "Late Evening": ["Brush teeth", "Go to sleep"],
};
