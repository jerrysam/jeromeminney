var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
if (mobile) {
   $('.storyline').css('display', 'none'); // OR you can use $('.navWrap').hide();
}
