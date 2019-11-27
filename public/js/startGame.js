function load(){
	var url_string = window.location.href;
	var url = new URL(url_string);
	var data = url.searchParams.get("data");

	var json = atob(data);

	console.log(json);
}

window.onload = load();


