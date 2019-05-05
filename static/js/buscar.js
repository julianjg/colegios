function myFunction() {
    //debugger
    var busqueda = $("#id_buscar").val();
    console.log(busqueda);
    $.ajax({
        type: 'POST',
        url: '/busquedas_alumnos',
        data: {bus:busqueda},
        success: function() {


            //alert('Object deleted!')
        },
        //headers: { 'X_METHODOVERRIDE': 'DELETE' }
    });

}

function selec_institucion(Inst){
  debugger
  console.log(Inst);
}
