var dataReload = document.querySelectorAll("[data-reload]");

var data = {
  ar:
  {
    about_us: `من نحن`,
    our_team: `فريقنا`,
    prod: `منتجاتنا`,
    contact_us: `اتصل بنا`,
    skip_nav:`انتقل إلى المحتوى`,
    Echo:`إيكو+`,
    Argo:`أرغو+`,
    Future:`مشاريع مستقبلية`,
    Echotxt:`قفاز ذكي يحتوي على<br> مجموعة من المستشعرات<br> التي تحلل وتحول<br> لغة الاشارة<br> إلى اللغة العربية<br> بالشكل المحكي والمكتوب`,
    Argotxt:`كف مخصص للضرير / للضرير والأصم<br> يتكون من حساسات<br> تعمل باللمس<br> على الوجه الداخلي<br> لراحة اليد<br> بينما يحتوي على<br> الجهة الأخرى<br> محركات اهتزازية صغيرة<br> لضمان التواصل<br> مع و من<br> المحيط الخارجي`,
    Future_1:`أطراف صناعية`,
    Future_2:`أداة غير جراحية<br> لتخفيف الضغط<br> على العمود الفقري`,
    goal:`نهدف <span>لتمكين</span> كل شخص من <span>ذوي الاحتياجات الخاصة</span> ليشعر بأنه <span>جزء</span> من <span>نسيج المجتمع</span><br> و أنه <span>يستطيع</span> أن <span>يختبر العالم</span> من <span>دون عوائق</span>`,
    selected_lang: `العربية <span class="flag-icon flag-icon-ae"></span>`,
    li_ar: `العربية`,
    li_nl: `الهولندية`,
    li_en: `الإنجليزية`,
    li_fr: `الفرنسية`,
    li_de: `الألمانية`,
    cright: `جميع الحقوق محفوظة  شركة سيريوس`
  },
  nl:
  {
    about_us: `Over Ons`,
    our_team: `Ons Team`,
    prod: `Producten`,
    contact_us: `Contact Ons`,
    skip_nav:`Navigatie Overslaan`,
    Echo:`Echo+`,
    Argo:`Argo+`,
    Future:`Future Plans`,
    Echotxt:``,
    Argotxt:``,
    Future_1:``,
    Future_2:``,
    goal:``,
    selected_lang: `<span class="flag-icon flag-icon-nl"></span> Nederlands`,
    li_ar: `Arabisch`,
    li_nl: `Nederlands`,
    li_en: `Engels`,
    li_fr: `Frans`,
    li_de: `Duits`,
    cright: `Sirius, Ltd. Alle rechten voorbehouden.`
  },
  en:
  {
    about_us: `About Us`,
    our_team: `Our Team`,
    prod: `Products`,
    contact_us: `Contact Us`,
    skip_nav:`Skip Navigation`,
    Echo:`Echo+`,
    Argo:`Argo+`,
    Future:`Future Plans`,
    Echotxt:`It is a Glove containing a set of sensors to analyze and translate "Sign Language" to spoken and written Arabic Language.`,
    Argotxt:`It is a Glove for the blind/blind-deaf people which contains a range of touch sensors at the front side and a small vibrating motor from the outside to ensure communication with the near & far people around them vice versa.`,
    Future_1:`Artificial Limbs`,
    Future_2:`Non-Surgical Spinal Decompression Treatment`,
    goal:`Our <span>Goal</span> is to <span>Empower</span> every <span>Disabled Person</span> to feel <span>Socially Integrated</span> & fully <span>Experience</span> the <span>World</span> without <span>Barriers.</span>`,
    selected_lang: `<span class="flag-icon flag-icon-gb"></span> English`,
    li_ar: `Arabic`,
    li_nl: `Dutch`,
    li_en: `English`,
    li_fr: `French`,
    li_de: `German`,
    cright: `Sirius, Ltd. All Rights Reserved.`
  },
  fr:
  {
    about_us: `Nous connaître`,
    our_team: `Notre équipe`,
    prod: `Nos produits`,
    contact_us: `Contactez-nous`,
    skip_nav:`Sautez la navigation`,
    Echo:`Echo+`,
    Argo:`Argo+`,
    Future:`Future Plans`,
    Echotxt:`C'est un gant contenant un ensemble de capteurs pour analyser et traduire la «langue des signes» en langue arabe parlée et écrite.`,
    Argotxt:`C'est un gant pour les personnes aveugles / aveugles-sourdes qui contient une gamme de capteurs tactiles à l'avant et un petit moteur vibrant de l'extérieur pour assurer la communication avec les personnes proches et éloignées autour d'eux vice versa.`,
    Future_1:`Membres artificiels`,
    Future_2:`Traitement de décompression vertébrale non chirurgicale`,
    goal:`Notre <span> objectif </span> est de <span> permettre </span> à chaque <span> personne handicapée </span> de se sentir <span> intégrée socialement </span> et d’expérimenter pleinement </span> le <span> Monde </span> sans <span> barrières.</span>`,
    selected_lang: `<span class="flag-icon flag-icon-fr"></span> Français`,
    li_ar: `Arabe`,
    li_nl: `Néerlandais`,
    li_en: `Anglais`,
    li_fr: `Français`,
    li_de: `Allemand`,
    cright: `Sirius, Ltd. Tous droits réservés.`
  },
  de:
  {
    about_us: `Über uns`,
    our_team: `Unser Team`,
    prod: `Produkte`,
    contact_us: `Kontaktiere uns`,
    skip_nav:`Navigation Überspringen`,
    Echo:`Echo+`,
    Argo:`Argo+`,
    Future:`Future Plans`,
    Echotxt:`Es ist ein Handschuh mit einer Reihe von Sensoren zur Analyse und Übersetzung der "Gebärdensprache" in die gesprochene und geschriebene arabische Sprache.`,
    Argotxt:`Es ist ein Handschuh für Blinde / Gehörlose, der eine Reihe von Berührungssensoren an der Vorderseite und einen kleinen Vibrationsmotor von außen enthält, um die Kommunikation mit den nahen und fernen Menschen in ihrer Umgebung zu gewährleisten.`,
    Future_1:`Künstliche Gliedmaßen`,
    Future_2:`Nicht-chirurgische Behandlung der Wirbelsäulendekompression`,
    goal:`Unser <span> Ziel </ span> ist es, <span> jede <span> behinderte Person </ span> zu befähigen, sich <span> sozial integriert </ span> und vollständig <span> Erfahrung </ span> zu fühlen die <span> Welt </ span> ohne <span> Barrieren.</ span>`,
    selected_lang: `<span class="flag-icon flag-icon-de"></span> Deutsche`,
    li_ar: `Arabisch`,
    li_nl: `Niederländisch`,
    li_en: `Englisch`,
    li_fr: `Französisch`,
    li_de: `Deutsch`,
    cright: `Sirius, Ltd. Alle Rechte vorbehalten.`
  }
};

