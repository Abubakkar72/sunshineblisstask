const productDivs = document.querySelectorAll('.box1, .box2, .box3');  // Select all three divs
const circleDivs = document.querySelectorAll('.circle1, .circle2, .circle3');  // Select the circle div
const bannerDiv = document.querySelector('.banner');
// Loop through each product div
productDivs.forEach(productDiv => {
  productDiv.addEventListener('click', () => {
    // Close all other divs and reset their styles
    productDivs.forEach(div => {
      if (div !== productDiv) {
        div.classList.remove('expanded');
        div.style.height = '74px';
      }
    });

    // Toggle the clicked div
    productDiv.classList.toggle('expanded');
    if (productDiv.classList.contains('expanded')) {
      productDiv.style.height = '160px';
      productDiv.style.border = '1px solid #FF6B82';
      bannerDiv.style.bottom = '216px';

      
    } else {
      productDiv.style.height = '74px';
      productDiv.style.border = '1px solid #00000040';
      bannerDiv.style.bottom = '174px';
    }

    console.log("Current height:", productDiv.offsetHeight); // Logs current height
    circleDivs.forEach( circleDiv => {
        if (productDiv.classList.contains('expanded')) {
            circleDiv.style.border = '1px solid red';
            circleDiv.style.backgroundColor = '#FF6B82';
        }else {
            circleDiv.style.border = '1px solid grey';
            circleDiv.style.backgroundColor = '#FFFFFF';
        }
    })
  });

});