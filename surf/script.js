if (location.hostname.match("4chan")) {
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = `
/* hides Captcha table row */
tr#captchaFormPart { display:none !important; }

div.adg-rects.desktop {
	display:none !important;
}

/* body background and text color */
  html, body
  {
    background: none !important;
    background-color: rgb(28, 28, 28) !important;
    color: rgb(195, 195, 195) !important;
  }

  body
  {
    margin: 2px !important;
  }

/* primary link color */
  body a, .quoteLink, .quotelink, .replylink, .useremail, span.nameBlock .useremail, .burichan_new .backlink a, .yotsuba_b_new .backlink a
  {
    color: rgb(110, 110, 149) !important;
    text-decoration: none !important;
  }

  body a:hover, a.replylink:hover, a.replylink:not(:hover), div#absbot a:not(:hover), .useremail:hover, span.nameBlock .useremail:hover, .burichan_new .backlink a:hover, .yotsuba_b_new .backlink a:hover
  {
    color: rgb(95, 95, 130) !important;
    text-decoration: none !important;
  }

  a.replylink:not(:hover), div#absbot a:not(:hover)
  {
    color: rgb(95, 95, 130) !important;
  }

  hr
  {
    opacity: 0 !important;
  }

  div.backlink
  {
    font-size: 13px !important;
  }

/* poster name */
  .name, .post-author
  {
    color: rgb(124, 45, 45) !important;
  }

  a.useremail span
  {
    color: rgb(110, 110, 149) !important;
    text-decoration: none !important;
  }

  a.useremail:hover span
  {
    color: rgb(95, 95, 130) !important;
    text-decoration: none !important;
  }

  .useremail:not(:hover) .name, .useremail:not(:hover) .postertrip
  {
    color: rgb(110, 110, 149) !important;
  }

/* poster trip */
  span.postertrip, .post-tripcode
  {
    color: rgb(62, 113, 87) !important;
    font-weight: bold !important;
  }

  div.post div.postInfo span.nameBlock span.postertrip
  {
    font-weight: bold !important;
  }

  .recaptchatable
  {
    border: 0 !important;
  }

  #doc #bd div[style="text-align:center;margin: 10px 0"]
  {
    display: none !important;
  }

  #logo-fp
  {
    text-align: center;
    height: 180px;
    opacity: 1;
  }

  #logo-fp a
  {
    display: block;
    visibility: visible;
    background: url("http://i.imgur.com/0luTi.png") no-repeat center !important;
    height: 180px;
    width: auto;
  }

  #styleSwitcher
  {
    display: none !important;
  }

/* settings box */
  #settingsBox, #theme.panel, #filters.panel, kbd
  {
    width: auto !important;
    overflow: hidden !important;
    background-color: rgb(35, 35, 35) !important;
    border-radius: 3px 3px 3px 3px !important;
    border: 0 !important;
  }

  #bannerCnt
  {
    border: 0 !important;
    width: auto !important;
    height: auto !important;
  }

/* reply to a thread */
  .post.reply:not(.preview)
  {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }

  .post.reply
  {
    overflow: hidden !important;
    display: block !important;
    background-color: rgb(35, 35, 35) !important;
    border-radius: 3px 3px 3px 3px !important;
    border: 0 !important;
    padding-right: 0px !important;
    padding-left: 7px !important;
    outline: 0 !important;
  }

  .post
  {
    color: rgb(195,195,195) !important;
  }

  .replyContainer
  {
    width: 100% !important;
  }

/* post form */
/* ===== **** THIS IS THE REAL WIDTH **** ===== */
  table.postForm, #quickReply
  {
    width: 55% !important;
  }

  #togglePostFormLink
  {
    display: none !important;
  }

  #postForm
  {
    display: table !important;
  }

/* this is the left column of the post form "Name"/"Email"/"Subject" */
  table.postForm > tbody > tr > td:first-child
  {
    background-color: rgb(40, 40, 40) !important;
    color: rgb(205, 205, 205) !important;
    border: 0 !important;
    width: 15% !important;
  }

  .qrWindow
  {
    width: 55% !important;
  }

  .qrForm form table
  {
    width: 100% !important;
  }

/* #search-box { display:none !important; } */
  #content .center
  {
    display: none !important;
  }

  .c-thread img
  {
    border: 0 !important;
  }

  #boards .column
  {
    width: 11em !important;
  }

  .open-qr-wrap
  {
    display: none !important;
  }

/* the big input list */
  #ft li,
#ft ul,
#options input:not([type='checkbox']):not([type='radio']),
#updater input:not([type='checkbox']):not([type='radio']),
.box-outer,
.boxbar,
.deletebuttons input[value=Delete],
.recaptcha_image_cell > center > #recaptcha_image,
[name='recaptcha_response_field'],
.top-box,
h2,
input:not([type="checkbox"]):not([type='radio']),
input:not([type='radio']),
input[type='file'] > input[type='button'],
input[type='submit'],
select,
#settings select,
textarea,
.button-group button
  {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: rgb(40, 40, 40) !important;
    color: rgb(205, 205, 205) !important;
    outline: none !important;
    border-width: 0 !important;
  }

  .boxcontent input,
.boxcontent input:not([type='checkbox']):not([type='radio']),
.boxcontent input:not([type='radio']),
.boxcontent textarea,
.boxcontent button,
#filter-list select
  {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: rgb(30, 30, 30) !important;
    color: rgb(205, 205, 205) !important;
    outline: none !important;
    border-width: 0 !important;
  }

  input[type="checkbox"]
  {
    -moz-appearance: checkbox !important;
    -webkit-appearance: checkbox !important;
  }

  #settingsMenu button
  {
    -moz-appearance: button !important;
    -webkit-appearance: button !important;
  }

/* make everything the same width */
  input[name="name"], input[name="email"], textarea[name="com"]
  {
    width: 90% !important;
  }

  input[name="sub"]
  {
    width: 70% !important;
  }

  input[type="submit"]
  {
    width: 19% !important;
  }

  ul.rules
  {
    display: none !important;
  }

  body:not(.is_index):not(.is_catalog) input[name="email"]
  {
    width: 70% !important;
  }

  body:not(.is_index):not(.is_catalog) input[name="sub"]
  {
    width: 90% !important;
  }

  #qrForm input[name="email"]
  {
    width: 90% !important;
  }

/* resize the email field for /b/ */
  form[action="https://sys.4chan.org/b/post"] input[name="email"],
form[action="https://sys.4chan.org/soc/post"] input[name="email"]
  {
    width: 70% !important;
  }

  form[action="https://sys.4chan.org/b/post"] input[type="submit"],
form[action="https://sys.4chan.org/soc/post"] input[type="submit"]
  {
    width: 19% !important;
  }

/* quick reply */
  .qrWindow
  {
    border: 0 !important;
    background-color: rgb(28, 28, 28) !important;
  }

  .qrHeader, .qrMessage
  {
    background: none !important;
    border: 0 !important;
    color: rgb(195, 195, 195) !important;
  }

  #recaptcha_logo, #recaptcha_tagline
  {
    display: none !important;
  }

  #blotter
  {
    display: none !important;
  }

  input[type="text"]:focus, input[type="password"]:focus, input:focus:not([type]), textarea:focus
  {
    border: 0 !important;
  }

/* new quick reply */
  #quickReply
  {
    width: 60% !important;
  }

  #quickReply form .postForm
  {
    width: 100% !important;
    padding-left: 15px !important;
    padding-bottom: 5px !important;
  }

  #qrHeader, #qrepHeader, div.postHover
  {
    background-color: rgb(25, 25, 25) !important;
    color: rgb(195, 195, 195) !important;
    border: none !important;
  }

/* pwease disable your adbwocker */
  body > div.center, body > form > div.center
  {
    display: none !important;
  }

  .click-me
  {
    display: none !important;
  }

/* remove the "Spoiler Image?" check */
  .postForm td label
  {
    display: none !important;
  }
/* little brackets next to submit button */
  .postForm td span.desktop
  {
    opacity: 0 !important;
  }

  .postarea td small, .postarea td.rules
  {
    color: #aaa !important;
  }

  .postarea form td:not(.postblock):not(.rules)
  {
    color: rgba(0,0,0,0) !important;
  }

  td[style="padding: 10px 7px 7px 7px;"]
  {
    background: none !important;
  }

  td[style="padding: 18px 7px 18px 7px;"], td[style="padding: 4px 7px 12px 7px;"]
  {
    display: none !important;
  }

  .postarea form[name^='post']
  {
    top: auto;
    left: auto;
    bottom: -4px;
    margin: 0 !important;
    z-index: 5;
  }

  span.filter-preview
  {
    display: none !important;
  }

/* post number */
  .postNum a, .ws .postNum a
  {
    color: rgb(195, 195, 195) !important;
  }

  .postNum a:hover, div.post div.postInfo span.postNum a:hover, .posteruid .hand:hover, .ws .postNum a:hover
  {
    color: rgb(245, 245, 245) !important;
  }

  .capcode.id_mod:hover
  {
    color: rgb(128, 0, 128) !important;
  }

/* [Reply] link */
  a.replylink
  {
    color: rgb(110, 110, 149) !important;
  }

  a.replylink:hover
  {
    color: rgb(95, 95, 130) !important;
  }

  hr
  {
    border-color: #000 !important;
  }

/* subject */
  .subject, .post-subject
  {
    color: rgb(170, 170, 170) !important;
  }

/* "Comment is too long" etc */
  .abbr, .sideArrows
  {
    color: rgb(100, 100, 100) !important;
  }

/* file name and size */
  .fileText
  {
    color: rgb(100, 100, 100) !important;
    font-style: italic !important;
  }

/* "Posting mode: Reply" */
  .postingMode
  {
    background: none !important;
  }

/* board title */
  .boardTitle, .boardSubtitle
  {
    color: rgb(205, 205, 205) !important;
  }

/* Admin capcode */
  span.capcodeAdmin *
  {
    color: #f00 !important;
  }

/* mod capcode */
  span.capcodeMod *
  {
    color: #808 !important;
  }

  .pages strong
  {
    color: rgb(205, 205, 205) !important;
  }

  .pagelist strong a
  {
    color: rgb(205, 205, 205) !important;
  }

/* remove style switcher */
  .stylechanger
  {
    display: none !important;
  }

/* FINALLY FIX THE DELETE FORM */
  .bottomCtrl
  {
    width: 100% !important;
  }

  .deleteform
  {
    display: none !important;
  }

  input[value="Report"]
  {
    display: none !important;
  }

  input[value="delete"]
  {
    display: none !important;
  }

  .postMenuBtn
  {
    display: none !important;
  }

/* pages box */
  .pagelist, table.pages
  {
    background: none !important;
    background-color: rgb(40, 40, 40) !important;
    color: rgb(80, 80, 80) !important;
    border: 0 !important;
    border-radius: 3px 3px 3px 3px !important;
  }

  td[align="left"] table.pages
  {
    width: 70% !important;
  }

  table.pages input[type="submit"]
  {
    width: 70% !important;
  }

  table.pages td
  {
    color: rgb(80, 80, 80) !important;
  }

  .next form input, .prev form input
  {
    width: 75px !important;
  }

  #boardNavDesktopFoot, #boardNavDesktop, #absbot
  {
    color: rgb(195, 195, 195) !important;
  }

  #boardNavDesktopFoot, #boardNavDesktop
  {
    font-size: 13px !important;
  }

/* home page */
  #announce
  {
    display: none !important;
  }

  .menubutton
  {
    background: none !important;
  }

  #recent-images li
  {
    background: none !important;
  }

  li.current a
  {
    color: rgb(205, 205, 205) !important;
  }

  #preview-tooltip-ws
  {
    display: none !important;
  }

/* center all the boxes */
  .yui-u.first, .yui-u
  {
    border: none !important;
    width: 100% !important;
  }

/* front page logo */
  #logo
  {
    background: url('http://i.imgur.com/0luTi.png') no-repeat center !important;
  }

/* code tags on /g/ */
  .prettyprint
  {
    background: none !important;
  }

  .prettyprint span
  {
    color: rgb(195, 195, 195) !important;
  }

/* disclaimer box */
  #disclaimer-dialog
  {
    background-color: rgb(35,35,35) !important;
  }

  .yui-icon.warnicon, .container-close
  {
    display: none !important;
  }

  #disclaimer-dialog .hd
  {
    background-color: rgb(35,35,35) !important;
  }
/* ======================================================= */

/* news page */
  .content h3, h3
  {
    font-size: 120% !important;
    background: none !important;
    color: rgb(195, 195, 195) !important;
    border: 0 !important;
  }

  .content
  {
    color: rgb(195, 195, 195) !important;
  }

/* why isn't this in it yet */
.boxcontent, .boxcontent ul, .boxcontent dl dt { color:rgb(195, 195, 195) !important; }
.boxcontent dd { border:none !important; padding-bottom:5px !important; }
.boxcontent { font-size:13px !important; }
span[style="color:#000080"] { color:rgb(195, 195, 195) !important; }
.boxbar h2 a, .boxbar h2 a:hover { color:rgb(195, 195, 195) !important; }
.boxcontent h3 a, .boxcontent h3 a:hover { color:rgb(195, 195, 195) !important; }

.post.op { display:block !important; }
.sideArrows { display:none !important; }
h3[style="text-decoration: underline; display: inline;"] { text-decoration:none !important; }

/* the new Settings panel */
/* "Click Me!" */
#first-run { background:none !important; color:rgb(195, 195, 195) !important; border:none !important; }

/* Thread Watcher */
.threadWatcher, #twHeader, .extPanel.reply { background-color:rgb(25, 25, 25) !important; color:rgb(195, 195, 195) !important; border:none !important; }

/* Settings box */
div.panelHeader { border:none !important; }

/* the post that appears when hovering over a quote link - this was impossible to style */
#quote-preview:not(.ws) { background:none !important; background-color:rgb(35, 35, 35) !important; color:rgb(195, 195, 195) !important; border:0 !important; outline:none !important; width:75% !important; overflow:hidden !important; box-shadow:2px 2px 2px 2px rgba(0,0,0,0.9) !important; }

#post-preview { background:none !important; background-color:rgb(35, 35, 35) !important; color:rgb(195,195,195) !important; border:0 !important; outline:none !important; box-shadow:2px 2px 2px 2px rgba(0,0,0,0.9) !important; border-radius:3px 3px 3px 3px !important; }

.post.reply.ws { width:auto !important; }

.preview.highlight { background:none !important; background-color:rgb(35, 35, 35) !important; border:0 !important; outline:none !important; overflow:hidden !important; }

/* all this "4chan pass" nonsense */
.passNotice { display:none !important; }
tr td .desktop { display:none !important; }

#captchaFormPart td { height:auto !important; }

/* fixes for /rs/ */
table td.postblock {
   background-color:rgb(40, 40, 40) !important;
   color:rgb(205, 205, 205) !important;
   outline:none !important;
   border-width:0 !important;
}
#header, #navbot, #navbotr { font-size:13px !important; color:rgb(195, 195, 195) !important; }
.logo { color:rgb(195, 195, 195) !important; }

/* fix for /f/ */
table.flashListing tr:nth-of-type(2n+1), .highlightPost {
   background:none !important;
}

div.closed { display:none !important; }

/* for the catalog page */
.btn-wrap .button { color:rgb(110, 110, 149) !important; text-decoration:none !important; }
.btn-wrap .button:hover { color:rgb(95, 95, 130) !important; text-decoration:none !important; }
.cataloglink { border:none !important; }

/* new deadlink style */
.deadlink, span.quote { color:rgb(120, 153, 34) !important; }

#logo-fp img { visibility:hidden !important; }

.shown { color:rgb(195, 195, 195) !important; }
.hand:hover { color:rgb(195, 195, 195) !important; }

hr { background-color:rgb(0,0,0) !important; }
#ft ul { height:12px !important; border-top:2px solid rgb(40, 40, 40) !important; }

/* make red text white */
p[style="font-size: large; color: red; text-align: center;"],
span[style="font-size: 14pt; color: red; font-weight: bold;"]
{ color:rgb(195, 195, 195) !important; }

/* hopefully fix the border around the logo */
div.boardBanner > img { border:1px solid rgb(195, 195, 195) !important; }

/* the ad spaces are popping up again for me */
.middlead.center, .topad.center, .bottomad.center { display:none !important; }

/* May update: remove hidden reply stubs */
.thread.post-hidden .replyContainer { display:none !important; }

.pages.depagelink { display:none !important; }
#errmsg { color:rgb(195, 195, 195) !important; }

.exif td { color:rgb(195, 195, 195) !important; }

/* a fix for /rs/ */
.postarea[align="center"] table[border="0"] { width:50% !important; }
.postarea[align="center"] table[border="0"] form { text-align:center !important; }
.postarea[align="center"] table[border="0"] form table { width:100% !important; }
/* red can go fuck itself */
span[style="color: red;"] { color:rgb(80, 80, 80) !important; }
span[style="color: rgb(204,87,17);"] { color:rgb(195, 195, 195) !important; }
img[alt="4chan"] { margin-top:15px !important; border:1px solid rgb(195, 195, 195) !important; }

/* finally fix the menus on the front page */
.yui-skin-sam .yuimenu .bd { background-color:rgb(50,50,50) !important; }
.yuimenuitemlabel, .yuimenuitemlabel:hover { color:rgb(230,230,230) !important; }
.yuimenuitem:hover { background-color:rgb(30,30,30) !important; }

/* post highlight color change */
.reply:target, .reply.highlight {
   background-color:rgb(39,39,39) !important;
   color:rgb(225,225,225) !important;
}
.reply:target span.name, .reply.highlight span.name { color:rgb(132, 52, 52) !important; }

.reply:target a.useremail span, .reply.highlight a.useremail span
{ color:rgb(110, 110, 149) !important; text-decoration:none !important; }
.reply:target a.useremail:hover span, .reply.highlight a.useremail:hover span
{ color:rgb(95, 95, 130) !important; text-decoration:none !important; }

.reply:target .postNum a, .reply.highlight .postNum a { color:rgb(225,225,225) !important; }
.reply:target .postNum a:hover, .reply.highlight .postNum a:hover { color:rgb(250,250,250) !important; }

.reply:target span.postertrip, .reply.highlight span.postertrip { color:rgb(65, 120, 89) !important; font-weight:bold !important; }

.ad-plea { display:none !important; }
`;
	head.appendChild(style);
}

if (location.hostname.match('wikipedia')) {
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = `
  body
  {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
    color: #ddd;
    background-color: #222 !important;
  }

  a,
    .tocnumber
  {
    color: #ddc02f !important;
    text-decoration: none;
  }

  a:hover, a.wbc-editpage:hover
  {
    color: #bba91a !important;
    text-decoration: underline;
  }

  .b, div, th
  {
    color: white !important;
  }

div.magnify, td.mbox-text, div.rt-tooltip, button.mw-interlanguage-selector, div#toc { display:none !important; }

  h1
  {
    border: 0px !important;
    font-family: 'Arial' !important;
    font-weight: 700 !important;
    font-size: 36px !important;
    color: #fff !important;
  }

  h2
  {
    border: 0px !important;
    font-family: 'Arial' !important;
    font-weight: 400 !important;
    font-size: 26px !important;
    color: #eee !important;
  }

  h3
  {
    border: 0px !important;
    font-family: 'Arial' !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    color: #ddd !important;
  }

  h4
  {
    color: #ccc !important;
  }

  [style*="color: black"]
  {
    color: white !important;
  }

  [style*="background:#f8f9fa"]
  {
    background: #2d2c2b !important;
    border: none !important;
  }

.mw-parser-output .external { background:none !important; }

  .reflist,
    .refbegin
  {
    background-color: #282828 !important;
  }

  .thumbcaption
  {
    color: #cdcdcd !important;
  }

  #content h3
  {
    font-size: 20px !important;
  }

  p
  {
    font-weight: 300 !important;
    line-height: 1.7 !important;
    color: #ddd !important;
  }

  .portal-column-right span,
    .portal-column-left span,
    body.ns-100 .mw-body-content h2,
    .mw_metadata th,
    .tracklist th,
    #mp-tfl-h2
  {
    color: #ddd !important;
    background-color: #444 !important;
  }

#mp-other-lower {
    border:0 !important;
}

h2#mp-lang, h2#mp-sister, h2#mp-tfl-h2 {
    background:none !important;
}

  body.ns-100 .mw-body-content th,
    body.ns-100 .mw-body-content div,
    body.ns-100 #portal td,
    .mw_metadata td,
    .tracklist td,
    .tracklist div
  {
    color: #ddd !important;
    border-width: 0px !important;
    background-color: #333 !important;
  }

  .portal-column-right,
    .portal-column-left,
    body.ns-100 .mw-body-content .subpages
  {
    color: #ddd !important;
    background-color: #222 !important;
    border-width: 0px !important;
  }

  .mw-highlight
  {
    background-color: #222 !important;
  }

  .mw-highlight .nc
  {
    color: #068dff;
  }

  .mw-highlight .nf
  {
    color: #068dff;
  }

  .mw-notification
  {
    background-color: #333 !important;
  }

  #Example
  {
    color: #ddd !important;
  }

  table,
    td,
    th
  {
    border: 0px !important;
    border-collapse: collapse !important;
    padding: 5px !important;
        /* color: #333 !important; */
    background-color: #444 !important;
        /* With this feature enabled, you loose visibility on colored table cells */;
  }

  ul,
    li,
    caption
  {
    background: transparent !important;
    border: 0px !important;
    line-height: 1.8 !important;
    font-size: 14px !important;
    font-weight: 300 !important;
  }

  li span
  {
    background: transparent !important;
    border: 0px !important;
    font-size: 14px !important;
  }

  .referencetooltip
  {
    background-color: #282828 !important;
  }

  dl
  {
    font-weight: 300 !important;
  }

  dt
  {
    font-style: italic;
    font-size: 16px !important;
    margin-top: 10px !important;
  }

  dd
  {
    font-size: 15px !important;
  }

  #p-logo a
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAACWCAQAAABZCk/vAAAACXBIWXMAAAsTAAALEwEAmpwYAAASpklEQVR42u2deXRb1ZnAb0LTFEjodM7paf9oD4kteZEsWV602rK2t0iyExIIFGhYmlPa0g5QKFugTCmdspe1bAWGgXba09CGMi0kpIdO25mGpgy0aViSEkoKw5A0JPaTHdshsX/zx3u2pCfZluwnb3C/cxSw9d77ft/33Xu/794rWYhpb0khhBCp45Nrki8kV6WOz/5sXre0EEKIzuPUgLpNRkZG/Z3q7zw2+7t52lbqXg8qjyrIo6KgPJL2CSFE53wFTy4QYv1C9V5ln4xZlL3Ju69eoL9nnrWU/rpW6ZeHCsFlZOSjan/yM/Mq8FNCEkKkF6Y86itjQOeI+ue0K7lQiKSIzPkgF0IIobrVmxTkkkRBvV5tmOOjvh7k6U+o65W3ZcoR5U31ivTH52zw66N18gvKDgW5bFFQtifXzcFRv1MkhRCdn1K2jTmolSJDytbOTwqhziX8FQvkxalvK8hTFoXktcqHV87+KU/vmamPqeuUjIxVonSr56T/YRb3/NOFrPfuc5VnrMMexd+UPEsIIRRx/iwdzV3KZqXfenAZGaVP2dRVn33WLAJfu1C9Vz5cGexRGVTvumDBLIHX04704mRC6a4w9oj39ycj6cWzIuXpWqT6kz+fHuzRUX+j6utaNMMpS8qhPqQMTSe4gX9UeSBVNwMpz2oR1cP9QXnP9GOPyhvJe4UQIiZWT/MC0wplrzw0g+B6vrc3lZ6Wfq+nFOljkicqW2YYOrfQ3ZT8dPqYiga/UYDa1PUq8qwSFfWyVHVF5/zOE9SLlV0ys1GUV9WLVi6t1PJSl/rS7MTOrvGkUhb6vku0CiFWHJd8ueK5mhVyOLl95WIh2kWXJavmx6pXKshzRhTUr3V+ZAqVnj6odX1UXa28IjPXRHlJPalr6SSCXx7p3WuUjQrynBQF5XF1te77RJnBblMft3LBYUbwNXVDenmZ/Tt5iTI8t7ENGVaGkxdOmO7ovTu5KOVMIs8rUY+ka5RFQgihjgPeqG5Q5hm40fN/kHQXyfZ1W6SqlLuU/TLzVZR96h2pZTm+T42M5nfJu+Yv9qjsTN2WSy3SivrXGS9Ap63QVXen4/ocvki5RUF+X4mCcoP8ISEtlQ7IvN9EeltaKqInxAfff+jx7uhSEXt/oh+MfYD+AfoH6B+g500GJMoQadJX5l9bKFO/Q5noEis4g9NLlhWjj5foLOO60zmDkxk7wUpy2oR6nEFnCfAlo0e4kwwZDjHIwLiSoZsD3EiHcWWUa9hHD30TXDdAPxm66WUzK8d0wLm8gUaGQ+Pc4xD/TNTKgA8T43we4bdk0IpKL2/xFJcQp5WOHLtHCHAqd/Ac3eNcu5sfcx4dtBIiPqYWMYJ0cQk/5Df8nd68e/TxAt/nK0QJWxvwUdrw4sLDtQwUUT7DO1yCm1YCtBPNCfgY7fhoJMDV9BQFz/AWZ+PES5A2IiTGQQ8ToBU3Hm5m3+gdehjmIaI48dJWgs/LQo8TJUwbAZxcCkUgfo6DIO10EM3zW4IoYdoJ0MDaolf28GMchAgTJkJsnJ4aJ0rHqB6/HL3DEI/Rgpc2wkSJW9nXZSQkEsSJ0kaILQWeP8CNNBMjgYRkGuElw3RtNHMbRwvQ3+VKfMSMd0ol6tHEv3DACPXXCBEkQrzE8X1S87pEnBBfApP6B7kH77iP1UO/hbdNfVTjXS6hvdzKiyDf5F00NIa5gOC4HcWilEYiwipeps8EsIXWkkaMr3OkIGJuoq3spMTPv9KNRh8v0klHWeCTzuYStPF9DpuGqj+jTBhsCcKs4FWT2XrYOKHZCqWF/ySDxgDfIzjOrGBxIhvgKvabfLeHfyI28SMJ8Ajvmcz2fEkTUn4EdbKDDBpv8RVCJfZwC9AjrOBl0yzdx20l9FiJAFfmTEs6+i7WlhmwMS5kDxoZ/kS4BJNbhi7hYLPJ6wM8RWeJZnvJZLb9XEukLA06uINeNHr4d9xl+3xK6EEuNaaWbEb2Gp8tQQkJJ1tMZjvMoyUlIllJ8xQDaBzg7LJnhykWrTG87DUBHOWKkszm5yoOmjrLNk4ty/Sf5XV60XiTxrKHuCmiSzTyQ9MMPcjPSJZkNo8JXaOXdWX19isZQqOP+2iZRLhPET3MKlNamqG/JDUkGnnCZLYj3EPp57JSPMEgPYBMZLrRZeI4+YsJYJhvlOA7iXbONCW0fbxaBnqSXjL0sQNXmTODJegJ2vk6wyaAFwmglHBtLW/mma0HOK3kJ18N9ABX0j4pn08RXSJGnIG8aaqHYbpKGuVD3GFKbAb5yegCx/ibRn5eoI8Mg8QmMaNbsiwZp4NfmGq4QzxcUj7u41n6TUNdP/6STL6KI2gM8DSRSY3uFqBLhPlyQQ33Dp4SQj5cpHIf5IoSvNjOfRxCA76atxo0zYvRUdbwmmmoO8AFEwJEuIVDRVZrnp+wjFFo5i00evkbp5WZBlmKHifKBlPI97BxwsD1sWuMVbqJVlNjnE83GgP8jMSkw90CdAkf15jSkwwvkRoXIM5aI9gzBQse3yU0gdE20INGhhvwTTrcLdl9iXAyr5oQ3mH9uKHo5zG60ejlgKkOyLBt3DJGIs12MmR4jbPKLnQtRk/gKihGBvm3cdAlZP5IBo1uHmO7yWy7+cI4YRzlMt5GI8NzuCeZzFi45xbkMmONLJvY/H6c9CRbae8kzq8Kqv47x5ndO3iIw2gc5DZapxDuFqFH8RfUcIf48piKRXiAfjQy/JZqrjWNFAP8cszdF5k1PMchNA6SLCn9qTC6hJsNpgluiPvHzMhX8xv60TjAt/EQLOjtezl7DLMlOI9eNDK8QM2UfG4ZegcrTAlKL2+Mqf659BhBHqCDBp42hfwQ14+REqnczRAah7mK4GxAl0nQWJDYwHlFlVO5naNo9PIsLuK08zmGTOns1jGqfoWd9KExhGMKM7rF6CGuMxWh/Wws2htV/sghNN7jPNqQSFDHPpPfIVX0OacCPQzwswk2O6b1VEWM9oINpYGia2arAY0MPdiJG6t83zFtShzh/iKpcIQfMYgGnDuF3N1y9DgdbGLQtNR4TUF6EuFRDqNxhAfwkzD2clIms2XYS2tBfw8Zo8ibk9hwqCC6RAcXmGq4DNtpRDGVHj1GSKujG9FxOvi1qYAd4vOmhCXOV3kPjSM8SHRKyYzlx4ginFqkhjstT8k4F3IYjUNszam0E0RYbzJbL8/gyzNaK78jg8YR1lkQ7pZ6PUGcn5pquIPcm7ds4TN2yYb4ds6+qESEz/B/BaVMLqBEythafJ6TJr0yUyGvS/j4Bt2mkP+fHHSJmPHTv3Na3igQJ8F/mMx2gG/lzBDt3MIBNAZ4jLAF4W7xubkIJ7Mzz3cZ3uD80cBu50ZD/c0oeQOVhI8bC3bdf51TvrYb4b6Py6eczFQAPYEn54jHSC5/5+gUF+C/yBjbkn6T58KsZbfJbLv4rPGuBOfyFzJkeJnUFFZmKoYuEeRyUw3XzxZOMtQ/m11k0NjNuQWVdgIX/23q7T3caLwvzM3G756aYqlasYOiMVoLipF3WIeETAc30W0sRrQUzMsSPq43XTvAk0ZWlzbWfd/loknspE8LegIXT5hOTMC1xn7JkwyicZA7aS5QXyJC3BQxvbzGWiQk1vJXetHYh8+S0b0C6MX24frZiorEWnYb++FS0SUoiXqeNYX8UdYjI3MVw2j08pNJ7aRP08noOC7DQ7n7cKuQuIqjaGT4A46ivVUixOcZyjPbIE+TJMkmBugBTiE8e9EThLjBlJG/x50oxrw9yNfGnJziNPCuye/vESfOETR6+V9cFuTuFTwPHyNQkMu/TdDYmztM3ZjqJwhyl2kfbojruI4hNI5wKyGLRvcKoceJsDkvM+vhKA9zFI1BfoR3TPUlIqRNZuvjebbRhwYoZZ62mXZ0iQ4uM209axyiBw1YM+5BgDhhfm/akMoYg+VzhC0M9wp9ACTKGmM010we3EH7uOpLhLm6YPtSnyKvsaReqzB6nCgbTcsWer/9zoTHOTs4g70FNVyG/Zw5xcXnaUGX8PHNgg3kDL2cOaHn4ig8XWTf/RmSloZ7xT7xVGwfrp9fkZpQfQkvNxdsPw9whwULkdOCHqeJZws8dw+BCScniTDn8LrJbH/ji5M6FjgD6BJ+vm4qRvbwpZIOmsRpZmseei8v4rU43Cv4Eb8YjabdmD/iL0l9CS835Zmtm4eLFDyzFj2BiydzJrhuHsZTYi7WgZKH/i6nT/qI2AygS4T5TE4uf5CTSz4IIFGXt2yxG7uFCWzF0WXiONgz6vdXqCtZfYk2vji6DzfArZaP7hVGTxDkJgNggOvwl6G+fnw4Y5yh9Fu0Gjdt6DJRIgb6MO5xP71WaDY/DxqbFb+lyfLRveLocSJsYoB+nqK1zN4aIWmcgr24AkPcKHrohI5MJb5zSqKDKwH4XNmrKzHa+RNH6SNo2Wpc/snqjr+HloqqJXV7fKRRLbdulE6+z4/wl61+gggX8lO+Vfbn1yZ2iEoKH3W7qpYI25Lqv1XhxMcpVpcItOHHT3vZ6ktECOAnMMmD/mNrdAo+HFRRvcu2RNiW2PZUU001taikLXyURIQQoZzPNZezfRkmRLuF4S6RRqEWndW203a8sC2x7bFho5pqluNHRbHsYQlixkd8J3dt3DJHKKj4WK5jY8tH1+GXYSNOYoJTruUgSJO+UrZEB4kUCeLYWJYFN6OPGOBEGoiQYj58KZdCiggNnJiFzkFfatub90OqqcJGAymSFZlTp0skkiRxUk2VGRzbG7YlwrbIdqvN/AtjMPCwpiK51HRIgjU0jgxqhXKD7UNCCCFsiu1121AhfhVVxMY4xTa7JU2UqmLexjZk223Tv2rPJmz6v3fbdhbz/TIaiZGcMz1fIUkMd/6glpVXbbfnUo/AV9nusu0vhF9ONT4iOV+0M3t79woi+KjKncayss92u21Zlne0GfiNtg12zGKjihq8dM5q36ukaaWGKmwUYfiBzV0EW292IYQQ1YvszmLwNmzYkSyb8a32d5qEoWeh9vYj9prqRWOC5xvA/jX7cDEDLMPJShKzzPsSK3CwvBj2sH3YflGWq6Rmt9kft/cWw19OCAV11oS5QoBlxb2t2TfYl5f1LeF2w0Y1p9ZsrMEsdqpxECQ9wymPRJIUIRxUY6dQz5rHa07OpSm51eivH61ZXftqLflSgx07LtpYNWPwEqsI4cKOnRrMGta+VHNSzdIsR9lNv6z22Nr1dZhFN4GLzhkJfZU0LgO5iG6X1n5kCtgjrVbUCiHqjqt7ue5wIX4N1XRMe76XIkw1NcWwD9dtr1s8orUFrU5/7ap7qa6IjW04kJCnxfsqMgkcVFNMk7o/16Wy+lraHCfUX1z/Fwe5Uk89ddhpIUa6wuCdRGnBTh311GPSY2f9RQ7r/+SN3up1fLtjvYNCqcNBCynSFdgmkknQSZIW6qmj2NMdlzuqszpWoOmB5DjGeaJzixOzOKjHgY/Vlo/6EqvxGfcvfK5zk+PTjmMqCj7SnPrrSuc+55AZ3kEdTosTHhUFp+FtE/SQc68zndVpGprTeFTDgw17GjCLk1qChspTX0xUCFCLk8LnNLzRcF+uNtPWXPqr0/WQa8hFvjRQj4t25CkVO2lk2migngbMT3AddX3PVZ/VY0aaa5HL7/6FG7M04KSJdlZMEnwFbXhw0kDhvd1PuHyumfuzlbm+dy92S+7uRnLFjRsXDTSi0lXWqJ+gC4VGXLhw48Z03/3uiHvxDPs729xCiOaFjfc3vtdoVhQXTrzjfCa9UFbSihNXAXQjjYcb725doD9v1rRGIYQQHpfnGU+/B7O4cRNDmWBLUyKJQgwXbgrv4enzbG5yZJ81i5p3BP+cpi1NmKWRBnzESI2BL6GSJIqXBjwUXt+02XOWHuSnzM6/xu0RQgjR9I9N65ozzeRKE0148OBHKvI1jBKdJPDhwUMTzWbpaTqn6WPZ+8/q1rygeXHz9S3ky4gJAgU9fyUBmgzogqu+2fzh5tn/p+dH0UWzEKLlUy3bWodayYpugCYakYxvKNP/baTJgM59d+tQy9aWTwrRLFrEnGq6uq1faN3Rilla8OAlhUoSLx4zsi7bW9dl7zPHWqsQQgjfJ7zrvW97yRc9AsKGp82/9b7lvcL3cX3wnLNNV93r9t3kI1e8ePERGP2vPLne2zDHsUfgvUKIwEJfk/8VP7kSoI0A+T/z7/C5AwuFaBEhMU+aTwghhP+sQH9gKIAuQcIEGfm/wNFAv//07HvnVfMvECKwMHBfYF8R9L2BuwML9PfMyxbQX4PBR4OEaKODECFCBB8J+rO/n9fwweOCgdAf2uigjdDWkD9w7LwH11tQCCFE6Pj2NZEXw6uDx2d/Nr3t/wF3znn21rryZQAAAABJRU5ErkJggg==") !important;
    background-color: #222 !important;
  }

  .mw-wiki-logo
  {
    padding-left: 15px !important;
    padding-top: 10px !important;
    border: none !important;
  }

  code
  {
    padding: 3px !important;
    background: transparent !important;
    color: #39892f !important;
    border: 1px solid #555 !important;
  }

  .hatnote span
  {
    color: #888 !important;
    background-color: #222 !important;
  }

  tt
  {
    font-family: 'Source Code Pro', 'Lucida Sans Unicode', 'Courier New' !important;
    font-size: 16px !important;
  }

  .new,
    .new:link,
    .new:visited
  {
    color: #cd5b45 !important;
  }

  blockquote
  {
    border: 0px !important;
    font-style: italic !important;
    font-size: 20px !important;
    margin: 35px 75px !important;
    line-height: 1.5 !important;
    font-weight: 300 !important;
    background: transparent !important;
  }

  select
  {
    padding: 0px 10px;
  }

  .mw-ui-button,
    .mw-ui-progressive
  {
    border: 1px solid #888 !important;
    color: #347Bff !important;
    background: #222 !important;
    text-shadow: 0px 0px 0px;
  }

  .mw-ui-button.mw-ui-progressive:hover,
    .mw-ui-button.mw-ui-progressive:focus,
    .mw-ui-button.mw-ui-progressive:active,
    .mw-ui-button:hover,
    .mw-ui-progressive:hover,
    .mw-ui-button:focus,
    .mw-ui-progressive:focus
  {
    box-shadow: 0px 0px 0px !important;
    text-shadow: 0px 0px 0px !important;
    border: 1px solid #347Bff !important;
  }

    /* Media Viewer, image preview */

  .mw-mmv-above-fold
  {
    background-color: #333 !important;
  }

  .mw-mmv-image-metadata
  {
    background-color: #111 !important;
  }

  .mw-mmv-dialog,
    .mw-mmv-dialog-down-arrow,
    .mw-mmv-download-attribution,
    .mw-mmv-download-pane,
    .mw-mmv-download-pane :hover
  {
    background-color: #333 !important;
  }

    /* End */

  #wpSave,
    #wpPreview,
    #wpDiff
  {
    border-radius: 4px !important;
    border: 1px solid #347Bff !important;
    color: #347Bff !important;
    background: #222 !important;
    text-shadow: 0px 0px 0px;
    padding: 0.5em 1em;
    cursor: pointer;
  }

  #wpSave:hover,
    #wpPreview:hover,
    #wpDiff:hover
  {
    color: rgba(52, 123, 255, 0.5) !important;
  }

    /* Search */

  #simpleSearch
  {
    position: relative;
    overflow: hidden;
    background: transparent !important;
    border-color: #666 !important;
  }

  #searchInput
  {
    height: 100%;
    color: #ddd !important;
    background: transparent !important;
  }
    
    /* Advanced search */
    
  input#ooui-1.oo-ui-inputWidget-input
  {
    color: #ddd !important;
    background: transparent !important;
  }

  #mw-searchoptions,
    #searchText
  {
    color: #ddd !important;
    background-color: #444 !important;
  }

ul {
  list-style-image:none !important;
}

.mwe-popups { display:none !important; }

  .mw-ui-vform .warning
  {
    background-color: #664a00 !important;
  }

  .mw-ui-vform .error
  {
    background-color: #5c0000 !important;
  }

  .mw-ui-input
  {
    border: 1px solid #888 !important;
    color: #ddd !important;
    background: #222 !important;
    font-size: 16px !important;
  }

  .mw-ui-input:focus
  {
    box-shadow: 0px 0px 0px !important;
  }

  .mwe-math-fallback-image-inline
  {
    -webkit-filter: invert(100%);
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'invert\'><feColorMatrix in='SourceGraphic' type='matrix' values='-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0'/></filter></svg>#invert");
  }

  .mwe-math-fallback-image-inline img,
    .mwe-math-element img,
    img[src*="LaTeX"]
  {
    filter: invert(100%);
  }

  .mwe-popups,
    div.navpopup
  {
    background-color: #333 !important;
    font-size: 16px !important;
  }

  a.mwe-popups-extract::after
  {
    background: #333 !important;
  }

  .mw-headline
  {
    color: #ddd !important;
  }

  .mw-content-ltr pre
  {
    font-family: "Courier New", Lucida Console, sans-serif !important;
    color: #a5c4ff !important;
  }

  .suggestions
  {
    font-weight: 300 !important;
    font-size: 15px !important;
    max-width: 300px !important;
    margin-top: 15px !important;
    border: 0px !important;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
  }

  .suggestions-results
  {
    border: 0px !important;
  }

  .suggestions-result
  {
    padding: 10px !important;
  }

  .imeselector,
    #searchEngines
  {
    display: none !important;
  }

  .mw-search-formheader
  {
    border: 0px !important;
    background: transparent !important;
  }

  .central-featured
  {
    height: 350px;
    background: transparent url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAFnCAQAAAC267xRAAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxMAAAsTAQCanBgAACjVSURBVHja7Z13nBvVtcdlY1NsPuQ9CJ8PeSl4d7W976pL2zQjaUbbtNpdDJgXHiWEGmoeLTjOC9WBEIcScDA1GAewqaZjCIROCD02ODaQgLGNG5hq7N/7QyPNSBrtzr3SSDOje8/nkz/IWnv2nq/u78y5Z+612djQMHqnChUDKwYeEH7UPJXNBhsFGv1V4kWRzyOIILJVnBedxWaEjbzHMVPE84Q1YYQkCyPyrngGmxc28hpCu7BKhkqGS3hDrGOzwwbVEOvEG4QsqJImQLxGqGGzxAbRiHxXuCyyIZwTK0kUPxIuCv8Hmy02tK5VxwqfhHaFoMF2Ch9H/5vNGBuTjNB0sUF8PoIQgQkQV4hV3HQ2e2zkStWbxasiCBNhJYniTvFysZbNIBsqIzo/sp4cKmXGJf6azSIb6VnVgLiNHqqkRSBuFHk2m2wkoHII90TyhkqGS1gitrFZLXeoaqJ/DG8NFwyrhCiGN0Wvih7IZrd8sTpT2FRYqBS1+Y3Rk9gMl9/z33ShK7JWH6gU6fwq0cVNY7NdPs9/PvHWiK5QKdL566NONuNlMAa+K94U+SRcFKwkUVwvLhzah828lQVwqnBIZGsIxbfIJmFonyksAlZM1KeJPeJTEYRKZBGIj4q+YdZ/ajGs2oQlkW/CJcNKSuY/F24RG1g0LDJi08QrhC9CMIYJ24VLzmGiaPrnv5miKKwzClQpuN4T+8IzWHTMm6yHhXsjCBnQIhDuFHpZhMyYVR0g3hHeHoJxLfKpeKv4nyxSJhrtU6P/KyBkAhMgntTInhTNMMJ7CoPCmxFTYCWJ4ktCOLw7i5yxk3VOWB7eGYK5LLxDvDvqZ9Ez6BjbXbzROGUFYlH8Qrx6NhNFow1uhni48HUYIRNbGMJ2cba4J4umcQRwLPJ0xNRQKTKux6PDLKJGgKpNfDLyRQjWschn4sNR9gJ/KcfgnsJFkZ1WgiqVce0Qzo2xNxVLMSLfEQ+NfBBGyKIWQWS1OBqdySJdXAGMiX+xLlSKVpvHogKLdpGGeIDwaGRHCOVhka+F+4TvsqjrPPr3E04Rvi0XqFIZ15fCMQNsV1E3qPYUjxBeCSNUhhaG8Lw4Z5C98aNDsu4VngvvCKF8LfyN8FSknZFQyLVqb/HmCELMIEC8dmCGjXWgFiBV3188XtjCsFLU5teLR4n7MjLyw+po4aUwwykr4xKfFQ9jdNDWqmaJz4S/YRjlbLV5XPweo4Q0Vd9PvFgAW6smeVKE+MsIK0Nohmov8ZTIGgaVxncVV4onRNmuogYBHBVWhr5lyBDYDvH1aJSRk3MIU8UDxOXs+Y+yDHF7dF+OlSFUsPqBeHbkayaA+bzAL54uHMBIShfAUyP/YFAVAK43osczmpJQeYTV4Z0MiwIVUHcKb0fbGFSzItexrEqHJsEF0R+Wb1X9e9G5wodMAHWqcb0XPTNajn1cwpHCuwwqneFaKRxcRkjNmCJUCC8zASzSlvUz/T8oC6z6q8VLBRbyYta4dorn91dYO1WfIV4gsM2aUpQh3hHnDln14BEhJLwXYmWFUsG1U3xHtNrBI127iVXiMiaABtj4WSzO8ljl6JHIj4RLI58xATSIKG4RLgxboY8reo7xDpct+5XrQ/E0EyM1ME3sFFaxsoJByxCvRhvE3cwogC3CQgaVoUURwhURc11nIH5HXBBez7Iq48MV/kicH93LLFnVj4VPw7tY2EwC1y5hc3Tc6CvVNNEhPMME0IQZ16NiS79RMy6xTVgY+ZKFyaSiuF28ImrEjCs6X1jPAmTyboh10XkGQqppitgrbGSpulXgEnwOI7yUEfVH7mJZlcUyrttEV2mhqozeEtnEQmFBuDZEF0VL1ccVOS2yjYXAsrYrsilyTLGb9fYU/eLrLKuyviiKL4lOvlh9XKJPWBJhB3aUy8bPLvFmoVP/tWqmeKPwKZvwMuuG2CpcK+yhG1TxPaIHC9vZNJeniZuigyOFF0VxNzEkPMbKCmVehrhf6O0uZI1LbBCXhr9iWRXLuMKfi7eJlYXC6iK2UjGTyxDCzujcPJHi9xaHxY8YVsyyyhBrxIgwg3al6heWM/ljlksWxbtEnryssL94V/gzNn3MJoTrU3FxdB/NUHmniyewE4uZaeyG+FY80jH5HT/c9Oho5DUGFTOi6vwL4lB4otdgo73iisjXbKqYEafzX0QfFr2qUA3NFG4UvmJTxIx64+dL4cpo+sYPNzM8R9jCBJBZ3hnXhvBoUH6dLPRTNinMCmZzZLDOYtPBrEC2I3ScLIXnsAlhViiwuBNTYAVuYhPCrFB7iYHLE1RNsdn8t7MJYVYosPxXJ6iaYrP5/8wmhBkDixkDixkDixkzBhYzBhYzBhYzZgwsZgwsZgwsZswYWMwYWMwYWMyYMbCYMbCYMbCYMWNgMStDsLYV0e4zkC/aPNJil+jk298ZWAwsBlaa8eCLHEYevEF8mdwjrTOoH1j5+VYysHjw4DCKOTgKZ+FKLMOb2FrQqfkn7sZvcDIOxwjiiGMAXI7JSvoSxxycgAtwE14ssC/bsAnP4Dqci2NxKEYm9Uj7HAoYxWz8D07DhViIB/EWNlP7uAbL8QecjSNxMIbz9K2EYHEIohc96EY3utCFLozgKrxbkDC+hrOlz+xCF7rRg170TQBWti+HYBk+KRhUSzCc5s9kHmn/avZJfsuf3o/5eJrwi7EJd+OYjNkKgjMfWMlJ6UEXAvDDBx988MILP36Pj/MM5E3wwSt9pg9+BNCFbvTmmKrcvhyMpwuA1VocDW/KHz/8k3pE+tVU+p3w3Iuj8ZZmD5/D7DQPA+hGj4S9CcEKog/d0pR44YUHbrjhgguH4h95BPIPcMENNzzSFCfRyjVVSV960KXiyyXYkBdW6zAnzR8l7PkFLwmWcg6TnrvhQh+e1eThrXBneOjP2zeDrFhyMF1wwQkHQniDMpDL4YATrrRAJr6D2lasxHc+4YsTDjjwY6zJA6wL0/zRtoaSgtUlrVfKr4QTDgSxclL/FsGRNWMB84KVvpB3pb5zHmlKOtGP9yjCuB5hOOCUJsmPgBRC7TmW7EsiPJ3oRJzKl23YhjfRCQdccKdWzoCmrI80x0rMoTyLbmkWT5gk11qKjiwPuyQhDJoVrEQ4ExOTDGkioE440IETKZ7M7kUnnHBLUHWhBz1SCJMTxRP44pHQ6sCR2EQF1tVS0HypgCX8mcwj7V9ODn0Kv5NfjMTXwoFOPDOBdy/DJWHlkQSwOzVfQbM+FSbDySGIYGpyulMBdaAT9xMH8ldwSmGUn22CCIKTpokn8CUBVyJAHbiWCqzD4YJHylmSMCX9mdgjrTOY7rf8jOiHFy44cPEEq/uI4muY7iGnF1bFqbzzKeOk6Umm0IlJiWI9YSCPgBs+KUNQ4jR5CDN9ScLllzB3ETxlyeaTsErIXro3hQkcrzqLiZTeCxcOyenbFRJWPgQUqxRXQN8MsAktT01QMSkO3E28QngRSCWedNMjBykRoCTmJ1I8ESYw79VPWCadxb4cvr0Kl4RVMlHn9AWqlN0NvOLRP4HWYYShPB1+BVaFyAGVmK8g9OYDCXOd0uBJfE98KaI5Z8qRhhVfLA9L1TaTfNbphh8eOPEKUSgXSOsDXzBfglKAPHDiUMLtkg3woVuvx3ZNngdyfDX/Dgdc8OpZVjBeP1ZyUrrggxuXE4XygQIHMt0XB/HjhFj8wCmeGPvQjbNV/ZoLV1rSUCaNfsmCZQAehIh27FZJU6UH5l64MAdbiMA6Hj0FWz/JPe9DD/6g4tV7cMMNf+pLWDZghaQcIbFOPEYQyK2IFTyQScwTcvgoEViXFlCYyf0OogcPqnh1sySDCd+K7F2pwUpMSwAezCUK5f+hr+BTpcT8eCJv7iw5WG+pfPkOgkfxkFNmPe9yMANE3Q736jBdSml24jUCb/5WYrCiKtL9XNp6FSpHsBIC5MZyomY1Pb6HyjVrPoE3G8GVFKzzVHy6BO7SrVdGeEsn+cDsxc+J5OdoXcCSpZkj2jc8tURgJb6YS1VQD5ZyvTIGWIkHZh+8+BdBKBfpMmXKNespAm/+pEPOp332svvaHoW7ZNU1Q4GVeBpbShDKl3QJpTLPupjopYTS1bFmq/hzLjzSbkBpBNoQL6zKFSSSfbotGNEllMk1ywueQAw3Y7BEYAVVissfwiftXnLlDVZSDN1EXZy/0w2s5OMEiRheUJLVgUcQj6v015Y0cTcOWHLKfBtBKJ/TKZTy4wSJGN5fArB4cOCxLsuXs+BFoIQlkJBRzm6QxfBIopeZhnRcs7rgIxLDD4re3ZDw9DwVIfSXNnE3EliyGK4kQOsyQ4nhqSUAK6hS/VueqrjzDCxZDK8nCOXThhLDO4ssPYlOsn+rCmFXaYXQOMcYyc9i4wQvV2zUVQy7CcVwdZHXCB6cSlHZEEJoLLCSYvg3Q4nhEwTeHFfUYPII4i6Vhwi5gsXASu3SB+DBAkM9Gf6KwJvFRQQrkT6sVWlGNoAQGguspBgKBK3BmzGmsxh2EXRd/KOI4VQXwn/BawQhNBpYiR54N/5CdIaD3mK43JBiyIPDvVm/f5kxhNBYZ5DKYvhrglC+orsYnkHgzR1FBItXeSI82RhCaDSwkp0FPQTysxVzdBZDD94nOMyoOCFVL42uKXVPg3HBSsrPAwSrxA06i6EHtxN48/OiBJUHh4eyfvftRhFCox3HTSc/b+kqhl3w4miiE0e5orwLHVFZ1Y+RhLDk65XxwJKb/t4vcTcp7UbThwgVASwO52f95neNI4TGBCshhreXvH6k3Gi6gegsHL0DyyOochDAn4wjhMa7mYJOflbrJobJ2tpBBBtNj+kMFg8eA9iocgaPYYTQiGDJ8kNyQunPdBdD7adLbMCArmsGDw6XZv3Wt40khEYEi67PYZlO0yl78wKBN7/RNbg8gviryrNxibvcjQ0WbZ/DB7qBlfBmhOg0h2d0DC8PDiMqm16HGEkIjQoWTZ/D2bqK4R+I3nncjFHdxJAHhyuyfuPracd/MLAK2OfwgK5i+CrhwUZX6RZgHkG8mPX7FhpLCI0KFk2fw0eI6AbWfxOf7Pw3HZ9TZ2fJ8laMGksIjQsWTZ/Dr3QSwyBuJD6XVM8dzIUqG/EGE0Kj3rAqi+H/EQRzhW5g0VzNcoNu3mTL8pVGE0LjgkXT56BH/YgHh2Opzn5/W4cw8+BweJYsb8Fwqd97NhNYNG12v9HlzKw/U16Ecowu3tyU9XteKP17z2YBi7bP4a86HCAZxD8pwVqiA1hBvK1y1IDhhNDIYMnVrPcI6kcjBRVDHhxOzePu18KGmgeHn6r8zYLxhNDoYCXEkESKrijo9PLgiG/NSH9jptDe3KZS5TegEBoXLGWfw1FEp2YFCxpKnugwuOyTUgsLVhCrs37HxaU/AMRsYNH0OWzFwQULJg8O5+R17+q/CyjMPDicrHIwCm9EITQ2WHI1axFBMK8rKFgPqr4kq92buQX1JvvEwyeMKYRGBku5tTNGsKXyRoFEIVdf+UeIEXQ6PFJQsD7I+vzzjSmExgcrKYYvE6wSRxYkmDw41fcb70MbwZq1AWJB5JAHhzNVLrnshQ9dxluvjA2WcmvndwRg3VIwsNQumDsF7USHG11SMG/uV2mCNqgQGh8suc9B+3FCqwogDLn6yt9DJzrQq/L/6HuGF48QPsr67POMKoRmAIumz+GEvL/B6n3l2/BndKITnQRXSm1CvADXdXL4ZdYnf4yAkbrczQQWbZ/DnQUAK6h6M/xRcMAJB84tatGWB4dHVFobDSuEZgCLps9hbZ5TzYNX7StfCSdccMMFLz4sWtGWBw8RG4x5JKSZwaLpc8jvBAUeHK5U+dTr4YIHXnjgwj0ERdtD8vbmIpXiq9+4Qmh8sGj7HO7LM5RBvKQCyGx44IMfPnjws6IVbXkEVTLMe41wNrK5waLpc/gQ9Cco8OBwsEpJ9u9ww4cAuqT77v9ZlKItDx7DKhcbn2ZkITQPWOR9DvSbKTw4XKfyiVfCAz+60YMu+OHBrQTeHJWXN7/N+rz34TGyEJoBLNo+h0fyCGUQb6j0PfXDiy70oBc96IIXhxfl2BIeQZVK/1IjHQBiXrBkMXxb980UHhyOUH27OfEmTC/60Ct584bux5bw4DCm8nx6grGF0Cxg0fU5XEy1SvDgcIvqpyXWiD4EUzcaXkvgzSnU3lxt5CMhzQyWcmtnlKDP4S9U32ceQaxSWf/6Un1PXEqaYwTe3EUJVlDloIHbjC6EZgIrKYYvEWymDBNPPA8Ox6t81qNpVW7ZG+1n0PyLAgIeHA5VgfcnRnvv2axgKbd2LieQnwXEU8+Dwx0qn/QLxXavUpovJfDmXCpvrlOp/xteCM0EFk2fw4vEYqh+jUjyKtxkKJXX+36i2ZuHKMBSez69xYive5kZrGSfw5ME90YfRBRMHpxqff+ejO1eZW1thWZvPiZ8TuXBqV4MepjxhdA8YCnFkOTapGuIwbpX5VNOzup7SnrjxVwCby4k9uYWlcPHTSCE5gIr2edAcm3Sq0SCoX6NiNrDvexNQKUBrzDPqerPp4vMIIRmA4u8z2ErDtf8zebBqa4/i1W2e5Xe3KfLcyoPDsepfMZsMwihmcBS9jmcRiA/NxGB9bDKJxyhWuWWvTlFl+dUHpzKWfevGu8kLCuARdPnoPUOwUQ73ceacxrlJU5rdXhO5RHEGpWc0RRCaEawEtcmkfQ5HKvp282DwwWqvVTqVW6lN0sInlNna/bmdBVhHzGHEJoLLNo+hz9rDKVaO91Ep3vK3hxB4M1CzWBlH0fyslmE0Hxg0fQ5aDlOKNFOt1E1lLke7pXevKnZm9c1yZj6cSRXmEUIzQcWXZ/DaZN+w9Xb6bZhwQShVHrzx4K+qa1+HMkW9BvzABDzg0Xb53C3hlCqtdNthjBhTkPnzZ80gfWgymEkBn7dywpgkfc5THacUK52uqcmyWmU3ryo2Zt3JpGyxHEk67L+3aXmEULzgUXb5zBxZ4F6O902nD9pKGVvfkvgzUmTevMrleKqYB4hNCdYNH0OD00SSrV2uvXomTSUsjcRAm+WTgrWihyrp0mE0KxgJfscniDoLIjklEMeHOao5EgPaQglnTcfTPiJPAZU3nu+2LgHgFgDLNo+h/NzBpMHp3o34lmaQknnzdkTejM/6+c3KlqjGVi69zkEVFLcXPZkTkB4BFXqUP+CV1N7Cl3XxQMTgKV2zeUT5hJC84KV7Cy4X3MoN2JIVQx5cKp1/GUaQ0nXdbEux11lPHjEVLK1eeYSQnOCpewsIDne/zJVRHhwqu80a39zj67r4vyc3izI8RjRbZ71yrxgyfUj7Z0Fz+WonwfxbtbPvkvQp0nXdfFkDrDUrrl8yGxCaG6wSDsLNmMsKzA8OJykWh3X/uYeXdfFRpWmPx4cDlI5k/kXZhNCs4Kl7Cw4kkB+rlYFa+kELyxo7eWi6br4rao316i8I+Q3mxCaGSyaPofsC3V5cHhf9epuklDS3aLxvIo3atdcLk+1RjOwitrnoL2zIPNCXfXT09P7NHlCbxYRNP2NZ3lzmEqh9udGPwDESmDRdhZcnxXK+1XwixH3adLdonFNljc3UNfTGFg6iKH2zoI307736qenv0DRp0l3i8arGd6oXXN5t/EPALEWWLSdBfLZejw4zFOtd9G0p8jeLCDw5vA0b47O8bKs6YTQ7GDRdBYsTgvloyrtKSGqXTll18Vmzd7cnObNYpWDxT1mFELzg0XeWZA8Wy/X6em0u3J0t2isTK1E6oXa280phOYGi7az4GfgwIMHh0tU/t9fURcjZW9+TeDN8Slv1Aq1x5lTCM0PFk2fw1IplEE8pdK31UXdnkJ3i8adKbCW5rWxxMAqeZ/DB+DAgcOQSma2PI9dOaU3DxJdz5Kw91RPjTClEJodLNo+h7PAIaj69HZGXrtysjc/J/Dmf8GBU/0XR5jlvWcrgkXT5/AA+tCnUv16P89ipOyNV+Wa3Vy2HEEEVVbcleYVQquARdrn8BF4jKt0EdyR566cUgzvIPKGUzmX6wYzve5lNbBoT1CYp9JFsA3H5P0MJntzDJE355n1SEgrg0VzgsLjKl0EqwogPUpvVhJ483DeHRYMLEP0OWxU2Sq+sQDPYEpvbiDw5uMJj08KMbBKu7UTJ+gsyLZDCiI9sjez8/BmouOTGFiG7nNQO4SxENKj9OYVam/+bp6TsKwLFm2fQ7pdVTDpkb25wgDeMLAKIj8hgj6H9G7OwYJJj+xNlKDPIV0Ih80thFYCi7zPQWnPFlB6lN78lcqbF8z3upc1wVLKzy+pQnlJQaVH9uZCKm8WmF0IrQQWTZ+D/LjPFfTIDdmbXqwn9mYzouY6AMTqYJHfFCEXKAsrPUpvHiL25hnzC6F1wKK9KSJh5xX8TWPZmzOJvZlvvveerQ0WTZ9D4k3jQMGlJ+FNF3zwqhyrPfF9O7z5hdB6YCX6HG4jCuV9OkiPUgyXEnnzFysIoZXAou1z2IZTdJEe2ZvjiLw53wpCaDWwaPoc9HrBSunNO5q92SAdCWny9cpqYNH0OSzR6cgNpTc3afbmMWsIobXAoutzOEq3F6xkMTxEM1i/tIYQWhEssj6Ht3Vsp1N686rGQ8MDZm7usy5Y5H0Oi3R8wUophldpvObAIkJoRbCSYsjjEw1dBOO6dhHI3gyovLqhfrJ8lxWE0JpgJTsLVmg44U/fvnKlN89oKNT6rSKE1gNLKYZzJw3l73XvIpC9uXhSb+4x45GQ5QSW3Ofw0aRdBHq308ne9KmcbJNup1tHCK0KlrY+h6eL0Feu9OaRCb1535xHQpYPWMrOgpMnDOWFRWmnk705Z0Jvlpn3AJDyAStZP/JgTc5Ari/SfVpyn4NP5TV62U60khBaGaxEn8PinIF8pEg1I6UY3pXTmzXmfu+5PMBSbqb8zwQ3BhZr80T25sQJdywtJITWBWuyPod/w1e0LgKlN6tzgPUTs7/uVS5gyfWjhaqBvKuImydKb/6U4157iwmhVcFSbqaMqPY5FDdVlsXwMFWwbrGaEFobrKT8vKByJHdxVwilN6+pXiNgMSG0LljKzZTLsgJ5a5FXCKUYXp3lzVvWE0Jrg5W7z+HwoteMZG+Gs/ocbjD/e8/lBlayfpTe5/BGCVYIZZ/DcxlgzbaeEFoZrNx9DgtLkirL3szPOhLSbzUhTAer43dRDEG0nBim9zlsRbwkK4TsDYeNOS7dtMa8ixhC9Nv2eSmwKs6shhMDGEHEEn+kep/DiyVKlZXePGadIyEz/sYI4uiHA9U7Kk5IgVV1dhWqYIcfB2HYImhl9zn8tmQrhOzNL1LevGwhIeQRwzi8sKMKVTuqTswAqxKzUAsBo4ggbKFqlgMd6EAnXCVbIWQxdKW8cVpECMMQMIowqlGBSnWwqlCJClSgEyJGIJr6D07KTwAeONGJTjhL+B6Msusi4Y0DbgscAMIjihEIaEdFEitU7ag6PgGWzWazn2VP/EcJrmp0YhhxcBboc/DBDRdccJe060npjRNOuKT1ysxCyGEUQ+iQ1ypUoQr2HfbjbclhP9MOJVqVqIQdfRhH1AJrlhceeOAtaSDTvXHDC7/Jm/v6MY6eFC0prGDfYT8uAywZrcSPH4gmCIiZFK7EZkofuhGAH34E0C0Fki+ZN70Kb7pMvF5FEUMEDTgwDaoq2HOBlQlXBarQgShGIZhwAnhwCKIPPZL1IljCQCq96UYPeiWseJPNqYhRiGhHVZoAVqX4yQlW9splhxOjGDIdWolrcRPh7ENQwoo3hDd9JfaG9m8YRhydsKutVFrAysy4KlCDMEYRNVkZgk+Fk5PCyDNvqMsK/RgFL6XqlepQaQErUxQPRBsiGEG/6b5lsjFvaL3uxwjCaMGBuQSQBKxsuOxoxyDipi+fMiPbrBnFANpyZ1U0YGVnXJUIYAz9bMrLxAYwBl+G/FVNQAsBWJlozUIDwoibuMbFTGutKg4edZilHSsysDLT+QpUog0RxE2+8cNsorJCHCG0KjdrJkOKFqxsUexEHHEWBgvaKEbQkVFV14RVBlhnaQMrE60KVKIXoxBYOm8ZC0PEKLqllYoYq4y9wp9qBUst42oGjzhL5y2SqsfBoZEsq8q0OSmwqmbaD7NvoYOrChWoQguiGEeYZVymLiuMQ0CzFFFKqDbYxyv3silH7Uz7zfavaeCqlMyLMQyxEJnUhjEKVyqWVFB9Zb+6eg+b2rD32leQwJUpitUIIoZ+lnGZaqUKYwAx9MGeIYBEUH1pf9juteUeldPtY/bXaEWxEhVoBo8xDDBRNAlWAxhDEE0ZVXVCrF6wD9un2iYb9mn2k4g+NmPlqkILhjDK0DIBVqMYRFMqblRQfWv/SeVuNq3Dvr/9LvtntBlXBSrRjTgGmCgauKwwiBEEpGhRQvWpfbF9HxvpsPfbl9OvWweiAX2ImbCPqzxS9Rh6Ua/eA6rV7rKHbHSjam97zP4RnSwmHG5CBONs48dQ8pcoDDXm8/wH+xq7aJ9hy2/Y5+eTcVWgAyOsDGEYARxGDG20VXXYYd9l32WfZyvMsDfYl9m/on1SnIVq9GAEgyzjKnlWFUNXVl8VEVaf25fYK22FG5W72UPVj1VDuykhq0QFmtCHOAZM/a6ieY3DIOLoQWMKqmR8SGJafb+99/tTbIUeDXtUH1q9nciRjDWsGYMYQ4QFusgWwTgG0JSxPpFFsnpz9VD97ja9Ru3M6hurPyUHKwFXJSrgQRwDDK4iQjWIEbgwK0P0iKDaWn1tjs2aQo7qQPUSmlUrAVcF6tCNEQyyoBchqxpCDF2olbaVKbG6udppK86w71nTVf06nSjaUYkqNIBjZYgilBX6UJ8PUqh+qdpdsbutuKP6DBJRrM54aqxEG0Ywyp4UdVqrxjCM1oxEnQirXdWbq39qK82orqy+pXpLPitXADEMWuQcQeP0VQ1iGD7pLXbKlWpj9aLqH9hKOWoCNctqQGJKyKrQgG6MsgJqATdr4uhCA6rSYCKLUM1tNW5b6cd3ptTwNRtp0bLDjnoIOIhBUQABPAhh1GWtUURQrasN7DvFZpxRM79mPT1cVXAhhmFWhsijrBDDMBxSRkULVc08m/FGTUfNwtqvajX+EbUSXAnI7KhEHQIYxjDrnKfoAY1hCH7USgJYk5pb7dGo3V5zRU2jzZijblqdo/bZWpBY+grWgD6Ms/5Tos2aIYyjBw0ZKxRZFGofq2tp2M1m7FF7eO322l20aNnRjAF28IjmrGoU/WhKiR8FVjtrt9aO28wxavepXVC7kXbdsqMaXgxh2JTnCBbPBAxjCJ5UTkW1Vq2rnV+7l81Mo7a1bmEdtJsSsWrY0YgARhBj3RA58qoRxOBDYyqnSs4fyZzXGTermmjUT6tz1L1D9IdmrGCNCLONnxybNTwaMlYospmue72+sW43m3lH3Tl1H9OjVYUOSRQZUEkBjGEQ7ajKB6sP606zmX/Uzaq7tG47LVrVqIMPw4iV/cYPL9WqvKhNZVQUWG2pu7Du+zZrjB/tVm+vW5aPKDYggDEMljFaPIYwCl++Ari4vuK/ptqsNerD9e/X76yHVkuHrAbN6MdYmYqigDGIaJKAkmdG+2zW76xfXR+wWXM0zqi/oH4twWRkoFUNNwYxVFbpPA8RQxiAC/YMrEjmsf7d+rnNu9usPBpq6i8lmpIMuBrgQwyxsiig8ghjBMPwoj4fqHbWn99QZSuDMaWxsuFvDdBumZA1IIiDLHTVcC7rxzh6U3+1PAskc9fwbMOPbOU0Go5sWE0DV2KSa9CBAcQt3A2RuAq3LbVKUUG1suFgW/mN+v9qmNvwIS1ctaiDFwOIWW7jh4eAEfTDLf2VlFC913Bmw/62ch2NsxoXNUK7pSNWhyYEMIoRS4EVRxx+NEpAyaiQzFPj7xt/aCv30eRuXNO4kxQuefVqRMQyr8EKGEMYDalVigKqbxtXNbbZ2JBWrlMbV9KuW/WohRP9iJk8nY8ihigcqM2SPgKs3mw8ntGUnsz/sPHsxq/J4WpIrVseDGIUIVNe2RnGKAbgzk8AP288vfF7jKTsVWtq8wFNDzZBu2VC1oRejJtu44fHEMbRrfg7kn8XyVw03dmyb90URlHujGu0aWXTt7Rw1aEV/RgxkShGMYIoWlBHD9WOpjeaooycyVeumU2nNK9thjZLwJX43wYJMA8GMGL4jR8eUamsUC953qj4a7T+/c2rmk5o3oNRo3Xd2r/54mbtk5u1fjXDixHEDIxWogfUg+asNYrk726e17wvo4VwtMxqfq55Rz5whQ17ZWc/xsArfKWA6tvmJ5pZqk47mo9ufpl+5aqHA1HEDHWPNS/lgJ2oz2eleq75MEZHXqN1/5YTWra0QLulZ1/N8GAQcUNs/PAQEMcA3FmZFMnf17K+5ajW/RgZhYBr75bFtGglrMsQF0gNYxR+hVdUWC1qm2FjZYUCZlzeludadpCi1ZySxjYIGEO0RH1cYUQxhghaUtLXTI7VNy1PtbDNGh3Q2qvliNZXWqHVlIgl4HJDxAiiRRbFRFlBgEshf0lYtP81rc+3zGmazijQabTv13pa6w5SuGTAWuBFrIjnCPLS2XoehQcUUH3Zemz7f7Lo651xHdD6BA1csjhyGC/KrYphDGAcfWjMkj0CqL5ufbCdperFGm2xtqfaoN0yEXNAQBxRnWtVcUTQmYUTid9tj7cLLNrFXbe+03Zo2wekaMmZVyvciGJMlzIEDxFjEOFCSwqrVnKsVreNte7NIl2C4diz7ZK2nbRwtaAFfoxipMBo8YgjDp9KNkUA1Y62uS6Wqpc0nW9rf7L9i3ZotUzEWhFGvGAZVxj9iCMkfbISJ+0etn/W/kh7HYusEeAab3+aIHBZmZdbqojzea5Ug4gjAldWNkXiW/vjHcMsosZJ5me0H9H+NS1arWiDG4MYy/PI/gG40j6TGKrt7Ye07MWiabDh3b3j5o4vO6DV0hFrQxt6MUp5x88QRtGd9lmJT9fuTceXHdd0TWVRNOjo4DqWd+yihasFDoQRI4CLRwiDiCGETrTQQ7Wz4+4OP4uesdHas2Ow402CoGaJoxsiRjW12nAYwCgEuLLyKZLf3/FSR6RjdxY5E4zvT+08uxMkpkSsHe3wYmTS12DDiGMEHsW/SnwK0W/e1XnK/kwAzTQ6D+i8o3M7GVgdack9jzgGcpQhIhhEHMG05LyDFKxPO291sB1AU8IVcdzrgFaTIWtHB9rRBjfCGMl6nSxRVgjBjTbpJ2WYCH7bnZ19LEKmHY6Zzn7HOgdI8ZIzIDcGFBs/ic2afrgVP0GKlAOOtU6ufQaLjsmHZ5rjKscXNCtXwlrRg1EMI4IIYoijC61ZskcA1WeOS0dYB6hVhqvNucT5jRNaLXP9ckinwPDozFqjtH+q8wvnLa4GFg1roTXN2eN8igCCrPWrFz1ZaxTJ5zkfdfp97AnQisM51TnHuY1u3epAAAEJLIq1arNreDoTQEvDtZ/zJucmGri6EKCDar1zoWsfNvNlMNwB160ukJgTDnSjSwKK6N9e73axGS+b0THd3eNaS4ZWN7pJoVrl8rZOY7Ndfgn9Wa4t2sHqQQ8JWJtcP2MzXL41rmr3H93b3JjcXOhFL1zQ8rPuze6rPAey2S33jMvpvqegYC1xt7NZZSOxcg17tnkwkbkRRBBuTPxTno2eMJtNNtLhmu9ZnxdY6zy/ZrPIhhpaLZ6rKMHa6bncw96sYSPXcE73NnmezwVWXy6wVnhrOthbgGxMNrzHeTd5d3mhNA84cPAg/b96d3rX+37MZowNjcO3v/cy78ZMsIKZYK3zXuT7DzZbbJCtW/W+G3xImhc8OHgh/xffNZ4aNktsUA1/u+9dGSxeBustP0vV2chnzJniO8+3Ng2s1b4z2LywUYh1y+67yPd5CCH4tvrm+SrYjLBRoNE+1V8VWNH1gH9WFesB1TT+H+KtLxGg0RMlAAAAAElFTkSuQmCC") no-repeat scroll center center / 200px auto;
  }

  .central-featured-logo
  {
    display: none;
  }

  .central-textlogo
  {
    filter: invert(1) !important;
  }

  .bookend
  {
    background-image: none !important;
  }

  .link-box em,
    .link-box small
  {
    color: #bbb !important;
  }

  .search-form fieldset
  {
    background-color: #444 !important;
    border-color: #888 !important;
    border-width: 1px !important;
  }

  #searchInput,
    #searchLanguage,
    #langsearch-input
  {
    background-color: #222 !important;
    border-color: #888 !important;
    border-width: 1px !important;
  }

  .formBtn
  {
    background-color: #222 !important;
    border-color: #888 !important;
    border-width: 1px !important;
    border-radius: 0px !important;
  }

  .mw-search-result-heading,
    .searchresult,
    .searchmatch
  {
    font-size: 14px !important;
    font-weight: 400 !important;
    padding: 3px 0px !important;
  }

  .searchmatch
  {
    font-weight: 700 !important;
  }

  .mw-search-result-data,
    .mw-search-createlink
  {
    display: none;
  }

  #mw-page-base,
    .vectorTabs
  {
    background: transparent !important;
    border-width: 0px !important;
  }

  #content
  {
    color: #ddd !important;
    border: 0px !important;
    margin-left: 215px !important;
  }

  .portal,
    .portal table
  {
    background: transparent !important;
  }

  #mw-panel
  {
    width: 200px !important;
    background-color: #222 !important;
    padding-left: 10px !important;
  }

  #p-logo
  {
    left: 0px;
    padding-left: 10px !important;
    background-color: white;
  }

  #p-logo a
  {
    width: 11em !important;
    padding-left: 40px;
    background-color: white;
    left: 0px;
    border-right: 1px solid #666;
    margin-left: -1em;
  }

  #p-logo a:hover
  {
    opacity: 1.0;
  }

  #mw-head
  {
    color: #ddd !important;
    background-color: #222222;
    opacity: 1.0;
    box-shadow: 0px 1px 2px #2b2b2b;
    -webkit-transition-property: opacity !important;
    -moz-transition-property: opacity !important;
    -o-transition-property: opacity !important;
    -ms-transition-property: opacity !important;
    transition-property: opacity !important;
    -webkit-transition-duration: 0.5s !important;
    -moz-transition-duration: 0.5s !important;
    -o-transition-duration: 0.5s !important;
    -ms-transition-duration: 0.5s !important;
    transition-duration: 0.25s !important;
  }

  #mw-head:hover
  {
    opacity: 1.0 !important;
  }

  .uls-settings-trigger
  {
    display: none !important;
  }

  #left-navigation
  {
    margin-left: 233px !important;
  }

  .wikitable
  {
    font-weight: 300 !important;
  }

  .wikitable td, .wikitable th
  {
    border: 1px solid #444 !important;
  }

  pre
  {
    line-height: 1.3 !important;
    font-family: "Courier New", Lucida Console, sans-serif !important;
    border: 0px !important;
    background: 0px !important;
    font-size: 16px !important;
    color: white !important;
  }

  .mw-code
  {
    border: 0px !important;
    padding: 17px !important;
    background: 0px !important;
    font-size: 16px !important;
  }

  #bodyContent tbody,
    #mp-left,
    .MainPageBG,
    #mp-left div,
    #mp-right div,
    #mp-topbanner,
    .list,
    .template-documentation,
    .collapsible th,
    .autocollapse th
  {
    color: #ddd !important;
    background-color: #222222 !important;
    border-color: #323232 !important;
  }

  #js-lang-list-button
  {
    background-color: #333 !important;
  }

  .app-badges
  {
    background-color: #222 !important;
  }

  .wikitable,
    .wikitable th,
    .wikitable rh,
    .plainrowheaders,
    .nounderlines,
    .wikitable tr,
    .wikitable td,
    .navbox-title,
    .navbox-group,
    .navbox-odd,
    .navbox-even,
    .hlist,
    #mp-left h2,
    #mp-right h2,
    #mp-bottom h2,
    .navbox-abovebelow,
    .group
  {
    color: #d2d2d2 !important;
    background:none !important;
  }

h2#mp-other {
  background:none !important;
}

  body.ns-0 #content tbody code
  {
    color: #88892f !important;
    background-color: #222 !important;
    border-width: 0px !important;
  }

  .suggestions-results,
    .suggestions-special
  {
    background-color: #333 !important;
  }

  .suggestions-results:hover,
    .suggestions-special:hover
  {
    background-color: #99742c !important;
  }

  .suggestions-results span,
    .special-query
  {
    color: #ddd !important;
  }

  .suggestions-result,
    special-label
  {
    color: #bbb !important;
  }

  .highlight
  {
    color: #393939 !important;
  }

  .mw-search-profile-tabs
  {
    color: #ddd !important;
    background-color: #222222 !important;
    border-color: #555 !important;
  }

  .wikitable tr,
    .wikitable td,
    .homonymie,
    .plainlinks
  {
    color: #eee !important;
    background-color: transparent!important;
  }

  .quotebox
  {
    color: #eee !important;
    background-color: #252525 !important;
    border-color: #555 !important;
  }

  .toc
  {
    background: transparent !important;
    border-color: #444 !important;
    border-style: solid !important;
    display: block !important;
    max-width: 300px !important;
  }

  .toctoggle
  {
    display: none !important;
  }

  body.mediawiki table.mbox-small-left
  {
    background-color: #222 !important;
  }

  .thumbinner,
    .thumb,
    .toccolours,
    .graytable
  {
    background: transparent !important;
    border: 0px !important;
    font-size: 16px !important;
  }

  .thumbimage
  {
    border: 0px !important;
  }

  .thumbcaption
  {
    font-style: italic !important;
    margin: 7px 0px !important;
  }

  .thumbimage:hover
  {
    opacity: 0.85 !important;
  }

  .dablink
  {
    margin: 14px 0px !important;
    font-weight: 300 !important;
    font-size: 18px !important;
  }

  #siteSub,
    .flaggedrevs_preview
  {
    display: none !important;
  }

  .ambox,
    .tmbox,
    .Note,
    .informationbox
  {
    margin: 5px 0px !important;
    font-size: 18px !important;
    line-height: 1.5 !important;
    max-width: 550px !important;
    font-weight: 300 !important;
  }

  .ambox td,
    .tmbox td
  {
    padding: 10px !important;
  }

  .ambox-text-small,
    .mbox-text,
    .Note td
  {
    font-size: 14px !important;
    font-weight: 300 !important;
    color: #ddd !important;
  }

  .ambox-image,
    .mbox-image
  {
    display: none;
  }

  #request_for_deletion,
    .ambox-serious
  {
    background: rgba(255, 0, 0, 0.1) !important;
    border: 1px solid rgba(255, 0, 0, 0.15) !important;
    color: #a00000 !important;
  }

  .tmbox-notice,
    .tmbox-move,
    .Note
  {
    background: rgba(150, 75, 0, 0.1) !important;
    border: 1px solid rgba(150, 75, 0, 0.15) !important;
  }

  .informationbox
  {
    background: #222 !important;
    padding: 10px !important;
    font-size: 14px !important;
  }

  .shortcutbox
  {
    background: #333 !important;
  }

  .editOptions
  {
    background: #222 !important;
    border: 0px !important;
  }

  .catlinks
  {
    background: transparent !important;
    border: 1px solid #aaa !important;
    font-size: 16px !important;
  }

  .infobox,
    .tright,
    .toccolours
  {
    color: #ddd !important;
    border: 0px !important;
    background: transparent !important;
    border-collapse: collapse !important;
  }

  .infobox td,
    .infobox th,
    .tright td,
    .tright th,
    .toccolours td,
    .toccolours th
  {
    padding: 5px !important;
    background: #333 !important;
    font-weight: 400 !important;
  }

  .infobox_v3
  {
    background: #333 !important;
    border-color: transparent !important;
  }

  .infobox_v3 .entete div
  {
    background-color: #333 !important;
    color: #ddd !important;
  }

  .image img:hover
  {
    opacity: 0.85 !important;
  }

  .globegris
  {
    background: transparent !important;
  }

  .mw-editsection-bracket,
    .references-small b,
    .mw-cite-backlink,
    .plainlinksneverexpand
  {
    display: none !important;
  }

  .mw-body
  {
    background-color: #222 !important;
  }

  #floating_object
  {
    display: none;
  }

  .navbox,
    .nowraplinks
  {
    margin: 10px 0px !important;
    border: 0px !important;
    background: transparent !important;
  }

  .navbox td,
    .navbox th,
    .nowraplinks td,
    .nowraplinks th
  {
    padding: 9px 6px !important;
    font-size: 14px !important;
    font-weight: 300 !important;
    border: 1px solid #222 !important;
  }

  .vertical-navbox th
  {
    background-color: #444 !important;
  }

  .NavFrame
  {
    border: 0px !important;
    background: transparent !important;
    padding: 0px !important;
  }

  .NavHead
  {
    margin: 10px 0px !important;
    padding: 12px !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    background: transparent !important;
  }

  .NavContent
  {
    background-color: #ffffff1a !important;
  }

  .Boxmerge
  {
    border: 0px !important;
  }

  #coordinates
  {
    display: none !important;
  }

  #mw-fr-revisiontag,
    #mw-fr-reviewnotice
  {
    display: none !important;
  }

  div#footer
  {
    margin-left: 14em !important;
    padding: 1.25em 1.5em 1.5em !important;
  }

  #footer-info-copyright,
    #footer-info-lastmod
  {
    color: #777 !important;
  }

  .oo-ui-window-frame,
    .oo-ui-popupWidget-popup
  {
    color: #ddd !important;
    background-color: #444 !important;
  }

  .oo-ui-buttonElement-button .oo-ui-iconElement-icon
  {
    -webkit-filter: invert(100%);
  }

  .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button
  {
    background-color: #222 !important;
    border-color: #222 !important;
  }

  div.mw-revslider-revision-wrapper-down.mw-revslider-revision-hovered
  {
    color: #d6a100 !important;
  }

  div.mw-revslider-revision-wrapper-up.mw-revslider-revision-hovered
  {
    color: #1e6db8 !important;
  }

  .mw-revslider-revision-older
  {
    background-color: #775900 !important;
  }

  .mw-revslider-revision-intermediate
  {
    background-color: #454545 !important;
  }

  .mw-revslider-revision-newer
  {
    background-color: #133656 !important;
  }

  .mw-revslider-revision
  {
    background-color: #555 !important;
  }

  del.diffchange.diffchange-inline
  {
    background-color: #775900 !important;
  }

  ins.diffchange.diffchange-inline
  {
    background-color: #133656 !important;
  }

  .diff-context
  {
    color: #999 !important;
  }

  td.diff-otitle,
    td.diff-ntitle
  {
    background-color: #333 !important;
  }

  .lang-list-button
  {
    outline-color: #222 !important;
  }

  .lang-list-content
  {
    background-color: #444 !important;
  }

  .bookshelf span
  {
    background-color: #444 !important;
  }

  .lang-list-container
  {
    background-color: #333 !important;
  }

  .localized-slogan
  {
    color: #555 !important;
  }

  .svg-Wikimedia-logo_black
  {
    -webkit-filter: invert(100%);
  }

  .hll
  {
    background-color: #2B2B2B !important;
  }

  kbd
  {
    background-image: -webkit-linear-gradient(top, #333, #111, #333)!important;
    -webkit-box-shadow: 0.1em 0.2em 0.2em #111!important;
    border: 1px solid #555!important;
  }

  div[style*="background:#ccc"]
  {
    background: #333!important;
  }
    
    /* Central Notice Banner */

  .cnotice
  {
    background-color: #333 !important;
    border: 1px solid #444;
  }

  .cnotice-toggle-box
  {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }

  div[style*="background:#FCFCFC"]
  {
    background: #263F1E!important;
  }

    /* Preferences */

  .client-js #preferences
  {
    border: 1px solid #c8ccd1 !important;
    background-color: #444 !important;
  }

  .client-js #preferences legend
  {
    color: #ededed;
  }

    /* German version */

  #hauptseite h2
  {
    background: inherit;
    border: none;
  }

  #hauptseite .inhalt
  {
    background: inherit;
    border: none;
  }

  #qualitaetssicherungstext
  {
    background-color: #444 !important;
    border: 1px solid #666 !important;
  }

    /* French version */

  #accueil_2017_en-tete
  {
    background-image: none !important;
  }

  .bandeau-section
  {
    background-color: #333 !important;
    border: 1px solid #666 !important;
  }

  .autres-projets
  {
    background-color: #333 !important;
    border: 1px solid #666 !important;
  }

table, td, th { background-color:#222 !important; }
`;
	head.appendChild(style);
}

if (location.hostname.match('github')) {
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = `
  pre,code,tt,kbd:not(.badmono),samp,.blob-code,.blob-code-inner,.file-data pre,.line-data,#gist-form .file .input textarea,.blob-code-inner,.export-phrase pre,.file-editor-textarea,.gollum-editor .expanded textarea,.gollum-editor .gollum-editor-body,.input-monospace,.wiki-wrapper .wiki-history .commit-meta code
  {
    font-family: "Operator Mono","Hack","Fira Code","Ubuntu Mono","Droid Sans Mono","Liberation Mono","Source Code Pro",Menlo,Consolas,Courier,monospace!important;
  }

  input[type="text"]:focus + .header-search-scope,.plans-row .plan,.filters li.selected,.vcard-stat,.zeroclipboard-button,.creator a,button#logout:hover,#user-links .sign-out-button:hover,.numbers-summary a:hover,.numbers-summary a:hover span,.tag-info a:hover,.tag-info a:hover span,#forkqueue .instructions,.addon h4,.header-nav-link:hover,.header-nav-link:focus,.api-status a:hover,.gist-item ul.meta > li > a:hover,.sidebar-module h3 a:hover,a.browse-button:hover,a.browse-button:hover span,.team-mention,.header-logo-invertocat:hover,.comment-header-actions li:hover,.org-repo-stats a:hover,.muted-link:hover,a.muted-link:hover,.org-module-link:hover,.org-module-link:hover .org-stats,.org-module-link:hover .octicon,.org-header-info .name-link:hover,.social-count:hover,.new-file-link span,.org-repo-name a:hover .repo-prefix,.timeline-commits .commit-meta .octicon-comment-discussion:before,.oauth-permissions-details .permission-title,.owner-name,.timeline-comment-action:hover,.discussion-sidebar-toggle:hover,.sidebar-assignee .assignee:hover,.timeline-commits .commit-message a:hover,.timeline-commits .commit-id:hover,#markdown-toc li a:hover,.sidebar-module ul ul li a:hover,.btn.btn-outline,.org-teams-list .team:hover .team-name,.gh-header-back:hover span:before,.org-header .edit-org:hover .octicon,.team-info-card .stats-group .stat:hover,.team-info-card .stats-group .stat:hover .stat-number,.btn-octicon:hover,a.discussion-item-entity:hover,.discussion-item-entity:hover,.issues-listing .table-list-issues .issue-comments-link:hover,.issues-listing .table-list-issues .issue-title-link:hover,.issues-listing .table-list-issues .issue-meta-section a:hover,.issues-reset-query:hover,.box-action:active,.issues-listing .table-list-issues .milestone-link:hover .octicon,.labels-list-action:hover,.commits-list-item .commits-comments-link:hover,.discussion-item-ref-title .title-link:hover,.box-action:hover,.repo-list-stats .repo-list-stat-item:hover,.branch-status-details,.notification-actions .btn-link:hover,a.discussion-item-toggle-open:hover,a.discussion-item-toggle-closed:hover,button.discussion-item-toggle-open:hover,button.discussion-item-toggle-closed:hover,.task-list a,.full-commit .btn-outline:hover:not(:disabled),.zeroclipboard-link,.stats-group-stat:hover,.stats-group-stat:hover .stat-number,.tag-references > li a:hover,.two-factor-toggle .two-factor-status button,.tree-browser tr.navigation-focus .octicon-chevron-right,#header ul.top-nav > li > a:hover,#header ul.top-nav > li > button:hover,.new-file-form,.date_selector td,.pagination a,.pagination span,.pagination em,.timeline-comment-actions .octicon:hover,a.org-link:hover,a.commit-link,.team-grid .team-name:focus,.team-grid .team-name:hover,a.tabnav-extra:hover,.tabnav .tabnav-extras:hover,.milestone-title-link a:hover,.application-authorizations .oauth-app-owner:hover,.expand-more,.participation a:hover,.commit .commit-title .issue-link,.gist-snippet-meta .gist-count-links>li>a:hover,.orgs-help-item-octicon .mega-octicon,.release-timeline-tags .expander-text:hover,.ajax-pagination-btn,.markdown-body a[href*="/labels/"],.select-menu-action:hover,.wiki-wrapper .wiki-history .commit-id:hover,.octotree_views .octotree_treeview .jstree-anchor .jstree-icon.tree:before,.octotree_github_sidebar a.octotree_toggle:hover,.octotree_github_sidebar a.octotree_opts:hover,.octotree_github_sidebar a.octotree_opts.selected,.octotree_github_sidebar .octotree_views .octotree_treeview .jstree-anchor,.milestone-name:hover,.toolbar-item .menu-target:hover,.toolbar-item:hover,.toolbar-commenting .dropdown-item:hover,.member-meta .member-meta-link:hover,.octofication .broadcast-icon,.member-meta .btn-link:hover,.ghd-icon-active,.oauth-application-info .meta-link:hover,.header-logo-wordmark:hover,.octotree_github_sidebar a.octotree_toggle:not(.octotree_loading):hover,.lock-toggle-link:hover,a.lock-toggle-link:hover,.toolbar-item .menu-target:focus,.toolbar-item:focus,.sub-nav li a:hover,.site-header-menu .nav-item:hover,.scoped-search .form-control.focus .header-search-scope,.btn-link,a.btn-link,.text-blue,a.text-blue,.orghead .edit-org:hover,.Box-body-row--highlight .Box-row-link:hover,td.selectable-day,.date-selector .date-button,.exploregrid-item:hover .exploregrid-item-title,.stale-files-tab a,.intgrs-lstng-item-link:hover .intgrs-lstng-item-header,.link-blue,a.link-blue,.profile-rollup-toggle:hover,.site-header-nav a:hover,.link-gray-dark:hover,.dashboard-notice .octicon-organization,.Box-row-link:hover,.project-header-link:hover,a.project-header-link:hover,td.icon .octicon-file-directory,td.icon .octicon-file-symlink-directory,td.icon .octicon-file-submodule,.pl-corl
  {
    color: #a0b4c8!important;
  }

  span.labels> a,span.IssueLabel>a,.IssueLabel,.label-name
  {
    color: #fff!important;
    letter-spacing: .5px;
    font-size: 13px;
    padding: 3px!important;
    text-shadow: -.25px -.5px .25px rgba(0,0,0,0.95)!important;
    filter: hue-rotate(180deg);
  }

  .btn:active,option:hover,.listings-layout .nav li a:hover,.state-merged,#fork-select .target:not(.disabled):hover,.flash-notice,table.upgrades tr:hover td,.email-format .email-hidden-toggle:hover a,.dashboard-tabs a:hover,.dropdown-menu > li > a:hover,.documentation-results a:hover,.hidden-text-expander a:hover,.dropdown-item:hover,.dropdown-item.zeroclipboard-is-hover,.subnav-item.selected,.subnav-item.selected:hover,.subnav-item.selected:focus,.example-nav li a.selected,.typeahead-result.navigation-focus,.typeahead-result:hover,.issues-reset-query:hover .octicon-x,.segmented-nav li.active,.diff-expander:hover,.pagination .current,.owner-select-target:hover,.filter-item.selected,.release-timeline-tags .expander-text:hover .expander-dots,a.gollum-minibutton:hover,a.gollum-minibutton:visited:hover,.search-result-item.navigation-focus,.gist-quicksearch-result.navigation-focus,.gist-snippet .link-overlay .link,.suggester li.navigation-focus,.btn.btn-outline:hover,.btn.btn-outline:active,.btn.btn-outline.selected,.btn.btn-outline.zeroclipboard-is-hover,.btn.btn-outline.zeroclipboard-is-active,.select-menu-item:not(.select-menu-item-parent).navigation-focus,.reaction-sort-item:hover,.reaction-sort-item.selected,.pull-request-link:hover,.issues-reset-query:hover .issues-reset-query-block,#com .dropdown-menu a:hover,.date-selector td.selected,.date-selector td.selectable-day:hover,.add-line-comment,button.add-line-comment,.suggester .cur,.autocomplete-item.selected,.autocomplete-item.navigation-focus,.select-menu-item.navigation-focus.selected,.reblame-link:hover
  {
    background: #a0b4c8!important;
  }

tr.js-navigation-item {
    background-color:#151515;
}

  .context-button:after
  {
    border-color: #a0b4c8 transparent transparent!important;
  }

  .octofication .message,.panel-nav:not(.disabled):active,.diagram-icon:not(.active),.btn.btn-outline,.btn.btn-outline:hover:not(.ajax-pagination-btn),.btn.btn-outline.zeroclipboard-is-hover,:checked + .radio-label,.gist-snippet .file-box:hover .file,.octofication .message,.reaction-sort-item.selected,.pull-request-link,.timeline-progressive-disclosure-button:hover
  {
    border-color: #a0b4c8!important;
  }

  .header-nav-link:hover .dropdown-caret,.header-nav-link:focus .dropdown-caret,#com #header .top-nav .dropdown-button:hover .dropdown-caret
  {
    border-top-color: #a0b4c8!important;
  }

  .table-list .table-list-item.unread .table-list-cell-checkbox,.Box-row--unread,.Box-row.unread
  {
    border-left-color: #a0b4c8!important;
    box-shadow: 2px 0 0 #a0b4c8 inset!important;
  }

  .notification-indicator .mail-status
  {
    background: #de50dc!important;
    border-color: #1d1d1d!important;
  }

  ::selection
  {
    background-color: #93bcd1!important;
    color: #fff!important;
  }

  ::-moz-selection
  {
    background-color: #93bcd1!important;
    color: #fff!important;
  }

.gh-header .gh-header-sticky.is-stuck + .gh-header-shadow { background:#050505 !important; }

  .CodeMirror-selected
  {
    background: rgba(255,255,255,.12)!important;
  }

  .CodeMirror::selection
  {
    background: rgba(255,255,255,.12)!important;
  }

  .CodeMirror::-moz-selection
  {
    background: rgba(255,255,255,.12)!important;
  }

  ::-webkit-input-placeholder
  {
    color: #666!important;
    opacity: 1!important;
  }

  ::-moz-placeholder
  {
    color: #666!important;
    opacity: 1!important;
  }

  ::placeholder
  {
    color: #666!important;
    opacity: 1!important;
  }

  .select-menu-text-filter input::-webkit-input-placeholder
  {
    color: #555!important;
  }

  .select-menu-text-filter input::-moz-placeholder
  {
    color: #555!important;
  }

  .select-menu-text-filter input:-ms-input-placeholder
  {
    color: #555!important;
  }

  .select-menu-text-filter input::placeholder
  {
    color: #555!important;
  }

  a:focus,button:focus,[tabindex]
  {
    outline-color: #93bcd1!important;
  }

  input.focus[type="text"],#adv_code_search .focus.search-page-label,input[type="text"]:focus:not(.js-color-editor-input):not(.tree-finder-input):not(.js-site-search-focus):not(.tag-input-inner),.focused .drag-and-drop,#adv_code_search .search-page-label:focus,input.focus[type="password"],input[type="password"]:focus,input.focus[type="email"],input[type="email"]:focus,input.focus[type="number"],input[type="number"]:focus,input.focus[type="tel"],input[type="tel"]:focus,input.focus[type="url"],input[type="url"]:focus,textarea.focus,textarea:focus,#q:focus ~ button,input.color-editor-input:focus,#ghd-settings select:focus,#ghd-settings input:focus,.intgrs-lstng-item:hover,.ajax-pagination-btn:focus,.select-menu-item:focus,.form-control.focus,.form-select.focus,.form-select:focus,input[type="checkbox"]:focus,.upload-enabled.focused
  {
    border-color: #93bcd1!important;
    box-shadow: inset 0 1px 2px rgba(0,0,0,.075),0 0 2px #93bcd1!important;
    outline-color: #93bcd1!important;
  }

  select,input:not(.btn-link),textarea
  {
    -moz-appearance: none!important;
    background-color: #25272a!important;
    border-color: #343434!important;
    color: #eee!important;
  }

  input[type="checkbox"],input[type="checkbox"]:focus,input[type="radio"],input[type="radio"]:focus,input[type="checkbox"]:hover:active,input[type="radio"]:hover:active,input[type="checkbox"]:disabled,input[type="checkbox"]:hover:disabled,input[type="checkbox"]:hover:active:disabled
  {
    -webkit-appearance: none!important;
    background-color: #25272a!important;
    border: 1px solid #484848!important;
    color: #eee!important;
    height: 1em!important;
    width: 1em!important;
  }

  input[type=radio]
  {
    border-radius: 100%!important;
  }

  input[type="checkbox"]:checked
  {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48cmVjdCBoZWlnaHQ9IjUxMiIgd2lkdGg9IjUxMiIgeT0iMCIgeD0iMCIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGQ9Im05OC43OTk5ODggMjEzbC0wLjc5OTk4OCA4OWMwIDAgMTAzIDEwMiAxMDQgMTAyYzEgMCAyMDUgLTIwMSAyMDUgLTIwMWMwIDAgMCAtOTAgMCAtOTFjLTAuNzk5OTg4IDAgLTIwNCAyMDMgLTIwNCAyMDNsLTEwNCAtMTAyeiIgZmlsbD0iI2RkZGRkZCIvPjwvZz48L3N2Zz4KCg==)!important;
    background-size: cover!important;
  }

  input[type="checkbox"]:indeterminate
  {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48cmVjdCBoZWlnaHQ9IjUxMiIgd2lkdGg9IjUxMiIgeT0iMCIgeD0iMCIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IGhlaWdodD0iMTI4IiB3aWR0aD0iMzg0IiB5PSIxOTIiIHg9IjY0IiBmaWxsPSIjZGRkZGRkIi8+PC9nPjwvc3ZnPg==)!important;
    background-size: cover!important;
  }

  input[type=radio]:checked
  {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48cmVjdCBoZWlnaHQ9IjUxMiIgd2lkdGg9IjUxMiIgeT0iMCIgeD0iMCIgZmlsbD0iIzAwMDAwMCIvPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMTI4IiBmaWxsPSIjZGRkZGRkIi8+PC9nPjwvc3ZnPg==)!important;
    background-size: cover!important;
  }

  code
  {
    overflow: visible!important;
  }

  pre,.highlight,.diff-table,.tab-size
  {
    tab-size: 4!important;
    -moz-tab-size: 4!important;
  }

  div[id^="contribution-joined-github"] img
  {
    padding-bottom: 20px!important;
  }

  .pr-toolbar.is-stuck
  {
    pointer-events: none!important;
  }

  .pr-toolbar.is-stuck+.pr-toolbar-shadow
  {
    background: #25272a!important;
    top: 0!important;
    height: 40px!important;
    border-bottom: 1px solid #343434!important;
  }

  .diffbar
  {
    padding-top: 10px!important;
    padding-bottom: 10px!important;
  }

  .is-stuck .diffbar
  {
    background: #25272a!important;
    height: 2.5em;
    pointer-events: all!important;
  }

  .profile-timeline-month-heading:after
  {
    width: calc(100% - 94px)!important;
  }

  .comment-reactions .user-has-reacted
  {
    color: #8195be!important;
  }

  .comment-reactions .user-has-reacted:hover
  {
    color: #a1b5de!important;
  }

  a.label[href*="/issues?"][style*=" color: #f"],a.label[href*="/pulls?"][style*=" color: #f"]
  {
    color: #e8e8e8!important;
  }

  a.label[href*="/issues?"][style*=" color: #e"],a.label[href*="/pulls?"][style*=" color: #e"]
  {
    color: #e8e8e8!important;
  }

  a.label[href*="/issues?"][style*=" color: #d"],a.label[href*="/pulls?"][style*=" color: #d"]
  {
    color: #e8e8e8!important;
  }

  a.label[href*="/issues?"][style*=" color: #c"],a.label[href*="/pulls?"][style*=" color: #c"]
  {
    color: #e8e8e8!important;
  }

  a.label[href*="/issues?"][style*=" color: #3"],a.label[href*="/pulls?"][style*=" color: #3"]
  {
    color: #25272a!important;
  }

  a.label[href*="/issues?"][style*=" color: #2"],a.label[href*="/pulls?"][style*=" color: #2"]
  {
    color: #25272a!important;
  }

  a.label[href*="/issues?"][style*=" color: #1"],a.label[href*="/pulls?"][style*=" color: #1"]
  {
    color: #25272a!important;
  }

  a.label[href*="/issues?"][style*=" color: #0"],a.label[href*="/pulls?"][style*=" color: #0"]
  {
    color: #25272a!important;
  }

  .markdown-body pre code,.markdown-body pre tt
  {
    padding: .2em 0!important;
    border: none!important;
  }

  .markdown-body code:before,.markdown-body code:after,.markdown-body tt:before,.markdown-body tt:after,.markdown-body pre code:before,.markdown-body pre code:after,.markdown-body pre tt:before,.markdown-body pre tt:after,img[src$="/notices/context_button.png"]
  {
    display: none!important;
  }

  .intgrs-lstng-item-description:after
  {
    background-image: linear-gradient(to right,rgba(24,24,24,0),#25272a 80%)!important;
  }

  .marketplace-product-callout-bg
  {
    background-image: linear-gradient(to right,rgba(24,24,24,0),#25272a)!important;
  }

  .markdown-body a:hover *
  {
    text-decoration: inherit!important;
  }

  #message-list .pagination a:hover,.link-mono:hover,.text-mono:hover
  {
    text-decoration: underline!important;
  }

  .branch-infobar
  {
    font-weight: 400!important;
  }

  .merge-pr-more-commits,.profile-timeline-month-heading
  {
    padding: 2px 5px!important;
  }

  input.tree-finder-input,input.tree-finder-input:focus,input.js-site-search-focus
  {
    background: transparent!important;
    border: none!important;
    box-shadow: none!important;
  }

  .markdown-body a:not([href]),.markdown-body a code
  {
    color: inherit!important;
    text-decoration: none!important;
  }

  .markdown-body strike code,.markdown-body strike tt
  {
    text-decoration: line-through!important;
  }

  .blame-commit + .blame-line
  {
    border-top: 1px solid #484848!important;
    box-shadow: none!important;
  }

  .dropdown-menu,.word-upload-callout,.select-menu-modal
  {
    box-shadow: 0 3px 12px rgba(0,0,0,.4)!important;
  }

  .exploregrid-item
  {
    border-color: rgba(255,255,255,.075)!important;
    box-shadow: 0 1px 2px rgba(0,0,0,.05),0 5px 10px rgba(0,0,0,.05)!important;
  }

  .exploregrid-item:hover
  {
    border-color: rgba(255,255,255,.15)!important;
    box-shadow: 0 1px 3px rgba(0,0,0,.15),0 8px 15px rgba(0,0,0,.3)!important;
  }

  h1,h2,h3,h4,pre,pre *,code,tt,li,p,input,a,th,kbd,.news,.btn,.metabox em.placeholder,table.notifications,#download_button,.comment-count,em.date,input.search,#user-links,.upper_footer,.switcher > span:after,.upgrades td,.blog-feedback,.description,.nav-bar-tabs,.pagination span,.mini-icon-advanced-search,.count,.select-menu-title,.select-menu-button:after,#repo-message,.usage-bar dt,#user-links .name img,#common-issues,.upload-progress,.svg-tip,.meta,.flash,.flash-global,#files .file .meta .info span,.file-box .meta .info span,body#com #header,.search-filters,.usage-bar dd,.avatar-stack.multiple-avatars .avatar:last-child,.avatar-stack.multiple-avatars:before,.box-action,.file-diff-line,.file-code-lines,#adv_code_search .search-page-input,li.ssh-key .ssh-key-state-indicator.not-recent,#gist-form .gist-name-textbox,.labels .label,.octotree_views .octotree_view .octotree_view_header,.fullscreen-overlay textarea,.avatar-child,.discussion-item .label-color,.coupons .coupon-form-body,.label-private,.repo-file-upload-progress,.more-repos,.header .header-search-wrapper.focus,.blame-commit .blame-commit-info,.label,.Label
  {
    box-shadow: none!important;
  }

  .user-nav .avatar
  {
    float: none;
    margin-right: 5px;
    width: 30px;
    height: 30px;
  }

  a,button,p,ul,li,dl.form label,.formbody label,.js-context-button,.footer-text,.octicon-mark-github,.minibutton span,span.name,.diff-line-code,.num,.user-list em,.diff-expander .octicon-unfold:hover,.select-menu-loading-overlay:before,.select-menu-item a,.minibutton,.mini-icon,.mini-icon:before,.list-tip:before,.line-num-content,.diff-expander .octicon-unfold,.minibutton i,.comment-header-author,.header,.gist .gist-file .gist-meta,.logo-placeholder,.branch-group-heading,.render-bar,.auth-form-header .octicon,.render-info .symbol,.article-meta,.select-menu-title,.text-shadow-light,.text-shadow-dark,ul#bootcamp li a h4
  {
    text-shadow: none!important;
  }

  body > pre,.textographic a.repo,.stars-browser .filter-bar,.highlight .file-diff-line:hover pre,.gravatar,.topsearch span.search-input,p.meta,.sidebar .milestone,.commit-desc pre,#facebox,.profilecols .filter-bar,.btn-group,div.content-header .search-form,.file-code,.org-header .edit-org:hover,.gist-advanced-options .select-menu-button:after,#wrapper,li.commit,li.public,.gravatar img,.commit-comments-header-sha,pre.headers code,.audit-search-form,.columns.equacols.bordered,.gist-item ul.meta>li>a:hover,.commits li img,a.minibutton code,.milestone,.keyboard-mappings th,.api #header-wrapper .nav,.marketing-nav a.selected,#graph_data .tabs,.org-nav-item.selected,.edit-team-member:hover,tr.commit,.release-timeline .js-details-container,.section-heading-title a.js-selected-navigation-item,.featured-callout .screenshot,.timeline-commits .commit-meta .status,.theme-picker-spinner,.timeline-commits .commit-meta .octicon,.file .meta-divider,.avatar-stack.multiple-avatars:before,#feedHandler,.discussion-sidebar-item .thread-subscription-status,.boxed-group.application-show-group .logo-upload,.diagram-icon-small,.commits-listing .commit-group-title .octicon-git-commit,#readme .highlight,.ace-github,.add-member-team-list.table-list,.theme-picker,.avatar-stack .avatar,.boxed-group,.full-commit .btn.btn-outline,.prose-diff > .markdown-body ins,.header .divider-vertical,.ace-github-base16,.markdown-body pre code,.markdown-body pre tt,#readme .plain pre,.uploaded-files,.merge-pr-more-commits code,.two-factor-toggle .two-factor-status button,.input_area,#notebook .highlight,#notebook .highlight pre,.output_area pre,.gist-snippet-meta .gist-count-links>li>a:hover,.markdown-body img,.delete-owners-button:hover,.btn-link,.avatar-child,.session-authentication .header-logged-out,.session-authentication .auth-form-header,.timeline-progressive-disclosure-items,#com #footer,.pr-toolbar,.diffbar,.shade-gradient,#categories .list,.gist-banner,.select-menu-item-parent,.main-content,.showcase-page-header,.showcase-page-pattern:after,.description-inline,.result-group a,.border-wrap,.select-menu-item,a.feed-icon,.session-device,.boxed-group-list > li.session-device:hover,#message-list .pagination a,#message-list .pagination .disabled,.merge-status-item .merge-status-icon,.js-release-form .comment-form-head.tabnav,.project-columns,.project-header,.user-profile-nav,.profile-timeline-year-list.bg-white,.discussion-item-review .timeline-comment,.libraries-jumbotron,.sidebar-module h3 a:hover,.menu-item.selected,.bg-shade-gradient,.dev-hero,.render-container.is-render-ready.is-render-requested:not(.is-render-failed),.user-list li em,.toolbar-commenting .dropdown-item,.toolbar-commenting .dropdown-item:hover,.CodeMirror-lines,.api table,.dashboard-notice .coupon,.release-label,.oauth-org-access-details .oauth-org-item.on,.MarketplaceSideNav
  {
    background: none!important;
  }

  .big-notice,.clean td,.legend .clean,.avatar .overlay.size-48,.listing.closed,.gist .gist-file .gist-data,.gist-syntax,.gist .gist-file .gist-data .line-numbers,.listing .repo,.render-shell .leaflet-marker-pane img,.showcase-page-pattern,.showcase-page-pattern:after,#notebook .output_png img
  {
    background-color: transparent!important;
    background-image: none!important;
  }

  #wrapper,#your-repos-filter,.topsearch ul.nav,.merge-pr-more-commits,.oauth-org-access-details .boxed-group-list > li.on,.gist-snippet .file-box .highlight
  {
    border-radius: 3px!important;
  }

  body[data-render-url],.render-viewer,.comment-content,.gist .gist-file .gist-meta,.more-repos
  {
    border-radius: 0 0 3px 3px!important;
  }

  .dashboard-tabs a,.search-filters
  {
    border-radius: 0!important;
  }

  .discussion-topic-header,.previewable-comment-form .tabnav
  {
    border-radius: 3px 3px 0 0!important;
  }

  .repo-label span,.private .repo-list-item,.hook-delivery-guid
  {
    background: #222!important;
    color: #777!important;
  }

  .private .mini-repo-list-item .repo-icon
  {
    color: #777!important;
  }

  .private .mini-repo-list-item
  {
    background: #1b0527!important;
  }

  .pagehead ul.tabs li a.selected,.pagehead > ul.tabs li a:hover,.filter-selected,div.listing.navigation-focus,div.issues.navigation-focus,.repo-filter:hover,.dashboard-tabs a.selected,.marketing-nav a.selected,.orgs-nav .org-nav-item.selected,a.pagehead-nav-item.selected,.underline-nav-item.selected
  {
    border-radius: 0!important;
    border-bottom: 2px solid #eee!important;
  }

  .section-nav .active a,.js-current .standalone a,.sidebar-module .disable>a
  {
    border-radius: 0!important;
    border-left: 2px solid #eee!important;
  }

  .tabs > a.selected
  {
    border-color: transparent!important;
    border-top: 2px solid #eee!important;
  }

  .menu-item.selected:before
  {
    background-color: #eee!important;
  }

  .dropdown-arrow
  {
    border-top-color: #eee!important;
    transition: none!important;
  }

  #com #header .top-nav .dropdown-caret
  {
    border-top-color: #ccc!important;
  }

  .js-menu-target:hover .dropdown-arrow
  {
    border-top-color: #93bcd1!important;
  }

  details summary
  {
    display: list-item!important;
  }

  details summary:hover
  {
    background: #282828;
    box-shadow: 0 0 0 2px #282828;
    cursor: pointer;
  }

  .discussion-item-closed .octicon
  {
    position: relative!important;
    top: -1px;
  }

  .boxed-group .counter,.reponav-item .counter,.boxed-group .Counter,.reponav-item .Counter
  {
    position: relative!important;
    top: -1px!important;
  }

  .swipe .swipe-frame .swipe-bar .top-handle,.swipe .swipe-frame .swipe-bar .bottom-handle
  {
    left: -6px!important;
  }

  .markdown-body code,.markdown-body tt
  {
    padding: 0 .3em!important;
    display: inline-block!important;
    max-width: 100%!important;
  }

  #commit-description-textarea
  {
    resize: vertical!important;
  }

  .discussion-sidebar-sticky
  {
    position: static!important;
    width: auto!important;
  }

  .discussion-sidebar .is-placeholder
  {
    display: none!important;
  }

  .user-profile-repo-filter
  {
    width: 100%!important;
  }

  #conversation_tab_counter,#commits_tab_counter,#files_tab_counter,.reponav-item .counter,.reponav-item .Counter
  {
    border-radius: 2px!important;
    padding: 2px 5px 3px!important;
  }

  .topic-tag
  {
    padding: .2em .9em!important;
  }

  .gisttabs a:not(.selected),.gisttabs a:not(.selected):hover,.timeline-comment-wrapper,.avatar-stack .avatar,.full-commit .commit-desc + .commit-branches,.full-commit .commit-meta,.list-group-item,.breadcrumb,.tabs > a,.header .divider-vertical,.about-menu-link
  {
    border-color: transparent!important;
  }

  .wiki-wrapper .wiki-empty-box:hover,.render-shell .slider .slider-track,.render-shell .slider-bar,.about-menu-link:hover,.about-menu-link.selected,.pricing-table
  {
    border-color: #777!important;
  }

  img,#browser table,#browser table th,#issues .menu ul li,.branches .more-branches,.issues td,ul.main_nav li.selected,.browser_header,.issue-head,.bootcamp-help .image,ul.hook-list,.clone-url-button,.list-tip li,.section-nav a,.search-menu-container,.repo_list li a,.graphs .axis,.switcher > span:after,a.assignee-bit,.menu li,.notifications td,.filter-tab,ul.hook-list li,.repo .border,.box-action,ul.repo-stats li a,.footer_nav h4,.footer-divider,.chromed-list-browser,.js-activate-link,.chromed-list-browser div,.filter-bar,.columns.sidebar,.title,.lbl,#contributors .person,.tabnav,#commit-activity-master,#services,.top-rule,.blog-post,#services .service,ul.stats,.select-menu-filters,.select-menu-item,.select-menu-tabs,.release-list > li,.url-box,.context-body,.api li:before,.library-list .feature,.lower_footer,.cheatsheet,.pagehead.settings-area,.release-body,.suggester,.pull-state,.pull-number,.merge-pr,.gist-file,#graph-shots li,.sidebar,.release-timeline,.explore h2,#head,.leaderboard-list-item,.release-timeline-tags .main,.search-result-item,.details,.jobs-list,.content-header,.user-list-item,.markdown-body,ul#categories li h5,.render-view-modes li,.gobutton.with-comments .sha,#gollum-editor-function-bar,.capped-box,.steps li,#common-issues,.steps,#graphs,.previewable-comment-form .comment,.org-module,.org-repo,.table-list,.org-add-footer,.auto-search-group .search-filter,#notification-center li,.branch-status,.comment + .comment,.discussion-bubble-inner,.member-row,.press-info,.timeline-comment,.timeline-comment-header,.timeline-commits .timeline-commits-header,.marketing-section,.featured-callout .screenshot,.page-new-repo .license-container,.sidebar-module,.collapsed,.expanded,.discussion-topic,.bubble-inner,.team-org-group,div.article div.helper div.content,.boxed-group-inner .help,dl.new-email-form,.file .meta-divider,.avatar-stack.multiple-avatars:before,.file-box,.file-actions .btn-group li,.gist .gist-file .gist-data,.calendar-graph .contrib-details div,.branch-action-body,.setup-form .tos-info,.setup-form .setup-organization-next,.collection-page .other-content,.bubble-wrap,.release-show,.file-wrap,.branches .branch-summary,.branches .no-results-message,.branch-a-b-count .count-half:last-child,.tabnav-tab.selected,.panel-nav,.file,.full-commit .sha-block > a,.theme-selector-thumbnail,.segmented-nav li,.overall-summary,.boxed-group-inner,.search-form button,.branches .branch-group-heading,.boxed-group > h3,.boxed-group .heading,.issues-list-actions,p code,code,.wiki-wrapper .wiki-empty-box,#adv_code_search .search-page-label,pre.headers,.inline-comment-form,.history-link,.oauth-permissions-details,.setup-info-module .features-list .list-divider,.setup-wrapper .oauth-permissions,.swipe .swipe-frame .swipe-shell,ul.search-results,.orgs-help-shelf-content .orgs-help-divider,.repository-lang-stats-graph,.gist-quicksearch-results,.gist-quicksearch-result,.gist-quicksearch-result-group,.listgroup,.listgroup-item + .listgroup-item,.user-key-badge,.newsfeed-placeholder,.progress-bar-inline .progress-bar,.menu-heading,body .border-gray-dark,.discussion-item-review .blob-wrapper,.bot-identifier,.blame-commit,.counter,.Counter
  {
    border-color: #484848!important;
  }

  pre,h1,h2,h3,.header,table,table tr,table td,table th,blockquote,.pulse-graph,.btn:not(img),.minibutton,.social-count,.discusion-topic-infobar,.box-body,.timeline-comment-label,.logo-box,.suggester li,.developer-program-badge,.vcard-details,.vcard-stats,.auth-form-header,.nav-bar-tabs .section-title,.pagination a:last-child,.pagination span:first-child,.boxed-group-list > li,.toolbar-bordered,.new-issue-form,.pagination span:last-child,.dashboard-tabs,.graphs,.graph,.sub-nav,.audit-search-clear,.repo-list-item,.email-signature-reply,footer,.bubble .bubble-expand,.grid .col,.composer-infobar,.email-quoted-reply,.summary-stats li,.columns.equacols.bordered,.file-diffstat,ul.filter-list,.news .alert,table.files td,.explore-section,.repolist > li,.featured-grid-outer,.gh-header-meta,.theme-picker-thumbs,.team,.billing-section,.sidebar-module ul h3,.headlines li,.discussion-sidebar-item + .discussion-sidebar-item,.markdown-format img,div#common-issues ul li,.about-facts,.starred-repo,.markdown-example,.traffic-graph-stats,.discussion-item + .discussion-item,.bubble,.tree-browser,.simple-box-footer,.team-grid .team-members,.org-list .list-item,.stats-group .stat,.team-info-card .team-stats,.table-of-contents li,.commit-group,.table-list-bordered .table-list-cell:first-child,.table-list-bordered .table-list-cell:last-child,.table-list-cell,.table-list,.table-list-header,.blankslate,.labels-list-item,.subnav-divider-right,.subnav-bordered,.content table tr th,#search-results li,.subhead,#pages-composer,.render-bar,#gollum-editor-help,#gollum-editor-help-parent,#gollum-editor-help-list,.auth-section,.commit-sha,.comment-body,.mini-repo-list-item,.advanced-search-form fieldset,.contrib-column,.org-header .edit-org,.pulse-summary .summary-box,.pulse-summary .summary-box li:first-child,.list-item + .list-item,.list-item + .list-heading,.list-heading + .list-item,.issue-list-item,.collection-card,.setup-header,body.api pre,.stats-group-stat:first-child,.build-statuses-list,#gollum-dialog-dialog-buttons,#gollum-dialog-dialog h4,a.gollum-minibutton,a.gollum-minibutton:visited,.two-factor-toggle .two-factor-status,.two-factor-settings-group,.member-badge,ul.comparison-list > li,.markdown-format ol > li:before,.release-downloads,.release-downloads li,.blob-interaction-bar,input.subnav-search-input,.select-menu-header,.search-results,.select-menu-text-filter:first-child:last-child,.select-menu-modal,#gist-form .file .meta,.file .meta,.file-box .meta,.capped-card,.audit-results-header,.pagination a,.pagination span,.pagination em,.input_area,.output_area .rendered_html table,.render-info .message,.subnav .btn + .issues-search,.branch-action-body .branch-action-item + .branch-action-item,.discussion-item-merged.open .discussion-item-details-header,.discussion-item-merged.open .build-statuses-list,.build-status-item,.pagehead-tabs-item.selected,.org-header,.pagehead,.branch-action-item + .mergeability-details,.migration-section,.migrate-org-roles,.migrate-org-roles-header,.migrate-org-roles-item,.migrate-org-roles-count,.migration-footer,.migration-feature-list:before,.migration-org-avatar,.org-migration-settings-section,.word-upload-callout .note,.commit-tease .commit-meta,.manage-user-info,.manage-repo-access-title,.manage-access-remove-footer,.org-settings-team-item:first-child,.label-generic,.plan-notice,.merge-branch-manually,.intgr-header,.code-list-item,.sort-bar,#com #footer,.repo-file-upload-outline,.comment-reactions.has-reactions,.reaction-summary-item,.select-menu-divider,.featurette.border-top,.tile-block,.tile-bordered:not(:last-child),.showcase-page-header,.showcase-page-repo-list,.header-search-scope,.result-group a,.signed-commit-badge,.signed-commit-header,.user-key-email,.border-top,.pricing-card-cta,.shelf,.access-token,.about-menu,.oauth-border,.reponav-item.selected,.file-header,.reorderable-task-lists .markdown-body .task-list-item.hovered,.next-charge-box,.setup-info-module h2,.radio-label,.border,.border-top,.border-right,.border-bottom,.border-left,.border-y,.pinned-repo-list-item,.pinned-repo-filters,.orghead,.orghead .edit-org,.Box-body-row,.discussion-item-deployed,.branch-action-body .merge-message,.profile-timeline-card-wrapper,.profile-rollup-wrapper + .profile-rollup-wrapper,.new-project-column,.confirm-removal-list-container,.confirm-removal-list-item,.user-profile-nav,.border-gray-light,.ajax-pagination-form .ajax-pagination-btn,.review-thread-reply,.feature-callout-octicon,.feature-callout,.discussion-item + .discussion-item,.discussion-item-review + .discussion-item,.libraries-jumbotron,.last-review-thread,.menu-item,.review-comment.is-comment-editing,.Box,.team-list-footer,.Box-header,.profile-rollup-summarized + .profile-rollup-summarized,.Subhead,.dashboard-notice .coupon,.Box-body,.listgroup-header,.merge-status-item,.pending-team-invitations-link,.discussion-item + .discussion-item-review
  {
    border-color: #343434!important;
  }

  .discussion-item-icon,.date:after,ul.color-label-list .color,.facebox-header
  {
    border-color: #222!important;
  }

  .filter-tab.selected
  {
    border: 1px solid #444!important;
    border-bottom: 1px solid #343434!important;
  }

  .header,.summary-stats,.follow-list .follow-list-item
  {
    border-bottom: 1px solid #343434!important;
  }

  .simple-conversation-list > li,.site-footer,.blame .section-first td,.wiki-list .wiki-list-item + .wiki-list-item
  {
    border-top: 1px solid #343434!important;
  }

  .closed-banner
  {
    border-top: 2px solid #444!important;
    border-bottom-color: transparent!important;
    height: 2px!important;
  }

  .discussion-timeline-actions,.closed-banner
  {
    background: transparent!important;
    border-top: 2px solid #444!important;
  }

  .discussion-timeline:before
  {
    margin-top: 2px!important;
    background: #383838!important;
    height: calc(100% - 259px)!important;
  }

  .profile-timeline.discussion-timeline:before
  {
    height: 100%!important;
  }

  .listings div.listing
  {
    border-left: 2px solid #333!important;
    border-right: 2px solid #333!important;
  }

  #org-members .member-listing
  {
    border-left: 1px solid #333!important;
    border-right: 1px solid #333!important;
  }

  .timeline-comment:after,.commit-form:after,.branch-action-body:after,.timeline-comment-wrapper > .timeline-comment:after,.timeline-new-comment .timeline-comment:after
  {
    border-right-color: #1d1d1d!important;
  }

  .timeline-comment:before,.branch-action-body:before,.MarketplaceSideNav,.plans-card-text:first-child
  {
    border-right-color: #484848!important;
  }

  .review-summary:after
  {
    border-bottom-color: #25272a!important;
  }

  .word-upload-callout:before,.word-upload-callout:after,.select-menu-modal-arrow:after,.dropdown-menu-s:before
  {
    border-bottom-color: #343434!important;
  }

  .repo-filterer .repo-filter:hover,.review-summary:before
  {
    border-bottom-color: #484848!important;
  }

  .issue-head
  {
    border-bottom-width: 1px!important;
  }

  .context-button:hover:after,.switcher > span:before
  {
    border-color: #eee transparent transparent!important;
  }

  .sidebar-module .arrow-btn:hover
  {
    width: 0!important;
    height: 0!important;
    padding: 0!important;
    border-color: transparent!important;
    border-style: solid!important;
  }

  .sidebar-module .arrow-btn.collapsed:hover
  {
    border-width: 5px 8px!important;
    border-left-color: #93bcd1!important;
    margin: 12px 0 0 12px !important;
  }

  .sidebar-module .arrow-btn.expanded:hover
  {
    border-width: 8px 6px 0 5px !important;
    border-top-color: #93bcd1!important;
    margin: 14px 0 0 9px !important;
  }

  .select-menu-button:before
  {
    border-top-color: #eee!important;
  }

  .pagehead-tabs-item.selected,.reponav-item.selected
  {
    border-bottom-color: #222!important;
    border-top-width: 1px!important;
  }

  .pagehead-tabs
  {
    margin-bottom: -23px!important;
  }

  .branches .branch-summary + .branch-summary
  {
    border-top-color: #333!important;
  }

  .linkable-line-number
  {
    border-right: 1px solid #484848!important;
  }

  .gist .gist-file .gist-data .line-number
  {
    line-height: 19px!important;
  }

  table.files td.age .css-truncate
  {
    max-width: none!important;
  }

  .octotip
  {
    background-color: #003!important;
    border-color: #006!important;
  }

  .commitinfo,.gc .diff-line-code,.gc .diff-line-num,.gc .diff-line-pre,.featured-commit-activity-graph,.featured-repo-logo,.outline-box,.gobutton>.sha .octicon,.markdown-body .csv-data .blob-num,#feedBody,.search-result-header,.accessibility-aid:focus,.file-data,.signup-plans th,.signup-plans td,.signup-plans-orgs th,.signup-plans-orgs td,.commits td,.featured-callout,.sidebar-module ul ul li,.native-download,.setup-info-module,div#common-issues ul,#gist-form .name,.subnav-item,.render-notice,.label-edit.edit-color-label-form .color-editor .color-editor-input,.date_selector td,.new-label,.range-editor .range,.range-editor .flag,.octotree_sidebar,.auth-form-body,div.border-wrap,.profile-header,.btn.btn-outline,.highlight .gc,.uploaded-files.is-populated,.range-editor,#gollum-editor-help-parent li a.selected,#gollum-editor-help-list li a.selected,#gollum-editor-help-parent li a:hover,#gollum-editor-help-list li a:hover,.github-access-banner,.protip-callout,ul.comparison-list,.wiki-custom-sidebar,.invitation-container,.orgs-help-shelf,.orgs-help-item-octicon,input[type="password"],input[type="email"],input[type="number"],input[type="tel"],input[type="url"],textarea,.dropdown-menu,.thread-subscription-status,.branch-action-body .merge-branch-form,.pull-info,.branch-link,.discussion-item-merged.open .discussion-item-details,.word-upload-callout,.commit-tease-contributors,.ajax-pagination-form .ajax-pagination-btn,.access-form-wrapper,.session-authentication .create-account-callout,.intgrs-lstng-item,.intgr-install-callout,.is-failed .repo-file-upload-errors,.is-bad-file .repo-file-upload-errors,.is-too-big .repo-file-upload-errors,.is-too-many .repo-file-upload-errors,.is-empty .repo-file-upload-errors,.site-header,.site-subheader,.pricing-card,.explore-signup-entice,.price-box,.cvv-hint-tooltip,.plan-choice,.date-selector td,.user-profile-sticky-bar:after,.review-thread,.card,.tutorial,.overview .card > div[style*="background"],.Box:not([style*="background"]),.Box-footer,.Box-row,.ScreenshotCarousel
  {
    background: #25272a!important;
    border-color: #343434!important;
  }

  #readme .plain,.readme .markdown-body,.readme .plain,.pull-request-composer,.drag-and-drop,.octofication .broadcast-icon-mask,.file .image,.merge-pr-more-commits,.release-timeline-tags .expander-dots,.coupons .coupon-form-body,.manage-repo-access-group,.saved-reply-form,.timeline-progressive-disclosure-button,.orghead .edit-org:hover,.octotree_views,.simple-box
  {
    background: #25272a!important;
    border-color: #484848!important;
  }

  .header,.headers,#readme .markdown-body,.social-count,.file,.box-body,.markdown-body table tr:nth-child(2n),.steps li,.explore-section:nth-child(2n),.markdown-format table,.list-group-item,.chromed-list-browser .none p,.chromed-list-browser .error p,.list-browser-footer,.commandbar .choice:hover,#gollum-editor-help,.search-filter:hover,#wiki-history table tr:nth-child(2n) td,.display tr:hover,.octofication .message,.commandbar .loading:hover,.comment-content,.commandbar .message,.boxed-group-inner,#adv_code_search .search-page-label,.timeline-comment,#contributors-master svg.viz,.diff-table .line-comments,.menu,svg.spark,svg.capped-card-content,body.api .content tbody,.markdown-format img:not(.emoji),.mini-repo-list,#common-issues,.full-commit .commit-meta,.setup-wrapper .oauth-permissions-details,.milestone-list,.setup-form .setup-plans,.prose-diff > .markdown-body,.revision .gu,.tree-browser td,.tree-browser .alt td,.branches .branch-summary,.branches .no-results-message,.simple-box-footer,.commit-group,.blankslate,.content table tr,#search-results,.mergeable,.org-module,.org-add-footer,.branch-infobar,table.capped-list tr:nth-child(2n),.team-org-group,#gollum-editor-help-wrapper,.integrations-quality,.showcase-featured .mo-info .featured-grid-outer,.render-shell,.list,.latest-commit .commit-author,.bubble,.tabs > a.selected,.comment-form-head .tabnav-tab.selected,.oauth-org-access-details .boxed-group-list > li.on,#fullscreen_overlay,.timeline-new-comment .discussion-topic-header,.branch-action-body,.inline-comment-form,.file-history-tease .participation,.gist-quicksearch-result-header,.label-generic,.migrate-org-roles,.commit-tease .commit-meta,.manage-repo-access-icon,.table-list:not(.team-member-list),.repo-file-upload-progress,.gcr-ext-editor-dialog,.shade-gray,.exploregrid-item,.signed-commit-badge-small,.facebox-popup,.explore-signup-entice-wrapper,.billing-addon-items tr.total-row,.billing-addon-items tr.dark-row,.Box-body,li.pinned-repo-item,.js-contribution-graph h2 + div:last-child,.project-triage-pane,.user-profile-nav.is-stuck,body .bg-white,[data-filterable-for="projects-filter"] .container-lg,.review-summary-form-wrapper,#projects-results,.listgroup,.protected-branch-orgs-and-repo-admins,.listgroup-overflow
  {
    background: #25272a!important;
  }

  .sidebar-module,.form-control,input[type="text"]:not(.tree-finder-input):not(.js-site-search-focus)
  {
    background-color: #25272a!important;
    border-color: #343434!important;
  }

  .markdown-body table tr,.blob-num-context,#user-content-toc td
  {
    background: #141414!important;
  }

  .blame .blob-num,.blame-blob-num,.overall-summary,.repository-lang-stats,.collection-card,.team-grid .team,.blob-num-hunk,.blob-code-hunk,.blob-code-expandable,.code-list .divider .blob-num,.code-list .divider .blob-code,.blob-num-expandable,.expandable-line-num .diff-expander:hover,.select-menu-filters,.select-menu-modal,.pagination a,.blob-num[colspan],.build-status-item,.more-branches,.plan-choice.open,.uploaded-files>li.delete,.bg-gray-light,.more-repos,.billing-per-seat-callout:after
  {
    background: #25272a!important;
  }

  .table-list-header,.timeline-comment-header,.boxed-group > h3,.boxed-group .heading,.file-header,.capped-card h3,.select-menu-header,#gist-form .file .meta,.file .meta,.file-box .meta,.menu-heading,.audit-results-header,.branches .branch-group-heading,.auth-form-header,.commit-form,.comment-form-head.tabnav,.migration-jumbotron,.migration-sub-header,.commit-tease,.manage-repo-access-title,.select-menu-divider,.signed-commit-header,.reorderable-task-lists .markdown-body .task-list-item.hovered,.next-charge-box,.credit-card,.branch-action-body .merge-message,.review-thread-reply,.bg-gray,a.card.bg-gray-light:hover,.add-member-team-list .team-row-header,.Box-header,.pagination .gap,.pagination .disabled,.pagination .gap:hover,.pagination .disabled:hover,.listgroup-header,.merge-status-item
  {
    background: #25272a!important;
  }

  .list-group-item.navigation-focus,.list-browser-item.navigation-focus,.headlines li:hover,.js-details-container.navigation-focus,.js-details-container.navigation-focus:nth-child(2n),.team-grid .team-members,.tree-browser tr.navigation-focus td,.issues-listing .table-list-issues .selectable:hover,.issues-listing .table-list-issues .navigation-focus,.setup-plans tr.selected,.notifications .navigation-focus,.sidebar-module ul ul li a:hover,.typeahead-result,.no-results,.link-overlay .link,#gollum-editor-help-list,.owner-select-target,.divider .blob-code div.highlight,.line[style^="background-color: rgb(255, 255, 204)"],.oauth-org-access-details .boxed-group-list > li.on:hover,pre div:hover,table.files tr.navigation-focus td,.summary-stats li a:hover,.select-menu-item-parent.navigation-focus,.select-menu-item-parent.navigation-focus.selected,.pinned-repos-selection-list-item.selected,.Box-body-row--highlight.navigation-focus,.Box-body-row--highlight:hover,div.label-select-menu .select-menu-item.navigation-focus,div.label-select-menu .select-menu-item.navigation-focus.selected,.js-current .standalone a,.menu-item:hover,.Box-row--focus-gray.navigation-focus
  {
    background: #242424!important;
  }

  #main,.capped-box,.unread_count,#browser table th,.markdown-format table th,table.upgrades tr.current td,.definitions,.discussion-topic-header,.timeline-commits-minimal .commit-icon .octicon,.timeline-commits .commit-icon .octicon,.upload-progress,.search-results-listing em,.discussion-bubble-inner,#wiki-history table td,.gist .gist-file .gist-data,.logo-box,.markdown-example .rendered,.team-grid .team-members,.diagram-icon:not(.active),table.capped-list th,.filter-bar,.audit-search-clear,.country-info,.tabnav-tab.selected,.file-diff-split .empty-cell,.composer-infobar,.completeness-indicator-blank,.leaflet-control-zoom,.pagehead-tabs-item.selected,.reponav-item.selected,.ajax-pagination-form .ajax-pagination-btn:hover,.ajax-pagination-form .ajax-pagination-btn:focus,.manage-repo-access-not-active,.header-search-scope,.reverse-progress-bar,.featurette.py-5,.payment-history .refunded,.payment-history .failed,.profile-timeline-month-heading.bg-white
  {
    background: #222!important;
  }

  hr,.rule,#browser,.repos,.options-group,.pagehead ul.tabs li a.selected,.subnav-bar,.options-content,span.gravatar,.browsered,.browsered .inner,.subnav-bar > ul > li > ul,.comment-form ul.tabs a.selected,.issue.open.read .summary,.unselected_month,.commits th,#MathJax_Message,.chzn-single,.user-commits,.user-commits th,.metabox,.ranked-repositories > li,.pagehead ul.actions,#issues_search .comment,#header-wrapper,ul.feature-tabs li.highlight,.pagination,.filterbar .filters li,.starting-comment .body,.list-tip,.commit_oneline,.filterbox,.conversation-list-heading .inner,.autocomplete-results,.new-comments .body,.display tr,.render-container,.boxed-group-table th,.features-highlight,.outline-box-highlighted,.nav-bar-tabs,#watchers li,.browser .listing,.item,.context-pane,.context-loader,.sidebar .module,.tip-body,#assignee,.commit_oneline td,.notifications th,.content table th,.repo-collection>ul,#graph_data .tab.selected,.full-width-divider,.markdown-body .csv-data th,h3.conversation-list-heading strong,.file-commit-form .commit-form,.blog-feedback,.facebox-footer,.invited-banner,.gcr-ext-editor-close,.gcr-ext-editor-header,.logos-download-link
  {
    background: #222!important;
    border-color: #343434!important;
  }

  .btn:disabled,.btn:disabled:hover,.btn.disabled,.btn.disabled:hover,button.button:disabled,button.button:disabled:hover,button.button.disabled,button.button.disabled:hover,button.minibutton:disabled,button.minibutton:disabled:hover,button.minibutton.disabled,span.minibutton.disabled,a.minibutton.disabled,button.minibutton.disabled:hover,a.minibutton:disabled:hover,a.minibutton.disabled:hover,span.minibutton:disabled:hover,span.minibutton.disabled:hover,.search-result-group,.gist-quicksearch-result-group
  {
    background: #222!important;
    border-color: #282828!important;
    color: #444!important;
  }

  .btn-outline:disabled,.btn-outline:disabled:hover,.btn-outline.disabled,.btn-outline.disabled:hover,.btn.btn-outline:disabled,.btn.btn-outline:disabled:hover,.btn.btn-outline.disabled,.btn.btn-outline.disabled:hover
  {
    background: #222!important;
    border-color: #343434!important;
    color: #444!important;
  }

  .list-browser-item.closed,.content .verseblock-content,.content .verseblock-content,.simple-stacked-bar,.date_selector td.selectable_day:hover,.date_selector td.selectable_day.hover,.pagination a:hover,.pagination a:focus,.pagination span:hover,.pagination span:focus,.pagination em:not(.current):hover,.pagination em:not(.current):focus,.dropdown-divider,.js-current .standalone a,.sidebar-module .disable>a,.label-select-menu div.labelstyle-000000.selected,.ScreenshotCarousel-navitem.selected
  {
    background: #282828!important;
  }

  div#common-issues ul li a:hover,.rss-subscribe:hover
  {
    background-color: #282828!important;
  }

  .markdown-body hr
  {
    background: #343434!important;
  }

  #network .current-repository
  {
    background: #343434!important;
    box-shadow: 0 0 0 2px #343434!important;
  }

  .blame-commit-next .blame-commit-info,.blame-commit-next + .blame-line,.ScreenshotCarousel-nav
  {
    box-shadow: inset 0 1px 0 #343434!important;
  }

  .pagehead,.context-loader.large-format-loader,#graphs .loader,.org-header,.render-shell .slider,.illflow-item:not(.selected):hover,.leaflet-control-attribution,.orghead
  {
    background: #25272a!important;
  }

  .explore-signup-entice-inner
  {
    background: rgba(24,24,24,.9)!important;
  }

  .starred-repo.navigation-focus,.marketing-section-stripe,.blob-expanded .blob-num,.blob-expanded .blob-code,.migration-section-grey
  {
    background: rgba(50,50,50,.5)!important;
  }

  .svg-tip
  {
    background: rgba(12,12,12,.8)!important;
  }

  .svg-tip:after
  {
    border-top-color: rgba(12,12,12,.9)!important;
  }

  .shelf
  {
    background-color: rgba(0,0,0,.2)!important;
    background-image: none!important;
  }

  .select-menu-loading-overlay,.slow-loading-overlay,.branches .loading-overlay
  {
    background-color: rgba(24,24,24,.6)!important;
  }

  .pagehead ul.actions a.feed,.explore h2 .feed,#code_search_instructions h2,td.inst,.metabox-loader,.pull-flag,.browser-content,.filterbar ul.filters li,.pagehead ul.tabs li.contextswitch,#wiki-header > div,.pagehead ul.tabs li.contextswitch:hover,.bigbutton a,#new_message,#issues_next ul.sorts li,ul.sorts li.asc,ul.sorts li.desc,.listings-layout .columns.main .content,.fieldswrap,.filterbar li.selected,#issues_next ul.filters li,table.instruction tr:nth-child(2n),.email-hidden-toggle a,#commit-activity-master-head,.action-indicator,.pull-head .diffstat,ul.suggestions,.discusion-topic-infobar,.commits-listing:before,.discussion-item-icon,.jstree-wholerow-hovered,.bubble-contents,.ellipsis-button,.filter-list li span.bar,.selectable_day.today,.billing-plans .current,.commits-listing:before,.billing-section .usage-bar,.issue-list em,.file-info-divider,.pagehead ul.tabs li a:hover,.repos .bottom-bar,#languages .popular,.tip-box h4,table.upgrades td,.commit-preview .message,.commit-preview p.error,.pagehead ul.tabs li.contextswitch,#browser tr th,.status-box h4,.line_numbers,#files span.icon,#issues_list .actions,#repos .public,.inset-callout,#repo-message,.repo-private-label,.label-admin,a.team-member-ellipsis,.code-list em,.user-list em,.credit-card.normal .signature,.credit-card.amex .gladiator,.subnav-item:hover,.subnav-item:focus,.wiki-list em,.progress-bar:not(.anim-grow-x),.header-search-scope:hover
  {
    background: #333!important;
  }

  .comment-form,#issues .labels,.listings .odd,.feed,#files .description,#message .envelope .header .info .title.unread,li.contextswitch ul li.current,.watcher-widget,ul.main_nav li.selected a,ul.states li,.add_file,.inset,li.label,.filterbar,.divider-vertical,.user-commits td,.starting-comment .infobar,#issues_next .infobar,.formbody,.commandbar .display,.none p,.display div.choice,ul.fieldpills li,.documentation-results a,.plans-pricing-callout,.auto-search-group .search-filters,.editbox,.editbox .body,.commentstyle,#issues .display,#issues .display .admin,#issues .labels .list li,.issue .summary,.hidden-text-expander a,.view-modes,.standard_form,#reply_body,#commit div,#commit td,#commit tr,#commit .envelope,.file-minibutton,.context-pane .title,.browser .listing:hover,#dashboard .repos,.date_selector .btn,.list-module .list-body,.list-module a,.label-permissions,.tree-browser th,.browser .listing.closed,.starting-comment,.section-nav a:hover,.chzn-drop,.module .inner,.team-repositories-blankslate,.discussion-event-status-head_ref_deleted .discussion-item-icon,.pull-head,.tabs,#browser td,#issues_next li.selected,.avatarname img,#readme .name,#wiki-history .author img,.options-content h3,.display div.choice:nth-child(2n+1),#issues-dashboard .actions,.list-tip a:hover,.select-menu-tabs .select-menu-tab.selected,.select-menu-tab .selected
  {
    background-color: #333!important;
    border-color: #484848!important;
  }

  .calendar-graph rect[fill="#447591"],.calendar-graph rect[fill="#6495AF"],.calendar-graph rect[fill="#93BBD1"],.calendar-graph rect[fill="#C3DDEB"],.heat,.contrib-legend li
  {
    background-color: #93bcd1!important;
    fill: #93bcd1!important;
  }

  .calendar-graph .days-selected rect.day.active
  {
    stroke: #C4DDEB!important;
  }

  .calendar-graph rect.day:hover
  {
    stroke: #C4DDEB!important;
  }

  .calendar-graph rect[fill="#ebedf0"],.contrib-legend li[style*="#eee"]
  {
    background-color: #282828!important;
    fill: #282828!important;
  }

  .heat[data-heat="1"],.heat[data-heat="2"],.calendar-graph rect[fill="#447591"],.contrib-legend li[style*="#447591"]
  {
    opacity: .25!important;
  }

  .heat[data-heat="3"],.heat[data-heat="4"],.calendar-graph rect[fill="#6495AF"],.contrib-legend li[style*="#6495AF"]
  {
    opacity: .5!important;
  }

  .heat[data-heat="5"],.heat[data-heat="6"],.calendar-graph rect[fill="#93BBD1"],.contrib-legend li[style*="#93BBD1"]
  {
    opacity: .75!important;
  }

  .heat[data-heat="7"],.heat[data-heat="8"],.calendar-graph rect[fill="#C3DDEB"],.contrib-legend li[style*="#C3DDEB"]
  {
    opacity: 1!important;
  }

  .calendar-graph rect[fill="#FFEE4A"],.calendar-graph rect[fill="#FFC501"],.calendar-graph rect[fill="#FE9600"],.contrib-legend li[style*="#FFEE4A"],.contrib-legend li[style*="#FFC501"],.contrib-legend li[style*="#FE9600"]
  {
    background-color: #fe9600!important;
    fill: #fe9600!important;
  }

  .calendar-graph rect[fill="#FFEE4A"],.contrib-legend li[style*="#FFEE4A"]
  {
    opacity: .2!important;
  }

  .calendar-graph rect[fill="#FFC501"],.contrib-legend li[style*="#FFC501"]
  {
    opacity: .4!important;
  }

  .calendar-graph rect[fill="#FE9600"],.contrib-legend li[style*="#FE9600"]
  {
    opacity: .8!important;
  }

  .calendar-graph rect[fill="#03001C"],.contrib-legend li[style*="#03001C"]
  {
    background-color: #fc3!important;
    fill: #fc3!important;
  }

  .progress-bar.anim-grow-x,.dev-hero
  {
    filter: brightness(75%)!important;
  }

  #network .repo img:not(.gravatar),#header .logo,img[src="/images/logo@2x.png"],.site-logo a,.github-jobs-promotion a.jobs-logo strong,iframe[src*="polldaddy.com"],.jstree-node:not(.jstree-leaf) > .jstree-icon.jstree-ocl,.octotree_toggle .loader,.swipe .swipe-frame .swipe-bar .top-handle,.swipe .swipe-frame .swipe-bar .bottom-handle,.onion-skin .controls .transparent,.onion-skin .controls .opaque,.onion-skin .controls .slider .slider-track,.onion-skin .controls .slider .slider-track .dragger,.leaflet-control-zoom a,.leaflet-control-attribution.leaflet-compact-attribution:after,img[src$="favicons.githubusercontent.com/github.com"],img[src$="invertocat.png"],.ghd-invert,.render-shell img.math,#footer .github img
  {
    -webkit-filter: invert(100%) hue-rotate(180deg)!important;
    filter: invert(100%) hue-rotate(180deg)!important;
  }

  div#network.network > div > canvas
  {
    -webkit-filter: invert(90%) hue-rotate(180deg)!important;
    filter: invert(90%) hue-rotate(180deg)!important;
  }

  [alt=":soon:"],[alt=":on:"],[alt=":end:"],[alt=":heavy_dollar_sign:"],[alt=":registered:"],[alt=":tm:"],[alt=":heavy_multiplication_x:"],[alt=":heavy_plus_sign:"],[alt=":heavy_minus_sign:"],[alt=":heavy_division_sign:"],[alt=":heavy_check_mark:"],[alt=":arrows_clockwise:"],[alt=":wavy_dash:"],[alt=":curly_loop:"],[alt=":copyright:"],[alt=":currency_exchange:"],[alt=":top:"],[alt=":back:"],[alt=":zzz:"],[alt=":notes:"],[alt=":musical_score:"],[alt=":black_large_square:"],[alt=":black_medium_small_square:"],[alt=":ant:"],[alt=":musical_note:"],[alt=":loop:"],[alt=":feet:"],[alt=":paw_prints:"],[alias="soon"],[alias="on"],[alias="end"],[alias="heavy_dollar_sign"],[alias="registered"],[alias="tm"],[alias="heavy_multiplication_x"],[alias="heavy_plus_sign"],[alias="heavy_minus_sign"],[alias="heavy_division_sign"],[alias="arrows_clockwise"],[alias="wavy_dash"],[alias="curly_loop"],[alias="copyright"],[alias="currency_exchange"],[alias="top"],[alias="back"],[alias="zzz"],[alias="notes"],[alias="musical_score"],[alias="black_large_square"],[alias="black_medium_small_square"],[alias="ant"],[alias="musical_note"],[alias="loop"],[alias="feet"],[alias="paw_prints"]
  {
    -webkit-filter: invert(100%) hue-rotate(180deg) brightness(80%)!important;
    filter: invert(100%) hue-rotate(180deg) brightness(80%)!important;
    background: transparent!important;
  }

  g-emoji[fallback-src$="2795.png"],g-emoji[fallback-src$="2796.png"],g-emoji[fallback-src$="2797.png"],g-emoji[fallback-src$="27b0.png"],g-emoji[fallback-src$="2b1b.png"],g-emoji[fallback-src$="25fe.png"],g-emoji[fallback-src$="1f3b6.png"],g-emoji[fallback-src$="1f3bc.png"],g-emoji[fallback-src$="1f4b1.png"],g-emoji[fallback-src$="1f4b2.png"],g-emoji[fallback-src$="1f503.png"],g-emoji[fallback-src$="1f519.png"],g-emoji[fallback-src$="1f51a.png"],g-emoji[fallback-src$="1f51b.png"],g-emoji[fallback-src$="1f51c.png"],g-emoji[fallback-src$="1f51d.png"],g-emoji[fallback-src$="1f3b5.png"],g-emoji[fallback-src$="27bf.png"],g-emoji[fallback-src$="1f43e.png"],g-emoji[fallback-src$="1f43e.png"]
  {
    -webkit-filter: invert(83%)!important;
    filter: invert(83%)!important;
  }
@  font-face
  {
    font-family: "Apple Color Emoji";
    src: local("Apple Color Emoji");
    unicode-range: U+00000-000A8,U+000AA-000AD,U+000AF-02121,U+02123-025A9,U+025AB-025FB,U+025FD-025FD,U+025FF-0265F,U+02661-02662,U+02664-02713,U+02715-02715,U+02717-0302F,U+03031-10FFFF;
  }

  .leaflet-tile-container img
  {
    -webkit-filter: invert(100%) hue-rotate(180deg) brightness(150%)!important;
    filter: invert(100%) hue-rotate(180deg) brightness(150%)!important;
  }

  .leaflet-marker-pane img,.gundamcat
  {
    -webkit-filter: brightness(.8)!important;
    filter: brightness(.8)!important;
  }

  .output_area img,table.pricing-table,div[id^="contribution-first"] img,div[id^="contribution-joined-github"] img,div[id^="contribution-created"] img,.project-preview-img img,img[src$="bg-callout.svg"],img[data-canonical-src*="saucelabs.com/browser-matrix"]
  {
    -webkit-filter: invert(90.5%) hue-rotate(180deg) saturate(200%)!important;
    filter: invert(90.5%) hue-rotate(180deg) saturate(200%)!important;
  }

  .contribution-first-issue,.contribution-first-pull-request,.contribution-first-repository
  {
    opacity: .999!important;
  }

  .language-color
  {
    -webkit-filter: brightness(150%)!important;
    filter: brightness(150%)!important;
  }

  .box-title-count
  {
    background-color: #484848!important;
    color: #ccc!important;
  }

  line,rect,path
  {
    shape-rendering: geometricPrecision!important;
  }

  .js-graph-punchcard svg.viz
  {
    background: transparent!important;
    border: none!important;
  }

  .octicon,svg.octicon
  {
    fill: currentColor!important;
  }

  .reorderable-task-lists .markdown-body .task-list-item .drag-handle
  {
    fill: silver!important;
  }

  :not(img) text,circle.day
  {
    fill: #ccc!important;
  }

  circle.day:hover
  {
    fill: #fff!important;
  }

  path.js-diff-placeholder
  {
    fill: #282828!important;
  }

  #contributors-master svg.viz
  {
    display: block!important;
  }

  g.dots circle
  {
    stroke: #222!important;
  }

  .traffic-graph g.axis:not(.views):not(.unique) g.tick:not(:nth-child(14)):not(:first-child) line,g.axis path,line.axis,svg:not(.vis) g.axis line
  {
    stroke: #444!important;
  }

  svg .path:not(.total):not(.unique):not(.views)
  {
    stroke: #aaa!important;
  }

  #commit-activity-detail path.path,.traffic-graph g.x.axis g.tick:first-child line
  {
    stroke: #1db34f!important;
  }

  .traffic-graph g.x.axis g.tick:nth-child(14) line
  {
    stroke: #1d7fb3!important;
  }

  svg.tick
  {
    fill: #444!important;
  }

  .features-branch-diagram path[stroke="#c6d9ed"],.features-branch-diagram path[stroke="#4182C4"]
  {
    stroke: #93bcd1!important;
  }

  .features-branch-diagram circle[fill="#93bcd1"],.repo-list-stats a.issues:hover svg
  {
    fill: #93bcd1!important;
  }

  .features-branch-diagram circle[stroke="#ffffff"]
  {
    stroke: #222!important;
  }

  rect.map-background,.audit-log-map
  {
    fill: #1e4062!important;
    background: #1e4062!important;
  }

  path.land
  {
    stroke: #17334f!important;
  }

  circle.audit-point
  {
    fill: #742d14!important;
    stroke: #57210f!important;
  }

  .graphs .selection rect
  {
    fill: #888!important;
    stroke: #888!important;
  }

  ul.sidetabs li a:hover,.editbox h1,#issues .labels .admin,#issues .display .sortbar,#facebox .close,#issues_search .wrapper,.ranked-repositories .meta a,.actor,ul.nav.logged_out,.tip-box a.next,#inbox .list .unread,.main .filterbar,.browser-content .footerbar,ul.smalltabs,.snippet,.supportstaffer,.discussion-form,.chooser-box,.chooser-box h3,#forkqueue .instructions,.selector-item.clear:hover,#contributors-master svg,.inset-callout h2,.documentation ul.nav,.date_selector td.selected,#contributors-master,.context-title,.list-module h2,.bootcamp-help h1,table.files tr.up-tree a:hover,.ellipsis-button:hover,.codesearch-results .repo-list-name em,.codesearch-results .repo-list-description em,.blog-search-results em,.codesearch-cols em,ul.bignav li a:hover,ul.smallnav li a:hover,.comments-wrapper,.rackspace,.subnav-bar > ul > li > ul > li > a:hover,.issue.active,.orgs-nav .count,.filter-item:not(.selected):hover,.task-progress .progress-bar .progress,.oauth-connection-illustration .oauth-image,.manage-repo-access-wrapper:before,.counter,.Counter
  {
    background: #444!important;
  }

  .hidden-text-expander a,.ellipsis-expander,.profile-timeline-month-heading:after,.review-comment-contents:after,.review-comment.is-comment-editing:after
  {
    background: #383838!important;
  }

  .switcher > span:after,.list-module a:hover,.section-nav .active a,#dashboard .filter-bar li a.filter_selected:after
  {
    background-color: #555!important;
  }

  .state-widget .behind .bar,.settings-email .label:not(.default),.key,.date:after,.branch-a-b-count .bar,.branch-a-b-count .meter,.branch-action-state-dirty .branch-action-icon,.branch-action-state-closed-dirty .branch-action-icon,.completeness-indicator-problem,.hidden-text-expander a:hover,.ellipsis-expander:hover
  {
    background: #555!important;
  }

  .labels .label-neutral,li.ssh-key .ssh-key-state-indicator.not-recent,.render-shell > .slider .dragger
  {
    background: #666!important;
  }

  .diverge-widget .separator
  {
    background: #ccc!important;
  }

  #network canvas
  {
    background: #fff!important;
  }

  .state-widget .ahead .bar,.render-shell > .slider .dragger:hover,.render-shell > .slider .dragger:active
  {
    background: #999!important;
  }

  .action-bubble .bubble,.suggester
  {
    background: transparent!important;
  }

  .timeline-comment.current-user .timeline-comment-header,.github-jobs-promotion p,.octotip,.markdown-format .alert:not(.warning),.full-commit.commit,.flash,.bootcamp h1,.bootcamp-body,.owners-notice,.full-commit .browse-button,.blob-history,a.branch-name,.branch-name,.new-user-avatar-cta,.jstree-wholerow-clicked,.commit-ref,.api .alert,.file-history-tease,.flash,.flash-global,.feature-banner,.recently-touched-branches,.comment-reactions .user-has-reacted,.pr-toolbar .subset-files-tab,article.full .alert,.project-updated-message,.btn.btn-blue,.hook-delivery-guid,.topic-tag,.topic-tag-action,.delete-topic-button,.topic-tag-action .add-topic-button,.topic-tag-action .remove-topic-button,.RecentBranches
  {
    background: #182030!important;
  }

  .repo-file-upload-progress .repo-file-upload-meter,.btn.btn-blue:hover,.topic-tag-link:hover,.delete-topic-button:hover
  {
    background: #273045!important;
  }

  .bg-blue,.discussion-item-changes-marker.is-unread .discussion-item-icon
  {
    background: #93bcd1!important;
  }

  .timeline-comment.current-user .timeline-comment-header,.new-user-avatar-cta,.full-commit .browse-button,.markdown-format .alert p,.blob-history,.flash,.flash-global,.feature-banner,.recently-touched-branches,.recently-touched-branches li,.pr-toolbar .subset-files-tab,.alert.tip,article.full .alert a,.commit-ref,.project-updated-message,.timeline-comment-label.collaborator-comment,.hook-delivery-guid .octicon,.hook-delivery-guid a,a.topic-tag,.RecentBranches,.RecentBranches-item-link
  {
    color: #9daccc!important;
  }

  .RecentBranches-item,.commit-ref .user
  {
    color: #6d7c9c!important;
  }

  .timeline-comment.current-user,.github-jobs-promotion p,.octotip,.markdown-format .alert:not(.warning),.full-commit.commit,.bootcamp .bootcamp-body,.bootcamp h1,.owners-notice,.new-user-avatar-cta,.full-commit .browse-button,.commit-ref,a.branch-name,.branch-name,.timeline-comment.current-user .timeline-comment-header .timeline-comment-label,.file-history-tease,.flash,.flash-global,.feature-banner,.recently-touched-branches,.timeline-progressive-disclosure-items button,.pr-toolbar .subset-files-tab,article.full .alert,.btn.btn-blue,.topic-tag,.RecentBranches,.js-tag-input-tag
  {
    border: 1px solid #246!important;
  }

  .repo-file-upload-progress,.project-updated-message,.delete-topic-button,.topic-tag-action .add-topic-button,.topic-tag-action .remove-topic-button
  {
    border-color: #246!important;
  }

  .timeline-comment.current-user .timeline-comment-header,.blob-history,.recently-touched-branches li
  {
    border-bottom-color: #246!important;
  }

  .blob-history,.file-history-tease .participation
  {
    border-top: 1px solid #246!important;
  }

  .timeline-comment.current-user:before
  {
    border-right-color: #246!important;
  }

  .timeline-comment.current-user:after
  {
    border-right-color: #182030!important;
  }

  .flash,.markdown-format .alert a,.api .alert,a.branch-name,.branch-name,article.full .alert
  {
    border-color: #264c72!important;
    color: #c8d0e1!important;
  }

  .social-count:before
  {
    border-right-color: #333!important;
    border-width: 5px!important;
    margin-top: -4px!important;
  }

  .social-count:after,#new_hook .fields
  {
    border-width: 0!important;
  }

  .commit-icon .octicon
  {
    border-radius: 100%!important;
  }

  .discussion-item-integrations-callout .discussion-item-icon
  {
    background: #4095c6!important;
  }

  .input_prompt
  {
    color: hsla(234,100%,65%,1)!important;
  }

  .output_prompt
  {
    color: hsla(0,100%,65%,1)!important;
  }

  .repo-file-upload-tree-target
  {
    background: radial-gradient(ellipse at center,#000 0%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.6) 100%)!important;
  }

  .btn:hover,.btn:active,.btn.zeroclipboard-is-hover,.btn.zeroclipboard-is-active,.minibutton:hover,.minibutton:active,.minibutton.zeroclipboard-is-hover,.minibutton.zeroclipboard-is-active.kbd,.signup-button:hover,a.signin:hover,.hero .textographic,.hero .screenographic,.pagination span.current,.box-action:active,.btn:active,.btn.selected,.btn.selected:hover,.btn.zeroclipboard-is-active,.minibutton:active,.minibutton.selected,.minibutton.selected:hover,.minibutton.zeroclipboard-is-active,.octotree_toggle:hover,button.button:hover,a.button:hover,span.button:hover,button.minibutton:hover,a.minibutton:hover,span.minibutton:hover,.clone-url-button.selected > .clone-url-link,.clone-url-button.selected > .clone-url-link:hover,ul#bootcamp li a:hover h4
  {
    background: linear-gradient(#303030,#282828)!important;
    border-color: #484848!important;
  }

  .btn,input.btn,header.nav-bar,.bubble .bubble-title,kbd,a.feed,.list-browser-filterbar,.gobutton,.comment-header,.pagehead ul.tabs li a,.login_form input[type="submit"],.top-bar,ul#bootcamp li a h4,#gists .context-menu-container,body#com #header,.white-nav .selected span,.filter-tab,#header-wrapper,#header-wrapper .nav,.pagination span,.cheatsheet h2,.section a.section-head,.octotree_view_header,.list-heading,.dashboard-tabs li a,a.function-button,.add-pill-form,.gist .gist-file .gist-meta,.octotree_toggle,ul.comparison-list > li.title,button.button,a.button,span.button,button.minibutton,a.minibutton,span.minibutton,.clone-url-button > .clone-url-link
  {
    background: linear-gradient(#25272a,#25272a)!important;
    border-color: #383838!important;
  }

  .search-form button,.issues-list-actions,a.gollum-minibutton,a.gollum-minibutton:visited
  {
    background: linear-gradient(#25272a,#25272a)!important;
  }

  .asc .sort-type,.desc .sort-type,.mini-bar-graph,.issues-list>ul>li.unread,.timeline-commits-header,.usage-bar dd,.render-bar
  {
    background: linear-gradient(#25272a,#25272a)!important;
    border-color: #383838!important;
  }

  .bg-custom-gradient
  {
    background-image: linear-gradient(180deg,#25272a,rgba(0,0,0,0))!important;
  }

  .billing-per-seat-callout:after
  {
    box-shadow: 1px -1px 0 0 #343434!important;
  }

  .clone-url-button + .clone-url-button > .clone-url-link
  {
    box-shadow: 1px 0 0 #333!important;
  }

  .clone-url-button.selected > .clone-url-link
  {
    box-shadow: 0 2px 3px rgba(0,0,0,.3) inset!important;
  }

  .blankslate,.ScreenshotCarousel-navitem.selected
  {
    box-shadow: inset 0 0 10px rgba(255,255,255,.05)!important;
  }

  .commits-list-item .committer-avatar
  {
    box-shadow: -2px -2px 0 rgba(0,0,0,.4)!important;
  }

  .dropdown-item:hover,.dropdown-item.zeroclipboard-is-hover,.gist-snippet .link-overlay .link,.select-menu-item.navigation-focus .text-danger,.select-menu-item.navigation-focus .description,.select-menu-item.navigation-focus.selected .text-danger,.select-menu-item.navigation-focus.selected .description,.select-menu-item.navigation-focus.select-menu-action .text-danger,.select-menu-item.navigation-focus.select-menu-action .description,.select-menu-item.navigation-focus .description-inline .text-danger,.select-menu-item.navigation-focus .description-inline .description,.select-menu-item.navigation-focus,.select-menu-item.navigation-focus.selected,.select-menu-item.navigation-focus.select-menu-action,.select-menu-item.navigation-focus .description-inline,.gist-snippet-meta .gist-count-links > li > a:hover,.team-member-list .manage-team-member .navigation-focus .btn-link,.dangerzone > h3,.gcr-ext-editor-close .select-menu-title,.btn.btn-outline:hover,.btn.btn-outline:active,.btn.btn-outline.selected,.btn.btn-outline.zeroclipboard-is-hover,.btn.btn-outline.zeroclipboard-is-active,a.filter-item.selected,.date-selector td.selected,.date-selector td.selectable-day:hover,.subnav-item:hover,.subnav-item:focus,.owner-select-target:hover,.owner-select-target:focus,.suggester li.navigation-focus,.suggester li.navigation-focus small,.intgrs-lstng-categories a:hover,.text-white,a.text-white,.blame-next-container .reblame-link:hover,.reblame-link:hover,.topic-tag-action .add-topic-button:hover,.topic-tag-action .remove-topic-button:hover,.discussion-item-changes-marker.is-unread .discussion-item-icon
  {
    color: #efefef!important;
  }

  .btn,a.btn,.btn.btn-primary,.button.primary,.minibutton.primary,.btn-danger:hover,ul.repo-stats li a:hover,.text-emphasized,.minibutton.danger:hover,#gist-form label,.subnav li a:hover,.filters li.selected a,.filters li a:hover,.code-list em,a.header-anchor,.commandbar .choice .command,.search-term,.codesearch-cols em,.image,.selector-item:hover .mini-icon:before,.selector-item.selected .mini-icon:before,.new-repo .octicon,#header .nav a,.minibutton i,.minibutton,.commit .mini-icon:before,.featured-callout,.sidebar-milestone-widget .title,.numbers-summary .num,#network .explain b,.dashboard-tabs a.selected,.dropdown-menu > li > a:hover,.message .time,#graph_data .tab.selected a,.explore-collection .see-more-link,ul.color-label-list .count,a.filter-tab.selected,.orgs-nav .count,.facebox-user-list-item a,a.org-module-link,.org-header-info .name-link,.calendar-graph .contrib-details div .num,.commandbar .display table td:first-child,.file-history-tease .author a,.overall-summary .graphs .num,ul.summary-stats li .num,.pull-head-meta .pull-number a,.mini-discussion-bubble .mini-discussion-bubble-action,.sub-nav h2,.sub-nav h2 a,.accordion .section a.section-head,.orgs-nav .org-nav-item.selected,.sub-nav li a.active,a.org-link,.infobar-widget .text a,.view-modes-menu li.active,a.signin:hover,.highlight-module .mega-icon:before,.headlines li a,#wiki-rightbar li,.i-am-error p,.markdown-body .octicon-link,.gist-item ul.meta > li > a:hover,.native-download .mega-icon:before,#article-platform-nav ul li.selected a,.section-heading-title a.selected,.marketing-nav a.selected,.dashboard-tabs a:hover,.hidden-text-expander a:hover,.codesearch-cols em,.branch-action-state-clean .branch-action-icon:before,.hook-list li.selected a,.oauth-permissions-details .permission-title,p.read-it,.branch-action-state-dirty .branch-action-icon:before,.branch-action-state-closed-dirty.branch-action-icon:before,.branch-action-state-merged .branch-action-icon:before,.full-commit .authorship a,#fork-select .target:hover:not(.disabled),.full-commit .authorship .author-name,.showcase-featured .featured-grid-link,.collection-card-title,.collection-card-image:hover,.explore-page .see-more-link,.mute,.pull-request-link:hover,.expandable:hover:before,.follow-list .follow-list-name a,a.comment-header-author,.wiki-edit-link:hover,.infotip p,.form-actions .tip,dl.form.warn dd.warning,.page-notice,.subnav-item.selected,.subnav-item.selected:hover,.subnav-item.selected:focus,ol.toc > li a.active,.example-nav li a.selected,.facebox-alert,.typeahead-result,.no-results,#user-links > li * button,.timeline-commits .hidden-text-expander a:hover,.color-editor-input,#user-links .sign-out-button,.table-list-item label,.audit-action-info .context,.token-scope,.segmented-nav li.active a,.tabs > a.selected,.member-username,.invited-banner p,kbd,.kbd,.boxed-profile .profile-preview .vcard-fullname,.btn.btn-primary:hover,.minibutton.btn-primary:hover,.integrations .site-footer a,.add-line-comment,ul.filter-list .filter-item.selected,.blob-num-expandable .diff-expander:hover,.email-format .email-hidden-toggle a:hover,#gollum-editor-help-parent li a.selected,#gollum-editor-help-list li a.selected,a.gollum-minibutton,a.gollum-minibutton:visited,a.token-warning,a.lightertooltipped,.org-team-sidebar .team-note .note-emphasis,.select-menu-tabs a.selected,#com .dropdown-menu a:hover,#com h1 span,#com h2 span,.breadcrumb .final-path,button.button,a.button,span.button,button.minibutton,a.minibutton,.button.primary:hover,.pagination .current,.pagination .current:hover,.repo-private-label,a.repo_filter.js-repo-filter-tab.filter-selected,.keyboard-mappings th,.rendered_html,.render-health:hover .symbol,.radio-label,.select-menu-item.selected,.gist-snippet-meta .description,a.select-menu-item-text,.clone-url-button > .clone-url-link,a.user-mention,.user-mention,a.team-mention,.team-mention,.boxed-group-inner h4,.octotree_github_sidebar a.octotree_toggle,.reponav-item:hover,.pagehead-tabs-item.selected,.pagehead-tabs-item:hover,a.pagehead-tabs-item:hover,.tabnav-tab.selected,.leaflet-control-attribution,.leaflet-control-attribution a,.integrations-breadcrumb-link,a.integrations-breadcrumb-link,.link-gray-dark,a.link-gray-dark,#message .title,.exploregrid-item-title,.explore-collection h2,#com h1,#com h2,#com h3,ul.filter-list .filter-item:hover,.underline-nav-item.selected,.underline-nav-item:hover,.underline-nav-item:focus,.content > h2,.content > h3,.audit-results-header-title,.session-authentication .auth-form-header,.org-settings-team-type,.org-settings-team-count,.intgrs-lstng-item-header,.api h1,.api h2,.octokit-language span,.blog .text-alpha,.blog .text-beta,.blog .text-delta,.blog .text-gamma,.blog h1,.blog h2,.blog h3,.blog h4,.blog h5,.site-header-nav a,.menu-item.selected,.overview .text-beta,article h2,#message-list h1,#message-list h3,.graph-page h1,.graph-page h3,.dashboard-notice h2,.prose-diff.collapsed .rich-diff-level-zero.expandable:hover .octicon,.counter,.Counter,.state,.State,a.state,a.State,.site-header-dark .site-header .site-header-link
  {
    color: #e2e2e2!important;
  }

  pre,body,a.social-count,span.social-count,#languages a.bar,.lineoption p,a.blog-title,table.notifications th,.usagestats dl dt.numbers,.commit-preview p.name .date,.download-list h4,.fieldgroup p.explain.planusage,ol.repository-lang-stats-numbers li .lang,.explore h2,.tabnav .active a,.vcard-username,#markdown-toc li a,.tag-info .tag-name,.language,.featured-callout h2,.commit-title .message,.files .message,.revision .creator,.mini-icon.search-input,.lines-changed,.lines-changed:hover,.discussion-topic-author a,.boxed-group-table td,.graph .data .number,.content,.box-title,a.box-action,#blog-main .pagehead h1 a.title,.octofication .message p,.repolist .description,.addon p,.keyboard-mappings,.accessibility-aid:focus,.list-group-item .list-group-item-name a,.list-group-item .list-group-item-meta a,.list-browser-sorts .sort-type,.select-menu-header .select-menu-title,#commits_tab_counter,.auto-search-group .search-filter,.usage-bar dt,.github-jobs-promotion p a,.select-menu-item .description,.file-info .file-name,.file-box .meta,.gh-header-meta .author,.timeline-comment-header .author,.timeline-commits .author,.sidebar-assignee .assignee,.rss-subscribe,.sidebar-module h3 a,.sidebar-module h3.disable span,.octotip,.graph-canvas .activity,.billing-section .section-content,#readme span.name,.steps li.current,.discussion-item-entity,.blog-post-body,.subnav-search-context .btn,.context-loader,.box-title a,.merge-pr-more-commits a,.branch-infobar .lightweight-actions > li a:hover,.discussion-item-ref-title .title-link,.org-teams-list .team,.subnav-search-context .select-menu-item-icon,.ace-github,a.pagehead-nav-item.selected,a.pagehead-nav-item:hover,.repo-collection .collection-stat,a.subscribe-feed,header ul.links a:hover,div.container > p,.commits-list-item .commit-author,.full-commit .sha-block > .sha,.discussion-item .renamed-was,.discussion-item .renamed-is,a.discussion-item-entity,span.discussion-item-entity,.table-list-header-toggle .btn-link.selected,.table-list-header-toggle .btn-link.selected:hover,.table-list-header-toggle .btn-link:hover,a.issue-title-link,.milestone-title-link a,.org-header .edit-org,.org-name,.blob-code,.blob-code-inner,.diff-line-code,.contrib-number,.pulse-summary .summary-box .count,.list-options .selected .list-item-title,.nav-bar-inner .brand-logo-invertocat .octicon-mark-github,.menu a .octicon,.issue-list-meta a,.stat-number,div.search-form button span,.fullscreen-overlay .octicon:hover:before,.fullscreen-overlay .mega-octicon:hover:before,.protip-callout,.fullscreen-overlay textarea:focus,.fullscreen-overlay textarea:hover,#header ul.top-nav > li > a,#header ul.top-nav > li > button,a.team-member-ellipsis:hover,.rendered_html pre,.rendered_html code,.team-grid .team-name,.commit .commit-title,.commit .commit-title a,.completeness-indicator-success,.completeness-indicator-error,.completeness-indicator-problem,.article-meta,a.article-meta,.timeline-comment-header-text code a,.commit-tease-sha,a.commit-tease-sha,.reponav-item.selected,.stats-group-stat.no-link:hover .stat-number,.octotree_github_sidebar a.octotree_opts,.octotree_help > span,.application-authorizations .oauth-app-access-name,.dropdown-item,a.dropdown-item,.header-logo-invertocat,a.header-logo-invertocat,a.header-logo-wordmark,.pull-request-integrations-title,.intgrs-dir-intro .directory-header-back,.intgrs-dir-intro .directory-header-back .header-link,.oauth-application-info .application-title,.session-authentication .header-logo,.repo-file-upload-progress,a .mega-octicon,.anchor,a.anchor,.gcr-ext-editor-close .delete-button:hover svg,.repo-filterer .repo-filter.filter-selected,.select-menu-divider,.label-select-menu .select-menu-item.selected,.dropdown-signed-commit .dropdown-menu,.signed-commit-signer-name .signer,.signed-commit-signer-name a.signer,.text-gray-dark,a.text-gray-dark,.display-heading-1,.display-heading-2,.display-heading-3,.display-heading-4,.pinned-repos-selection-list-item.selected,.Box-body-row--highlight .Box-row-link,.text-pending,a.text-pending,.compare-pr-placeholder p,.compare-pr-placeholder .help-link,#message.good,#message.major,.boxed-group-success,.suggester li,.alert.warning p,ul#bootcamp li a h4,.menu-heading,.text-black,.diffstat-summary strong,.markdown-format h4,.access-token .token-description,.oauth-org-access-details .boxed-group-list > li.on strong,.text-gamma,.content h1,.api .text-alpha,.api .text-beta,.api .text-delta,.api .text-gamma,.api h1,.api h2,.api h3,.api h4,.api h5,.octokit-language span,.lead,.merge-branch-heading,.org-user-notice-content strong,.timeline-comment-label.owner-comment,.Box-row-link,a.Box-row-link,.form-control,.form-select,.header .header-search-scope,.discussion-item-private,.label-select-menu div.labelstyle-000000.selected,.marketplace-plan-emphasis
  {
    color: silver!important;
  }

  button,.edit-repository-meta,.field label,.boxed-group-list li,.capped-box,.marketing-nav a,.repository-meta,.gist-item .description,p.explain,.news .alert .simple .title,#network .graph-date,.tabnav-widget.text,.feature .intro,span.diffstat,span.diffstat a,.commit .commit-branches a,#readme .plain,.news blockquote,.news blockquote p,.collection-stat,.overall-summary .graphs .desc,.flash-global a,.calendar-graph .contrib-details div .lbl,.tag-info a,a.browse-button,.ghead .dir,.repository-lang-stats .percent,.comment-header-action-text a,.comment-header-right a,.gist-item .creator,.dashboard-tabs a,#graph_data .tab a,.pull-info,.list-group-item .list-group-item-summary a,#contributors .capped-card .cmt,.boxed-group-list .access-level,h3.conversation-list-heading,a.filter-tab,.starred-repo p.description,.commit-desc pre,.org-repo-stats a,.org-repo-updated a,.org-repo-description,.org-repo-forked a,.commandbar .display table td span,.clone-options,.pulse-section,.discussion-sidebar p,.discussion-topic-header .discussion-topic-author,.gist-description,.explain,p.subtext,.team-grid .team-description,.orgs-nav .org-nav-item,.form-actions-protip .protip,.discussion-item .author,.inline-comments .comment-count,.sidebar-heading,.clear-issue-filters a,.render-view-modes li.active:before,ul.comparison-list > li em,.marketing-benefits .column p,.sub-nav li a,.headlines a .date,.sidebar-module ul ul li span,.merge-branch-description,.gist-item ul.meta > li > a,ul#categories li h5 a,.render-view-modes li.active,.user-leaderboard-list .repo-list-item .repo,.repo-stats li a,.about p,dl.form > dd p.note,p.subdued,.team-header .team-description,.hfields dl.form > dt label,.boxed-group > h3 a.boxed-group-breadcrumb,.boxed-group .heading a.boxed-group-breadcrumb,.subscriptions-sidebar .note,.thread-subscription-status,a.ellipsis-button,.ellipsis-button,.follow-list .follow-list-info,form.btn .count,.blame .commitinfo .date,.gist .gist-file .gist-meta a,.merge-pr-more-commits,.hidden-text-expander a,.news div.message,.news li blockquote,.news .alert .pull-info,.news .alert .branch-link,.release .release-authorship a,.wiki-wrapper .wiki-empty-box:hover,.select-menu.is-showing-clear-item .select-menu-clear-item .octicon,.diffstat-summary a,a.subnav-item,.branches .branch-group-heading .branch-group-name,.render-notice,.table-list-milestones .stat,.commits-listing .commit-group-title .octicon-git-commit,.select-menu-header .octicon:hover,.repo-list-description,.file .meta,.email-format .email-hidden-toggle a,.file-diffstat,.program-info-column .mega-octicon,.octofication .notice-dismiss:hover,.timeline-commits .commit-message a,.markdown-format .intro,.label-admin,.program-info-column p,.file-history-tease,.blob-num:hover,.gist-snippet-meta .gist-count-links > li > a,.commit-tease .message,.commit-author-section,.manage-repo-access-not-active,.milestone-name,a.milestone-name,.select-menu-modal,.select-menu-action,a.select-menu-action,.feature-callout,.repo-file-upload-file-wrap .remove-file:hover,button.tabnav-tab,.rss-subscribe,a.rss-subscribe,table.capped-list .octicon,.site-header-menu .nav-item,.discussion-item-icon,.exploregrid-item,a.exploregrid-item,.markdown-body blockquote,.link-gray,a.link-gray
  {
    color: #b5b5b5!important;
  }

  .calendar-graph .contrib-details div,.tabnav-tabs a,.time,.gist-item .metadata .datetime,.list-group-item-meta,a.keyboard-shortcuts,button.keyboard-shortcuts,.simple-conversation-list,.simple-conversation-list > li .title .num,.drag-and-drop,.starred-repo .sort-info,.org-stats,.commandbar .choice,.commandbar .loading,.commandbar .description,ul.summary-stats li a,.authorship,.sha-block,.gh-header-meta,#last-edit,.setup-header .lead a,.repository-meta .edit-link a,.api-status a,.meta li,.who_when a,.numbers-summary a,.mini-icon-remove-close:hover,.section-heading-title .separator,.blog-aside .rss,.hook-list a,.github-jobs-promotion a.jobs-logo,.org-teams-list .team-meta,.repo-list-item .repo-description,.branch-infobar .lightweight-actions > li a,.repo-leaderboard-list .repo-leaderboard-meta-item a,.changed .moved-up:before,.changed .moved-down:before,.comment-header .octicon,a.section-heading-back,.list-group-item-meta .octicon,.repo-leaderboard-title .title-meta,a.pagehead-nav-item,.wiki-wrapper .wiki-empty-box,.commits-list-item .commits-comments-link,.timeline-comment-header,.commits-list-item .commit-meta,.issues-listing .table-list-issues .issue-comments-link,.issues-listing .table-list-issues .issue-meta-section a,a.issues-reset-query,.labels-list-action,table.tag-list p a,table.tag-list td.date a,.muted-link,a.muted-link,.render-view-modes li,.site-footer,.site-footer .octicon-mark-github:hover,.repo-list-stats .repo-list-stat-item,.range-editor span.flag .octicon,.commit-info .commit-meta a,.notifications .issue-notification.read .type-icon,.notifications .read a,.auth-form-header .octicon,.releases-tag-list p a,.history-link a,a.issue-nwo-link,ul.filter-list .filter-item,.member-meta .teams-link,.member-meta .btn-link,ul.comparison-list > li em,ul.comparison-list > li.title,.diffstat-summary,a.team-member-ellipsis,a.discussion-item-toggle-open,a.discussion-item-toggle-closed,button.discussion-item-toggle-open,button.discussion-item-toggle-closed,.dropdown-header,.participation a,.completeness-indicator-info,.type-icon-state-none,a.type-icon-state-none,.pagehead-tabs-item,a.pagehead-tabs-item,.commit-tease,.reponav-item,a.reponav-item,.delete-owners-button,.stats-group-stat,a.stats-group-stat,.stats-group-stat.no-link:hover,.wiki-edit-link,a.wiki-edit-link,.toolbar-item .menu-target,.member-meta .member-meta-link,.lock-toggle-link,a.lock-toggle-link,.hidden-text-expander a,.ellipsis-expander,.text-muted,.listgroup-item,.discussion-item-header,.discussion-sidebar-heading,.org-header-meta .meta-item .meta-link,.underline-nav-item,a.underline-nav-item,.boxed-group-inner,.lead,.form-checkbox .note,.bot-identifier,.dashboard-notice .dismiss:hover,.text-gray,a.text-gray,.project-header .project-header-link,td.icon .octicon-file-text,td.icon .octicon-file-symlink-file
  {
    color: #949494!important;
  }

  .vcard-detail .octicon,.member-badge .octicon,.command-bar .octicon-question:before,.news .alert .time,ul.color-label-list .color-label.zeroed,ul.color-label-list .color-label.zeroed .count,.gh-header-title .issue-number,a.leaderboard-list-rank,.bootcamp ul li a,.ssh-key-fingerprint,.tag-references > li a,.release .release-authorship,.branches .branch-summary,.branches .no-results-message,header ul.links > li a,.team-info-card .stats-group .stat,.team-info-card .stats-group .stat.no-link:hover,.discussion-sidebar-item,.issues-listing .table-list-issues .issue-meta,.task-progress,.table-list-milestones .stat-label,.table-list,#blog-home,.blog-post-meta,.blog-post-meta a,.blog-post-meta .octicon,.diff-line-num,.file-data .line-numbers span,.discussion-item .timestamp,.branch-status .divider,.news .alert .octicon,.news .alert .mega-octicon,.blankslate > .mega-octicon,.repo-list-meta,a.discussion-item-help,.page-new-repo .license-info,.notification-actions .btn-link,.commit-info .commit-meta,.notifications .read .type-icon,.notification-actions .age,.list-item .byline,.issue-list-meta,.blob-num-expandable .diff-expander,.file-type-icon,.uploaded-files .remove,.releases-tag-list td.date a,.collaborators .collab-remove .remove-link,.octofication .notice-dismiss,ul.comparison-list > li .octicon,div.content-header h6,.fullscreen-overlay textarea,.blob-num.non-expandable:hover,.breadcrumb,.application-authorizations .oauth-app-list-meta,.application-authorizations .oauth-app-owner,.boxed-group-inner .help,.thread-subscription-status .reason,.toc-diff-stats .octicon,.blob-num,.recent-gists .description .blank,.recent-gists .metadata,.member-meta .access-link,.gist-quicksearch-no-results,#user-content-toc ul ul li:before,.btn-octicon,a.btn-octicon,button.btn-octicon,.user-list li em,.reponav-item .octicon,.pagehead-tabs-item .octicon,.table-list-header-toggle .btn-link,#graph_data h2,#message-list .message .time,a.tabnav-extra,.tabnav .tabnav-extras,.discussion-item-integrations-callout .pull-request-integrations-dismiss,.oauth-application-info .meta-link,.oauth-application-info .app-info,.repo-file-upload-file-wrap .remove-file,#footer .mega-octicon,.gcr-ext-editor-close svg,.commit-id,a.commit-id,.orghead .edit-org,.signed-commit-badge,.manage-member-meta-item .btn-link,.note,.delete-topic-button,.topic-tag-action .add-topic-button,.topic-tag-action .remove-topic-button,.text-gray-light,a.text-gray-light
  {
    color: #7b7b7b!important;
  }

  .branch-infobar .lightweight-actions > li .octicon,.manage-repo-access-icon .octicon,.wiki-wrapper .wiki-history .date,.issue-meta-section .octicon,.thread-subscription-status .mega-octicon,.subnav-search-icon,.discussion-sidebar-toggle .octicon,.auto-search-group > .octicon,.page-gist-edit .octicon-gist,.unselected-month,.pagination .disabled,.repohead h1 .octicon,.profile-rollup-toggle,.select-menu-item.disabled,.select-menu-item.disabled.selected,.select-menu-item.disabled .description,.dashboard-notice .dismiss,.blame-next-container .reblame-link
  {
    color: #606060!important;
  }

  .context-pane .selector-item:hover a,.mega-icon:before,.mini-icon-public-repo:before,.mini-icon-pull-request,.mini-icon-remove-close,.mini-icon-link,.task-progress .octicon,.milestone-link .octicon,.site-footer .octicon-mark-github,.select-menu-header .octicon,.steps li,.pagination .gap,.octicon-btn.disabled,.octicon-btn.disabled:hover,.branch-delete.disabled,.date_selector td.unselected_month,.bootcamp .desc h2,.issues-listing .table-list-issues .issue-comments-link.no-comment,.diffstat-bar,.issue-comments-no-comment,a.issue-comments-no-comment,.prose-diff.collapsed .rich-diff-level-zero.expandable .octicon
  {
    color: #4d4d4d!important;
  }

  .list-tip:before,.selector-item .mini-icon:before,.browser .mini-icon-arr-right,.selected .select-menu-checkmark,.octicon-person-team:before,.issues-reset-query .octicon-x,a.darkertooltipped,#subscribeButton
  {
    color: #373737!important;
  }

  .timeline-comment-header .timestamp,.vcard-stat:hover .text-muted,.boxed-group > h3 a,.boxed-group .heading a,.list-heading a,.close-button,.timeline-comment-action,a.timeline-comment-action,a.comment-type-icon,.timeline-comment-actions .octicon,.commit-title .commit-link tt,.btn-block-user,.pagehead-tabs-item.selected > .octicon,.reponav-item.selected > .octicon,.select-menu-action > .octicon,.select-menu-item,a.select-menu-item,.discussion-sidebar-toggle:hover .octicon,.feature-callout .feature-dismiss-link,.pagehead-heading,a.pagehead-heading,.text-inherit,a.text-inherit,.table-list-milestones .stat a,.review-comment-contents .timestamp,.discussion-item-ref-title .title-link:hover .issue-num
  {
    color: inherit!important;
  }

  .metabox .editable-text:hover,#inbox .list .item .title span
  {
    background-color: transparent!important;
    border: 0!important;
  }

  #posts #rss,.signup-button,.hero h1,.plan.personal,.caption,.centered-graphic,.login_form h1
  {
    background-color: #93bcd1!important;
    border-color: #93bcd1!important;
  }

  #forkqueue .legend .unclean,.unclean td,.chzn-results .no-results,.majorproblem .pageheader_wrap,.error_box,.btn-close-issue,.closed-issues,.state-indicator.closed,.state-closed,.discussion-item-closed .discussion-item-icon,.discussion-item-review.is-rejected.is-writer .discussion-item-icon,.topic-tag-action .remove-topic-button:hover
  {
    background: #911!important;
    border-color: #383838!important;
  }

  .btn-close-issue:hover,.btn-danger:hover,.minibutton.danger:hover,.remove-topic-button:hover
  {
    background: #911!important;
    border-color: #b00!important;
  }

  .mergeable-dirty .bubble,.mergeable-dirty .merge-status-icon,.completeness-indicator-error,.dangerzone > h3
  {
    background: #911!important;
  }

  .block-diff-deleted,.text-diff-deleted .block-diff-neutral
  {
    background: #b22!important;
  }

  .mergeable-dirty .bubble .mergeable,#message.major,.comment-form-error,.comment-form-stale,.deprecation-notice,.flash-error,.error
  {
    border-color: #f44!important;
    background: #300!important;
  }

  .release-label.draft
  {
    border-color: #f44!important;
  }

  .error:after
  {
    border-bottom-color: #f44!important;
  }

  .mergeable-dirty .bubble:after
  {
    border-right-color: #911!important;
  }

  .btn-danger,a.btn-danger,.text-failure,a.text-failure,.text-error,a.text-error,a:not(.octicon-btn).danger,.closed.mega-octicon,.deletions,.closed.octicon,.cdel,.gd .diff-line-num,.authors-and-code .deletions,.diffstat .diffstat-bar.diff-deleted,span.diffstat .diffstat-bar i.minus,.icon-for-failure,ul.summary-stats li .octicon-issue-closed,.branch-delete,#toc .octicon-diff-removed,.pagehead-actions .octicon-mute,.highlight .gd,.settings-email .email-actions .settings-remove-email,.uploaded-files .remove:hover,.collaborators .collab-remove .remove-link:hover,.minibutton.danger,.closed.mini-icon,.octicon-btn-danger:hover,.text-danger,a.text-danger,.type-icon-state-closed,a.type-icon-state-closed,.reverted.octicon,.delete-owners-button:hover,.dangerzone-module h4,.btn-octicon-danger:hover,.deprecation-notice a,.billing-addon-items tr.total-row *,.comment-form-error,.comment-form-stale,.markdown-body .absent,.text-red,a.text-red,.flash-error,.error,.release-label.draft
  {
    color: #f44!important;
  }

  .illflow-item.selected
  {
    background: #30182b!important;
  }

  .illflow-item.selected:after
  {
    border-bottom-color: #30182b!important;
  }

  #feedHeaderContainer,.feedBackground,.infotip,.form-actions .tip,.mini-callout,.snippet em,#message .sent,.notification,.callout,.ejector,#issues_search .results em,.bootcamp-help ul li,.btn-download,.feature-tabs .tab-button,.plan.free,#message.minor,.chzn-results li em,#missing-readme,.page-notice,.facebox-alert,.form-checkbox label em.highlight,.deprecation-warning,.branch-status.status-pending .discussion-item-icon,.discussion-event-status-renamed .discussion-item-icon,.state-indicator.renamed,.discussion-topic .branch-status.status-pending,.discussion-item-review.is-pending .file-header,.discussion-item-review.is-pending .comment-form-head.tabnav
  {
    background-color: #261d08!important;
    border-color: #542!important;
    color: #ddd!important;
  }

  .review-summary-form-wrapper,.discussion-item-review.is-pending .file,.discussion-item-review.is-pending .file-header,.discussion-item-review.is-pending .tabnav-tab.selected,.discussion-item-review.is-pending .comment-form-head.tabnav
  {
    border-color: #542!important;
  }

  #toc .octicon-diff-modified,.secret .repo-label span,.api .s2
  {
    color: #b74!important;
  }

  .deprecation-warning a
  {
    color: #c97!important;
  }

  .compare-pr-placeholder,.compare-cutoff,.diff-cutoff,.flash.flash-warn,.flash-global.flash-warn,.markdown-body li.added.moved,.repo-private-label,.gist-secret-label,.label-private,.stale-files-tab,.signed-out-comment,.warning,.commits-list-item em,.unsupported-browser
  {
    background: rgba(51,34,17,.4)!important;
    border: 1px solid #542!important;
    color: #ddd!important;
  }

  .warning
  {
    background: #321!important;
  }

  .warning:after
  {
    border-bottom-color: #321!important;
  }

  .warning:before
  {
    border-bottom-color: #542!important;
  }

  .btn.btn-secret
  {
    background: linear-gradient(#321,#210)!important;
    border-color: #542!important;
  }

  .btn.btn-secret:hover
  {
    background: linear-gradient(#432,#321)!important;
  }

  .btn.btn-secret[disabled],.btn.btn-secret[disabled]:hover
  {
    background: #210!important;
    border-color: #542!important;
  }

  .text-pending,a.text-pending,.text-renamed,a.text-renamed,.bg-pending,a.bg-pending
  {
    color: #cb4!important;
  }

  .branch-action-state-unknown .branch-action-body,.branch-action-state-unknown .branch-status,.branch-action-state-unstable .branch-action-body,.branch-action-state-unstable .branch-status
  {
    border-color: #884!important;
  }

  .branch-action-state-unknown .branch-action-body:before,.branch-action-state-unstable .branch-action-body:before
  {
    border-right-color: #884!important;
  }

  #forkqueue .legend .clean,#revisions ul li.current,.excerpt,.plan.business,.popout,#statusbar,.clean td,#download_button,.status-box.good a,.discussion-item-reopened .discussion-item-icon,.progress-bar .progress,.new-issues,.new-pulls,.mergeable-clean .merge-status-icon,.settings-email .default,.repo-owner-comment .comment-header-tag,.mergeable-clean .bubble,.gh-header-status.open,.branch-status.status-success .discussion-item-icon,.state-open,.state-proposed,.big-notice,.state-indicator.open,.state-indicator.proposed,.state-indicator.reopened,.boxed-group-success,.branch-action-state-clean .branch-action-icon,.user-list li .actions .status-modified,#message.good,.bg-green,.discussion-item-reopened .discussion-item-icon,.discussion-item-review.is-approved.is-writer .discussion-item-icon,.add-topic-button:hover,.topic-tag-action .add-topic-button:hover
  {
    background: #163!important;
    border-color: #041!important;
  }

  .mergeable-clean .bubble .mergeable,.branch-action-state-clean .branch-action-body
  {
    border-color: #041!important;
  }

  .mergeable-clean .bubble:after,.branch-action-state-clean .branch-action-body:before
  {
    border-right-color: #041!important;
  }

  .completeness-indicator-success
  {
    background: #152!important;
  }

  .billing-confirmation-box
  {
    border-color: #083!important;
  }

  .signed-commit-badge.verified:hover
  {
    border-color: #6cc644!important;
  }

  .signed-commit-verified-label,.signed-commit-badge.verified
  {
    color: #55a532!important;
  }

  .text-open,a.text-open,.text-success,a.text-success,.insertions,.open.mini-icon,.open.mega-octicon,.open.octicon,.cadd,.gi .diff-line-num,.authors-and-code .insertions,span.diffstat .diffstat-bar.diff-added,span.diffstat .diffstat-bar i.plus,ul.summary-stats li .octicon-git-branch-create,ul.summary-stats li .octicon-issue-opened,#toc .octicon-diff-added,.setup-info-module .features-list .octicon,.setup-form-container .secure,.highlight .gi,.type-icon-state-open,a.type-icon-state-open,.text-green,a.text-green,.release-label.latest a
  {
    color: #6cc644!important;
  }

  .block-diff-added,.text-diff-added .block-diff-neutral
  {
    background: #6cc644!important;
  }

  .release-label.latest
  {
    border-color: #6cc644!important;
  }

  .btn-primary:not(.compare-button),.button.primary,.btn-theme-green
  {
    background: linear-gradient(#407045,#305530)!important;
    border-color: #083!important;
  }

  .button.primary:disabled,.button.primary:disabled:hover,.button.primary.disabled,.button.primary.disabled:hover,.btn-primary:disabled,.btn-primary:disabled:hover,.btn-primary.disabled,.btn-primary.disabled:hover,.btn-theme-green:disabled,.btn-theme-green:disabled:hover
  {
    background: linear-gradient(#203522,#152715)!important;
    border-color: #041!important;
  }

  .repo-owner-tag .tag,.gist-owner-tag .tag
  {
    background: #070!important;
    color: #ddd!important;
  }

  .noproblems .pageheader_wrap,a.new-repo:hover
  {
    background: #373!important;
  }

  .btn-primary:not(:disabled):not(.compare-button):hover,.button.primary:not(:disabled):hover,.btn-theme-green:hover
  {
    background: linear-gradient(#508055,#407045)!important;
  }

  #user-links .unread_count,.minorproblem .pageheader_wrap
  {
    background: rgba(203,108,0,.8)!important;
  }

  .text-orange,a.text-orange,.release-label.prerelease
  {
    color: #f3582c!important;
  }

  .release-label.prerelease
  {
    border-color: #f66a0a!important;
  }

  .merge-status-icon,.merged-pulls,.state-indicator.merged,.state-merged,.discussion-item-merged .discussion-item-icon
  {
    background: #6e5494!important;
  }

  ul.summary-stats li .octicon-git-pull-request,.type-icon-state-merged,a.type-icon-state-merged
  {
    color: #8368aa!important;
  }

  .text-purple,a.text-purple
  {
    color: #943fb8!important;
  }

  .pjax-loader-bar .progress
  {
    background: #93bcd1!important;
    box-shadow: 0 0 10px #93bcd1!important;
  }

  ul.view-modes-menu
  {
    background-image: url(data:image/gif;base64,R0lGODlhBwAEAIAAACIiIv///yH5BAEAAAEALAAAAAAHAAQAAAIIhA+BGWoNWSgAOw==)!important;
  }

  .mini-icon-windows:before
  {
    background-position: -18px 0!important;
  }

  .repo-list-item p,.repo-list-item .repo-list-stats
  {
    position: relative!important;
    z-index: 1!important;
  }

  .review-comment-contents:after,.review-comment.is-comment-editing:after
  {
    z-index: 0!important;
  }

  .review-comment .avatar
  {
    position: relative!important;
    z-index: 1!important;
    background: #25272a!important;
    box-shadow: 0 0 0 4px #25272a!important;
  }

  .reponav-item,.pagehead-tabs-item
  {
    position: relative!important;
    top: 2px!important;
  }

  .participation-graph svg
  {
    background: transparent!important;
    opacity: .1!important;
    z-index: 0!important;
  }

  .inbox-zero-octocat,.network-graph-container
  {
    opacity: .6!important;
  }

  .search .minibutton span
  {
    background-position: center -95px!important;
  }

  .upload-enabled textarea
  {
    border-bottom: 1px dashed #444!important;
  }

  .commit .minibutton.expander-minibutton span
  {
    background-position: 50% -45px!important;
  }

  .commit.open .minibutton.expander-minibutton span
  {
    background-position: 50% -145px!important;
  }

  .avatar-bubble:before,.discussion-bubble-content:before
  {
    border-color: transparent #333 transparent transparent !important;
  }

  img[src*="octocat-spinner"],img[src="/images/spinner.gif"],.profile-picture-spinner
  {
    width: 0!important;
    height: 0!important;
  }

  img[src*="octocat-spinner"],img[src="/images/spinner.gif"],.facebox-loading,.branch-action-body .spinner,.status-indicator-loading,.ajax-pagination-form.loading .ajax-pagination-btn:after,.profile-picture-spinner,.more-repos-link.is-loading
  {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTM2NCAyOC42QzQyMC43IDU3IDQ1OS42IDk0LjQgNDg1IDE1MWwtMzEuNCAxNWMtMjAtNDEtNjMtODQtMTA0LjYtMTA0LjUiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIHZhbHVlcz0iIzMzMzsjZWVlOyMzMzM7IzMzMyIgYmVnaW49IjBzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcGF0aD48cGF0aCBmaWxsPSIjMzMzIiBkPSJNNDk0IDE2OWMyMCA2MCAyMSAxMTQtMSAxNzJsLTMyLjgtMTEuNGMxNS00My4zIDE1LTEwNCAwLTE0OCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgdmFsdWVzPSIjMzMzOyNlZWU7IzMzMzsjMzMzIiBiZWdpbj0iMC4xMjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcGF0aD48cGF0aCBmaWxsPSIjMzMzIiBkPSJNNDg1LjQgMzU5LjJjLTI4LjMgNTYuNi02NS44IDk1LjUtMTIyLjQgMTIxbC0xNS4yLTMxLjRjNDEuMy0yMCA4NC4yLTYzIDEwNC43LTEwNC42Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiB2YWx1ZXM9IiMzMzM7I2VlZTsjMzMzOyMzMzMiIGJlZ2luPSIwLjI1MHMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0zNDQuNSA0ODguNWMtNjAgMjAtMTE0IDIxLTE3Mi0xbDExLjQtMzNjNDMuMiAxNSAxMDQgMTUgMTQ4IDAiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIHZhbHVlcz0iIzMzMzsjZWVlOyMzMzM7IzMzMyIgYmVnaW49IjAuMzc1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTE1NC4zIDQ4Mi44Yy01Ni42LTI4LjQtOTUuNS02NS44LTEyMS0xMjIuNGwzMS40LTE1LjJjMjAgNDEuMyA2MyA4NC4yIDEwNC42IDEwNC43Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiB2YWx1ZXM9IiMzMzM7I2VlZTsjMzMzOyMzMzMiIGJlZ2luPSIwLjUwMHMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0yMy43IDM0Mi43Yy0yMC02MC0yMS0xMTQgMS0xNzJsMzMgMTEuNGMtMTUgNDMuNS0xNSAxMDQgMCAxNDgiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIHZhbHVlcz0iIzMzMzsjZWVlOyMzMzM7IzMzMyIgYmVnaW49IjAuNjI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTMxLjggMTUxQzYwIDk0LjIgOTcuNSA1NS4zIDE1NCAzMGwxNS4zIDMxLjNjLTQxLjIgMjAtODQgNjMtMTA0LjYgMTA0LjYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIHZhbHVlcz0iIzMzMzsjZWVlOyMzMzM7IzMzMyIgYmVnaW49IjAuNzUwcyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTE3MyAyMWM2MC0yMCAxMTQtMjEgMTcyIDFsLTExLjUgMzIuOGMtNDMuMy0xNS0xMDQtMTUtMTQ4IDAiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIHZhbHVlcz0iIzMzMzsjZWVlOyMzMzM7IzMzMyIgYmVnaW49IjAuODc1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PHBhdGggZmlsbD0iI2VlZSIgZD0iTTE5NyA0NTl2LTQ4cy00LTQtMzMtMWMtMjggMy02Mi02Ni02NS02OSAyNC0xMCA0MyAyNiA2NSAzOGgzMXMzLTQ0IDIwLTM3YzE3IDYtNzIgMS05Ny02MXMxOS0xMjYgMjAtMTE1YzAgOS0xNy0zNS0xMC00NiAyMC0yNCA1MCAxMSA2OSAxNSA1IDAgMTgtOCA1OS03IDQxIDAgNTUgOCA2MCA2IDIyLTEwIDUxLTMyIDY1LTE3IDEwIDEyLTEgNjEtMSA0OXM0MyA4MSA2IDEzMmMtMjkgNDYtOTUgNDMtODQgNDYgMjEgMTUgMTQgOTEgMTQgMTE1bC0yMiA0di03NGMwLTktOS0xMC05LTl2ODVsLTIxIDF2LTg2aC0xMHY4NmwtMjAtMXYtODNzLTgtMS04IDEwdjcyIi8+PC9zdmc+)!important;
    background-size: contain!important;
  }

  .more-repos-link.is-loading
  {
    background-repeat: no-repeat!important;
    background-position: 50% 50%!important;
    background-size: 16px 16px!important;
  }

  .timeline-progressive-disclosure-container
  {
    background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NHB4IiBoZWlnaHQ9IjM0cHgiIHZpZXdCb3g9IjAgMCA0NCAzNCI+PHBvbHlsaW5lIGZpbGw9IiM0NDQiIHBvaW50cz0iMCwyMSAyMiw4IDQ0LDIxIDQ0LDI2IDIyLDEzIDAsMjYiLz48L3N2Zz4NCg==) repeat-x left center/22px 17px!important;
  }

  img[src*="octocat-spinner"][width="128"]
  {
    padding: 64px!important;
  }

  img[src*="octocat-spinner"][width="64"],.profile-picture-spinner
  {
    padding: 32px!important;
  }

  img[src*="octocat-spinner"][width="32"]
  {
    padding: 16px!important;
  }

  img[src*="octocat-spinner"][width="16"]
  {
    padding: 8px!important;
  }

  img[src="/images/spinner.gif"]
  {
    padding: 32px!important;
  }

  .network-tree
  {
    width: 26px!important;
    height: 0!important;
    padding-top: 22px!important;
    background-repeat: no-repeat!important;
  }

  .network-tree[src$="t.png"]
  {
    background-image: url(data:image/gif;base64,R0lGODlhFAAaAPABADMzMwAAACH5BAUAAAEALAAAAAAUABoAAAIkjI+pG8APY5O0uorfzRzt3n1g5pSTOTJiSq1s5L6ajMW0YgcFADs=)!important;
  }

  .network-tree[src$="i.png"]
  {
    background-image: url(data:image/gif;base64,R0lGODlhFAAaAPABADMzMwAAACH5BAUAAAEALAAAAAAUABoAAAIhjI+pG8APY5O0uorfzRzt3n1gJo6WGaJcqUJsy7ywIgcFADs=)!important;
  }

  .network-tree[src$="l.png"]
  {
    background-image: url(data:image/gif;base64,R0lGODlhFAAaAPABADMzMwAAACH5BAUAAAEALAAAAAAUABoAAAIejI+pG8APY5O0uorfzRzt3n1g5pSTOabqyrbuC68FADs=)!important;
  }

  #searchfield
  {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAAM1BMVEUAAABKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkrmvr7+AAAAEXRSTlMAmEgOJpKQimpgRHVzVk8fFp8jXkwAAABRSURBVAjXVY1JDsAwCAMxhGxNl/+/toVEKpmLNcLCRJRqKTXRhOGwS4KyCCv8eoBnY1hkiIUgb6ah2THWly7SFS0uAKfZWm+mP59eUfNNgYdehjcBh7PIFcgAAAAASUVORK5CYII=)!important;
    background-repeat: no-repeat!important;
    background-position: 8px center!important;
  }

  a.octotree_toggle:not(.octotree_loading) > span:after,.octotree_github_sidebar a.octotree_opts,.octotree_help > span
  {
    -webkit-filter: invert(100%)!important;
    filter: invert(100%)!important;
  }

  a.octotree_toggle:not(.octotree_loading):hover > span:after,.octotree_github_sidebar a.octotree_opts:hover,.octotree_treeview .jstree-icon.tree
  {
    -webkit-filter: grayscale(100%)!important;
    filter: grayscale(100%)!important;
  }

  .ajax-pagination-form.loading .ajax-pagination-btn
  {
    position: relative!important;
    border-color: #343434!important;
    background: #25272a!important;
  }

  .ajax-pagination-form.loading .ajax-pagination-btn:after
  {
    content: ""!important;
    position: absolute!important;
    width: 16px!important;
    height: 16px!important;
    left: 50%!important;
    top: 50%!important;
    transform: translate(-50%,-50%)!important;
  }

  .branch-action-body .spinner,div.facebox-loading,.status-indicator-loading
  {
    background-position: center center!important;
    width: 100%!important;
    background-repeat: no-repeat!important;
  }

  .render-shell .img-view img,.file .image img,.file .image canvas,img.asset,.render-shell img:not(.math)
  {
    background-image: url(data:image/gif;base64,R0lGODlhCgAKAIAAABoaGgAAACwAAAAACgAKAAACEYQdmYcaDNxjEspKndVZbc8UADs=)!important;
  }

  .render-shell:hover .img-view img,.file:hover .image img,.file:hover .image canvas,img.asset:hover,.render-shell:hover img:not(.math)
  {
    background-image: url(data:image/gif;base64,R0lGODlhCgAKAIAAAOXl5f///yH5BAAAAAAALAAAAAAKAAoAAAIRhB2ZhxoM3GMSykqd1VltzxQAOw==)!important;
  }

  .form-select
  {
    background: #25272a url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAQAAAAua3X8AAAARklEQVR4AWNABWcazjQg8zGl/wNhA15piBL80gglmNKYSjClMZUgpDGVwKXxKBl4QNiRBLxJIKAIBzXhyCIc3YQTDMEkBwBplPJRxEMa4wAAAABJRU5ErkJggg==) no-repeat right 8px center!important;
    background-size: 8px 10px!important;
  }

  .repository-lang-stats-graph
  {
    height: 9px!important;
  }

  .multiple-avatars,.multiple-avatars:before,table.files,table.files tr,.simple-conversation-list>li:first-child,.gobutton.with-comments .sha,.usage-bar dd,.setup-form-container .fieldgroup .fields,.inline-comments .line-comments,#gist-form .gist-name-textbox,#adv_code_search .search-page-input,.fullscreen-overlay textarea,.file .image .border-wrap,.site-search .chromeless-input,.profile-timeline-card-wrapper,.render-shell img,img.asset
  {
    border: 0!important;
  }

  .dashboard-tabs a
  {
    border-left: 0!important;
    border-right: 0!important;
  }

  .js-details-container.navigation-focus .gobutton
  {
    background: linear-gradient(#444,#222)!important;
  }

  table.files
  {
    border-top-left-radius: 0!important;
    border-top-right-radius: 0!important;
  }

  .issues-list,.pulls-list-group,.commit-tease,.branch-infobar,.pagehead.repohead h1 .repo-label span,.coupons .coupon-form-body .coupon-icon,.menu,.merge-pr-more-commits,.api pre
  {
    border: 1px solid #484848!important;
  }

  #graph-shots li > p,.select-menu-item,.logo-box,.branch-infobar
  {
    border-bottom: none!important;
  }

  .pull-info,.branch-link,.milestone-list .progress-bar
  {
    border: 1px solid #444!important;
  }

  .more-repos
  {
    border-top: #484848 1px solid!important;
  }

  .pull-head,.capped-box
  {
    border-bottom: #484848 1px solid!important;
  }

  .dropdown-menu:after
  {
    border-bottom: #343434 8px solid!important;
  }

  .dropdown-menu-ne:after,.tutorial-nw:after
  {
    border-top-color: #343434!important;
    border-bottom-color: transparent!important;
  }

  .TutorialPopover--north:after
  {
    border-top-color: #343434!important;
  }

  .dropdown-menu-e:after,.tutorial-e:after,.file-commit-form .commit-form:before
  {
    border-right-color: #343434!important;
    border-bottom-color: transparent!important;
  }

  .dropdown-menu-w:after
  {
    border-left-color: #343434!important;
    border-bottom-color: transparent!important;
  }

  .file-commit-form .commit-form:after,.ScreenshotCarousel-navitem
  {
    border-right-color: #222!important;
  }

  .markdown-format p > code,.markdown-body code,.markdown-body tt,.markdown-format pre,.markdown-body pre,.markdown-format .highlight pre,.markdown-body .highlight pre,body.blog pre,#user-content-toc td,.copyable-terminal
  {
    border: 1px solid rgba(255,255,255,.1)!important;
  }

  #user-content-toc
  {
    border-collapse: separate!important;
  }

  #facebox pre,#contributors-master svg.viz,#com .dropdown-menu,.header-search-wrapper
  {
    border: 1px solid #343434!important;
  }

  .blog-aside .octicon-rss,.dashboard-feed-icon.octicon-rss,.nav-rss a .octicon-rss,a.feed-icon,#dashboard .octicon-rss
  {
    color: #f93!important;
  }

  .featured-label
  {
    background: #f5b987!important;
    border: none!important;
    padding: 6px!important;
    color: #ed7c21!important;
  }

  .featured-label .octicon,.page-new-repo div.form-checkbox .octicon-lock:before
  {
    color: #ed7c21!important;
  }

  .diff-line-pre
  {
    color: #ccc!important;
  }

  .diff-table .line-comments
  {
    border-top: 1px solid #333!important;
    border-bottom: 1px solid #333!important;
  }

  #header-wrapper,.menu li + li
  {
    border-bottom: 1px solid #333!important;
  }

  .js-release-form .drag-and-drop
  {
    border-top: none!important;
  }

  .highlight .expandable-line-num,.highlight .diff-line-num-hunk,.highlight .diff-line-code-hunk,.highlight .expandable-line-code
  {
    background: #222!important;
    color: #888!important;
  }

  .blob-code.blob-code-addition,.blob-num.blob-num-addition,.prose-diff .changed ins,.prose-diff .changed ins code,.prose-diff .changed ins pre,.prose-diff .changed .added,.prose-diff > .markdown-body ins pre,.prose-diff > .markdown-body ins code,.prose-diff > .markdown-body ins > div,.prose-diff > .markdown-body ins > p
  {
    background: #002800!important;
    border-color: #060!important;
  }

  .blob-code.blob-code-deletion,.blob-num.blob-num-deletion,.prose-diff > .markdown-body .changed del,.prose-diff > .markdown-body .changed del pre,.prose-diff > .markdown-body .changed del code,.prose-diff > .markdown-body .changed del > div,.prose-diff > .markdown-body .changed .removed,.prose-diff > .markdown-body .changed .removed pre,.prose-diff > .markdown-body .changed .removed code,.prose-diff > .markdown-body .changed .removed > div,.CodeMirror-linebackground.conflict-background,.conflict-gutter-marker,.conflict-background + .CodeMirror-gutter-wrapper .CodeMirror-linenumber
  {
    background: #380000!important;
    border-color: #600!important;
  }

  pre div[style^="background-color: rgb(248, 238, 199)"],.highlight td.blob-code-inner[style^="background-color: rgb(248, 238, 199)"],td.selected-line.blob-num,td.selected-line.blob-code
  {
    background: rgba(85,85,85,.3)!important;
    border-color: rgba(85,85,85,.3)!important;
  }

  .highlight tr:hover .blob-num:not(.non-expandable)
  {
    color: #e2e2e2!important;
  }

  .diff-table tr:hover > pre,.highlight:not(.lines) tr:not(.inline-comments):hover td.selected-line.blob-num:not(.line-age),.highlight:not(.lines) tr:not(.inline-comments):hover td.selected-line.blob-code:not(.line-age),.highlight:not(.lines) tr:not(.inline-comments):hover td:not(.line-age)
  {
    background: rgba(78,78,78,.33)!important;
  }

  .highlight:not(.lines) tr:not(.inline-comments):hover td.blob-num-addition:not(.line-age),.highlight:not(.lines) tr:not(.inline-comments):hover td.blob-code-addition:not(.line-age)
  {
    background: #103810!important;
  }

  .highlight:not(.lines) tr:not(.inline-comments):hover td.blob-num-deletion:not(.line-age),.highlight:not(.lines) tr:not(.inline-comments):hover td.blob-code-deletion:not(.line-age)
  {
    background: #481010!important;
  }

  .prose-diff > .markdown-body th.changed,.prose-diff > .markdown-body td.changed
  {
    background: #282818!important;
  }

  .blob-code-addition .x,.highlight .blob-code-addition .x
  {
    background: #252!important;
    color: #eee!important;
  }

  .blob-code-deletion .x,.highlight .blob-code-deletion .x
  {
    background: #622!important;
    color: #eee!important;
  }

  .gi .diff-line-num,.gi .diff-line-code,.gi .diff-line-pre
  {
    background: #020!important;
    border-color: #040!important;
  }

  .gd .diff-line-num,.highlight .err,.gd .diff-line-code,.gd .diff-line-pre
  {
    background: #300!important;
    border-color: #500!important;
  }

  ::-webkit-scrollbar
  {
    max-width: 10px!important;
    max-height: 10px!important;
    background: #1d1d1d!important;
  }

  ::-webkit-scrollbar-track,::-webkit-scrollbar-corner
  {
    background: #1d1d1d!important;
  }

  ::-webkit-scrollbar-thumb
  {
    background: rgba(175,175,175,.5)!important;
  }

  ::-webkit-scrollbar-thumb:hover
  {
    background: rgba(65,131,196,.8)!important;
  }

  .enterprise.page-profile .profilecols ul.stats li strong
  {
    color: #ccc;
    background: transparent!important;
  }

  .enterprise ul.selling-points li
  {
    color: #fff;
  }

  .enterprise .steps
  {
    margin: 20px auto 0;
    padding: 15px 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0,0,0,.05);
    background: #222;
    color: #fff;
  }

  .enterprise .dashboard-notice
  {
    background: #222!important;
    color: #ccc;
  }

  .enterprise .autocomplete-item
  {
    color: #ccc;
  }

  .enterprise .repo-nav a:focus,.enterprise .repo-nav a:hover
  {
    border-radius: 0!important;
    border-left: 1px solid #eee!important;
  }

  .enterprise .repo-nav a,.enterprise .repo-menu,.enterprise .repo-nav a .counter
  {
    text-shadow: none!important;
    box-shadow: none!important;
  }

  .enterprise .repo-nav li > .selected:after
  {
    background: #333 none!important;
    border-color: #484848!important;
  }

  .enterprise .repo-nav-contents
  {
    box-shadow: inset 1px 0 0 #333!important;
  }

  .enterprise div.repo-nav-contents
  {
    background: rgba(34,34,34,.4)!important;
  }

  .enterprise ul.repo-menu a.selected
  {
    border-left: 1px solid transparent!important;
  }

  .enterprise .repo-menu-separator
  {
    border-bottom: 1px solid #333!important;
  }

  .enterprise .repo-nav a.selected .octicon,.enterprise .repo-menu a.selected:after,.enterprise .repo-menu li:hover .octicon
  {
    color: #eee!important;
  }

  .enterprise .repo-menu-separator:before,.enterprise .repo-nav-contents:before,.enterprise .repo-menu-separator,.enterprise .repo-nav-contents:after
  {
    background-color: transparent!important;
    background-image: none!important;
  }

  .enterprise .repo-nav a:focus,.enterprise .repo-nav a:hover
  {
    border-radius: 0!important;
    border-left: 1px solid #eee!important;
  }

  .enterprise ul.repo-menu a.selected
  {
    border-color: #343434!important;
  }

  .lovely-forks-addon
  {
    color: gray!important;
  }

  .deps > li
  {
    border-color: #343434!important;
  }

  .zhc-selection-item:hover,.zhc-selection-item--is-active,.zh-select-menu-item.navigation-focus,.zh-select-menu-item:hover,.zh-tabs__nav-item:hover
  {
    background: #93bcd1!important;
    border-color: #93bcd1!important;
    color: #fff!important;
  }

  .zhc-pipeline-sort-status__clear
  {
    color: #93bcd1!important;
  }

  .zhc-pipeline,.zh-epic-creator-top,.zh-epic-creator-nav,input.zhc-icon,.zhc-item-table__header,.zhc-item-table__cell
  {
    background-color: transparent!important;
  }

  .zhc-pipeline__body,.zhc-board--is-fullscreen,.zh-epic-issue-progress-bar,.zhc-board-loading__message,.zhc-pipeline--is-collapsed,.zhc-issue-card,.zh-todo-item-placeholder,.zh-timeline-comment,.zh-epic-creator-tab,.zh-issueviewer-content
  {
    background: #111!important;
    border-color: #484848!important;
  }

  .zhc-issue-card__main,.zhc-pipeline-header,.zh-burndown-chart-container,.zh-burndown-chart .stats-container,.zh-issue-list .table-list-item,.zh-todopage-main .zh-todolist-today,.zh-todo-item,.zh-todo-empty-inbox,.zh-todo-empty-today,.zh-todo-empty-list,.zh-epic-issue-list-container,.zh-epic-creator-tab.selected,.zh-epic-creator-issue-list,.popover,.zh-epic-issue-list-container li,.zh-epic-creator-issue-list li,.full-screen-project-header,.dashboard-notice,.zhu-blankslate
  {
    background: #25272a!important;
    border-color: #484848!important;
  }

  .zhc-issue-card__meta,.zhc-selection-list,.zhc-selection-list__header,.zhc-selection-filter,.zhc-tooltip-action__item,.zh-milestone-dates,.zh-epic-issue-list-footer,.zh-select-menu-header,.zh-todolist-box,.zh-todopage-main .zh-todolist-today,.zh-issue-list .table-list-title,.zh-epic-issue-list-container li:hover,.zh-epic-creator-issue-list li:hover,.zh-epic-creator-progress-bar,.zhc-tooltip-action__content,.zh-timeline-comment-header,.zh-issueviewer-title,.zh-new-issue-suggester-input-container,.zhc-pr-issue-connector__info,.zhu-tag-default,.zhc-chart-container__header
  {
    background: #25272a!important;
    border-color: #484848!important;
  }

  .zhc-merge-repo-item:hover,.zhc-merge-repo-item--is-active,.zhc-badge--issue-count,.zhc-tooltip-action__item:hover,.zh-todolist-completed-separator,.zh-todolist-today-separator,.zh-epic-issue-list-item-badge .zh-pipeline-badge,.zh-pipeline-badge-light,.zhc-dropdown-simple-item:hover
  {
    background: #333!important;
  }

  .zh-epic-creator-tab.selected,.zh-pipeline-badge-light
  {
    border-top-color: #93bcd1!important;
    color: #ddd!important;
  }

  .zh-chart .weekend-band
  {
    fill: rgba(34,34,34,.5)!important;
  }

  .zh-chart .horizonal-grid-line
  {
    stroke: rgba(34,34,34,.5)!important;
  }

  .zhc-readonly-banner
  {
    background: #182030!important;
  }

  .zhc-progress-bar
  {
    background: #333!important;
  }

  .zhc-progress-bar > .zhc-progress-bar--completed-issues
  {
    background: #163!important;
  }

  .zhc-pr-issue-connector__info:after
  {
    border-right-color: #25272a!important;
  }

  .zhc-selection-item,.zhc-pipeline-header__actions,.zhc-pipeline,.zhc-pipeline--new-placeholder .zhc-pipeline__head,.zhc-merge-repo-item,.zh-todopage-menu,.zh-select-menu-item,.zh-epic-issue-list-container ul,.zh-epic-creator-nav,.zh-epic-creator-picker-container,.zh-board-menu,.zh-epic-creator-filters,.zh-epic-issues-picker-new-issue,.merge-status-list,.zhc-dropdown-simple-item,.zhc-pipeline-body,.zhc-board-settings-head,.zhc-pipeline-sort-status,.zhc-chart-container,.zhc-burndown-chart__stats,.zhc-chart-container__footer
  {
    border-color: #343434!important;
  }

  .zhc-tooltip-action__content:before,.zhc-pr-issue-connector__info:before
  {
    border-right-color: #343434!important;
  }

  .popover.left .arrow
  {
    border-left-color: #343434!important;
  }

  .zhc-selection-list__header__text,.zhc-merge-repo-item__content,.zhc-repo-item,.zh-todolist-create:hover,.zh-todolist-name,.zh-epic-pipeline-selector.active .zh-epic-pipeline-selector-name,.zh-select-menu-title,.zhc-badge--issue-count,.zh-pipeline-badge,.zh-timeline-comment-header-text,.zh-epic-issue-header-title,.zh-select-menu-item .description,.zh-pipeline-badge,.zh-tabs__nav-item:not(.zh-tabs__nav-item--active),.zhc-issue-item__title,.zhc-item-table__cell__issue-number,.zhc-item-table__column-title,.zhc-selection-button__title--active-filter,.zhc-item-table__row
  {
    color: #ccc!important;
  }

  .zh-sidebar-icon
  {
    opacity: 1!important;
    -webkit-filter: brightness(2)!important;
    filter: brightness(2)!important;
  }

  .zhc-toggle-button,.zhc-btn,.zh-todo-issue-dropdown .zh-split-button-icon,.zhu-blankslate,.zh-tabs__nav-item:not(.zh-tabs__nav-item--active)
  {
    background: linear-gradient(#282828,#25272a)!important;
    border-color: #383838!important;
  }

  .zh-delete-epic-button
  {
    background: #911!important;
    border-color: #383838!important;
  }

  .zh-delete-epic-button:hover
  {
    background: #b22!important;
    border-color: #b00!important;
  }

  .zhc-toggle-button:hover,.zhc-btn:not(.zhc-toggleable--is-disabled):hover,.zhc-selection-button__container:hover,.zhc-toggle-button--is-active,.zhc-selection-button__container--is-active,.zh-burndown .btn .octicon,.zh-todo-issue-dropdown.selected .zh-split-button-icon,.zh-board-menu-item .octicon,.zh-reports .btn .octicon,.zh-tabs__nav-item:not(.zh-tabs__nav-item--active):hover
  {
    background: linear-gradient(#444,#333)!important;
    border-color: #484848!important;
  }

  .zhc-btn-gh--primary
  {
    background: linear-gradient(#203522,#152715)!important;
    border-color: #041!important;
  }

  .zhc-btn.zhc-btn-gh--primary:hover
  {
    background: linear-gradient(#407045,#305530)!important;
    border-color: #083!important;
  }

  .zhc-selection-list__header__text,.zhc-tooltip-action__content,.zh-select-menu-title,.popover,.zhc-board-settings__items__header
  {
    box-shadow: none!important;
    text-shadow: none!important;
  }

  .zh-repo-switcher .select-menu-button
  {
    padding: 1px 6px 2px 4px !important;
  }

  .zh-repo-switcher .select-menu-button:after
  {
    vertical-align: 0!important;
  }

  .zh-octicon-list-unordered
  {
    height: 14px!important;
  }

  .zh-icon-circled-bolt,.zh-icon-bolt,.zh-octicon-x
  {
    -webkit-filter: invert(40%) brightness(120%)!important;
    filter: invert(40%) brightness(120%)!important;
  }

  .zhc-icon:not([class$="-red"]):not([class$="-white"]),.zhc-board-loading,.zhc-board-loading__message,.zh-octicon-list-unordered,.zh-octicon-pencil,.zh-octicon-inbox,.zh-octicon-plus,.zh-octicon-info,.zh-octicon-milestone,.zh-octicon-chevron-down,.zh-epic-creator-tab-icon,.zh-board-menu-item .zh-octicon-grey,.zh-octicon-search,.zhc-burndown-chart__placeholder
  {
    -webkit-filter: invert(100%)!important;
    filter: invert(100%)!important;
  }

  html.octotree:not(.octotree-show) .zhc-board--is-fullscreen .zhc-menu-bar
  {
    margin-left: 30px;
    margin-top: -8px;
  }

  .GithubUserInfo,.GithubUserInfo > div
  {
    background: #25272a!important;
    border-color: #343434!important;
  }

  .notifications-dropdown
  {
    background: #25272a!important;
    border: 1px solid #343434!important;
  }

  a.notifications-dropdown-see-all
  {
    background: #242424!important;
    color: #93bcd1!important;
  }

  a.notifications-dropdown-see-all:hover
  {
    background: #93bcd1!important;
    color: #e2e2e2!important;
  }

  .notifications-dropdown-arrow
  {
    border-bottom-color: #333!important;
  }

  .awesome-autocomplete .tt-dropdown-menu
  {
    border-color: #343434!important;
    background-color: #25272a!important;
  }

  .awesome-autocomplete .aa-query strong,.awesome-autocomplete .aa-query-default em,.awesome-autocomplete .tt-suggestion .octicon
  {
    color: #93bcd1!important;
  }

  .awesome-autocomplete .tt-suggestion .octicon-star
  {
    fill: silver!important;
  }

  .awesome-autocomplete .aa-category
  {
    background-color: #1d1d1d!important;
    border-top: 1px solid #343434!important;
    border-bottom: 1px solid #343434!important;
    color: #a0a0aa!important;
  }

  .awesome-autocomplete .tt-suggestion
  {
    border-color: #343434!important;
  }

  .awesome-autocomplete .tt-suggestion:hover,.awesome-autocomplete .tt-suggestion.tt-cursor
  {
    background: #333!important;
  }

  .awesome-autocomplete .tt-suggestion:hover .aa-name
  {
    text-decoration: none!important;
  }

  .awesome-autocomplete .tt-suggestion em
  {
    background-color: #93bcd1!important;
    color: #fff!important;
  }

  .awesome-autocomplete .aa-thumbnail
  {
    background-color: #25272a!important;
  }

  .awesome-autocomplete .aa-query,.awesome-autocomplete .aa-branding,.awesome-autocomplete .aa-infos,.awesome-autocomplete .aa-login,.awesome-autocomplete .aa-company,.awesome-autocomplete .aa-company i,.awesome-autocomplete .aa-description,.awesome-autocomplete .aa-issue-body
  {
    color: silver!important;
  }

  .awesome-autocomplete .aa-thumbnail,.awesome-autocomplete .aa-thumbnail
  {
    background-color: #25272a!important;
  }

  .awesome-autocomplete .icon-delete
  {
    -webkit-filter: invert(100%)!important;
    filter: invert(100%)!important;
  }

  .State--green,.block-diff-added,.block-diff-neutral,.discussion-item-reopened .discussion-item-icon,.discussion-item-review.is-approved.is-writer .discussion-item-icon,.progress-bar .progress,.bar-section-positive,.branch-action-state-clean .branch-action-icon,.completeness-indicator-success
  {
    background: #163!important;
  }

  .block-diff-neutral
  {
    background: #444!important;
  }

  .bg-purple,.State--purple,.discussion-item-merged .discussion-item-icon,.bar-section-alt,.branch-action-state-merged .branch-action-icon,.btn-outline-purple:hover,.btn-outline-purple:active,.btn-outline-purple.selected,.btn-outline-purple:hover,.btn-outline-purple:active,.btn-outline-purple.selected
  {
    background: #6e5494!important;
  }

  .btn-danger:hover,.State--red,.block-diff-deleted,.text-red .block-diff-neutral,.discussion-item-closed .discussion-item-icon,.discussion-item-review.is-rejected.is-writer .discussion-item-icon,.completeness-indicator-error,.saml-settings-form .test-status-indicator-error,.follow-list .flagged-banner
  {
    background: #911!important;
  }

  .bg-yellow-light,.network .current-repository,.diffbar-range-menu .is-last-in-range
  {
    background-color: #261d08!important;
  }

  .Box-body,.menu-item,.menu-heading,.table-list,.boxed-group-list>li,.diff-table tr:not(:last-child) .line-comments,.timeline-new-comment .previewable-comment-form .comment-body,.new-discussion-timeline .previewable-comment-form .comment-body,.discussion-item-review-comment,.facebox .facebox-staff-links,.facebox-header,.pagehead,.select-menu-header,.select-menu-divider,.merge-status-item,.file-header
  {
    border-bottom: 1px solid #343434!important;
  }

  .summary-stats li
  {
    border-left: 1px solid #343434!important;
  }

  .reaction-summary-item,.file-navigation .get-repo-btn:first-child
  {
    border-right: 1px solid #343434!important;
  }

  .Box-row,.Box-footer,.commits-list-item+.commits-list-item,.diff-table .line-comments,.diff-table tr:not(:last-child) .line-comments,.timeline-comment .comment+.comment,.facebox-footer,.comment-reactions.has-reactions,.select-menu-divider,.branch-action-body .merge-message,.branch-action-body .merge-branch-form,.branch-action-item+.branch-action-item,.branch-action-item+.mergeability-details,.last-review-thread,.file-navigation .get-repo-btn,.user-list-item+.user-list-item
  {
    border-top: 1px solid #343434!important;
  }

  .menu-item:last-child,.menu-heading:last-child,.tabnav-tab,.border-bottom-0,.suggester li:last-child,.boxed-group>h3,.boxed-group .heading,.boxed-group-list>li:last-of-type,.boxed-group-table tr:last-child td,.commit-build-statuses .dropdown-menu .merge-status-list,.gh-header.pull .gh-header-meta,.timeline-comment-header:only-child,.discussion-item-review-comment:last-child,.dropdown-menu-ne:before,.dropdown-menu-ne:after,.gollum-editor-title-field,.prose-diff>.markdown-body .added,.prose-diff>.markdown-body ins+.added,.prose-diff>.markdown-body ins,.select-menu-list:last-child .select-menu-item:last-child,.select-menu-item.last-visible,.intgrs-dir-intro,.session-authentication .header-logged-out,.billing-addon-items td,.billing-section:last-child,.merge-status-item:last-child,.gh-header-new-pr .gh-header-meta,.branch-group-heading,.branch-summary,.codesearch-results .repo-list-item,.survey-box.simple-box,.survey-box.simple-box .simple-box-title,.explore-page.marketing-section,.explore-section:nth-child(odd):last-child,.leaderboard-list-item:last-child,.file.open .file-header,.delete-topic-button,.topic-tag-action .add-topic-button,.topic-tag-action .remove-topic-button,.teams-post-wrapper .discussion-post .timeline-comment-header,.teams-post-wrapper .discussion-comment .timeline-comment-header,.teams-reply-wrapper .timeline-comment-header,.repository-lang-stats ol.repository-lang-stats-numbers li,.news .alert .body,.member-row:last-child,.org-migration-settings-section:last-child,.manage-repo-access-list-item:last-child,.discussion-item-body .outdated-comment .file-header,.repo-file-upload-target.is-progress-bar,.repo-file-upload-target.is-uploading,.overall-summary-bottomless,.access-token .credential-authorization-status-item:last-child,.protected-branch-authorized-pushers-table .table-list,.setup-org,.tree-browser tbody tr:last-child td,#user-content-toctitle h2,.site-header-dark .site-header,.site-header-dark .site-header
  {
    border-bottom: 0!important;
  }

  .social-count,.border-left-0,.flash-banner,.steps li:first-child,.session-authentication .flash.is-signed-in,.session-authentication .flash.is-signed-out,.golden-ticket-button:last-child,.select-menu-item,.teams-nav .teamnav-item,.summary-stats li:first-child,.url-box-clippy .zeroclipboard-button,.user-key-email-unverified,.sso-modal.error .flash-error,.tree-browser
  {
    border-left: 0!important;
  }

  .border-right-0,.avatar-stack .avatar:last-child,.flash-banner,.comment-reactions .add-reaction-btn,.session-authentication .flash.is-signed-in,.session-authentication .flash.is-signed-out,.select-menu-item,.delete-topic-button,.topic-tag-action .add-topic-button,.topic-tag-action .remove-topic-button,.topic-tag-action .remove-topic-button,.teams-nav .teamnav-item,.ScreenshotCarousel-navitem:last-child,.migrate-org-roles-item:last-child,.file-navigation .get-repo-btn.btn-block,.file-navigation .get-repo-btn:only-child,.sso-modal.error .flash-error,.tree-browser
  {
    border-right: 0!important;
  }

  .drag-and-drop,.menu-item:first-child,.border-top-0,.markdown-body .csv-data tr,.markdown-body .csv-data th,.boxed-group .tabnav.heading .tabnav-tab.selected,.boxed-group .tabnav-tab,.boxed-group.dangerzone .boxed-group-inner,.boxed-group-list:first-child>li:first-child,.boxed-group-list.standalone>li:first-child,.boxed-group-warning:first-child,.simple-conversation-list>li:first-child,.discussion-item-changes-marker+.discussion-commits,.discussion-timeline-actions .merge-pr,.discussion-item-merged.open .discussion-item-details-header:first-child,.discussion-item+.timeline-progressive-disclosure-container,.timeline-progressive-disclosure-container+.discussion-item,.flash-banner,.progress-bar-inline .progress-bar,.prose-diff>.markdown-body .added,.prose-diff>.markdown-body ins+.added,.prose-diff>.markdown-body ins,.auth-form-body,.session-authentication .flash.is-signed-in,.session-authentication .flash.is-signed-out,.session-authentication .site-footer,.plan-choice-bottom,.blame-commit+.blame-line,ul.comparison-list>li.title,.select-menu-item,.logged-out.enter-coupon .site-footer,.user-leaderboard-list .repo-list-item,.delete-topic-button,.topic-tag-action .add-topic-button,.topic-tag-action .remove-topic-button,.teams-nav .teamnav-item,.teams-post-wrapper .comment-reactions,.repository-lang-stats-graph,.news .alert:first-child,.org-profile .member-badge,.org-repos-mini .org-repo-mini-item:first-child .org-repo-mini-cell,.invite-team-member-list .team:first-child .table-list-cell,.migrate-ability-list-item:first-child,.confirm-removal-list-item:first-child,.manage-repo-access-team-item:first-child,.member-badge+.member-badge,.diffbar .table-of-contents li:first-child,.review-comment .comment-reactions,.uploaded-files.is-populated+.drop-target p,.uploaded-files>li:nth-child(2),.mini-repo-list>:first-child .mini-repo-list-item,.experiment-repo-nav .new-issue-form,.file-wrap,table.files tbody tr:first-child td,.listgroup-header,.typeahead-result:first-child,#user-content-toc tr
  {
    border-top: 0!important;
  }

  .subnav-item,.blankslate,.table-list-header,.historical-banner,.list-group-item,.pagination a,.pagination span,.pagination em,.ajax-pagination-form .ajax-pagination-btn,.range-editor,.teams-post-wrapper .discussion-post .previewable-comment-form,.teams-post-wrapper .discussion-comment .previewable-comment-form
  {
    border-color: #343434!important;
  }

  .flash,.Label--outline,.boxed-group>h3,.boxed-group .heading,.comment-form-error,.comment-form-stale,.full-commit,.dropdown-menu,.select-menu-modal,.RecentBranches,.github-jobs-promotion p,.project-updated-message,.shelf-dismiss .close-button
  {
    border-color: rgba(225,225,225,.2)!important;
  }

  .hidden-text-expander a,.ellipsis-expander,.subnav-search-context .btn,.markdown-body kbd,.email-format .email-hidden-toggle a,.commit .commit-title,.commit .commit-title a,.commit-desc pre,.commit-tease-sha,.timeline-commits .author,.timeline-commits .commit-message>code a,.full-commit .branches-list li,.full-commit .sha-block>.sha,.full-commit .sha-block>a,.branches-tag-list li:first-child,.keyboard-mappings,kbd,.pagehead-tabs-item .Counter,.reponav-item .Counter,.protip-callout,.render-notice,.select-menu-header .close-button:hover,.select-menu-header .octicon:hover,.select-menu-action,.survey-box-lead,.octofication .message p,.teams-nav .teamnav-item:hover:not(.selected),table.capped-list .octicon,table.capped-list.mini-icons .mini-icon,.illflow-item .illflow-item-heading,.casestudy-body em,.casestudy-facts em,.illflow-item .illflow-item-heading,.casestudy-body em,.casestudy-facts em
  {
    color: #ccc!important;
  }

  .btn .Counter,.form-checkbox .note,.hfields .form-group dt label,.note,.drag-and-drop,.drag-and-drop-error-info,h2.account,p.explain,.menu-heading,.tabnav-tab,.tabnav-extra,.filter-list.pjax-active .filter-item,.filter-item,.subnav-item,.subnav-search-input,.text-gray,.link-gray,.muted-link,.lead,.Label--gray,.Label--outline,.Counter,.table-list-header-meta,.table-list-header-toggle .btn-link,.suggester li small,.boxed-group>h3 a.boxed-group-breadcrumb,.boxed-group .heading a.boxed-group-breadcrumb,.boxed-group-inner,.boxed-group-inner .help,.breadcrumb,.btn-octicon,.capped-card>p,.email-format .email-quoted-reply,.email-format .email-signature-reply,.commit-tease,.commit-group-title,.commits-list-item .commit-meta,.commits-list-item .commit-author,.commits-list-item .commit-desc pre,.timeline-commits .commit-desc pre,.full-commit .sha-block,.signed-commit-badge,.blob-num-expandable .diff-expander,.diffstat,.discussion-sidebar-item,.discussion-sidebar-heading,.milestone-name,.sidebar-assignee .assignee,.participation a,.lock-toggle-link,.gh-header-meta,.gh-header-meta .author,.tabnav-pr .tabnav-tab,.timeline-comment-header,.timeline-comment-header .author,.timeline-comment-header-text code a,.discussion-item .author,.discussion-item-icon,.discussion-item-header,.discussion-item-link,.discussion-item-ref-title .issue-num,.discussion-item-help,.discussion-item-integrations-callout .pull-request-integrations-dismiss,.pull-request-integrations-body,.discussion-item-toggle,.environment-name,.deployment-meta,.dropdown-header,.facebox .facebox-staff-links li,.facebox-footer .help,.keyboard-mappings .keys,.org-privileges-tour-dismiss,.site-footer,.gollum-editor-function-bar .gollum-editor-format-selector label,.gollum-dialog-dialog-body fieldset label,.list-group-item .list-group-item-summary a,.pagehead-tabs-item,.repohead h1,.reponav-item,.steps .complete,.select-menu-modal,.select-menu-item.selected .description,.select-menu-no-results,.select-menu-item-text .description,.select-menu-item-text .description-inline,.Subhead-description,.underline-nav-item,.marketing .pagehead p,.marketing-header .lead,.hanging-icon-list .octicon,.nonprofit-head .title,.intgrs-lstng-item-description,.intgr-admin-link .octicon,.integration-settings-callout p,.bot-identifier,.credit-card .cvv span,.billing-section .section-label,.lfs-data-icon,.payment-history .currency,.payment-history .status,.discounted-original-price,.billing-manager-banner-title,.line-age-legend,.blob-interaction-bar .octicon-search,.blog-search .octicon-search,.blog-home:hover,.blog-feedback-description,.status-meta,.merge-pr-more-commits,.range-editor-icon,ul.comparison-list>li em,.branch-group-name,.code-list .full-path .octicon-repo,ul.simple-conversation-list a.meta,li.contribution .cmt,li.contribution .num,.contributors-graph .capped-card .rank,.contributors-graph .capped-card .cmt,.octofication .notice-dismiss:hover,.dashboard-notice .dismiss:hover,.ghe-license-status p,.repo-snipit .octicon,.repo-snipit-description,.exploregrid-item-meta,.file .data.empty,.graph-filter .info,.header-search-scope,.integration-meta-head,.issues-reset-query,.table-list-milestones .stat-label,.task-progress,.marketplace-product-callout .branch-action-item-icon,.merge-branch-description,.owner-reponame .slash,.news blockquote,.news .alert .simple .title,.news .github-welcome .done,.news div.message,.news li blockquote,.notifications .read .type-icon,.notifications .read .list-group-item-name>a,.notifications .read .notification-actions,.notifications-sso-prompt a,.type-icon-state-none,.notifications-list .mark-all-as-read,.notification-actions .age,.notification-actions .btn-link,.thread-subscription-status,.oauth-permissions-details .octicon,.oauth-permissions-details .permission-summary .access-details,.oauth-no-description,.audit-log-search .member-info .ghost,.member-fullname,.org .no-results,.org-repos-mini .org-repo-name .octicon-repo,.add-member-wrapper .available-seats,.add-member-team-list .team-meta,.team-list-footer .show-all-link .octicon,.migration-feature-list,.migration-feature-list .octicon,.org-migration-settings-info,.delete-owners-button,.rename-owners-team-form .note,.migrate-ability-not-possible,.migrate-org-roles-lead,.migrate-org-roles-count,.migrate-org-avatar-list .migrate-org-more-ellipsis,.migrate-org-avatar-list .migrate-org-zero,.migrate-org-avatar-list .migrate-org-zero,.default-permission-update-text,.team-info-card .team-description .link,.stats-group-stat,.stats-group-stat.no-link:hover,.confirm-removal-container .private-fork-count,.confirm-removal-team .octicon,.confirm-removal-repo .octicon,.manage-user-role .role-info,.manage-member-meta-item,.manage-member-meta-item .btn-link,.manage-member-meta-item>.octicon,.org-user-notice-content .octicon,.manage-repo-access-lead,.manage-memberships-tabs-item,.pages-composer p,.project-header-link,.projects-reset-query,.pinned-repo-item .pinned-repository-handle,.diffstat-summary,.summary-stats li,.summary-stats li a,.releases-tag-list td.date a,.releases-tag-list p,.tag-references>li a,.release-timeline-tags .date,.release-authorship,.uploaded-files>li.delete,.uploaded-files .filesize,.uploaded-files .remove,.label-description,.labels-list-action,.mini-repo-list .no-repo,.mini-repo-list-item .repo-description,.timeout h3,.numbers-summary a,.numbers-summary .nolink,.repository-meta,.branch-infobar,.avatar-upload .upload-state p,.email-actions span.label,.boxed-group .fork-flag,.oauth-app-info-container dl.keys dt,.oauth-app-info-container .user-count,.logo-upload-container .upload-state p,.logo-placeholder,.security-history .security-history-timestamp,.two-factor-toggle .two-factor-status,.session-device,.session-device.session-current .sessions-more-info,.session-device.session-current .octicon,.collaborators .collab-remove .remove-link,.access-sub-heading,.boxed-group-list .access-level,.listgroup-item,.setup-header .lead a,.setup-secondary .info,.setup-info-module h2 .price,.setup-creditcard-form .help-text,.shelf-lead,.orgs-help-lead,.orgs-help-item-content,.orgs-help-dismiss,.team-label-ldap,.team-member-ellipsis,.team-breadcrumb.is-loading .breadcrumb-link,.tree-browser .octicon-file-text,.toolbar-item,.toolbar-item .menu-target,.member-suggestion .member-name,.member-suggestion .already-member-note,.member-suggestion .non-member-note,.member-suggestion .non-member-action,.team-suggestion .team-size,.team-suggestion .team-description,.repo-access-add-team .team-size,.repo-access-add-team .team-description,.follow-list .follow-list-info,.wiki-wrapper .wiki-empty-box,.wiki-wrapper .wiki-empty-box:hover,.wiki-wrapper .wiki-auxiliary-content .wiki-edit-link,.wiki-wrapper .wiki-custom-sidebar .octicon-pencil,.pullquote,.site-header-nav .nav-item:hover,.casestudy-body>p,.casestudy-body blockquote,.casestudy-body ul,.pullquote,.site-header-nav .nav-item:hover,.casestudy-body>p,.casestudy-body blockquote,.casestudy-body ul
  {
    color: #bbb!important;
  }

  .text-gray-light,.markdown-body blockquote,.markdown-body h6,.table-list,.autocomplete-item .organization-member,.full-commit .branches-list li.loading,.full-commit .branches-list li.pull-request,.branches-tag-list li.loading,.commit-branches,.table-of-contents .octicon-diff-renamed,.toc-select .select-menu-item-icon.octicon-diff-renamed,.conversation-list-heading,.simple-conversation-list,.simple-conversation-list>li .num,.deployment-status-label,.list-group-item .list-group-item-summary a.quiet,.select-menu-tabs a,.select-menu-tabs .select-menu-tab-nav,.select-menu-item.disabled,.select-menu-item.disabled.selected,.select-menu-item.disabled .description,.select-menu-item.disabled.selected .description,.credit-card.amex .title,.billing-addon-items .addon-cost,.payment-history .refunded .status,.plan-choice-exp,.blame-container .blame-hunk:hover .reblame-link,.blog-aside .rss,.blog-post-meta,.blog-post-meta a,ul.comparison-list>li.title,.branch-search .clear-search,.branch-meta,.code-list .full-path a,.context-filters .filter-label .filter-context-name,.graphs .dir,.delete-topic-button,.topic-tag-action .add-topic-button,.topic-tag-action .remove-topic-button,.teams-nav .teamnav-item,.teams-nav .teamnav-item.selected .octicon,.hook-item .description,.hook-item.pending .icon-for-pending,.hook-item.inactive .icon-for-inactive,.hook-deliveries-list .item-status.pending,.hook-delivery-time,.repository-lang-stats ol.repository-lang-stats-numbers li>a,.repository-lang-stats ol.repository-lang-stats-numbers li>span,.marketplace-plan-link-container .marketplace-plans-remaining,.oauth-permissions-details.default:not(.delete) .access-details,.oauth-permissions-details.default:not(.delete) .permission-title,.oauth-permissions-details.none .access-details,.oauth-permissions-details.none .permission-title,.oauth-application-whitelist .edit-link,.oauth-application-info .app-info,.developer-app-item .developer-app-list-meta,.export-actions a,.owner-select-target.disabled,.owner-select-target.disabled .user-mention,.pinned-repos-selection-list-item,.card-filter-autocomplete-dropdown .autocomplete-text .autocomplete-text-qualifier,.vcard-detail .octicon,.member-badge .octicon,.user-profile-bio,.profile-timeline-card .issue-meta-section .octicon,.profile-rollup-toggle,.release-label,.mini-repo-list-item .stars,.numbers-summary .octicon,table.files td .simplified-path,table.files td.message,table.files td.message a,table.files td.age,.settings-email .email-actions .settings-remove-email.settings-disabled-remove-email,.task-run.pending .icon-for-pending,.task-run.inactive .icon-for-inactive,.team-listing .expand-nested-team,.site-header-dark .site-header .site-header-actions,.home-hero-signup .form-control-note,.icon-cta>.octicon,.site-header-dark .site-header .site-header-actions,.home-hero-signup .form-control-note,.icon-cta>.octicon
  {
    color: #ccc!important;
  }

  .boxed-group-warning,.intro-shelf
  {
    color: rgba(230,230,230,.85)!important;
  }

  .markdown-body code,.markdown-body tt,.protip code,.content dl code,.content ul code,p code,.content .sectionbody .dlist dt,.content p > tt,.content .sectionbody .dlist dt,.content p > tt,.commit-sha,.commit-preview .message pre,.rendered_html pre,.rendered_html code,.markdown-format p > code,.markdown-format pre
  {
    background: #25272a!important;
  }

  .markdown-format pre,.markdown-body pre,.markdown-format .highlight pre,.markdown-body .highlight pre,body.blog pre,#facebox pre,.blob-expanded,.terminal,.copyable-terminal,#notebook .input_area,.blob-code-context,.markdown-format code,body.blog pre > code,.api pre,.api code,.hook-delivery-details pre,.CodeMirror,.highlight
  {
    background: #141414!important;
    color: #d1e8ff!important;
  }

  .blob-code,.blob-code-inner
  {
    color: #d1e8ff!important;
  }

  .pl-c,.pl-c span
  {
    color: #00d2b8!important;
    font-size: 16px!important;
    font-weight: 700!important;
  }

  .pl-c1
  {
    color: #cf6a4c!important;
  }

  .pl-cce
  {
    color: #cf6a4c!important;
    font-weight: 400!important;
  }

  .pl-cn
  {
    color: #cf6a4c!important;
  }

  .pl-coc
  {
    color: #cf6a4c!important;
  }

  .pl-cos
  {
    color: #8f9d6a!important;
  }

  .pl-e
  {
    color: #ac885b!important;
  }

  .pl-ef
  {
    color: #ac885b!important;
  }

  .pl-en
  {
    color: #ac885b!important;
  }

  .pl-enc
  {
    color: #cf6a4c!important;
  }

  .pl-enf
  {
    color: #ac885b!important;
  }

  .pl-enm
  {
    color: #ac885b!important;
  }

  .pl-ens
  {
    color: #cf6a4c!important;
  }

  .pl-ent
  {
    color: #cda869!important;
  }

  .pl-entc
  {
    color: #ac885b!important;
  }

  .pl-enti
  {
    color: #ac885b!important;
    font-weight: 700!important;
  }

  .pl-entm
  {
    color: #7587a6!important;
  }

  .pl-eoa
  {
    color: #cda869!important;
  }

  .pl-eoac
  {
    color: #7587a6!important;
  }

  .pl-eoac .pl-pde
  {
    color: #7587a6!important;
  }

  .pl-eoai
  {
    color: #cda869!important;
  }

  .pl-eoai .pl-pde
  {
    color: #cda869!important;
  }

  .pl-eoi
  {
    color: #ac885b!important;
  }

  .pl-k
  {
    color: #cda869!important;
  }

  .pl-ko
  {
    color: #cda869!important;
  }

  .pl-kolp
  {
    color: #cda869!important;
  }

  .pl-kos
  {
    color: #cf6a4c!important;
  }

  .pl-kou
  {
    color: #cf6a4c!important;
  }

  .pl-mai .pl-sf
  {
    color: #7587a6!important;
  }

  .pl-mb
  {
    color: #8f9d6a!important;
    font-weight: 700!important;
  }

  .pl-mc
  {
    color: #cda869!important;
  }

  .pl-mh
  {
    color: #cf6a4c!important;
    font-weight: 400!important;
  }

  .pl-mh .pl-pdh
  {
    color: #cf6a4c!important;
  }

  .pl-mi
  {
    color: #cda869!important;
    font-style: italic!important;
  }

  .pl-ml
  {
    color: #8f9d6a!important;
  }

  .pl-mm
  {
    color: #7587a6!important;
  }

  .pl-mp
  {
    color: #c5af75!important;
  }

  .pl-mp1 .pl-sf
  {
    color: #dad085!important;
  }

  .pl-mq
  {
    color: #cf6a4c!important;
  }

  .pl-mr
  {
    color: #cda869!important;
  }

  .pl-ms
  {
    color: #cda869!important;
  }

  .pl-pdb
  {
    color: #8f9d6a!important;
    font-weight: 700!important;
  }

  .pl-pdc
  {
    color: #5f5a60!important;
    font-style: italic!important;
  }

  .pl-pdc1
  {
    color: #cf6a4c!important;
  }

  .pl-pde
  {
    color: #cf6a4c!important;
  }

  .pl-pdi
  {
    color: #cda869!important;
    font-style: italic!important;
  }

  .pl-pds
  {
    color: #8f9d6a!important;
  }

  .pl-pdv
  {
    color: #7587a6!important;
  }

  .pl-pse
  {
    color: #cf6a4c!important;
  }

  .pl-pse .pl-s2
  {
    color: #cf6a4c!important;
  }

  .pl-s
  {
    color: #f9ee98!important;
  }

  .pl-s1
  {
    color: #8f9d6a!important;
  }

  .pl-s2
  {
    color: #ccc!important;
  }

  .pl-mp .pl-s3
  {
    color: #cda869!important;
  }

  .pl-s3
  {
    color: #dad085!important;
  }

  .pl-sc
  {
    color: #dad085!important;
  }

  .pl-scp
  {
    color: #cf6a4c!important;
  }

  .pl-sf
  {
    color: #dad085!important;
  }

  .pl-smc
  {
    color: #ac885b!important;
  }

  .pl-smi
  {
    color: #ccc!important;
  }

  .pl-smp
  {
    color: #ccc!important;
  }

  .pl-sok
  {
    color: #cda869!important;
  }

  .pl-sol
  {
    color: #8f9d6a!important;
  }

  .pl-som
  {
    color: #7587a6!important;
  }

  .pl-sr
  {
    color: #7587a6!important;
  }

  .pl-sra
  {
    color: #cda869!important;
  }

  .pl-src
  {
    color: #cda869!important;
  }

  .pl-sre
  {
    color: #cda869!important;
  }

  .pl-st
  {
    color: #cda869!important;
  }

  .pl-stj
  {
    color: #7587a6!important;
  }

  .pl-stp
  {
    color: #9b859d!important;
  }

  .pl-sv
  {
    color: #9b859d!important;
  }

  .pl-v
  {
    color: #9b859d!important;
  }

  .pl-vi
  {
    color: #cf6a4c!important;
  }

  .pl-vo
  {
    color: #ac885b!important;
  }

  .pl-vpf
  {
    color: #7587a6!important;
  }

  .pl-mi1
  {
    color: #55a532!important;
    background: #020!important;
  }

  .pl-mdht
  {
    color: #55a532!important;
    background: #020!important;
  }

  .pl-md
  {
    color: #bd2c00!important;
    background: #200!important;
  }

  .pl-mdhf
  {
    color: #bd2c00!important;
    background: #200!important;
  }

  .pl-mdr
  {
    color: #cf6a4c!important;
    font-weight: 400!important;
  }

  .pl-mdh
  {
    color: #7587a6!important;
    font-weight: 400!important;
  }

  .pl-mdi
  {
    color: #7587a6!important;
    font-weight: 400!important;
  }

  .pl-ib
  {
    background-color: #f93!important;
  }

  .pl-id
  {
    background-color: #a31515!important;
    color: #fff!important;
  }

  .pl-ii,.pl-ii .pl-cce
  {
    background-color: #df5000!important;
    color: #fff!important;
  }

  .pl-iu
  {
    background-color: #b4b7b4!important;
  }

  .pl-mo
  {
    color: #969896!important;
  }

  .pl-mri
  {
    color: teal!important;
  }

  .pl-ms1
  {
    background-color: #f5f5f5!important;
  }

  .pl-va
  {
    color: teal!important;
  }

  .pl-vpu
  {
    color: teal!important;
  }

  .pl-entl
  {
    color: #ccc!important;
  }

  .CodeMirror-gutters
  {
    background: #222!important;
    border-right: 1px solid #484848!important;
  }

  .CodeMirror-guttermarker
  {
    color: #fff!important;
  }

  .CodeMirror-guttermarker-subtle
  {
    color: #aaa!important;
  }

  .CodeMirror-linenumber
  {
    color: #aaa!important;
  }

  .CodeMirror-cursor
  {
    border-left: 1px solid #fff!important;
  }

  .CodeMirror-activeline-background
  {
    background: #27282e!important;
  }

  .CodeMirror-matchingbracket
  {
    outline: 1px solid grey!important;
    color: #fff!important;
  }

  .cm-keyword
  {
    color: #f9ee98!important;
  }

  .cm-atom
  {
    color: #fc0!important;
  }

  .cm-number
  {
    color: #ca7841!important;
  }

  .cm-def
  {
    color: #8da6ce!important;
  }

  .cm-variable-2,span.cm-tag
  {
    color: #607392!important;
  }

  .cm-variable-3,span.cm-def
  {
    color: #607392!important;
  }

  .cm-operator
  {
    color: #cda869!important;
  }

  .cm-comment
  {
    color: #777!important;
    font-style: italic!important;
    font-weight: 400!important;
  }

  .cm-string
  {
    color: #8f9d6a!important;
  }

  .cm-string-2
  {
    color: #bd6b18!important;
  }

  .cm-meta
  {
    background-color: #141414!important;
    color: #f7f7f7!important;
  }

  .cm-builtin
  {
    color: #cda869!important;
  }

  .cm-tag
  {
    color: #997643!important;
  }

  .cm-attribute
  {
    color: #d6bb6d!important;
  }

  .cm-header
  {
    color: #ff6400!important;
  }

  .cm-hr
  {
    color: #aeaeae!important;
  }

  .cm-link
  {
    color: #ad9361!important;
    font-style: italic!important;
    text-decoration: none!important;
  }

  .cm-error
  {
    border-bottom: 1px solid red!important;
  }

  #notebook .highlight table
  {
    background: #141414!important;
    color: #ccc!important;
  }

  .highlight .hll
  {
    background-color: #ffc!important;
  }

  .highlight .c
  {
    color: #5f5a60!important;
    font-style: italic!important;
  }

  .highlight .err
  {
    border: #b22518!important;
  }

  .highlight .k
  {
    color: #cda869!important;
  }

  .highlight .cm
  {
    color: #5f5a60!important;
    font-style: italic!important;
  }

  .highlight .cp
  {
    color: #5f5a60!important;
  }

  .highlight .c1
  {
    color: #5f5a60!important;
    font-style: italic!important;
  }

  .highlight .cs
  {
    color: #5f5a60!important;
    font-style: italic!important;
  }

  .highlight .gd
  {
    background: #420e09!important;
  }

  .highlight .ge
  {
    font-style: italic!important;
  }

  .highlight .gr
  {
    background: #b22518!important;
  }

  .highlight .gh
  {
    color: navy!important;
    font-weight: 700!important;
  }

  .highlight .gi
  {
    background: #253b22!important;
  }

  .highlight .gp
  {
    font-weight: 700!important;
  }

  .highlight .gs
  {
    font-weight: 700!important;
  }

  .highlight .gu
  {
    color: purple!important;
    font-weight: 700!important;
  }

  .highlight .kd
  {
    color: #e9df8f!important;
  }

  .highlight .kp
  {
    color: #9b703f!important;
  }

  .highlight .na
  {
    color: #f9ee98!important;
  }

  .highlight .nb
  {
    color: #cda869!important;
  }

  .highlight .nc
  {
    color: #9b859d!important;
    font-weight: 700!important;
  }

  .highlight .no
  {
    color: #9b859d!important;
  }

  .highlight .nd
  {
    color: #7587a6!important;
  }

  .highlight .ni
  {
    color: #cf6a4c!important;
    font-weight: 700!important;
  }

  .highlight .nf
  {
    color: #9b703f!important;
    font-weight: 700!important;
  }

  .highlight .nn
  {
    color: #9b859d!important;
    font-weight: 700!important;
  }

  .highlight .nt
  {
    color: #cda869!important;
    font-weight: 700!important;
  }

  .highlight .nv
  {
    color: #7587a6!important;
  }

  .highlight .ow
  {
    color: #a2f!important;
    font-weight: 700!important;
  }

  .highlight .w
  {
    color: #141414!important;
  }

  .highlight .mf
  {
    color: #cf6a4c!important;
  }

  .highlight .mh
  {
    color: #cf6a4c!important;
  }

  .highlight .mi
  {
    color: #cf6a4c!important;
  }

  .highlight .mo
  {
    color: #cf6a4c!important;
  }

  .highlight .sb
  {
    color: #8f9d6a!important;
  }

  .highlight .sc
  {
    color: #8f9d6a!important;
  }

  .highlight .sd
  {
    color: #8f9d6a!important;
    font-style: italic!important;
  }

  .highlight .s2
  {
    color: #8f9d6a!important;
  }

  .highlight .se
  {
    color: #f9ee98!important;
    font-weight: 700!important;
  }

  .highlight .sh
  {
    color: #8f9d6a!important;
  }

  .highlight .si
  {
    color: #daefa3!important;
    font-weight: 700!important;
  }

  .highlight .sx
  {
    color: #8f9d6a!important;
  }

  .highlight .sr
  {
    color: #e9c062!important;
  }

  .highlight .s1
  {
    color: #8f9d6a!important;
  }

  .highlight .ss
  {
    color: #cf6a4c!important;
  }

  .highlight .bp
  {
    color: #0aa!important;
  }

  .highlight .vc
  {
    color: #7587a6!important;
  }

  .highlight .vg
  {
    color: #7587a6!important;
  }

  .highlight .vi
  {
    color: #7587a6!important;
  }

  .highlight .il
  {
    color: #099!important;
  }

  *
  {
    border: none!important;
    border-bottom: #34373c!important;
    outline: #34373c!important;
  }

  .border
  {
    border: 0 transparent!important;
  }

  .header
  {
    background: #34373c!important;
  }

  body.logged-in
  {
    background-color: #25272a;
    color: #999;
    font-size: 15px!important;
  }

  p
  {
    color: #fafbfc!important;
  }

  h4
  {
    color: #fff;
  }

  a
  {
    color: #93bcd1!important;
    transition: all .1s ease-in-out;
  }

  a:hover,.underline-nav-item.selected
  {
    text-decoration: none!important;
    color: #93bcd1!important;
  }

  .underline-nav-item.selected
  {
    background-color: #1a2632!important;
    border-bottom: 1px solid #93bcd1!important;
  }

  .commit-ref,span.user
  {
    color: #f2f2f2!important;
  }

  .lead
  {
    color: #929292;
  }

  .site-header
  {
    background-color: #243447;
  }

  .site-header-nav .nav-item
  {
    color: #fff;
  }

  .jumbotron-home
  {
    background-image: none;
    background-color: #1a2632;
  }

  .features-list .list-divider,.setup-form .tos-info,.setup-form .setup-organization-next
  {
    border-color: #304251;
  }

  .radio-label
  {
    border-color: #304251;
  }

  .tag-input-tag
  {
    background: #243447;
  }

  .tag-input-tag .remove
  {
    background: #1a2632;
  }

  .home-hero-signup .form-control-lg
  {
    border-color: #304251;
  }

  .shade-gray
  {
    background-color: #121b23!important;
  }

  .tile-block
  {
    border-color: #304251;
  }

  .tile-bordered:not(:last-child)
  {
    border-color: #304251;
  }

  .session-authentication
  {
    background-color: #1a2632;
  }

  .session-authentication .header-logo
  {
    color: #fff;
  }

  .session-authentication .auth-form-body
  {
    border-color: #304251;
  }

  .auth-form-body
  {
    background-color: #1a2632;
  }

  .session-authentication .create-account-callout
  {
    border-color: #304251;
  }

  .session-authentication .auth-form-header
  {
    color: #fff;
  }

  .header
  {
    background-color: #000;
    border-color: #304251;
  }

  .header-logo-invertocat
  {
    color: #fff;
  }

  .header-search-scope
  {
    border-color: #304251;
  }

  .header-nav-link
  {
    color: #fff;
  }

  .form-control,.form-select
  {
    color: #fff;
    background-color: #151f29;
    border-color: #304251;
  }

  .form-control.focus,.form-control:focus,.form-select.focus,.form-select:focus
  {
    box-shadow: none;
  }

  .form-group .form-control:focus
  {
    background-color: #151f29;
  }

  .btn,.btn.review-simple-reply-button
  {
    color: #fff!important;
    background-color: #1a2632!important;
    background-image: none!important;
    border-color: #304251!important;
  }

  .btn:hover,.btn:active,.btn.zeroclipboard-is-hover,.btn.zeroclipboard-is-active
  {
    text-decoration: none!important;
    background-color: #151f29!important;
    background-image: none!important;
    border-color: #304251!important;
  }

  .btn:disabled,.btn.disabled,.state-open,.state-proposed,.state-reopened
  {
    background-color: #009222;
  }

  .btn:active,.btn.selected,.btn.zeroclipboard-is-active
  {
    background-color: #1a2632;
    background-image: none;
    border-color: #93BBD1;
  }

  a.btn-primary,.btn-primary
  {
    color: #fff!important;
    background-color: #6595AF;
    background-image: none;
    border-color: #93BBD1;
  }

  .btn-theme-green
  {
    background-color: #6cc644;
  }

  .btn:disabled,.btn.disabled
  {
    color: rgba(36,41,46,0.4);
    background-color: #eff3f6;
    background-image: none;
    border-color: rgba(27,31,35,0.2);
    box-shadow: none;
  }

  .BtnGroup-form.selected .BtnGroup-item,.BtnGroup-form:focus .BtnGroup-item,.BtnGroup-form:active .BtnGroup-item .BtnGroup-item
  {
    border: 1px solid gray;
  }

  .BtnGroup-form:hover
  {
    border: none;
    margin-right: -1px;
    background: #6595AF;
    border-radius: 3px;
  }

  a.float-right.btn
  {
    background-color: #563d7c!important;
  }

  a.float-right.btn:hover
  {
    background-color: #563d7c!important;
    color: #fff!important;
  }

  .site-footer
  {
    border-color: #304251;
  }

  .dropdown-menu
  {
    background-color: #101922;
    border: 1px solid #304251;
    box-shadow: none;
  }

  .dropdown-divider
  {
    background-color: #304251;
  }

  .dropdown-item
  {
    color: #9e9e9e;
  }

  .dropdown-item:hover
  {
    background-color: #243447;
  }

  button.dropdown-item.dropdown-signout
  {
    color: #df3e3e;
  }

  .setup-header
  {
    border-color: #304251;
  }

  .news .alert
  {
    border-color: #304251;
  }

  .news .alert .octicon,svg.octicon-star
  {
    color: #2ffff1e05a;
  }

  .news .alert .branch-link,.news .alert .pull-info
  {
    color: #151f29;
    background: #627790;
  }

  .ajax-pagination-form .ajax-pagination-d
  {
    background: #babdcb;
  }

  .boxed-group>h3,.boxed-group .heading
  {
    color: #fff;
    background-color: #243447;
    border-color: #304251;
  }

  .boxed-group-inner
  {
    background: #1a2632;
    border: 1px solid #304251;
  }

  .mini-repo-list-item
  {
    border-color: #304251;
  }

  .mini-repo-list-item .repo-icon
  {
    color: #8899a6;
  }

  .private .mini-repo-list-item
  {
    background-color: #243447;
  }

  .private .mini-repo-list-item .repo-icon
  {
    color: #fff9c4;
  }

  .filter-bar
  {
    background-color: #1a2632;
    border-bottom: 1px solid #304251;
  }

  .boxed-group .counter
  {
    color: #fff;
    background-color: #1a2632;
    border: 1px #304251 solid;
  }

  .subscribe-feed
  {
    color: #6d6d72;
  }

  .protip-callout
  {
    border-color: #304251;
  }

  .octofication .broadcast-icon-mask
  {
    background-color: #1a2632;
  }

  .muted-link:hover,.link-gray-dark:hover
  {
    color: rgba(195,220,235,1)!important;
  }

  .link-gray-dark
  {
    color: #C4DDEB!important;
  }

  .more-repos
  {
    text-align: center;
    background-color: #243447;
    box-shadow: none;
    border-top: 1px solid #304251;
  }

  .outline-box-highlighted
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .outline-box
  {
    border: solid 1px #304251;
  }

  .copyable-terminal
  {
    background-color: #151f29;
  }

  .reponame-suggestion
  {
    color: #4caf50;
  }

  .repohead.experiment-repo-nav
  {
    background-color: #0c141d;
  }

  .pagehead
  {
    border-color: #304251;
    background: #111!important;
  }

  .repository-meta
  {
    color: #9e9e9e;
  }

  .social-count
  {
    color: #607d8b;
    background-color: #151f29;
    border: 1px solid #304251;
    border-left: 0;
  }

  .user-mention,.team-mention
  {
    color: #6595AF;
  }

  .reponav-item
  {
    color: #9e9e9e;
  }

  .reponav-item:hover,.reponav-item:focus
  {
    color: #fff;
  }

  .counter
  {
    background-color: #151f29;
    border: 1px #304251 solid;
  }

  .reponav-item .counter
  {
    color: #f9f9f9;
  }

  .reponav-item.selected
  {
    color: #fff;
    background-color: #1a2632;
    border-color: #0bb #304251 transparent;
  }

  .btn.selected:hover
  {
    background-color: #151f29;
  }

  .overall-summary
  {
    border-color: #304251;
  }

  .text-emphasized
  {
    color: #fff;
  }

  .numbers-summary a,.numbers-summary .nolink
  {
    color: #969ab0;
  }

  .repository-lang-stats-graph
  {
    border-color: #304251;
  }

  .repository-lang-stats ol.repository-lang-stats-numbers li .language-color
  {
    border: 1px #304251 solid;
  }

  .repository-lang-stats ol.repository-lang-stats-numbers li .lang
  {
    color: #fff;
  }

  .file
  {
    border-radius: 2px;
    border: .5px solid #586069;
  }

  table.files
  {
    background: #161616;
  }

  table.files tr.navigation-focus td
  {
    background: #151f29;
  }

  table.files td
  {
    border-color: #304251;
  }

  table.files td.message a
  {
    color: #ccc!important;
    font-size: 13px!important;
  }

  table.files td.icon
  {
    color: #fff;
  }

  .warning
  {
    padding: .5em;
    margin-bottom: .8em;
    font-weight: 700;
    background-color: #d28e5d;
  }

  .file-wrap
  {
    border-color: #304251;
  }

  .commit-author-section
  {
    color: #ccc;
  }

  .RecentBranches-item,.RecentBranches,.commit-tease
  {
    color: #d03dae;
    text-shadow: 0 1px 1px rgba(0,0,0,.25);
    background-color: #1c262f;
    border-color: #3e5570;
  }

  .commits-list-item .commit-author
  {
    color: #6595AF;
  }

  .commit-tease-sha
  {
    color: #00ff82;
  }

  .commit-tease-contributors
  {
    background-color: #151f29;
    border-color: #3e5570;
  }

  .commit .commit-title a
  {
    color: #00ff80;
  }

  .branch-infobar
  {
    background-color: #1a2632;
    border-color: #3e5570;
    color: #ef5e5e!important;
    font-style: italic;
  }

  span.text-emphasized
  {
    color: #ef5e5e!important;
  }

  a.muted-link
  {
    font-style: normal;
    font-weight: 600;
  }

  .full-commit,.commit-desc pre
  {
    background: #1a2632;
    border: .5px solid #304251;
    color: #f2f2f2!important;
    font-size: 18px!important;
    padding: 5px 10px!important;
  }

  .commit-desc pre
  {
    padding: 15px 0 5px!important;
    border: none!important;
  }

  .full-commit p.commit-title
  {
    color: #f6f6f6!important;
  }

  .full-commit .commit-meta
  {
    background: #243447;
    border-color: #304251;
  }

  .full-commit .sha-block
  {
    color: #fff;
  }

  .full-commit .sha-block>.sha
  {
    color: #9e9e9e;
  }

  .full-commit .btn-outline,.full-commit .btn-outline:disabled
  {
    border-color: #304251;
  }

  .commits-list-item.navigation-focus
  {
    background: #151f29;
  }

  .file-navigation .get-repo-btn
  {
    border-color: #304251;
  }

  .file-navigation .get-repo-btn:first-child
  {
    border-color: #304251;
  }

  .signed-commit-badge
  {
    border-color: #304251;
  }

  .signed-commit-signer-name .signer
  {
    display: block;
    font-weight: 700;
    color: #6595AF;
  }

  .flex-table-item-primary
  {
    color: #fff;
  }

  span.d-block
  {
    color: #fff;
  }

  .signed-commit-header
  {
    background-color: #243447;
    border-color: #304251;
  }

  .blame-commit-title,.blame-commit-title .message
  {
    color: #4078c0;
  }

  .blame-commit,.blame-commit+.blame-line
  {
    border-color: #304251;
  }

  .blame-blob-num
  {
    background-color: #243447;
  }

  .muted-link
  {
    color: #6595AF!important;
  }

  .readme .markdown-body,.readme .plain
  {
    background-color: #161616!important;
    border-color: #304251;
  }

  .markdown-body .highlight pre,.markdown-body pre
  {
    background-color: #1a2632;
    border: 1px #304251 solid;
  }

  .markdown-body h1
  {
    border-color: #304251;
  }

  .markdown-body img
  {
    background-color: #151f29;
  }

  .markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link
  {
    color: #fff;
  }

  .markdown-body table
  {
    border-radius: 3px;
  }

  .markdown-body table thead tr
  {
    filter: invert(10%);
    border-radius: 3px 3px 0 0!important;
  }

  .markdown-body table tr
  {
    background-color: #172533;
  }

  .markdown-body table th,.markdown-body table td
  {
    border-color: #304251;
  }

  .markdown-body table tr:nth-child(2n)
  {
    background-color: #0f1721;
  }

  .markdown-body pre code,.markdown-body pre tt
  {
    color: #d1e8ff;
  }

  .markdown-body code,.markdown-body tt
  {
    color: #d1e8ff;
    background-color: #627790;
  }

  .blob-num
  {
    color: #5e6b77;
    border-color: #304251;
  }

  .blob-code-inner
  {
    color: #6d6d72;
    font-size: 15px!important;
  }

  .blob-code-hunk,.blob-code-expandable
  {
    background-color: #243447;
  }

  .blob-num-hunk,.blob-num-expandable
  {
    background-color: #243447;
  }

  .blob-num-expandable
  {
    background-color: #243447;
  }

  .ace_editor .ace_gutter-active-line
  {
    background-color: #243447;
  }

  .ace_editor .ace_marker-layer .ace_active-line
  {
    background-color: #243447;
  }

  .pl-pds,.pl-s,.pl-s .pl-pse .pl-s1,.pl-sr,.pl-sr .pl-cce,.pl-sr .pl-sra,.pl-sr .pl-sre
  {
    color: #4078c0;
  }

  .pl-s .pl-s1,.pl-smi
  {
    color: #bbb;
  }

  .pl-k
  {
    color: #b73999;
  }

  .ace_string
  {
    color: #4670d8;
  }

  .ace_support.ace_type
  {
    color: #b73999;
  }

  .ace_keyword
  {
    color: #8485ce;
  }

  .ace_variable
  {
    color: #d28e5d;
  }

  .ace_focus
  {
    background-color: #000;
  }

  .ace_markup.ace_heading
  {
    color: #4670d8;
  }

  .markdown-body h2
  {
    border-color: #304251;
  }

  .markdown-body hr
  {
    background-color: #304251;
  }

  blockquote
  {
    background: #222!important;
    border: 1px solid #666!important;
    border-radius: 2px!important;
    padding: 5px!important;
    font-style: italic!important;
  }

  .file .image
  {
    border-color: #304251;
    background: transparent!important;
  }

  .file-header
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .breadcrumb strong.final-path
  {
    color: #929292;
  }

  .ace_gutter
  {
    background: #1a2632;
    border-color: #304251;
  }

  .ace-github-light
  {
    color: #9e9e9e;
    background-color: #1a2632;
  }

  .file-commit-form .commit-form
  {
    border-color: #304251;
  }

  .commit-sha
  {
    background-color: inherit;
    border-color: #304251;
  }

  .table-list-header
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .Box-body-row--highlight .Box-row-link
  {
    color: #6595AF;
  }

  .Box-body-row
  {
    border-top: 1px solid #304251;
  }

  .Box-body-row--highlight.navigation-focus,.Box-body-row--highlight:hover
  {
    background-color: #151f29;
  }

  .issues-listing .table-list-issues .navigation-focus
  {
    background-color: #1a2632;
  }

  .table-list
  {
    border-color: #304251;
  }

  .table-list-cell
  {
    border-top-color: #304251;
  }

  .table-list-bordered .table-list-cell:first-child
  {
    border-left-color: #304251;
  }

  .table-list-bordered .table-list-cell:last-child
  {
    border-right-color: #304251;
  }

  .table-list-header-toggle .btn-link
  {
    color: #9e9e9e;
  }

  .table-list-header-toggle .btn-link:hover
  {
    color: #fff;
  }

  .table-list-header-toggle .btn-link.selected,.table-list-header-toggle .selected:hover
  {
    color: #fff;
  }

  .issue-title-link
  {
    color: #6595AF;
  }

  .protip
  {
    color: #6d6d72;
  }

  .milestone-title-link a
  {
    color: #cecece;
  }

  .Box-body
  {
    border-color: #304251;
  }

  .select-menu-modal
  {
    border: 1px solid #666;
    box-shadow: 0 3px 12px rgba(27,31,35,0.75);
  }

  .select-menu-header
  {
    background: #243447;
    border-color: #304251;
  }

  .select-menu-header .select-menu-title
  {
    color: #9e9e9e;
    text-shadow: none;
  }

  .select-menu-header
  {
    background: #243447;
    border-bottom: 1px solid #304251;
  }

  .select-menu-item
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .select-menu-item.selected
  {
    color: #fff;
  }

  .select-menu-filters
  {
    background-color: #1a2632;
  }

  .select-menu-text-filter:first-child:last-child
  {
    border-color: #304251;
  }

  .select-menu-text-filter input
  {
    border-color: #304251;
  }

  .border-left,.border-right,.border-bottom
  {
    border-color: #304251!important;
  }

  .pr-toolbar.is-stuck::after
  {
    border-color: #304251;
    box-shadow: none;
  }

  .gh-header-edit .edit-issue-title,.gh-header-edit .edit-issue-title:focus
  {
    background-color: #151f29;
  }

  .gh-header-meta
  {
    border-color: #304251;
  }

  .gh-header-meta .author
  {
    color: #6595AF;
  }

  .commit-ref
  {
    color: #151f29;
    background-color: #627790;
  }

  .commit-ref .user
  {
    color: #151f29;
  }

  .tabnav-tab.selected
  {
    background-color: #1a2632;
  }

  .tabnav-pr .tabnav-tab.selected
  {
    color: #fff;
    border-color: #304251;
  }

  .tabnav-pr
  {
    border-color: #304251;
  }

  .timeline-comment-wrapper
  {
    border: 0;
  }

  .timeline-comment-header
  {
    background-color: #243447;
    border-color: #304251;
  }

  .timeline-comment-header .author
  {
    color: #6595AF;
  }

  .timeline-comment
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .timeline-comment-wrapper>.timeline-comment::before,.timeline-new-comment .timeline-comment::before
  {
    border-right-color: #304251;
  }

  timeline-comment::before
  {
    border-right-color: #243447!important;
  }

  .timeline-comment::after
  {
    border-right-color: #243447!important;
  }

  .timeline-comment.current-user .timeline-comment-header
  {
    background-color: #243447;
    border-color: #304251;
  }

  .timeline-comment.current-user
  {
    border-color: #304251;
  }

  .timeline-comment.current-user .timeline-comment-label
  {
    border-color: #304251;
  }

  .timeline-comment-wrapper .timeline-comment.current-user::before
  {
    border-width: 8px;
    border-right-color: #304251;
  }

  .timeline-comment-label
  {
    border-color: #304251;
  }

  .comment-reactions.has-reactions
  {
    border-color: #304251;
  }

  .reaction-summary-item
  {
    border-color: #304251;
  }

  .timeline-commits .commit-message>code a
  {
    color: #8485ce;
  }

  .discussion-timeline::before
  {
    width: 1px;
    background-color: #304251;
  }

  .discussion-timeline-actions
  {
    background-color: #131313;
    border: 0;
  }

  .discussion-item-ref-title .title-link
  {
    color: #8485ce;
  }

  .discussion-item-entity
  {
    color: #4078c0;
  }

  .discussion-item+.discussion-item
  {
    border-color: #304251;
  }

  .discussion-sidebar-item+.discussion-sidebar-item
  {
    border-color: #304251;
  }

  .discussion-item-icon
  {
    color: #8899a6;
    background-color: #243447;
    border-color: #304251;
  }

  .discussion-item+.discussion-item-review
  {
    border-color: #304251;
  }

  .discussion-item-review .file-header
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .discussion-item-review+.discussion-item
  {
    border-top: 1px solid #304251;
  }

  .discussion-item-review .blob-wrapper
  {
    border-color: #304251;
  }

  .review-comment-contents::after,.review-comment.is-comment-editing::after
  {
    background-color: #304251;
  }

  .new-discussion-timeline .previewable-comment-form .comment-form-head.tabnav
  {
    background: #243447;
  }

  .new-discussion-timeline .previewable-comment-form .comment-body
  {
    border-color: #304251;
  }

  .new-discussion-timeline .closed-banner
  {
    background-color: #131313;
    border: none;
    height: 2px;
    padding: 1px 0;
  }

  .suggester
  {
    background: #243447;
    border-color: #304251;
  }

  .suggester li
  {
    border-color: #304251;
  }

  .tabnav
  {
    border-color: #304251;
  }

  .tabnav-tab.selected
  {
    color: #fff;
    border-color: #304251;
  }

  .review-summary-form-wrapper
  {
    background-color: #1a2632;
    color: #f2f2f2;
  }

  .previewable-comment-form,.previewable-comment-form textarea
  {
    background-color: #1a2632;
    color: #f2f2f2;
  }

  .input-contrast:focus
  {
    background: #151f29;
  }

  .upload-enabled textarea
  {
    border-color: #304251;
  }

  .drag-and-drop
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .commit-icon .octicon
  {
    background-color: #1a2632;
  }

  .issues-listing .table-list-issues .navigation-focus
  {
    background-color: #151f29;
  }

  .branch-action-state-clean .branch-action-body::after
  {
    border-right-color: #6cc644;
  }

  .branch-action-state-unstable .branch-action-body::after
  {
    border-right-color: #cea61b;
  }

  .branch-action-body
  {
    background-color: #1a2632;
    border-color: #ddd!important;
  }

  .branch-action-body .merge-message,.branch-action-body .merge-branch-form
  {
    background-color: #243447;
    border-top: solid 1px #304251;
  }

  .branch-action-state-merged .branch-action-body
  {
    border-color: #6e5494!important;
  }

  .merge-status-list
  {
    border-color: #304251;
  }

  .merge-status-item
  {
    background-color: #243447;
    border-color: #304251;
  }

  .branch-group-heading
  {
    background: #243447;
    border-color: #304251;
  }

  .branch-action-item+.branch-action-item
  {
    border-color: #304251;
  }

  .branch-action-item div code
  {
    color: #ec3434;
  }

  .Box-row--focus-gray.navigation-focus
  {
    background-color: #1a2632;
  }

  .Box-row:first-of-type
  {
    border-color: #304251;
  }

  .Box-row
  {
    border-color: #304251;
  }

  a.Box-row-link.h4.js-navigation-open
  {
    color: #4078c0;
  }

  .branch-summary,.branch-group-heading+.branch-summary,.branch-summary
  {
    border-color: #304251;
  }

  .branch-a-b-count .meter
  {
    background-color: #243447;
  }

  .branch-a-b-count .count-half:last-child
  {
    border-color: #304251;
  }

  .count-value.count-behind
  {
    color: #dc3c3c;
  }

  .count-value.count-ahead
  {
    color: #52bd58;
  }

  a.branch-name
  {
    color: inherit;
  }

  .table-of-contents li+li
  {
    border-color: #304251;
  }

  .commit-desc+.commit-branches
  {
    border-color: #304251;
  }

  .diffbar
  {
    background-color: #1a2632;
  }

  .diff-table tr:not(:last-child) .line-comments
  {
    border-color: #304251;
  }

  .pr-toolbar
  {
    background-color: #1a2632;
    padding: 0 10px;
    width: 100%;
    margin: -21px 0 10px;
    border: .5px solid #304251;
    border-radius: 0 0 5px 5px;
  }

  .range-editor
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .compare-pr-placeholder
  {
    background-color: #1a2632;
    border-color: #cea61b;
  }

  ul.comparison-list
  {
    background: #1a2632;
    border-color: #304251;
  }

  ul.comparison-list>li.title
  {
    color: #9e9e9e;
    background: #243447;
  }

  ul.comparison-list>li
  {
    border-color: #304251;
  }

  .file-diff-split .empty-cell
  {
    background-color: #1a2632;
    border-right-color: #304251;
  }

  .feature-callout-octicon
  {
    border-color: #304251;
  }

  .feature-callout
  {
    border-color: #304251;
  }

  .review-thread
  {
    border-color: #304251;
  }

  .review-thread-reply
  {
    background-color: #243447;
    border-color: #304251;
  }

  .review-thread-reply .inline-comment-form
  {
    background-color: #1a2632;
  }

  .review-comment .reaction-summary-item:not(.add-reaction-btn)
  {
    border-color: #304251;
  }

  .last-review-thread
  {
    border-color: #304251;
  }

  .inline-comment-form
  {
    border-color: #304251;
  }

  .release-timeline
  {
    border-color: #304251;
    border-width: 1px;
  }

  .release-body
  {
    border-color: #304251;
    border-width: 1px;
  }

  .releases-tag-list
  {
    border-color: #304251;
  }

  .releases-tag-list tr
  {
    border-color: #304251;
  }

  .release-show
  {
    border-color: #304251;
  }

  .tabnav-extra
  {
    padding-right: 15px;
    color: #9e9e9e;
  }

  .tag-info h3 a .tag-name
  {
    color: #4078c0;
  }

  .release-downloads
  {
    border-color: #304251;
  }

  .release-downloads li
  {
    border-color: #304251;
  }

  .commit-group-title .octicon-git-commit
  {
    margin-right: 17px;
    color: #304251;
    background: #1a2632;
  }

  .commits-listing::before
  {
    background-color: #304251;
  }

  .subnav-item
  {
    border-color: #304251;
  }

  .subnav-item:hover,.subnav-item:focus
  {
    background-color: #151f29;
  }

  .blankslate
  {
    background-color: #151f29;
    border-color: #304251;
    box-shadow: none;
  }

  .wiki-wrapper .wiki-auxiliary-content
  {
    background: #243447;
  }

  .wiki-rightbar .boxed-group.collapsed>h3
  {
    border-color: #304251;
  }

  .wiki-wrapper .wiki-auxiliary-content-no-bg
  {
    background: #1a2632;
  }

  .wiki-wrapper .wiki-custom-sidebar
  {
    border-color: #304251;
  }

  .border
  {
    border-color: #304251!important;
  }

  .bg-gray
  {
    background-color: #1d1e20!important;
  }

  .project-header
  {
    background-color: #1d1e20!important;
  }

  .project-columns
  {
    background-color: #1d1e20!important;
  }

  .project-column h1,.project-column h2,.project-column h3,.project-column h4,.project-column h5,.project-column h6,.project-column p
  {
    color: #111!important;
  }

  .project-card
  {
    border: 1px solid #bbb!important;
  }

  .bg-white
  {
    background-color: #243447!important;
  }

  .bg-gray-light
  {
    background-color: #353535!important;
  }

  .pulse-graph:first-child
  {
    border-color: #304251;
  }

  .pulse-graph
  {
    border-bottom-color: #304251;
  }

  .conversation-list-heading .inner
  {
    background: #1a2632;
  }

  .conversation-list-heading
  {
    border-color: #304251;
  }

  .simple-conversation-list>li
  {
    border-color: #304251;
  }

  .summary-stats li
  {
    border-left-color: #304251;
  }

  .summary-stats li .num
  {
    color: #969ab0;
  }

  .summary-stats li a:hover
  {
    background: #151f29;
  }

  .diffstat-summary strong
  {
    color: #84aaf7;
  }

  .axis line
  {
    stroke: #304251;
  }

  .subhead
  {
    border: 0;
  }

  .tint-box
  {
    background: #1a2632;
  }

  .capped-card
  {
    border-color: #304251;
  }

  .capped-card-content
  {
    background: #1a2632;
  }

  .graphs .area
  {
    fill: #6595AF;
  }

  .capped-card h3
  {
    border-color: #304251;
  }

  .day-name
  {
    fill: #8899a6;
  }

  circle.day
  {
    fill: #969ab0;
    stroke-width: 0;
  }

  :not(img) text,circle.day
  {
    fill: #969ab0;
  }

  line.axis
  {
    stroke: #304251;
  }

  line.axis.even
  {
    stroke: #304251;
  }

  :not(img) text,circle.day
  {
    fill: #8899a6;
  }

  table.capped-list td
  {
    border-color: #304251;
  }

  table.capped-list th
  {
    border-color: #304251;
  }

  table.capped-list tr:nth-child(even)
  {
    background-color: #243447;
  }

  .code-frequency .addition
  {
    fill: #52bd58;
  }

  .code-frequency .deletion
  {
    fill: #dc3c3c;
  }

  .cadd
  {
    font-weight: 700;
    color: #52bd58;
  }

  .cdel
  {
    font-weight: 700;
    color: #dc3c3c;
  }

  .graphs .dir
  {
    color: #9e9e9e;
  }

  .menu
  {
    margin-bottom: 15px;
    list-style: none;
    background-color: #1a2632;
    border: 1px solid #304251;
    border-radius: 3px;
  }

  .menu-item
  {
    text-shadow: none;
    border-bottom: 1px solid #304251;
  }

  .menu-item:hover
  {
    background-color: #151f29;
  }

  .menu-item.selected
  {
    color: #fff;
    background-color: #151f29;
  }

  .form-group .form-control
  {
    background-color: #151f29;
  }

  hr,.rule
  {
    border-bottom: 1px solid #304251;
  }

  .boxed-group.dangerzone>h3
  {
    text-shadow: none;
    border-color: #df3e3e;
  }

  .integrations-callout-standalone .integration-settings-callout
  {
    border-color: #304251;
  }

  .border-top
  {
    border-color: #304251!important;
  }

  .profilecols .filter-bar
  {
    background-color: #1a2632;
  }

  .pinned-repo-list-item
  {
    border-color: #304251;
  }

  .pinned-repo-filters
  {
    border-color: #304251;
  }

  .user-profile-nav
  {
    background-color: #101922;
    border-color: #304251;
  }

  .border-gray-dark
  {
    border-color: #304251!important;
  }

  .underline-nav-item.selected
  {
    color: #fff;
  }

  .user-profile-sticky-bar::after
  {
    background-color: #101922;
    border-color: #304251;
  }

  .underline-nav-item:hover
  {
    color: #607d8b;
  }

  .profile-timeline-card-wrapper
  {
    border: 0;
  }

  .profile-timeline.discussion-timeline::before
  {
    left: 11px;
    background-color: #304251;
  }

  .profile-timeline.discussion-timeline .profile-timeline-month-heading::after
  {
    background-color: #304251;
  }

  .profile-rollup-wrapper+.profile-rollup-wrapper
  {
    border-color: #304251;
  }

  rect[fill="#ebedf0"]
  {
    fill: rgba(50,50,50,.5);
  }

  rect[fill="#eee"],ul.legend li:nth-child(1)
  {
    background-color: rgba(50,50,50,.5)!important;
  }

  rect[fill="#c6e48b"],ul.legend li:nth-child(2)
  {
    background-color: #036d63!important;
    fill: #036d63!important;
  }

  rect[fill="#7bc96f"],ul.legend li:nth-child(3)
  {
    background-color: #018477!important;
    fill: #018477!important;
  }

  rect[fill="#239a3b"],ul.legend li:nth-child(4)
  {
    background-color: #02bcaa!important;
    fill: #02bcaa!important;
  }

  rect[fill="#196127"],ul.legend li:nth-child(5)
  {
    background-color: #C4DDEB!important;
    fill: #C4DDEB!important;
  }

  .profilecols .filter-bar .filter-selected
  {
    color: #8485ce;
  }

  .list-group-item.navigation-focus
  {
    background-color: #151f29;
  }

  .list-group-item-link
  {
    color: #fdfdfd;
  }

  .boxed-group-list>li
  {
    border-color: #304251;
  }

  .flash
  {
    color: #fff;
    background-color: #1f282c;
    border-color: #4c85a0;
  }

  .org-name
  {
    color: #fff;
  }

  .orghead
  {
    background-color: #151f29;
    border-color: #304251;
  }

  .simple-box
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .org-module-link
  {
    color: #6595AF;
  }

  .member-username
  {
    color: #6595AF;
  }

  .org-link
  {
    color: #6595AF;
  }

  .subnav-bordered
  {
    border-color: #304251;
  }

  .org-module-title
  {
    border-color: #304251;
  }

  .member-row
  {
    border-color: #304251;
  }

  .pagehead-tabs-item.selected
  {
    color: #fff;
    background-color: #1a2632;
    border-color: #d26911 #304251 transparent;
  }

  .setup-header
  {
    text-shadow: none;
  }

  .steps
  {
    border-color: #304251;
  }

  .steps li
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .steps li.current
  {
    color: #9e9e9e;
    background-color: #243447;
  }

  .setup-info-module
  {
    background-color: #1a2632;
    border-color: #304251;
    box-shadow: none;
  }

  .setup-info-module h2
  {
    border-color: #304251;
  }

  .plan-choice.open,.plan-choice.selected
  {
    background-color: #1a2632;
  }

  .plan-choice
  {
    background-color: #1a2632;
    border-color: #304251;
  }

  .menu-heading
  {
    color: #fff;
    background-color: #243447;
    border-color: #304251;
  }

  .listgroup
  {
    border-color: #304251;
  }

  .listgroup-item+.listgroup-item
  {
    border-color: #304251;
  }

  .oauth-border
  {
    border-color: #304251;
  }

  .saved-reply-form
  {
    border-color: #304251;
  }

  .user-key-badge
  {
    border-color: #304251;
  }

  dl.new-email-form
  {
    border-color: #304251;
  }

  .Subhead
  {
    border-color: #304251;
  }

  li.session-device.session-current,li.session-device
  {
    background-color: #1a2632;
  }

  .mute,.text-gray,.text-gray-dark
  {
    color: #aeaeae!important;
  }

  .boxed-group-list>li:first-child
  {
    border-color: #304251;
  }

  .boxed-group-inner .help
  {
    border-color: #304251;
  }

  .auth-form-header
  {
    background-color: #243447;
    border-color: #304251;
  }

  .billing-section
  {
    border-color: #304251;
  }

  .billing-section .section-content
  {
    color: #9e9e9e;
  }

  .radio-label
  {
    color: #666;
  }

  .facebox-popup
  {
    background-color: #1a2632;
    border: 1px solid #304251;
  }

  .facebox-alert
  {
    color: #a9a495;
    background-color: #35342c;
    border-color: #6b5c20;
  }

  .facebox-header
  {
    border-color: #304251;
  }

  .facebox-footer
  {
    margin: 0 -15px -15px;
    background: #243447;
    background: #243447;
    border-color: #304251;
  }

  ::-webkit-scrollbar
  {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb
  {
    background-color: #243447;
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover
  {
    background-color: #C4C4C4;
  }

  ::-webkit-scrollbar-track
  {
    background-color: #1a2632;
  }

  .repo-list-item
  {
    border-color: #304251;
  }

  .codesearch-results .repo-list-name em,.codesearch-results .repo-list-description em
  {
    background-color: #243447;
  }

  .participation-graph rect
  {
    fill: #243447;
  }

  .code-list .file-box
  {
    border-color: #304251;
  }

  .code-list .code-list-item+.code-list-item
  {
    border-color: #304251;
  }

  .code-list .language
  {
    color: #9e9e9e;
  }

  .codesearch-aside .menu .octicon,table.files td.icon .octicon-file-directory
  {
    color: #2fff00;
  }

  .codesearch-aside .filter-list
  {
    border-color: #304251;
  }

  .codesearch-aside .filter-list li span.bar
  {
    background: #243447;
  }

  .profile-timeline-year-list
  {
    font-size: 15px;
    right: 0!important;
    text-align: center!important;
    width: 110px!important;
  }

  .col-2 + .pl-5
  {
    width: 15%;
    padding-left: 0!important;
  }

  .filter-list li:not(:last-child)
  {
    border-bottom: .5px solid rgba(200,200,200,.2);
  }

  .filter-list li a
  {
    margin-bottom: 0!important;
  }

  .filter-list li a.selected
  {
    background-color: #455c68!important;
  }

  .filter-item
  {
    border-radius: 1px!important;
  }

  .filter-item:hover
  {
    background-color: #243447;
  }

  .contributions-setting .contributions-setting-link
  {
    margin-right: 10px;
  }

  .timeline-commits .hidden-text-expander .ellipsis-expander
  {
    color: #8899a6;
    background: #243447;
  }

  .hidden-text-expander a,.ellipsis-expander
  {
    color: #8899a6;
    background: #243447;
  }

  td.blob-code.blob-code-deletion:before
  {
    margin: -2px 0 0 -3px !important;
  }

  .blob-num-deletion,.blob-code-deletion
  {
    background-color: #1a2632;
    color: #ef9a9a;
  }

  .blob-num-deletion,td.blob-code.blob-code-deletion:before
  {
    color: red!important;
    font-size: 13px;
  }

  .blob-num-addition,.blob-code-addition
  {
    background-color: #1a2632;
  }

  td.blob-code.blob-code-addition:before
  {
    margin: -2px 0 0 -3px !important;
  }

  .blob-num-addition,td.blob-code.blob-code-addition:before
  {
    color: green!important;
    font-size: 13px;
  }

  .header-logo-wordmark
  {
    color: #fff;
  }

  .gist-snippet-meta .description
  {
    color: #6d6d72;
  }

  .ajax-pagination-form .ajax-pagination-btn
  {
    color: #9e9e9e;
    background: #243447;
    border-color: #304251;
  }

  .ajax-pagination-form .ajax-pagination-btn:hover
  {
    background-color: #151f29;
  }

  .btn-outline:disabled,.btn-outline:disabled:hover,.btn-outline.disabled,.btn-outline.disabled:hover
  {
    border-color: #304251;
  }

  button.btn.BtnGroup-item
  {
    background-color: #0a9c6e!important;
  }

  .btn-octicon
  {
    color: #8899a6;
  }

  .toolbar-item
  {
    color: #8899a6;
  }

  .toolbar-item .menu-target
  {
    color: #8899a6;
  }

  .timeline-comment-actions
  {
    color: #8899a6;
  }

  .discussion-sidebar-toggle .octicon
  {
    color: #8899a6;
  }

  .shade-gradient
  {
    background-image: none;
  }

  .display-heading-1,.display-heading-2,.display-heading-3,.display-heading-4
  {
    color: #fff;
  }

  .bg-white
  {
    background-color: #131313!important;
    padding: 0 0 0 5px;
    border: .5px solid #304251;
  }

  .pricing-card
  {
    background-color: #1a2632;
    border-color: #304251;
    box-shadow: none;
  }

  .pricing-card-vertical .pricing-card-name
  {
    border-color: #304251;
  }

  .pricing-card-vertical .pricing-card-cta
  {
    border-color: #304251;
  }

  .sort-bar
  {
    border-color: #304251;
  }

  .pagehead-nav-item
  {
    color: #6595AF;
  }

  .pagehead-nav-item:hover
  {
    color: #8485ce;
  }

  .pagehead-nav-item.selected
  {
    color: #8485ce;
    border-color: #d28e5d;
  }

  .pagehead.explore-head
  {
    border-bottom-color: #304251;
  }

  .exploregrid-item-title
  {
    color: #fff;
  }

  .exploregrid-item
  {
    color: #969ab0;
    border-color: #304251;
    box-shadow: none;
  }

  .thread-subscription-status
  {
    background-color: #1a2632;
    border: 1px solid #304251;
  }

  .explore-section
  {
    border-color: #304251;
  }

  .explore-section:nth-child(even)
  {
    background: #243447;
  }

  .explore-collection h2
  {
    color: #fff;
  }

  .repo-collection>ul
  {
    background: #151f29;
    border-color: #304251;
  }

  .showcase-page-header
  {
    border-color: #304251;
  }

  .showcase-page-repo-list
  {
    border-color: #304251;
  }

  .showcase-page-pattern::after
  {
    background: none #1a2632;
  }

  .intgrs-lstng-item
  {
    border-color: #304251;
  }

  .blog-title
  {
    color: #fff;
  }

  .octotree_github_sidebar
  {
    background-color: #1a2632;
    color: #fff;
  }

  .octotree_github_sidebar .octotree_views .octotree_view .octotree_view_header
  {
    background-color: #1a2632;
    border-bottom: 1px solid #304251;
    background-image: none;
  }

  .octotree_views .octotree_view .octotree_view_header
  {
    text-shadow: none;
  }

  .octotree_github_sidebar input,.octotree_github_sidebar textarea
  {
    background-color: #151f29;
    border: 1px solid #304251;
    padding: 2px;
    color: #fff;
  }

  .octotree_github_sidebar .octotree_views .octotree_treeview .jstree-default .jstree-wholerow-clicked
  {
    background-color: #243447;
  }

  .octotree_github_sidebar .octotree_views .octotree_treeview .jstree-default .jstree-wholerow-hovered
  {
    background-color: #243447;
  }

  .octotree_sidebar
  {
    border-color: #304251;
  }

  .octotree_github_sidebar a.octotree_toggle > span::after,.octotree_github_sidebar a.octotree_opts
  {
    -webkit-filter: invert(1);
    filter: invert(1);
  }

  .btn-link
  {
    color: rgba(240,240,80,0.7)!important;
  }

  .text-emphasized,.text-grey,.select-menu-item-text .description .select-menu-item-text,.select-menu-item-text .description
  {
    font-size: 13px;
  }

  .select-menu-header,.select-menu-divider
  {
    padding: 3px 6px;
  }

  .select-menu-item.navigation-focus,.select-menu-item.navigation-focus.selected,.select-menu-item.navigation-focus.select-menu-action,.select-menu-item.navigation-focus .description-inline
  {
    background-color: #243447;
  }

  ::-webkit-scrollbar-thumb
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }

  ::-webkit-scrollbar-thumb
  {
    background-color: #243447;
    border-radius: 0;
  }

  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track
  {
    background-color: #1a2632;
  }

  .notifications .read.navigation-focus
  {
    background-color: #1c262d!important;
  }

  .subnav-item.selected,.subnav-item.selected:hover,.subnav-item.selected:focus
  {
    color: #fff!important;
    background: #93bcd1!important;
    border-color: #015555;
  }

  .branch-group-name
  {
    color: #f1f1f1!important;
  }

  .btn-link .reaction-summary-item .comment-reactions,.user-has-reacted,.add-reactions-options-item,.btn-link .comment-reactions .reaction-popover-container
  {
    font-style: normal!important;
    background: transparent!important;
  }

  .State
  {
    color: #fff!important;
  }

  .merge-branch-heading
  {
    color: #2cbe4e!important;
  }

  .keyboard-mappings
  {
    font-size: 105%!important;
    font-weight: lighter!important;
    color: #f1f1f1!important;
  }

  .keyboard-mappings th
  {
    color: #c2c2c2!important;
    border-bottom: 1px solid grey;
  }

  .facebox .shortcuts
  {
    width: 1020px!important;
  }

  .facebox
  {
    left: 15%!important;
    right: auto!important;
    margin: 0 auto!important;
  }

  a:hover,.underline-nav-item.selected,.underline-nav-item:hover,a:hover,.underline-nav-item.selected
  {
    text-decoration: none!important;
    color: #a0b4c8!important;
  }

  .link-gray-dark
  {
    color: #C4DDEB!important;
  }

  header.Header
  {
    background-color: #25272a;
    padding-top: 0;
    padding-bottom: 25px;
    tab-size: 2!important;
  }

  .HeaderNavlink .name
  {
    width: 30px;
  }

  .HeaderMenu .d-flex
  {
    margin-top: 10px;
    max-height: 40px;
  }

  .project-column
  {
    background-color: #2e2e2f;
    border-width: 1px!important;
    border-radius: 1px!important;
  }

  .project-column h1,.project-column h2,.project-column h3,.project-column h4,.project-column h5,.project-column h6,.project-column p
  {
    color: #eee!important;
  }

  .issue-card .issue-card-label
  {
    color: #0ff!important;
  }

  .pagehead > div.js-socket-channel.js-updatable-content
  {
    background: #111!important;
  }

  span.labels> a,span.IssueLabel>a,.IssueLabel,.label-name
  {
    color: #222!important;
    font-size: 13px;
    padding: 3px 5px!important;
    text-shadow: none!important;
    filter: hue-rotate(100deg);
  }

  .header-logo-invertocat .octicon-mark-github
  {
    margin: 20px 10px 0!important;
  }

  signup-prompt
  {
    background-position: center 30%;
    background-size: 100% auto;
    background: #222;
  }

  .gh-header
  {
    background-color: #0000;
  }

  .application-main,.container,.js-issues-results,.pagehead
  {
    background: #25272a!important;
  }

  .pagehead
  {
    border-color: #304251;
  }

  .Box-body,.boxed-group-list>li,.diff-table tr:not(:last-child) .line-comments,.discussion-item-review-comment,.facebox .facebox-staff-links,.facebox-header,.file-header,.menu-heading,.menu-item,.merge-status-item,.new-discussion-timeline .previewable-comment-form .comment-body,.pagehead,.select-menu-divider,.select-menu-header,.table-list,.timeline-new-comment .previewable-comment-form .comment-body
  {
    border-bottom: 1px solid #262626!important;
  }

  .signup-prompt-bg
  {
    background-image: linear-gradient(180deg,hsla(0,0%,100%,0) 50%,#0000),linear-gradient(70deg,#0000 32%,#9960661a);
    filter: invert(1);
    border-radius: 10px !important;
  }

  .signup-prompt
  {
    filter: invert(100);
  }
`;
	head.appendChild(style);
}

if (location.hostname.match('suckless')) {
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = `
html {
   -webkit-filter:invert(100%);
}

#nav, #main {
   background-color:#f9f6f9;
}
	`;
	head.appendChild(style);
}

if (location.hostname.match('reddit')) {
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = `
* a:active, * a:focus { outline:0 !important; }

body {
   background-color:#171217 !important;
   -webkit-filter:invert(100%);
   overflow-x:hidden !important;
}

.author-tooltip {
   display:none !important;
}

.media-preview-content a img {
   -webkit-filter:invert(100%) !important;
}

div#header, div.side, div.footer-parent, div.content {
   background-color:#f8f2f7 !important;
}

/* main content background - matches new upvote and downvote images */
body {
   color:#101010 !important;
   background-image:none !important;
   text-shadow:none !important;
   font-family:"Helvetica" !important;
}
.content {
   text-align:center !important;
   margin-top:0 !important;
   margin-right:0 !important;
   padding-top:10px !important;
}
#siteTable {
   color:#222 !important;
   padding-left:100px !important;
   padding-right:100px !important;
   text-align:left !important;
}

/* make first link on the page bigger */
#siteTable .link:first-child a.title { font-size:35px !important; }
.sitetable .link { border:none !important; }

body a, body a:hover { color:#6a6a6a !important; }
.domain { font-size:13px !important; }

.link .title { color:#333 !important; font-size:20px !important; }
.thing.link { border:1px solid #ddd !important; background-color:#f7f7f7 !important; color:#121412; }
.thing.link:hover { border:1px solid #ddd !important; background-color:#f7f7f7 !important; color:#121412; }

.tagline, .flat-list.buttons { font-family:"Arial" !important; font-size:9pt !important; }
.linkflairlabel { display:none !important; }

.side { background-color:#222 !important; }
.side .spacer { padding-left:10px !important; padding-right:10px !important; }

div#siteTable {
   background-color:#eff9ef;
}

a.thumbnail { display:none !important; }
.rank { display:none !important; }

.trending-subreddits-content,
.submit_text.roundfield.enabled
{ display:none !important; }

/* header */
#header {
   background:-moz-linear-gradient(#fff, #f9f9f9) !important;
   border-bottom:0 !important;
}
#header-bottom-left {
   margin-top:0px !important;
   background:-moz-linear-gradient(#fff, #f9f9f9) !important;
}

/* subreddits bar */
#sr-header-area a { font-size:9.5px !important; color:#000 !important; }

/* "what's hot", "new", "controversial" tabs, etc */
.tabmenu li a {
   background-color:#999 !important;
   color:#fff !important;
   border-color:black !important;
}

/* user bar */
#header-bottom-right { background:none !important; font-size:13px !important; }
#header-bottom-right a { color:#000 !important; }
#userbarToggle { background:none !important; color:#000 !important; border-right:0 !important; }

/* comments */
.sitetable.nestedlisting { text-align:left !important; }
.usertext-body .md p, .usertext-body .md { font-size:14px !important; }
.usertext-body .md { max-width:90% !important; }
.commentarea { text-align:left !important; }
.comment .expand:hover { background:none !important; }
.panestack-title { border-bottom:0 !important; }

/* new icons for self posts and video links */

.expando-button { border:1px solid black !important; }

.expando-button.selftext.collapsed, .expando-button.selftext.collapsed:hover, .eb-sch {
    background-image:url("http://i.imgur.com/s2oFn.png") !important;
    background-position:0 !important;
}

.expando-button.selftext.expanded, .expando-button.selftext.expanded:hover, .eb-se {
    background-image:url("http://i.imgur.com/PE1Rg.png") !important;
    background-position:0 !important;
}

.expando-button.video.collapsed, .expando-button.video.collapsed:hover, .eb-vch {
    background-image:url("http://i.imgur.com/HOkPU.png") !important;
    background-position:0 !important;
}

.expando-button.video.expanded, .expando-button.video.expanded:hover, .eb-ve {
    background-image:url("http://i.imgur.com/sKMMW.png") !important;
    background-position:0 !important;
}

/* new collapse/expand picture icons */
.expando-button.image.expanded, .expando-button.image.expanded:hover {
   background-image:url("http://i.imgur.com/sV8g2.png") !important;
   background-position:0 !important;
}
.expando-button.image, .expando-button.image:hover, .expando-button.image.collapsed, .expando-button.image.collapsed:hover { 
   background-image:url("http://i.imgur.com/Hj3IT.png") !important;
   background-position:0 !important;
}

span.content { opacity:0 !important; }

/* text posts */
.link .usertext .md {
   background:none !important;
   border:0 !important;
   font-size:15px !important;
}

/* sidebar stuff */
.nub { display:none !important; }
.sidebox.submit .morelink, .sidebox.create .morelink, .sidecontentbox .content {
   border:0 !important;
   background:none !important;
}
.sidecontentbox .content { text-align:left !important; }
.sidecontentbox .content a:hover { text-decoration:underline !important; }
.sidebox .spacer { background:none !important; }
a.login-required { background:none !important; }
.infobar { border:0 !important; background:none !important; }

.usertext-body .md a:hover { text-decoration:underline !important; }
.usertext-body .md ul, .usertext-body .md ol { font-size:14px !important; }

/* link info */
.linkinfo { background:none !important; border:0 !important; }

/* search page */
.searchpane { text-align:left !important; }

/* the submit page */
#newlink .tabmenu { text-align:left !important; }
.formtabs-content { border-top:0 !important; }
#link-desc, #text-desc { text-align:left !important; font-size:14px !important; }
.roundfield { background:none !important; text-align:left !important; }

/* wikis (FAQ pages) */
.wiki { text-align:left !important; }
.wikipage { font-size:14px !important; }

/* This undoes subreddit style tweaks that interfere with this skin */
#sr-header-area { background-color:#F0F0F0 !important; border-bottom:1px solid gray !important; }
#header-bottom-right, #header-bottom-right a, .sr-bar a
{ background-color:rgba(0,0,0,0) !important; }

#sr-more-link { background-color:#f0f0f0 !important; }

#RESShortcutsEditContainer { border-left:0 !important; border-right:0 !important; }
#RESShortcutsEditContainer, #RESShortcutsRight, #RESShortcutsLeft, #RESShortcutsTrash, #RESShortcutsAdd
{ background-color:#F0F0F0 !important; }
.user, #userbarToggle { color:gray !important; }
.flairtoggle { background:none !important; }
.tabmenu li a { border-radius:0 !important; }

/* r/trees' style is ridiculously distracting */
#sr-header-area { background-image:none !important; }
#header-bottom-right b { color:gray !important; }
.side .md ol li a, .pagename a, #header, #header-bottom-right, .linkinfo, #newlink li.selected a
{ background:none !important; border:0 !important; }
#siteTable .link:hover { border-radius:0 !important; }
.side blockquote:hover table, .side .md ul li, .linkinfo, #search input[type="text"]
{ background-image:none !important; }
#search input[type="text"] { border-radius:0 !important; width:285px !important; }
#search input, #search textarea, #search keygen, #search select, #search button, #search isindex
{ text-align:left !important; }
.side .md ul li { border:none !important; }

/* Yes, this is necessary */
.comment,
.comment .comment,
.comment .comment .comment,
.comment .comment .comment .comment,
.comment .comment .comment .comment .comment,
.comment .comment .comment .comment .comment .comment,
.comment .comment .comment .comment .comment .comment .comment
{ background:none !important; }

/* AdviceAnimals and F7U12 are run by 10-year-olds who know CSS */
.titlebox .redditname a { background:none !important; }
.titlebox .redditname a, .titlebox .redditname a:hover { height:25px !important; }
.titlebox .redditname a:hover { text-decoration:underline !important; }

/* Different subreddits use different HTML elements for "alerts",
 and then use CSS to put those alerts at the top of the page, and
 style them accordingly */
.titlebox .usertext-body .md ol li a {
   position:absolute !important;
   background:none !important;
   border:0 !important;
   border-radius:0 !important;
} 
body > .content:before { display:none !important; }
.side .md ol li a { display:none !important; }

/* visited links - surprised I haven't put this in yet */
.thing .title.loggedin.click, .thing .title.click,
.thing .title:visited { color:#aaa !important; }

/* ======== DON'T FORGET THIS ========= */
.promotedlink, #ad-frame { display:none !important; }
.side { width:295px !important; }
#search input[type="text"] { width:280px !important; }
#ad_main { display:none !important; }

/* subreddits page */
.subreddit .usertext .md { border-radius:0 !important; }
.fancy-toggle-button .add { background:none !important; }
.REStoggle.RESDashboardToggle { display:none !important; }

.sponsorshipbox { display:none !important; }

/* go away "share" button */
span.share-button { display:none !important; }

.nsfw-stamp acronym { border:0 !important; font-family:"Arial" !important; font-size:9pt !important; font-weight:bold !important; }
.tagline time.edited-timestamp { font-size:9pt !important; }

.comment { border:1px solid #ddd !important; padding-left:3px !important; padding-top:3px !important; margin-top:5px !important; margin-bottom:5px !important; background-color:#f5f5f5 !important; }

.comment .score, .comment .collapsed a.author { font-size:9pt !important; }
.comment .collapsed { font-size:9pt !important; font-style:none !important; padding-left:16px !important; font-style:normal !important; }
.comment .child { border-left:0 !important; margin-left:5px !important; }

.goldvertisement { display:none !important; }

/* special users */
.userattrs { display:none !important; }
a.author { font-weight:bold !important; }

.moderator, .moderator:hover { color:#12aa00 !important; }
.admin, .admin:hover { color:#aa1200 !important; }
.submitter, .submitter:hover { color:#0105ee !important; }

span.flair { background:none !important; border:0 !important; font-size:9pt !important; }

.comment p.parent { font-size:9pt !important; padding-bottom:3px !important; }
.comment a.title { font-size:11pt !important; }

/* wiki */
.md.wiki a:hover { text-decoration:underline !important; }
.wiki-page .pageactions, .wiki-page .pageactions .wikiaction, .wiki-page .pageactions .wikiaction:hover { border-radius:0 !important; background:none !important;}
.wiki-page .pageactions .wikiaction-current { font-weight:bold !important; }

/* input fields */
input, textarea { -moz-appearance:none !important; -webkit-appearance:none !important; background-color:#f9f9f9 !important; font-family:"Arial" !important; }
textarea { font-size:10pt !important; }

/* quotes in the comments */
.usertext-body .md blockquote { border-left:0 !important; padding-left:0 !important; margin-left:0 !important; color:gray !important; }
.usertext-body .md blockquote p:before { content:">" !important; }

span.option { font-size:9pt !important; }
.organic-listing { display:none !important; }
.karma-breakdown { display:none !important; }
.policy-page { padding-left:0px !important; width:80% !important; }
`;
	head.appendChild(style);
}

