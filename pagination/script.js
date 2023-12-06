 let h1 = document.createElement('h1');
  h1.setAttribute('id','title')
  h1.innerHTML = "User Details";
  document.body.append(h1);
  let hr1 = document.createElement('hr');
  document.body.append(hr1);

  let p = document.createElement('p');
  p.setAttribute('id','description');
  p.innerHTML = "This Pagination displays the ID, Name, Email"
  let hr2 = document.createElement('hr');
  document.body.append(p);
  document.body.append(hr2);

  let div1 = document.createElement('div');
  div1.setAttribute('class','table-responsive')
  document.body.append(div1);
  let br1 = document.createElement('br');
  document.body.append(br1);
  let hr3 = document.createElement('hr');
  document.body.append(hr3);

  let div2 = document.createElement('div');
  div2.setAttribute('class','page');
  div2.innerHTML = "Current Page:";
  let p1 = document.createElement('p');
  p1.setAttribute('class','changes')
  div2.append(p1);
  document.body.append(div2);
  let hr4 = document.createElement('hr');
  document.body.append(hr4);

  let div3 = document.createElement('div');
  div3.setAttribute('class','button')
  let b1 = document.createElement('button');
  b1.setAttribute('class','firstBtn')
  b1.innerHTML = "First";
  
  let b2 = document.createElement('button');
  b2.setAttribute('class','prevBtn')
  b2.innerHTML = "Previous";

  let b3 = document.createElement('button');
  b3.setAttribute('class','btn btn1')
  b3.innerHTML = "1";

  let b4 = document.createElement('button');
  b4.setAttribute('class','btn btn2')
  b4.innerHTML = "2";

  let b5 = document.createElement('button');
  b5.setAttribute('class','btn btn3')
  b5.innerHTML = "3";

  let b6 = document.createElement('button');
  b6.setAttribute('class','btn btn4')
  b6.innerHTML = "4";

  let b7 = document.createElement('button');
  b7.setAttribute('class','btn btn5')
  b7.innerHTML = "5";

  let b8 = document.createElement('button');
  b8.setAttribute('class','nextBtn')
  b8.innerHTML = "Next";

  let b9 = document.createElement('button');
  b9.setAttribute('class','lastBtn')
  b9.innerHTML = "Last";

  let div4 = document.createElement('div');
  div4.setAttribute('id','buttons');
  div4.setAttribute('class','d-flex');
  div4.setAttribute('type','button');

  div3.append(b1,b2,b3,b4,b5,b6,b7,b8,b9,div4);
  document.body.append(div3);

 

  
  const firstBtn=document.querySelector(".firstBtn")
  const prevBtn=document.querySelector(".prevBtn")
  const nextBtn=document.querySelector(".nextBtn")
  const lastBtn=document.querySelector(".lastBtn")
  
  const btn1=document.querySelector(".btn1");
  const btn2=document.querySelector(".btn2");
  const btn3=document.querySelector(".btn3");
  const btn4=document.querySelector(".btn4");
  const btn5=document.querySelector(".btn5");
  
  
  //to set value for page
  let page=document.getElementsByClassName("changes")[0];
  
  //set starging item position with 0
  let currentItem=0;
  let curPage=0/5+1;
  
  //Try to load the data for first page when page load
  window.addEventListener("DOMContentLoaded",()=>{
    displayEmployees(currentItem);
    page.innerHTML=(currentItem/5+1);
  })
  
  //event for previous button
  prevBtn.addEventListener("click",()=>{
    //decreament current postion to 5.
    if(0<currentItem){
      currentItem-=5;
      page.innerHTML=(currentItem/5+1);
      displayEmployees(currentItem);
    }else{
      alert("You are already in first page.")
    }
  })
  
  //event for last button
  nextBtn.addEventListener("click",()=>{
    //increase current position to 5.
    if(employees.length-10>currentItem){
      currentItem+=5;
      page.innerHTML=(currentItem/5+1);
      displayEmployees(currentItem);
    }else{
      alert("You are already in last page")
    }
  })
  
  //event first button
  firstBtn.addEventListener("click",()=>{
    if(currentItem>0){
    currentItem=0;
    page.innerHTML=(currentItem/5+1);
    displayEmployees(currentItem);
  }else{
    alert("You are alread in First page")
  }
  })
  
  //event for last button
  lastBtn.addEventListener("click",()=>{
    if(currentItem<employees.length-5){
    currentItem=employees.length-5;
    page.innerHTML=(currentItem/5+1);
    displayEmployees(currentItem);
  }else{
    alert("You are already in last page")
  }
  })
  
  //button events from 1 to 5 buttons 
  btn1.addEventListener("click",()=>{
    currentItem=0;
    page.innerHTML=currentItem/5+1;
    displayEmployees(currentItem);
  });
  btn2.addEventListener("click",()=>{
    currentItem=5;
    page.innerHTML=currentItem/5+1;
    displayEmployees(currentItem);
  });
  btn3.addEventListener("click",()=>{
    currentItem=10;
    page.innerHTML=currentItem/5+1;
    displayEmployees(currentItem);
  });
  btn4.addEventListener("click",()=>{
    currentItem=15;
    page.innerHTML=currentItem/5+1;
    displayEmployees(currentItem);
  });
  btn5.addEventListener("click",()=>{
    currentItem=20;
    page.innerHTML=currentItem/5+1;
    displayEmployees(currentItem);
  });
  
  function displayEmployees(start){
    let join=document.querySelector(".table-responsive");
  
    let rest="";
    for(let i=start;i<start+5;i++){
      rest+=(`
      <div id="k">
      <div >
         <label>Id:</lable>
         <p id="para">${employees[i].id}</p>
      </div>
      <div>
         <label>Name:</lable>
         <p id="name">${employees[i].name}</p>
      </div>
      <div>
         <label >email:</lable>
         <p id="email">${employees[i].email}</p>
      </div>
      </div >
    `);
    join.innerHTML = rest;
  }
  }

  let employees=[
    {
      "id": "1",
      "name": "Conway",
      "email": "conway123@gmail.com"
    },
    {
      "id": "2",
      "name": "Gaikwad",
      "email": "gaikwad123@yahoo.com"
    },
    {
      "id": "3",
      "name": "Devon",
      "email": "devon123@yahoo.com"
    },
    {
      "id": "4",
      "name": "Moeen",
      "email": "moeen123@yahoo.com"
    },
    {
      "id": "5",
      "name": "Ali",
      "email": "ali123@gmail.com"
    },
    {
      "id": "6",
      "name": "Sivam",
      "email": "sivam@yahoo.com"
    },
    {
      "id": "7",
      "name": "Pat",
      "email": "pat123@gmail.com"
    },
    {
      "id": "8",
      "name": "Cummins",
      "email": "cummins123@gmail.com"
    },
    {
      "id": "9",
      "name": "Mitchell",
      "email": "mitchell123@gmail.com"
    },
    {
      "id": "10",
      "name": "Melvin",
      "email": "melvin67@gmail.com"
    },
    {
      "id": "11",
      "name": "lawerence",
      "email": "lawerence@gmail.com"
    },
    {
      "id": "12",
      "name": "Dube",
      "email": "dube37@yahoo.com"
    },
    {
      "id": "13",
      "name": "gowtham",
      "email": "gowtham1@gmail.com"
    },
    {
      "id": "14",
      "name": "Ravindar",
      "email": "ravindar123@yahoo.com"
    },
    {
      "id": "15",
      "name": "Gill",
      "email": "gill123@gmail.com"
    },
    {
      "id": "16",
      "name": "golden",
      "email": "golden@gmail.com"
    },
    {
      "id": "17",
      "name": "Shami",
      "email": "shami123@yahoo.com"
    },
    {
      "id": "18",
      "name": "Siraj",
      "email": "siraj123@yahoo.com"
    },
    {
      "id": "19",
      "name": "geo",
      "email": "geo98@gmail.com"
    },
    {
      "id": "20",
      "name": "Sam",
      "email": "sam12310@yahoo.com"
    },
    {
      "id": "21",
      "name": "Rahul",
      "email": "rahul@yahoo.com"
    },
    {
      "id": "22",
      "name": "cathrine",
      "email": "cathrine@yahoo.com"
    },
    {
      "id": "23",
      "name": "Travis",
      "email": "travis123@gmail.com"
    },
    {
      "id": "24",
      "name": "Steve",
      "email": "steve123@gmail.com"
    },
    {
      "id": "25",
      "name": "William",
      "email": "william12390@gmail.com"
    },
  
  ]
