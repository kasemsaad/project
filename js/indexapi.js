var mycategory=document.querySelectorAll('.navbar li')
console.log(mycategory)
var categorySrc;
var items;
for(var i=0;i<mycategory.length;i++){
   mycategory[i].addEventListener('click',function(e){
      categorySrc=e.target.getAttribute('category')
      getapi(categorySrc)

   })
   
}
async function getapi(categorySrc){
   var resp=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=d903bcdae97d41411a8e54f49fb3b5d0`)
   var endresp=await resp.json()
   apicontainer=endresp.results
   display()
}

getapi(`general`)
let nav=document.getElementById('nav');
let list=document.getElementById('list');
let logOutBtn=document.getElementById('logOutBtn')


function display(){
var box=``;
for(var i=0;i<apicontainer.length;i++){      
   if(apicontainer[i].poster_path!==null&&apicontainer[i].vote_average!==null){
      box+=`
      <div class="col-md-3 pt-3 ">
      <div class="post shadow h-100  ">
      <div class="roundimg  shadow">${apicontainer[i].vote_average}</div>
      <img class"imagapi w-25 " src="${"https://image.tmdb.org/t/p/w500/"+apicontainer[i].poster_path}" alt="">
      </div>
      </div>`

      document.getElementById('showdata').innerHTML=box;
   }
   else{
     
   }
 
 
}
}
logOutBtn.addEventListener('click',function(){
   window.location.assign("index.html")
})

nav.addEventListener('click',function(){
   if (list.classList[2]!=='show'){
      list.classList.add('show')
   }
   else{
      list.classList.remove('show')   
   }

})
ss=JSON.parse(localStorage.getItem('proudcts'))
let box=`<span>${ss[0].NAME}</span>`
document.getElementById('loginname').innerHTML=box
        





let scrolpoinyer=document.getElementById("scrolpoinyer")
      
      scrolpoinyer.addEventListener('click',function(){
         window.scrollTo(0,0)
      })      
      let x=document.getElementById("list")
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