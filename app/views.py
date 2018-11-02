from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from app.models import  Us


def homepage(request):
    return render(request, 'home page.html')


def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        email = request.POST.get('email')
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(email,username,password)


        user = Us()
        user.email = email
        user.username = username
        user.password = password
        user.save()

        response = redirect('templates:home page.html')
        response.set_cookie('username',username)
        return response


def goods(request):
    return render(request, 'goods.html')


def shoppingcar(request):
    return render(request, 'shoppingcar.html')

