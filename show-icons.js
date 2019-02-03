var urlCssToParse = 'https://viseo04-tech-prtnr-na06-dw.demandware.net/on/demandware.static/Sites-RefArchSiteDev-Site/-/en_US/v1548172657624/css/global.css'

$.get('', function(data){
    var icons = getOcurrences(data);
    console.log(icons)
    var htmlIcons = icons.map(function(curr) {
        return '<div style="text-align:center; padding:10px; display:flex;"><span class="icon-font ' + (curr.replace(':before', ''))+ '"></span></div>';
    });
    
    $('body').append('<div id="target" />');
    $('#target').attr('style', 'display:flex;').append(htmlIcons);
    

});

function getOcurrences(str) {
  var regExp = /\.(fa-\D+):before/gmi;
  return (regExp.exec(str) || []);
}
