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
| Modo acessivel | Opção    | Descrição da Opção                                                |
| -------------- | -------- | ----------------------------------------------------------------- |
| leitura        | j        | cursor anda para baixo                                            |
| leitura        | k        | cursor anda para cima                                             |
| leitura        | h        | cursor anda para a esquerda                                       |
| leitura        | l        | cursor anda para a direita                                        |
| leitura        | w        | avança uma palavra e posiciona-se no fim da mesma                 |
| leitura        | b        | retrocede uma palavra e posiciona-se no início da mesma           |
| leitura        | G        | cursor vai até ao fim do documento                                |
| leitura        | gg       | cursor vai até ao início do documento                             |
| leitura        | i        | fica em modo de **escrita** na posição actual do cursor           |
| leitura        | A        | cursor vai até ao fim da linha e fica em modo de **escrita**      |
| leitura        | a        | cursor avança um caracter e fica em modo de **escrita**           |
| leitura        | x        | apaga o caracter da posição do cursor                             |
| leitura        | dd       | apaga a linha da posição do cursor                                |
| leitura        | 0        | cursor posiciona-se no início da linha                            |
| leitura        | /        | inicia procura                                                    |
| comando        | :%s/a/b/ | substitui primeira occurrencia de 'a' por 'b'.                    |
| comando        | :w       | salva alteração do ficheiro                                       |
| comando        | :q       | sai do editor de texto vim                                        |
| comando        | :wqa!    | salva todos os ficheiros abertos a sai do editor                  |
| leitura        | shift+v  | selecciona linha do cursor                                        |
| leitura        | v        | inicia modo **visual** e estamos prontos para selecionar conteúdo |
| visual         | yy       | copia conteúdo seleccionado                                       |
| leitura        | p        | cola conteúdo copiado anteriormente                               |
| leitura        | R        | substitui o caractér da posição do cursor                         |
```

<b>Nota</b>: <mark>Só é possível aceder ao modo de <b>comando</b> : quando estamos em modo de leitura</mark>! <br>
<b>Nota</b>: O modo <b>visual</b> funciona como o modo de <b>leitura</b> mas ao movermos o cursor, o editor está a
selecionar texto.<br>
<b>Nota</b>: Para sair do modo de <b>escrita</b>, usa-se o <b>Esc</b> (tecla Escape).<br>
<b>Nota</b>: Para sair do modo <b>visual</b>, usa-se o <b>Esc</b> (tecla Escape )<br>
<b>Nota</b>: Para sair do modo <b>comando</b>, usa-se o <b>Esc</b> (tecla Escape )

Ao abrir um ficheiro já existente ou criando um novo ficheiro, o mesmo estará associado a um "buffer", que é um espaço
de memória que o vim está a usar por cada ficheiro que abre na "sessão actual". Assim, imagine-se que por cada vez que
abrimos o vim, estamos a abrir uma nova sessão e todos os ficheiros que abrimos e\ou criamos, estamos alocados num
buffer. Para mudar de buffer e\ou de ficheiro, usa-se o comando <b>:bn</b> para "next" e
<b>:bp</b> para "previous". Porque por vezes pode se tornar dificil seleccionar o buffer que queremos, podemos listar os
buffers abertos com o comando <b>:ls</b> e dizer directamente o número do ficheiro do buffer que queremos editar.
<b>:b2</b>. No vi/vim podemos alterar os atalhos originais para se adaptarem ao nosso gosto com o comando <b>map</b>,
configurado no ficheiro ~/.vim/vimrc. Assim podemos mapear um atalho para mudar de buffer facilmente: <br>

```vimrc
map <C-p> :bprev<CR>
map <C-n> :bnext<CR>
```

Outros exemplos de comandos comuns a outros editores de texto

```vimrc
map <C-s> :w<CR> " Ctrl+s - Salva documento
map <C-q> :q<CR> " Ctrl+q - Sai do exitor
```

Para abrir um novo ficheiro num novo buffer, usa-se o :e ~/ficheiro.txt

<hr>

Por fim, será útil adicionar plugins e configurar o vim para ficar mais personalizado e mais fácil de utilizar.
Fica um dos vários exemplos de como configurar o vim em mais detalhe: [aqui](./vim_config.md)

Atenção: Uma das melhores formas de configurar o vim é ter as várias opções em diferentes ficheiros, para facilitar a
leitura e a configuração e\ou manutenção.

```vimrc
" ~/.vim/vimrc
source ~/.vim/config/settings
source ~/.vim/config/macros
source ~/.vim/config/plugins
source ~/.vim/config/shorcuts
source ~/.vim/config/colors
```
