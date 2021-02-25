// for header
var h=function header_menu(phone,mobile,email){
	   this.phone=phone;
	   this.mobile=mobile;
	   this.email=email;
	   
	   let header_nav=` <ul>
	                      <li><a><i class="glyphicon glyphicon-earphone icon"></i> ${this.phone}</a></li>
						  
						  <li><a>|</a></li>
						  
						  <li><a> <i class="glyphicon glyphicon-envelope icon"></i>${this.mobile}</a></li>
						  
						  <li><a>|</a></li>
						  
						  <li><a><i class="glyphicon glyphicon-phone icon"></i> ${this.email}</a></li>
	   
	                    </ul>
	   
	   
	   `;
	   document.querySelector('.header_nav >.header_nav_icon').innerHTML+=header_nav;
	
}
   h("07752-406111",9300966633," nicetec@hotmail.com");
   
   // for search
   
   var s=function search(search){
	    this.search=search;
	   
	   let srch=`<a >${this.search}</a>;
	   
	   `;
	   
	   document.querySelector('.search').innerHTML=srch;
	   
   }
   s('APPLY NOW');
   
   // Code for Navigation
   
   document.getElementById('logo').src="img/logo.gif";

var list=document.querySelector(".nav>ul");

  var nav=[

           {
           tabName:'Home',
            tabLink:'index.html',
            title:'Home'
          },
           {
           tabName:'AbautUs',
            tabLink:'abautUs.html',
            title:'AbautUs'
          },
           {
           tabName:'Tally',
            tabLink:'#',
            title:'Tally',

          },
           {
           tabName:'PMKVY',
            tabLink:'#',
            title:'PMKVY'
          },
           {
           tabName:'Our Courses',
            tabLink:'#',
            title:'Our Courses'
          },
           {
           tabName:'NIELIT Courses',
            tabLink:'nielit_Courses.html',
            title:'NIELIT Courses'
          },
		  {
           tabName:'CAT Courses',
            tabLink:'cat_courses.html',
            title:'CAT Courses'
          },
           {
           tabName:'CSR ',
            tabLink:'CSR.html',
            title:'CSR '
          },
		  {
           tabName:'Skill Development',
            tabLink:'skill_development.html',
            title:'Skill Development'
          },
           {
           tabName:'Franchise ',
            tabLink:'franchise.html',
            title:'Franchise '
          },
		  {
           tabName:'Services ',
            tabLink:'services.html',
            title:'services '
          },
		  {
           tabName:'ContactUs ',
            tabLink:'contactUs.html',
            title:'ContactUs '
          },
  ];

   let temq="";
  for(var i=0; i<nav.length; i++){
  	    temq=nav[i];
  	 list.innerHTML+="<li><a href='"+temq.tabLink+"' title='"+temq.title+"'>"+temq.tabName+"</a></li>";
  	    
  }
  let listing=document.querySelectorAll('.nav>ul>li');
  listing[2].setAttribute('class','drop');
  
   listing[2].setAttribute("onclick","myFunction()");
   
   listing[2].innerHTML+=`<i class="fa fa-caret-down down-caret"></i>`;
   listing[3].innerHTML+=`<i class="fa fa-caret-down down-caret"></i>`;
   listing[4].innerHTML+=`<i class="fa fa-caret-down down-caret"></i>`;
 listing[3].setAttribute('class','drop_04');
 listing[3].setAttribute("onclick","myFunction()");
  
  document.querySelector('.drop').innerHTML+=`
                                            <ul id="myDropdown" class="dropdown-content">
                                                <li><a href="#">CPFA</a></li>
												<li><a href="#">ACPFAT</a></li>
												<li><a href="#">TALLY ACE</a></li>
												<li><a href="#">TALLY Pro</a></li>
												<li>
												<a href="tallyguru.html">TALLYGuru</a></li>
										        <li><a href="#">TALLY Modular</a></li>
												<li><a href="#">Introduction to GST</a></li>
												<li><a href="#">Other Modular</a></li>
												 
												</ul>`;
												
												
												
		
  
  
document.querySelector('.drop_04').innerHTML+=`<ul>
						<li><a href="#">About PMKVY</a></li>
						<li><a href="#">Our Courses</a></li>
						
											 
					</ul>`;										
												
  
  // window.addEventListener('scroll',function(){
	     // let x=window.scrollY;
		 // if(x<=100){
			 
			 // document.querySelector('nav').classList.add('fixed');
		 // }
		 // else{
			 // document.querySelector('nav').classList.remove('fixed');
		 // }
	  
  // });
  
 
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.add('dropdown-content')) 
         openDropdown.classList.remove('dropdown-content');
      
	  
    }
  }
  
}
 // code for Article
 
   let art=document.querySelector('article');
   
   art.innerHTML=`<i><h1> Our Services</h1></i>`;
   
   let img=['pmkv.jpg','b.jpg','c.jpg','d.jpg'];
    for(var i=0; i<img.length;i++){
    	 document.querySelector('article').innerHTML+=`<div class="article_img"><a href="#" title="${img[i]}"><img src='img/${img[i]}'></a></div>`;
	}
	 // let imgList=document.querySelector('article>div');
  // imgList.setAttribute('class','article_img');