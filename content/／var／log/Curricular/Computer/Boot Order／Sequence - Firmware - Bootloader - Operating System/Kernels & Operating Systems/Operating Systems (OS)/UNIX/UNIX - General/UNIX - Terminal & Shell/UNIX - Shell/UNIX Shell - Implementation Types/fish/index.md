---
title: "fish"
created: 2019-03-15T15:26:17.269-05:00
modified: 2019-12-27T02:11:08.812-06:00
parent: "[[UNIX Shell - Implementation Types]]"
children: []
---
<strong>fish</strong> is a smart and user-friendly command line shell for macOS, Linux, and the rest of the family

[www.fishshell.com](http://www.fishshell.com/)
# Installation

> [!expand]- homebrew
> <strong>1. install fish via brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install fish</code></span>
>
> <strong>2. verify fish was installed</strong>
> <span style="white-space: pre-wrap"><code>  which fish</code></span>
# Configuration

There are 2 different config files for fish
- system wide config - /usr/local/Cellar/fish/2.4.0/etc/fish/config.fish
- user wide config - \~/.config/fish/fish.config

Things to Note
- fish does not automatically load the \~/.bash\_profile
- fish’s \~/.bash\_profile is at \~/.config/fish/fish.config
- go to /ComputerScience/…/fish\_config/bash\_to\_fish for script convertor

# Bash to Fish

> [!expand]- script converting bash to fish
> ```bash
> # STEPS to partially convert .bash_profile to .fish_profile_auto_generated
> # 1. use fish shell 
> # 2. source /path/to/this/file
>  
> #####################
> # Set profile paths #
> #####################
> set -l bash_profile ~/.bash_profile
> set -l bash_no_comments ~/.bash_profile_no_comments
> set -l fish_profile ~/.fish_profile_auto_generated
> set -l bash_to_fish /Users/marcus.chiu/ComputerScience/ProgramLanguages/Shell/Shell/fish/bash_to_fish/bash_to_fish
>  
> ####################
> # remove old files #
> ####################
> rm $bash_no_comments
> rm $fish_profile
>  
> #######################################
> # add intro comments to $fish_profile #
> #######################################
> echo "# auto-generated .fish_profile by $bash_to_fish" >> $fish_profile
> echo "# used $bash_profile as reference" >> $fish_profile
> echo '' >> $fish_profile
>  
> ######################################
> # remove comments from $bash_profile #
> ######################################
> sed 's:#.*$::g' $bash_profile >> $bash_no_comments
>  
> ################################
> # Conversion from Bash to Fish #
> ################################
>  
> # load all aliases
> cat $bash_no_comments | grep -oh 'alias.*=.*' | while read line
>    # convert all && to '; and'
>    set -l line (echo $line | sed 's/&&/; and /')
>  
>    # TODO remove '$' that are outside ""
>    set -l line (echo $line | tr -d '\$')
>  
>    printf "$line\n" >> $fish_profile
> end
>  
> printf "\n" >> $fish_profile
>  
> # convert all export PATH variables
> cat $bash_no_comments | grep 'export' | while read line
>    # grab name of variable
>    set -l name (echo $line | grep -oh '\S*='| sed s'/.$//')
>  
>    # grab value
>    set -l value (echo $line | sed -e 's/[^=]*=//')
>  
>    if [ "$name" = "PATH" ]
>       # remove $PATH in value and ':' and '"'
>       set -l value (echo $value | sed 's/$PATH//' | tr -d ':"')
>       echo 'set -gx PATH $PATH' $value >> $fish_profile
>    end
> end
>  
> ##########
> # UNUSED #
> ##########
>  
> # convert all aliases
> # cat $bash_no_comments | grep -oh 'alias .*=[\'|"].*[\'|"]' | while read line
>    # grab name of alias
> #   set -l name (echo $line | grep -oh '\S*='| sed s'/.$//')
>  
>    # grab body function
> #   set -l body (echo $line | grep -oh '[\'|"].*[\'|"]' | sed 's/.$//; s/^.//')
>  
>    # convert all && to '; and'
> #   set -l body (echo $body | sed 's/&&/; and /')
>  
>    # TODO remove '$' that are outside "" in body
> #   set -l body (echo $body | tr -d '\$')
>  
> #   if [ $name != "which" ]
> #      printf "function $name \n   " >> $fish_profile
> #      printf "$body\nend\n\n" >> $fish_profile
> #   end
> #end
>
> ```
