function togglePanel() {
  let panel=document.querySelector('#panel')
  if(panel.className=="panel"){
    panel.classList.replace("panel","panel-min")
   
    active_user_name_arrow(0)
    activeTextMenuBtn(0)
    activeUserDetails(0)
  }else{
    panel.classList.replace("panel-min","panel")
   
    active_user_name_arrow(1)
    activeTextMenuBtn(1)
  }
}
function activeTextMenuBtn(flag) {

  let userdetails=document.querySelectorAll('.menu .item-menu')
  let items=document.querySelectorAll('.menu .item-menu span')
  if(flag){

      userdetails.forEach(ele=>{
      ele.style.justifyContent='flex-start'
      ele.style.paddingRight='30px'
    });
    items.forEach(ele=>{
    ele.style.display="block"
    })
  }else{
   items.forEach(ele=>{

    ele.style.display="none"

   })
   userdetails.forEach(ele=>{
    ele.style.justifyContent="center"
    ele.style.paddingRight='0px'
   })
  }

 
}


function activeUserDetails(flag) {
  let userdetails=document.querySelector(".section .details")
  let arrow=document.querySelector(".profile i")
  if(flag){
   userdetails.style.display="block";
   arrow.className='fas fa-angle-up';
  }else{
 
   userdetails.style.display="none";
   arrow.className='fas fa-angle-down';
  }
 

 
}

function active_user_name_arrow(flag) {
 
  let userdetails=document.querySelector('.profile')
  let userspan=document.querySelector('.profile span')
  let arrow=document.querySelector('.profile i')

  if(flag){
  
  
    userdetails.style.justifyContent='space-between'
    userspan.style.display='block';
    arrow.style.display='block';
  }else{
    userdetails.style.justifyContent='center';
    userspan.style.display='none';
    arrow.style.display='none';
  }
}




function toggleUserDetails() {
 
 let userdetails=document.querySelector(".section .details")
 let arrow=document.querySelector(".profile i")
 if(userdetails.style.display!="none"){
  userdetails.style.display="none";
  arrow.className='fas fa-angle-down';
 }else{

  userdetails.style.display="block";
  arrow.className='fas fa-angle-up';
 }
  
}

  
  var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: ["هندزفری", "هدفون", "کیف هندزفری", "محافظ", "شارژر "],
            datasets: [
              {
                label: "",
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                ],
                
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              
            }
          }
        });





