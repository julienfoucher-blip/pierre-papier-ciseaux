//debuug
//alert()

/**
 * Consigne : Créer un jeu du Pierre-Feuille-Ciseaux
 * Il est possible d'y ajouter le lézrd et spock
 * IL EST INTERDIT D'Y METTRE LE PUIT, C'EST DE LA TRICHE
 */

//Création une variable main séléctionnant directement le corps de la page HTML

const myMain = document.querySelector('main');

//boutons

//bouton pierre création et liaison à la balise mère
const pierre = document.createElement('button');
pierre.textContent = 'Pierre'
myMain.appendChild(pierre);
pierre.style.cursor = 'pointer';

//bouton papier création et liaison à la balise mère
const papier = document.createElement('button');
papier.textContent = 'Feuille';
myMain.appendChild(papier);
papier.style.cursor = 'pointer';

//bouton ciseaux création et liaison à la balise mère
const ciseaux = document.createElement('button');
ciseaux.textContent = 'Ciseaux';
myMain.appendChild(ciseaux);
ciseaux.style.cursor = 'pointer';

//bouton lézard création et liaison à la balise mère
const lezard = document.createElement('button');
lezard.textContent = 'Lézard';
myMain.appendChild(lezard);
lezard.style.cursor = 'pointer';

//bouton spock création et liaison à la balise mère
const spock = document.createElement('button');
spock.textContent = 'Spock';
myMain.appendChild(spock);
spock.style.cursor = 'pointer';

//bouton info création et liaison à la balise mère
const infos = document.createElement('button');
infos.textContent = 'infos';
myMain.appendChild(infos);
infos.style.cursor = 'pointer';

/** Créer une division avec comme base la div class='wrapper'
 * Créer ensuite un paragraphe nommé resultatVisible qui sert à dire au joueur d'appuyer sur un boutton pour jouer
 * SI le joueur appuie sur un bouton de jeu le texte sera remplacé par le résultat du jeu
 * SINON SI: Le joueur appuie sur le boutton info et le paragaphe d'informations qui est sur cette variable remplacera le texte initial
 * Enfin apprentissage de la variable paragraphe à la variable division
 * ATTENTION TOUS LES TEXTES SONT DES innerHTML pour mettre les résultats en gras mais aussi pour la syntaxe avec des balises saut-de-ligne br !
 */

let maDiv = document.querySelector('div')
    let resultatVisible = document.createElement('p');
            maDiv.appendChild(resultatVisible);
             resultatVisible.textContent = 'cliquez sur l\'un des boutons pour jouer ou sur infos pour avoir les règles du jeu'

//créer le jeu

/**créatoin d'aléatoire, un tableau avec toutes les possibilités de résultats */

let aleatoire = ['pierre', 'feuille', 'ciseaux', 'lezard', 'spock'];

//1- Séléction de la pierre, ajout d'un event listener click
//Lorsque le joueur clique sur le boutton

pierre.addEventListener('click', () => {

/** 2- Création d'IAresult qui séléctionne dans le tableau une valeur aléatoire avec comme longueur, la longueur du tableau.
*/
        
let iAresult = aleatoire[Math.floor(Math.random() * aleatoire.length)];

 /** 3-création d'un if, si iAresult = x valeur donne un résultat disant si le joueur à gagné, perdu ou est à égalité avec la machine
 */

 //Pierre === Pierre donne égalité

        //Cas ou l'ordinateur à tiré la Pierre
        if(iAresult === 'pierre'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Pierre - Pierre : <span>Ordinateur</span> <br> <span>Egalité</span>, vous avez tout deux choisi la pierre !';

        //fond rose car il y à match nul
        resultatVisible.style.backgroundColor = '#737362ff'
        }

//feuille > Pierre donne perdu

        //Cas ou l'ordinateur à tiré la feuille
        else if(iAresult === 'feuille'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Pierre - Feuille : <span>Ordinateur</span> <br> Vous avez <span>perdu</span>, la feuille recouvre la pierre !';

        //fond rouge car le joueur à perdu
        resultatVisible.style.backgroundColor = '#ce2d2dff'
        }

//Spock > Pierre donne perdu

        //Cas ou l'ordinateur à tiré spock
        else if(iAresult === 'spock'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Pierre - Spock : <span>Ordinateur</span> <br> Vous avez <span>perdu</span>, spock vaporise la pierre !';

        //fond rouge car le joueur à perdu
        resultatVisible.style.backgroundColor = '#ce2d2dff'
        }

//Lézard < Pierre donne gagné

        //Cas ou l'ordinateur à tiré le lézard
        else if(iAresult === 'lezard'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Pierre - Lézard : <span>Ordinateur</span> <br> Vous avez <span>gagné</span>, la pierre écrase le léazrd';

        //fond vert car le joueur à gagné
        resultatVisible.style.backgroundColor = '#1dae48ff'
        }

//Ciseaux < Pierre donne gagné

        //Autre condition de tirage de l'ordinateur dans ce cas les ciseaux
        else{

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Pierre - Ciseaux : <span>Ordinateur</span> <br> Vous avez <span>gagné</span>, la pierre écrase les ciseaux !';

        //fond vert car le joueur à gagné
        resultatVisible.style.backgroundColor = '#1dae48ff'
        }
    })

