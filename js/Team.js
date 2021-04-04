var dataReload = document.querySelectorAll("[data-reload]");

var data = {
  ar:
  {
    about_us: `من نحن`,
    our_team: `فريقنا`,
    prod: `منتجاتنا`,
    contact_us: `اتصل بنا`,
    skip_nav:`انتقل إلى المحتوى`,
    ceo:`مدير تنفيذي & مؤسس`,
    cto:`مدير تنفيذي & مؤسس`,
    coo:`مدير عمليات`,
    ceo_name:`خريستينا فياض`,
    cto_name:`سليمان محمد`,
    coo_name:`حنان كسواني`,
    ceo_txt:`متمرس في تصميم<br> اللوحات الإلكترونية <br>- و قواعد البيانات <br> محترف تصميم<br> مواقع الكترونية`,
    cto_txt:`خبير في تصميم<br> الأنظمة الإلكترونية <br>والمتحكمات`,
    coo_txt:`خبير في<br> العلاقات العامة <br>و المحاسبة`,
    idol_txt:`إبداع   -   تنوع   -   انتقاء`,
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
    ceo:`CEO & oprichter`,
    cto:`CTO & mede-oprichter`,
    coo:`COO`,
    ceo_name:`Christina Fayad`,
    cto_name:`Sulaiman Mohammad`,
    coo_name:`Hanan Keswani`,
    ceo_txt:``,
    cto_txt:``,
    coo_txt:``,
    idol_txt:`Creatief, Diversiteit, Selectief`,
    selected_lang: `<span class="flag-icon flag-icon-nl"></span> Nederlands`,
    li_ar: `Arabisch`,
    li_nl: `Nederlands`,
    li_en: `Engels`,
    li_fr: `Frans`,
    li_de: `Duits`,
    cright: `Sirius, Ltd. <br>Alle rechten voorbehouden.`
  },
  en:
  {
    about_us: `About Us`,
    our_team: `Our Team`,
    prod: `Products`,
    contact_us: `Contact Us`,
    skip_nav:`Skip Navigation`,
    ceo:`CEO & Founder`,
    cto:`CTO & co-Founder`,
    coo:`COO`,
    ceo_name:`Christina Fayad`,
    cto_name:`Sulaiman Mohammad`,
    coo_name:`Hanan Keswani`,
    ceo_txt:`PCB Design,<br> Database <br>& Web Expert`,
    cto_txt:`Circuit Design & Micro-controller Expert`,
    coo_txt:`Social Development <br>& Accounting Expert`,
    idol_txt:`Creative, Diversity, Selective`,
    selected_lang: `<span class="flag-icon flag-icon-gb"></span> English`,
    li_ar: `Arabic`,
    li_nl: `Dutch`,
    li_en: `English`,
    li_fr: `French`,
    li_de: `German`,
    cright: `Sirius, Ltd. <br>All Rights Reserved.`
  },
  fr:
  {
    about_us: `Nous connaître`,
    our_team: `Notre équipe`,
    prod: `Nos produits`,
    contact_us: `Contactez-nous`,
    skip_nav:`Sautez la navigation`,
    ceo:`CEO & fondateur`,
    cto:`CTO & co-fondateur`,
    coo:`COO`,
    ceo_name:`Christina Fayad`,
    cto_name:`Sulaiman Mohammad`,
    coo_name:`Hanan Keswani`,
    ceo_txt:`Expert en conception de circuits imprimés,<br> base de données et Web`,
    cto_txt:`Expert en conception<br> de circuits et microcontrôleurs`,
    coo_txt:`Expert en développement<br> social et comptabilité`,
    idol_txt:`Créatif, Diversité, Sélectif`,
    selected_lang: `<span class="flag-icon flag-icon-fr"></span> Français`,
    li_ar: `Arabe`,
    li_nl: `Néerlandais`,
    li_en: `Anglais`,
    li_fr: `Français`,
    li_de: `Allemand`,
    cright: `Sirius, Ltd. <br>Tous droits réservés.`
  },
  de:
  {
    about_us: `Über uns`,
    our_team: `Unser Team`,
    prod: `Produkte`,
    contact_us: `Kontaktiere uns`,
    skip_nav:`Navigation Überspringen`,
    ceo:`Geschäftsführer & Gründer`,
    cto:`CTO & Mitbegründer`,
    coo:`COO`,
    ceo_name:`Christina Fayad`,
    cto_name:`Sulaiman Mohammad`,
    coo_name:`Hanan Keswani`,
    ceo_txt:`PCB Design,<br> Datenbank <br>& Web Experte`,
    cto_txt:`Expert für Schaltungsdesign und Mikrocontroller`,
    coo_txt:`Expert für soziale Entwicklung und Buchhaltung`,
    idol_txt:`Kreativ, Vielfalt, Selektivität`,
    selected_lang: `<span class="flag-icon flag-icon-de"></span> Deutsche`,
    li_ar: `Arabisch`,
    li_nl: `Niederländisch`,
    li_en: `Englisch`,
    li_fr: `Französisch`,
    li_de: `Deutsch`,
    cright: `Sirius, Ltd. <br>Alle Rechte vorbehalten.`
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
    document.getElementById('ceo-sm').innerHTML = data.ar.ceo;
    document.getElementById('cto-sm').innerHTML = data.ar.cto;
    document.getElementById('coo-sm').innerHTML = data.ar.coo;
    document.getElementById('ceoname-sm').innerHTML = data.ar.ceo_name;
    document.getElementById('ctoname-sm').innerHTML = data.ar.cto_name;
    document.getElementById('cooname-sm').innerHTML = data.ar.coo_name;
    document.getElementById('ceorole-sm').innerHTML = data.ar.ceo_txt;
    document.getElementById('ctorole-sm').innerHTML = data.ar.cto_txt;
    document.getElementById('coorole-sm').innerHTML = data.ar.coo_txt;
    document.getElementById('ceo-lg').innerHTML = data.ar.ceo;
    document.getElementById('cto-lg').innerHTML = data.ar.cto;
    document.getElementById('coo-lg').innerHTML = data.ar.coo;
    document.getElementById('ceoname-lg').innerHTML = data.ar.ceo_name;
    document.getElementById('ctoname-lg').innerHTML = data.ar.cto_name;
    document.getElementById('cooname-lg').innerHTML = data.ar.coo_name;
    document.getElementById('ceorole-lg').innerHTML = data.ar.ceo_txt;
    document.getElementById('ctorole-lg').innerHTML = data.ar.cto_txt;
    document.getElementById('coorole-lg').innerHTML = data.ar.coo_txt;
    document.getElementById('idoltext').innerHTML = data.ar.idol_txt;
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
    document.getElementById('ceo-sm').innerHTML = data.nl.ceo;
    document.getElementById('cto-sm').innerHTML = data.nl.cto;
    document.getElementById('coo-sm').innerHTML = data.nl.coo;
    document.getElementById('ceoname-sm').innerHTML = data.nl.ceo_name;
    document.getElementById('ctoname-sm').innerHTML = data.nl.cto_name;
    document.getElementById('cooname-sm').innerHTML = data.nl.coo_name;
    document.getElementById('ceorole-sm').innerHTML = data.nl.ceo_txt;
    document.getElementById('ctorole-sm').innerHTML = data.nl.cto_txt;
    document.getElementById('coorole-sm').innerHTML = data.nl.coo_txt;
    document.getElementById('ceo-lg').innerHTML = data.nl.ceo;
    document.getElementById('cto-lg').innerHTML = data.nl.cto;
    document.getElementById('coo-lg').innerHTML = data.nl.coo;
    document.getElementById('ceoname-lg').innerHTML = data.nl.ceo_name;
    document.getElementById('ctoname-lg').innerHTML = data.nl.cto_name;
    document.getElementById('cooname-lg').innerHTML = data.nl.coo_name;
    document.getElementById('ceorole-lg').innerHTML = data.nl.ceo_txt;
    document.getElementById('ctorole-lg').innerHTML = data.nl.cto_txt;
    document.getElementById('coorole-lg').innerHTML = data.nl.coo_txt;
    document.getElementById('idoltext').innerHTML = data.nl.idol_txt;
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
    document.getElementById('ceo-sm').innerHTML = data.en.ceo;
    document.getElementById('cto-sm').innerHTML = data.en.cto;
    document.getElementById('coo-sm').innerHTML = data.en.coo;
    document.getElementById('ceoname-sm').innerHTML = data.en.ceo_name;
    document.getElementById('ctoname-sm').innerHTML = data.en.cto_name;
    document.getElementById('cooname-sm').innerHTML = data.en.coo_name;
    document.getElementById('ceorole-sm').innerHTML = data.en.ceo_txt;
    document.getElementById('ctorole-sm').innerHTML = data.en.cto_txt;
    document.getElementById('coorole-sm').innerHTML = data.en.coo_txt;
    document.getElementById('ceo-lg').innerHTML = data.en.ceo;
    document.getElementById('cto-lg').innerHTML = data.en.cto;
    document.getElementById('coo-lg').innerHTML = data.en.coo;
    document.getElementById('ceoname-lg').innerHTML = data.en.ceo_name;
    document.getElementById('ctoname-lg').innerHTML = data.en.cto_name;
    document.getElementById('cooname-lg').innerHTML = data.en.coo_name;
    document.getElementById('ceorole-lg').innerHTML = data.en.ceo_txt;
    document.getElementById('ctorole-lg').innerHTML = data.en.cto_txt;
    document.getElementById('coorole-lg').innerHTML = data.en.coo_txt;
    document.getElementById('idoltext').innerHTML = data.en.idol_txt;
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
    document.getElementById('ceo-sm').innerHTML = data.fr.ceo;
    document.getElementById('cto-sm').innerHTML = data.fr.cto;
    document.getElementById('coo-sm').innerHTML = data.fr.coo;
    document.getElementById('ceoname-sm').innerHTML = data.fr.ceo_name;
    document.getElementById('ctoname-sm').innerHTML = data.fr.cto_name;
    document.getElementById('cooname-sm').innerHTML = data.fr.coo_name;
    document.getElementById('ceorole-sm').innerHTML = data.fr.ceo_txt;
    document.getElementById('ctorole-sm').innerHTML = data.fr.cto_txt;
    document.getElementById('coorole-sm').innerHTML = data.fr.coo_txt;
    document.getElementById('ceo-lg').innerHTML = data.fr.ceo;
    document.getElementById('cto-lg').innerHTML = data.fr.cto;
    document.getElementById('coo-lg').innerHTML = data.fr.coo;
    document.getElementById('ceoname-lg').innerHTML = data.fr.ceo_name;
    document.getElementById('ctoname-lg').innerHTML = data.fr.cto_name;
    document.getElementById('cooname-lg').innerHTML = data.fr.coo_name;
    document.getElementById('ceorole-lg').innerHTML = data.fr.ceo_txt;
    document.getElementById('ctorole-lg').innerHTML = data.fr.cto_txt;
    document.getElementById('coorole-lg').innerHTML = data.fr.coo_txt;
    document.getElementById('idoltext').innerHTML = data.fr.idol_txt;
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
    document.getElementById('ceo-sm').innerHTML = data.de.ceo;
    document.getElementById('cto-sm').innerHTML = data.de.cto;
    document.getElementById('coo-sm').innerHTML = data.de.coo;
    document.getElementById('ceoname-sm').innerHTML = data.de.ceo_name;
    document.getElementById('ctoname-sm').innerHTML = data.de.cto_name;
    document.getElementById('cooname-sm').innerHTML = data.de.coo_name;
    document.getElementById('ceorole-sm').innerHTML = data.de.ceo_txt;
    document.getElementById('ctorole-sm').innerHTML = data.de.cto_txt;
    document.getElementById('coorole-sm').innerHTML = data.de.coo_txt;
    document.getElementById('ceo-lg').innerHTML = data.de.ceo;
    document.getElementById('cto-lg').innerHTML = data.de.cto;
    document.getElementById('coo-lg').innerHTML = data.de.coo;
    document.getElementById('ceoname-lg').innerHTML = data.de.ceo_name;
    document.getElementById('ctoname-lg').innerHTML = data.de.cto_name;
    document.getElementById('cooname-lg').innerHTML = data.de.coo_name;
    document.getElementById('ceorole-lg').innerHTML = data.de.ceo_txt;
    document.getElementById('ctorole-lg').innerHTML = data.de.cto_txt;
    document.getElementById('coorole-lg').innerHTML = data.de.coo_txt;
    document.getElementById('idoltext').innerHTML = data.de.idol_txt;
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
