const countries = [
  "Sweden",
  "Finland",
  "Norway",
  "Germany",
  "United Kingdom",
  "Russia",
  "Poland"
];
const min = 13;
const max = 80;

module.exports = countries.map(country => ({
  name: country,
  vat: Math.floor(Math.random() * (max - min + 1)) + min
}));
