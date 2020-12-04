const fs = require('fs');
const input = fs.readFileSync('3.txt', 'utf8').split('\n');

const isOnTree = (list, index, right) => {
  const nextIndex = index * right;
  const floor = nextIndex % list.split('').length;
  return list.split('')[floor] == '#';
};

const countHowManyTree = (input, right, down) => {
  let count = 0;
  let t = 1;
  for (let i = down; i < input.length; i += down) {
    if (isOnTree(input[i], t, right)) count += 1;
    t++
  }
  return count;
};

console.log(countHowManyTree(input, 1, 1));
console.log(countHowManyTree(input, 3, 1));
console.log(countHowManyTree(input, 5, 1));
console.log(countHowManyTree(input, 7, 1));
console.log(countHowManyTree(input, 1, 2));
