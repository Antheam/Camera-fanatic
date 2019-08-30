const cameraClass = document.querySelector(".cameras");
const photoClass = document.querySelector(".photos");
const addCameraBtn = document.querySelector(".btn");

const renderForm = document.querySelector(".new");
const showFormBtn = document.querySelector("#newFrom");

const modelInput = document.querySelector("#model");
const DescriptionInput = document.querySelector("#description");

const sortBtn = document.querySelector(".sortBtn");
showFormBtn.addEventListener("click", addForm);

sortBtn.addEventListener("click", e => {
  console.log("button clicekd");
  sortCameras();
});

function sortCameras() {
  return fetch("http://localhost:3000/cameras")
    .then(resp => resp.json())
    .then(cameras => {
      const sorted = sort(cameras);

      addCameras(sorted);
    });
}

function sort(cameras) {
  cameras.data.sort(function(a, b) {
    var nameA = a.model.toUpperCase(); // ignore upper and lowercase
    var nameB = b.model.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

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
    postCamera(event);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getCameras();
});

function addCamera(camera) {
  const cam = new Camera(camera);
  cam.render();
}

function form(event) {
  event.preventDefault();
  const cameraForm = document.createElement("form");
  const imageInput = document.createElement("input");
  imageInput.placeholder = "Add image link";
  const imageButton = document.createElement("button");
  imageButton.innerText = "Save";
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
      cameras.photos.forEach(photo => showPhoto(photo));
    });
}

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
