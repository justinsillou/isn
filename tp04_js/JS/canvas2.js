// Cela permet d'empêcher l'exécution du code avant le chargement complet de tous les éléments de la page. 
window.onload = function() {
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
	var img_pingouin = new Image() ;
	img_pingouin.src = "IMG/sprite.png" ;
	sx = 0 ; sy = 0 ; sLargeur = 50 ; sHauteur = 72 ;
	echelle = 2 ;
	dx = 0 ; dy = 0 ; dLargeur = sLargeur * echelle ;  dHauteur = sHauteur * echelle ; 
	img_pingouin.onload = function(){
		//cette fonction est appelée une fois que l'image est totalement chargée
		context.drawImage(img_pingouin, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur) ;
	}
}