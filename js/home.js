let toggleNavStatus = false;

let toggleNav = function(){
	let getSidebar = document.querySelector(".sidebar");
	let getSidebarUl = document.querySelector(".sidebar ul");
	let getSidebarTitle = document.querySelector(".sidebar span");
	let getSidebarLinks = document.querySelectorAll(".sidebar a");

	if(toggleNavStatus === false){
		
		getSidebarUl.style.visibility = "visible";
		
		getSidebar.style.width = "275px";
		getSidebarTitle.style.opacity = "0.5";
		getSidebar.style.border = "0.5px solid white";
		getSidebar.style.borderLeft = "none";
		getSidebar.style.boxShadow = "14px 13px 14px";

		let arrayLength = getSidebarLinks.length;
		for(let i =0; i<arrayLength; i++){
			getSidebarLinks[i].style.opacity=1;

		}

		toggleNavStatus = true;

	}

	else if(toggleNavStatus===true){
		 
		getSidebar.style.width = "0px";
		getSidebarTitle.style.opacity = "0";
		getSidebar.style.border = "none";
		getSidebar.style.boxShadow = "none";

		
		
		let arrayLength = getSidebarLinks.length;
		for(let i =0; i<arrayLength; i++){
			getSidebarLinks[i].style.opacity=0;

		}

		getSidebarUl.style.visibility = "hidden"
		toggleNavStatus=false;
	}
}




function mouseOver(){
	document.getElementById("profile2").style.visibility = "visible";
}

function mouseOut(){
	document.getElementById("profile2").style.visibility = "hidden";
}



let moved = false;
const menuBtn = document.querySelector('.btn-nav');

menuBtn.addEventListener('click',()=>{
	if(!moved){
		menuBtn.classList.add('open');
		moved = true;
	}else{
		menuBtn.classList.remove('open');
		moved = false;
	}
});



