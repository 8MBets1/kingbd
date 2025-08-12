
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
  { name: "8MPlay - তে খেলুন", url: "https://8mplay.in/bn-bd?aff=caa0ffee17&signup=1" },
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
    "Wicket71 WhatsApp": "https://wa.me/17788527289"
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



// coinsAni animation 

function launchCoinFountain() {
    const btn = document.getElementById("coinsAni");
    const rect = btn.getBoundingClientRect();

    for (let i = 0; i < 20; i++) {
        const coin = document.createElement("div");
        coin.style.position = "absolute";
        coin.style.width = "25px";
        coin.style.height = "25px";
        coin.style.backgroundImage = "url('https://pngimg.com/d/coin_PNG36871.png')";
        coin.style.backgroundSize = "cover";
        coin.style.backgroundRepeat = "no-repeat";
        coin.style.pointerEvents = "none";
        coin.style.zIndex = "9999";

        // Random fountain spread
        const angle = Math.random() * Math.PI - Math.PI / 2;
        const distance = 50 + Math.random() * 50;
        const x = Math.tan(angle) * distance;
        const y = Math.cos(angle) * -distance;

        // Position at button center (account for scrolling)
        coin.style.left = rect.left + rect.width / 2 + "px";
        coin.style.top = rect.top + window.scrollY + rect.height / 15 + "px";

        document.body.appendChild(coin);

        // Animate coin
        coin.animate([
            { transform: "translate(0, 0) scale(1) rotate(0deg)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(1.1) rotate(180deg)`, opacity: 1, offset: 0.5 },
            { transform: `translate(${x}px, ${y + 150}px) scale(0.8) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 1500,
            easing: "ease-out"
        });

        // Remove after animation
        setTimeout(() => coin.remove(), 1500);
    }
}

// Start 5s after page load, run for 5s
window.addEventListener("load", () => {
    setTimeout(() => {
        let interval = setInterval(launchCoinFountain, 300);
        setTimeout(() => clearInterval(interval), 5000);
    }, 5000);
});

