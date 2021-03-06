
from django.conf.urls import url
from django.contrib import admin
from proyecto.views import login
from proyecto.views import registro
from proyecto.views import esti_form
from proyecto.views import *
from proyecto.views import configuracion
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r'^login',login, name='login'),
    url(r'^registro',registro, name='registro'),
    url(r'^$',inicio, name='inicio'),
    #url('^hh',hh, name='hh'),
    url(r'^login',login, name='login'),
    url(r'^logout',logout, name='logout'),
    url(r'^docentes',docentes, name='docentes'),
    url(r'^veredas',veredas, name='veredas'),
    url(r'^matriculas',matriculas, name='matriculas'),
    url(r'^configuraMatricula',configuraMatricula, name='configuraMatricula'),
    url(r'^configuraInstitucion',configuraInstitucion, name='configuraInstitucion'),
    url(r'^configuraGrado',configuraGrado, name='configuraGrado'),
    url(r'^configuraSede',configuraSede, name='configuraSede'),
    url(r'^configuraGrupo',configuraGrupo, name='configuraGrupo'),
    url(r'^actualiza_alumnos',actualiza_alumnos, name='actualiza_alumnos'),
    url(r'^busquedas_alumnos',busquedas_alumnos, name='busquedas_alumnos'),
    url(r'^universidades',universidades, name='universidades'),
    url(r'^video',video, name='video'),
    url(r'^portada',portada, name='portada'),
    url(r'^busqueda_docente',busqueda_docente, name='busqueda_docente'),
    url(r'^busquedas',busquedas, name='busquedas'),
    url(r'^busquedasIncentivos',busquedasIncentivos, name='busquedasIncentivos'),
    url(r'^configuracion',configuracion, name='configuracion'),
    url(r'^busquedas2',busquedas2, name='busquedas2'),
    url(r'^municipios',municipios, name='municipios'),
    url(r'^editarBusqueda/(?P<pk>\d+)/',editarBusqueda, name='editarBusqueda'),
    url(r'^editarInstitucion/(?P<pk>\d+)/',editarInstitucion, name='editarInstitucion'),
    url(r'^editarGrado/(?P<pk>\d+)/',editarGrado, name='editarGrado'),
    url(r'^editarSede/(?P<pk>\d+)/',editarSede, name='editarSede'),
    url(r'^editarGrupo/(?P<pk>\d+)/',editarGrupo, name='editarGrupo'),
    url(r'^eliminarInstitucion/(?P<pk>\d+)/',eliminarInstitucion, name='eliminarInstitucion'),
    url(r'^eliminarSede/(?P<pk>\d+)/',eliminarSede, name='eliminarSede'),
    url(r'^eliminarGrupo/(?P<pk>\d+)/',eliminarGrupo, name='eliminarGrupo'),
    url(r'^eliminarGrado/(?P<pk>\d+)/',eliminarGrado, name='eliminarGrado'),
    url(r'^editarMunicipio/(?P<pk>\d+)/',editarMunicipio, name='editarMunicipio'),
    url(r'^eliminarMunicipio/(?P<pk>\d+)/',eliminarMunicipio, name='eliminarMunicipio'),
    url(r'^editarVereda/(?P<pk>\d+)/',editarVereda, name='editarVereda'),
    url(r'^eliminarVereda/(?P<pk>\d+)/',eliminarVereda, name='eliminarVereda'),
    url(r'^editarUniversidad/(?P<pk>\d+)/',editarUniversidad, name='editarUniversidad'),
    url(r'^eliminarUniversidad/(?P<pk>\d+)/',eliminarUniversidad, name='eliminarUniversidad'),
    url(r'^editarColegio/(?P<pk>\d+)/',editarColegio, name='editarColegio'),
    url(r'^eliminarColegio/(?P<pk>\d+)/',eliminarColegio, name='eliminarColegio'),
    url(r'^editarCentrosSena/(?P<pk>\d+)/',editarCentrosSena, name='editarCentrosSena'),
    url(r'^eliminarCentrosSena/(?P<pk>\d+)/',eliminarCentrosSena, name='eliminarCentrosSena'),
    url(r'^editarSedeUni/(?P<pk>\d+)/',editarSedeUni, name='editarSedeUni'),
    url(r'^eliminarSedeUni/(?P<pk>\d+)/',eliminarSedeUni, name='eliminarSedeUni'),
    url(r'^colegios',colegios, name='colegios'),
    url(r'^centrosSena',centrosSena, name='centrosSena'),
    url(r'^reporte',reporte, name='reporte'),
    url(r'^InformeVarios',InformeVarios, name='InformeVarios'),
    url(r'^salidaPdf',salidaPdf, name='salidaPdf'),#GEt
    url(r'^informeVca/$', informeVca, name='informeVca'),
    url(r'^informeAlumnos/$', informeAlumnos, name='informeAlumnos'),
    url(r'^excelAgendados',excelAgendados, name='excelAgendados'),
    url(r'^sedes',sedes, name='sedes'),
    #url(r'^Veredas',Veredas, name='Veredas'),
    url(r'^informe',informe, name='informe'),
    url(r'^estimulos',estimulos, name='estimulos'),
    url(r'^validaDocumento',validaDocumento, name='validaDocumento'),
    url(r'^fechaEntrevista',fechaEntrevista, name='fechaEntrevista'),
    url(r'^horaEntrevista',horaEntrevista, name='horaEntrevista'),
    url(r'^listaEntrevista',listaEntrevista, name='listaEntrevista'),
    url(r'^editaBusqAgenda',editaBusqAgenda, name='editaBusqAgenda'),
    url(r'^editarFormularioUsuario',editarFormularioUsuario, name='editarFormularioUsuarioF'),
    url(r'^editaFechaEntrevista',editaFechaEntrevista, name='editaFechaEntrevista'),
    url(r'^editarBusquedaParcialmente/(?P<pk>\d+)/',editarBusquedaParcialmente, name='editarBusquedaParcialmente'),
    url(r'^esti_form/$',esti_form, name='esti_form'),
    #url(r'^configuracion$',configuracion, name='configuracion'),
    url(r'^pdf',salidaPdf, name='pdf'),
    url(r'^passwordResetForm',passwordResetForm, name='passwordResetForm'),
    url(r'^admin/', admin.site.urls),

    url(r'^password_reset/$', auth_views.password_reset, name='password_reset'),
    url(r'^password_reset/done/$', auth_views.password_reset_done, name='password_reset_done'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        auth_views.password_reset_confirm, name='password_reset_confirm'),
    url(r'^reset/done/$', auth_views.password_reset_complete, name='password_reset_complete'),


    url(r'^password_reset/$', auth_views.password_reset, name='password_reset'),
    url(r'^password_reset/done/$', auth_views.password_reset_done, name='password_reset_done'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        auth_views.password_reset_confirm, name='password_reset_confirm'),
    url(r'^reset/done/$', auth_views.password_reset_complete, name='password_reset_complete'),
]
