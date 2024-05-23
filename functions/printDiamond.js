function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line = line + '#';
    }
    return line;
}

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square = square + '\n' + makeLine(size);
    }
    return square;
}

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle = rectangle + '\n' + makeLine(width);
    }
    return rectangle;
}

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 1; i <= height; i++) {
        stairs = stairs + '\n' + makeLine(i);
    }
    return stairs;
}

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += ' ';
    }
    return spaceLine + makeLine(numChars) + spaceLine;
}

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
         triangle += makeSpaceLine(height - i - 1, 2*i + 1 ) + '\n';
    }
    return triangle;
}

function reverseTriangle(height){
    let reversed = '';
    for(let i = height; i > 0; i--){
        reversed += makeSpaceLine(height - i , 2*i - 1 ) + '\n';
    }
    return reversed;
}
function makeDiamond(height){

    return makeIsoscelesTriangle(height) + reverseTriangle(height);

}

 console.log(makeLine(5));
 console.log(makeSquare(5));
 console.log(makeRectangle(5,3));
 console.log(makeDownwardStairs(5));
 console.log(makeSpaceLine(3,5));
 console.log(makeIsoscelesTriangle(5));
 console.log(reverseTriangle(5));
 console.log(makeDiamond(5));