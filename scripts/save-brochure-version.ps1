param(
  [Parameter(Mandatory = $false)]
  [string]$Source = "public/images/Treda_Stad_A5_Fram_NEW.html",

  [Parameter(Mandatory = $false)]
  [string]$OutDir = "public/images/versions",

  [Parameter(Mandatory = $false)]
  [string]$Label = ""
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -Path $Source)) {
  throw "Source file not found: $Source"
}

if (-not (Test-Path -Path $OutDir)) {
  New-Item -ItemType Directory -Path $OutDir -Force | Out-Null
}

$safeLabel = ($Label -replace "[^A-Za-z0-9_-]", "-").Trim("-")
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$baseName = [System.IO.Path]::GetFileNameWithoutExtension($Source)
$ext = [System.IO.Path]::GetExtension($Source)

if ([string]::IsNullOrWhiteSpace($safeLabel)) {
  $targetName = "${baseName}_${timestamp}${ext}"
} else {
  $targetName = "${baseName}_${timestamp}_${safeLabel}${ext}"
}

$targetPath = Join-Path $OutDir $targetName
Copy-Item -Path $Source -Destination $targetPath -Force

Write-Host "Saved version:"
Write-Host $targetPath
