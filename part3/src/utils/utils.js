export const flattenArray = (arrElem) => [].concat.apply([], arrElem);

export const removeEmptyObject = (arrElem) => arrElem.filter(value => Object.keys(value).length !== 0);

export const ifKeyCode = (event) => (event.keyCode ? event.keyCode : event.which);