var chocolateBars = ['snickers', 'hundred grand','kitkat','kittles'];

function addElementToBeginningOfArray(array, element){
array1 = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
array.unshift(element);
}
