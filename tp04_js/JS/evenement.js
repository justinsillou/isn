// Cela permet d'emp�cher l'ex�cution du code avant le chargement complet de tous les �l�ments de la page. 
window.onload = function() {
	function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
	}	

	// Récupération du canvas
	var canvas = document.getElementById('mon_canvas') ;
	if (!canvas){
		alert("Impossible de récupérer le canvas") ;
		return ;
	}
	var context = canvas.getContext('2d') ;
	if(!context) {
		alert("Impossible de récupérer le context du canvas") ;
		return ;
	}
	canvas.style.border = "red 1px solid" ;
	
	// Détection appui sur une des touches de déplacement !
	document.addEventListener('keydown', function(evt) {
		document.getElementById('mon_canvas').innerHTML = evt.keyCode;
		switch(evt.keyCode){
			case 37 :
				alert("vous avez appuyer sur la touche gauche")
				break;
			case 38 :
				alert("vous avez appuyer sur la touche haut")
				break;
			case 39 :
				alert("vous avez appuyer sur la touche droite")
				break;
			case 40 :
				alert("vous avez appuyer sur la touche bas")
				break;
		}
	});

	// Détection clic souris + position de la souris !
	document.addEventListener('mouseOver', function(evt) {
		var mousePos = getMousePos(canvas, evt);
		alert("vous avez cliqué en x : " + mousePos.x + " et en y : " + mousePos.y) ;
	});
	
}