/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:49:32.99
*/
gx.evt.autoSkip=!1;gx.define("wwpuesto",!1,function(){var n,r,u,t,i;this.ServerClass="wwpuesto";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV43Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV37IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV38IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV39IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV43Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV37IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV38IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV39IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.e113s2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e123s2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e133s2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e143s2_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e153s2_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e193s2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e203s2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,32,33,34,35,37,38,39,40,41,43,44,45,46,47,48,49,50,52,53,54];this.GXLastCtrlId=54;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",42,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpuesto",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Display",43,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Update",44,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Delete",45,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit(150,46,"PUESTOID","Puesto","","PuestoId","int",0,"px",9,9,"right",null,[],150,"PuestoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(351,47,"PUESTONOMBRE","Puesto Nombre","","PuestoNombre","svchar",0,"px",130,80,"left",null,[],351,"PuestoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1016,48,"PUESTOOBJETIVO","Puesto Objetivo","","PuestoObjetivo","svchar",0,"px",256,80,"left",null,[],1016,"PuestoObjetivo",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,51,33,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV29GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV29GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV29GridCurrentPage)});t.addV2CFunction("AV30GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV30GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV30GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e113s2_client);t.addEventHandler("ChangeRowsPerPage",this.e123s2_client);this.setUserControl(t);this.INNEWWINDOW1Container=gx.uc.getNew(this,55,33,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");i=this.INNEWWINDOW1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setDynProp("Width","Width","50","str");i.setDynProp("Height","Height","50","str");i.setProp("Name","Name","","str");i.setDynProp("Target","Target","","str");i.setProp("Fullscreen","Fullscreen",!1,"bool");i.setProp("Location","Location",!0,"bool");i.setProp("MenuBar","Menubar",!0,"bool");i.setProp("Resizable","Resizable",!0,"bool");i.setProp("Scrollbars","Scrollbars",!0,"bool");i.setProp("TitleBar","Titlebar",!0,"bool");i.setProp("ToolBar","Toolbar",!0,"bool");i.setProp("directories","Directories",!0,"bool");i.setProp("status","Status",!0,"bool");i.setProp("copyhistory","Copyhistory",!0,"bool");i.setProp("top","Top","5","str");i.setProp("left","Left","5","str");i.setProp("fitscreen","Fitscreen",!1,"bool");i.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");i.setProp("Targets","Targets","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e133s2_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORT",grid:0,evt:"e143s2_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTNEXPORTREPORT",grid:0,evt:"e153s2_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"TABLERIGHTHEADER",grid:0};n[28]={id:28,fld:"TABLEFILTERS",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"svchar",len:130,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPUESTONOMBRE",gxz:"ZV14PuestoNombre",gxold:"OV14PuestoNombre",gxvar:"AV14PuestoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14PuestoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14PuestoNombre=n)},v2c:function(){gx.fn.setControlValue("vPUESTONOMBRE",gx.O.AV14PuestoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14PuestoNombre=this.val())},val:function(){return gx.fn.getControlValue("vPUESTONOMBRE")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[43]={id:43,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV31Display",gxold:"OV31Display",gxvar:"AV31Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV31Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV31Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(42),gx.O.AV31Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV31Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV32Update",gxold:"OV32Update",gxvar:"AV32Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV32Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV32Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(42),gx.O.AV32Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV32Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV33Delete",gxold:"OV33Delete",gxvar:"AV33Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV33Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV33Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(42),gx.O.AV33Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV33Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PUESTOID",gxz:"Z150PuestoId",gxold:"O150PuestoId",gxvar:"A150PuestoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A150PuestoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z150PuestoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PUESTOID",n||gx.fn.currentGridRowImpl(42),gx.O.A150PuestoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A150PuestoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PUESTOID",n||gx.fn.currentGridRowImpl(42),".")},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"svchar",len:130,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PUESTONOMBRE",gxz:"Z351PuestoNombre",gxold:"O351PuestoNombre",gxvar:"A351PuestoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A351PuestoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z351PuestoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PUESTONOMBRE",n||gx.fn.currentGridRowImpl(42),gx.O.A351PuestoNombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A351PuestoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PUESTONOMBRE",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"svchar",len:256,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PUESTOOBJETIVO",gxz:"Z1016PuestoObjetivo",gxold:"O1016PuestoObjetivo",gxvar:"A1016PuestoObjetivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1016PuestoObjetivo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1016PuestoObjetivo=n)},v2c:function(n){gx.fn.setGridControlValue("PUESTOOBJETIVO",n||gx.fn.currentGridRowImpl(42),gx.O.A1016PuestoObjetivo,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1016PuestoObjetivo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PUESTOOBJETIVO",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.AV14PuestoNombre="";this.ZV14PuestoNombre="";this.OV14PuestoNombre="";this.ZV31Display="";this.OV31Display="";this.ZV32Update="";this.OV32Update="";this.ZV33Delete="";this.OV33Delete="";this.Z150PuestoId=0;this.O150PuestoId=0;this.Z351PuestoNombre="";this.O351PuestoNombre="";this.Z1016PuestoObjetivo="";this.O1016PuestoObjetivo="";this.AV14PuestoNombre="";this.AV29GridCurrentPage=0;this.AV31Display="";this.AV32Update="";this.AV33Delete="";this.A150PuestoId=0;this.A351PuestoNombre="";this.A1016PuestoObjetivo="";this.AV43Pgmname="";this.AV37IsAuthorized_Display=!1;this.AV38IsAuthorized_Update=!1;this.AV39IsAuthorized_Delete=!1;this.Events={e113s2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e123s2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e133s2_client:["'DOINSERT'",!0],e143s2_client:["'DOEXPORT'",!0],e153s2_client:["'DOEXPORTREPORT'",!0],e193s2_client:["ENTER",!0],e203s2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV14PuestoNombre",fld:"vPUESTONOMBRE",pic:""},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV37IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV38IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV39IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV29GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV30GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV37IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV38IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV39IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV14PuestoNombre",fld:"vPUESTONOMBRE",pic:""},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV37IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV38IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV39IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV14PuestoNombre",fld:"vPUESTONOMBRE",pic:""},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV37IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV38IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV39IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV14PuestoNombre",fld:"vPUESTONOMBRE",pic:""},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV37IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV38IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV39IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV37IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A150PuestoId",fld:"PUESTOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV38IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV39IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV31Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV32Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV33Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A150PuestoId",fld:"PUESTOID",pic:"ZZZZZZZZ9",hsh:!0}],[]];this.EvtParms["'DOEXPORT'"]=[[{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV14PuestoNombre",fld:"vPUESTONOMBRE",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV37IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV38IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV39IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{av:"AV14PuestoNombre",fld:"vPUESTONOMBRE",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV37IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV38IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV39IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.setVCMap("AV43Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV37IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV38IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV39IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV43Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV37IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV38IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV39IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV43Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV37IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV38IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV39IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);r.addRefreshingVar(this.GXValidFnc[33]);r.addRefreshingVar({rfrVar:"AV43Pgmname"});r.addRefreshingVar({rfrVar:"AV37IsAuthorized_Display"});r.addRefreshingVar({rfrVar:"AV38IsAuthorized_Update"});r.addRefreshingVar({rfrVar:"AV39IsAuthorized_Delete"});r.addRefreshingParm(this.GXValidFnc[33]);r.addRefreshingParm({rfrVar:"AV43Pgmname"});r.addRefreshingParm({rfrVar:"AV37IsAuthorized_Display"});r.addRefreshingParm({rfrVar:"AV38IsAuthorized_Update"});r.addRefreshingParm({rfrVar:"AV39IsAuthorized_Delete"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwpuesto)})