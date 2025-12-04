+++
title = "curl"
date = "2019-01-25"
author = "#cyber-security #principles #information #security"
description = "URL transfer and website or server requests"
weight = 1
+++

```bash
    curl google.com -I
```

```bash
HTTP/1.1 301 Moved Permanently
Location: http://www.google.com/
Content-Type: text/html; charset=UTF-8
Content-Security-Policy-Report-Only: object-src 'none';base-uri 'self';script-src 'nonce-qYdV_FPHpEBv6vYwKNQrVA' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp
Date: Thu, 04 Dec 2025 12:45:59 GMT
Expires: Sat, 03 Jan 2026 12:45:59 GMT
Cache-Control: public, max-age=2592000
Server: gws
Content-Length: 219
X-XSS-Protection: 0
X-Frame-Options: SAMEORIGIN
```