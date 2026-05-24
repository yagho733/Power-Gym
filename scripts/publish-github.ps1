# Publica o projeto no GitHub (requer: gh auth login feito antes)
# Uso: .\scripts\publish-github.ps1
#      .\scripts\publish-github.ps1 -RepoName "meu-repo" -Private

param(
    [string]$RepoName = "power-gym-site",
    [switch]$Private
)

$ErrorActionPreference = "Stop"
$git = "$env:USERPROFILE\MinGit\cmd\git.exe"
$gh = "$env:USERPROFILE\gh-cli\gh.exe"
$proj = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
if (Test-Path "$PSScriptRoot\..\package.json") {
    $proj = Resolve-Path "$PSScriptRoot\.."
}

if (-not (Test-Path $git)) {
    Write-Error "Git portátil não encontrado em $git. Execute a instalação ou instale Git for Windows."
}
if (-not (Test-Path $gh)) {
    Write-Error "GitHub CLI não encontrado em $gh."
}

Set-Location $proj

& $gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Faça login no GitHub primeiro:" -ForegroundColor Yellow
    Write-Host "  & `"$gh`" auth login" -ForegroundColor Cyan
    exit 1
}

$visibility = if ($Private) { "--private" } else { "--public" }

Write-Host "Criando repositório '$RepoName' e enviando código..." -ForegroundColor Green
& $gh repo create $RepoName $visibility --source=. --remote=origin --push

if ($LASTEXITCODE -eq 0) {
    $url = & $gh repo view --json url -q ".url"
    Write-Host "`nRepositório publicado: $url" -ForegroundColor Green
    Write-Host "Próximo passo — Vercel: https://vercel.com/new (importe este repositório)" -ForegroundColor Cyan
}
