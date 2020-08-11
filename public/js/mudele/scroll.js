const d = document;

export function headerResponsive() {
  let enlacesHeader = document.querySelectorAll('.enlaces-header')[0];
  let semaforo = true;
  d.querySelectorAll('.hamburguer')[0].addEventListener('click', function () {
    if (semaforo) {
      d.querySelectorAll(".hamburguer")[0].style.color = "#fff";
      semaforo = false;
    } else {
      d.querySelectorAll(".hamburguer")[0].style.color = "#000";
      semaforo = true;
    }
    enlacesHeader.classList.toggle('menudos');
  });

};

export function headerScroll() {

  let ubicacionPrincipal = window.pageYOffset;
  window.addEventListener('scroll', function () {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
      d.getElementsByTagName('nav')[0].style.top = '0px';
    } else {
      d.getElementsByTagName('nav')[0].style.top = '-100px';
    }
    ubicacionPrincipal = desplazamientoActual;
  })
}