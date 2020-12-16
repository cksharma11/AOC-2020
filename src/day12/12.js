const fs = require('fs');

const data = fs.readFileSync('input', 'utf8').split('\n');

const parse = (code) => {
  return { code: code[0], value: +code.substr(1) };
};

const execute = (codeLine, acc) => {
  const { code, value } = codeLine;
  const { direction, x, y } = acc;
  if (code == 'F') {
    if (direction == 'E') {
      return { direction, x: x + value, y };
    }
    if (direction == 'W') {
      return { direction, x: x - value, y };
    }
    if (direction == 'N') {
      return { direction, y: y + value, x };
    }
    if (direction == 'S') {
      return { direction, y: y - value, x };
    }
  }

  if (code == 'E') {
    return { direction, x: x + value, y };
  }
  if (code == 'W') {
    return { direction, x: x - value, y };
  }
  if (code == 'N') {
    return { direction, y: y + value, x };
  }
  if (code == 'S') {
    return { direction, y: y - value, x };
  }

  // if (code == 'E' || code == 'W') {
  //   return { direction, x: x + value, y };
  // }
  // if (code == 'N' || code == 'S') {
  //   return { direction, y: y + value, x };
  // }

  if (code == 'L') {
    if (direction == 'E') {
      if (value == 90) {
        return { direction: 'N', y, x };
      }
      if (value == 180) {
        return { direction: 'W', y, x };
      }
      if (value == 270) {
        return { direction: 'S', y, x };
      }
      return { direction, y, x };
    }

    if (direction == 'N') {
      if (value == 90) {
        return { direction: 'W', y, x };
      }
      if (value == 180) {
        return { direction: 'S', y, x };
      }
      if (value == 270) {
        return { direction: 'E', y, x };
      }
      return { direction, y, x };
    }

    if (direction == 'W') {
      if (value == 90) {
        return { direction: 'S', y, x };
      }
      if (value == 180) {
        return { direction: 'E', y, x };
      }
      if (value == 270) {
        return { direction: 'N', y, x };
      }
      return { direction, y, x };
    }

    if (direction == 'S') {
      if (value == 90) {
        return { direction: 'E', y, x };
      }
      if (value == 180) {
        return { direction: 'N', y, x };
      }
      if (value == 270) {
        return { direction: 'W', y, x };
      }
      return { direction, y, x };
    }
  }

  if (code == 'R') {
    if (direction == 'E') {
      if (value == 90) {
        return { direction: 'S', y, x };
      }
      if (value == 180) {
        return { direction: 'W', y, x };
      }
      if (value == 270) {
        return { direction: 'N', y, x };
      }
      return { direction, y, x };
    }

    if (direction == 'N') {
      if (value == 90) {
        return { direction: 'E', y, x };
      }
      if (value == 180) {
        return { direction: 'S', y, x };
      }
      if (value == 270) {
        return { direction: 'W', y, x };
      }
      return { direction, y, x };
    }

    if (direction == 'W') {
      if (value == 90) {
        return { direction: 'N', y, x };
      }
      if (value == 180) {
        return { direction: 'E', y, x };
      }
      if (value == 270) {
        return { direction: 'S', y, x };
      }
      return { direction, y, x };
    }

    if (direction == 'S') {
      if (value == 90) {
        return { direction: 'W', y, x };
      }
      if (value == 180) {
        return { direction: 'N', y, x };
      }
      if (value == 270) {
        return { direction: 'E', y, x };
      }
      return { direction, y, x };
    }
  }
};

const instructions = data.map(parse);
// const instructions = ['F10', 'N3', 'F7', 'R90', 'F11'].map(parse);

const result = instructions.reduce(
  (acc, code) => {
    return execute(code, acc);
  },
  {
    direction: 'E',
    x: 0,
    y: 0,
  }
);

console.log(result);
