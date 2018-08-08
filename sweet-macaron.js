(function() {
	
	/* Div credit photos on menu page */
	
	 const attributionDiv = document.getElementsByClassName('attribution');
	 const divLength = attributionDiv.length;
     for(i = 0; i < divLength ; i++) {
	     const divText = document.createTextNode(' By Michelle Naherny ')
	     attributionDiv[i].appendChild(divText);
	     const licenseLink = document.createElement('a');
	     const licenseText = document.createTextNode('CC BY-SA 4.0');
	     licenseLink.appendChild(licenseText);
	     licenseLink.setAttribute('href', 'https://creativecommons.org/licenses/by-sa/4.0');
	     attributionDiv[i].appendChild(licenseLink);
	 }
	 
	/* Automatic changing slideshow */
	
	let slideIndex = 0;
	if (window.location.pathname === '/G:/portfolio-projects/sweet-macaron-2018/index.html') {
       carousal();
	}
	if (window.location.pathname === 'index.html') {
       carousal();
	}
	
    function carousal() {
        let i = 0;
        const x = document.getElementsByClassName('image-slide');
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
		
		const displayCredit = document.getElementsByClassName('credit-div');
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
	
	const today = new Date();
	const specialOfferExpire = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	const date = specialOfferExpire.getDate();
	const month = specialOfferExpire.getMonth() + 1;
	const year = specialOfferExpire.getFullYear();
	const specialOffer = document.getElementById("special-offer");
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
		const activeLocationList = document.getElementsByClassName('active-location'); //Location info section
		const locationTabs = document.getElementsByClassName('location-tabs'); //To grab all location tab links
		const locationTabClass = locationTabs.className = 'location-tabs'; //Used below to keep the location-tabs class in the html file
		
		for (let i = 0; i < activeLocationList.length; i++) {
		    if (target.getAttribute('id') === 'location-list') { //Prevents function when clicking between location list
	            return;
		    }
			if (target.getAttribute('class') === 'aside-tab-li') { //Prevents function when clicking li of location tabs
	            return;
		    }
			activeLocationList[i].className = 'hidden-location';
		}
		
		for (let i = 0; i < locationTabs.length; i++) {	//Changes location tab to be inactive
		    if (locationTabs[i].classList.contains('active-location-tab')) {
			    locationTabs[i].className = 'non-active-location-tab' + ' ' + locationTabClass;
			}    
		}
		
        /* Below displays the correct info and current tab selected */    
		
		if (target.getAttribute('id') === 'irvine'){
			target.className = 'active-location-tab' + ' ' + locationTabClass;
			const irvine = document.getElementById('irvine-location');
			irvine.setAttribute('class', 'active-location');
		}
		else if (target.getAttribute('id') === 'la'){
			target.className = 'active-location-tab'  + ' ' + locationTabClass;
			const la = document.getElementById('la-location');
			la.setAttribute('class', 'active-location');
		}
		else if (target.getAttribute('id') === 'sd') {
			target.className = 'active-location-tab'  + ' ' + locationTabClass;
			const sd = document.getElementById('sd-location');
			sd.setAttribute('class', 'active-location');
		} else {
			return;
		}
	}
	
	/* Calls function when location tabs are clicked on contact page */
	
    const locationButton = document.getElementById('location-list');
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


    