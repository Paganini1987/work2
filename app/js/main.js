console.log('123');
/*Анимация блоков во время скролла*/
window.sr = ScrollReveal();
sr.reveal('.item', { duration: 500 }, 500);

/*Submit*/
function CheckEmail(){
	if (!$('#email').val()){
		$('#email').attr('placeholder','Введите email');
	}else{
		$('#form_1').submit();
		alert('Спасибо за подписку!');
	}
}
$('.footer-button').on('click', CheckEmail);