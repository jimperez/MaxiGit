/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:59:20.30
*/
gx.evt.autoSkip=!1;gx.define("wwchequemovcaja",!1,function(){var n,u,r,t,i;this.ServerClass="wwchequemovcaja";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV67Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV55IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV67Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV55IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY")};this.e11vl2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12vl2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13vl2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e14vl2_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e15vl2_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e19vl2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e20vl2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,29,31,32,33,34,35,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53];this.GXLastCtrlId=53;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",36,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwchequemovcaja",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);u=this.GridContainer;u.addSingleLineEdit("Display",37,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");u.addSingleLineEdit(51,38,"CHEQUEID","Ide.","","ChequeId","int",0,"px",9,9,"right",null,[],51,"ChequeId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3301,39,"CHEQUEMOVCAJAID","Mov.","","ChequeMovCajaId","int",0,"px",2,2,"right",null,[],3301,"ChequeMovCajaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3307,40,"CHEQUEMOVCAJAENTIDADID","Entidad","","ChequeMovCajaEntidadId","int",0,"px",2,2,"right",null,[],3307,"ChequeMovCajaEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(3309,41,"CHEQUEMOVCAJASUCID","Sucursal","","ChequeMovCajaSucId","int",0,"px",4,4,"right",null,[],3309,"ChequeMovCajaSucId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3308,42,"CHEQUEMOVCAJAFISICAID","Física","","ChequeMovCajaFisicaId","int",0,"px",4,4,"right",null,[],3308,"ChequeMovCajaFisicaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3304,43,"CHEQUEMOVCAJAARQUEOID","Nº de Arqueo","","ChequeMovCajaArqueoId","int",0,"px",8,8,"right",null,[],3304,"ChequeMovCajaArqueoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3305,44,"CHEQUEMOVCAJAARQUEONOMBRE","Arqueo","","ChequeMovCajaArqueoNombre","svchar",0,"px",64,64,"left",null,[],3305,"ChequeMovCajaArqueoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3306,45,"CHEQUEMOVCAJACIERRE","Cierre","","ChequeMovCajaCierre","char",0,"px",20,20,"left",null,[],3306,"ChequeMovCajaCierre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3302,46,"CHEQUEMOVCAJA094","Usuario","","ChequeMovCaja094","char",0,"px",15,15,"left",null,[],3302,"ChequeMovCaja094",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3303,47,"CHEQUEMOVCAJA095","Fecha Hora","","ChequeMovCaja095","dtime",0,"px",14,14,"right",null,[],3303,"ChequeMovCaja095",!0,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(u);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,50,37,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV52GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV52GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV52GridCurrentPage)});t.addV2CFunction("AV53GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV53GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV53GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11vl2_client);t.addEventHandler("ChangeRowsPerPage",this.e12vl2_client);this.setUserControl(t);this.INNEWWINDOW1Container=gx.uc.getNew(this,54,37,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");i=this.INNEWWINDOW1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setDynProp("Width","Width","50","str");i.setDynProp("Height","Height","50","str");i.setProp("Name","Name","","str");i.setDynProp("Target","Target","","str");i.setProp("Fullscreen","Fullscreen",!1,"bool");i.setProp("Location","Location",!0,"bool");i.setProp("MenuBar","Menubar",!0,"bool");i.setProp("Resizable","Resizable",!0,"bool");i.setProp("Scrollbars","Scrollbars",!0,"bool");i.setProp("TitleBar","Titlebar",!0,"bool");i.setProp("ToolBar","Toolbar",!0,"bool");i.setProp("directories","Directories",!0,"bool");i.setProp("status","Status",!0,"bool");i.setProp("copyhistory","Copyhistory",!0,"bool");i.setProp("top","Top","5","str");i.setProp("left","Left","5","str");i.setProp("fitscreen","Fitscreen",!1,"bool");i.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");i.setProp("Targets","Targets","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e13vl2_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORT",grid:0,evt:"e14vl2_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTNEXPORTREPORT",grid:0,evt:"e15vl2_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"TABLERIGHTHEADER",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[37]={id:37,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV54Display",gxold:"OV54Display",gxvar:"AV54Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV54Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV54Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(36),gx.O.AV54Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV54Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEID",gxz:"Z51ChequeId",gxold:"O51ChequeId",gxvar:"A51ChequeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A51ChequeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z51ChequeId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEID",n||gx.fn.currentGridRowImpl(36),gx.O.A51ChequeId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A51ChequeId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAID",gxz:"Z3301ChequeMovCajaId",gxold:"O3301ChequeMovCajaId",gxvar:"A3301ChequeMovCajaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3301ChequeMovCajaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3301ChequeMovCajaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAID",n||gx.fn.currentGridRowImpl(36),gx.O.A3301ChequeMovCajaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3301ChequeMovCajaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAENTIDADID",gxz:"Z3307ChequeMovCajaEntidadId",gxold:"O3307ChequeMovCajaEntidadId",gxvar:"A3307ChequeMovCajaEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3307ChequeMovCajaEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3307ChequeMovCajaEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAENTIDADID",n||gx.fn.currentGridRowImpl(36),gx.O.A3307ChequeMovCajaEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3307ChequeMovCajaEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAENTIDADID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJASUCID",gxz:"Z3309ChequeMovCajaSucId",gxold:"O3309ChequeMovCajaSucId",gxvar:"A3309ChequeMovCajaSucId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3309ChequeMovCajaSucId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3309ChequeMovCajaSucId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJASUCID",n||gx.fn.currentGridRowImpl(36),gx.O.A3309ChequeMovCajaSucId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3309ChequeMovCajaSucId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJASUCID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAFISICAID",gxz:"Z3308ChequeMovCajaFisicaId",gxold:"O3308ChequeMovCajaFisicaId",gxvar:"A3308ChequeMovCajaFisicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3308ChequeMovCajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3308ChequeMovCajaFisicaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAFISICAID",n||gx.fn.currentGridRowImpl(36),gx.O.A3308ChequeMovCajaFisicaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3308ChequeMovCajaFisicaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAFISICAID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAARQUEOID",gxz:"Z3304ChequeMovCajaArqueoId",gxold:"O3304ChequeMovCajaArqueoId",gxvar:"A3304ChequeMovCajaArqueoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3304ChequeMovCajaArqueoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3304ChequeMovCajaArqueoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAARQUEOID",n||gx.fn.currentGridRowImpl(36),gx.O.A3304ChequeMovCajaArqueoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3304ChequeMovCajaArqueoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAARQUEOID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAARQUEONOMBRE",gxz:"Z3305ChequeMovCajaArqueoNombre",gxold:"O3305ChequeMovCajaArqueoNombre",gxvar:"A3305ChequeMovCajaArqueoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3305ChequeMovCajaArqueoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3305ChequeMovCajaArqueoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAARQUEONOMBRE",n||gx.fn.currentGridRowImpl(36),gx.O.A3305ChequeMovCajaArqueoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3305ChequeMovCajaArqueoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEMOVCAJAARQUEONOMBRE",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJACIERRE",gxz:"Z3306ChequeMovCajaCierre",gxold:"O3306ChequeMovCajaCierre",gxvar:"A3306ChequeMovCajaCierre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3306ChequeMovCajaCierre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3306ChequeMovCajaCierre=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJACIERRE",n||gx.fn.currentGridRowImpl(36),gx.O.A3306ChequeMovCajaCierre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3306ChequeMovCajaCierre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEMOVCAJACIERRE",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJA094",gxz:"Z3302ChequeMovCaja094",gxold:"O3302ChequeMovCaja094",gxvar:"A3302ChequeMovCaja094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3302ChequeMovCaja094=n)},v2z:function(n){n!==undefined&&(gx.O.Z3302ChequeMovCaja094=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJA094",n||gx.fn.currentGridRowImpl(36),gx.O.A3302ChequeMovCaja094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3302ChequeMovCaja094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEMOVCAJA094",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJA095",gxz:"Z3303ChequeMovCaja095",gxold:"O3303ChequeMovCaja095",gxvar:"A3303ChequeMovCaja095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3303ChequeMovCaja095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3303ChequeMovCaja095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJA095",n||gx.fn.currentGridRowImpl(36),gx.O.A3303ChequeMovCaja095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3303ChequeMovCaja095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CHEQUEMOVCAJA095",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.ZV54Display="";this.OV54Display="";this.Z51ChequeId=0;this.O51ChequeId=0;this.Z3301ChequeMovCajaId=0;this.O3301ChequeMovCajaId=0;this.Z3307ChequeMovCajaEntidadId=0;this.O3307ChequeMovCajaEntidadId=0;this.Z3309ChequeMovCajaSucId=0;this.O3309ChequeMovCajaSucId=0;this.Z3308ChequeMovCajaFisicaId=0;this.O3308ChequeMovCajaFisicaId=0;this.Z3304ChequeMovCajaArqueoId=0;this.O3304ChequeMovCajaArqueoId=0;this.Z3305ChequeMovCajaArqueoNombre="";this.O3305ChequeMovCajaArqueoNombre="";this.Z3306ChequeMovCajaCierre="";this.O3306ChequeMovCajaCierre="";this.Z3302ChequeMovCaja094="";this.O3302ChequeMovCaja094="";this.Z3303ChequeMovCaja095=gx.date.nullDate();this.O3303ChequeMovCaja095=gx.date.nullDate();this.AV52GridCurrentPage=0;this.AV54Display="";this.A51ChequeId=0;this.A3301ChequeMovCajaId=0;this.A3307ChequeMovCajaEntidadId=0;this.A3309ChequeMovCajaSucId=0;this.A3308ChequeMovCajaFisicaId=0;this.A3304ChequeMovCajaArqueoId=0;this.A3305ChequeMovCajaArqueoNombre="";this.A3306ChequeMovCajaCierre="";this.A3302ChequeMovCaja094="";this.A3303ChequeMovCaja095=gx.date.nullDate();this.AV67Pgmname="";this.AV55IsAuthorized_Display=!1;this.Events={e11vl2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12vl2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13vl2_client:["'DOINSERT'",!0],e14vl2_client:["'DOEXPORT'",!0],e15vl2_client:["'DOEXPORTREPORT'",!0],e19vl2_client:["ENTER",!0],e20vl2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV67Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV55IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}],[{av:"AV52GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV53GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV55IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV67Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV67Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV55IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV67Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV55IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV67Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV55IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV55IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A51ChequeId",fld:"CHEQUEID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A3301ChequeMovCajaId",fld:"CHEQUEMOVCAJAID",pic:"Z9",hsh:!0}],[{av:"AV54Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A51ChequeId",fld:"CHEQUEID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A3301ChequeMovCajaId",fld:"CHEQUEMOVCAJAID",pic:"Z9",hsh:!0}],[]];this.EvtParms["'DOEXPORT'"]=[[{av:"AV67Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV67Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV55IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"AV67Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV67Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV55IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.setVCMap("AV67Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV55IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV67Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV55IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV67Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV55IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);u.addRefreshingVar({rfrVar:"AV67Pgmname"});u.addRefreshingVar({rfrVar:"AV55IsAuthorized_Display"});u.addRefreshingParm({rfrVar:"AV67Pgmname"});u.addRefreshingParm({rfrVar:"AV55IsAuthorized_Display"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwchequemovcaja)})