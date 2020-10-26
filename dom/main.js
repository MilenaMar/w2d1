// // console.log(document);
// // console.log(document.body);
// // console.log(document.getElementsByTagName("h1")[0].innerText);

// // console.log(document.getElementById("h2").innerText);
// console.log(document.querySelector("h2"));
// console.log(document.querySelector("h2"));
// console.log(document.querySelectorAll("h2"));
// // console.log(document.querySelector("#h2"));
const firstH2 = document.querySelector("h2");
firstH2.innerText = "This one does NOT have an ID";

const todoList = document.querySelector(".todo-list");

const tasks = [
  "take out trash",
  "study javascript",
  "make sure i took out the trash, because got super exicted studying js",
];

// for (let task of tasks) {
// const listItem = document.createElement("li");
// listItem.innerText = tasks[0];
// todoList.appendChild(listItem);
// }
// const secondListItem = document.createElement("li");

// secondListItem.innerText = tasks[1];

// // todoList.appendChild(listItem);
// todoList.appendChild(secondListItem);

// const listTodosAgain = document.querySelectorAll("li");

// for (let i = 0; i < listTodosAgain.length; i++) {
//   console.log(listTodosAgain[i].innerText);
// }
// for (let li of listTodosAgain) {
//   console.log(li.innerText);
// }

// const allLists = Array.from(listTodosAgain).map(function (element) {
//   return element;
// });
// console.log("allLists:", allLists);

// listTodosAgain.forEach(function (element) {
//   console.log(element.innerText);
// });

const button = document.querySelector("button");
let clicks = 0;

button.addEventListener("click", function (event) {
  console.log("event:", event);
  const currentButton = event.target;
  clicks += 1;
  const newText = `Clicked here: ${clicks} times`;
  currentButton.innerText = newText;
});

const inputTodoButton = document.querySelector(".inputTodo");
// console.log("inputTodoButton:", inputTodoButton);

inputTodoButton.addEventListener("click", function () {
  const input = document.querySelector("input");
  const newTask = document.createElement("li");
  //   newTask.innerHTML = input.value;
  //   todoList.appendChild(newTask);
  todoList.innerHTML += `<li class="list-item">${input.value}</li>`;
  input.value = "";
});

console.clear();

const thatDiv = document.querySelector("div");
console.log("thatDiv:", thatDiv);
thatDiv.classList.add("bananas");
// thatDiv.classList.remove("bananas");

const secondButton = document.querySelector(".second");

secondButton.addEventListener("click", function () {
  //   if (thatDiv.classList.contains("bananas")) {
  //     thatDiv.classList.remove("bananas");
  //   } else {
  //     thatDiv.classList.add("bananas");
  //   }
  thatDiv.classList.toggle("bananas");
});
