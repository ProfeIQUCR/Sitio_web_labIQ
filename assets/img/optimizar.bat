@echo off
echo ============================================================
echo Optimizador de Imagenes - Sitio Web Lab
echo ============================================================
echo.

rem Moverse a la carpeta raiz del proyecto
cd /d "%~dp0..\.."

rem 1. Intentar ejecutar usando la ruta directa de Node.js
if exist "C:\Program Files\nodejs\node.exe" (
    "C:\Program Files\nodejs\node.exe" optimizar-imagenes.js
    goto :fin
)

rem 2. Intentar ejecutar si ya esta en el PATH del sistema
where node >nul 2>nul
if %errorlevel% equ 0 (
    node optimizar-imagenes.js
    goto :fin
)

rem 3. Si no se encuentra, mostrar error
echo Error: No se encontro Node.js instalado.
echo Por favor, asegurese de que Node.js este instalado.
echo.

:fin
echo ============================================================
echo Presiona cualquier tecla para cerrar esta ventana...
pause > nul
