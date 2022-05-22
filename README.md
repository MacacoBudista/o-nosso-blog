# o-nosso-blog

## Este será o nosso blog.

> Fiquei com vontade de traduzir o que já tenho em Inglês para Português.

- Forma de partilhar conhecimentos relacionados com o Linux e as ferramentas para usar o github

## Introdução

Eu gosto de organizar da seguinte maneira:

```sh
cd ~
mkdir -p hubs/pessoal{MacacoBudista,rakzhodekams,odicforcesounds, etc... }
cd hubs/pessoal/MacacoBudista/
git clone https://github.com/MacacoBudista/o-nosso-blog
cd o-nosso-blog
```

Por defeito, todos os repositórios podem ter várias estruturas de ficheiros e pastas para organizar conteúdos.

Dentro da pasta do repositório criar:

```sh
mkdir src # a pasta "src" serve normalmente para o desenvolvimento de sites e\ou software.
mkdir docs # a pasta "docs" serve para a parte documental dos projectos
# por norma o github usa ficheiros com a extensão ".md" (markdown) para poder apresentar os mesmos em formato HTML.
```

Assim sendo, toda a parte documental do blog que um dia poderá estar em formato de site, ficará dentro da pasta docs

Este ficheiro, não tens mais conteúdo? **Atenção: fiz alguns err0s ortogarficus para poderes corrigir** .

### Sugestões:

### Projectos:

### Ideias:

### Documentação:

Neste espaço, pode-se adicionar **links** para cada um dos vários ficheiros que irão servir como Documentação de ajuda.

[git](./docs/git.md) - Como exemplo, fica uma cópia literal do outro repositório chamado "Repo-de-Ajuda"

Existe também um software muito útil para veres o histórico de cada repositório chamado "tig"

```sh
sudo apt install tig -y
```

Com este programa instalador, ao ser executado no terminal dentro de um repositório, ele apresenta os vários commits e o
autor dos mesmos! :)
