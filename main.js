leftwrist=0;
rightwrist=0;
difference=0;
nose= ;
function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500) ;
modelattacher = ml5.poseNet(video , modelLoaded);
}
function modelLoaded() {
    console.log("model is loaded mam/sir");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftwrist = results[0].pose.leftWrist.x;
        rightwrist = results[0].pose.rightWrist.x;
difference = Math.floor(leftwrist-rightwrist);

    }
}
function draw() {
 backgrounnd("white");
 Fill("red");
 textSize(difference);
 text("ayush is best",50,400);

}