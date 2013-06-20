$.fn.imgdata = function(key){
    return this.find('.dataImg li:eq('+key+')').text();
}
$.fn.hdata = function(key){
    return this.find('.dataSet li:eq('+key+')').text();
}
// options cookie 10 days
var options = {
    path: '/', 
    expires: 10
};
var buttonActions = {
    'hide_menu':function(){
        $.cookie('hide_','1', options);
        $('#hide_menu').hide();	
        $('body').addClass('nobg');		
        $('#left_menu,#load_menu').animate({
            left: "-213px"
        }, 200 );
        $('#show_menu').show();
        $('#shadowhead').css({
            position: "fixed"
        });	
        $('#content-zice').animate({
            marginLeft: "40px"
        }, 200, function(){
            imgRow();
            $(window).trigger("resize");
        });
    },	
    'show_menu':function(){		
        $(this).hide();	
        $.cookie('hide_','0', options);
        $('#hide_menu').show();
        $('#left_menu,#load_menu').animate({
            left: "0px"
        }, 200 );
        $('#content-zice').animate({
            marginLeft: "240px"
        }, 200,function(){
            $('body').removeClass('nobg').addClass('dashborad');		
            $('#shadowhead').css({
                position: "absolute"
            });	
            imgRow(); 
            $(window).trigger("resize");
        } );
    },
    'show_menu_icon':function() { 
        $(this).hide();	
        $.cookie('hide_','0', options);
        $('#left_menu,#load_menu').animate({
            left: "0px"
        }, 200 );
        $('#content-zice').animate({
            marginLeft: "70px"
        }, 200, function(){
            imgRow();
        });
        $('#hide_menu_icon').show();	
        $('#main_menu').removeClass('main_menu').addClass('iconmenu');
        $('#main_menu li').each(function() {	  
            var title=$(this).find('b').text();
            $(this).find('a').attr('title',title);		
        });
        $('#main_menu li a').find('b').hide();
        $('#main_menu li ').find('ul').hide();
    },
    'hide_menu_icon':function() { 
        $(this).hide();	
        $.cookie('hide_','1', options);	 
        $('#left_menu,#load_menu').animate({
            left: "-213px"
        }, 200 ,function(){
            $('#main_menu').removeClass('iconmenu ').addClass('main_menu');
            $('#main_menu li a').find('b').show();											  
        });
        $('#content-zice').animate({
            marginLeft: "20px"
        }, 200, function(){
            imgRow();
        });
        $('#show_menu_icon').show();	
    },
    'close_windows':function(){
        $.fancybox.close(); 
        ResetForm();
    }	
}

$(document).ready(function(){	

	


    });	
function MenuSmall(){	     
    $('body').addClass('nobg');
    $('#hide_menu').hide();
    $('#show_menu').hide();			
    $('#shadowhead').css({
        position: "fixed"
    });	
    $(' .column_left, .column_right ,.grid2,.grid3,.grid1').css({
        width:"100%",
        float:"none",
        padding:"0",
        marginBottom: "20px"
    });	
    $('#left_menu,#load_menu').css({
        left: "0px"
    });
    $('#content-zice').css({
        marginLeft: "70px"
    });	
    $('#main_menu').removeClass('main_menu').addClass('iconmenu');
    $('#main_menu li').each(function() {	  
        var title=$(this).find('b').text();
        $(this).find('a').attr('title',title);		
    });
    $('#main_menu li a').find('b').hide();	
    $('#main_menu li ').find('ul').hide();
}
function MenuBig(){
    $('#main_menu').removeClass('iconmenu ').addClass('main_menu');
    $('#main_menu li a').find('b').show();	
    $('#hide_menu_icon').hide();
    $('#show_menu_icon').hide();
    $('.column_left,.column_right,.grid2').css({
        width:"49%",
        float:"left"
    });
    $('.column_left').css({
        'padding-right':"1%"
    });
    $('.column_right').css({
        'padding-left':"1%"
    });
    $('.grid1').css({
        width:"24%",
        float:"left"
    });
    $('.grid3').css({
        width:"74%",
        float:"left"
    });	
    $('#left_menu,#load_menu').css({
        left: "0px"
    });
    $('#content-zice').css({
        marginLeft: "70px"
    });
    //            $('body').removeClass('nobg').addClass('dashborad');
    $('#shadowhead').css({
        position: "absolute"
    });	
}

