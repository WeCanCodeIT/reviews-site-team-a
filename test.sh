#!/bin/bash
export CLICOLOR=“YES”
export LSCOLORS=“ExGxFxdxCxDxDxhbadEhEd”
parse_git_branch() {
  git branch 2> /dev/null | sed -e ‘/^[^]/d’ -e ‘s/ \(.*\)/ (\1)/’
}
export PS1=“\[\e[0;32m\]\u@\h \[\e[0;34m\]\W\[\e[33m\]\$(parse_git_branch) \@\n\$ \[\e[00m\]”
#PS1=‘[\u@\h \W$(__git_ps1 ” (%s)“)]\$ ’
if [ -f ~/.bash_PS1 ]; then
. ~/.bash_PS1
fi
