from django.contrib import admin
from proyecto.models import *
from models import Fechas


#admin.site.register(Inst_educativas)
admin.site.register(Grado)
admin.site.register(Sisben)
admin.site.register(Estrato)
admin.site.register(Genero)
admin.site.register(Persona)
admin.site.register(Estudiante)
admin.site.register(Alumno)
admin.site.register(docente)



from proyecto.models import Inst_educativas

# Register your models here.
@admin.register(Inst_educativas)
class RectoresAdmin(admin.ModelAdmin):
    pass

# ... export functions will go here ...
