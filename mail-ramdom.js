var mail = getMailramdom()
console.log('==================================')
console.log(mail)
$('[type="email"]').val(getMailramdom(mail))
checkboxChecked()

function getMailramdom() {
    var user = 'user' + (new Date()).getTime()
    return user + '@yopmail.com';
}

function checkboxChecked() {
    $('[id="dwfrm_newsletter_dataprivacyconsent"]').prop('checked', true);
}