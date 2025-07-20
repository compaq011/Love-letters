
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
