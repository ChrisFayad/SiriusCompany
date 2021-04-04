var dataReload = document.querySelectorAll("[data-reload]");

var data = {
  ar:
  {
    about_us: `من نحن`,
    our_team: `فريقنا`,
    prod: `منتجاتنا`,
    contact_us: `اتصل بنا`,
    skip_nav:`انتقل إلى المحتوى`,
    touch:`تواصل معنا`,
    fill:`الرجاء تعبئة الاستمارة و سنقوم بالتواصل معكم قريباً`,
    P_Info:`معلومات شخصية`,
    f_Name:`الاسم`,
    l_Name:`الكنية`,
    email:`البريد الالكتروني`,
    country:`الدولة`,
    SMS_Sec:`قسم الرسالة`,
    SMS_Title:`عنوان الرسالة`,
    SMS_Body:`رسالتك`,
    req:`(مطلوب)`,
    send:`إرسال الرسالة`,
    support:`إذا كان لديك الحماس للوقوف بجانبنا ودعمنا`,
    donate:`ضع يدك بيدنا`,
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
    touch:`Neem Contact met Ons op`,
    fill:``,
    P_Info:`Persoonsgegevens`,
    f_Name:`VOORNAAM`,
    l_Name:`ACHTERNAAM`,
    email:`EMAIL`,
    country:`LAND`,
    SMS_Sec:``,
    SMS_Title:`Het Onderwerp`,
    SMS_Body:`Het Bericht`,
    req:`(Verplicht)`,
    send:`Verzenden`,
    support:``,
    donate:`Doneer Nu!`,
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
    touch:`Get In Touch`,
    fill:`Please fill out our form, and we will get in touch shortly.`,
    P_Info:`Personal Information`,
    f_Name:`FIRST NAME`,
    l_Name:`LAST NAME`,
    email:`EMAIL`,
    country:`COUNTRY`,
    SMS_Sec:`Message Section`,
    SMS_Title:`Title`,
    SMS_Body:`YOUR MESSAGE`,
    req:`(Required)`,
    send:`SEND MESSAGE`,
    support:`If you want to Support Us ..`,
    donate:`Donate Now!`,
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
    touch:`Entrez en contact`,
    fill:`Veuillez remplir notre formulaire et nous vous contacterons sous peu.`,
    P_Info:`Informations Personnelles`,
    f_Name:`PRÉNOM`,
    l_Name:`NOM DE FAMILLE`,
    email:`EMAIL`,
    country:`PAYS`,
    SMS_Sec:`Section des messages`,
    SMS_Title:`Titre`,
    SMS_Body:`ENVOYER LE MESSAGE`,
    req:`(Obligatoire)`,
    send:`ENVOYER LE MESSAGE`,
    support:`Si vous souhaitez nous soutenir..`,
    donate:`Faire un don maintenant!`,
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
    touch:`In Kontakt kommen`,
    fill:`Bitte füllen Sie unser Formular aus und wir werden uns in Kürze bei Ihnen melden.`,
    P_Info:`Persönliche Angaben`,
    f_Name:`VORNAME`,
    l_Name:`NACHNAME`,
    email:`EMAIL`,
    country:`LAND`,
    SMS_Sec:`Nachrichtenbereich`,
    SMS_Title:`Titel`,
    SMS_Body:`IHRE NACHRICHT`,
    req:`(Erforderlich)`,
    send:`NACHRICHT SENDEN`,
    support:`Wenn Sie uns unterstützen möchten ..`,
    donate:`Spende jetzt!`,
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
    //items[3].parentNode.insertBefore(items[3], items[0]);
    //items[2].parentNode.insertBefore(items[2], items[0]);
    //items[1].parentNode.insertBeforewindow.alert()(items[1], items[0]);
    document.getElementById('about').innerHTML = data.ar.about_us;
    document.getElementById('team').innerHTML = data.ar.our_team;
    document.getElementById('prod').innerHTML = data.ar.prod;
    document.getElementById('con').innerHTML = data.ar.contact_us;
    //document.getElementById('about').insertBefore(document.getElementById('con'));
    document.getElementById('skip').innerHTML = data.ar.skip_nav;
    document.getElementById('gt').innerHTML = data.ar.touch;
    document.getElementById('pls').innerHTML = data.ar.fill;
    document.getElementById('info').innerHTML = data.ar.P_Info;
    document.getElementById('fn').innerHTML = data.ar.f_Name;
    document.getElementById('ln').innerHTML = data.ar.l_Name;
    document.getElementById('mail').innerHTML = data.ar.email;
    document.getElementById('land').innerHTML = data.ar.country;
    document.getElementById('SMSsec').innerHTML = data.ar.SMS_Sec;
    document.getElementById('SMSTitle').innerHTML = data.ar.SMS_Title;
    document.getElementById('SMSBody').innerHTML = data.ar.SMS_Body;
    x = document.getElementsByClassName('required');
    for(var i = 0; i < x.length; i++){
    x[i].innerText = data.ar.req;}
    document.getElementById('Send_btn').innerHTML = data.ar.send;
    document.getElementById('SOS').innerHTML = data.ar.support;
    document.getElementById('Donation_btn').innerHTML = data.ar.donate;
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
    document.getElementById('gt').innerHTML = data.nl.touch;
    document.getElementById('pls').innerHTML = data.nl.fill;
    document.getElementById('info').innerHTML = data.nl.P_Info;
    document.getElementById('fn').innerHTML = data.nl.f_Name;
    document.getElementById('ln').innerHTML = data.nl.l_Name;
    document.getElementById('mail').innerHTML = data.nl.email;
    document.getElementById('land').innerHTML = data.nl.country;
    document.getElementById('SMSsec').innerHTML = data.nl.SMS_Sec;
    document.getElementById('SMSTitle').innerHTML = data.nl.SMS_Title;
    document.getElementById('SMSBody').innerHTML = data.nl.SMS_Body;
    x = document.getElementsByClassName('required');
    for(var i = 0; i < x.length; i++){
    x[i].innerText = data.nl.req;}
    document.getElementById('Send_btn').innerHTML = data.nl.send;
    document.getElementById('SOS').innerHTML = data.nl.support;
    document.getElementById('Donation_btn').innerHTML = data.nl.donate;
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
    document.getElementById('gt').innerHTML = data.en.touch;
    document.getElementById('pls').innerHTML = data.en.fill;
    document.getElementById('info').innerHTML = data.en.P_Info;
    document.getElementById('fn').innerHTML = data.en.f_Name;
    document.getElementById('ln').innerHTML = data.en.l_Name;
    document.getElementById('mail').innerHTML = data.en.email;
    document.getElementById('land').innerHTML = data.en.country;
    document.getElementById('SMSsec').innerHTML = data.en.SMS_Sec;
    document.getElementById('SMSTitle').innerHTML = data.en.SMS_Title;
    document.getElementById('SMSBody').innerHTML = data.en.SMS_Body;
    x = document.getElementsByClassName('required');
    for(var i = 0; i < x.length; i++){
    x[i].innerText = data.en.req;}
    document.getElementById('Send_btn').innerHTML = data.en.send;
    document.getElementById('SOS').innerHTML = data.en.support;
    document.getElementById('Donation_btn').innerHTML = data.en.donate;
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
    document.getElementById('gt').innerHTML = data.fr.touch;
    document.getElementById('pls').innerHTML = data.fr.fill;
    document.getElementById('info').innerHTML = data.fr.P_Info;
    document.getElementById('fn').innerHTML = data.fr.f_Name;
    document.getElementById('ln').innerHTML = data.fr.l_Name;
    document.getElementById('mail').innerHTML = data.fr.email;
    document.getElementById('land').innerHTML = data.fr.country;
    document.getElementById('SMSsec').innerHTML = data.fr.SMS_Sec;
    document.getElementById('SMSTitle').innerHTML = data.fr.SMS_Title;
    document.getElementById('SMSBody').innerHTML = data.fr.SMS_Body;
    x = document.getElementsByClassName('required');
    for(var i = 0; i < x.length; i++){
    x[i].innerText = data.fr.req;}
    document.getElementById('Send_btn').innerHTML = data.fr.send;
    document.getElementById('SOS').innerHTML = data.fr.support;
    document.getElementById('Donation_btn').innerHTML = data.fr.donate;
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
    document.getElementById('gt').innerHTML = data.de.touch;
    document.getElementById('pls').innerHTML = data.de.fill;
    document.getElementById('info').innerHTML = data.de.P_Info;
    document.getElementById('fn').innerHTML = data.de.f_Name;
    document.getElementById('ln').innerHTML = data.de.l_Name;
    document.getElementById('mail').innerHTML = data.de.email;
    document.getElementById('land').innerHTML = data.de.country;
    document.getElementById('SMSsec').innerHTML = data.de.SMS_Sec;
    document.getElementById('SMSTitle').innerHTML = data.de.SMS_Title;
    document.getElementById('SMSBody').innerHTML = data.de.SMS_Body;
    x = document.getElementsByClassName('required');
    for(var i = 0; i < x.length; i++){
    x[i].innerText = data.de.req;}
    document.getElementById('Send_btn').innerHTML = data.de.send;
    document.getElementById('SOS').innerHTML = data.de.support;
    document.getElementById('Donation_btn').innerHTML = data.de.donate;
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
