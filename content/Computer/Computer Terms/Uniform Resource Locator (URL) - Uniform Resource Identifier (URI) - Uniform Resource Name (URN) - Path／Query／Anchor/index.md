---
title: "Uniform Resource Locator (URL) - Uniform Resource Identifier (URI) - Uniform Resource Name (URN) - Path／Query／Anchor"
created: 2019-11-09T22:25:34.970-06:00
modified: 2024-09-05T11:16:09.495-05:00
parent: "[[Computer Terms]]"
children:
  - "[[Magnet Links]]"
  - "[[Uniform Resource Locator (URL)]]"
---
# Uniform Resource Identifier (URI)
- a URI is a string of characters used to identify either a:
	- name
	- resource
- a URI identifies a resource either by location, or a name, or both
- <strong>a URI has two specializations known as URL and URN:</strong>
	- <strong>URL</strong> - a URI that specifies a location
	- <strong>URN</strong> - a URI that specifies a name
	- <strong>URI</strong> - a URI that specifies both a name and location

# Uniform Resource Locator (URL) - locators
- a URL is a subset of the URI that specifies where an identified resource is available and the mechanism for retrieving it
- a URL defines how the resource can be obtained
- a URL does not have to be [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]] URL ([http://example.com:80](http://example.com:80)), a URL can also be a [[File Transfer Protocol (FTP)|FTP]] URL ([ftp://example.com:22](ftp://example.com:22)) or [[Server Message Block Protocol (SMB)|SMB]] URL ([smb://example.com:139](smb://example.com:139))
- [[Uniform Resource Locator (URL)|more details]]

# Uniform Resource Name (URN) - names
- a URN is a URI that uses the URN scheme, and <strong>does not imply availability of the identified resource</strong>

# URI - URL - URN
- both URNs and URLs are URIs, and a particular URI may be both a name and a locator at the same time
- the URNs are part of a larger Internet information architecture which is composed of URNs, URCs and URLs

# Examples
<span style="white-space: pre-wrap"><code>URL: ftp://ftp.is.co.za/rfc/rfc1808.txt</code><br><code>URL: http://www.ietf.org/rfc/rfc2396.txt</code><br><code>URL: ldap://\[2001:db8::7\]/c=GB?objectClass?one</code><br><code>URL: mailto:John.Doe@example.com</code><br><code>URL: news:comp.infosystems.www.servers.unix</code><br><code>URL: telnet://192.0.2.16:80/</code><br><code>URN (not URL): urn:oasis:names:specification:docbook:dtd:xml:4.1.2</code><br><code>URN (not URL): tel:+1-816-555-1212 (?)</code></span>

the ISBN number used for books is in fact a <strong>URN</strong>, it's an unambiguous identifier for a given book. But a ISBN number is not a <strong>URL</strong> as it does not define where the book can be found

<strong>![[Uniform Resource Locator (URL) - Uniform Resource Identifier (URI) - Uniform Resource Name (URN) - Path／Query／Anchor/uri-url-urn.png|450]]</strong>
