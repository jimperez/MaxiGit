/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:51:14.11
*/
gx.evt.autoSkip=!1;gx.define("wwnotapedidopago",!1,function(){var n,u,r,t,i;this.ServerClass="wwnotapedidopago";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV56Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV52IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV56Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV52IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY")};this.e11632_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12632_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13632_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e14632_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e18632_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e19632_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,26,27,29,30,31,32,33,35,36,37,38,39,40,41,42,44,45,46];this.GXLastCtrlId=46;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",34,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwnotapedidopago",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);u=this.GridContainer;u.addSingleLineEdit("Display",35,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");u.addSingleLineEdit(81,36,"NTAPEDID","Nº","","NtaPedId","int",0,"px",9,9,"right",null,[],81,"NtaPedId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(213,37,"NTAPEDPAGOID","N° Pago","","NtaPedPagoId","int",0,"px",8,8,"right",null,[],213,"NtaPedPagoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2639,38,"NTAPEDPAGOCANTDIAS","Días","","NtaPedPagoCantDias","int",0,"px",4,4,"right",null,[],2639,"NtaPedPagoCantDias",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(2890,39,"NTAPEDPAGOFECHA","Fecha a Pagar","Fecha ...","NtaPedPagoFecha","date",0,"px",10,10,"right",null,[],2890,"NtaPedPagoFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(2891,40,"NTAPEDPAGOIMPORTE","Importe","","NtaPedPagoImporte","decimal",0,"px",13,13,"right",null,[],2891,"NtaPedPagoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(u);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,43,35,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV37GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV37GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV37GridCurrentPage)});t.addV2CFunction("AV38GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV38GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV38GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11632_client);t.addEventHandler("ChangeRowsPerPage",this.e12632_client);this.setUserControl(t);this.INNEWWINDOW1Container=gx.uc.getNew(this,47,35,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");i=this.INNEWWINDOW1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setDynProp("Width","Width","50","str");i.setDynProp("Height","Height","50","str");i.setProp("Name","Name","","str");i.setDynProp("Target","Target","","str");i.setProp("Fullscreen","Fullscreen",!1,"bool");i.setProp("Location","Location",!0,"bool");i.setProp("MenuBar","Menubar",!0,"bool");i.setProp("Resizable","Resizable",!0,"bool");i.setProp("Scrollbars","Scrollbars",!0,"bool");i.setProp("TitleBar","Titlebar",!0,"bool");i.setProp("ToolBar","Toolbar",!0,"bool");i.setProp("directories","Directories",!0,"bool");i.setProp("status","Status",!0,"bool");i.setProp("copyhistory","Copyhistory",!0,"bool");i.setProp("top","Top","5","str");i.setProp("left","Left","5","str");i.setProp("fitscreen","Fitscreen",!1,"bool");i.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");i.setProp("Targets","Targets","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNEXPORT",grid:0,evt:"e13632_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORTREPORT",grid:0,evt:"e14632_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"TABLERIGHTHEADER",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV41Display",gxold:"OV41Display",gxvar:"AV41Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV41Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV41Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(34),gx.O.AV41Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV41Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDID",gxz:"Z81NtaPedId",gxold:"O81NtaPedId",gxvar:"A81NtaPedId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A81NtaPedId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z81NtaPedId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NTAPEDID",n||gx.fn.currentGridRowImpl(34),gx.O.A81NtaPedId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A81NtaPedId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NTAPEDID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDPAGOID",gxz:"Z213NtaPedPagoId",gxold:"O213NtaPedPagoId",gxvar:"A213NtaPedPagoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A213NtaPedPagoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z213NtaPedPagoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NTAPEDPAGOID",n||gx.fn.currentGridRowImpl(34),gx.O.A213NtaPedPagoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A213NtaPedPagoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NTAPEDPAGOID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDPAGOCANTDIAS",gxz:"Z2639NtaPedPagoCantDias",gxold:"O2639NtaPedPagoCantDias",gxvar:"A2639NtaPedPagoCantDias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2639NtaPedPagoCantDias=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2639NtaPedPagoCantDias=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NTAPEDPAGOCANTDIAS",n||gx.fn.currentGridRowImpl(34),gx.O.A2639NtaPedPagoCantDias,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2639NtaPedPagoCantDias=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NTAPEDPAGOCANTDIAS",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDPAGOFECHA",gxz:"Z2890NtaPedPagoFecha",gxold:"O2890NtaPedPagoFecha",gxvar:"A2890NtaPedPagoFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2890NtaPedPagoFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2890NtaPedPagoFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("NTAPEDPAGOFECHA",n||gx.fn.currentGridRowImpl(34),gx.O.A2890NtaPedPagoFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2890NtaPedPagoFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("NTAPEDPAGOFECHA",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NTAPEDPAGOIMPORTE",gxz:"Z2891NtaPedPagoImporte",gxold:"O2891NtaPedPagoImporte",gxvar:"A2891NtaPedPagoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2891NtaPedPagoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2891NtaPedPagoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NTAPEDPAGOIMPORTE",n||gx.fn.currentGridRowImpl(34),gx.O.A2891NtaPedPagoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2891NtaPedPagoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NTAPEDPAGOIMPORTE",n||gx.fn.currentGridRowImpl(34),".",",")},nac:gx.falseFn};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.ZV41Display="";this.OV41Display="";this.Z81NtaPedId=0;this.O81NtaPedId=0;this.Z213NtaPedPagoId=0;this.O213NtaPedPagoId=0;this.Z2639NtaPedPagoCantDias=0;this.O2639NtaPedPagoCantDias=0;this.Z2890NtaPedPagoFecha=gx.date.nullDate();this.O2890NtaPedPagoFecha=gx.date.nullDate();this.Z2891NtaPedPagoImporte=0;this.O2891NtaPedPagoImporte=0;this.AV37GridCurrentPage=0;this.AV41Display="";this.A81NtaPedId=0;this.A213NtaPedPagoId=0;this.A2639NtaPedPagoCantDias=0;this.A2890NtaPedPagoFecha=gx.date.nullDate();this.A2891NtaPedPagoImporte=0;this.AV56Pgmname="";this.AV52IsAuthorized_Display=!1;this.Events={e11632_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12632_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13632_client:["'DOEXPORT'",!0],e14632_client:["'DOEXPORTREPORT'",!0],e18632_client:["ENTER",!0],e19632_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV56Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}],[{av:"AV37GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV38GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV56Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV56Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV56Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV56Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A81NtaPedId",fld:"NTAPEDID",pic:"ZZZZZZZZ9"},{av:"A213NtaPedPagoId",fld:"NTAPEDPAGOID",pic:"ZZZZZZZ9"}],[{av:"AV41Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"}]];this.EvtParms["'DOEXPORT'"]=[[{av:"AV56Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV56Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"AV56Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV56Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.setVCMap("AV56Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV52IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV56Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV52IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV56Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV52IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);u.addRefreshingVar({rfrVar:"AV56Pgmname"});u.addRefreshingVar({rfrVar:"AV52IsAuthorized_Display"});u.addRefreshingParm({rfrVar:"AV56Pgmname"});u.addRefreshingParm({rfrVar:"AV52IsAuthorized_Display"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwnotapedidopago)})