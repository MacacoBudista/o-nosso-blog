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

Como se pode verificar, com o CSS podemos alterar o tipo de fonte, o tamanho da fonte, a posição dos elementos,
a decoração dos mesmos, os limites e as animações e\ou efeitos que podemos definir a cada elemento de HTML.

Para facilitar a leitura e o estudo, deixo uma tabela que tenta simplificar alguns dos vários atributos que podem ser definidos
pelo CSS à maioria dos elementos, sendo estas propriedades, as mais usadas.

```markdown
| Atributo do HTML | Propriedade do CSS | Descrição da propriedade do CSS  | Exemplo        |
| ---------------- | ------------------ | -------------------------------- | -------------- |
| .class/#id       | color:             | Cor da fonte que o elemento tem  | green;         |
| .class/#id       | background-color:  | Cor de fundo do elemento         | blue;          |
| .class/#id       | border:            | linha envonvente do elemento     | 1px solid red; |
| .class/#id       | margin:            | margem entre elementos           | 2rem;          |
| .class/#id       | padding:           | espaçamento entre elementos      | 5px;           |
| .class/#id       | height:            | espaço ocupado verticalmente     | 300px;         |
| .class/#id       | width:             | espaço ocupado horizontalmente   | 300px;         |
| .class/#id       | outline:           | espaço acima da linha envolvente | 10px;          |
| .class/#id       | display:           | estilo visual do elemento        | block;         |
| .class/#id       | float:             | coloca elemento num dos lados    | left;          |
| .class/#id       | max-width:         | largura máxima                   | 1500px;        |
| .class/#id       | min-width:         | largura minima                   | 680px;         |
| .class/#id       | max-height:        | altura máxima                    | 1024px;        |
| .class/#id       | min-height:        | altura minima                    | 800px;         |
| .class/#id       | align:             | alinhar conteúdo                 | center;        |
```