$(function() {	
    MenuSmall();
//        $('#left_menu').hover(function (){
//            MenuBig();
//        },function (){
//            MenuSmall();
//        } );
        
    $('#left_menu').hover(function() {
        clearTimeout($(this).data('timeout'));
        MenuBig();
    }, function() {
        var t = setTimeout(function() {
            MenuSmall();
        }, 1000);
        $(this).data('timeout', t);
    });
    //LResize();
    //    $(window).resize(function(){
    //        LResize();
    //    });
    $(window).scroll(function (){
        scrollmenu();
    });
		
    //close_windows,hide_menu,show_menu
    $('.butAcc').live('click',function(e){				   
        if(buttonActions[this.id]){
            buttonActions[this.id].call(this);
        }
        e.preventDefault();
    });
	
    // submit form 
    $('a.submit_form').live('click',function(){
        var form_id=$(this).parents('form').attr('id');
        $("#"+form_id).submit();
    })	

    // logout  
    $('.logout').live('click',function() { 
        var str="Logout"; 
        var overlay="1"; 
        loading(str,overlay);
        setTimeout("unloading()",1500);
        setTimeout( "window.location.href='"+PHPbase+"/logout'", 2000 );
    });
    // icon  Logout 
    $('div.logout').hover(function(){
        var name=$(this).find('img').attr('alt');
        $(this).find('img').animate({
            opacity: 0.4
        }, 200, function(){
            $(this).attr('src',PHPtheme+'/images/'+name+'.png').animate({
                opacity: 1
            }, 500);									 
        });
    },function(){
        var name=$(this).find('img').attr('name');
        $(this).find('img').animate({
            opacity: 0.5
        }, 200, function(){
            $(this).attr('src',PHPtheme+'/images/'+name+'.png').animate({
                opacity: 1
            }, 500);									 
        });
    })
    // icon  setting 
    $('div.setting').hover(function(){
        $(this).find('img').addClass('gearhover');
    },function(){
        $(this).find('img').removeClass('gearhover');
    })
	
    // shoutcutBox   Hover
    $('.shoutcutBox').hover(function(){
        $(this).animate({
            left: '+=15'
        }, 200);
    },function(){
        $(this).animate({
            left: '0'
        }, 200);
    })
	
    // mainmenu   Hover
    /*	$('.main_menu li ul li a').live({
        mouseenter: function(){
		   $(this).animate({ paddingLeft: '35'}, 200);
           },
        mouseleave: function(){
		$(this).animate({ paddingLeft: '30'}, 200);
           }
       }
    );*/


    // hide notify  Message with click
    $('#alertMessage').live('click',function(){
        $(this).stop(true,true).animate({
            opacity: 0,
            right: '-20'
        }, 500,function(){
            $(this).hide();
        });						 
    });
});

function showTooltip(x, y, contents) {
    $('<div id="tooltip" >' + contents + '</div>').css({
        position: 'absolute',
        display: 'none',
        top: y -13,
        left: x + 10
    }).appendTo("body").show();
}

var previousPoint = null;
$(".chart_flot").bind("plothover", function(event, pos, item) {
												
    $("#x").text(pos.x);
    $("#y").text(pos.y);

    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;

            $(this).attr('title',item.series.label);
            $(this).trigger('click');
            $("#tooltip").remove();
            var x = item.datapoint[0],
            y = item.datapoint[1];

            showTooltip(item.pageX, item.pageY, "<b>" + item.series.label + "</b> : " + y);
        }
    } else {
        $("#tooltip").remove();
        previousPoint = null;
    }
});	


