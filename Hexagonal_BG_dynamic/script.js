function createLocation(px, py, video_id = ""){
	let hexagon = document.getElementById("group");
	let loc = document.createElementNS('http://www.w3.org/2000/svg', "g");
	loc.setAttribute("id", "loc_"+ video_id);
	loc.style.transform="translate("+px+"px,"+py+"px)";
	loc.innerHTML = '<g id="hex"><g id="back" class="hexback"><path d="m4.031 150 72.17-125.001h144.337l72.17 125-72.17 125.002H76.2L4.031 150Z"/></g><g id="inner" class="hexinner"><path  d="M8.952 150 78.66 29.26h139.417L287.786 150l-69.709 120.739H78.66L8.952 149.999Z"/></g><g id="highlight" class="hexhighlight"><path  d="M8.952 150 78.66 29.26h139.417L287.786 150l-69.709 120.739H78.66L8.952 149.999Z"/></g></g>';
	
	hexagon.appendChild(loc)
	
}
for(let i = 0; i<20; i++){
	let xshift = -90;
	let stagger = xshift + 215;
	let spacing = 430;
	let row1 = -25;
	let row2 = -145;
	for(let j = 0; j< 20;j++){
		createLocation(spacing*i+xshift,row1+(j*245));
		createLocation(spacing*i + stagger,row2+(j*245));
	}
	
	
}





//"<g transform='translate(-3.032 -24)'><g id='back' class='hexback'><path d='m4.031 150 72.17-125.001h144.337l72.17 125-72.17 125.002H76.2L4.031 150Z'/></g><g id='inner' class='hexinner'><path  d='M8.952 150 78.66 29.26h139.417L287.786 150l-69.709 120.739H78.66L8.952 149.999Z'/></g><g id='highlight' class='hexhighlight'><path  d='M8.952 150 78.66 29.26h139.417L287.786 150l-69.709 120.739H78.66L8.952 149.999Z'/></g>"