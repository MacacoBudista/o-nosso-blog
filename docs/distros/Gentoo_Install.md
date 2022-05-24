# Instalação do Gentoo Linux

O Gentoo Linux é uma distribuição baseada no código fonte e por isso,
o processo de instalação é demorado, pois é necessário compilar todos os programas que queremos instalar.

O processo é ligeiramente mais rápido do que a instalação do LFS.

O Gentoo apresenta várias alternativas, sendo que as versões estáveis são as recomendadas, para plataformas x86 e amd64.
Uma das qualidades apreciadas pelos utilizadores de Linux para com o Gentoo,
deve-se ao facto de poderem personalizar a instalação num detalhe mais profundo, do que todas as outras distribuições
que são pré-compiladas pela comunidade que desenvolve a distribuição, tal como o Debian Linux.

Com o Gentoo, teremos de compilar o Kernel, editar o ficheiro fstab, entre outros, instalar o grub e configura-lo, para sermos capazes de fazer o
primeiro boot correctamente. Caso o processo de boot falhe, temos de começar o processo de instalação, saltando a
maioria dos casos, pois considera-se que o grub e o kernel ( software essencial para fazer boot ) já estão instalados.

Sendo que este processo de instalação consome imenso tempo, como também imensos recursos de hardware,
a maioria dos utilizadores tenta instalar o mínimo possível para poupar tempo sempre que fazem actualizações.

As actualizações distribuidas pela comunidade de desenvolvimento do Gentoo Linux, têm uma frequência de 1 semana.
Caso o utilizador do Gentoo não tenha uma máquina rápida, irá passar possivelmente horas ou dias para fazer uma
actualização.

O Lado mais interessante neste processo de instalação, está na leitura da documentação oficial,
e na experiencia que o Gentoo oferece, sendo que na comparação da instalação do Linux From Scratch,
o processo de instalação é mais rápido, pois o Gentoo tem uma ferramenta que irá fazer o trabalho mais árduo,
que é o download de cada software, a verificação de integridade e a compilação e instalação do mesmo,
chamado <b>portage</b>. Além do portage, o Gentoo oferece outros mecanismos para que a compilação do software
use os recursos especificos do computador que estamos a usar para a instalação do Gentoo, tais como o
<b>portage-utils</b> e o <b>gentoolkit</b>, como também o ficheiro <b>/etc/portage/make.conf</b>.

Antes de iniciar o processo de instalação, é bom falar destas ferramentas tão peculiares do Gentoo Linux de
forma a ser mais fácil entender o processo e as vantagens da instalação.

É <b>muito relevante</b> conhecer o hardware que iremos usar, para editar o ficheiro <b>make.conf</b> o melhor possível,
mas caso não se saiba o conteúdo físico da máquina que iremos usar, temos também software que nos facilita no
reconhecimento dos componentes de hardware da máquina.

Também é relevante usar um disco inteiro para a instalação.

Como se pode imaginar, o Gentoo Linux é para utilizadores experientes, pois o processo de instalação, requer algum
conhecimento prévio de como o Linux está estruturado e que tipo de software o utlizadores irá instalar.
Todas estas informações são relevantes antes de começar a instalação.

- Será um servidor ou um desktop?
- É um servidor Web, proxy, email ?
- Usará KDE, Gnome, XFCE, outro..
- Usará librarias tais como GTK ou QT5 ?
- Terá tudo sem limites?
- Usaremos a versão estável ( amd64 ) ou a instável ( ~amd64 )?

No processo de uma instalação, há também preocupações relativas à segurança, que são configuradas no Kernel

- Qualquer tipo de hardware será reconhecido pela máquina?
- A máquina tem uma lista muito especifica de hardware que irá reconhecer?
- Que tipo de software irei usar nesta máquina?

A pré-definição destas perguntas é importante para não ser necessário passar o tempo a recompilar o kernel,
sempre que queremos adicionar um software especifico que necessita que parametros especiais no kernel, tal como o
"docker", "iptables", "selinux", etc..

Assim, com tudo isto em mente, inicia-se a instalação do Gentoo, usando a imagem iso que eles oferecem,
ou até usando uma qualquer distribuição que permita o uso da mesma em modo LiveCD.

Antes de iniciar é importante pensar na estrutura da disco e que tipo de partiçóes a BIOS do computador reconhece.
