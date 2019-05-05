function valida(e){
  debugger
  var teclaPulsada=window.event ? window.event.keyCode:e.which;
      // capturamos el contenido del input
  var valorNumero=document.getElementById("id_buscar").value;
  if(valorNumero.length<12) {
     if(teclaPulsada==13)
     {
         return true;
     }
     return /\d/.test(String.fromCharCode(teclaPulsada));
 }else{
     return false;
 }
  }

function validaDocumento(e){
  debugger
  var teclaPulsada=window.event ? window.event.keyCode:e.which;
      // capturamos el contenido del input
  var valorNumero=document.getElementById("Documento").value;
  if(valorNumero.length<12) {
     if(teclaPulsada==13)
     {
         return true;
     }
     return /\d/.test(String.fromCharCode(teclaPulsada));
 }else{
     return false;
 }
  }

function validaCelular(e){
  debugger
  var teclaPulsada=window.event ? window.event.keyCode:e.which;
      // capturamos el contenido del input
  var valorNumero=document.getElementById("Celular").value;
  if(valorNumero.length<12) {
     if(teclaPulsada==13)
     {
         return true;
     }
     return /\d/.test(String.fromCharCode(teclaPulsada));
 }else{
     return false;
 }
  }

function validaEdad(e){
  debugger
  var teclaPulsada=window.event ? window.event.keyCode:e.which;
      // capturamos el contenido del input
  var valorNumero=document.getElementById("edad").value;
  if(valorNumero.length<2) {
     if(teclaPulsada==13)
     {
         return true;
     }
     return /\d/.test(String.fromCharCode(teclaPulsada));
 }else{
     return false;
 }
  }

function validaEstrato(e){
  debugger
  var teclaPulsada=window.event ? window.event.keyCode:e.which;
      // capturamos el contenido del input
  var valorNumero=document.getElementById("estrato").value;
  if(valorNumero.length<1) {
     if(teclaPulsada==13)
     {
         return true;
     }
     return /\d/.test(String.fromCharCode(teclaPulsada));
 }else{
     return false;
 }
  }

  function validaNucleo(e){
    debugger;
    var cantidad = e.key;
    console.log(cantidad);
    //for (i = 0; i <cantidad; i++) {
      //var divParen1 = document.getElementById[i];
    //  console.log("numero de div");
      //console.log(divParen1);
      //divParen1.setAttribute("style", "");
    //}
    var teclaPulsada=window.event ? window.event.keyCode:e.which;
        // capturamos el contenido del input
    var valorNucleo=document.getElementById("Nucleo").value;
    if(valorNucleo.length<1) {
       if(teclaPulsada==13)
       {
           return true;
       }
       return /\d/.test(String.fromCharCode(teclaPulsada));
   }else{
       return false;
   }
    }

function validaIngresos(e){
  debugger
  var teclaPulsada=window.event ? window.event.keyCode:e.which;
      // capturamos el contenido del input
  var valorNumero=document.getElementById("inputNumero").value;
  if(valorNumero.length<10) {
     if(teclaPulsada==13)
     {
         return true;
     }
     return /\d/.test(String.fromCharCode(teclaPulsada));
 }else{
     return false;
 }
  }

function validaSemestre(e){
  debugger
  var teclaPulsada=window.event ? window.event.keyCode:e.which;
      // capturamos el contenido del input
  var valorNumero=document.getElementById("semestreEnCurso").value;
  if(valorNumero.length<2) {
     if(teclaPulsada==13)
     {
         return true;
     }
     return /\d/.test(String.fromCharCode(teclaPulsada));
 }else{
     return false;
 }
  }


function validaMatricula(e){
  debugger
  var teclaPulsada=window.event ? window.event.keyCode:e.which;
      // capturamos el contenido del input
  var valorNumero=document.getElementById("valorMatricula").value;
  if(valorNumero.length<10) {
     if(teclaPulsada==13)
     {
         return true;
     }
     return /\d/.test(String.fromCharCode(teclaPulsada));
 }else{
     return false;
 }
  }

function selec_vereda(vereda) {
  debugger
  var vereda = vereda.value;
  console.log(vereda);
  if (vereda=="Anapoima ")
  {
    var e = document.getElementById("label_vereda_padres");
    e.setAttribute("style", "");
    var d = document.getElementById("Barrio_vereda_padres");
    d.setAttribute("style", "");
  }else{
    var ee = document.getElementById("label_vereda_padres");
    ee.setAttribute("style", "visibility:hidden");
    var dd = document.getElementById("Barrio_vereda_padres");
    dd.setAttribute("style", "visibility:hidden");
  }

}

