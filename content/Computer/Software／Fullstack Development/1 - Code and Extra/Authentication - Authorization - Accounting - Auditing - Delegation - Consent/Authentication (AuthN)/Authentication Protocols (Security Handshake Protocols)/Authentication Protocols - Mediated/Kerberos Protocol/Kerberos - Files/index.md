---
title: "Kerberos - Files"
created: 2022-09-03T19:27:01.217-05:00
modified: 2022-09-03T19:28:08.846-05:00
parent: "[[Kerberos Protocol]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "File Name",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "\\~/.gkadmin",
        "bg": "#F4F5F7"
      },
      "Default values for creating new principals in the SEAM Administration Tool"
    ],
    [
      {
        "content": "\\~/.k5login",
        "bg": "#F4F5F7"
      },
      "List of principals that grant access to a Kerberos account"
    ],
    [
      {
        "content": "/etc/krb5/kadm5.acl",
        "bg": "#F4F5F7"
      },
      "Kerberos access control list file, which includes principal names of KDC administrators and their Kerberos administration privileges"
    ],
    [
      {
        "content": "/etc/krb5/kadm5.keytab",
        "bg": "#F4F5F7"
      },
      "Keytab file for the kadmin service on the master KDC"
    ],
    [
      {
        "content": "<strong>/etc/krb5/kdc.conf</strong>",
        "bg": "#F4F5F7"
      },
      "KDC configuration file"
    ],
    [
      {
        "content": "/etc/krb5/kpropd.acl",
        "bg": "#F4F5F7"
      },
      "Kerberos database propagation configuration file"
    ],
    [
      {
        "content": "<strong>/etc/krb5/krb5.conf</strong>",
        "bg": "#F4F5F7"
      },
      "Kerberos realm configuration file"
    ],
    [
      {
        "content": "/etc/krb5/krb5.keytab",
        "bg": "#F4F5F7"
      },
      "Keytab file for network application servers"
    ],
    [
      {
        "content": "/etc/krb5/warn.conf",
        "bg": "#F4F5F7"
      },
      "Kerberos ticket expiration warning and automatic renewal configuration file"
    ],
    [
      {
        "content": "/etc/pam.conf",
        "bg": "#F4F5F7"
      },
      "PAM configuration file"
    ],
    [
      {
        "content": "<strong>/tmp/krb5cc\\_uid</strong>",
        "bg": "#F4F5F7"
      },
      "Default credentials cache, where uid is the decimal UID of the user"
    ],
    [
      {
        "content": "/tmp/ovsec\\_adm.xxxxxx",
        "bg": "#F4F5F7"
      },
      "Temporary credentials cache for the lifetime of the password changing operation, where xxxxxx is a random string"
    ],
    [
      {
        "content": "/var/krb5/.k5.REALM",
        "bg": "#F4F5F7"
      },
      "KDC stash file, which contains a copy of the KDC master key"
    ],
    [
      {
        "content": "/var/krb5/kadmin.log",
        "bg": "#F4F5F7"
      },
      "Log file for kadmind"
    ],
    [
      {
        "content": "/var/krb5/kdc.log",
        "bg": "#F4F5F7"
      },
      "Log file for the KDC"
    ],
    [
      {
        "content": "/var/krb5/principal",
        "bg": "#F4F5F7"
      },
      "Kerberos principal database"
    ],
    [
      {
        "content": "/var/krb5/principal.kadm5",
        "bg": "#F4F5F7"
      },
      "Kerberos administrative database, which contains policy information"
    ],
    [
      {
        "content": "/var/krb5/principal.kadm5.lock",
        "bg": "#F4F5F7"
      },
      "Kerberos administrative database lock file"
    ],
    [
      {
        "content": "/var/krb5/principal.ok",
        "bg": "#F4F5F7"
      },
      "Kerberos principal database initialization file that is created when the Kerberos database is initialized successfully"
    ],
    [
      {
        "content": "/var/krb5/principal.ulog",
        "bg": "#F4F5F7"
      },
      "Kerberos update log, which contains updates for incremental propagation"
    ],
    [
      {
        "content": "/var/krb5/slave\\_datatrans",
        "bg": "#F4F5F7"
      },
      "Backup file of the KDC that the kprop\\_script script uses for propagation"
    ],
    [
      {
        "content": "/var/krb5/slave\\_datatrans\\_slave",
        "bg": "#F4F5F7"
      },
      "Temporary dump file that is created when full updates are made to the specified slave"
    ]
  ]
}
```
