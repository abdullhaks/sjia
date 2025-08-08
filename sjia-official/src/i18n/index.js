import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero_head: "WE ENSURE A BETTER SOCIETY.",
      hero_ayah: "“Are those who know equal to those who do not know?” Only those endowed with understanding truly reflect.",
    }
  },
  ml: {
    translation: {
      hero_head: "ഞങ്ങൾ  ഒരു ഉന്നത സമൂഹത്തെ സൃഷ്ടിക്കുന്നു",
      hero_ayah: "പറയുക: ‘അറിവുള്ളവരും അറിവില്ലാത്തവരും തുല്യരാണോ?’ ബുദ്ധിയുള്ളവർ മാത്രമാണ് ശരിക്കും ചിന്തിക്കുന്നത്.",
    }
  },
  ur: {
    translation: {
      hero_head:"ہم ایک بہتر معاشرے کی ضمانت دیتے ہیں",
      hero_ayah: "کہو: ‘کیا وہ جو جانتے ہیں اور وہ جو نہیں جانتے برابر ہیں؟’ صرف عقلمند لوگ ہی نصیحت حاصل کرتے ہیں۔"
    }
  },
  ar: {
    translation: {
      hero_head:"نحن نضمن مجتمعًا أفضل",
      hero_ayah: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ"

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;