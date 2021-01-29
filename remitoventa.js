/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:44:59.94
*/
gx.evt.autoSkip=!1;gx.define("remitoventa",!1,function(){var n,i,t;this.ServerClass="remitoventa";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7RtoVtaId=gx.fn.getIntegerValue("vRTOVTAID",".");this.AV11Insert_RtoVtaEntidadId=gx.fn.getIntegerValue("vINSERT_RTOVTAENTIDADID",".");this.AV12Insert_RtoVtaSucursalId=gx.fn.getIntegerValue("vINSERT_RTOVTASUCURSALID",".");this.AV13Insert_RtoVtaDepositoId=gx.fn.getIntegerValue("vINSERT_RTOVTADEPOSITOID",".");this.AV14Insert_ClienteId=gx.fn.getIntegerValue("vINSERT_CLIENTEID",".");this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Rtovtaid=function(){return this.validCliEvt("Valid_Rtovtaid",0,function(){try{var n=gx.util.balloon.getNew("RTOVTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Rtovtasucursalid=function(){return this.validSrvEvt("Valid_Rtovtasucursalid",0).then(function(n){return n}.closure(this))};this.Valid_Rtovtadepositoid=function(){return this.validCliEvt("Valid_Rtovtadepositoid",0,function(){try{var n=gx.util.balloon.getNew("RTOVTADEPOSITOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clienteid=function(){return this.validSrvEvt("Valid_Clienteid",0).then(function(n){return n}.closure(this))};this.Valid_Rtovtaentregafecha=function(){return this.validCliEvt("Valid_Rtovtaentregafecha",0,function(){try{var n=gx.util.balloon.getNew("RTOVTAENTREGAFECHA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A2038RtoVtaEntregaFecha)==0||new gx.date.gxdate(this.A2038RtoVtaEntregaFecha).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Fecha Entrega fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Rtovtaentregatipo=function(){return this.validCliEvt("Valid_Rtovtaentregatipo",0,function(){try{var n=gx.util.balloon.getNew("RTOVTAENTREGATIPO");if(this.AnyError=0,!(this.A2600RtoVtaEntregaTipo=="DOM"||this.A2600RtoVtaEntregaTipo=="DEP"||this.A2600RtoVtaEntregaTipo=="DES"||""==this.A2600RtoVtaEntregaTipo))try{n.setError("Campo Tipo Entrega fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Rtovtafacvtaid=function(){return this.validSrvEvt("Valid_Rtovtafacvtaid",0).then(function(n){return n}.closure(this))};this.Valid_Rtovtaentidadid=function(){return this.validSrvEvt("Valid_Rtovtaentidadid",0).then(function(n){return n}.closure(this))};this.Valid_Rtovtadetid=function(){var n=gx.fn.currentGridRowImpl(88);return this.validCliEvt("Valid_Rtovtadetid",88,function(){try{if(gx.fn.currentGridRowImpl(88)===0)return!0;var n=gx.util.balloon.getNew("RTOVTADETID",gx.fn.currentGridRowImpl(88));this.AnyError=0;this.sMode181=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(181,88);this.standaloneModal46181();this.standaloneNotModal46181();gx.fn.gridDuplicateKey(89)&&(n.setError(gx.text.format(gx.getMessage("GXM_1004"),"Detalle","","","","","","","","")),this.AnyError=gx.num.trunc(1,0))}catch(t){}try{return(this.Gx_mode=this.sMode181,n==null)?!0:n.show()}catch(t){}return!0})};this.Valid_Artid=function(){var n=gx.fn.currentGridRowImpl(88);return this.validSrvEvt("Valid_Artid",88).then(function(n){try{this.sMode181=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(181,88)}finally{this.Gx_mode=this.sMode181}return n}.closure(this))};this.Valid_Rtovtadetestado=function(){var n=gx.fn.currentGridRowImpl(88);return this.validCliEvt("Valid_Rtovtadetestado",88,function(){try{if(gx.fn.currentGridRowImpl(88)===0)return!0;var n=gx.util.balloon.getNew("RTOVTADETESTADO",gx.fn.currentGridRowImpl(88));if(this.AnyError=0,this.sMode181=this.Gx_mode,this.Gx_mode=gx.fn.getGridRowMode(181,88),!(this.A2045RtoVtaDetEstado=="ACT"||this.A2045RtoVtaDetEstado=="INA"||""==this.A2045RtoVtaDetEstado))try{n.setError("Campo Estado Linea fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return(this.Gx_mode=this.sMode181,n==null)?!0:n.show()}catch(t){}return!0})};this.standaloneModal46181=function(){try{this.Gx_mode!="INS"?gx.fn.setCtrlProperty("RTOVTADETID","Enabled",0):gx.fn.setCtrlProperty("RTOVTADETID","Enabled",1)}catch(n){}};this.standaloneNotModal46181=function(){};this.e12462_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e1346180_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1446180_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110];this.GXLastCtrlId=110;this.Gridlevel_detalleContainer=new gx.grid.grid(this,181,"Detalle",88,"Gridlevel_detalle","Gridlevel_detalle","Gridlevel_detalleContainer",this.CmpContext,this.IsMasterPage,"remitoventa",[261],!1,1,!1,!0,5,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.Gridlevel_detalleContainer;i.addSingleLineEdit(261,89,"RTOVTADETID","Linea","","RtoVtaDetId","int",0,"px",4,4,"right",null,[],261,"RtoVtaDetId",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addSingleLineEdit(8,90,"ARTID","Cod. Art.","","ArtId","int",0,"px",9,9,"right",null,[],8,"ArtId",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addSingleLineEdit(2042,91,"RTOVTADETDESCRIPCION","Descrip. Completa","","RtoVtaDetDescripcion","char",0,"px",30,30,"left",null,[],2042,"RtoVtaDetDescripcion",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addSingleLineEdit(2043,92,"RTOVTADETCANTIDAD","Cantidad","","RtoVtaDetCantidad","int",0,"px",4,4,"right",null,[],2043,"RtoVtaDetCantidad",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addSingleLineEdit(2044,93,"RTOVTADETOBSERVACION","Observacion","","RtoVtaDetObservacion","char",0,"px",50,50,"left",null,[],2044,"RtoVtaDetObservacion",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addComboBox(2045,94,"RTOVTADETESTADO","Estado Linea","RtoVtaDetEstado","char",null,0,!0,!1,0,"px","TrnColumn");i.addSingleLineEdit(2046,95,"RTOVTADETFACVTADETID","Fac Det Ide.","","RtoVtaDetFacVtaDetId","int",0,"px",4,4,"right",null,[],2046,"RtoVtaDetFacVtaDetId",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");this.Gridlevel_detalleContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Rtovtaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Gridlevel_detalleContainer],fld:"RTOVTAID",gxz:"Z257RtoVtaId",gxold:"O257RtoVtaId",gxvar:"A257RtoVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A257RtoVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z257RtoVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RTOVTAID",gx.O.A257RtoVtaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A257RtoVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RTOVTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(22,function(){});n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAFECHA",gxz:"Z2034RtoVtaFecha",gxold:"O2034RtoVtaFecha",gxvar:"A2034RtoVtaFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2034RtoVtaFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2034RtoVtaFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("RTOVTAFECHA",gx.O.A2034RtoVtaFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2034RtoVtaFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("RTOVTAFECHA")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Rtovtasucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTASUCURSALID",gxz:"Z259RtoVtaSucursalId",gxold:"O259RtoVtaSucursalId",gxvar:"A259RtoVtaSucursalId",ucs:[],op:[],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A259RtoVtaSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z259RtoVtaSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RTOVTASUCURSALID",gx.O.A259RtoVtaSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A259RtoVtaSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RTOVTASUCURSALID",".")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTASUCURSALNOMBRE",gxz:"Z2036RtoVtaSucursalNombre",gxold:"O2036RtoVtaSucursalNombre",gxvar:"A2036RtoVtaSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2036RtoVtaSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2036RtoVtaSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("RTOVTASUCURSALNOMBRE",gx.O.A2036RtoVtaSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2036RtoVtaSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("RTOVTASUCURSALNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Rtovtadepositoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTADEPOSITOID",gxz:"Z260RtoVtaDepositoId",gxold:"O260RtoVtaDepositoId",gxvar:"A260RtoVtaDepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A260RtoVtaDepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z260RtoVtaDepositoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RTOVTADEPOSITOID",gx.O.A260RtoVtaDepositoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A260RtoVtaDepositoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RTOVTADEPOSITOID",".")},nac:gx.falseFn};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTADEPOSITONOMBRE",gxz:"Z2037RtoVtaDepositoNombre",gxold:"O2037RtoVtaDepositoNombre",gxvar:"A2037RtoVtaDepositoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2037RtoVtaDepositoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2037RtoVtaDepositoNombre=n)},v2c:function(){gx.fn.setControlValue("RTOVTADEPOSITONOMBRE",gx.O.A2037RtoVtaDepositoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2037RtoVtaDepositoNombre=this.val())},val:function(){return gx.fn.getControlValue("RTOVTADEPOSITONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(42,function(){});n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Clienteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[50],ip:[50,47],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CLIENTEID",gx.O.A53ClienteId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTEID",".")},nac:gx.falseFn};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDENOMINACION",gxz:"Z1156ClienteDenominacion",gxold:"O1156ClienteDenominacion",gxvar:"A1156ClienteDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1156ClienteDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1156ClienteDenominacion=n)},v2c:function(){gx.fn.setControlValue("CLIENTEDENOMINACION",gx.O.A1156ClienteDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1156ClienteDenominacion=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEDENOMINACION")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rtovtaentregafecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAENTREGAFECHA",gxz:"Z2038RtoVtaEntregaFecha",gxold:"O2038RtoVtaEntregaFecha",gxvar:"A2038RtoVtaEntregaFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[55],ip:[55],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2038RtoVtaEntregaFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2038RtoVtaEntregaFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("RTOVTAENTREGAFECHA",gx.O.A2038RtoVtaEntregaFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2038RtoVtaEntregaFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("RTOVTAENTREGAFECHA")},nac:gx.falseFn};this.declareDomainHdlr(55,function(){});n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,lvl:0,type:"char",len:8,dec:0,sign:!1,pic:"99:99:99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAENTREGAHORA",gxz:"Z2039RtoVtaEntregaHora",gxold:"O2039RtoVtaEntregaHora",gxvar:"A2039RtoVtaEntregaHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2039RtoVtaEntregaHora=n)},v2z:function(n){n!==undefined&&(gx.O.Z2039RtoVtaEntregaHora=n)},v2c:function(){gx.fn.setControlValue("RTOVTAENTREGAHORA",gx.O.A2039RtoVtaEntregaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2039RtoVtaEntregaHora=this.val())},val:function(){return gx.fn.getControlValue("RTOVTAENTREGAHORA")},nac:gx.falseFn};this.declareDomainHdlr(59,function(){});n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rtovtaentregatipo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAENTREGATIPO",gxz:"Z2600RtoVtaEntregaTipo",gxold:"O2600RtoVtaEntregaTipo",gxvar:"A2600RtoVtaEntregaTipo",ucs:[],op:[64],ip:[64],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2600RtoVtaEntregaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z2600RtoVtaEntregaTipo=n)},v2c:function(){gx.fn.setComboBoxValue("RTOVTAENTREGATIPO",gx.O.A2600RtoVtaEntregaTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2600RtoVtaEntregaTipo=this.val())},val:function(){return gx.fn.getControlValue("RTOVTAENTREGATIPO")},nac:gx.falseFn};this.declareDomainHdlr(64,function(){});n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"vchar",len:300,dec:150,sign:!1,pic:"@!",ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAENTREGADOMICILIO",gxz:"Z2601RtoVtaEntregaDomicilio",gxold:"O2601RtoVtaEntregaDomicilio",gxvar:"A2601RtoVtaEntregaDomicilio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2601RtoVtaEntregaDomicilio=n)},v2z:function(n){n!==undefined&&(gx.O.Z2601RtoVtaEntregaDomicilio=n)},v2c:function(){gx.fn.setControlValue("RTOVTAENTREGADOMICILIO",gx.O.A2601RtoVtaEntregaDomicilio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2601RtoVtaEntregaDomicilio=this.val())},val:function(){return gx.fn.getControlValue("RTOVTAENTREGADOMICILIO")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Rtovtafacvtaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAFACVTAID",gxz:"Z2041RtoVtaFacVtaId",gxold:"O2041RtoVtaFacVtaId",gxvar:"A2041RtoVtaFacVtaId",ucs:[],op:[77],ip:[77,73],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2041RtoVtaFacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2041RtoVtaFacVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RTOVTAFACVTAID",gx.O.A2041RtoVtaFacVtaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2041RtoVtaFacVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RTOVTAFACVTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(73,function(){});n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,lvl:0,type:"char",len:11,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAFACVTACOMPROBANTE",gxz:"Z2602RtoVtaFacVtaComprobante",gxold:"O2602RtoVtaFacVtaComprobante",gxvar:"A2602RtoVtaFacVtaComprobante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2602RtoVtaFacVtaComprobante=n)},v2z:function(n){n!==undefined&&(gx.O.Z2602RtoVtaFacVtaComprobante=n)},v2c:function(){gx.fn.setControlValue("RTOVTAFACVTACOMPROBANTE",gx.O.A2602RtoVtaFacVtaComprobante,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2602RtoVtaFacVtaComprobante=this.val())},val:function(){return gx.fn.getControlValue("RTOVTAFACVTACOMPROBANTE")},nac:gx.falseFn};n[78]={id:78,fld:"",grid:0};n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"",grid:0};n[82]={id:82,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAESTADO",gxz:"Z2040RtoVtaEstado",gxold:"O2040RtoVtaEstado",gxvar:"A2040RtoVtaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2040RtoVtaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2040RtoVtaEstado=n)},v2c:function(){gx.fn.setComboBoxValue("RTOVTAESTADO",gx.O.A2040RtoVtaEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2040RtoVtaEstado=this.val())},val:function(){return gx.fn.getControlValue("RTOVTAESTADO")},nac:gx.falseFn};this.declareDomainHdlr(82,function(){});n[83]={id:83,fld:"",grid:0};n[84]={id:84,fld:"",grid:0};n[85]={id:85,fld:"TABLELEAFLEVEL_DETALLE",grid:0};n[86]={id:86,fld:"",grid:0};n[87]={id:87,fld:"",grid:0};n[89]={id:89,lvl:181,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:1,grid:88,gxgrid:this.Gridlevel_detalleContainer,fnc:this.Valid_Rtovtadetid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTADETID",gxz:"Z261RtoVtaDetId",gxold:"O261RtoVtaDetId",gxvar:"A261RtoVtaDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A261RtoVtaDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z261RtoVtaDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RTOVTADETID",n||gx.fn.currentGridRowImpl(88),gx.O.A261RtoVtaDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A261RtoVtaDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RTOVTADETID",n||gx.fn.currentGridRowImpl(88),".")},nac:gx.falseFn};n[90]={id:90,lvl:181,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,isacc:1,grid:88,gxgrid:this.Gridlevel_detalleContainer,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[],ip:[90],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTID",n||gx.fn.currentGridRowImpl(88),gx.O.A8ArtId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTID",n||gx.fn.currentGridRowImpl(88),".")},nac:gx.falseFn};n[91]={id:91,lvl:181,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:0,isacc:1,grid:88,gxgrid:this.Gridlevel_detalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTADETDESCRIPCION",gxz:"Z2042RtoVtaDetDescripcion",gxold:"O2042RtoVtaDetDescripcion",gxvar:"A2042RtoVtaDetDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2042RtoVtaDetDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2042RtoVtaDetDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("RTOVTADETDESCRIPCION",n||gx.fn.currentGridRowImpl(88),gx.O.A2042RtoVtaDetDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2042RtoVtaDetDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("RTOVTADETDESCRIPCION",n||gx.fn.currentGridRowImpl(88))},nac:gx.falseFn};n[92]={id:92,lvl:181,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:1,grid:88,gxgrid:this.Gridlevel_detalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTADETCANTIDAD",gxz:"Z2043RtoVtaDetCantidad",gxold:"O2043RtoVtaDetCantidad",gxvar:"A2043RtoVtaDetCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2043RtoVtaDetCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2043RtoVtaDetCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RTOVTADETCANTIDAD",n||gx.fn.currentGridRowImpl(88),gx.O.A2043RtoVtaDetCantidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2043RtoVtaDetCantidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RTOVTADETCANTIDAD",n||gx.fn.currentGridRowImpl(88),".")},nac:gx.falseFn};n[93]={id:93,lvl:181,type:"char",len:50,dec:0,sign:!1,pic:"@!",ro:0,isacc:1,grid:88,gxgrid:this.Gridlevel_detalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTADETOBSERVACION",gxz:"Z2044RtoVtaDetObservacion",gxold:"O2044RtoVtaDetObservacion",gxvar:"A2044RtoVtaDetObservacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2044RtoVtaDetObservacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2044RtoVtaDetObservacion=n)},v2c:function(n){gx.fn.setGridControlValue("RTOVTADETOBSERVACION",n||gx.fn.currentGridRowImpl(88),gx.O.A2044RtoVtaDetObservacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2044RtoVtaDetObservacion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("RTOVTADETOBSERVACION",n||gx.fn.currentGridRowImpl(88))},nac:gx.falseFn};n[94]={id:94,lvl:181,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,isacc:1,grid:88,gxgrid:this.Gridlevel_detalleContainer,fnc:this.Valid_Rtovtadetestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTADETESTADO",gxz:"Z2045RtoVtaDetEstado",gxold:"O2045RtoVtaDetEstado",gxvar:"A2045RtoVtaDetEstado",ucs:[],op:[94],ip:[94],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2045RtoVtaDetEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2045RtoVtaDetEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("RTOVTADETESTADO",n||gx.fn.currentGridRowImpl(88),gx.O.A2045RtoVtaDetEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2045RtoVtaDetEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("RTOVTADETESTADO",n||gx.fn.currentGridRowImpl(88))},nac:gx.falseFn};n[95]={id:95,lvl:181,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:1,grid:88,gxgrid:this.Gridlevel_detalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTADETFACVTADETID",gxz:"Z2046RtoVtaDetFacVtaDetId",gxold:"O2046RtoVtaDetFacVtaDetId",gxvar:"A2046RtoVtaDetFacVtaDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2046RtoVtaDetFacVtaDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2046RtoVtaDetFacVtaDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RTOVTADETFACVTADETID",n||gx.fn.currentGridRowImpl(88),gx.O.A2046RtoVtaDetFacVtaDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2046RtoVtaDetFacVtaDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RTOVTADETFACVTADETID",n||gx.fn.currentGridRowImpl(88),".")},nac:gx.falseFn};n[96]={id:96,fld:"",grid:0};n[97]={id:97,fld:"",grid:0};n[98]={id:98,fld:"",grid:0};n[99]={id:99,fld:"",grid:0};n[100]={id:100,fld:"BTNTRN_ENTER",grid:0,evt:"e1346180_client",std:"ENTER"};n[101]={id:101,fld:"",grid:0};n[102]={id:102,fld:"BTNTRN_CANCEL",grid:0,evt:"e1446180_client"};n[103]={id:103,fld:"",grid:0};n[104]={id:104,fld:"BTNTRN_DELETE",grid:0,evt:"e1546180_client",std:"DELETE"};n[105]={id:105,fld:"",grid:0};n[106]={id:106,fld:"",grid:0};n[107]={id:107,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[108]={id:108,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rtovtaentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAENTIDADID",gxz:"Z258RtoVtaEntidadId",gxold:"O258RtoVtaEntidadId",gxvar:"A258RtoVtaEntidadId",ucs:[],op:[42,34,109],ip:[42,34,109,39,31,108],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A258RtoVtaEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z258RtoVtaEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RTOVTAENTIDADID",gx.O.A258RtoVtaEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A258RtoVtaEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RTOVTAENTIDADID",".")},nac:function(){return this.Gx_mode=="INS"&&!(0==this.AV11Insert_RtoVtaEntidadId)}};n[109]={id:109,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOVTAENTIDADNOMBRE",gxz:"Z2035RtoVtaEntidadNombre",gxold:"O2035RtoVtaEntidadNombre",gxvar:"A2035RtoVtaEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2035RtoVtaEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2035RtoVtaEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("RTOVTAENTIDADNOMBRE",gx.O.A2035RtoVtaEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2035RtoVtaEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("RTOVTAENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(109,function(){});n[110]={id:110,fld:"PROMPT_258",grid:180};this.A257RtoVtaId=0;this.Z257RtoVtaId=0;this.O257RtoVtaId=0;this.A2034RtoVtaFecha=gx.date.nullDate();this.Z2034RtoVtaFecha=gx.date.nullDate();this.O2034RtoVtaFecha=gx.date.nullDate();this.A259RtoVtaSucursalId=0;this.Z259RtoVtaSucursalId=0;this.O259RtoVtaSucursalId=0;this.A2036RtoVtaSucursalNombre="";this.Z2036RtoVtaSucursalNombre="";this.O2036RtoVtaSucursalNombre="";this.A260RtoVtaDepositoId=0;this.Z260RtoVtaDepositoId=0;this.O260RtoVtaDepositoId=0;this.A2037RtoVtaDepositoNombre="";this.Z2037RtoVtaDepositoNombre="";this.O2037RtoVtaDepositoNombre="";this.A53ClienteId=0;this.Z53ClienteId=0;this.O53ClienteId=0;this.A1156ClienteDenominacion="";this.Z1156ClienteDenominacion="";this.O1156ClienteDenominacion="";this.A2038RtoVtaEntregaFecha=gx.date.nullDate();this.Z2038RtoVtaEntregaFecha=gx.date.nullDate();this.O2038RtoVtaEntregaFecha=gx.date.nullDate();this.A2039RtoVtaEntregaHora="";this.Z2039RtoVtaEntregaHora="";this.O2039RtoVtaEntregaHora="";this.A2600RtoVtaEntregaTipo="";this.Z2600RtoVtaEntregaTipo="";this.O2600RtoVtaEntregaTipo="";this.A2601RtoVtaEntregaDomicilio="";this.Z2601RtoVtaEntregaDomicilio="";this.O2601RtoVtaEntregaDomicilio="";this.A2041RtoVtaFacVtaId=0;this.Z2041RtoVtaFacVtaId=0;this.O2041RtoVtaFacVtaId=0;this.A2602RtoVtaFacVtaComprobante="";this.Z2602RtoVtaFacVtaComprobante="";this.O2602RtoVtaFacVtaComprobante="";this.A2040RtoVtaEstado="";this.Z2040RtoVtaEstado="";this.O2040RtoVtaEstado="";this.Z261RtoVtaDetId=0;this.O261RtoVtaDetId=0;this.Z8ArtId=0;this.O8ArtId=0;this.Z2042RtoVtaDetDescripcion="";this.O2042RtoVtaDetDescripcion="";this.Z2043RtoVtaDetCantidad=0;this.O2043RtoVtaDetCantidad=0;this.Z2044RtoVtaDetObservacion="";this.O2044RtoVtaDetObservacion="";this.Z2045RtoVtaDetEstado="";this.O2045RtoVtaDetEstado="";this.Z2046RtoVtaDetFacVtaDetId=0;this.O2046RtoVtaDetFacVtaDetId=0;this.A258RtoVtaEntidadId=0;this.Z258RtoVtaEntidadId=0;this.O258RtoVtaEntidadId=0;this.A2035RtoVtaEntidadNombre="";this.Z2035RtoVtaEntidadNombre="";this.O2035RtoVtaEntidadNombre="";this.A261RtoVtaDetId=0;this.A8ArtId=0;this.A2042RtoVtaDetDescripcion="";this.A2043RtoVtaDetCantidad=0;this.A2044RtoVtaDetObservacion="";this.A2045RtoVtaDetEstado="";this.A2046RtoVtaDetFacVtaDetId=0;this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV21GXV1=0;this.AV11Insert_RtoVtaEntidadId=0;this.AV12Insert_RtoVtaSucursalId=0;this.AV13Insert_RtoVtaDepositoId=0;this.AV14Insert_ClienteId=0;this.AV15TrnContextAtt={AttributeName:"",AttributeValue:""};this.AV7RtoVtaId=0;this.AV10WebSession={};this.A257RtoVtaId=0;this.A258RtoVtaEntidadId=0;this.A259RtoVtaSucursalId=0;this.A260RtoVtaDepositoId=0;this.A53ClienteId=0;this.AV20Pgmname="";this.A2602RtoVtaFacVtaComprobante="";this.A2034RtoVtaFecha=gx.date.nullDate();this.A2035RtoVtaEntidadNombre="";this.A2036RtoVtaSucursalNombre="";this.A2037RtoVtaDepositoNombre="";this.A1156ClienteDenominacion="";this.A2038RtoVtaEntregaFecha=gx.date.nullDate();this.A2039RtoVtaEntregaHora="";this.A2600RtoVtaEntregaTipo="";this.A2601RtoVtaEntregaDomicilio="";this.A2040RtoVtaEstado="";this.A2041RtoVtaFacVtaId=0;this.Gx_mode="";this.Events={e12462_client:["AFTER TRN",!0],e1346180_client:["ENTER",!0],e1446180_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7RtoVtaId",fld:"vRTOVTAID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7RtoVtaId",fld:"vRTOVTAID",pic:"ZZZZZZZ9",hsh:!0},{av:"A257RtoVtaId",fld:"RTOVTAID",pic:"ZZZZZZZ9"},{av:"A2034RtoVtaFecha",fld:"RTOVTAFECHA",pic:""},{ctrl:"RTOVTAESTADO"},{av:"A2040RtoVtaEstado",fld:"RTOVTAESTADO",pic:""},{av:"A2041RtoVtaFacVtaId",fld:"RTOVTAFACVTAID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV20Pgmname",fld:"vPGMNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV21GXV1",fld:"vGXV1",pic:"99999999"},{av:"AV15TrnContextAtt",fld:"vTRNCONTEXTATT",pic:""},{av:"AV11Insert_RtoVtaEntidadId",fld:"vINSERT_RTOVTAENTIDADID",pic:"Z9"},{av:"AV12Insert_RtoVtaSucursalId",fld:"vINSERT_RTOVTASUCURSALID",pic:"ZZZ9"},{av:"AV13Insert_RtoVtaDepositoId",fld:"vINSERT_RTOVTADEPOSITOID",pic:"ZZZ9"},{av:"AV14Insert_ClienteId",fld:"vINSERT_CLIENTEID",pic:"ZZZZZZZZZZZZZZ9"},{av:'gx.fn.getCtrlProperty("RTOVTAENTIDADID","Visible")',ctrl:"RTOVTAENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("RTOVTAENTIDADNOMBRE","Visible")',ctrl:"RTOVTAENTIDADNOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("GRIDLEVEL_DETALLE","Visible")',ctrl:"GRIDLEVEL_DETALLE",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_RTOVTAID=[[],[]];this.EvtParms.VALID_RTOVTASUCURSALID=[[{av:"A259RtoVtaSucursalId",fld:"RTOVTASUCURSALID",pic:"ZZZ9"}],[{ctrl:"PROMPT_258",prop:"Link"}]];this.EvtParms.VALID_RTOVTADEPOSITOID=[[],[]];this.EvtParms.VALID_CLIENTEID=[[{av:"A53ClienteId",fld:"CLIENTEID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A1156ClienteDenominacion",fld:"CLIENTEDENOMINACION",pic:"@!"}],[{av:"A1156ClienteDenominacion",fld:"CLIENTEDENOMINACION",pic:"@!"}]];this.EvtParms.VALID_RTOVTAENTREGAFECHA=[[{av:"A2038RtoVtaEntregaFecha",fld:"RTOVTAENTREGAFECHA",pic:""}],[{av:"A2038RtoVtaEntregaFecha",fld:"RTOVTAENTREGAFECHA",pic:""}]];this.EvtParms.VALID_RTOVTAENTREGATIPO=[[{ctrl:"RTOVTAENTREGATIPO"},{av:"A2600RtoVtaEntregaTipo",fld:"RTOVTAENTREGATIPO",pic:""}],[{ctrl:"RTOVTAENTREGATIPO"},{av:"A2600RtoVtaEntregaTipo",fld:"RTOVTAENTREGATIPO",pic:""}]];this.EvtParms.VALID_RTOVTAFACVTAID=[[{av:"A2041RtoVtaFacVtaId",fld:"RTOVTAFACVTAID",pic:"ZZZZZZZ9"},{av:"A2602RtoVtaFacVtaComprobante",fld:"RTOVTAFACVTACOMPROBANTE",pic:""}],[{av:"A2602RtoVtaFacVtaComprobante",fld:"RTOVTAFACVTACOMPROBANTE",pic:""}]];this.EvtParms.VALID_RTOVTAENTIDADID=[[{av:"A258RtoVtaEntidadId",fld:"RTOVTAENTIDADID",pic:"Z9"},{av:"A259RtoVtaSucursalId",fld:"RTOVTASUCURSALID",pic:"ZZZ9"},{av:"A260RtoVtaDepositoId",fld:"RTOVTADEPOSITOID",pic:"ZZZ9"},{av:"A2035RtoVtaEntidadNombre",fld:"RTOVTAENTIDADNOMBRE",pic:"@!"},{av:"A2036RtoVtaSucursalNombre",fld:"RTOVTASUCURSALNOMBRE",pic:"@!"},{av:"A2037RtoVtaDepositoNombre",fld:"RTOVTADEPOSITONOMBRE",pic:"@!"}],[{av:"A2035RtoVtaEntidadNombre",fld:"RTOVTAENTIDADNOMBRE",pic:"@!"},{av:"A2036RtoVtaSucursalNombre",fld:"RTOVTASUCURSALNOMBRE",pic:"@!"},{av:"A2037RtoVtaDepositoNombre",fld:"RTOVTADEPOSITONOMBRE",pic:"@!"}]];this.EvtParms.VALID_RTOVTADETID=[[],[]];this.EvtParms.VALID_ARTID=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.VALID_RTOVTADETESTADO=[[{ctrl:"RTOVTADETESTADO"},{av:"A2045RtoVtaDetEstado",fld:"RTOVTADETESTADO",pic:"@!"}],[{ctrl:"RTOVTADETESTADO"},{av:"A2045RtoVtaDetEstado",fld:"RTOVTADETESTADO",pic:"@!"}]];this.setPrompt("PROMPT_258",[108]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7RtoVtaId","vRTOVTAID",0,"int",8,0);this.setVCMap("AV11Insert_RtoVtaEntidadId","vINSERT_RTOVTAENTIDADID",0,"int",2,0);this.setVCMap("AV12Insert_RtoVtaSucursalId","vINSERT_RTOVTASUCURSALID",0,"int",4,0);this.setVCMap("AV13Insert_RtoVtaDepositoId","vINSERT_RTOVTADEPOSITOID",0,"int",4,0);this.setVCMap("AV14Insert_ClienteId","vINSERT_CLIENTEID",0,"int",15,0);this.setVCMap("AV20Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);i.addPostingVar({rfrVar:"Gx_mode"});this.Initialize()});gx.wi(function(){gx.createParentObj(remitoventa)})