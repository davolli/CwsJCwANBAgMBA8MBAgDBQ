jQuery(document).ready(function($) {

  // Initialize Firebase
  $('#modalIntro').modal('show')
  var config = {
    apiKey: "AIzaSyCSoKIgYnU--pJ4yuuIZTRXmr6rAtP12Hs",
    authDomain: "nauru-3732.firebaseapp.com",
    databaseURL: "https://nauru-3732.firebaseio.com",
    projectId: "nauru-3732",
    storageBucket: "nauru-3732.appspot.com",
    messagingSenderId: "1022746095510"
  };
  firebase.initializeApp(config);
  
	let dados = {
		corprincipal: 'skyblue',
		herotitulo : 'Destaque-se na web',
		herosubtitulo: 'No mundo atual, o comprometimento entre as equipes aponta para a melhoria das formas de ação.',
		herobotao: "Conheça mais",
		sobretitulo: "Sobre nossa empresa",
		sobretexto: "É claro que o julgamento imparcial das eventualidades desafia a capacidade de equalização dos paradigmas corporativos.",
		sobreprimeirotitulo: "Reduza custos",
		sobreprimeirotexto: "A certificação de metodologias que nos auxiliam a lidar com a valorização de fatores subjetivos exige a precisão e a definição das diversas correntes de pensamento.",
		sobresegundotitulo: "Agilidade",
		sobresegundotexto: "Evidentemente, a mobilidade dos capitais internacionais promove a alavancagem dos modos de operação convencionais.",
		sobreterceirotitulo: "Nosso trabalho",
		sobreterceirotexto: "A prática cotidiana prova que a valorização de fatores subjetivos apresenta tendências no sentido de aprovar a manutenção de alternativas às soluções ortodoxas",
		sobreprimeiroicone: "mbri-cash",
		sobresegundoicone: "mbri-delivery",
		sobreterceiroicone: "mbri-hearth",
		divisortexto: "A nível organizacional, a competitividade nas transações comerciais representa uma abertura para a melhoria das diretrizes de desenvolvimento para o futuro.",
		galeriatitulo: "Nossa galeria",
		galeriatexto: "A certificação de metodologias que nos auxiliam a lidar com a contínua expansão de nossa atividade possibilita uma melhor visão global dos índices pretendidos.",
		galeriaprimeirofoto: "assets/images/mbr-978x652.jpg",
		galeriaprimeirotitulo: "Produto",
		galeriaprimeirotexto: "O incentivo ao avanço tecnológico, assim como o surgimento do comércio virtual faz parte de um processo de gerenciamento das formas de ação",
		galeriasegundofoto: "assets/images/mbr-1200x801.jpg",
		galeriasegundotitulo: "Local",
		galeriasegundotexto: "O incentivo ao avanço tecnológico, assim como o surgimento do comércio virtual faz parte de um processo de gerenciamento das formas de ação",
		galeriaterceirofoto: "assets/images/mbr-1200x1037.jpg",
		galeriaterceirotitulo: "Detalhe",
		galeriaterceirotexto: "O incentivo ao avanço tecnológico, assim como o surgimento do comércio virtual faz parte de um processo de gerenciamento das formas de ação",
		enderecotitulo: "Endereço",
		enderecoprimeiro: "1234 Street Name",
		enderecosegundo: "City, AA 99999",
		contatotitulo: "Contatos",
		contatoemail: "Email: ajuda@nanosites.com.br",
		contatotelefone: "Tel:  (00) 0 0000 0001 ",
		contatowhatsapp: "WhatsApp: (00) 0 0000 0002",
		linkstitulo: "Links",
		linksinstagram: "https://www.instagram.com/",
		linksfacebook: "https://www.facebook.com/",
		sobrefoto:"assets/images/mbr-1332x888.jpg",
		logoheader: "assets/images/nn1-1-150x60.png",
		galeriaprimeiraimg: "assets/images/mbr-978x652.jpg",
		galeriasegundaimg: "assets/images/mbr-1200x801.jpg",
		galeriaterceiraimg: "assets/images/mbr-1200x1037.jpg",
		logofooter: "assets/images/nn1-1-150x60.png",
	}


	/** TEXTO */
	function AtualizarTextos(){
		$("[data-changetexto='herotitulo']").text(dados.herotitulo)
		$("[data-changetexto='herosubtitulo']").text(dados.herosubtitulo)
		$("[data-changetexto='herobotao']").text(dados.herobotao)
		$("[data-changetexto='sobretitulo']").text(dados.sobretitulo)
		$("[data-changetexto='sobretexto']").text(dados.sobretexto)
		$("[data-changetexto='sobreprimeirotitulo']").text(dados.sobreprimeirotitulo)
		$("[data-changetexto='sobreprimeirotexto']").text(dados.sobreprimeirotexto)
		$("[data-changetexto='sobresegundotitulo']").text(dados.sobresegundotitulo)
		$("[data-changetexto='sobresegundotexto']").text(dados.sobresegundotexto)
		$("[data-changetexto='sobreterceirotitulo']").text(dados.sobreterceirotitulo)
		$("[data-changetexto='sobreterceirotexto']").text(dados.sobreterceirotexto)
		$("[data-changetexto='divisortexto']").text(dados.divisortexto)
		$("[data-changetexto='galeriatitulo']").text(dados.galeriatitulo)
		$("[data-changetexto='galeriatexto']").text(dados.galeriatexto)
		$("[data-changegaltexto='galeriaprimeirotitulo']").text(dados.galeriaprimeirotitulo)
		$("[data-changegaltexto='galeriaprimeirotexto']").text(dados.galeriaprimeirotexto)
		$("[data-changegaltexto='galeriasegundotitulo']").text(dados.galeriasegundotitulo)
		$("[data-changegaltexto='galeriasegundotexto']").text(dados.galeriasegundotexto)
		$("[data-changegaltexto='galeriaterceirotitulo']").text(dados.galeriaterceirotitulo)
		$("[data-changegaltexto='galeriaterceirotexto']").text(dados.galeriaterceirotexto)
		$("[data-changetexto='enderecotitulo']").text(dados.enderecotitulo)
		$("[data-changetexto='enderecoprimeiro']").text(dados.enderecoprimeiro)
		$("[data-changetexto='enderecosegundo']").text(dados.enderecosegundo)
		$("[data-changetexto='contatotitulo']").text(dados.contatotitulo)
		$("[data-changetexto='contatoemail']").text(dados.contatoemail)
		$("[data-changetexto='contatotelefone']").text(dados.contatotelefone)
		$("[data-changetexto='contatowhatsapp']").text(dados.contatowhatsapp)
		$("[data-changetexto='linkstitulo']").text(dados.linkstitulo)
		$("[data-changetexto='linksinstagram']").attr('href',dados.linksinstagram)
		$("[data-changetexto='linksfacebook']").attr('href',dados.linksfacebook)
	}
	$('#modaltexto').on('hidden.bs.modal', function (e) {
		LimpaModalTexto()
	  })
	$("[data-changetexto]").click(function (){
		let campo = $(this).data('changetexto')
		OpenModalTexto(campo)
	})
	function OpenModalTexto(dado){
		$('#modaltexto').modal('show')
		$("#modal-texto-modnome").val(dado)
		$("#modal-texto-input").val(dados[dado])
	}
	function CloseModalTexto(){
		$('#modaltexto').modal('hide')
	}
	function LimpaModalTexto(){
		$("#modal-texto-input").val('')
		$("#modal-texto-erro").val('')
	}
	$("#modal-texto-btnsalvar").click(function (){
		let campo = $("#modal-texto-modnome").val()
		let dado = $("#modal-texto-input").val()
		dados[campo] = dado.replace(/<\/?[^>]+(>|$)/g, "")
		AtualizarDados()
		CloseModalTexto()
	})
	/** IMG */
	function AtualizarImgs(){
		$('#sobrefoto').attr('src',dados.sobrefoto)
		$('#logoheader').attr('src',dados.logoheader)
		$('#galeriaprimeiraimg').attr('src',dados.galeriaprimeiraimg)
		$('#galeriasegundaimg').attr('src',dados.galeriasegundaimg)
		$('#galeriaterceiraimg').attr('src',dados.galeriaterceiraimg)
		$('#logofooter').attr('src',dados.logofooter)
		$("[data-changegalfoto='galeriaprimeirofoto']").attr('src', dados.galeriaprimeirofoto)
		$("[data-changegalfoto='galeriasegundofoto']").attr('src', dados.galeriasegundofoto)
		$("[data-changegalfoto='galeriaterceirofoto']").attr('src', dados.galeriaterceirofoto)
	}
	$('#modalimg').on('hidden.bs.modal', function (e) {
		LimpaModalImg()
	  })
	function OpenModalImg(campo){
		$('#modalimg').modal('show')
		$('#img-upload').attr('src', dados[campo]);
		$("#modal-img-modnome").val(campo)
		$("#modal-img-input").val(dados[campo])
	}
	function CloseModalImg(){
		$('#modalimg').modal('hide')
	}
	function LimpaModalImg(){
		$("#modal-img-input").val('')
		$("#modal-img-erro").val('')
	}
	function enviarFotoAxios(){
		var formData = new FormData();
		var imagefile = document.querySelector('#imgInp');
		formData.append("image", imagefile.files[0]);
		axios.post('https://nauru-3732.appspot.com/tempofotos', formData, {
			headers: {
			'Content-Type': 'multipart/form-data'
			}
		})
		.then(response => { 
			console.log(response)
		})
		.catch(error => {
			console.log(error)
		});
	}
	$("#modal-img-btnsalvar").click(function (){
		$('#loaderImg').removeClass('displayNone')
		$('#imgConteudo').addClass('displayNone')
		$('#imgFooter').addClass('displayNone')
		let campo = $("#modal-img-modnome").val()
		let dado = $("#modal-img-input").val()
		let file = $('#imgInp')[0].files[0]
		var uid = new ShortUniqueId()
		let geUid = uid.randomUUID(13)
		var ref = firebase.storage().ref('tempfotos').child(geUid+'.jpg')
		ref.put(file).then(function(snapshot) {
			dados[campo] = 'https://firebasestorage.googleapis.com/v0/b/nauru-3732.appspot.com/o/tempfotos%2F'+ geUid +'.jpg?alt=media'
			$('#imgConteudo').removeClass('displayNone')
			$('#imgFooter').removeClass('displayNone')
			$('#loaderImg').addClass('displayNone')
			AtualizarDados()
			CloseModalImg()
		  });		
	})

	$("[data-changeimg]").click(function (){
		let campo = $(this).data('changeimg')
		OpenModalImg(campo)
	})
	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {
		    
		    //var input = $(this).parents('.input-group').find(':hidden'),
		    var input = $("#ns-h"),
		        log = label;
		    
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }
	    
		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        
		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		        }
		        
		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
		}); 
	/** ICONE */
	function AtualizarIcos(){
		$("[data-changeicone]").removeClass()
		$("[data-changeicone='sobreprimeiroicone']").attr('class', 'ns mbr-iconfont '+ dados.sobreprimeiroicone)
		$("[data-changeicone='sobresegundoicone']").attr('class', 'ns mbr-iconfont '+ dados.sobresegundoicone)
		$("[data-changeicone='sobreterceiroicone']").attr('class', 'ns mbr-iconfont '+ dados.sobreterceiroicone)
	
	}
	$('#modalico').on('hidden.bs.modal', function (e) {
		LimpaModalIco()
	  })
	function OpenModalIco(dado){
		$('#modalico').modal('show')
		$("#modal-ico-input").val(dados[dado])
	}
	function CloseModalIco(){
		$('#modalico').modal('hide')
	}
	function LimpaModalIco(){
		let campo = $('#modal-ico-input').val()
		$("[data-clickicon='"+campo+"']").removeClass('ico-sel')
		$("#modal-ico-input").val('')
		$("#modal-ico-erro").val('')
	}
	$("#modal-ico-btnsalvar").click(function (){
		let campo = $("#modal-ico-modnome").val()
		let dado = $("#modal-ico-input").val()
		dados[campo] = dado.replace(/<\/?[^>]+(>|$)/g, "")
		AtualizarDados()
		CloseModalIco()
	})
	$("[data-changeicone]").click(function (){
		
		let campo = $(this).data('changeicone')
		$("[data-clickicon='"+dados[campo]+"']").addClass('ico-sel')
		$("#modal-ico-modnome").val(campo)
		OpenModalIco(campo)
	})
	$("[data-clickicon]").click(function (){
		let campo = $(this).data('clickicon')
		let anterior = $("#modal-ico-input").val()
		$("[data-clickicon='"+anterior+"']").removeClass('ico-sel')
		$(this).addClass('ico-sel')
		$("#modal-ico-input").val(campo)
	})
	/** Galeria */
	$("#btnchangegaleriatitulo").click(() =>{
		alert("asdasd")
	})
	$('#modalgal').on('hidden.bs.modal', function (e) {
		LimpaModalGal()
	  })
	function OpenModalGal(campos){
		$('#modalgal').modal('show')
		$("#modal-gal-modnome-foto").val(campos[0].replace(/^\s+|\s+$/g,""))
		$("#modal-gal-modnome-titulo").val(campos[1].replace(/^\s+|\s+$/g,""))
		$("#modal-gal-modnome-texto").val(campos[2].replace(/^\s+|\s+$/g,""))
	}
	function CloseModalGal(){
		$('#modalgal').modal('hide')
	}
	function LimpaModalGal(){
		$("#modal-gal-input").val('')
		$("#modal-gal-erro").val('')
	}
	$("#btnchangegaltitulo").click(function (){
		let dado = $("#modal-gal-modnome-titulo").val()
		CloseModalGal()
		OpenModalTexto(dado)
	})
	$("#btnchangegaltexto").click(function (){
		let dado = $("#modal-gal-modnome-texto").val()
		CloseModalGal()
		OpenModalTexto(dado)
	})
	$("#btnchangegalfoto").click(function (){
		let dado = $("#modal-gal-modnome-foto").val()
		CloseModalGal()
		OpenModalImg(dado)
	})

	$("#modal-gal-btnsalvar").click(function (){
		let campo = $("#modal-gal-modnome").val()
		let dado = $("#modal-gal-input").val()
		dados[campo] = dado.replace(/<\/?[^>]+(>|$)/g, "")
		AtualizarDados()
		CloseModalGal()
	})
	$("[data-changegaleria]").click(function (){
		let campos = $(this).data('multiple').split(',')
		OpenModalGal(campos)
	})
	/** UTILS */
	function AtualizarDados(){
		AtualizarTextos()
		AtualizarImgs()
		AtualizarIcos()
		//AtualizarGaleria()
	}

	/** ./Editar conteudo */

	/** Mod Criar */
	$('#btnSairSistema').click(function(){
		$('.floating-menu-toggle-wrap').click ();
	})
	$('#scrollToTop a').click();
	
	/** ./Mod Criar */
	/** MENU  detalhes */
	function AtualizarCorSite(){
		let coratual = dados['corprincipal']
		$('.mbr-iconfont').css({"color": coratual});
		$('.cid-qUdh8t7m7q .navbar').css({"background": coratual});
		$('.cid-qUdlZlJhQ2').css({"background-color": coratual});
		$('.cid-qUdrafNgXF .card_back').css({"background-color": coratual});
		$('.cid-qUdhoy7hc5').css({"background": "linear-gradient(45deg,"+ coratual + ","+ coratual+")"});
		
	} 
	function AtualizarBolaCor(){
		let coratual = dados['corprincipal']
		//$("[data-corprincipal]").css({'background-color': this.data('corprincipal')})
		$("[data-corprincipal='"+coratual+"']").addClass('coractive')
	}
	function SalvarBolaCor(novacor){
		let coratual = dados['corprincipal']
		$("[data-corprincipal='"+coratual+"']").removeClass('coractive')
		dados['corprincipal'] = novacor
		$("[data-corprincipal='"+novacor+"']").addClass('coractive')
		AtualizarBolaCor()
		AtualizarCorSite()
		$('.floating-menu-toggle-wrap').click ();
	}
	$("[data-menu='detalhes']").click(function () {
		AtualizarBolaCor()
	})
	$("[data-corprincipal]").click(function () {
		let cor = $(this).data('corprincipal')
		SalvarBolaCor(cor)
	})
	$("#btnSalvarCorPrincipal").click(function (){
		SalvarBolaCor()
	})
	/** ./MENU */
	/** PUBLICAR */
	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	function verificaNome(){
		let nomeSite = $("#inputnome").val()
		
	}
	$("#btnPublicar").click(function (){
		$("#emailErro").text('')
		let email = $('#inputemail').val()
		if(validateEmail(email)){
			dados['email'] = email
			publicarSite()
			
			
		}else {
			$("#emailErro").text('Digite um email válido!')
		}
	})
	function TogglePublicar(){
		$("#progressPublicar").toggleClass('displayNone')
		$("#formPublicar").toggleClass('displayNone')
		$("#btnEnviarLi").toggleClass('displayNone')
		$("#txtEnviarLi").toggleClass('displayNone')
	}
	function publicarSite(){
		TogglePublicar()
		//let nomeSite = $("#inputnome").val()
		var uid = new ShortUniqueId()
		let geUid = uid.randomUUID(13)
		firebase.database().ref('v1/sites/pedidos/' + geUid ).set(dados)
		.then(function (){
			$("#publicado").toggleClass('displayNone')
			$("#progressPublicar").toggleClass('displayNone')
		})
	}
	/** ./PUBLICAR */
	/* Floating Menu
		**************************************************************/
	
		 var $floatingMenuToggle = $('.floating-menu-toggle-wrap'),
				$floatingMenu = $('.floating-header .main-navigation'),
				$floatingMenuItem = $('.floating-header .main-navigation .menu > li');
		if($floatingMenu.length) {
			$floatingMenuItem.each(function(index, element) {
				$(element).addClass('delay-' + index);
			});
	
			$floatingMenuToggle.click(function() {
			  var clicks = $(this).data('clicks');
			  if (clicks) {
					$floatingMenu.removeClass('is-visible');
					setTimeout(function(){
						$floatingMenuToggle.parent().removeClass('expanded');
					}, 500);
			  } else {
					$floatingMenuToggle.parent().addClass('expanded');
					$floatingMenu.addClass('is-visible');
			  }
			  $(this).data("clicks", !clicks);
			});
	
		}
	
		// Back Button
		var backBtnText = $floatingMenu.data( 'back-btn-text' ),
				subMenu = $( '.floating-header .main-navigation .sub-menu' );
	
		subMenu.each( function () {
			$( this ).prepend( '<li class="back-btn"><a href="#"><span class="mbri-left"></span>' + backBtnText + '</a></li>' );
		} );
	
		var hasChildLink = $( '.floating-header .menu-item-has-children > a' ),
			backBtn = $( '.floating-header .main-navigation .sub-menu .back-btn' );
	
		backBtn.on('click', function (e) {
			var self = this,
				parent = $( self ).parent(),
				siblingParent = $( self ).parent().parent().siblings().parent(),
				menu = $( self ).parents( '.menu' );
	
			parent.removeClass( 'in-view' );
			siblingParent.removeClass( 'off-view' );
	
			e.stopPropagation();
		});
	
		hasChildLink.on( 'click', function ( e ) {
			var self = this,
				parent = $( self ).parent().parent(),
				menu = $( self ).parents( '.menu' );
	
			parent.addClass( 'off-view' );
			$( self ).parent().find( '> .sub-menu' ).addClass( 'in-view' );
	
			e.preventDefault();
			return false;
		} );
		} );
		/******************************************************************/ 