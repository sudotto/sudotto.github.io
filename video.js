const url = window.location.href;
let query = url.slice(url.search("video=")+6, url.length);

let data = '{' +
	'"list" : [' +
		'{' +
			'"query": "keyboard",' +
			'"title": "I Made A Keyboard Driver | RosaOS #1", ' +
			'"src": "video/keyboard.mp4",' +
			'"thumb": "thumbnail.png"' +
		'},' +
		'{' +
			'"query": "keyboard",' +
			'"title": "title2",' +
			'"src": "file.mp4",' +
			'"thumb": "thumbnail.png"' +
		'}' +
	']' +
'}';


let videos = JSON.parse(data);

for(let i = 0; i < videos.list.length; i++){
	console.log(videos.list[i].title);
	if(videos.list[i].query == query){
		document.getElementById("title").innerText = videos.list[i].title;
		document.getElementById("video").src = videos.list[i].src;
		break;
	}
}
