+++
title = "DNS"
date = "2017-09-29"
author = "#dns #protocol"
description = "Protocol for translating domain names to IP addresses."
weight = 6
+++

# 1. Definition

DNS (Domais Name System) é um sistema hierárquico. Entre outras palavras, é um serviço (`porta 53`) que traduz nomes de domínio para endereços de IP e vice-versa. Esses tais __nomes de domínio__ podem referir-se comumente a endereços de websites (URLs).

Em **segurança da informação**, *resolução reversa* (ou *reverse DNS lookup*) é o processo de **descobrir o nome de domínio associado a um endereço IP** — o contrário da resolução DNS comum, que traduz domínio → IP.

---

# 2. Resolução reversa

É uma consulta ao DNS para verificar qual domínio (ex.: `exemplo.com`) está registrado para um determinado endereço IP (ex.: `192.0.2.10`).
Isso é feito acessando registros especiais chamados **PTR (Pointer Records)**.

## 2.1. Por que isso é importante em segurança

1. **Verificação de legitimidade e identificação**
   Ajuda a confirmar se um IP realmente pertence ao domínio que ele afirma representar — útil para validar servidores, identificar origem de tráfego e detectar disfarces.

2. **Detecção de atividades suspeitas**
   Em logs de firewall, IDS/IPS ou servidores, a resolução reversa auxilia a reconhecer se um IP está associado a hosts legítimos ou a fontes potencialmente maliciosas.

3. **Autenticação e reputação em serviços críticos**
   Protocolos como SMTP usam reverse DNS para verificar se um servidor de e-mail é confiável. Ausência ou inconsistência de PTR é frequentemente sinal de spam ou spoofing.

Se quiser, posso dar exemplos práticos ou mostrar como realizar uma resolução reversa usando comandos como `dig`, `nslookup` ou ferramentas online.

![Terminal Theme Preview](https://www.whatismyip.com/static/662cddb98cbb8537a6575bc1bb19c9bb/reverse-dns-lookup-diagram.webp)

Exatamente — **é isso mesmo**.

A **resolução reversa** é justamente o ato de **descobrir qual domínio (ou hostname) está associado a um determinado endereço IP**.

Em termos simples:

* **Resolução normal:** domínio → IP
* **Resolução reversa:** IP → domínio

Se quiser, posso explicar como essa resolução é feita tecnicamente (com registros PTR) ou mostrar exemplos práticos.


![Terminal Theme Preview](https://images.ctfassets.net/t6n243uipzy1/24127.0.0.1	localhost
127.0.1.1	LUCLAPTOP

# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
liULRiJIvyTmU6GLBzJc/7e7b33154976dedaa93d022ac9b41b13/reverse_dns_lookup.png)

Localizar um domínio a partir de um IP — por meio da **resolução reversa (reverse DNS)** — traz várias vantagens importantes para profissionais de **segurança da informação**. As principais são:

### **1. Identificação e análise de origem do tráfego**

Saber a que domínio um IP pertence ajuda a:

* Reconhecer se o tráfego vem de uma organização legítima (Google, AWS, Microsoft etc.) ou de uma rede suspeita.
* Entender o perfil de quem está acessando, escaneando ou atacando um sistema.
  Isso torna mais fácil distinguir acessos benignos de potenciais ameaças.

---

### **2. Detecção de comportamento malicioso**

Quando um IP aparece em logs de firewall, IDS/IPS ou servidores, a resolução reversa pode revelar se:

* O host pertence a um provedor associado a botnets.
* O domínio é recém-criado, genérico ou sem reputação.
* Há inconsistência entre o host declarado e o domínio real — sinal comum de spoofing ou atividade fraudulenta.

---

### **3. Validação e confiança em serviços críticos**

Em muitos protocolos, especialmente e-mail (SMTP), a resolução reversa é usada como medida de segurança:

* Servidores só aceitam conexões de IPs cujo **PTR (reverse)** combina com o **A record (forward)**.
* Falta de reverse DNS é frequentemente tratada como indicador de spam, phishing ou servidores mal configurados.

---

Em resumo:
**Localizar o domínio de um IP ajuda a verificar legitimidade, identificar anomalias e reduzir riscos**, tornando a análise de incidentes e o monitoramento de redes muito mais eficazes.

Se quiser, posso explicar como validar se um PTR é confiável ou como usar ferramentas como `nslookup`, `dig` e `host` para fazer essas consultas.

---

# FAQ
## 1. Do ponto de vista técnico, DNS é realmente obrigatório para o tráfego de rede?

## 2. Por que a maioria dos sistemas operacionais necessitam da configuração de dois endereços de DNS (primário e secundário)?

## 3. Um máquina pode operar somente com um endereço de DNS?

## 4. Um máquina pode operar com nenhum endereço de DNS?

## 5. No caso de um computador pessoal, é possível configurá-lo para utilizar mais de dois endereços de DNS?

## 6. E no caso de servidores (sejam estes físicos ou virtuais)?

## 7. Um determinado computador está operando com um endereço de DNS 8.8.8.8 para acessar determinada plataforma. Em um determinado momento, um técnico de segurança da informação alterou o DNS para 10.70.32.90 e não foi possível mais acessar esta plataforma. Por que isto ocorre?

## 8. O DNS é responsável por definir todas as rotas que uma máquina poderá ter acesso?

## 9. Qual tecnologia ou protocolo é responsável por atribuir dinaminacamente um endereço de DNS para um computador?

## 10. O que é uma zona DNS?

## 11. O que é uma zona reversa?

## 12. O que é um sistema hierárquico?

## 13. O que significa a expressão "resolver DNS"?

## 14. O que é um servidor DNS?

## 15. Servidor DNS é uma máquina física propriamente dita? Um roteador? O que é?

