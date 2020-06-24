var chocolateBars = ['snickers', 'hundred grand','kitkat','kittles'];

var addElementToBeginningOfArray = (array, element) => {
return array1 = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
array.unshift(element);
return array
}
