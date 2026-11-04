Zaman, harita, mod / Time, maps, modes
Zaman: Gündüz, Gece, Gün Batımı, Şafak (gökyüzü, güneş/ay, sis, ışık rengi farklı; gecede yıldız, lambalarda parıltı). Haritalar (9): Çöl Üssü, Terk Edilmiş Şehir, Karlı Dağ, Askeri Fabrika, Orman Kampı, Şehir Sokakları, Konteyner Limanı, Yeraltı Üssü, Sanayi Bölgesi (klasik). Hepsi 4 zamanda çalışır. Modlar: Team Deathmatch (50), Free For All (20 eleme), Capture The Flag (3 bayrak), Domination (3 bölge, 100 puan), Gun Game (10 silah), Sniper Mode, Pistol Only, Survival (10 dalga, 3 can), Eleme, Antrenman. Dost ateşi yok (FFA/Gun Game'de herkes düşman). Her modun kendi skor, kazanma/kaybetme ve sonuç ekranı var. Harita kartı görselleri gerçek yerleşimden üretilen kuşbakışı önizlemelerdir; arka planda seçilen harita ve zaman gerçek 3B olarak döner.
Donma düzeltmesi / Freeze fix
Gece/gün batımı/şafakta eklenen gerçek zamanlı ışıklar kaldırıldı: ışık sayısı her zaman sabit (güneş, gökyüzü ışığı, 2 takım ışığı); zaman değişince shader yeniden derlenmez.
Gece lambaları ışık yerine ışıksız parıltı yüzeyleriyle çiziliyor.
Harita değişiminde geometri/materyal serbest bırakılıyor (bellek sızıntısı yok); aynı harita+zaman tekrar yüklenmiyor; geometri ve materyaller önbelleğe alınıyor.
Gece gölge haritası yarı çözünürlük; düşük grafik ön ayarlarında ışık/gölge kapalı.
FPS 24'ün altında 3 sn kalırsa grafik otomatik düşürülür (gölge, çözünürlük, görüş mesafesi, efekt).
