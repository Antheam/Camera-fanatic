let cameraClass = document.querySelector(".cameras");
const photoClass = document.querySelector(".photos");
const addCameraBtn = document.querySelector(".btn");

const renderForm = document.querySelector(".new");
const showFormBtn = document.querySelector("#newFrom");

const modelInput = document.querySelector("#model");
const DescriptionInput = document.querySelector("#description");

const sortBtn = document.querySelector("#sortBtn");
showFormBtn.addEventListener("click", addForm);

sortBtn.addEventListener("click", e => {
  console.log("button clicekd");
  sortCameras();
});

function sortCameras() {
  return fetch("http://localhost:3000/cameras")
    .then(resp => resp.json())
    .then(cameras => {
      let sorted = sort(cameras);
    });
}

function sort(cameras) {
  cameras.data.sort(function(a, b) {
    let nameA = a.model.toUpperCase(); // ignore upper and lowercase
    let nameB = b.model.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  addCameras(cameras);
}

function addForm() {
  let form = document.createElement("form");
  let inputOne = document.createElement("input");
  let labelOne = document.createElement("label");
  let inputTwo = document.createElement("input");
  let labelTwo = document.createElement("label");
  let button = document.createElement("button");
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
  let cam = new Camera(camera);
  cam.render();
}

// function form(event) {
//   event.preventDefault();
//   let cameraForm = document.createElement("form");
//   let imageInput = document.createElement("input");
//   imageInput.placeholder = "Add image link";
//   let imageButton = document.createElement("button");
//   imageButton.innerText = "Save";
//   imageButton.type = "submit";
//   photoClass.append(cameraForm);
//   photoClass.append(imageInput);
// }

function getPhotos(event) {
  event.preventDefault();

  fetch(`http://localhost:3000/cameras/${event.target.dataset.id}`)
    .then(resp => resp.json())
    .then(cameras => {
      photoClass.innerHTML = "";
      cameras.photos.forEach(photo => showPhoto(photo));
      appendNewPhotoForm(event.target.dataset.id);
    });
}

function appendNewPhotoForm(cameraId) {
  let imageForm = document.createElement("form");
  imageForm.className = "ui form";
  imageForm.id = "moveForm";

  let imageInput = document.createElement("input");
  imageInput.placeholder = "Add image link";
  imageInput.name = "image";
  imageInput.className = "field";
  imageInput.id = "photoForm";
  let imageB = document.createElement("button");
  imageB.innerText = "Save";
  imageB.type = "submit";
  imageB.className = "mini ui button";

  // button.type = "submit";
  imageForm.append(imageInput);
  imageForm.append(imageB);
  document.body.append(imageForm);

  imageForm.addEventListener("submit", e => {
    e.preventDefault();
    var newInput = document.getElementById("photoForm");
    console.log("button clicked");
    console.log(`${newInput.value}`);
    postPic((input = newInput.value), cameraId);
  });
}

// function imageFormorm(event) {
//   event.preventDefault();

//   let imageF = document.createElement("form");
//   let imageInput = document.createElement("input");
//   imageI.placeholder = "Save image link";
//   let imageB = document.createElement("button");
//   imageB.innerText = "Save";
//   // button.type = "submit";
//   photoClass.prepend(imageF);
//   photoClass.prepend(imageI);
//   photoClass.prepend(imageB);
// }

function showPhoto(photo) {
  let image = document.createElement("img");
  image.src = `${photo.image_link}`;
  image.height = "170";
  photoClass.appendChild(image);
}

// //-----------fetches--------------

function getCameras() {
  fetch("http://localhost:3000/cameras")
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp.data);
      addCameras(resp);
    });
}
function addCameras(cameras) {
  cameraClass.innerHTML = "";
  cameras.data.forEach(camera => addCamera(camera));
}

function postCamera(event) {
  let configurationObject = {
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

function postPic(input, cameraId) {
  let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      camera_id: `${cameraId}`,
      image_link: `${input}`,
      album_id: 2
    })
  };
  return fetch("http://localhost:3000/photos", configurationObject).then(
    resp => {
      getPhotos(resp);
    }
  );
}
