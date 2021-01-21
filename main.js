function setup() {
  canvas = createCanvas(250, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelloaded);
}

function draw(){
  image(video,0,0,250,250);
  classifier.classify(video,gotresult);
}

function modelloaded(){
  console.log("your model has been loaded!");
}

function gotresult(error,result){
  if(error){
    console.log(error);
  }
  else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML=result[0].label;
    document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(1)*100+"%";
  }
}