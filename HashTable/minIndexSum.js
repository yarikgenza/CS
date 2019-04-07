var findRestaurant = function(list1, list2) {
  const bothLike = new Map();

  list1.forEach((item, index) => {
    const index2 = list2.indexOf(item);

    if (index2 !== -1) {
      bothLike.set(item, index + index2);
    }
  });

  const min = Math.min(...Array.from(bothLike.values()));

  const result = [];

  for ([key, value] of bothLike) {
    if (value === min) {
      result.push(key);
    }
  }

  return result;
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Burger King", "Tapioca Express", "Shogun"]
  )
);
