export const priceFormat = price =>
  price.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
