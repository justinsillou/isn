// Cela permet d'emp�cher l'ex�cution du code avant le chargement complet de tous les �l�ments de la page. 
window.onload = function() {
	// d�claration de la fonction principale animation
	function animation() {
		alert("Coucou") ;
	}
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
	var MonInterval = setInterval(animation,3000);
}