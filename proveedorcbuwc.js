/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:36:4.0
*/
gx.evt.autoSkip=!1;gx.define("proveedorcbuwc",!0,function(n){var i,r,t;this.ServerClass="proveedorcbuwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV48Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7ProveedorId=gx.fn.getIntegerValue("vPROVEEDORID",".");this.AV7ProveedorId=gx.fn.getIntegerValue("vPROVEEDORID",".");this.AV48Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Valid_Proveedorcbunumero=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Proveedorcbunumero",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("PROVEEDORCBUNUMERO",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Proveedorcbubancoid=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Proveedorcbubancoid",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("PROVEEDORCBUBANCOID",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Proveedorcbubanconombre=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Proveedorcbubanconombre",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("PROVEEDORCBUBANCONOMBRE",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Proveedorcbubancosucursalid=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Proveedorcbubancosucursalid",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("PROVEEDORCBUBANCOSUCURSALID",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Proveedorcbubancosucursalnombre=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Proveedorcbubancosucursalnombre",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("PROVEEDORCBUBANCOSUCURSALNOMBRE",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Proveedorcbubancosucursalnombrecompleto=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Proveedorcbubancosucursalnombrecompleto",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("PROVEEDORCBUBANCOSUCURSALNOMBRECOMPLETO",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11ib2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12ib2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16ib2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17ib2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35];this.GXLastCtrlId=35;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",15,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"proveedorcbuwc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(101,16,"PROVEEDORCBUNUMERO","CBU","","ProveedorCBUNumero","char",0,"px",22,22,"left",null,[],101,"ProveedorCBUNumero",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2575,17,"PROVEEDORCBUALIAS","Alias","","ProveedorCBUAlias","char",0,"px",20,20,"left",null,[],2575,"ProveedorCBUAlias",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2668,18,"PROVEEDORCBUCUENTANUMERO","Cuenta Nro","","ProveedorCBUCuentaNumero","int",0,"px",11,11,"right",null,[],2668,"ProveedorCBUCuentaNumero",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(102,19,"PROVEEDORCBUBANCOID","Banco","","ProveedorCBUBancoId","int",0,"px",3,3,"right",null,[],102,"ProveedorCBUBancoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2576,20,"PROVEEDORCBUBANCONOMBRE","Banco","","ProveedorCBUBancoNombre","svchar",0,"px",64,64,"left",null,[],2576,"ProveedorCBUBancoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(103,21,"PROVEEDORCBUBANCOSUCURSALID","Sucursal","","ProveedorCBUBancoSucursalId","int",0,"px",3,3,"right",null,[],103,"ProveedorCBUBancoSucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2577,22,"PROVEEDORCBUBANCOSUCURSALNOMBRE","Sucursal","","ProveedorCBUBancoSucursalNombre","svchar",0,"px",64,64,"left",null,[],2577,"ProveedorCBUBancoSucursalNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3213,23,"PROVEEDORCBUBANCOSUCURSALNOMBRECOMPLETO","Sucursal","","ProveedorCBUBancoSucursalNombreCompleto","svchar",0,"px",64,64,"left",null,[],3213,"ProveedorCBUBancoSucursalNombreCompleto",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3214,24,"PROVEEDORCBUDESCRIPCIONCOMPLETA","CBU Descripción","","ProveedorCBUDescripcionCompleta","svchar",0,"px",64,64,"left",null,[],3214,"ProveedorCBUDescripcionCompleta",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(2578,25,"PROVEEDORCBUESTADO","Estado","ProveedorCBUEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");r.addCheckBox(2579,26,"PROVEEDORCBUDEFAULT","Default","","ProveedorCBUDefault","boolean","true","false",null,!0,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(2580,27,"PROVEEDORCBU094","Resp. Alta","","ProveedorCBU094","char",0,"px",15,15,"left",null,[],2580,"ProveedorCBU094",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2581,28,"PROVEEDORCBU095","Hora Alta","","ProveedorCBU095","dtime",0,"px",14,14,"right",null,[],2581,"ProveedorCBU095",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,31,16,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV39GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV39GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV39GridCurrentPage)});t.addV2CFunction("AV40GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV40GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV40GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11ib2_client);t.addEventHandler("ChangeRowsPerPage",this.e12ib2_client);this.setUserControl(t);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[10]={id:10,fld:"",grid:0};i[11]={id:11,fld:"",grid:0};i[12]={id:12,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[13]={id:13,fld:"",grid:0};i[14]={id:14,fld:"",grid:0};i[16]={id:16,lvl:2,type:"char",len:22,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Proveedorcbunumero,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUNUMERO",gxz:"Z101ProveedorCBUNumero",gxold:"O101ProveedorCBUNumero",gxvar:"A101ProveedorCBUNumero",ucs:[],op:[24,23,22,20],ip:[24,23,16,22,20,21,19],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A101ProveedorCBUNumero=n)},v2z:function(n){n!==undefined&&(gx.O.Z101ProveedorCBUNumero=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBUNUMERO",n||gx.fn.currentGridRowImpl(15),gx.O.A101ProveedorCBUNumero,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A101ProveedorCBUNumero=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORCBUNUMERO",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[17]={id:17,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUALIAS",gxz:"Z2575ProveedorCBUAlias",gxold:"O2575ProveedorCBUAlias",gxvar:"A2575ProveedorCBUAlias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2575ProveedorCBUAlias=n)},v2z:function(n){n!==undefined&&(gx.O.Z2575ProveedorCBUAlias=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBUALIAS",n||gx.fn.currentGridRowImpl(15),gx.O.A2575ProveedorCBUAlias,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2575ProveedorCBUAlias=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORCBUALIAS",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[18]={id:18,lvl:2,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUCUENTANUMERO",gxz:"Z2668ProveedorCBUCuentaNumero",gxold:"O2668ProveedorCBUCuentaNumero",gxvar:"A2668ProveedorCBUCuentaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2668ProveedorCBUCuentaNumero=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2668ProveedorCBUCuentaNumero=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBUCUENTANUMERO",n||gx.fn.currentGridRowImpl(15),gx.O.A2668ProveedorCBUCuentaNumero,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2668ProveedorCBUCuentaNumero=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PROVEEDORCBUCUENTANUMERO",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[19]={id:19,lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Proveedorcbubancoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUBANCOID",gxz:"Z102ProveedorCBUBancoId",gxold:"O102ProveedorCBUBancoId",gxvar:"A102ProveedorCBUBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A102ProveedorCBUBancoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z102ProveedorCBUBancoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBUBANCOID",n||gx.fn.currentGridRowImpl(15),gx.O.A102ProveedorCBUBancoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A102ProveedorCBUBancoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PROVEEDORCBUBANCOID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[20]={id:20,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Proveedorcbubanconombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUBANCONOMBRE",gxz:"Z2576ProveedorCBUBancoNombre",gxold:"O2576ProveedorCBUBancoNombre",gxvar:"A2576ProveedorCBUBancoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2576ProveedorCBUBancoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2576ProveedorCBUBancoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBUBANCONOMBRE",n||gx.fn.currentGridRowImpl(15),gx.O.A2576ProveedorCBUBancoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2576ProveedorCBUBancoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORCBUBANCONOMBRE",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[21]={id:21,lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"999",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Proveedorcbubancosucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUBANCOSUCURSALID",gxz:"Z103ProveedorCBUBancoSucursalId",gxold:"O103ProveedorCBUBancoSucursalId",gxvar:"A103ProveedorCBUBancoSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A103ProveedorCBUBancoSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z103ProveedorCBUBancoSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBUBANCOSUCURSALID",n||gx.fn.currentGridRowImpl(15),gx.O.A103ProveedorCBUBancoSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A103ProveedorCBUBancoSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PROVEEDORCBUBANCOSUCURSALID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[22]={id:22,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Proveedorcbubancosucursalnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUBANCOSUCURSALNOMBRE",gxz:"Z2577ProveedorCBUBancoSucursalNombre",gxold:"O2577ProveedorCBUBancoSucursalNombre",gxvar:"A2577ProveedorCBUBancoSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2577ProveedorCBUBancoSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2577ProveedorCBUBancoSucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBUBANCOSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(15),gx.O.A2577ProveedorCBUBancoSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2577ProveedorCBUBancoSucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORCBUBANCOSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[23]={id:23,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Proveedorcbubancosucursalnombrecompleto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUBANCOSUCURSALNOMBRECOMPLETO",gxz:"Z3213ProveedorCBUBancoSucursalNombreCompleto",gxold:"O3213ProveedorCBUBancoSucursalNombreCompleto",gxvar:"A3213ProveedorCBUBancoSucursalNombreCompleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3213ProveedorCBUBancoSucursalNombreCompleto=n)},v2z:function(n){n!==undefined&&(gx.O.Z3213ProveedorCBUBancoSucursalNombreCompleto=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBUBANCOSUCURSALNOMBRECOMPLETO",n||gx.fn.currentGridRowImpl(15),gx.O.A3213ProveedorCBUBancoSucursalNombreCompleto,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3213ProveedorCBUBancoSucursalNombreCompleto=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORCBUBANCOSUCURSALNOMBRECOMPLETO",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[24]={id:24,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUDESCRIPCIONCOMPLETA",gxz:"Z3214ProveedorCBUDescripcionCompleta",gxold:"O3214ProveedorCBUDescripcionCompleta",gxvar:"A3214ProveedorCBUDescripcionCompleta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3214ProveedorCBUDescripcionCompleta=n)},v2z:function(n){n!==undefined&&(gx.O.Z3214ProveedorCBUDescripcionCompleta=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBUDESCRIPCIONCOMPLETA",n||gx.fn.currentGridRowImpl(15),gx.O.A3214ProveedorCBUDescripcionCompleta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3214ProveedorCBUDescripcionCompleta=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORCBUDESCRIPCIONCOMPLETA",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[25]={id:25,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUESTADO",gxz:"Z2578ProveedorCBUEstado",gxold:"O2578ProveedorCBUEstado",gxvar:"A2578ProveedorCBUEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2578ProveedorCBUEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2578ProveedorCBUEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PROVEEDORCBUESTADO",n||gx.fn.currentGridRowImpl(15),gx.O.A2578ProveedorCBUEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2578ProveedorCBUEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORCBUESTADO",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[26]={id:26,lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBUDEFAULT",gxz:"Z2579ProveedorCBUDefault",gxold:"O2579ProveedorCBUDefault",gxvar:"A2579ProveedorCBUDefault",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2579ProveedorCBUDefault=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2579ProveedorCBUDefault=gx.lang.booleanValue(n))},v2c:function(n){gx.fn.setGridCheckBoxValue("PROVEEDORCBUDEFAULT",n||gx.fn.currentGridRowImpl(15),gx.O.A2579ProveedorCBUDefault,!0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2579ProveedorCBUDefault=gx.lang.booleanValue(this.val(n)))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORCBUDEFAULT",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn,values:["true","false"]};i[27]={id:27,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBU094",gxz:"Z2580ProveedorCBU094",gxold:"O2580ProveedorCBU094",gxvar:"A2580ProveedorCBU094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2580ProveedorCBU094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2580ProveedorCBU094=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBU094",n||gx.fn.currentGridRowImpl(15),gx.O.A2580ProveedorCBU094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2580ProveedorCBU094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORCBU094",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[28]={id:28,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORCBU095",gxz:"Z2581ProveedorCBU095",gxold:"O2581ProveedorCBU095",gxvar:"A2581ProveedorCBU095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2581ProveedorCBU095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2581ProveedorCBU095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORCBU095",n||gx.fn.currentGridRowImpl(15),gx.O.A2581ProveedorCBU095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2581ProveedorCBU095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PROVEEDORCBU095",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[29]={id:29,fld:"",grid:0};i[30]={id:30,fld:"",grid:0};i[32]={id:32,fld:"",grid:0};i[33]={id:33,fld:"",grid:0};i[34]={id:34,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};i[35]={id:35,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A28ProveedorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z28ProveedorId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PROVEEDORID",gx.O.A28ProveedorId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A28ProveedorId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PROVEEDORID",".")},nac:gx.falseFn};this.Z101ProveedorCBUNumero="";this.O101ProveedorCBUNumero="";this.Z2575ProveedorCBUAlias="";this.O2575ProveedorCBUAlias="";this.Z2668ProveedorCBUCuentaNumero=0;this.O2668ProveedorCBUCuentaNumero=0;this.Z102ProveedorCBUBancoId=0;this.O102ProveedorCBUBancoId=0;this.Z2576ProveedorCBUBancoNombre="";this.O2576ProveedorCBUBancoNombre="";this.Z103ProveedorCBUBancoSucursalId=0;this.O103ProveedorCBUBancoSucursalId=0;this.Z2577ProveedorCBUBancoSucursalNombre="";this.O2577ProveedorCBUBancoSucursalNombre="";this.Z3213ProveedorCBUBancoSucursalNombreCompleto="";this.O3213ProveedorCBUBancoSucursalNombreCompleto="";this.Z3214ProveedorCBUDescripcionCompleta="";this.O3214ProveedorCBUDescripcionCompleta="";this.Z2578ProveedorCBUEstado="";this.O2578ProveedorCBUEstado="";this.Z2579ProveedorCBUDefault=!1;this.O2579ProveedorCBUDefault=!1;this.Z2580ProveedorCBU094="";this.O2580ProveedorCBU094="";this.Z2581ProveedorCBU095=gx.date.nullDate();this.O2581ProveedorCBU095=gx.date.nullDate();this.A28ProveedorId=0;this.Z28ProveedorId=0;this.O28ProveedorId=0;this.AV39GridCurrentPage=0;this.A28ProveedorId=0;this.AV7ProveedorId=0;this.A101ProveedorCBUNumero="";this.A2575ProveedorCBUAlias="";this.A2668ProveedorCBUCuentaNumero=0;this.A102ProveedorCBUBancoId=0;this.A2576ProveedorCBUBancoNombre="";this.A103ProveedorCBUBancoSucursalId=0;this.A2577ProveedorCBUBancoSucursalNombre="";this.A3213ProveedorCBUBancoSucursalNombreCompleto="";this.A3214ProveedorCBUDescripcionCompleta="";this.A2578ProveedorCBUEstado="";this.A2579ProveedorCBUDefault=!1;this.A2580ProveedorCBU094="";this.A2581ProveedorCBU095=gx.date.nullDate();this.AV48Pgmname="";this.Events={e11ib2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12ib2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16ib2_client:["ENTER",!0],e17ib2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV48Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV39GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV40GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV48Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:"PROVEEDORID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV48Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV48Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.VALID_PROVEEDORCBUNUMERO=[[{av:"A3214ProveedorCBUDescripcionCompleta",fld:"PROVEEDORCBUDESCRIPCIONCOMPLETA",pic:"@!"},{av:"A3213ProveedorCBUBancoSucursalNombreCompleto",fld:"PROVEEDORCBUBANCOSUCURSALNOMBRECOMPLETO",pic:"@!"},{av:"A101ProveedorCBUNumero",fld:"PROVEEDORCBUNUMERO",pic:""},{av:"A2577ProveedorCBUBancoSucursalNombre",fld:"PROVEEDORCBUBANCOSUCURSALNOMBRE",pic:"@!"},{av:"A2576ProveedorCBUBancoNombre",fld:"PROVEEDORCBUBANCONOMBRE",pic:"@!"},{av:"A103ProveedorCBUBancoSucursalId",fld:"PROVEEDORCBUBANCOSUCURSALID",pic:"999"},{av:"A102ProveedorCBUBancoId",fld:"PROVEEDORCBUBANCOID",pic:"ZZ9"}],[{av:"A3214ProveedorCBUDescripcionCompleta",fld:"PROVEEDORCBUDESCRIPCIONCOMPLETA",pic:"@!"},{av:"A3213ProveedorCBUBancoSucursalNombreCompleto",fld:"PROVEEDORCBUBANCOSUCURSALNOMBRECOMPLETO",pic:"@!"},{av:"A2577ProveedorCBUBancoSucursalNombre",fld:"PROVEEDORCBUBANCOSUCURSALNOMBRE",pic:"@!"},{av:"A2576ProveedorCBUBancoNombre",fld:"PROVEEDORCBUBANCONOMBRE",pic:"@!"}]];this.EvtParms.VALID_PROVEEDORCBUBANCOID=[[],[]];this.EvtParms.VALID_PROVEEDORCBUBANCONOMBRE=[[],[]];this.EvtParms.VALID_PROVEEDORCBUBANCOSUCURSALID=[[],[]];this.EvtParms.VALID_PROVEEDORCBUBANCOSUCURSALNOMBRE=[[],[]];this.EvtParms.VALID_PROVEEDORCBUBANCOSUCURSALNOMBRECOMPLETO=[[],[]];this.setVCMap("AV48Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7ProveedorId","vPROVEEDORID",0,"int",15,0);this.setVCMap("AV7ProveedorId","vPROVEEDORID",0,"int",15,0);this.setVCMap("AV48Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7ProveedorId","vPROVEEDORID",0,"int",15,0);this.setVCMap("AV48Pgmname","vPGMNAME",0,"char",129,0);r.addRefreshingVar({rfrVar:"AV7ProveedorId"});r.addRefreshingVar({rfrVar:"AV48Pgmname"});r.addRefreshingParm({rfrVar:"AV7ProveedorId"});r.addRefreshingParm({rfrVar:"AV48Pgmname"});this.Initialize()})