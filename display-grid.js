function grider() {
    console.log('resize')
    // clean elements existants
    $('.guide, .numGuide').remove();
    var baseGrid = 24;
    var body = document.body;
    var firtsTile = '.tile:first-child';
    var secondTile = '.tile:nth-child(2)';
    var thirdTile = '.tile:nth-child(3)';
    var pageContent = '.page-content';
    var tileCollection = '.tile-collection';
    //
    var siteHome = '#content-container';
    var siteHomeFullWith = '.full-width';
    var plpPolos = '.container-category';
    var what = '.whatsnew-title';
    var main = 'main';
    //
    var productOverview = '.product-overview'
    //
    var site = '.site-container';
    resultsList = '.results-list';
    allstoresContainer = '.allstores-container';
    var container = '#checkout-main';
    var containerHeader = '.header-banner > .container'
    var tileTarget = containerHeader;
    //
    var elementTarget = document.querySelector(tileTarget);
    var infosElementtarget = elementTarget.getBoundingClientRect();
    var colorGuide = '#' + Math.floor(Math.random() * 16777215).toString(16);

    function createNumberGuide(baseGrid, posLeft, id) {
        var numGuide = document.createElement('div');
        var styles = [];
        var left = 'left: ' + posLeft + 'px;';
        var bottom = id % 2 < 1 ? 0 : 30;
        var colorNum = 'black';
        var width = infosElementtarget.width / baseGrid;
        styles.push('position:fixed;', 'bottom:' + bottom + 'px;', 'font-size:' + ((width / 3) * 2) + 'px;', 'background: rgba(0, 244, 15, 0.36);', 'width:' + width + 'px;', 'height:30px;', 'text-align:center;', 'line-height:30px;', 'text-shadow: white 0 0 10px;', 'color: ' + colorNum + ';', 'z-index: 9999999999 !important;', left);

        numGuide.classList.add('numGuide');

        id = document.createTextNode(id + 1);
        numGuide.appendChild(id);
        numGuide.setAttribute('style', styles.join(' '));

        var guides = [];
        var numbers = [];
        return $(numGuide);
    }

    function createGuide(left) {
        var guide = document.createElement('div');
        var styles = [];
        left = 'left: ' + left + 'px;';

        styles.push('position:absolute;', 'opacity: 0.5;', 'top:0;', ' z-index: 99999999999 !important;', 'border: 1px solid ' + colorGuide + ';', 'height:200%;', left);

        guide.classList.add('guide');
        guide.setAttribute('style', styles.join(' '));

        return guide;
    }

    function generateGuides(targetElem, baseGrid) {
        baseGrid = baseGrid || 12;
        var tempPos;
        var left = targetElem.left;
        var space = targetElem.width / baseGrid;
        var guides = [];
        var numbers = [];
        for (var i = 0; i <= baseGrid; i++) {
            tempPos = left + (space * i);
            guides.push(createGuide(tempPos));

            if (i <= (baseGrid - 1)) {
                numbers.push(createNumberGuide(baseGrid, tempPos, i));
            }
        }

        return {
            'guides': guides,
            'numbers': numbers
        };
    }

            var grid = generateGuides(infosElementtarget, baseGrid);
            $('body').append(grid.guides);
            $('body').append(grid.numbers);
//             $(window).on('resize', grider);
}

addJquery()
grider()
function addJquery() {
        var scriptElement = document.createElement('script');
        scriptElement.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';
        document.body.appendChild(scriptElement);
}