// check browser fixbug
var mybrowser=navigator.userAgent;
if(mybrowser.indexOf('MSIE')>0){
    $(function() {	
        $('.formEl_b fieldset').css('padding-top', '0');
        $('div.section label small').css('font-size', '10px');
        $('div.section  div .select_box').css({
            'margin-left':'-5px'
        });
        $('.iPhoneCheckContainer label').css({
            'padding-top':'6px'
        });
        $('.uibutton').css({
            'padding-top':'6px'
        });
        $('.uibutton.icon:before').css({
            'top':'1px'
        });
        $('.dataTables_wrapper .dataTables_length ').css({
            'margin-bottom':'10px'
        });
    });
}
if(mybrowser.indexOf('Firefox')>0){
    $(function() {	
        $('.formEl_b fieldset  legend').css('margin-bottom', '0px');	
        $('table .custom-checkbox label').css('left', '3px');
    });
}	
if(mybrowser.indexOf('Presto')>0){
    $('select').css('padding-top', '8px');
}
if(mybrowser.indexOf('Chrome')>0){
    $(function() {	
        $('div.tab_content  ul.uibutton-group').css('margin-top', '-40px');
        $('div.section  div .select_box').css({
            'margin-top':'0px',
            'margin-left':'-2px'
        });
        $('select').css('padding', '6px');
        $('table .custom-checkbox label').css('left', '3px');
    });
}		
if(mybrowser.indexOf('Safari')>0){}		



	  
	  
function fileDialogCallback(callback,type,input){
    $('<div id="finder_'+callback+'"/>').elfinder({
        url : 'components/elfinder/connectors/php/connector-'+type+'.php', 
        editorCallback : function(url) {
            $('#'+input).val(url);
        },
        closeOnEditorCallback : true, 
        dialog : {
            title : 'File manager',
            modal : true,
            width : 700
        }
    })							   
}
function fileDialog(callback,type){
    $('<div id="finder_'+callback+'"/>').elfinder({
        url : 'components/elfinder/connectors/php/connector-'+type+'.php',
        dialog : {
            title : 'File manager',
            modal : true,
            width : 700
        }
    })							   
}
		  
function Delete(data,name,row,type,dataSet){
    var loadpage = dataSet.hdata(0);
    var url = dataSet.hdata(1);
    var table = dataSet.hdata(2);
    var data = data+"&tabel="+table;
    $.confirm({
        'title': '_DELETE DIALOG BOX',
        'message': " <strong>YOU WANT TO DELETE </strong><br /><font color=red>' "+ name +" ' </font> ",
        'buttons': {
            'Yes': {
                'class': 'special',
                'action': function(){
                    loading('Checking');
                    $('#preloader').html('Deleting...');
                    if(type==0){
                        row.slideUp(function(){
                            showSuccess('Success',5000);
                            unloading();
                        });
                        return false;
                    }
                    if(type==1){
                        row.slideUp(function(){
                            showSuccess('Success',5000);
                            unloading();
                        });
                        return false;
                    }
                    setTimeout("unloading();",900); 		 
                }
            },
            'No'	: {
                'class'	: ''
            }
        }
    });
}

function albumDelete(data,name,dataSet){
    var loadpage = dataSet.hdata(0);
    var row = dataSet.hdata(2);
    $.confirm({
        'title': '_DELETE DIALOG BOX',
        'message': "<strong>YOU WANT TO DELETE </strong><br /><font color=red>' "+ name +" ' </font> ",
        'buttons': {
            'Yes': {
                'class': 'special',
                'action': function(){
                    loading('Checking',1);
                    setTimeout("unloading()",1500); 	  
                }
            },
            'No'	: {
                'class'	: ''
            }
        }
    });
}
	  
	  
function loadalbum(albumid){
    loading('Loading');
    $(' .albumImagePreview').show();
    imgRow()
    $(' .albumImagePreview').fadeOut(function(){ 
														
        $("#uploadAlbum").attr('href','modalupload.html'); 		
        $('#uploadAlbum').removeClass('disable secure ').addClass('special add ');
        $('#uploadButtondisable').css({
            'display':'none'
        });
        $('.screen-msg').hide();
        setTimeout("unloading()",500); 	 																	
    }).delay(400).fadeIn();			
			   
}


