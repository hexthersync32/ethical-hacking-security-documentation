+++
title = "ping"
date = "2019-03-11"
description = "Send ICMP ECHO_REQUEST to network hosts."
weight = 17
+++

# 1. Example

```bash
ping scanme.nmap.org
```

Response:

```bash
PING scanme.nmap.org (45.33.32.156) 56(84) bytes of data.
64 bytes from scanme.nmap.org (45.33.32.156): icmp_seq=1 ttl=43 time=247 ms
64 bytes from scanme.nmap.org (45.33.32.156): icmp_seq=2 ttl=43 time=269 ms
64 bytes from scanme.nmap.org (45.33.32.156): icmp_seq=3 ttl=43 time=292 ms
64 bytes from scanme.nmap.org (45.33.32.156): icmp_seq=4 ttl=43 time=315 ms
64 bytes from scanme.nmap.org (45.33.32.156): icmp_seq=5 ttl=43 time=236 ms
64 bytes from scanme.nmap.org (45.33.32.156): icmp_seq=6 ttl=43 time=259 ms
64 bytes from scanme.nmap.org (45.33.32.156): icmp_seq=7 ttl=43 time=282 ms
^C
--- scanme.nmap.org ping statistics ---
8 packets transmitted, 7 received, 12.5% packet loss, time 7007ms
rtt min/avg/max/mdev = 236.117/271.645/315.311/25.221 ms

```

# 2. Set the quantity of pings
```bash
ping -c 4 8.8.8.8
```

Result:

```bash
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=112 time=48.3 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=112 time=48.1 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=112 time=48.0 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=112 time=48.0 ms

--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 48.008/48.110/48.332/0.129 ms
```

# 3. Packets size
```bash
ping -s 128 8.8.8.8 -c 4
```

Result:
```bash
PING 8.8.8.8 (8.8.8.8) 128(156) bytes of data.
136 bytes from 8.8.8.8: icmp_seq=1 ttl=112 time=48.8 ms
136 bytes from 8.8.8.8: icmp_seq=2 ttl=112 time=48.4 ms
136 bytes from 8.8.8.8: icmp_seq=3 ttl=112 time=48.4 ms
136 bytes from 8.8.8.8: icmp_seq=4 ttl=112 time=48.7 ms

--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 48.403/48.570/48.802/0.171 ms
```

# 1. Attacks with Ping Utilitiy

## 1.1. Ping of Death

## 1.2. Ping Flood / ICMP Flood

![Ping Flood Attack](https://www.akamai.com/site/en/images/article/2022/what-is-an-icmp-flood-attack-image.png)

# FAQ
## 1. Durante um processo de footprint de um alvo durante um processo de pentest, existe algum risco de se utilizar o comando `ping`?

## 2. O envio de pacotes ICMP para um alvo por meio do ping pode ser de algum modo monitorado?