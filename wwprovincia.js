/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:48:58.67
*/
gx.evt.autoSkip=!1;gx.define("wwprovincia",!1,function(){var n,r,u,t,i;this.ServerClass="wwprovincia";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV35IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV36IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV37IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV35IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV36IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV37IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.Valid_Paisid=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Paisid",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("PAISID",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e112s2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e122s2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e132s2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e142s2_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e152s2_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e192s2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e202s2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,55,56,57];this.GXLastCtrlId=57;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwprovincia",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Display",45,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Update",46,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Delete",47,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit(79,48,"PROVINCIAID","Ide.","","ProvinciaId","int",0,"px",4,4,"right",null,[],79,"ProvinciaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(510,49,"PROVINCIANOMBRE","Provincia","","ProvinciaNombre","svchar",0,"px",64,64,"left",null,[],510,"ProvinciaNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(80,50,"PAISID","Ide.","","PaisId","char",0,"px",3,3,"left",null,[],80,"PaisId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(583,51,"PAISNOMBRE","País","","PaisNombre","svchar",0,"px",64,64,"left",null,[],583,"PaisNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,54,31,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV27GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV27GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV27GridCurrentPage)});t.addV2CFunction("AV28GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV28GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV28GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e112s2_client);t.addEventHandler("ChangeRowsPerPage",this.e122s2_client);this.setUserControl(t);this.INNEWWINDOW1Container=gx.uc.getNew(this,58,31,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");i=this.INNEWWINDOW1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setDynProp("Width","Width","50","str");i.setDynProp("Height","Height","50","str");i.setProp("Name","Name","","str");i.setDynProp("Target","Target","","str");i.setProp("Fullscreen","Fullscreen",!1,"bool");i.setProp("Location","Location",!0,"bool");i.setProp("MenuBar","Menubar",!0,"bool");i.setProp("Resizable","Resizable",!0,"bool");i.setProp("Scrollbars","Scrollbars",!0,"bool");i.setProp("TitleBar","Titlebar",!0,"bool");i.setProp("ToolBar","Toolbar",!0,"bool");i.setProp("directories","Directories",!0,"bool");i.setProp("status","Status",!0,"bool");i.setProp("copyhistory","Copyhistory",!0,"bool");i.setProp("top","Top","5","str");i.setProp("left","Left","5","str");i.setProp("fitscreen","Fitscreen",!1,"bool");i.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");i.setProp("Targets","Targets","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e132s2_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORT",grid:0,evt:"e142s2_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTNEXPORTREPORT",grid:0,evt:"e152s2_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"TABLEFILTERS",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPROVINCIANOMBRE",gxz:"ZV14ProvinciaNombre",gxold:"OV14ProvinciaNombre",gxvar:"AV14ProvinciaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14ProvinciaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14ProvinciaNombre=n)},v2c:function(){gx.fn.setControlValue("vPROVINCIANOMBRE",gx.O.AV14ProvinciaNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14ProvinciaNombre=this.val())},val:function(){return gx.fn.getControlValue("vPROVINCIANOMBRE")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPAISNOMBRE",gxz:"ZV15PaisNombre",gxold:"OV15PaisNombre",gxvar:"AV15PaisNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15PaisNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15PaisNombre=n)},v2c:function(){gx.fn.setControlValue("vPAISNOMBRE",gx.O.AV15PaisNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV15PaisNombre=this.val())},val:function(){return gx.fn.getControlValue("vPAISNOMBRE")},nac:gx.falseFn};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[45]={id:45,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV31Display",gxold:"OV31Display",gxvar:"AV31Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV31Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV31Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(44),gx.O.AV31Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV31Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV30Update",gxold:"OV30Update",gxvar:"AV30Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV30Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV30Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(44),gx.O.AV30Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV30Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV29Delete",gxold:"OV29Delete",gxvar:"AV29Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV29Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV29Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(44),gx.O.AV29Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV29Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIAID",gxz:"Z79ProvinciaId",gxold:"O79ProvinciaId",gxvar:"A79ProvinciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A79ProvinciaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z79ProvinciaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PROVINCIAID",n||gx.fn.currentGridRowImpl(44),gx.O.A79ProvinciaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A79ProvinciaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PROVINCIAID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIANOMBRE",gxz:"Z510ProvinciaNombre",gxold:"O510ProvinciaNombre",gxvar:"A510ProvinciaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A510ProvinciaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z510ProvinciaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PROVINCIANOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A510ProvinciaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A510ProvinciaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVINCIANOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Paisid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAISID",gxz:"Z80PaisId",gxold:"O80PaisId",gxvar:"A80PaisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A80PaisId=n)},v2z:function(n){n!==undefined&&(gx.O.Z80PaisId=n)},v2c:function(n){gx.fn.setGridControlValue("PAISID",n||gx.fn.currentGridRowImpl(44),gx.O.A80PaisId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A80PaisId=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PAISID",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAISNOMBRE",gxz:"Z583PaisNombre",gxold:"O583PaisNombre",gxvar:"A583PaisNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A583PaisNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z583PaisNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PAISNOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A583PaisNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A583PaisNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PAISNOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.AV14ProvinciaNombre="";this.ZV14ProvinciaNombre="";this.OV14ProvinciaNombre="";this.AV15PaisNombre="";this.ZV15PaisNombre="";this.OV15PaisNombre="";this.ZV31Display="";this.OV31Display="";this.ZV30Update="";this.OV30Update="";this.ZV29Delete="";this.OV29Delete="";this.Z79ProvinciaId=0;this.O79ProvinciaId=0;this.Z510ProvinciaNombre="";this.O510ProvinciaNombre="";this.Z80PaisId="";this.O80PaisId="";this.Z583PaisNombre="";this.O583PaisNombre="";this.AV14ProvinciaNombre="";this.AV15PaisNombre="";this.AV27GridCurrentPage=0;this.AV31Display="";this.AV30Update="";this.AV29Delete="";this.A79ProvinciaId=0;this.A510ProvinciaNombre="";this.A80PaisId="";this.A583PaisNombre="";this.AV41Pgmname="";this.AV35IsAuthorized_Display=!1;this.AV36IsAuthorized_Update=!1;this.AV37IsAuthorized_Delete=!1;this.Events={e112s2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e122s2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e132s2_client:["'DOINSERT'",!0],e142s2_client:["'DOEXPORT'",!0],e152s2_client:["'DOEXPORTREPORT'",!0],e192s2_client:["ENTER",!0],e202s2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV14ProvinciaNombre",fld:"vPROVINCIANOMBRE",pic:"@!"},{av:"AV15PaisNombre",fld:"vPAISNOMBRE",pic:"@!"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV35IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV36IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV37IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV27GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV28GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV35IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV36IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV37IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV14ProvinciaNombre",fld:"vPROVINCIANOMBRE",pic:"@!"},{av:"AV15PaisNombre",fld:"vPAISNOMBRE",pic:"@!"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV35IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV36IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV37IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV14ProvinciaNombre",fld:"vPROVINCIANOMBRE",pic:"@!"},{av:"AV15PaisNombre",fld:"vPAISNOMBRE",pic:"@!"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV35IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV36IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV37IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV14ProvinciaNombre",fld:"vPROVINCIANOMBRE",pic:"@!"},{av:"AV15PaisNombre",fld:"vPAISNOMBRE",pic:"@!"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV35IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV36IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV37IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV35IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A79ProvinciaId",fld:"PROVINCIAID",pic:"ZZZ9",hsh:!0},{av:"AV36IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV37IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV31Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV30Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV29Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A79ProvinciaId",fld:"PROVINCIAID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms["'DOEXPORT'"]=[[{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV14ProvinciaNombre",fld:"vPROVINCIANOMBRE",pic:"@!"},{av:"AV15PaisNombre",fld:"vPAISNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV35IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV36IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV37IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{av:"AV14ProvinciaNombre",fld:"vPROVINCIANOMBRE",pic:"@!"},{av:"AV15PaisNombre",fld:"vPAISNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV35IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV36IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV37IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.EvtParms.VALID_PAISID=[[],[]];this.setVCMap("AV41Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV35IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV36IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV37IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV41Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV35IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV36IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV37IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV41Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV35IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV36IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV37IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);r.addRefreshingVar(this.GXValidFnc[31]);r.addRefreshingVar(this.GXValidFnc[35]);r.addRefreshingVar({rfrVar:"AV41Pgmname"});r.addRefreshingVar({rfrVar:"AV35IsAuthorized_Display"});r.addRefreshingVar({rfrVar:"AV36IsAuthorized_Update"});r.addRefreshingVar({rfrVar:"AV37IsAuthorized_Delete"});r.addRefreshingParm(this.GXValidFnc[31]);r.addRefreshingParm(this.GXValidFnc[35]);r.addRefreshingParm({rfrVar:"AV41Pgmname"});r.addRefreshingParm({rfrVar:"AV35IsAuthorized_Display"});r.addRefreshingParm({rfrVar:"AV36IsAuthorized_Update"});r.addRefreshingParm({rfrVar:"AV37IsAuthorized_Delete"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwprovincia)})