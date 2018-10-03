$(document).ready( function() {
        $("#searchButton").click( function(e) {
        var value = $("#searchField").val();
        //console.log(value);
        e.preventDefault();
        var myurl = "https://api.iextrading.com/1.0/stock/"+value+"/ohlc";
        var imgurl = "https://api.iextrading.com/1.0/stock/"+value+"/logo"

        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(parsed_json) {
                var open = parsed_json['open']['price'];
                var close = parsed_json['close']['price'];
                var low = parsed_json['low'];
                var high = parsed_json['high'];
                var everything = "<p>";
                everything += "<br>Open: " + open;
                everything += "<br>Current: " + close;
                everything += "<br>Low: " + low;
                everything += "<br>High: " + high ;
                everything += "</p>";
                $("#results").html(everything);
                
                $.ajax({
                url : imgurl,
                    dataType : "json",
                    success : function(parsed_json) {
                    var img = parsed_json['url'];
                    console.log(img);
                    var everything = "<img src=\"" + img + "\">";
                    console.log(everything);
                      $("#theimage").html(everything);
                    }
                });
                
            }
        });
    });
});

