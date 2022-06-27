Criar pasta para conter os ficheiros de configuração

Ler o [Livro](http://ftp.vim.org/ftp/editors/vim/doc/book/vimbook-OPL.pdf) gratuitamente! 

````sh
$ cd ~
$ mkdir .vim
$ cd .vim
$ touch vimrc
$ vim vimrc
```

Adicionar configuração:

```sh
filetype plugin indent on
syntax on
scriptencoding=utf-8
setglobal fileencoding=utf-8
set shortmess+=Ia
set ttimeout
set ttimeoutlen=0
set helpheight=30
set undolevels=3000
set history=10000
set cmdheight=1
set t_Co=256
set path+=**
set nomore
set nowrap
set wrapmargin=0
set equalalways
set sidescrolloff=999
set scrolloff=999
set encoding=utf8
set nocompatible
set novisualbell
set noerrorbells
set ignorecase
set smartcase
set foldenable
set foldcolumn=0
set foldmethod=marker
set foldmethod=indent
set foldlevel=0
set foldlevelstart=99
set expandtab
set softtabstop=2
set showtabline=2
set shiftwidth=2
set backspace =indent,eol,start
set display =lastline
set showmode
set showcmd
set incsearch
set hlsearch
set ttyfast
set lazyredraw
set splitbelow
set splitright
set cursorline
set wrapscan
set report=0
set synmaxcol=200
set list
set number
set hidden
set autoindent
set nobackup
set noswapfile
set history=100
set ruler
set matchtime=2
set tm=500
set nowrap
set nowb
set wildchar=<TAB>
set listchars=tab:»→,trail:␣
set secure
set novb
set scrolloff=5
set termwinsize=10x200
set wildignore=*.docx,*.jpg,*.png,*.gif,*.pdf,*.pyc,*.exe,*.flv,*.img,*.xlsx
au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
au FileType text setlocal tw=120
au BufLeave ~/.vim/vimrc :source ~/.vim/vimrc
" prevent auto-comments 
autocmd FileType * setlocal formatoptions-=c formatoptions-=r formatoptions-=o
" File Explorer
let g:netrw_winsize=20
let g:netrw_preview=1
nnoremap <C-e> :Vexplore<CR> " Open Vertical Window to Explore File Tree ( No NERDTree needed )
nnoremap <C-c> :close<CR>
" Tabs Control 
nnoremap <C-t> :tabnew<CR> " Open New Tab File 
nnoremap <C-n> :tabnext<CR> " Go to Next Tab File 
nnoremap <C-p> :tabprevious<CR> " Go to Previous Tab File 
" Buffers Control 
nnoremap <C-b> <C-n> :bn<CR> " Next Buffer in List 
nnoremap <C-b> <C-p> :bp<CR> " Previous Buffer in List 
" Save file
nnoremap <C-s> :w<CR> " Save file
" Odicforcesounds.com -> CORES 
hi Directory ctermfg=cyan
hi ErrorMsg cterm=bold ctermfg=red ctermbg=black
hi LineNr ctermfg=darkblue 
hi StatusLine cterm=bold ctermfg=yellow ctermbg=black
hi StatusLineNC cterm=bold ctermfg=red ctermbg=black
hi Underlined cterm=underline ctermfg=gray ctermbg=black
hi Error cterm=bold ctermfg=red ctermbg=black
hi Title ctermfg=white ctermbg=black
hi Comment ctermfg=darkcyan ctermbg=black
hi Visual cterm=reverse ctermfg=black ctermbg=darkblue
hi WarningMsg ctermfg=yellow ctermbg=black
hi Search ctermfg=cyan ctermbg=black
hi IncSearch ctermfg=white ctermbg=black
" com esta definição sem plugins, trabalha-se bem!
````

Ainda se pode adicionar plugins para nos auxiliar na edição de código.
Antes disso, é necessário acrescentar o ficheiro que permite incluir os plugins no vim

```sh
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

Para acrescentar um plugin, editar o ficheiro de configuração ~/.vim/vimrc e acrescentar.

Como poderemos ver, cada plugin refere a conta de github do criador / o nome do repositório do plugin

```sh
call plug#begin(~/.config/vim/plugged) # define o caminho de preferencia

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

" Typescript autocomplete (atenção - é necessário ter o NodeJS instalado)
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

