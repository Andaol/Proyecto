function buscarMedicamento() {
    var medicamento = $('#medicamento').val();
    $.ajax({
      url: 'https://api.fda.gov/drug/label.json?search=' + medicamento,
      dataType: 'json',
      success: function(data) {
        var resultados = '';
        for (var i = 0; i < data.results.length; i++) {
          resultados += '<h2>' + data.results[i].openfda.brand_name[0] + '</h2>';
        }
        $('#resultados').html(resultados);
      }
    });
  }