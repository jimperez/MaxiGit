/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:19:18.22
*/
gx.evt.autoSkip=!1;gx.define("creditocuotavigencia_generar",!1,function(){var n,t,i;this.ServerClass="creditocuotavigencia_generar";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A2137CreditoDescripcion=gx.fn.getControlValue("CREDITODESCRIPCION");this.A1040PlanNombre=gx.fn.getControlValue("PLANNOMBRE");this.A2138CreditoCuotaCosto=gx.fn.getDecimalValue("CREDITOCUOTACOSTO",".",",");this.A2139CreditoCuotaDesde=gx.fn.getDateValue("CREDITOCUOTADESDE");this.A2140CreditoCuotaHasta=gx.fn.getDateValue("CREDITOCUOTAHASTA");this.A267CreditoCuota=gx.fn.getIntegerValue("CREDITOCUOTA",".")};this.Valid_Creditoid=function(){return this.validCliEvt("Valid_Creditoid",0,function(){try{var n=gx.util.balloon.getNew("CREDITOID");this.AnyError=0;this.refreshOutputs([{av:"AV6Domingo",fld:"vDOMINGO",pic:""},{av:"AV8Lunes",fld:"vLUNES",pic:""},{av:"AV9Martes",fld:"vMARTES",pic:""},{av:"AV12Miercoles",fld:"vMIERCOLES",pic:""},{av:"AV7Jueves",fld:"vJUEVES",pic:""},{av:"AV14Viernes",fld:"vVIERNES",pic:""},{av:"AV13Sabado",fld:"vSABADO",pic:""}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e12i12_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14i11_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73];this.GXLastCtrlId=73;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);this.DVPANEL_DIASContainer=gx.uc.getNew(this,33,22,"BootstrapPanel","DVPANEL_DIASContainer","Dvpanel_dias","DVPANEL_DIAS");i=this.DVPANEL_DIASContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Días de la Semana","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Creditoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOID",gxz:"Z266CreditoId",gxold:"O266CreditoId",gxvar:"A266CreditoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A266CreditoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z266CreditoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CREDITOID",gx.O.A266CreditoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A266CreditoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CREDITOID",".")},nac:gx.falseFn};this.declareDomainHdlr(22,function(){});n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTANOMBRE",gxz:"Z2136CreditoCuotaNombre",gxold:"O2136CreditoCuotaNombre",gxvar:"A2136CreditoCuotaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2136CreditoCuotaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2136CreditoCuotaNombre=n)},v2c:function(){gx.fn.setControlValue("CREDITOCUOTANOMBRE",gx.O.A2136CreditoCuotaNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2136CreditoCuotaNombre=this.val())},val:function(){return gx.fn.getControlValue("CREDITOCUOTANOMBRE")},nac:gx.falseFn};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTAGENERAFECHA",gxz:"Z2690CreditoCuotaGeneraFecha",gxold:"O2690CreditoCuotaGeneraFecha",gxvar:"A2690CreditoCuotaGeneraFecha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2690CreditoCuotaGeneraFecha=n)},v2z:function(n){n!==undefined&&(gx.O.Z2690CreditoCuotaGeneraFecha=n)},v2c:function(){gx.fn.setComboBoxValue("CREDITOCUOTAGENERAFECHA",gx.O.A2690CreditoCuotaGeneraFecha);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2690CreditoCuotaGeneraFecha=this.val())},val:function(){return gx.fn.getControlValue("CREDITOCUOTAGENERAFECHA")},nac:gx.falseFn};this.declareDomainHdlr(30,function(){});n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[35]={id:35,fld:"DIAS",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,lvl:0,type:"boolean",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDOMINGO",gxz:"ZV6Domingo",gxold:"OV6Domingo",gxvar:"AV6Domingo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV6Domingo=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6Domingo=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setCheckBoxValue("vDOMINGO",gx.O.AV6Domingo,!0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6Domingo=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vDOMINGO")},nac:gx.falseFn,values:["true","false"]};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"boolean",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLUNES",gxz:"ZV8Lunes",gxold:"OV8Lunes",gxvar:"AV8Lunes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV8Lunes=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8Lunes=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setCheckBoxValue("vLUNES",gx.O.AV8Lunes,!0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8Lunes=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vLUNES")},nac:gx.falseFn,values:["true","false"]};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"boolean",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMARTES",gxz:"ZV9Martes",gxold:"OV9Martes",gxvar:"AV9Martes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV9Martes=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV9Martes=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setCheckBoxValue("vMARTES",gx.O.AV9Martes,!0)},c2v:function(){this.val()!==undefined&&(gx.O.AV9Martes=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vMARTES")},nac:gx.falseFn,values:["true","false"]};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"boolean",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMIERCOLES",gxz:"ZV12Miercoles",gxold:"OV12Miercoles",gxvar:"AV12Miercoles",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV12Miercoles=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV12Miercoles=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setCheckBoxValue("vMIERCOLES",gx.O.AV12Miercoles,!0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12Miercoles=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vMIERCOLES")},nac:gx.falseFn,values:["true","false"]};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,lvl:0,type:"boolean",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vJUEVES",gxz:"ZV7Jueves",gxold:"OV7Jueves",gxvar:"AV7Jueves",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV7Jueves=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV7Jueves=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setCheckBoxValue("vJUEVES",gx.O.AV7Jueves,!0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7Jueves=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vJUEVES")},nac:gx.falseFn,values:["true","false"]};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,lvl:0,type:"boolean",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vVIERNES",gxz:"ZV14Viernes",gxold:"OV14Viernes",gxvar:"AV14Viernes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV14Viernes=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV14Viernes=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setCheckBoxValue("vVIERNES",gx.O.AV14Viernes,!0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14Viernes=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vVIERNES")},nac:gx.falseFn,values:["true","false"]};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,lvl:0,type:"boolean",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSABADO",gxz:"ZV13Sabado",gxold:"OV13Sabado",gxvar:"AV13Sabado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV13Sabado=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13Sabado=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setCheckBoxValue("vSABADO",gx.O.AV13Sabado,!0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13Sabado=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vSABADO")},nac:gx.falseFn,values:["true","false"]};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"BTNENTER",grid:0,evt:"e12i12_client",std:"ENTER"};n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"BTNCANCEL",grid:0,evt:"e14i11_client"};this.A266CreditoId=0;this.Z266CreditoId=0;this.O266CreditoId=0;this.A2136CreditoCuotaNombre="";this.Z2136CreditoCuotaNombre="";this.O2136CreditoCuotaNombre="";this.A2690CreditoCuotaGeneraFecha="";this.Z2690CreditoCuotaGeneraFecha="";this.O2690CreditoCuotaGeneraFecha="";this.AV6Domingo=!1;this.ZV6Domingo=!1;this.OV6Domingo=!1;this.AV8Lunes=!1;this.ZV8Lunes=!1;this.OV8Lunes=!1;this.AV9Martes=!1;this.ZV9Martes=!1;this.OV9Martes=!1;this.AV12Miercoles=!1;this.ZV12Miercoles=!1;this.OV12Miercoles=!1;this.AV7Jueves=!1;this.ZV7Jueves=!1;this.OV7Jueves=!1;this.AV14Viernes=!1;this.ZV14Viernes=!1;this.OV14Viernes=!1;this.AV13Sabado=!1;this.ZV13Sabado=!1;this.OV13Sabado=!1;this.A266CreditoId=0;this.A2136CreditoCuotaNombre="";this.A2690CreditoCuotaGeneraFecha="";this.AV6Domingo=!1;this.AV8Lunes=!1;this.AV9Martes=!1;this.AV12Miercoles=!1;this.AV7Jueves=!1;this.AV14Viernes=!1;this.AV13Sabado=!1;this.A267CreditoCuota=0;this.A1040PlanNombre="";this.A2137CreditoDescripcion="";this.A2140CreditoCuotaHasta=gx.date.nullDate();this.A2139CreditoCuotaDesde=gx.date.nullDate();this.A2138CreditoCuotaCosto=0;this.A119PlanId=0;this.Events={e12i12_client:["ENTER",!0],e14i11_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9",hsh:!0},{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV6Domingo",fld:"vDOMINGO",pic:""},{av:"AV8Lunes",fld:"vLUNES",pic:""},{av:"AV9Martes",fld:"vMARTES",pic:""},{av:"AV12Miercoles",fld:"vMIERCOLES",pic:""},{av:"AV7Jueves",fld:"vJUEVES",pic:""},{av:"AV14Viernes",fld:"vVIERNES",pic:""},{av:"AV13Sabado",fld:"vSABADO",pic:""}],[{av:"AV6Domingo",fld:"vDOMINGO",pic:""},{av:"AV8Lunes",fld:"vLUNES",pic:""},{av:"AV9Martes",fld:"vMARTES",pic:""},{av:"AV12Miercoles",fld:"vMIERCOLES",pic:""},{av:"AV7Jueves",fld:"vJUEVES",pic:""},{av:"AV14Viernes",fld:"vVIERNES",pic:""},{av:"AV13Sabado",fld:"vSABADO",pic:""}]];this.EvtParms.START=[[{av:"AV6Domingo",fld:"vDOMINGO",pic:""},{av:"AV8Lunes",fld:"vLUNES",pic:""},{av:"AV9Martes",fld:"vMARTES",pic:""},{av:"AV12Miercoles",fld:"vMIERCOLES",pic:""},{av:"AV7Jueves",fld:"vJUEVES",pic:""},{av:"AV14Viernes",fld:"vVIERNES",pic:""},{av:"AV13Sabado",fld:"vSABADO",pic:""}],[{av:"AV6Domingo",fld:"vDOMINGO",pic:""},{av:"AV8Lunes",fld:"vLUNES",pic:""},{av:"AV9Martes",fld:"vMARTES",pic:""},{av:"AV12Miercoles",fld:"vMIERCOLES",pic:""},{av:"AV7Jueves",fld:"vJUEVES",pic:""},{av:"AV14Viernes",fld:"vVIERNES",pic:""},{av:"AV13Sabado",fld:"vSABADO",pic:""}]];this.EvtParms.ENTER=[[{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9",hsh:!0},{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9",hsh:!0},{av:"AV6Domingo",fld:"vDOMINGO",pic:""},{av:"AV8Lunes",fld:"vLUNES",pic:""},{av:"AV9Martes",fld:"vMARTES",pic:""},{av:"AV12Miercoles",fld:"vMIERCOLES",pic:""},{av:"AV7Jueves",fld:"vJUEVES",pic:""},{av:"AV14Viernes",fld:"vVIERNES",pic:""},{av:"AV13Sabado",fld:"vSABADO",pic:""}],[{av:"AV6Domingo",fld:"vDOMINGO",pic:""},{av:"AV8Lunes",fld:"vLUNES",pic:""},{av:"AV9Martes",fld:"vMARTES",pic:""},{av:"AV12Miercoles",fld:"vMIERCOLES",pic:""},{av:"AV7Jueves",fld:"vJUEVES",pic:""},{av:"AV14Viernes",fld:"vVIERNES",pic:""},{av:"AV13Sabado",fld:"vSABADO",pic:""}]];this.EvtParms.VALID_CREDITOID=[[{av:"AV6Domingo",fld:"vDOMINGO",pic:""},{av:"AV8Lunes",fld:"vLUNES",pic:""},{av:"AV9Martes",fld:"vMARTES",pic:""},{av:"AV12Miercoles",fld:"vMIERCOLES",pic:""},{av:"AV7Jueves",fld:"vJUEVES",pic:""},{av:"AV14Viernes",fld:"vVIERNES",pic:""},{av:"AV13Sabado",fld:"vSABADO",pic:""}],[{av:"AV6Domingo",fld:"vDOMINGO",pic:""},{av:"AV8Lunes",fld:"vLUNES",pic:""},{av:"AV9Martes",fld:"vMARTES",pic:""},{av:"AV12Miercoles",fld:"vMIERCOLES",pic:""},{av:"AV7Jueves",fld:"vJUEVES",pic:""},{av:"AV14Viernes",fld:"vVIERNES",pic:""},{av:"AV13Sabado",fld:"vSABADO",pic:""}]];this.EnterCtrl=["BTNENTER"];this.setVCMap("A2137CreditoDescripcion","CREDITODESCRIPCION",0,"char",30,0);this.setVCMap("A1040PlanNombre","PLANNOMBRE",0,"svchar",64,0);this.setVCMap("A2138CreditoCuotaCosto","CREDITOCUOTACOSTO",0,"decimal",6,2);this.setVCMap("A2139CreditoCuotaDesde","CREDITOCUOTADESDE",0,"date",8,0);this.setVCMap("A2140CreditoCuotaHasta","CREDITOCUOTAHASTA",0,"date",8,0);this.setVCMap("A267CreditoCuota","CREDITOCUOTA",0,"int",4,0);this.Initialize()});gx.wi(function(){gx.createParentObj(creditocuotavigencia_generar)})