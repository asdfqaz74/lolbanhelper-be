const HAPPY_WIN_RATE = 0.6;
const SAD_WIN_RATE = 0.4;

const getDateAfter = () => {
  const currentYear = new Date().getFullYear();
  const date = new Date(`${currentYear}-11-30T23:59:59.999Z`);

  return { $gt: date };
};

module.exports = { HAPPY_WIN_RATE, SAD_WIN_RATE, getDateAfter };
