# Publicar no GitHub e Vercel

## Status local

- Git inicializado na branch `main`
- Commit inicial já criado
- `node_modules` e `.next` estão no `.gitignore`

## 1. Login no GitHub (uma vez)

Abra o **PowerShell** na pasta do projeto e execute:

```powershell
& "$env:USERPROFILE\gh-cli\gh.exe" auth login
```

Escolha:

1. **GitHub.com**
2. **HTTPS**
3. **Login with a web browser** (recomendado)

Copie o código, autorize no navegador e volte ao terminal.

## 2. Criar repositório e enviar código

```powershell
cd "c:\Users\yagho\OneDrive\Documentos\v0-site-academia-premium-main"
.\scripts\publish-github.ps1
```

Para outro nome de repositório:

```powershell
.\scripts\publish-github.ps1 -RepoName "site-academia-premium"
```

Repositório privado:

```powershell
.\scripts\publish-github.ps1 -Private
```

### Alternativa manual (sem script)

1. Crie um repositório vazio em https://github.com/new (sem README)
2. No terminal:

```powershell
$git = "$env:USERPROFILE\MinGit\cmd\git.exe"
cd "c:\Users\yagho\OneDrive\Documentos\v0-site-academia-premium-main"
& $git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
& $git push -u origin main
```

## 3. Deploy na Vercel

1. Acesse https://vercel.com e entre com a conta **GitHub**
2. **Add New Project** → importe o repositório
3. A Vercel detecta Next.js automaticamente
4. Clique em **Deploy**

Não é necessário configurar variáveis de ambiente para este site.

### Domínio

Após o deploy, você recebe um link `*.vercel.app`. Em **Settings → Domains** pode adicionar um domínio próprio.

## Ferramentas portáteis instaladas

| Ferramenta | Caminho |
|------------|---------|
| Git | `%USERPROFILE%\MinGit\cmd\git.exe` |
| GitHub CLI | `%USERPROFILE%\gh-cli\gh.exe` |

Opcional: instale [Git for Windows](https://git-scm.com/download/win) e [GitHub CLI](https://cli.github.com/) para usar `git` e `gh` em qualquer terminal sem caminho completo.
