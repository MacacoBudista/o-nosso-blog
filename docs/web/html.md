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
	<h1 tooltip="Coisa coiso coisada coisado">Titulo do artigo</h1>
	<p title="Descrição">Descrição do artigo</p>
</body>
```
