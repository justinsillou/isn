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
	// Fin r�cup�ration du canvas
	canvas.style.border = "red 1px solid" ;
	
	// Trac�s (croix)
	context.beginPath() ; // D�but du chemin 
	context.moveTo(50,50) ; // Le trac� part du point 50,50 	
	context.lineTo(200,200) ; // Un segment est ajout� vers 200,200 
	context.closePath() ; // Fermeture du chemin (facultative)
	context.stroke() ;
	context.beginPath() ; // D�but du chemin 
	context.moveTo(200,50) ; // Puis on saute jusqu'� 200,50 
	context.lineTo(50,200) ; // Puis on trace jusqu'� 50,200 
	context.closePath() ; // Fermeture du chemin (facultative)
	context.stroke() ;
	
	//Trac� d'un rectangle
	context.beginPath() ; // D�but du chemin
	context.strokeStyle = "#FF0000" ; 
	context.fillStyle = "#0000FF" ; 
	context.rect(50,50,100,50) ; // (x,y,longueur,hauteur)
	context.stroke() ;
	context.fill() ;
	
	// Trac� d'un arc de cercle (cercle)
	context.beginPath() ;
	context.strokeStyle = "#000000" ;
	context.arc(300,50,40,0,2 * Math.PI) ; // (x,y,diam�tre,angle d�part,angle arriv�e) 
	context.stroke() ;
}