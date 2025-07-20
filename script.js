
const notes = [
  "seni çok özledim 💘",
  "Her günüm seninle daha güzel 🌞",
  "sen benim herşeyimsiinn 😍"
];

function showNote(index) {
  const noteDiv = document.getElementById('note');
  noteDiv.innerText = notes[index];
  noteDiv.style.display = 'block';
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';

  // Rastgele konum ve hız
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 10 + 20 + 'px';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Her 300ms'de bir yeni kalp oluştur
setInterval(createHeart, 300);

function showNote(index) {
  const noteDiv = document.getElementById('note');
  noteDiv.innerText = notes[index];
  noteDiv.style.display = 'block';

  // Kalp yağmuru başlat
  startHeartRain();
}

let heartInterval;
function startHeartRain() {
  if (heartInterval) return; // zaten başladıysa tekrar başlatma
  heartInterval = setInterval(createHeart, 300);
}
