+++
title = "nslookup"
date = "2019-03-11"
description = "Query Internet name servers interactively."
weight = 8
+++

O utilitário de texto `nslookup`, nativo em todos os sistemas operacionais, é utilizados para consulta de zona reversa de DNS.

Ao realizar a pesquisa da zona reversa da plataforma GitHub, utiliza-se o comando da seguinte forma:

```bash
nslookup www.gupy.io
```

O resultado da pesquisa será:

```bash
Server:		127.0.0.53
Address:	127.0.0.53#53

Non-authoritative answer:
www.gupy.io	canonical name = 3299491.group41.sites.hubspot.net.
3299491.group41.sites.hubspot.net	canonical name = group41.sites.hscoscdn40.net.
Name:	group41.sites.hscoscdn40.net
Address: 199.60.103.228
Name:	group41.sites.hscoscdn40.net
Address: 199.60.103.28
;; communications error to 127.0.0.53#53: timed out
Name:	group41.sites.hscoscdn40.net
Address: 2606:2c40::c73c:671c
Name:	group41.sites.hscoscdn40.net
Address: 2606:2c40::c73c:67e4

```