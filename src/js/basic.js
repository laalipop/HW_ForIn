const resultArr = [];

function sortArr(obj, arr) {
  for (const prop in arr) {
    if (arr[prop] in obj) {
      resultArr.push({ key: arr[prop], value: obj[arr[prop]] });
      delete obj[arr[prop]];
    }
  }
}

export default function orderByProps(obj, arr) {
  sortArr(obj, arr);
  const sortt = Object.keys(obj).sort();
  sortArr(obj, sortt);
  // console.log(resultArr);
  return resultArr;
}

// const obj = {
//   name: 'мечник',
//   health: 10,
//   level: 2,
//   attack: 80,
//   defence: 40,
// };

// orderByProps(obj, []);
