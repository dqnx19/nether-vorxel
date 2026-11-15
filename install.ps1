if (Test-Path "./vorxel") {
    Remove-Item "./vorxel" -Recurse -Force
}

New-Item -Path "./vorxel" -ItemType Directory | Out-Null
New-Item -Path "./vorxel/readme" -ItemType Directory | Out-Null
New-Item -Path "./vorxel/modules" -ItemType Directory | Out-Null

Invoke-WebRequest -Uri "https://vorxel.nether.click/db.json" -OutFile "db.json"
$db = Get-Content ".\db.json" -Raw | ConvertFrom-Json

Write-Host ""

foreach ($file in $db) {
 	$uri = "https://vorxel.nether.click/modules/$($file.ToLower()).js"
   	$response = Invoke-WebRequest -Uri $uri -OutFile "./vorxel/modules/${file}.js"

	$fileName = "${file}.js"
	$fileSize = (Get-Item "./vorxel/modules/${file}.js").Length

	Write-Host "$fileName ($fileSize bytes)"
}

Write-Host ""

foreach ($file in $db) {
   	$uri = "https://vorxel.nether.click/readme/$($file.ToLower()).md"
   	$response = Invoke-WebRequest -Uri $uri -OutFile "./vorxel/readme/${file}.md"

	$fileName = "${file}.md"
	$fileSize = (Get-Item "./vorxel/readme/${file}.md").Length

	Write-Host "$fileName ($fileSize bytes)"
}

Write-Host ""