function ResetForm(){
    $('form').each(function(index) {	  
        var form_id=$('form:eq('+index+')').attr('id');
        if(form_id){ 
            $('#'+form_id).get(0).reset(); 
            $('#'+form_id).validationEngine('hideAll');
            var editor=$('#'+form_id).find('#editor').attr('id');
            if(editor){
                $('#editor').cleditor()[0].clear();
            }
        } 
    });	
}


function hexFromRGB(r, g, b) {
    var hex = [
    r.toString( 16 ),
    g.toString( 16 ),
    b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
            hex[ nr ] = "0" + val;
        }
    });
    return hex.join( "" ).toUpperCase();
}
function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
    green = $( "#green" ).slider( "value" ),
    blue = $( "#blue" ).slider( "value" ),
    hex = hexFromRGB( red, green, blue );
    $( "#swatch" ).css( "background-color", "#" + hex );
}
	  

	  
function showError(str,delay){	
    if(delay){
        $('#alertMessage').removeClass('success info warning').addClass('error').html(str).stop(true,true).show().animate({
            opacity: 1,
            right: '10'
        }, 500,function(){
            $(this).delay(delay).animate({
                opacity: 0,
                right: '-20'
            }, 500,function(){
                $(this).hide();
            });																														   																											
        });
        return false;
    }
    $('#alertMessage').addClass('error').html(str).stop(true,true).show().animate({
        opacity: 1,
        right: '10'
    }, 500);	
}
function showSuccess(str,delay){
    if(delay){
        $('#alertMessage').removeClass('error info warning').addClass('success').html(str).stop(true,true).show().animate({
            opacity: 1,
            right: '10'
        }, 500,function(){
            $(this).delay(delay).animate({
                opacity: 0,
                right: '-20'
            }, 500,function(){
                $(this).hide();
            });																														   																											
        });
        return false;
    }
    $('#alertMessage').addClass('success').html(str).stop(true,true).show().animate({
        opacity: 1,
        right: '10'
    }, 500);	
}
function showWarning(str,delay){
    if(delay){
        $('#alertMessage').removeClass('error success  info').addClass('warning').html(str).stop(true,true).show().animate({
            opacity: 1,
            right: '10'
        }, 500,function(){
            $(this).delay(delay).animate({
                opacity: 0,
                right: '-20'
            }, 500,function(){
                $(this).hide();
            });																														   																											
        });
        return false;
    }
    $('#alertMessage').addClass('warning').html(str).stop(true,true).show().animate({
        opacity: 1,
        right: '10'
    }, 500);	
}
function showInfo(str,delay){
    if(delay){
        $('#alertMessage').removeClass('error success  warning').html(str).stop(true,true).show().animate({
            opacity: 1,
            right: '10'
        }, 500,function(){
            $(this).delay(delay).animate({
                opacity: 0,
                right: '-20'
            }, 500,function(){
                $(this).hide();
            });																														   																											
        });
        return false;
    }
    $('#alertMessage').html(str).stop(true,true).show().animate({
        opacity: 1,
        right: '10'
    }, 500);	
}


	  
function hide_panel() { 
    if(Get_Cookie('hide_')=='1'){
        $('#show_menu').show();
    }else{
        $('#hide_menu').show();
    }
}	
	  
	  
function loading(name,overlay) { 
    $('body').append('<div id="overlay"></div><div id="preloader">'+name+'..</div>');
    if(overlay==1){
        $('#overlay').css('opacity',0.4).fadeIn(400,function(){
            $('#preloader').fadeIn(400);
        });
        return  false;
    }
    $('#preloader').fadeIn();	  
}
	   
	   
function unloading() { 
    $('#preloader').fadeOut(400,function(){
        $('#overlay').fadeOut();
        $.fancybox.close();
    }).remove();
}
	
