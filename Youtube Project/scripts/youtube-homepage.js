import contents from "../data/contents.js";

let html = '';

contents.forEach(content => {
    html += `
    <div class="video-container">
      <a class="thumbnail-container" href=${content["link"]}>
        <img src=${content["thumbnail"]} alt="" class="thumbnail">
        <div class="time-duration">${content["time-duration"]}</div>
      </a>
      <div class="video-details">
        <div class="author-picture">
          <img src=${content["channel-picture"]} alt="" class="author-dp">
        </div>
        <div class="video-information">
          <a href=${content["link"]} class="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</a>
          <div class="video-add-details">
            <div class="author-name">${content["channel-name"]}</div>
            <div class="views-date">${content["video-views-date"]["views"]} views <strong>&middot;</strong> ${content["video-views-date"]["date"]} ago</div>
          </div>
        </div>
      </div>
    </div>
    `
})

document.querySelector('.video-content').innerHTML = html