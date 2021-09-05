i = "0";
Chill_Bro = "";
Chumma_Kizhi = "";
Vaathi_Coming = "";
Kutti_Story = "";
Verithanam = "";
Enjoy_Enjaami = "";
leftWristX = "0";
leftWristY = "0";
rightWristX = "0";
rightWristX = "0";
ScorerightWrist = "0";
ScoreleftWrist = "0";
SongPlaying = " ";
function preload() {
  Chill_Bro = loadSound("Chill-Bro (2).mp3");
  Chumma_Kizhi = loadSound("Chumma-Kizhi.mp3");
  Vaathi_Coming = loadSound("Vaathi-Coming.mp3");
  Kutti_Story = loadSound("Kutti-Story.mp3");
  Verithanam = loadSound("Verithanam.mp3");
  Enjoy_Enjaami = loadSound("Enjoy-Enjaami.mp3");

}

function setup() {
    canvas = createCanvas(400, 400);
    background(153);
    canvas.position(480, 250);
    
    cam = createCapture(VIDEO);
    cam.hide();

    Posenet = ml5.poseNet(cam, modelloded);
    Posenet.on('pose', gotposes);
}

function draw() {
    image(cam, 0, 0, 400, 400);

    if (ScoreleftWrist > 0.2) {
    fill("red");
    circle(leftWristX, leftWristY, 30);

    NewleftWristY = floor(Number(leftWristY));
    Volume = NewleftWristY / 500;
    Chill_Bro.setVolume(Volume);
    Chumma_Kizhi.setVolume(Volume);
    Vaathi_Coming.setVolume(Volume);
    Kutti_Story.setVolume(Volume);
    Verithanam.setVolume(Volume);
    Enjoy_Enjaami.setVolume(Volume);
    document.getElementById("Volume").innerHTML = "Volume : " + Volume;
    }

    if (ScorerightWrist > 0.2) {
        fill("red");
    circle(rightWristX, rightWristY, 30);
    if (rightWristY < 100) {
        Chill_Bro.rate(0.5);
        Chumma_Kizhi.rate(0.5);
        Vaathi_Coming.rate(0.5);
        Kutti_Story.rate(0.5);
        Verithanam.rate(0.5);
        Enjoy_Enjaami.rate(0.5);
        document.getElementById("Speed").innerHTML = "Speed : 0.5";
    }
    else if (rightWristY > 100 && rightWristY < 200) {
        Chill_Bro.rate(1);
        Chumma_Kizhi.rate(1);
        Vaathi_Coming.rate(1);
        Kutti_Story.rate(1);
        Verithanam.rate(1);
        Enjoy_Enjaami.rate(1);
        document.getElementById("Speed").innerHTML = "Speed : 1";
    }
    else if (rightWristY > 200 && rightWristY < 300) {
        Chill_Bro.rate(1.5);
        Chumma_Kizhi.rate(1.5);
        Vaathi_Coming.rate(1.5);
        Kutti_Story.rate(1.5);
        Verithanam.rate(1.5);
        Enjoy_Enjaami.rate(1.5);
        document.getElementById("Speed").innerHTML = "Speed : 1.5";
    }
    else if (rightWristY > 300 && rightWristY < 400) {
        Chill_Bro.rate(2);
        Chumma_Kizhi.rate(2);
        Vaathi_Coming.rate(2);
        Kutti_Story.rate(2);
        Verithanam.rate(2);
        Enjoy_Enjaami.rate(2);
        document.getElementById("Speed").innerHTML = "Speed : 2";
    }
    else if (rightWristY > 400 && rightWristY < 500) {
        Chill_Bro.rate(2.5);
        Chumma_Kizhi.rate(2.5);
        Vaathi_Coming.rate(2.5);
        Kutti_Story.rate(2.5);
        Verithanam.rate(2.5);
        Enjoy_Enjaami.rate(2.5);
        document.getElementById("Speed").innerHTML = "Speed : 2.5";
    }
    }
}

function modelloded(){
    console.log("loded!!!");
}

function gotposes(results){
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        ScoreleftWrist = results[0].pose.keypoints[9].score;
        ScorerightWrist = results[0].pose.keypoints[10].score;
    }
}

function chill_bro(){
    Chill_Bro.play();
    Song.setVolume(0.5);
    Song.Rate(1);
    SongPlaying.Stop();
    SongPlaying = Chill_Bro;
}
function chumma_kizhi(){
    Chumma_Kizhi.play();
    Song.setVolume(0.5);
    Song.Rate(1);
    SongPlaying = Chumma_Kizhi;
}
function vaathi_coming(){
    Vaathi_Coming.play();
    Song.setVolume(0.5);
    Song.Rate(1);
    SongPlaying = Vaathi_Coming;
}
function kutti_story(){
    Kutti_Story.play();
    Song.setVolume(0.5);
    Song.Rate(1);
    SongPlaying = Kutti_Story;
}
function verithanam(){
    Verithanam.play();
    Song.setVolume(0.5);
    Song.Rate(1);
    SongPlaying = Verithanam;
}
function enjoy_enjaami(){
    Enjoy_Enjaami.play();
    Song.setVolume(0.5);
    Song.Rate(1);
    SongPlaying = Enjoy_Enjaami;
}