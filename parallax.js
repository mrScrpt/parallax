window.addEventListener('DOMContentLoaded',()=>{
	let
		container = document.getElementsByClassName('parallax')[0],
		elems = container.children;

	console.log(container);

	let moveLayers = (e)=>{		
		let
			initialX = e.pageX
			,initialY = e.pageY
			,centerX = window.innerWidth / 2
			,centerY = window.innerHeight / 2
			,offsetX = centerX - initialX
			,offsetY = centerY - initialY;	
		
		for(let i = 0; i < elems.length; i++){
			let
				style = elems[i].style
				,rate = i / 100
				,positionX = offsetX * rate
				,positionY = offsetY * rate
				,positionBottom = (window.innerHeight / 2 ) * rate
				,transform = 'translate3d(' + positionX +'px, ' + positionY + 'px, 0)';
				
				console.log(positionBottom);
				style.transform = transform;
				style.bottom = -positionBottom + 'px';
		}
		
			// console.log(offsetX,offsetY);
		
	}

	container.addEventListener('mousemove', moveLayers);

})

