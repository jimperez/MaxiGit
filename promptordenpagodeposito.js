/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:59:13.35
*/
gx.evt.autoSkip=!1;gx.define("promptordenpagodeposito",!1,function(){var n,i,r,t;this.ServerClass="promptordenpagodeposito";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV28InOrdPgoId=gx.fn.getIntegerValue("vINORDPGOID",".");this.AV92InOutOrdPgoDepCBUNumero=gx.fn.getControlValue("vINOUTORDPGODEPCBUNUMERO");this.AV93InOutOrdPgoDepCBUCuentaNumero=gx.fn.getIntegerValue("vINOUTORDPGODEPCBUCUENTANUMERO",".");this.AV28InOrdPgoId=gx.fn.getIntegerValue("vINORDPGOID",".")};this.Valid_Ordpgodepcbunumero=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ordpgodepcbunumero",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("ORDPGODEPCBUNUMERO",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgodepcbubancoid=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ordpgodepcbubancoid",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("ORDPGODEPCBUBANCOID",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgodepcbubanconombre=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ordpgodepcbubanconombre",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("ORDPGODEPCBUBANCONOMBRE",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgodepcbubancosucursalid=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ordpgodepcbubancosucursalid",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("ORDPGODEPCBUBANCOSUCURSALID",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgodepcbubancosucursalnombre=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ordpgodepcbubancosucursalnombre",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("ORDPGODEPCBUBANCOSUCURSALNOMBRE",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgodepcbubancosucursalnombrecompleto=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ordpgodepcbubancosucursalnombrecompleto",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("ORDPGODEPCBUBANCOSUCURSALNOMBRECOMPLETO",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgodepempleadoid=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ordpgodepempleadoid",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("ORDPGODEPEMPLEADOID",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgodepempleadoapellido=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ordpgodepempleadoapellido",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("ORDPGODEPEMPLEADOAPELLIDO",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ordpgodepempleadonombre=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ordpgodepempleadonombre",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("ORDPGODEPEMPLEADONOMBRE",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11us2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12us2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16us2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17us2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];this.GXLastCtrlId=38;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",19,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptordenpagodeposito",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addBitmap("&Select","vSELECT",20,0,"px",17,"px","e16us2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");i.addSingleLineEdit(84,21,"ORDPGOID","Nº","","OrdPgoId","int",0,"px",9,9,"right",null,[],84,"OrdPgoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3218,22,"ORDPGODEPCBUNUMERO","CBU","","OrdPgoDepCBUNumero","char",0,"px",22,22,"left",null,[],3218,"OrdPgoDepCBUNumero",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3236,23,"ORDPGODEPCBUCUENTANUMERO","N° Cuenta","","OrdPgoDepCBUCuentaNumero","int",0,"px",11,11,"right",null,[],3236,"OrdPgoDepCBUCuentaNumero",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(3220,24,"ORDPGODEPCBUBANCOID","Banco Id","","OrdPgoDepCBUBancoId","int",0,"px",3,3,"right",null,[],3220,"OrdPgoDepCBUBancoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3233,25,"ORDPGODEPCBUBANCONOMBRE","Banco","","OrdPgoDepCBUBancoNombre","svchar",0,"px",64,64,"left",null,[],3233,"OrdPgoDepCBUBancoNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3221,26,"ORDPGODEPCBUBANCOSUCURSALID","Sucursal","","OrdPgoDepCBUBancoSucursalId","int",0,"px",3,3,"right",null,[],3221,"OrdPgoDepCBUBancoSucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3234,27,"ORDPGODEPCBUBANCOSUCURSALNOMBRE","Banco Sucursal","","OrdPgoDepCBUBancoSucursalNombre","svchar",0,"px",64,64,"left",null,[],3234,"OrdPgoDepCBUBancoSucursalNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3235,28,"ORDPGODEPCBUBANCOSUCURSALNOMBRECOMPLETO","Banco Sucursal","","OrdPgoDepCBUBancoSucursalNombreCompleto","svchar",0,"px",64,64,"left",null,[],3235,"OrdPgoDepCBUBancoSucursalNombreCompleto",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3237,29,"ORDPGODEPCBUDESCRIPCIONCOMPLETA","CBU Descripción","","OrdPgoDepCBUDescripcionCompleta","svchar",0,"px",64,64,"left",null,[],3237,"OrdPgoDepCBUDescripcionCompleta",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3243,30,"ORDPGODEPNRO","N° Depósito","","OrdPgoDepNro","int",0,"px",8,8,"right",null,[],3243,"OrdPgoDepNro",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3241,31,"ORDPGODEPFECHA","Fecha","Fecha ...","OrdPgoDepFecha","date",0,"px",10,10,"right",null,[],3241,"OrdPgoDepFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3242,32,"ORDPGODEPIMPORTE","Importe","","OrdPgoDepImporte","decimal",0,"px",13,13,"right",null,[],3242,"OrdPgoDepImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3219,33,"ORDPGODEPEMPLEADOID","Responsable","","OrdPgoDepEmpleadoId","int",0,"px",15,15,"right",null,[],3219,"OrdPgoDepEmpleadoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3238,34,"ORDPGODEPEMPLEADOAPELLIDO","Apellido","","OrdPgoDepEmpleadoApellido","char",0,"px",60,60,"left",null,[],3238,"OrdPgoDepEmpleadoApellido",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3240,35,"ORDPGODEPEMPLEADONOMBRE","Nombre","","OrdPgoDepEmpleadoNombre","char",0,"px",60,60,"left",null,[],3240,"OrdPgoDepEmpleadoNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3239,36,"ORDPGODEPEMPLEADOAPELLIDONOMBRE","Responsable","","OrdPgoDepEmpleadoApellidoNombre","svchar",0,"px",64,64,"left",null,[],3239,"OrdPgoDepEmpleadoApellidoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,39,20,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV25GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV25GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV25GridCurrentPage)});t.addV2CFunction("AV26GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV26GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV26GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11us2_client);t.addEventHandler("ChangeRowsPerPage",this.e12us2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[20]={id:20,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV62Select",gxold:"OV62Select",gxvar:"AV62Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV62Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV62Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(19),gx.O.AV62Select,gx.O.AV96Select_GXI)},c2v:function(n){gx.O.AV96Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV62Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(19))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(19))},gxvar_GXI:"AV96Select_GXI",nac:gx.falseFn,evt:"e16us2_client",std:"ENTER"};n[21]={id:21,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGOID",gxz:"Z84OrdPgoId",gxold:"O84OrdPgoId",gxvar:"A84OrdPgoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z84OrdPgoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGOID",n||gx.fn.currentGridRowImpl(19),gx.O.A84OrdPgoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A84OrdPgoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGOID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[22]={id:22,lvl:2,type:"char",len:22,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ordpgodepcbunumero,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPCBUNUMERO",gxz:"Z3218OrdPgoDepCBUNumero",gxold:"O3218OrdPgoDepCBUNumero",gxvar:"A3218OrdPgoDepCBUNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3218OrdPgoDepCBUNumero=n)},v2z:function(n){n!==undefined&&(gx.O.Z3218OrdPgoDepCBUNumero=n)},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPCBUNUMERO",n||gx.fn.currentGridRowImpl(19),gx.O.A3218OrdPgoDepCBUNumero,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3218OrdPgoDepCBUNumero=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ORDPGODEPCBUNUMERO",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[23]={id:23,lvl:2,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPCBUCUENTANUMERO",gxz:"Z3236OrdPgoDepCBUCuentaNumero",gxold:"O3236OrdPgoDepCBUCuentaNumero",gxvar:"A3236OrdPgoDepCBUCuentaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3236OrdPgoDepCBUCuentaNumero=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3236OrdPgoDepCBUCuentaNumero=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPCBUCUENTANUMERO",n||gx.fn.currentGridRowImpl(19),gx.O.A3236OrdPgoDepCBUCuentaNumero,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3236OrdPgoDepCBUCuentaNumero=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGODEPCBUCUENTANUMERO",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[24]={id:24,lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ordpgodepcbubancoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPCBUBANCOID",gxz:"Z3220OrdPgoDepCBUBancoId",gxold:"O3220OrdPgoDepCBUBancoId",gxvar:"A3220OrdPgoDepCBUBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3220OrdPgoDepCBUBancoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3220OrdPgoDepCBUBancoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPCBUBANCOID",n||gx.fn.currentGridRowImpl(19),gx.O.A3220OrdPgoDepCBUBancoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3220OrdPgoDepCBUBancoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGODEPCBUBANCOID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[25]={id:25,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ordpgodepcbubanconombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPCBUBANCONOMBRE",gxz:"Z3233OrdPgoDepCBUBancoNombre",gxold:"O3233OrdPgoDepCBUBancoNombre",gxvar:"A3233OrdPgoDepCBUBancoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3233OrdPgoDepCBUBancoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3233OrdPgoDepCBUBancoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPCBUBANCONOMBRE",n||gx.fn.currentGridRowImpl(19),gx.O.A3233OrdPgoDepCBUBancoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3233OrdPgoDepCBUBancoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ORDPGODEPCBUBANCONOMBRE",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[26]={id:26,lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"999",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ordpgodepcbubancosucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPCBUBANCOSUCURSALID",gxz:"Z3221OrdPgoDepCBUBancoSucursalId",gxold:"O3221OrdPgoDepCBUBancoSucursalId",gxvar:"A3221OrdPgoDepCBUBancoSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3221OrdPgoDepCBUBancoSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3221OrdPgoDepCBUBancoSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPCBUBANCOSUCURSALID",n||gx.fn.currentGridRowImpl(19),gx.O.A3221OrdPgoDepCBUBancoSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3221OrdPgoDepCBUBancoSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGODEPCBUBANCOSUCURSALID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[27]={id:27,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ordpgodepcbubancosucursalnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPCBUBANCOSUCURSALNOMBRE",gxz:"Z3234OrdPgoDepCBUBancoSucursalNombre",gxold:"O3234OrdPgoDepCBUBancoSucursalNombre",gxvar:"A3234OrdPgoDepCBUBancoSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3234OrdPgoDepCBUBancoSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3234OrdPgoDepCBUBancoSucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPCBUBANCOSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(19),gx.O.A3234OrdPgoDepCBUBancoSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3234OrdPgoDepCBUBancoSucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ORDPGODEPCBUBANCOSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ordpgodepcbubancosucursalnombrecompleto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPCBUBANCOSUCURSALNOMBRECOMPLETO",gxz:"Z3235OrdPgoDepCBUBancoSucursalNombreCompleto",gxold:"O3235OrdPgoDepCBUBancoSucursalNombreCompleto",gxvar:"A3235OrdPgoDepCBUBancoSucursalNombreCompleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3235OrdPgoDepCBUBancoSucursalNombreCompleto=n)},v2z:function(n){n!==undefined&&(gx.O.Z3235OrdPgoDepCBUBancoSucursalNombreCompleto=n)},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPCBUBANCOSUCURSALNOMBRECOMPLETO",n||gx.fn.currentGridRowImpl(19),gx.O.A3235OrdPgoDepCBUBancoSucursalNombreCompleto,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3235OrdPgoDepCBUBancoSucursalNombreCompleto=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ORDPGODEPCBUBANCOSUCURSALNOMBRECOMPLETO",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPCBUDESCRIPCIONCOMPLETA",gxz:"Z3237OrdPgoDepCBUDescripcionCompleta",gxold:"O3237OrdPgoDepCBUDescripcionCompleta",gxvar:"A3237OrdPgoDepCBUDescripcionCompleta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3237OrdPgoDepCBUDescripcionCompleta=n)},v2z:function(n){n!==undefined&&(gx.O.Z3237OrdPgoDepCBUDescripcionCompleta=n)},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPCBUDESCRIPCIONCOMPLETA",n||gx.fn.currentGridRowImpl(19),gx.O.A3237OrdPgoDepCBUDescripcionCompleta,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3237OrdPgoDepCBUDescripcionCompleta=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ORDPGODEPCBUDESCRIPCIONCOMPLETA",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPNRO",gxz:"Z3243OrdPgoDepNro",gxold:"O3243OrdPgoDepNro",gxvar:"A3243OrdPgoDepNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3243OrdPgoDepNro=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3243OrdPgoDepNro=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPNRO",n||gx.fn.currentGridRowImpl(19),gx.O.A3243OrdPgoDepNro,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3243OrdPgoDepNro=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGODEPNRO",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[31]={id:31,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPFECHA",gxz:"Z3241OrdPgoDepFecha",gxold:"O3241OrdPgoDepFecha",gxvar:"A3241OrdPgoDepFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3241OrdPgoDepFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3241OrdPgoDepFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPFECHA",n||gx.fn.currentGridRowImpl(19),gx.O.A3241OrdPgoDepFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3241OrdPgoDepFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("ORDPGODEPFECHA",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[32]={id:32,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPIMPORTE",gxz:"Z3242OrdPgoDepImporte",gxold:"O3242OrdPgoDepImporte",gxvar:"A3242OrdPgoDepImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3242OrdPgoDepImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3242OrdPgoDepImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ORDPGODEPIMPORTE",n||gx.fn.currentGridRowImpl(19),gx.O.A3242OrdPgoDepImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3242OrdPgoDepImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ORDPGODEPIMPORTE",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[33]={id:33,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ordpgodepempleadoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPEMPLEADOID",gxz:"Z3219OrdPgoDepEmpleadoId",gxold:"O3219OrdPgoDepEmpleadoId",gxvar:"A3219OrdPgoDepEmpleadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3219OrdPgoDepEmpleadoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3219OrdPgoDepEmpleadoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPEMPLEADOID",n||gx.fn.currentGridRowImpl(19),gx.O.A3219OrdPgoDepEmpleadoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3219OrdPgoDepEmpleadoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ORDPGODEPEMPLEADOID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[34]={id:34,lvl:2,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ordpgodepempleadoapellido,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPEMPLEADOAPELLIDO",gxz:"Z3238OrdPgoDepEmpleadoApellido",gxold:"O3238OrdPgoDepEmpleadoApellido",gxvar:"A3238OrdPgoDepEmpleadoApellido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3238OrdPgoDepEmpleadoApellido=n)},v2z:function(n){n!==undefined&&(gx.O.Z3238OrdPgoDepEmpleadoApellido=n)},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPEMPLEADOAPELLIDO",n||gx.fn.currentGridRowImpl(19),gx.O.A3238OrdPgoDepEmpleadoApellido,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3238OrdPgoDepEmpleadoApellido=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ORDPGODEPEMPLEADOAPELLIDO",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ordpgodepempleadonombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPEMPLEADONOMBRE",gxz:"Z3240OrdPgoDepEmpleadoNombre",gxold:"O3240OrdPgoDepEmpleadoNombre",gxvar:"A3240OrdPgoDepEmpleadoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3240OrdPgoDepEmpleadoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3240OrdPgoDepEmpleadoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPEMPLEADONOMBRE",n||gx.fn.currentGridRowImpl(19),gx.O.A3240OrdPgoDepEmpleadoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3240OrdPgoDepEmpleadoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ORDPGODEPEMPLEADONOMBRE",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ORDPGODEPEMPLEADOAPELLIDONOMBRE",gxz:"Z3239OrdPgoDepEmpleadoApellidoNombre",gxold:"O3239OrdPgoDepEmpleadoApellidoNombre",gxvar:"A3239OrdPgoDepEmpleadoApellidoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3239OrdPgoDepEmpleadoApellidoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3239OrdPgoDepEmpleadoApellidoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ORDPGODEPEMPLEADOAPELLIDONOMBRE",n||gx.fn.currentGridRowImpl(19),gx.O.A3239OrdPgoDepEmpleadoApellidoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3239OrdPgoDepEmpleadoApellidoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ORDPGODEPEMPLEADOAPELLIDONOMBRE",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};this.ZV62Select="";this.OV62Select="";this.Z84OrdPgoId=0;this.O84OrdPgoId=0;this.Z3218OrdPgoDepCBUNumero="";this.O3218OrdPgoDepCBUNumero="";this.Z3236OrdPgoDepCBUCuentaNumero=0;this.O3236OrdPgoDepCBUCuentaNumero=0;this.Z3220OrdPgoDepCBUBancoId=0;this.O3220OrdPgoDepCBUBancoId=0;this.Z3233OrdPgoDepCBUBancoNombre="";this.O3233OrdPgoDepCBUBancoNombre="";this.Z3221OrdPgoDepCBUBancoSucursalId=0;this.O3221OrdPgoDepCBUBancoSucursalId=0;this.Z3234OrdPgoDepCBUBancoSucursalNombre="";this.O3234OrdPgoDepCBUBancoSucursalNombre="";this.Z3235OrdPgoDepCBUBancoSucursalNombreCompleto="";this.O3235OrdPgoDepCBUBancoSucursalNombreCompleto="";this.Z3237OrdPgoDepCBUDescripcionCompleta="";this.O3237OrdPgoDepCBUDescripcionCompleta="";this.Z3243OrdPgoDepNro=0;this.O3243OrdPgoDepNro=0;this.Z3241OrdPgoDepFecha=gx.date.nullDate();this.O3241OrdPgoDepFecha=gx.date.nullDate();this.Z3242OrdPgoDepImporte=0;this.O3242OrdPgoDepImporte=0;this.Z3219OrdPgoDepEmpleadoId=0;this.O3219OrdPgoDepEmpleadoId=0;this.Z3238OrdPgoDepEmpleadoApellido="";this.O3238OrdPgoDepEmpleadoApellido="";this.Z3240OrdPgoDepEmpleadoNombre="";this.O3240OrdPgoDepEmpleadoNombre="";this.Z3239OrdPgoDepEmpleadoApellidoNombre="";this.O3239OrdPgoDepEmpleadoApellidoNombre="";this.AV25GridCurrentPage=0;this.AV28InOrdPgoId=0;this.AV92InOutOrdPgoDepCBUNumero="";this.AV93InOutOrdPgoDepCBUCuentaNumero=0;this.AV62Select="";this.A84OrdPgoId=0;this.A3218OrdPgoDepCBUNumero="";this.A3236OrdPgoDepCBUCuentaNumero=0;this.A3220OrdPgoDepCBUBancoId=0;this.A3233OrdPgoDepCBUBancoNombre="";this.A3221OrdPgoDepCBUBancoSucursalId=0;this.A3234OrdPgoDepCBUBancoSucursalNombre="";this.A3235OrdPgoDepCBUBancoSucursalNombreCompleto="";this.A3237OrdPgoDepCBUDescripcionCompleta="";this.A3243OrdPgoDepNro=0;this.A3241OrdPgoDepFecha=gx.date.nullDate();this.A3242OrdPgoDepImporte=0;this.A3219OrdPgoDepEmpleadoId=0;this.A3238OrdPgoDepEmpleadoApellido="";this.A3240OrdPgoDepEmpleadoNombre="";this.A3239OrdPgoDepEmpleadoApellidoNombre="";this.Events={e11us2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12us2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16us2_client:["ENTER",!0],e17us2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV28InOrdPgoId",fld:"vINORDPGOID",pic:"ZZZZZZZZ9"}],[{av:"AV25GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV26GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV28InOrdPgoId",fld:"vINORDPGOID",pic:"ZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV28InOrdPgoId",fld:"vINORDPGOID",pic:"ZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV62Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A3218OrdPgoDepCBUNumero",fld:"ORDPGODEPCBUNUMERO",pic:"",hsh:!0},{av:"A3236OrdPgoDepCBUCuentaNumero",fld:"ORDPGODEPCBUCUENTANUMERO",pic:"ZZZZZZZZZZ9",hsh:!0}],[{av:"AV92InOutOrdPgoDepCBUNumero",fld:"vINOUTORDPGODEPCBUNUMERO",pic:""},{av:"AV93InOutOrdPgoDepCBUCuentaNumero",fld:"vINOUTORDPGODEPCBUCUENTANUMERO",pic:"ZZZZZZZZZZ9"}]];this.EvtParms.VALID_ORDPGODEPCBUNUMERO=[[],[]];this.EvtParms.VALID_ORDPGODEPCBUBANCOID=[[],[]];this.EvtParms.VALID_ORDPGODEPCBUBANCONOMBRE=[[],[]];this.EvtParms.VALID_ORDPGODEPCBUBANCOSUCURSALID=[[],[]];this.EvtParms.VALID_ORDPGODEPCBUBANCOSUCURSALNOMBRE=[[],[]];this.EvtParms.VALID_ORDPGODEPCBUBANCOSUCURSALNOMBRECOMPLETO=[[],[]];this.EvtParms.VALID_ORDPGODEPEMPLEADOID=[[],[]];this.EvtParms.VALID_ORDPGODEPEMPLEADOAPELLIDO=[[],[]];this.EvtParms.VALID_ORDPGODEPEMPLEADONOMBRE=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV28InOrdPgoId","vINORDPGOID",0,"int",9,0);this.setVCMap("AV92InOutOrdPgoDepCBUNumero","vINOUTORDPGODEPCBUNUMERO",0,"char",22,0);this.setVCMap("AV93InOutOrdPgoDepCBUCuentaNumero","vINOUTORDPGODEPCBUCUENTANUMERO",0,"int",11,0);this.setVCMap("AV28InOrdPgoId","vINORDPGOID",0,"int",9,0);this.setVCMap("AV28InOrdPgoId","vINORDPGOID",0,"int",9,0);i.addRefreshingVar({rfrVar:"AV28InOrdPgoId"});i.addRefreshingParm({rfrVar:"AV28InOrdPgoId"});this.Initialize()});gx.wi(function(){gx.createParentObj(promptordenpagodeposito)})