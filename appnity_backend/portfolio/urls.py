from django.urls import path
from . import views

urlpatterns = [
    path('', views.PortfolioProjectListView.as_view(), name='portfolio-list'),
    path('featured/', views.featured_projects_view, name='featured-projects'),
    path('<slug:slug>/', views.PortfolioProjectDetailView.as_view(), name='portfolio-detail'),
]