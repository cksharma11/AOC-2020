const fs = require('fs');
const input = fs.readFileSync('4.txt', 'utf8').split('\n\n');

const validations = {
  byr: (i) => i.split('').length == 4 && +i >= 1920 && +i <= 2002,
  iyr: (i) => i.split('').length == 4 && +i >= 2010 && +i <= 2020,
  eyr: (i) => i.split('').length == 4 && +i >= 2020 && +i <= 2030,
  hgt: (i) => {
    const length = i.length;
    const measure = i.substr(length - 2);
    const height = +i.substr(0, length - 2);
    if (measure == 'cm') {
      return height >= 150 && height <= 193;
    }
    if (measure == 'in') {
      return height >= 59 && height <= 76;
    }
    return false;
  },
  hcl: (i) => {
    return /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(i);
  },
  ecl: (i) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(i),
  pid: (i) => i.length == 9 && /([0-9])$/.test(i),
};

const replaceNewLineWithSpace = (list) => {
  return list.map((e) => e.replace(/\n/g, ' '));
};

const listAllDoc = (input) => {
  return input
    .split(' ')
    .map((e) => ({ name: e.split(':')[0], value: e.split(':')[1] }));
};

const isValid = (docs) => {
  const docsC = docs.map((d) => d.name);
  if (!(docsC.length == 8 || (docsC.length == 7 && !docsC.includes('cid')))) {
    return false;
  }
  return docs.every((doc) => {
    if (doc.name == 'cid') return true;
    console.log("isValid->",doc.name,"->",validations[doc.name](doc.value));
    return validations[doc.name](doc.value);
  });
};

const parseInput = (input) => {
  return replaceNewLineWithSpace(input);
};

const countHowManyValid = (input) => {
  const parsed = parseInput(input);
  return parsed.reduce((count, i) => {
    const docs = listAllDoc(i);
    console.log('docs->', docs);
    return isValid(docs) ? count + 1 : count;
  }, 0);
};

console.log(countHowManyValid(input));
