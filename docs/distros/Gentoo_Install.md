# Instalação do Gentoo Linux

Este tutorial assume que está familiarizad@ com o uso do Linux e assuntos relacionados com a arquitectura do computador.

## Introdução:

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
actualização, em caso de programas pesados, tais como o gcc, firefox, rust, etc...

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

- Usaremos a versão estável ( amd64 ) ou a instável ( ~amd64 ) ?
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

### Preparação da Instalação

Na consideração que iremos usar uma distribuição em modo LiveCD que já tem interface gráfica e que usa um kernel com
firmware actualizado, podemos arriscar arrancar de forma a reconhecer todos os periférios / componentes do nosso computador,
vou considerar usarmos um Xubuntu por exemplo que normalmente tem a capacidade de reconhecer todos os compotentes de
hardware dos novos e\ou mais recentes computadores / portateis. Vamos então criar uma pen que seja capaz de fazer o boot
do nosso iso.

```sh
# Forma simples de criar uma pen com o iso que desejamos usar para instalar o Gentoo
# Se os comandos forem algo de estranho,
# por favor leia mais sobre o assunto antes de copiar o código sem pensar o que está a fazer !
sudo fdisk /dev/sdb # disco do USB
sudo mkfs.vfat -F32 /dev/sdb1 # Formatar em FAT32
sudo dd if=xubuntu.iso of=/dev/sdb bs=2M status=progress; sudo sync # copia do ISO para o USB
```

A comunidade do Gentoo já oferece algumas opções dos ficheiros de instalação, personalizados com as possíveis escolhas.
Estas opções são associadas aos perfis que podem ser aplicados no Gentoo. Este assunto será abordado no passo de
Instalação. Configure a BIOS para iniciar o boot a partir do disco do USB e iniciamos o nosso "LiveCD".

A maioria dos ISOs que o Gentoo Linux oferece não têm interface gráfica e aquele que tem é enorme e nem sempre tem as
drivers que são necessárias no kernel para reconhecer hardware recente. Imagine-se que a placa de rede não é reconhecida
e como tal, é impossível continuar a instalação.

Vamos considerar que o ISO usado da última versão do Xubuntu, reconhece todos os periférios do nosso computador e
estamos prontos para iniciar a instação do Gentoo. Vamos considerar também que temos um disco de 500GB para usar.

Ao fazer login, usamos o NetworkManager para nos ligarmos à internet, abrimos um terminal e digitamos:

```sh
$ ping -c3 google.pt # confirmar que temos coneção
$ sudo su -l # Escalar para o Super Utilizador root
```

Agora que temos permissões de root podemos começar a instalação. <br>
A primeira consideração a fazer é o esquema do disco.
<br> Quais as partições a definir, qual o tipo de ficheiro e que permissões tem.

Na consideração que não temos um problema obcessivo com a segurança, podemos saltar um grande número de passos,
que consideram encriptar o disco de forma a ser quase impossível ter acesso aos dados do disco, sem a chave de
desincriptação. Vamos imaginar que a segurança é uma preocupação, mas não estamos focados nessa problemática.
Mesmo assim iremos definir e falar de vários aspectos da segurança do Gentoo nesta nossa instalação.

Este documento irá focar a instalaçáo de uma máquina que irá servir de servidor sem interface gráfica.

Falemos então sobre a estrutura de partições do disco que iremos usar.<br>
Este esquema será útil quando editarmos o ficheiro /etc/fstab <br>
<b>Nota</b>: Se o disco usado não é novo e teme que possa haver vestígios de virus, worms e trojans, recomenda-se a
formatação do disco, antes de definir o esquema de partições ( GPT / msdos )<br>

```sh
# Paranoid moment: Este processo pode demorar várias horas, dependendo do tamanho do disco
dd if=/dev/urandom of=/dev/sda
dd if=/dev/zero of=/dev/sda
```

| Disco    | Partição  | Tamanho | Ponto de montagem | Sistema de Ficheiros | opções      | Objectivo                         |
| -------- | --------- | ------- | ----------------- | -------------------- | ----------- | --------------------------------- |
| /dev/sda | /dev/sda1 | 2MB     | none              | none                 | none        | grub install                      |
| /dev/sda | /dev/sda2 | 200MB   | /boot             | vfat                 | ro          | ficheiros de boot                 |
| /dev/sda | /dev/sda3 | 2GB     | none              | swap                 | defaults    | partição de memória fisica (swap) |
| /dev/sda | /dev/sda4 | 50GB    | /                 | ext4                 | ro,defaults | partição root                     |
| /dev/sda | /dev/sda5 | 50GB    | /var              | ext4                 | defaults    | partição var                      |
| /dev/sda | /dev/sda6 | 50GB    | /var/log          | ext4                 | defaults    | partição de logs                  |
| /dev/sda | /dev/sda7 | 50GB    | /usr              | ext4                 | ro,defaults | partição usr                      |
| /dev/sda | /dev/sda8 | 10GB    | /tmp              | ext4                 | ro,defaults | partição usr                      |
| /dev/sda | /dev/sda9 | 100%    | /home             | ext4                 | ro,defaults | partição home                     |

