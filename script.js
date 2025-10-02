// Función para alternar submenús
function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  const button = event.currentTarget;
  const isVisible = submenu.style.display === 'block';

  // Ocultar todos los submenús y quitar clase active
  const allSubmenus = document.querySelectorAll('.submenu');
  const allButtons = document.querySelectorAll('.menu-btn');
  
  allSubmenus.forEach((menu) => {
    menu.style.display = 'none';
  });
  
  allButtons.forEach((btn) => {
    btn.classList.remove('active');
  });

  // Mostrar el seleccionado si estaba oculto
  if (!isVisible) {
    submenu.style.display = 'block';
    button.classList.add('active');
  }
  
  // Prevenir que el clic se propague
  event.stopPropagation();
}

// Función para ir al inicio
function irInicio() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  mostrarContenidoInicial();
}

// Función para mostrar diferentes secciones
function mostrarSeccion(seccion) {
  const mainContent = document.querySelector('.main-content');
  
  // Contenido específico para cada sección
  const contenidos = {
    bienvenida: `
      <div class="content-wrapper">
        <section class="course-info">
          <h2>Bienvenida</h2>
          <p class="course-description">
            Te damos la más cordial bienvenida a <span class="highlight">FIZZIX FUN</span>, 
            donde el aprendizaje de las ciencias se convierte en una experiencia divertida y enriquecedora.
          </p>
        </section>
      </div>
    `,
    objetivos: `
      <div class="content-wrapper">
        <section class="course-info">
          <h2>Nuestros Objetivos</h2>
          <p class="course-description">
            • Desarrollar habilidades científicas desde niveles básicos hasta superiores<br>
            • Fomentar la aplicación del conocimiento en la vida cotidiana<br>
            • Crear un ambiente de aprendizaje estimulante y divertido<br>
            • Preparar estudiantes para desafíos académicos y profesionales
          </p>
        </section>
      </div>
    `,
    matematicas: `
      <div class="content-wrapper">
        <section class="course-info">
          <h2>Matemáticas</h2>
          <p class="course-description">
            Explora el fascinante mundo de los números, las formas y los patrones. 
            Desde aritmética básica hasta cálculo avanzado, todo con aplicaciones prácticas.
          </p>
        </section>
        <div class="features">
          <div class="feature-card">
            <h3>Álgebra</h3>
            <p>Ecuaciones, polinomios y sistemas de ecuaciones</p>
          </div>
          <div class="feature-card">
            <h3>Geometría</h3>
            <p>Formas, ángulos y teoremas fundamentales</p>
          </div>
          <div class="feature-card">
            <h3>Cálculo</h3>
            <p>Derivadas, integrales y aplicaciones</p>
          </div>
        </div>
      </div>
    `,
    fisica: `
      <div class="content-wrapper">
        <section class="course-info">
          <h2>Física</h2>
          <p class="course-description">
            Descubre las leyes que gobiernan el universo, desde las partículas más pequeñas 
            hasta las galaxias más lejanas.
          </p>
        </section>
        <div class="features">
          <div class="feature-card">
            <h3>Mecánica</h3>
            <p>Movimiento, fuerzas y energía</p>
          </div>
          <div class="feature-card">
            <h3>Electricidad</h3>
            <p>Circuitos, campos electromagnéticos</p>
          </div>
          <div class="feature-card">
            <h3>Óptica</h3>
            <p>Luz, reflexión y refracción</p>
          </div>
        </div>
      </div>
    `,
    contacto: `
      <div class="content-wrapper">
        <section class="course-info">
          <h2>Contacto</h2>
          <p class="course-description">
            📧 Email: info@fizzixfun.com<br>
            📞 Teléfono: +1 234 567 890<br>
            📍 Dirección: Calle Ciencia 123, Ciudad Educativa<br>
            🕒 Horario: Lunes a Viernes 9:00 - 18:00
          </p>
        </section>
      </div>
    `
  };

  // Mostrar contenido específico o contenido por defecto
  mainContent.innerHTML = contenidos[seccion] || mostrarContenidoInicial();
}

// Función para mostrar contenido inicial
function mostrarContenidoInicial() {
  return `
    <div class="content-wrapper">
      <section class="course-info">
        <h2>FIZZIX FUN</h2>
        <p class="course-description">
          Un espacio de aprendizaje para desarrollar habilidades de conocimientos a nivel 
          <span class="highlight">básico, media superior y superior</span> 
          para fomentar estos conocimientos en la vida cotidiana y sobre su importancia.
        </p>
        <div class="levels">
          <span class="level-tag">Básico</span>
          <span class="level-tag">Media Superior</span>
          <span class="level-tag">Superior</span>
        </div>
      </section>

      <div class="features">
        <div class="feature-card">
          <div class="feature-icon">🧮</div>
          <h3>Matemáticas</h3>
          <p>Desde álgebra básica hasta cálculo avanzado, con ejercicios prácticos y aplicaciones en la vida real.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚛️</div>
          <h3>Física</h3>
          <p>Descubre los principios que rigen nuestro universo con experimentos y simulaciones interactivas.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🧪</div>
          <h3>Química</h3>
          <p>Comprende la composición de la materia y las reacciones químicas que ocurren a nuestro alrededor.</p>
        </div>
      </div>
    </div>
  `;
}

// Cerrar submenús al hacer clic fuera de ellos
document.addEventListener('click', function(event) {
  if (!event.target.matches('.menu-btn') && !event.target.closest('.submenu')) {
    const allSubmenus = document.querySelectorAll('.submenu');
    const allButtons = document.querySelectorAll('.menu-btn');
    
    allSubmenus.forEach((menu) => {
      menu.style.display = 'none';
    });
    
    allButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
  }
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
  // Aquí puedes agregar cualquier inicialización necesaria
  console.log('FIZZIX FUN cargado correctamente');
});