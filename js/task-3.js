const getElementWidth = (content, padding, border) => { //mama ama gensta
    const slimShady = parseFloat(padding) * 2 + parseFloat(border) * 2 + parseFloat(content);
    return slimShady;
};

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
console.log(getElementWidth("20px", "10px", "10px"));