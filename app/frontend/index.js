const cameraClass = document.querySelector(".cameras");
const photoClass = document.querySelector(".photos");
const addCameraBtn = document.querySelector("button");
const modelMakeInput = document.querySelector("input[name=name]");
const descriptionInput = document.querySelector("input[name=description]");

addCameraBtn.addEventListener("click", function(e) {
  formSubmit(event);
});

function formSubmit(event) {
  event.preventDefault();
  console.log("button clicked");
  postcamera();
}

function postcamera() {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user_id: 1,
      model: `${modelMakeInput.value}`,
      description: `${descriptionInput.value}`
    })
  };
  return fetch("http://localhost:3000/cameras", configurationObject).then(
    getCameras()
  );
}

document.addEventListener("DOMContentLoaded", () => {
  getCameras();
});

function getCameras() {
  return fetch("http://localhost:3000/cameras")
    .then(resp => resp.json())
    .then(cameras => addCameras(cameras));

  function addCameras(cameras) {
    cameraClass.innerHTML = "";
    cameras.data.forEach(camera => addCamera(camera));
  }

  function addCamera(camera) {
    const model = document.createElement("h3");
    const description = document.createElement("h4");

    model.innerText = `${camera.model}`;
    description.innerText = `${camera.description}`;
    const showBtn = document.createElement("button");
    showBtn.innerText = "See photos";
    showBtn.dataset.id = `${camera.id}`;

    cameraClass.appendChild(model);
    cameraClass.appendChild(description);
    cameraClass.appendChild(showBtn);

    showBtn.addEventListener("click", function(e) {
      getPhotos(event);
    });
  }

  function fetchPhotos() {
    return fetch("http://localhost:3000/photos").then(resp => resp.json());
  }

  function getPhotos(event) {
    event.preventDefault();
    fetchPhotos().then(pics => {
      photoClass.innerHTML = "";
      pics.data.photos
        .filter(photo => photo.camera_id == event.target.dataset.id)
        .forEach(photo => showPhoto(photo));
    });
  }

  function showPhoto(photo) {
    const image = document.createElement("img");
    image.src = `${photo.image_link}`;
    image.height = "150";
    photoClass.appendChild(image);
  }
}
