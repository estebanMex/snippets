$('.veil').remove();
$('.infos').remove();
$('[class*="bodycopy"], [class*="highlight"]').each((index, elem)=> {
	var style = window.getComputedStyle(elem);
	var classList = $(elem).attr('class');
	var fontSizes = 'font-sizes: ' + style.getPropertyValue('font-size');
	var fontFamily = 'font-family: ' + style.getPropertyValue('font-family');
	var fontColor = 'color: ' + rgb2hex( style.getPropertyValue('color'));
	var letterSpacing = 'letter-spacing: ' + style.getPropertyValue('letter-spacing');
	var lineHeight = 'line-height: ' + style.getPropertyValue('line-height');	 
	console.log(style);
		
 $(elem)
 .after('<textarea cols="20" rows="10" class="infos" style="margin:20px 0;"> classes[ ' + classList + " ] \n" + lineHeight + "\n" + fontSizes + "\n" + fontFamily +  "\n" + fontColor +  "\n" + letterSpacing + '</textarea>');
})


function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}