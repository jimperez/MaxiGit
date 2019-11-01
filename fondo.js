/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:42:57.75
*/
gx.evt.autoSkip=!1;gx.define("fondo",!1,function(){var n,i,t;this.ServerClass="fondo";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7FondoId=gx.fn.getIntegerValue("vFONDOID",".");this.AV18Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Fondoid=function(){return this.validCliEvt("Valid_Fondoid",0,function(){try{var n=gx.util.balloon.getNew("FONDOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Fondonombre=function(){return this.validCliEvt("Valid_Fondonombre",0,function(){try{var n=gx.util.balloon.getNew("FONDONOMBRE");if(this.AnyError=0,""==this.A345FondoNombre)try{n.setError("Error!!! Debe Ingresar un Nombre de Fondo...");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Fondocuotas=function(){return this.validCliEvt("Valid_Fondocuotas",0,function(){try{var n=gx.util.balloon.getNew("FONDOCUOTAS");if(this.AnyError=0,!(this.A2286FondoCuotas=="S"||this.A2286FondoCuotas=="N"||""==this.A2286FondoCuotas))try{n.setError("Campo Fondo Cuotas fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Fondousable=function(){return this.validCliEvt("Valid_Fondousable",0,function(){try{var n=gx.util.balloon.getNew("FONDOUSABLE");if(this.AnyError=0,!(this.A2322FondoUsable=="CPA"||this.A2322FondoUsable=="VTA"||this.A2322FondoUsable=="VYC"||""==this.A2322FondoUsable))try{n.setError("Campo Uso de Fondo fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Fondoestado=function(){return this.validCliEvt("Valid_Fondoestado",0,function(){try{var n=gx.util.balloon.getNew("FONDOESTADO");if(this.AnyError=0,!(this.A346FondoEstado=="ACT"||this.A346FondoEstado=="INA"||""==this.A346FondoEstado))try{n.setError("Campo Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Fondotipocaja=function(){var n=gx.fn.currentGridRowImpl(55);return this.validCliEvt("Valid_Fondotipocaja",55,function(){try{if(gx.fn.currentGridRowImpl(55)===0)return!0;var n=gx.util.balloon.getNew("FONDOTIPOCAJA",gx.fn.currentGridRowImpl(55));if(this.AnyError=0,this.sMode276=this.Gx_mode,this.Gx_mode=gx.fn.getGridRowMode(276,55),this.standaloneModal1Y276(),this.standaloneNotModal1Y276(),gx.fn.gridDuplicateKey(56)&&(n.setError(gx.text.format(gx.getMessage("GXM_1004"),"Tipo Caja","","","","","","","","")),this.AnyError=gx.num.trunc(1,0)),!(this.A3255FondoTipoCaja=="NOR"||this.A3255FondoTipoCaja=="ING"||this.A3255FondoTipoCaja=="EGR"||this.A3255FondoTipoCaja=="TES"||this.A3255FondoTipoCaja=="DIR"))try{n.setError("Campo Fondo Tipo Caja fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return(this.Gx_mode=this.sMode276,n==null)?!0:n.show()}catch(t){}return!0})};this.Valid_Fondoplancuentaid=function(){var n=gx.fn.currentGridRowImpl(55);return this.validSrvEvt("Valid_Fondoplancuentaid",55).then(function(n){try{this.sMode276=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(276,55)}finally{this.Gx_mode=this.sMode276}return n}.closure(this))};this.standaloneModal1Y276=function(){try{this.Gx_mode!="INS"?gx.fn.setCtrlProperty("FONDOTIPOCAJA","Enabled",0):gx.fn.setCtrlProperty("FONDOTIPOCAJA","Enabled",1)}catch(n){}};this.standaloneNotModal1Y276=function(){};this.e121y2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e131y85_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e141y85_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];this.GXLastCtrlId=75;this.Gridlevel_tipocajaContainer=new gx.grid.grid(this,276,"TipoCaja",55,"Gridlevel_tipocaja","Gridlevel_tipocaja","Gridlevel_tipocajaContainer",this.CmpContext,this.IsMasterPage,"fondo",[3255],!1,1,!1,!0,5,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.Gridlevel_tipocajaContainer;i.addComboBox(3255,56,"FONDOTIPOCAJA","Tipo Caja","FondoTipoCaja","char",null,1,!0,!1,0,"px","TrnColumn");i.addSingleLineEdit(120,57,"FONDOPLANCUENTAID","Cta. Cont.","","FondoPlanCuentaId","int",0,"px",10,10,"right",null,[],120,"FondoPlanCuentaId",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");i.addBitmap("prompt_120","PROMPT_120",75,0,"",0,"",null,"","","gx-prompt Image","");i.addSingleLineEdit(2704,58,"FONDOPLANCUENTANOMBRE","Descripción","","FondoPlanCuentaNombre","svchar",0,"px",64,64,"left",null,[],2704,"FondoPlanCuentaNombre",!0,0,!1,!1,"AttributeRealWidth",1,"TrnColumn");this.Gridlevel_tipocajaContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Fondoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Gridlevel_tipocajaContainer],fld:"FONDOID",gxz:"Z38FondoId",gxold:"O38FondoId",gxvar:"A38FondoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A38FondoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z38FondoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FONDOID",gx.O.A38FondoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A38FondoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FONDOID",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fondonombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDONOMBRE",gxz:"Z345FondoNombre",gxold:"O345FondoNombre",gxvar:"A345FondoNombre",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A345FondoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z345FondoNombre=n)},v2c:function(){gx.fn.setControlValue("FONDONOMBRE",gx.O.A345FondoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A345FondoNombre=this.val())},val:function(){return gx.fn.getControlValue("FONDONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOTIPO",gxz:"Z635FondoTipo",gxold:"O635FondoTipo",gxvar:"A635FondoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A635FondoTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z635FondoTipo=n)},v2c:function(){gx.fn.setComboBoxValue("FONDOTIPO",gx.O.A635FondoTipo)},c2v:function(){this.val()!==undefined&&(gx.O.A635FondoTipo=this.val())},val:function(){return gx.fn.getControlValue("FONDOTIPO")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fondocuotas,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOCUOTAS",gxz:"Z2286FondoCuotas",gxold:"O2286FondoCuotas",gxvar:"A2286FondoCuotas",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2286FondoCuotas=n)},v2z:function(n){n!==undefined&&(gx.O.Z2286FondoCuotas=n)},v2c:function(){gx.fn.setComboBoxValue("FONDOCUOTAS",gx.O.A2286FondoCuotas);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2286FondoCuotas=this.val())},val:function(){return gx.fn.getControlValue("FONDOCUOTAS")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fondousable,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOUSABLE",gxz:"Z2322FondoUsable",gxold:"O2322FondoUsable",gxvar:"A2322FondoUsable",ucs:[],op:[40],ip:[40],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A2322FondoUsable=n)},v2z:function(n){n!==undefined&&(gx.O.Z2322FondoUsable=n)},v2c:function(){gx.fn.setComboBoxValue("FONDOUSABLE",gx.O.A2322FondoUsable);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2322FondoUsable=this.val())},val:function(){return gx.fn.getControlValue("FONDOUSABLE")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fondoestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOESTADO",gxz:"Z346FondoEstado",gxold:"O346FondoEstado",gxvar:"A346FondoEstado",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A346FondoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z346FondoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("FONDOESTADO",gx.O.A346FondoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A346FondoEstado=this.val())},val:function(){return gx.fn.getControlValue("FONDOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,lvl:0,type:"svchar",len:256,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOOBSERVACION",gxz:"Z871FondoObservacion",gxold:"O871FondoObservacion",gxvar:"A871FondoObservacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A871FondoObservacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z871FondoObservacion=n)},v2c:function(){gx.fn.setControlValue("FONDOOBSERVACION",gx.O.A871FondoObservacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A871FondoObservacion=this.val())},val:function(){return gx.fn.getControlValue("FONDOOBSERVACION")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"TABLELEAFLEVEL_TIPOCAJA",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[56]={id:56,lvl:276,type:"char",len:3,dec:0,sign:!1,ro:0,isacc:1,grid:55,gxgrid:this.Gridlevel_tipocajaContainer,fnc:this.Valid_Fondotipocaja,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOTIPOCAJA",gxz:"Z3255FondoTipoCaja",gxold:"O3255FondoTipoCaja",gxvar:"A3255FondoTipoCaja",ucs:[],op:[56],ip:[56],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3255FondoTipoCaja=n)},v2z:function(n){n!==undefined&&(gx.O.Z3255FondoTipoCaja=n)},v2c:function(n){gx.fn.setGridComboBoxValue("FONDOTIPOCAJA",n||gx.fn.currentGridRowImpl(55),gx.O.A3255FondoTipoCaja);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3255FondoTipoCaja=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDOTIPOCAJA",n||gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};n[57]={id:57,lvl:276,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:55,gxgrid:this.Gridlevel_tipocajaContainer,fnc:this.Valid_Fondoplancuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOPLANCUENTAID",gxz:"Z120FondoPlanCuentaId",gxold:"O120FondoPlanCuentaId",gxvar:"A120FondoPlanCuentaId",ucs:[],op:[58],ip:[58,57],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A120FondoPlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z120FondoPlanCuentaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FONDOPLANCUENTAID",n||gx.fn.currentGridRowImpl(55),gx.O.A120FondoPlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A120FondoPlanCuentaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FONDOPLANCUENTAID",n||gx.fn.currentGridRowImpl(55),".")},nac:gx.falseFn};n[58]={id:58,lvl:276,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:1,grid:55,gxgrid:this.Gridlevel_tipocajaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOPLANCUENTANOMBRE",gxz:"Z2704FondoPlanCuentaNombre",gxold:"O2704FondoPlanCuentaNombre",gxvar:"A2704FondoPlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2704FondoPlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2704FondoPlanCuentaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("FONDOPLANCUENTANOMBRE",n||gx.fn.currentGridRowImpl(55),gx.O.A2704FondoPlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2704FondoPlanCuentaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDOPLANCUENTANOMBRE",n||gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"BTNTRN_ENTER",grid:0,evt:"e131y85_client",std:"ENTER"};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"BTNTRN_CANCEL",grid:0,evt:"e141y85_client"};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"BTNTRN_DELETE",grid:0,evt:"e151y85_client",std:"DELETE"};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[71]={id:71,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDO094",gxz:"Z872Fondo094",gxold:"O872Fondo094",gxvar:"A872Fondo094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A872Fondo094=n)},v2z:function(n){n!==undefined&&(gx.O.Z872Fondo094=n)},v2c:function(){gx.fn.setControlValue("FONDO094",gx.O.A872Fondo094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A872Fondo094=this.val())},val:function(){return gx.fn.getControlValue("FONDO094")},nac:gx.falseFn};this.declareDomainHdlr(71,function(){});n[72]={id:72,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDO095",gxz:"Z873Fondo095",gxold:"O873Fondo095",gxvar:"A873Fondo095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A873Fondo095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z873Fondo095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("FONDO095",gx.O.A873Fondo095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A873Fondo095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("FONDO095")},nac:gx.falseFn};this.declareDomainHdlr(72,function(){});n[73]={id:73,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDO097",gxz:"Z874Fondo097",gxold:"O874Fondo097",gxvar:"A874Fondo097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A874Fondo097=n)},v2z:function(n){n!==undefined&&(gx.O.Z874Fondo097=n)},v2c:function(){gx.fn.setControlValue("FONDO097",gx.O.A874Fondo097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A874Fondo097=this.val())},val:function(){return gx.fn.getControlValue("FONDO097")},nac:gx.falseFn};this.declareDomainHdlr(73,function(){});n[74]={id:74,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDO098",gxz:"Z875Fondo098",gxold:"O875Fondo098",gxvar:"A875Fondo098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A875Fondo098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z875Fondo098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("FONDO098",gx.O.A875Fondo098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A875Fondo098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("FONDO098")},nac:gx.falseFn};this.declareDomainHdlr(74,function(){});n[75]={id:75,fld:"PROMPT_120",grid:276};this.A38FondoId=0;this.Z38FondoId=0;this.O38FondoId=0;this.A345FondoNombre="";this.Z345FondoNombre="";this.O345FondoNombre="";this.A635FondoTipo="";this.Z635FondoTipo="";this.O635FondoTipo="";this.A2286FondoCuotas="";this.Z2286FondoCuotas="";this.O2286FondoCuotas="";this.A2322FondoUsable="";this.Z2322FondoUsable="";this.O2322FondoUsable="";this.A346FondoEstado="";this.Z346FondoEstado="";this.O346FondoEstado="";this.A871FondoObservacion="";this.Z871FondoObservacion="";this.O871FondoObservacion="";this.Z3255FondoTipoCaja="";this.O3255FondoTipoCaja="";this.Z120FondoPlanCuentaId=0;this.O120FondoPlanCuentaId=0;this.Z2704FondoPlanCuentaNombre="";this.O2704FondoPlanCuentaNombre="";this.A872Fondo094="";this.Z872Fondo094="";this.O872Fondo094="";this.A873Fondo095=gx.date.nullDate();this.Z873Fondo095=gx.date.nullDate();this.O873Fondo095=gx.date.nullDate();this.A874Fondo097="";this.Z874Fondo097="";this.O874Fondo097="";this.A875Fondo098=gx.date.nullDate();this.Z875Fondo098=gx.date.nullDate();this.O875Fondo098=gx.date.nullDate();this.A3255FondoTipoCaja="";this.A120FondoPlanCuentaId=0;this.A2704FondoPlanCuentaNombre="";this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7FondoId=0;this.AV10WebSession={};this.A38FondoId=0;this.A873Fondo095=gx.date.nullDate();this.A872Fondo094="";this.A875Fondo098=gx.date.nullDate();this.A874Fondo097="";this.AV18Pgmdesc="";this.Gx_BScreen=0;this.A345FondoNombre="";this.A871FondoObservacion="";this.A635FondoTipo="";this.A346FondoEstado="";this.A2286FondoCuotas="";this.A2322FondoUsable="";this.Gx_mode="";this.Events={e121y2_client:["AFTER TRN",!0],e131y85_client:["ENTER",!0],e141y85_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7FondoId",fld:"vFONDOID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7FondoId",fld:"vFONDOID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("FONDO094","Visible")',ctrl:"FONDO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FONDO095","Visible")',ctrl:"FONDO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FONDO097","Visible")',ctrl:"FONDO097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("FONDO098","Visible")',ctrl:"FONDO098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_FONDOID=[[],[]];this.EvtParms.VALID_FONDONOMBRE=[[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"}],[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"}]];this.EvtParms.VALID_FONDOCUOTAS=[[{ctrl:"FONDOCUOTAS"},{av:"A2286FondoCuotas",fld:"FONDOCUOTAS",pic:""}],[{ctrl:"FONDOCUOTAS"},{av:"A2286FondoCuotas",fld:"FONDOCUOTAS",pic:""}]];this.EvtParms.VALID_FONDOUSABLE=[[{ctrl:"FONDOUSABLE"},{av:"A2322FondoUsable",fld:"FONDOUSABLE",pic:""}],[{ctrl:"FONDOUSABLE"},{av:"A2322FondoUsable",fld:"FONDOUSABLE",pic:""}]];this.EvtParms.VALID_FONDOESTADO=[[{ctrl:"FONDOESTADO"},{av:"A346FondoEstado",fld:"FONDOESTADO",pic:"@!"}],[{ctrl:"FONDOESTADO"},{av:"A346FondoEstado",fld:"FONDOESTADO",pic:"@!"}]];this.EvtParms.VALID_FONDOTIPOCAJA=[[{ctrl:"FONDOTIPOCAJA"},{av:"A3255FondoTipoCaja",fld:"FONDOTIPOCAJA",pic:""}],[{ctrl:"FONDOTIPOCAJA"},{av:"A3255FondoTipoCaja",fld:"FONDOTIPOCAJA",pic:""}]];this.EvtParms.VALID_FONDOPLANCUENTAID=[[{av:"A120FondoPlanCuentaId",fld:"FONDOPLANCUENTAID",pic:"ZZZZZZZZZ9"},{av:"A2704FondoPlanCuentaNombre",fld:"FONDOPLANCUENTANOMBRE",pic:"@!"}],[{av:"A2704FondoPlanCuentaNombre",fld:"FONDOPLANCUENTANOMBRE",pic:"@!"}]];this.setPrompt("PROMPT_120",[57]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7FondoId","vFONDOID",0,"int",4,0);this.setVCMap("AV18Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);i.addPostingVar({rfrVar:"Gx_mode"});this.Initialize()});gx.wi(function(){gx.createParentObj(fondo)})