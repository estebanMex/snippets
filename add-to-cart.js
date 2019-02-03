var currentSite = 'Sites-Loud-Site';
var addToCartUrl = `/on/demandware.store/${currentSite}/en_US/Cart-AddProduct`; //$('.add-to-cart-url').attr('value');
console.log(addToCartUrl)

// 701644391737M
// 750518699578M
// 701644329402M

var form = {

    pid: '701644329402M', // truc rose
    quantity: 4
};
$.ajax({
    url: addToCartUrl,
    method: 'POST',
    data: form,
    success: function(data) {
        console.log(data)
        document.location.href = `/s/${currentSite}/en/us/login-checkout`;
    },
    error: function() {
        console.log('error');
    }
});
