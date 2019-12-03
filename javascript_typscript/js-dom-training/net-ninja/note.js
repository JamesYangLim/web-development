///////////////////////////////// Get DOM element by id   
var banner = document.getElementById('page-banner');
console.log(banner);


///////////////////////////////// Get DOM element(s) by class name 
var titles = document.getElementsByClassName('title');
console.log(titles);


///////////////////////////////// Get DOM element by tag name
var lis = document.getElementsByTagName('li');
console.log(lis);


///////////////////////////////// Loop
var titles = document.getElementsByClassName('title');

// NOTE: titles isn't an array
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(element => {
  console.log(element);
});


///////////////////////////////// Query Selector
const wrap = document.querySelector('#wrapper');
console.log(wrap);

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

// querySelectorAll returns NodeList
const books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(element => {
  console.log(element);
});

for(i=0; i<books.length; i++) {
  console.log(books[i]);
}

// NOTE: books is a NodeList, NOT HTML collection. Therefore,
// it doesn't need to transform into Array
books.forEach(element => {
  console.log(element);
});


///////////////////////////////// Change Text & HTML Content

const books = document.querySelectorAll('#book-list li .name');

books.forEach(book => {
  book.textContent += ' TEST';
});

const bookList = document.querySelector('#book-list');
// console.log(bookList.innerHTML);

// bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';


///////////////////////////////// Nodes
// NOTE: Every HTML tag is a node

const banner = document.querySelector('#page-banner');

//  Node types: https://www.w3schools.com/jsref/prop_node_nodetype.asp
console.log(`#page-banner node type is: ${banner.nodeType}`);
console.log(`#page-banner node name is: ${banner.nodeName}`);
console.log(`#page-banner node has child nodes is: ${banner.hasChildNodes()}`);

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);


///////////////////////////////// Traversing nodes in DOM (1)

const bookList = document.querySelector('#book-list');

console.log('the parent node is:', bookList.parentNode);
console.log('the parent node is:', bookList.parentElement);
console.log('the parent node is:', bookList.parentElement.parentElement);

console.log('the child nodes are:', bookList.childNodes);


///////////////////////////////// Traversing nodes in DOM (2)

const bookList = document.querySelector('#book-list');

console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element sibling is:', bookList.nextElementSibling);

console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else';


///////////////////////////////// Events

// Event types: https://www.w3schools.com/jsref/dom_obj_event.asps

const deleteBtns = document.querySelectorAll('#book-list .delete');

deleteBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  });
});

const link = document.querySelector('a');

link.addEventListener('click', e => {
  e.preventDefault(); // prevent default browser behavior
  console.log(`navigation to ${e.target.textContent} was prevented`);
})


///////////////////////////////// Events Bubbling

// Events can be bubbling up to parent nodes.

const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', e => {
  if(e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});


///////////////////////////////// Interacting with form
// NOTE: Event listener is added to the form instead of the button

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});


///////////////////////////////// Style & Class

var li = document.querySelector('li:last-child');
li.getElementsByClassName.color = 'red';

// NOTE: In css is "margin-top" while is js is "marginTop".
// not hiphen in js.
li.style.marginTop = '60px'; 

console.log(li.className);
li.className = 'name2';
console.log(li.className);


///////////////////////////////// Attributes

var book = document.querySelector('li:first-child.name')
console.log(book.getAttribute('class'));
book.setAttribute('class', 'name2')
console.log(book);
console.log(book.hasAttribute('class'));
book.removeAttribute('class');


///////////////////////////////// Load DOM content
document.addEventListener('DOMContentLoaded', e => {
  // everything goes in here...
});

// NOTE: Don't have to do this if html include script(s) at the end.