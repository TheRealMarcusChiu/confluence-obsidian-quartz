---
title: "Confluence - Installation & Setup"
created: 2025-06-16T01:40:01.946-05:00
modified: 2025-06-16T14:11:01.686-05:00
parent: "[[Personal Confluence (confluence.marcuschiu.com)]]"
children: []
---
# Install Confluence

Download Confluence-9.2.5-x64.bin file from: [https://www.atlassian.com/software/confluence/download-archives](https://www.atlassian.com/software/confluence/download-archives)
```bash
wget https://www.atlassian.com/software/confluence/downloads/binary/atlassian-confluence-9.2.5-x64.bin
chmod +x Confluence-9.2.5-x64.bin
./Confluence-9.2.5-x64.bin
```
- Installation Directory: /opt/atlassian/confluence
- Home Directory: /var/atlassian/application-data/confluence
- HTTP Port: 8090
- RMI Port: 8000

# Install Postgres & Setup User and Database
```bash
sudo apt-get install postgresql postgresql-contrib
sudo -u postgres psql
```
```sql
CREATE USER confluenceuser WITH PASSWORD 'password';
GRANT ALL ON SCHEMA public TO confluenceuser; 
CREATE DATABASE confluence ENCODING 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8' TEMPLATE template0;
GRANT ALL PRIVILEGES ON DATABASE confluence TO confluenceuser;
ALTER DATABASE confluence OWNER TO confluenceuser;
exit;
```
- database: <code><font style="color: rgb(122,134,154);">confluence</font></code>
- database default port: 5432
- user: <code><font style="color: rgb(122,134,154);">confluenceuser</font></code>
- password: <code><font style="color: rgb(122,134,154);">password</font></code>

# Configure Confluence

Open [http://localhost:8090/](http://localhost:8090/) in browser.

Follow through the steps.

![[Confluence - Installation & Setup/1.png|800x520]]
