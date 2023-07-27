var images = [
  'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW17ErZ?ver=7bd6&h=684',
  'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqBtUuRYX3bRqYqVOCGPswYaehOG_u9BsDkej34ZcwQ38YZHq15xN.JMelc042Wk5jTeC3NliLTi_WhZKHGnsvgiqRm_HtAQi4lO.3zzQ0R2DEe_WnwMGIgJRfBpGe9b_9hWJ9_W5hf50LcsxFcssnmQ--&h=560',
  'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpq3it6DnBbiqkCjMk.UEaChR1P.0B4zMHnl1GIXjIOI_7poNa5HUa7qEi3vj5AyvnSDn36gYYlVH4UFaBsrb2g.NLsX.fMXWJ9ix5hGdI2TdH0_Ko8xb2Uno_TcMrmR0qY&h=684',
  'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqn03DUW2GlzdGS8OvpWFTmj9ekQLdIoWUlZ9y8OKHW065RnOo1JPXPZdj16YNxB9VcY1lZpQ_tUEpfn4ttrCuwkKOfpeFb9pT_W90ycnItaCYG0iB08gdoFt1f2ghDDwOU6rZjUfIU.0eNJ__MnsKrjcBdCIJKuLrT7.gdxvfemY-&h=684',
  'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW13AxP?ver=860e&h=684',
  'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqMqBzWHPc7LQ2bulnC3iTAH88BUfe0cVEvOGiiDJgH1Be5VT9kjZ4wfH0ogXeX0ovM6YVMP9WZg6x_DCwqShT0KvuHEzDmeU4.jInLfTygJrOtLsluVWPuuVSNF1vvmvrmWabeuvs_.oRFIG.n7Drwg--&h=684'
];

var headingTexts = ['PC Game Pass', 'LinkedIn', 'Watch the home premier','Ultimate savings on games','Microsoft 365','Top apps of 2023 you need to get'];
var paragraphTexts = ['Discover your next favorite game','Find your next opportunity', 'Worlds collide','Ultimate sale ends 7/31','Premium Office apps, extra cloud storage and more—all in one convenient subscription','Get ahead with these highly-rated apps'];

$(document).ready(function() {
  var carousel = document.getElementById('carousel');
  
  images.forEach(function(image, index) {
    var spotlightItem = document.createElement('div');
    spotlightItem.className = 'spotlight-item';
    var innerDiv = document.createElement('div');

    if (index === 0) {
      spotlightItem.className += ' big';
      innerDiv.className = 'big';
    } else {
      spotlightItem.className += ' small';
      innerDiv.className = 'small';
    }
    spotlightItem.appendChild(innerDiv);
    
    

    var shadowLayer = document.createElement('div');
    shadowLayer.className = 'shadow-layer layer';
    shadowLayer.id = 'shadow-layer-' + index;
    innerDiv.appendChild(shadowLayer);

    var bottomLayer = document.createElement('div');
    bottomLayer.className = 'bottom-layer layer';
    bottomLayer.id = 'bottom-layer-' + index;
    innerDiv.appendChild(bottomLayer);

    var middleLayer = document.createElement('div');
    middleLayer.className = 'middle-layer layer';
    middleLayer.id = 'middle-layer-' + index;
    innerDiv.appendChild(middleLayer);

    var topLayer = document.createElement('div');
    topLayer.className = 'top-layer layer';
    topLayer.id = 'top-layer-' + index;
    innerDiv.appendChild(topLayer);

    var textLayer = document.createElement('div');
    textLayer.className = 'text-layer';
    textLayer.id = 'text-layer-' + index;
    
    var heading = document.createElement('h2');
    heading.textContent = headingTexts[index];
    heading.className = 'heading';
    heading.id = 'heading-' + index;
    textLayer.appendChild(heading);
    
    var subTitle = document.createElement('p');
    subTitle.textContent = paragraphTexts[index];
    textLayer.appendChild(subTitle);
    subTitle.className = 'sub-title';
    subTitle.id = 'sub-title-' + index;
    
    innerDiv.appendChild(textLayer);
    
    carousel.appendChild(spotlightItem);
  });

  
  function loadImageAndColor(index) {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    
    img.onload = function() {
      var colorThief = new ColorThief();
      var color = colorThief.getColor(img);
      var palette = colorThief.getPalette(img, 2); // Getting 2 dominant colors
    var color = colorThief.getColor(img);
    var color1 =
      "rgb(" + palette[0][0] + "," + palette[0][1] + "," + palette[0][2] + ")";
    var color2 =
      "rgb(" + palette[1][0] + "," + palette[1][1] + "," + palette[1][2] + ")";
    var rgbColor = "linear-gradient(" + color1 + ", " + color2 + ")";
      var shadowLayer = document.getElementById('shadow-layer-' + index);
      var bottomLayer = document.getElementById('bottom-layer-' + index);
      var middleLayer = document.getElementById('middle-layer-' + index);
      var topLayer = document.getElementById('top-layer-' + index);

      var spotlightItem = document.getElementsByClassName('spotlight-item')[index];
      if(spotlightItem.classList.contains('small')){
        middleLayer.style.background = color1;
      }else if (spotlightItem.classList.contains('big')){
        middleLayer.style.background = 'linear-gradient(to right, ' + color1 + ', ' + ' 25%, rgba(255,255,255,0))';
      }
      // shadowLayer.style.background = 'linear-gradient(' + rgbColor + ', rgba(' + color1 + ',' + color2 + ',' + color[2] + ', 0.1))';
      shadowLayer.style.boxShadow = '0px 0px 40px 12px ' + color1;

      // shadowLayer.style.background = 'url(' + images[index] + ') no-repeat center';
      bottomLayer.style.background = 'url(' + images[index] + ') no-repeat center';
      // middleLayer.style.background = 'linear-gradient(to right, ' + color1 + ', ' + ' 25%, rgba(255,255,255,0))';
      topLayer.style.background = 'url(' + images[index] + ') no-repeat center';

      shadowLayer.style.backgroundSize = 'cover';
      bottomLayer.style.backgroundSize = 'cover';
      topLayer.style.backgroundSize = 'cover';
    }
  
    img.src = images[index]; 
  }

  for (var i = 0; i < images.length; i++) {
    loadImageAndColor(i);
  }

  var spotlightItems = document.getElementsByClassName('spotlight-item');
  var currentIndex = 0;
  
  setInterval(function() {
    // Reset all items to small
    for (var i = 0; i < spotlightItems.length; i++) {
      spotlightItems[i].classList.remove('big');
      spotlightItems[i].classList.add('small');
      spotlightItems[i].firstElementChild.classList.remove('big');
      spotlightItems[i].firstElementChild.classList.add('small');
  
    }
  
    // Set current item to big
    spotlightItems[currentIndex].classList.add('big');
    spotlightItems[currentIndex].classList.remove('small');
    var childItems = spotlightItems[currentIndex].children;
    spotlightItems[currentIndex].firstElementChild.classList.add('big');
  spotlightItems[currentIndex].firstElementChild.classList.remove('small');
    // Increase current index, loop back to 0 if it's the last item
    currentIndex++;
    if (currentIndex >= spotlightItems.length) {
      currentIndex = 0;
    }
  }, 2000);
  

  
});
