/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:34:19.14
*/
gx.evt.autoSkip=!1;gx.define("transferenciachequedetallewc",!0,function(n){var t,r,i;this.ServerClass="transferenciachequedetallewc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A1137ChequeBancoNombre=gx.fn.getControlValue("CHEQUEBANCONOMBRE");this.A2179ChequeBancoSucursalNombre=gx.fn.getControlValue("CHEQUEBANCOSUCURSALNOMBRE");this.AV54Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV8TrfCheId=gx.fn.getIntegerValue("vTRFCHEID",".");this.AV8TrfCheId=gx.fn.getIntegerValue("vTRFCHEID",".");this.AV54Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Valid_Chequeid=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Chequeid",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("CHEQUEID",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Chequeentidadid=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Chequeentidadid",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("CHEQUEENTIDADID",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Chequesucursalid=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Chequesucursalid",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("CHEQUESUCURSALID",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11ve2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12ve2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16ve2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17ve2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,36];this.GXLastCtrlId=36;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",15,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"transferenciachequedetallewc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(51,16,"CHEQUEID","Ide.","","ChequeId","int",0,"px",9,9,"right",null,[],51,"ChequeId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(58,17,"CHEQUEENTIDADID","Cheque Entidad Id","","ChequeEntidadId","int",0,"px",2,2,"right",null,[],58,"ChequeEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1142,18,"CHEQUEENTIDADNOMBRE","Cheque Entidad Nombre","","ChequeEntidadNombre","svchar",0,"px",64,64,"left",null,[],1142,"ChequeEntidadNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(59,19,"CHEQUESUCURSALID","Cheque Sucursal Id","","ChequeSucursalId","int",0,"px",4,4,"right",null,[],59,"ChequeSucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1143,20,"CHEQUESUCURSALNOMBRE","Cheque Sucursal Nombre","","ChequeSucursalNombre","svchar",0,"px",64,64,"left",null,[],1143,"ChequeSucursalNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3194,21,"CHEQUECAJAFISICAID","Caja Física","","ChequeCajaFisicaId","int",0,"px",4,4,"right",null,[],3194,"ChequeCajaFisicaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3195,22,"CHEQUECAJAID","Nº Arq.","","ChequeCajaId","int",0,"px",8,8,"right",null,[],3195,"ChequeCajaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2181,23,"CHEQUEBANCOSUCURSALNOMBRECOMPLETO","Banco Sucursal","","ChequeBancoSucursalNombreCompleto","svchar",0,"px",64,64,"left",null,[],2181,"ChequeBancoSucursalNombreCompleto",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(60,24,"CHEQUENUMERO","N°","","ChequeNumero","int",0,"px",10,10,"right",null,[],60,"ChequeNumero",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(491,25,"CHEQUEFECHAEMISION","Emi.","","ChequeFechaEmision","date",0,"px",8,8,"right",null,[],491,"ChequeFechaEmision",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(492,26,"CHEQUEFECHAVENCIMIENTO","Vto.","","ChequeFechaVencimiento","date",0,"px",8,8,"right",null,[],492,"ChequeFechaVencimiento",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(493,27,"CHEQUEIMPORTE","Importe","","ChequeImporte","decimal",0,"px",13,13,"right",null,[],493,"ChequeImporte",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3271,28,"TRFCHEDETALLEIMPORTE","Importe","","TrfCheDetalleImporte","decimal",0,"px",13,13,"right",null,[],3271,"TrfCheDetalleImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(3295,29,"TRFCHEDETALLEESTADO","Estado","TrfCheDetalleEstado","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,32,16,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV34GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV34GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV34GridCurrentPage)});i.addV2CFunction("AV35GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV35GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV35GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11ve2_client);i.addEventHandler("ChangeRowsPerPage",this.e12ve2_client);this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[16]={id:16,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Chequeid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEID",gxz:"Z51ChequeId",gxold:"O51ChequeId",gxvar:"A51ChequeId",ucs:[],op:[20,18,23,17,19,21,22,24,25,26,27],ip:[20,18,23,21,22,24,25,26,27,19,17,16],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A51ChequeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z51ChequeId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEID",n||gx.fn.currentGridRowImpl(15),gx.O.A51ChequeId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A51ChequeId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};t[17]={id:17,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Chequeentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEENTIDADID",gxz:"Z58ChequeEntidadId",gxold:"O58ChequeEntidadId",gxvar:"A58ChequeEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A58ChequeEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z58ChequeEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEENTIDADID",n||gx.fn.currentGridRowImpl(15),gx.O.A58ChequeEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A58ChequeEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEENTIDADID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};t[18]={id:18,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEENTIDADNOMBRE",gxz:"Z1142ChequeEntidadNombre",gxold:"O1142ChequeEntidadNombre",gxvar:"A1142ChequeEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1142ChequeEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1142ChequeEntidadNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(15),gx.O.A1142ChequeEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1142ChequeEntidadNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Chequesucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUESUCURSALID",gxz:"Z59ChequeSucursalId",gxold:"O59ChequeSucursalId",gxvar:"A59ChequeSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A59ChequeSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z59ChequeSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUESUCURSALID",n||gx.fn.currentGridRowImpl(15),gx.O.A59ChequeSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A59ChequeSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUESUCURSALID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUESUCURSALNOMBRE",gxz:"Z1143ChequeSucursalNombre",gxold:"O1143ChequeSucursalNombre",gxvar:"A1143ChequeSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1143ChequeSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1143ChequeSucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUESUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(15),gx.O.A1143ChequeSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1143ChequeSucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUESUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUECAJAFISICAID",gxz:"Z3194ChequeCajaFisicaId",gxold:"O3194ChequeCajaFisicaId",gxvar:"A3194ChequeCajaFisicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3194ChequeCajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3194ChequeCajaFisicaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUECAJAFISICAID",n||gx.fn.currentGridRowImpl(15),gx.O.A3194ChequeCajaFisicaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3194ChequeCajaFisicaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUECAJAFISICAID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUECAJAID",gxz:"Z3195ChequeCajaId",gxold:"O3195ChequeCajaId",gxvar:"A3195ChequeCajaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3195ChequeCajaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3195ChequeCajaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUECAJAID",n||gx.fn.currentGridRowImpl(15),gx.O.A3195ChequeCajaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3195ChequeCajaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUECAJAID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEBANCOSUCURSALNOMBRECOMPLETO",gxz:"Z2181ChequeBancoSucursalNombreCompleto",gxold:"O2181ChequeBancoSucursalNombreCompleto",gxvar:"A2181ChequeBancoSucursalNombreCompleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2181ChequeBancoSucursalNombreCompleto=n)},v2z:function(n){n!==undefined&&(gx.O.Z2181ChequeBancoSucursalNombreCompleto=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEBANCOSUCURSALNOMBRECOMPLETO",n||gx.fn.currentGridRowImpl(15),gx.O.A2181ChequeBancoSucursalNombreCompleto,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2181ChequeBancoSucursalNombreCompleto=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEBANCOSUCURSALNOMBRECOMPLETO",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUENUMERO",gxz:"Z60ChequeNumero",gxold:"O60ChequeNumero",gxvar:"A60ChequeNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A60ChequeNumero=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z60ChequeNumero=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUENUMERO",n||gx.fn.currentGridRowImpl(15),gx.O.A60ChequeNumero,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A60ChequeNumero=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUENUMERO",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"date",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEFECHAEMISION",gxz:"Z491ChequeFechaEmision",gxold:"O491ChequeFechaEmision",gxvar:"A491ChequeFechaEmision",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A491ChequeFechaEmision=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z491ChequeFechaEmision=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEFECHAEMISION",n||gx.fn.currentGridRowImpl(15),gx.O.A491ChequeFechaEmision,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A491ChequeFechaEmision=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CHEQUEFECHAEMISION",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[26]={id:26,lvl:2,type:"date",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEFECHAVENCIMIENTO",gxz:"Z492ChequeFechaVencimiento",gxold:"O492ChequeFechaVencimiento",gxvar:"A492ChequeFechaVencimiento",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A492ChequeFechaVencimiento=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z492ChequeFechaVencimiento=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEFECHAVENCIMIENTO",n||gx.fn.currentGridRowImpl(15),gx.O.A492ChequeFechaVencimiento,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A492ChequeFechaVencimiento=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CHEQUEFECHAVENCIMIENTO",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[27]={id:27,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEIMPORTE",gxz:"Z493ChequeImporte",gxold:"O493ChequeImporte",gxvar:"A493ChequeImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A493ChequeImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z493ChequeImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CHEQUEIMPORTE",n||gx.fn.currentGridRowImpl(15),gx.O.A493ChequeImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A493ChequeImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CHEQUEIMPORTE",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFCHEDETALLEIMPORTE",gxz:"Z3271TrfCheDetalleImporte",gxold:"O3271TrfCheDetalleImporte",gxvar:"A3271TrfCheDetalleImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3271TrfCheDetalleImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3271TrfCheDetalleImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("TRFCHEDETALLEIMPORTE",n||gx.fn.currentGridRowImpl(15),gx.O.A3271TrfCheDetalleImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3271TrfCheDetalleImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("TRFCHEDETALLEIMPORTE",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFCHEDETALLEESTADO",gxz:"Z3295TrfCheDetalleEstado",gxold:"O3295TrfCheDetalleEstado",gxvar:"A3295TrfCheDetalleEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3295TrfCheDetalleEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z3295TrfCheDetalleEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("TRFCHEDETALLEESTADO",n||gx.fn.currentGridRowImpl(15),gx.O.A3295TrfCheDetalleEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3295TrfCheDetalleEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRFCHEDETALLEESTADO",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[36]={id:36,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRFCHEID",gxz:"Z3256TrfCheId",gxold:"O3256TrfCheId",gxvar:"A3256TrfCheId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3256TrfCheId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3256TrfCheId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRFCHEID",gx.O.A3256TrfCheId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3256TrfCheId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRFCHEID",".")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});this.Z51ChequeId=0;this.O51ChequeId=0;this.Z58ChequeEntidadId=0;this.O58ChequeEntidadId=0;this.Z1142ChequeEntidadNombre="";this.O1142ChequeEntidadNombre="";this.Z59ChequeSucursalId=0;this.O59ChequeSucursalId=0;this.Z1143ChequeSucursalNombre="";this.O1143ChequeSucursalNombre="";this.Z3194ChequeCajaFisicaId=0;this.O3194ChequeCajaFisicaId=0;this.Z3195ChequeCajaId=0;this.O3195ChequeCajaId=0;this.Z2181ChequeBancoSucursalNombreCompleto="";this.O2181ChequeBancoSucursalNombreCompleto="";this.Z60ChequeNumero=0;this.O60ChequeNumero=0;this.Z491ChequeFechaEmision=gx.date.nullDate();this.O491ChequeFechaEmision=gx.date.nullDate();this.Z492ChequeFechaVencimiento=gx.date.nullDate();this.O492ChequeFechaVencimiento=gx.date.nullDate();this.Z493ChequeImporte=0;this.O493ChequeImporte=0;this.Z3271TrfCheDetalleImporte=0;this.O3271TrfCheDetalleImporte=0;this.Z3295TrfCheDetalleEstado="";this.O3295TrfCheDetalleEstado="";this.A3256TrfCheId=0;this.Z3256TrfCheId=0;this.O3256TrfCheId=0;this.AV34GridCurrentPage=0;this.A3256TrfCheId=0;this.AV8TrfCheId=0;this.A2179ChequeBancoSucursalNombre="";this.A1137ChequeBancoNombre="";this.A56ChequeBancoId=0;this.A57ChequeBancoSucursalId=0;this.A51ChequeId=0;this.A58ChequeEntidadId=0;this.A1142ChequeEntidadNombre="";this.A59ChequeSucursalId=0;this.A1143ChequeSucursalNombre="";this.A3194ChequeCajaFisicaId=0;this.A3195ChequeCajaId=0;this.A2181ChequeBancoSucursalNombreCompleto="";this.A60ChequeNumero=0;this.A491ChequeFechaEmision=gx.date.nullDate();this.A492ChequeFechaVencimiento=gx.date.nullDate();this.A493ChequeImporte=0;this.A3271TrfCheDetalleImporte=0;this.A3295TrfCheDetalleEstado="";this.AV54Pgmname="";this.Events={e11ve2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12ve2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16ve2_client:["ENTER",!0],e17ve2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV8TrfCheId",fld:"vTRFCHEID",pic:"ZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV54Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV34GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV35GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV54Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV8TrfCheId",fld:"vTRFCHEID",pic:"ZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("TRFCHEID","Visible")',ctrl:"TRFCHEID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8TrfCheId",fld:"vTRFCHEID",pic:"ZZZZZZZ9"},{av:"AV54Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8TrfCheId",fld:"vTRFCHEID",pic:"ZZZZZZZ9"},{av:"AV54Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.VALID_CHEQUEID=[[{av:"A1143ChequeSucursalNombre",fld:"CHEQUESUCURSALNOMBRE",pic:"@!"},{av:"A1142ChequeEntidadNombre",fld:"CHEQUEENTIDADNOMBRE",pic:"@!"},{av:"A2181ChequeBancoSucursalNombreCompleto",fld:"CHEQUEBANCOSUCURSALNOMBRECOMPLETO",pic:"@!"},{av:"A3194ChequeCajaFisicaId",fld:"CHEQUECAJAFISICAID",pic:"ZZZ9"},{av:"A3195ChequeCajaId",fld:"CHEQUECAJAID",pic:"ZZZZZZZ9"},{av:"A60ChequeNumero",fld:"CHEQUENUMERO",pic:"ZZZZZZZZZ9"},{av:"A491ChequeFechaEmision",fld:"CHEQUEFECHAEMISION",pic:""},{av:"A492ChequeFechaVencimiento",fld:"CHEQUEFECHAVENCIMIENTO",pic:""},{av:"A493ChequeImporte",fld:"CHEQUEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A59ChequeSucursalId",fld:"CHEQUESUCURSALID",pic:"ZZZ9"},{av:"A58ChequeEntidadId",fld:"CHEQUEENTIDADID",pic:"Z9"},{av:"A51ChequeId",fld:"CHEQUEID",pic:"ZZZZZZZZ9"}],[{av:"A1143ChequeSucursalNombre",fld:"CHEQUESUCURSALNOMBRE",pic:"@!"},{av:"A1142ChequeEntidadNombre",fld:"CHEQUEENTIDADNOMBRE",pic:"@!"},{av:"A2181ChequeBancoSucursalNombreCompleto",fld:"CHEQUEBANCOSUCURSALNOMBRECOMPLETO",pic:"@!"},{av:"A58ChequeEntidadId",fld:"CHEQUEENTIDADID",pic:"Z9"},{av:"A59ChequeSucursalId",fld:"CHEQUESUCURSALID",pic:"ZZZ9"},{av:"A3194ChequeCajaFisicaId",fld:"CHEQUECAJAFISICAID",pic:"ZZZ9"},{av:"A3195ChequeCajaId",fld:"CHEQUECAJAID",pic:"ZZZZZZZ9"},{av:"A60ChequeNumero",fld:"CHEQUENUMERO",pic:"ZZZZZZZZZ9"},{av:"A491ChequeFechaEmision",fld:"CHEQUEFECHAEMISION",pic:""},{av:"A492ChequeFechaVencimiento",fld:"CHEQUEFECHAVENCIMIENTO",pic:""},{av:"A493ChequeImporte",fld:"CHEQUEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms.VALID_CHEQUEENTIDADID=[[],[]];this.EvtParms.VALID_CHEQUESUCURSALID=[[],[]];this.setVCMap("A1137ChequeBancoNombre","CHEQUEBANCONOMBRE",0,"svchar",64,0);this.setVCMap("A2179ChequeBancoSucursalNombre","CHEQUEBANCOSUCURSALNOMBRE",0,"svchar",64,0);this.setVCMap("AV54Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8TrfCheId","vTRFCHEID",0,"int",8,0);this.setVCMap("AV8TrfCheId","vTRFCHEID",0,"int",8,0);this.setVCMap("AV54Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8TrfCheId","vTRFCHEID",0,"int",8,0);this.setVCMap("AV54Pgmname","vPGMNAME",0,"char",129,0);r.addRefreshingVar({rfrVar:"AV8TrfCheId"});r.addRefreshingVar({rfrVar:"AV54Pgmname"});r.addRefreshingParm({rfrVar:"AV8TrfCheId"});r.addRefreshingParm({rfrVar:"AV54Pgmname"});this.Initialize()})