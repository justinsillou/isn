// Cela permet d'emp�cher l'ex�cution du code avant le chargement complet de tous les �l�ments de la page. 
window.onload = function() {
	// R�cup�ration du canvas
	var canvas = document.getElementById('mon_canvas') ;
	if (!canvas){
		alert("Impossible de r�cup�rer le canvas") ;
		return ;
	}
	var context = canvas.getContext('2d') ;
	if(!context) {
		alert("Impossible de r�cup�rer le context du canvas") ;
		return ;
	}
	var img_pingouin = new Image() ;
	img_pingouin.src = "IMG/sprite.png" ;
	sx = 0 ; sy = 0 ; sLargeur = 50 ; sHauteur = 72 ;
	echelle = 2 ;
	dx = 0 ; dy = 0 ; dLargeur = sLargeur * echelle ;  dHauteur = sHauteur * echelle ; 
	img_pingouin.onload = function(){
		//cette fonction est appel�e une fois que l'image est totalement charg�e
		context.drawImage(img_pingouin, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur) ;
	}
}