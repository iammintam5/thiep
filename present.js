
var to = 'Thu Yến';
var gift_url = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/462534238_545829825066953_885417925123900362_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=H2IgOhSs664Q7kNvgF7Gv7a&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=ANUIaX4VKSVNyNpEZ96f7SU&oh=03_Q7cD1QEw6eOv70GlAWZCNTo-zNo1GGCO6zw8p3TPrj2Jdwf7Ww&oe=673B036A';
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