function selec_vereda1(vereda) {
  debugger
  var vereda = vereda.value;
  console.log(vereda);
  if (vereda=="Anapoima ")
  {
    var f = document.getElementById("label_vereda_estudiante");
    f.setAttribute("style", "");
    var g = document.getElementById("Barrio_vereda_estudiante");
    g.setAttribute("style", "");
  }else{
    var ff = document.getElementById("label_vereda_estudiante");
    ff.setAttribute("style", "visibility:hidden");
    var gg = document.getElementById("Barrio_vereda_estudiante");
    gg.setAttribute("style", "visibility:hidden");

  }
}

function nucleoFamiliar(tecla){
  debugger
  var h = document.getElementById("nucleoNombre");
  h.setAttribute("style", "");
}

  function uncheckRadio(rbutton){
    document.getElementById("Servicios_ninguno").checked = false;
  }

  function uncheckRadio1(rbutton){
    document.getElementById("Servicios_ninguno").checked = false;
  }

  function uncheckRadio2(rbutton){
    document.getElementById("Servicios_ninguno").checked = false;
  }

  function uncheckRadio3(rbutton){
    document.getElementById("Servicios_ninguno").checked = false;
  }

  function uncheckRadio4(rbutton){
    document.getElementById("Servicios_ninguno").checked = false;
  }

  var era5;
  function uncheckRadio5(rbutton){
    if(rbutton.checked==true && era5==true){rbutton.checked=false;}
    era5=rbutton.checked;
    document.getElementById("Acueducto").checked = false;
    document.getElementById("Alcantarillado").checked = false;
    document.getElementById("Energia").checked = false;
    document.getElementById("Aseo").checked = false;
    document.getElementById("Gas").checked = false;
  }

function validaSisben(e){
  debugger
  var teclaPulsada=window.event ? window.event.keyCode:e.which;
      // capturamos el contenido del input
  var valorNumero=document.getElementById("sisben").value;
  if (valorNumero.length==2){
     var coma = ","
     decima = coma.concat(e.key);
     console.log(coma);
     var nunComa = valorNumero.concat(decima);
     sisben.value = "";   //limpio id_error *seleccione actividad
     document.getElementById("sisben").value = nunComa;
     return false;
  }
  if(valorNumero.length<5) {
     if(teclaPulsada==13)
     {
         return false;
     }
     return /\d/.test(String.fromCharCode(teclaPulsada));
 }else{
     return false;
 }
  }

function otroDoc(){
  debugger
  if(document.getElementById("Tipo_documento_otro").checked == true){
    var i = document.getElementById("documentoOtro");
    i.setAttribute("style", "");
}else{
  var i = document.getElementById("documentoOtro");
  i.setAttribute("style", "visibility:hidden");
}
}

function cuantosHijos(){
  if(document.getElementById("hijos_Si").checked == true){
    var j = document.getElementById("hijos");
    j.setAttribute("style", "");
    var jj = document.getElementById("label_Hijos");
    jj.setAttribute("style", "");
}else{
    document.getElementById("hijos").value = "0";
    var a = document.getElementById("hijos");
    a.setAttribute("style", "visibility:hidden");
    var aa = document.getElementById("label_Hijos");
    aa.setAttribute("style", "visibility:hidden");
}
}

function otroPertenecia(){
  debugger
  if(document.getElementById("Otro_Poblaciones").checked == true){
    var k = document.getElementById("pertenenciaOtro");
    k.setAttribute("style", "");
}else{
  var k = document.getElementById("pertenenciaOtro");
  k.setAttribute("style", "visibility:hidden");
}
}

function noAplica(aplica){
    debugger
  if(aplica.checked==true){
  var l = document.getElementById("Ciudad_padres");
  l.setAttribute("style", "visibility:hidden");
  var m = document.getElementById("Urbano_padres");
  m.setAttribute("style", "visibility:hidden");
  var n = document.getElementById("Rural_padres");
  n.setAttribute("style", "visibility:hidden");
  var o = document.getElementById("label_urbano");
  o.setAttribute("style", "visibility:hidden");
  var p = document.getElementById("label_rural");
  p.setAttribute("style", "visibility:hidden");
  var q = document.getElementById("Dirección_padres");
  q.setAttribute("style", "visibility:hidden");
}else{
  var l = document.getElementById("Ciudad_padres");
  l.setAttribute("style", "");
  var m = document.getElementById("Urbano_padres");
  m.setAttribute("style", "");
  var n = document.getElementById("Rural_padres");
  n.setAttribute("style", "");
  var o = document.getElementById("label_urbano");
  o.setAttribute("style", "");
  var p = document.getElementById("label_rural");
  p.setAttribute("style", "");
  var q = document.getElementById("Dirección_padres");
  q.setAttribute("style", "");
}
}

