/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:49:53.40
*/
gx.evt.autoSkip=!1;gx.define("promptrol",!1,function(){var t,r,i,n;this.ServerClass="promptrol";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutRolId=gx.fn.getIntegerValue("vINOUTROLID",".");this.AV8InOutRolNombre=gx.fn.getControlValue("vINOUTROLNOMBRE")};this.e11422_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12422_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16422_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17422_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31];this.GXLastCtrlId=31;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptrol",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",26,0,"px",17,"px","e16422_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(177,27,"ROLID","Ide.","","RolId","int",0,"px",4,4,"right",null,[],177,"RolId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1214,28,"ROLNOMBRE","Rol","","RolNombre","svchar",0,"px",64,64,"left",null,[],1214,"RolNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(1213,29,"ROLESTADO","Estado","RolEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,32,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");n=this.GRIDPAGINATIONBARContainer;n.setProp("Enabled","Enabled",!0,"boolean");n.setProp("Class","Class","PaginationBar","str");n.setProp("ShowFirst","Showfirst",!1,"bool");n.setProp("ShowPrevious","Showprevious",!0,"bool");n.setProp("ShowNext","Shownext",!0,"bool");n.setProp("ShowLast","Showlast",!1,"bool");n.setProp("PagesToShow","Pagestoshow",5,"num");n.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");n.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");n.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");n.setProp("SelectedPage","Selectedpage","","char");n.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");n.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");n.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");n.setProp("First","First","First","str");n.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");n.setProp("Next","Next","WWP_PagingNextCaption","str");n.setProp("Last","Last","Last","str");n.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");n.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");n.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");n.addV2CFunction("AV46GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");n.addC2VFunction(function(n){n.ParentObject.AV46GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV46GridCurrentPage)});n.addV2CFunction("AV47GridPageCount","vGRIDPAGECOUNT","SetPageCount");n.addC2VFunction(function(n){n.ParentObject.AV47GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV47GridPageCount)});n.setProp("RecordCount","Recordcount","","str");n.setProp("Page","Page","","str");n.setProp("Visible","Visible",!0,"bool");n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("ChangePage",this.e11422_client);n.addEventHandler("ChangeRowsPerPage",this.e12422_client);this.setUserControl(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"TABLEFILTERS",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vROLNOMBRE",gxz:"ZV48RolNombre",gxold:"OV48RolNombre",gxvar:"AV48RolNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV48RolNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV48RolNombre=n)},v2c:function(){gx.fn.setControlValue("vROLNOMBRE",gx.O.AV48RolNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV48RolNombre=this.val())},val:function(){return gx.fn.getControlValue("vROLNOMBRE")},nac:gx.falseFn};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[26]={id:26,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV28Select",gxold:"OV28Select",gxvar:"AV28Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV28Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV28Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(25),gx.O.AV28Select,gx.O.AV54Select_GXI)},c2v:function(n){gx.O.AV54Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV28Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(25))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(25))},gxvar_GXI:"AV54Select_GXI",nac:gx.falseFn,evt:"e16422_client",std:"ENTER"};t[27]={id:27,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLID",gxz:"Z177RolId",gxold:"O177RolId",gxvar:"A177RolId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A177RolId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z177RolId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ROLID",n||gx.fn.currentGridRowImpl(25),gx.O.A177RolId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A177RolId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ROLID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLNOMBRE",gxz:"Z1214RolNombre",gxold:"O1214RolNombre",gxvar:"A1214RolNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1214RolNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1214RolNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ROLNOMBRE",n||gx.fn.currentGridRowImpl(25),gx.O.A1214RolNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1214RolNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ROLNOMBRE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLESTADO",gxz:"Z1213RolEstado",gxold:"O1213RolEstado",gxvar:"A1213RolEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1213RolEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1213RolEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("ROLESTADO",n||gx.fn.currentGridRowImpl(25),gx.O.A1213RolEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1213RolEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ROLESTADO",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};this.AV48RolNombre="";this.ZV48RolNombre="";this.OV48RolNombre="";this.ZV28Select="";this.OV28Select="";this.Z177RolId=0;this.O177RolId=0;this.Z1214RolNombre="";this.O1214RolNombre="";this.Z1213RolEstado="";this.O1213RolEstado="";this.AV48RolNombre="";this.AV46GridCurrentPage=0;this.AV7InOutRolId=0;this.AV8InOutRolNombre="";this.AV28Select="";this.A177RolId=0;this.A1214RolNombre="";this.A1213RolEstado="";this.Events={e11422_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12422_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16422_client:["ENTER",!0],e17422_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV48RolNombre",fld:"vROLNOMBRE",pic:"@!"}],[{av:"AV46GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV47GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV48RolNombre",fld:"vROLNOMBRE",pic:"@!"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV48RolNombre",fld:"vROLNOMBRE",pic:"@!"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV28Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A177RolId",fld:"ROLID",pic:"ZZZ9",hsh:!0},{av:"A1214RolNombre",fld:"ROLNOMBRE",pic:"@!",hsh:!0}],[{av:"AV7InOutRolId",fld:"vINOUTROLID",pic:"ZZZ9"},{av:"AV8InOutRolNombre",fld:"vINOUTROLNOMBRE",pic:"@!"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutRolId","vINOUTROLID",0,"int",4,0);this.setVCMap("AV8InOutRolNombre","vINOUTROLNOMBRE",0,"svchar",64,0);r.addRefreshingVar(this.GXValidFnc[19]);r.addRefreshingParm(this.GXValidFnc[19]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptrol)})