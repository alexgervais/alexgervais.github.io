var gNQ4 = null;
window.onload = function(){
var page = null;
indiceWindow = new DraggableWindow($('indice'),$('indicehandle'));
identFormWindow = new DraggableWindow($('resultIdentForm'),$('resulthandle'));
gNQ4 = getNewNetquiz();
gNQ4.numberPagesQuiz = 6;
gNQ4.initShuffleQuestion(0,5);

gNQ4.mode = 0;
gNQ4.pageLabel = 'Page';
gNQ4.navBarOf = 'de';
gNQ4.quizTitle = 'Le nom, le déterminant et l\'adjectif';
gNQ4.resultTitle = 'Résultats';
gNQ4.showNavTextBox = true;
gNQ4.statusToDo = 'À faire';
gNQ4.statusToRedo = 'À reprendre';
gNQ4.statusCompleted = 'Réussi';
gNQ4.timerTitle = 'Chrono';
gNQ4.sMsgMotsMOrtho = 'Mots mal orthographiés';
gNQ4.sMsgMotsManq = 'Mots manquants (<u>soulignés</u>)';
gNQ4.sMsgMotsTrop = 'Mots en trop [entre crochets]';

gNQ4.goodAnswerLabel = 'Bonne réponse';
gNQ4.wrongAnswerLabel = 'Mauvaise réponse';
gNQ4.incompleteAnswerLabel = 'Réponse incomplète';
gNQ4.solutionLabel = 'Solution';
gNQ4.suggestionLabel = 'Réponse suggérée';
gNQ4.point = 'point';
gNQ4.points = 'points';
gNQ4.navbResult = 'Résultats';
gNQ4.navbRedo = 'Reprendre';
gNQ4.navbSolution = 'Solution';
gNQ4.navbValidate = 'Valider';
gNQ4.resultButtonRedo = 'Recommencer';
gNQ4.resultButtonSendTo = 'Envoyer à';
gNQ4.resultButtonPrint = 'Imprimer';
gNQ4.resultButtonOK = 'OK';
gNQ4.resultButtonCancel = 'Annuler';
gNQ4.removeHiliteLabel = 'Effacer les marques';
gNQ4.resultHeaderCol0 = 'Page';
gNQ4.resultHeaderCol1 = 'Nombre dessais';
gNQ4.resultHeaderCol2 = 'Temps de réponse';
gNQ4.resultHeaderCol3 = 'Points';
gNQ4.resultHeaderCol4 = 'Statut';
gNQ4.resultIdentTitle = 'Renseignements sur le répondant';
gNQ4.rifLblLastName = 'Nom';
gNQ4.rifLblName = 'Prénom';
gNQ4.rifLblCode = 'Code d\'étudiant';
gNQ4.rifLblGroup = 'Groupe';
gNQ4.rifLblEmail = 'Courriel';
gNQ4.rifLblOther = 'Autre';
gNQ4.msgRestartQuiz = 'La commande «Recommencer» efface toutes les réponses et les résultats. Si vous ne voulez pas effacer ces résultats, ou si vous voulez les faire imprimer avant de reprendre le questionnaire, cliquez sur «Annuler», sinon cliquez sur «OK».';
gNQ4.decimalSymbol = 0;
gNQ4.bgSkinColor = '797979';



page = gNQ4.newPage();
page.title = '';
page.initQuestionMarquage(0);
page.statement = 'Dans le poème suivant, identifiez en jaune les déterminants, en bleu les noms et en mauve les adjectifs.';
page.consigne = 'Pour marquer (ou mettre en surbrillance) une expression, sélectionnez-la, puis cliquez sur le carré de la couleur appropriée. Pour enlever le marquage, sélectionnez le texte mis en surbrillance, puis cliquez sur le bouton « Effacer les marques ». (Attention! Si vous voulez changer la couleur de marquage dune expression déjà marquée, il est préférable deffacer dabord lancienne couleur.)';
page.question.addMainText('Poème<br>Soir d\'hiver<br>Émile Nelligan (1879-1941)<br><br>Ah! comme la neige a neigé!<br>Ma vitre est un jardin de givre.<br>Ah! comme la neige a neigé!<br>Qu\'est-ce que le spasme de vivre<br>À la douleur que j\'ai, que j\'ai.<br><br>Tous les étangs gisent gelés,<br>Mon âme est noire! Où-vis-je? où vais-je?<br>Tous ses espoirs gisent gelés:<br>Je suis la nouvelle Norvège<br>D\'où les blonds ciels s\'en sont allés.<br>Pleurez, oiseaux de février, <br>Au sinistre frisson des choses,<br>Pleurez oiseaux de février,<br>Pleurez mes pleurs, pleurez mes roses,<br>Aux branches du genévrier.<br><br>Ah! comme la neige a neigé!<br>Ma vitre est un jardin de givre.<br>Ah! comme la neige a neigé!<br>Qu\'est-ce que le spasme de vivre<br>À tout l\'ennui que j\'ai, que j\'ai...');
page.question.iFautePond = '1';
page.question.addChoice(0, 4, '518cd4');
page.question.addChoice(9, 12, '518cd4');
page.question.addChoice(16, 20, '518cd4');
page.question.addChoice(25, 29, '518cd4');
page.question.addChoice(31, 38, '518cd4');
page.question.addChoice(69, 70, 'd0c400');
page.question.addChoice(72, 76, '518cd4');
page.question.addChoice(90, 91, 'd0c400');
page.question.addChoice(93, 97, '518cd4');
page.question.addChoice(103, 104, 'd0c400');
page.question.addChoice(106, 112, '518cd4');
page.question.addChoice(116, 120, '518cd4');
page.question.addChoice(136, 137, 'd0c400');
page.question.addChoice(139, 143, '518cd4');
page.question.addChoice(171, 172, 'd0c400');
page.question.addChoice(174, 179, '518cd4');
page.question.addChoice(195, 196, 'd0c400');
page.question.addChoice(198, 205, '518cd4');
page.question.addChoice(233, 240, 'd0c400');
page.question.addChoice(242, 247, '518cd4');
page.question.addChoice(256, 260, '8f6bd6');
page.question.addChoice(266, 268, 'd0c400');
page.question.addChoice(270, 272, '518cd4');
page.question.addChoice(278, 282, '8f6bd6');
page.question.addChoice(311, 318, 'd0c400');
page.question.addChoice(320, 326, '518cd4');
page.question.addChoice(335, 339, '8f6bd6');
page.question.addChoice(353, 354, 'd0c400');
page.question.addChoice(356, 363, '8f6bd6');
page.question.addChoice(365, 371, '8f6bd6');
page.question.addChoice(381, 384, 'd0c400');
page.question.addChoice(385, 390, '8f6bd6');
page.question.addChoice(392, 396, '518cd4');
page.question.addChoice(427, 433, '518cd4');
page.question.addChoice(438, 444, '518cd4');
page.question.addChoice(451, 452, 'd0c400');
page.question.addChoice(454, 461, '8f6bd6');
page.question.addChoice(463, 469, '518cd4');
page.question.addChoice(471, 473, 'd0c400');
page.question.addChoice(475, 480, '518cd4');
page.question.addChoice(494, 500, '518cd4');
page.question.addChoice(505, 511, '518cd4');
page.question.addChoice(525, 527, 'd0c400');
page.question.addChoice(529, 534, '518cd4');
page.question.addChoice(545, 547, 'd0c400');
page.question.addChoice(549, 553, '518cd4');
page.question.addChoice(559, 561, 'd0c400');
page.question.addChoice(572, 573, 'd0c400');
page.question.addChoice(603, 604, 'd0c400');
page.question.addChoice(606, 610, '518cd4');
page.question.addChoice(624, 625, 'd0c400');
page.question.addChoice(627, 631, '518cd4');
page.question.addChoice(637, 638, 'd0c400');
page.question.addChoice(640, 645, '518cd4');
page.question.addChoice(649, 654, '518cd4');
page.question.addChoice(670, 671, 'd0c400');
page.question.addChoice(673, 677, '518cd4');
page.question.addChoice(705, 706, 'd0c400');
page.question.addChoice(708, 713, '518cd4');
page.question.addChoice(729, 735, 'd0c400');
page.question.addChoice(736, 740, '518cd4');
page.question.addColor('d0c400', 'Déterminant', 'Bravo!<br><br>Un déterminant est un receveur d\'accord qui précède généralement le nom.', 'Ce n\'est pas un déterminant.<br><br>Le déterminant est un précède le nom ou le pronom qu\'il précise.', 'Oups! Tu as oublié d\'identifier quelques déterminants. Parfois, deux mots peuvent jouer le rôle de déterminant.');
page.question.addColor('518cd4', 'Nom', 'Bravo!<br><br>Un nom est un donneur d\'accord.', 'Ce n\'est pas un nom.<br><br>Le nom désigne une idée, un être ou une chose.', 'Oups! Tu n\'as oublié d\'identifier quelques noms.');
page.question.addColor('8f6bd6', 'Adjectif', 'Bravo!<br><br>L\'adjectif est un receveur d\'accord.', 'Ce n\'est pas un adjectif.<br><br>L\'adjectif est un mot qui sert à classer ou à qualifier un être ou un objet.', 'Oups! Tu as oublié d\'identifier quelques adjectifs.');
page.readableType = 'Marquage';
page.question.ponderation = 64.0;

page = gNQ4.newPage();
page.title = '';
page.initQuestionClassement(1);
page.statement = 'Classez les noms suivants.';
page.consigne = 'Pour classer les différents éléments (mots ou images), glissez-les, puis relâchez-les dans le classeur approprié au bas de lécran.';
page.question.elementType = 0;
page.question.tagType = 0;
page.question.addContainer('Noms communs', 1);
page.question.setGoodAnswer('Bravo!<br>', 1);
page.question.setWrongAnswer('Ce n\'est pas un nom commun.<br><br>Le nom propre se distingue du nom commun par la présence d\'une majuscule.', 1);
page.question.addChoice('neige', 1);
page.question.addChoice('frisson', 1);
page.question.addChoice('verglas', 1);
page.question.addChoice('patinoire', 1);
page.question.addChoice('glace', 1);
page.question.addChoice('manteau', 1);
page.question.addChoice('ville', 1);
page.question.addChoice('froid', 1);
page.question.addChoice('vent', 1);
page.question.addChoice('frimas', 1);
page.question.addContainer('Noms prores', 2);
page.question.setGoodAnswer('Bravo!', 2);
page.question.setWrongAnswer('Ce n\'est pas un nom propre.<br><br>Le nom propre se distingue du nom commun par la présence d\'une majuscule.', 2);
page.question.addChoice('Montréal', 2);
page.question.addChoice('Québec', 2);
page.question.addChoice('Montréalais', 2);
page.question.addChoice('Bois-de-Boulogne', 2);
page.question.addChoice('Marie-Sisi', 2);
page.question.addChoice('Nelly', 2);
page.question.addChoice('Canada', 2);
page.question.addChoice('Tremblay', 2);
page.question.addChoice('Roy', 2);
page.question.addChoice('Aquin', 2);
page.question.orientation = '0';
page.question.shuffle();
page.readableType = 'Classement';
page.question.ponderation = 20.0;

page = gNQ4.newPage();
page.title = '';
page.initQuestionClassement(2);
page.statement = 'Classez les adjectifs suivants.';
page.consigne = 'Pour classer les différents éléments (mots ou images), glissez-les, puis relâchez-les dans le classeur approprié au bas de lécran.';
page.question.elementType = 0;
page.question.tagType = 0;
page.question.addContainer('Adjectifs classifiants', 1);
page.question.setGoodAnswer('Bravo!', 1);
page.question.setWrongAnswer('Un adjectif classifiant sert à classer un être ou un objet selon une de ses caractéristiques.', 1);
page.question.addChoice('magnifique', 1);
page.question.addChoice('étrange', 1);
page.question.addChoice('courageux', 1);
page.question.addChoice('riche', 1);
page.question.addChoice('clair', 1);
page.question.addChoice('héroïque', 1);
page.question.addChoice('mélancolique', 1);
page.question.addChoice('libre', 1);
page.question.addChoice('franc', 1);
page.question.addChoice('bleu', 1);
page.question.addContainer('Adjectifs qualitifiants', 2);
page.question.setGoodAnswer('Bravo!', 2);
page.question.setWrongAnswer('Un adjectif qualificatif exprime la qualité d\'un être ou d\'une chose.', 2);
page.question.addChoice('premier', 2);
page.question.addChoice('naturel', 2);
page.question.addChoice('hybride', 2);
page.question.addChoice('urbain', 2);
page.question.addChoice('félin', 2);
page.question.addChoice('politique', 2);
page.question.addChoice('civil', 2);
page.question.addChoice('international', 2);
page.question.addChoice('public', 2);
page.question.addChoice('privé', 2);
page.question.orientation = '0';
page.question.shuffle();
page.readableType = 'Classement';
page.question.ponderation = 1.0;

page = gNQ4.newPage();
page.title = '';
page.initQuestionClassement(3);
page.statement = 'Classez les sortes de déterminants suivants.';
page.consigne = 'Pour classer les différents éléments (mots ou images), glissez-les, puis relâchez-les dans le classeur approprié au bas de lécran.';
page.question.elementType = 0;
page.question.tagType = 0;
page.question.addContainer('Déterminants référents', 1);
page.question.setGoodAnswer('Bravo!', 1);
page.question.setWrongAnswer('Un déterminant référent introduit une réalité connue de l\'interlocuteur.', 1);
page.question.addChoice('Défini (ex: le, la, les, l\', au, aux, du et des)', 1);
page.question.addChoice('Démonstratif (ex: ce, cet, cette et ces)', 1);
page.question.addChoice('Possessif (ex: mon, ma, mes, ton, ta, tes, etc.)', 1);
page.question.addChoice('Exclamatif (ex: quel, quelle, quels, quelles et combien de)', 1);
page.question.addChoice('Interrogatif (ex: quel, quelle, quels, quelles et combien de)', 1);
page.question.addChoice('Relatif (ex: lequel, laquelle, lesquel(le)s, auquel, du quel, etc.)', 1);
page.question.addContainer('Déterminants non référents', 2);
page.question.setGoodAnswer('Bravo!', 2);
page.question.setWrongAnswer('Un déterminant non référent introduit une réalité inconnue de l\'interlocuteur.', 2);
page.question.addChoice('Partitif (du, de la, de l\' et des)', 2);
page.question.addChoice('Numéral (un, deux, trois, quatre, etc.)', 2);
page.question.addChoice('Indéfini (un, une, des, nul(le), pas un(e), peu de, quelque(s), tout, tous, etc.)', 2);
page.question.orientation = '0';
page.question.shuffle();
page.readableType = 'Classement';
page.question.ponderation = 9.0;

page = gNQ4.newPage();
page.title = '';
page.initQuestionAssociation(4);
page.statement = 'Associez chacune des sortes de déterminants à la bonne définition.';
page.consigne = 'Pour associer correctement les éléments de droite avec ceux de gauche, glissez et relâchez chacun des éléments de droite sur la case appropriée.';
page.question.addChoice('Déterminant défini', 0, 'Réalité connue', 0, 'Bravo!', 'Une déterminant possessif introduit une réalité connu.<br><br>Exemple:<br>Le poème de Nelligan est très touchant.', 0);
page.question.addChoice('Déterminant démonstratif', 0, 'Chose près dans l\'espace ou dans le discours', 0, 'Bravo!', 'Un déterminant démonstratif introduit une chose près dans l\'espace ou dans le discours.<br><br>Exemple:<br>Ce livre est passionnant.', 0);
page.question.addChoice('Déterminant possessif', 0, 'Appartenance, parenté et possession', 0, 'Bravo!', 'Le déterminant possessif marque un lien d\'appartenance, de possession, voire de parenté.<br>Exemple:<br>Ma curiosité est infinie.', 0);
page.question.addChoice('Déterminant exclamatif', 0, 'Admiration, regret, étonnement, etc.', 0, 'Bravo!', 'Le déterminant exclamatif traduit l\'émotion.<br><br>Exemple:<br>Quelle surprise!', 0);
page.question.addChoice('Déterminant interrogatif', 0, 'Interrogation', 0, 'Bravo!', 'Le déterminant interrogatif est le propre de l\'interrogation.<br><br>Exemple:<br>Combien de monnaie as-tu?', 0);
page.question.addChoice('Déterminant partitif', 0, 'Réalité qui ne se compte pas', 0, 'Bravo!', 'Le déterminant partitif introduit des noms aux traits non comptable.<br><br>Exemple:<br>J\'ajouterais bien du sel.<br>*Ici, nous ne pouvons pas compter le sel.', 0);
page.question.addChoice('Numéral', 0, 'Réalité qui se compte', 0, 'Bravo!', 'Le déterminant numéral introduit un nom comptable.<br><br>Exemple:<br>Trois filles discutent à voix basse.', 0);
page.question.addChoice('Déterminant indéfini', 0, 'Réalité inconnue', 0, 'Bravo!', 'Le déterminant indéfini introduit une réalité inconnue.<br><br>Exemple:<br>Un déchet gisait sur le bord de la ruelle.<br>* Il s\'agit d\'un déchet quelconque...', 0);
page.question.labelType = 0;
page.readableType = 'Associations';
page.question.ponderation = 9.0;

page = gNQ4.newPage();
page.title = '';
page.initQuestionBlankText(5);
page.statement = 'Complétez cet extrait de la nouvelle «Allô» de Monique Proulx en accordant correctement les déterminants et les adjectifs.';
page.consigne = 'Sélectionnez l\'expression correcte dans chaque menu déroulant du texte.';
page.question.questionType = 3;
page.question.createSelect('harmonieuses', 'Mauvaise réponse!<br><br>L\'adjectif s\'accord en genre et en nombre avec le nom «massifs» (masculin/pluriel).', false, 1);
page.question.createSelect('harmonieuse', 'Mauvaise réponse!<br><br>L\'adjectif s\'accord en genre et en nombre avec le nom «massifs» (masculin/pluriel).', false, 1);
page.question.createSelect('harmonieux', 'Bravo!', true, 1);
page.question.createSelect('tranquille', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «flots» (masculin/pluriel).', false, 2);
page.question.createSelect('tranquilles', 'Bravo!', true, 2);
page.question.createSelect('à la', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «fleurs» (féminin/pluriel).', false, 3);
page.question.createSelect('à le', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «fleurs» (féminin/pluriel).', false, 3);
page.question.createSelect('aux', 'Bravo!', true, 3);
page.question.createSelect('innombrable', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «réseaux» (masculin/pluriel).', false, 4);
page.question.createSelect('innombrables', '', true, 4);
page.question.createSelect('le', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «vague» (féminin/singulier).', false, 5);
page.question.createSelect('la', 'Bravo!', true, 5);
page.question.createSelect('la', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «roseaux» (masculin/pluriel).', false, 6);
page.question.createSelect('le', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «roseaux» (masculin/pluriel).', false, 6);
page.question.createSelect('les', 'Bravo!', true, 6);
page.question.createSelect('blond', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «roseaux» (masculin/pluriel).', false, 7);
page.question.createSelect('blonds', 'Bravo!', true, 7);
page.question.createSelect('leur', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «eaux» (féminin/pluriel).<br>Le déterminant s\'accorde en genre et en nombre avec le nom «tiges» (féminin, pluriel).', false, 8);
page.question.createSelect('leurs', 'Bravo!', true, 8);
page.question.createSelect('mobile', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «eaux» (féminin/pluriel).<br>Le déterminant s\'accorde en genre et en nombre avec le nom «tiges» (féminin, pluriel).', false, 9);
page.question.createSelect('mobiles', 'Bravo!', true, 9);
page.question.createSelect('la', 'Mauvaise réponse!<br><br>Devant un nom commençant par une voyelle, on privilégie «l\'».', false, 10);
page.question.createSelect('le', 'Mauvaise réponse!<br><br>Devant un nom commençant par une voyelle, on privilégie «l\'».', false, 10);
page.question.createSelect('l\'', 'Bravo!', true, 10);
page.question.createSelect('douces', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «chant» (masculin/singulier).', false, 11);
page.question.createSelect('douce', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «chant» (masculin/singulier).', false, 11);
page.question.createSelect('doux', '', true, 11);
page.question.createSelect('pittoresque', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «asiles» (masculin/pluriel)', false, 12);
page.question.createSelect('pittoresques', 'Bravo!', true, 12);
page.question.createSelect('Mystérieuses', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «labyrinthe» (masculin/pluriel).', false, 13);
page.question.createSelect('Mystérieuse', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «labyrinthe» (masculin/pluriel).', false, 13);
page.question.createSelect('Mystérieux', '', true, 13);
page.question.createSelect('fraiches', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «labyrinthe» (masculin/singulier).', false, 14);
page.question.createSelect('fraiche', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «labyrinthe» (masculin/singulier).', false, 14);
page.question.createSelect('frais', '', true, 14);
page.question.createSelect('égrenées', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «chapelet» (masculin/singulier).', false, 15);
page.question.createSelect('égrenée', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «chapelet» (masculin/singulier).', false, 15);
page.question.createSelect('égrenés', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «chapelet» (masculin/singulier).', false, 15);
page.question.createSelect('égrené', 'Bravo!', true, 15);
page.question.createSelect('la', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «eaux» (féminin/pluriel).', false, 16);
page.question.createSelect('le', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «eaux» (féminin/pluriel).', false, 16);
page.question.createSelect('les', 'Bravo!', true, 16);
page.question.createSelect('les', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le mot «fois» (féminin/singulier).', false, 17);
page.question.createSelect('le', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le mot «fois» (féminin/singulier).', false, 17);
page.question.createSelect('la', 'Bravo!', true, 17);
page.question.createSelect('premières', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le mot «fois» (féminin/singulier).', false, 18);
page.question.createSelect('premier', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le mot «fois» (féminin/singulier).', false, 18);
page.question.createSelect('premier', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le mot «fois» (féminin/singulier).', false, 18);
page.question.createSelect('première', 'Bravo!', true, 18);
page.question.createSelect('votre', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «ombrages» (masculin/pluriel).', false, 19);
page.question.createSelect('vos', 'Bravo!', true, 19);
page.question.createSelect('la', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «reflets» (masculin/pluriel).', false, 20);
page.question.createSelect('le', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «reflets» (masculin/pluriel).', false, 20);
page.question.createSelect('Les', 'Bravo!', true, 20);
page.question.createSelect('magique', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «reflets» (masculin/pluriel).', false, 21);
page.question.createSelect('magiques', 'Bravo!', true, 21);
page.question.createSelect('votre', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «mirages» (masculin/pluriel).', false, 22);
page.question.createSelect('vos', 'Bravo!', true, 22);
page.question.createSelect('brillantes', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «mirages» (masculin/pluriel).', false, 23);
page.question.createSelect('brillante', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «mirages» (masculin/pluriel).', false, 23);
page.question.createSelect('brillants', '', true, 23);
page.question.createSelect('Des', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «soleil» (masculin/singulier).', false, 24);
page.question.createSelect('Une', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «soleil» (masculin/singulier).', false, 24);
page.question.createSelect('Un', 'Bravo!', true, 24);
page.question.createSelect('chaudes', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «soleil» (masculin/singulier).', false, 25);
page.question.createSelect('chaude', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «soleil» (masculin/singulier).', false, 25);
page.question.createSelect('chauds', 'Bravo!', false, 25);
page.question.createSelect('chaud', '', true, 25);
page.question.createSelect('votre', 'Le déterminant s\'accorde en genre et en nombre avec le nom «abris» (masculin/pluriel).', false, 26);
page.question.createSelect('vos', 'Bravo!', true, 26);
page.question.createSelect('vertes', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «abris» (masculin/pluriel).', false, 27);
page.question.createSelect('verte', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «abris» (masculin/pluriel).', false, 27);
page.question.createSelect('vert', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «abris» (masculin/pluriel).', false, 27);
page.question.createSelect('verts', 'Bravo!', true, 27);
page.question.createSelect('enivrants', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «senteurs» (féminin/pluriel).', false, 28);
page.question.createSelect('enivrant', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «senteurs» (féminin/pluriel).', false, 28);
page.question.createSelect('enivrante', 'Mauvaise réponse!<br><br>L\'adjectif s\'accorde en genre et en nombre avec le nom «senteurs» (féminin/pluriel).', false, 28);
page.question.createSelect('enivrantes', 'Bravo!', true, 28);
page.question.createSelect('au', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «grèves» (féminin/pluriel).', false, 29);
page.question.createSelect('aux', 'Bravo!', true, 29);
page.question.createSelect('cette', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «pays» (masculin/singulier) qui commence par une consonne.<br><br>Attention! Le mot «pays» prend un «s» au singulier.', false, 30);
page.question.createSelect('cet', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «pays» (masculin/singulier) qui commence par une consonne.<br><br>Attention! Le mot «pays» prend un «s» au singulier.', false, 30);
page.question.createSelect('ces', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «pays» (masculin/singulier) qui commence par une consonne.<br><br>Attention! Le mot «pays» prend un «s» au singulier.', false, 30);
page.question.createSelect('ce', 'Bravo!', true, 30);
page.question.createSelect('belles', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «pays» (masculin/singulier) qui commence par une consonne.<br><br>Attention! Le mot «pays» prend un «s» au singulier.', false, 31);
page.question.createSelect('belle', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «pays» (masculin/singulier) qui commence par une consonne.<br><br>Attention! Le mot «pays» prend un «s» au singulier.', false, 31);
page.question.createSelect('bel', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «pays» (masculin/singulier) qui commence par une consonne.<br><br>Attention! Le mot «pays» prend un «s» au singulier.', false, 31);
page.question.createSelect('beau', 'Bravo!', true, 31);
page.question.createSelect('les', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «sylphide» (féminin/singulier).', false, 32);
page.question.createSelect('le', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «sylphide» (féminin/singulier).', false, 32);
page.question.createSelect('la', 'Bravo!', true, 32);
page.question.createSelect('le', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «colibris» (masculin/singulier).', false, 33);
page.question.createSelect('la', 'Mauvaise réponse!<br><br>Le déterminant s\'accorde en genre et en nombre avec le nom «colibris» (masculin/singulier).', false, 33);
page.question.createSelect('les', 'Bravo!', true, 33);
page.question.addMainText('Louis-Honoré FRÉCHETTE   (1839-1908)<br><br>Les Mille-Iles<br><br>Massifs %blank1, édens des flots %blank2, <br>D\'oasis %blank3 fleurs d\'or %blank4 réseaux, <br>Que %blank5 vague caresse et que %blank6 %blank7 roseaux <br>Encadrent du fouillis de %blank8 tiges %blank9.<br><br>Bosquets que %blank10onde berce au %blank11chant des oiseaux, <br>Des zéphirs et des nids %blank12 asiles, <br>%blank13 et %blank14 labyrinthe, Mille-Iles, <br>Chapelet d\'émeraude %blank15 sur %blank16 eaux.<br><br>Quand %blank17 %blank18 fois je vis, sous %blank19 ombrages, <br>%blank20 %blank21 reflets de %blank22 %blank23 mirages, <br>%blank24 %blank25 soleil de juin dorait %blank26 %blank27 abris ;<br><br>D\'%blank28 senteurs allaient des bois %blank29 grèves ; <br>Et je crus entrevoir %blank30 %blank31pays des rêves <br>Où %blank32 sylphide jongle avec %blank33colibris.');
page.readableType = 'Texte lacunaire';
page.question.ponderation = 33.0;
page.imagePath = 'masque.jpg';

gNQ4.init();
}