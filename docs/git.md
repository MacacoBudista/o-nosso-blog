# Dicas para usar o github

```sh
sudo apt install git -y
```

- Opcionalmente configura o **git** via o terminal:

- Fonte: https://www.git-scm.com/book/en/v2/Customizing-Git-Git-Configuration

```sh
# Exemplo simples
git config --global user.name "Sarita"
git config --global user.email "ex@ex.ex"
```

- Ou usando um editor de texto

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
Esc ( para sair do-modo de escrita )
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
	name = ( podes usar o nome que quiseres ) LadyMath :p
	email = ( podes usar o email que quiseres ) LadyMath@math.com
[credential]
  username = ghp_O_TEU_TOKEN
  password = ghp_O_TEU_TOKEN
```

Por norma os comandos mais usados no git são:

```sh
git status # Ver quais os ficheiros que foram modificados e que estão à espera de actualização
git add ficheiro.txt # adicionar ficheiro à lista de commit
git commit -m "Commit da mensagem com texto que descreve o commit"
```

Se gostas de fazer alterações a fundo, podes sempre criar um novo <b>branch</b> de forma a não alterares o original.

```sh
git branch NovoNome
git switch NovoNome
```
