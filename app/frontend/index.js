document.addEventListener("DOMContentLoaded", () => {
  render(fetchAlbums())
});

fetchAlbums = () => {
  return fetch("http://localhost:3000/albums")
    .then(response => {
      return response.json();
    })
    .then(myJson => {
        render(JSON.stringify(myJson));
    });
};


render = (response) => {
  response.data.map(album => {
    const singleAlbum = createElement('div')
    singleAlbum.innerHTML = `
      <a href="/${album.id}">
        <h1>${album.name}</h1>
      </a>
    `
    appendElement(findElement(document, '.container'), singleAlbum)
  })
}
createElement = (element) => document.createElement(element)

appendElement = (parent, child) => parent.appendChild(child)

findElement = (location, selector) => location.querySelector(selector) src="<%=photo.image_link %>">

<%=link_to 'See all albums',albums_path%>
<%@albums.each do |album|%>
<%=link_to album.name, album_path(album)%><br>
            <%end%>

        {"data": [{"id": 1,"name":"holiday","user_id":1,"camera_id":2,"created_at":"2019-08-15T20:02:29.897Z",
        "updated_at":"2019-08-15T20:02:29.897Z"},{"id": 2,"name":"greeny day","user_id":2,"camera_id":2,"created_at":
        "2019-08-15T20:02:29.902Z","updated_at":"2019-08-15T20:02:29.902Z"},{"id": 3,"name":"Day trip out","user_id":2,
            "camera_id":3,"created_at":"2019-08-15T20:02:29.907Z","updated_at":"2019-08-15T20:02:29.907Z"}]}