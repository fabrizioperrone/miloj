const videos = [
  {
    title: "BZRP Music Sessions #57",
    url: "https://www.youtube.com/watch?v=UgBr4dGzKzI",
    thumbnail: "video1.jpg"
  },
  {
    title: "Rara Vez",
    url: "https://www.youtube.com/watch?v=Pgz-rjzAlZY",
    thumbnail: "video2.jpg"
  },
  {
    title: "Milagrosa",
    url: "https://www.youtube.com/watch?v=3WAVcbycpRw",
    thumbnail: "video3.jpg"
  }
];

const gallery = document.getElementById("videoGallery");

videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "video-card";

  card.innerHTML = `
    <a href="${video.url}" target="_blank">
      <img src="${video.thumbnail}" alt="${video.title}" />
    </a>
    <h3>${video.title}</h3>
  `;

  gallery.appendChild(card);
});
