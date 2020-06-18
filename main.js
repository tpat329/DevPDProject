var currentcount=parseInt(document.getElementById
    ("CountNumDisplay").innerHTML ,10);
    
    document.getElementById("up").addEventListener("click", 
    function(){
        console.log("clicked")
        document.getElementById("CountNumDisplay").innerHTML = ++currentcount;
        
    });
    document.getElementById("down").addEventListener("click", 
    function(){
        document.getElementById("CountNumDisplay").innerHTML = --currentcount;
    }); 