/*
AdCash webmaster
Created by Marianne Kristiina Orusalu
*/


window.onload = function() {
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const clickid = urlParams.get('clickid');
	console.log(clickid);
	
	var link = document.getElementsByClassName("btn");
	
	for(var i = 0; i < link.length; i++) {
		link[i].addEventListener('click', function(e) {
			for(var y = 0; y < link.length; y++) {
				link[y].setAttribute("target", "_self");
				link[y].setAttribute("href", "https://track.ultravpn.com/5d02892a4faea/click/" + clickid);
			}
		});
	}
}