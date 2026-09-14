Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile('C:/Users/Dhiraj Singh/.gemini/antigravity/brain/42bba3a0-08e6-4608-9085-70bf7cd851ea/.user_uploaded/media_1789147480083.png')
$pixel = $img.GetPixel($img.Width/2, $img.Height/2)
$hex = "#{0:X2}{1:X2}{2:X2}" -f $pixel.R, $pixel.G, $pixel.B
Write-Host "HEX: $hex"
