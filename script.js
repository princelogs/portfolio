// <!-- Dark Mode Script -->

const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
      }
    });



    //character animated
    document.addEventListener("DOMContentLoaded", function () {
        const textArray = ["Web Developer", "Web Designer", "Video Editor"];
        let index = 0;
        const textElement = document.getElementById("animatedText");

        function animateCharacters(text, callback) {
            textElement.textContent = "";
            let i = 0;
            const interval = setInterval(() => {
                textElement.textContent += text[i];
                i++;
                if (i === text.length) {
                    clearInterval(interval);
                    setTimeout(callback, 1000);
                }
            }, 100);
        }

        function animateText() {
            textElement.style.opacity = 0;
            setTimeout(() => {
                animateCharacters(textArray[index], () => {
                    setTimeout(() => {
                        index = (index + 1) % textArray.length;
                        animateText();
                    }, 1000);
                });
                textElement.style.opacity = 1;
            }, 500);
        }

        animateText();
    });



const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
