---
title: "Kerberos - Credential Cache (ccache)"
created: 2021-08-25T16:05:20.486-05:00
modified: 2022-09-03T19:19:33.182-05:00
parent: "[[Kerberos Protocol]]"
children: []
---
###### Credential Cache (ccache)
- holds Kerberos credentials while they remain valid and, generally, while the user’s session lasts, so that authenticating to a service multiple times (e.g., connecting to a web or mail server more than once) doesn’t require contacting the [[Key Distribution Center (KDC)|KDC]] every time.

# ccache - Basics

A ccache usually contains one initial ticket which is obtained usually by a password. If this ticket is a ticket-granting ticket, it can be used to obtain service tickets without the password. Because the credential cache does not store the password, less long-term damage can be done to the user’s account if the machine is compromised.

A ccache stores a default client principal name, set when the cache is created. This is the name shown at the top of the <code>[klist](https://web.mit.edu/kerberos/krb5-1.12/doc/user/user_commands/klist.html#klist-1) -A</code> output.
# ccache - Entries

Each normal cache entry includes:
- a service principal name
- a client principal name (which, in some ccache types, need not be the same as the default)
- lifetime information
- flags
- along with the credential itself

There are also other entries, indicated by special names, that store additional information.
# ccache - Types

The credential cache interface, like the [<em>keytab</em>](https://web.mit.edu/kerberos/krb5-1.12/doc/basic/keytab_def.html#keytab-definition) and [<em>replay cache</em>](https://web.mit.edu/kerberos/krb5-1.12/doc/basic/rcache_def.html#rcache-definition) interfaces, uses <em><code><font style="color: rgb(122,134,154);">TYPE:value</font></code></em> strings to indicate the type of credential cache and any associated cache naming data to use.

There are several kinds of credentials cache supported in the MIT Kerberos library. Not all are supported on every platform. In most cases, it should be correct to use the default type built into the library.

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>API</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is only implemented on Windows. It communicates with a server process that holds the credentials in memory for the user, rather than writing them to disk."
    ],
    [
      {
        "content": "<strong>DIR</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "points to the storage location of the collection of the credential caches in <em>FILE:</em> format. It is most useful when dealing with multiple Kerberos realms and KDCs. For release 1.10 the directory must already exist. In post-1.10 releases the requirement is for parent directory to exist and the current process must have permissions to create the directory if it does not exist. See [<em>Collections of caches</em>](https://web.mit.edu/kerberos/krb5-1.12/doc/basic/ccache_def.html#col-ccache) for details. New in release 1.10"
    ],
    [
      {
        "content": "<strong>FILE</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "caches are the simplest and most portable. A simple flat file format is used to store one credential after another. This is the default ccache type."
    ],
    [
      {
        "content": "<strong>KEYRING</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is Linux-specific, and uses the kernel keyring support to store credential data in unswappable kernel memory where only the current user should be able to access it. The following residual forms are supported:\n- <code><font style=\"color: rgb(122,134,154);\">KEYRING:name</font></code>\n- <code><font style=\"color: rgb(122,134,154);\">KEYRING:process:name</font></code> - process keyring\n- <code><font style=\"color: rgb(122,134,154);\">KEYRING:thread:name</font></code> - thread keyring\n\nStarting with release 1.12 the <em>KEYRING</em> type supports collections. The following new residual forms were added:\n- <code><font style=\"color: rgb(122,134,154);\">KEYRING:session:name</font></code> - session keyring\n- <code><font style=\"color: rgb(122,134,154);\">KEYRING:user:name</font></code> - user keyring\n- <code><font style=\"color: rgb(122,134,154);\">KEYRING:persistent:uidnumber</font></code> - persistent per-UID collection. Unlike the user keyring, this collection survives after the user logs out, until the cache credentials expire. This type of ccache requires support from the kernel; otherwise, it will fall back to the user keyring."
    ],
    [
      {
        "content": "<strong>KEYRING</strong> <strong>MEMORY</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "caches are for storage of credentials that don’t need to be made available outside of the current process. For example, a memory ccache is used by [<em>kadmin</em>](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/admin_commands/kadmin_local.html#kadmin-1) to store the administrative ticket used to contact the admin server. Memory ccaches are faster than file ccaches and are automatically destroyed when the process exits."
    ],
    [
      {
        "content": "<strong>MSLSA</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is a Windows-specific cache type that accesses the Windows credential store."
    ]
  ]
}
```

See [<em>Collections of caches</em>](https://web.mit.edu/kerberos/krb5-1.12/doc/basic/ccache_def.html#col-ccache) for details.
# Resources
- [https://web.mit.edu/kerberos/krb5-1.12/doc/basic/ccache_def.html](https://web.mit.edu/kerberos/krb5-1.12/doc/basic/ccache_def.html)
