document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.carousel .carousel-item');
    let currentItem = 0;
    const totalItems = items.length;
  
    const switchItem = () => {
      items[currentItem].classList.remove('active');
      currentItem = (currentItem + 1) % totalItems;
      items[currentItem].classList.add('active');
    }
  
    // cambiar el tiempo en el numero 1000 = 1 segundo
    setInterval(switchItem, 3500);
  });
