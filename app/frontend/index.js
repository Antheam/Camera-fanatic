const cameraClass = document.querySelector(".cameras");
const photoClass = document.querySelector(".photos");
const addCameraBtn = document.querySelector(".btn");

const renderForm = document.querySelector(".new");
const showFormBtn = document.querySelector("#newFrom");

const modelInput = document.querySelector("#model");
const DescriptionInput = document.querySelector("#description");

showFormBtn.addEventListener("click", addForm);

function addForm() {
  const form = document.createElement("form");
  const inputOne = document.createElement("input");
  const labelOne = document.createElement("label");
  const inputTwo = document.createElement("input");
  const labelTwo = document.createElement("label");
  const button = document.createElement("button");
  button.innerText = "Add camera";

  labelOne.innerText = "Model Make";
  inputOne.placeholder = "Model Make";
  inputOne.id = "model";

  labelTwo.innerText = "Description";
  inputTwo.placeholder = "Description";
  inputTwo.id = "description";
  button.type = "submit";

  form.append(labelOne);
  form.append(inputOne);
  form.append(labelTwo);
  form.append(inputTwo);
  form.append(button);
  renderForm.append(form);
  showFormBtn.removeEventListener("click", addForm);

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("button clicked");
    postCamera(event); //THIS EVT MUST BE PASSED DOWN TO THE POST method AS IT CONTAINS THE DATA OF THE USER INPUT
  });
}

// function toggleForm() {
//   if (form.style.display === "none") {
//     form.style.display = "block";
//   } else {
//     form.style.display = "none";
//   }
// }

// // inputCameraId.type = "hidden";
// // inputCameraId.value = `${camera.id}`;

document.addEventListener("DOMContentLoaded", () => {
  getCameras();
});

function addCamera(camera) {
  const model = document.createElement("h3");
  const description = document.createElement("h4");

  model.innerText = `${camera.model}`;
  description.innerText = `${camera.description}`;
  const showBtn = document.createElement("button");
  showBtn.innerText = "See photos";
  showBtn.dataset.id = `${camera.id}`;
  showBtn.className = "ui inverted teal basic button";

  cameraClass.appendChild(model);
  cameraClass.appendChild(description);
  cameraClass.appendChild(showBtn);

  showBtn.addEventListener("click", function(e) {
    console.log("button clicked");
    e.preventDefault();
    form(event);

    getPhotos(event);
  });
}

function form(event) {
  // event.preventDefault();
  const cameraForm = document.createElement("form");
  const imageInput = document.createElement("input");
  imageInput.placeholder = "Add image link";
  const imageButton = document.createElement("button");
  imageButton.type = "submit";
  photoClass.append(cameraForm);
  photoClass.append(imageInput);
}
function getPhotos(event) {
  event.preventDefault();

  fetch(`http://localhost:3000/cameras/${event.target.dataset.id}`)
    .then(resp => resp.json())
    .then(cameras => {
      photoClass.innerHTML = "";
      cameras.data.photos.forEach(photo => showPhoto(photo));
    });
}
// fetchPhotos().then(pics => {
//   photoClass.innerHTML = "";
//   pics.data.photos
//     .filter(photo => photo.camera_id == event.target.dataset.id)
//     .forEach(photo => showPhoto(photo));
// });
// }
// function getPhotos(event) {
//   event.preventDefault();
//   fetchPhotos().then(pics => {
//     photoClass.innerHTML = "";
//     pics.data.photos
//       .filter(photo => photo.camera_id == event.target.dataset.id)
//       .forEach(photo => showPhoto(photo));
//   });
// }

function showPhoto(photo) {
  const image = document.createElement("img");
  image.src = `${photo.image_link}`;
  image.height = "170";
  photoClass.appendChild(image);
}

// //-----------fetches--------------

function getCameras() {
  return fetch("http://localhost:3000/cameras")
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp.data);
      addCameras(resp.data);
    });
}
function addCameras(cameras) {
  cameraClass.innerHTML = "";
  cameras.forEach(camera => addCamera(camera));
}

function postCamera(event) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user_id: 1,
      model: `${event.target.model.value}`,
      description: `${event.target.description.value}`
    })
  };
  return fetch("http://localhost:3000/cameras", configurationObject).then(
    resp => {
      getCameras();
    }
  );
}

// function fetchPhotos() {
//   return fetch("http://localhost:3000/photos").then(resp => resp.json());
// }

// function getPhotos(event) {
//   event.preventDefault();
//   fetchPhotos().then(pics => {
//     photoClass.innerHTML = "";
//     pics.data.photos
//       .filter(photo => photo.camera_id == event.target.dataset.id)
//       .forEach(photo => showPhoto(photo));
//   });
// }
