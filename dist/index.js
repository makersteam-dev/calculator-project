"use strict";(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{window.Webflow||(window.Webflow=[]),window.Webflow.push(()=>{let M=document.querySelector("input#Total-Marketing-Budget");console.log(M);let I=document.querySelector("input#Marketing-Team-Size"),o=document.querySelector("input#paid-search"),u=document.querySelector("input#paid-social"),c=document.querySelector("input#affiliates"),i=document.querySelector("input#organic"),L=document.querySelector("input#other"),S=null;[o,u,c,i].forEach(e=>{e.addEventListener("input",()=>{let t=parseFloat(o.value)||0,n=parseFloat(u.value)||0,a=parseFloat(c.value)||0,l=parseFloat(i.value)||0;t=Math.min(Math.max(t,0),100),n=Math.min(Math.max(n,0),100),a=Math.min(Math.max(a,0),100),l=Math.min(Math.max(l,0),100);let v=t+n+a+l;if(v>100){S&&(S.value="0",S=null),t=parseFloat(o.value)||0,n=parseFloat(u.value)||0,a=parseFloat(c.value)||0,l=parseFloat(i.value)||0;let h=100-(t+n+a+l);L.value=h.toString()}else{let h=100-v;L.value=h.toString(),S=e}o.value=t.toString(),u.value=n.toString(),c.value=a.toString(),i.value=l.toString();let E=e.parentElement.parentElement.querySelector(".is--calc-label");parseFloat(e.value)>0?E.style.color="#DC56F2":E.style.color="#FFFFFF"})}),window.addEventListener("load",()=>{o.value="0",u.value="0",c.value="0",i.value="0",L.value="0",document.querySelectorAll(".is--calc-label").forEach(t=>{t.style.color="#FFFFFF"})});let H=.12,y=.09,V=.05,q=.08,w=.025,k=.012,b=142700,W=.28,f=document.querySelector(".final-value-text"),s=document.querySelector('input[name="Survey-tools"]'),r=document.querySelector('input[name="Social-monitoring-tools"]'),p=document.querySelector('input[name="Cross-channel-attribution-tools"]'),m=document.querySelector('input[name="Competitive-intelligence-tools"]'),d=document.querySelector('input[name="Marketing-Agencies"]'),g=document.querySelector('input[name="Management-Consulting"]');s==null||s.addEventListener("change",function(){if(this){let e=this.checked?"1":"0"}}),r==null||r.addEventListener("change",function(){let e=this.checked?"1":"0"}),p==null||p.addEventListener("change",function(){let e=this.checked?"1":"0"}),m==null||m.addEventListener("change",function(){let e=this.checked?"1":"0"}),d==null||d.addEventListener("change",function(){let e=this.checked?"1":"0"}),g==null||g.addEventListener("change",function(){let e=this.checked?"1":"0"});let P=document.querySelectorAll("input");function F(){let e=parseFloat(M.value),t=parseFloat(I.value),n=parseFloat(o.value),a=parseFloat(u.value),l=parseFloat(c.value),v=parseFloat(i.value),T=n/100,E=a/100,h=l/100,z=v/100,B=s!=null&&s.checked?1:0,A=r!=null&&r.checked?1:0,O=p!=null&&p.checked?1:0,D=m!=null&&m.checked?1:0,N=d!=null&&d.checked?1:0,U=g!=null&&g.checked?1:0;if(f){let j=e*T*H+e*E*y+e*h*q+e*z*V+D*3e4+B*3e4+A*3e4+O*3e4+U*w*e+N*k*e+t*W*b;f.textContent=j.toLocaleString()}}window.addEventListener("load",F),P.forEach(function(e){e.addEventListener("input",F)})})});})();
