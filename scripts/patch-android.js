// AndroidManifest: yatay ekran + tam ekran / landscape + fullscreen
const fs=require('fs'),p='android/app/src/main/AndroidManifest.xml';
let m=fs.readFileSync(p,'utf8');
if(!m.includes('sensorLandscape'))m=m.replace('<activity','<activity android:screenOrientation="sensorLandscape" android:theme="@style/AppTheme.NoActionBarLaunch"');
fs.writeFileSync(p,m);console.log('manifest patched');
const j='android/app/src/main/java/com/frontline/zero/MainActivity.java';
if(fs.existsSync(j)){let c=fs.readFileSync(j,'utf8');if(!c.includes('SYSTEM_UI_FLAG_HIDE_NAVIGATION')){c=c.replace(/public class MainActivity extends BridgeActivity \{\s*\}/,`public class MainActivity extends BridgeActivity {
  @Override public void onWindowFocusChanged(boolean f){super.onWindowFocusChanged(f);if(f)getWindow().getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY|android.view.View.SYSTEM_UI_FLAG_FULLSCREEN|android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION|android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE|android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION|android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);}
}`);fs.writeFileSync(j,c);console.log('MainActivity patched')}}
