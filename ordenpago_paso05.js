/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:52:16.44
*/
gx.evt.autoSkip=!1;gx.define("ordenpago_paso05",!1,function(){var n,u,f,e,t,i,r;this.ServerClass="ordenpago_paso05";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A3003CuentaMovDescriptor=gx.fn.getControlValue("CUENTAMOVDESCRIPTOR");this.AV17OrdPgoID=gx.fn.getIntegerValue("vORDPGOID",".");this.AV17OrdPgoID=gx.fn.getIntegerValue("vORDPGOID",".")};this.Valid_Impuestoid=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Impuestoid",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("IMPUESTOID",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Fondoid=function(){var n=gx.fn.currentGridRowImpl(57);return this.validCliEvt("Valid_Fondoid",57,function(){try{if(gx.fn.currentGridRowImpl(57)===0)return!0;var n=gx.util.balloon.getNew("FONDOID",gx.fn.currentGridRowImpl(57));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11821_client=function(){return this.clearMessages(),this.call("ordenpago_paso04.aspx",[]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12822_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e17822_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35,38,39,40,42,43,44,45,46,47,48,49,50,51,54,55,56,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72];this.GXLastCtrlId=72;this.GriddetalleContainer=new gx.grid.grid(this,2,"WbpLvl2",25,"Griddetalle","Griddetalle","GriddetalleContainer",this.CmpContext,this.IsMasterPage,"ordenpago_paso05",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);u=this.GriddetalleContainer;u.addSingleLineEdit(84,26,"ORDPGOID","Nº","","OrdPgoId","int",0,"px",9,9,"right",null,[],84,"OrdPgoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(87,27,"ORDPGOLINID","Nº","","OrdPgoLinId","int",0,"px",4,4,"right",null,[],87,"OrdPgoLinId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit("Gcuentamovdescriptor",28,"vGCUENTAMOVDESCRIPTOR","Descriptor","","gCuentaMovDescriptor","char",0,"px",100,80,"left",null,[],"Gcuentamovdescriptor","gCuentaMovDescriptor",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(3005,29,"CUENTAMOVFECHAVTO","Vto.","Fecha ...","CuentaMovFechaVto","date",0,"px",10,10,"right",null,[],3005,"CuentaMovFechaVto",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(628,30,"ORDPGOMOVSDO","Saldo a pagar","","OrdPgoMovSdo","decimal",0,"px",13,13,"right",null,[],628,"OrdPgoMovSdo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GriddetalleContainer.emptyText="";this.setGrid(u);this.GridretencionesContainer=new gx.grid.grid(this,4,"WbpLvl4",41,"Gridretenciones","Gridretenciones","GridretencionesContainer",this.CmpContext,this.IsMasterPage,"ordenpago_paso05",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);f=this.GridretencionesContainer;f.addSingleLineEdit(77,42,"IMPUESTOID","Ide.","","ImpuestoId","int",0,"px",4,4,"right",null,[],77,"ImpuestoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");f.addSingleLineEdit(391,43,"IMPUESTONOMBRE","Impuesto","","ImpuestoNombre","svchar",0,"px",64,64,"left",null,[],391,"ImpuestoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");f.addSingleLineEdit(2697,44,"ORDPGOIMPUESTOALICUOTA","Alicuota","","OrdPgoImpuestoAlicuota","int",0,"px",4,4,"right",null,[],2697,"OrdPgoImpuestoAlicuota",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");f.addSingleLineEdit(2698,45,"ORDPGOIMPUESTOIMPORTE","Importe","","OrdPgoImpuestoImporte","decimal",0,"px",13,13,"right",null,[],2698,"OrdPgoImpuestoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridretencionesContainer.emptyText="";this.setGrid(f);this.FondosContainer=new gx.grid.grid(this,3,"WbpLvl3",57,"Fondos","Fondos","FondosContainer",this.CmpContext,this.IsMasterPage,"ordenpago_paso05",[],!1,1,!0,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);e=this.FondosContainer;e.addSingleLineEdit(38,58,"FONDOID","Ide.","","FondoId","int",0,"px",4,4,"right",null,[],38,"FondoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");e.addSingleLineEdit(345,59,"FONDONOMBRE","Fondo","","FondoNombre","svchar",0,"px",64,64,"left",null,[],345,"FondoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");e.addSingleLineEdit(2075,60,"ORDPGOFONDOIMPORTE","Importe","","OrdPgoFondoImporte","decimal",0,"px",13,13,"right",null,[],2075,"OrdPgoFondoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.FondosContainer.emptyText="";this.setGrid(e);this.DVPANEL_ORDENPAGODETALLEContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_ORDENPAGODETALLEContainer","Dvpanel_ordenpagodetalle","DVPANEL_ORDENPAGODETALLE");t=this.DVPANEL_ORDENPAGODETALLEContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setDynProp("Title","Title","Detalle de Imputación","str");t.setProp("Collapsible","Collapsible",!0,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);this.DVPANEL_UNNAMEDTABLE2Container=gx.uc.getNew(this,36,22,"BootstrapPanel","DVPANEL_UNNAMEDTABLE2Container","Dvpanel_unnamedtable2","DVPANEL_UNNAMEDTABLE2");i=this.DVPANEL_UNNAMEDTABLE2Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Retenciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.DVPANEL_ORDENPAGOFONDOSContainer=gx.uc.getNew(this,52,22,"BootstrapPanel","DVPANEL_ORDENPAGOFONDOSContainer","Dvpanel_ordenpagofondos","DVPANEL_ORDENPAGOFONDOS");r=this.DVPANEL_ORDENPAGOFONDOSContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Forma de Pago","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"ORDENPAGODETALLE",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vORDPGORESPONSABLE",gxz:"ZV25OrdPgoResponsable",gxold:"OV25OrdPgoResponsable",gxvar:"AV25OrdPgoResponsable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV25OrdPgoResponsable=n)},v2z:function(n){n!==undefined&&(gx.O.ZV25OrdPgoResponsable=n)},v2c:function(){gx.fn.setControlValue("vORDPGORESPONSABLE",gx.O.AV25OrdPgoResponsable,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV25OrdPgoResponsable=this.val())},val:function(){return gx.fn.getControlValue("vORDPGORESPONSABLE")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[26]={id:26,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOID",gxz:"Z84OrdPgoId",gxold:"O84OrdPgoId",gxvar:"A84OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z84OrdPgoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGOID",n||gx.fn.currentGridRowImpl(25),gx.O.A84OrdPgoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGOID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};n[27]={id:27,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOLINID",gxz:"Z87OrdPgoLinId",gxold:"O87OrdPgoLinId",gxvar:"A87OrdPgoLinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A87OrdPgoLinId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z87OrdPgoLinId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGOLINID",n||gx.fn.currentGridRowImpl(25),gx.O.A87OrdPgoLinId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A87OrdPgoLinId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGOLINID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGCUENTAMOVDESCRIPTOR",gxz:"ZV27gCuentaMovDescriptor",gxold:"OV27gCuentaMovDescriptor",gxvar:"AV27gCuentaMovDescriptor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV27gCuentaMovDescriptor=n)},v2z:function(n){n!==undefined&&(gx.O.ZV27gCuentaMovDescriptor=n)},v2c:function(n){gx.fn.setGridControlValue("vGCUENTAMOVDESCRIPTOR",n||gx.fn.currentGridRowImpl(25),gx.O.AV27gCuentaMovDescriptor,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV27gCuentaMovDescriptor=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vGCUENTAMOVDESCRIPTOR",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVFECHAVTO",gxz:"Z3005CuentaMovFechaVto",gxold:"O3005CuentaMovFechaVto",gxvar:"A3005CuentaMovFechaVto",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3005CuentaMovFechaVto=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3005CuentaMovFechaVto=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CUENTAMOVFECHAVTO",n||gx.fn.currentGridRowImpl(25),gx.O.A3005CuentaMovFechaVto,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3005CuentaMovFechaVto=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CUENTAMOVFECHAVTO",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:25,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOMOVSDO",gxz:"Z628OrdPgoMovSdo",gxold:"O628OrdPgoMovSdo",gxvar:"A628OrdPgoMovSdo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A628OrdPgoMovSdo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z628OrdPgoMovSdo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ORDPGOMOVSDO",n||gx.fn.currentGridRowImpl(25),gx.O.A628OrdPgoMovSdo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A628OrdPgoMovSdo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ORDPGOMOVSDO",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"UNNAMEDTABLE1",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[38]={id:38,fld:"UNNAMEDTABLE2",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[42]={id:42,lvl:4,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridretencionesContainer,fnc:this.Valid_Impuestoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTOID",gxz:"Z77ImpuestoId",gxold:"O77ImpuestoId",gxvar:"A77ImpuestoId",ucs:[],op:[43],ip:[43,42],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A77ImpuestoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z77ImpuestoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("IMPUESTOID",n||gx.fn.currentGridRowImpl(41),gx.O.A77ImpuestoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A77ImpuestoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("IMPUESTOID",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[43]={id:43,lvl:4,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridretencionesContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IMPUESTONOMBRE",gxz:"Z391ImpuestoNombre",gxold:"O391ImpuestoNombre",gxvar:"A391ImpuestoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A391ImpuestoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z391ImpuestoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("IMPUESTONOMBRE",n||gx.fn.currentGridRowImpl(41),gx.O.A391ImpuestoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A391ImpuestoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("IMPUESTONOMBRE",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[44]={id:44,lvl:4,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridretencionesContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOIMPUESTOALICUOTA",gxz:"Z2697OrdPgoImpuestoAlicuota",gxold:"O2697OrdPgoImpuestoAlicuota",gxvar:"A2697OrdPgoImpuestoAlicuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2697OrdPgoImpuestoAlicuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2697OrdPgoImpuestoAlicuota=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGOIMPUESTOALICUOTA",n||gx.fn.currentGridRowImpl(41),gx.O.A2697OrdPgoImpuestoAlicuota,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2697OrdPgoImpuestoAlicuota=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGOIMPUESTOALICUOTA",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[45]={id:45,lvl:4,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.GridretencionesContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOIMPUESTOIMPORTE",gxz:"Z2698OrdPgoImpuestoImporte",gxold:"O2698OrdPgoImpuestoImporte",gxvar:"A2698OrdPgoImpuestoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2698OrdPgoImpuestoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2698OrdPgoImpuestoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ORDPGOIMPUESTOIMPORTE",n||gx.fn.currentGridRowImpl(41),gx.O.A2698OrdPgoImpuestoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2698OrdPgoImpuestoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ORDPGOIMPUESTOIMPORTE",n||gx.fn.currentGridRowImpl(41),".",",")},nac:gx.falseFn};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRETENCIONTOTAL",gxz:"ZV21RetencionTotal",gxold:"OV21RetencionTotal",gxvar:"AV21RetencionTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV21RetencionTotal=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV21RetencionTotal=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("vRETENCIONTOTAL",gx.O.AV21RetencionTotal,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV21RetencionTotal=this.val())},val:function(){return gx.fn.getDecimalValue("vRETENCIONTOTAL",".",",")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});n[51]={id:51,fld:"",grid:0};n[54]={id:54,fld:"ORDENPAGOFONDOS",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[58]={id:58,lvl:3,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.FondosContainer,fnc:this.Valid_Fondoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOID",gxz:"Z38FondoId",gxold:"O38FondoId",gxvar:"A38FondoId",ucs:[],op:[59],ip:[59,58],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A38FondoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z38FondoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FONDOID",n||gx.fn.currentGridRowImpl(57),gx.O.A38FondoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A38FondoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FONDOID",n||gx.fn.currentGridRowImpl(57),".")},nac:gx.falseFn};n[59]={id:59,lvl:3,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:57,gxgrid:this.FondosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDONOMBRE",gxz:"Z345FondoNombre",gxold:"O345FondoNombre",gxvar:"A345FondoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A345FondoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z345FondoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(57),gx.O.A345FondoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A345FondoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};n[60]={id:60,lvl:3,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:57,gxgrid:this.FondosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOFONDOIMPORTE",gxz:"Z2075OrdPgoFondoImporte",gxold:"O2075OrdPgoFondoImporte",gxvar:"A2075OrdPgoFondoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2075OrdPgoFondoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2075OrdPgoFondoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ORDPGOFONDOIMPORTE",n||gx.fn.currentGridRowImpl(57),gx.O.A2075OrdPgoFondoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2075OrdPgoFondoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ORDPGOFONDOIMPORTE",n||gx.fn.currentGridRowImpl(57),".",",")},nac:gx.falseFn};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vORDPGOFONIMPFX",gxz:"ZV24OrdPgoFonImpFx",gxold:"OV24OrdPgoFonImpFx",gxvar:"AV24OrdPgoFonImpFx",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV24OrdPgoFonImpFx=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV24OrdPgoFonImpFx=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("vORDPGOFONIMPFX",gx.O.AV24OrdPgoFonImpFx,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.AV24OrdPgoFonImpFx=this.val())},val:function(){return gx.fn.getDecimalValue("vORDPGOFONIMPFX",".",",")},nac:gx.falseFn};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"BTNWIZARDPREVIOUS",grid:0,evt:"e11821_client"};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"BTNWIZARDNEXT",grid:0,evt:"e12822_client",std:"ENTER"};this.AV25OrdPgoResponsable="";this.ZV25OrdPgoResponsable="";this.OV25OrdPgoResponsable="";this.Z84OrdPgoId=0;this.O84OrdPgoId=0;this.Z87OrdPgoLinId=0;this.O87OrdPgoLinId=0;this.ZV27gCuentaMovDescriptor="";this.OV27gCuentaMovDescriptor="";this.Z3005CuentaMovFechaVto=gx.date.nullDate();this.O3005CuentaMovFechaVto=gx.date.nullDate();this.Z628OrdPgoMovSdo=0;this.O628OrdPgoMovSdo=0;this.Z77ImpuestoId=0;this.O77ImpuestoId=0;this.Z391ImpuestoNombre="";this.O391ImpuestoNombre="";this.Z2697OrdPgoImpuestoAlicuota=0;this.O2697OrdPgoImpuestoAlicuota=0;this.Z2698OrdPgoImpuestoImporte=0;this.O2698OrdPgoImpuestoImporte=0;this.AV21RetencionTotal=0;this.ZV21RetencionTotal=0;this.OV21RetencionTotal=0;this.Z38FondoId=0;this.O38FondoId=0;this.Z345FondoNombre="";this.O345FondoNombre="";this.Z2075OrdPgoFondoImporte=0;this.O2075OrdPgoFondoImporte=0;this.AV24OrdPgoFonImpFx=0;this.ZV24OrdPgoFonImpFx=0;this.OV24OrdPgoFonImpFx=0;this.AV25OrdPgoResponsable="";this.AV21RetencionTotal=0;this.AV24OrdPgoFonImpFx=0;this.A3003CuentaMovDescriptor="";this.A88CuentaId=0;this.A197CuentaMovId=0;this.A84OrdPgoId=0;this.A87OrdPgoLinId=0;this.AV27gCuentaMovDescriptor="";this.A3005CuentaMovFechaVto=gx.date.nullDate();this.A628OrdPgoMovSdo=0;this.A77ImpuestoId=0;this.A391ImpuestoNombre="";this.A2697OrdPgoImpuestoAlicuota=0;this.A2698OrdPgoImpuestoImporte=0;this.A38FondoId=0;this.A345FondoNombre="";this.A2075OrdPgoFondoImporte=0;this.AV17OrdPgoID=0;this.Events={e12822_client:["ENTER",!0],e17822_client:["CANCEL",!0],e11821_client:["'WIZARDPREVIOUS'",!1]};this.EvtParms.REFRESH=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"FONDOS_nFirstRecordOnPage"},{av:"FONDOS_nEOF"},{ctrl:"FONDOS",prop:"Rows"},{av:"GRIDRETENCIONES_nFirstRecordOnPage"},{av:"GRIDRETENCIONES_nEOF"},{ctrl:"GRIDRETENCIONES",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.START=[[],[{ctrl:"FONDOS",prop:"Rows"},{ctrl:"GRIDRETENCIONES",prop:"Rows"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV25OrdPgoResponsable",fld:"vORDPGORESPONSABLE",pic:"@!"},{av:"this.DVPANEL_ORDENPAGODETALLEContainer.Title",ctrl:"DVPANEL_ORDENPAGODETALLE",prop:"Title"}]];this.EvtParms["FONDOS.LOAD"]=[[{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2075OrdPgoFondoImporte",fld:"ORDPGOFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms["GRIDRETENCIONES.LOAD"]=[[{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2698OrdPgoImpuestoImporte",fld:"ORDPGOIMPUESTOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms["GRIDDETALLE.LOAD"]=[[{av:"A3003CuentaMovDescriptor",fld:"CUENTAMOVDESCRIPTOR",pic:"@!"}],[{av:"AV27gCuentaMovDescriptor",fld:"vGCUENTAMOVDESCRIPTOR",pic:"@!"}]];this.EvtParms["'WIZARDPREVIOUS'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV25OrdPgoResponsable",fld:"vORDPGORESPONSABLE",pic:"@!"}],[{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}]];this.EvtParms.GRIDDETALLE_FIRSTPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.GRIDDETALLE_PREVPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.GRIDDETALLE_NEXTPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.GRIDDETALLE_LASTPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.FONDOS_FIRSTPAGE=[[{av:"FONDOS_nFirstRecordOnPage"},{av:"FONDOS_nEOF"},{ctrl:"FONDOS",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.FONDOS_PREVPAGE=[[{av:"FONDOS_nFirstRecordOnPage"},{av:"FONDOS_nEOF"},{ctrl:"FONDOS",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.FONDOS_NEXTPAGE=[[{av:"FONDOS_nFirstRecordOnPage"},{av:"FONDOS_nEOF"},{ctrl:"FONDOS",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.FONDOS_LASTPAGE=[[{av:"FONDOS_nFirstRecordOnPage"},{av:"FONDOS_nEOF"},{ctrl:"FONDOS",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.GRIDRETENCIONES_FIRSTPAGE=[[{av:"GRIDRETENCIONES_nFirstRecordOnPage"},{av:"GRIDRETENCIONES_nEOF"},{ctrl:"GRIDRETENCIONES",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.GRIDRETENCIONES_PREVPAGE=[[{av:"GRIDRETENCIONES_nFirstRecordOnPage"},{av:"GRIDRETENCIONES_nEOF"},{ctrl:"GRIDRETENCIONES",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.GRIDRETENCIONES_NEXTPAGE=[[{av:"GRIDRETENCIONES_nFirstRecordOnPage"},{av:"GRIDRETENCIONES_nEOF"},{ctrl:"GRIDRETENCIONES",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.GRIDRETENCIONES_LASTPAGE=[[{av:"GRIDRETENCIONES_nFirstRecordOnPage"},{av:"GRIDRETENCIONES_nEOF"},{ctrl:"GRIDRETENCIONES",prop:"Rows"},{av:"AV17OrdPgoID",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV21RetencionTotal",fld:"vRETENCIONTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV24OrdPgoFonImpFx",fld:"vORDPGOFONIMPFX",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.VALID_IMPUESTOID=[[{av:"A391ImpuestoNombre",fld:"IMPUESTONOMBRE",pic:"@!"},{av:"A77ImpuestoId",fld:"IMPUESTOID",pic:"ZZZ9"}],[{av:"A391ImpuestoNombre",fld:"IMPUESTONOMBRE",pic:"@!"}]];this.EvtParms.VALID_FONDOID=[[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"}]];this.EnterCtrl=["BTNWIZARDNEXT"];this.setVCMap("A3003CuentaMovDescriptor","CUENTAMOVDESCRIPTOR",0,"char",100,0);this.setVCMap("AV17OrdPgoID","vORDPGOID",0,"int",9,0);this.setVCMap("AV17OrdPgoID","vORDPGOID",0,"int",9,0);this.setVCMap("AV17OrdPgoID","vORDPGOID",0,"int",9,0);u.addRefreshingVar({rfrVar:"AV17OrdPgoID"});u.addRefreshingVar(this.GXValidFnc[50]);u.addRefreshingVar(this.GXValidFnc[65]);u.addRefreshingParm({rfrVar:"AV17OrdPgoID"});u.addRefreshingParm(this.GXValidFnc[50]);u.addRefreshingParm(this.GXValidFnc[65]);f.addRefreshingVar({rfrVar:"AV17OrdPgoID"});f.addRefreshingVar(this.GXValidFnc[50]);f.addRefreshingVar(this.GXValidFnc[65]);f.addRefreshingParm({rfrVar:"AV17OrdPgoID"});f.addRefreshingParm(this.GXValidFnc[50]);f.addRefreshingParm(this.GXValidFnc[65]);e.addRefreshingVar({rfrVar:"AV17OrdPgoID"});e.addRefreshingVar(this.GXValidFnc[65]);e.addRefreshingVar(this.GXValidFnc[50]);e.addRefreshingParm({rfrVar:"AV17OrdPgoID"});e.addRefreshingParm(this.GXValidFnc[65]);e.addRefreshingParm(this.GXValidFnc[50]);this.Initialize()});gx.wi(function(){gx.createParentObj(ordenpago_paso05)})