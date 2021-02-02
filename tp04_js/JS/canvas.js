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
	// Fin récupération du canvas
	canvas.style.border = "red 1px solid" ;
	
	// Tracés (croix)
	context.beginPath() ; // Début du chemin 
	context.moveTo(50,50) ; // Le tracé part du point 50,50 	
	context.lineTo(200,200) ; // Un segment est ajouté vers 200,200 
	context.closePath() ; // Fermeture du chemin (facultative)
	context.stroke() ;
	context.beginPath() ; // Début du chemin 
	context.moveTo(200,50) ; // Puis on saute jusqu'à 200,50 
	context.lineTo(50,200) ; // Puis on trace jusqu'à 50,200 
	context.closePath() ; // Fermeture du chemin (facultative)
	context.stroke() ;
	
	//Tracé d'un rectangle
	context.beginPath() ; // Début du chemin
	context.strokeStyle = "#FF0000" ; 
	context.fillStyle = "#0000FF" ; 
	context.rect(50,50,100,50) ; // (x,y,longueur,hauteur)
	context.stroke() ;
	context.fill() ;
	
	// Tracé d'un arc de cercle (cercle)
	context.beginPath() ;
	context.strokeStyle = "#000000" ;
	context.arc(300,50,40,0,2 * Math.PI) ; // (x,y,diamètre,angle départ,angle arrivée) 
	context.stroke() ;
}