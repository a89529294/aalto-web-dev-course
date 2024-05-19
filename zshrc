# setup spelling auto correct
setopt correct

alias stat="stat -x"
alias lr='ls -hartl'

# prepend /Users/albert/bin to PATH
export PATH="$HOME/go/bin:$HOME/bin:$PATH" # add ~/go/bin & ~/bin to $PATH

# Avoid accidental deletion.
alias rm='rm -i'
alias mv='mv -i'
alias cp='cp -i'
# Prevent rm -f from asking for confirmation on things like `rm -f *.bak`.
setopt rm_star_silent

# get ip
alias getip4='curl -4 https://icanhazip.com/; echo'
alias getip6='curl -6 https://icanhazip.com/; echo'

# Prompt configuration
source ~/.git-prompt.sh
setopt PROMPT_SUBST
PS1='[%1~$(__git_ps1 " (%s)")]\$ '



export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

[ -f "/Users/albert/.ghcup/env" ] && source "/Users/albert/.ghcup/env" # ghcup-env

# pyenv
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

alias py=python

# iterm
test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"

# Generated for envman. Do not edit.
[ -s "$HOME/.config/envman/load.sh" ] && source "$HOME/.config/envman/load.sh"
export PATH="/usr/local/opt/postgresql@16/bin:$PATH"

# deno
export DENO_INSTALL="/Users/albert/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
