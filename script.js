const btnContador = $("#btnContador");

function fncInit() {
  fncListeners();
}

function fncListeners() {
  btnContador.clic(function () {
    console.log("entre");
  });
}