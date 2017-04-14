// Récupération des candidats
var candidatsArray ={};
var imgsPreload = [];
// Configuration de l'utilisateur
var userConfig = {
	"Cheveux" : "Fillon",
	"Yeux" : "Fillon",
	"Bouche" : "Fillon",
	"ref1" : 1,
	"ref2" : 2,
	"ref3" : 3,
};

window.fbAsyncInit = function() {
  FB.init({
	appId      : '428061007540028',
	xfbml      : true,
	version    : 'v2.8'
  });

  $('#confirmChoice').on('click', function(event) {
	  event.preventDefault();

	  FB.ui({
		  app_id : "428061007540028",
			method: 'share',
			// redirect_uri : "https://apps.facebook.com/presitron/leaderboard.php",
			mobile_iframe: true,
			href : "https://apps.facebook.com/presitron/",
			title : "Je vote "+$('#presName p span').html()+" pour ce programme :",
			description : "- "+candidatsArray[userConfig.Cheveux].Reformes[userConfig.ref1]+", - "+candidatsArray[userConfig.Yeux].Reformes[userConfig.ref2]+", - "+candidatsArray[userConfig.Bouche].Reformes[userConfig.ref3]+"",
			picture : "https://presitron.keleyonmars.com/content/combinaisons/Facebook/"+userConfig.Cheveux+"-"+userConfig.Yeux+"-"+userConfig.Bouche+".jpg",
		  }, function(response){
			// Debug response (optional)
		  });
  });

};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


