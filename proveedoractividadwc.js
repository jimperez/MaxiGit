/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:11:42.56
*/
gx.evt.autoSkip=!1;gx.define("proveedoractividadwc",!0,function(n){var t,r,f,i,u;this.ServerClass="proveedoractividadwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV58Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7ProveedorId=gx.fn.getIntegerValue("vPROVEEDORID",".");this.AV52IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV53IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV54IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV7ProveedorId=gx.fn.getIntegerValue("vPROVEEDORID",".");this.AV58Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV52IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV53IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV54IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.Valid_Actividadid=function(){var n=gx.fn.currentGridRowImpl(40);return this.validCliEvt("Valid_Actividadid",40,function(){try{if(gx.fn.currentGridRowImpl(40)===0)return!0;var n=gx.util.balloon.getNew("ACTIVIDADID",gx.fn.currentGridRowImpl(40));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11i91_client=function(){return this.clearMessages(),this.INNEWWINDOW1Container.Target=gx.http.formatLink("exportreportproveedoractividadwc.aspx",[]),this.INNEWWINDOW1Container.Height="600",this.INNEWWINDOW1Container.Width="800",this.INNEWWINDOW1Container.OpenWindow(),this.refreshOutputs([{ctrl:this.INNEWWINDOW1Container}]),gx.$.Deferred().resolve()};this.e12i92_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e13i92_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e14i92_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e15i92_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e19i92_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e20i92_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,53,54,55,56,58];this.GXLastCtrlId=58;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"proveedoractividadwc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Display",41,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Update",42,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Delete",43,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit(104,44,"ACTIVIDADID","Código","","ActividadId","char",0,"px",6,6,"left",null,[],104,"ActividadId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2562,45,"ACTIVIDADNOMBRE","Actividad ","","ActividadNombre","svchar",0,"px",64,64,"left",null,[],2562,"ActividadNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(2571,46,"PROVEEDORACTDEFAULT","Principal","ProveedorActDefault","char",null,0,!0,!1,0,"px","WWColumn");r.addComboBox(2572,47,"PROVEEDORACTIVIDADESTADO","Estado","ProveedorActividadEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(2573,48,"PROVEEDORACTIVIDAD094","Actividad094","","ProveedorActividad094","char",0,"px",15,15,"left",null,[],2573,"ProveedorActividad094",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(2574,49,"PROVEEDORACTIVIDAD095","Actividad095","","ProveedorActividad095","dtime",0,"px",14,14,"right",null,[],2574,"ProveedorActividad095",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");f=this.DVPANEL_TABLEHEADERContainer;f.setProp("Class","Class","","char");f.setProp("Enabled","Enabled",!0,"boolean");f.setProp("Width","Width","100%","str");f.setProp("Height","Height","100","str");f.setProp("AutoWidth","Autowidth",!1,"bool");f.setProp("AutoHeight","Autoheight",!0,"bool");f.setProp("Cls","Cls","PanelFilled_BaseColor","str");f.setProp("ShowHeader","Showheader",!0,"bool");f.setProp("Title","Title","Opciones","str");f.setProp("Collapsible","Collapsible",!0,"bool");f.setProp("Collapsed","Collapsed",!1,"bool");f.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");f.setProp("IconPosition","Iconposition","Right","str");f.setProp("AutoScroll","Autoscroll",!1,"bool");f.setProp("Visible","Visible",!0,"bool");f.setProp("Gx Control Type","Gxcontroltype","","int");f.setC2ShowFunction(function(n){n.show()});this.setUserControl(f);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,52,34,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV41GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV41GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV41GridCurrentPage)});i.addV2CFunction("AV42GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV42GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV42GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e12i92_client);i.addEventHandler("ChangeRowsPerPage",this.e13i92_client);this.setUserControl(i);this.INNEWWINDOW1Container=gx.uc.getNew(this,57,34,"InNewWindow",this.CmpContext+"INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");u=this.INNEWWINDOW1Container;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setDynProp("Width","Width","50","str");u.setDynProp("Height","Height","50","str");u.setProp("Name","Name","","str");u.setDynProp("Target","Target","","str");u.setProp("Fullscreen","Fullscreen",!1,"bool");u.setProp("Location","Location",!0,"bool");u.setProp("MenuBar","Menubar",!0,"bool");u.setProp("Resizable","Resizable",!0,"bool");u.setProp("Scrollbars","Scrollbars",!0,"bool");u.setProp("TitleBar","Titlebar",!0,"bool");u.setProp("ToolBar","Toolbar",!0,"bool");u.setProp("directories","Directories",!0,"bool");u.setProp("status","Status",!0,"bool");u.setProp("copyhistory","Copyhistory",!0,"bool");u.setProp("top","Top","5","str");u.setProp("left","Left","5","str");u.setProp("fitscreen","Fitscreen",!1,"bool");u.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");u.setProp("Targets","Targets","","str");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"TABLEACTIONS",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"BTNINSERT",grid:0,evt:"e14i92_client"};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"BTNEXPORT",grid:0,evt:"e15i92_client"};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"BTNEXPORTREPORT",grid:0,evt:"e11i91_client"};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"TABLEFILTERS",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vACTIVIDADNOMBRE",gxz:"ZV46ActividadNombre",gxold:"OV46ActividadNombre",gxvar:"AV46ActividadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV46ActividadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV46ActividadNombre=n)},v2c:function(){gx.fn.setControlValue("vACTIVIDADNOMBRE",gx.O.AV46ActividadNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV46ActividadNombre=this.val())},val:function(){return gx.fn.getControlValue("vACTIVIDADNOMBRE")},nac:gx.falseFn};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[41]={id:41,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV43Display",gxold:"OV43Display",gxvar:"AV43Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV43Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV43Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(40),gx.O.AV43Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV43Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[42]={id:42,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV44Update",gxold:"OV44Update",gxvar:"AV44Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV44Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV44Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(40),gx.O.AV44Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV44Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[43]={id:43,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV45Delete",gxold:"OV45Delete",gxvar:"AV45Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV45Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV45Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(40),gx.O.AV45Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV45Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[44]={id:44,lvl:2,type:"char",len:6,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Actividadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADID",gxz:"Z104ActividadId",gxold:"O104ActividadId",gxvar:"A104ActividadId",ucs:[],op:[45],ip:[45,44],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A104ActividadId=n)},v2z:function(n){n!==undefined&&(gx.O.Z104ActividadId=n)},v2c:function(n){gx.fn.setGridControlValue("ACTIVIDADID",n||gx.fn.currentGridRowImpl(40),gx.O.A104ActividadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A104ActividadId=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ACTIVIDADID",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[45]={id:45,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADNOMBRE",gxz:"Z2562ActividadNombre",gxold:"O2562ActividadNombre",gxvar:"A2562ActividadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2562ActividadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2562ActividadNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ACTIVIDADNOMBRE",n||gx.fn.currentGridRowImpl(40),gx.O.A2562ActividadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2562ActividadNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ACTIVIDADNOMBRE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[46]={id:46,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTDEFAULT",gxz:"Z2571ProveedorActDefault",gxold:"O2571ProveedorActDefault",gxvar:"A2571ProveedorActDefault",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2571ProveedorActDefault=n)},v2z:function(n){n!==undefined&&(gx.O.Z2571ProveedorActDefault=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PROVEEDORACTDEFAULT",n||gx.fn.currentGridRowImpl(40),gx.O.A2571ProveedorActDefault);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2571ProveedorActDefault=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORACTDEFAULT",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[47]={id:47,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTIVIDADESTADO",gxz:"Z2572ProveedorActividadEstado",gxold:"O2572ProveedorActividadEstado",gxvar:"A2572ProveedorActividadEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2572ProveedorActividadEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2572ProveedorActividadEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PROVEEDORACTIVIDADESTADO",n||gx.fn.currentGridRowImpl(40),gx.O.A2572ProveedorActividadEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2572ProveedorActividadEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORACTIVIDADESTADO",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[48]={id:48,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTIVIDAD094",gxz:"Z2573ProveedorActividad094",gxold:"O2573ProveedorActividad094",gxvar:"A2573ProveedorActividad094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2573ProveedorActividad094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2573ProveedorActividad094=n)},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTIVIDAD094",n||gx.fn.currentGridRowImpl(40),gx.O.A2573ProveedorActividad094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2573ProveedorActividad094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PROVEEDORACTIVIDAD094",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[49]={id:49,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORACTIVIDAD095",gxz:"Z2574ProveedorActividad095",gxold:"O2574ProveedorActividad095",gxvar:"A2574ProveedorActividad095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2574ProveedorActividad095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2574ProveedorActividad095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PROVEEDORACTIVIDAD095",n||gx.fn.currentGridRowImpl(40),gx.O.A2574ProveedorActividad095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2574ProveedorActividad095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PROVEEDORACTIVIDAD095",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[53]={id:53,fld:"",grid:0};t[54]={id:54,fld:"",grid:0};t[55]={id:55,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[56]={id:56,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A28ProveedorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z28ProveedorId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PROVEEDORID",gx.O.A28ProveedorId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A28ProveedorId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PROVEEDORID",".")},nac:gx.falseFn};t[58]={id:58,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV13OrderedBy",gxold:"OV13OrderedBy",gxvar:"AV13OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV13OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV46ActividadNombre="";this.ZV46ActividadNombre="";this.OV46ActividadNombre="";this.ZV43Display="";this.OV43Display="";this.ZV44Update="";this.OV44Update="";this.ZV45Delete="";this.OV45Delete="";this.Z104ActividadId="";this.O104ActividadId="";this.Z2562ActividadNombre="";this.O2562ActividadNombre="";this.Z2571ProveedorActDefault="";this.O2571ProveedorActDefault="";this.Z2572ProveedorActividadEstado="";this.O2572ProveedorActividadEstado="";this.Z2573ProveedorActividad094="";this.O2573ProveedorActividad094="";this.Z2574ProveedorActividad095=gx.date.nullDate();this.O2574ProveedorActividad095=gx.date.nullDate();this.A28ProveedorId=0;this.Z28ProveedorId=0;this.O28ProveedorId=0;this.AV13OrderedBy=0;this.ZV13OrderedBy=0;this.OV13OrderedBy=0;this.AV46ActividadNombre="";this.AV41GridCurrentPage=0;this.A28ProveedorId=0;this.AV13OrderedBy=0;this.AV7ProveedorId=0;this.AV43Display="";this.AV44Update="";this.AV45Delete="";this.A104ActividadId="";this.A2562ActividadNombre="";this.A2571ProveedorActDefault="";this.A2572ProveedorActividadEstado="";this.A2573ProveedorActividad094="";this.A2574ProveedorActividad095=gx.date.nullDate();this.AV58Pgmname="";this.AV52IsAuthorized_Display=!1;this.AV53IsAuthorized_Update=!1;this.AV54IsAuthorized_Delete=!1;this.Events={e12i92_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e13i92_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e14i92_client:["'DOINSERT'",!0],e15i92_client:["'DOEXPORT'",!0],e19i92_client:["ENTER",!0],e20i92_client:["CANCEL",!0],e11i91_client:["'DOEXPORTREPORT'",!1]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV53IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV54IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV46ActividadNombre",fld:"vACTIVIDADNOMBRE",pic:"@!"},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV58Pgmname",fld:"vPGMNAME",pic:""},{av:"A28ProveedorId",fld:"PROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"}],[{av:"AV41GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV42GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV53IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV54IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV58Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:"PROVEEDORID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV46ActividadNombre",fld:"vACTIVIDADNOMBRE",pic:"@!"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV46ActividadNombre",fld:"vACTIVIDADNOMBRE",pic:"@!"},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV58Pgmname",fld:"vPGMNAME",pic:""},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV53IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV54IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"A28ProveedorId",fld:"PROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV46ActividadNombre",fld:"vACTIVIDADNOMBRE",pic:"@!"},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV58Pgmname",fld:"vPGMNAME",pic:""},{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV53IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV54IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"A28ProveedorId",fld:"PROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV52IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"A28ProveedorId",fld:"PROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A104ActividadId",fld:"ACTIVIDADID",pic:"",hsh:!0},{av:"AV53IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV54IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}],[{av:"AV43Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV44Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV45Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"AV7ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A104ActividadId",fld:"ACTIVIDADID",pic:"",hsh:!0}],[]];this.EvtParms["'DOEXPORT'"]=[[],[]];this.EvtParms["'DOEXPORTREPORT'"]=[[],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"}]];this.EvtParms.VALID_ACTIVIDADID=[[{av:"A2562ActividadNombre",fld:"ACTIVIDADNOMBRE",pic:"@!"},{av:"A104ActividadId",fld:"ACTIVIDADID",pic:"",hsh:!0}],[{av:"A2562ActividadNombre",fld:"ACTIVIDADNOMBRE",pic:"@!"}]];this.setVCMap("AV58Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7ProveedorId","vPROVEEDORID",0,"int",15,0);this.setVCMap("AV52IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV53IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV54IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV7ProveedorId","vPROVEEDORID",0,"int",15,0);this.setVCMap("AV58Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV52IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV53IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV54IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV7ProveedorId","vPROVEEDORID",0,"int",15,0);this.setVCMap("AV58Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV52IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV53IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV54IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);r.addRefreshingVar(this.GXValidFnc[34]);r.addRefreshingVar(this.GXValidFnc[58]);r.addRefreshingVar({rfrVar:"AV7ProveedorId"});r.addRefreshingVar({rfrVar:"AV58Pgmname"});r.addRefreshingVar({rfrVar:"AV52IsAuthorized_Display"});r.addRefreshingVar({rfrVar:"AV53IsAuthorized_Update"});r.addRefreshingVar({rfrVar:"AV54IsAuthorized_Delete"});r.addRefreshingVar(this.GXValidFnc[56]);r.addRefreshingParm(this.GXValidFnc[34]);r.addRefreshingParm(this.GXValidFnc[58]);r.addRefreshingParm({rfrVar:"AV7ProveedorId"});r.addRefreshingParm({rfrVar:"AV58Pgmname"});r.addRefreshingParm({rfrVar:"AV52IsAuthorized_Display"});r.addRefreshingParm({rfrVar:"AV53IsAuthorized_Update"});r.addRefreshingParm({rfrVar:"AV54IsAuthorized_Delete"});r.addRefreshingParm(this.GXValidFnc[56]);this.Initialize()})