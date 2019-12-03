// delete book
const list = document.querySelector('#book-list ul');
list.addEventListener('click', e => {
  
  if(e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }

});


// add book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // create element
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

});


// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', e => {
  
  if(hideBox.checked) {
    list.style.display = 'none';
  } else {
    list.style.display = 'initial';
  }

});


// search book
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', e => {
  
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');

  Array.from(books).forEach(book => {
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) == -1) {
      book.style.display = 'none';
    } else {
      book.style.display = 'block';
    }
  });

});


// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', e => {
  
  if(e.target.tagName == 'LI') {
    // data attribute (html: data-target) (js: dataset)
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(panel => {
      if(panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }

});
