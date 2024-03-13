// your code here

function handleClick(event){
	event.preventDefault();
	let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;
	let id = document.getElementById("url");
	
	
	if(name !== '' && year !== ''){
		id.innerHTML = "";
		id.innerHTML = `https://localhost:8080/?name=${name}&year=${year}`;
	}
	else if (name !== '' && year === '') {
		id.innerHTML = "";
		id.innerHTML = `https://localhost:8080/?name=${name}`;
	}
	else if (name === '' && year !== '') {
		id.innerHTML = "";
		id.innerHTML = `https://localhost:8080/?year=${year}`;
	}
}

