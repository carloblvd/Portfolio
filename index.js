let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList.add("modal__overlay--visible"); // Added class

  emailjs
    .sendForm(
      "service_gnajquf",
      "template_r2rjfjm",
      event.target,
      "fUrOyNKYMUln64o4F"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible"); // Removed class
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible"); // Removed class
      alert(
        "The email service is temporarily unavailable. Please contact me directly at carloblvd@gmail.com"
      );
    });
  setTimeout(() => {}, 1000);
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (!contrastToggle) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList += " dark-theme";
  }
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    if (i % 2 == 0) {
      shapes[i].style.transform = `translate(${x}px , ${y}px)`;
    } else {
      shapes[i].style.transform = `translate(-${x}px , -${y}px)`;
    }
  }
}
