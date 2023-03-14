const BASE_URl = "https://intership-liga.ru";
const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const dogImg = document.querySelector(".dog-card__img");
const dogBtn = document.querySelector(".dog-card__btn");
let randomTask = "";

(function () {
  return (randomTask = Math.ceil(Math.random() * 90));
})();

// get task by id
fetch(`${BASE_URl}/tasks/${randomTask}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) =>
    res.ok ? res.json() : Promise.reject(`таск ид: ${randomTask} не найден`)
  )
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// xmlh
// const getTaskById = (url, onload, onerror) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.onload = () => {
//     if (xhr.status != 200) {
//       onerror(xhr.status);
//       return;
//     }
//     onload(xhr.response);
//   };
//   xhr.send();
// };
// getTaskById(
//   `${BASE_URl}/tasks/${randomTask}`,
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(`ошибка код:${err}`);
//   }
// );

// patch task by id
fetch(`${BASE_URl}/tasks/${randomTask - 1}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "task patched",
    info: "patch",
    isImportant: false,
  }),
})
  .then((res) =>
    res.ok
      ? res.json()
      : Promise.reject(`таск ид: ${randomTask - 1} не найден для обновления`)
  )
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//xmlh
// const patchTaskById = (url, onload, onerror) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("PATCH", url, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onload = () => {
//     if (xhr.status != 200) {
//       onerror(xhr.status);
//       return;
//     }
//     onload(xhr.response);
//   };
//   xhr.send(
//     JSON.stringify({
//       name: "task patched by xhr",
//       info: "xhr patch",
//       isImportant: false,
//     })
//   );
// };
// patchTaskById(
//   `${BASE_URl}/tasks/${randomTask - 1}`,
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(`ошибка код:${err}`);
//   }
// );

// delete task by id
fetch(`${BASE_URl}/tasks/${randomTask + 1}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) =>
    res.ok
      ? res
      : Promise.reject(`таск ид: ${randomTask + 1} не найден для удаления`)
  )
  .then(() => console.log(`таск ид: ${randomTask + 1} удален`))
  .catch((err) => console.log(err));

//xmlh
// const deleteTaskById = (url, onload, onerror) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("DELETE", url, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onload = () => {
//     if (xhr.status != 200) {
//       onerror(xhr.status);
//       return;
//     }
//     onload(xhr.response);
//   };
//   xhr.send();
// };
// deleteTaskById(
//   `${BASE_URl}/tasks/${randomTask + 1}`,
//   (res) => {
//     console.log(`task id: ${randomTask + 1} deleted`);
//   },
//   (err) => {
//     console.log(`ошибка код:${err}`);
//   }
// );

// post new task
fetch(`${BASE_URl}/tasks`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "11111",
    info: "33333",
    isImportant: false,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// xmlh
// const postTask = (url, onload, onerror) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", url, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onload = () => onload(xhr.response);
//   xhr.send(
//     JSON.stringify({
//       name: "task posted by xhr",
//       info: "xhr post",
//       isImportant: false,
//     })
//   );
// };
// postTask(
//   `${BASE_URl}/tasks`,
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(`ошибка код:${err}`);
//   }
// );

// get all tasks
fetch(`${BASE_URl}/tasks`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// xmlh
// const getTasks = (url, onload, onerror) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.onload = () => {
//     if (xhr.status != 200) {
//       onerror(xhr.status);
//       return;
//     }
//     onload(xhr.response);
//   };
//   xhr.send();
// };
// getTasks(
//   `${BASE_URl}/tasks`,
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(`ошибка код:${err}`);
//   }
// );

// get dogs from api, additional task
function getDog(url) {
  fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      dogImg.src = data.message;
      dogImg.alt = "фото собаки";
    })
    .catch((err) => console.log(err));
}
getDog(DOG_URL);

dogBtn.addEventListener("click", () => {
  getDog(DOG_URL);
});
