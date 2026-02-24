let videos = JSON.parse(data);
vidlist = document.getElementById("vidlist");

for(let i = 0; i < videos.list.length; i++){
	console.log(videos.list[i].title);
	//video box
	let vid = document.createElement("div");
	vid.classList.add("video")
	vid.id = videos.list[i].query;
	
	//video thumbnail
	let thumb = document.createElement("img");
	thumb.src = videos.list[i].thumb;
	
	//video title
	let title = document.createElement("a");
	title.href = "video.html?video=" + videos.list[i].query;
	title.innerText = videos.list[i].title;

	vid.appendChild(thumb);
	vid.appendChild(title);
	vidlist.appendChild(vid);
}
