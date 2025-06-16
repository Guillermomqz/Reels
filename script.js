
let likes = 200000;
let comments = 1000;
let shares = 300;
let views = 300000;

function toggleLike(btn) {
  btn.classList.toggle('active');
  if (btn.classList.contains('active')) {
    likes++;
  } else {
    likes--;
  }
  document.getElementById('likeCount').textContent = likes.toLocaleString();
}

function toggleComment(btn) {
  btn.classList.toggle('active');
  document.getElementById('commentInput').focus();
}

function shareVideo() {
  shares++;
  document.getElementById('shareCount').textContent = shares.toLocaleString();
  alert("Comparte este reel con tus amigos por WhatsApp o Facebook!");
}

function postComment(event) {
  event.preventDefault();
  const input = document.getElementById('commentInput');
  const text = input.value.trim();
  if (text !== '') {
    const box = document.getElementById('commentsBox');
    const p = document.createElement('p');
    p.textContent = text;
    box.appendChild(p);
    input.value = '';
    comments++;
    document.getElementById('commentCount').textContent = comments.toLocaleString();
  }
}

setInterval(() => {
  likes += Math.floor(Math.random() * 20 + 10);
  comments += Math.floor(Math.random() * 5 + 1);
  views += Math.floor(Math.random() * 50 + 25);
  document.getElementById('likeCount').textContent = likes.toLocaleString();
  document.getElementById('commentCount').textContent = comments.toLocaleString();
}, 7200000);
