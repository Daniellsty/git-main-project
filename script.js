let index=1

function slider(input,slideindex){

     index=slideindex

    let item =document.querySelector(`#${input}`)
   let slide=[...document.querySelector('.nav-images').children]

   slide.forEach((elemnt)=>{
    elemnt.classList.remove('active')
   })


   item.classList.add('active')
   
}

setInterval(()=>{
    index +=1
    if(index==4) {
    index=1
    }
   
    slider(`item${index}`,index)
},3000)



let mainsec=90000


function settime(){
    if(mainsec==0) return

   
    let h=Math.floor(mainsec/3600)
    let m=Math.floor((mainsec%3600)/60)
    let s=(mainsec%3600)%60
    document.querySelector('#hour').innerHTML = `${':'}`+ h
    document.querySelector('#min').innerHTML= `${':'}`+ m
    document.querySelector('#sec').innerHTML=s

}

setInterval(()=>{
    mainsec -=1
   
    settime()
},1000)


