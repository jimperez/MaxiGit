/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:59:33.8
*/
gx.evt.autoSkip=!1;gx.define("ordenpago_preordenconfirmar",!1,function(){var n,r,t,i;this.ServerClass="ordenpago_preordenconfirmar";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV5ClienteSaldoVencido=gx.fn.getDecimalValue("vCLIENTESALDOVENCIDO",".",",")};this.Validv_Ordpgoid=function(){return this.validCliEvt("Validv_Ordpgoid",0,function(){try{var n=gx.util.balloon.getNew("vORDPGOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11vu1_client=function(){return this.clearMessages(),this.call("wwextraordenpagopreorden.aspx",[]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e18vu2_client=function(){return this.clearMessages(),this.DVELOP_CONFIRMPANEL_MODIFICARIMPORTEContainer.Confirm(),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12vu2_client=function(){return this.executeServerEvent("DVELOP_CONFIRMPANEL_MODIFICARIMPORTE.CLOSE",!1,null,!0,!0)};this.e16vu2_client=function(){return this.executeServerEvent("VPAGODETALLEELIMINAR.CLICK",!0,arguments[0],!1,!1)};this.e13vu2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e19vu2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];this.GXLastCtrlId=57;this.GriddetalleContainer=new gx.grid.grid(this,2,"WbpLvl2",32,"Griddetalle","Griddetalle","GriddetalleContainer",this.CmpContext,this.IsMasterPage,"ordenpago_preordenconfirmar",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GriddetalleContainer;r.addBitmap("&Pagodetalleeliminar","vPAGODETALLEELIMINAR",33,0,"px",17,"px","e16vu2_client","","","ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(84,34,"ORDPGOID","Nº","","OrdPgoId","int",0,"px",9,9,"right",null,[],84,"OrdPgoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(87,35,"ORDPGOLINID","Nº","","OrdPgoLinId","int",0,"px",4,4,"right",null,[],87,"OrdPgoLinId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(3003,36,"CUENTAMOVDESCRIPTOR","Descriptor","","CuentaMovDescriptor","char",0,"px",100,80,"left",null,[],3003,"CuentaMovDescriptor",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(628,37,"ORDPGOMOVSDO","Importe","","OrdPgoMovSdo","decimal",0,"px",13,13,"right",null,[],628,"OrdPgoMovSdo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1305,38,"CUENTAMOVIMPORTE","Importe","","CuentaMovImporte","decimal",0,"px",13,13,"right",null,[],1305,"CuentaMovImporte",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(3004,39,"CUENTAMOVSALDO","Saldo","","CuentaMovSaldo","decimal",0,"px",13,13,"right",null,[],3004,"CuentaMovSaldo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit("Ordpgomovsdo",40,"vORDPGOMOVSDO","A Pagar","","OrdPgoMovSdo","decimal",0,"px",13,13,"right",null,[],"Ordpgomovsdo","OrdPgoMovSdo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addBitmap("&Modificarimporte","vMODIFICARIMPORTE",41,0,"px",17,"px","e18vu2_client","","","ActionBaseColorAttribute","WWActionColumn");this.GriddetalleContainer.emptyText="";this.setGrid(r);this.DVPANEL_ORDENPAGODETALLEContainer=gx.uc.getNew(this,27,20,"BootstrapPanel","DVPANEL_ORDENPAGODETALLEContainer","Dvpanel_ordenpagodetalle","DVPANEL_ORDENPAGODETALLE");t=this.DVPANEL_ORDENPAGODETALLEContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setDynProp("Title","Title","Detalle de Imputación","str");t.setProp("Collapsible","Collapsible",!0,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);this.DVELOP_CONFIRMPANEL_MODIFICARIMPORTEContainer=gx.uc.getNew(this,60,20,"BootstrapConfirmPanel","DVELOP_CONFIRMPANEL_MODIFICARIMPORTEContainer","Dvelop_confirmpanel_modificarimporte","DVELOP_CONFIRMPANEL_MODIFICARIMPORTE");i=this.DVELOP_CONFIRMPANEL_MODIFICARIMPORTEContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100","str");i.setProp("Height","Height","100","str");i.setProp("Class","Class","","str");i.setProp("Title","Title","Advertencia","str");i.setProp("ConfirmationText","Confirmationtext","¿Cambiar el Importe?","str");i.setProp("YesButtonCaption","Yesbuttoncaption","WWP_ConfirmTextYes","str");i.setProp("NoButtonCaption","Nobuttoncaption","WWP_ConfirmTextNo","str");i.setProp("CancelButtonCaption","Cancelbuttoncaption","WWP_ConfirmTextCancel","str");i.setProp("YesButtonPosition","Yesbuttonposition","left","str");i.setProp("ConfirmType","Confirmtype","1","str");i.setProp("Result","Result","","char");i.setProp("TextType","Texttype","1","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("Close",this.e12vu2_client);this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"DATOSORDEN",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ordpgoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GriddetalleContainer],fld:"vORDPGOID",gxz:"ZV31OrdPgoId",gxold:"OV31OrdPgoId",gxvar:"AV31OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV31OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV31OrdPgoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDPGOID",gx.O.AV31OrdPgoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV31OrdPgoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDPGOID",".")},nac:gx.falseFn};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPROVEEDOR",gxz:"ZV23Proveedor",gxold:"OV23Proveedor",gxvar:"AV23Proveedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV23Proveedor=n)},v2z:function(n){n!==undefined&&(gx.O.ZV23Proveedor=n)},v2c:function(){gx.fn.setControlValue("vPROVEEDOR",gx.O.AV23Proveedor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV23Proveedor=this.val())},val:function(){return gx.fn.getControlValue("vPROVEEDOR")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[29]={id:29,fld:"ORDENPAGODETALLE",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[33]={id:33,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:32,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPAGODETALLEELIMINAR",gxz:"ZV22PagoDetalleEliminar",gxold:"OV22PagoDetalleEliminar",gxvar:"AV22PagoDetalleEliminar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV22PagoDetalleEliminar=n)},v2z:function(n){n!==undefined&&(gx.O.ZV22PagoDetalleEliminar=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vPAGODETALLEELIMINAR",n||gx.fn.currentGridRowImpl(32),gx.O.AV22PagoDetalleEliminar,gx.O.AV40Pagodetalleeliminar_GXI)},c2v:function(n){gx.O.AV40Pagodetalleeliminar_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV22PagoDetalleEliminar=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vPAGODETALLEELIMINAR",n||gx.fn.currentGridRowImpl(32))},val_GXI:function(n){return gx.fn.getGridControlValue("vPAGODETALLEELIMINAR_GXI",n||gx.fn.currentGridRowImpl(32))},gxvar_GXI:"AV40Pagodetalleeliminar_GXI",nac:gx.falseFn,evt:"e16vu2_client"};n[34]={id:34,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:32,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOID",gxz:"Z84OrdPgoId",gxold:"O84OrdPgoId",gxvar:"A84OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z84OrdPgoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGOID",n||gx.fn.currentGridRowImpl(32),gx.O.A84OrdPgoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGOID",n||gx.fn.currentGridRowImpl(32),".")},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:32,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOLINID",gxz:"Z87OrdPgoLinId",gxold:"O87OrdPgoLinId",gxvar:"A87OrdPgoLinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A87OrdPgoLinId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z87OrdPgoLinId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGOLINID",n||gx.fn.currentGridRowImpl(32),gx.O.A87OrdPgoLinId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A87OrdPgoLinId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGOLINID",n||gx.fn.currentGridRowImpl(32),".")},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:32,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVDESCRIPTOR",gxz:"Z3003CuentaMovDescriptor",gxold:"O3003CuentaMovDescriptor",gxvar:"A3003CuentaMovDescriptor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3003CuentaMovDescriptor=n)},v2z:function(n){n!==undefined&&(gx.O.Z3003CuentaMovDescriptor=n)},v2c:function(n){gx.fn.setGridControlValue("CUENTAMOVDESCRIPTOR",n||gx.fn.currentGridRowImpl(32),gx.O.A3003CuentaMovDescriptor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3003CuentaMovDescriptor=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CUENTAMOVDESCRIPTOR",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:32,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOMOVSDO",gxz:"Z628OrdPgoMovSdo",gxold:"O628OrdPgoMovSdo",gxvar:"A628OrdPgoMovSdo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A628OrdPgoMovSdo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z628OrdPgoMovSdo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ORDPGOMOVSDO",n||gx.fn.currentGridRowImpl(32),gx.O.A628OrdPgoMovSdo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A628OrdPgoMovSdo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ORDPGOMOVSDO",n||gx.fn.currentGridRowImpl(32),".",",")},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:32,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVIMPORTE",gxz:"Z1305CuentaMovImporte",gxold:"O1305CuentaMovImporte",gxvar:"A1305CuentaMovImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1305CuentaMovImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1305CuentaMovImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CUENTAMOVIMPORTE",n||gx.fn.currentGridRowImpl(32),gx.O.A1305CuentaMovImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1305CuentaMovImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CUENTAMOVIMPORTE",n||gx.fn.currentGridRowImpl(32),".",",")},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:32,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVSALDO",gxz:"Z3004CuentaMovSaldo",gxold:"O3004CuentaMovSaldo",gxvar:"A3004CuentaMovSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3004CuentaMovSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3004CuentaMovSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CUENTAMOVSALDO",n||gx.fn.currentGridRowImpl(32),gx.O.A3004CuentaMovSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3004CuentaMovSaldo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CUENTAMOVSALDO",n||gx.fn.currentGridRowImpl(32),".",",")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:32,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vORDPGOMOVSDO",gxz:"ZV18OrdPgoMovSdo",gxold:"OV18OrdPgoMovSdo",gxvar:"AV18OrdPgoMovSdo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV18OrdPgoMovSdo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV18OrdPgoMovSdo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("vORDPGOMOVSDO",n||gx.fn.currentGridRowImpl(32),gx.O.AV18OrdPgoMovSdo,2,",")},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV18OrdPgoMovSdo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("vORDPGOMOVSDO",n||gx.fn.currentGridRowImpl(32),".",",")},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:32,gxgrid:this.GriddetalleContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMODIFICARIMPORTE",gxz:"ZV37ModificarImporte",gxold:"OV37ModificarImporte",gxvar:"AV37ModificarImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV37ModificarImporte=n)},v2z:function(n){n!==undefined&&(gx.O.ZV37ModificarImporte=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vMODIFICARIMPORTE",n||gx.fn.currentGridRowImpl(32),gx.O.AV37ModificarImporte,gx.O.AV41Modificarimporte_GXI)},c2v:function(n){gx.O.AV41Modificarimporte_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV37ModificarImporte=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vMODIFICARIMPORTE",n||gx.fn.currentGridRowImpl(32))},val_GXI:function(n){return gx.fn.getGridControlValue("vMODIFICARIMPORTE_GXI",n||gx.fn.currentGridRowImpl(32))},gxvar_GXI:"AV41Modificarimporte_GXI",nac:gx.falseFn,evt:"e18vu2_client"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vORDPGOSUBTOTAL",gxz:"ZV20OrdPgoSubtotal",gxold:"OV20OrdPgoSubtotal",gxvar:"AV20OrdPgoSubtotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV20OrdPgoSubtotal=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV20OrdPgoSubtotal=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("vORDPGOSUBTOTAL",gx.O.AV20OrdPgoSubtotal,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.AV20OrdPgoSubtotal=this.val())},val:function(){return gx.fn.getDecimalValue("vORDPGOSUBTOTAL",".",",")},nac:gx.falseFn};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"BTNBTNANTERIOR",grid:0,evt:"e11vu1_client"};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"BTNENTER",grid:0,evt:"e13vu2_client",std:"ENTER"};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[57]={id:57,fld:"TABLEDVELOP_CONFIRMPANEL_MODIFICARIMPORTE",grid:0};this.AV31OrdPgoId=0;this.ZV31OrdPgoId=0;this.OV31OrdPgoId=0;this.AV23Proveedor="";this.ZV23Proveedor="";this.OV23Proveedor="";this.ZV22PagoDetalleEliminar="";this.OV22PagoDetalleEliminar="";this.Z84OrdPgoId=0;this.O84OrdPgoId=0;this.Z87OrdPgoLinId=0;this.O87OrdPgoLinId=0;this.Z3003CuentaMovDescriptor="";this.O3003CuentaMovDescriptor="";this.Z628OrdPgoMovSdo=0;this.O628OrdPgoMovSdo=0;this.Z1305CuentaMovImporte=0;this.O1305CuentaMovImporte=0;this.Z3004CuentaMovSaldo=0;this.O3004CuentaMovSaldo=0;this.ZV18OrdPgoMovSdo=0;this.OV18OrdPgoMovSdo=0;this.ZV37ModificarImporte="";this.OV37ModificarImporte="";this.AV20OrdPgoSubtotal=0;this.ZV20OrdPgoSubtotal=0;this.OV20OrdPgoSubtotal=0;this.AV31OrdPgoId=0;this.AV23Proveedor="";this.AV20OrdPgoSubtotal=0;this.A88CuentaId=0;this.A197CuentaMovId=0;this.AV22PagoDetalleEliminar="";this.A84OrdPgoId=0;this.A87OrdPgoLinId=0;this.A3003CuentaMovDescriptor="";this.A628OrdPgoMovSdo=0;this.A1305CuentaMovImporte=0;this.A3004CuentaMovSaldo=0;this.AV18OrdPgoMovSdo=0;this.AV37ModificarImporte="";this.AV5ClienteSaldoVencido=0;this.Events={e12vu2_client:["DVELOP_CONFIRMPANEL_MODIFICARIMPORTE.CLOSE",!0],e16vu2_client:["VPAGODETALLEELIMINAR.CLICK",!0],e13vu2_client:["ENTER",!0],e19vu2_client:["CANCEL",!0],e11vu1_client:["'DOBTNANTERIOR'",!1],e18vu2_client:["'DOMODIFICARIMPORTE'",!1]};this.EvtParms.REFRESH=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV5ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.START=[[],[{ctrl:"GRIDDETALLE",prop:"Rows"},{av:'gx.fn.getCtrlProperty("DATOSORDEN","Visible")',ctrl:"DATOSORDEN",prop:"Visible"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV23Proveedor",fld:"vPROVEEDOR",pic:"@!"},{av:"this.DVPANEL_ORDENPAGODETALLEContainer.Title",ctrl:"DVPANEL_ORDENPAGODETALLE",prop:"Title"},{av:"AV5ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}]];this.EvtParms["GRIDDETALLE.LOAD"]=[[{av:"A628OrdPgoMovSdo",fld:"ORDPGOMOVSDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}],[{av:"AV22PagoDetalleEliminar",fld:"vPAGODETALLEELIMINAR",pic:""},{av:'gx.fn.getCtrlProperty("vPAGODETALLEELIMINAR","Tooltiptext")',ctrl:"vPAGODETALLEELIMINAR",prop:"Tooltiptext"},{av:"AV37ModificarImporte",fld:"vMODIFICARIMPORTE",pic:""},{av:'gx.fn.getCtrlProperty("vMODIFICARIMPORTE","Tooltiptext")',ctrl:"vMODIFICARIMPORTE",prop:"Tooltiptext"},{av:"AV18OrdPgoMovSdo",fld:"vORDPGOMOVSDO",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms["'DOBTNANTERIOR'"]=[[],[]];this.EvtParms["'DOMODIFICARIMPORTE'"]=[[],[]];this.EvtParms["DVELOP_CONFIRMPANEL_MODIFICARIMPORTE.CLOSE"]=[[{av:"this.DVELOP_CONFIRMPANEL_MODIFICARIMPORTEContainer.Result",ctrl:"DVELOP_CONFIRMPANEL_MODIFICARIMPORTE",prop:"Result"},{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV5ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0},{av:"AV18OrdPgoMovSdo",fld:"vORDPGOMOVSDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A3004CuentaMovSaldo",fld:"CUENTAMOVSALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A628OrdPgoMovSdo",fld:"ORDPGOMOVSDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A87OrdPgoLinId",fld:"ORDPGOLINID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms["VPAGODETALLEELIMINAR.CLICK"]=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV5ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0},{av:"A84OrdPgoId",fld:"ORDPGOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A87OrdPgoLinId",fld:"ORDPGOLINID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms["GRIDDETALLE.REFRESH"]=[[{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"}],[{av:"AV20OrdPgoSubtotal",fld:"vORDPGOSUBTOTAL",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms.ENTER=[[{av:"AV20OrdPgoSubtotal",fld:"vORDPGOSUBTOTAL",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV5ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}],[]];this.EvtParms.GRIDDETALLE_FIRSTPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV5ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}],[]];this.EvtParms.GRIDDETALLE_PREVPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV5ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}],[]];this.EvtParms.GRIDDETALLE_NEXTPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV5ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}],[]];this.EvtParms.GRIDDETALLE_LASTPAGE=[[{av:"GRIDDETALLE_nFirstRecordOnPage"},{av:"GRIDDETALLE_nEOF"},{ctrl:"GRIDDETALLE",prop:"Rows"},{av:"AV31OrdPgoId",fld:"vORDPGOID",pic:"ZZZZZZZZ9"},{av:"AV5ClienteSaldoVencido",fld:"vCLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}],[]];this.EvtParms.VALIDV_ORDPGOID=[[],[]];this.EnterCtrl=["BTNENTER"];this.setVCMap("AV5ClienteSaldoVencido","vCLIENTESALDOVENCIDO",0,"decimal",12,2);r.addRefreshingVar(this.GXValidFnc[20]);r.addRefreshingVar({rfrVar:"AV5ClienteSaldoVencido"});r.addRefreshingParm(this.GXValidFnc[20]);r.addRefreshingParm({rfrVar:"AV5ClienteSaldoVencido"});this.Initialize()});gx.wi(function(){gx.createParentObj(ordenpago_preordenconfirmar)})