//1- Séléction de la feuille, ajout d'un event listener click
//Lorsque le joueur clique sur le boutton

papier.addEventListener('click', () => {

/** 2- Création d'IAresult qui séléctionne dans le tableau une valeur aléatoire avec comme longueur, la longueur du tableau.
*/

let iAresult = aleatoire[Math.floor(Math.random() * aleatoire.length)];

 /** 3-création d'un if, si iAresult = x valeur donne un résultat disant si le joueur à gagné, perdu ou est à égalité avec la machine
 */

//feuille === feuille resultat nul

        //Cas ou l'ordinateur à choisi la feuille
        if(iAresult === 'feuille'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Feuille - Feuille : <span>Ordinateur</span> <br><span>Egalité</span>, vous avez tout deux choisi la feuille !'

        //fond rose car il y à match nul
        resultatVisible.style.backgroundColor = '#737362ff'
        }

//Ciseaux > feuille donne perdu

        //Cas ou l'ordinateur à choisi les ciseaux
        else if(iAresult === 'ciseaux'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Feuille - Ciseaux : <span>Ordinateur</span> <br> Vous avez <span>perdu</span>, les ciseaux coupent la feuille !';

        //fond rouge car le joueur à perdu
        resultatVisible.style.backgroundColor = '#ce2d2dff'
        }

//spock < feuille donne gagné

        //Le cas ou l'ordinateur à choisi spock
        else if(iAresult === 'spock'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Feuille - Spock : <span>Ordinateur</span> <br> Vous avez <span>gagné</span>, spock est discrédité par le papier ! Quelle indignité !!!';

        //fond vert car le joueur à gagné
        resultatVisible.style.backgroundColor = '#1dae48ff'
        }

//lézard > feuille donne perdu

        //Le cas ou l'ordinateur à choisi le lézard
        else if(iAresult === 'lezard'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Feuille - Lézard : <span>Ordinateur</span> <br> Vous avez <span>perdu</span>, le léazrd mange le papier';

        //fond rouge car joueur à perdu
        resultatVisible.style.backgroundColor = '#ce2d2dff'
        }

//pierre < feuille donne gagné

        //Les autres possibilités de tirage de l'orinateur ici la pierre
        else{

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Feuille - Pierre : <span>Ordinateur</span> <br> Vous avez <span>gagné</span>, la feuille recouvre la pierre !';

        //fond vert car le joueur à gagné
        resultatVisible.style.backgroundColor = '#1dae48ff'
        }
    })

//1- Séléction des ciseaux, ajout d'un event listener click
//Lorsque le joueur clique sur le boutton

