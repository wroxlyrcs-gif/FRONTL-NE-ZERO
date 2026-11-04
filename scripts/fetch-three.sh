#!/bin/sh
# three.js r128 yerel kopyası (APK internetsiz çalışsın diye) / local copy of three.js r128 for offline APK
set -e
curl -L -o www/three.min.js https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
test -s www/three.min.js && echo "three.min.js OK"
