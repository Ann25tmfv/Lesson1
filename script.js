function changeColor() {
    const testParagraph = document.getElementById('test');
    testParagraph.style.color = 'red';
}
const myClick = document.getElementById('button');

myClick.addEventListener('click', changeColor);

function deleteElement() {
    const testParagraph = document.getElementById('test');
    testParagraph.style.display = 'none'; 
}

const myButton = document.getElementById('btn');
myButton.addEventListener('click', deleteElement);
