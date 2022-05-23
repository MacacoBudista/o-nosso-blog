# HTML

## Hyper Text Markup Language

O HTML é estruturado com <b>tags</b>, que são letras ou palavras que estão entre '<' e '>'.

Vejamos em mais detalhe as tags mais comuns nos documentos de HTML.

```html
<!--Atenção isto é um comentário -->
<!DOCTYPE html>
```

A tag <b>!DOCTYPE</b> descreve qual o tipo de documento que o servidor e\ou o browser irá receber.
Todos os ficheiros de HTML começam com esta tag. Em vez de <b>html</b> poderia ser <b>xml</b>.

Em seguida a tag que irá definir o inicio e o fim do conteúdo da página.

```html
<!-- Atenção: o parametro "lang='pt'" é considerado um atributo -->
<html lang="pt">
	<!-- todas as outras tags estarão entre esta -->
</html>
```

Em seguida aparece o "cabeçalho", que tem várias informações relativas à página.
À tag do cabeçalho dá-se o nome de <b>head</b>.
Entre a tag <b> head</b> define-se o titulo da página, metadata que descreve o seu conteúdo e links relacionados com o estilo ( CSS )

```html
<head>
	<title>Titulo da página</title>
	<!-- a metadata serve para ajudar os motores de busca a recomendar conteúdos -->
	<meta name="description" content="Descrição do conteúdo da página!" />
</head>
```

A partir daqui, todos as tags que estão dentro da tag <b>body</b> representam todo o conteúdo visivel da página.
Menus, botões, campos de texto, artigos, etc..

```html
<body>
	<p title="Descrição">Descrição do artigo</p>
</body>
```

Assim, para ficarmos com uma ideia global, faz-se uma descrição completa das tags remendadas que todas as páginas web devem ter.

```html
<!DOCTYPE html>
<html lang="PT">
	<head>
		<title>O Titulo da página</title>
		<!-- CHARSET: permite associar 'Simbolos' usando sequencias de caractéres &reg -->
		<meta charset="UTF-8" />
		<meta name="descrição" content="descrição da página" />
		<meta name="keywords" content="ajuda, html, tags, aprender" />
	</head>
	<body>
		Conteudo não formatado &#128512
	</body>
</html>
```

Em seguida aprende-se sobre o "heading", que são tags usadas para criar titulos e\ou frases destacadas.

```html
<h1>Texto Enorme</h1>
<h2>Texto Grande</h2>
<h3>Texto Normal</h3>
<h4>Texto Pequeno</h4>
<h5>Texto mt Pequeno</h5>
<h6>Texto Super pequeno</h6>
<!-- Nota: Todas estas tags servem para dar destaque a um artigo. 
Por isso é bom lembrar que o "pequeno" não é assim tão pequeno -->
```

Todos os artigos, normalmente são textos formatados. Normalmente a tab <b>p</b> serve para esse fim!

```html
<p>
	Isto é uma frase de um texto que poderia ser enorme mas fica assim curtinho!
</p>
```

Também existem tags para formatar pequenas partes dos textos.

```html
<b> BOLD </b>
<strong> STRONG </strong>
<i> ITALICO </i>
<mark> MARCA </mark>
<small> TEXTO PEQUENO </small>
<del> riscar texto para dar a sensação de ter sido removido </del>
<sub> texto abaixo da linha</sub>
<sup> texto acima da linha </sup>
```

Na descrição de documentos é habitual citar algum autor. Para este tipo de conteúdos existem algumas tags semelhantes.

```html
<blockquote>Quote</blockquote>
<q> Quota </q>
<abbr> Abreviação </abbr>
<address>usado para o email ou para uma morada</address>
<cite> para citar ou marcar parte de um texto </cite>
<bdo> este texto ficaria apresentado de trás para a frente ( invertido ) </bdo>
```

Quando queremos direccionar o leitor para outra página ou outro site, usa-se links. <b>a</b>

```html
<!-- A tag 'a', usada para links, tem pelo menos o atributo 'href'.
Este serve para 'apontar' a fonte do link' -->
<a href="#"> link </a>
```

Para o uso de imagens usa-se a tag <b>img</b>.

```html
<!-- Atençáo: no caso de imagens o atributo que aponta para a imagem é o 'src' - source -->
<img src="imagem.png" />
<!-- Como se pode verificar a tag 'img' não tem uma tag no fim, tal como a maioria das restantes tags! -->
```

Uma das formas mais "consensuais" para organizar dados é através de tabelas.

As tabelas são colunas com com pequenos campos chamados de 'quartos'.
Por normal define-se os 'quartos' que ficarão em cima para conteúdos de titulo.
A tag <b>th</b> traduz-se como "tableHeader" - O cabeçalho da Tabela.
Vejamos um exemplo:

```html
<table>
	<tr>
		<!-- primeira lista de 'rows' -->
		<th>Autor</th>
		<th>Pintor</th>
		<th>Escultor</th>
		<th>Músico</th>
	</tr>
	<tr>
		<!-- agora define-se os campos que serão preenchidos -->
		<td>Picasso</td>
		<td>Sim</td>
		<td>Não</td>
		<td>Não</td>
	</tr>
</table>
```

Outro tipo de listas podem ser considerados, também usados para os campos de menu das páginas web.

```html
<!-- lista ordenada alfabeticamente -->
<ol>
	<li>1</li>
	<li>2</li>
</ol>
<!-- lista não ordenada -->
<ul>
	<li>1</li>
	<li>2</li>
</ul>
```
