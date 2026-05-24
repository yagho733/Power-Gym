@echo off
title POWER GYM - Servidor Local
cd /d "%~dp0"

set "NODE=C:\Program Files\nodejs"
if exist "%NODE%\node.exe" (
  set "PATH=%NODE%;%PATH%"
) else (
  echo Node.js nao encontrado. Instale em https://nodejs.org
  pause
  exit /b 1
)

echo.
echo ========================================
echo   POWER GYM - Iniciando servidor...
echo ========================================
echo.

if not exist "node_modules\" (
  echo Instalando dependencias pela primeira vez...
  call npm install
  if errorlevel 1 (
    echo Erro ao instalar dependencias.
    pause
    exit /b 1
  )
)

echo Abrindo http://localhost:3000 no navegador...
start "" "http://localhost:3000"

echo.
echo Servidor rodando. NAO FECHE esta janela.
echo Para parar: Ctrl+C
echo.

call npm run dev

pause
