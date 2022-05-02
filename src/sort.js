const array = [1, 30, 4, 21, 100000];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(array.sort());

console.log(solution(array, commands));

function solution(array, commands) {
  let answer = [];
  let start = 0;
  let end = 0;
  let count = 0;
  for (let i = 0; i < commands.length; i++) {
    start = commands[i][0];
    end = commands[i][1];
    count = commands[i][2];
    let newArray = [];
    for (let j = start - 1; j < end; j++) {
      newArray[j - start + 1] = array[j];
    }
    answer[i] = newArray.sort(function (a, b) {
      return a - b;
    })[count - 1];
  }
  return answer;
}
