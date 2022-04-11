//    Task 1
var number = 0;


function Plus(){
    number++;
    document.getElementById("text").innerHTML =number;
}

function Reset(){
    number=0;
    document.getElementById("text").innerHTML =number;
}

function Minus(){
    number--;
    document.getElementById("text").innerHTML =number;
}





//    Task 2

function hesabla(){
    let mebleg = document.getElementById("input").value;
    let ay = document.getElementById("ay").value;
    let faiz = document.getElementById("faiz").value;

    mebleg=Number(mebleg);
    ay=Number(ay);
    faiz=Number(faiz);

    let cem = ((((((mebleg*faiz)/100)*ay)/12)+mebleg)/ay);

    document.getElementById("afm").innerHTML=cem;
    document.getElementById("aom").innerHTML=(mebleg/12)+cem;
    document.getElementById("cm").innerHTML=((mebleg/12)+cem)*12;
}



//    Task3
//     var times = 0;
//     var timem = 0;
//     var timeh

// setInterval(function Start() {
    
//     times++;
    
//     if (times==60){
//         times=0;
//         timem++;        
//     }
//     else if(timem==60){
//         timem=0;
//         timeh++;
//     }  
//     document.getElementById("seconds")=times;
//     document.getElementById("minutes")=timem;
// }, 1000);

// function Stop(){
//     timeh=0;
//     timem=0;
//     times=0;
// }


