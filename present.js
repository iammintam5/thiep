
var to = 'Thu Yến';
var gift_url = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/460410171_1333593018016630_979809138166011915_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGqWeQ3gCZZc_X78y0hrH0h5-ZNYcj9_ifn5k1hyP3-JyGy3yQvxdNP0EzM1gQhK40crN5fJmsptOWLGIHsfQC3&_nc_ohc=Io6c4d2gvPgQ7kNvgFWsOXD&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=AfEuJlOy0hxFSMry-OGTbV5&oh=03_Q7cD1QHxUQfXNGzZCbkNTqyNB9AvYUOlMAbOxTp50Hyc-0TB0Q&oe=673AB81B';
var gift_image_url = 'wtf.png';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

