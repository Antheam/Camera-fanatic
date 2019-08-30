class Camera {
  constructor(camera) {
    this.id = camera.id;
    this.model = camera.model;
    this.description = camera.description;
  }
  render() {
    const model = document.createElement("h3");
    const description = document.createElement("h4");

    model.innerText = `${this.model}`;
    description.innerText = `${this.description}`;
    const showBtn = document.createElement("button");
    showBtn.innerText = "See photos";
    showBtn.dataset.id = `${this.id}`;
    showBtn.className = "ui inverted teal basic button";

    cameraClass.appendChild(model);
    cameraClass.appendChild(description);
    cameraClass.appendChild(showBtn);

    showBtn.addEventListener("click", function(e) {
      console.log("button clicked");
      getPhotos(event);
    });
  }
}
