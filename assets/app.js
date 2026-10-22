'use strict';
const navButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('#mobile-nav');
if (navButton && mobileNav) {
  function closeMenu() { navButton.setAttribute('aria-expanded','false'); navButton.setAttribute('aria-label','Menü öffnen'); mobileNav.hidden = true; document.body.classList.remove('menu-open'); }
  navButton.addEventListener('click', () => { const opening = navButton.getAttribute('aria-expanded') !== 'true'; navButton.setAttribute('aria-expanded',String(opening)); navButton.setAttribute('aria-label',opening?'Menü schließen':'Menü öffnen'); mobileNav.hidden = !opening; document.body.classList.toggle('menu-open', opening); });
  mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  window.addEventListener('resize',()=>{ if (window.innerWidth > 840) closeMenu(); });
  document.addEventListener('keydown',event=>{if(event.key==='Escape') closeMenu();});
}
const showcases = [
 {key:'dashboard',title:'Deine persönliche Schaltzentrale.', description:'Die Startseite zeigt, worauf es gerade ankommt – mit schnellen Aktionen und einer Übersicht aus deinen eigenen Daten.', points:['Dashboard','Tagesfokus','Schnellzugriff'], images:['dashboard.webp','dashboard-details.webp'], alt:['Dashboard mit Schnellzugriff und Tagesfokus','Weiterer Ausschnitt der Dashboard-Kennzahlen']},
 {key:'schaeden',title:'Jeder Schadenfall an seinem Platz.', description:'Status, Priorität, Adresse und Vorgang sind logisch geordnet. So findest du auch im Alltag wichtige Informationen schnell wieder.', points:['Fallverwaltung','Prioritäten','Suche & Filter'], images:['schaeden.webp','schaeden-details.webp'], alt:['SchadenPilot Schadensübersicht','Schadenfallkarte mit Status und Priorität']},
 {key:'aufgaben',title:'To-dos, die nicht untergehen.', description:'Offene, fällige und abgeschlossene Aufgaben bleiben sichtbar – und lassen sich den jeweiligen Schadenakten zuordnen.', points:['Aufgabenliste','Fälligkeiten','Zuständigkeiten'], images:['aufgaben.webp','aufgaben-details.webp'], alt:['Aufgaben-Dashboard von SchadenPilot','Aufgabenliste mit Fälligkeit und Verantwortlichem']},
 {key:'termine',title:'Wichtige Termine auf einen Blick.', description:'Besichtigungen und Fristen organisieren, vergangene Termine nachvollziehen und kommende Termine im Blick behalten.', points:['Termine','Fristen','Besichtigungen'], images:['termine.webp','termine-details.webp'], alt:['Termin-Dashboard in SchadenPilot','Liste der Termine in SchadenPilot']},
 {key:'mehr',title:'Alle Werkzeuge. Ein Ort.', description:'Immobilien, Kontakte, Fachfirmen, Angebote und Datensicherung erreichst du in einer klar gegliederten Verwaltung.', points:['Immobilien','Kontakte','Datensicherung'], images:['mehr.webp','mehr-details.webp'], alt:['Verwaltungsbereich der SchadenPilot-App','Weitere Werkzeuge und Sicherheitseinstellungen']}
];
const tabs = [...document.querySelectorAll('.showcase-tab')];
let currentIndex = 0;
function changeShowcase(index, focus=false) {
  if (!tabs.length) return;
  currentIndex = (index + showcases.length) % showcases.length;
  const view = showcases[currentIndex];
  tabs.forEach((tab,i)=>{const selected=i===currentIndex;tab.classList.toggle('active',selected);tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});
  const mainImg=document.getElementById('showcase-img-main');
  const secondImg=document.getElementById('showcase-img-secondary');
  if(mainImg){mainImg.src=`assets/images/${view.images[0]}`;mainImg.alt=view.alt[0];}
  if(secondImg){secondImg.src=`assets/images/${view.images[1]}`;secondImg.alt=view.alt[1];}
  document.getElementById('view-number').textContent=String(currentIndex+1).padStart(2,'0')+' / 05';
  document.getElementById('view-title').textContent=view.title;
  document.getElementById('view-description').textContent=view.description;
  const pointWrapper=document.getElementById('view-points');
  pointWrapper.replaceChildren(...view.points.map(p=>{const span=document.createElement('span');span.textContent=p;return span;}));
  if(focus) tabs[currentIndex].focus();
}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>changeShowcase(i));tab.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?showcases.length-1:i+(e.key==='ArrowRight'?1:-1);changeShowcase(next,true);}});});
document.getElementById('view-prev')?.addEventListener('click',()=>changeShowcase(currentIndex-1));
document.getElementById('view-next')?.addEventListener('click',()=>changeShowcase(currentIndex+1));
const year=document.getElementById('year');if(year)year.textContent=String(new Date().getFullYear());
