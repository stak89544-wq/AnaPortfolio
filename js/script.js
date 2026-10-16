(function(){
var r=document.documentElement;
document.getElementById('yr').textContent=new Date().getFullYear();
// marquee
var w=['Java','JavaScript','Kotlin','Android','HTML & CSS','Networking','IT Support','English C1'],h='';
for(var k=0;k<4;k++)w.forEach(function(x){h+='<span>'+x+'</span><span><em>✦</em></span>'});
document.getElementById('mq').innerHTML=h;
// i18n EN/ES
var D={
[`Home`]:`Inicio`,[`About`]:`Sobre mí`,[`Journey`]:`Trayectoria`,[`Skills`]:`Habilidades`,[`Certificates`]:`Certificados`,[`Contact`]:`Contacto`,[`Let's Talk`]:`Hablemos`,
[`💻 Open to junior developer &amp; IT support roles`]:`💻 Disponible para roles junior de desarrollo y soporte TI`,
[`I'm Ana <span class="or">Florentino</span>`]:`Soy Ana <span class="or">Florentino</span>`,
[`Computer Systems Engineering student &amp; English teacher based in Santo Domingo, Dominican Republic`]:`Estudiante de Ingeniería en Sistemas Computacionales y profesora de inglés en Santo Domingo, República Dominicana`,
[`Networking`]:`Redes`,[`IT Support`]:`Soporte TI`,[`English C1`]:`Inglés C1`,
[`<b>“</b>Quick to learn, clear in explaining, and focused on solving problems.`]:`<b>“</b>Aprendo rápido, explico con claridad y me enfoco en resolver problemas.`,
[`Experience ➜`]:`Experiencia ➜`,[`Hire Me`]:`Contrátame`,
[`About Me`]:`Sobre mí`,[`What I Do`]:`Qué hago`,[`Professional Journey`]:`Trayectoria profesional`,[`My Toolkit`]:`Mis herramientas`,
[`Who is Ana <span class="or">Florentino?</span>`]:`¿Quién es Ana <span class="or">Florentino?</span>`,
[`I'm a Computer Systems Engineering student and English teacher focused on becoming a software developer. I'm building foundations in Java, JavaScript, HTML, CSS, Bootstrap, Kotlin and Android, backed by networking and hardware knowledge from Cisco IT Essentials and intermediate AI training.`]:`Soy estudiante de Ingeniería en Sistemas Computacionales y profesora de inglés, con el objetivo de convertirme en desarrolladora de software. Estoy construyendo bases en Java, JavaScript, HTML, CSS, Bootstrap, Kotlin y Android, con conocimientos de redes y hardware de Cisco IT Essentials y formación intermedia en inteligencia artificial.`,
[`My background in bilingual customer service, technical issue resolution and billing taught me to analyze problems and explain solutions clearly. I'm looking for a junior developer or IT support role where I can grow.`]:`Mi experiencia en servicio al cliente bilingüe, resolución de problemas técnicos y facturación me enseñó a analizar problemas y explicar soluciones con claridad. Busco un puesto junior de desarrollo o soporte TI donde pueda crecer.`,
[`Email me`]:`Escríbeme`,[`Download CV`]:`Descargar CV`,
[`English level`]:`Nivel de inglés`,[`Courses &amp; certificates`]:`Cursos y certificados`,[`Professional roles`]:`Roles profesionales`,
[`How I Can <span class="or">Help</span>`]:`Cómo puedo <span class="or">ayudar</span>`,
[`Software Development <i>↗</i>`]:`Desarrollo de software <i>↗</i>`,[`Web &amp; Mobile <i>↗</i>`]:`Web y móvil <i>↗</i>`,[`IT Support &amp; Networking <i>↗</i>`]:`Soporte TI y redes <i>↗</i>`,[`Teaching &amp; Communication <i>↗</i>`]:`Enseñanza y comunicación <i>↗</i>`,
[`Object-oriented concepts`]:`Programación orientada a objetos`,[`Responsive layouts`]:`Diseño responsivo`,[`Android fundamentals`]:`Fundamentos de Android`,[`Configuration`]:`Configuración`,[`Troubleshooting`]:`Resolución de problemas`,[`PC assembly &amp; repair`]:`Armado y reparación de PC`,[`Lesson planning`]:`Planificación de clases`,[`IALS methodology`]:`Metodología IALS`,[`Technical content, made clear`]:`Contenido técnico, explicado con claridad`,
[`Education &amp; <span class="or">Experience</span>`]:`Educación y <span class="or">experiencia</span>`,
[`<i>🎓</i>Education`]:`<i>🎓</i>Educación`,[`<i>💼</i>Work Experience`]:`<i>💼</i>Experiencia laboral`,
[`Computer Systems Engineering`]:`Ingeniería en Sistemas Computacionales`,[`Programming &amp; networking coursework`]:`Programación y redes`,[`2025 – Present`]:`2025 – Presente`,
[`English Course – C1`]:`Curso de inglés – C1`,[`Dominican American Cultural Institute`]:`Instituto Cultural Dominico-Americano`,
[`High-level focus`]:`Áreas de enfoque`,[`Programming · Networking · AI · Mobile`]:`Programación · Redes · IA · Móvil`,[`Ongoing`]:`En curso`,
[`English Teacher`]:`Profesora de inglés`,[`English Tutor`]:`Tutora de inglés`,[`Bilingual Customer Service`]:`Servicio al cliente bilingüe`,[`ADT Customer Service`]:`Servicio al cliente ADT`,[`2026 – Now`]:`2026 – Actual`,[`2025 – Now`]:`2025 – Actual`,
[`Plan lessons and track student progress`]:`Planificación de clases y seguimiento del progreso`,[`Explain technical and academic content clearly`]:`Explicación clara de contenido técnico y académico`,[`Teach all ages using the IALS methodology`]:`Enseñanza a todas las edades con la metodología IALS`,[`English/Spanish sales and post-sales support`]:`Ventas y posventa en inglés y español`,[`Excel and Word reports`]:`Reportes en Excel y Word`,[`Billing, transactions and compliance`]:`Facturación, transacciones y cumplimiento`,
[`Skills &amp; Tools <span class="or">I Use</span>`]:`Habilidades y herramientas que <span class="or">uso</span>`,
[`Foundational`]:`Básico`,[`Intermediate`]:`Intermedio`,[`Daily use`]:`Uso diario`,
[`Kotlin &amp; Android`]:`Kotlin y Android`,[`Hardware`]:`Hardware`,[`Artificial Intelligence`]:`Inteligencia artificial`,
[`Bootstrap, responsive layouts`]:`Bootstrap, diseño responsivo`,[`Actively learning`]:`Aprendiendo activamente`,[`Mobile design principles`]:`Principios de diseño móvil`,[`Fundamentals, configuration, troubleshooting`]:`Fundamentos, configuración, resolución de problemas`,[`Network simulation`]:`Simulación de redes`,[`PC assembly, maintenance, repair`]:`Armado, mantenimiento y reparación de PC`,[`80-hour training`]:`Formación de 80 horas`,[`Development and reporting`]:`Desarrollo y reportes`,
[`Customer service`]:`Servicio al cliente`,[`Problem solving`]:`Resolución de problemas`,[`Billing management`]:`Gestión de facturación`,[`Negotiation`]:`Negociación`,[`Clear communication`]:`Comunicación clara`,[`Learns fast`]:`Aprende rápido`,
[`Courses &amp; <span class="or">Certifications</span>`]:`Cursos y <span class="or">certificaciones</span>`,
[`Android for Beginners`]:`Android para principiantes`,[`Android fundamentals (3 h 44 min).`]:`Fundamentos de Android (3 h 44 min).`,
[`Digital Skills: Mobile`]:`Habilidades digitales: Mobile`,[`Score 91%. Mobile design, wireframes and the 7 principles of good app design.`]:`Puntuación 91%. Diseño móvil, wireframes y los 7 principios del buen diseño de apps.`,
[`Learn Kotlin`]:`Aprende Kotlin`,[`Functions, classes and Kotlin fundamentals.`]:`Funciones, clases y fundamentos de Kotlin.`,
[`PC components, assembly, maintenance and repair.`]:`Componentes de PC, armado, mantenimiento y reparación.`,
[`Artificial Intelligence – Intermediate`]:`Inteligencia artificial – Intermedio`,[`80 hours on AI concepts and applications.`]:`80 horas sobre conceptos y aplicaciones de IA.`,
[`English – C1`]:`Inglés – C1`,[`Advanced written and spoken communication.`]:`Comunicación escrita y oral avanzada.`,
[`English (C1)`]:`Inglés (C1)`,[`Spanish (Native)`]:`Español (nativo)`,
[`Let's Build <span class="or">Something Together</span>`]:`Construyamos <span class="or">algo juntos</span>`,
[`Looking for a junior developer or IT support teammate? Send me a message.`]:`¿Buscas una desarrolladora junior o integrante de soporte TI? Escríbeme.`
};
var tr=[];
document.querySelectorAll('body *').forEach(function(e){var k=e.innerHTML.trim();if(D.hasOwnProperty(k)){e.dataset.en=k;tr.push(e)}});
var lb=document.getElementById('lang');
function setLang(l){
 tr.forEach(function(e){e.innerHTML=l==='es'?D[e.dataset.en]:e.dataset.en});
 document.documentElement.lang=l;lb.textContent=l==='es'?'EN':'ES';
 document.title=l==='es'?'Ana Camila Florentino | Desarrolladora Junior y Soporte TI':'Ana Camila Florentino | Junior Developer & IT Support';
 try{localStorage.setItem('lang',l)}catch(x){}
}
var cur='en';
try{var sv=localStorage.getItem('lang');cur=sv?sv:((navigator.language||'en').slice(0,2)==='es'?'es':'en')}catch(x){}
setLang(cur);
lb.onclick=function(){cur=cur==='es'?'en':'es';setLang(cur)};
// theme
var t=document.getElementById('theme');
function dk(){return r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches}
function sync(){t.textContent=dk()?'☀':'☾'}sync();
t.onclick=function(){r.dataset.theme=dk()?'light':'dark';sync()};
// menu
var l=document.getElementById('links');
document.getElementById('menu').onclick=function(){l.classList.toggle('open')};
l.addEventListener('click',function(){l.classList.remove('open')});
document.getElementById('print').onclick=function(e){e.preventDefault();window.print()};
// reveal + counters + bars
var io=new IntersectionObserver(function(es){es.forEach(function(e){
 if(!e.isIntersecting)return;var el=e.target;el.classList.add('in');
 var b=el.querySelector('.bar i');if(b)b.style.width=b.dataset.w+'%';
 el.querySelectorAll('[data-n]').forEach(function(c){var n=+c.dataset.n;if(!n)return;var i=0;var id=setInterval(function(){i++;c.textContent=i+'+';if(i>=n){clearInterval(id)}},120)});
 io.unobserve(el)})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
// active link
var secs=[].slice.call(document.querySelectorAll('header[id],section[id]'));
addEventListener('scroll',function(){var y=scrollY+140,c='home';secs.forEach(function(s){if(s.offsetTop<=y)c=s.id});
 document.querySelectorAll('.links a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+c)})},{passive:true});
})();
