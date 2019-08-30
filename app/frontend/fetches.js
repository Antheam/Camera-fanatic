function getCameras() {
  return fetch("http://localhost:3000/cameras").then(resp => resp.json());
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
    resp => {
      if (resp.status == 500) {
        getCameras();
      } else {
        getCameras();
      }
    }
  );
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
