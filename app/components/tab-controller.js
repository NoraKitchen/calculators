app.controller("TabController", function(){
    var tc = this;
    
    tc.changeTab = function(tabNum){
        tc.tab = tabNum;
    }
});