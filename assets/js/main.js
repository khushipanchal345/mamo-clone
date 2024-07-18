/**
* Template Name: Siimple
* Template URL: https://bootstrapmade.com/free-bootstrap-landing-page/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
   "use strict";
 
   /**
    * Easy selector helper function
    */
   const select = (el, all = false) => {
     el = el.trim()
     if (all) {
       return [...document.querySelectorAll(el)]
     } else {
       return document.querySelector(el)
     }
   }
 
   /**
    * Easy event listener function
    */
   const on = (type, el, listener, all = false) => {
     let selectEl = select(el, all)
     if (selectEl) {
       if (all) {
         selectEl.forEach(e => e.addEventListener(type, listener))
       } else {
         selectEl.addEventListener(type, listener)
       }
     }
   }
 
   /**
    * Mobile nav toggle
    */
   const toogleNav = function() {
     let navButton = select('.nav-toggle')
     navButton.classList.toggle('nav-toggle-active')
     navButton.querySelector('i').classList.toggle('bx-x')
     navButton.querySelector('i').classList.toggle('bx-menu')
 
     select('.nav-menu').classList.toggle('nav-menu-active')
   }
   on('click', '.nav-toggle', function(e) {
     toogleNav();
   })
 
   /**
    * Mobile nav dropdowns activate
    */
   on('click', '.nav-menu .drop-down > a', function(e) {
     e.preventDefault()
     this.nextElementSibling.classList.toggle('drop-down-active')
     this.parentElement.classList.toggle('active')
   }, true)
 
   /**
    * Scrool links with a class name .scrollto
    */
   on('click', '.scrollto', function(e) {
     if (select(this.hash)) {
       select('.nav-menu .active').classList.remove('active')
       this.parentElement.classList.toggle('active')
       toogleNav();
     }
   }, true)
 
 })()
 
 
 
 


 
 
 
 function abc()
 {
 
    /*======Name validation*/
 var name;
 name=window.document.frm.name.value;
 var thanks_msg=0;
 
 name=name.toUpperCase();
 var x=name.length;
 var ch;
 var count=0;
   for(var i=0; i<=x-1; i++)
   {
      ch=name.charAt(i);
      if(ch>= "A" && ch<= "z" || ch==" ")
      {
       count++;
      }
   }
    if(count==x)
    {
       thanks_msg=1;
    }
    
    if(count!=x)
    {
       alert("Invalid Name");
    }
 
    if(name=="")
    {
       alert("Please First Enter The Name ");
    }
    
    /*======Email validation*/
    var email;
    email=window.document.frm.email.value;
    var n=email.length;
    var x=email.substr(n-10,10);
    if(x=="@gmail.com" || x=="@yahoo.com")
    {
       thanks_msg=5;
    }
    else
    {
       if(email=="")
       {
          alert("Please Enter Your E-mail");
       }
       else
       {
          alert("Invalid E-mail")
       }
    }
    
 
 
 
    /*=============subject validation=============*/
 var subject;
 subject=window.document.frm.subject.value;
 
 subject=subject.toUpperCase();
 var x=subject.length;
 var chs;
 var count=0;
   for(var i=0; i<=x-1; i++)
   {
      chs=subject.charAt(i);
      if(chs>= "A" && chs<= "z" || chs==" " || chs=="_" || chs=="-")
      {
       count++;
      }
   }
    if(count==x)
    {
       thanks_msg=4;
    }
    
    if(count!=x)
    {
       alert("Invalid Subject");
    }
 
    if(subject=="")
    {
       alert("Please Enter The Subject ");
    }
 
 /* ==============message validation======= */
 var message;
 message=window.document.frm.message.value;
 
 message=message.toUpperCase();
 var y=message.length;
 var chs;
 var count=0;
   for(var i=0; i<=y-1; i++)
   {
      chs=message.charAt(i);
      if(chs>= "A" && chs<= "z" || chs==" " || chs=="_" || chs=="-")
      {
       count++;
      }
   }
    if(count==y)
    {
       thanks_msg=3;
    }
    
    if(count!=y)
    {
       alert("Invalid Message");
    }
 
    if(message=="")
    {
       alert("Please Enter The Message ");
    }
    
    if(count++)
    {
       alert("Sent Sucessfully");
       alert("THANK YOU "+name);     
    }
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 function xyz()
 {
 
    /*======Name validation*/
 var name;
 name=window.document.frm1.name.value;
 var thanks_msg=0;
 
 name=name.toUpperCase();
 var x=name.length;
 var ch;
 var count=0;
   for(var i=0; i<=x-1; i++)
   {
      ch=name.charAt(i);
      if(ch>= "A" && ch<= "z" || ch==" ")
      {
       count++;
      }
   }
    if(count==x)
    {
       thanks_msg=1;
    }
    
    if(count!=x)
    {
       alert("Invalid Name");
    }
 
    if(name=="")
    {
       alert("Please First Enter The Name!");
    }
    
    /*======Email validation*/
    var email;
    email=window.document.frm1.email.value;
    var n=email.length;
    var x=email.substr(n-10,10);
    if(x=="@gmail.com" || x=="@yahoo.com")
    {
       thanks_msg=5;
    }
    else
    {
       if(email=="")
       {
          alert("Enter Your E-mail");
       }
       else
       {
          alert("Invalid E-mail")
       }
    }
    
    if(count++)
    {
       alert("Sent Sucessfully");
       alert("THANK YOU "+name);     
    }
 }
 
 
 