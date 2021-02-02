// Cela permet d'empêcher l'exécution du code avant le chargement complet de tous les éléments de la page. 
window.onload = function() {
	// déclaration de la fonction principale animation
	function animation() {
		alert("Coucou") ;
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
	var MonInterval = setInterval(animation,3000);
}