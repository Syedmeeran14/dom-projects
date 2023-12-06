// This function clear all the values
function clearScreen() {
    var clear = document.getElementById("clear")
    document.getElementById("result").value = "";
    }
    
    // This function display values
    function display(value) {
    document.getElementById("result").value += value;
    }

    // This function evaluates the expression and returns result
    function calculate() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
    }
    
    //This function check if press only number otherwise show alert box
    window.addEventListener('keypress',(event)=>{
        operator = ['-','+','/','*']
        key = event.key
        code = event.code
        if (code.includes('Digit') || operator.includes(key) ){
            parent = document.getElementById("result")
            parent.innerText = parent.innerText + key
            console.log(event)
    
        }
        else{
           
            alert("Only numbers are allowed")
        }
        
    })
      function equal(){
        equ = document.getElementById("equal").value
 }
 
///////////////////////////////////////////////////////////////////////////////////////// 

let hd1 = document.createElement('h1');
hd1.setAttribute('id','title'); 
hd1.innerHTML = "ONLINE CALCULATOR";
document.body.append(hd1);

let table = document.createElement('table');
table.setAttribute('class','calculator');

let tr1 = document.createElement('tr');

let td1 = document.createElement('td');
td1.setAttribute('colspan','3');
let input = document.createElement('input');
input.setAttribute('class','display-box');
input.setAttribute('type','text');
input.setAttribute('id','result');

td1.append(input);

let td2 = document.createElement('td');
let b1 = document.createElement('button');
b1.setAttribute('id','clear');
b1.innerHTML="C"
b1.addEventListener('click',function clearScreen() {
    var clear = document.getElementById("clear")
    document.getElementById("result").value = "";
    })

td2.append(b1);
tr1.append(td1,td2);
document.body.append(tr1);

/////////////////////////////////////////////////////////////////////////////////////////////

let tr2 = document.createElement('tr');

let td3 = document.createElement('td');
let b2 = document.createElement('button');
b2.setAttribute('id','1');
b2.innerHTML="1";
b2.addEventListener('click',()=>{display("1")});
td3.append(b2);

let td4 = document.createElement('td');
let b3 = document.createElement('button');
b3.setAttribute('id','2');
b3.innerHTML="2";
b3.addEventListener('click',()=>{display("2")});
td4.append(b3);

let td5 = document.createElement('td');
let b4 = document.createElement('button');
b4.setAttribute('id','3');
b4.innerHTML="3";

b4.addEventListener('click',()=>{display("3")});
td5.append(b4);

let td6 = document.createElement('td');
let b5 = document.createElement('button');
b5.setAttribute('id','division');
b5.innerHTML="/";
b5.addEventListener('click',()=>{display("/")});
td6.append(b5);
tr2.append(td3,td4,td5,td6);
document.body.append(tr2);

/////////////////////////////////////////////////////////////////////////////////////////////////////
let tr3 = document.createElement('tr');

let td7 = document.createElement('td');
let b6 = document.createElement('button');
b6.setAttribute('id','4');
b6.innerHTML="4";
b6.addEventListener('click',()=>{display("4")});
td7.append(b6);

let td8 = document.createElement('td');
let b7 = document.createElement('button');
b7.setAttribute('id','5');
b7.innerHTML="5";
b7.addEventListener('click',()=>{display("5")});
td8.append(b7);

let td9 = document.createElement('td');
let b8 = document.createElement('button');
b8.setAttribute('id','6');
b8.innerHTML="6";
b8.addEventListener('click',()=>{display("6")});
td9.append(b8);    

let td10 = document.createElement('td');
let b9 = document.createElement('button');
b9.setAttribute('id','subtract');
b9.innerHTML="-";
b9.addEventListener('click',()=>{display("-")});    
td10.append(b9);
tr3.append(td7,td8,td9,td10);
document.body.append(tr2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
let tr4 = document.createElement('tr');

let td11 = document.createElement('td');
let b10 = document.createElement('button');
b10.setAttribute('id','7');
b10.innerHTML="7";
b10.addEventListener('click',()=>{display("7")});
td11.append(b10);

let td12 = document.createElement('td');
let b11 = document.createElement('button');
b11.setAttribute('id','8');
b11.innerHTML="8";
b11.addEventListener('click',()=>{display("8")});
td12.append(b11);

let td13 = document.createElement('td');
let b12 = document.createElement('button');
b12.setAttribute('id','9');
b12.innerHTML="9";
b12.addEventListener('click',()=>{display("9")});
td13.append(b12);    

let td14 = document.createElement('td');
let b13 = document.createElement('button');
b13.setAttribute('id','add');
b13.innerHTML="+";
b13.addEventListener('click',()=>{display("+")});    
td14.append(b13);
tr4.append(td11,td12,td13,td14);
document.body.append(tr4);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tr5 = document.createElement('tr');

let td15 = document.createElement('td');
let b14 = document.createElement('button');
b14.setAttribute('id','dot');
b14.innerHTML=".";
b14.addEventListener('click',()=>{display(".")});
td15.append(b14);

let td16 = document.createElement('td');
let b15 = document.createElement('button');
b15.setAttribute('id','zero');
b15.innerHTML="0";
b15.addEventListener('click',()=>{display("0")});
td16.append(b15);

let td17 = document.createElement('td');
let b16 = document.createElement('button');
b16.setAttribute('id','equal');
b16.innerHTML="=";
b16.addEventListener('click', function calculate() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
    });
td17.append(b16);    

let td18 = document.createElement('td');
let b17 = document.createElement('button');
b17.setAttribute('id','multiple');
b17.innerHTML="*";
b17.addEventListener('click',()=>{display("*")});    
td18.append(b17);
tr5.append(td15,td16,td17,td18);
document.body.append(tr5);

table.append(tr1,tr2,tr3,tr4,tr5);
document.body.append(table);
