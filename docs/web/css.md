# CSS

O CSS é usado para dar um estilo as páginas web. Cor, posição e até animação.

<i>Sendo que este documento faz parte de um processo de aprendizagem,
devo referir o documento [anterior](./html.md) sobre HTML para dar continuidade a este. </i>

Tal como diz no documento acima referido, os elementos de HTML podem conter vários atributos,
sendo que a maioria são atributos especificos para os elementos de HTML, outros servem a manipulação do mesmo.<br>

O CSS tem funcionalidade com o HTML, quando o ficheiro de HTML contém os seguintes atributos: <b>class</b> e <b>id</b>.
<mark>Na sequencia dos conhecimentos adquiridos no HTML, o uso do CSS também pode ter várias abordagens de aplicação</mark>.

External CSS ( ficheiro )
Internal CSS ( dentro da tag style )
Inline CSS ( como conteúdo do atributo style )

Um dos elementos usados no documento anterior é o <b>style=""</b>, que é uma forma de atribuir cor ao elemento, por
exemplo. Este atributo também é uma <b>tag</b> do HTML.

```html
<style></style>
```

É dentro desta tag que se pode definir as várias propriedades que os elementos de HTML irão ter.
Para simplificação da leitura do código e manutenção do mesmo, aconselha-se o uso de um ficheiro externo.
Para esse efeito, existe no HTML a tag <b>link</b> que serve para esse fim e que também tem vários atributos.

```html
<link rel="stylesheet" href="index.css" type="text/css" />
```

Assim, pode-se integrar um ficheiro CSS para que o HTML seja capaz de o interpretar e atribuir
as propriedades pelos elementos marcados correctamente. Fica assim um exemplo das três formas
de como o CSS pode interagir com o HTML:

```html
<span class="vermelho"> Cor vermelha </span>
<span id="todo"> ir às compras </span>
<nav></nav>
```

No CSS o atributo <b>class</b> é representado por um <b>.</b> e o atributo <b>id</b> por um <b>#</b>
O CSS reconhece as tags do HTML que estão a ser usadas e por isso, pode-se referir os elementos directamente.<br>
<b>Atenção</b>: No fim da declaração de cada propriedade é obrigatório usar o <b>;</b> e todas as propriedades devem
estar entre <b>{</b> e <b>}</b>

```css
/* Isto é um comentário numa só linha */
nav {
  width="100%";
  background-color: cyan;
}
/* Isto
é
outro comentário
que ocupa
várias linhas */

.vermelho {
  color:red;
}

#todo{
  background-color: green;
  color: white;
}
```

O CSS permite atribuir cor aos elementos, sendo que existem nomes para alguns das cores mais usadas,
o CSS também permite o uso de código Hexadecimal, RGB e HSL para haver maior precisão na definição.

```css
nav {
	color: #223344;
	background-color: hsl(9, 100%, 65%);
	border: 2px solid rgba(255, 90, 70, 3);
}
```
