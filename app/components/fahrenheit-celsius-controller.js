app.controller("FahrenheitCelsiusController", function(){
    
    var fcc = this;
    
    fcc.convert = function(f, c){
        if (f && c || !f && !c){
            alert("Please enter one value to convert.")
        }
        else if (f){
            fcc.c = (f - 32)/1.8
        }
        else if (c){
            fcc.f = (c * 1.8) + 31
        }
        
    };
    
    
})