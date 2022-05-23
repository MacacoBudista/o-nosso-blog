Using tmux

editar o ficheiro ~/.tmux.conf e adicionar o seguinte conteúdo para personalizar o tmux:

```sh
unbind C-b # Por defeito a sequencia usada é Ctrl+b o que iremos mudar para ctrl+a
set-option -g prefix C-a # Definição das teclas de controlo
bind-key C-a send-prefix
setw -g window-status-format "#[fg=white]#[bg=black] *#I #[bg=black]#[fg=lightgreen] [#W] "
setw -g window-status-current-format "#[bg=black]#[fg=yellow] *#I #[bg=black]#[fg=brightcyan] [#W] "
set -g status-left ""
set -g status-right " #[fg=yellow]#{net_speed} | #[fg=green] %H:%M %d-%b-%Y"
set -g default-terminal "screen-256color"
set-option -g status-position top
setw -g mode-keys vi
set -g history-limit 100000
setw -g clock-mode-colour cyan
setw -g automatic-rename on
set -g set-titles on
set-option -g set-titles-string '#H:#S.#I.#P #W #T'
setw  -g mode-keys vi
set-option -g default-shell /bin/bash
set -g base-index 1
set -g pane-base-index 1
set -g visual-activity off
set -g visual-bell off
set -g visual-silence off
set -g bell-action none
setw -g monitor-activity off
set -g status-bg black
set -g status-right-length 150
set -g status-interval 60
setw -g status on
set -g status-justify left

# Plugins
set -g @plugin 'tmux-plugins/tmux-net-speed'
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin 'tmux-plugins/tmux-cpu'

# Plugins Config
set -g @net_speed_interfaces "wlp2s0"
set -g @net_speed_format "D:%1s U:%1s"

# Load Plugins
run-shell ~/.tmux/plugins/tmux-net-speed/net_speed.tmux
run-shell ~/.tmux/plugins/tmux-cpu/cpu.tmux
run-shell ~/.tmux/plugins/tpm/tpm

# Refresh
bind r source-file ~/.tmux.conf
```
