const url = window.location.href;
let query = url.slice(url.search("video=")+6, url.length);

let videos = JSON.parse(data);

for(let i = 0; i < videos.list.length; i++){
	console.log(videos.list[i].title);
	if(videos.list[i].query == query){
		document.getElementById("pagetitle").innerHTML = videos.list[i].title;
		document.getElementById("title").innerText = videos.list[i].title;
		document.getElementById("video").src = videos.list[i].src;
		document.getElementById("video").poster = videos.list[i].thumb;
		document.getElementById("favicon").href = videos.list[i].thumb;
		break;
	}
}
