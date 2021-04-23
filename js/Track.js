var dataReload = document.querySelectorAll("[data-reload]");

var data = {
  ar:
  {
    Arc: `مقالات`,
    Vid: `فيديوهات`,
    Comp: `مسابقات`,
    arcTitle: `مقالات حول أنشطة سيريوس`,
    vidTitle: `فيديوهات حول أنشطة سيريوس`,
    comTitle: `صور حول أنشطة سيريوس`,
    cap_1: `التصفيات النهائية لمسابقة BeChangeMaker 2018`,
    cap_2: `مجموعة من المشاركات ضمن SheEntrepreneurs<br> 2018 في السويد`,
    cap_3: `المشاركة في مسار الابتكار<br>ArabNet ضمن مؤتمر<br> 2018 في بيروت`,
    cap_4: `صورة ختام المعسكر التدريبي YES 2017`,
    cap_5: `التأهل للمشاركة ببرنامج تكوين لريادة الأعمال 2017`,
    cap_6: `المشاركين ضمن برنامج<br>ICTI Entrepreneurship<br> 2017 - اللاذقية`,
    cap_7: `حضور مؤتمر <br>EK 2017`,
    cap_8: `المشاركة ضمن <br>Pechakucha Night 2017`,
    cright: `جميع الحقوق محفوظة  شركة سيريوس`
  },
  nl:
  {
    Arc: `Artikel`,
    Vid: `Videos`,
    Comp: `Competities`,
    arcTitle: `Artikelen over Sirius-activiteit`,
    vidTitle: `Video's over Sirius-activiteit`,
    comTitle: `Foto's van Sirius Activiteit`,
    cap_1: `De Uiteindelijke Kandidaten van BeChangeMaker 2018`,
    cap_2: `Een Groep van She Entrepreneurs 2018 Deelnemeis`,
    cap_3: `Deelnemen aan ArabNet Beirut 2018 - Innovationaveneu`,
    cap_4: `YES Bootcamp Deelnemers 2017`,
    cap_5: `Gekwalificeerd Kandidaten van de Takween Ondernemerschap Programma 2017`,
    cap_6: `Lattakia Deelnemers van de ICTI Ondernemerschap Programma 2017`,
    cap_7: `Bijwonen van EK Conferentie 2017`,
    cap_8: `Deelnemen aan Pechakucha-avond 2017`,
    cright: `Sirius, Ltd. <br>Alle rechten voorbehouden.`
  },
  en:
  {
    Arc: `Articles`,
    Vid: `Videos`,
    Comp: `Competitions`,
    arcTitle: `Articles about Sirius Activity`,
    vidTitle: `Videos about Sirius Activity`,
    comTitle: `Pictures of Sirius Activity`,
    cap_1: `The Final Candidates of BeChangeMaker 2018`,
    cap_2: `A group of She Entrepreneurs 2018 Participants`,
    cap_3: `Participating in ArabNet Beirut 2018 - Innovation Avenue`,
    cap_4: `YES Bootcamp Participants 2017`,
    cap_5: `Qualified candidates for Takween Entrepreneurship Program 2017`,
    cap_6: `Lattakia Participants of ICTI Entrepreneurship Program 2017`,
    cap_7: `Attending EK Conference 2017`,
    cap_8: `Participating in Pechakucha Night 2017`,
    cright: `Sirius, Ltd. <br>All Rights Reserved.`
  },
  fr:
  {
    Arc: `Articles`,
    Vid: `Vidéos`,
    Comp: `Compétitions`,
    arcTitle: `Articles sur Sirius Activity`,
    vidTitle: `Vidéos sur l'activité Sirius`,
    comTitle: `Photos de l'activité Sirius`,
    cap_1: `Les finalistes de BeChangeMaker 2018`,
    cap_2: `Un groupe de participants She Entrepreneurs 2018`,
    cap_3: `Participation à ArabNet Beirut 2018 - Innovation Avenue`,
    cap_4: `YES Bootcamp les Participants 2017`,
    cap_5: `Candidats qualifiés pour le programme d'entrepreneuriat Takween 2017`,
    cap_6: `Lattakia Participants du programme d'entrepreneuriat ICTI 2017`,
    cap_7: `Participation à la conférence EK 2017`,
    cap_8: `participation à Pechakucha Night 2017`,
    cright: `Sirius, Ltd. <br>Tous droits réservés.`
  },
  de:
  {
    Arc: `Artikel`,
    Vid: `Videos`,
    Comp: `Wettbewerbe`,
    arcTitle: `Artikel über Sirius-Aktivität`,
    vidTitle: ``,
    comTitle: ``,
    cap_1: `Die Endkandidaten von BeChangeMaker 2018`,
    cap_2: `Eine Gruppe von She Entrepreneurs 2018 Teilnehmern`,
    cap_3: `Teilnahme am ArabNet Beirut 2018 - Innovation Avenue`,
    cap_4: `YES Bootcamp Teilnehmer 2017`,
    cap_5: `Qualifizierte Kandidaten für das Takween Entrepreneurship Program 2017`,
    cap_6: `Lattakia Teilnehmer des ICTI Entrepreneurship Program 2017`,
    cap_7: `Teilnahme an der EK-Konferenz 2017`,
    cap_8: `Teilnahme an Pechakucha Night 2017`,
    cright: `Sirius, Ltd. <br>Alle Rechte vorbehalten.`
  }
};

