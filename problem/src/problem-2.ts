const removeDuplicates = (arr: number[]): number[] => {
    let unique: number[] = [];
    for (const item of arr) {
      if (unique.includes(item) === false) {
        unique.push(item);
      }
    }
    return unique;
  };
  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
  console.log(result);