function imgRow(){	
    var maxrow=$('.albumpics').width();
    if(maxrow){
        maxItem= Math.floor(maxrow/160);
        maxW=maxItem*160;
        mL=(maxrow-maxW)/2;
        $('.albumpics ul').css({
            'width'	:	maxW	,
            'marginLeft':mL
        })
    }
}	
function scrollmenu(){	
    if($(window).scrollTop()>=1){			   
        $("#header ").css("z-index", "50"); 
    }else{
        $("#header ").css("z-index", "47"); 
    }
}
	
	
function LResize(){	
    imgRow();
    scrollmenu();
    if($.cookie("hide_")){
        $('#hide_panel').show();	
    }
    $("#shadowhead").show();
    if($(window).width()<=768){
        $('body').addClass('nobg');
        $('#hide_menu').hide();
        $('#show_menu').hide();			
        $('#shadowhead').css({
            position: "fixed"
        });	
        $(' .column_left, .column_right ,.grid2,.grid3,.grid1').css({
            width:"100%",
            float:"none",
            padding:"0",
            marginBottom: "20px"
        });			  	
        if($.cookie("hide_")=='1'){
            $('#show_menu_icon').show();
            $('#hide_menu_icon').hide();
            $('#left_menu,#load_menu').css({
                left: "-213px"
            });
            $('#content-zice').css({
                marginLeft: "20px"
            });	
        }else{
            $('#hide_menu_icon').show();
            $('#show_menu_icon').hide();
            $('#left_menu,#load_menu').css({
                left: "0px"
            });
            $('#content-zice').css({
                marginLeft: "70px"
            });	
            $('#main_menu').removeClass('main_menu').addClass('iconmenu');
            $('#main_menu li').each(function() {	  
                var title=$(this).find('b').text();
                $(this).find('a').attr('title',title);		
            });
            $('#main_menu li a').find('b').hide();	
            $('#main_menu li ').find('ul').hide();
        }	
    }
    if($(window).width()>1024) {
        $('#main_menu').removeClass('iconmenu ').addClass('main_menu');
        $('#main_menu li a').find('b').show();	
        $('#hide_menu_icon').hide();
        $('#show_menu_icon').hide();
        $('.column_left,.column_right,.grid2').css({
            width:"49%",
            float:"left"
        });
        $('.column_left').css({
            'padding-right':"1%"
        });
        $('.column_right').css({
            'padding-left':"1%"
        });
        $('.grid1').css({
            width:"24%",
            float:"left"
        });
        $('.grid3').css({
            width:"74%",
            float:"left"
        });
		 
        if($.cookie("hide_")=='1'){
            $('#show_menu').show();
            $('#hide_menu').hide();
            $('body').addClass('nobg');	
            $('#left_menu,#load_menu').css({
                left: "-213px"
            });
            $('#content-zice').css({
                marginLeft: "40px"
            });	
            $('#shadowhead').css({
                position: "fixed"
            });	
        }else{
            $('#hide_menu').show();
            $('#show_menu').hide();
            $('#left_menu,#load_menu').css({
                left: "0px"
            });
            $('#content-zice').css({
                marginLeft: "240px"
            });
            $('body').removeClass('nobg').addClass('dashborad');
            $('#shadowhead').css({
                position: "absolute"
            });	
        }	
		 	
    }else{
        $(' .column_left, .column_right ,.grid2,.grid3,.grid1').css({
            width:"100%",
            float:"none",
            padding:"0",
            marginBottom: "20px"
        });
    }
}