if (window.location.hash) {
  if (window.location.hash === "#Article#ar" || window.location.hash === "#Interviews#ar" || window.location.hash === "#Competitions#ar")
  {
    document.getElementById('Arc_btn').innerHTML = data.ar.Arc;
    document.getElementById('Vid_btn').innerHTML = data.ar.Vid;
    document.getElementById('Comp_btn').innerHTML = data.ar.Comp;
    document.getElementById('arcTitle').innerHTML = data.ar.arcTitle;
    document.getElementById('vidTitle').innerHTML = data.ar.vidTitle;
    document.getElementById('comTitle').innerHTML = data.ar.comTitle;
    document.getElementById('caption_1').innerHTML = data.ar.cap_1;
    document.getElementById('caption_2').innerHTML = data.ar.cap_2;
    document.getElementById('caption_3').innerHTML = data.ar.cap_3;
    document.getElementById('caption_4').innerHTML = data.ar.cap_4;
    document.getElementById('caption_5').innerHTML = data.ar.cap_5;
    document.getElementById('caption_6').innerHTML = data.ar.cap_6;
    document.getElementById('caption_7').innerHTML = data.ar.cap_7;
    document.getElementById('caption_8').innerHTML = data.ar.cap_8;
    document.getElementById('copyright').innerHTML = data.ar.cright;
  }
  else if (window.location.hash === "#Article#nl" || window.location.hash === "#Interviews#nl" || window.location.hash === "#Competitions#nl")
  {
    document.getElementById('Arc_btn').innerHTML = data.nl.Arc;
    document.getElementById('Vid_btn').innerHTML = data.nl.Vid;
    document.getElementById('Comp_btn').innerHTML = data.nl.Comp;
    document.getElementById('arcTitle').innerHTML = data.nl.arcTitle;
    document.getElementById('vidTitle').innerHTML = data.nl.vidTitle;
    document.getElementById('comTitle').innerHTML = data.nl.comTitle;
    document.getElementById('caption_1').innerHTML = data.nl.cap_1;
    document.getElementById('caption_2').innerHTML = data.nl.cap_2;
    document.getElementById('caption_3').innerHTML = data.nl.cap_3;
    document.getElementById('caption_4').innerHTML = data.nl.cap_4;
    document.getElementById('caption_5').innerHTML = data.nl.cap_5;
    document.getElementById('caption_6').innerHTML = data.nl.cap_6;
    document.getElementById('caption_7').innerHTML = data.nl.cap_7;
    document.getElementById('caption_8').innerHTML = data.nl.cap_8;
    document.getElementById('copyright').innerHTML = data.nl.cright;
  }
  else if (window.location.hash === "#Article#en" || window.location.hash === "#Interviews#en" || window.location.hash === "#Competitions#en")
  {
    document.getElementById('Arc_btn').innerHTML = data.en.Arc;
    document.getElementById('Vid_btn').innerHTML = data.en.Vid;
    document.getElementById('Comp_btn').innerHTML = data.en.Comp;
    document.getElementById('arcTitle').innerHTML = data.en.arcTitle;
    document.getElementById('vidTitle').innerHTML = data.en.vidTitle;
    document.getElementById('comTitle').innerHTML = data.en.comTitle;
    document.getElementById('caption_1').innerHTML = data.en.cap_1;
    document.getElementById('caption_2').innerHTML = data.en.cap_2;
    document.getElementById('caption_3').innerHTML = data.en.cap_3;
    document.getElementById('caption_4').innerHTML = data.en.cap_4;
    document.getElementById('caption_5').innerHTML = data.en.cap_5;
    document.getElementById('caption_6').innerHTML = data.en.cap_6;
    document.getElementById('caption_7').innerHTML = data.en.cap_7;
    document.getElementById('caption_8').innerHTML = data.en.cap_8;
    document.getElementById('copyright').innerHTML = data.en.cright;
  }
  else if (window.location.hash === "#Article#fr" || window.location.hash === "#Interviews#fr" || window.location.hash === "#Competitions#fr") {
    document.getElementById('Arc_btn').innerHTML = data.fr.Arc;
    document.getElementById('Vid_btn').innerHTML = data.fr.Vid;
    document.getElementById('Comp_btn').innerHTML = data.fr.Comp;
    document.getElementById('arcTitle').innerHTML = data.fr.arcTitle;
    document.getElementById('vidTitle').innerHTML = data.fr.vidTitle;
    document.getElementById('comTitle').innerHTML = data.fr.comTitle;
    document.getElementById('caption_1').innerHTML = data.fr.cap_1;
    document.getElementById('caption_2').innerHTML = data.fr.cap_2;
    document.getElementById('caption_3').innerHTML = data.fr.cap_3;
    document.getElementById('caption_4').innerHTML = data.fr.cap_4;
    document.getElementById('caption_5').innerHTML = data.fr.cap_5;
    document.getElementById('caption_6').innerHTML = data.fr.cap_6;
    document.getElementById('caption_7').innerHTML = data.fr.cap_7;
    document.getElementById('caption_8').innerHTML = data.fr.cap_8;
    document.getElementById('copyright').innerHTML = data.fr.cright;
  }
  else if (window.location.hash === "#Article#de" || window.location.hash === "#Interviews#de" || window.location.hash === "#Competitions#de")
  {
    document.getElementById('Arc_btn').innerHTML = data.de.Arc;
    document.getElementById('Vid_btn').innerHTML = data.de.Vid;
    document.getElementById('Comp_btn').innerHTML = data.de.Comp;
    document.getElementById('arcTitle').innerHTML = data.de.arcTitle;
    document.getElementById('vidTitle').innerHTML = data.de.vidTitle;
    document.getElementById('comTitle').innerHTML = data.de.comTitle;
    document.getElementById('caption_1').innerHTML = data.de.cap_1;
    document.getElementById('caption_2').innerHTML = data.de.cap_2;
    document.getElementById('caption_3').innerHTML = data.de.cap_3;
    document.getElementById('caption_4').innerHTML = data.de.cap_4;
    document.getElementById('caption_5').innerHTML = data.de.cap_5;
    document.getElementById('caption_6').innerHTML = data.de.cap_6;
    document.getElementById('caption_7').innerHTML = data.de.cap_7;
    document.getElementById('caption_8').innerHTML = data.de.cap_8;
    document.getElementById('copyright').innerHTML = data.de.cright;
  }
}

window.onhashchange = function() {
    window.location.reload();
}
