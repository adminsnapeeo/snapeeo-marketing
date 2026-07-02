param(
  [string]$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

$ErrorActionPreference = "Stop"

function Copy-AppToBranch {
  param(
    [string]$AppName,
    [string]$BranchName,
    [string]$TargetDir
  )

  $source = Join-Path $Root "apps\$AppName"
  $overlay = Join-Path $Root "scripts\overlays\$BranchName"
  $nginxSrc = Join-Path $Root "docker\nginx\spa.conf"

  if (Test-Path $TargetDir) {
    Remove-Item $TargetDir -Recurse -Force
  }
  New-Item -ItemType Directory -Path $TargetDir | Out-Null

  robocopy $source $TargetDir /E /XD node_modules dist .vite /XF package-lock.json | Out-Null
  if ($LASTEXITCODE -ge 8) { throw "robocopy failed for $AppName" }

  robocopy $overlay $TargetDir /E | Out-Null
  if ($LASTEXITCODE -ge 8) { throw "robocopy overlay failed for $BranchName" }

  $nginxDestDir = Join-Path $TargetDir "docker\nginx"
  New-Item -ItemType Directory -Path $nginxDestDir -Force | Out-Null
  Copy-Item $nginxSrc (Join-Path $nginxDestDir "spa.conf") -Force

  Push-Location $TargetDir
  npm install --package-lock-only 2>&1 | Out-Null
  npm install 2>&1 | Out-Null
  Pop-Location

  Write-Host "Built standalone $BranchName branch at $TargetDir"
}

$staging = Join-Path $Root "_branch-staging"
Copy-AppToBranch -AppName "web" -BranchName "platform" -TargetDir (Join-Path $staging "platform")
Copy-AppToBranch -AppName "admin" -BranchName "admin" -TargetDir (Join-Path $staging "admin")

Write-Host "Done. Staging ready in _branch-staging/"
