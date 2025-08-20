

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3]));           // 1
console.log(getFirstElement<string>(["a", "b", "c"]));     // "a"
console.log(getFirstElement<boolean>([true, false, true])); // true

