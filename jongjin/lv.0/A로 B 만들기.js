function solution(before, after) {
  var answer = 0;
  let bf = Array.from(before).sort();
  let af = Array.from(after).sort();
  if (JSON.stringify(bf) !== JSON.stringify(af)) {
    return 0;
  } else {
    return 1;
  }
  return answer;
}
