function parle(str) {
    var msg = new SpeechSynthesisUtterance(str);
    msg.text = str;
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(msg);
}

function reflechirUnChiffreAdeviner() {
    var chiffre = Math.ceil(Math.random(10) * 10);
    return chiffre;
}

function demanderDeDonnerUnChiffre(chiffreADeviner, nombreDesEssais, msg, chiffresDejaDonnees, prenom) {
    var niveau = donneLeNiveauDinteligence(nombreDesEssais);
    var chiffreDonnerParEsteban = prompt(msg);
    nombreDesEssais = nombreDesEssais + 1;
    console.log(chiffreDonnerParEsteban);

    chiffresDejaDonnees.push(chiffreDonnerParEsteban);

    if (chiffreDonnerParEsteban == chiffreADeviner) {
        var msgStr = 'Bravo ' + prenom + ', tu as reussi en ' + nombreDesEssais + ' essais, t\'est ' + niveau + '!'
        parle(msgStr);
    } else {
        if (nombreDesEssais >= 6) {
            parle(prenom + ', t null vas te coucher!');
            return;
        }
        // chiffresDejaDonnees = [];
        parle('ratté, ' + prenom + '!');
        var msg = 'Dommage, recommence! ' + "\n" + ' ( tu as déja essayé ' + nombreDesEssais + ' fois)' + "\n" + chiffresDejaDonnees.join(', ');

        demanderDeDonnerUnChiffre(chiffreADeviner, nombreDesEssais, msg, chiffresDejaDonnees, prenom);
    }
}

function donneLeNiveauDinteligence(nombreDesEssais) {
    var niveau;

    if (nombreDesEssais <= 3) {
        niveau = 'trop fort';

    } else if (nombreDesEssais > 3 && nombreDesEssais <= 8) {
        niveau = 'moyen';
    } else {
        niveau = 'faible :p';
    }

    return niveau;
}

function commentTuAppels() {
    var prenom = prompt('Tu t\'appel comment ?');

    if (prenom) {

        Start(prenom);
    }

}

function Start(prenom) {
    var nombreDesEssais = 0;
    var chiffresDejaDonnees = [];
    var chiffreADeviner = reflechirUnChiffreAdeviner();

    demanderDeDonnerUnChiffre(chiffreADeviner, nombreDesEssais, 'Donne moi une chiffre entre 1 et 10, et on verra si tu as devinez :D', chiffresDejaDonnees, prenom);

}

commentTuAppels();
