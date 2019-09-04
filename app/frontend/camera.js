class Camera {
  constructor(camera) {
    this.id = camera.id;
    this.model = camera.model;
    this.description = camera.description;
  }
  render() {
    let model = document.createElement("h3");
    let description = document.createElement("h4");

    model.innerText = `${this.model}`;
    model.className = `${this.id}`;
    description.innerText = `${this.description}`;
    let showBtn = document.createElement("button");
    showBtn.innerText = "See photos";
    showBtn.dataset.id = `${this.id}`;

    showBtn.className = "ui inverted teal basic button";

    cameraClass.appendChild(model);
    cameraClass.appendChild(description);
    cameraClass.appendChild(showBtn);

    showBtn.addEventListener("click", function(e) {
      console.log("button clicked");
      getPhotos(event);
      //   imageForm(event);
    });
  }
}
