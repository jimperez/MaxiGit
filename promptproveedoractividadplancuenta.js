/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:54:6.50
*/
gx.evt.autoSkip=!1;gx.define("promptproveedoractividadplancuenta",!1,function(){var t,r,i,n;this.ServerClass="promptproveedoractividadplancuenta";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InProveedorId=gx.fn.getIntegerValue("vINPROVEEDORID",".");this.AV8InActividadId=gx.fn.getControlValue("vINACTIVIDADID");this.AV9InProveedorActPlanCuentaOriId=gx.fn.getIntegerValue("vINPROVEEDORACTPLANCUENTAORIID",".");this.AV10InOutProveedorActPlanCuentaDestId=gx.fn.getIntegerValue("vINOUTPROVEEDORACTPLANCUENTADESTID",".");this.AV11InOutProveedorActPlanCuentaOriNombre=gx.fn.getControlValue("vINOUTPROVEEDORACTPLANCUENTAORINOMBRE");this.AV7InProveedorId=gx.fn.getIntegerValue("vINPROVEEDORID",".");this.AV8InActividadId=gx.fn.getControlValue("vINACTIVIDADID");this.AV9InProveedorActPlanCuentaOriId=gx.fn.getIntegerValue("vINPROVEEDORACTPLANCUENTAORIID",".")};this.Valid_Proveedoractplancuentaoriid=function(){var n=gx.fn.currentGridRowImpl(17);return this.validCliEvt("Valid_Proveedoractplancuentaoriid",17,function(){try{if(gx.fn.currentGridRowImpl(17)===0)return!0;var n=gx.util.balloon.getNew("PROVEEDORACTPLANCUENTAORIID",gx.fn.currentGridRowImpl(17));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Proveedoractplancuentadestid=function(){var n=gx.fn.currentGridRowImpl(17);return this.validCliEvt("Valid_Proveedoractplancuentadestid",17,function(){try{if(gx.fn.currentGridRowImpl(17)===0)return!0;var n=gx.util.balloon.getNew("PROVEEDORACTPLANCUENTADESTID",gx.fn.currentGridRowImpl(17));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11i42_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12i42_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16i42_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17i42_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,18,19,20,21,22,23,24];this.GXLastCtrlId=24;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptproveedoractividadplancuenta",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",18,0,"px",17,"px","e16i42_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(311,19,"PROVEEDORACTPLANCUENTAORIID","Ide. Debe","","ProveedorActPlanCuentaOriId","int",0,"px",10,10,"right",null,[],311,"ProveedorActPlanCuentaOriId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2569,20,"PROVEEDORACTPLANCUENTAORINOMBRE","Debe","","ProveedorActPlanCuentaOriNombre","svchar",0,"px",64,64,"left",null,[],2569,"ProveedorActPlanCuentaOriNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(312,21,"PROVEEDORACTPLANCUENTADESTID","Ide. Haber","","ProveedorActPlanCuentaDestId","int",0,"px",10,10,"right",null,[],312,"ProveedorActPlanCuentaDestId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2570,22,"PROVEEDORACTPLANCUENTADESTNOMBRE","Haber","","ProveedorActPlanCuentaDestNombre","svchar",0,"px",64,64,"left",null,[],2570,"ProveedorActPlanCuentaDestNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,25,18,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");n=this.GRIDPAGINATIONBARContainer;n.setProp("Enabled","Enabled",!0,"boolean");n.setProp("Class","Class","PaginationBar","str");n.setProp("ShowFirst","Showfirst",!1,"bool");n.setProp("ShowPrevious","Showprevious",!0,"bool");n.setProp("ShowNext","Shownext",!0,"bool");n.setProp("ShowLast","Showlast",!1,"bool");n.setProp("PagesToShow","Pagestoshow",5,"num");n.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");n.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");n.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");n.setProp("SelectedPage","Selectedpage","","char");n.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");n.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");n.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");n.setProp("First","First","First","str");n.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");n.setProp("Next","Next","WWP_PagingNextCaption","str");n.setProp("Last","Last","Last","str");n.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");n.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");n.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");n.addV2CFunction("AV33GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");n.addC2VFunction(function(n){n.ParentObject.AV33GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV33GridCurrentPage)});n.addV2CFunction("AV34GridPageCount","vGRIDPAGECOUNT","SetPageCount");n.addC2VFunction(function(n){n.ParentObject.AV34GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV34GridPageCount)});n.setProp("RecordCount","Recordcount","","str");n.setProp("Page","Page","","str");n.setProp("Visible","Visible",!0,"bool");n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("ChangePage",this.e11i42_client);n.addEventHandler("ChangeRowsPerPage",this.e12i42_client);this.setUserControl(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[18]={id:18,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV35Select",gxold:"OV35Select",gxvar:"AV35Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV35Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV35Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(17),gx.O.AV35Select,gx.O.AV41Select_GXI)},c2v:function(n){gx.O.AV41Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV35Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(17))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(17))},gxvar_GXI:"AV41Select_GXI",nac:gx.falseFn,evt:"e16i42_client",std:"ENTER"};t[19]={id:19,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Proveedoractplancuentaoriid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTPLANCUENTAORIID",gxz:"Z311ProveedorActPlanCuentaOriId",gxold:"O311ProveedorActPlanCuentaOriId",gxvar:"A311ProveedorActPlanCuentaOriId",ucs:[],op:[20,22],ip:[20,22,19,21],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A311ProveedorActPlanCuentaOriId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z311ProveedorActPlanCuentaOriId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTPLANCUENTAORIID",n||gx.fn.currentGridRowImpl(17),gx.O.A311ProveedorActPlanCuentaOriId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A311ProveedorActPlanCuentaOriId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PROVEEDORACTPLANCUENTAORIID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTPLANCUENTAORINOMBRE",gxz:"Z2569ProveedorActPlanCuentaOriNombre",gxold:"O2569ProveedorActPlanCuentaOriNombre",gxvar:"A2569ProveedorActPlanCuentaOriNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2569ProveedorActPlanCuentaOriNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2569ProveedorActPlanCuentaOriNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTPLANCUENTAORINOMBRE",n||gx.fn.currentGridRowImpl(17),gx.O.A2569ProveedorActPlanCuentaOriNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2569ProveedorActPlanCuentaOriNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORACTPLANCUENTAORINOMBRE",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Proveedoractplancuentadestid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTPLANCUENTADESTID",gxz:"Z312ProveedorActPlanCuentaDestId",gxold:"O312ProveedorActPlanCuentaDestId",gxvar:"A312ProveedorActPlanCuentaDestId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A312ProveedorActPlanCuentaDestId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z312ProveedorActPlanCuentaDestId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTPLANCUENTADESTID",n||gx.fn.currentGridRowImpl(17),gx.O.A312ProveedorActPlanCuentaDestId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A312ProveedorActPlanCuentaDestId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PROVEEDORACTPLANCUENTADESTID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTPLANCUENTADESTNOMBRE",gxz:"Z2570ProveedorActPlanCuentaDestNombre",gxold:"O2570ProveedorActPlanCuentaDestNombre",gxvar:"A2570ProveedorActPlanCuentaDestNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2570ProveedorActPlanCuentaDestNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2570ProveedorActPlanCuentaDestNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTPLANCUENTADESTNOMBRE",n||gx.fn.currentGridRowImpl(17),gx.O.A2570ProveedorActPlanCuentaDestNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2570ProveedorActPlanCuentaDestNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORACTPLANCUENTADESTNOMBRE",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};this.ZV35Select="";this.OV35Select="";this.Z311ProveedorActPlanCuentaOriId=0;this.O311ProveedorActPlanCuentaOriId=0;this.Z2569ProveedorActPlanCuentaOriNombre="";this.O2569ProveedorActPlanCuentaOriNombre="";this.Z312ProveedorActPlanCuentaDestId=0;this.O312ProveedorActPlanCuentaDestId=0;this.Z2570ProveedorActPlanCuentaDestNombre="";this.O2570ProveedorActPlanCuentaDestNombre="";this.AV33GridCurrentPage=0;this.AV7InProveedorId=0;this.AV8InActividadId="";this.AV9InProveedorActPlanCuentaOriId=0;this.AV10InOutProveedorActPlanCuentaDestId=0;this.AV11InOutProveedorActPlanCuentaOriNombre="";this.A28ProveedorId=0;this.A104ActividadId="";this.AV35Select="";this.A311ProveedorActPlanCuentaOriId=0;this.A2569ProveedorActPlanCuentaOriNombre="";this.A312ProveedorActPlanCuentaDestId=0;this.A2570ProveedorActPlanCuentaDestNombre="";this.Events={e11i42_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12i42_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16i42_client:["ENTER",!0],e17i42_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7InProveedorId",fld:"vINPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8InActividadId",fld:"vINACTIVIDADID",pic:""},{av:"AV9InProveedorActPlanCuentaOriId",fld:"vINPROVEEDORACTPLANCUENTAORIID",pic:"ZZZZZZZZZ9"}],[{av:"AV33GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV34GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7InProveedorId",fld:"vINPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8InActividadId",fld:"vINACTIVIDADID",pic:""},{av:"AV9InProveedorActPlanCuentaOriId",fld:"vINPROVEEDORACTPLANCUENTAORIID",pic:"ZZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7InProveedorId",fld:"vINPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8InActividadId",fld:"vINACTIVIDADID",pic:""},{av:"AV9InProveedorActPlanCuentaOriId",fld:"vINPROVEEDORACTPLANCUENTAORIID",pic:"ZZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV35Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A312ProveedorActPlanCuentaDestId",fld:"PROVEEDORACTPLANCUENTADESTID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"A2569ProveedorActPlanCuentaOriNombre",fld:"PROVEEDORACTPLANCUENTAORINOMBRE",pic:"@!"}],[{av:"AV10InOutProveedorActPlanCuentaDestId",fld:"vINOUTPROVEEDORACTPLANCUENTADESTID",pic:"ZZZZZZZZZ9"},{av:"AV11InOutProveedorActPlanCuentaOriNombre",fld:"vINOUTPROVEEDORACTPLANCUENTAORINOMBRE",pic:"@!"}]];this.EvtParms.VALID_PROVEEDORACTPLANCUENTAORIID=[[{av:"A2569ProveedorActPlanCuentaOriNombre",fld:"PROVEEDORACTPLANCUENTAORINOMBRE",pic:"@!"},{av:"A2570ProveedorActPlanCuentaDestNombre",fld:"PROVEEDORACTPLANCUENTADESTNOMBRE",pic:"@!"},{av:"A311ProveedorActPlanCuentaOriId",fld:"PROVEEDORACTPLANCUENTAORIID",pic:"ZZZZZZZZZ9"},{av:"A312ProveedorActPlanCuentaDestId",fld:"PROVEEDORACTPLANCUENTADESTID",pic:"ZZZZZZZZZ9",hsh:!0}],[{av:"A2569ProveedorActPlanCuentaOriNombre",fld:"PROVEEDORACTPLANCUENTAORINOMBRE",pic:"@!"},{av:"A2570ProveedorActPlanCuentaDestNombre",fld:"PROVEEDORACTPLANCUENTADESTNOMBRE",pic:"@!"}]];this.EvtParms.VALID_PROVEEDORACTPLANCUENTADESTID=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InProveedorId","vINPROVEEDORID",0,"int",15,0);this.setVCMap("AV8InActividadId","vINACTIVIDADID",0,"char",6,0);this.setVCMap("AV9InProveedorActPlanCuentaOriId","vINPROVEEDORACTPLANCUENTAORIID",0,"int",10,0);this.setVCMap("AV10InOutProveedorActPlanCuentaDestId","vINOUTPROVEEDORACTPLANCUENTADESTID",0,"int",10,0);this.setVCMap("AV11InOutProveedorActPlanCuentaOriNombre","vINOUTPROVEEDORACTPLANCUENTAORINOMBRE",0,"svchar",64,0);this.setVCMap("AV7InProveedorId","vINPROVEEDORID",0,"int",15,0);this.setVCMap("AV8InActividadId","vINACTIVIDADID",0,"char",6,0);this.setVCMap("AV9InProveedorActPlanCuentaOriId","vINPROVEEDORACTPLANCUENTAORIID",0,"int",10,0);this.setVCMap("AV7InProveedorId","vINPROVEEDORID",0,"int",15,0);this.setVCMap("AV8InActividadId","vINACTIVIDADID",0,"char",6,0);this.setVCMap("AV9InProveedorActPlanCuentaOriId","vINPROVEEDORACTPLANCUENTAORIID",0,"int",10,0);r.addRefreshingVar({rfrVar:"AV7InProveedorId"});r.addRefreshingVar({rfrVar:"AV8InActividadId"});r.addRefreshingVar({rfrVar:"AV9InProveedorActPlanCuentaOriId"});r.addRefreshingParm({rfrVar:"AV7InProveedorId"});r.addRefreshingParm({rfrVar:"AV8InActividadId"});r.addRefreshingParm({rfrVar:"AV9InProveedorActPlanCuentaOriId"});this.Initialize()});gx.wi(function(){gx.createParentObj(promptproveedoractividadplancuenta)})