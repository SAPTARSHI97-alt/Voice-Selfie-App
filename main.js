var SpeechRecognition = window.webkitSpeechRecognition;

var recongintion = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recongintion.start();
}

recongintion.onresult = function (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="take my selfie")
    {
        console.log("taking selfie ---");
    
    speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
           save();
    },5000);
}


Webcam.set({
    width:360,
    height:250,
 image_format : 'png',
 png_quality:99
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'">';
    });
    }

    function save()
    {
        link = document.getElementById("link");
        image = document.getElementById("selfie_iamge").src ;
        link.href = image;
        link.click();
            }

