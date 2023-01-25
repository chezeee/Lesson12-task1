/**
 * @param {number[]} years
 * @param {number} searchYear
 */
const getYear = (years, searchYear) => {
  return years.find((year) => year === searchYear) ? searchYear : undefined;
};

// Sample usage - do not modify
getYear([2019, 2020, 2021], 2020); // 2020
getYear([2019, 2020, 2021], 1990); // undefined
