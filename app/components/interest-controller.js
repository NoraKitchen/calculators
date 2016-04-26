app.controller("InterestController", function() {
    
    var ic = this;
    
    ic.calculate = function(principal, interest, period){
        ic.finalBalance = (Math.pow((1 + interest*0.01), period)) * principal;
    }
    
    
})