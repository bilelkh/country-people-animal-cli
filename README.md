# Country People Animal CLI

A Node.js command-line application to filter and count countries, people, and animals from a nested data structure.

---

## 🚀 Features

- Filter animals by name pattern
- Count people and animals and append counts to names
- Uses functional programming with `.reduce()`
- Fully tested with Jest

---

## 📂 Project Structure

```
├── data.js                 # Data source (countries, people, animals)
├── app.js                  # CLI entry point
├── utils
│   └── dataUtils.js        # Core logic (filterData & countData)
├── __tests__
│   └── dataUtils.test.js   # Unit tests with Jest
├── package.json            # NPM configuration
└── README.md               # Project documentation
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/bilelkh/country-people-animal-cli
cd country-people-animal-cli
```

2. Install dependencies:

```bash
npm install
```

---

## 💻 Usage

### Filter animals by pattern

You can filter animals by passing the pattern in `--filter` argument:

```bash
npm start -- --filter=ry
```

Example output:

```json
[
  {
    "name": "Uzuzozne",
    "people": [
      {
        "name": "Lillie Abbott",
        "animals": [
          {
            "name": "John Dory"
          }
        ]
      }
    ]
  },
  {
    "name": "Satanwi",
    "people": [
      {
        "name": "Anthony Bruno",
        "animals": [
          {
            "name": "Oryx"
          }
        ]
      }
    ]
  }
]
```

---

### Count people and animals

You can count the number of people and animals:

```bash
npm start -- --count
```

Example output:

```json
[
  {
    "name": "Dillauti [5]",
    "people": [
      {
        "name": "Winifred Graham [6]",
        "animals": [
          { "name": "Anoa" },
          { "name": "Duck" },
          { "name": "Narwhal" },
          { "name": "Badger" },
          { "name": "Cobra" },
          { "name": "Crow" }
        ]
      },
      ...
    ]
  },
  ...
]
```

---

## 🧪 Run Tests

Tests are written using **Jest** and cover both `filterData` and `countData` functions.

To run tests:

```bash
npm test
```

---

## 📄 License

This project is licensed under the **MIT License**.

---
