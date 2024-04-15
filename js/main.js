// Открытие и закрытие меню
document.getElementById("nav-icon").addEventListener('click', function () {
  document.getElementById("nav-menu").classList.toggle("-translate-y-full");
  document.querySelector(".nav-icon div").classList.toggle("rotate-45");
  document.querySelector(".nav-icon div:nth-child(2)").classList.toggle("-translate-y-[10px]");
  document.querySelector(".nav-icon div:nth-child(2)").classList.toggle("-rotate-45");
  document.querySelector(".nav-icon div:nth-child(3)").classList.toggle("hidden");
});
document.getElementById("nav-menu").addEventListener('click',
  (event) => { 
    if(event.target.tagName === "A")
     {
      document.getElementById("nav-menu").classList.toggle("-translate-y-full");
      document.querySelector(".nav-icon div").classList.toggle("rotate-45");
      document.querySelector(".nav-icon div:nth-child(2)").classList.toggle("-translate-y-[10px]");
      document.querySelector(".nav-icon div:nth-child(2)").classList.toggle("-rotate-45");
      document.querySelector(".nav-icon div:nth-child(3)").classList.toggle("hidden");
     }  
  } 
);

// Фиксированное меню открывается и закрывается при скролле
document.get

let currentY = window.scrollY;
let previousY = currentY;
const header = document.getElementById("nav-bar");
const scrollHandler = () => {
  previousY = currentY;
  currentY = window.scrollY;
  if (currentY > 50) {
    // делаем фон меню непрозрачным
    header.classList.add("bg-black/80");
  } else {
    // возвращаем прозрачность
    header.classList.remove("bg-white");
  }
  if (currentY > 300 && currentY >= previousY) {
    // скрываем меню
    header.classList.add("-translate-y-full");
  } else {
    // показываем меню
    header.classList.remove("-translate-y-full");
  }
};
window.addEventListener("scroll", scrollHandler);
scrollHandler();
// Плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
// Открытие формы
function getForm(){
  document.getElementById("form").classList.toggle("hidden"); 
};
// Отправка данных формы на сервак
document.getElementById("my-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Перехватываем действие по умолчанию формы
  // Далее код для обработки данных формы или отправки их на сервер
  if (!window.smartCaptcha) {
      // Если reCAPTCHA не пройдена, выведите сообщение об ошибке
      return;
  } 
      document.getElementById('submit').value = "Отправка данных..";
      // Если reCAPTCHA пройдена, получите данные формы
      var name = document.getElementById('name').value;
      var tel = document.getElementById('tel').value;
      var message = document.getElementById('message').value;
      var policy = document.getElementById('policy').checked;
      var formData = {
          // Получите данные формы, например, с помощью document.getElementById или других методов
          name: name,
          tel: tel,
          message: message,
          policy: policy
      };
      // Отправка данных на сервер с помощью fetch
      fetch('sendmail.php', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(formData)
      })
      .then(response => response.text())
      .then(data => {
        // Обработка ответа от sendmail.php
        var buttondata = JSON.parse(data);
        var Submit = document.getElementById('submit');
        Submit.value = buttondata.message;
        setTimeout(() => {
          document.getElementById("form").classList.toggle("hidden");
        }, 3000);
      })
      .catch(error => {
        // Обработка ошибок
        var buttondata = JSON.parse(error);
        var Submit = document.getElementById('submit');
        Submit.value = buttondata.message;
        setTimeout(() => {
          document.getElementById("form").classList.toggle("hidden");
        }, 2000);
      });
});
// Открытие согласия
document.getElementById("agree").addEventListener('click',
  () => document.getElementById("agreement").classList.toggle("hidden") 
);
// Открытие согласия в футере
document.getElementById("agree2").addEventListener('click',
  () => document.getElementById("agreement").classList.toggle("hidden") 
);
// Закрытие согласия
document.getElementById("nav-icon-close2").addEventListener('click',
  (event) => { 
    if(event.target.tagName === "path" || event.target.tagName === "svg")
     {document.getElementById("agreement").classList.toggle("hidden");}    
  } 
);
// Анимация при скролле
function onEntry(entry) {
  entry.forEach(change => {
    console.log(change)
    if (change.isIntersecting) {
     change.target.classList.add('show');
    }
  });
}

let options = {
  
  threshold: 0.3 };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".animator");

for (let elm of elements) {
  observer.observe(elm);
}


