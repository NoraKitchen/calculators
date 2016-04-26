app.controller("MilesKilosController", function(){
    
    var mkc = this;
    
    mkc.convert = function(miles, km){
        if (miles && km || !miles && !km){
            alert("Please enter one value to convert.")
        }
        else if (miles){
            mkc.km = miles*1.6214
        }
        else if (km){
            mkc.miles = km*0.6214
        }
        
    };
    
    
})