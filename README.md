## How To use The manually function create map,filter,forEach

## Create the forEach function 

- biltin function forEach 
```
array.forEach(function (value, index, array) {
    console.log(value, index, array);
})
```


- myForEach function 
```
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


## Create the map function 

- biltin map function working process
```

let output = array.map(function (value, index, array) {
  return value * 2;
});

console.log(output);
console.log(array);
````

- myMap function
  
```
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


## Create the filter function 

- biltin function 
```
let result = array.filter(function (value, index, array) {
  return value % 2 === 1;
});
console.log(result);
```
- manually function
```
function myFilter(array, callbackFunction) {
  let len = array.length;
  let newArray = [];

  for (let i = 0; i < len; i++) {
    if (callbackFunction(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
let result1 = myFilter(array, function (value, index, array) {
  return array.indexOf(value) === index; // duplicate value the logic

});
console.log(result1);
```


## handle the reverse manual function

```
function handleClick() {
    const newList = [];
    

    for (let i = list.length - 1; i >= 0; i--) {
      let temp = list[i];
      newList.push(temp);
    }

    setList(newList);
  }
```

## Find and FindIndex manual function 

```
const  arr = [1,2,3,4,5,6]

function myFind(arr,cb){
    let len = arr.length
    for(let i=0;i<len;i++){
        if(cb(arr[i], i,arr)){
            return arr[i] // eikhane amora jodi arr[i] k bad i return kori  tahole amader eta index return korbe . 

        }
    }
}

myFind(arr,function(value){
    if(value === 6){
        console.log(value)
    }
})
```

![Costom hooks in data fetch](https://i.ibb.co.com/ncmznQN/code1.png)

