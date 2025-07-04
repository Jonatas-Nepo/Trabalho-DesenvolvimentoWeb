print("Bem vindo a loja de Jonatas Nepomuceno!")
print("Por favor, informe: ")
quantidade = float(input("Quantidade do produto: ")) #recebe o valor da quantidade
valor_unidade = float(input("Valor unitário: R$ ")) #recebe o valor unitário do produto
valor= quantidade * valor_unidade 

#agora é calculado o desconto
if valor > 10000:
    desconto = 0.11*valor 
    print("Desconto de 11% aplicado!")
elif valor > 6000:
    desconto = 0.07*valor
    print("Desconto de 7% aplicado!")

elif valor > 2500:
    desconto = 0.04*valor
    print("Desconto de 4% aplicado!")
else:
    desconto = 0
    print("Sem desconto disponível.")

#e agora é calculado o valor final
valor_final = valor - desconto
#usa o if para determinar que se houver desconto, ele imprime o valor com desconto e o valor sem desconto
#se não houver desconto, imprime apenas o valor final
if desconto > 0:
    print("valor com desconto: R$ ", valor_final)
    print("valor sem desconto: R$ ", valor)
else:
    print("Valor: R$ ", valor_final)