Mais tarde iremos explorar melhor as "opções" referidas no esquema para melhorar a segurança e para melhor a performance.

Com este esquema em mente, usamos o <b>fdisk</b> ou o <b>cfdisk</b> para definir as nossas partições.
Gravamos as alterações e saimos.

Esta na altura de formatar as partições definidas.

```sh
mkfs.vfat -F32 /dev/sda2
mkfs.ext4 /dev/sda4
mkfs.ext4 /dev/sda5
mkfs.ext4 /dev/sda6
mkfs.ext4 /dev/sda7
mkfs.ext4 /dev/sda8
mkfs.ext4 /dev/sda9
mkswap /dev/sda3
swapon /dev/sda3
```

Agora temos de fazer mount das partições de forma a termos o disco preparado para a instalação do Gentoo.

```sh
mkdir /mnt/gentoo
mount -t ext4 /dev/sda4 /mnt/gentoo
mkdir -p /mnt/gentoo/{var/log,usr,tmp,home,boot}
mount -t ext4 /dev/sda5 /mnt/gentoo/var
mount -t ext4 /dev/sda6 /mnt/gentoo/var/log
mount -t ext4 /dev/sda7 /mnt/gentoo/usr
mount -t ext4 /dev/sda8 /mnt/gentoo/tmp
mount -t ext4 /dev/sda9 /mnt/gentoo/home
```

Só iremos fazer mount da partição boot quando estivermos em chroot. <br>
Agora vamos para a posição do disco /mnt/gentoo, e fazer download dos ficheiros de instalação.<br>
Neste caso imagine-se que estamos a usar uma máquina que suporta 64bits. <br>
Considere-se também que o sistema de gestão de serviços é o OpenRC e não o Systemd. <br>
Sendo que a segurança é uma preocupação e será para um servidor, aconselha-se a versão do Stage3: Hardener-No-Multilib-OpenRC

```sh
cd /mnt/gentoo
firefox https://ftp.jaist.ac.jp/pub/Linux/Gentoo//releases/amd64/autobuilds/current-stage3-amd64-openrc/
```

A transferência dos ficheiros associados é recomendado pois é bom seguir as boas práticas de segurança.
É importante verificar as hashes dos ficheiros, para termos a certeza que não foram modificados antes de descompactar os
ficheiros de instalação.

```sh
openssl dgst -r -sha512 stage3-amd64-release><-init<.tar.?>bz2|xz)
sha512sum stage3-amd64-release><-init<.tar.?()bz2|xz)>
openssl dgst -r -whirlpool stage3-amd64-release><-init<.tar.?>bz2|xz)
gpg --verify stage3-amd64-release><-init><.tar.?bz2|xz)(.DIGESTS.asc)
```

Considerando que a sequència é igual descompacta-se o ficheiro.

```sh
pwd
/mnt/gentoo
tar xfp stage3-amd64-*.tar.xz --xattrs-include='*.*' --numeric-owner
```

Em seguida é importante editar alguns ficheiros, tais como:

```sh
/etc/conf.d/keymaps # configura a língua do teclado ( pt-latin9 )
/etc/conf.d/hostname # nome da máquina ( server )
/etc/conf.d/net # configura rede
/etc/hosts # configura máquinas conhecidas e filtra conteúdos
/etc/issue.net # mensagem de boas vindas via ssh
/etc/issue # mensagem de boas vindas
/etc/fstab # descrição do esquema de partições
/etc/locale-gen # configura língua do sistema
# por fim
/etc/portage/make.conf # Configurações do gentoo
```

A documentação sugere a leitura dos seguintes links para a definição do ficheiro make.conf

1. https://wiki.gentoo.org/wiki/GCC_optimization
2. https://wiki.gentoo.org/wiki/MAKEOPTS
3. https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html

Definir Servidor DNS

```sh
cp /etc/resolv.conf /mnt/gentoo/etc/resolv.conf -L
```

Fazer o mount de pseudo-partições ( necessárias )

```sh
mount --types proc /proc /mnt/gentoo/proc
mount --rbind /sys /mnt/gentoo/sys
mount --rbind /dev /mnt/gentoo/dev
```

Vamos começar finalmente a instalação.

```sh
chroot /mnt/gentoo /bin/bash
env-update && source /etc/profile
passwd # define pass para o utlizador root
mount /dev/sda2 /boot # já podemos fazer mount da partição /boot
emerge-websync # actualiza o "portage"
emerge -uNDav @world # Actualiza o sistema
emerge -av gentoo-sources linux-firmware dhcp grub
cd /usr/src/linux
make menuconfig # configura kernel
make && make modules && make modules_install && make install
grub-install /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
exit
exit
reboot
```

# FIM
