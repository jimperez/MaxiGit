/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:49:10.24
*/
gx.evt.autoSkip=!1;gx.define("wwtarjeta",!1,function(){var n,r,u,t,i;this.ServerClass="wwtarjeta";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV25IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV27IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV25IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV27IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.e11342_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12342_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e19342_client=function(){return this.executeServerEvent("VUPDATE.CLICK",!0,arguments[0],!1,!1)};this.e13342_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e14342_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e15342_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e20342_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e21342_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,32,33,34,35,37,38,39,40,41,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60];this.GXLastCtrlId=60;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",42,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwtarjeta",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Display",43,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Update",44,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left","e19342_client",[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Delete",45,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit(96,46,"TRJID","Ide.","","TrjId","int",0,"px",4,4,"right",null,[],96,"TrjId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(849,47,"TRJNOM","Tarjeta Nombre","","TrjNom","svchar",0,"px",64,64,"left",null,[],849,"TrjNom",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(850,48,"TRJOBS","Observaciones","","TrjObs","svchar",0,"px",1024,80,"left",null,[],850,"TrjObs",!1,255,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(851,49,"TRJEST","Estado","TrjEst","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(852,50,"TRJULTIMALINEA","Trj Ultima Linea","","TrjUltimaLinea","int",0,"px",4,4,"right",null,[],852,"TrjUltimaLinea",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(853,51,"TRJ094","Resp. de Alta:","","Trj094","char",0,"px",15,15,"left",null,[],853,"Trj094",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(854,52,"TRJ095","Fecha de Alta:","","Trj095","dtime",0,"px",14,14,"right",null,[],854,"Trj095",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(855,53,"TRJ097","Resp. de Cbio:","","Trj097","char",0,"px",15,15,"left",null,[],855,"Trj097",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(856,54,"TRJ098","Fecha de Cbio:","","Trj098","dtime",0,"px",14,14,"right",null,[],856,"Trj098",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,57,33,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV17GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV17GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV17GridCurrentPage)});t.addV2CFunction("AV18GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV18GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV18GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11342_client);t.addEventHandler("ChangeRowsPerPage",this.e12342_client);this.setUserControl(t);this.INNEWWINDOW1Container=gx.uc.getNew(this,61,33,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");i=this.INNEWWINDOW1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setDynProp("Width","Width","50","str");i.setDynProp("Height","Height","50","str");i.setProp("Name","Name","","str");i.setDynProp("Target","Target","","str");i.setProp("Fullscreen","Fullscreen",!1,"bool");i.setProp("Location","Location",!0,"bool");i.setProp("MenuBar","Menubar",!0,"bool");i.setProp("Resizable","Resizable",!0,"bool");i.setProp("Scrollbars","Scrollbars",!0,"bool");i.setProp("TitleBar","Titlebar",!0,"bool");i.setProp("ToolBar","Toolbar",!0,"bool");i.setProp("directories","Directories",!0,"bool");i.setProp("status","Status",!0,"bool");i.setProp("copyhistory","Copyhistory",!0,"bool");i.setProp("top","Top","5","str");i.setProp("left","Left","5","str");i.setProp("fitscreen","Fitscreen",!1,"bool");i.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");i.setProp("Targets","Targets","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e13342_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORT",grid:0,evt:"e14342_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTNEXPORTREPORT",grid:0,evt:"e15342_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"TABLERIGHTHEADER",grid:0};n[28]={id:28,fld:"TABLEFILTERS",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTRJNOM",gxz:"ZV12TrjNom",gxold:"OV12TrjNom",gxvar:"AV12TrjNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12TrjNom=n)},v2c:function(){gx.fn.setControlValue("vTRJNOM",gx.O.AV12TrjNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12TrjNom=this.val())},val:function(){return gx.fn.getControlValue("vTRJNOM")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[43]={id:43,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV21Display",gxold:"OV21Display",gxvar:"AV21Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV21Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV21Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(42),gx.O.AV21Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV21Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV20Update",gxold:"OV20Update",gxvar:"AV20Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV20Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV20Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(42),gx.O.AV20Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV20Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn,evt:"e19342_client"};n[45]={id:45,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV19Delete",gxold:"OV19Delete",gxvar:"AV19Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV19Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(42),gx.O.AV19Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV19Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJID",gxz:"Z96TrjId",gxold:"O96TrjId",gxvar:"A96TrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A96TrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z96TrjId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRJID",n||gx.fn.currentGridRowImpl(42),gx.O.A96TrjId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A96TrjId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRJID",n||gx.fn.currentGridRowImpl(42),".")},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJNOM",gxz:"Z849TrjNom",gxold:"O849TrjNom",gxvar:"A849TrjNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A849TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z849TrjNom=n)},v2c:function(n){gx.fn.setGridControlValue("TRJNOM",n||gx.fn.currentGridRowImpl(42),gx.O.A849TrjNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A849TrjNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJNOM",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"svchar",len:1024,dec:255,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJOBS",gxz:"Z850TrjObs",gxold:"O850TrjObs",gxvar:"A850TrjObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A850TrjObs=n)},v2z:function(n){n!==undefined&&(gx.O.Z850TrjObs=n)},v2c:function(n){gx.fn.setGridControlValue("TRJOBS",n||gx.fn.currentGridRowImpl(42),gx.O.A850TrjObs,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A850TrjObs=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJOBS",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJEST",gxz:"Z851TrjEst",gxold:"O851TrjEst",gxvar:"A851TrjEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A851TrjEst=n)},v2z:function(n){n!==undefined&&(gx.O.Z851TrjEst=n)},v2c:function(n){gx.fn.setGridComboBoxValue("TRJEST",n||gx.fn.currentGridRowImpl(42),gx.O.A851TrjEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A851TrjEst=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJEST",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJULTIMALINEA",gxz:"Z852TrjUltimaLinea",gxold:"O852TrjUltimaLinea",gxvar:"A852TrjUltimaLinea",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A852TrjUltimaLinea=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z852TrjUltimaLinea=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRJULTIMALINEA",n||gx.fn.currentGridRowImpl(42),gx.O.A852TrjUltimaLinea,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A852TrjUltimaLinea=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRJULTIMALINEA",n||gx.fn.currentGridRowImpl(42),".")},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJ094",gxz:"Z853Trj094",gxold:"O853Trj094",gxvar:"A853Trj094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A853Trj094=n)},v2z:function(n){n!==undefined&&(gx.O.Z853Trj094=n)},v2c:function(n){gx.fn.setGridControlValue("TRJ094",n||gx.fn.currentGridRowImpl(42),gx.O.A853Trj094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A853Trj094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJ094",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJ095",gxz:"Z854Trj095",gxold:"O854Trj095",gxvar:"A854Trj095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A854Trj095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z854Trj095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("TRJ095",n||gx.fn.currentGridRowImpl(42),gx.O.A854Trj095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A854Trj095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("TRJ095",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJ097",gxz:"Z855Trj097",gxold:"O855Trj097",gxvar:"A855Trj097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A855Trj097=n)},v2z:function(n){n!==undefined&&(gx.O.Z855Trj097=n)},v2c:function(n){gx.fn.setGridControlValue("TRJ097",n||gx.fn.currentGridRowImpl(42),gx.O.A855Trj097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A855Trj097=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJ097",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[54]={id:54,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJ098",gxz:"Z856Trj098",gxold:"O856Trj098",gxvar:"A856Trj098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A856Trj098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z856Trj098=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("TRJ098",n||gx.fn.currentGridRowImpl(42),gx.O.A856Trj098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A856Trj098=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("TRJ098",n||gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.AV12TrjNom="";this.ZV12TrjNom="";this.OV12TrjNom="";this.ZV21Display="";this.OV21Display="";this.ZV20Update="";this.OV20Update="";this.ZV19Delete="";this.OV19Delete="";this.Z96TrjId=0;this.O96TrjId=0;this.Z849TrjNom="";this.O849TrjNom="";this.Z850TrjObs="";this.O850TrjObs="";this.Z851TrjEst="";this.O851TrjEst="";this.Z852TrjUltimaLinea=0;this.O852TrjUltimaLinea=0;this.Z853Trj094="";this.O853Trj094="";this.Z854Trj095=gx.date.nullDate();this.O854Trj095=gx.date.nullDate();this.Z855Trj097="";this.O855Trj097="";this.Z856Trj098=gx.date.nullDate();this.O856Trj098=gx.date.nullDate();this.AV12TrjNom="";this.AV17GridCurrentPage=0;this.AV21Display="";this.AV20Update="";this.AV19Delete="";this.A96TrjId=0;this.A849TrjNom="";this.A850TrjObs="";this.A851TrjEst="";this.A852TrjUltimaLinea=0;this.A853Trj094="";this.A854Trj095=gx.date.nullDate();this.A855Trj097="";this.A856Trj098=gx.date.nullDate();this.AV31Pgmname="";this.AV25IsAuthorized_Display=!1;this.AV27IsAuthorized_Delete=!1;this.Events={e11342_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12342_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e19342_client:["VUPDATE.CLICK",!0],e13342_client:["'DOINSERT'",!0],e14342_client:["'DOEXPORT'",!0],e15342_client:["'DOEXPORTREPORT'",!0],e20342_client:["ENTER",!0],e21342_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV31Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV25IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV27IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV17GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV18GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV25IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV27IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV31Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV31Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV25IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV27IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV31Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV25IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV27IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV31Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV25IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV27IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV25IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"AV27IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV21Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV20Update",fld:"vUPDATE",pic:""},{av:"AV19Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["VUPDATE.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV31Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV25IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV27IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0}],[{av:"AV17GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV18GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV25IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV27IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms["'DOEXPORT'"]=[[{av:"AV31Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV31Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV25IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV27IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"AV31Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV31Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV25IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV27IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.setVCMap("AV31Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV25IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV27IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV31Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV25IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV27IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV31Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV25IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV27IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);r.addRefreshingVar(this.GXValidFnc[33]);r.addRefreshingVar({rfrVar:"AV31Pgmname"});r.addRefreshingVar({rfrVar:"AV25IsAuthorized_Display"});r.addRefreshingVar({rfrVar:"AV27IsAuthorized_Delete"});r.addRefreshingParm(this.GXValidFnc[33]);r.addRefreshingParm({rfrVar:"AV31Pgmname"});r.addRefreshingParm({rfrVar:"AV25IsAuthorized_Display"});r.addRefreshingParm({rfrVar:"AV27IsAuthorized_Delete"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwtarjeta)})