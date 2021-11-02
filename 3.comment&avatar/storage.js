document.addEventListener('DOMContentLoaded', function (event) {
  let name = localStorage.getItem('name');
  if (name != null) {
    document.getElementById("author").value = name;
  }
  let avatar = localStorage.getItem('ava');
  if (avatar != null) {
    document.getElementById("avatar").src = `data:image/png;base64,${avatar}`;
  }
});

document.getElementById('file').addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
    localStorage.setItem('ava', base64String);
    document.getElementById("avatar").src = `data:image/png;base64,${base64String}`;
  };
  reader.readAsDataURL(file);
})


function sendMessages(author, comment) {
  document.getElementById('chat').innerHTML += `
  <span class='author'>${author}</span>:<span class='comment'>${comment}</span></br>
  `;
}

function checkMessage() {
  let author = document.getElementById("author").value;
  let comment = document.getElementById("comment").value;

  if (localStorage.getItem('name') === null) {
    localStorage.setItem('name', author);
  }

  sendMessages(author, comment);

}

function clearAll () {
  localStorage.clear();
}

document.getElementById('btn').onclick = checkMessage;

document.getElementById('clear').onclick = clearAll;



