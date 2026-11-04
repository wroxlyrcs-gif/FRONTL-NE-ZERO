#!/bin/sh
# Gereken: Node 18+, JDK 17, Android SDK (ANDROID_HOME). / Needs Node 18+, JDK 17, Android SDK.
set -e
npm install
sh scripts/fetch-three.sh
[ -d android ] || npm run android:add
npm run android:sync
cd android && ./gradlew assembleDebug && cd ..
cp android/app/build/outputs/apk/debug/app-debug.apk FRONTLINE_ZERO.apk
echo "APK hazır / ready: FRONTLINE_ZERO.apk"
