
const hoje = document.querySelector('#hoje');
function atualizar(){
const horas = new Date() 

const Today= horas.getHours() + ':' + horas.getMinutes() + ':' + horas.getSeconds();

if (horas.getHours() < 10)  h = '0' + h;
   if (horas.getMinutes() < 10)  m = '0' + m;
   if (horas.getSeconds() < 10)  s = '0' + s;
   hoje.textContent = Today;
}
atualizar(1000) 
setInterval(atualizar,1000);

