function selectFun(ID) {
    var x = document.getElementById(ID);

    var plans = document.getElementsByClassName('plan');
    for (var i = 0; i < plans.length; i++) {
        plans[i].style.border = "1.35px solid rgb(210, 209, 209)";
    }


    x.style.border = "1.35px solid black";

    if(ID==="plan-4"){
        document.getElementsByClassName("bttn")[0].href="e-afterLogin-home.html";
    }else{
        document.getElementsByClassName("bttn")[0].href="#";
    }
}
