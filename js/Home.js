var dataReload = document.querySelectorAll("[data-reload]");

var data = {
  ar:
  {
    about_us: `من نحن`,
    our_team: `فريقنا`,
    prod: `منتجاتنا`,
    contact_us: `اتصل بنا`,
    Tk_sm: `تابعنا`,
    Tk_lg: `تابعنا`,
    Arc: `<h3><i class="fas fa-paperclip"></i> مقالات </h3>`,
    Vid: `<h3><i class="fas fa-video"></i> فيديوهات </h3>`,
    Comp: `<h3><i class="fas fa-newspaper"></i> مسابقات </h3>`,
    modhead: `مقالات حول أنشطة سيريوس`,
    modfoot: `بعض المقالات كتبت باللغة الانكليزية`,
    cap_1: `التصفيات النهائية لمسابقة BeChangeMaker 2018`,
    cap_2: `مجموعة من المشاركات ضمن SheEntrepreneurs<br> 2018 في السويد`,
    cap_3: `المشاركة في مسار الابتكار<br>ArabNet ضمن مؤتمر<br> 2018 في بيروت`,
    cap_4: `صورة ختام المعسكر التدريبي YES 2017`,
    cap_5: `التأهل للمشاركة ببرنامج تكوين لريادة الأعمال 2017`,
    cap_6: `المشاركين ضمن برنامج<br>ICTI Entrepreneurship<br> 2017 - اللاذقية`,
    cap_7: `حضور مؤتمر <br>EK 2017`,
    cap_8: `المشاركة ضمن <br>Pechakucha Night 2017`,
    img_0: `صورة تجمع المؤسسين م. خريستينا فياض و م. سليمان محمد`,
    img_1: `Sound of Mute العرض التقديمي الأول الخاص بمشروع<br> ضمن حاضنة تقانة المعلومات و الاتصالات في اللاذقية`,
    img_2: `استلام شهادة المشاركة في برنامج حاضنة تقانة المعلومات و الاتصالات لريادة الأعمال 2017`,
    img_3: `خلال ورشة عمل ضمن برنامج تكوين لريادة الأعمال 2017`,
    img_4: `الفوز بالمركز الثاني ضمن المخيم التدريبي لرواد الأعمال السوريين 2017`,
    img_5: `ArabNet المشاركة في مسار الابتكار الخاص بمؤتمر<br> بيروت 2018`,
    img_6: `تلقي شهادة المشاركة ضمن برنامج «هي لريادة الأعمال» المعهد السويدي 2018`,
    img_7: `الفوز في المركز الثالث في مسابقة<br> أمستردام 2018 BeChangeMaker`,
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
    Tk_sm: `Volg Ons`,
    Tk_lg: `Volg Ons: `,
    Arc: `<h3><i class="fas fa-paperclip"></i>  </h3>`,
    Vid: `<h3><i class="fas fa-video"></i>  </h3>`,
    Comp: `<h3><i class="fas fa-newspaper"></i>  </h3>`,
    modhead: `Artikelen over Sirius-activiteit`,
    modfoot: `Sommige artikelen zijn in het Arabisch geschreven`,
    cap_1: ``,
    cap_2: ``,
    cap_3: ``,
    cap_4: ``,
    cap_5: ``,
    cap_6: ``,
    cap_7: ``,
    cap_8: ``,
    img_0: ``,
    img_1: ``,
    img_2: ``,
    img_3: ``,
    img_4: ``,
    img_5: ``,
    img_6: ``,
    img_7: ``,
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
    Tk_sm: `Track Us`,
    Tk_lg: `Track Us: `,
    Arc: `<h3><i class="fas fa-paperclip"></i> Articles </h3>`,
    Vid: `<h3><i class="fas fa-video"></i> Videos </h3>`,
    Comp: `<h3><i class="fas fa-newspaper"></i> Competitions </h3>`,
    modhead: `Articles about Sirius Activity`,
    modfoot: `Some Articles were written in Arabic`,
    cap_1: `The Final Candidates of BeChangeMaker 2018`,
    cap_2: `A group of She Entrepreneurs 2018 Participants`,
    cap_3: `Participating in ArabNet Beirut 2018 - Innovation Avenue`,
    cap_4: `YES Bootcamp Participants 2017`,
    cap_5: `Qualified candidates for Takween Entrepreneurship Program 2017`,
    cap_6: `Lattakia Participants of ICTI Entrepreneurship Program 2017`,
    cap_7: `Attending EK Conference 2017`,
    cap_8: `Participating in Pechakucha Night 2017`,
    img_0: `Photo of The Founders <br>Eng.Christina Fayad & Eng. Sulaiman Mohammad`,
    img_1: `Presenting the "Sound of Mute" project for <br>the 1st time at the ICT Incubator <br>in Lattakia, Syria 2015`,
    img_2: `Receiving a Certificate for Participating <br>in the ICTI Entrepreneurship Program 2017`,
    img_3: `During one of the Takween <br>Entrepreneurship Program Workshop 2017`,
    img_4: `Getting the 2nd Place at the <br>"Youth Entrepreneurs of Syria" Bootcamp 2017`,
    img_5: `Participating in the "Innovation Avenue" <br>at ArabNet Beirut Conference 2018`,
    img_6: `Receiving the "SheEntrepreneurs" <br>Diploma from the Sweden Institute 2018`,
    img_7: `Getting the 3rd Place at <br>"BeChangeMaker" Competition <br>Amsterdam 2018`,
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
    Tk_sm: `Suivez-nous`,
    Tk_lg: `Suivez-nous: `,
    Arc: `<h3><i class="fas fa-paperclip"></i> Articles </h3>`,
    Vid: `<h3><i class="fas fa-video"></i> Vidéos </h3>`,
    Comp: `<h3><i class="fas fa-newspaper"></i> Compétitions </h3>`,
    modhead: `Articles sur Sirius Activity`,
    modfoot: `Certains articles ont été rédigés en Arabe`,
    cap_1: `Les finalistes de BeChangeMaker 2018`,
    cap_2: `Un groupe de participants She Entrepreneurs 2018`,
    cap_3: `Participation à ArabNet Beirut 2018 - Innovation Avenue`,
    cap_4: `YES Bootcamp les Participants 2017`,
    cap_5: `Candidats qualifiés pour le programme d'entrepreneuriat Takween 2017`,
    cap_6: `Lattakia Participants du programme d'entrepreneuriat ICTI 2017`,
    cap_7: `Participation à la conférence EK 2017`,
    cap_8: `Participation à Pechakucha Night 2017`,
    img_0: `Photo des fondateurs <br>Ing. Christina Fayad & Ing. Sulaiman Mohammad`,
    img_1: `Présentation du projet «Sound of Mute» <br>pour la 1ère fois à l'incubateur ICT <br>de Lattaquié, Syrie 2015`,
    img_2: `Obtention d'un certificat pour <br>participation au programme <br>d'entrepreneuriat ICTI 2017`,
    img_3: `Lors de l'un des ateliers du programme <br>Takween Entrepreneurship 2017`,
    img_4: `Obtention de la 2e place au Bootcamp <br>«Jeunes entrepreneurs de Syrie» 2017`,
    img_5: `Participation à «l'avenue de l'innovation» <br>à la conférence ArabNet Beirut 2018`,
    img_6: `Obtention du diplôme <br>«SheEntrepreneurs» du Sweden Institute 2018`,
    img_7: `Obtention de la 3ème place <br>au concours «BeChangeMaker» <br>Amsterdam 2018`,
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
    Tk_sm: `Verfolgen Sie uns`,
    Tk_lg: `Verfolgen Sie uns: `,
    Arc: `<h3><i class="fas fa-paperclip"></i> Artikel </h3>`,
    Vid: `<h3><i class="fas fa-video"></i> Videos </h3>`,
    Comp: `<h3><i class="fas fa-newspaper"></i> Wettbewerbe </h3>`,
    modhead: `Artikel über Sirius-Aktivität`,
    modfoot: `Einige Artikel wurden in arabischer Sprache verfasst`,
    cap_1: `Die Endkandidaten von BeChangeMaker 2018`,
    cap_2: `Eine Gruppe von She Entrepreneurs 2018 Teilnehmern`,
    cap_3: `Teilnahme am ArabNet Beirut 2018 - Innovation Avenue`,
    cap_4: `YES Bootcamp Teilnehmer 2017`,
    cap_5: `Qualifizierte Kandidaten für das Takween Entrepreneurship Program 2017`,
    cap_6: `Lattakia Teilnehmer des ICTI Entrepreneurship Program 2017`,
    cap_7: `Teilnahme an der EK-Konferenz 2017`,
    cap_8: `Teilnahme an Pechakucha Night 2017`,
    img_0: `Foto der Gründer <br> Eng.Christina Fayad & Eng. Sulaiman Mohammad`,
    img_1: `Präsentation des Projekts <br>«Sound of Mute» zum ersten Mal <br>beim ICT Incubator in Lattakia, Syrien 2015`,
    img_2: `Erhalt eines Zertifikats für die Teilnahme <br>am ICTI Entrepreneurship Program 2017`,
    img_3: `Während eines der Takween <br>Entrepreneurship Program Workshop 2017`,
    img_4: `Den 2. Platz beim <br>«Youth Entrepreneurs of Syria» <br>Bootcamp 2017 Erhalten`,
    img_5: `Teilnahme an der «Innovation Avenue» <br> auf der ArabNet Beirut Conference 2018`,
    img_6: `Erhalt des Diploms «SheEntrepreneurs» <br>vom Sweden Institute 2018`,
    img_7: `Den 3. Platz beim <br>«BeChangeMaker» - Wettbewerb <br>Amsterdam 2018 Erhalten`,
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
    document.getElementById('Track-sm').innerHTML = data.ar.Tk_sm;
    document.getElementById('Arc_sm').innerHTML = data.ar.Arc;
    document.getElementById('Vid_sm').innerHTML = data.ar.Vid;
    document.getElementById('Comp_sm').innerHTML = data.ar.Comp;
    document.getElementById('Track-lg').innerHTML = data.ar.Tk_lg;
    document.getElementById('Arc_btn').innerHTML = data.ar.Arc;
    document.getElementById('Vid_btn').innerHTML = data.ar.Vid;
    document.getElementById('Comp_btn').innerHTML = data.ar.Comp;
    document.getElementById('modalHeader').innerHTML = data.ar.modhead;
    document.getElementById('modalFooter').innerHTML = data.ar.modfoot;
    document.getElementById('caption_1').innerHTML = data.ar.cap_1;
    document.getElementById('caption_2').innerHTML = data.ar.cap_2;
    document.getElementById('caption_3').innerHTML = data.ar.cap_3;
    document.getElementById('caption_4').innerHTML = data.ar.cap_4;
    document.getElementById('caption_5').innerHTML = data.ar.cap_5;
    document.getElementById('caption_6').innerHTML = data.ar.cap_6;
    document.getElementById('caption_7').innerHTML = data.ar.cap_7;
    document.getElementById('caption_8').innerHTML = data.ar.cap_8;
    document.getElementById('Cover_Image').innerHTML = data.ar.img_0;
    document.getElementById('Image_1').innerHTML = data.ar.img_1;
    document.getElementById('Image_2').innerHTML = data.ar.img_2;
    document.getElementById('Image_3').innerHTML = data.ar.img_3;
    document.getElementById('Image_4').innerHTML = data.ar.img_4;
    document.getElementById('Image_5').innerHTML = data.ar.img_5;
    document.getElementById('Image_6').innerHTML = data.ar.img_6;
    document.getElementById('Image_7').innerHTML = data.ar.img_7;
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
    document.getElementById('Track-sm').innerHTML = data.nl.Tk_sm;
    document.getElementById('Arc_sm').innerHTML = data.nl.Arc;
    document.getElementById('Vid_sm').innerHTML = data.nl.Vid;
    document.getElementById('Comp_sm').innerHTML = data.nl.Comp;
    document.getElementById('Track-lg').innerHTML = data.nl.Tk_lg;
    document.getElementById('Arc_btn').innerHTML = data.nl.Arc;
    document.getElementById('Vid_btn').innerHTML = data.nl.Vid;
    document.getElementById('Comp_btn').innerHTML = data.nl.Comp;
    document.getElementById('modalHeader').innerHTML = data.nl.modhead;
    document.getElementById('modalFooter').innerHTML = data.nl.modfoot;
    document.getElementById('caption_1').innerHTML = data.nl.cap_1;
    document.getElementById('caption_2').innerHTML = data.nl.cap_2;
    document.getElementById('caption_3').innerHTML = data.nl.cap_3;
    document.getElementById('caption_4').innerHTML = data.nl.cap_4;
    document.getElementById('caption_5').innerHTML = data.nl.cap_5;
    document.getElementById('caption_6').innerHTML = data.nl.cap_6;
    document.getElementById('caption_7').innerHTML = data.nl.cap_7;
    document.getElementById('caption_8').innerHTML = data.nl.cap_8;
    document.getElementById('Cover_Image').innerHTML = data.nl.img_0;
    document.getElementById('Image_1').innerHTML = data.nl.img_1;
    document.getElementById('Image_2').innerHTML = data.nl.img_2;
    document.getElementById('Image_3').innerHTML = data.nl.img_3;
    document.getElementById('Image_4').innerHTML = data.nl.img_4;
    document.getElementById('Image_5').innerHTML = data.nl.img_5;
    document.getElementById('Image_6').innerHTML = data.nl.img_6;
    document.getElementById('Image_7').innerHTML = data.nl.img_7;
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
    document.getElementById('Track-sm').innerHTML = data.en.Tk_sm;
    document.getElementById('Arc_sm').innerHTML = data.en.Arc;
    document.getElementById('Vid_sm').innerHTML = data.en.Vid;
    document.getElementById('Comp_sm').innerHTML = data.en.Comp;
    document.getElementById('Track-lg').innerHTML = data.en.Tk_lg;
    document.getElementById('Arc_btn').innerHTML = data.en.Arc;
    document.getElementById('Vid_btn').innerHTML = data.en.Vid;
    document.getElementById('Comp_btn').innerHTML = data.en.Comp;
    document.getElementById('modalHeader').innerHTML = data.en.modhead;
    document.getElementById('modalFooter').innerHTML = data.en.modfoot;
    document.getElementById('caption_1').innerHTML = data.en.cap_1;
    document.getElementById('caption_2').innerHTML = data.en.cap_2;
    document.getElementById('caption_3').innerHTML = data.en.cap_3;
    document.getElementById('caption_4').innerHTML = data.en.cap_4;
    document.getElementById('caption_5').innerHTML = data.en.cap_5;
    document.getElementById('caption_6').innerHTML = data.en.cap_6;
    document.getElementById('caption_7').innerHTML = data.en.cap_7;
    document.getElementById('caption_8').innerHTML = data.en.cap_8;
    document.getElementById('Cover_Image').innerHTML = data.en.img_0;
    document.getElementById('Image_1').innerHTML = data.en.img_1;
    document.getElementById('Image_2').innerHTML = data.en.img_2;
    document.getElementById('Image_3').innerHTML = data.en.img_3;
    document.getElementById('Image_4').innerHTML = data.en.img_4;
    document.getElementById('Image_5').innerHTML = data.en.img_5;
    document.getElementById('Image_6').innerHTML = data.en.img_6;
    document.getElementById('Image_7').innerHTML = data.en.img_7;
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
    document.getElementById('Track-sm').innerHTML = data.fr.Tk_sm;
    document.getElementById('Arc_sm').innerHTML = data.fr.Arc;
    document.getElementById('Vid_sm').innerHTML = data.fr.Vid;
    document.getElementById('Comp_sm').innerHTML = data.fr.Comp;
    document.getElementById('Track-lg').innerHTML = data.fr.Tk_lg;
    document.getElementById('Arc_btn').innerHTML = data.fr.Arc;
    document.getElementById('Vid_btn').innerHTML = data.fr.Vid;
    document.getElementById('Comp_btn').innerHTML = data.fr.Comp;
    document.getElementById('modalHeader').innerHTML = data.fr.modhead;
    document.getElementById('modalFooter').innerHTML = data.fr.modfoot;
    document.getElementById('caption_1').innerHTML = data.fr.cap_1;
    document.getElementById('caption_2').innerHTML = data.fr.cap_2;
    document.getElementById('caption_3').innerHTML = data.fr.cap_3;
    document.getElementById('caption_4').innerHTML = data.fr.cap_4;
    document.getElementById('caption_5').innerHTML = data.fr.cap_5;
    document.getElementById('caption_6').innerHTML = data.fr.cap_6;
    document.getElementById('caption_7').innerHTML = data.fr.cap_7;
    document.getElementById('caption_8').innerHTML = data.fr.cap_8;
    document.getElementById('Cover_Image').innerHTML = data.fr.img_0;
    document.getElementById('Image_1').innerHTML = data.fr.img_1;
    document.getElementById('Image_2').innerHTML = data.fr.img_2;
    document.getElementById('Image_3').innerHTML = data.fr.img_3;
    document.getElementById('Image_4').innerHTML = data.fr.img_4;
    document.getElementById('Image_5').innerHTML = data.fr.img_5;
    document.getElementById('Image_6').innerHTML = data.fr.img_6;
    document.getElementById('Image_7').innerHTML = data.fr.img_7;
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
    document.getElementById('Track-sm').innerHTML = data.de.Tk_sm;
    document.getElementById('Arc_sm').innerHTML = data.de.Arc;
    document.getElementById('Vid_sm').innerHTML = data.de.Vid;
    document.getElementById('Comp_sm').innerHTML = data.de.Comp;
    document.getElementById('Track-lg').innerHTML = data.de.Tk_lg;
    document.getElementById('Arc_btn').innerHTML = data.de.Arc;
    document.getElementById('Vid_btn').innerHTML = data.de.Vid;
    document.getElementById('Comp_btn').innerHTML = data.de.Comp;
    document.getElementById('modalHeader').innerHTML = data.de.modhead;
    document.getElementById('modalFooter').innerHTML = data.de.modfoot;
    document.getElementById('caption_1').innerHTML = data.de.cap_1;
    document.getElementById('caption_2').innerHTML = data.de.cap_2;
    document.getElementById('caption_3').innerHTML = data.de.cap_3;
    document.getElementById('caption_4').innerHTML = data.de.cap_4;
    document.getElementById('caption_5').innerHTML = data.de.cap_5;
    document.getElementById('caption_6').innerHTML = data.de.cap_6;
    document.getElementById('caption_7').innerHTML = data.de.cap_7;
    document.getElementById('caption_8').innerHTML = data.de.cap_8;
    document.getElementById('Cover_Image').innerHTML = data.de.img_0;
    document.getElementById('Image_1').innerHTML = data.de.img_1;
    document.getElementById('Image_2').innerHTML = data.de.img_2;
    document.getElementById('Image_3').innerHTML = data.de.img_3;
    document.getElementById('Image_4').innerHTML = data.de.img_4;
    document.getElementById('Image_5').innerHTML = data.de.img_5;
    document.getElementById('Image_6').innerHTML = data.de.img_6;
    document.getElementById('Image_7').innerHTML = data.de.img_7;
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

document.getElementById('Arc_sm').addEventListener("click", function() {
  $(location).attr('href');
  hash = $(location).attr('hash');
  href = $(this).attr('href');
  $('#Arc_sm').attr('href',href+hash);
});
document.getElementById('Vid_sm').addEventListener("click", function() {
  $(location).attr('href');
  hash = $(location).attr('hash');
  href = $(this).attr('href');
  $('#Arc_sm').attr('href',href+hash);
});
document.getElementById('Comp_sm').addEventListener("click", function() {
  $(location).attr('href');
  hash = $(location).attr('hash');
  href = $(this).attr('href');
  $('#Arc_sm').attr('href',href+hash);
});

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
