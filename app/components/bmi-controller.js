app.controller("BmiController", function(){
    
    var bc = this;
    
    bc.calculate = function(weight, height){
        if (!weight || !height){
            alert("Please enter both a weight and height.")
        }
        else {
            bc.bmi = (weight/(Math.pow(height, 2))) * 703
        }
        
    };
    
    
})
