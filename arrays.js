var chocolateBars = ['snickers', 'hundred grand','kitkat','kittles'];

var addElementToBeginningOfArray = (array, element) => {
return array1 = [element, ...array];
}

var destructivelyAddElementToBeginningOfArray = (array,element) => {
array.unshift(element);
return array
}

var addElementToBeginningOfArray = (array, element) => { 
return array1 = [...array, element]
} 

var destructivelyAddElementToEndOfArray = (array,element) => {
array.push(element);
return array
}