$(function() {

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////    INITIALISATION    ///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$.getJSON( "content/candidats.json", function( candidats ) {
		candidatsArray = candidats;
	}).done(function(){
		$.each(candidatsArray ,function(index, el) {
			imgsPreload.push(el.Cheveux);
			imgsPreload.push(el.Yeux);
			imgsPreload.push(el.Bouche);
		});
		$.preloadImages(imgsPreload);
		init(candidatsArray,userConfig );
	});

	// Preload images
	$.preloadImages = function(array) {
		for (var i = 0; i < array.length; i++) {
			$("<img />").attr("src", array[i]);
		}
	};

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////    OUVERTURE FERMETURE DU SPLASHSCREEN    //////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$('#splashScreenBtn').on('click', function(){
		var tlSplash = new TimelineMax({paused:true, onComplete:function(){}});
		tlSplash.to($('#splashscreen .splashscreen-container'), 0.3, {ease: Power3.easeInOut, scale:0, opacity:0, autoAlpha:0, skewY:-8});
		tlSplash.to($('#splashscreen'), 0.3, {ease: Power3.easeInOut, opacity:0, autoAlpha:0});
		tlSplash.play();
	});

	$('#bloc_chance').on('click', function(){
		init(candidatsArray,userConfig );
	});


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////    OUVERTURE FERMETURE DE LA POPUP    ///////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$('#popupExplainLink').on('click', function(){
		var tlPopup = new TimelineMax({paused:true, onComplete:function(){}});
		tlPopup.addLabel('in');
		tlPopup.to($('#popupExplain'), 0.3, {ease: Power3.easeInOut, opacity:1, autoAlpha:1});
		tlPopup.to($('#popupExplain .popupContainer'), 0.3, {ease: Elastic.easeOut.config(1, 0.6), scale:1, opacity:1, autoAlpha:1, skewY:-8});
		tlPopup.addLabel('out');
		tlPopup.to($('#popupExplain .popupContainer'), 0.3, {ease: Power3.easeInOut, scale:0, opacity:0, autoAlpha:0, skewY:-8});
		tlPopup.to($('#popupExplain'), 0.3, {ease: Power3.easeInOut, opacity:0, autoAlpha:0});
		tlPopup.tweenFromTo('in', 'out');
		$('#popupExplain .cross').on('click', function(){
			tlPopup.play('out');
		});
	});

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////    CHANGEMENT PROGRAMME PREVIOUS    //////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Changement de programme PREVIOUS
	$('.backRef').on('click', function(){
		var text = $(this).next(),
		textPos = text.attr('data-refId'),
		nextTextIndex,
		candidat = text.attr('data-candidat'),
		dir = -30;
		if(parseInt(textPos) -1 >= 0 ){
			nextTextIndex = parseInt(textPos) -1;
		}else{
			nextTextIndex = Object.keys(candidatsArray[candidat].Reformes).length-1;
		}
		switch (text.attr('id')) {
			case "reforme1":
				userConfig.ref1 = nextTextIndex;
			break;
			case "reforme2":
				userConfig.ref2 = nextTextIndex;
			break;
			case "reforme3":
				userConfig.ref3 = nextTextIndex;
			break;
			default:
		}
		text.attr('data-refId', nextTextIndex);
		animateText($(this).next(), candidatsArray[candidat].Reformes[nextTextIndex], dir);
		console.log(userConfig);
	});


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////    CHANGEMENT PROGRAMME NEXT    //////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Changement de programme NEXT
	$('.nextRef').on('click', function(){
		var text = $(this).prev(),
		textPos = text.attr('data-refId'),
		nextTextIndex,
		candidat = text.attr('data-candidat'),
		dir = 30;
		if(parseInt(textPos) +1 < 	Object.keys(candidatsArray[candidat].Reformes).length){
			nextTextIndex = parseInt(textPos) +1;
		}else{
			nextTextIndex = 0;
		}
		switch (text.attr('id')) {
			case "reforme1":
				userConfig.ref1 = nextTextIndex;
			break;
			case "reforme2":
				userConfig.ref2 = nextTextIndex;
			break;
			case "reforme3":
				userConfig.ref3 = nextTextIndex;
			break;
			default:
		}
		text.attr('data-refId', nextTextIndex);
		animateText($(this).prev(), candidatsArray[candidat].Reformes[nextTextIndex], dir);
		console.log(userConfig);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////    CHANGEMENT PARTIE PREVIOUS    ////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Changement de partie PREVIOUS
	$('.arrowBodyPrev').on('click', function(){
		var bodyPart = $(this).next(),
		candidat ,
		candPos = bodyPart.attr('data-candid'),
		candidatAutre,
		candidatAutreTwo,
		nextImgIndex,
		partie,
		tmpCand,
		tmpCandFirst,
		tmpCandLast,
		reforme,
		dir = -30;
		if(parseInt(candPos) -1 > 0 ){
			nextImgIndex = parseInt(candPos) -1;
			for (var i = 0; i < 2; i++) {
				tmpCand =Object.keys(candidatsArray)[nextImgIndex];
				tmpCandFirst = $('.imgCand').not(bodyPart).first().attr('data-candidat');
				tmpCandLast = $('.imgCand').not(bodyPart).last().attr('data-candidat');
				if(tmpCand == tmpCandFirst || tmpCand == tmpCandLast  ){
					if(nextImgIndex -1 > 0 ){
						nextImgIndex -= 1;
					}else{
						nextImgIndex =0;
					}
			   }
			}
		}else{
			nextImgIndex = Object.keys(candidatsArray).length-1;
			for (var i = 0; i < 2; i++) {
				tmpCand =Object.keys(candidatsArray)[nextImgIndex];
				tmpCandFirst = $('.imgCand').not(bodyPart).first().attr('data-candidat');
				tmpCandLast = $('.imgCand').not(bodyPart).last().attr('data-candidat');
				if(tmpCand == tmpCandFirst || tmpCand == tmpCandLast  ){
					if(nextImgIndex -1 > 0 ){
						nextImgIndex -= 1;
					}else{
						nextImgIndex =0;
					}
			   }
			}
		}
		candidat = Object.keys(candidatsArray)[nextImgIndex];
		switch (bodyPart.attr('id')) {
			case "cheveuxCand":
				userConfig.Cheveux = candidat;
				partie ="Cheveux";
				userConfig.ref1 = 0;
				reforme = $('#reforme1');
			break;
			case "yeuxCand":
				userConfig.Yeux = candidat;
				partie = "Yeux";
				userConfig.ref2 = 0;
				reforme = $('#reforme2');
			break;
			case "boucheCand":
				userConfig.Bouche = candidat;
				partie = "Bouche";
				userConfig.ref3 = 0;
				reforme = $('#reforme3');
			break;
			default:
		}
		reforme.attr({ "data-refId" : 0, "data-candidat" : candidat, });
		animateText(reforme, candidatsArray[candidat].Reformes[0], dir);
		bodyPart.attr('data-candid', nextImgIndex);
		bodyPart.attr('data-candidat', Object.keys(candidatsArray)[nextImgIndex]);
		changeCandidatName(userConfig.Cheveux, userConfig.Yeux, userConfig.Bouche);
		animateImg(bodyPart.find('img'), candidatsArray[candidat][partie], dir);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////    CHANGEMENT PARTIE NEXT    ///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Changement de partie NEXT
	$('.arrowBodyNext').on('click', function(){
		var bodyPart = $(this).prev(),
		candidat ,
		candPos = bodyPart.attr('data-candid'),
		nextImgIndex,
		partie,
		reforme,
		tmpCand,
		tmpCandFirst,
		tmpCandLast,
		dir = 30;
		if(parseInt(candPos) +1 < 	Object.keys(candidatsArray).length){
			nextImgIndex = parseInt(candPos) +1;
			for (var i = 0; i < 2; i++) {
				tmpCand =Object.keys(candidatsArray)[nextImgIndex];
				tmpCandFirst = $('.imgCand').not(bodyPart).first().attr('data-candidat');
				tmpCandLast = $('.imgCand').not(bodyPart).last().attr('data-candidat');
				if(tmpCand == tmpCandFirst || tmpCand == tmpCandLast  ){
					if(nextImgIndex +1 < 	Object.keys(candidatsArray).length){
						nextImgIndex += 1;
					}else{
						nextImgIndex =0;
					}
			   }
			}
		}else{
			nextImgIndex = 0;
			for (var i = 0; i < 2; i++) {
				tmpCand =Object.keys(candidatsArray)[nextImgIndex];
				tmpCandFirst = $('.imgCand').not(bodyPart).first().attr('data-candidat');
				tmpCandLast = $('.imgCand').not(bodyPart).last().attr('data-candidat');
				if(tmpCand == tmpCandFirst || tmpCand == tmpCandLast  ){
					if(nextImgIndex +1 < 	Object.keys(candidatsArray).length){
						nextImgIndex += 1;
					}else{
						nextImgIndex =0;
					}
			   }
			}		}
		candidat = Object.keys(candidatsArray)[nextImgIndex];
		switch (bodyPart.attr('id')) {
			case "cheveuxCand":
				userConfig.Cheveux = candidat;
				partie ="Cheveux";
				userConfig.ref1 = 0;
				reforme = $('#reforme1');
			break;
			case "yeuxCand":
				userConfig.Yeux = candidat;
				partie = "Yeux";
				userConfig.ref2 = 0;
				reforme = $('#reforme2');
			break;
			case "boucheCand":
				userConfig.Bouche = candidat;
				partie = "Bouche";
				userConfig.ref3 = 0;
				reforme = $('#reforme3');
			break;
			default:
		}
		reforme.attr({ "data-refId" : 0, "data-candidat" : candidat, });
		animateText(reforme, candidatsArray[candidat].Reformes[0], dir);
		bodyPart.attr('data-candid', nextImgIndex);
		bodyPart.attr('data-candidat', Object.keys(candidatsArray)[nextImgIndex]);
		changeCandidatName(userConfig.Cheveux, userConfig.Yeux, userConfig.Bouche);
		animateImg(bodyPart.find('img'), candidatsArray[candidat][partie], dir);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////    AJOUT DANS LA BDD    ////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$('#confirmChoice').on('click', function(){
		$.ajax({
			url: 'content/addParticipation.php',
			type: 'POST',
			dataType: 'json',
			data: {
				president1: userConfig.Cheveux,
				president2: userConfig.Yeux,
				president3: userConfig.Bouche,
				name : $('#presName p span').html()
			},
			success:function(data){
				console.log("success");
				console.log(data);
				setTimeout(function(){ document.location.href="leaderboard.php"; },5000);
			},
			error:function(data){
				console.log("error");
				console.log(data);
				setTimeout(function(){ document.location.href="leaderboard.php"; },5000);
			}
		});
	});
});


function changeCandidatName(cheveux, yeux, bouche){
	var newName;

	// console.log(cheveux);
	// console.log(yeux);
	// console.log(bouche);

	switch (true) {
		// MARINE LE PEN
		case cheveux == "LePen" && yeux == "Fillon" && bouche == "Hamon": newName = "Marine Fillomon"; break;
		case cheveux == "LePen" && yeux == "Fillon" && bouche == "Macron": newName = "Marine Fillocron"; break;
		case cheveux == "LePen" && yeux == "Fillon" && bouche == "Melenchon": newName = "Marine Fillochon"; break;

		case cheveux == "LePen" && yeux == "Hamon" && bouche == "Fillon": newName = "Marine Hamollon"; break;
		case cheveux == "LePen" && yeux == "Hamon" && bouche == "Macron": newName = "Marine Hamocron"; break;
		case cheveux == "LePen" && yeux == "Hamon" && bouche == "Melenchon": newName = "Marine Hamochon"; break;

		case cheveux == "LePen" && yeux == "Macron" && bouche == "Fillon": newName = "Marine Macrollon"; break;
		case cheveux == "LePen" && yeux == "Macron" && bouche == "Hamon": newName = "Marine Macromon"; break;
		case cheveux == "LePen" && yeux == "Macron" && bouche == "Melenchon": newName = "Marine Macrochon"; break;

		case cheveux == "LePen" && yeux == "Melenchon" && bouche == "Fillon": newName = "Marine Mélellon"; break;
		case cheveux == "LePen" && yeux == "Melenchon" && bouche == "Hamon": newName = "Marine Mélemon"; break;
		case cheveux == "LePen" && yeux == "Melenchon" && bouche == "Macron": newName = "Marine Mélecron"; break;

		// FILLON
		case cheveux == "Fillon" && yeux == "LePen" && bouche == "Hamon": newName = "François Le Hamon"; break;
		case cheveux == "Fillon" && yeux == "LePen" && bouche == "Macron": newName = "François Le Macron"; break;
		case cheveux == "Fillon" && yeux == "LePen" && bouche == "Melenchon": newName = "François Le Mélenchon"; break;

		case cheveux == "Fillon" && yeux == "Hamon" && bouche == "LePen": newName = "François Hamopen"; break;
		case cheveux == "Fillon" && yeux == "Hamon" && bouche == "Macron": newName = "François Hamocron"; break;
		case cheveux == "Fillon" && yeux == "Hamon" && bouche == "Melenchon": newName = "François Hamochon"; break;

		case cheveux == "Fillon" && yeux == "Macron" && bouche == "LePen": newName = "François Macropen"; break;
		case cheveux == "Fillon" && yeux == "Macron" && bouche == "Hamon": newName = "François Macromon"; break;
		case cheveux == "Fillon" && yeux == "Macron" && bouche == "Melenchon": newName = "François Macrochon"; break;

		case cheveux == "Fillon" && yeux == "Melenchon" && bouche == "LePen": newName = "François Mélepen"; break;
		case cheveux == "Fillon" && yeux == "Melenchon" && bouche == "Hamon": newName = "François Mélemon"; break;
		case cheveux == "Fillon" && yeux == "Melenchon" && bouche == "Macron": newName = "François Mélecron"; break;

		// HAMON
		case cheveux == "Hamon" && yeux == "LePen" && bouche == "Fillon": newName = "Benoît Le Fillon"; break;
		case cheveux == "Hamon" && yeux == "LePen" && bouche == "Macron": newName = "Benoît Le Macron"; break;
		case cheveux == "Hamon" && yeux == "LePen" && bouche == "Melenchon": newName = "Benoît Le Mélenchon"; break;

		case cheveux == "Hamon" && yeux == "Fillon" && bouche == "LePen": newName = "Benoît Fillopen"; break;
		case cheveux == "Hamon" && yeux == "Fillon" && bouche == "Macron": newName = "Benoît Fillocron"; break;
		case cheveux == "Hamon" && yeux == "Fillon" && bouche == "Melenchon": newName = "Benoît Fillochon"; break;

		case cheveux == "Hamon" && yeux == "Macron" && bouche == "LePen": newName = "Benoît Macropen"; break;
		case cheveux == "Hamon" && yeux == "Macron" && bouche == "Fillon": newName = "Benoît Macrollon"; break;
		case cheveux == "Hamon" && yeux == "Macron" && bouche == "Melenchon": newName = "Benoît Macrochon"; break;

		case cheveux == "Hamon" && yeux == "Melenchon" && bouche == "LePen": newName = "Benoît Mélepen"; break;
		case cheveux == "Hamon" && yeux == "Melenchon" && bouche == "Fillon": newName = "Benoît Mélellon"; break;
		case cheveux == "Hamon" && yeux == "Melenchon" && bouche == "Macron": newName = "Benoît Mélecron"; break;

		// MACRON
		case cheveux == "Macron" && yeux == "LePen" && bouche == "Fillon": newName = "Emmanuel Le Fillon"; break;
		case cheveux == "Macron" && yeux == "LePen" && bouche == "Hamon": newName = "Emmanuel Le Hamon"; break;
		case cheveux == "Macron" && yeux == "LePen" && bouche == "Melenchon": newName = "Emmanuel Le Mélenchon"; break;

		case cheveux == "Macron" && yeux == "Fillon" && bouche == "LePen": newName = "Emmanuel Fillopen"; break;
		case cheveux == "Macron" && yeux == "Fillon" && bouche == "Hamon": newName = "Emmanuel Fillomon"; break;
		case cheveux == "Macron" && yeux == "Fillon" && bouche == "Melenchon": newName = "Emmanuel Fillochon"; break;

		case cheveux == "Macron" && yeux == "Hamon" && bouche == "LePen": newName = "Emmanuel Hamopen"; break;
		case cheveux == "Macron" && yeux == "Hamon" && bouche == "Fillon": newName = "Emmanuel Hamollon"; break;
		case cheveux == "Macron" && yeux == "Hamon" && bouche == "Melenchon": newName = "Emmanuel Hamochon"; break;

		case cheveux == "Macron" && yeux == "Melenchon" && bouche == "LePen": newName = "Emmanuel Mélepen"; break;
		case cheveux == "Macron" && yeux == "Melenchon" && bouche == "Fillon": newName = "Emmanuel Mélellon"; break;
		case cheveux == "Macron" && yeux == "Melenchon" && bouche == "Hamon": newName = "Emmanuel Mélemon"; break;

		// MÉLENCHON
		case cheveux == "Melenchon" && yeux == "LePen" && bouche == "Fillon": newName = "Jean-Luc Le Fillon"; break;
		case cheveux == "Melenchon" && yeux == "LePen" && bouche == "Hamon": newName = "Jean-Luc Le Hamon"; break;
		case cheveux == "Melenchon" && yeux == "LePen" && bouche == "Macron": newName = "Jean-Luc Le Macron"; break;

		case cheveux == "Melenchon" && yeux == "Fillon" && bouche == "LePen": newName = "Jean-Luc Fillopen"; break;
		case cheveux == "Melenchon" && yeux == "Fillon" && bouche == "Hamon": newName = "Jean-Luc Fillomon"; break;
		case cheveux == "Melenchon" && yeux == "Fillon" && bouche == "Macron": newName = "Jean-Luc Fillocron"; break;

		case cheveux == "Melenchon" && yeux == "Hamon" && bouche == "LePen": newName = "Jean-Luc Hamopen"; break;
		case cheveux == "Melenchon" && yeux == "Hamon" && bouche == "Fillon": newName = "Jean-Luc Hamollon"; break;
		case cheveux == "Melenchon" && yeux == "Hamon" && bouche == "Macron": newName = "Jean-Luc Hamocron"; break;

		case cheveux == "Melenchon" && yeux == "Macron" && bouche == "LePen": newName = "Jean-Luc Macropen"; break;
		case cheveux == "Melenchon" && yeux == "Macron" && bouche == "Fillon": newName = "Jean-Luc Macrollon"; break;
		case cheveux == "Melenchon" && yeux == "Macron" && bouche == "Hamon": newName = "Jean-Luc Macromon"; break;
		default:
	}

	// console.log(newName);
	var tlText = new TimelineMax({paused:true, onComplete:function(){}});
	tlText.to($('#presName p span'), 0.3, {ease: Power3.easeInOut, y: -30, opacity:0});
	tlText.set($('#presName p span'), {y:30, opacity:0, text:newName});
	tlText.to($('#presName p span'), 0.3, {ease:Power3.easeInOut, y: 0, opacity:1});
	tlText.play();
	$('meta[property=og\\:title]').attr('content', "Je vote "+newName+" pour ce programme :");
	$('meta[property=og\\:image]').attr('content', "https://presitron.keleyonmars.com/content/combinaisons/Facebook/"+cheveux+"-"+yeux+"-"+bouche+".jpg");


}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////    FONCTION ANIMATION DES TEXTES DES PROGRAMMES    //////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fonction d'animation des textes des programmes
function animateText(text, nextText, dir){
	var tlText = new TimelineMax({paused:true, onComplete:function(){}});
	tlText.to(text, 0.3, {ease: Power3.easeInOut, x: dir, opacity:0});
	tlText.set(text, {x:-dir, opacity:0, text:nextText});
	tlText.to(text, 0.3, {ease:Power3.easeInOut, x: 0, opacity:1});
	tlText.play();
	$('meta[property=og\\:description]').attr('content', "- "+candidatsArray[userConfig.Cheveux].Reformes[userConfig.ref1]+"<br/>- "+candidatsArray[userConfig.Yeux].Reformes[userConfig.ref2]+"<br/>- "+candidatsArray[userConfig.Bouche].Reformes[userConfig.ref3]+"");
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////    FONCTION ANIMATION DES PARTIES DU CORPS    ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fonction d'animation des textes des programmes
function animateImg(img, imgNext, dir){
	var tlText = new TimelineMax({paused:true, onComplete:function(){}});
	tlText.to(img, 0.3, {ease: Power3.easeInOut, x: dir, opacity:0});
	tlText.set(img, {x:-dir, opacity:0, attr:{src : imgNext}});
	tlText.to(img, 0.3, {ease:Power3.easeInOut, x: 0, opacity:1});
	tlText.play();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////    FONCTION INITIALISATION    ////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fonction d'initialisation
function init(candidatsArray, userConfig){
	var nbr1, nbr2, nbr3;
	for (var i = 0; i < 3; i++) {
		switch (i) {
			case 0:
				nbr1 = Math.floor(Math.random()*4);
			break;
			case 1:
				nbr2 = Math.floor(Math.random()*4);
				if(nbr2 == nbr1){
					if(nbr2+1 < 4){
						nbr2++;
					}else{
						nbr2 = 0;
					}
				}
			break;
			case 2:
				nbr3 = Math.floor(Math.random()*4);
				if(nbr3 == nbr1 || nbr3 == nbr2){
					if(nbr3+1 < 4){
						nbr3++;
					}else{
						nbr3 = 0;
					}
					if(nbr3 == nbr1 || nbr3 == nbr2){
						if(nbr3+1 < 4){
							nbr3++;
						}else{
							nbr3 = 0;
						}
					}
				}
			break;
			default:
		}
	}
	$('#cheveuxCand').attr({'data-candId': nbr1});
	$('#yeuxCand').attr({'data-candId': nbr2});
	$('#boucheCand').attr({'data-candId': nbr3});
	nbr1 = Object.keys(candidatsArray)[nbr1];
	nbr2 = Object.keys(candidatsArray)[nbr2];
	nbr3 = Object.keys(candidatsArray)[nbr3];
	userConfig.Cheveux = nbr1;
	userConfig.Yeux = nbr2;
	userConfig.Bouche = nbr3;
	userConfig.ref1 = 0;
	userConfig.ref2 = 0;
	userConfig.ref3 = 0;
	$('#cheveuxCand').attr({'data-candidat': nbr1});
	$('#yeuxCand').attr({'data-candidat': nbr2});
	$('#boucheCand').attr({'data-candidat': nbr3});
	var refId1 = Math.round(Math.random()*(Object.keys(candidatsArray[nbr1].Reformes).length-1)),
	refId2 = Math.round(Math.random()*(Object.keys(candidatsArray[nbr2].Reformes).length-1)),
	refId3 = Math.round(Math.random()*(Object.keys(candidatsArray[nbr3].Reformes).length-1));
	animateText($('#reforme1'), candidatsArray[nbr1].Reformes[refId1], 30);
	setTimeout(function(){animateText($('#reforme2'), candidatsArray[nbr2].Reformes[refId2], 30);},100);
	setTimeout(function(){animateText($('#reforme3'), candidatsArray[nbr3].Reformes[refId3], 30);},200);
	$('#reforme1').attr({'data-refId' : refId1, 'data-candidat' : nbr1});
	$('#reforme2').attr({'data-refId' : refId2, 'data-candidat' : nbr2});
	$('#reforme3').attr({'data-refId' : refId3, 'data-candidat' : nbr3});
	changeCandidatName(userConfig.Cheveux, userConfig.Yeux, userConfig.Bouche);
	animateImg($('#cheveuxCand img'), candidatsArray[nbr1].Cheveux, 30);
	setTimeout(function(){animateImg($('#yeuxCand img'), candidatsArray[nbr2].Yeux, 30);},100);
	setTimeout(function(){animateImg($('#boucheCand img'), candidatsArray[nbr3].Bouche, 30);},200);

}
