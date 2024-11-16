const text = document.getElementById('text');

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';

rec.continuous = false;

rec.onresult = function (e) {
  //   console.log(e.results[0][0].transcript);

  text.innerText = e.results[0][0].transcript;
};

rec.start();
