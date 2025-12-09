+++
title = "ping"
date = "2019-03-11"
description = "Send ICMP ECHO_REQUEST to network hosts."
weight = 11
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