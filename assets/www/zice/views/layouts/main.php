<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

    <head>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <title><?php echo CHtml::encode($this->pageTitle); ?></title>
        <?php Yii::app()->bootstrap->register();
        Yii::app()->bootstrap->init();
        ?>
        <script type="text/javascript">
    var PHPtheme = "<?php echo Yii::app()->theme->baseUrl; ?>";
    var PHPbase = "<?php echo Yii::app()->baseUrl; ?>";
</script>
        <!-- Link shortcut icon-->
        <link rel="shortcut icon" type="image/ico" href="<?php echo Yii::app()->theme->baseUrl; ?>/images/favicon2.html" /> 
        <!-- Link css-->
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/zice.style.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/icon.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/ui-custom.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/timepicker.css"  />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/colorpicker/css/colorpicker.css"  />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/elfinder/css/elfinder.css" />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/datatables/dataTables.css"  />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/validationEngine/validationEngine.jquery.css" />

        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/jscrollpane/jscrollpane.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/fancybox/jquery.fancybox.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/tipsy/tipsy.css" media="all" />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/editor/jquery.cleditor.css"  />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/chosen/chosen.css" />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/confirm/jquery.confirm.css" />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/sourcerer/sourcerer.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/fullcalendar/fullcalendar.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/components/Jcrop/jquery.Jcrop.css"  />


<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="components/flot/excanvas.min.js"></script><![endif]-->


    </head>        
    <body class="dashborad">        
        <div id="alertMessage" class="error"></div> 

        <div id="header" >
            <div id="account_info"> 
                <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/avatar.png" alt="Online" class="avatar" />
                <div class="setting" title="Profile Setting"><b>Selamat Datang </b> <b class="red"><?php echo Yii::app()->user->name;?></b><img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/gear.png" class="gear"  alt="Profile Setting" ></div>
                <div class="logout" title="Disconnect"><b >Logout</b> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/connect.png" name="connect" class="disconnect" alt="connect" ></div> 
            </div>
        </div> <!--//  header -->
        <div id="shadowhead"></div>
        <div id="hide_panel"> 
            <a class="butAcc" rel="0" id="show_menu"></a>
            <a class="butAcc" rel="1" id="hide_menu"></a>
            <a class="butAcc" rel="0" id="show_menu_icon"></a>
            <a class="butAcc" rel="1" id="hide_menu_icon"></a>
        </div>           

        <div id="left_menu">
            <ul id="main_menu" class="main_menu">
                <li class="limenu select" ><a href="<?php echo Yii::app()->request->baseUrl; ?>"><span class="ico gray shadow home" ></span><b>Dashboard</b></a></li>
                <li class="limenu" ><a href="<?php echo $this->createUrl('goodsIn/list') ?>"><span class="ico gray  shadow "></span><b>Handling Masuk</b></a></li>
                <li class="limenu" ><a href="<?php echo $this->createUrl('goodsOut/list') ?>"><span class="ico gray  shadow "></span><b>Handling Keluar</b></a> </li>
                <li class="limenu" ><a href="#" ><span class="ico gray shadow firewall"></span><b>Reports</b></a>
                    <ul>
                        <li ><a href="<?php echo $this->createUrl('goodsIn/report') ?>"> Handling Masuk </a></li>
                        <li ><a href="<?php echo $this->createUrl('goodsOut/report') ?>"> Handling Keluar </a></li>
                        <li ><a href="#"> Goods Stocks </a></li>
                    </ul>
                </li>
                <li class="limenu" ><a href="#" ><span class="ico gray shadow spreadsheet"></span><b>Master</b></a>
                    <ul>
                        <li><a href="<?php echo $this->createUrl('customer/list') ?>">Customer </a>
                        <li><a href="<?php echo $this->createUrl('kontrak/list') ?>">Kontrak </a>
                            <!--<ul >
                                <li ><a href="<?php echo $this->createUrl('customer/list') ?>"> List Customer </a></li>
                                <li ><a href="<?php echo $this->createUrl('customer/create') ?>"> Tambah Customer </a></li>
                            </ul>-->
                        </li>
                        <li ><a href="<?php echo $this->createUrl('item/list') ?>">Item </a></li>
                        <li ><a href="<?php echo $this->createUrl('itemGroup/list') ?>">Group Item </a></li>
                        <li ><a href="<?php echo $this->createUrl('unitOfMeasure/list') ?>">Satuan </a></li>
                        <li ><a href="<?php echo $this->createUrl('warehouse/list') ?>">Gudang </a></li>
                        <li ><a href="<?php echo $this->createUrl('whGroup/list') ?>">Group Gudang </a></li>
                        <li ><a href="<?php echo $this->createUrl('whLocation/list') ?>">Lokasi Gudang </a></li>
                        <li ><a href="<?php echo $this->createUrl('charges/list') ?>">Charges </a></li>
                        <li ><a href="<?php echo $this->createUrl('chargeType/list') ?>">Charges Tipe </a></li>
                    </ul>
                </li>
                <li class="limenu" ><a href="#" ><span class="ico gray shadow window"></span><b>Users</b></a>
                    <ul>
                        <li ><a href="<?php echo $this->createUrl('user/list') ?>"><b>Users</b></a>
                            <!--<ul >
                                <li ><a href="<?php echo $this->createUrl('user/list') ?>"> List Users </a></li>
                                <li ><a href="<?php echo $this->createUrl('user/create') ?>"> Add Users </a></li>
                            </ul>-->
                        </li>
                        <li ><a href="#"><b>Roles</b></a></li>
                        <li ><a href="#"><b>Elements</b></a></li>
                    </ul>
                </li>
                <li class="limenu" ><a href="#" ><span class="ico gray shadow abacus"></span><b>Settings</b></a>
                    <ul>
                        <li ><a href="#"> SMS </a></li>
                        <li ><a href="#"> Email </a></li>
                        <li ><a href="#"> Notifications </a></li>
                    </ul>
                </li>
                <li class="limenu" ><a href="#" ><span class="ico gray shadow location"></span><b>Help</b></a>
                </li>

            </ul>
        </div>


        <div id="content-zice">
            <div class="inner">
            	<div class="logo"><img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/logo/header.png" alt="header"/></div>
                <div class="topcolumn">
                    <ul  id="shortcut">
                        <li> <a href="<?php echo $this->createUrl('/site/index') ?>" title="Back To home"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/icon/shortcut/home.png" alt="home"/><strong>Home</strong> </a> </li>
                        <li> <a href="#" title="Website Graph"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/icon/shortcut/graph.png" alt="graph"/><strong>Graph</strong> </a> </li>
                        <li> <a href="#" title="Setting" > <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/icon/shortcut/setting.png" alt="setting" /><strong>Setting</strong></a> </li> 
                        <li> <a href="#" title="Messages"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/icon/shortcut/mail.png" alt="messages" /><strong>Message</strong></a><div class="notification" >10</div></li>
                    </ul>
                </div>
                <div class="clear"></div>
                    <?php echo $content ?>
                <div class="clear"></div>
                <div id="footer"> &copy; Copyright 2012 <span class="tip"><a  href="#" title="Zice Admin" >Your Company Name</a> </span> </div>
            </div> <!--// End inner -->
        </div> <!--// End content --> 
 
        <script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/js/jquery.cookie.js"></script>
        <script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/js/zice.custom.js"></script>    
    </body>
</html>
