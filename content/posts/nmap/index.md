+++
title = "nmap"
date = "2019-01-25"
author = "#linux"
#cover = "img/Tux.png"
description = "Network exploration tool and security / port scanner."
weight = 7
+++

## Most commom uses

Para averiguar todos os dispositivos disponíveis numa rede:

```bash
    nmap -sn 192.168.0.0/24
```

List all DNS script for Nmap:
```bash
    ls -al /usr/share/nmap/scripts/
```


List DNS script for Nmap:
```bash
    ls -al /usr/share/nmap/scripts/ | grep -e "dns-"
```

```bash
broadcast-dns-service-discovery.nse
dns-blacklist.nse
dns-brute.nse
dns-cache-snoop.nse
dns-check-zone.nse
dns-client-subnet-scan.nse
dns-fuzz.nse
dns-ip6-arpa-scan.nse
dns-nsec3-enum.nse
dns-nsec-enum.nse
dns-nsid.nse
dns-random-srcport.nse
dns-random-txid.nse
dns-recursion.nse
dns-service-discovery.nse
dns-srv-enum.nse
dns-update.nse
dns-zeustracker.nse
dns-zone-transfer.nse
```