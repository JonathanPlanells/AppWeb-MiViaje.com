# Escribir un programa que pida al usuario un número entero positivo 
# y muestre por pantalla todos los números impares desde 2 hasta ese número separado por comas

entero = int(input("Escriba el numero entero: "))

for i in range(1, entero + 1, 2):
    print(i, end = ",")
   