function sortArr(inputObj, namesPropsArray) {
  const resultArr = [];
  for (const prop in namesPropsArray) {
    if (namesPropsArray[prop] in inputObj) {
      const keyProp = namesPropsArray[prop];
      resultArr.push({ key: keyProp, value: inputObj[keyProp] });
    }
  }
  return resultArr;
}

function getNeedSortingFields(inputObj, namesPropsArray) {
  const copyObj = { ...inputObj };
  for (const prop in namesPropsArray) {
    if (namesPropsArray[prop] in inputObj) {
      delete copyObj[namesPropsArray[prop]];
    }
  }
  return copyObj;
}

export default function orderByProps(obj, arr) {
  const resultFirst = sortArr(obj, arr);
  const copyObj = getNeedSortingFields(obj, arr);
  const sortt = Object.keys(copyObj).sort();

  const resultSecond = sortArr(obj, sortt);
  const resultArray = resultFirst.concat(resultSecond);

  return resultArray;
}
