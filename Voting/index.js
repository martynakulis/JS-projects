const votingForm = document.querySelector('.voting-form');
const voteOptions = document.querySelector('.vote-options');
const btnSubmit = document.querySelector('.btn-submit');
const userName = document.querySelector('.user-name');
const userId = document.querySelector('.user-id');
const resultDiv = document.querySelector('.results');

const validUserIds = new Map([
  ['Romek', '12345678'],
  ['Staś', '11111111'],
  ['Bartek', '12341234'],
  ['Kamila', '00000001'],
]);
const voteCounts = new Map([
  voteCounts.set('Opcja 1', 0),
  voteCounts.set('Opcja 2', 0),
  voteCounts.set('Opcja 3', 0),
]);
const votedUsers = new Set();

const voting = e => {
  e.preventDefault();
  const user = userName.value;
  const id = userId.value;
  const select = voteOptions.value;
  if (validUserIds.get(user) === id) {
    if (votedUsers.has(user)) {
      alert('już głosowałeś!');
    } else {
      votedUsers.add(user);
      voteCounts.set(select, voteCounts.get(select) + 1);
    }
    alert('mam Cię na liście!');
  } else {
    alert('nieprawidłowe dane!');
  }

  updateResult();
};

const updateResult = () => {
  let output = '';
  for (const [option, count] of voteCounts) {
    output += `${option} : ${count} głosów <br>`;
  }
  resultDiv.innerHTML = output;
};
updateResult();
votingForm.addEventListener('submit', voting);
