# This Website created as a Portfolio for Coursera Course "Web Design for Everybody" 2021

 A brief about the website: The website is for a start-up that focused on designing wearable devices for people with disabilities.

 The website contains 5 pages: Home, About Us, Our Team, Products, and Contact Us.

 The website is also built as Multilanguage’s: Arabic, Dutch, English, French, and German.

 Note_1: The default language is English.
 Note_2: The translation was structured using JSON as an open standard data-interchange format.
 Note_3: The Website is fully working in all languages.
 Note_4: Although the website is fully translated into Arabic but we are considering making a different html file because of the language structure.

The website was designed depending on "Mobile First" approach.

The Website is fully accessible for keyboard & screen-only users by using (skip-navigation anchor, tabindex, title, role, aria-label, aria-expanded, and aria-labelledby).

The website is static, but we are using a form backend API for the contact us page provided by "formspark".

The website was written using HTML5, CSS3, JS, jQuery, Bootstrap 4, and Fontawosame 5.

The website was tested on Chrome, Firefox, Microsoft Edge, and Safari.
Some changes needed to be made to maintain the look for the text.

The website is fully validated through https://validator.w3.org/, no errors whatsoever. However, The Product.html has one warning
(Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections).

The website is fully validated through https://wave.webaim.org/, no errors whatsoever through all pages. However, Products Page has 7 Contrast Errors for the same reason (The validator don't see the text-shadow style as part or the span style).

The website is responsive and we have four viewport: Mobile, Small Tablet, Large Tablet & Laptop, and Desktop.
The About Us, Our Team, and Products Page have completely different layout between Mobile & Small Tablet vs. Large Tablet & Laptop, and Desktop.

-> The index.html contains 3 different Modal for (Articles, Videos, and Competitions) that only works on the Large Tablet & Laptop, and Desktop viewport.
   However, in the Mobile & Small Tablet version the anchors redirect the user to a new html page called TrackUs.
-> The index.html contains also a Carousel whom is fully accessible using the keyboard in addition to adding a pause/resume button.

-> Each of About.html & Team.html Page contains a Collapse on Mobile & Small Tablet viewport vs.
   Three divs that have different z-index (About.html) and positioned using Grid Layout on the Large Tablet & Laptop, and Desktop viewport.

-> Product.html contains Accordion Collapse view on Mobile & Small Tablet viewport vs.
   Three divs that positioned using Grid Layout on the Large Tablet & Laptop, and Desktop viewport.

-> Contact.html contains a Form with two fieldset. When the user clicks on the Send Message button the form will be saved using the formspark API.


# Portfolio Grading Rubric:

-> Does the site validate?

10pts – Fully validates (warnings are fine)
8 pts – There are errors, but the student has shown (in their write-up or video) that they are caused by plugins and can not be fixed.
6 pts – There are at most 3 errors for the entire site
3pts – They have only shown that part of the site validates.  (For instance, only tested one of the files in a multi-file site.)
0 pts – More than three errors  were left or the site was not tested at all.

-> Is the site responsive?
20pts Yes, the site has a unique look/layout for each of the views.
10pts The site has a unique look, but not a unique layout.  (For example, they changed only colors of fonts, not the actual layout.)
6pts Only some of the pages are responsive - not all of them.
0pts The site is not responsive.

-> Is the site well-styled?
This is very objective.
It should be difficult to score a high score, but not difficult to receive the majority of the points.
It is important that everyone create a unique style sheet, even if using a template or framework.

10pts – The site is incredibly well-styled and the author went beyond the required (animation, hovering, etc done with CSS)
8pt – The site is very well-styled. The content has a layout that is easy to follow and a variety of colors and fonts were used.
4pts – The styling is lacking or the author relied almost exclusively on a template/framework.
0pts – Less than 9 unique CSS rules were used.

-> Are the images incorporated effectively? 5pts

-> Enhancements!!
You need to add four elements to your site that are unique – something beyond what we did in the four previous courses.
You are encouraged to be as creative as you would like (and creative does not need to mean time-intensive).
Some options for these "extras" include:

1- Add custom JavaScript (e.g. incorporate dynamic content, use JS to perform verification, modify the DOM).
2- Enhance the accessibility of your page (e.g. put your site through the some subset of the WebAim quick evaluation reference - http://webaim.org/resources/evalquickref/).
3- Incorporate plugins (e.g. Google Calendar, a map, parallax, etc.) You will need to show what you did other than just copying code.  Did you need to change any of the attributes?  Change any of the links?
4- Include a Carousel for your images (don't forget to turn off the automatic start feature if you can!!).
4- Use a sticky footer to create a consistent look across different browser heights (we usually only consider widths).
5- Add a third viewport layout (e.g. a table view that is different than mobile or large-screen).

Again, these are just suggestions, please feel free to let your own creativity be your guide.
Each extra will be worth 10 pts, for a total of 40 pts.
