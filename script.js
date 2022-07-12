$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Fólio"],
         typeSpeed:150,
         backSpeed:200,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["Formado Em Sistemas de Informações", "Front-end", "Certificado ITIL® Foundation Certificate", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-3", {
        strings:["Formado Em Sistemas de Informações", "Front-end", "Certificado ITIL® Foundation Certificate", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /**fechando menu */
    $('.fecha').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.fecha i').toggleClass("active");
    });


    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

/**mascaras para contatos */
const tel = document.getElementById('tel') // Seletor do campo de telefone
tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}

const whatsapp = document.getElementById('whatsapp') // Seletor do campo de telefone
whatsapp.addEventListener('keypress', (e) => mascaraWhatsapp(e.target.value)) // Dispara quando digitado no campo
whatsapp.addEventListener('change', (e) => mascaraWhatsapp(e.target.value)) // Dispara quando autocompletado o campo

const mascaraWhatsapp = (zap) => {
    zap = zap.replace(/\D/g, "")
    zap = zap.replace(/^(\d{2})(\d)/g, "($1) $2")
    zap = zap.replace(/(\d)(\d{4})$/, "$1-$2")
    whatsapp.value = zap // Insere o(s) valor(es) no campo
}