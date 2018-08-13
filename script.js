function gotoSame(url){
  	var win = window.open(url, '_self');
    win.focus();
}

function gotoNew(url){
    var win = window.open(url, '_blank');
    win.focus();
}

function flipImg(antiqueNum){
	var image = document.getElementsByClassName("antiqueImg");
	if (image.src === ("https://liamebirge.github.io/AntiqueProj/Pictures/antique" + antiqueNum + ".jpg")) {
		image.src = ("https://liamebirge.github.io/AntiqueProj/Pictures/antique" + antiqueNum + "R.jpg");
	} else {
		image.src = ("https://liamebirge.github.io/AntiqueProj/Pictures/antique" + antiqueNum + ".jpg");
	}
}