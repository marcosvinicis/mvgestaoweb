# Fluxo Operacional – Protocolo CORE MV™

Cada projeto deve seguir as etapas abaixo.
Nenhuma etapa pode pular validação.
Nenhuma etapa pode ignorar o arquivo mv-seo-conversion-protocol.md.

---

## /base

Criar estrutura inicial:

public/
 ├── assets/
 │   ├── css/
 │   ├── js/
 │   ├── img/
 │   └── fonts/
 ├── blog/
 ├── data/
 ├── legal/

Criar também:
- robots.txt
- sitemap.xml
- _headers
- data/config.json

Confirmar estrutura antes de avançar.

---

## /copy

Gerar copy com:

- Palavra-chave principal definida
- Title (até 60 caracteres)
- Meta description (até 160 caracteres)
- Estrutura obrigatória:

Hero → Problema → Solução → Prova → FAQ → CTA

Salvar em drafts/copy-home.md

Aguardar aprovação do usuário antes de avançar.

---

## /design

Criar:

public/assets/css/style.css

Regras:

- Variáveis CSS em :root
- Mobile-first
- Dimensões fixas para imagens (evitar CLS)
- Fontes locais (sem import externo)
- Performance como prioridade

Confirmar antes de avançar.

---

## /layout

Criar:

public/index.html

Regras:

- Estrutura semântica completa
- Apenas um H1
- Espaço reservado para JSON-LD no head
- Hero com CTA visível acima da dobra
- Footer estratégico conforme protocolo

Confirmar hierarquia antes de avançar.

---

## /desenvolver

- Injetar copy no HTML
- Inserir Schema.org JSON-LD
- Configurar formulário Web3Forms
- Criar public/assets/js/main.js com defer
- Inserir assinatura estratégica no footer:
  "Estrutura Digital desenvolvida por MV Gestão Web – Marketing Digital em Maringá"
- Executar checklist completo do Protocolo CORE MV™

Confirmar antes de publicar.

---

## /publicar

Executar:

git add .
git commit -m "Deploy Protocolo CORE MV™"
git push

Confirmar envio para Cloudflare Pages.