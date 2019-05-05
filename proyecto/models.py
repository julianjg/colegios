from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
import datetime

# Create your models here.
lst_sexo = ("M","masculino"),("F","femenino")
lst_estado = ("S","si"),("N","no")

class Inst_educativas(models.Model):
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=30)

class Inst_educativas2(models.Model):
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=30)

class SedeInstitucion(models.Model):
    sede = models.CharField(max_length=50)
    institucion = models.ForeignKey(Inst_educativas, null=True)

class SedeInstitucion2(models.Model):
    sede = models.CharField(max_length=50)
    institucion = models.ForeignKey(Inst_educativas2, null=True)

class Grado(models.Model):
    grado = models.CharField(max_length=15)

class Grupos(models.Model):
    grupo = models.CharField(max_length=20)
    grado = models.ForeignKey(Grado, null=True)

class Grupos2(models.Model):
    grupo = models.CharField(max_length=20)
    grado = models.ForeignKey(Grado, null=True)
    #class Meta:
    #    verbose_name = 'Institucion_educativa'
    #    verbose_name_plural = 'Inst_educativas'


    def def__Unicode__(self):
        return self.nombre

class Usuario(User):
    class Meta:
        proxy = True

class Municipios(models.Model):
    municipio = models.CharField(max_length=50)

class Veredas(models.Model):
    vereda = models.CharField(max_length=50)

class Colegios(models.Model):
    colegio = models.CharField(max_length=150)

class CentrosSena(models.Model):
    centroSena = models.CharField(max_length=150)

class Sedes(models.Model):
    sede = models.CharField(max_length=150)

class Universidades(models.Model):
    universidad = models.CharField(max_length=150)

class Sisben(models.Model)  :
    puntaje = models.CharField(max_length=15)

class Estrato(models.Model)  :
    estrato = models.CharField(max_length=15)

class Genero(models.Model)  :
    estrato = models.CharField(max_length=15)

class FormularioEstimulos(models.Model)  :

    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    tipoDocumento = models.CharField(max_length=10)
    documentoOtro = models.CharField(max_length=30)
    documento = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    celular = models.CharField(max_length=50)
    genero = models.CharField(max_length=30)
    edad = models.CharField(max_length=30)
    estadoCivil = models.CharField(max_length=30)
    cabezaFamilia = models.CharField(max_length=30)
    hijos = models.CharField(max_length=10)
    pertenencia = models.CharField(max_length=30)
    pertenenciaOtro = models.CharField(max_length=50)
    direccionEstudiante = models.CharField(max_length=100)
    ciudadEstudiante = models.CharField(max_length=150)
    barrioEstudiante = models.CharField(max_length=150)
    ubicacionEstudiante = models.CharField(max_length=30)
    vivienda = models.CharField(max_length=30)
    estrato = models.CharField(max_length=30)
    sisben = models.CharField(max_length=30)
    nucleoFamiliar = models.CharField(max_length=30)
    direccionPadres = models.CharField(max_length=100)
    ciudadPadres = models.CharField(max_length=150)
    barrioPadres = models.CharField(max_length=150)
    ubicacionPadres = models.CharField(max_length=30)
    serviciosPublicos = models.CharField(max_length=70)
    dependenciaEconomica = models.CharField(max_length=30)
    dependenciaOtro = models.CharField(max_length=50)
    ingresosFamilia = models.CharField(max_length=30)
    colegio = models.CharField(max_length=150)
    oficialPrivado = models.CharField(max_length=30)
    anoTerminacion = models.CharField(max_length=30)
    actaGrado = models.CharField(max_length=50)
    universidad = models.CharField(max_length=150)
    centrosSena = models.CharField(max_length=150)
    sede = models.CharField(max_length=50)
    acreditacionUniversidad = models.CharField(max_length=30)
    carrera = models.CharField(max_length=100)
    tecnicaTecnologica = models.CharField(max_length=30)
    acreditacionCarrera = models.CharField(max_length=30)
    cicloEducacion = models.CharField(max_length=30)
    semestreEnCurso = models.CharField(max_length=30)
    modalidad = models.CharField(max_length=30)
    modalidadOtro = models.CharField(max_length=50)
    propedeutico = models.CharField(max_length=30)
    propedeuticoOtro = models.CharField(max_length=50)
    valorMatricula = models.CharField(max_length=30)
    beneficiarioprogramas = models.CharField(max_length=30)
    programaOtro = models.CharField(max_length=50)
    incentivoEducativo = models.CharField(max_length=30)
    cuantasVeces = models.CharField(max_length=30)
    extraAcademicas = models.CharField(max_length=30)
    extraAcademicaPaga = models.CharField(max_length=30)
    parentesco1 = models.CharField(max_length=100)
    parentesco2 = models.CharField(max_length=100)
    parentesco3 = models.CharField(max_length=100)
    parentesco4 = models.CharField(max_length=100)
    parentesco5 = models.CharField(max_length=100)
    parentesco6 = models.CharField(max_length=100)
    parentesco7 = models.CharField(max_length=100)
    totalObtenido = models.CharField(max_length=100)

