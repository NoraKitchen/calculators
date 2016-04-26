app.controller("PoundsKilogramsController", function(){
    
    var pkc = this;
    
    pkc.convert = function(p, k){
        if (p && k || !p && !k){
            alert("Please enter one value to convert.")
        }
        else if (p){
            pkc.k = p / 2.2046;
        }
        else if (k){
            pkc.p = k * 2.2046;
        }
        
    };
    
    
})