const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
  });
});

const symptoms = {
  potencia: {
    title: 'Diagnóstico de admisión y emisiones',
    copy: 'La pérdida de potencia puede relacionarse con admisión, EGR, DPF, inyección o sensores. El scanner y las pruebas dirigidas ayudan a evitar cambios innecesarios.',
    message: 'mi vehículo está perdiendo potencia'
  },
  tablero: {
    title: 'Scanner y pruebas dirigidas',
    copy: 'Una luz de advertencia registra información útil. Leemos códigos y parámetros, pero también verificamos el sistema antes de recomendar una reparación.',
    message: 'se encendió una luz en el tablero de mi vehículo'
  },
  arranque: {
    title: 'Revisión de batería y arranque',
    copy: 'En bajas temperaturas conviene revisar carga, batería, alternador y sistema de partida para encontrar por qué el motor demora en encender.',
    message: 'mi vehículo demora en arrancar'
  },
  temperatura: {
    title: 'Prueba del sistema de refrigeración',
    copy: 'Revisamos nivel, fugas, presión, termostato y circulación. No sigas conduciendo si la temperatura alcanza una zona crítica.',
    message: 'la temperatura de mi vehículo está subiendo'
  },
  ruido: {
    title: 'Inspección mecánica localizada',
    copy: 'El momento, la velocidad y la zona del ruido ayudan a orientar la revisión de suspensión, transmisión, motor o elementos de rodado.',
    message: 'mi vehículo presenta un ruido o vibración'
  }
};

const resultTitle = document.querySelector('#result-title');
const resultCopy = document.querySelector('#result-copy');
const resultLink = document.querySelector('#result-link');
const resultIcon = document.querySelector('#result-icon');

document.querySelectorAll('.symptom').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.symptom').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const item = symptoms[button.dataset.symptom];
    resultTitle.textContent = item.title;
    resultCopy.textContent = item.copy;
    resultIcon.setAttribute('href', `./assets/iconos-sintomas.svg#${button.dataset.symptom}`);
    resultLink.href = `https://wa.me/56955347457?text=${encodeURIComponent(`Hola Austral Service, ${item.message}. Quiero solicitar una revisión.`)}`;
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