function otroDependencia(){
  debugger
  if(document.getElementById("dependencia_Otro").checked == true){
    var r = document.getElementById("dependenciaOtro");
    r.setAttribute("style", "");
}else{
    var r = document.getElementById("dependenciaOtro");
    r.setAttribute("style", "visibility:hidden");
}
}


function seleccionSENA(universidad){
  debugger
  universidad = universidad.value
  console.log(universidad);
  if (universidad == "Servicio Nacional de Aprendizaje (SENA)"){
  var s = document.getElementById("centrosSena");
  s.setAttribute("style", "");
}else{
  var t = document.getElementById("centrosSena");
  t.setAttribute("style", "visibility:hidden");
}
}

function otroModalidad(){
  debugger
  if(document.getElementById("modalidad_otro").checked == true){
    var u = document.getElementById("modalidadOtro");
    u.setAttribute("style", "");
}else{
  var v = document.getElementById("modalidadOtro");
  v.setAttribute("style", "visibility:hidden");
}
}

function incentivoCuantas(){
  debugger
  if(document.getElementById("incentivo_si").checked == true){
    var y = document.getElementById("cuantasVeces");
    y.setAttribute("style", "");
    var yy = document.getElementById("label_veces");
    yy.setAttribute("style", "");
}else{
  var z = document.getElementById("cuantasVeces");
  z.setAttribute("style", "visibility:hidden");
  var zz = document.getElementById("label_veces");
  zz.setAttribute("style", "visibility:hidden");
}
}

function otroPrograma(){
  debugger
  if(document.getElementById("beneficiaro_programas_otro").checked == true){
    var ww = document.getElementById("programaOtro");
    ww.setAttribute("style", "");
}else{
  var xx = document.getElementById("programaOtro");
  xx.setAttribute("style", "visibility:hidden");
}
}

function extraAcademicas(){
  debugger;
  if(document.getElementById("extra_academicas_si").checked == true){
    var yy = document.getElementById("lepagan");
    yy.setAttribute("style", "");
    $('#extra_academicas_pagan_si').prop("required", true);
    console.log(yy);
}else{
  var yy = document.getElementById("lepagan");
  yy.setAttribute("style", "display:none");
  $('#extra_academicas_pagan_si').removeAttr("required");
  $('#extra_academicas_pagan_si').prop("checked", false);
  $('#extra_academicas_pagan_no').prop("checked", false);
  console.log(yy);

}
}

function entrevistaFecha(e){
  debugger;
  var dia = e.target.value;
  console.log(dia);
  $('#id_hora').empty();     //limpio select actividades para que no se sumen con las nuevas
  $('#id_hora').append('<option value="0">-- Seleccina una actividad --</option>')
  $.ajax({
            type: 'GET',
            url: 'fechaEntrevista/',
            data : { dia : dia },
            success: function(data) {
              $('#id_hora').empty();
                 }

          });
}

function fechaAgenda(dia){
  debugger
  var fecha = dia;
    $.ajax({
        type: 'POST',
        url: 'listaEntrevista',
        data : { fecha : fecha },
        success: function(data) {
            var lista = data.lista
            lis= JSON.parse(lista);
            var proy = data.proye
            pro = JSON.parse(proy);
            var html = ""
            var template = ""
                  for (var i = 0; i < lis.length; i++) {
                    template =
                    '<div class="table-full-width">'+
                    '<table class="table" id="id_tabla"><tbody><tr>'+
                    '<td>::HORAS::</td>'+
                    '<td>::PROYECTO::</td>'+
                    '</td></tr></div></tbody></table>'+
                    '</div>'
                    template = template.replace("::HORAS::",pro[i]).replace("::PROYECTO::",lis[i])
                    //.replace(/\:\:idTarea\:\:/g,fields.pk)
                    html += template
                  $("#tabla_repo").html(html)

                  }
                  console.info(data)
                  drawMaterial(eval(data.todos))
            }
        }
      );
}

function selec_institucion(ins) {
  debugger
  var institucion = ins;
  console.log(institucion);

}
