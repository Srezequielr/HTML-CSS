function inputHandler() {
  let input = document.querySelectorAll(".inputAdd");
  console.log(input);

  for (let i = 0; i < input.length; i++) {
    if (input[i].value.trim().length == 0) {
      input[i].setAttribute("style", "background-color: #fd8b8b");
    } else {
      input[i].setAttribute(
        "style",
        "background-color: #b6e7b6; transition: 0.5s"
      );
    }
  }
}

function reloj() {
  let tiempo = new Date();
  let hora = tiempo.getHours();
  let minutos = tiempo.getMinutes();
  let segundos = tiempo.getSeconds((horas = pad()));

  hora = pad(hora);
  munitos = pad(minutos);
  segundos = pad(segundos);

  let horaActual = `${hora}:${munitos}:${segundos}`;

  console.log(horaActual);
  let horaDiplay = document.getElementById("time");
  if (horaDiplay != null) {
    horaDiplay.textContent = horaActual
  }
  setTimeout(reloj, 1000);
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

reloj();

function nameSurnameHandler() {
  let nameSurname = document.querySelectorAll(".nameSurname");
  let name = nameSurname[0].value.toUpperCase();
  let surname = nameSurname[1].value.toUpperCase();
  let surnameName = document.getElementById("nameSurname");
  surnameName.innerText = `${surname} ${name}`;
}

function numTarjHandler() {
  let numValue = document.querySelector(".inputTarj").value.replace(/ /g, "");
  document.querySelector(".inputTarj").value = numValue;
  let num = numValue.match(/.{1,4}/g).join(" ");
  let numTarj = document.querySelector(".numTarj");
  numTarj.innerText = num;
}

function vencHandler() {
  let vencValue = document
    .querySelector("#venc")
    .value.replace(/-/g, "/")
    .slice(2);
  let vencDate = document.querySelector("#vencDate");
  vencDate.innerText = vencValue;
}

function segHandler() {
  let vencValue = document.querySelector("#seg").value.replace(/ /g, "");
  document.querySelector("#seg").value = vencValue;
  let segCod = document.querySelector(".segCod");
  segCod.innerText = vencValue;
}
