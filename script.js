
window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/image.png");
    bannerHeading.textContent = "On Repeat";
    bannerText.textContent = "Songs you love right now!";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/banner1.svg)";
        bannerImage.setAttribute("src", "images/image.png");
        bannerHeading.textContent = "On Repeat";
        bannerText.textContent = "Songs you love right now!";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/image 1.png");
            bannerHeading.textContent = "Chinnama Chilakamma";
            bannerText.textContent = "By A.R.Rahman";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/b02.JPG)";
            bannerImage.setAttribute("src", "images/image 2.png");
            bannerHeading.textContent = "Alaikadal";
            bannerText.textContent = "By A.R.Rahman";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/b03.JPG)";
            bannerImage.setAttribute("src", "images/image 3.png");
            bannerHeading.textContent = "Sunflower-Spiderman:Into The Spider-Verse";
            bannerText.textContent = "Post Malone,Swae Lee";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/b04.JPEG)";
            bannerImage.setAttribute("src", "images/image 4.png");
            bannerHeading.textContent = "cowboy like me";
            bannerText.textContent = "By Taylor Swift";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/b04.JPEG)";
            bannerImage.setAttribute("src", "images/image 5.png");
            bannerHeading.textContent = "gold rush";
            bannerText.textContent = "By Taylor Swift";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/b06.png)";
            bannerImage.setAttribute("src", "images/image 6.png");
            bannerHeading.textContent = "Yela Yelo";
            bannerText.textContent = "By Bharath Sankar,Arivu";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/b07.png)";
            bannerImage.setAttribute("src", "images/image 7.png");
            bannerHeading.textContent = "Simple Song";
            bannerText.textContent = "By The Shins";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/b08.png)";
            bannerImage.setAttribute("src", "images/image 8.png");
            bannerHeading.textContent = "the lakes";
            bannerText.textContent = "By Taylor Swift";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/b02.JPG)";
            bannerImage.setAttribute("src", "images/image 9.png");
            bannerHeading.textContent = "Idhu Varai";
            bannerText.textContent = "By Yuvan Shanakar Raja";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/b010.png)";
            bannerImage.setAttribute("src", "images/image 10.png");
            bannerHeading.textContent = "Shake It Out";
            bannerText.textContent = "By Florence + The Machine";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}