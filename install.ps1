if (Test-Path "./vorxel") {
    Remove-Item "./vorxel" -Recurse -Force
}

New-Item -Path "./vorxel" -ItemType Directory | Out-Null
New-Item -Path "./vorxel/readme" -ItemType Directory | Out-Null
New-Item -Path "./vorxel/modules" -ItemType Directory | Out-Null
New-Item -Path "./vorxel/internal" -ItemType Directory | Out-Null

Invoke-WebRequest -Uri "https://vorxel.nether.click/db.json" -OutFile "db.json"
$db = Get-Content ".\db.json" -Raw | ConvertFrom-Json

Invoke-WebRequest -Uri "https://vorxel.nether.click/db2.json" -OutFile "db2.json"
$db2 = Get-Content ".\db2.json" -Raw | ConvertFrom-Json

Write-Host ""

Invoke-WebRequest -Uri "https://vorxel.nether.click/vorxel/vorxel.js" -OutFile "./vorxel/vorxel.js"
$MainFileSize = (Get-Item "./vorxel/vorxel.js").Length
Write-Host "vorxel.js ($MainFileSize bytes)"

Write-Host ""

foreach ($file in $db) {
 	$uri = "https://vorxel.nether.click/vorxel/modules/$($file.ToLower()).js"
   	$response = Invoke-WebRequest -Uri $uri -OutFile "./vorxel/modules/$($file.ToLower()).js"

	$fileName = "$($file.ToLower()).js"
	$fileSize = (Get-Item "./vorxel/modules/$($file.ToLower()).js").Length

	Write-Host "$fileName ($fileSize bytes)"
}

Write-Host ""

foreach ($file in $db) {
   	$uri = "https://vorxel.nether.click/vorxel/readme/$($file.ToLower()).md"
   	$response = Invoke-WebRequest -Uri $uri -OutFile "./vorxel/readme/$($file.ToLower()).md"

	$fileName = "$($file.ToLower()).md"
	$fileSize = (Get-Item "./vorxel/readme/$($file.ToLower()).md").Length

	Write-Host "$fileName ($fileSize bytes)"
}

Write-Host ""

foreach ($file in $db2) {
	$uri = "https://vorxel.nether.click/vorxel/internal/$($file.ToLower()).js"
	$response = Invoke-WebRequest -Uri $uri -OutFile "./vorxel/internal/$($file.ToLower()).js"

	$fileName = "$($file.ToLower()).js"
	$fileSize = (Get-Item "./vorxel/internal/$($file.ToLower()).js").Length

	Write-Host "$fileName ($fileSize bytes)"
}

Write-Host ""