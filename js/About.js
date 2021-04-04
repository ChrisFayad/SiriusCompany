var dataReload = document.querySelectorAll("[data-reload]");

var data = {
  ar:
  {
    about_us: `من نحن`,
    our_team: `فريقنا`,
    prod: `منتجاتنا`,
    contact_us: `اتصل بنا`,
    skip_nav:`انتقل إلى المحتوى`,
    vis:`رؤيتنا`,
    mis:`غايتنا`,
    val:`قيمنا`,
    vis_txt:`تعزيز مفهوم إعادة التأهيل<br> لذوي الاحتياجات الخاصة`,
    mis_txt:`دعم الحاجة البشرية عبر التعمق في علوم التكنولوجيا من أجل إدخال الأشخاص ذوي الاحتياجات الخاصة ضمن نسيج المجتمع`,
    val_txt:`لنكون جميعنا متساوون كشخص واحد،<br> ! وإعطاء بريق أمل بحياة أفضل`,
    slog_txt:`نشر شعلة المساواة`,
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
    vis:`Visie`,
    mis:`Missie`,
    val:`Waarde`,
    vis_txt:``,
    mis_txt:``,
    val_txt:``,
    slog_txt:``,
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
    vis:`Vision`,
    mis:`Mission`,
    val:`Value`,
    vis_txt:`Resurrection Radiance of Rehabilitation.`,
    mis_txt:`Diving across Technology to provide humanity needs by integrating people with disabilities.`,
    val_txt:`To be all as <span>EQUAL</span> as <span>ONE</span> & Give a Spark of <span>HOPE</span> for a Better <span>LIFE!`,
    slog_txt:`Spread Similarity Spark`,
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
    vis:`Vision`,
    mis:`Mission`,
    val:`Valeur`,
    vis_txt:`Résurrection Eclat de réadaptation.`,
    mis_txt:`Plonger dans la technologie pour répondre aux besoins de l'humanité en intégrant les personnes handicapées.`,
    val_txt:`Pour être tous aussi égaux comme un seul et donner une étincelle d'espoir pour une vie meilleure!`,
    slog_txt:`Diffusez l'étincelle de l’égalité`,
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
    vis:`Vision`,
    mis:`Mission`,
    val:`Werte`,
    vis_txt:`Auferstehungsstrahlung der Rehabilitation.`,
    mis_txt:`Tauchen durch Technologie, zur Unterstützung der Menscheitsheitsbedürfnisse, indem Menschen mit Behinderungen integriert werden.`,
    val_txt:`Alle so GLEICH wie EINS zu sein und einen Funken HOFFNUNG für ein besseres LEBEN zu geben!`,
    slog_txt:`Verbreiten Sie das Funken der Gleichheit`,
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
    document.getElementById('vis-sm').innerHTML = data.ar.vis;
    document.getElementById('mis-sm').innerHTML = data.ar.mis;
    document.getElementById('val-sm').innerHTML = data.ar.val;
    document.getElementById('vistext-sm').innerHTML = data.ar.vis_txt;
    document.getElementById('mistext-sm').innerHTML = data.ar.mis_txt;
    document.getElementById('valtext-sm').innerHTML = data.ar.val_txt;
    document.getElementById('slog-sm').innerHTML = data.ar.slog_txt;
    document.getElementById('vis-lg').innerHTML = data.ar.vis;
    document.getElementById('mis-lg').innerHTML = data.ar.mis;
    document.getElementById('val-lg').innerHTML = data.ar.val;
    document.getElementById('vistext-lg').innerHTML = data.ar.vis_txt;
    document.getElementById('mistext-lg').innerHTML = data.ar.mis_txt;
    document.getElementById('valtext-lg').innerHTML = data.ar.val_txt;
    document.getElementById('slog-lg').innerHTML = data.ar.slog_txt;
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
    document.getElementById('vis-sm').innerHTML = data.nl.vis;
    document.getElementById('mis-sm').innerHTML = data.nl.mis;
    document.getElementById('val-sm').innerHTML = data.nl.val;
    document.getElementById('vistext-sm').innerHTML = data.nl.vis_txt;
    document.getElementById('mistext-sm').innerHTML = data.nl.mis_txt;
    document.getElementById('valtext-sm').innerHTML = data.nl.val_txt;
    document.getElementById('slog-sm').innerHTML = data.nl.slog_txt;
    document.getElementById('vis-lg').innerHTML = data.nl.vis;
    document.getElementById('mis-lg').innerHTML = data.nl.mis;
    document.getElementById('val-lg').innerHTML = data.nl.val;
    document.getElementById('vistext-lg').innerHTML = data.nl.vis_txt;
    document.getElementById('mistext-lg').innerHTML = data.nl.mis_txt;
    document.getElementById('valtext-lg').innerHTML = data.nl.val_txt;
    document.getElementById('slog-lg').innerHTML = data.nl.slog_txt;
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
    document.getElementById('vis-sm').innerHTML = data.en.vis;
    document.getElementById('mis-sm').innerHTML = data.en.mis;
    document.getElementById('val-sm').innerHTML = data.en.val;
    document.getElementById('vistext-sm').innerHTML = data.en.vis_txt;
    document.getElementById('mistext-sm').innerHTML = data.en.mis_txt;
    document.getElementById('valtext-sm').innerHTML = data.en.val_txt;
    document.getElementById('slog-sm').innerHTML = data.en.slog_txt;
    document.getElementById('vis-lg').innerHTML = data.en.vis;
    document.getElementById('mis-lg').innerHTML = data.en.mis;
    document.getElementById('val-lg').innerHTML = data.en.val;
    document.getElementById('vistext-lg').innerHTML = data.en.vis_txt;
    document.getElementById('mistext-lg').innerHTML = data.en.mis_txt;
    document.getElementById('valtext-lg').innerHTML = data.en.val_txt;
    document.getElementById('slog-lg').innerHTML = data.en.slog_txt;
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
    document.getElementById('vis-sm').innerHTML = data.fr.vis;
    document.getElementById('mis-sm').innerHTML = data.fr.mis;
    document.getElementById('val-sm').innerHTML = data.fr.val;
    document.getElementById('vistext-sm').innerHTML = data.fr.vis_txt;
    document.getElementById('mistext-sm').innerHTML = data.fr.mis_txt;
    document.getElementById('valtext-sm').innerHTML = data.fr.val_txt;
    document.getElementById('slog-sm').innerHTML = data.fr.slog_txt;
    document.getElementById('vis-lg').innerHTML = data.fr.vis;
    document.getElementById('mis-lg').innerHTML = data.fr.mis;
    document.getElementById('val-lg').innerHTML = data.fr.val;
    document.getElementById('vistext-lg').innerHTML = data.fr.vis_txt;
    document.getElementById('mistext-lg').innerHTML = data.fr.mis_txt;
    document.getElementById('valtext-lg').innerHTML = data.fr.val_txt;
    document.getElementById('slog-lg').innerHTML = data.fr.slog_txt;
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
    document.getElementById('vis-sm').innerHTML = data.de.vis;
    document.getElementById('mis-sm').innerHTML = data.de.mis;
    document.getElementById('val-sm').innerHTML = data.de.val;
    document.getElementById('vistext-sm').innerHTML = data.de.vis_txt;
    document.getElementById('mistext-sm').innerHTML = data.de.mis_txt;
    document.getElementById('valtext-sm').innerHTML = data.de.val_txt;
    document.getElementById('slog-sm').innerHTML = data.de.slog_txt;
    document.getElementById('vis-lg').innerHTML = data.de.vis;
    document.getElementById('mis-lg').innerHTML = data.de.mis;
    document.getElementById('val-lg').innerHTML = data.de.val;
    document.getElementById('vistext-lg').innerHTML = data.de.vis_txt;
    document.getElementById('mistext-lg').innerHTML = data.de.mis_txt;
    document.getElementById('valtext-lg').innerHTML = data.de.val_txt;
    document.getElementById('slog-lg').innerHTML = data.de.slog_txt;
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
