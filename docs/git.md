# Dicas para usar o github

```sh
sudo apt install git -y
```

- Opcionalmente configura o **git** via o terminal:

- Fonte: https://www.git-scm.com/book/en/v2/Customizing-Git-Git-Configuration

```sh
# Exemplo simples
git config --global user.name "Sarita"
git config --global user.email "sarita@gunita.om"
```

- Ou usando um editor de texto: Abrir o ficheiro de configuração

```sh
cd
touch .gitconfig
nano .gitconfig

# Ctrl+o ( para salvar )
# Ctrl+x ( para sair )
```

Usando o editor vi / vim

```sh
vim ~/.gitconfig
i ( para inserir )
Esc ( para sair do modo de escrita ( i ))
:w ( para salvar )
:q ( para sair )
# Opcionalmente
:wq! ( para salvar e sair )
```

O ficheiro de configuração tem os seguintes campos recomendados

```sh
[commit]
	gpgsign = false
[user]
	name = Sarita ( podes usar o nome que quiseres ) LadyMath :p
	email = sarita@bonita.om ( podes usar o email que quiseres ) LadyMath@math.com
[credential]
  username = ghp_O_TEU_TOKEN
  password = ghp_O_TEU_TOKEN
```

Opcionalmente caso a segurança seja uma preocupação, existe uma forma de garantir que o token n esteja exposto no
ficheiro de configuração mas associado a uma ficheiro encriptado que só pode ser criado com o programa GNUPG / gpg /
gpg2

Também em Ingles, tens uma ajuda simples ( sem muito 'bla bla bla' no meu blog): https://rakzhodekams.github.io/devblog/linux/gpg.html
