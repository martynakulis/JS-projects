const RapidApi_Key = '6bd397f523msh87789cb429b35bcp1cefdfjsna6c3841d19b8';
const getFace = async event => {
  event.preventDefault();
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value;
  const ethnicity = document.getElementById('ethnicity').value;
  const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RapidApi_Key,
      'X-RapidAPI-Host': 'face-studio.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.blob();
    const image = URL.createObjectURL(result);
    const imageDOM = document.createElement('img');
    const parDOM = document.createElement('p');
    parDOM.textContent = url;
    imageDOM.src = image;
    document.body.appendChild(parDOM);
    document.body.appendChild(imageDOM);
  } catch (error) {
    console.error(error);
  }
};

document.querySelector('button').addEventListener('click', getFace);
