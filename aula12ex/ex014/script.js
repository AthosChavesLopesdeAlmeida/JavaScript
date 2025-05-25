
function carregar() {
var msg = window.document.getElementById('msg');
var foto = window.document.getElementById('foto');
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
 foto.innerHTML = "<p>Bom dia!</p>"
 document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18){
  foto.innerHTML = "<p>Boa tarde!</p>"
  document.body.style.background = '#b9846f'
} else {
  foto.innerHTML = "<p>Boa noite!</p>"
  document.body.style.background = '#515154'
}
}