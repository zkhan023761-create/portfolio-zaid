Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Arsha\.gemini\antigravity\brain\0c83c1a5-ebd1-47b8-aab3-e875a6d5dae6\.user_uploaded\media_1795237624948_0294bc93.png"
$src = [System.Drawing.Image]::FromFile($srcPath)

function Resize-Image($srcImage, $w, $h) {
    $dest = New-Object System.Drawing.Bitmap $w, $h
    $dest.SetResolution($srcImage.HorizontalResolution, $srcImage.VerticalResolution)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($srcImage, 0, 0, $w, $h)
    $g.Dispose()
    return $dest
}

$dirs = @(
    "C:\Users\Arsha\Documents\NIT\Coding\portfolio_zaid\assets",
    "C:\Users\Arsha\Documents\NIT\Coding\portfolio_zaid\public"
)

$sizes = @{
    "favicon-16x16.png" = @{ w = 16; h = 16 }
    "favicon-32x32.png" = @{ w = 32; h = 32 }
    "mstile-150x150.png" = @{ w = 150; h = 150 }
    "apple-touch-icon.png" = @{ w = 180; h = 180 }
    "android-chrome-192x192.png" = @{ w = 192; h = 192 }
    "logo.png" = @{ w = 388; h = 388 }
    "logo-raw.png" = @{ w = 388; h = 388 }
}

foreach ($targetDir in $dirs) {
    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }

    foreach ($name in $sizes.Keys) {
        $w = $sizes[$name].w
        $h = $sizes[$name].h
        $resized = Resize-Image $src $w $h
        $outPath = Join-Path $targetDir $name
        $resized.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $resized.Dispose()
        Write-Output "Saved $outPath ($w x $h)"
    }

    # Generate multi-size or 32x32 favicon.ico
    $bmp32 = Resize-Image $src 32 32
    $hIcon = $bmp32.GetHicon()
    $icon = [System.Drawing.Icon]::FromHandle($hIcon)
    $icoPath = Join-Path $targetDir "favicon.ico"
    $fs = [System.IO.File]::Create($icoPath)
    $icon.Save($fs)
    $fs.Close()
    $icon.Dispose()
    $bmp32.Dispose()
    Write-Output "Saved $icoPath"
}

$src.Dispose()
Write-Output "All favicons generated successfully!"
