$( document ).ready(function() { 
 $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + "U1HU2J5EUBPNFN1TMJDFZCH3ZTFEHXKOH2P55A5GCR1P53MM" +
        "&client_secret=" + "EE1ELZUEEFRVTNGNP4HUEMDK3HHNN0KH5IDTKVMDHNAWJ1LM" +
        "&v=20151209" +
        "&near=nyc" + 
        "&query=pizza",
        function(data) {
            console.log(data["response"][""]);
        });
        
});