ciseaux.addEventListener('click', () => {

/** 2- Création d'IAresult qui séléctionne dans le tableau une valeur aléatoire avec comme longueur, la longueur du tableau.
*/

let iAresult = aleatoire[Math.floor(Math.random() * aleatoire.length)];

 /** 3-création d'un if, si iAresult = x valeur donne un résultat disant si le joueur à gagné, perdu ou est à égalité avec la machine
 */

//ciseaux === ciseaux donne nul

        //Si l'ordinateur tire les ciseaux
        if(iAresult === 'ciseaux'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Ciseaux - Ciseaux : <span>Ordinateur</span> <br> <span>Egalité</span>, vous avez tout deux choisi les ciseaux !';

        //Couleur rose car il y à match nul
        resultatVisible.style.backgroundColor = '#737362ff'
        }

//pierre > ciseaux donne perdu

        //Si l'ordinateur tire la pierre
        else if(iAresult === 'pierre'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Ciseaux - Pierre : <span>Ordinateur</span> <br> Vous avez <span>perdu</span>, les ciseaux sont écrasés par la pierre !';

        //Couleur rouge car le joueur à perdu
        resultatVisible.style.backgroundColor = '#ce2d2dff'
        }

//spock > ciseaux donne perdu

        //Si l'ordinateur à tiré spock
        else if(iAresult === 'spock'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Ciseaux - Spock : <span>Ordinateur</span> <br> Vous avez <span>perdu</span>, spock casse les ciseaux !';

        //Couleur rouge car le joueur à perdu
        resultatVisible.style.backgroundColor = '#ce2d2dff'
        }

//lezard < ciseaux donne gagné

        //Si le tirage donne lézard
        else if(iAresult === 'lezard'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
        resultatVisible.innerHTML = '<span>Vous</span> : Ciseaux - Lézard : <span>Ordinateur</span> <br> Les ciseaux décapitent le lézard, <span>PLAYER WINS !!! FATALITY !!!</span>';

        //Couleur verte car le joueur à gagné
        resultatVisible.style.backgroundColor = '#1dae48ff'
        }

//feuille < ciseaux donne gagné

        //Autres résultats de tirage ici la feuille
        else{

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Ciseaux - Feuille : <span>Ordinateur</span> <br> Vous avez <span>gagné</span>, la feuille est coupé par les ciseaux !';

        //Couleur verte car le joueur à gagné
        resultatVisible.style.backgroundColor = '#1dae48ff'
        }

    })

//1- Séléction du lézard, ajout d'un event listener click
//Lorsque le joueur clique sur le boutton

lezard.addEventListener('click', () => {

/** 2- Création d'IAresult qui séléctionne dans le tableau une valeur aléatoire avec comme longueur, la longueur du tableau.
*/

let iAresult = aleatoire[Math.floor(Math.random() * aleatoire.length)];

 /** 3-création d'un if, si iAresult = x valeur donne un résultat disant si le joueur à gagné, perdu ou est à égalité avec la machine
 */

 //lézard === lézard donne nul

    //Si l'ordinateur tire le lézard
        if(iAresult === 'lezard'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Lézard - Lézard : <span>Ordinateur</span> <br> <span>Egalité</span>, vous avez tout deux choisi le lezard !';

        //Couleur rose car il y à match nul
        resultatVisible.style.backgroundColor = '#737362ff'
        }

//pierre > lézard donne perdu

        //Si l'ordinateur tire la pierre
        else if(iAresult === 'pierre'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Lézard - Pierre : <span>Ordinateur</span> <br> Vous avez <span>perdu</span>, le lezard écrasés par la pierre !';

        //Couleur rouge car le joueur à perdu
        resultatVisible.style.backgroundColor = '#ce2d2dff'
        }

//spock < lézard donne gagné

        //Si l'ordinateur tire spock
        else if(iAresult === 'spock'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Lézard - Spock : <span>Ordinateur</span> <br> Vous avez <span>gagné</span>, spock à été empoisonné par le lézard !';

        //Couleur verte car le joueur à gagné
        resultatVisible.style.backgroundColor = '#1dae48ff'
        }

//ciseaux > lézard donne perdu

        //Si l'ordinateur tire les ciseaux
        else if(iAresult === 'ciseaux'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
        resultatVisible.innerHTML = '<span>Vous</span> : Lézard - Ciseaux : <span>Ordinateur</span> <br> Les ciseaux décapitent le lézard, <span>ORDI WINS !!! FATALITY !!!</span>';

    //Couleur rouge car le joueur à perdu
    resultatVisible.style.backgroundColor = '#ce2d2dff'
        }

//feuille < lézard donne gagné

        //Autres résultats de tirage de l'ordinateur
        //ici la feuilles
        else{

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Lézard - Feuille : <span>Ordinateur</span> <br> Vous avez <span>gagné</span>, la feuille est mangée par le lézard !';

        //Fond vert car le joueur à gagné
        resultatVisible.style.backgroundColor = '#1dae48ff'
        }
    })

