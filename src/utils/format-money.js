export default (money, withDecimals) =>
  parseFloat(money)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ')
    .replace('.', ',')
    .slice(
      0,
      typeof withDecimals !== undefined || withDecimals === false
        ? -3
        : undefined
    );
