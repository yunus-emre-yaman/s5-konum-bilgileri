# Konum Bilgileri

Üzerinde çalıştığınız bir web uygulamasına, kullanıcılarının lokasyonlarına özgü özellikler eklenmesi gündemde. Büyük özelliklere geçmeden önce, bir `Proof of Concept (PoC)`, bu özelliklere temel olabilecek küçük bir uygulama yapman ve çalışır hale getirmen istendi.

## Amaç

- `location_card.png` dosyasındakine benzer dinamik bir card oluşturmak.
- Önce IP adresini, sonra bunu kullanarak diğer bilgileri alman gerekiyor.
- `main.js` dosyasının en altında, verilen ve yazman istenen kodların birlikte nasıl çalışması beklendiğini görebilirsin.
- HTML ve CSS hazır, `main.js` dosyasında çalışman bekleniyor. Yönergeler yine `main.js` dosyasında.
- Unutma, takıldığın yerlerde terminaldeki test mesajlarında ipuçları bulabilirsin.

## 🚀 Projeye Başlama

### Adım 1: Projeyi Kendi Hesabınıza Kopyalayın

1. Bu sayfanın sağ üst köşesindeki **Fork** butonuna tıklayın
2. Kendi GitHub hesabınızda proje kopyası oluşacak

### Adım 2: Projeyi Bilgisayarınıza İndirin

Görseldeki adımları takip edin ya da terminali kullanabilirsiniz.

```bash
git clone [buraya-kendi-fork-linkinizi-yazın]
cd [proje-klasor-adi]
```

### Adım 3: Gerekli Kurulumları Yapın

Terminal açın ve sırasıyla şu komutları çalıştırın:

```bash
npm install
npm run c2w
```

> **💡 İpucu:** Bu komutlar gerekli paketleri yükler ve test sistemini başlatır.

### Adım 4: Projeyi Browserda Açın

Yeni bir terminal tabı açın ve şu komutu çalıştırın:

```bash
npm run dev
```

> **💡 İpucu:** Bu komut projeyi çalıştıracak. http://localhost:3003 adresinde projenizi görebilirsiniz.

## 📝 Geliştirme Süreci

### 0. Öğrenci numaranızı `student_id.txt` dosyasına yazın 

### 1. Testleri Takip Edin

- Terminal açık tutun ve test çıktılarını izleyin
- `main.js` dosyasını her kaydettiğinizde testler otomatik çalışır
- Başarılı testler ✅, başarısız testler ❌ ile gösterilir

### 2. Adım Adım İlerleyin

- Her küçük ilerleme sonrası değişiklikleri kaydedin
- Testlerin durumunu kontrol edin
- Bir özelliği tamamen bitirdikten sonra commit yapın

### 3. Düzenli Commit Yapın

GitHub Desktop uygulamasını kullanarak ilerlemenizi sıklıkla GitHub'a gönderin.
Ya da terminali kullanabilirsiniz:

```bash
git add .
git commit -m "Anlamlı bir commit mesajı"
git push origin main
```

## 🧪 Otomatik Değerlendirme Sistemi

Bu proje otomatik test sistemi ile gelir. Test sonuçları terminal penceresinde görünür. Kırmızı (❌) testleri yeşile (✅) çevirmeye odaklanın.

## 🆘 Sorun Giderme

### Yaygın Sorunlar:

- **npm komutları çalışmıyor:** Node.js kurulu olduğundan emin olun
- **Browserda preview çalışmıyor:** Terminal penceresini kapatıp `npm run dev` komutunu tekrar çalıştırın
- **Testler çalışmıyor:** Terminal penceresini kapatıp `npm run c2w` komutunu tekrar çalıştırın

### Yardım İçin:

1. Terminal hatasını tam olarak okuyun
2. Dosya yollarının doğru olduğunu kontrol edin
3. Değişiklikleri kaydettiğinizden emin olun

## 📋 Çalışma Akışı Özeti

1. ✅ Projeyi fork edin ve clone edin
2. ✅ `npm install` ve `npm run c2w` çalıştırın
3. ✅ `npm run dev` ile kodunuzu browserdan takip edin
4. ✅ Terminal'den test sonuçlarını takip edin
5. ✅ Düzenli olarak commit yapın
6. ✅ İlerleyişinizi GitHub'a push edin

**İyi çalışmalar! 🎨✨**
