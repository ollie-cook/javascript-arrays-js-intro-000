var chocolateBars = ['snickers', 'hundred grand','kitkat','kittles'];

function addElementToBeginningOfArray(array, element){
array = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
array.unshift(element);
}
