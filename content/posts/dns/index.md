+++
title = "DNS"
date = "2019-03-11"
description = "Sample article showcasing basic styling and formatting for HTML elements."
weight = 1
+++

DNS (Domais Name System) é um sistema hierárquico. Entre outras palavras, é um serviço (`porta 53`) que traduz nomes de domínio para endereços de IP e vice-versa. Esses tais __nomes de domínio__ podem referir-se comumente a endereços de websites (URLs).

Em **segurança da informação**, *resolução reversa* (ou *reverse DNS lookup*) é o processo de **descobrir o nome de domínio associado a um endereço IP** — o contrário da resolução DNS comum, que traduz domínio → IP.

Aqui vai uma explicação clara:

### **O que é a resolução reversa**

É uma consulta ao DNS para verificar qual domínio (ex.: `exemplo.com`) está registrado para um determinado endereço IP (ex.: `192.0.2.10`).
Isso é feito acessando registros especiais chamados **PTR (Pointer Records)**.

### **Por que isso é importante em segurança**

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

### **2. Detecção de comportamento malicioso**

Quando um IP aparece em logs de firewall, IDS/IPS ou servidores, a resolução reversa pode revelar se:

* O host pertence a um provedor associado a botnets.
* O domínio é recém-criado, genérico ou sem reputação.
* Há inconsistência entre o host declarado e o domínio real — sinal comum de spoofing ou atividade fraudulenta.

### **3. Validação e confiança em serviços críticos**

Em muitos protocolos, especialmente e-mail (SMTP), a resolução reversa é usada como medida de segurança:

* Servidores só aceitam conexões de IPs cujo **PTR (reverse)** combina com o **A record (forward)**.
* Falta de reverse DNS é frequentemente tratada como indicador de spam, phishing ou servidores mal configurados.

---

Em resumo:
**Localizar o domínio de um IP ajuda a verificar legitimidade, identificar anomalias e reduzir riscos**, tornando a análise de incidentes e o monitoramento de redes muito mais eficazes.

Se quiser, posso explicar como validar se um PTR é confiável ou como usar ferramentas como `nslookup`, `dig` e `host` para fazer essas consultas.


This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.
<!--more-->

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
### H4
#### H5
##### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

![Terminal Theme Preview](/img/terminal-theme.png)

### Figure with a caption

{{< figure src="/img/terminal-theme.png" alt="Terminal Theme Preview" position="center" caption="Terminal Theme Preview" captionPosition="center" >}}

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Buttons and links

<button>Button</button>
<a href="">Link</a>
<a href="" class="button inline">Link</a>

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## Forms

<fieldset>
  <input type="text" placeholder="Type something" /><br />
  <input type="number" placeholder="Insert number" /><br />
  <input type="text" value="Input value" /><br />
  <select>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select><br />
  <textarea placeholder="Insert a comment..."></textarea><br />
  <input type="checkbox" /> I understand<br />
  <button type="submi">Submit</button>
</fieldset>

## Code Blocks

### Code block with backticks

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### Code block indented with four spaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Code block with Hugo's internal highlight shortcode

{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

### Code block with custom built-in `{{ < code > }}` shortcode

{{< code title="Hey, this is a code block title" language="css" >}}
pre {
  background: #1a1a1d;
  padding: 20px;
  border-radius: 8px;
  font-size: 1rem;
  overflow: auto;

  @media (--phone) {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  code {
    background: none !important;
    color: #ccc;
    padding: 0;
    font-size: inherit;
  }
}
{{< /code >}}

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

* List item
* Another item
* And another item

### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
