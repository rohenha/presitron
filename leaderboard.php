<?php
	try{
		$bdd = new PDO('mysql:host=localhost;dbname=presitron;charset=utf8', 'root', 'root');
	}catch (Exception $e){
			return json_encode(0);
	}
	$req = $bdd->prepare('SELECT * FROM presitron ORDER BY presitron.nbrParti DESC ');
	$req->execute();
	$data= array();
	$nbrPartiTot = 0;
	while ($donnees = $req->fetch()){
		$newEntry = array(
			"president1" => $donnees['president1'] ,
			"president2" => $donnees['president2'] ,
			"president3" => $donnees['president3'] ,
			"nbr" => $donnees['nbrParti'],
			"name" => $donnees['nomPerso'],
		);
		$nbrPartiTot += $donnees['nbrParti'];
		array_push($data, $newEntry);

	}

	foreach ($data as &$value) {
		$value["nbr"] =round( ($value["nbr"] /$nbrPartiTot )*100, 1);
	}


 ?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="css/master.min.css">
	<title>Leaderboard | Présitron</title>
</head>
<body id="leaderboard">

	<header>
		<a href="http://www.keley-on-mars.com/" target="_blank" class="pull-right"> <img src="imgs/logo_kom.png"></a>
	</header>

	<div id="colonne_gauche">
		<h1 class="title"><span><span>Classement des candidats</span></span></h1>
		<div id="classement">
			<ul class="container">
				<?php $counter = 1; foreach ($data as &$value) { ?>
				<li>
					<p class="infos">
						<span class="place"><?php echo $counter; ?><sup><?php if($counter == 1){echo "er";}else{echo "ème";} ?></sup></span>
						<span class="pastille"><img src="content/combinaisons/Leaderboard/<?php echo $value["president1"].'-'.$value["president2"].'-'.$value["president3"]; ?>.png" alt=""></span>
						<?php echo $value["name"]; ?></p>
					<p class="pourcentage"><?php echo $value["nbr"]; ?>%</p>
				</li>
				<?php $counter++; } ?>
			</ul>
		</div>
	</div>

	<div id="colonne_droite">
		<div id="podium">
			<div class="second">
				<div class="personne">
					<div class="photo"><img src="content/combinaisons/Leaderboard/<?php echo $data[1]["president1"].'-'.$data[1]["president2"].'-'.$data[1]["president3"]; ?>.png" alt="">
					<img class="shadow" src="imgs/shadow.png" alt=""></div>
					<p class="name"><span class="text"><?php echo $data[1]["name"]; ?></span></p>
				</div>
				<div class="estrade">
					<p>2</p>
				</div>
			</div>
			<div class="first">
				<div class="personne">
					<div class="photo"><img src="content/combinaisons/Leaderboard/<?php echo $data[0]["president1"].'-'.$data[0]["president2"].'-'.$data[0]["president3"]; ?>.png" alt="">
					<img class="shadow" src="imgs/shadow.png" alt=""> <img class="couronne" src="imgs/couronne.png" alt=""></div>
					<p class="name"><span class="text"><?php echo $data[0]["name"];?></span><span class="banniere"></span></p>
				</div>
				<div class="estrade">
					<p>1</p>
				</div>
			</div>
			<div class="third">
				<div class="personne">
					<div class="photo"><img src="content/combinaisons/Leaderboard/<?php echo $data[2]["president1"].'-'.$data[2]["president2"].'-'.$data[2]["president3"]; ?>.png" alt="">
					<img class="shadow" src="imgs/shadow.png" alt=""></div>
					<p class="name"><span class="text"><?php echo $data[2]["name"]; ?></span></p>
				</div>
				<div class="estrade">
					<p>3</p>
				</div>
			</div>
		</div>
		<div class="buttons">
			<a href="index.php" class="btn blue">J'y retourne</a>
			<!-- <a href="" class="btn">Je partage les resultats</a> -->
		</div>
	</div>


	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/TweenMax.min.js"></script>
	<script type="text/javascript" src="js/textPlugin.js"></script>
	<script type="text/javascript" src="js/easing.js"></script>
	<script type="text/javascript" src="js/leaderboard.js"></script>
</body>
</html>
