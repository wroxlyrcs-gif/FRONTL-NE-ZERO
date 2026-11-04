# FRONTLINE: ZERO

3D FPS (three.js r128, tek dosya `www/index.html`) + Capacitor ile Android paketi.
Single-file three.js FPS wrapped for Android with Capacitor.

## DURUM / STATUS (dürüst özet / honest summary)
- Oyun tarayıcıda çalışacak şekilde yazıldı. **APK bu paketle üretilmedi** (üretim ortamında Android SDK ve ağ yoktu); aşağıdaki komutlar **denenmedi**.
- The game runs in a browser. **No APK was built here** (no Android SDK/network in the build environment); the commands below are **untested**.
- Çevrim içi çok oyunculu **yok**. / Online multiplayer is **not implemented**.

## Hızlı deneme / Quick try (APK'sız)
`www/` klasörünü bir web sunucusundan açın (`npx serve www`) veya `frontline-zero.cdn.html` dosyasını tarayıcıda açın (three.js'i CDN'den alır).

## APK derleme / Build the APK
Gereksinimler / Requirements: Node 18+, JDK 17, Android Studio veya Android SDK (`ANDROID_HOME`).
1. `npm install`
2. `sh scripts/fetch-three.sh`  (www/three.min.js indirir / downloads three.js r128 — APK internetsiz açılsın diye şart / required for offline)
3. `npx cap add android && node scripts/patch-android.js`  (yatay + tam ekran / landscape + fullscreen)
4. `npx cap sync android && cd android && ./gradlew assembleDebug`
5. APK: `android/app/build/outputs/apk/debug/app-debug.apk`  (adı / name: FRONTLINE_ZERO.apk)

Hepsi tek komutla / all in one: `sh scripts/build-apk.sh`
Not: imzasız debug APK'dır; telefonda "bilinmeyen kaynak" izni gerekir. / Debug-signed APK; enable "install unknown apps".

## Dosyalar / Files
- `www/index.html` oyun (yerel three.min.js ister) / game
- `frontline-zero.cdn.html` CDN sürümü / CDN version
- `capacitor.config.json`, `package.json`, `scripts/` derleme / build

## Ayrıntılı belgeler / Docs
`docs/CONTROLS.md` (mobil kontroller), `docs/CONTENT.md` (harita, silah, ekonomi), `docs/TESTING.md` (neyin test edildiği/edilmediği), `docs/CHANGELOG.md`, `docs/MODES.md` (zaman/harita/mod + donma düzeltmesi).
