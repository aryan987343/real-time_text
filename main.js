function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 480);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');

    text('PETER', 50, 400);

    document.getElementById("square_side").innerHTML = "width and height of the square will be = " + difference + " px";
}

function modelLoaded() {
    console.log("model is loaded");
}

rightWristX = 0;
leftWristX = 0;

difference = 0;
function gotPoses(result) {
    if(result.length > 0) {
        console.log(result);

       rightWristX = result[0].pose.rightWrist.x;
        leftWristX = result[0].pose.leftWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("rightwristX = " + rightWristX + " leftwristX = " + leftWristX + "difference = " + difference);
    }
}