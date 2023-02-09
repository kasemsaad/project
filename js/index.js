
let okay=document.getElementById('okay');
let forget=document.getElementById('forget');
let alert=document.getElementById('alert');
let login=document.getElementById('login');
let Name=document.getElementById('name')
let email=document.getElementById('email')
let password=document.getElementById('password')
let error=document.getElementById('error')
var arr=[];


//////////////////////////////////////////////////////////////////////

   login.addEventListener('click', function(){

      if(validation1()==true&&validation2()==true&&validation3()==true){
         error.classList.add('d-none')
      let product={
         NAME:Name.value,
         EMAIL:email.value,
        PASSOWRD:password.value,
            }
            arr.push(product);

         localStorage.setItem('proudcts',JSON.stringify(arr))
         sdf()

         } else{
            error.classList.remove('d-none')
         }

         
            
   })
   function sdf(){
      window.location.assign('index1.html');

   }

///////////////////////////////////////////////////////////////
okay.addEventListener('click',function(){
   alert.classList.add('d-none')
})
forget.addEventListener('click',function(){
   alert.classList.remove('d-none')
   setInterval(() => {
   }, 8000);

})

////////////////////////////////////////////////////////////////
function validation1(){
   var regx=/^[A-Z][a-z]{3,10}$/
   if(regx.test(Name.value)==true)
   return true
   else {
      return error.innerHTML=`<span>Name Invalid...!</span>`
   }
   }
   function validation2(){
      var regx=/^\w{6,20}@(yahoo|gmail|hotmail).com$/
      if(regx.test(email.value)==true)
      return true
      else {
         return error.innerHTML=`<span>Email Invalid...! You can use letters, numbers & periods </span>`
      }
      }
      function validation3(){
         var regx=/^\w{8,20}$/
         if(regx.test(password.value)==true)
         return true
         else {
            return error.innerHTML=`<span>passowrd Invalid...!<br> Use 8 or more characters with a mix of letters, numbers & symbols
            </span>`
         }
         }
   ////////////////////////////////////////////////////////////

