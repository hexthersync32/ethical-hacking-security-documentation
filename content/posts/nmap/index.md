+++
title = "nmap"
date = "2019-01-25"
author = "#linux"
#cover = "img/Tux.png"
description = "Network exploration tool and security / port scanner."
weight = 10
+++

![Terminal Theme Preview](http://scanme.nmap.org/images/sitelogo.png)

# 1. Introduction

Um dos principais utilitários do arsenal de ferramentas para pentest.

- Descoberta de hosts ativos dentro de uma determinada faixa de rede;

- Descobertas das portas desses mesmos hosts e identificação de serviços atreladaos a elas;

- Utilização de scripts NSE (Nmap Scripting Engine)

- Identificação de portas de portas TCP e UDP

- Identificação do sistema operacional

- Uso tanto tanto por meio do Shell quanto interface gráfica (Zenmap GUI)

# 2. Structure

```bash
nmap [Scan Type(s)] [Options] {target specification}
```

> Obs.: Por padrão, Nmap irá realizar a filtragem somente de portas TCP.

# 3. First try
## 3.1. Domain scanning:
```bash
nmap scanme.nmap.org
```

```bash
Starting Nmap 7.98 ( https://nmap.org ) at 2025-12-07 20:54 -0300
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.20s latency).
Other addresses for scanme.nmap.org (not scanned): 2600:3c01::f03c:91ff:fe18:bb2f
Not shown: 991 closed tcp ports (conn-refused)
PORT      STATE    SERVICE
22/tcp    open     ssh
25/tcp    filtered smtp
80/tcp    open     http
135/tcp   filtered msrpc
139/tcp   filtered netbios-ssn
445/tcp   filtered microsoft-ds
1434/tcp  filtered ms-sql-m
9929/tcp  open     nping-echo
31337/tcp open     Elite

Nmap done: 1 IP address (1 host up) scanned in 17.14 seconds
```

## 3.2. Network scanning:
```bash
nmap -v 192.168.1.1
```
Response:

```bash

Starting Nmap 7.98 ( https://nmap.org ) at 2025-12-07 21:19 -0300
Initiating Ping Scan at 21:19
Scanning 192.168.1.1 [2 ports]
Completed Ping Scan at 21:19, 0.00s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 21:19
Completed Parallel DNS resolution of 1 host. at 21:19, 0.02s elapsed
Initiating Connect Scan at 21:19
Scanning _gateway (192.168.1.1) [1000 ports]
Discovered open port 139/tcp on 192.168.1.1
Discovered open port 21/tcp on 192.168.1.1
Discovered open port 23/tcp on 192.168.1.1
Discovered open port 445/tcp on 192.168.1.1
Discovered open port 80/tcp on 192.168.1.1
Discovered open port 1900/tcp on 192.168.1.1
Completed Connect Scan at 21:20, 1.24s elapsed (1000 total ports)
Nmap scan report for _gateway (192.168.1.1)
Host is up (0.018s latency).
Not shown: 993 closed tcp ports (conn-refused)
PORT     STATE    SERVICE
21/tcp   open     ftp
23/tcp   open     telnet
53/tcp   filtered domain
80/tcp   open     http
139/tcp  open     netbios-ssn
445/tcp  open     microsoft-ds
1900/tcp open     upnp

Read data files from: /usr/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 1.42 seconds

```
## 3.2. Get list of IPs addresses:
```bash
nmap -sn -n 192.168.1.1/24 | grep 192 | cut -d ' ' -f 5 > ips.txt
```

# 4. Most commom uses

Para averiguar todos os dispositivos disponíveis numa rede (**Ping Scan**):

```bash
    nmap -sn 192.168.0.0/24
```

Ou:

```bash
    nmap -sn 192.168.0.0-255
```

Responde:
```bash
Starting Nmap 7.98 ( https://nmap.org ) at 2025-12-07 21:38 -0300

Nmap scan report for 192.168.1.1
Host is up (0.0038s latency).
MAC Address: 1C:3B:F3:F9:A9:EF (TP-Link Technologies)

Nmap scan report for 192.168.1.102
Host is up (0.100s latency).
MAC Address: C6:2E:82:8D:B7:90 (Unknown)

Nmap scan report for 192.168.1.107
Host is up (0.10s latency).
MAC Address: 70:B1:3D:38:29:E1 (Samsung Electronics)

Nmap scan report for 192.168.1.112
Host is up (0.18s latency).
MAC Address: 32:52:C4:0F:91:31 (Unknown)

Nmap scan report for 192.168.1.114
Host is up (0.10s latency).
MAC Address: DE:D0:82:B6:18:E8 (Unknown)

Nmap scan report for 192.168.1.119
Host is up.

Nmap done: 256 IP addresses (6 hosts up) scanned in 2.93 seconds
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

### Selecionar porta específica
```bash
nmap -p 80 scanme.nmap.org -v
```

Resultado:
```bash
Starting Nmap 7.80 ( https://nmap.org ) at 2025-12-09 08:59 -03
Initiating Ping Scan at 08:59
Scanning scanme.nmap.org (45.33.32.156) [4 ports]
Completed Ping Scan at 08:59, 0.01s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 08:59
Completed Parallel DNS resolution of 1 host. at 08:59, 0.00s elapsed
Initiating SYN Stealth Scan at 08:59
Scanning scanme.nmap.org (45.33.32.156) [1 port]
Discovered open port 80/tcp on 45.33.32.156
Completed SYN Stealth Scan at 08:59, 0.01s elapsed (1 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.00068s latency).
Other addresses for scanme.nmap.org (not scanned): 2600:3c01::f03c:91ff:fe18:bb2f

PORT   STATE SERVICE
80/tcp open  http

Read data files from: /usr/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 0.11 seconds
           Raw packets sent: 5 (196B) | Rcvd: 2 (88B)
```