if (window.location.hash) {
  if (window.location.hash === "#ar")
  {
    document.getElementById('about').innerHTML = data.ar.about_us;
    document.getElementById('team').innerHTML = data.ar.our_team;
    document.getElementById('prod').innerHTML = data.ar.prod;
    document.getElementById('con').innerHTML = data.ar.contact_us;
    document.getElementById('skip').innerHTML = data.ar.skip_nav;
    document.getElementById('echo').innerHTML = data.ar.Echo;
    document.getElementById('argo').innerHTML = data.ar.Argo;
    document.getElementById('future').innerHTML = data.ar.Future;
    document.getElementById('echotxt-sm').innerHTML = data.ar.Echotxt;
    document.getElementById('argotxt-sm').innerHTML = data.ar.Argotxt;
    document.getElementById('f1-sm').innerHTML = data.ar.Future_1;
    document.getElementById('f2-sm').innerHTML = data.ar.Future_2;
    document.getElementById('echotxt-lg').innerHTML = data.ar.Echotxt;
    document.getElementById('argotxt-lg').innerHTML = data.ar.Argotxt;
    document.getElementById('f1-lg').innerHTML = data.ar.Future_1;
    document.getElementById('f2-lg').innerHTML = data.ar.Future_2;
    document.getElementById('goaltext').innerHTML = data.ar.goal;
    document.getElementById('selected-lang').innerHTML = data.ar.selected_lang;
    document.getElementById('ae').innerHTML = data.ar.li_ar;
    document.getElementById('nl').innerHTML = data.ar.li_nl;
    document.getElementById('en').innerHTML = data.ar.li_en;
    document.getElementById('fr').innerHTML = data.ar.li_fr;
    document.getElementById('de').innerHTML = data.ar.li_de;
    document.getElementById('copyright').innerHTML = data.ar.cright;
  }
  else if (window.location.hash === "#nl")
  {
    document.getElementById('about').innerHTML = data.nl.about_us;
    document.getElementById('team').innerHTML = data.nl.our_team;
    document.getElementById('prod').innerHTML = data.nl.prod;
    document.getElementById('con').innerHTML = data.nl.contact_us;
    document.getElementById('skip').innerHTML = data.nl.skip_nav;
    document.getElementById('echo').innerHTML = data.nl.Echo;
    document.getElementById('argo').innerHTML = data.nl.Argo;
    document.getElementById('future').innerHTML = data.nl.Future;
    document.getElementById('echotxt-sm').innerHTML = data.nl.Echotxt;
    document.getElementById('argotxt-sm').innerHTML = data.nl.Argotxt;
    document.getElementById('f1-sm').innerHTML = data.nl.Future_1;
    document.getElementById('f2-sm').innerHTML = data.nl.Future_2;
    document.getElementById('echotxt-lg').innerHTML = data.nl.Echotxt;
    document.getElementById('argotxt-lg').innerHTML = data.nl.Argotxt;
    document.getElementById('f1-lg').innerHTML = data.nl.Future_1;
    document.getElementById('f2-lg').innerHTML = data.nl.Future_2;
    document.getElementById('goaltext').innerHTML = data.nl.goal;
    document.getElementById('selected-lang').innerHTML = data.nl.selected_lang;
    document.getElementById('ae').innerHTML = data.nl.li_ar;
    document.getElementById('nl').innerHTML = data.nl.li_nl;
    document.getElementById('en').innerHTML = data.nl.li_en;
    document.getElementById('fr').innerHTML = data.nl.li_fr;
    document.getElementById('de').innerHTML = data.nl.li_de;
    document.getElementById('copyright').innerHTML = data.nl.cright;
  }
  else if (window.location.hash === "#en")
  {
    document.getElementById('about').innerHTML = data.en.about_us;
    document.getElementById('team').innerHTML = data.en.our_team;
    document.getElementById('prod').innerHTML = data.en.prod;
    document.getElementById('con').innerHTML = data.en.contact_us;
    document.getElementById('skip').innerHTML = data.en.skip_nav;
    document.getElementById('echo').innerHTML = data.en.Echo;
    document.getElementById('argo').innerHTML = data.en.Argo;
    document.getElementById('future').innerHTML = data.en.Future;
    document.getElementById('echotxt-sm').innerHTML = data.en.Echotxt;
    document.getElementById('argotxt-sm').innerHTML = data.en.Argotxt;
    document.getElementById('f1-sm').innerHTML = data.en.Future_1;
    document.getElementById('f2-sm').innerHTML = data.en.Future_2;
    document.getElementById('echotxt-lg').innerHTML = data.en.Echotxt;
    document.getElementById('argotxt-lg').innerHTML = data.en.Argotxt;
    document.getElementById('f1-lg').innerHTML = data.en.Future_1;
    document.getElementById('f2-lg').innerHTML = data.en.Future_2;
    document.getElementById('goaltext').innerHTML = data.en.goal;
    document.getElementById('selected-lang').innerHTML = data.en.selected_lang;
    document.getElementById('ae').innerHTML = data.en.li_ar;
    document.getElementById('nl').innerHTML = data.en.li_nl;
    document.getElementById('en').innerHTML = data.en.li_en;
    document.getElementById('fr').innerHTML = data.en.li_fr;
    document.getElementById('de').innerHTML = data.en.li_de;
    document.getElementById('copyright').innerHTML = data.en.cright;
  }
  else if (window.location.hash === "#fr")
  {
    document.getElementById('about').innerHTML = data.fr.about_us;
    document.getElementById('team').innerHTML = data.fr.our_team;
    document.getElementById('prod').innerHTML = data.fr.prod;
    document.getElementById('con').innerHTML = data.fr.contact_us;
    document.getElementById('skip').innerHTML = data.fr.skip_nav;
    document.getElementById('echo').innerHTML = data.fr.Echo;
    document.getElementById('argo').innerHTML = data.fr.Argo;
    document.getElementById('future').innerHTML = data.fr.Future;
    document.getElementById('echotxt-sm').innerHTML = data.fr.Echotxt;
    document.getElementById('argotxt-sm').innerHTML = data.fr.Argotxt;
    document.getElementById('f1-sm').innerHTML = data.fr.Future_1;
    document.getElementById('f2-sm').innerHTML = data.fr.Future_2;
    document.getElementById('echotxt-lg').innerHTML = data.fr.Echotxt;
    document.getElementById('argotxt-lg').innerHTML = data.fr.Argotxt;
    document.getElementById('f1-lg').innerHTML = data.fr.Future_1;
    document.getElementById('f2-lg').innerHTML = data.fr.Future_2;
    document.getElementById('goaltext').innerHTML = data.fr.goal;
    document.getElementById('selected-lang').innerHTML = data.fr.selected_lang;
    document.getElementById('ae').innerHTML = data.fr.li_ar;
    document.getElementById('nl').innerHTML = data.fr.li_nl;
    document.getElementById('en').innerHTML = data.fr.li_en;
    document.getElementById('fr').innerHTML = data.fr.li_fr;
    document.getElementById('de').innerHTML = data.fr.li_de;
    document.getElementById('copyright').innerHTML = data.fr.cright;
  }
  else if (window.location.hash === "#de")
  {
    document.getElementById('about').innerHTML = data.de.about_us;
    document.getElementById('team').innerHTML = data.de.our_team;
    document.getElementById('prod').innerHTML = data.de.prod;
    document.getElementById('con').innerHTML = data.de.contact_us;
    document.getElementById('skip').innerHTML = data.de.skip_nav;
    document.getElementById('echo').innerHTML = data.de.Echo;
    document.getElementById('argo').innerHTML = data.de.Argo;
    document.getElementById('future').innerHTML = data.de.Future;
    document.getElementById('echotxt-sm').innerHTML = data.de.Echotxt;
    document.getElementById('argotxt-sm').innerHTML = data.de.Argotxt;
    document.getElementById('f1-sm').innerHTML = data.de.Future_1;
    document.getElementById('f2-sm').innerHTML = data.de.Future_2;
    document.getElementById('echotxt-lg').innerHTML = data.de.Echotxt;
    document.getElementById('argotxt-lg').innerHTML = data.de.Argotxt;
    document.getElementById('f1-lg').innerHTML = data.de.Future_1;
    document.getElementById('f2-lg').innerHTML = data.de.Future_2;
    document.getElementById('goaltext').innerHTML = data.de.goal;
    document.getElementById('selected-lang').innerHTML = data.de.selected_lang;
    document.getElementById('ae').innerHTML = data.de.li_ar;
    document.getElementById('nl').innerHTML = data.de.li_nl;
    document.getElementById('en').innerHTML = data.de.li_en;
    document.getElementById('fr').innerHTML = data.de.li_fr;
    document.getElementById('de').innerHTML = data.de.li_de;
    document.getElementById('copyright').innerHTML = data.de.cright;
  }
}

window.onhashchange = function() {
    window.location.reload();
}

$('.topnav').click(function(){
    $(location).attr('href');
    hash = $(location).attr('hash');
    href = $('#aUs').attr('href');
    $('#aUs').attr('href',href+hash);
    href = $(':nth-of-type(2)a').attr('href');
    $(':nth-of-type(2)a').attr('href',href+hash);
    href = $(':nth-of-type(3)a').attr('href');
    $(':nth-of-type(3)a').attr('href',href+hash);
    href = $(':nth-of-type(4)a').attr('href');
    $(':nth-of-type(4)a').attr('href',href+hash);
  });
