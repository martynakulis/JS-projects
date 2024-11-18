const btn = document.querySelector('.save-btn');

function saveNote() {
  const keyNote = Date.now().toString();
  const noteText = document.querySelector('.note-area').value;
  localStorage.setItem(keyNote, noteText);
  createElement(keyNote, noteText);
}
function deleteNote(keyNote) {
  localStorage.removeItem(keyNote);
  document.querySelector(`#id${keyNote}`).remove();
}
function createElement(keyNote, noteText) {
  const div = document.createElement('div');
  div.id = 'id' + keyNote;
  div.className = 'note';
  div.textContent = noteText;
  const button = document.createElement('button');
  button.textContent = 'Usuń';
  button.className = 'delete';
  div.appendChild(button);
  document.querySelector('.notes').appendChild(div);
  button.onclick = () => {
    deleteNote(keyNote);
  };
}
function init() {
  Object.keys(localStorage).forEach(keyNote => {
    const noteText = localStorage.getItem(keyNote);
    createElement(keyNote, noteText);
  });
}

btn.addEventListener('click', saveNote);
init();
