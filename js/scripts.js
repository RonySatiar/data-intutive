


// Toggle Expand
var toggleElements = document.querySelectorAll('.toggle-expand');

  toggleElements.forEach(function (element) {
    element.addEventListener('click', function () {
      var targetId = element.getAttribute('data-target');
      var imgContainer = document.getElementById(targetId);
      var icon = element.querySelector('.toggle-icon');

      if (imgContainer.style.display === 'none' || imgContainer.style.display === '') {
        imgContainer.style.display = 'block';
        icon.innerHTML = '-';
      } else {
        imgContainer.style.display = 'none';
        icon.innerHTML = '+';
      }
    });
  });

// 
  var swiper = new Swiper(".client-ref-carousel", {
    slidesPerView: 3,
    spaceBetween: 60,
    
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: "1.7",
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });