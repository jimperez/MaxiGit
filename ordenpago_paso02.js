/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:52:13.9
*/
gx.evt.autoSkip=!1;gx.define("ordenpago_paso02",!1,function(){var n,u,f,t,i,r;this.ServerClass="ordenpago_paso02";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV40ClienteSaldoVencido=gx.fn.getDecimalValue("vCLIENTESALDOVENCIDO",".",",");this.AV36ProveedorCuentaId=gx.fn.getIntegerValue("vPROVEEDORCUENTAID",".")};this.Validv_Ordpgoid=function(){return this.validCliEvt("Validv_Ordpgoid",0,function(){try{var n=gx.util.balloon.getNew("vORDPGOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cuentaid=function(){var n=gx.fn.currentGridRowImpl(32);return this.validCliEvt("Valid_Cuentaid",32,function(){try{if(gx.fn.currentGridRowImpl(32)===0)return!0;var n=gx.util.balloon.getNew("CUENTAID",gx.fn.currentGridRowImpl(32));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cuentamovid=function(){var n=gx.fn.currentGridRowImpl(32);return this.validCliEvt("Valid_Cuentamovid",32,function(){try{if(gx.fn.currentGridRowImpl(32)===0)return!0;var n=gx.util.balloon.getNew("CUENTAMOVID",gx.fn.currentGridRowImpl(32));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cuentaid=function(){var n=gx.fn.currentGridRowImpl(32);return this.validCliEvt("Valid_Cuentaid",32,function(){try{if(gx.fn.currentGridRowImpl(32)===0)return!0;var n=gx.util.balloon.getNew("CUENTAID",gx.fn.currentGridRowImpl(32));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cuentamovid=function(){var n=gx.fn.currentGridRowImpl(32);return this.validCliEvt("Valid_Cuentamovid",32,function(){try{if(gx.fn.currentGridRowImpl(32)===0)return!0;var n=gx.util.balloon.getNew("CUENTAMOVID",gx.fn.currentGridRowImpl(32));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e117z1_client=function(){return this.clearMessages(),this.DVELOP_CONFIRMPANEL_BTNANTERIORContainer.Confirm(),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e227z2_client=function(){return this.clearMessages(),this.call("ordenpago_paso01.aspx",[]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e127z2_client=function(){return this.executeServerEvent("DVELOP_CONFIRMPANEL_BTNANTERIOR.CLOSE",!1,null,!0,!0)};this.e177z2_client=function(){return this.executeServerEvent("VCUENTAAGREGAR.CLICK",!0,arguments[0],!1,!1)};this.e207z2_client=function(){return this.executeServerEvent("VPAGODETALLEELIMINAR.CLICK",!0,arguments[0],!1,!1)};this.e137z2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e187z2_client=function(){return this.executeServerEvent("CUENTAMOVDESCRIPTOR.CLICK",!0,arguments[0],!1,!1)};this.e237z2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29,30,31,33,34,35,36,37,38,39,40,41,42,43,46,47,48,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70];this.GXLastCtrlId=70;this.GridcuentaContainer=new gx.grid.grid(this,2,"WbpLvl2",32,"Gridcuenta","Gridcuenta","GridcuentaContainer",this.CmpContext,this.IsMasterPage,"ordenpago_paso02",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);u=this.GridcuentaContainer;u.addBitmap("&Verdetalle","vVERDETALLE",33,0,"px",17,"px",null,"","","ActionBaseColorAttribute","WWActionColumn");u.addSingleLineEdit(88,34,"CUENTAID","Nº Cta.","","CuentaId","int",0,"px",8,8,"right",null,[],88,"CuentaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(197,35,"CUENTAMOVID","Mov.","","CuentaMovId","int",0,"px",4,4,"right",null,[],197,"CuentaMovId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(3003,36,"CUENTAMOVDESCRIPTOR","Descriptor","","CuentaMovDescriptor","char",0,"px",100,80,"left","e187z2_client",[],3003,"CuentaMovDescriptor",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(3005,37,"CUENTAMOVFECHAVTO","Vto.","Fecha ...","CuentaMovFechaVto","date",0,"px",10,10,"right",null,[],3005,"CuentaMovFechaVto",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(1305,38,"CUENTAMOVIMPORTE","Importe","","CuentaMovImporte","decimal",0,"px",13,13,"right",null,[],1305,"CuentaMovImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(3004,39,"CUENTAMOVSALDO","Saldo","","CuentaMovSaldo","decimal",0,"px",13,13,"right",null,[],3004,"CuentaMovSaldo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit("Ordpgomovsdo",40,"vORDPGOMOVSDO","A Pagar","","OrdPgoMovSdo","decimal",0,"px",13,13,"right",null,[],"Ordpgomovsdo","OrdPgoMovSdo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addBitmap("&Cuentaagregar","vCUENTAAGREGAR",41,0,"px",17,"px","e177z2_client","","","ActionBaseColorAttribute","WWActionColumn");this.GridcuentaContainer.emptyText="";this.setGrid(u);this.GriddetalleContainer=new gx.grid.grid(this,3,"WbpLvl3",49,"Griddetalle","Griddetalle","GriddetalleContainer",this.CmpContext,this.IsMasterPage,"ordenpago_paso02",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);f=this.GriddetalleContainer;f.addSingleLineEdit(84,50,"ORDPGOID","Nº","","OrdPgoId","int",0,"px",9,9,"right",null,[],84,"OrdPgoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");f.addSingleLineEdit(87,51,"ORDPGOLINID","Nº","","OrdPgoLinId","int",0,"px",4,4,"right",null,[],87,"OrdPgoLinId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");f.addSingleLineEdit("G2cuentamovdescriptor",52,"vG2CUENTAMOVDESCRIPTOR","Descriptor","","g2CuentaMovDescriptor","char",0,"px",100,80,"left",null,[],"G2cuentamovdescriptor","g2CuentaMovDescriptor",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");f.addSingleLineEdit(628,53,"ORDPGOMOVSDO","Saldo a pagar","","OrdPgoMovSdo","decimal",0,"px",13,13,"right",null,[],628,"OrdPgoMovSdo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");f.addBitmap("&Pagodetalleeliminar","vPAGODETALLEELIMINAR",54,0,"px",17,"px","e207z2_client","","","ActionBaseColorAttribute","WWActionColumn");this.GriddetalleContainer.emptyText="";this.setGrid(f);this.DVPANEL_ORDENPAGOCUENTAContainer=gx.uc.getNew(this,27,20,"BootstrapPanel","DVPANEL_ORDENPAGOCUENTAContainer","Dvpanel_ordenpagocuenta","DVPANEL_ORDENPAGOCUENTA");t=this.DVPANEL_ORDENPAGOCUENTAContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setDynProp("Title","Title","Cuenta Corriente","str");t.setProp("Collapsible","Collapsible",!0,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);this.DVPANEL_ORDENPAGODETALLEContainer=gx.uc.getNew(this,44,20,"BootstrapPanel","DVPANEL_ORDENPAGODETALLEContainer","Dvpanel_ordenpagodetalle","DVPANEL_ORDENPAGODETALLE");i=this.DVPANEL_ORDENPAGODETALLEContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Detalle de Imputación","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.DVELOP_CONFIRMPANEL_BTNANTERIORContainer=gx.uc.getNew(this,73,20,"BootstrapConfirmPanel","DVELOP_CONFIRMPANEL_BTNANTERIORContainer","Dvelop_confirmpanel_btnanterior","DVELOP_CONFIRMPANEL_BTNANTERIOR");r=this.DVELOP_CONFIRMPANEL_BTNANTERIORContainer;r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100","str");r.setProp("Height","Height","100","str");r.setProp("Class","Class","","str");r.setProp("Title","Title","","str");r.setProp("ConfirmationText","Confirmationtext","Esta Ud. Seguro? Se perderan los datos ingresados","str");r.setProp("YesButtonCaption","Yesbuttoncaption","WWP_ConfirmTextYes","str");r.setProp("NoButtonCaption","Nobuttoncaption","WWP_ConfirmTextNo","str");r.setProp("CancelButtonCaption","Cancelbuttoncaption","WWP_ConfirmTextCancel","str");r.setProp("YesButtonPosition","Yesbuttonposition","left","str");r.setProp("ConfirmType","Confirmtype","1","str");r.setProp("Result","Result","","char");r.setProp("TextType","Texttype","1","str");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});r.addEventHandler("Close",this.e127z2_client);this.setUserControl(r);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"DATOSORDEN",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ordpgoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GriddetalleContainer],fld:"vORDPGOID",gxz:"ZV46OrdPgoId",gxold:"OV46OrdPgoId",gxvar:"AV46OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV46OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV46OrdPgoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDPGOID",gx.O.AV46OrdPgoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV46OrdPgoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDPGOID",".")},nac:gx.falseFn};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPROVEEDOR",gxz:"ZV25Proveedor",gxold:"OV25Proveedor",gxvar:"AV25Proveedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV25Proveedor=n)},v2z:function(n){n!==undefined&&(gx.O.ZV25Proveedor=n)},v2c:function(){gx.fn.setControlValue("vPROVEEDOR",gx.O.AV25Proveedor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV25Proveedor=this.val())},val:function(){return gx.fn.getControlValue("vPROVEEDOR")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[29]={id:29,fld:"ORDENPAGOCUENTA",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[33]={id:33,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:32,gxgrid:this.GridcuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vVERDETALLE",gxz:"ZV37VerDetalle",gxold:"OV37VerDetalle",gxvar:"AV37VerDetalle",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV37VerDetalle=n)},v2z:function(n){n!==undefined&&(gx.O.ZV37VerDetalle=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vVERDETALLE",n||gx.fn.currentGridRowImpl(32),gx.O.AV37VerDetalle,gx.O.AV50Verdetalle_GXI)},c2v:function(n){gx.O.AV50Verdetalle_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV37VerDetalle=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vVERDETALLE",n||gx.fn.currentGridRowImpl(32))},val_GXI:function(n){return gx.fn.getGridControlValue("vVERDETALLE_GXI",n||gx.fn.currentGridRowImpl(32))},gxvar_GXI:"AV50Verdetalle_GXI",nac:gx.falseFn};n[34]={id:34,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:32,gxgrid:this.GridcuentaContainer,fnc:this.Valid_Cuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAID",gxz:"Z88CuentaId",gxold:"O88CuentaId",gxvar:"A88CuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A88CuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z88CuentaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CUENTAID",n||gx.fn.currentGridRowImpl(32),gx.O.A88CuentaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A88CuentaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CUENTAID",n||gx.fn.currentGridRowImpl(32),".")},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:32,gxgrid:this.GridcuentaContainer,fnc:this.Valid_Cuentamovid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVID",gxz:"Z197CuentaMovId",gxold:"O197CuentaMovId",gxvar:"A197CuentaMovId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A197CuentaMovId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z197CuentaMovId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CUENTAMOVID",n||gx.fn.currentGridRowImpl(32),gx.O.A197CuentaMovId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A197CuentaMovId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CUENTAMOVID",n||gx.fn.currentGridRowImpl(32),".")},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:32,gxgrid:this.GridcuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVDESCRIPTOR",gxz:"Z3003CuentaMovDescriptor",gxold:"O3003CuentaMovDescriptor",gxvar:"A3003CuentaMovDescriptor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3003CuentaMovDescriptor=n)},v2z:function(n){n!==undefined&&(gx.O.Z3003CuentaMovDescriptor=n)},v2c:function(n){gx.fn.setGridControlValue("CUENTAMOVDESCRIPTOR",n||gx.fn.currentGridRowImpl(32),gx.O.A3003CuentaMovDescriptor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3003CuentaMovDescriptor=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CUENTAMOVDESCRIPTOR",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn,evt:"e187z2_client"};n[37]={id:37,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:32,gxgrid:this.GridcuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVFECHAVTO",gxz:"Z3005CuentaMovFechaVto",gxold:"O3005CuentaMovFechaVto",gxvar:"A3005CuentaMovFechaVto",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3005CuentaMovFechaVto=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3005CuentaMovFechaVto=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CUENTAMOVFECHAVTO",n||gx.fn.currentGridRowImpl(32),gx.O.A3005CuentaMovFechaVto,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3005CuentaMovFechaVto=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CUENTAMOVFECHAVTO",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:32,gxgrid:this.GridcuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVIMPORTE",gxz:"Z1305CuentaMovImporte",gxold:"O1305CuentaMovImporte",gxvar:"A1305CuentaMovImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1305CuentaMovImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1305CuentaMovImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CUENTAMOVIMPORTE",n||gx.fn.currentGridRowImpl(32),gx.O.A1305CuentaMovImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1305CuentaMovImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CUENTAMOVIMPORTE",n||gx.fn.currentGridRowImpl(32),".",",")},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:32,gxgrid:this.GridcuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVSALDO",gxz:"Z3004CuentaMovSaldo",gxold:"O3004CuentaMovSaldo",gxvar:"A3004CuentaMovSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3004CuentaMovSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3004CuentaMovSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CUENTAMOVSALDO",n||gx.fn.currentGridRowImpl(32),gx.O.A3004CuentaMovSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3004CuentaMovSaldo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CUENTAMOVSALDO",n||gx.fn.currentGridRowImpl(32),".",",")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:32,gxgrid:this.GridcuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vORDPGOMOVSDO",gxz:"ZV19OrdPgoMovSdo",gxold:"OV19OrdPgoMovSdo",gxvar:"AV19OrdPgoMovSdo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV19OrdPgoMovSdo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV19OrdPgoMovSdo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("vORDPGOMOVSDO",n||gx.fn.currentGridRowImpl(32),gx.O.AV19OrdPgoMovSdo,2,",")},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV19OrdPgoMovSdo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("vORDPGOMOVSDO",n||gx.fn.currentGridRowImpl(32),".",",")},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:32,gxgrid:this.GridcuentaContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCUENTAAGREGAR",gxz:"ZV7CuentaAgregar",gxold:"OV7CuentaAgregar",gxvar:"AV7CuentaAgregar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV7CuentaAgregar=n)},v2z:function(n){n!==undefined&&(gx.O.ZV7CuentaAgregar=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vCUENTAAGREGAR",n||gx.fn.currentGridRowImpl(32),gx.O.AV7CuentaAgregar,gx.O.AV51Cuentaagregar_GXI)},c2v:function(n){gx.O.AV51Cuentaagregar_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV7CuentaAgregar=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vCUENTAAGREGAR",n||gx.fn.currentGridRowImpl(32))},val_GXI:function(n){return gx.fn.getGridControlValue("vCUENTAAGREGAR_GXI",n||gx.fn.currentGridRowImpl(32))},gxvar_GXI:"AV51Cuentaagregar_GXI",nac:gx.falseFn,evt:"e177z2_client"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[46]={id:46,fld:"ORDENPAGODETALLE",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[50]={id:50,lvl:3,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOID",gxz:"Z84OrdPgoId",gxold:"O84OrdPgoId",gxvar:"A84OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z84OrdPgoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGOID",n||gx.fn.currentGridRowImpl(49),gx.O.A84OrdPgoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGOID",n||gx.fn.currentGridRowImpl(49),".")},nac:gx.falseFn};n[51]={id:51,lvl:3,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOLINID",gxz:"Z87OrdPgoLinId",gxold:"O87OrdPgoLinId",gxvar:"A87OrdPgoLinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A87OrdPgoLinId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z87OrdPgoLinId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGOLINID",n||gx.fn.currentGridRowImpl(49),gx.O.A87OrdPgoLinId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A87OrdPgoLinId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGOLINID",n||gx.fn.currentGridRowImpl(49),".")},nac:gx.falseFn};n[52]={id:52,lvl:3,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:0,isacc:0,grid:49,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vG2CUENTAMOVDESCRIPTOR",gxz:"ZV39g2CuentaMovDescriptor",gxold:"OV39g2CuentaMovDescriptor",gxvar:"AV39g2CuentaMovDescriptor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV39g2CuentaMovDescriptor=n)},v2z:function(n){n!==undefined&&(gx.O.ZV39g2CuentaMovDescriptor=n)},v2c:function(n){gx.fn.setGridControlValue("vG2CUENTAMOVDESCRIPTOR",n||gx.fn.currentGridRowImpl(49),gx.O.AV39g2CuentaMovDescriptor,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV39g2CuentaMovDescriptor=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vG2CUENTAMOVDESCRIPTOR",n||gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};n[53]={id:53,lvl:3,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:49,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOMOVSDO",gxz:"Z628OrdPgoMovSdo",gxold:"O628OrdPgoMovSdo",gxvar:"A628OrdPgoMovSdo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A628OrdPgoMovSdo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z628OrdPgoMovSdo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ORDPGOMOVSDO",n||gx.fn.currentGridRowImpl(49),gx.O.A628OrdPgoMovSdo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A628OrdPgoMovSdo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ORDPGOMOVSDO",n||gx.fn.currentGridRowImpl(49),".",",")},nac:gx.falseFn};n[54]={id:54,lvl:3,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:49,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPAGODETALLEELIMINAR",gxz:"ZV21PagoDetalleEliminar",gxold:"OV21PagoDetalleEliminar",gxvar:"AV21PagoDetalleEliminar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV21PagoDetalleEliminar=n)},v2z:function(n){n!==undefined&&(gx.O.ZV21PagoDetalleEliminar=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vPAGODETALLEELIMINAR",n||gx.fn.currentGridRowImpl(49),gx.O.AV21PagoDetalleEliminar,gx.O.AV49Pagodetalleeliminar_GXI)},c2v:function(n){gx.O.AV49Pagodetalleeliminar_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV21PagoDetalleEliminar=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vPAGODETALLEELIMINAR",n||gx.fn.currentGridRowImpl(49))},val_GXI:function(n){return gx.fn.getGridControlValue("vPAGODETALLEELIMINAR_GXI",n||gx.fn.currentGridRowImpl(49))},gxvar_GXI:"AV49Pagodetalleeliminar_GXI",nac:gx.falseFn,evt:"e207z2_client"};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vORDPGOSUBTOTAL",gxz:"ZV45OrdPgoSubtotal",gxold:"OV45OrdPgoSubtotal",gxvar:"AV45OrdPgoSubtotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV45OrdPgoSubtotal=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV45OrdPgoSubtotal=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("vORDPGOSUBTOTAL",gx.O.AV45OrdPgoSubtotal,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.AV45OrdPgoSubtotal=this.val())},val:function(){return gx.fn.getDecimalValue("vORDPGOSUBTOTAL",".",",")},nac:gx.falseFn};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"BTNBTNANTERIOR",grid:0,evt:"e117z1_client"};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"BTNWIZARDNEXT",grid:0,evt:"e137z2_client",std:"ENTER"};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[70]={id:70,fld:"TABLEDVELOP_CONFIRMPANEL_BTNANTERIOR",grid:0};this.AV46OrdPgoId=0;this.ZV46OrdPgoId=0;this.OV46OrdPgoId=0;this.AV25Proveedor="";this.ZV25Proveedor="";this.OV25Proveedor="";this.ZV37VerDetalle="";this.OV37VerDetalle="";this.Z88CuentaId=0;this.O88CuentaId=0;this.Z197CuentaMovId=0;this.O197CuentaMovId=0;this.Z3003CuentaMovDescriptor="";this.O3003CuentaMovDescriptor="";this.Z3005CuentaMovFechaVto=gx.date.nullDate();this.O3005CuentaMovFechaVto=gx.date.nullDate();this.Z1305CuentaMovImporte=0;this.O1305CuentaMovImporte=0;this.Z3004CuentaMovSaldo=0;this.O3004CuentaMovSaldo=0;this.ZV19OrdPgoMovSdo=0;this.OV19OrdPgoMovSdo=0;this.ZV7CuentaAgregar="";this.OV7CuentaAgregar="";this.Z84OrdPgoId=0;this.O84OrdPgoId=0;this.Z87OrdPgoLinId=0;this.O87OrdPgoLinId=0;this.ZV39g2CuentaMovDescriptor="";this.OV39g2CuentaMovDescriptor="";this.Z628OrdPgoMovSdo=0;this.O628OrdPgoMovSdo=0;this.ZV21PagoDetalleEliminar="";this.OV21PagoDetalleEliminar="";this.AV45OrdPgoSubtotal=0;this.ZV45OrdPgoSubtotal=0;this.OV45OrdPgoSubtotal=0;this.AV46OrdPgoId=0;this.AV25Proveedor="";this.AV45OrdPgoSubtotal=0;this.A1304CuentaMovTipo="";this.AV37VerDetalle="";this.A88CuentaId=0;this.A197CuentaMovId=0;this.A3003CuentaMovDescriptor="";this.A3005CuentaMovFechaVto=gx.date.nullDate();this.A1305CuentaMovImporte=0;this.A3004CuentaMovSaldo=0;this.AV19OrdPgoMovSdo=0;this.AV7CuentaAgregar="";this.A84OrdPgoId=0;this.A87OrdPgoLinId=0;this.AV39g2CuentaMovDescriptor="";this.A628OrdPgoMovSdo=0;this.AV21PagoDetalleEliminar="";this.AV40ClienteSaldoVencido=0;this.AV36ProveedorCuentaId=0;this.Events={e127z2_client:["DVELOP_CONFIRMPANEL_BTNANTERIOR.CLOSE",!0],e177z2_client:["VCUENTAAGREGAR.CLICK",!0],e207z2_client:["VPAGODETALLEELIMINAR.CLICK",!0],e137z2_client:["ENTER",!0],e187z2_client:["CUENTAMOVDESCRIPTOR.CLICK",!0],e237z2_client:["CANCEL",!0],e117z1_client:["'DOBTNANTERIOR'",!1],e227z2_client:["'WIZARDPREVIOUS'",!1]};this.EvtParms.REFRESH=[[{av:"GRIDCUENTA_nFirstRecordOnPage"},{av:"GRIDCUENTA_nEOF"},{ctrl:"GRIDCUENTA",prop:"Rows"},{av:"AV36ProveedorCuentaId",fld:"vPROVEEDORCUENTAID",pic:"ZZZZZZZ9"},{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms.START=[[],[{ctrl:"GRIDDETALLE",prop:"Rows"},{ctrl:"GRIDCUENTA",prop:"Rows"},{av:'gx.fn.getCtrlProperty("DATOSORDEN","Visible")',ctrl:"DATOSORDEN",prop:"Visible"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV36ProveedorCuentaId",fld:"vPROVEEDORCUENTAID",pic:"ZZZZZZZ9"},{av:"AV25Proveedor",fld:"vPROVEEDOR",pic:"@!"},{av:"this.DVPANEL_ORDENPAGOCUENTAContainer.Title",ctrl:"DVPANEL_ORDENPAGOCUENTA",prop:"Title"},{av:"AV40ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms["GRIDDETALLE.LOAD"]=[[{av:"A3003CuentaMovDescriptor",fld:"CUENTAMOVDESCRIPTOR",pic:"@!"}],[{av:"AV21PagoDetalleEliminar",fld:"vPAGODETALLEELIMINAR",pic:""},{av:'gx.fn.getCtrlProperty("vPAGODETALLEELIMINAR","Tooltiptext")',ctrl:"vPAGODETALLEELIMINAR",prop:"Tooltiptext"},{av:"AV39g2CuentaMovDescriptor",fld:"vG2CUENTAMOVDESCRIPTOR",pic:"@!"}]];this.EvtParms["GRIDCUENTA.LOAD"]=[[],[{av:"AV37VerDetalle",fld:"vVERDETALLE",pic:""},{av:'gx.fn.getCtrlProperty("vVERDETALLE","Tooltiptext")',ctrl:"vVERDETALLE",prop:"Tooltiptext"},{av:"AV7CuentaAgregar",fld:"vCUENTAAGREGAR",pic:""},{av:'gx.fn.getCtrlProperty("vCUENTAAGREGAR","Tooltiptext")',ctrl:"vCUENTAAGREGAR",prop:"Tooltiptext"}]];this.EvtParms["'DOBTNANTERIOR'"]=[[],[]];this.EvtParms["DVELOP_CONFIRMPANEL_BTNANTERIOR.CLOSE"]=[[{av:"this.DVELOP_CONFIRMPANEL_BTNANTERIORContainer.Result",ctrl:"DVELOP_CONFIRMPANEL_BTNANTERIOR",prop:"Result"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms["VCUENTAAGREGAR.CLICK"]=[[{av:"GRIDCUENTA_nFirstRecordOnPage"},{av:"GRIDCUENTA_nEOF"},{ctrl:"GRIDCUENTA",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV36ProveedorCuentaId",fld:"vPROVEEDORCUENTAID",pic:"ZZZZZZZ9"},{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV19OrdPgoMovSdo",fld:"vORDPGOMOVSDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A3004CuentaMovSaldo",fld:"CUENTAMOVSALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A88CuentaId",fld:"CUENTAID",pic:"ZZZZZZZ9"},{av:"A197CuentaMovId",fld:"CUENTAMOVID",pic:"ZZZ9"}],[{av:"AV19OrdPgoMovSdo",fld:"vORDPGOMOVSDO",pic:"ZZ,ZZZ,ZZ9.99"},{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms["VPAGODETALLEELIMINAR.CLICK"]=[[{av:"GRIDCUENTA_nFirstRecordOnPage"},{av:"GRIDCUENTA_nEOF"},{ctrl:"GRIDCUENTA",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV36ProveedorCuentaId",fld:"vPROVEEDORCUENTAID",pic:"ZZZZZZZ9"},{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9"},{av:"A87OrdPgoLinId",fld:"ORDPGOLINID",pic:"ZZZ9"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms["'WIZARDPREVIOUS'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV45OrdPgoSubtotal",fld:"vORDPGOSUBTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV40ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms["CUENTAMOVDESCRIPTOR.CLICK"]=[[{av:"GRIDCUENTA_nFirstRecordOnPage"},{av:"GRIDCUENTA_nEOF"},{ctrl:"GRIDCUENTA",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV36ProveedorCuentaId",fld:"vPROVEEDORCUENTAID",pic:"ZZZZZZZ9"},{av:"A88CuentaId",fld:"CUENTAID",pic:"ZZZZZZZ9"},{av:"A197CuentaMovId",fld:"CUENTAMOVID",pic:"ZZZ9"},{av:"A3004CuentaMovSaldo",fld:"CUENTAMOVSALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms["GRIDDETALLE.REFRESH"]=[[{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[{av:"AV45OrdPgoSubtotal",fld:"vORDPGOSUBTOTAL",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms.GRIDCUENTA_FIRSTPAGE=[[{av:"GRIDCUENTA_nFirstRecordOnPage"},{av:"GRIDCUENTA_nEOF"},{ctrl:"GRIDCUENTA",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV36ProveedorCuentaId",fld:"vPROVEEDORCUENTAID",pic:"ZZZZZZZ9"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms.GRIDCUENTA_PREVPAGE=[[{av:"GRIDCUENTA_nFirstRecordOnPage"},{av:"GRIDCUENTA_nEOF"},{ctrl:"GRIDCUENTA",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV36ProveedorCuentaId",fld:"vPROVEEDORCUENTAID",pic:"ZZZZZZZ9"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms.GRIDCUENTA_NEXTPAGE=[[{av:"GRIDCUENTA_nFirstRecordOnPage"},{av:"GRIDCUENTA_nEOF"},{ctrl:"GRIDCUENTA",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV36ProveedorCuentaId",fld:"vPROVEEDORCUENTAID",pic:"ZZZZZZZ9"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms.GRIDCUENTA_LASTPAGE=[[{av:"GRIDCUENTA_nFirstRecordOnPage"},{av:"GRIDCUENTA_nEOF"},{ctrl:"GRIDCUENTA",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV36ProveedorCuentaId",fld:"vPROVEEDORCUENTAID",pic:"ZZZZZZZ9"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms.GRIDDETALLE_FIRSTPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms.GRIDDETALLE_PREVPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms.GRIDDETALLE_NEXTPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms.GRIDDETALLE_LASTPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV46OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[{ctrl:"BTNWIZARDNEXT",prop:"Visible"}]];this.EvtParms.VALIDV_ORDPGOID=[[],[]];this.EvtParms.VALID_CUENTAID=[[],[]];this.EvtParms.VALID_CUENTAMOVID=[[],[]];this.EnterCtrl=["BTNWIZARDNEXT"];this.setVCMap("AV40ClienteSaldoVencido","vCLIENTESALDOVENCIDO",0,"decimal",12,2);this.setVCMap("AV36ProveedorCuentaId","vPROVEEDORCUENTAID",0,"int",8,0);this.setVCMap("AV36ProveedorCuentaId","vPROVEEDORCUENTAID",0,"int",8,0);u.addRefreshingVar(this.GXValidFnc[20]);u.addRefreshingVar({rfrVar:"AV36ProveedorCuentaId"});u.addRefreshingParm(this.GXValidFnc[20]);u.addRefreshingParm({rfrVar:"AV36ProveedorCuentaId"});f.addRefreshingVar(this.GXValidFnc[20]);f.addRefreshingParm(this.GXValidFnc[20]);this.Initialize()});gx.wi(function(){gx.createParentObj(ordenpago_paso02)})