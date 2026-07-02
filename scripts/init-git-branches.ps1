param(
  [string]$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path,
  [switch]$Push
)

$ErrorActionPreference = "Stop"

function Invoke-Git {
  param([string[]]$GitArgs)
  $prev = $ErrorActionPreference
  $ErrorActionPreference = 'Continue'
  $output = git @GitArgs 2>&1
  $code = $LASTEXITCODE
  $ErrorActionPreference = $prev
  if ($code -ne 0) {
    throw "git $($GitArgs -join ' ') failed (exit $code): $output"
  }
  return $output
}

$staging = Join-Path $Root "_branch-staging"
$platformDir = Join-Path $staging "platform"
$adminDir = Join-Path $staging "admin"

if (-not (Test-Path $platformDir) -or -not (Test-Path $adminDir)) {
  & (Join-Path $Root "scripts\prepare-branch-staging.ps1")
}

function Clear-RootExcept {
  param([string[]]$Keep)

  Get-ChildItem $Root -Force | Where-Object {
    $_.Name -notin $Keep
  } | ForEach-Object {
    Remove-Item $_.FullName -Recurse -Force -ErrorAction SilentlyContinue
  }
}

function Sync-ToRoot {
  param([string]$SourceDir)

  Clear-RootExcept -Keep @('.git', '_branch-staging', 'scripts')
  robocopy $SourceDir $Root /E /XD node_modules dist .vite | Out-Null
  if ($LASTEXITCODE -ge 8) { throw "robocopy to root failed" }
}

Push-Location $Root

if (-not (Test-Path ".git")) {
  Invoke-Git @('init')
}

Clear-RootExcept -Keep @('.git', '_branch-staging', 'scripts')
Sync-ToRoot -SourceDir $platformDir

Invoke-Git @('checkout', '-B', 'platform')
Invoke-Git @('add', '-A')

$status = Invoke-Git @('status', '--porcelain')
if ($status) {
  Invoke-Git @('commit', '-m', 'Add Snapeeo web app (platform branch)')
}

Invoke-Git @('checkout', '--orphan', 'admin')
Invoke-Git @('reset', '--hard')
Clear-RootExcept -Keep @('.git', '_branch-staging', 'scripts')
Sync-ToRoot -SourceDir $adminDir
Invoke-Git @('add', '-A')

$status = Invoke-Git @('status', '--porcelain')
if ($status) {
  Invoke-Git @('commit', '-m', 'Add Snapeeo admin app (admin branch)')
}

Invoke-Git @('checkout', 'platform')

try {
  Invoke-Git @('remote', 'get-url', 'origin') | Out-Null
} catch {
  Invoke-Git @('remote', 'add', 'origin', 'https://github.com/adminsnapeeo/snapeeo-marketing.git')
}

Pop-Location

Write-Host ""
Write-Host "Branches ready:"
Write-Host "  platform  -> web app (app.snapeeo.com)"
Write-Host "  admin     -> admin app (admin.snapeeo.com)"

if ($Push) {
  Push-Location $Root
  Invoke-Git @('fetch', 'origin')
  Invoke-Git @('push', '-u', 'origin', 'platform')
  Invoke-Git @('push', '-u', 'origin', 'admin')
  Pop-Location
  Write-Host "Pushed platform and admin to origin."
} else {
  Write-Host ""
  Write-Host "Push with:"
  Write-Host "  git push -u origin platform"
  Write-Host "  git push -u origin admin"
}
