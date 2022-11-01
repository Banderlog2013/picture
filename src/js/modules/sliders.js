const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1, // отображение текущего слайда
        paused = false;
    const items = document.querySelectorAll(slides); // слайды
          

    // листание слайдера
    function showSlides(n) {
        if (n > items.length) { // если текущее состояние больше чем ко-во слайдов
            slideIndex = 1; // возращаемся в текущее состояние
        }

        if (n < 1) {
            slideIndex = items.length; // обратный порядок
        }

        // скрываем все слайды
        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        // показ нужного слайда
        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev), // кнопка назад
              nextBtn = document.querySelector(next); // вперед

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e){}

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
       activateAnimation();
    });

};

export default sliders;