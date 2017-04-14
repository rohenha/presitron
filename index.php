<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="css/master.min.css">
	<title>Présitron</title>
	<meta property="og:url"                content="https://apps.facebook.com/presitron/" />
	<meta property="og:type"               content="game" />
	<meta property="og:title"              content="Présitron 2017 | Créez votre propre candidat" />
	<meta property="og:description"        content="Parce que la campagne est folle, parce que la campagne est illisible, parce qu'elle est pleine de suspense... Construisez vous-même votre candidat et prenez le contrôle des élections" />
	<meta property="og:image"              content="https://presitron.keleyonmars.com/content/FB_image.jpg" />
	<meta property="fb:app_id" content="428061007540028"/>
</head>
<body id="home">

	<header>
		<a href="http://www.keley-on-mars.com/" target="_blank" class="pull-right"> <img src="imgs/logo_kom.png"></a>
	</header>

	<div id="splashscreen">
		<div class="splashscreen-container">
			<h1 class="title splash">
				<span><span>Presitron</span></span>
				<span><span class="up">2017 <span class="drapeau"></span></span></span>
				<span><span>Créez votre</span></span>
				<span><span>propre candidat</span></span>
			</h1>
			<p>Construisez parmi les propositions des 5 candidats majeurs votre propre programme, votre propre candidat !</p>
			<a href="#" id="splashScreenBtn" class=" btn mgt">C'est parti</a>
		</div>
	</div>

	<!-- COLONNE GAUCHE -->

	<div id="colonne_gauche">

		<h2 class="title">
			<span><span>Presitron</span></span><span><span class="up">2017 <span class="drapeau"></span></span></span>
		</h2>
		<div class="bloc_description mgt">
			<h2>Moi Président, je veux :</h2>
			<ul>
				<li>
					<span id="backRef1" class="backRef"><span class="arrowBack"></span></span>
					<span id="reforme1" class="reforme" data-refId="0" data-candidat="Fillon">Uniforme à l'école, scolarité obligatoire à 5 ans</span>
					<span id="nextRef1" class="nextRef"><span class="arrowBack"></span></span>
				</li>
				<li>
					<span id="backRef2" class="backRef"><span class="arrowBack"></span></span>
					<span id="reforme2" class="reforme" data-refId="1" data-candidat="Fillon">Durée du travail : priorité aux accords d'entreprise</span>
					<span id="nextRef2" class="nextRef"><span class="arrowBack"></span></span>
				</li>
				<li>
					<span id="backRef3" class="backRef"><span class="arrowBack"></span></span>
					<span id="reforme3" class="reforme" data-refId="2" data-candidat="Fillon">50% d'énergies renouvelables et sortie du diesel d'ici 2025</span>
					<span id="nextRef3" class="nextRef"><span class="arrowBack"></span></span>
				</li>
			</ul>
		</div>

		<a href="#" id="confirmChoice" class=" btn mgt">Valider sans adhérer <span>et je partage sur Facebook</span></a>
		<p id="popupExplainLink">Pourquoi Présitron ?</p>
	</div>

	<div id="popupExplain" class="popup">
		<div class="popupContainer">
			<div class="cross"></div>
			<img id="president" src="imgs/president.png" alt="Hollande">
			<h3>Moi Président !</h3>
			<p>Parce que la campagne est folle, parce que la campagne est illisible, parce qu'elle est pleine de suspense... Construisez vous-même votre candidat et prenez le contrôle des élections !</p>
			<img id="signature" src="imgs/signature.png" alt="Signature">
		</div>
	</div>

	<!-- COLONNE DROITE -->

	<div id="colonne_droite">
		<div id="bloc_chance_container">
			<h2 class="title">
				<span><span>Presitron</span></span><span><span class="up">2017 <span class="drapeau"></span></span></span>
			</h2>
			<div id="bloc_chance">
				<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 94.913 93.993" style="enable-background:new 0 0 94.913 93.993;" xml:space="preserve">
					 <filter id="dropshadow" height="130%">
					  <feGaussianBlur in="SourceAlpha" stdDeviation="0"/> <!-- stdDeviation is how much to blur -->
					  <feOffset dx="3" dy="3" result="offsetblur"/> <!-- how much to offset -->
					  <feMerge>
						<feMergeNode/> <!-- this contains the offset blurred image -->
						<feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
					  </feMerge>
					</filter>
				<circle class="shadow" style=" fill:#FECD30;" cx="47.837" cy="46.597" r="45.101"/>
				<circle style="fill:#4DB3E3;" cx="47.837" cy="46.597" r="37.681"/>
				<polygon class="shadow" style=" fill:#FFFFFF;" points="75.147,46.597 80.145,37.947 71.474,32.945 71.474,22.987 61.505,22.987 56.494,14.315
					47.837,19.309 39.18,14.315 34.169,22.987 24.193,22.987 24.193,32.949 15.529,37.947 20.527,46.597 15.529,55.247 24.193,60.245
					24.193,70.206 34.169,70.206 39.18,78.879 47.837,73.885 56.494,78.879 61.506,70.206 71.474,70.206 71.474,60.249 80.145,55.247
					"/>
				<path style="fill:#FECD30;" d="M42.593,45.517c1.119-0.964,2.386-1.142,3.81-0.785c0.584-1.662,1.171-3.291,1.717-4.933
					c0.068-0.205-0.044-0.489-0.127-0.717c-0.527-1.468-1.071-2.93-1.605-4.396c-0.702-1.926-0.342-3.49,1.046-4.559
					c1.328-1.023,2.921-1.003,4.442-0.06c0.979-0.232,1.805-0.591,2.632-0.592c2.466-0.002,4.136,2.346,3.391,4.689
					c-0.51,1.605-1.13,3.177-1.64,4.783c-0.124,0.39-0.1,0.88,0.018,1.278c0.277,0.939,0.645,1.852,0.989,2.772
					c0.399,1.065,0.666,2.141,1.859,2.787c0.909,0.492,1.411,1.533,1.413,2.563c0.004,2.329,0.158,4.714-0.281,6.977
					c-1.122,5.788-6.674,9.729-12.653,9.274c-5.958-0.452-10.695-5.126-11.096-10.994c-0.113-1.651-0.1-3.31-0.159-4.965
					c-0.058-1.622,0.517-2.935,2.024-3.685C39.839,44.224,41.25,44.464,42.593,45.517z M39.444,56.223
					c-0.008-0.027,0.01,0.07,0.045,0.16c1.513,3.795,5.779,6.38,9.824,5.954c4.534-0.477,8.184-3.645,8.79-7.868
					c0.269-1.876,0.19-3.808,0.164-5.713c-0.015-1.099-0.935-1.809-2.14-1.817c-2.173-0.013-4.347-0.005-6.52-0.004
					c-0.223,0-0.446,0.019-0.66,0.029c-0.238,2.057,1.284,4.139,3.426,4.703c0.44,0.116,0.907,0.129,1.361,0.192
					c0.68,0.095,1.078,0.533,1.06,1.162c-0.017,0.62-0.458,1.058-1.139,1.073c-0.406,0.009-0.846,0.033-1.215-0.099
					c-1.226-0.44-2.428-0.949-3.597-1.414c-0.355,3.276-3.847,4.43-6.108,2.657C41.58,55.584,40.555,55.891,39.444,56.223z
					 M55.419,44.648c-1.516-4.135-2.968-8.126-4.449-12.107c-0.286-0.768-1.024-1.071-1.732-0.815c-0.75,0.271-1.108,0.975-0.82,1.774
					c1.289,3.573,2.595,7.139,3.917,10.7c0.069,0.185,0.326,0.418,0.507,0.428C53.653,44.674,54.469,44.648,55.419,44.648z
					 M46.489,50.307c-0.002,0-0.005,0-0.007,0c0-0.351,0.002-0.701-0.001-1.052s-0.007-0.701-0.018-1.052
					c-0.026-0.806-0.549-1.358-1.304-1.382c-0.772-0.024-1.403,0.549-1.418,1.364c-0.026,1.377-0.022,2.755-0.002,4.133
					c0.012,0.82,0.62,1.424,1.369,1.426c0.769,0.002,1.353-0.58,1.377-1.409C46.505,51.66,46.489,50.983,46.489,50.307z M41.422,50.26
					c-0.002,0-0.004,0-0.006,0c0-0.726,0.03-1.454-0.008-2.178c-0.037-0.709-0.595-1.222-1.28-1.259
					c-0.715-0.038-1.414,0.456-1.431,1.177c-0.036,1.523-0.015,3.05,0.069,4.571c0.041,0.747,0.648,1.197,1.322,1.173
					c0.738-0.026,1.302-0.591,1.329-1.381C41.441,51.663,41.422,50.961,41.422,50.26z M54.689,35.938
					c0.055-0.006,0.109-0.012,0.164-0.017c0.281-0.801,0.585-1.595,0.837-2.404c0.187-0.599,0.09-1.239-0.496-1.511
					c-0.42-0.195-0.994-0.11-1.492-0.067c-0.108,0.009-0.306,0.415-0.254,0.571C53.832,33.662,54.269,34.797,54.689,35.938z
					 M49.447,43.058c-0.226,0.635-0.378,1.06-0.548,1.537c0.417,0,0.726,0,1.101,0C49.827,44.113,49.677,43.697,49.447,43.058z"/>
				</svg>
				<p>J'ai de la <br/>chance</p>
			</div>
		</div>

		<div id="generateur_global">
			<div class="head">
				<div class="generateur cheveux">
					<svg version="1.1" class="arrow left arrowBodyPrev" viewBox="0 0 71.5 71.2">
						<circle class="circle" cx="35.7" cy="35.6" r="31.7"/>
						<path class="arrowForm" d="M43.4,35.5c-0.1-0.9-0.4-1.7-1.1-2.4l0,0L32,22.8c-0.7-0.7-1.7-0.7-2.4,0l0,0
							c-0.7,0.7-0.7,1.7,0,2.4l9.6,9.6c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-9.6,9.6c-0.7,0.7-0.7,1.7,0,2.4l0,0c0.7,0.7,1.7,0.7,2.4,0
							l10.3-10.4l0,0C42.9,37.3,43.3,36.5,43.4,35.5z"/>
					</svg>
					<div class="imgCand" id="cheveuxCand" data-candidat="Fillon" data-candId="0"><img src="content/Fillon/cheveux.png"></div>
					<svg version="1.1" class="arrow right arrowBodyNext" viewBox="0 0 71.5 71.2">
						<circle class="circle" cx="35.7" cy="35.6" r="31.7"/>
						<path class="arrowForm" d="M43.4,35.5c-0.1-0.9-0.4-1.7-1.1-2.4l0,0L32,22.8c-0.7-0.7-1.7-0.7-2.4,0l0,0
							c-0.7,0.7-0.7,1.7,0,2.4l9.6,9.6c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-9.6,9.6c-0.7,0.7-0.7,1.7,0,2.4l0,0c0.7,0.7,1.7,0.7,2.4,0
							l10.3-10.4l0,0C42.9,37.3,43.3,36.5,43.4,35.5z"/>
					</svg>
				</div>

				<div class="generateur yeux">
					<svg version="1.1" class="arrow left arrowBodyPrev" viewBox="0 0 71.5 71.2">
						<circle class="circle" cx="35.7" cy="35.6" r="31.7"/>
						<path class="arrowForm" d="M43.4,35.5c-0.1-0.9-0.4-1.7-1.1-2.4l0,0L32,22.8c-0.7-0.7-1.7-0.7-2.4,0l0,0
							c-0.7,0.7-0.7,1.7,0,2.4l9.6,9.6c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-9.6,9.6c-0.7,0.7-0.7,1.7,0,2.4l0,0c0.7,0.7,1.7,0.7,2.4,0
							l10.3-10.4l0,0C42.9,37.3,43.3,36.5,43.4,35.5z"/>
					</svg>
					<div class="imgCand" id="yeuxCand"  data-candidat="Fillon" data-candId="0"><img src="content/Fillon/yeux.png"></div>
					<svg version="1.1" class="arrow right arrowBodyNext" viewBox="0 0 71.5 71.2">
						<circle class="circle" cx="35.7" cy="35.6" r="31.7"/>
						<path class="arrowForm" d="M43.4,35.5c-0.1-0.9-0.4-1.7-1.1-2.4l0,0L32,22.8c-0.7-0.7-1.7-0.7-2.4,0l0,0
							c-0.7,0.7-0.7,1.7,0,2.4l9.6,9.6c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-9.6,9.6c-0.7,0.7-0.7,1.7,0,2.4l0,0c0.7,0.7,1.7,0.7,2.4,0
							l10.3-10.4l0,0C42.9,37.3,43.3,36.5,43.4,35.5z"/>
					</svg>
				</div>

				<div class="generateur bouche">
					<svg version="1.1" class="arrow left arrowBodyPrev" viewBox="0 0 71.5 71.2">
						<circle class="circle" cx="35.7" cy="35.6" r="31.7"/>
						<path class="arrowForm" d="M43.4,35.5c-0.1-0.9-0.4-1.7-1.1-2.4l0,0L32,22.8c-0.7-0.7-1.7-0.7-2.4,0l0,0
							c-0.7,0.7-0.7,1.7,0,2.4l9.6,9.6c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-9.6,9.6c-0.7,0.7-0.7,1.7,0,2.4l0,0c0.7,0.7,1.7,0.7,2.4,0
							l10.3-10.4l0,0C42.9,37.3,43.3,36.5,43.4,35.5z"/>
					</svg>
					<div class="imgCand" id="boucheCand"  data-candidat="Fillon" data-candId="0"><img src="content/Fillon/bouche.png"></div>
					<svg version="1.1" class="arrow right arrowBodyNext" viewBox="0 0 71.5 71.2">
						<circle class="circle" cx="35.7" cy="35.6" r="31.7"/>
						<path class="arrowForm" d="M43.4,35.5c-0.1-0.9-0.4-1.7-1.1-2.4l0,0L32,22.8c-0.7-0.7-1.7-0.7-2.4,0l0,0
							c-0.7,0.7-0.7,1.7,0,2.4l9.6,9.6c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-9.6,9.6c-0.7,0.7-0.7,1.7,0,2.4l0,0c0.7,0.7,1.7,0.7,2.4,0
							l10.3-10.4l0,0C42.9,37.3,43.3,36.5,43.4,35.5z"/>
					</svg>
				</div>
			</div>
			<div class="gabarit_candidats"><img src="imgs/gabarit_candidats.png"/>
				<div id="presName"><p><span>Marine Fillomon</span></p></div>
			</div>
		</div>


	</div>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-97392740-1', 'auto');
		ga('send', 'pageview');
	</script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/TweenMax.min.js"></script>
	<script type="text/javascript" src="js/textPlugin.js"></script>
	<script type="text/javascript" src="js/easing.js"></script>
	<script type="text/javascript" src="js/home.js"></script>
</body>
</html>
