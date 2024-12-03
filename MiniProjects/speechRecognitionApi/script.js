const text = document.getElementById('text');

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';

rec.continuous = true;

rec.onresult = function (e) {
  const acceptedColors = ['red', 'green', 'blue'];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    acceptedColors.includes(script)
      ? (document.body.style.backgroundColor = script)
      : alert('Please say correct color');
  }
};

rec.start();
