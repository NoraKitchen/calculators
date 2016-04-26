app.controller("InchesFeetController", function(){
    
    var ifc = this;
    
    ifc.convert = function(i, f){
        if (i && f || !i && !f){
            alert("Please enter one value to convert.")
        }
        else if (i){
            ifc.f = i / 12;
        }
        else if (f){
            ifc.i = f * 12;
        }
        
    };
    
    
})