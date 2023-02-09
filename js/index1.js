
      $(".icon").animate({opacity: '0', rotate:'360deg'},3000,
      async function(){

        await $('.loading').hide(3000)
setInterval(() => {
   let body1=document.getElementById('body1');

   body1.classList.remove('overflow-hidden')

}, 3000);

      });
      
////////////////////////////////////////////////////////////
      let nav=document.getElementById('nav');
      let list=document.getElementById('list');
      let logOutBtn=document.getElementById('logOutBtn')

      nav.addEventListener('click',function(){
         if (list.classList[2]!=='show'){
            list.classList.add('show')
         }
         else{
            list.classList.remove('show')   
         }

      })

      logOutBtn.addEventListener('click',function(){
         window.location.assign("index.html")
      })
      ////////////////////////////////////////////////////
      let scrolpoinyer=document.getElementById("scrolpoinyer")
      
      scrolpoinyer.addEventListener('click',function(){
         window.scrollTo(0,0)
      })      
      let x=document.getElementById("home")
      let z=x.offsetTop
      window.addEventListener('scroll',function(){
         let scrolwindow=window.scrollY
         if(scrolwindow>z){
            scrolpoinyer.classList.remove('d-none')

                  }
                  else{
                     scrolpoinyer.classList.add('d-none')
      
                  }
      })
/////////////////////////////////////////////////////////
      let boxnav=document.getElementById("boxnav")
      let navbar=document.getElementById("navbar")
      let v=document.getElementById("list")
      let s=v.offsetTop
      window.addEventListener('scroll',function(){
         let scrolwindow=window.scrollY
         if(scrolwindow>s){

            boxnav.classList.remove('p-5')
            boxnav.animate({'width':'100%'},3000)
               // boxnav.classList.add('p-5')

                  }
                  else{
                   
                     setInterval(() => {
                        boxnav.classList.add('p-5')
                        boxnav.classList.add('w-100')

               
                     }, 3000);
                  }
                 
      })
      let rand1;
      let rand2;
      let rand3;
      ss=JSON.parse(localStorage.getItem('proudcts'))
      let box=`  <span>${ss[0].NAME}</span>`
      document.getElementById('loginname').innerHTML=box
setInterval(() => {
   rand1=Math.round(Math.random()*4055)
   rand2=Math.round(Math.random()*5222)
   rand3=Math.round(Math.random()*6055)
   let box1=`<span>${rand1}k</span>`
   console.log(box1)
         document.getElementById('review-random1').innerHTML=box1
         let box2=`<span>${rand2}k</span>`
         console.log(box2)
               document.getElementById('review-random2').innerHTML=box2
               let box3=`<span>${rand3}k</span>`
               console.log(box3)
                     document.getElementById('review-random3').innerHTML=box3
                     
}, 2000);


   