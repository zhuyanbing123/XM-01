from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.homepage, name='home page'),
    url(r'^login/$', views.login, name='login'),
    url(r'^goods/$', views.goods, name='goods'),
    url(r'^shoppingcar/$', views.shoppingcar, name='shoppingcar')
]