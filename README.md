# How To use The manually function create map,filter,forEach

### create the forEach function 

```
- biltin function forEach 
array.forEach(function (value, index, array) {
    console.log(value, index, array);
})



- myForEach function 
function myForEach(array, callbackFunction) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        callbackFunction(array[i], i, array)
    }
}


myForEach(array, function (value, index, array) {
    console.log(value);
})

```


### create the map function 

```
- biltin map function working process

let output = array.map(function (value, index, array) {
  return value * 2;
});

console.log(output);
console.log(array);

- myMap function

function myMap(array, callbackFunction) {
  let len = array.length;
  let newArray = [];
  for (i = 0; i < len; i++) {
    let temp = callbackFunction(array[i], i, array);
    newArray.push(temp);
  }

  return newArray;
}

let result = myMap(array, function (value, index, array) {
  return value;
});

console.log(result);

```
