---
title: "Nix - MacOS Installation"
created: 2025-11-03T19:49:49.106-06:00
modified: 2025-11-03T19:50:07.151-06:00
parent: "[[Nix]]"
children: []
---
```
(base) ➜  ~ curl -L https://nixos.org/nix/install | sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100  4267  100  4267    0     0   9369      0 --:--:-- --:--:-- --:--:--  9369
downloading Nix 2.32.2 binary tarball for aarch64-darwin from 'https://releases.nixos.org/nix/nix-2.32.2/nix-2.32.2-aarch64-darwin.tar.xz' to '/var/folders/vf/ndfsnp6s5lngzqtqy4_czjj80000gn/T/nix-binary-tarball-unpack.XXXXXXXXXX.MnVppBfNHM'...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 28.5M  100 28.5M    0     0  9484k      0  0:00:03  0:00:03 --:--:-- 9485k
Switching to the Multi-user Installer
Welcome to the Multi-User Nix Installation

This installation tool will set up your computer with the Nix package
manager. This will happen in a few stages:

1. Make sure your computer doesn't already have Nix. If it does, I
   will show you instructions on how to clean up your old install.

2. Show you what I am going to install and where. Then I will ask
   if you are ready to continue.

3. Create the system users (uids [351..382]) and groups (gid 350)
   that the Nix daemon uses to run builds. To create system users
   in a different range, exit and run this tool again with
   NIX_FIRST_BUILD_UID set.

4. Perform the basic installation of the Nix files daemon.

5. Configure your shell to import special Nix Profile files, so you
   can use Nix.

6. Start the Nix daemon.

Would you like to see a more detailed list of what I will do?
No TTY, assuming you would say yes :)

I will:

 - make sure your computer doesn't already have Nix files
   (if it does, I will tell you how to clean them up.)
 - create local users (see the list above for the users I'll make)
 - create a local group (nixbld)
 - install Nix in /nix
 - create a configuration file in /etc/nix
 - set up the "default profile" by creating some Nix-related files in
   /var/root
 - back up /etc/bashrc to /etc/bashrc.backup-before-nix
 - update /etc/bashrc to include some Nix configuration
 - back up /etc/zshrc to /etc/zshrc.backup-before-nix
 - update /etc/zshrc to include some Nix configuration
 - create a Nix volume and a LaunchDaemon to mount it
 - create a LaunchDaemon (at /Library/LaunchDaemons/org.nixos.nix-daemon.plist) for nix-daemon

Ready to continue?
No TTY, assuming you would say yes :)

---- let's talk about sudo -----------------------------------------------------
This script is going to call sudo a lot. Normally, it would show you
exactly what commands it is running and why. However, the script is
run in a headless fashion, like this:

  $ curl -L https://nixos.org/nix/install | sh

or maybe in a CI pipeline. Because of that, I'm going to skip the
verbose output in the interest of brevity.

If you would like to
see the output, try like this:

  $ curl -L -o install-nix https://nixos.org/nix/install
  $ sh ./install-nix

~~> Fixing any leftover Nix volume state
Before I try to install, I'll check for any existing Nix volume config
and ask for your permission to remove it (so that the installer can
start fresh). I'll also ask for permission to fix any issues I spot.

~~> Checking for artifacts of previous installs
Before I try to install, I'll check for signs Nix already is or has
been installed on this system.

---- Nix config report ---------------------------------------------------------
        Temp Dir:	/var/folders/vf/ndfsnp6s5lngzqtqy4_czjj80000gn/T/tmp.aSgTIu9TU9
        Nix Root:	/nix
     Build Users:	32
  Build Group ID:	350
Build Group Name:	nixbld

build users:
    Username:	UID
     _nixbld1:	351
     _nixbld2:	352
     _nixbld3:	353
     _nixbld4:	354
     _nixbld5:	355
     _nixbld6:	356
     _nixbld7:	357
     _nixbld8:	358
     _nixbld9:	359
     _nixbld10:	360
     _nixbld11:	361
     _nixbld12:	362
     _nixbld13:	363
     _nixbld14:	364
     _nixbld15:	365
     _nixbld16:	366
     _nixbld17:	367
     _nixbld18:	368
     _nixbld19:	369
     _nixbld20:	370
     _nixbld21:	371
     _nixbld22:	372
     _nixbld23:	373
     _nixbld24:	374
     _nixbld25:	375
     _nixbld26:	376
     _nixbld27:	377
     _nixbld28:	378
     _nixbld29:	379
     _nixbld30:	380
     _nixbld31:	381
     _nixbld32:	382

Ready to continue?
No TTY, assuming you would say yes :)

---- Preparing a Nix volume ----------------------------------------------------
    Nix traditionally stores its data in the root directory /nix, but
    macOS now (starting in 10.15 Catalina) has a read-only root directory.
    To support Nix, I will create a volume and configure macOS to mount it
    at /nix.

~~> Configuring /etc/synthetic.conf to make a mount-point at /nix
Password:

~~> Creating a Nix volume
disk3s7 was already unmounted

~~> Configuring /etc/fstab to specify volume mount options

~~> Encrypt the Nix volume
Volume Nix Store on Nix Store mounted
Encrypting with the new "Disk" crypto user on disk3s7
The new "Disk" user will be the only one who has initial access to disk3s7
The new APFS crypto user UUID will be 83183B8D-3F5F-4112-BFF1-2BA0AB35FB7D
Encryption has likely completed due to AES hardware; see "diskutil apfs list"
Volume Nix Store on disk3s7 force-unmounted

~~> Configuring LaunchDaemon to mount 'Nix Store'

~~> Setting up the build group nixbld
            Created:	Yes

~~> Setting up the build user _nixbld1
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 1
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld2
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 2
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld3
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 3
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld4
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 4
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld5
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 5
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld6
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 6
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld7
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 7
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld8
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 8
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld9
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 9
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld10
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 10
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld11
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 11
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld12
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 12
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld13
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 13
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld14
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 14
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld15
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 15
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld16
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 16
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld17
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 17
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld18
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 18
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld19
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 19
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld20
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 20
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld21
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 21
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld22
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 22
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld23
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 23
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld24
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 24
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld25
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 25
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld26
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 26
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld27
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 27
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld28
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 28
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld29
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 29
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld30
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 30
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld31
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 31
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the build user _nixbld32
           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 32
   Logins Disabled:	Yes
  Member of nixbld:	Yes
    PrimaryGroupID:	350

~~> Setting up the basic directory structure
chown: /nix/.Trashes: Operation not permitted
chown: /nix/.Trashes: Operation not permitted
install: mkdir /nix/var
install: mkdir /nix/var/log
install: mkdir /nix/var/log/nix
install: mkdir /nix/var/log/nix/drvs
install: mkdir /nix/var/nix
install: mkdir /nix/var/nix/db
install: mkdir /nix/var/nix/gcroots
install: mkdir /nix/var/nix/profiles
install: mkdir /nix/var/nix/temproots
install: mkdir /nix/var/nix/userpool
install: mkdir /nix/var/nix/daemon-socket
install: mkdir /nix/var/nix/gcroots/per-user
install: mkdir /nix/var/nix/profiles/per-user
install: mkdir /nix/store
install: mkdir /etc/nix

~~> Installing Nix
      Alright! We have our first nix at /nix/store/p6yxxpv7rwhxcsywwlw7fxm528cvm335-nix-2.32.2
      Just finished getting the nix database ready.

~~> Setting up shell profiles: /etc/bashrc /etc/profile.d/nix.sh /etc/zshrc /etc/bash.bashrc /etc/zsh/zshrc

# Nix
if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
  . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
fi
# End Nix

# System-wide .bashrc file for interactive bash(1) shells.
if [ -z "$PS1" ]; then
   return
fi

PS1='\h:\W \u\$ '
# Make bash check its window size after a process completes
shopt -s checkwinsize

[ -r "/etc/bashrc_$TERM_PROGRAM" ] && . "/etc/bashrc_$TERM_PROGRAM"

# Nix
if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
  . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
fi
# End Nix

# System-wide profile for interactive zsh(1) shells.

# Setup user specific overrides for this in ~/.zshrc. See zshbuiltins(1)
# and zshoptions(1) for more details.

# Correctly display UTF-8 with combining characters.
if [[ "$(locale LC_CTYPE)" == "UTF-8" ]]; then
    setopt COMBINING_CHARS
fi

# Disable the log builtin, so we don't conflict with /usr/bin/log
disable log

# Save command history
HISTFILE=${ZDOTDIR:-$HOME}/.zsh_history
HISTSIZE=2000
SAVEHIST=1000

# Beep on error
setopt BEEP

# Use keycodes (generated via zkbd) if present, otherwise fallback on
# values from terminfo
if [[ -r ${ZDOTDIR:-$HOME}/.zkbd/${TERM}-${VENDOR} ]] ; then
    source ${ZDOTDIR:-$HOME}/.zkbd/${TERM}-${VENDOR}
else
    typeset -g -A key

    [[ -n "$terminfo[kf1]" ]] && key[F1]=$terminfo[kf1]
    [[ -n "$terminfo[kf2]" ]] && key[F2]=$terminfo[kf2]
    [[ -n "$terminfo[kf3]" ]] && key[F3]=$terminfo[kf3]
    [[ -n "$terminfo[kf4]" ]] && key[F4]=$terminfo[kf4]
    [[ -n "$terminfo[kf5]" ]] && key[F5]=$terminfo[kf5]
    [[ -n "$terminfo[kf6]" ]] && key[F6]=$terminfo[kf6]
    [[ -n "$terminfo[kf7]" ]] && key[F7]=$terminfo[kf7]
    [[ -n "$terminfo[kf8]" ]] && key[F8]=$terminfo[kf8]
    [[ -n "$terminfo[kf9]" ]] && key[F9]=$terminfo[kf9]
    [[ -n "$terminfo[kf10]" ]] && key[F10]=$terminfo[kf10]
    [[ -n "$terminfo[kf11]" ]] && key[F11]=$terminfo[kf11]
    [[ -n "$terminfo[kf12]" ]] && key[F12]=$terminfo[kf12]
    [[ -n "$terminfo[kf13]" ]] && key[F13]=$terminfo[kf13]
    [[ -n "$terminfo[kf14]" ]] && key[F14]=$terminfo[kf14]
    [[ -n "$terminfo[kf15]" ]] && key[F15]=$terminfo[kf15]
    [[ -n "$terminfo[kf16]" ]] && key[F16]=$terminfo[kf16]
    [[ -n "$terminfo[kf17]" ]] && key[F17]=$terminfo[kf17]
    [[ -n "$terminfo[kf18]" ]] && key[F18]=$terminfo[kf18]
    [[ -n "$terminfo[kf19]" ]] && key[F19]=$terminfo[kf19]
    [[ -n "$terminfo[kf20]" ]] && key[F20]=$terminfo[kf20]
    [[ -n "$terminfo[kbs]" ]] && key[Backspace]=$terminfo[kbs]
    [[ -n "$terminfo[kich1]" ]] && key[Insert]=$terminfo[kich1]
    [[ -n "$terminfo[kdch1]" ]] && key[Delete]=$terminfo[kdch1]
    [[ -n "$terminfo[khome]" ]] && key[Home]=$terminfo[khome]
    [[ -n "$terminfo[kend]" ]] && key[End]=$terminfo[kend]
    [[ -n "$terminfo[kpp]" ]] && key[PageUp]=$terminfo[kpp]
    [[ -n "$terminfo[knp]" ]] && key[PageDown]=$terminfo[knp]
    [[ -n "$terminfo[kcuu1]" ]] && key[Up]=$terminfo[kcuu1]
    [[ -n "$terminfo[kcub1]" ]] && key[Left]=$terminfo[kcub1]
    [[ -n "$terminfo[kcud1]" ]] && key[Down]=$terminfo[kcud1]
    [[ -n "$terminfo[kcuf1]" ]] && key[Right]=$terminfo[kcuf1]
fi

# Default key bindings
[[ -n ${key[Delete]} ]] && bindkey "${key[Delete]}" delete-char
[[ -n ${key[Home]} ]] && bindkey "${key[Home]}" beginning-of-line
[[ -n ${key[End]} ]] && bindkey "${key[End]}" end-of-line
[[ -n ${key[Up]} ]] && bindkey "${key[Up]}" up-line-or-search
[[ -n ${key[Down]} ]] && bindkey "${key[Down]}" down-line-or-search

# Default prompt
PS1="%n@%m %1~ %# "

# Useful support for interacting with Terminal.app or other terminal programs
[ -r "/etc/zshrc_$TERM_PROGRAM" ] && . "/etc/zshrc_$TERM_PROGRAM"

# Nix
if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
  . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
fi
# End Nix

~~> Setting up shell profiles for Fish with conf.d/nix.fish inside /etc/fish /usr/local/etc/fish /opt/homebrew/etc/fish /opt/local/etc/fish

~~> Setting up the default profile
installing 'nix-2.32.2'
building '/nix/store/pajblw4x7p6vi3mj34w43rar72xvm89d-user-environment.drv'...
installing 'nss-cacert-3.113.1'
building '/nix/store/gr9bifm87pgpv3g79vrd91csryw08sry-user-environment.drv'...
unpacking 1 channels...

~~> Setting up the nix-daemon LaunchDaemon
Alright! We're done!
Try it! Open a new terminal, and type:

  $ nix-shell -p nix-info --run "nix-info -m"

Thank you for using this installer. If you have any feedback or need
help, don't hesitate:

You can open an issue at
https://github.com/NixOS/nix/issues/new?labels=installer&template=installer.md

Or get in touch with the community: https://nixos.org/community

---- Reminders -----------------------------------------------------------------
[ 1 ]
Nix won't work in active shell sessions until you restart them.

(base) ➜  ~
```