//1- Séléction de spock, ajout d'un event listener click
//Lorsque le joueur clique sur le boutton

spock.addEventListener('click', () => {

/** 2- Création d'IAresult qui séléctionne dans le tableau une valeur aléatoire avec comme longueur, la longueur du tableau.
*/

let iAresult = aleatoire[Math.floor(Math.random() * aleatoire.length)];

 /** 3-création d'un if, si iAresult = x valeur donne un résultat disant si le joueur à gagné, perdu ou est à égalité avec la machine
 */

 //spock === spock donne nul

    //Si l'ordinateur tire spock
        if(iAresult === 'spock'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Spock - Spock : <span>Ordinateur</span> <br> <span>Egalité</span>, vous avez tout deux choisi spock !';

        //Met une couleur rose car il y à match nul
        resultatVisible.style.backgroundColor = '#737362ff'
        }

//pierre < spock donne gagné

        //Dans le cas ou l'ordinateur tire la pierre
        else if(iAresult === 'pierre'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Spock - Pierre : <span>Ordinateur</span> <br> Vous avez <span>gagné</span>, spock vaporise la pierre !';

        //Met une couleur verte car le joueur à gagné
        resultatVisible.style.backgroundColor = '#1dae48ff'
        }

//lézard > spock donne perdu

        //Dans le cas ou l'ordinateur tire le lézard
        else if(iAresult === 'lezard'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Spock - Lézard : <span>Ordinateur</span> <br> Vous avez <span>perdu</span>, spock à été empoisonné par le lézard !';

        //Met une couleur rouge car le joueur à perdu
        resultatVisible.style.backgroundColor = '#ce2d2dff'
        }

//ciseaux < spock donne gagné

        //Dans le cas ou l'ordinateur tire ciseaux
        else if(iAresult === 'ciseaux'){

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
        resultatVisible.innerHTML = '<span>Vous</span> : Spock - Ciseaux : <span>Ordinateur</span> <br> Vous avez <span>gagné</span>, spock casse les ciseaux';

        //Met une couleur de fond verte car le joueur à gagné
    resultatVisible.style.backgroundColor = '#1dae48ff'
        }

//feuille > spock donne perdu

    //Dans les autres résultats de tirages ici la feuille
        else{

        /** donne en preier temps le choix des joueurs
         * donne en second temps une phrase de description
         */
            resultatVisible.innerHTML = '<span>Vous</span> : Spock - Feuille : <span>Ordinateur</span> <br> Vous avez <span>perdu</span>, la feuille à discrédité spock ! Allez à la case prison sans passer par la case départ';

        //met une couleur de fond rouge car le joueur à perdu
        resultatVisible.style.backgroundColor = '#ce2d2dff'
        }

    })

//Boutton d'information donne le texte avec les possibilités

    infos.addEventListener('click', () => {
        resultatVisible.innerHTML = `<span>La pierre :</span> Ecrase les ciseaux et le lézard, est recouverte par feuille et est vaporisée par spock <br> <span>La feuille :</span> Est coupée par les ciseaux, recouvre la pierre, est mangée par le lézard et discrédite spock <br> <span>Les ciseaux :</span> Les ciseaux sont cassés par la pierre et spock, coupent la feuille et décapitent le lézard <br> <span>Le lézard :</span> Il mange le papier, empoisonne spock, est écrasé par la pierre et décapité par les ciseaux <br> <span>Spock :</span> Il vaporise la pierre, casse les ciseaux, est empoisonné par le lézard et discrédité par le papier <br><br> <span>Comment fonctionne le site ?</span> <br> Il suffit de cliquer sur un bouton et le programme génèrera un résultat aléatoire et affichera si vous avez gagné ou perdu <br><br> Quelques  références sont cachées à vous de les trouver <br><br> <span>Le texte du site à été mis par défaut à 125% pour les boutons et à 150% pour les résultats pour adapter aux personnes ayant une défficience visuelle</span> `;

    //Fond blanc neutre car non en jeu
        resultatVisible.style.backgroundColor = '#ffffffff'
})