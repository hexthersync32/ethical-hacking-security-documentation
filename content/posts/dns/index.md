+++
title = "DNS"
date = "2017-09-29"
author = "#dns #protocol"
description = "Protocol for translating domain names to IP addresses."
weight = 7
+++

![DNS](https://www.indusface.com/wp-content/uploads/2024/10/DNS-lookup-process-.png)

# 1. Definition:

DNS (Domais Name System) é um sistema hierárquico. Entre outras palavras, é um serviço (`porta 53`) que traduz nomes de domínio para endereços de IP e vice-versa. 

Esses tais __nomes de domínio__ podem referir-se comumente a endereços de websites (URLs).

---

# 2. Reverse lookup

Em **segurança da informação**, *resolução reversa* (ou *reverse DNS lookup*) é o processo de **descobrir o nome de domínio associado a um endereço IP** — o contrário da resolução DNS comum, que traduz domínio → IP.

É uma consulta ao DNS para verificar qual domínio (ex.: `exemplo.com`) está registrado para um determinado endereço IP (ex.: `192.0.2.10`).

Isso é feito acessando registros especiais chamados **PTR (Pointer Records)**.

![Terminal Theme Preview](https://www.whatismyip.com/static/662cddb98cbb8537a6575bc1bb19c9bb/reverse-dns-lookup-diagram.webp)

A **resolução reversa** é justamente o ato de **descobrir qual domínio (ou hostname) está associado a um determinado endereço IP**.

Em termos simples:

|   **Resolução normal**      |  **Resolução reversa** |
| ---------------- | ------------  |
| domínio → IP |   IP → domínio   |

## 2. 1. Por que isso é importante em segurança?

1. **Verificação de legitimidade e identificação:**
   Ajuda a confirmar se um IP realmente pertence ao domínio que ele afirma representar — útil para validar servidores, identificar origem de tráfego e detectar disfarces.

2. **Detecção de atividades suspeitas:**
   Em logs de firewall, IDS/IPS ou servidores, a resolução reversa auxilia a reconhecer se um IP está associado a hosts legítimos ou a fontes potencialmente maliciosas.

3. **Autenticação e reputação em serviços críticos:**
   Protocolos como SMTP usam reverse DNS para verificar se um servidor de e-mail é confiável. Ausência ou inconsistência de PTR é frequentemente sinal de spam ou spoofing.

## 2.2. Vantagens de localizar um domínio a partir de um IP:

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

---

# Registros DNS

1. *A:* IPv4

2. *AAAA:* IPv6

3. *CNAME:* Canonical Name

4. *MX:* Mail Exchange

5. *NS:* Name Server

6. *TXT:* Text

7. *SRV:* Service

8. *PTR:* Pointer

---

# FAQ
## 1. Do ponto de vista técnico, DNS é realmente obrigatório para o tráfego de rede?

> O DNS não é o motor da rede, mas é o mapa que torna o uso da rede viável no mundo real.

Do ponto de vista estritamente técnico, DNS não é obrigatório para que o tráfego de rede aconteça. A comunicação na Internet ocorre usando endereços IP, não nomes. Se um computador já souber o IP de destino, ele consegue enviar pacotes normalmente, sem consultar nenhum servidor DNS.

Uma boa analogia é o GPS: para dirigir até um lugar, o carro não precisa saber o nome da rua, apenas as coordenadas exatas. O nome da rua (DNS) ajuda o humano, mas o carro pode ir direto se as coordenadas já forem conhecidas. Da mesma forma, a rede funciona apenas com IPs.

O DNS entra como uma camada de conveniência e escalabilidade, não como um requisito físico do tráfego. Memorizar IPs numéricos seria como tentar ligar para pessoas decorando apenas números longos, sem uma agenda de contatos. 
Funciona, mas é impraticável em larga escala.


## 2. Quando um cliente não conhece o endereço IP do destino, então neste caso o DNS configura-se como uso obrigatório?

> DNS não é obrigatório para o tráfego, mas é obrigatório para transformar nomes em tráfego.

Do ponto de vista lógico e funcional, sim — o DNS torna-se obrigatório nesse cenário, mas com uma nuance importante.

Se o cliente não conhece o endereço IP e só possui um nome (como www.exemplo.com), ele não tem como iniciar a comunicação sem antes traduzi-lo para um IP. É como querer enviar uma carta sabendo apenas o nome da pessoa, mas não o endereço: o correio só consegue entregar depois que alguém consulta uma lista que diga onde essa pessoa mora. Essa “lista” é o DNS.

Tecnicamente, o tráfego ainda não começa enquanto o DNS não responder. Não é que o DNS participe da conversa em si; ele é uma etapa anterior, um serviço de apoio que viabiliza a conversa. O diálogo real ocorre depois, diretamente entre os IPs.

A nuance é que o DNS não é a única forma possível de resolver nomes. Arquivos locais (```/etc/hosts```), caches ou sistemas proprietários poderiam cumprir esse papel. Mas algum mecanismo de resolução é indispensável. Sem ele, é como tentar ligar um telefone sem saber o número — a chamada simplesmente não acontece.

## 2. Por que a configuração de rede dos sistemas operacionais necessita de dois endereços de DNS (primário e secundário)?

> Dois endereços de DNS existem para continuidade do serviço, não porque o DNS precise de pares, mas porque a rede não pode depender de um único ponto de falha. 

Porque o DNS é um serviço, e todo serviço em rede pode falhar. Os dois endereços existem por resiliência, não por desempenho.

Pense no DNS como uma central de informações. Se você ligar para um único atendente e ele estiver indisponível, você fica sem resposta. Ao ter um atendente reserva, o sistema garante que a informação continue acessível. O DNS primário é a primeira central consultada; o secundário é o plano B automático.

Tecnicamente, o sistema operacional tenta primeiro o DNS primário. Se ele não responder dentro de um tempo limite, a consulta é redirecionada ao DNS secundário. Não há divisão de carga nem cooperação entre eles no cliente comum — é failover, não balanceamento.

Isso é importante porque, sem DNS, muitos serviços “somem” instantaneamente, mesmo com a rede funcionando. É como ter energia elétrica em casa, mas perder a lista de contatos: a infraestrutura está lá, mas você não consegue chegar a lugar nenhum pelo nome.

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

## 16. Independente de minha m´qauina estar conectada em uma rede cabeada ou sem fio, existe algum utilitário via Linux que revela qual servidor DNS estou utilizando ou qual por servidor DNS os pacotes gerados em minha máquina passam até chegar ao destino?

## 16. O que são registros DNS?

## 17. Qual a função de um registro DNS?

## 18. Por que um endereço de DNS é tão crucial durante um pentest?