var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "say something!!!";
    recognition.start();
}

recognition.onresult = function run(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    if (Content == "take my selfie") {
        speak()
    }

}

function speak() {
    var synth = window.speechSynthesis
    speak_data = "Taking your selfie in 5 seconds";
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout(function () {
        imageid = "selfie1"
        takesnapshot()
        speak_data = "Taking your selfie in 10 seconds";
        var UtterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(UtterThis);
    }, 5000)
    setTimeout(function () {
        imageid = "selfie2"
        takesnapshot()
        speak_data = "Taking your selfie in 15 seconds";
        var UtterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(UtterThis);
    }, 10000)
    setTimeout(function () {
        imageid = "selfie3"
        takesnapshot()
    }, 15000)
}


Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
camera = document.getElementById("camera");

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        if (imageid == "selfie1") {
            document.getElementById('result_1').innerHTML = '<img id="s1" src="' + data_uri + '"/>';
        }
        if (imageid == "selfie2") {
            document.getElementById('result_2').innerHTML = '<img id="s2" src="' + data_uri + '"/>';
        }
        if (imageid == "selfie3") {
            document.getElementById('result_3').innerHTML = '<img id="s3" src="' + data_uri + '"/>';
        }
    });
}