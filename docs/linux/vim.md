# vi/vim

<b>slogan</b>: Keep it Stupid Simple

Instalar o vim

```sh
# Debian based
$ sudo apt install vim
```

Antes de começar, é bom lembrar que o vi/vim tem pelo menos <b>4</b> modos principais de interação.<br>
Ao abrir o editor vim estamos em modo de <b>leitura</b>.<br>
Os outros três modos principais são o de <b>escrita</b> o de <b>visual</b> e o de <b>comando</b>.<br>

```sh
$ vim
```

Ao abrir o editor podemos ler a mensagem de boas vindas, que nos indica algumas das opções que podemos realizar.
Sendo que ainda estamos em modo de leitura, podemos aceder ao modo de comando usando os <b>:</b> (dois pontos).
A mensagem de boas vindas refere alguns dos comandos principais para usar o editor.
Esperando que sabemos ler Inglês, o primeiro passo é ler o tutorial que o editor oferece, para que o utlizador
comece a ambientar-se ao editor de texto. <b>:help</b><br>
Só por curiosidade, o criador do editor vi, não tinha um teclado com as setas e por isso, teve de associar teclas à
função das setas (esquerda, direita, cima, baixo). Por isso quando nos habituarmos a associar o <b>j</b> à seta (baixo),
o <b>k</b> à seta (cima), o <b>h</b> à seta (esquerda) e por fim o <b>l</b> à seta (direita), entendemos.
<br>Fica uma lista das opções mais usadas com a sua descrição.

```markdown
| Modo acessivel | Opção                     | Descrição da Opção                                                |
| -------------- | ------------------------- | ----------------------------------------------------------------- |
| leitura        | j                         | cursor anda para baixo                                            |
| leitura        | k                         | cursor anda para cima                                             |
| leitura        | h                         | cursor anda para a esquerda                                       |
| leitura        | l                         | cursor anda para a direita                                        |
| leitura        | w                         | avança uma palavra e posiciona-se no fim da mesma                 |
| leitura        | b                         | retrocede uma palavra e posiciona-se no início da mesma           |
| leitura        | G                         | cursor vai até ao fim do documento                                |
| leitura        | gg                        | cursor vai até ao início do documento                             |
| leitura        | i                         | fica em modo de **escrita** na posição actual do cursor           |
| leitura        | A                         | cursor vai até ao fim da linha e fica em modo de **escrita**      |
| leitura        | a                         | cursor avança um caracter e fica em modo de **escrita**           |
| leitura        | x                         | apaga o caracter da posição do cursor                             |
| leitura        | dd                        | apaga a linha da posição do cursor                                |
| leitura        | 0                         | cursor posiciona-se no início da linha                            |
| leitura        | /                         | inicia procura                                                    |
| comando        | :%s/palavra/substituição/ | substitui palavra seleccionada por...                             |
| comando        | :w                        | salva alteração do ficheiro                                       |
| comando        | :q                        | sai do editor de texto vim                                        |
| comando        | :wqa!                     | salva todos os ficheiros abertos a sai do editor                  |
| leitura        | shift+v                   | selecciona linha do cursor                                        |
| leitura        | v                         | inicia modo **visual** e estamos prontos para selecionar conteúdo |
| visual         | yy                        | copia conteúdo seleccionado                                       |
| leitura        | p                         | cola conteúdo copiado anteriormente                               |
| leitura        | R                         | substitui o caractér da posição do cursor                         |
```

<b>Nota</b>: <mark>Só é possível aceder ao modo de <b>comando</b> : quando estamos em modo de leitura</mark>! <br>
<b>Nota</b>: O modo <b>visual</b> funciona como o modo de <b>leitura</b> mas ao movermos o cursor, o editor está a
selecionar texto.<br>
<b>Nota</b>: Para sair do modo de <b>escrita</b>, usa-se o <b>Esc</b> (tecla Escape).<br>
<b>Nota</b>: Para sair do modo <b>visual</b>, usa-se o <b>Esc</b> (tecla Escape )<br>
<b>Nota</b>: Para sair do modo <b>comando</b>, usa-se o <b>Esc</b> (tecla Escape )

<hr>

Por fim, será útil adicionar plugins e configurar o vim para ficar mais personalizado e mais fácil de utilizar.
Fica um dos vários exemplos de como configurar o vim em mais detalhe: [aqui](./vim_config.md)
