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
forma a ser mais fácil entender o processo e as vantagens da instalação. O Portage é um conjunto de aplicações
que auxiliam a instalação do Gentoo. Em primeira instancia temos o <b>emerge</b> que serve para instalar software,
e que pode ser comparado ao <b>apt</b> do Debian. Tal como o apt, o emerge tem várias opções que podem ser usadas.

Outras aplicações que vêm juntamente com o <b>gentoolkit</b>, que é outro conjunto de aplicações que servem o propósito de,
personalizar as qualidades que o software terá por definição, tal como o <b>equery, quse, euse</b>

É <b>muito relevante</b> conhecer o hardware que iremos usar, para editar o ficheiro <b>make.conf</b> o melhor possível,
mas caso não se saiba o conteúdo físico da máquina que iremos usar, temos também software que nos facilita no
reconhecimento dos componentes de hardware da máquina, tais como o <b>pciutils</b>.

Também é relevante usar um disco inteiro para a instalação, sendo que é igualmente importante pensar como é que iremos
particionar o disco, que tipo de partição iremos usar e quais as permissões que iremos dar a essas partições.
Aconselhamos uma leitura mais profunda dos vários tipos de partições e quais as suas caracteristicas, antes de iniciar a
instalação. Por norma quase todas as distribuições de Linux usam o <b>ext4</b>, sendo que existe o
xfs, jfs, reiserfs, ext3 ext2, zfs, etc. Todas têm vantagens e desvantagens!

Como se pode imaginar, o Gentoo Linux é para utilizadores experientes, pois o processo de instalação, requer algum
conhecimento prévio de como o Linux está estruturado e que tipo de software o utlizadores irá instalar.
Todas estas informações são relevantes antes de começar a instalação.

- Usaremos a versão estável ( amd64 ) ou a instável ( ~amd64 ?
- Será um servidor ou um desktop?
- É um servidor Web, proxy, email ?
- O desktop usará KDE, Gnome, XFCE, outro..
- Usará librarias tais como GTK ou QT5 ?
- Terá tudo sem limites?
- A segurança é importante?
  - se sim: usaremos SELinux ou AppArmor?
  - se sim: usaremos a versão "hardened" ?
  - se sim: usaremos IPSet?
  - se sim: usaremos IPTables?

No processo de uma instalação, há também preocupações relativas à segurança, que são configuradas no Kernel

- Qualquer tipo de hardware será reconhecido pela máquina?
- A máquina tem uma lista muito especifica de hardware que irá reconhecer?
- Que tipo de software irei usar nesta máquina?

A pré-definição destas perguntas é importante para não ser necessário passar o tempo a recompilar o kernel,
sempre que queremos adicionar um software especifico que necessita de parametros especiais no kernel, tal como o
"docker", "iptables", "selinux", etc..

Assim, com tudo isto em mente, inicia-se a instalação do Gentoo, usando a imagem iso que eles oferecem,
ou até usando uma qualquer distribuição que permita o uso da mesma em modo LiveCD.

Antes de iniciar é importante pensar na estrutura da disco e que tipo de partiçóes a BIOS do computador reconhece.
Se o computador usar BIOS antigas, o uso de partições EFI é desnecessária, mas com computadores recentes, é obrigatório,
de forma a ser possível fazer o boot da instalação do Gentoo.

Na consideração que iremos usar uma distribuição em modo LiveCD que já tem interface gráfica e que usa um kernel com
firmware actualizado, podemos arriscar arrancar de forma a reconhecer todos os periférios / componentes do nosso computador,
vou considerar usarmos um Xubuntu por exemplo.
