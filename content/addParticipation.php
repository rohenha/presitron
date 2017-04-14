<?php
	try{
		// $bdd = new PDO('mysql:host=localhost;dbname=presitron;charset=utf8', 'root', 'root');
		$bdd = new PDO('mysql:host=localhost;dbname=presitron;charset=utf8', 'root', 'ft20q)qU');
	}catch (Exception $e){
	        return json_encode(0);
	}

	$test = $bdd->prepare('SELECT * FROM presitron WHERE president1 = ? AND president2 = ? AND president3 = ? ');
	$test->execute(array($_POST['president1'], $_POST['president2'], $_POST['president3']));
	while ($donnees = $test->fetch()){
		$nbrParti= $donnees['nbrParti'];
		$nbrParti ++;
	}
	if ($test->rowCount() > 0) {
		$req = $bdd->prepare("UPDATE presitron SET nbrParti = ".$nbrParti." WHERE president1 LIKE  '%".$_POST['president1']."%'  AND president2 LIKE  '%".$_POST['president2']."%'  AND president3 LIKE  '%".$_POST['president3']."%' ");
		$req->execute();
	} else {
		$req = $bdd->prepare('INSERT INTO presitron(president1, president2, president3, nbrParti, nomPerso) VALUES(:president1, :president2, :president3, :nbrParti, :nomPerso)');
	   	$req->execute(array(
	   		'president1' => $_POST['president1'],
	   		'president2' => $_POST['president2'],
	   		'president3' => $_POST['president3'],
			"nbrParti" => 1,
			"nomPerso" =>$_POST['name']
	   		));
	}
	return json_encode(1);

 ?>
