
// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
const addBtn = document.getElementById('addBtn');
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("task-list").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

const datetimeElement = document.getElementById('datetime');

function updateDateTime() {
  const now = new Date();

  // Define options for custom formatting
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',  
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',  // 2-digit second (e.g., "25")
  };

  const dateTimeString = now.toLocaleString('en-UK', options); // Customize locale and options as needed

  datetimeElement.textContent = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 1000);
