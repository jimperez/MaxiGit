/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:13:22.34
*/
gx.evt.autoSkip=!1;gx.define("promptentidad",!1,function(){var t,r,i,n;this.ServerClass="promptentidad";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutEntidadId=gx.fn.getIntegerValue("vINOUTENTIDADID",".");this.AV8InOutEntidadNombre=gx.fn.getControlValue("vINOUTENTIDADNOMBRE")};this.e11102_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12102_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16102_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17102_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34];this.GXLastCtrlId=34;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptentidad",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",26,0,"px",17,"px","e16102_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(44,27,"ENTIDADID","Ide.","","EntidadId","int",0,"px",2,2,"right",null,[],44,"EntidadId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(373,28,"ENTIDADNOMBRE","Empresa","","EntidadNombre","svchar",0,"px",64,64,"left",null,[],373,"EntidadNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(902,29,"ENTIDADRAZONSOCIAL","Razón Social","","EntidadRazonSocial","char",0,"px",60,60,"left",null,[],902,"EntidadRazonSocial",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(901,30,"ENTIDADCUIT","CUIT","","EntidadCUIT","int",0,"px",11,11,"right",null,[],901,"EntidadCUIT",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(1036,31,"ENTIDADESTADO","Estado","EntidadEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(1525,32,"ENTIDADEJERCICIOCIERRE","Cierre","","EntidadEjercicioCierre","char",0,"px",5,5,"left",null,[],1525,"EntidadEjercicioCierre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,35,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");n=this.GRIDPAGINATIONBARContainer;n.setProp("Enabled","Enabled",!0,"boolean");n.setProp("Class","Class","PaginationBar","str");n.setProp("ShowFirst","Showfirst",!1,"bool");n.setProp("ShowPrevious","Showprevious",!0,"bool");n.setProp("ShowNext","Shownext",!0,"bool");n.setProp("ShowLast","Showlast",!1,"bool");n.setProp("PagesToShow","Pagestoshow",5,"num");n.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");n.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");n.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");n.setProp("SelectedPage","Selectedpage","","char");n.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");n.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");n.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");n.setProp("First","First","First","str");n.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");n.setProp("Next","Next","WWP_PagingNextCaption","str");n.setProp("Last","Last","Last","str");n.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");n.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");n.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");n.addV2CFunction("AV31GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");n.addC2VFunction(function(n){n.ParentObject.AV31GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV31GridCurrentPage)});n.addV2CFunction("AV32GridPageCount","vGRIDPAGECOUNT","SetPageCount");n.addC2VFunction(function(n){n.ParentObject.AV32GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV32GridPageCount)});n.setProp("RecordCount","Recordcount","","str");n.setProp("Page","Page","","str");n.setProp("Visible","Visible",!0,"bool");n.setProp("Gx Control Type","Gxcontroltype","","int");n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("ChangePage",this.e11102_client);n.addEventHandler("ChangeRowsPerPage",this.e12102_client);this.setUserControl(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"TABLEFILTERS",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vENTIDADNOMBRE",gxz:"ZV44EntidadNombre",gxold:"OV44EntidadNombre",gxvar:"AV44EntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV44EntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV44EntidadNombre=n)},v2c:function(){gx.fn.setControlValue("vENTIDADNOMBRE",gx.O.AV44EntidadNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV44EntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("vENTIDADNOMBRE")},nac:gx.falseFn};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[26]={id:26,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV28Select",gxold:"OV28Select",gxvar:"AV28Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV28Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV28Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(25),gx.O.AV28Select,gx.O.AV58Select_GXI)},c2v:function(n){gx.O.AV58Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV28Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(25))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(25))},gxvar_GXI:"AV58Select_GXI",nac:gx.falseFn,evt:"e16102_client",std:"ENTER"};t[27]={id:27,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADID",gxz:"Z44EntidadId",gxold:"O44EntidadId",gxvar:"A44EntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A44EntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z44EntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ENTIDADID",n||gx.fn.currentGridRowImpl(25),gx.O.A44EntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A44EntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ENTIDADID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADNOMBRE",gxz:"Z373EntidadNombre",gxold:"O373EntidadNombre",gxvar:"A373EntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A373EntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z373EntidadNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(25),gx.O.A373EntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A373EntidadNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADRAZONSOCIAL",gxz:"Z902EntidadRazonSocial",gxold:"O902EntidadRazonSocial",gxvar:"A902EntidadRazonSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A902EntidadRazonSocial=n)},v2z:function(n){n!==undefined&&(gx.O.Z902EntidadRazonSocial=n)},v2c:function(n){gx.fn.setGridControlValue("ENTIDADRAZONSOCIAL",n||gx.fn.currentGridRowImpl(25),gx.O.A902EntidadRazonSocial,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A902EntidadRazonSocial=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ENTIDADRAZONSOCIAL",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADCUIT",gxz:"Z901EntidadCUIT",gxold:"O901EntidadCUIT",gxvar:"A901EntidadCUIT",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A901EntidadCUIT=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z901EntidadCUIT=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ENTIDADCUIT",n||gx.fn.currentGridRowImpl(25),gx.O.A901EntidadCUIT,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A901EntidadCUIT=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ENTIDADCUIT",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};t[31]={id:31,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADESTADO",gxz:"Z1036EntidadEstado",gxold:"O1036EntidadEstado",gxvar:"A1036EntidadEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1036EntidadEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1036EntidadEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("ENTIDADESTADO",n||gx.fn.currentGridRowImpl(25),gx.O.A1036EntidadEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1036EntidadEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ENTIDADESTADO",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[32]={id:32,lvl:2,type:"char",len:4,dec:0,sign:!1,pic:"99-99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADEJERCICIOCIERRE",gxz:"Z1525EntidadEjercicioCierre",gxold:"O1525EntidadEjercicioCierre",gxvar:"A1525EntidadEjercicioCierre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1525EntidadEjercicioCierre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1525EntidadEjercicioCierre=n)},v2c:function(n){gx.fn.setGridControlValue("ENTIDADEJERCICIOCIERRE",n||gx.fn.currentGridRowImpl(25),gx.O.A1525EntidadEjercicioCierre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1525EntidadEjercicioCierre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ENTIDADEJERCICIOCIERRE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};this.AV44EntidadNombre="";this.ZV44EntidadNombre="";this.OV44EntidadNombre="";this.ZV28Select="";this.OV28Select="";this.Z44EntidadId=0;this.O44EntidadId=0;this.Z373EntidadNombre="";this.O373EntidadNombre="";this.Z902EntidadRazonSocial="";this.O902EntidadRazonSocial="";this.Z901EntidadCUIT=0;this.O901EntidadCUIT=0;this.Z1036EntidadEstado="";this.O1036EntidadEstado="";this.Z1525EntidadEjercicioCierre="";this.O1525EntidadEjercicioCierre="";this.AV44EntidadNombre="";this.AV31GridCurrentPage=0;this.AV7InOutEntidadId=0;this.AV8InOutEntidadNombre="";this.AV28Select="";this.A44EntidadId=0;this.A373EntidadNombre="";this.A902EntidadRazonSocial="";this.A901EntidadCUIT=0;this.A1036EntidadEstado="";this.A1525EntidadEjercicioCierre="";this.Events={e11102_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12102_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16102_client:["ENTER",!0],e17102_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV44EntidadNombre",fld:"vENTIDADNOMBRE",pic:"@!"}],[{av:"AV31GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV32GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV44EntidadNombre",fld:"vENTIDADNOMBRE",pic:"@!"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV44EntidadNombre",fld:"vENTIDADNOMBRE",pic:"@!"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV28Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!",hsh:!0}],[{av:"AV7InOutEntidadId",fld:"vINOUTENTIDADID",pic:"Z9"},{av:"AV8InOutEntidadNombre",fld:"vINOUTENTIDADNOMBRE",pic:"@!"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutEntidadId","vINOUTENTIDADID",0,"int",2,0);this.setVCMap("AV8InOutEntidadNombre","vINOUTENTIDADNOMBRE",0,"svchar",64,0);r.addRefreshingVar(this.GXValidFnc[19]);r.addRefreshingParm(this.GXValidFnc[19]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptentidad)})