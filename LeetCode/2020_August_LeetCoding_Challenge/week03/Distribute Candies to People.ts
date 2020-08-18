function distributeCandies(candies: number, num_people: number): number[] {
  const arr: number[] = new Array(num_people);
  for (let i = 0; i < num_people; i++) arr[i] = 0;

  let candy: number = 1;
  let index: number = 0;

  while (candies) {
    if (index === num_people) index = 0;
    arr[index] += candy;
    index++;
    candies -= candy;
    candy++;
    if (candy > candies) {
      candy = candies;
    }
  }

  return arr;
}

// test code

console.log(distributeCandies(7, 4));
console.log(distributeCandies(10, 3));