class Persona(models.Model):
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    documento = models.CharField(max_length=12)
    email = models.EmailField(max_length=30)
    sexo = models.CharField(max_length=1, choices= lst_sexo)

class Estudiante(models.Model):
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    documento = models.CharField(max_length=12)
    carrera = models.CharField(max_length=50)
    genero = models.CharField(max_length=1, choices= lst_sexo)
    sisben = models.CharField(max_length=12)
    estrato = models.ForeignKey('Estrato',models.DO_NOTHING)
    direccion = models.CharField(max_length=60)
    contacto = models.CharField(max_length=12)
    nacimiento = models.CharField(max_length=12)
    email = models.EmailField(max_length=30)

class Alumno(models.Model):
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    documento = models.CharField(max_length=12)
    grado = models.ForeignKey('Grado',models.DO_NOTHING)
    genero = models.CharField(max_length=1, choices= lst_sexo)
    sisben = models.CharField(max_length=12)
    estrato = models.ForeignKey('Estrato',models.DO_NOTHING)
    transporte = models.CharField(max_length=1, choices= lst_estado)
    direccion = models.CharField(max_length=60)
    familias = models.CharField(max_length=1, choices= lst_estado)
    alimentacion = models.CharField(max_length=1, choices= lst_estado)
    desplazado = models.CharField(max_length=1, choices= lst_estado)
    contacto = models.CharField(max_length=12)
    nacimiento = models.CharField(max_length=12)
    email = models.EmailField(max_length=30)
    credo = models.CharField(max_length=25)

class Alumno2(models.Model):
    procedencia = models.ForeignKey('Veredas', null=True)
    institucion = models.ForeignKey('Inst_educativas2',null=True)
    sede = models.ForeignKey('SedeInstitucion2',null=True)
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    documento = models.CharField(max_length=20)
    grado = models.ForeignKey('Grado',models.DO_NOTHING)
    genero = models.CharField(max_length=20, choices= lst_sexo)
    transporte = models.CharField(max_length=20, choices= lst_estado)
    direccion = models.CharField(max_length=60)
    familias = models.CharField(max_length=20, choices= lst_estado)
    alimentacion = models.CharField(max_length=20, choices= lst_estado)
    desplazado = models.CharField(max_length=20, choices= lst_estado)
    contacto = models.CharField(max_length=20)
    nacimiento = models.CharField(max_length=20)
    email = models.EmailField(max_length=30)
    credo = models.CharField(max_length=25)

class docente(models.Model):
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    documento = models.CharField(max_length=12)
    email = models.EmailField(max_length=30)
    asignatura = models.CharField(max_length=50)
    contacto = models.CharField(max_length=12)

class Horas(models.Model):
    hora = models.CharField(max_length=15)

class Video(models.Model):
    video = models.CharField(max_length=500)

class Fechas(models.Model):
    hora =  models.ForeignKey(Horas, null=True)
    fecha = models.CharField(max_length=15, null=True)
    nombre = models.ForeignKey(FormularioEstimulos, null=True)

class Traza(models.Model):
    usuario = models.IntegerField()
    tipo= models.CharField(max_length=1)
    tiempo= models.DateTimeField(default=datetime.datetime.now)
    accion= models.TextField()
