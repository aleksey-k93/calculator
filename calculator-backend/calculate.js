const calculateMagic = function(equation) {
    try {
    let result = 0;
    const subArray = equation.split(/(?<!^)(?<![\+\*\/\-])-/g);
    console.log('subArray', subArray);
    const newArray = subArray.map((substractArrayElement) => {
      let tempResult = 0;
      console.log('subtractArrayElement', substractArrayElement);
      const tArray = substractArrayElement.split(/(?<=\d)\+(?=\d)/g);
      console.log('tArray', tArray);
      tArray.forEach((addArrayElement) => {
        const elements = addArrayElement.match(/((?<![\d-])[-]?\.[\d]+)|((?<![-])[-]?[\d]+\.[\d]*)|((?<![-\d])[-]?[\d]+)/g);
        const signs = addArrayElement.match(/(?<![\*\/])[*/](?![\*\/])/g);
        console.log('Current Iteration', addArrayElement, elements, signs);
        if(signs || elements.length > 1) {
          let muldivTempResult = parseFloat(elements[0]);
          signs.forEach((_, index) => {
            signs[index] === '*' ?
              muldivTempResult = muldivTempResult * parseFloat(elements[index + 1]) :
              muldivTempResult = muldivTempResult / parseFloat(elements[index + 1])
          })
          tempResult += parseFloat(muldivTempResult);
        } else {  
          tempResult += parseFloat(elements[0] ?? 0)
        }
      })
      return tempResult;
    })
    console.log('newArray', newArray, result);
    newArray.forEach((substractArrayElement, index) => {
      if (index === 0) {
        result += parseFloat(substractArrayElement);
      } else {
        result -= parseFloat(substractArrayElement);
      }
      console.log(result);
    })
    return result;
    } catch (err) {
        return null;
    }
}

export default calculateMagic;