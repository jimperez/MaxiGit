/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:35:18.62
*/
gx.evt.autoSkip=!1;gx.define("wcpersonajuridica",!0,function(n){var t,i;this.ServerClass="wcpersonajuridica";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV25PersonaTipo=gx.fn.getControlValue("vPERSONATIPO")};this.Validv_Personajuridicafechainicio=function(){return this.validCliEvt("Validv_Personajuridicafechainicio",0,function(){try{var n=gx.util.balloon.getNew("vPERSONAJURIDICAFECHAINICIO");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV23PersonaJuridicaFechaInicio)==0||new gx.date.gxdate(this.AV23PersonaJuridicaFechaInicio).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Persona Juridica Fecha Inicio fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}this.refreshOutputs([{ctrl:"vNATURALEZAJURIDICAID"},{av:"AV19NaturalezaJuridicaId",fld:"vNATURALEZAJURIDICAID",pic:"ZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Personajuridicafechacierreejercicio=function(){return this.validCliEvt("Validv_Personajuridicafechacierreejercicio",0,function(){try{var n=gx.util.balloon.getNew("vPERSONAJURIDICAFECHACIERREEJERCICIO");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV22PersonaJuridicaFechaCierreEjercicio)==0||new gx.date.gxdate(this.AV22PersonaJuridicaFechaCierreEjercicio).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Persona Juridica Fecha Cierre Ejercicio fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}this.refreshOutputs([{ctrl:"vNATURALEZAJURIDICAID"},{av:"AV19NaturalezaJuridicaId",fld:"vNATURALEZAJURIDICAID",pic:"ZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){};this.e14ly1_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e15ly1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54];this.GXLastCtrlId=54;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");i=this.DVPANEL_TABLEATTRIBUTESContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Datos Persona Juridica","str");i.setProp("Collapsible","Collapsible",!1,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"TABLECONTENT",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAJURIDICACUIL",gxz:"ZV20PersonaJuridicaCuil",gxold:"OV20PersonaJuridicaCuil",gxvar:"AV20PersonaJuridicaCuil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV20PersonaJuridicaCuil=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV20PersonaJuridicaCuil=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPERSONAJURIDICACUIL",gx.O.AV20PersonaJuridicaCuil,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV20PersonaJuridicaCuil=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPERSONAJURIDICACUIL",".")},nac:gx.falseFn};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAJURIDICARAZONSOCIAL",gxz:"ZV24PersonaJuridicaRazonSocial",gxold:"OV24PersonaJuridicaRazonSocial",gxvar:"AV24PersonaJuridicaRazonSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV24PersonaJuridicaRazonSocial=n)},v2z:function(n){n!==undefined&&(gx.O.ZV24PersonaJuridicaRazonSocial=n)},v2c:function(){gx.fn.setControlValue("vPERSONAJURIDICARAZONSOCIAL",gx.O.AV24PersonaJuridicaRazonSocial,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV24PersonaJuridicaRazonSocial=this.val())},val:function(){return gx.fn.getControlValue("vPERSONAJURIDICARAZONSOCIAL")},nac:gx.falseFn};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAJURIDICAFANTASIA",gxz:"ZV21PersonaJuridicaFantasia",gxold:"OV21PersonaJuridicaFantasia",gxvar:"AV21PersonaJuridicaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV21PersonaJuridicaFantasia=n)},v2z:function(n){n!==undefined&&(gx.O.ZV21PersonaJuridicaFantasia=n)},v2c:function(){gx.fn.setControlValue("vPERSONAJURIDICAFANTASIA",gx.O.AV21PersonaJuridicaFantasia,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV21PersonaJuridicaFantasia=this.val())},val:function(){return gx.fn.getControlValue("vPERSONAJURIDICAFANTASIA")},nac:gx.falseFn};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNATURALEZAJURIDICAID",gxz:"ZV19NaturalezaJuridicaId",gxold:"OV19NaturalezaJuridicaId",gxvar:"AV19NaturalezaJuridicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.AV19NaturalezaJuridicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV19NaturalezaJuridicaId=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vNATURALEZAJURIDICAID",gx.O.AV19NaturalezaJuridicaId)},c2v:function(){this.val()!==undefined&&(gx.O.AV19NaturalezaJuridicaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vNATURALEZAJURIDICAID",".")},nac:gx.falseFn};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Personajuridicafechainicio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAJURIDICAFECHAINICIO",gxz:"ZV23PersonaJuridicaFechaInicio",gxold:"OV23PersonaJuridicaFechaInicio",gxvar:"AV23PersonaJuridicaFechaInicio",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[42],ip:[42],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV23PersonaJuridicaFechaInicio=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV23PersonaJuridicaFechaInicio=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vPERSONAJURIDICAFECHAINICIO",gx.O.AV23PersonaJuridicaFechaInicio,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV23PersonaJuridicaFechaInicio=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vPERSONAJURIDICAFECHAINICIO")},nac:gx.falseFn};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Personajuridicafechacierreejercicio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERSONAJURIDICAFECHACIERREEJERCICIO",gxz:"ZV22PersonaJuridicaFechaCierreEjercicio",gxold:"OV22PersonaJuridicaFechaCierreEjercicio",gxvar:"AV22PersonaJuridicaFechaCierreEjercicio",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[47],ip:[47],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV22PersonaJuridicaFechaCierreEjercicio=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV22PersonaJuridicaFechaCierreEjercicio=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vPERSONAJURIDICAFECHACIERREEJERCICIO",gx.O.AV22PersonaJuridicaFechaCierreEjercicio,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV22PersonaJuridicaFechaCierreEjercicio=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vPERSONAJURIDICAFECHACIERREEJERCICIO")},nac:gx.falseFn};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"",grid:0};t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"BTNENTER",grid:0,evt:"e14ly1_client",std:"ENTER"};t[53]={id:53,fld:"",grid:0};t[54]={id:54,fld:"BTNCANCEL",grid:0,evt:"e15ly1_client"};this.AV20PersonaJuridicaCuil=0;this.ZV20PersonaJuridicaCuil=0;this.OV20PersonaJuridicaCuil=0;this.AV24PersonaJuridicaRazonSocial="";this.ZV24PersonaJuridicaRazonSocial="";this.OV24PersonaJuridicaRazonSocial="";this.AV21PersonaJuridicaFantasia="";this.ZV21PersonaJuridicaFantasia="";this.OV21PersonaJuridicaFantasia="";this.AV19NaturalezaJuridicaId=0;this.ZV19NaturalezaJuridicaId=0;this.OV19NaturalezaJuridicaId=0;this.AV23PersonaJuridicaFechaInicio=gx.date.nullDate();this.ZV23PersonaJuridicaFechaInicio=gx.date.nullDate();this.OV23PersonaJuridicaFechaInicio=gx.date.nullDate();this.AV22PersonaJuridicaFechaCierreEjercicio=gx.date.nullDate();this.ZV22PersonaJuridicaFechaCierreEjercicio=gx.date.nullDate();this.OV22PersonaJuridicaFechaCierreEjercicio=gx.date.nullDate();this.AV20PersonaJuridicaCuil=0;this.AV24PersonaJuridicaRazonSocial="";this.AV21PersonaJuridicaFantasia="";this.AV19NaturalezaJuridicaId=0;this.AV23PersonaJuridicaFechaInicio=gx.date.nullDate();this.AV22PersonaJuridicaFechaCierreEjercicio=gx.date.nullDate();this.AV25PersonaTipo="";this.Events={e14ly1_client:["ENTER",!0],e15ly1_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{ctrl:"vNATURALEZAJURIDICAID"},{av:"AV19NaturalezaJuridicaId",fld:"vNATURALEZAJURIDICAID",pic:"ZZZ9"}],[{ctrl:"vNATURALEZAJURIDICAID"},{av:"AV19NaturalezaJuridicaId",fld:"vNATURALEZAJURIDICAID",pic:"ZZZ9"}]];this.EvtParms.START=[[{ctrl:"vNATURALEZAJURIDICAID"},{av:"AV19NaturalezaJuridicaId",fld:"vNATURALEZAJURIDICAID",pic:"ZZZ9"}],[{ctrl:"vNATURALEZAJURIDICAID"},{av:"AV19NaturalezaJuridicaId",fld:"vNATURALEZAJURIDICAID",pic:"ZZZ9"}]];this.EvtParms.VALIDV_PERSONAJURIDICAFECHAINICIO=[[{ctrl:"vNATURALEZAJURIDICAID"},{av:"AV19NaturalezaJuridicaId",fld:"vNATURALEZAJURIDICAID",pic:"ZZZ9"}],[{ctrl:"vNATURALEZAJURIDICAID"},{av:"AV19NaturalezaJuridicaId",fld:"vNATURALEZAJURIDICAID",pic:"ZZZ9"}]];this.EvtParms.VALIDV_PERSONAJURIDICAFECHACIERREEJERCICIO=[[{ctrl:"vNATURALEZAJURIDICAID"},{av:"AV19NaturalezaJuridicaId",fld:"vNATURALEZAJURIDICAID",pic:"ZZZ9"}],[{ctrl:"vNATURALEZAJURIDICAID"},{av:"AV19NaturalezaJuridicaId",fld:"vNATURALEZAJURIDICAID",pic:"ZZZ9"}]];this.EnterCtrl=["BTNENTER"];this.setVCMap("AV25PersonaTipo","vPERSONATIPO",0,"char",1,0);this.Initialize()})