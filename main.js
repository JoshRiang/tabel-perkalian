window.onload = () => {
  render(5);
  var dd = document.getElementById("jmlhtabel");
  dd.addEventListener("keyup", () => {
    updateJmlh();
  })


  function updateJmlh() {
    jumlah = dd.value;
    if (dd.value == 0) {
        jumlah = 5
    }
    render(jumlah);
  }

  function render(jumlah) {
    $("#tableHead").empty().append("<th scope='col' class='border'>#</th>");
    $("#tableBody").empty();
    for (var x = 1; x <= jumlah; x++) {
      $("#tableHead").append("<th class='border' scope='col'>" + x + "</th>");
      var tr = $("<tr></tr>").append("<th scope='row' class='border'>" + x + "</th>");
      for (var i = 1; i <= jumlah; i++) {
        tr.append("<td class='border'>" + x * i + "</td>");
      }
      $("#tableBody").append(tr);
    }
  };
};
