var carte = new Array("banane.jpg", "cerise.jpg", "fraise.jpg", "framboise.jpg", "kiwi.jpg", "orange.jpg", "peche.jpg", "pomme.jpg", "raisin.jpg", "banane.jpg", "cerise.jpg", "fraise.jpg", "framboise.jpg", "kiwi.jpg", "orange.jpg", "peche.jpg", "pomme.jpg", "raisin.jpg");

function init() {
    shuffle(carte);
    coupjouer = 0;
    temporaire = [];
    compteurdecoup = 0;
    document.getElementById('coupjouer').value = 0;
    document.getElementById('pairetrouver').value = 0;
    document.forms[0].sec.value = 0;
    document.getElementById('gagne').classList.add('test');
    for (var i = 0; i < carte.length; i++) {
        document.getElementById('' + i + '').setAttribute('onclick', 'jouer(' + i + ')')
        document.getElementById('' + i + '').style.backgroundImage = "url('images/back.gif')";
        document.getElementById('' + i + '').classList.remove('noiretblanc');
    }
}

function louper() {
    coupjouer = 0;
    temporaire = [];
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

var couplevalide = 0;

function jouer(x) {
    coupjouer++;
    compteurdecoup++;
    compteurdecouptotal = Math.round((compteurdecoup - 1) / 2);
    document.getElementById('' + x + '').style.backgroundImage = "url('images/" + carte[x] + "')";
    document.getElementById('coupjouer').value = compteurdecouptotal;
    var nomdelacarte = carte[x];
    var emplacement = x;

    temporaire.push(nomdelacarte);
    temporaire.push(emplacement);
    if (coupjouer == 2) {

        if (temporaire[0] == temporaire[2]) {
            couplevalide++;
            console.log(couplevalide);
            document.getElementById(temporaire[1]).style.backgroundImage = "url('images/" + temporaire[0] + "')";
            document.getElementById(temporaire[3]).style.backgroundImage = "url('images/" + temporaire[2] + "')";
            document.getElementById(temporaire[1]).removeAttribute('onclick');
            document.getElementById(temporaire[3]).removeAttribute('onclick');
            var fini1 = document.getElementById(temporaire[1]);
            var fini2 = document.getElementById(temporaire[3]);
            fini1.classList.add('noiretblanc');
            fini2.classList.add('noiretblanc');
            document.getElementById('pairetrouver').value = couplevalide;
            if (couplevalide == 9) {
                document.getElementById('gagne').classList.remove('test');
            } else {

                louper();
            }
        } else {
            for (var i = 0; i < 17; i++) {
                document.getElementById('' + i + '').removeAttribute('onclick');
            }
            setTimeout(function () {
                document.getElementById(temporaire[1]).style.backgroundImage = "url('images/back.gif')";
                document.getElementById(temporaire[3]).style.backgroundImage = "url('images/back.gif')";
                for (var i = 0; i < 17; i++) {
                    document.getElementById('' + i + '').setAttribute('onclick', 'jouer(' + i + ')')
                }
                louper();
            }, 1000);

        }
    }
}

function ajoute() {
    document.forms[0].sec.value = parseInt(document.forms[0].sec.value) + 1;
    setTimeout('ajoute()', 1000);
    document.getElementById('ajoute').removeAttribute('onclick');
}

function retireajoute() {
    document.forms[0].sec.value = 0;
}