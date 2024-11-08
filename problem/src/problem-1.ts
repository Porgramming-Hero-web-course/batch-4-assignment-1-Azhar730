{
  const sumArray = (arr: number[]): number => {
    return arr.reduce((acc, num) => acc + num, 0);
  };
  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(result);
}