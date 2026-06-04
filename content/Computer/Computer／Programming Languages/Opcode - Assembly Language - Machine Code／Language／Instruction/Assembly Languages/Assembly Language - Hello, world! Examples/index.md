---
title: "Assembly Language - Hello, world! Examples"
created: 2020-01-04T15:29:02.450-06:00
modified: 2023-01-02T11:33:16.931-06:00
parent: "[[Assembly Languages]]"
children: []
---
# Examples

> [!expand]- Linux - 32 bit example
> ```
> section .text
> 	global _start	; must be declared for linker (ld)
>
> _start:				; tells linker entry point
> 	mov edx,len		; message length
> 	mov ecx,msg		; message to write
> 	mov	ebx,1       ; file descriptor (stdout)
>    	mov	eax,4       ; system call number (sys_write)
>    	int	0x80        ; call kernel
> 	
>    	mov	eax,1       ; system call number (sys_exit)
>    	int	0x80        ; call kernel
>
> section	.data
> msg db 'Hello, world!', 0xa  ; string to be printed
> len equ $ - msg     		 ; length of the string
> ```
>
> when the above code is "assembled" and executed, it produces the following result
> ```
> Hello, world!
> ```
>
> Compiling and Linking Assembly Program in NASM
> - to assemble program (an object file named ./hello.o will be created)
> - <span style="white-space: pre-wrap"><code>nasm -f elf hello.asm</code></span>
> - link the object file and create an executable file named ./hello)
> - <span style="white-space: pre-wrap"><code>ld -m elf\_i386 -s -o hello hello.o</code></span>
> - execute the program
> - <span style="white-space: pre-wrap"><code>./hello</code></span>

> [!expand]- Linux - 64 bit example
> ```
> global _start
> section .text
> _start:
>   mov rax, 1        ; write(
>   mov rdi, 1        ;   STDOUT_FILENO,
>   mov rsi, msg      ;   "Hello, world!\n",
>   mov rdx, msglen   ;   sizeof("Hello, world!\n")
>   syscall           ; );
>
>   mov rax, 60       ; exit(
>   mov rdi, 0        ;   EXIT_SUCCESS
>   syscall           ; );
>
> section .rodata
>   msg: db "Hello, world!", 10
>   msglen: equ $ - msg
> ```
> ```
> $ nasm -f elf64 -o hello.o hello.s
> $ ld -o hello hello.o
> $ ./hello
> Hello, world!
> ```

> [!expand]- macOS - 32 bit example
> ```
> ; /usr/local/bin/nasm -f macho 32.asm && ld -macosx_version_min 10.7.0 -o 32 32.o && ./32
>
> section .data
> msg:    db      "Hello, world!", 10
> .len:   equ     $ - msg
>
> global start
> section .text
> start:
>     push    dword msg.len
>     push    dword msg
>     push    dword 1
>     mov     eax, 4
>     sub     esp, 4
>     int     0x80
>     add     esp, 16
>
>     push    dword 0
>     mov     eax, 1
>     sub     esp, 12
>     int     0x80
> ```

> [!expand]- macOS - 64 bit example
> ```
> ; /usr/local/bin/nasm -f macho64 64.asm && ld -macosx_version_min 10.7.0 -lSystem -o 64 64.o && ./64
>
> section .data
> msg:    db      "Hello, world!", 10
> .len:   equ     $ - msg
>
> global start
> section .text
> start:
>     mov     rax, 0x2000004  ; write(
>     mov     rdi, 1          ;   STDOUT_FILENO,
>     mov     rsi, msg        ;   "Hello, world!\n",
>     mov     rdx, msg.len    ;   sizeof("Hello, world!\n")
>     syscall                 ; );
>
>     mov     rax, 0x2000001  ; exit(
>     mov     rdi, 0          ;   EXIT_SUCCESS
>     syscall                 ; );
> ```
