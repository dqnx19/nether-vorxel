if (Test-Path "./vorxel") {
    Remove-Item "./vorxel" -Recurse -Force
}

New-Item -Path "./vorxel" -ItemType Directory | Out-Null
New-Item -Path "./vorxel/readme" -ItemType Directory | Out-Null
New-Item -Path "./vorxel/modules" -ItemType Directory | Out-Null
New-Item -Path "./vorxel/internal" -ItemType Directory | Out-Null
New-Item -Path "./vorxel/lib" -ItemType Directory | Out-Null

Invoke-WebRequest -Uri "https://vorxel.nether.click/vorxel/modules.json" -OutFile "./vorxel/modules.json"
$modules = Get-Content "./vorxel/modules.json" -Raw | ConvertFrom-Json

Invoke-WebRequest -Uri "https://vorxel.nether.click/vorxel/internal.json" -OutFile "./vorxel/internal.json"
$internal = Get-Content "./vorxel/internal.json" -Raw | ConvertFrom-Json

Invoke-WebRequest -Uri "https://vorxel.nether.click/vorxel/lib.json" -OutFile "./vorxel/lib.json"
$lib = Get-Content "./vorxel/lib.json" -Raw | ConvertFrom-Json

Write-Host ""

Invoke-WebRequest -Uri "https://vorxel.nether.click/vorxel/vorxel.js" -OutFile "./vorxel/vorxel.js"
$MainFileSize = (Get-Item "./vorxel/vorxel.js").Length
Write-Host "vorxel.js ($MainFileSize bytes)"

Write-Host ""

foreach ($file in $modules) {
 	$uri = "https://vorxel.nether.click/vorxel/modules/$($file.ToLower()).js"
   	Invoke-WebRequest -Uri $uri -OutFile "./vorxel/modules/$($file.ToLower()).js"

	$fileName = "$($file.ToLower()).js"
	$fileSize = (Get-Item "./vorxel/modules/$($file.ToLower()).js").Length

	Write-Host "$fileName ($fileSize bytes)"
}

Write-Host ""

foreach ($file in $modules) {
   	$uri = "https://vorxel.nether.click/vorxel/readme/$($file.ToLower()).md"
   	Invoke-WebRequest -Uri $uri -OutFile "./vorxel/readme/$($file.ToLower()).md"

	$fileName = "$($file.ToLower()).md"
	$fileSize = (Get-Item "./vorxel/readme/$($file.ToLower()).md").Length

	Write-Host "$fileName ($fileSize bytes)"
}

Write-Host ""

foreach ($file in $internal) {
	$uri = "https://vorxel.nether.click/vorxel/internal/$($file.ToLower()).js"
	Invoke-WebRequest -Uri $uri -OutFile "./vorxel/internal/$($file.ToLower()).js"

	$fileName = "$($file.ToLower()).js"
	$fileSize = (Get-Item "./vorxel/internal/$($file.ToLower()).js").Length

	Write-Host "$fileName ($fileSize bytes)"
}

Write-Host "";

foreach ($file in $lib) {
	$uri = "https://vorxel.nether.click/vorxel/lib/$($file.ToLower()).js"
	Invoke-WebRequest -Uri $uri -OutFile "./vorxel/lib/$($file.ToLower()).js"

	$fileName = "$($file.ToLower()).js"
	$fileSize = (Get-Item "./vorxel/lib/$($file.ToLower()).js").Length

	Write-Host "$fileName ($fileSize bytes)"
}

Write-Host ""