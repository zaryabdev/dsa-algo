function validAnagram(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  }

  let fc1 = {}, fc2 = {};

  for (let c of str1) {
    fc1[c] = (fc1[c] || 0) + 1;
  }

  for (let c of str2) {

    fc2[c] = (fc2[c] || 0) + 1;
  }

  console.log(fc1);
  console.log(fc2);

  console.log("--------------");

  for (let v in fc1) {
    console.log(fc2);
    if (fc2[v]) {
      fc2[v] = fc2[v] - 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(

  validAnagram("cat", "ccc")
);
// validAnagram("tac","cat")
// validAnagram("","")
