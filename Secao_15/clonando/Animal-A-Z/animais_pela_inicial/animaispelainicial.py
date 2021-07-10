"""
Animal finder.
"""
from random import shuffle

print('Digite uma letra e um animal com sua inicial conforme a letra especificada aparecerá')

dados = str(input())
arquivo = open('animais.txt', encoding='utf-8')
ret = arquivo.read()
ret = ret.split("\n")

res = []

for animal in ret:
    if animal[0] == dados[0].lower():
        res.append(animal)

shuffle(res)


try:
    print(f'O animal encontrado que começa com a letra {dados[0]} é o/a {res[0]}')
except (IndexError, ValueError):
    print('Você especificou um número ou uma letra não disponível, tente novamente.')

input('Aperte ENTER para finalizar a aplicação')
