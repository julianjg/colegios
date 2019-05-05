function valor_botones(chTipodoc,chGenero,chEstadoCivil,chpadreCabeza,chPoblacion,chUbicacionEst,chVivienda,chUbicacionPadres,chdependenciaEconomica,choficialPrivado,chacreditacionUniversidad,chtecnicaTecnologica,chacreditacionCarrera,chcicloEducacion,chmodalidad,chpropedeutico,chbeneficiarioprogramas,chincentivoEducativo,chextraAcademicas,chextraAcademicaPaga){
debugger
var tipoDocumento = chTipodoc.value;
console.log(tipoDocumento);
if (tipoDocumento=="CC"){
    document.getElementById("CC").checked = true;
}
if (tipoDocumento=="T.I"){
    document.getElementById("T.I").checked = true;
}
if (tipoDocumento=="otro"){
    document.getElementById("Tipo_documento_otro").checked = true;
}
var genero = chGenero.value;
console.log(genero);
if (genero=="Femenino"){
    document.getElementById("Mujer").checked = true;
}
if (genero=="Masculino"){
    document.getElementById("Hombre").checked = true;
}
var estadoCivil = chEstadoCivil.value;
console.log(estadoCivil);
if (estadoCivil=="Soltero"){
    document.getElementById("Soltero").checked = true;
}
if (estadoCivil=="Casado"){
    document.getElementById("Casado").checked = true;
}
if (estadoCivil=="Union libre"){
    document.getElementById("Union_libre").checked = true;
}
if (estadoCivil=="Otro"){
    document.getElementById("Civil_otro").checked = true;
}
var padreCabeza = chpadreCabeza.value;
console.log(padreCabeza);
if (padreCabeza=="Si"){
    document.getElementById("hijos_Si").checked = true;
}
if (padreCabeza=="No"){
    document.getElementById("hijos_No").checked = true;
}
var Poblacion = chPoblacion.value;
console.log(Poblacion);
if (Poblacion=="Desplazado"){
    document.getElementById("Desplazado").checked = true;
}
if (Poblacion=="Afrodecendiente"){
    document.getElementById("Afrodecendiente").checked = true;
}
if (Poblacion=="Indigena"){
    document.getElementById("Indigena").checked = true;
}
if (Poblacion=="Reinsertado"){
    document.getElementById("Reinsertado").checked = true;
}
if (Poblacion=="Ninguno"){
    document.getElementById("pertenencia_ninguno").checked = true;
}
if (Poblacion=="Otro"){
    document.getElementById("Otro_Poblaciones").checked = true;
}
var ubicacionEst = chUbicacionEst.value;
console.log(ubicacionEst);
if (ubicacionEst=="Urbano"){
    document.getElementById("Urbano").checked = true;
}
if (ubicacionEst=="Rural"){
    document.getElementById("Rural").checked = true;
}
var vivienda = chVivienda.value;
console.log(vivienda);
if (vivienda=="Propia"){
    document.getElementById("Propia").checked = true;
}
if (vivienda=="Arrendada"){
    document.getElementById("Arrendada").checked = true;
}
if (vivienda=="Familiar"){
    document.getElementById("Familiar").checked = true;
}
if (vivienda=="Cuidanderos"){
    document.getElementById("Cuidanderos").checked = true;
}
var ubicacionPadres = chUbicacionPadres.value;
console.log(ubicacionPadres);
if (ubicacionPadres=="Urbano"){
    document.getElementById("Urbano_padres").checked = true;
}
if (ubicacionPadres=="Rural"){
    document.getElementById("Rural_padres").checked = true;
}
var dependenciaEconomica = chdependenciaEconomica.value;
console.log(dependenciaEconomica);
if (dependenciaEconomica=="Papa"){
    document.getElementById("Papa").checked = true;
}
if (dependenciaEconomica=="Mama"){
    document.getElementById("Mama").checked = true;
}
if (dependenciaEconomica=="Ambos"){
    document.getElementById("Ambos").checked = true;
}
if (dependenciaEconomica=="Otro"){
    document.getElementById("dependencia_Otro").checked = true;
}
var oficialPrivado = choficialPrivado.value;
console.log(oficialPrivado);
if (oficialPrivado=="Oficial"){
    document.getElementById("Oficial").checked = true;
}
if (oficialPrivado=="Privado"){
    document.getElementById("Privado").checked = true;
}
var acreditacionUniversidad = chacreditacionUniversidad.value;
console.log(acreditacionUniversidad);
if (acreditacionUniversidad=="Si"){
    document.getElementById("Acreditación_si").checked = true;
}
if (acreditacionUniversidad=="No"){
    document.getElementById("Acreditación_no").checked = true;
}
if (acreditacionUniversidad=="En curso"){
    document.getElementById("Acreditación_curso").checked = true;
}
var tecnicaTecnologica = chtecnicaTecnologica.value;
console.log(tecnicaTecnologica);
if (tecnicaTecnologica=="Tecnica"){
    document.getElementById("Tecnica").checked = true;
}
if (tecnicaTecnologica=="Tecnologica"){
    document.getElementById("Tecnologica").checked = true;
}
if (tecnicaTecnologica=="Porfesional"){
    document.getElementById("Porfesional").checked = true;
}
var acreditacionCarrera = chacreditacionCarrera.value;
console.log(acreditacionCarrera);
if (acreditacionCarrera=="Si"){
    document.getElementById("Acreditación_caarrera_si").checked = true;
}
if (acreditacionCarrera=="No"){
    document.getElementById("Acreditación_caarrera_no").checked = true;
}
if (acreditacionCarrera=="En curso"){
    document.getElementById("Acreditación_carrera_en_curso").checked = true;
}
var cicloEducacion = chcicloEducacion.value;
console.log(cicloEducacion);
if (cicloEducacion=="Años"){
    document.getElementById("Años").checked = true;
}
if (cicloEducacion=="Semestre"){
    document.getElementById("Semestre").checked = true;
}
if (cicloEducacion=="Trimestre"){
    document.getElementById("Trimestre").checked = true;
}
var modalidad = chmodalidad.value;
console.log(modalidad);
if (modalidad=="Presencial"){
    document.getElementById("Presencial").checked = true;
}
if (modalidad=="Semipresencial"){
    document.getElementById("Semipresencial").checked = true;
}
if (modalidad=="Virtual"){
    document.getElementById("Virtual").checked = true;
}
if (modalidad=="modalidad_otro"){
    document.getElementById("modalidad_otro").checked = true;
}
var propedeutico = chpropedeutico.value;
console.log(propedeutico);
if (propedeutico=="Si"){
    document.getElementById("propedeuticos_Si").checked = true;
}
if (propedeutico=="No"){
    document.getElementById("propedeuticos_No").checked = true;
}
if (propedeutico=="otro"){
    document.getElementById("propedeuticos_otro").checked = true;
}
var beneficiarioprogramas = chbeneficiarioprogramas.value;
console.log(beneficiarioprogramas);
if (modalidad=="pilo_paga"){
    document.getElementById("pilo_paga").checked = true;
}
if (beneficiarioprogramas=="4x1"){
    document.getElementById("4x1").checked = true;
}
if (beneficiarioprogramas=="otro"){
    document.getElementById("beneficiaro_programas_otro").checked = true;
}
if (beneficiarioprogramas=="Ninguno"){
    document.getElementById("Beneficiario_ninguno").checked = true;
}
var incentivoEducativo = chincentivoEducativo.value;
console.log(incentivoEducativo);
if (incentivoEducativo=="Si"){
    document.getElementById("incentivo_si").checked = true;
}
if (incentivoEducativo=="No"){
    document.getElementById("incentivo_no").checked = true;
}
var extraAcademicas = chextraAcademicas.value;
console.log(extraAcademicas);
if (extraAcademicas=="si"){
    document.getElementById("extra_academicas_si").checked = true;
}
if (extraAcademicas=="No"){
    document.getElementById("extra_academicas_no").checked = true;
}
var extraAcademicaPaga = chextraAcademicaPaga.value;
console.log(extraAcademicaPaga);
if (extraAcademicaPaga=="si"){
    document.getElementById("extra_academicas_pagan_si").checked = true;
}
if (extraAcademicaPaga=="No"){
    document.getElementById("extra_academicas_pagan_no").checked = true;
}
}
