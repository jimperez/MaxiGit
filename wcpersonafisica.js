/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:35:17.71
*/
gx.evt.autoSkip=!1;gx.define("wcpersonafisica",!0,function(n){var t,i;this.ServerClass="wcpersonafisica";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV16PersonaTipo=gx.fn.getControlValue("vPERSONATIPO");this.AV34DNI=gx.fn.getIntegerValue("vDNI",".")};this.Validv_Personafisicaapellido=function(){return this.validCliEvt("Validv_Personafisicaapellido",0,function(){try{var n=gx.util.balloon.getNew("vPERSONAFISICAAPELLIDO");if(this.AnyError=0,!gx.util.regExp.isMatch(this.AV9PersonaFisicaApellido,"^[A-ZÑ][A-ZÑ\\s\\']{1,60}$"))try{n.setError("Error!!! Solo puede ingresar letras [A-Z], Apóstrofes y sin espcacios al principio...");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Personafisicanombre=function(){return this.validCliEvt("Validv_Personafisicanombre",0,function(){try{var n=gx.util.balloon.getNew("vPERSONAFISICANOMBRE");if(this.AnyError=0,!gx.util.regExp.isMatch(this.AV10PersonaFisicaNombre,"^[A-ZÑ][A-ZÑ\\s]{1,60}$"))try{n.setError("Error!!! Solo puede ingresar letras [A-Z] y sin espcacios al principio...");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Personafisicatipodocumento=function(){return this.validCliEvt("Validv_Personafisicatipodocumento",0,function(){try{var n=gx.util.balloon.getNew("vPERSONAFISICATIPODOCUMENTO");if(this.AnyError=0,!(this.AV11PersonaFisicaTipoDocumento=="ND"||this.AV11PersonaFisicaTipoDocumento=="LE"||this.AV11PersonaFisicaTipoDocumento=="LC"||this.AV11PersonaFisicaTipoDocumento=="DNI"||this.AV11PersonaFisicaTipoDocumento=="CI"||this.AV11PersonaFisicaTipoDocumento=="LF"||this.AV11PersonaFisicaTipoDocumento=="LM"||this.AV11PersonaFisicaTipoDocumento=="Pas"||this.AV11PersonaFisicaTipoDocumento=="Niñ"||this.AV11PersonaFisicaTipoDocumento=="Ind"||this.AV11PersonaFisicaTipoDocumento=="CE"||""==this.AV11PersonaFisicaTipoDocumento))try{n.setError("Campo Persona Fisica Tipo Documento fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Personafisicafechanac=function(){return this.validCliEvt("Validv_Personafisicafechanac",0,function(){try{var n=gx.util.balloon.getNew("vPERSONAFISICAFECHANAC");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV13PersonaFisicaFechaNac)==0||new gx.date.gxdate(this.AV13PersonaFisicaFechaNac).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Persona Fisica Fecha Nac fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){};this.e11lx1_client=function(){return this.clearMessages(),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15lx1_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16lx1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,20,23,24,25,27,28,29,32,33,34,36,37,38,41,42,43,45,46,47,50,51,52,54,55,56,57,58,59,60,61,62,63,64,65,66];this.GXLastCtrlId=66;this.DVPANEL_PANELPERSONAFISICAContainer=gx.uc.getNew(this,15,0,"BootstrapPanel",this.CmpContext+"DVPANEL_PANELPERSONAFISICAContainer","Dvpanel_panelpersonafisica","DVPANEL_PANELPERSONAFISICA");i=this.DVPANEL_PANELPERSONAFISICAContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Datos de Persona Física","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"TABLECONTENT",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[17]={id:17,fld:"PANELPERSONAFISICA",grid:0};t[20]={id:20,fld:"TABLA2",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAFISICACUIL",gxz:"ZV8PersonaFisicaCuil",gxold:"OV8PersonaFisicaCuil",gxvar:"AV8PersonaFisicaCuil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8PersonaFisicaCuil=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8PersonaFisicaCuil=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPERSONAFISICACUIL",gx.O.AV8PersonaFisicaCuil,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8PersonaFisicaCuil=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPERSONAFISICACUIL",".")},nac:gx.falseFn};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Personafisicaapellido,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAFISICAAPELLIDO",gxz:"ZV9PersonaFisicaApellido",gxold:"OV9PersonaFisicaApellido",gxvar:"AV9PersonaFisicaApellido",ucs:[],op:[],ip:[29],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9PersonaFisicaApellido=n)},v2z:function(n){n!==undefined&&(gx.O.ZV9PersonaFisicaApellido=n)},v2c:function(){gx.fn.setControlValue("vPERSONAFISICAAPELLIDO",gx.O.AV9PersonaFisicaApellido,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV9PersonaFisicaApellido=this.val())},val:function(){return gx.fn.getControlValue("vPERSONAFISICAAPELLIDO")},nac:gx.falseFn};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Personafisicanombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAFISICANOMBRE",gxz:"ZV10PersonaFisicaNombre",gxold:"OV10PersonaFisicaNombre",gxvar:"AV10PersonaFisicaNombre",ucs:[],op:[],ip:[34],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10PersonaFisicaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10PersonaFisicaNombre=n)},v2c:function(){gx.fn.setControlValue("vPERSONAFISICANOMBRE",gx.O.AV10PersonaFisicaNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10PersonaFisicaNombre=this.val())},val:function(){return gx.fn.getControlValue("vPERSONAFISICANOMBRE")},nac:gx.falseFn};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Personafisicatipodocumento,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAFISICATIPODOCUMENTO",gxz:"ZV11PersonaFisicaTipoDocumento",gxold:"OV11PersonaFisicaTipoDocumento",gxvar:"AV11PersonaFisicaTipoDocumento",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV11PersonaFisicaTipoDocumento=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11PersonaFisicaTipoDocumento=n)},v2c:function(){gx.fn.setComboBoxValue("vPERSONAFISICATIPODOCUMENTO",gx.O.AV11PersonaFisicaTipoDocumento)},c2v:function(){this.val()!==undefined&&(gx.O.AV11PersonaFisicaTipoDocumento=this.val())},val:function(){return gx.fn.getControlValue("vPERSONAFISICATIPODOCUMENTO")},nac:gx.falseFn};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAFISICANRODOCUMENTO",gxz:"ZV12PersonaFisicaNroDocumento",gxold:"OV12PersonaFisicaNroDocumento",gxvar:"AV12PersonaFisicaNroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12PersonaFisicaNroDocumento=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV12PersonaFisicaNroDocumento=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPERSONAFISICANRODOCUMENTO",gx.O.AV12PersonaFisicaNroDocumento,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12PersonaFisicaNroDocumento=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPERSONAFISICANRODOCUMENTO",".")},nac:gx.falseFn};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Personafisicafechanac,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAFISICAFECHANAC",gxz:"ZV13PersonaFisicaFechaNac",gxold:"OV13PersonaFisicaFechaNac",gxvar:"AV13PersonaFisicaFechaNac",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[47],ip:[47],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13PersonaFisicaFechaNac=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13PersonaFisicaFechaNac=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vPERSONAFISICAFECHANAC",gx.O.AV13PersonaFisicaFechaNac,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13PersonaFisicaFechaNac=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vPERSONAFISICAFECHANAC")},nac:gx.falseFn};t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,lvl:0,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAFISICASEXO",gxz:"ZV14PersonaFisicaSexo",gxold:"OV14PersonaFisicaSexo",gxvar:"AV14PersonaFisicaSexo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV14PersonaFisicaSexo=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14PersonaFisicaSexo=n)},v2c:function(){gx.fn.setComboBoxValue("vPERSONAFISICASEXO",gx.O.AV14PersonaFisicaSexo)},c2v:function(){this.val()!==undefined&&(gx.O.AV14PersonaFisicaSexo=this.val())},val:function(){return gx.fn.getControlValue("vPERSONAFISICASEXO")},nac:gx.falseFn};t[54]={id:54,fld:"",grid:0};t[55]={id:55,fld:"",grid:0};t[56]={id:56,lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAFISICAFOTO",gxz:"ZV15PersonaFisicaFoto",gxold:"OV15PersonaFisicaFoto",gxvar:"AV15PersonaFisicaFoto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15PersonaFisicaFoto=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15PersonaFisicaFoto=n)},v2c:function(){gx.fn.setMultimediaValue("vPERSONAFISICAFOTO",gx.O.AV15PersonaFisicaFoto,gx.O.AV39Personafisicafoto_GXI)},c2v:function(){gx.O.AV39Personafisicafoto_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV15PersonaFisicaFoto=this.val())},val:function(){return gx.fn.getBlobValue("vPERSONAFISICAFOTO")},val_GXI:function(){return gx.fn.getControlValue("vPERSONAFISICAFOTO_GXI")},gxvar_GXI:"AV39Personafisicafoto_GXI",nac:gx.falseFn};t[57]={id:57,fld:"",grid:0};t[58]={id:58,fld:"",grid:0};t[59]={id:59,fld:"BTNCONFIRMAR",grid:0,evt:"e11lx1_client"};t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,fld:"",grid:0};t[64]={id:64,fld:"BTNENTER",grid:0,evt:"e15lx1_client",std:"ENTER"};t[65]={id:65,fld:"",grid:0};t[66]={id:66,fld:"BTNCANCEL",grid:0,evt:"e16lx1_client"};this.AV8PersonaFisicaCuil=0;this.ZV8PersonaFisicaCuil=0;this.OV8PersonaFisicaCuil=0;this.AV9PersonaFisicaApellido="";this.ZV9PersonaFisicaApellido="";this.OV9PersonaFisicaApellido="";this.AV10PersonaFisicaNombre="";this.ZV10PersonaFisicaNombre="";this.OV10PersonaFisicaNombre="";this.AV11PersonaFisicaTipoDocumento="";this.ZV11PersonaFisicaTipoDocumento="";this.OV11PersonaFisicaTipoDocumento="";this.AV12PersonaFisicaNroDocumento=0;this.ZV12PersonaFisicaNroDocumento=0;this.OV12PersonaFisicaNroDocumento=0;this.AV13PersonaFisicaFechaNac=gx.date.nullDate();this.ZV13PersonaFisicaFechaNac=gx.date.nullDate();this.OV13PersonaFisicaFechaNac=gx.date.nullDate();this.AV14PersonaFisicaSexo="";this.ZV14PersonaFisicaSexo="";this.OV14PersonaFisicaSexo="";this.AV39Personafisicafoto_GXI="";this.AV15PersonaFisicaFoto="";this.ZV15PersonaFisicaFoto="";this.OV15PersonaFisicaFoto="";this.AV8PersonaFisicaCuil=0;this.AV9PersonaFisicaApellido="";this.AV10PersonaFisicaNombre="";this.AV11PersonaFisicaTipoDocumento="";this.AV12PersonaFisicaNroDocumento=0;this.AV13PersonaFisicaFechaNac=gx.date.nullDate();this.AV14PersonaFisicaSexo="";this.AV15PersonaFisicaFoto="";this.AV16PersonaTipo="";this.AV34DNI=0;this.Events={e15lx1_client:["ENTER",!0],e16lx1_client:["CANCEL",!0],e11lx1_client:["'DOCONFIRMAR'",!1]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[],[]];this.EvtParms["'DOCONFIRMAR'"]=[[],[]];this.EvtParms.VALIDV_PERSONAFISICAAPELLIDO=[[],[]];this.EvtParms.VALIDV_PERSONAFISICANOMBRE=[[],[]];this.EvtParms.VALIDV_PERSONAFISICATIPODOCUMENTO=[[],[]];this.EvtParms.VALIDV_PERSONAFISICAFECHANAC=[[],[]];this.EnterCtrl=["BTNENTER"];this.setVCMap("AV16PersonaTipo","vPERSONATIPO",0,"char",1,0);this.setVCMap("AV34DNI","vDNI",0,"int",8,0);this.Initialize()})