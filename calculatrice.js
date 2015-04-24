var Accum = 0; // contient le nombre avant l'opération (puis aprés opération)
var NewNum = false; // permet de savoir si on efface ou non le contenu de l'affichage
var PendingOp = "";
var memoire= "";
var swapstyle = false; // alterne le style de la page

// fonction pour les numéros préssés
function NumPressed (Num)
{
    if (NewNum) // on efface le précedent contenu et on écrit le nouveau chiffre
    {
	document.calc.calc_resultat.value = Num;
	NewNum = false;
    }
    else // on ajoute au contenu déjà présent le chiffre préssé
    {
	if (document.calc.calc_resultat.value == "0") // on supprime les 0 superflus
            document.calc.calc_resultat.value = Num;
	else
            document.calc.calc_resultat.value += Num;
    }
}
// quand on clique sur un opérateur
function Operation (Op)
{
    var calc_resultat = document.calc.calc_resultat.value; // on stock le nombre courant
    if (NewNum && PendingOp != "=");
    else
    {
	NewNum = true;
	if ( '+' == PendingOp ) // si on a cliqué = et que l'opérateur etait +
            Accum += parseFloat(calc_resultat);
	else if ( '-' == PendingOp ) // si on a cliqué = et que l'opérateur etait -
            Accum -= parseFloat(calc_resultat);
	else if ( '/' == PendingOp ) // si on a cliqué = et que l'opérateur était /
            Accum /= parseFloat(calc_resultat);
	else if ( '*' == PendingOp ) // si on a cliqué = et que l'opérateur etait *
            Accum *= parseFloat(calc_resultat);
	else if ( '%' == PendingOp ) // si on a cliqué = et que l'opérateur était %
            Accum = Accum % parseFloat(calc_resultat);
	else // si on a cliqué autre chose que égal
            Accum = parseFloat(calc_resultat);
	document.calc.calc_resultat.value = Math.round(Accum*100)/100; // arrondi les resultat deux chiffres aprés la virgule
	PendingOp = Op; // on stock le dernier opérateur cliqué
    }
}
function Decimal () // signe "."
{
    var curcalc_resultat = document.calc.calc_resultat.value;
    if (NewNum)
    {
	curcalc_resultat = "0.";
	NewNum = false;
    }
    else
    {
	if (curcalc_resultat.indexOf(".") == -1)
            curcalc_resultat += ".";
    }
    document.calc.calc_resultat.value = curcalc_resultat;
}
function ClearEntry () // efface le contenu. garde le dernier opérateur si présent
{
    document.calc.calc_resultat.value = "";
    NewNum = true;
}

function Neg () // affiche le contraire du nombre courrant
{
    document.calc.calc_resultat.value = parseFloat(document.calc.calc_resultat.value) * -1;
}

function funcspec(Fonction) // les fonctions scientifiques

{

    if(Fonction == "sqrt") // raciné carré

    {

	var x = 0;

	x = eval(window.document.calc.calc_resultat.value);

	window.document.calc.calc_resultat.value = Math.sqrt(x);

    }

    if(Fonction == "pow") // Donne le carré du nombre courant 
	

    {

	var x = 0;

	x = eval(window.document.calc.calc_resultat.value);

	window.document.calc.calc_resultat.value = x * x;

    }

    if(Fonction == "log") // donne le logarithme du nombre courant

    {

	var x = 0;

	x = eval(window.document.calc.calc_resultat.value);

	window.document.calc.calc_resultat.value = Math.log(x);

    }

    
}

function Backwards() // efface le dernier chiffre du nombre courant
{
    var x = (document.calc.calc_resultat.value).length; // prend la taille du nombre courant
    var n = (document.calc.calc_resultat.value).substr(0,x-1); // on recupere le nombre courant sans son dernier chiffre
    document.calc.calc_resultat.value=n; // on affiche le nombre recuperé
}


// function memory(Memory)
// {
//     if (Memory == "M+")
//     {
//     document.calc.calc_resultat.value = document.calc.calc_resultat.value.mplus;
//     }

//     if (Memory == "MR")
//     {
//     document.calc.calc_resultat.value=document.calc.calc_resultat.value+document.calc.calc_resultat.value.mplus;
//     }
//     if (Memory == "M-")
//     {
//     document.calc.calc_resultat.value.mplus = document.calc.calc_resultat.value;
//     }

//     if (Memory = "MC")
//     {
//     document.calc.calc_resultat.value = "";
//     }

// }


function memory_plus() // additionne à la mémoire le nombre courant
{
    memoire += document.calc.calc_resultat.value;
}

function memory_less() // soustrait à la mémoire le nombre courant
{
    memoire -= document.calc.calc_resultat.value;
}

function memory_clear() // vide la mémoire 
{
    memoire = "";
}

function memory_recall() // affiche la mémoire
{
    document.calc.calc_resultat.value = memoire;
}


function show_unshow(id) // fonction qui switch du mode nomal au mode scientifique

{

    if(document.getElementById(id).style.visibility=="hidden") // signifie qu'on était en mode normal

    {

	document.getElementById(id).style.visibility="visible"; // on passe en mode scientifique ( affiche les boutons scientifiques )

	document.getElementById('bouton_texte').value='Normal Mode'; // le bouton pour alterner de mode change de valeur 

    }

    else

    {

	document.getElementById(id).style.visibility="hidden"; // on passe en mode normal ( on cache les boutons scientifiques )

	document.getElementById('bouton_texte').value='Scientific Mode'; // le bouton pour alterner de mode change de valeur

    }

    return true;

}

function swapStyleSheet() // change le style de ma page
{

    if(swapstyle)
    {
	document.getElementById('pagestyle').setAttribute('href', 'calculatrice.css'); 
	// je recupere l'id de mon link, et change l'attribut href par calculatrice.css ( mode normal )
	swapstyle=false;
    }
    else
    {
	document.getElementById('pagestyle').setAttribute('href', 'calculatrice2.css'); 
	// je recupere l'id de mon link, et change l'attribut href par calculatrice2.css (je change de style donc)
	swapstyle=true;
    }
}
