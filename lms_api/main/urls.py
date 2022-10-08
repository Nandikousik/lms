from django.urls import path
from . import views

urlpatterns = [
    path('', views.TeacherList.as_view()),
    path('', views.TeacherDetail.as_view()),
]