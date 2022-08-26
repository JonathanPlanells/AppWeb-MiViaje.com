#Piramide de asteriscos
n = int(input("Ingrese la altura del triangulo: "))

for i in range(n):
    for j in range(i + 1):
        print("*", end="")
    print("")
 
 