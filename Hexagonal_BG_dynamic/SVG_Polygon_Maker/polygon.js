function verticesNSidedPolygon(cx, cy , numberEdges, sideLength){
	
	let radius = sideLength/(2 * Math.sin(Math.PI/numberEdges));
	let x_coords = [];
	let y_coords = [];
	let coords ="";
	for(let i = 0; i<numberEdges;i++){
		x_coords[i] = (cx + radius * Math.cos(Math.PI/numberEdges * (1+2*i))).toFixed(2);
		y_coords[i] = (cx + radius * Math.sin(Math.PI/numberEdges * (1+2*i))).toFixed(2);
	}
	
	for(let i = 0; i< x_coords.length; i++){
		coords+= `${x_coords[i]},${y_coords[i]} ` 
	}
	return [coords, radius];
}



////// Dom Related JS Here
let submit = document.getElementById("enter");
submit.addEventListener("click", function calc(){
	
	let cx = parseFloat(document.getElementById("cx").value);
	let cy = parseFloat(document.getElementById("cy").value);
	let sl = parseFloat(document.getElementById("sideLength").value);
	let sides = parseFloat(document.getElementById("sides").value);
	let coords = document.getElementById("coords");
	let polygon = document.getElementById("polygon");
	coords.value = verticesNSidedPolygon(cx, cy, sides, sl)[0];

	let svgStr =`<svg viewBox="0 0 ${cx+(sl*3)} ${cy+(sl*3)}">\n<polygon points="${verticesNSidedPolygon(cx, cy, sides, sl)[0]}"/>\n</svg>`;
	let svgtxt = document.getElementById("svgtxt").value = svgStr;
	
	let container = document.getElementById("container");
	container.innerHTML = svgStr + `\n\nradius: ${verticesNSidedPolygon(cx, cy, sides, sl)[1]}`;
	
	});

	
	