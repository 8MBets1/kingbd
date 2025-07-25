
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


  // shake effect every 2s 

const iconImages = document.querySelectorAll('.Brand-icon-item img');

// Ensure base styles are clean and transition-ready
iconImages.forEach((img) => {
  img.style.display = 'inline-block';
  img.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  img.style.borderRadius = '50%'; // Optional: makes it circular glow if the icon is square
});

setInterval(() => {
  iconImages.forEach((img) => {
    img.style.transform = 'scale(1.1)';
    // img.style.boxShadow = '0px 0px 30px rgb(255, 95, 2)';

    setTimeout(() => {
      img.style.transform = 'scale(1)';
      img.style.boxShadow = 'none';
    }, 300);
  });
}, 2000);







  // Select all gift icons
  const giftIcons = document.querySelectorAll('.bi-gift');

  // Apply base styles (mimics CSS) using JS
  giftIcons.forEach((icon) => {
    icon.style.display = 'inline-block';
    icon.style.transition = 'transform 0.2s ease-in-out';
  });

  // Animation every 2 seconds
  setInterval(() => {
    giftIcons.forEach((icon) => {
      icon.style.transform = 'scale(1.3) rotate(5deg)';

      setTimeout(() => {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }, 200);
    });
  }, 1000);


// game links manage 


const links = [
  { name: "8MPlay - তে খেলুন", url: "https://www.8mbets.net/en-bd?aff=caa0ffee17&signup=1" },
  { name: "MamuBet - এ খেলুন", url: "https://www.mamubaji9.com/bd-bd?aff=af53facdaa&signup=1" },
  { name: "Wicket71 - এ খেলুন", url: "https://vrnvw.wicket71bd.com/register.html" }
];

// Select all elements with class "gamesLinks"
const containers = document.querySelectorAll(".gamesLinks");

containers.forEach(container => {
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    a.className = "button custom-btn smoothscroll";
    a.target = "_blank";
    container.appendChild(a.cloneNode(true)); // clone to avoid shared references
  });
});



  // Map the text label to URLs
  const urlMap = {
    "8MPlay LiveChat": "https://direct.lc.chat/15562614/",
    "MamuBets LiveChat": "https://direct.lc.chat/16961697/",
    "Wicket71 LiveChat": "https://direct.lc.chat/18160839/",
    "8MPlay WhatsApp": "https://wa.link/8rb44r",
    "MamuBets WhatsApp": "https://api.whatsapp.com/send?phone=13435193419",
    "Wicket71 WhatsApp": "https://vrnvw.wicket71bd.com/register.html"
  };

  // Apply click event to all .CBChild elements in all tabs
  document.querySelectorAll(".CBChild").forEach(child => {
    child.style.cursor = "pointer";
    child.addEventListener("click", () => {
      // Get only the text part, ignoring the image
      const name = child.textContent.trim();
      if (urlMap[name]) {
        window.open(urlMap[name], "_blank");
      }
    });
  });
