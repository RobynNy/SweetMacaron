(function() {
	
	/* CHANGE THINGS TO CONST IF NOT REASSIGNED or IF NOT i++*/
	
	/* Div credit photos on menu page */
	 let attributionDiv = document.getElementsByClassName('attribution');
	 let divLength = attributionDiv.length;
     for(i = 0; i < divLength ; i++) {
	     let divText = document.createTextNode(' By Michelle Naherny ')
	     attributionDiv[i].appendChild(divText);
	     let licenseLink = document.createElement('a');
	     let licenseText = document.createTextNode('CC BY-SA 4.0');
	     licenseLink.appendChild(licenseText);
	     licenseLink.setAttribute('href', 'https://creativecommons.org/licenses/by-sa/4.0');
	     attributionDiv[i].appendChild(licenseLink);
	 }
	 
	/* Automatic changing slideshow */
	
	/* Change window.location.pathname = /index.html when website is uploaded and check it works on home page */
	
	let slideIndex = 0;
	if (window.location.pathname === '/G:/Dreamweaver%20Projects/sweet-macaron-2018/index.html') {
       carousal();
	}
	if (window.location.pathname === 'index.html') {
       carousal();
	}
	
    function carousal() {
        let i = 0;
        let x = document.getElementsByClassName('image-slide');
        for (i = 0; i < x.length; i++) {
            x[i].removeAttribute('id', 'image-slide-display');
        }
        slideIndex++;
        if (slideIndex > x.length) {
            slideIndex = 1;
        }
        x[slideIndex - 1].setAttribute('id', 'image-slide-display');
        setTimeout(carousal, 4000); // Image change every 4 seconds
		
		/* Below displays first image slide photo credit */
		let displayCredit = document.getElementsByClassName('credit-div');
		if (slideIndex === 1) {
			displayCredit[0].setAttribute('id', 'display-credit-home');
		} else {
			displayCredit[0].setAttribute('id', 'non-display-credit-home')
		}
    }
	
    /* Turns hamburger icon to x */
    function changeIcon() {
        menuButton.classList.toggle("change");
    }
	
    /* Drop down menu appears after clicking menu icon */
    function dropDown() {
        const menu = document.getElementsByClassName('menu-container')[0];
        if (menu.getAttribute('id') === 'menu-invisible') {
            menu.setAttribute('id', 'menu-visible');
        } else {
            menu.setAttribute('id', 'menu-invisible');
        }
    }

    const menuButton = document.getElementById('icon-container');
    if (menuButton.addEventListener) {
        menuButton.addEventListener('click', function() {
            dropDown();
            changeIcon();
        }, false);
    } else {
        menuButton.attachEvent('onclick', function() {
            dropDown();
            changeIcon();
        });
    }

	/* One-week special offer */
	let today = new Date();
	let specialOfferExpire = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	let date = specialOfferExpire.getDate();
	let month = specialOfferExpire.getMonth() + 1;
	let year = specialOfferExpire.getFullYear();
	let specialOffer = document.getElementById("special-offer");
	specialOffer.textContent += " " + month + "/" + date + "/" + year;
	
	/* Changes contact info displayed when links are clicked 
	   and shows active tab in location tab list */
	function locationDisplay(e){
        if (!e) {
			e = window.event;
		}
		let target = e.target || e.srcElement;
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		let activeLocationList = document.getElementsByClassName('active-location'); //Location info section
		let locationTabs = document.getElementsByClassName('location-tabs'); //To grab all location tab links
		let locationTabClass = locationTabs.className = 'location-tabs'; //Used below to keep the location-tabs class in the html file
		
		for (let i = 0; i < activeLocationList.length; i++) {
		    if (target.getAttribute('id') === 'location-list') { //prevents function when clicking between location list
	            return;
		    }
			if (target.getAttribute('class') === 'aside-tab-li') { //Prevents function when clicking li of location tabs
	            return;
		    }
			activeLocationList[i].className = 'hidden-location';
		}
		
		for (let i = 0; i < locationTabs.length; i++) {	// changes location tab to be inactive
		    if (locationTabs[i].classList.contains('active-location-tab')) {
			    locationTabs[i].className = 'non-active-location-tab' + ' ' + locationTabClass;
			}    
		}
		
        /* Below displays the correct info and current tab selected */    
		if (target.getAttribute('id') === 'irvine'){
			target.className = 'active-location-tab' + ' ' + locationTabClass;
			let irvine = document.getElementById('irvine-location');
			irvine.setAttribute('class', 'active-location');
		}
		else if (target.getAttribute('id') === 'la'){
			target.className = 'active-location-tab'  + ' ' + locationTabClass;
			let la = document.getElementById('la-location');
			la.setAttribute('class', 'active-location');
		}
		else if (target.getAttribute('id') === 'sd') {
			target.className = 'active-location-tab'  + ' ' + locationTabClass;
			let sd = document.getElementById('sd-location');
			sd.setAttribute('class', 'active-location');
		} else {
			return;
		}
	}
	
	/* Calls function when location tabs are clicked on contact page */
    let locationButton = document.getElementById('location-list');
    if (window.location.pathname === '/G:/Dreamweaver%20Projects/sweet-macaron-2018/sweet-macaron-contact.html' || 'sweet-macaron-contact.html') {
        if (locationButton.addEventListener) {
            locationButton.addEventListener('click', function(e) {
            locationDisplay(e);
        }, false);
    } else {
        locationButton.attachEvent('onclick', function(e) {
            locationDisplay(e);
        });
    }
	}
})();


    