# How To use The manually function create map,filter,forEach

### create the forEach function 

```
* biltin function forEach 
array.forEach(function (value, index, array) {
    console.log(value, index, array);
})



// myForEach function 
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
