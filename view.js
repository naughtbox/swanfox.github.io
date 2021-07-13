const query = new URLSearchParams(location.search);
const title = query.get("t");
const url = `posts/${query.get("md")}.md`;

fetch(url)
	.then((data) => data.text())
	.then((md) => {
		document.querySelector("#md").innerHTML = marked(md);
		document.querySelector("#title").innerHTML = title;
		document.querySelector("#image").src = query.get("img");
	});
