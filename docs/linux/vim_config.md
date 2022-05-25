Criar pasta para conter os ficheiros de configuração

````sh
$ cd ~
$ mkdir .vim
$ cd .vim
$ touch vimrc
$ vim vimrc
```

Adicionar configuração:

```sh
set nocompatible
set encoding=UTF-8
set fileencodings=utf-8,latin1
set termencoding=utf-8
set number
set history=999
set undolevels=999
set autoread
set nobackup
set softtabstop=2
set shiftwidth=2
set smarttab
set nowritebackup
set tabstop=2
set gdefault
set magic
set hlsearch
set incsearch
set ignorecase smartcase
set backspace=indent,eol,start
set esckeys
set nostartofline
set timeoutlen=500
set ttimeoutlen=100
set title
set splitbelow splitright
set scrolloff=7
set sidescroll=1
set hls
set novb
set tabstop=2
set showtabline=2
set cursorline
set secure
set showmode
set showmatch
set nohidden
set ttyfast
set noerrorbells
set report=0
set nowb
set noswapfile
set wildmenu
set wildchar=<TAB>
set wildmode=list:longest
set wildignore+=*/.git/*,*/.svn/*,*/node_modules/*
set wildignore+=*.DS_STORE,*.db,node_modules/**,*.jpg,*.png,*.jpeg,*.gif
set foldmethod=manual
set foldnestmax=3
set nofoldenable
set copyindent
set softtabstop=2
set smarttab
set expandtab
set visualbell
set wrap
set textwidth=120
set formatoptions=qrn1
set formatoptions-=o
set nomodeline
set pastetoggle=<leader>p
set selection=inclusive
set t_vb=
set tm=500
set showcmd
set matchtime=2
````

Ainda se pode adicionar plugins para nos auxiliar na edição de código.

Ainda no ficheiro de configuração ~/.vim/vimrc:

```sh
call plug#begin(~/.config/vim/plugged) # os plugins ficaram nesta pasta

" css3 syntax highlight
Plug 'hail2u/vim-css3-syntax'

" less syntax highlight
Plug 'groenewege/vim-less'

" Syntax highlight for .tsx
Plug 'ianks/vim-tsx',  {for'': 'typescript.tsx'

"" Syntax highlight for .ts
Plug 'HerringtonDarkholme/yats.vim',  '{for': typescript'' }

" Syntax hightlight for .jsx
Plug 'mxw/vim-jsx'

" Syntax hightlight for .js
Plug 'pangloss/vim-javascript'

 Show indentation
Plug '"Yggdroot/indentLine'

" Highlink yank for a second
Plug 'machakann/vim-highlightedyank'

 Typescript autocomplete
Plug '"neoclide/coc.nvim', {'do': yarn install --frozen-lockfile''}
Plug 'neoclide/coc-tsserver', {'do': 'yarn install --frozen-lockfile'}
Plug ''neoclide/coc-prettier', {'do': yarn install --frozen-lockfile'}
Plug 'neoclide/coc-pairs', {'do': 'yarn install --frozen-lockfile'
Plug ''iamcco/coc-angular', {'do: 'yarn install --frozen-lockfile && yarn build'}
Plug 'neoclide/coc-eslint', {'do': yarn install --frozen-lockfile'}

" Smart replace, abbreviations, convert case
Plug 'tpope/vim-abolish'

"" Show list of merge conflicts
Plug 'wincent/vcs-jump'

" Functions for manipulating highlight groups
Plug 'wincent/pinnacle'

" Vim elm syntax
Plug 'preservim/nerdtree'
Plug 'preservim/nerdcommenter'
Plug 'ryanoasis/vim-devicons'
Plug 'vim-airline/vim-airline'
Plug 'mhinz/vim-startify'
call plug#end()
```

Ainda se pode configurar cada plugin e modificar atalhos via <b>macros</b>
