(()=>{"use strict";const e=function(){const e=document.createElement("div"),t=function(){let e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p");return t.textContent="Burger's Palace",n.textContent="Eat. Love. Repeat.",e.append(t,n),e}(),n=function(){let e=document.createElement("div");const t=document.createElement("div");return t.className="burgerImage",e.appendChild(t),e}();return e.className="main",t.className="left-side",n.className="right-side",e.append(t,n),e},t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("header"),t=document.createElement("ul"),n=document.createElement("li"),c=document.createElement("li"),d=document.createElement("li"),m=document.createElement("a"),a=document.createElement("a"),o=document.createElement("a");return m.textContent="HOME",a.textContent="MENU",o.textContent="ABOUT",m.id="home",a.id="menu",o.id="about",n.appendChild(m),c.appendChild(a),d.appendChild(o),t.append(n,c,d),e.appendChild(t),e}()),t.appendChild(e());const n=document.getElementById("home"),c=document.getElementById("menu"),d=document.getElementById("about");n.addEventListener("click",(function(){t.removeChild(document.querySelector(".main")),t.appendChild(e())})),c.addEventListener("click",(function(){t.removeChild(document.querySelector(".main")),t.appendChild(function(){const e=document.createElement("div");return e.className="main",e}())})),d.addEventListener("click",(function(){t.removeChild(document.querySelector(".main")),t.appendChild(function(){const e=document.createElement("div");return e.className="main",e}())}))})();