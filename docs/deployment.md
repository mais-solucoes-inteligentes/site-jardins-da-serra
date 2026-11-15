# Guia de Deploy em Produção - Jardins da Serra (Vercel)

**Domínio Oficial:** `https://jardinsdaserra.com.br`  
**Repositório GitHub:** `https://github.com/mais-solucoes-inteligentes/site-jardins-da-serra`  
**Plataforma de Hospedagem:** Vercel  
**Framework:** Next.js 14 (App Router)  

---

## 1. Conexão e Deploy na Vercel (Recomendado via GitHub)

O método mais estável e recomendado é a integração direta entre a Vercel e o GitHub, pois ativa o deploy contínuo (qualquer novo commit na `main` atualiza o site automaticamente).

### Passo a Passo:
1. Acesse [vercel.com](https://vercel.com) e faça login (recomendado: **Continue with GitHub**).
2. No painel inicial (Dashboard), clique no botão **"Add New..."** e selecione **"Project"**.
3. Na lista de repositórios do GitHub, localize e clique em **"Import"** no repositório:
   `mais-solucoes-inteligentes/site-jardins-da-serra`
4. A Vercel detectará automaticamente as configurações de Next.js:
   * **Framework Preset:** `Next.js`
   * **Root Directory:** `./`
   * **Build Command:** `next build`
   * **Output Directory:** `.next`
5. Clique em **"Deploy"**.
6. Em cerca de 1 a 2 minutos, o site estará publicado em um domínio provisório (ex: `site-jardins-da-serra.vercel.app`).

---

## 2. Configuração do Domínio Personalizado: `jardinsdaserra.com.br`

Após o deploy inicial na Vercel:

1. No painel do seu projeto na Vercel, acesse **Settings** > **Domains**.
2. Digite `jardinsdaserra.com.br` e clique em **"Add"**.
3. A Vercel recomendará adicionar também o redirecionamento automático de `www.jardinsdaserra.com.br` para `jardinsdaserra.com.br`. Selecione a opção recomendada.

---

## 3. Configuração de DNS no Provedor (ex: Registro.br)

Acesse a zona de DNS onde o domínio `jardinsdaserra.com.br` está registrado (ex: [registro.br](https://registro.br)) e configure as duas entradas abaixo:

### Entrada 1: Domínio Raiz (Apex)
* **Tipo:** `A`
* **Nome / Host:** `@` (ou deixe em branco se o painel exigir)
* **Destino / IP:** `76.76.21.21`
* **TTL:** Padrão (ou 3600)

### Entrada 2: Subdomínio WWW
* **Tipo:** `CNAME`
* **Nome / Host:** `www`
* **Destino:** `cname.vercel-dns.com`
* **TTL:** Padrão (ou 3600)

---

## 4. Certificado SSL / HTTPS Automático

Assim que os registros de DNS forem propagados (normalmente entre 15 minutos e 2 horas):
* A Vercel gerará o certificado de segurança SSL (Let's Encrypt) automaticamente.
* O site passará a responder com cadeado de segurança em:
  `https://jardinsdaserra.com.br` e `https://www.jardinsdaserra.com.br`.

