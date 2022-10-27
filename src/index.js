import './styles.scss';
var chemin = window.location.pathname;
// var url = window.location.href;
//Recherche url de la page
let url1 = "https://franciaflex.fr?VR_SOL_RENO_DESIGN?VR_SOL_RENO_FE_MAC?VR_SOL_RENO_FE_MAC_SOL_SIMU?VR_SOL_RENO_FE_MAC_SOL_SOMFY?VR_SOL_RENO_LUCE?VR_SOL_RENO_SOL_DESIGN?VR_SOL_TRADI_CLASSIC_FF?VR_SOL_TRADI_CLASSIC_SOL_FF?VR_SOL_TRADI_CLASSIC_SOL_FX?VR_SOL_TRADI_COFFRE_SEUL?VR_SOL_TRADI_RAPIDE_MAC?VR_SOL_TRADI_RAPIDE_SOL_MAC?VR_SOL_TRADI_VER_MAC?";
var Test = new Array();
var Test = url1.split('?');
//Récupére l'url en la découpant avec ? dans un tableau
delete Test[0];
//On supprimme la premiere partie https jusqu'au premier ? 
var Test_filtre = Test.filter(function (val) {
    if (val == '' || val == NaN || val == undefined || val == null) {
        return false;
    }
    return true;
});
for (i = 0; i < Test_filtre.length; i++) {
    var x = document.getElementById(Test_filtre[i]);
    if (x.style.display !== "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//Ici on allume juste l'id correspondante a l'url.