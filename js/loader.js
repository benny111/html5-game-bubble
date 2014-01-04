window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
            	"js/game.js",
                "js/jquery.min.js",
                
            ],
            complete : function() {
                /*$(cover).hover( function(){ alert("Ready....");});*/
                $(cover).hover(GameModule.test());
            }
        }
    ]);

}, false);