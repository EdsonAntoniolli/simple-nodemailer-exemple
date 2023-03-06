const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marcanteluizvitor@gmail.com',
    pass: 'yfegbsgbicwrqgsp'
  }
});

// to: 'andrerroth@hotmail.com',

async function sendEmail() {
  let mailOptions = await {
      from: 'marcanteluizvitor@gmail.com',
      to: 'andrerroth@hotmail.com',
      subject: 'Filie-se ao Partido dos trabalhadores',
      html: 
      `
      <html class="wf-roboto-n4-active wf-roboto-n7-active wf-robotoslab-n7-active wf-raleway-n7-active wf-robotoslab-n4-active wf-playfairdisplaysc-n9-active wf-raleway-n4-active wf-active" lang="pt-BR">
  <head>	<!-- End Google Tag Manager -->

	<meta charset="UTF-8">

	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
	<meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Expires" content="0">

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Partido dos Trabalhadores | Conheça nossa história, filie-se e leia notas oficiais e notícias sobre Lula, política, economia e pandemia, entre outros temas.</title>

	<meta name="apple-mobile-web-app-title" content="PT 13">
	<meta name="application-name" content="PT 13">

	<!-- App store -->
	<meta name="apple-itunes-app" content="app-id=1552275070">
	<meta name="apple-itunes-app" content="app-id=com.mangocorp.apppt">
	<!-- Play Store -->
	<meta name="google-play-app" content="app-id=com.mangocorp.apppt">

	<link rel="apple-touch-icon" sizes="180x180" href="https://pt.org.br/wp-content/themes/pt_2016/icon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="https://pt.org.br/wp-content/themes/pt_2016/icon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="https://pt.org.br/wp-content/themes/pt_2016/icon/favicon-16x16.png">
	<link rel="manifest" href="https://pt.org.br/wp-content/themes/pt_2016/icon/site.webmanifest">
	<link rel="mask-icon" href="https://pt.org.br/wp-content/themes/pt_2016/icon/safari-pinned-tab.svg" color="#e5132c">
	<link rel="shortcut icon" href="https://pt.org.br/wp-content/themes/pt_2016/icon/favicon.ico">
	<meta name="msapplication-TileColor" content="#e5132c">
	<meta name="msapplication-TileImage" content="https://pt.org.br/wp-content/themes/pt_2016/icon/mstile-144x144.png">
	<meta name="msapplication-config" content="https://pt.org.br/wp-content/themes/pt_2016/icon/browserconfig.xml">
	<meta name="theme-color" content="#e5132c">

	<meta name="google-site-verification" content="IMuBAQeoM3Ipr8dtlLsKOvYv2gy6pSkNYb13tSe1CG4">

			<meta name="description" content="Conheça nossa história, filie-se e leia notas oficiais e notícias sobre Lula, política, economia e pandemia, entre outros temas.">
	
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<link rel="shortcut icon" href="https://pt.org.br/wp-content/themes/pt_2016/assets/images/favicon.png" type="image/x-icon">
	<link rel="alternate" type="application/rss+xml" title="Partido dos Trabalhadores RSS Feed" href="https://pt.org.br/feed/">
	<link rel="alternate" type="application/atom+xml" title="Partido dos Trabalhadores Atom Feed" href="https://pt.org.br/feed/atom/">
	<link rel="pingback" href="https://pt.org.br/xmlrpc.php">

	<link rel="dns-prefetch" href="//ajax.googleapis.com">
<link rel="dns-prefetch" href="//www.google.com">
<link rel="dns-prefetch" href="//maxcdn.bootstrapcdn.com">
<link rel="dns-prefetch" href="//s.w.org">
<link rel="stylesheet" id="cf7rt-front-style-css" href="https://pt.org.br/wp-content/plugins/rich-text-editor-field-for-contact-form-7/css/cf7rt-front.css?ver=4.9.18" media="all">
<link rel="stylesheet" id="cookie-law-info-css" href="https://pt.org.br/wp-content/plugins/cookie-law-info/public/css/cookie-law-info-public.css?ver=2.0.1" media="all">
<link rel="stylesheet" id="cookie-law-info-gdpr-css" href="https://pt.org.br/wp-content/plugins/cookie-law-info/public/css/cookie-law-info-gdpr.css?ver=2.0.1" media="all">
<link rel="stylesheet" id="fontawesome-css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=4.7.0" media="all">
<link rel="stylesheet" id="penci_style-css" href="https://pt.org.br/wp-content/themes/pt_2016/style.css?ver=1675723885" media="all">
<link rel="stylesheet" id="main.css-css" href="https://pt.org.br/wp-content/themes/pt_2016/main.css?ver=1675723885" media="all">
<link rel="stylesheet" id="owl-carousel-theme-css" href="https://pt.org.br/wp-content/themes/pt_2016/assets//css/owl.theme.default.css?ver=2.2.1" media="all">
<link rel="stylesheet" id="carousel-css" href="https://pt.org.br/wp-content/themes/pt_2016/assets//css/carousel.css?ver=1.0.0" media="all">

<link rel="https://api.w.org/" href="https://pt.org.br/wp-json/">
<link rel="canonical" href="https://pt.org.br/">
<link rel="shortlink" href="https://pt.org.br/">
<link rel="alternate" type="application/json+oembed" href="https://pt.org.br/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fpt.org.br%2F">
<link rel="alternate" type="text/xml+oembed" href="https://pt.org.br/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fpt.org.br%2F&amp;format=xml">
<style type="text/css">
                    .ctl-bullets-container {
                display: table;
                position: fixed;
                right: 0;
                height: 100%;
                z-index: 1049;
                font-weight: normal;
            }</style>
<meta property="fb:app_id" content="477563158921841">
<meta property="fb:pages" content="105821366170914">
<meta property="og:title" content="Partido dos Trabalhadores">
<meta property="og:description" content="">
<meta property="og:url" content="https://pt.org.br/">
<meta property="og:image" content="https://pt.org.br/wp-content/uploads/2022/08/partido-dos-trabalhadores.png">
<meta property="og:site_name" content="Partido dos Trabalhadores">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@ptbrasil">
<meta name="twitter:title" content="Partido dos Trabalhadores">
<meta name="twitter:description" content="">
<meta name="twitter:image" content="https://pt.org.br/wp-content/uploads/2022/08/partido-dos-trabalhadores.png">
      <meta name="onesignal" content="wordpress-plugin">
          <link rel="manifest" href="https://pt.org.br/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/manifest.json.php?gcm_sender_id=">
    

<link rel="icon" href="https://pt.org.br/wp-content/uploads/2018/03/cropped-pt-logo.png" sizes="32x32">
<link rel="icon" href="https://pt.org.br/wp-content/uploads/2018/03/cropped-pt-logo.png" sizes="192x192">
<link rel="apple-touch-icon-precomposed" href="https://pt.org.br/wp-content/uploads/2018/03/cropped-pt-logo.png">
<meta name="msapplication-TileImage" content="https://pt.org.br/wp-content/uploads/2018/03/cropped-pt-logo.png">

<!--Plugin WP Missed Schedule Active - PATCH - Secured with Genuine Authenticity KeyTag-->

<!-- This site is patched against a big problem not solved since WordPress 2.5 to date -->

	<!-- W3TC-include-css -->

	<!--[if lt IE 9]>
	<link rel="stylesheet" type="text/css" href="https://pt.org.br/wp-content/themes/pt_2016/assets/css/ie.css">
	<![endif]-->

	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;700&amp;family=Roboto:wght@300;400;500;700&amp;display=swap" rel="stylesheet">
	<!-- TODO: DISABLE to production -->
	<!-- <link rel="stylesheet" type="text/css" href="https://pt.org.br/wp-content/themes/pt_2016/main.css"> -->
	<!-- TODO: ENABLE to production -->
	<!-- <link rel="stylesheet" type="text/css" href="https://pt.org.br/wp-content/themes/pt_2016/main.min.css"> --><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700%7CRoboto+Slab:regular,700%7CPlayfair+Display+SC:900%7CRaleway:400,700" media="all">
	

</style><style type="text/css">/*===============================
=            Choices            =
===============================*/
.choices {
    position: relative;
  }

  .rd-choices {
    margin-bottom: 24px;
    font-size: 16px;
    background-color: #FFF;
    height: 38px;
  }

  [class^="rdstation-popup-position"]:not(.floating-button) .choices {
    height: 45px;
  }

  .choices:focus {
    outline: none;
  }

  .choices:last-child {
    margin-bottom: 0;
  }

  .choices.rd-is-disabled .rd-choices__inner,
  .choices.rd-is-disabled .rd-choices__input {
    background-color: #EAEAEA;
    cursor: not-allowed;
    user-select: none;
  }

  .choices.rd-is-disabled .rd-choices__item {
    cursor: not-allowed;
  }

  .choices[data-type*="select-one"] {
    cursor: pointer;
  }

  .choices[data-type*="select-one"] .rd-choices__inner {
    padding-bottom: 7.5px;
  }

  .choices[data-type*="select-one"] .rd-choices__input {
    display: block;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #DDDDDD;
    background-color: #FFFFFF;
    margin: 0;
  }

  .choices[data-type*="select-one"] .rd-choices__button {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);
    padding: 0;
    background-size: 8px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -10px;
    margin-right: 25px;
    height: 20px;
    width: 20px;
    border-radius: 10em;
    opacity: .5;
  }

  .choices[data-type*="select-one"] .rd-choices__button:hover, .choices[data-type*="select-one"] .rd-choices__button:focus {
    opacity: 1;
  }

  .choices[data-type*="select-one"] .rd-choices__button:focus {
    box-shadow: 0px 0px 0px 2px #00BCD4;
  }

  .choices[data-type*="select-one"]:after {
    content: "";
    height: 0;
    width: 0;
    border-style: solid;
    border-color: #333333 transparent transparent transparent;
    border-width: 5px;
    position: absolute;
    right: 11.5px;
    top: 50%;
    margin-top: -2.5px;
    pointer-events: none;
  }

  .choices[data-type*="select-one"].rd-is-open:after {
    border-color: transparent transparent #333333 transparent;
    margin-top: -7.5px;
  }

  .choices[data-type*="select-one"][dir="rtl"]:after {
    left: 11.5px;
    right: auto;
  }

  .choices[data-type*="select-one"][dir="rtl"] .rd-choices__button {
    right: auto;
    left: 0;
    margin-left: 25px;
    margin-right: 0;
  }

  .choices[data-type*="select-multiple"] .rd-choices__inner,
  .choices[data-type*="text"] .rd-choices__inner {
    cursor: text;
  }

  .choices[data-type*="select-multiple"] .rd-choices__button,
  .choices[data-type*="text"] .rd-choices__button {
    position: relative;
    display: inline-block;
    margin-top: 0;
    margin-right: -4px;
    margin-bottom: 0;
    margin-left: 8px;
    padding-left: 16px;
    border-left: 1px solid #008fa1;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);
    background-size: 8px;
    width: 8px;
    line-height: 1;
    opacity: .75;
    border-radius: 0;
  }

  .choices[data-type*="select-multiple"] .rd-choices__button:hover, .choices[data-type*="select-multiple"] .rd-choices__button:focus,
  .choices[data-type*="text"] .rd-choices__button:hover,
  .choices[data-type*="text"] .rd-choices__button:focus {
    opacity: 1;
  }

  /* .rd-choices__inner {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    background-color: #f9f9f9;
    padding: 7.5px 7.5px 3.75px;
    overflow: hidden;
  } */

  .rd-choices__inner {
    border-radius: 2.5px;
    font-size: 14px;
    min-height: 38px;
    border: 1px solid #5897fb;
  }

  .rd-is-focused .rd-choices__inner,
  .rd-is-open .rd-choices__inner {
    border-color: #5897fb !important;
  }

  .rd-is-open .rd-choices__inner {
    border-radius: 2.5px 2.5px 0 0 !important;
    border-bottom: none !important;
  }

  .rd-is-flipped.rd-is-open .rd-choices__inner {
    border-radius: 0 0 2.5px 2.5px !important;
    border-bottom: 1px solid #5897fb !important;
  }

  .choices__list {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  .rd-choices__list {
    padding:4px !important;
  }

  .rd-choices__list--single {
    display: inline-block;
    padding: 4px 16px 4px 4px;
    width: 100%;
    line-height: 28px !important;
  }

  [class^="rdstation-popup-position"]:not(.floating-button) .rd-choices__list--single {
    line-height: 35px !important;
  }

  [dir="rtl"] .rd-choices__list--single {
    padding-right: 4px;
    padding-left: 16px;
  }

  .rd-choices__list--single .rd-choices__item {
    width: 100%;
  }

  .rd-choices__list--multiple {
    display: inline;
  }

  .rd-choices__list--multiple .rd-choices__item {
    display: inline-block;
    vertical-align: middle;
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 500;
    margin-right: 3.75px;
    margin-bottom: 3.75px;
    background-color: #00BCD4;
    border: 1px solid #00a5bb;
    color: #FFFFFF;
    word-break: break-all;
  }

  .rd-choices__list--multiple .rd-choices__item[data-deletable] {
    padding-right: 5px;
  }

  [dir="rtl"] .rd-choices__list--multiple .rd-choices__item {
    margin-right: 0;
    margin-left: 3.75px;
  }

  .rd-choices__list--multiple .rd-choices__item.rd-is-highlighted {
    background-color: #00a5bb;
    border: 1px solid #008fa1;
  }

  .rd-is-disabled .rd-choices__list--multiple .rd-choices__item {
    background-color: #aaaaaa;
    border: 1px solid #919191;
  }

  .choices__list--dropdown {
    position: absolute;
    width: 100%;
    top: 100%;
    margin-top: -1px;
    overflow: hidden;
    word-break: break-all;
  }

  .rd-choices__list--dropdown {
    display: none;
    z-index: 999999 !important;
    background-color: #FFFFFF;
    border-bottom-left-radius: 2.5px;
    border-bottom-right-radius: 2.5px;
    border-bottom: 1px solid #cacaca !important;
    border-left: 1px solid #cacaca !important;
    border-right: 1px solid #cacaca !important;
  }

  .rd-choices__list--dropdown.rd-is-active {
    display: block;
    border-bottom: 1px solid #5897fb !important;
    border-left: 1px solid #5897fb !important;
    border-right: 1px solid #5897fb !important;
    margin-top: -1px !important;
  }

  .rd-is-open .rd-choices__list--dropdown {
    border-color: #b7b7b7;
  }

  .rd-is-flipped .rd-choices__list--dropdown {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: -1px !important;
    border-radius: .25rem .25rem 0 0;
    border-top: 1px solid #5897fb !important;
    border-bottom: none !important;
  }

  .rd-choices__list--dropdown .rd-choices__list {
    position: relative;
    max-height: 300px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    will-change: scroll-position;
  }

  .rd-choices__list--dropdown .rd-choices__item {
    position: relative;
    padding: 10px;
    font-size: 14px;
    padding: 5px !important;
  }

  [dir="rtl"] .rd-choices__list--dropdown .rd-choices__item {
    text-align: right;
  }

  @media (min-width: 640px) {
    .rd-choices__list--dropdown .rd-choices__item--selectable {
      padding-right: 100px;
    }
    .rd-choices__list--dropdown .rd-choices__item--selectable:after {
      content: attr(data-select-text);
      font-size: 12px;
      opacity: 0;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    [dir="rtl"] .rd-choices__list--dropdown .rd-choices__item--selectable {
      text-align: right;
      padding-left: 100px;
      padding-right: 10px;
    }
    [dir="rtl"] .rd-choices__list--dropdown .rd-choices__item--selectable:after {
      right: auto;
      left: 10px;
    }
  }

  .rd-choices__list--dropdown .rd-choices__item--selectable.rd-is-highlighted {
    background-color: #3875d7 !important;
    color: #fff !important;
  }

  .rd-choices__list--dropdown .rd-choices__item--selectable.rd-is-highlighted:after {
    opacity: .5;
  }

  .rd-choices__item {
    cursor: default;
  }

  .rd-choices__item img {
    width: 26px;
    display: unset;
  }

  .rd-choices__item--selectable {
    cursor: pointer;
  }

  .rd-choices__item--disabled {
    cursor: not-allowed;
    user-select: none;
    opacity: .5;
  }

  .choices__heading {
    font-weight: 600;
    padding: 10px;
  }

  .rd-choices__heading {
    font-size: 12px;
    border-bottom: 1px solid #f7f7f7;
    color: gray;
  }

  .rd-choices__button {
    text-indent: -9999px;
    -webkit-appearance: none;
    appearance: none;
    border: 0;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  .rd-choices__button:focus {
    outline: none;
  }

  .rd-choices__input {
    display: inline-block;
    vertical-align: baseline;
    background-color: #f9f9f9;
    border: 1px solid #aaa !important;
    font-size: 14px;
    margin-bottom: 5px;
    border: 0;
    border-radius: 0;
    max-width: 100%;
    padding: 4px 0 4px 2px;
    margin-top: 6px;
    height:28px !important;
  }

  .rd-choices__input:focus {
    outline: 0;
  }

  [dir="rtl"] .rd-choices__input {
    padding-right: 2px;
    padding-left: 0;
  }

  .rd-choices__placeholder {
    opacity: .5;
  }

  .rd-choices__input.is-hidden,
  .choices[data-type*="select-one"] .rd-choices__input.is-hidden,
  .choices[data-type*="select-multiple"] .rd-choices__input.is-hidden {
    display: none !important;
  }

  /*=====  End of Choices  ======*/
</style>

</head>

<body class="home page-template page-template-page-templates page-template-template-home page-template-page-templatestemplate-home-php page page-id-54632" style="padding-top: 158px;"><div id="octAccess" class="octAccess preventMarker" style="direction: ltr; text-align: left; top: 20%;"><span style="background: url(&quot;//acc.magixite.com/api/v2/p/x/p.png?src=https://pt.org.br&quot;) no-repeat; width: 1px; height: 1px; position: absolute;"></span><a href="javascript:;" class="preventLinkMarker open preventMarker"><span class="preventMarker octIcon octIcon-chair"></span></a><div class="octContainer preventMarker"><a href="javascript:;" class="octClose preventMarker"><span class="preventMarker octIcon octIcon-close"></span></a><ul><li><a class="fontsize octaccess-plus preventLinkMarker" href="javascript:;" title="Aumentar Texto"><span class="preventMarker octIcon octIcon-textp"></span>Aumentar Texto</a></li><li><a class="fontsize octaccess-minus preventLinkMarker" href="javascript:;" title="Reduzir Texto"><span class="preventMarker octIcon octIcon-textm"></span>Reduzir Texto</a></li><li><a class="normalizeFont preventLinkMarker" href="javascript:;" title="Diminuir Texto"><span class="preventMarker octIcon octIcon-readableFont"></span>Diminuir Texto</a></li><li><a class="highlightLinks preventLinkMarker" href="javascript:;" title="Destacar Links"><span class="preventMarker octIcon octIcon-linksHighlight"></span>Destacar Links</a></li><li class="separator"></li><li><a class="grayScale colorManipulate preventLinkMarker" href="javascript:;" title="Tons de Cinza"><span class="preventMarker octIcon octIcon-color"></span>Tons de Cinza</a></li><li><a class="highContrast colorManipulate preventLinkMarker" href="javascript:;" title="Alto Contraste"><span class="preventMarker octIcon octIcon-contrast"></span>Alto Contraste</a></li><li><a class="blackYellow colorManipulate preventLinkMarker" href="javascript:;" title="Preto e Amarelo"><span class="preventMarker octIcon octIcon-blackYellow"></span>Preto e Amarelo</a></li><li class="separator"></li><li><a class="keyboardAccess preventLinkMarker" href="javascript:;" title="Navegar com Teclado"><span class="preventMarker octIcon octIcon-keyboard"></span>Navegar com Teclado</a></li><li><a class="disableAnimations preventLinkMarker" href="javascript:;" title="Parar Animações"><span class="preventMarker octIcon octIcon-motion"></span>Parar Animações</a></li><li><a class="reset preventLinkMarker" href="javascript:;" title="Limpar Configurações"><span class="preventMarker octIcon octIcon-reset"></span>Limpar Configurações</a></li></ul><a href="https://acc.magixite.com" target="_blank" class="octPanel preventMarker" title="Powered By Octa-Code"><span class="preventMarker octIcon octIcon-credit"></span></a></div></div>

	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9QPXDX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->

	<!-- Main header -->
	<header class="main-header">
		<div class="main-header-content">
			<div class="limit">
				<div class="flex vertical-middle">
					<button class="flat-button main-header-button-menu">
						<i class="icon-menu-mobile"></i>
						<span>Menu</span>
					</button>
				</div>

				<h1 class="flex vertical-middle header-logos">					<a href="https://pt.org.br">
						<img alt="PT" class="logo-pt" src="https://pt.org.br/wp-content/themes/pt_2016/assets/images/logos/logo-pt.png" width="96" height="92">
					</a>

					<a href="https://pt.org.br">
						<img alt="Lula presidente" class="logo-lula-presidente" src="https://pt.org.br/wp-content/themes/pt_2016/assets/images/logos/logo-lula-presidente.png" width="245" height="79">
					</a>
					</h1>
					<div class="main-header-login">
						<a href="https://pt.org.br/area-pt/" title="Área PT">Área PT</a>
						<a href="https://pt.org.br/filiacao/" title="Filie-se">Filie-se</a>
					</div>

			</div>
		</div>

		<nav class="main-header-nav" aria-label="main-nav">
			<div class="limit">
				<div class="nav-column">
					<h4 class="nav-title">Menu do site</h4>
					<ol class="nav-list">
						<li><a href="https://pt.org.br/nossa-historia/" class="nav-item-link" title="Partido">Partido</a></li><li><a href="https://pt.org.br/filiacao/" class="nav-item-link" title="Filie-se">Filie-se</a></li><li><a href="https://pt.org.br/noticias/" class="nav-item-link" title="Notícias">Notícias</a></li><li><a href="https://pt.org.br/artigos/" class="nav-item-link" title="Artigos">Artigos</a></li><li><a href="https://pt.org.br/contato/" class="nav-item-link" title="Contato">Contato</a></li><li><a href="http://doe.pt.org.br" class="nav-item-link" title="Doação">Doação</a></li>					</ol>
				</div>

				<div class="nav-column">
					<h4 class="nav-title">Editorias</h4>
					<ol class="nav-list">
						<li><a href="https://pt.org.br/lula/" class="nav-item-link" title="Lula">Lula</a></li><li><a href="https://pt.org.br/economia/" class="nav-item-link" title="Economia">Economia</a></li><li><a href="https://pt.org.br/brasil/" class="nav-item-link" title="Brasil">Brasil</a></li><li><a href="https://pt.org.br/internacional/" class="nav-item-link" title="Internacional">Internacional</a></li><li><a href="https://pt.org.br/saude/" class="nav-item-link" title="Saúde">Saúde</a></li><li><a href="https://pt.org.br/mulheres/" class="nav-item-link" title="Mulheres">Mulheres</a></li><li><a href="https://pt.org.br/educacao/" class="nav-item-link" title="Educação">Educação</a></li><li><a href="https://pt.org.br/direitos-humanos/" class="nav-item-link" title="Direitos Humanos">Direitos Humanos</a></li><li><a href="https://pt.org.br/cultura/" class="nav-item-link" title="Cultura">Cultura</a></li>					</ol>
				</div>

				<div class="nav-column">
					<h4 class="nav-title">Partido</h4>
					<ol class="nav-list">
						<li><a href="https://pt.org.br/nossa-historia/" class="nav-item-link" title="Nossa História">Nossa História</a></li><li><a href="https://pt.org.br/estrutura-partidaria/" class="nav-item-link" title="Estrutura Partidária">Estrutura Partidária</a></li><li><a href="https://pt.org.br/comissao-executiva-nacional/" class="nav-item-link" title="Comissão Executiva Nacional">Comissão Executiva Nacional</a></li><li><a href="https://pt.org.br/diretorio-nacional/" class="nav-item-link" title="Diretório Nacional">Diretório Nacional</a></li><li><a href="https://pt.org.br/secretarias-e-setoriais/" class="nav-item-link" title="Secretarias e Setoriais">Secretarias e Setoriais</a></li><li><a href="https://pt.org.br/diretorios-estaduais/" class="nav-item-link" title="Diretórios Estaduais">Diretórios Estaduais</a></li>					</ol>
				</div>

				<div class="nav-column">
					<h4 class="nav-title">Documentos</h4>
					<ol class="nav-list">
						<li><a href="https://pt.org.br/manifesto-de-fundacao-do-partido-dos-trabalhadores/" class="nav-item-link" title="Manifesto de Fundação do PT">Manifesto de Fundação do PT</a></li><li><a href="https://pt.org.br/carta-de-principios-do-partido-dos-trabalhadores/" class="nav-item-link" title="Carta de Princípios do PT">Carta de Princípios do PT</a></li><li><a href="https://pt.org.br/wp-content/uploads/2018/03/estatuto-pt-2012-versao-final-alterada-junho-2017.pdf" class="nav-item-link" title="Estatuto do PT">Estatuto do PT</a></li><li><a href="https://pt.org.br/tag/notas-oficiais/" class="nav-item-link" title="Notas e Resoluções">Notas e Resoluções</a></li><li><a href="https://pt.org.br/tag/download/" class="nav-item-link" title="Downloads e Materiais de Divulgação">Downloads e Materiais de Divulgação</a></li><li><a href="https://pt.org.br/termos-de-uso-das-redes-sociais-do-partido-dos-trabalhadores/" class="nav-item-link" title="Termo de Uso">Termo de Uso</a></li><li><a href="https://pt.org.br/politica-de-privacidade/" class="nav-item-link" title="Política de Privacidade">Política de Privacidade</a></li>					</ol>
				</div>

				<div class="nav-column">
					<h4 class="nav-title">Comunidade</h4>
					<ol class="nav-list">
						<li><a href="https://pt.org.br/filiacao/" class="nav-item-link" title="Filie-se ao PT">Filie-se ao PT</a></li><li><a href="http://doe.pt.org.br" class="nav-item-link" title="Faça sua doação">Faça sua doação</a></li><li><a href="https://pt.org.br/area-pt" class="nav-item-link" title="Área PT">Área PT</a></li><li><a href="https://pt.org.br/contato/" class="nav-item-link" title="Fale conosco">Fale conosco</a></li>					</ol>
				</div>

				<button class="main-header-close-button">Fechar <i>X</i></button>
			</div>
		</nav>
	</header>

	<main>
		<div class="limit">
			<nav class="secondary-nav hide-down-lg" aria-label="secondary-nav">
				<ol class="secondary-nav-list">
					<li>
						<a href="https://pt.org.br/" title="Home">Home</a>
					</li>

					<li class="open-submenu">
						<a href="#" title="Partido">
							Partido
							<i class="icon-arrow-down"></i>
						</a>

						<ol class="nav-list-submenu">
							<li><a href="https://pt.org.br/nossa-historia/" title="Nossa História">Nossa História</a></li><li><a href="https://pt.org.br/estrutura-partidaria/" title="Estrutura Partidária">Estrutura Partidária</a></li><li><a href="https://pt.org.br/comissao-executiva-nacional/" title="Comissão Executiva Nacional">Comissão Executiva Nacional</a></li><li><a href="https://pt.org.br/diretorio-nacional/" title="Diretório Nacional">Diretório Nacional</a></li><li><a href="https://pt.org.br/secretarias-e-setoriais/" title="Secretarias e Setoriais">Secretarias e Setoriais</a></li><li><a href="https://pt.org.br/diretorios-estaduais/" title="Diretórios Estaduais">Diretórios Estaduais</a></li>						</ol>
					</li>

					<li>
						<a href="https://pt.org.br/filiacao/" title="Filie-se">Filie-se</a>
					</li>

					<li>
						<a href="https://pt.org.br/noticias/" title="Notícias">Notícias</a>
					</li>

					<li class="open-submenu">
						<a href="#" title="Partido">
						Editorias
							<i class="icon-arrow-down"></i>
						</a>

						<ol class="nav-list-submenu">
							<li><a href="https://pt.org.br/lula/" title="Lula">Lula</a></li><li><a href="https://pt.org.br/economia/" title="Economia">Economia</a></li><li><a href="https://pt.org.br/brasil/" title="Brasil">Brasil</a></li><li><a href="https://pt.org.br/internacional/" title="Internacional">Internacional</a></li><li><a href="https://pt.org.br/saude/" title="Saúde">Saúde</a></li><li><a href="https://pt.org.br/mulheres/" title="Mulheres">Mulheres</a></li><li><a href="https://pt.org.br/educacao/" title="Educação">Educação</a></li><li><a href="https://pt.org.br/direitos-humanos/" title="Direitos Humanos">Direitos Humanos</a></li><li><a href="https://pt.org.br/cultura/" title="Cultura">Cultura</a></li>						</ol>
					</li>

					<li>
						<a href="https://pt.org.br/contato/" title="Contato">Contato</a>
					</li>

					<li>
						<a href="https://doe.pt.org.br" target="_blank" title="Doação">Doação</a>
					</li>
				</ol>

				<ul class="secondary-nav-social">
					<li><strong>Siga nossas redes</strong></li>
					<li class="links">
						<a href="https://www.facebook.com/pt.brasil" title="" target="_blank" class="social-icons-red facebook">facebook</a>
						<a href="https://www.instagram.com/ptbrasil/" title="" target="_blank" class="social-icons-red instagram">instagram</a>
						<a href="https://twitter.com/ptbrasil" title="" target="_blank" class="social-icons-red twitter">twitter</a>
						<a href="https://www.youtube.com/user/TVPTBrasil" title="" target="_blank" class="social-icons-red youtube">youtube</a>
						<a href="https://www.flickr.com/photos/partidodostrabalhadores/albums" title="" target="_blank" class="social-icons-red flickr">flickr</a>
					</li>
				</ul>
			</nav>
		</div>

		<div class="limit">
			
    <div>
        <a href="https://pt.org.br/tag/ptnogovernolula/" target="_blank">
                            <img src="https://pt.org.br/wp-content/uploads/2022/12/banner-site-1.png" class="main-banner-desktop">
                    </a>
    </div>
		</div>

		    <div class="limit">
            <div class="news-card-wrapper">
                
                <div class="news-card-feaured-cards">
                        <article class="news-card featured column-reverse">
        <a href="https://pt.org.br/ministerio-do-desenvolvimento-e-combate-a-fome-detalha-novo-bolsa-familia/" class="news-card-link">
            <div class="news-card-content">
                <div class="news-card-heading">
                    <h2 class="news-card-title">Ministério do Desenvolvimento e Combate à Fome detalha novo Bolsa Família</h2>
                </div>

                <p class="news-card-description">Ministro Wellington Dias apresentou nesta sexta-feira, 3, detalhes da reformulação do maior programa de transferência de renda do país, responsável  por tirar o Brasil do Mapa da Fome em 2014</p>
            </div>
        </a>

        <figure class="news-card-figure lg-hide">
                        <img alt="Ministério do Desenvolvimento e Combate à Fome detalha novo Bolsa Família" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/wellington-dias-antoniocruz-agecc82nciabrasil-6-585x390.jpg">
            <!-- <caption class="news-card-caption"></caption> -->
            <strong class="news-card-category" style="background-color: ; ">
                Brasil            </strong>

                    </figure>
    </article>


                    <div>
                    
    <article class="news-card column-reverse news-card-banner" style="background-image: url(https://pt.org.br/wp-content/uploads/2023/03/presidente-lula-e-janja-entraga-mcmv-ricardostuckert-pr-1-585x390.jpeg)">
        <a href="https://pt.org.br/lula-entrega-casas-no-mt-todo-mundo-tem-direito-a-um-teto/" title="Lula entrega casas no MT: “Todo mundo tem direito a um teto”" class="news-card-link">
            <div class="news-card-content">
                <div class="news-card-heading">
                    <h2 class="news-card-title">
                        Lula entrega casas no MT: “Todo mundo tem direito a um teto”                    </h2>
                </div>

                <p class="news-card-description">
                    Presidente entrega moradias do Minha Casa Minha Vida a 1.400 famílias de Rondonópolis. Além de retomar obras paradas, governo vai contratar mais 2 milhões de residências&nbsp;até 2026                </p>
            </div>
        </a>

        <figure class="news-card-figure">
            <a href="https://pt.org.br/lula-entrega-casas-no-mt-todo-mundo-tem-direito-a-um-teto/" title="Lula entrega casas no MT: “Todo mundo tem direito a um teto”">
                <img alt="Lula entrega casas no MT: “Todo mundo tem direito a um teto”" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/presidente-lula-e-janja-entraga-mcmv-ricardostuckert-pr-1-585x390.jpeg">
            </a>

            
            <!-- <caption class="news-card-caption"></caption> -->
                            <div class="news-card-social-white">
                    <a href="" class="social-icons-white facebook" data-pt-share-url="https://pt.org.br/lula-entrega-casas-no-mt-todo-mundo-tem-direito-a-um-teto/" data-pt-share-title="Lula entrega casas no MT: “Todo mundo tem direito a um teto”">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white twitter" data-pt-share-url="https://pt.org.br/lula-entrega-casas-no-mt-todo-mundo-tem-direito-a-um-teto/" data-pt-share-title="Lula entrega casas no MT: “Todo mundo tem direito a um teto”">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white whatsapp" data-pt-share-url="https://pt.org.br/lula-entrega-casas-no-mt-todo-mundo-tem-direito-a-um-teto/" data-pt-share-title="Lula entrega casas no MT: “Todo mundo tem direito a um teto”">Compartilhar no Whatsapp
                    </a>
                </div>
                    </figure>
    </article>
                    </div>

                    <div class="special-news xs-hide md-hide">
                        <div class="special-news-gray-box">
                            <form role="search" method="get" id="searchform" action="https://pt.org.br/" class="special-news-form">
                                <label class="special-news-label">
                                    <i class="icon-red-search"></i>
                                    <input type="search" name="s" placeholder="Busque aqui" id="s">
                                </label>
                            </form>

                            <h4 class="special-news-title-section font-roboto-slab">Matérias Especiais</h4>
                            
<ol class="special-news-list">
            <li class="special-news-list-item">
            <span class="special-news-star"></span>
            <a href="https://pt.org.br/o-terceiro-governo-lula-e-a-retomada-do-projeto-democratico-popular-e-soberano/" class="special-news-item-link" title="Resolução do DN: O terceiro governo Lula e a retomada do projeto democrático, popular e soberano">
                Resolução do DN: O terceiro governo Lula e a retomada do projeto democrático, popular e soberano            </a>
        </li>
            <li class="special-news-list-item">
            <span class="special-news-star"></span>
            <a href="https://pt.org.br/bolsa-familia-voltou-lembre-o-que-o-programa-ja-fez-pelo-brasil/" class="special-news-item-link" title="Bolsa Família voltou: lembre o que o programa já fez pelo Brasil">
                Bolsa Família voltou: lembre o que o programa já fez pelo Brasil            </a>
        </li>
            <li class="special-news-list-item">
            <span class="special-news-star"></span>
            <a href="https://pt.org.br/pt-43-anos-fome-zero-a-revolucao-que-tirou-o-brasil-do-mapa-da-fome/" class="special-news-item-link" title="PT 43 anos: Fome Zero, a revolução que tirou o Brasil do Mapa da Fome">
                PT 43 anos: Fome Zero, a revolução que tirou o Brasil do Mapa da Fome            </a>
        </li>
            <li class="special-news-list-item">
            <span class="special-news-star"></span>
            <a href="https://pt.org.br/tragedia-no-litoral-de-sp-veja-as-principais-acoes-adotadas-pelo-governo-federal/" class="special-news-item-link" title="Tragédia no litoral de SP: Veja as principais ações adotadas pelo Governo Federal">
                Tragédia no litoral de SP: Veja as principais ações adotadas pelo Governo Federal            </a>
        </li>
            <li class="special-news-list-item">
            <span class="special-news-star"></span>
            <a href="https://pt.org.br/31-acoes-que-marcaram-o-primeiro-mes-do-novo-governo-lula/" class="special-news-item-link" title="31 ações que marcaram o primeiro mês do novo governo Lula">
                31 ações que marcaram o primeiro mês do novo governo Lula            </a>
        </li>
    </ol>
                        </div>

                        <div class="special-news-campanha-banner campanha-banner-desk">
                            <a href="https://loja.pt.org.br/?utm_source=site+pt&amp;utm_medium=banner+home&amp;utm_id=Loja+do+PT" target="_blank"><img src="https://pt.org.br/wp-content/uploads/2023/02/13022023_criacao_pt_site_botao_loja-do-pt.png" class="image wp-image-357456  attachment-full size-full" alt="" style="max-width: 100%; height: auto;" width="368" height="96"></a>                        </div>
                    </div>

                </div>

                <div class="special-news lg-hide">
                    <div class="special-news-gray-box">
                        <h4 class="special-news-title-section font-roboto-slab">Matérias Especiais</h4>
                        
<ol class="special-news-list">
            <li class="special-news-list-item">
            <span class="special-news-star"></span>
            <a href="https://pt.org.br/o-terceiro-governo-lula-e-a-retomada-do-projeto-democratico-popular-e-soberano/" class="special-news-item-link" title="Resolução do DN: O terceiro governo Lula e a retomada do projeto democrático, popular e soberano">
                Resolução do DN: O terceiro governo Lula e a retomada do projeto democrático, popular e soberano            </a>
        </li>
            <li class="special-news-list-item">
            <span class="special-news-star"></span>
            <a href="https://pt.org.br/bolsa-familia-voltou-lembre-o-que-o-programa-ja-fez-pelo-brasil/" class="special-news-item-link" title="Bolsa Família voltou: lembre o que o programa já fez pelo Brasil">
                Bolsa Família voltou: lembre o que o programa já fez pelo Brasil            </a>
        </li>
            <li class="special-news-list-item">
            <span class="special-news-star"></span>
            <a href="https://pt.org.br/pt-43-anos-fome-zero-a-revolucao-que-tirou-o-brasil-do-mapa-da-fome/" class="special-news-item-link" title="PT 43 anos: Fome Zero, a revolução que tirou o Brasil do Mapa da Fome">
                PT 43 anos: Fome Zero, a revolução que tirou o Brasil do Mapa da Fome            </a>
        </li>
            <li class="special-news-list-item">
            <span class="special-news-star"></span>
            <a href="https://pt.org.br/tragedia-no-litoral-de-sp-veja-as-principais-acoes-adotadas-pelo-governo-federal/" class="special-news-item-link" title="Tragédia no litoral de SP: Veja as principais ações adotadas pelo Governo Federal">
                Tragédia no litoral de SP: Veja as principais ações adotadas pelo Governo Federal            </a>
        </li>
            <li class="special-news-list-item">
            <span class="special-news-star"></span>
            <a href="https://pt.org.br/31-acoes-que-marcaram-o-primeiro-mes-do-novo-governo-lula/" class="special-news-item-link" title="31 ações que marcaram o primeiro mês do novo governo Lula">
                31 ações que marcaram o primeiro mês do novo governo Lula            </a>
        </li>
    </ol>
                    </div>

                    <div class="special-news-campanha-banner campanha-banner-mobile">
                            <a href="https://loja.pt.org.br/?utm_source=site+pt&amp;utm_medium=banner+home&amp;utm_id=Loja+do+PT" target="_blank"><img src="https://pt.org.br/wp-content/uploads/2023/02/13022023_criacao_pt_site_botao_loja-do-pt.png" class="image wp-image-357456  attachment-full size-full" alt="" style="max-width: 100%; height: auto;" width="368" height="96"></a>                        </div>
                </div>
            </div>

            <!-- <div class="cards-list md-5">
                            </div> -->

            <div class="cards-list md-5">
                
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/lula-a-petrobras-e-um-patrimonio-deste-pais-e-nao-apenas-dos-acionistas/" title="Lula: “A Petrobrás é um patrimônio deste país e não apenas dos acionistas”&nbsp;" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Lula: “A Petrobrás é um patrimônio deste país e não apenas dos acionistas”&nbsp;</h2>
                        <time pubdate="" class="news-card-time">03/03/2023</time>
                    </div>

                    <p class="news-card-description">Em entrevista à Band FM, o presidente Lula defende que a empresa retome os investimentos para garantir a soberania energética do país. E volta a denunciar a absurda política de juros do Banco Central</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/lula-a-petrobras-e-um-patrimonio-deste-pais-e-nao-apenas-dos-acionistas/" data-pt-share-title="Lula: “A Petrobrás é um patrimônio deste país e não apenas dos acionistas”&nbsp;">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/lula-a-petrobras-e-um-patrimonio-deste-pais-e-nao-apenas-dos-acionistas/" data-pt-share-title="Lula: “A Petrobrás é um patrimônio deste país e não apenas dos acionistas”&nbsp;">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/lula-a-petrobras-e-um-patrimonio-deste-pais-e-nao-apenas-dos-acionistas/" data-pt-share-title="Lula: “A Petrobrás é um patrimônio deste país e não apenas dos acionistas”&nbsp;">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/lula-a-petrobras-e-um-patrimonio-deste-pais-e-nao-apenas-dos-acionistas/" title="Lula: “A Petrobrás é um patrimônio deste país e não apenas dos acionistas”&nbsp;">
                    <img alt="Lula: “A Petrobrás é um patrimônio deste país e não apenas dos acionistas”&nbsp;" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/presidente-lula-entrevista-reinaldo-azevedo-ricardostuckert-pr-03-585x390.jpeg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Lula</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/lula-a-petrobras-e-um-patrimonio-deste-pais-e-nao-apenas-dos-acionistas/" data-pt-share-title="Lula: “A Petrobrás é um patrimônio deste país e não apenas dos acionistas”&nbsp;">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/lula-a-petrobras-e-um-patrimonio-deste-pais-e-nao-apenas-dos-acionistas/" data-pt-share-title="Lula: “A Petrobrás é um patrimônio deste país e não apenas dos acionistas”&nbsp;">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/lula-a-petrobras-e-um-patrimonio-deste-pais-e-nao-apenas-dos-acionistas/" data-pt-share-title="Lula: “A Petrobrás é um patrimônio deste país e não apenas dos acionistas”&nbsp;">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/gleisi-o-pt-e-guardiao-do-projeto-que-ganhou-a-eleicao/" title="Gleisi: “O PT é guardião do projeto que ganhou a eleição”" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Gleisi: “O PT é guardião do projeto que ganhou a eleição”</h2>
                        <time pubdate="" class="news-card-time">02/03/2023</time>
                    </div>

                    <p class="news-card-description">Em entrevista ao site Metrópoles, a presidenta do PT defende que o partido seja um contraponto às pressões do mercado para ajudar o governo Lula a alcançar seus objetivos</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/gleisi-o-pt-e-guardiao-do-projeto-que-ganhou-a-eleicao/" data-pt-share-title="Gleisi: “O PT é guardião do projeto que ganhou a eleição”">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/gleisi-o-pt-e-guardiao-do-projeto-que-ganhou-a-eleicao/" data-pt-share-title="Gleisi: “O PT é guardião do projeto que ganhou a eleição”">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/gleisi-o-pt-e-guardiao-do-projeto-que-ganhou-a-eleicao/" data-pt-share-title="Gleisi: “O PT é guardião do projeto que ganhou a eleição”">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/gleisi-o-pt-e-guardiao-do-projeto-que-ganhou-a-eleicao/" title="Gleisi: “O PT é guardião do projeto que ganhou a eleição”">
                    <img alt="Gleisi: “O PT é guardião do projeto que ganhou a eleição”" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/gleisi-entrevista-ao-metropoles-sauloscheffer-1-585x390.jpeg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Notícias do PT</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/gleisi-o-pt-e-guardiao-do-projeto-que-ganhou-a-eleicao/" data-pt-share-title="Gleisi: “O PT é guardião do projeto que ganhou a eleição”">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/gleisi-o-pt-e-guardiao-do-projeto-que-ganhou-a-eleicao/" data-pt-share-title="Gleisi: “O PT é guardião do projeto que ganhou a eleição”">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/gleisi-o-pt-e-guardiao-do-projeto-que-ganhou-a-eleicao/" data-pt-share-title="Gleisi: “O PT é guardião do projeto que ganhou a eleição”">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/marinho-reafirma-valorizacao-do-salario-minimo-e-defesa-do-trabalho-decente/" title="Marinho reafirma valorização de salário mínimo e defesa do trabalho decente" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Marinho reafirma valorização de salário mínimo e defesa do trabalho decente</h2>
                        <time pubdate="" class="news-card-time">03/03/2023</time>
                    </div>

                    <p class="news-card-description">Em entrevista à TvPT, ministro do Trabalho também abordou as medidas do governo na defesa do trabalho formal e no fortalecimento dos sindicatos</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/marinho-reafirma-valorizacao-do-salario-minimo-e-defesa-do-trabalho-decente/" data-pt-share-title="Marinho reafirma valorização de salário mínimo e defesa do trabalho decente">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/marinho-reafirma-valorizacao-do-salario-minimo-e-defesa-do-trabalho-decente/" data-pt-share-title="Marinho reafirma valorização de salário mínimo e defesa do trabalho decente">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/marinho-reafirma-valorizacao-do-salario-minimo-e-defesa-do-trabalho-decente/" data-pt-share-title="Marinho reafirma valorização de salário mínimo e defesa do trabalho decente">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/marinho-reafirma-valorizacao-do-salario-minimo-e-defesa-do-trabalho-decente/" title="Marinho reafirma valorização de salário mínimo e defesa do trabalho decente">
                    <img alt="Marinho reafirma valorização de salário mínimo e defesa do trabalho decente" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/entrevista-ministro-trabalho-luiz-marinho-reproduccca7acc83o-1-585x390.jpg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Economia</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/marinho-reafirma-valorizacao-do-salario-minimo-e-defesa-do-trabalho-decente/" data-pt-share-title="Marinho reafirma valorização de salário mínimo e defesa do trabalho decente">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/marinho-reafirma-valorizacao-do-salario-minimo-e-defesa-do-trabalho-decente/" data-pt-share-title="Marinho reafirma valorização de salário mínimo e defesa do trabalho decente">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/marinho-reafirma-valorizacao-do-salario-minimo-e-defesa-do-trabalho-decente/" data-pt-share-title="Marinho reafirma valorização de salário mínimo e defesa do trabalho decente">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/com-novo-bolsa-familia-governo-lula-convoca-pais-a-enfrentar-a-fome/" title="Com novo Bolsa Família, governo Lula convoca país a enfrentar a fome" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Com novo Bolsa Família, governo Lula convoca país a enfrentar a fome</h2>
                        <time pubdate="" class="news-card-time">02/03/2023</time>
                    </div>

                    <p class="news-card-description">MP que institui o novo programa social foi assinado nesta quinta-feira (2) pelo presidente Lula. O Bolsa Família agora tem benefícios adicionais para famílias com crianças e jovens com menos de 18 anos</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/com-novo-bolsa-familia-governo-lula-convoca-pais-a-enfrentar-a-fome/" data-pt-share-title="Com novo Bolsa Família, governo Lula convoca país a enfrentar a fome">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/com-novo-bolsa-familia-governo-lula-convoca-pais-a-enfrentar-a-fome/" data-pt-share-title="Com novo Bolsa Família, governo Lula convoca país a enfrentar a fome">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/com-novo-bolsa-familia-governo-lula-convoca-pais-a-enfrentar-a-fome/" data-pt-share-title="Com novo Bolsa Família, governo Lula convoca país a enfrentar a fome">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/com-novo-bolsa-familia-governo-lula-convoca-pais-a-enfrentar-a-fome/" title="Com novo Bolsa Família, governo Lula convoca país a enfrentar a fome">
                    <img alt="Com novo Bolsa Família, governo Lula convoca país a enfrentar a fome" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/presidente-lula-cerimocc82nia-assinatura-mp-bolsa-familia-ricardostuckert-pr-13-585x390.jpg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Brasil</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/com-novo-bolsa-familia-governo-lula-convoca-pais-a-enfrentar-a-fome/" data-pt-share-title="Com novo Bolsa Família, governo Lula convoca país a enfrentar a fome">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/com-novo-bolsa-familia-governo-lula-convoca-pais-a-enfrentar-a-fome/" data-pt-share-title="Com novo Bolsa Família, governo Lula convoca país a enfrentar a fome">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/com-novo-bolsa-familia-governo-lula-convoca-pais-a-enfrentar-a-fome/" data-pt-share-title="Com novo Bolsa Família, governo Lula convoca país a enfrentar a fome">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/bolsa-familia-retorna-com-mulheres-e-familias-no-foco-do-programa/" title="Bolsa Família retorna com mulheres e famílias no foco do programa" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Bolsa Família retorna com mulheres e famílias no foco do programa</h2>
                        <time pubdate="" class="news-card-time">03/03/2023</time>
                    </div>

                    <p class="news-card-description">Novo programa assegura que as mulheres seguem como guardiãs para receber o cartão e gerir os recursos do benefício</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/bolsa-familia-retorna-com-mulheres-e-familias-no-foco-do-programa/" data-pt-share-title="Bolsa Família retorna com mulheres e famílias no foco do programa">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/bolsa-familia-retorna-com-mulheres-e-familias-no-foco-do-programa/" data-pt-share-title="Bolsa Família retorna com mulheres e famílias no foco do programa">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/bolsa-familia-retorna-com-mulheres-e-familias-no-foco-do-programa/" data-pt-share-title="Bolsa Família retorna com mulheres e famílias no foco do programa">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/bolsa-familia-retorna-com-mulheres-e-familias-no-foco-do-programa/" title="Bolsa Família retorna com mulheres e famílias no foco do programa">
                    <img alt="Bolsa Família retorna com mulheres e famílias no foco do programa" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/novo_programa_bolsa_familia-lulamaruqes-2-585x390.jpg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Brasil</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/bolsa-familia-retorna-com-mulheres-e-familias-no-foco-do-programa/" data-pt-share-title="Bolsa Família retorna com mulheres e famílias no foco do programa">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/bolsa-familia-retorna-com-mulheres-e-familias-no-foco-do-programa/" data-pt-share-title="Bolsa Família retorna com mulheres e famílias no foco do programa">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/bolsa-familia-retorna-com-mulheres-e-familias-no-foco-do-programa/" data-pt-share-title="Bolsa Família retorna com mulheres e famílias no foco do programa">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/camara-aprova-programa-credito-da-mulher-para-fortalecer-microempreendedoras/" title="Câmara aprova “Programa Crédito da Mulher” para fortalecer microempreendedoras" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Câmara aprova “Programa Crédito da Mulher” para fortalecer microempreendedoras</h2>
                        <time pubdate="" class="news-card-time">03/03/2023</time>
                    </div>

                    <p class="news-card-description">Com voto favorável da bancada do PT,  projeto prevê apoio as mulheres empreendedoras no âmbito das instituições financeiras oficiais federais;  projeto segue para votação no Senado Federal</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/camara-aprova-programa-credito-da-mulher-para-fortalecer-microempreendedoras/" data-pt-share-title="Câmara aprova “Programa Crédito da Mulher” para fortalecer microempreendedoras">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/camara-aprova-programa-credito-da-mulher-para-fortalecer-microempreendedoras/" data-pt-share-title="Câmara aprova “Programa Crédito da Mulher” para fortalecer microempreendedoras">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/camara-aprova-programa-credito-da-mulher-para-fortalecer-microempreendedoras/" data-pt-share-title="Câmara aprova “Programa Crédito da Mulher” para fortalecer microempreendedoras">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/camara-aprova-programa-credito-da-mulher-para-fortalecer-microempreendedoras/" title="Câmara aprova “Programa Crédito da Mulher” para fortalecer microempreendedoras">
                    <img alt="Câmara aprova “Programa Crédito da Mulher” para fortalecer microempreendedoras" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/microempresa-trabalho-mulher-costureiras-agecc82nciabrasil-1-585x390.jpg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Mulheres</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/camara-aprova-programa-credito-da-mulher-para-fortalecer-microempreendedoras/" data-pt-share-title="Câmara aprova “Programa Crédito da Mulher” para fortalecer microempreendedoras">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/camara-aprova-programa-credito-da-mulher-para-fortalecer-microempreendedoras/" data-pt-share-title="Câmara aprova “Programa Crédito da Mulher” para fortalecer microempreendedoras">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/camara-aprova-programa-credito-da-mulher-para-fortalecer-microempreendedoras/" data-pt-share-title="Câmara aprova “Programa Crédito da Mulher” para fortalecer microempreendedoras">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/senadores-festejam-novo-bolsa-familia-vamos-matar-a-fome-do-povo/" title="Senadores festejam novo Bolsa Família: vamos matar a fome do povo" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Senadores festejam novo Bolsa Família: vamos matar a fome do povo</h2>
                        <time pubdate="" class="news-card-time">03/03/2023</time>
                    </div>

                    <p class="news-card-description">Programa relançado na quinta-feira (2) amplia valores e garante pelo menos R$ 142 por pessoa. Cerca de 700 mil pessoas que estavam fora do programa vão passar a ser contempladas</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/senadores-festejam-novo-bolsa-familia-vamos-matar-a-fome-do-povo/" data-pt-share-title="Senadores festejam novo Bolsa Família: vamos matar a fome do povo">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/senadores-festejam-novo-bolsa-familia-vamos-matar-a-fome-do-povo/" data-pt-share-title="Senadores festejam novo Bolsa Família: vamos matar a fome do povo">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/senadores-festejam-novo-bolsa-familia-vamos-matar-a-fome-do-povo/" data-pt-share-title="Senadores festejam novo Bolsa Família: vamos matar a fome do povo">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/senadores-festejam-novo-bolsa-familia-vamos-matar-a-fome-do-povo/" title="Senadores festejam novo Bolsa Família: vamos matar a fome do povo">
                    <img alt="Senadores festejam novo Bolsa Família: vamos matar a fome do povo" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/presidente-lula-cerimocc82nia-assinatura-mp-bolsa-familia-ricardostuckert-pr-14-585x390.jpeg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Brasil</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/senadores-festejam-novo-bolsa-familia-vamos-matar-a-fome-do-povo/" data-pt-share-title="Senadores festejam novo Bolsa Família: vamos matar a fome do povo">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/senadores-festejam-novo-bolsa-familia-vamos-matar-a-fome-do-povo/" data-pt-share-title="Senadores festejam novo Bolsa Família: vamos matar a fome do povo">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/senadores-festejam-novo-bolsa-familia-vamos-matar-a-fome-do-povo/" data-pt-share-title="Senadores festejam novo Bolsa Família: vamos matar a fome do povo">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/bolsa-familia-volta-para-dar-cidadania-aos-brasileiros-afirmam-petistas/" title="Bolsa Família volta para dar cidadania aos brasileiros, afirmam petistas" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Bolsa Família volta para dar cidadania aos brasileiros, afirmam petistas</h2>
                        <time pubdate="" class="news-card-time">03/03/2023</time>
                    </div>

                    <p class="news-card-description">Parlamentares celebraram volta do programa, nesta quinta-feira (2). MP assinada por Lula prevê pagamento de R$ 600 por família em condição de pobreza, além da garantia R$ 150 por criança de até 6 anos</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/bolsa-familia-volta-para-dar-cidadania-aos-brasileiros-afirmam-petistas/" data-pt-share-title="Bolsa Família volta para dar cidadania aos brasileiros, afirmam petistas">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/bolsa-familia-volta-para-dar-cidadania-aos-brasileiros-afirmam-petistas/" data-pt-share-title="Bolsa Família volta para dar cidadania aos brasileiros, afirmam petistas">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/bolsa-familia-volta-para-dar-cidadania-aos-brasileiros-afirmam-petistas/" data-pt-share-title="Bolsa Família volta para dar cidadania aos brasileiros, afirmam petistas">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/bolsa-familia-volta-para-dar-cidadania-aos-brasileiros-afirmam-petistas/" title="Bolsa Família volta para dar cidadania aos brasileiros, afirmam petistas">
                    <img alt="Bolsa Família volta para dar cidadania aos brasileiros, afirmam petistas" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/bolsa-familia-ubirajaramachado-mds-2-585x390.jpeg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Brasil</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/bolsa-familia-volta-para-dar-cidadania-aos-brasileiros-afirmam-petistas/" data-pt-share-title="Bolsa Família volta para dar cidadania aos brasileiros, afirmam petistas">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/bolsa-familia-volta-para-dar-cidadania-aos-brasileiros-afirmam-petistas/" data-pt-share-title="Bolsa Família volta para dar cidadania aos brasileiros, afirmam petistas">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/bolsa-familia-volta-para-dar-cidadania-aos-brasileiros-afirmam-petistas/" data-pt-share-title="Bolsa Família volta para dar cidadania aos brasileiros, afirmam petistas">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/bolsa-familia-historias-de-quem-tem-no-beneficio-um-suporte-indispensavel/" title="Bolsa Família: histórias de quem tem no benefício um suporte indispensável" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Bolsa Família: histórias de quem tem no benefício um suporte indispensável</h2>
                        <time pubdate="" class="news-card-time">02/03/2023</time>
                    </div>

                    <p class="news-card-description">Retomada do programa de transferência de renda do governo Lula simboliza um horizonte especial para mães solos, que passam a ter atenção especial</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/bolsa-familia-historias-de-quem-tem-no-beneficio-um-suporte-indispensavel/" data-pt-share-title="Bolsa Família: histórias de quem tem no benefício um suporte indispensável">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/bolsa-familia-historias-de-quem-tem-no-beneficio-um-suporte-indispensavel/" data-pt-share-title="Bolsa Família: histórias de quem tem no benefício um suporte indispensável">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/bolsa-familia-historias-de-quem-tem-no-beneficio-um-suporte-indispensavel/" data-pt-share-title="Bolsa Família: histórias de quem tem no benefício um suporte indispensável">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/bolsa-familia-historias-de-quem-tem-no-beneficio-um-suporte-indispensavel/" title="Bolsa Família: histórias de quem tem no benefício um suporte indispensável">
                    <img alt="Bolsa Família: histórias de quem tem no benefício um suporte indispensável" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/personagens-bolsa-familia-arquivopessoal-1-585x390.jpeg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Brasil</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/bolsa-familia-historias-de-quem-tem-no-beneficio-um-suporte-indispensavel/" data-pt-share-title="Bolsa Família: histórias de quem tem no benefício um suporte indispensável">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/bolsa-familia-historias-de-quem-tem-no-beneficio-um-suporte-indispensavel/" data-pt-share-title="Bolsa Família: histórias de quem tem no benefício um suporte indispensável">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/bolsa-familia-historias-de-quem-tem-no-beneficio-um-suporte-indispensavel/" data-pt-share-title="Bolsa Família: histórias de quem tem no benefício um suporte indispensável">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/petrobras-dividendos-recordes-a-acionistas-inviabilizam-investimentos-no-pais/" title="Petrobrás: dividendos recordes a acionistas inviabilizam investimentos no país" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Petrobrás: dividendos recordes a acionistas inviabilizam investimentos no país</h2>
                        <time pubdate="" class="news-card-time">02/03/2023</time>
                    </div>

                    <p class="news-card-description">"A Petrobrás entregou em dividendos mais de R$ 215 bilhões, quando ela deveria ter investido metade no crescimento econômico desse país, na indústria brasileira, na indústria naval”, defende Lula</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/petrobras-dividendos-recordes-a-acionistas-inviabilizam-investimentos-no-pais/" data-pt-share-title="Petrobrás: dividendos recordes a acionistas inviabilizam investimentos no país">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/petrobras-dividendos-recordes-a-acionistas-inviabilizam-investimentos-no-pais/" data-pt-share-title="Petrobrás: dividendos recordes a acionistas inviabilizam investimentos no país">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/petrobras-dividendos-recordes-a-acionistas-inviabilizam-investimentos-no-pais/" data-pt-share-title="Petrobrás: dividendos recordes a acionistas inviabilizam investimentos no país">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/petrobras-dividendos-recordes-a-acionistas-inviabilizam-investimentos-no-pais/" title="Petrobrás: dividendos recordes a acionistas inviabilizam investimentos no país">
                    <img alt="Petrobrás: dividendos recordes a acionistas inviabilizam investimentos no país" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/petrobras-fachada-tacc82niaregocc82-agecc82nciabrasil-1-585x390.jpeg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Economia</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/petrobras-dividendos-recordes-a-acionistas-inviabilizam-investimentos-no-pais/" data-pt-share-title="Petrobrás: dividendos recordes a acionistas inviabilizam investimentos no país">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/petrobras-dividendos-recordes-a-acionistas-inviabilizam-investimentos-no-pais/" data-pt-share-title="Petrobrás: dividendos recordes a acionistas inviabilizam investimentos no país">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/petrobras-dividendos-recordes-a-acionistas-inviabilizam-investimentos-no-pais/" data-pt-share-title="Petrobrás: dividendos recordes a acionistas inviabilizam investimentos no país">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/11-ministras-iniciam-celebracoes-do-dia-internacional-da-mulher-em-marco/" title="11 ministras iniciam celebrações do Dia Internacional da Mulher em março" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">11 ministras iniciam celebrações do Dia Internacional da Mulher em março</h2>
                        <time pubdate="" class="news-card-time">01/03/2023</time>
                    </div>

                    <p class="news-card-description">Com slogan “O governo que respeita todas as mulheres”, encontro nesta quarta-feira, 1º, marca importância da representatividade feminina no governo Lula e atividades em torno da data festejada em 8 de março</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/11-ministras-iniciam-celebracoes-do-dia-internacional-da-mulher-em-marco/" data-pt-share-title="11 ministras iniciam celebrações do Dia Internacional da Mulher em março">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/11-ministras-iniciam-celebracoes-do-dia-internacional-da-mulher-em-marco/" data-pt-share-title="11 ministras iniciam celebrações do Dia Internacional da Mulher em março">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/11-ministras-iniciam-celebracoes-do-dia-internacional-da-mulher-em-marco/" data-pt-share-title="11 ministras iniciam celebrações do Dia Internacional da Mulher em março">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/11-ministras-iniciam-celebracoes-do-dia-internacional-da-mulher-em-marco/" title="11 ministras iniciam celebrações do Dia Internacional da Mulher em março">
                    <img alt="11 ministras iniciam celebrações do Dia Internacional da Mulher em março" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/03/reuniacc83o-mulheres-8m-ricardostuckert-pr-1-585x390.jpg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Brasil</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/11-ministras-iniciam-celebracoes-do-dia-internacional-da-mulher-em-marco/" data-pt-share-title="11 ministras iniciam celebrações do Dia Internacional da Mulher em março">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/11-ministras-iniciam-celebracoes-do-dia-internacional-da-mulher-em-marco/" data-pt-share-title="11 ministras iniciam celebrações do Dia Internacional da Mulher em março">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/11-ministras-iniciam-celebracoes-do-dia-internacional-da-mulher-em-marco/" data-pt-share-title="11 ministras iniciam celebrações do Dia Internacional da Mulher em março">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/8m-mulheres-do-pt-preparam-os-atos-da-reconstrucao-do-pais-por-democracia-igualdade-e-justica-social/" title="8M: Mulheres do PT preparam os atos da reconstrução do país por democracia, igualdade e justiça social" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">8M: Mulheres do PT preparam os atos da reconstrução do país por democracia, igualdade e justiça social</h2>
                        <time pubdate="" class="news-card-time">27/02/2023</time>
                    </div>

                    <p class="news-card-description">Vencer a fome, a pobreza e as desigualdades é o lema das mulheres que irão para as ruas neste mês de março</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/8m-mulheres-do-pt-preparam-os-atos-da-reconstrucao-do-pais-por-democracia-igualdade-e-justica-social/" data-pt-share-title="8M: Mulheres do PT preparam os atos da reconstrução do país por democracia, igualdade e justiça social">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/8m-mulheres-do-pt-preparam-os-atos-da-reconstrucao-do-pais-por-democracia-igualdade-e-justica-social/" data-pt-share-title="8M: Mulheres do PT preparam os atos da reconstrução do país por democracia, igualdade e justiça social">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/8m-mulheres-do-pt-preparam-os-atos-da-reconstrucao-do-pais-por-democracia-igualdade-e-justica-social/" data-pt-share-title="8M: Mulheres do PT preparam os atos da reconstrução do país por democracia, igualdade e justiça social">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/8m-mulheres-do-pt-preparam-os-atos-da-reconstrucao-do-pais-por-democracia-igualdade-e-justica-social/" title="8M: Mulheres do PT preparam os atos da reconstrução do país por democracia, igualdade e justiça social">
                    <img alt="8M: Mulheres do PT preparam os atos da reconstrução do país por democracia, igualdade e justiça social" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/02/capa-site-8m-2023-capa_site-585x390.png">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Mulheres</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/8m-mulheres-do-pt-preparam-os-atos-da-reconstrucao-do-pais-por-democracia-igualdade-e-justica-social/" data-pt-share-title="8M: Mulheres do PT preparam os atos da reconstrução do país por democracia, igualdade e justiça social">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/8m-mulheres-do-pt-preparam-os-atos-da-reconstrucao-do-pais-por-democracia-igualdade-e-justica-social/" data-pt-share-title="8M: Mulheres do PT preparam os atos da reconstrução do país por democracia, igualdade e justiça social">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/8m-mulheres-do-pt-preparam-os-atos-da-reconstrucao-do-pais-por-democracia-igualdade-e-justica-social/" data-pt-share-title="8M: Mulheres do PT preparam os atos da reconstrução do país por democracia, igualdade e justiça social">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/kits-da-posse-de-lula-e-do-aniversario-do-pt-ainda-podem-ser-adquiridos/" title="Kits da posse de Lula e do aniversário do PT ainda podem ser adquiridos" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">Kits da posse de Lula e do aniversário do PT ainda podem ser adquiridos</h2>
                        <time pubdate="" class="news-card-time">28/02/2023</time>
                    </div>

                    <p class="news-card-description">Cada kit é vendido a R$ 100, e pode ser pedido através do zap - (11) 9 92628585. Veja na matéria como garantir o seu</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/kits-da-posse-de-lula-e-do-aniversario-do-pt-ainda-podem-ser-adquiridos/" data-pt-share-title="Kits da posse de Lula e do aniversário do PT ainda podem ser adquiridos">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/kits-da-posse-de-lula-e-do-aniversario-do-pt-ainda-podem-ser-adquiridos/" data-pt-share-title="Kits da posse de Lula e do aniversário do PT ainda podem ser adquiridos">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/kits-da-posse-de-lula-e-do-aniversario-do-pt-ainda-podem-ser-adquiridos/" data-pt-share-title="Kits da posse de Lula e do aniversário do PT ainda podem ser adquiridos">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/kits-da-posse-de-lula-e-do-aniversario-do-pt-ainda-podem-ser-adquiridos/" title="Kits da posse de Lula e do aniversário do PT ainda podem ser adquiridos">
                    <img alt="Kits da posse de Lula e do aniversário do PT ainda podem ser adquiridos" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/02/foto_kitpt-585x390.jpg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Notícias do PT</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/kits-da-posse-de-lula-e-do-aniversario-do-pt-ainda-podem-ser-adquiridos/" data-pt-share-title="Kits da posse de Lula e do aniversário do PT ainda podem ser adquiridos">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/kits-da-posse-de-lula-e-do-aniversario-do-pt-ainda-podem-ser-adquiridos/" data-pt-share-title="Kits da posse de Lula e do aniversário do PT ainda podem ser adquiridos">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/kits-da-posse-de-lula-e-do-aniversario-do-pt-ainda-podem-ser-adquiridos/" data-pt-share-title="Kits da posse de Lula e do aniversário do PT ainda podem ser adquiridos">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
        <article class="news-card column-reverse">
            <div class="news-card-content">
                    <a href="https://pt.org.br/o-pt-agora-tem-sua-loja-on-line-de-produtos-oficiais/" title="O PT agora tem sua loja on-line de produtos oficiais!" class="news-card-link">
                    <div class="news-card-heading">
                        <h2 class="news-card-title">O PT agora tem sua loja on-line de produtos oficiais!</h2>
                        <time pubdate="" class="news-card-time">15/02/2023</time>
                    </div>

                    <p class="news-card-description">A Loja do PT atende a um desejo antigo da militância e ajuda no financiamento do partido mais amado do Brasil</p>
                </a>
                <ul class="secondary-nav-social xs-hide md-hide">
                    <li>
                        <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/o-pt-agora-tem-sua-loja-on-line-de-produtos-oficiais/" data-pt-share-title="O PT agora tem sua loja on-line de produtos oficiais!">facebook</a>
                        <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/o-pt-agora-tem-sua-loja-on-line-de-produtos-oficiais/" data-pt-share-title="O PT agora tem sua loja on-line de produtos oficiais!">twitter</a>
                        <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/o-pt-agora-tem-sua-loja-on-line-de-produtos-oficiais/" data-pt-share-title="O PT agora tem sua loja on-line de produtos oficiais!">whatsapp</a>
                    </li>
                </ul>
            </div>

            <figure class="news-card-figure">
                                <a href="https://pt.org.br/o-pt-agora-tem-sua-loja-on-line-de-produtos-oficiais/" title="O PT agora tem sua loja on-line de produtos oficiais!">
                    <img alt="O PT agora tem sua loja on-line de produtos oficiais!" class="news-card-image" src="https://pt.org.br/wp-content/uploads/2023/02/chegou-loja-do-pt-1-585x390.jpeg">
                </a>
                <!-- <caption class="news-card-caption"></caption> -->
                <strong class="news-card-category">Notícias do PT</strong>

                <div class="news-card-social-white lg-hide">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://pt.org.br/o-pt-agora-tem-sua-loja-on-line-de-produtos-oficiais/" data-pt-share-title="O PT agora tem sua loja on-line de produtos oficiais!">Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://pt.org.br/o-pt-agora-tem-sua-loja-on-line-de-produtos-oficiais/" data-pt-share-title="O PT agora tem sua loja on-line de produtos oficiais!">Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://pt.org.br/o-pt-agora-tem-sua-loja-on-line-de-produtos-oficiais/" data-pt-share-title="O PT agora tem sua loja on-line de produtos oficiais!">Compartilhar no Whatsapp
                    </a>
                </div>
            </figure>
        </article>
            </div>

            <!-- Button more -->
            <p class="text-center button-wrapper">
                <a href="https://pt.org.br/noticias/" title="Mais notícias" class="link-button red">Mais notícias</a>
            </p>

            <!-- carousel banners -->
            <div class="carousel-banners owl-carousel owl-loaded owl-drag">
                
        
        
        
        
        
        
        
        
        
        
        
            <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-2117px, 0px, 0px); transition: all 0.25s ease 0s; width: 4428px;"><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_tv_elas-por-elas.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="https://radio.pt.org.br" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_radio-pt.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="https://pt.org.br/wp-content/uploads/2018/03/pt_hq_lula.pdf" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_gibi-lula.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="https://api.casa13.pt.org.br/storage/downloads/m44Jec8w1QrLFiMbVayyfNQF3VD6K2Ai2jgNmIRw.pdf" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/whatsapp-image-2022-08-25-at-13-45-35.jpeg" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="https://pt.org.br/filiacao/" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_filie-se.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="https://api.casa13.pt.org.br/storage/downloads/mW5qlQSHLJcTVADyW7ioNhPVBmOKfyjYeo2fR03T.pdf" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_combate_a_violencia.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item" style="width: 182.5px; margin-right: 10px;"><a href="https://casa13.pt.org.br/" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_casa13.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item" style="width: 182.5px; margin-right: 10px;"><a href="https://comitepopular.com.br/" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_comite_de_luta.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item" style="width: 182.5px; margin-right: 10px;"><a href="https://pt.org.br/wp-content/uploads/2018/03/revista-rede-povo.pdf" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2023/02/13022023_criacao_pt_site_botao_revista-rede-povo.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item" style="width: 182.5px; margin-right: 10px;"><a href="https://radio.pt.org.br/podcasts" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_ptcast.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item" style="width: 182.5px; margin-right: 10px;"><a href="https://www.youtube.com/c/ptbrasil" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/whatsapp-image-2022-08-25-at-13-29-41.jpeg" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item active" style="width: 182.5px; margin-right: 10px;"><a href="" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_tv_elas-por-elas.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item active" style="width: 182.5px; margin-right: 10px;"><a href="https://radio.pt.org.br" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_radio-pt.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item active" style="width: 182.5px; margin-right: 10px;"><a href="https://pt.org.br/wp-content/uploads/2018/03/pt_hq_lula.pdf" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_gibi-lula.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item active" style="width: 182.5px; margin-right: 10px;"><a href="https://api.casa13.pt.org.br/storage/downloads/m44Jec8w1QrLFiMbVayyfNQF3VD6K2Ai2jgNmIRw.pdf" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/whatsapp-image-2022-08-25-at-13-45-35.jpeg" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item active" style="width: 182.5px; margin-right: 10px;"><a href="https://pt.org.br/filiacao/" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_filie-se.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item active" style="width: 182.5px; margin-right: 10px;"><a href="https://api.casa13.pt.org.br/storage/downloads/mW5qlQSHLJcTVADyW7ioNhPVBmOKfyjYeo2fR03T.pdf" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_combate_a_violencia.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="https://casa13.pt.org.br/" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_casa13.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="https://comitepopular.com.br/" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_comite_de_luta.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="https://pt.org.br/wp-content/uploads/2018/03/revista-rede-povo.pdf" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2023/02/13022023_criacao_pt_site_botao_revista-rede-povo.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="https://radio.pt.org.br/podcasts" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_ptcast.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="https://www.youtube.com/c/ptbrasil" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/whatsapp-image-2022-08-25-at-13-29-41.jpeg" alt="" class="carousel-item-image" width="165" height="143">
        </a></div><div class="owl-item cloned" style="width: 182.5px; margin-right: 10px;"><a href="" title="" class="carousel-item-link" target="_blank">
            <img src="https://pt.org.br/wp-content/uploads/2022/08/banner_tv_elas-por-elas.png" alt="" class="carousel-item-image" width="165" height="143">
        </a></div></div></div><div class="owl-nav disabled"><div class="owl-prev">prev</div><div class="owl-next">next</div></div><div class="owl-dots"><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div></div></div>

            <!-- Banners: RECEBA, chama no zap -->
            <div class="banner-news-whats">
                
        <a href="https://contato.pt.org.br/cadastro" target="_blank" class="banner-boletim banner-boletim-desktop">
            <img src="https://pt.org.br/wp-content/uploads/2018/03/b-receba.png">
        </a>

        <a href="https://contato.pt.org.br/cadastro" target="_blank" class="banner-boletim banner-boletim-mobile">
            <img src="https://pt.org.br/wp-content/uploads/2018/03/group-445.png">
        </a>

                    
        <a href="https://contato.pt.org.br/cadastro" target="_blank" class="banner-chama-zap-desktop">
            <img src="https://pt.org.br/wp-content/uploads/2018/03/b-chama-no-zap.png">
        </a>

        <a href="https://contato.pt.org.br/cadastro" target="_blank" class="banner-chama-zap-mobile">
            <img src="https://pt.org.br/wp-content/uploads/2018/03/b-chama-no-zap-1.png">
        </a>

                </div>
        </div>
    <!-- end div.limit -->

    <article class="video-gallery">
    
<div class="limit">
    <h3 class="video-gallery-heading font-roboto">
        <span>Assista a</span>
        <img src="https://pt.org.br/wp-content/themes/pt_2016/assets/images/logos/logo-tv-pt.png" alt="Logo TV PT">
        <span>
            Em sintonia com o Brasil<br>
            Em sintonia com você
        </span>
    </h3>

    <div class="video-gallery-main">
        <div class="video-gallery-content">
            <!-- YT player -->
            <div class="video-gallery-content-video">
                <iframe src="https://www.youtube.com/embed/-gQXCeUfk3g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
            </div>

            <div class="video-gallery-content-details">
                <h3 class="video-gallery-content-title">
                    Ao vivo 03/03 | Minha Casa Minha Vida: Lula entrega casas em Rondonópolis (MT)                </h3>
                <div class="video-gallery-content-social">
                    <a href="" class="social-icons-white w-25 facebook" data-pt-share-url="https://youtu.be/-gQXCeUfk3g?list=TLPQMDMwMzIwMjPugEPUutm7BA" data-pt-share-title="Ao vivo 03/03 | Minha Casa Minha Vida: Lula entrega casas em Rondonópolis (MT)">
                        Compartilhar no Facebook
                    </a>
                    <a href="" class="social-icons-white w-25 twitter" data-pt-share-url="https://youtu.be/-gQXCeUfk3g?list=TLPQMDMwMzIwMjPugEPUutm7BA" data-pt-share-title="Ao vivo 03/03 | Minha Casa Minha Vida: Lula entrega casas em Rondonópolis (MT)">
                        Compartilhar no Twitter
                    </a>
                    <a href="" class="social-icons-white w-25 whatsapp" data-pt-share-url="https://youtu.be/-gQXCeUfk3g?list=TLPQMDMwMzIwMjPugEPUutm7BA" data-pt-share-title="Ao vivo 03/03 | Minha Casa Minha Vida: Lula entrega casas em Rondonópolis (MT)">
                        Compartilhar no Whatsapp
                    </a>
                </div>
            </div>
        </div>
        <div class="video-gallery-related">
            <ul class="video-gallery-list">
                                    <li class="video-gallery-list-item">
                        <h4 class="video-gallery-item-video-heading">
                            Jornal PT Brasil | Deyvid Bacelar e Luiz Marinho: Petrobras, Imposto de Renda e salário mínimo                        </h4>
                        <a href="https://youtu.be/kGwOWVkUQIE" class="video-gallery-item-video-link" target="_blank">
                            <img src="https://img.youtube.com/vi/kGwOWVkUQIE/mqdefault.jpg" alt="" width="277">
                        </a>
                    </li>
                
                                    <li class="video-gallery-list-item">
                        <h4 class="video-gallery-item-video-heading">
                            Ao vivo 02/03 | Lançamento do novo Programa Bolsa Família                        </h4>
                        <a href="https://www.youtube.com/watch?v=faN2X8pTht4" class="video-gallery-item-video-link" target="_blank">
                            <img src="https://img.youtube.com/vi/faN2X8pTht4/mqdefault.jpg" alt="" width="277">
                        </a>
                    </li>
                            </ul>

            <p class="text-center">
                <a href="https://www.youtube.com/user/TVPTBrasil?view_as=subscriber&amp;sub_confirmation=1" target="_blank" class="link-button-outlined">
                    Assine a TVPT no Youtube
                </a>
            </p>
        </div>
    </div>
</div>
    </article>

    <div class="limit">
        <div class="flex flex-wrap space-between">
            <section class="editorias">
                <h2 class="editorias-title">Editorias</h2>

                
<div class="editorias-cards-links-list lg-hide">
                <!-- Card Category -->
            <a href="https://pt.org.br/artigos" title="Paradoxo da exportação, por Marcio Pochmann" class="editorias-card-category" style="background-color: #9E9E9E">
                Artigos            </a>
            <!-- end Card Category -->
                <!-- Card Category -->
            <a href="https://pt.org.br/brasil" title="Artigo: O Partido dos Trabalhadores comemora 43 anos de lutas e conquistas, por José Guimarães" class="editorias-card-category" style="background-color: #00A62D">
                Brasil            </a>
            <!-- end Card Category -->
                <!-- Card Category -->
            <a href="https://pt.org.br/artigos" title="Máquina de destruição, por Zeca Dirceu" class="editorias-card-category" style="background-color: #9E9E9E">
                Artigos            </a>
            <!-- end Card Category -->
                <!-- Card Category -->
            <a href="https://pt.org.br/brasil" title="Yanomami sob ataque, destaca a revista Focus Brasil desta semana" class="editorias-card-category" style="background-color: #00A62D">
                Brasil            </a>
            <!-- end Card Category -->
                <!-- Card Category -->
            <a href="https://pt.org.br/brasil" title="Gleisi: manter mobilização para garantir democracia, reconstrução do país e direitos do povo" class="editorias-card-category" style="background-color: #00A62D">
                Brasil            </a>
            <!-- end Card Category -->
                <!-- Card Category -->
            <a href="https://pt.org.br/brasil" title="Veja a websérie Lula presidente que conta a épica campanha que elegeu Lula" class="editorias-card-category" style="background-color: #00A62D">
                Brasil            </a>
            <!-- end Card Category -->
                <!-- Card Category -->
            <a href="https://pt.org.br/brasil" title="Lula, aos ministros: “Temos de levar o Estado onde o povo mais precisa" class="editorias-card-category" style="background-color: #00A62D">
                Brasil            </a>
            <!-- end Card Category -->
    </div>

<div class="editorias-content xs-hide md-hide" style="position: relative; height: 793.8px;">
                <!-- Card -->
            <article class="editorias-card" style="position: absolute; left: 0px; top: 0px;">
                <a href="https://pt.org.br/paradoxo-da-exportacao-por-marcio-pochmann/" title="Paradoxo da exportação, por Marcio Pochmann" class="editorias-card-link">
                    <h3 class="editorias-card-link-title">Paradoxo da exportação, por Marcio Pochmann</h3>
                    <p class="editorias-card-link-description">A estrutura produtiva manufatureira seria a única capaz de produzir melhores resultados que o extrativismo mineral e vegetal e a agropecuária, argumenta Pochmann </p>
                </a>

                <div class="editorias-card-social">
                    <a href="https://pt.org.br/artigos" title="Paradoxo da exportação, por Marcio Pochmann" class="editorias-card-category" style="background-color: #9E9E9E; color: #fff;">
                        Artigos                    </a>

                    <ul class="secondary-nav-social">
                        <li>
                            <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/paradoxo-da-exportacao-por-marcio-pochmann/" data-pt-share-title="Paradoxo da exportação, por Marcio Pochmann">facebook</a>
                            <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/paradoxo-da-exportacao-por-marcio-pochmann/" data-pt-share-title="Paradoxo da exportação, por Marcio Pochmann">twitter</a>
                            <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/paradoxo-da-exportacao-por-marcio-pochmann/" data-pt-share-title="Paradoxo da exportação, por Marcio Pochmann">whatsapp</a>
                        </li>
                    </ul>
                </div>
            </article>
            <!-- end Card -->
                <!-- Card -->
            <article class="editorias-card" style="position: absolute; left: 255px; top: 0px;">
                <a href="https://pt.org.br/o-partido-dos-trabalhadores-comemora-43-anos-de-lutas-e-conquistas/" title="Artigo: O Partido dos Trabalhadores comemora 43 anos de lutas e conquistas, por José Guimarães" class="editorias-card-link">
                    <h3 class="editorias-card-link-title">Artigo: O Partido dos Trabalhadores comemora 43 anos de lutas e conquistas, por José Guimarães</h3>
                    <p class="editorias-card-link-description">"O PT é movido por desejos de liberdade, justiça, igualdade e democracia", escreve o deputado José Guimarães </p>
                </a>

                <div class="editorias-card-social">
                    <a href="https://pt.org.br/brasil" title="Artigo: O Partido dos Trabalhadores comemora 43 anos de lutas e conquistas, por José Guimarães" class="editorias-card-category" style="background-color: #00A62D; color: #fff;">
                        Brasil                    </a>

                    <ul class="secondary-nav-social">
                        <li>
                            <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/o-partido-dos-trabalhadores-comemora-43-anos-de-lutas-e-conquistas/" data-pt-share-title="Artigo: O Partido dos Trabalhadores comemora 43 anos de lutas e conquistas, por José Guimarães">facebook</a>
                            <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/o-partido-dos-trabalhadores-comemora-43-anos-de-lutas-e-conquistas/" data-pt-share-title="Artigo: O Partido dos Trabalhadores comemora 43 anos de lutas e conquistas, por José Guimarães">twitter</a>
                            <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/o-partido-dos-trabalhadores-comemora-43-anos-de-lutas-e-conquistas/" data-pt-share-title="Artigo: O Partido dos Trabalhadores comemora 43 anos de lutas e conquistas, por José Guimarães">whatsapp</a>
                        </li>
                    </ul>
                </div>
            </article>
            <!-- end Card -->
                <!-- Card -->
            <article class="editorias-card" style="position: absolute; left: 510px; top: 0px;">
                <a href="https://pt.org.br/maquina-de-destruicao-por-zeca-dirceu/" title="Máquina de destruição, por Zeca Dirceu" class="editorias-card-link">
                    <h3 class="editorias-card-link-title">Máquina de destruição, por Zeca Dirceu</h3>
                    <p class="editorias-card-link-description">"O desafio do governo Lula e da frente democrática que o apoia é reconstruir o país depois do rolo compressor de um ex-capitão que disse um dia que sua especialidade era a morte", escreve Dirceu </p>
                </a>

                <div class="editorias-card-social">
                    <a href="https://pt.org.br/artigos" title="Máquina de destruição, por Zeca Dirceu" class="editorias-card-category" style="background-color: #9E9E9E; color: #fff;">
                        Artigos                    </a>

                    <ul class="secondary-nav-social">
                        <li>
                            <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/maquina-de-destruicao-por-zeca-dirceu/" data-pt-share-title="Máquina de destruição, por Zeca Dirceu">facebook</a>
                            <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/maquina-de-destruicao-por-zeca-dirceu/" data-pt-share-title="Máquina de destruição, por Zeca Dirceu">twitter</a>
                            <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/maquina-de-destruicao-por-zeca-dirceu/" data-pt-share-title="Máquina de destruição, por Zeca Dirceu">whatsapp</a>
                        </li>
                    </ul>
                </div>
            </article>
            <!-- end Card -->
                <!-- Card -->
            <article class="editorias-card" style="position: absolute; left: 510px; top: 239px;">
                <a href="https://pt.org.br/yanomami-sob-ataque-destaca-a-revista-focus-brasil-desta-semana/" title="Yanomami sob ataque, destaca a revista Focus Brasil desta semana" class="editorias-card-link">
                    <h3 class="editorias-card-link-title">Yanomami sob ataque, destaca a revista Focus Brasil desta semana</h3>
                    <p class="editorias-card-link-description">Revista da Fundação Perseu Abramo denuncia de garimpo ilegal nas terras do povo Yanomami e traz propostas para combatê-lo; veja o link, baixe e divulgue </p>
                </a>

                <div class="editorias-card-social">
                    <a href="https://pt.org.br/brasil" title="Yanomami sob ataque, destaca a revista Focus Brasil desta semana" class="editorias-card-category" style="background-color: #00A62D; color: #fff;">
                        Brasil                    </a>

                    <ul class="secondary-nav-social">
                        <li>
                            <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/yanomami-sob-ataque-destaca-a-revista-focus-brasil-desta-semana/" data-pt-share-title="Yanomami sob ataque, destaca a revista Focus Brasil desta semana">facebook</a>
                            <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/yanomami-sob-ataque-destaca-a-revista-focus-brasil-desta-semana/" data-pt-share-title="Yanomami sob ataque, destaca a revista Focus Brasil desta semana">twitter</a>
                            <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/yanomami-sob-ataque-destaca-a-revista-focus-brasil-desta-semana/" data-pt-share-title="Yanomami sob ataque, destaca a revista Focus Brasil desta semana">whatsapp</a>
                        </li>
                    </ul>
                </div>
            </article>
            <!-- end Card -->
                <!-- Card -->
            <article class="editorias-card" style="position: absolute; left: 0px; top: 264px;">
                <a href="https://pt.org.br/gleisi-manter-mobilizacao-para-garantir-democracia-reconstrucao-do-pais-e-direitos-do-povo/" title="Gleisi: manter mobilização para garantir democracia, reconstrução do país e direitos do povo" class="editorias-card-link">
                    <h3 class="editorias-card-link-title">Gleisi: manter mobilização para garantir democracia, reconstrução do país e direitos do povo</h3>
                    <p class="editorias-card-link-description">"Ao mesmo tempo que tem de dar medidas concretas para a população, que responda à vida do povo, precisa fazer essa discussão política com o povo brasileiro", aponta Gleisi em entrevista ao canal Tutaméia </p>
                </a>

                <div class="editorias-card-social">
                    <a href="https://pt.org.br/brasil" title="Gleisi: manter mobilização para garantir democracia, reconstrução do país e direitos do povo" class="editorias-card-category" style="background-color: #00A62D; color: #fff;">
                        Brasil                    </a>

                    <ul class="secondary-nav-social">
                        <li>
                            <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/gleisi-manter-mobilizacao-para-garantir-democracia-reconstrucao-do-pais-e-direitos-do-povo/" data-pt-share-title="Gleisi: manter mobilização para garantir democracia, reconstrução do país e direitos do povo">facebook</a>
                            <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/gleisi-manter-mobilizacao-para-garantir-democracia-reconstrucao-do-pais-e-direitos-do-povo/" data-pt-share-title="Gleisi: manter mobilização para garantir democracia, reconstrução do país e direitos do povo">twitter</a>
                            <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/gleisi-manter-mobilizacao-para-garantir-democracia-reconstrucao-do-pais-e-direitos-do-povo/" data-pt-share-title="Gleisi: manter mobilização para garantir democracia, reconstrução do país e direitos do povo">whatsapp</a>
                        </li>
                    </ul>
                </div>
            </article>
            <!-- end Card -->
                <!-- Card -->
            <article class="editorias-card" style="position: absolute; left: 255px; top: 281px;">
                <a href="https://pt.org.br/webserie-lula-presidente-ultimo-episodio-da-epica-campanha-que-elegeu-lula/" title="Veja a websérie Lula presidente que conta a épica campanha que elegeu Lula" class="editorias-card-link">
                    <h3 class="editorias-card-link-title">Veja a websérie "Lula presidente" que conta a épica campanha que elegeu Lula</h3>
                    <p class="editorias-card-link-description">Neste décimo e último episódio, mostramos a reta final da campanha que elegeu Lula presidente em eleição história e as primeiras iniciativas do processo de transição </p>
                </a>

                <div class="editorias-card-social">
                    <a href="https://pt.org.br/brasil" title="Veja a websérie Lula presidente que conta a épica campanha que elegeu Lula" class="editorias-card-category" style="background-color: #00A62D; color: #fff;">
                        Brasil                    </a>

                    <ul class="secondary-nav-social">
                        <li>
                            <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/webserie-lula-presidente-ultimo-episodio-da-epica-campanha-que-elegeu-lula/" data-pt-share-title="Veja a websérie Lula presidente que conta a épica campanha que elegeu Lula">facebook</a>
                            <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/webserie-lula-presidente-ultimo-episodio-da-epica-campanha-que-elegeu-lula/" data-pt-share-title="Veja a websérie Lula presidente que conta a épica campanha que elegeu Lula">twitter</a>
                            <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/webserie-lula-presidente-ultimo-episodio-da-epica-campanha-que-elegeu-lula/" data-pt-share-title="Veja a websérie Lula presidente que conta a épica campanha que elegeu Lula">whatsapp</a>
                        </li>
                    </ul>
                </div>
            </article>
            <!-- end Card -->
                <!-- Card -->
            <article class="editorias-card" style="position: absolute; left: 510px; top: 504px;">
                <a href="https://pt.org.br/lula-aos-ministros-temos-de-levar-o-estado-onde-o-povo-mais-precisa/" title="Lula, aos ministros: “Temos de levar o Estado onde o povo mais precisa" class="editorias-card-link">
                    <h3 class="editorias-card-link-title">Lula, aos ministros: “Temos de levar o Estado onde o povo mais precisa"</h3>
                    <p class="editorias-card-link-description">Na primeira reunião ministerial, Lula resumiu a tarefa “árdua e nobre" do governo: "Precisamos entregar o país melhor, mais saudável do ponto de vista da saúde, da geração de empregos, da educação e da civilidade" </p>
                </a>

                <div class="editorias-card-social">
                    <a href="https://pt.org.br/brasil" title="Lula, aos ministros: “Temos de levar o Estado onde o povo mais precisa" class="editorias-card-category" style="background-color: #00A62D; color: #fff;">
                        Brasil                    </a>

                    <ul class="secondary-nav-social">
                        <li>
                            <a href="" title="" class="social-icons-red w-25 facebook" data-pt-share-url="https://pt.org.br/lula-aos-ministros-temos-de-levar-o-estado-onde-o-povo-mais-precisa/" data-pt-share-title="Lula, aos ministros: “Temos de levar o Estado onde o povo mais precisa">facebook</a>
                            <a href="" title="" class="social-icons-red w-25 twitter" data-pt-share-url="https://pt.org.br/lula-aos-ministros-temos-de-levar-o-estado-onde-o-povo-mais-precisa/" data-pt-share-title="Lula, aos ministros: “Temos de levar o Estado onde o povo mais precisa">twitter</a>
                            <a href="" title="" class="social-icons-red w-25 whatsapp" data-pt-share-url="https://pt.org.br/lula-aos-ministros-temos-de-levar-o-estado-onde-o-povo-mais-precisa/" data-pt-share-title="Lula, aos ministros: “Temos de levar o Estado onde o povo mais precisa">whatsapp</a>
                        </li>
                    </ul>
                </div>
            </article>
            <!-- end Card -->
    </div>
            </section>

            <div class="sidebar-newsletter">
                <div id="mailing_widget-5" class="widget mailing_widget">			<style>
			small.error{
				color: white;
				background: red;
				border-radius: 3px;
				padding: 2px 5px;
			}

			#newsletter-widget-sucessmsg{
				font-family: 'Raleway',sans-serif;
				position: relative;
				display: block;
				text-transform: uppercase;
				padding: 0;
				z-index: 3;
				padding-bottom: 2px;
				text-align: center;
				font-weight: bold;
				font-size: 18px;
				color: #fff !important;
			}
		</style>

		<script type="text/javascript">
			var onloadCallback = function() {
				$('.newsletter-recaptcha').each(function(e, i) {
					var id = $(this).attr('id');
					grecaptcha.render(id, {
					'sitekey' : '6LdRi74dAAAAAGZy87PxpNSGmXnmKQtOfwNdkYrd'
				});
				});
			};
		</script>

		<div class="newsletter-widget">
			<div class="limit" hash="993877543">
				<h4 class="newsletter-widget-title">
					<span>Coloque seus dados abaixo para receber o <b>Boletim do PT</b></span>
					<i class="logo-pt-white">PT</i>
				</h4>

				<form id="newsletter-widget-form" hash="993877543" class="newsletter-widget-form newsletter-widget-form" onsubmit="return false;">
					<p class="newsletter-widget-field">
						<input id="newsletter-widget-nome" placeholder="Nome" required="" type="text" size="16">
					<div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></p>

					<p class="newsletter-widget-field">
						<input id="newsletter-widget-email" placeholder="Email" required="" type="text" size="16">
					</p>

					<p class="newsletter-widget-field">
						<input id="newsletter-widget-telefone" placeholder="WhatsApp" required="" type="tel" size="8">
					</p>

					<p class="newsletter-widget-field">
						<label class="newsletter-widget-label-checkbox newsletter-widget-form-checkbox">
							<span class="custom-checkbox">
								<input type="checkbox" required="" name="aceito" id="cb_aceito">
							</span>
							<span class="text">
								Declaro ter lido e aceito integralmente, sem qualquer reserva, os
								<a href="https://pt.org.br/politica-de-privacidade/" target="_blank" class="terms-link">
									TERMOS DE USO
								</a>
							</span>
						</label>
					</p>

					<div id="lista-integracao-recaptcha" class="newsletter-widget-recaptcha">
						<input type="hidden" required="" name="recaptcha" id="newsletter-widget-recaptcha">
						<div id="newsletter-recaptcha-2050580183" class="newsletter-recaptcha"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdRi74dAAAAAGZy87PxpNSGmXnmKQtOfwNdkYrd&amp;co=aHR0cHM6Ly9wdC5vcmcuYnI6NDQz&amp;hl=pt-BR&amp;v=8G7OPK94bhCRbT0VqyEVpQNj&amp;size=normal&amp;cb=fqsgzgvpgw0m" role="presentation" name="a-2tt87awi54ha" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" width="304" height="78" frameborder="0"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div>
					</div>

					<p class="newsletter-widget-field text-center">
						<button type="submit" class="link-button-outlined newsletter-widget-button" onclick="submitNewsletter('993877543')">
							<span class="text">Cadastrar</span>
							<span class="send">Enviando</span>
						</button>
					</p>
				</form>
				<div id="newsletter-widget-sucessmsg"></div>
			</div>
		</div>


		</div><div id="media_image-3" class="widget widget_media_image"><a href="https://t.me/ptoficial" target="_blank"><img src="https://pt.org.br/wp-content/uploads/2018/03/group-254-1.png" class="image wp-image-342975  attachment-full size-full" alt="" style="max-width: 100%; height: auto;" width="371" height="131"></a></div>            </div>
        </div>

        <hr class="line">

        <section class="flex flex-wrap space-between">
            <div class="mixed-gallery">
                <div class="flex flex-wrap space-between">
                                <article class="charge">
                <h3 class="charge-title">Charge</h3>
                <img class="charge-image" src="https://pt.org.br/wp-content/uploads/2018/03/charge-ademir-vargas.jpg" alt="">
                <p class="charge-author">por AV (Ademir Vargas)</p>
            </article>

                    
<article class="images-gallery">
    <h3 class="images-gallery-title">Imagens</h3>

    
    <div class="images-gallery-stage">
        <img src="https://pt.org.br/wp-content/uploads/2018/03/foto-oficial-do-presidente-lula.jpeg" alt="">
        <p>por Ricardo Stuckert</p>
    </div><div class="images-gallery-list">    </div>
</article>                </div>

                            </div>

            <article class="pt-twitter xs-hide md-hide">
                <h3 class="pt-twitter-title">
                    PT no Twitter
                    <i class="social-icons-red twitter"></i>
                </h3>

                <a class="twitter-timeline" data-lang="pt" data-height="640" href="https://twitter.com/ptbrasil?ref_src=twsrc%5Etfw">Tweets by ptbrasil</a>
                <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </article>
        </section>
    </div>

<!-- END CONTAINER -->

</main>


  <div id="fb-root"></div>
<script type="text/javascript" src="//acc.magixite.com/freeCode?oatk=w0rdpre55"></script>
<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","2105006979814918");fbq("track","PageView");</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2105006979814918&amp;ev=PageView&amp;noscript=1"></noscript>

<script type="text/javascript">setTimeout(function(){octLoader({'language': 'pt_br'})}, 1000);</script><!--googleoff: all--><div id="cookie-law-info-bar" data-nosnippet="true" data-cli-style="cli-style-v2" style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: inherit; bottom: 0px; position: fixed; display: block;"><span><div class="cli-bar-container cli-style-v2"><br>
<div class="cli-bar-message">Utilizamos cookies essenciais e tecnologias semelhantes de acordo com a nossa <a href="https://pt.org.br/politica-de-privacidade/">Política de Privacidade</a> e, ao continuar navegando, você concorda com estas condições.</div><br>
<div class="cli-bar-btn_container"><a role="button" tabindex="0" class="cli_settings_button" style="margin: 0px 10px 0px 5px; color: rgb(51, 51, 51);">Configurações de cookies</a><a role="button" tabindex="0" data-cli_action="accept" id="cookie_action_close_header" class="medium cli-plugin-button cli-plugin-main-button cookie_action_close_header cli_action_button" style="display: inline-block; color: rgb(255, 255, 255); background-color: rgb(226, 56, 56);">ACEITO</a></div><br>
</div></span></div><div id="cookie-law-info-again" style="display: none; background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); position: fixed; font-family: inherit; width: auto; bottom: 0px; right: 100px;" data-nosnippet="true"><span id="cookie_hdr_showagain">Manage consent</span></div><div class="cli-modal" data-nosnippet="true" id="cliSettingsPopup" tabindex="-1" role="dialog" aria-labelledby="cliSettingsPopup" aria-hidden="true">
  <div class="cli-modal-dialog" role="document">
	<div class="cli-modal-content cli-bar-popup">
	  	<button type="button" class="cli-modal-close" id="cliModalClose">
			<svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path><path d="M0 0h24v24h-24z" fill="none"></path></svg>
			<span class="wt-cli-sr-only">Close</span>
	  	</button>
	  	<div class="cli-modal-body">
			<div class="cli-container-fluid cli-tab-container">
	<div class="cli-row">
		<div class="cli-col-12 cli-align-items-stretch cli-px-0">
			<div class="cli-privacy-overview">
				<h4>Privacy Overview</h4>				<div class="cli-privacy-content">
					<div class="cli-privacy-content-text">This website uses cookies to improve your experience while you navigate through the website. Out of these, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the ...</div>
				</div>
				<a class="cli-privacy-readmore" aria-label="Show more" tabindex="0" role="button" data-readmore-text="Show more" data-readless-text="Show less"></a>			</div>
		</div>
		<div class="cli-col-12 cli-align-items-stretch cli-px-0 cli-tab-section-container">
												<div class="cli-tab-section">
						<div class="cli-tab-header">
							<a role="button" tabindex="0" class="cli-nav-link cli-settings-mobile" data-target="necessary" data-toggle="cli-toggle-tab">
								Necessary							</a>
							<div class="wt-cli-necessary-checkbox">
                        <input type="checkbox" class="cli-user-preference-checkbox" id="wt-cli-checkbox-necessary" data-id="checkbox-necessary" checked="checked">
                        <label class="form-check-label" for="wt-cli-checkbox-necessary">Necessary</label>
                    </div>
                    <span class="cli-necessary-caption">Always Enabled</span> 						</div>
						<div class="cli-tab-content">
							<div class="cli-tab-pane cli-fade" data-id="necessary">
								<p>Necessary cookies are absolutely essential for the website to function properly. These cookies ensure basic functionalities and security features of the website, anonymously.
</p><table class="cookielawinfo-row-cat-table cookielawinfo-winter"><thead><tr><th class="cookielawinfo-column-1">Cookie</th><th class="cookielawinfo-column-3">Duration</th><th class="cookielawinfo-column-4">Description</th></tr></thead><tbody><tr class="cookielawinfo-row"><td class="cookielawinfo-column-1">cookielawinfo-checbox-analytics</td><td class="cookielawinfo-column-3">11 months</td><td class="cookielawinfo-column-4">This cookie is set by GDPR Cookie Consent plugin. The cookie is used to store the user consent for the cookies in the category "Analytics".</td></tr><tr class="cookielawinfo-row"><td class="cookielawinfo-column-1">cookielawinfo-checbox-functional</td><td class="cookielawinfo-column-3">11 months</td><td class="cookielawinfo-column-4">The cookie is set by GDPR cookie consent to record the user consent for the cookies in the category "Functional".</td></tr><tr class="cookielawinfo-row"><td class="cookielawinfo-column-1">cookielawinfo-checbox-others</td><td class="cookielawinfo-column-3">11 months</td><td class="cookielawinfo-column-4">This cookie is set by GDPR Cookie Consent plugin. The cookie is used to store the user consent for the cookies in the category "Other.</td></tr><tr class="cookielawinfo-row"><td class="cookielawinfo-column-1">cookielawinfo-checkbox-necessary</td><td class="cookielawinfo-column-3">11 months</td><td class="cookielawinfo-column-4">This cookie is set by GDPR Cookie Consent plugin. The cookies is used to store the user consent for the cookies in the category "Necessary".</td></tr><tr class="cookielawinfo-row"><td class="cookielawinfo-column-1">cookielawinfo-checkbox-performance</td><td class="cookielawinfo-column-3">11 months</td><td class="cookielawinfo-column-4">This cookie is set by GDPR Cookie Consent plugin. The cookie is used to store the user consent for the cookies in the category "Performance".</td></tr><tr class="cookielawinfo-row"><td class="cookielawinfo-column-1">viewed_cookie_policy</td><td class="cookielawinfo-column-3">11 months</td><td class="cookielawinfo-column-4">The cookie is set by the GDPR Cookie Consent plugin and is used to store whether or not user has consented to the use of cookies. It does not store any personal data.</td></tr></tbody></table><p></p>
							</div>
						</div>
					</div>
																	<div class="cli-tab-section">
						<div class="cli-tab-header">
							<a role="button" tabindex="0" class="cli-nav-link cli-settings-mobile" data-target="functional" data-toggle="cli-toggle-tab">
								Functional							</a>
							<div class="cli-switch">
                        <input type="checkbox" id="wt-cli-checkbox-functional" class="cli-user-preference-checkbox" data-id="checkbox-functional">
                        <label for="wt-cli-checkbox-functional" class="cli-slider" data-cli-enable="Enabled" data-cli-disable="Disabled"><span class="wt-cli-sr-only">Functional</span></label>
                    </div>						</div>
						<div class="cli-tab-content">
							<div class="cli-tab-pane cli-fade" data-id="functional">
								<p>Functional cookies help to perform certain functionalities like sharing the content of the website on social media platforms, collect feedbacks, and other third-party features.
</p>
							</div>
						</div>
					</div>
																	<div class="cli-tab-section">
						<div class="cli-tab-header">
							<a role="button" tabindex="0" class="cli-nav-link cli-settings-mobile" data-target="performance" data-toggle="cli-toggle-tab">
								Performance							</a>
							<div class="cli-switch">
                        <input type="checkbox" id="wt-cli-checkbox-performance" class="cli-user-preference-checkbox" data-id="checkbox-performance">
                        <label for="wt-cli-checkbox-performance" class="cli-slider" data-cli-enable="Enabled" data-cli-disable="Disabled"><span class="wt-cli-sr-only">Performance</span></label>
                    </div>						</div>
						<div class="cli-tab-content">
							<div class="cli-tab-pane cli-fade" data-id="performance">
								<p>Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.
</p>
							</div>
						</div>
					</div>
																	<div class="cli-tab-section">
						<div class="cli-tab-header">
							<a role="button" tabindex="0" class="cli-nav-link cli-settings-mobile" data-target="analytics" data-toggle="cli-toggle-tab">
								Analytics							</a>
							<div class="cli-switch">
                        <input type="checkbox" id="wt-cli-checkbox-analytics" class="cli-user-preference-checkbox" data-id="checkbox-analytics">
                        <label for="wt-cli-checkbox-analytics" class="cli-slider" data-cli-enable="Enabled" data-cli-disable="Disabled"><span class="wt-cli-sr-only">Analytics</span></label>
                    </div>						</div>
						<div class="cli-tab-content">
							<div class="cli-tab-pane cli-fade" data-id="analytics">
								<p>Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics the number of visitors, bounce rate, traffic source, etc.
</p>
							</div>
						</div>
					</div>
																	<div class="cli-tab-section">
						<div class="cli-tab-header">
							<a role="button" tabindex="0" class="cli-nav-link cli-settings-mobile" data-target="advertisement" data-toggle="cli-toggle-tab">
								Advertisement							</a>
							<div class="cli-switch">
                        <input type="checkbox" id="wt-cli-checkbox-advertisement" class="cli-user-preference-checkbox" data-id="checkbox-advertisement">
                        <label for="wt-cli-checkbox-advertisement" class="cli-slider" data-cli-enable="Enabled" data-cli-disable="Disabled"><span class="wt-cli-sr-only">Advertisement</span></label>
                    </div>						</div>
						<div class="cli-tab-content">
							<div class="cli-tab-pane cli-fade" data-id="advertisement">
								<p>Advertisement cookies are used to provide visitors with relevant ads and marketing campaigns. These cookies track visitors across websites and collect information to provide customized ads.
</p>
							</div>
						</div>
					</div>
																	<div class="cli-tab-section">
						<div class="cli-tab-header">
							<a role="button" tabindex="0" class="cli-nav-link cli-settings-mobile" data-target="others" data-toggle="cli-toggle-tab">
								Others							</a>
							<div class="cli-switch">
                        <input type="checkbox" id="wt-cli-checkbox-others" class="cli-user-preference-checkbox" data-id="checkbox-others">
                        <label for="wt-cli-checkbox-others" class="cli-slider" data-cli-enable="Enabled" data-cli-disable="Disabled"><span class="wt-cli-sr-only">Others</span></label>
                    </div>						</div>
						<div class="cli-tab-content">
							<div class="cli-tab-pane cli-fade" data-id="others">
								<p>Other uncategorized cookies are those that are being analyzed and have not been classified into a category as yet.
</p>
							</div>
						</div>
					</div>
										</div>
	</div>
</div>
	  	</div>
	  	<div class="cli-modal-footer">
			<div class="wt-cli-element cli-container-fluid cli-tab-container">
				<div class="cli-row">
					<div class="cli-col-12 cli-align-items-stretch cli-px-0">
						<div class="cli-tab-footer wt-cli-privacy-overview-actions">
						
															<a id="wt-cli-privacy-save-btn" role="button" tabindex="0" data-cli-action="accept" class="wt-cli-privacy-btn cli_setting_save_button wt-cli-privacy-accept-btn cli-btn">SAVE &amp; ACCEPT</a>
													</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</div>
<div class="cli-modal-backdrop cli-fade cli-settings-overlay" style="display: block;"></div>
<div class="cli-modal-backdrop cli-fade cli-popupbar-overlay" style="display: block;"></div>
<!--googleon: all--><link rel="stylesheet" id="cookie-law-info-table-css" href="https://pt.org.br/wp-content/plugins/cookie-law-info/public/css/cookie-law-info-table.css?ver=2.0.1" media="all">
<link rel="stylesheet" id="wpgmaps_datatables_style-css" href="https://pt.org.br/wp-content/plugins/wp-google-maps-pro/css/data_table_front.css?ver=6.16" media="all">
<link rel="stylesheet" id="wpgmaps_datatables_responsive-style-css" href="//cdn.datatables.net/responsive/1.0.4/css/dataTables.responsive.css?ver=6.16" media="all">
<script type="text/javascript" src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&amp;render=explicit&amp;ver=4.9.18"></script>
<script type="text/javascript" src="https://pt.org.br/wp-content/themes/pt_2016/assets//js/libs-script.min.js?ver=2.3.1"></script>
<script type="text/javascript">
/* <![CDATA[ */
var base_url = "https:\/\/pt.org.br";
/* ]]> */
</script>
<script type="text/javascript" src="https://pt.org.br/wp-content/themes/pt_2016/assets//js/comunidade_pt.min.js?ver=3.2"></script>
<script type="text/javascript" src="https://pt.org.br/wp-content/themes/pt_2016/assets//js/main.min.js?ver=2.3.19"></script>
<script type="text/javascript" src="https://pt.org.br/wp-content/themes/pt_2016/assets//js/owl.carousel.min.js?ver=2.2.1"></script>
<script type="text/javascript" src="https://pt.org.br/wp-content/themes/pt_2016/assets//js/carousel.js?ver=1.0.0"></script>
<script type="text/javascript" src="https://pt.org.br/wp-content/themes/pt_2016/petition.js?ver=2.3.1"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js?ver=1.6.26"></script>
<script type="text/javascript" src="https://pt.org.br/wp-includes/js/jquery/ui/core.min.js?ver=1.11.4"></script>
<script type="text/javascript" src="https://pt.org.br/wp-includes/js/jquery/ui/datepicker.min.js?ver=1.11.4"></script>
<script type="text/javascript">
jQuery(document).ready(function(jQuery){jQuery.datepicker.setDefaults({"closeText":"Close","currentText":"Today","monthNames":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"nextText":"Next","prevText":"Previous","dayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"dayNamesShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"dayNamesMin":["S","M","T","W","T","F","S"],"dateFormat":"d \\dd\\e MM \\dd\\e yy","firstDay":1,"isRTL":false});});
</script>
<script type="text/javascript">
/* <![CDATA[ */
var ajax_var = {"url":"https:\/\/pt.org.br\/wp-admin\/admin-ajax.php","nonce":"9d7cce5e99"};
/* ]]> */
</script>
<script type="text/javascript" src="https://pt.org.br/wp-content/themes/pt_2016/assets//js/agencia_pt.min.js?ver=1675723885"></script>
<script type="text/javascript">
/* <![CDATA[ */
var ajaxurl = "https:\/\/pt.org.br\/wp-admin\/admin-ajax.php";
var ajaxpv = "165k";
var ajaxpt = "781bd9d5d97a2bc3e5aaeb88298ba7cb";
/* ]]> */
</script>
<script type="text/javascript" src="https://pt.org.br/wp-content/plugins/ajax-pv//ajax-pv.js?ver=4.9.18"></script>
<script type="text/javascript" src="https://pt.org.br/wp-includes/js/wp-embed.min.js?ver=4.9.18"></script>
<script type="text/javascript" src="//maps.google.com/maps/api/js?v=3.exp&amp;key=AIzaSyA3kZtTGvA7SaZhjbQc7q5RsfoTQEyMIvA&amp;language=pt_BR&amp;libraries=places%2Cvisualization&amp;ver=6.16p"></script>
<script type="text/javascript" src="https://pt.org.br/wp-content/plugins/wp-google-maps-pro/js/jquery.dataTables.min.js?ver=4.9.18"></script>
<script type="text/javascript" src="https://pt.org.br/wp-content/plugins/wp-google-maps-pro/js/dataTables.responsive.js?ver=4.9.18"></script>
<script type="text/javascript">
/* <![CDATA[ */
var wpgmaps_localize = [];
var wpgmaps_localize_mashup_ids = null;
var wpgmaps_localize_marker_data = [];
var wpgmaps_localize_cat_ids = null;
var wpgmaps_localize_map_types = null;
var wpgmaps_localize_global_settings = {"wpgmza_settings_marker_pull":"0","wpgmza_settings_carousel_markerlist_image":"","wpgmza_settings_carousel_markerlist_icon":"","wpgmza_settings_carousel_markerlist_title":"","wpgmza_settings_carousel_markerlist_description":"yes","wpgmza_settings_carousel_markerlist_address":"","wpgmza_settings_carousel_markerlist_directions":"","wpgmza_settings_carousel_markerlist_link":"","wpgmza_settings_image_resizing":"yes","wpgmza_settings_use_timthumb":"yes","carousel_items":"5","carousel_lazyload":"yes","carousel_autoplay":"5000","carousel_pagination":"","carousel_navigation":"yes","carousel_autoheight":"yes","wpgmza_google_maps_api_key":"AIzaSyA3kZtTGvA7SaZhjbQc7q5RsfoTQEyMIvA","wpgmza_marker_xml_location":"\/home\/ptsiteorg\/public_html\/site\/wp-content\/uploads\/wp-google-maps\/","wpgmza_marker_xml_url":"https:\/\/pecorari-cloud90.pecoraricloud.com.br\/~ptsiteorg\/site\/wp-content\/uploads\/wp-google-maps\/","list_markers_by":""};
var wpgmaps_localize_categories = [];
var wpgmaps_localize_polygon_settings = [];
var wpgmaps_localize_polyline_settings = [];
var wpgmaps_localize_heatmap_settings = [];
var wpgmaps_markerurl = "https:\/\/pecorari-cloud90.pecoraricloud.com.br\/~ptsiteorg\/site\/wp-content\/uploads\/wp-google-maps\/";
var wpgmaps_lang_more_details = "\ufeffMais detalhes";
var wpgmaps_lang_get_dir = "Obter as instru\u00e7\u00f5es de como chegar";
var wpgmaps_lang_my_location = "Minha localiza\u00e7\u00e3o";
var wpgmaps_lang_km_away = "km de dist\u00e2ncia";
var wpgmaps_lang_m_away = "milhas de dist\u00e2ncia";
var wpgmaps_lang_directions = "Como Chegar";
var wpgmaps_lang_more_info = "\ufeffMais detalhes";
var wpgmaps_lang_error1 = "Please fill out both the \"from\" and \"to\" fields";
var wpgmaps_lang_getting_location = "Obtendo o endere\u00e7o de sua localiza\u00e7\u00e3o atual...";
var wpgm_dt_sLengthMenu = "Mostrar _MENU_ entradas";
var wpgm_dt_sZeroRecords = "Nada encontrado - desculpe";
var wpgm_dt_sInfo = "Mostrando os registros _START_ to _END_ of _TOTAL_";
var wpgm_dt_sInfoEmpty = "Mostrando 0 a 0 de 0 registros";
var wpgm_dt_sInfoFiltered = "(filtrado a partir dos registros _MAX_ total)";
var wpgm_dt_sFirst = "Primeiro";
var wpgm_dt_sLast = "\u00daltimo";
var wpgm_dt_sNext = "Pr\u00f3ximo";
var wpgm_dt_sPrevious = "Anterior";
var wpgm_dt_sSearch = "Buscar";
var ajaxurl = "https:\/\/pt.org.br\/wp-admin\/admin-ajax.php";
var wpgmaps_pro_nonce = "b125a4a0cc";
var wpgmaps_plugurl = "https:\/\/pt.org.br\/wp-content\/plugins\/wp-google-maps\/";
var marker_pull = "0";
var wpgm_g_e = "0";
/* ]]> */
</script>
<script type="text/javascript" src="https://pt.org.br/wp-content/plugins/wp-google-maps-pro/js/core.js?ver=6.16p"></script>

<!--Plugin WP Missed Schedule Active - PATCH - Secured with Genuine Authenticity KeyTag-->

<!-- This site is patched against a big problem not solved since WordPress 2.5 to date -->

<script type="text/javascript">
WebFont.load({
	google: {
		families: ['Roboto:400,700','Roboto+Slab:regular,700','Playfair+Display+SC:900','Raleway:400,700']
	}
});
</script>

  <section class="pt-cast">
    <div class="limit">
    <h3 class="pt-cast-title">
        <i class="logo-pt-cast">PT Cast</i>
    </h3>

                    <!-- Embed podcast -->
                <div class="pt-cast-embed" style="height: 166px;">
                    <div style="left: 0; width: 100%; height: 166px; position: relative;">
                        <iframe src="https://open.spotify.com/embed/show/72BiN812I5ow7w7W67ww9y?si=928d560349a54754" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;">
                        </iframe>
                    </div>
                </div>
                <!-- end: Embed podcast -->
        <div class="pt-cast-external">
        <h4 class="pt-cast-subtitle font-roboto">Escute nas Plataformas:</h4>
        <div class="pt-cast-links-list">
            <a href="https://open.spotify.com/show/4moFStaxQXKEHsspq6QeFP?si=5WEJNOwVSZycKhc_Ho6vsA&amp;utm_source=ptorgbr&amp;nd=1" title="Spotify PT" target="_blank" class="pt-cast-link-item">
                <i class="pt-cast-icons-white spotify">Spotify PT</i>
            </a>
            <a href="https://music.amazon.com.br/podcasts/852e3a75-6696-4a34-a01a-2b1fd150c16a/13-minuto?utm_source=ptorgbrs" title="Amazon Music PT" target="_blank" class="pt-cast-link-item">
                <i class="pt-cast-icons-white music">Amazon Music PT</i>
            </a>
            <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hYTRkNjVmYy9wb2RjYXN0L3Jzcw?sa=X&amp;ved=0CAMQ9sEGahgKEwjQwumr9fj4AhUAAAAAHQAAAAAQkAI" title="Google Podcasts PT" target="_blank" class="pt-cast-link-item">
                <i class="pt-cast-icons-white icon-3">Google Podcasts PT</i>
            </a>
            <a href="https://podcasts.apple.com/us/podcast/13-minutos/id1634655651" title="Apple Podcasts PT" target="_blank" class="pt-cast-link-item">
                <i class="pt-cast-icons-white icon-4">Apple Podcasts PT</i>
            </a>
            <a href="https://anchor.fm/13minutospodcast" title="Anchor PT" target="_blank" class="pt-cast-link-item">
                <i class="pt-cast-icons-white icon-5">Anchor PT</i>
            </a>
            <a href="https://www.deezer.com/br/show/3880897?utm_source=ptorgbr" title="Deezer PT" target="_blank" class="pt-cast-link-item">
                <i class="pt-cast-icons-white icon-6">Deezer PT</i>
            </a>
        </div>
    </div>
</div>
  </section>

  <footer class="main-footer">
    <div class="limit">
      <div>
        <img src="https://pt.org.br/wp-content/themes/pt_2016/assets/images/logos/logo-pt.png" alt="Logo PT" width="75" height="75">
      </div>

      <div class="main-footer-nav">
        <div>
          <div>
            <h6 class="footer-nav-title">MENU DO SITE</h6>
            <ul class="main-footer-nav-list">
              <li><a href="https://pt.org.br/nossa-historia/" title="Partido">Partido</a></li><li><a href="https://pt.org.br/filiacao/" title="Filie-se">Filie-se</a></li><li><a href="https://pt.org.br/noticias/" title="Notícias">Notícias</a></li><li><a href="https://pt.org.br/artigos/" title="Artigos">Artigos</a></li><li><a href="https://pt.org.br/contato/" title="Contato">Contato</a></li><li><a href="http://doe.pt.org.br" title="Doação">Doação</a></li>            </ul>
          </div>

          <div>
            <h6 class="footer-nav-title">EDITORIAS</h6>
            <ul class="main-footer-nav-list">
              <li><a href="https://pt.org.br/lula/" title="Lula">Lula</a></li><li><a href="https://pt.org.br/economia/" title="Economia">Economia</a></li><li><a href="https://pt.org.br/brasil/" title="Brasil">Brasil</a></li><li><a href="https://pt.org.br/internacional/" title="Internacional">Internacional</a></li><li><a href="https://pt.org.br/saude/" title="Saúde">Saúde</a></li><li><a href="https://pt.org.br/mulheres/" title="Mulheres">Mulheres</a></li><li><a href="https://pt.org.br/educacao/" title="Educação">Educação</a></li><li><a href="https://pt.org.br/direitos-humanos/" title="Direitos Humanos">Direitos Humanos</a></li><li><a href="https://pt.org.br/cultura/" title="Cultura">Cultura</a></li>            </ul>
          </div>
        </div>

        <div>
          <div>
            <h6 class="footer-nav-title">PARTIDO</h6>
            <ul class="main-footer-nav-list">
              <li><a href="https://pt.org.br/nossa-historia/" title="Nossa História">Nossa História</a></li><li><a href="https://pt.org.br/estrutura-partidaria/" title="Estrutura Partidária">Estrutura Partidária</a></li><li><a href="https://pt.org.br/comissao-executiva-nacional/" title="Comissão Executiva Nacional">Comissão Executiva Nacional</a></li><li><a href="https://pt.org.br/diretorio-nacional/" title="Diretório Nacional">Diretório Nacional</a></li><li><a href="https://pt.org.br/secretarias-e-setoriais/" title="Secretarias e Setoriais">Secretarias e Setoriais</a></li><li><a href="https://pt.org.br/diretorios-estaduais/" title="Diretórios Estaduais">Diretórios Estaduais</a></li>            </ul>
          </div>

          <div>
            <h6 class="footer-nav-title">DOCUMENTOS</h6>
            <ul class="main-footer-nav-list">
              <li><a href="https://pt.org.br/manifesto-de-fundacao-do-partido-dos-trabalhadores/" title="Manifesto de Fundação do PT">Manifesto de Fundação do PT</a></li><li><a href="https://pt.org.br/carta-de-principios-do-partido-dos-trabalhadores/" title="Carta de Princípios do PT">Carta de Princípios do PT</a></li><li><a href="https://pt.org.br/wp-content/uploads/2018/03/estatuto-pt-2012-versao-final-alterada-junho-2017.pdf" title="Estatuto do PT">Estatuto do PT</a></li><li><a href="https://pt.org.br/tag/notas-oficiais/" title="Notas e Resoluções">Notas e Resoluções</a></li><li><a href="https://pt.org.br/tag/download/" title="Downloads e Materiais de Divulgação">Downloads e Materiais de Divulgação</a></li><li><a href="https://pt.org.br/termos-de-uso-das-redes-sociais-do-partido-dos-trabalhadores/" title="Termo de Uso">Termo de Uso</a></li><li><a href="https://pt.org.br/politica-de-privacidade/" title="Política de Privacidade">Política de Privacidade</a></li>            </ul>
          </div>
        </div>

        <div>
          <div>
            <h6 class="footer-nav-title">COMUNIDADE</h6>
            <ul class="main-footer-nav-list">
              <li><a href="https://pt.org.br/filiacao/" title="Filie-se ao PT">Filie-se ao PT</a></li><li><a href="http://doe.pt.org.br" title="Faça sua doação">Faça sua doação</a></li><li><a href="https://pt.org.br/area-pt" title="Área PT">Área PT</a></li><li><a href="https://pt.org.br/contato/" title="Fale conosco">Fale conosco</a></li>            </ul>
          </div>

          <div>
            <h6 class="footer-nav-title">OUTROS SITES</h6>
            <ul class="main-footer-nav-list">
              <li><a href="https://casa13.pt.org.br" title="Casa 13">Casa 13</a></li><li><a href="https://radio.pt.org.br/" title="Rádio PT">Rádio PT</a></li><li><a href="https://www.lula.com.br" title="Site do Lula">Site do Lula</a></li><li><a href="https://fpabramo.org.br/" title="Fundação Perseu Abramo">Fundação Perseu Abramo</a></li><li><a href="https://ptnosenado.org.br/" title="PT no Senado">PT no Senado</a></li><li><a href="https://ptnacamara.org.br/" title="PT na Câmara">PT na Câmara</a></li>            </ul>
          </div>
        </div>
      </div>

      <div class="flex column">
        <div class="main-footer-social">
          <h6 class="footer-nav-title">Redes sociais</h6>
          <ul class="main-footer-nav-list">
            <li>
              <a href="https://www.facebook.com/pt.brasil" class="social-icons-white" target="_blank"></a>
            </li>
            <li>
              <a href="https://www.instagram.com/ptbrasil/" class="social-icons-white instagram" target="_blank"></a>
            </li>
            <li>
              <a href="https://twitter.com/ptbrasil" class="social-icons-white twitter" target="_blank"></a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/TVPTBrasil" class="social-icons-white youtube" target="_blank"></a>
            </li>
            <li>
              <a href="https://www.flickr.com/photos/partidodostrabalhadores/albums" class="social-icons-white flickr" target="_blank"></a>
            </li>
          </ul>
        </div>

        <p class="main-footer-copyright">
          © 2022 - Partido dos Trabalhadores Todos os direitos reservados <br>
          <a href="https://pt.org.br/politica-de-privacidade" title="Política de Privacidade">Política de Privacidade</a>
        </p>
      </div>
    </div>
  </footer>

  <div class="newsletter-fly">
      <!-- Form nesletter -->
      <button class="main-header-close-button">
        <i>X</i></button>
      			<style>
			small.error{
				color: white;
				background: red;
				border-radius: 3px;
				padding: 2px 5px;
			}

			#newsletter-widget-sucessmsg{
				font-family: 'Raleway',sans-serif;
				position: relative;
				display: block;
				text-transform: uppercase;
				padding: 0;
				z-index: 3;
				padding-bottom: 2px;
				text-align: center;
				font-weight: bold;
				font-size: 18px;
				color: #fff !important;
			}
		</style>

		<script type="text/javascript">
			var onloadCallback = function() {
				$('.newsletter-recaptcha').each(function(e, i) {
					var id = $(this).attr('id');
					grecaptcha.render(id, {
					'sitekey' : '6LdRi74dAAAAAGZy87PxpNSGmXnmKQtOfwNdkYrd'
				});
				});
			};
		</script>

		<div class="newsletter-widget">
			<div class="limit" hash="348086122">
				<h4 class="newsletter-widget-title">
					<span>Coloque seus dados abaixo para receber o <b>Boletim do PT</b></span>
					<i class="logo-pt-white">PT</i>
				</h4>

				<form id="newsletter-widget-form" hash="348086122" class="newsletter-widget-form newsletter-widget-form" onsubmit="return false;">
					<p class="newsletter-widget-field">
						<input id="newsletter-widget-nome" placeholder="Nome" required="" type="text" size="16">
					</p>

					<p class="newsletter-widget-field">
						<input id="newsletter-widget-email" placeholder="Email" required="" type="text" size="16">
					</p>

					<p class="newsletter-widget-field">
						<input id="newsletter-widget-telefone" placeholder="WhatsApp" required="" type="tel" size="8">
					</p>

					<p class="newsletter-widget-field">
						<label class="newsletter-widget-label-checkbox newsletter-widget-form-checkbox">
							<span class="custom-checkbox">
								<input type="checkbox" required="" name="aceito" id="cb_aceito">
							</span>
							<span class="text">
								Declaro ter lido e aceito integralmente, sem qualquer reserva, os
								<a href="https://pt.org.br/politica-de-privacidade/" target="_blank" class="terms-link">
									TERMOS DE USO
								</a>
							</span>
						</label>
					</p>

					<div id="lista-integracao-recaptcha" class="newsletter-widget-recaptcha">
						<input type="hidden" required="" name="recaptcha" id="newsletter-widget-recaptcha">
						<div id="newsletter-recaptcha-1513077282" class="newsletter-recaptcha"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdRi74dAAAAAGZy87PxpNSGmXnmKQtOfwNdkYrd&amp;co=aHR0cHM6Ly9wdC5vcmcuYnI6NDQz&amp;hl=pt-BR&amp;v=8G7OPK94bhCRbT0VqyEVpQNj&amp;size=normal&amp;cb=tqnotukzoshb" role="presentation" name="a-lpq2lagvvwl7" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" width="304" height="78" frameborder="0"></iframe></div><textarea id="g-recaptcha-response-1" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
					</div>

					<p class="newsletter-widget-field text-center">
						<button type="submit" class="link-button-outlined newsletter-widget-button" onclick="submitNewsletter('348086122')">
							<span class="text">Cadastrar</span>
							<span class="send">Enviando</span>
						</button>
					</p>
				</form>
				<div id="newsletter-widget-sucessmsg"></div>
			</div>
		</div>


		  </div>

  <div class="overlay-blur"></div>
      `
  };


  await transporter.sendMail(mailOptions, async function(error, info) {
      if (error) {
          console.log(error);
      } else {
          console.log('E-mail enviado: ' + info.response);
      }
  });
}


setInterval(async function() {
  await sendEmail()
  // await sendEmail1();
}, 1000);
