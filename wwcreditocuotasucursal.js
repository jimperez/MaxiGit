/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:50:55.63
*/
gx.evt.autoSkip=!1;gx.define("wwcreditocuotasucursal",!1,function(){var n,r,u,t,i;this.ServerClass="wwcreditocuotasucursal";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A1040PlanNombre=gx.fn.getControlValue("PLANNOMBRE");this.A2138CreditoCuotaCosto=gx.fn.getDecimalValue("CREDITOCUOTACOSTO",".",",");this.A2139CreditoCuotaDesde=gx.fn.getDateValue("CREDITOCUOTADESDE");this.A2140CreditoCuotaHasta=gx.fn.getDateValue("CREDITOCUOTAHASTA");this.AV43Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV38IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV43Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV38IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY")};this.Valid_Creditoid=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Creditoid",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("CREDITOID",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditodescripcion=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Creditodescripcion",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("CREDITODESCRIPCION",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuota=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Creditocuota",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("CREDITOCUOTA",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuotanombre=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Creditocuotanombre",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("CREDITOCUOTANOMBRE",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Entidadid=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Entidadid",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("ENTIDADID",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Sucursalid=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Sucursalid",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("SUCURSALID",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Sucursalnombre=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Sucursalnombre",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("SUCURSALNOMBRE",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e195f2_client=function(){return this.clearMessages(),this.call("associationwwcreditocuotasucursalarticuloplancredito.aspx",[this.A266CreditoId,this.A267CreditoCuota,this.A44EntidadId,this.A45SucursalId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e115f2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e125f2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e135f2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e145f2_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e155f2_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e205f2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e215f2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,61,62,63];this.GXLastCtrlId=63;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwcreditocuotasucursal",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Display",45,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit(266,46,"CREDITOID","Ide.","","CreditoId","int",0,"px",8,8,"right",null,[],266,"CreditoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2137,47,"CREDITODESCRIPCION","Descripcion","","CreditoDescripcion","char",0,"px",30,30,"left",null,[],2137,"CreditoDescripcion",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(2141,48,"CREDITOESTADO","Estado","CreditoEstado","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(267,49,"CREDITOCUOTA","Cuota","","CreditoCuota","int",0,"px",4,4,"right",null,[],267,"CreditoCuota",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2136,50,"CREDITOCUOTANOMBRE","Credito","","CreditoCuotaNombre","char",0,"px",100,80,"left",null,[],2136,"CreditoCuotaNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(44,51,"ENTIDADID","Ide.","","EntidadId","int",0,"px",2,2,"right",null,[],44,"EntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(373,52,"ENTIDADNOMBRE","Empresa","","EntidadNombre","svchar",0,"px",64,64,"left",null,[],373,"EntidadNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(45,53,"SUCURSALID","Ide.","","SucursalId","int",0,"px",4,4,"right",null,[],45,"SucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(374,54,"SUCURSALNOMBRE","Sucursal","","SucursalNombre","svchar",0,"px",64,64,"left",null,[],374,"SucursalNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2700,55,"CREDITOCUOTASUCURSALDESCRIPCION","Credito - Sucursal","","CreditoCuotaSucursalDescripcion","char",0,"px",100,80,"left",null,[],2700,"CreditoCuotaSucursalDescripcion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(2142,56,"CREDITOSUCURSALESTADO","Estado","CreditoSucursalEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");r.addBitmap("&Asociararticulo","vASOCIARARTICULO",57,0,"px",17,"px","e195f2_client","","","ActionBaseColorAttribute","WWActionColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,60,31,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV16GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV16GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV16GridCurrentPage)});t.addV2CFunction("AV17GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV17GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV17GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e115f2_client);t.addEventHandler("ChangeRowsPerPage",this.e125f2_client);this.setUserControl(t);this.INNEWWINDOW1Container=gx.uc.getNew(this,64,31,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");i=this.INNEWWINDOW1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setDynProp("Width","Width","50","str");i.setDynProp("Height","Height","50","str");i.setProp("Name","Name","","str");i.setDynProp("Target","Target","","str");i.setProp("Fullscreen","Fullscreen",!1,"bool");i.setProp("Location","Location",!0,"bool");i.setProp("MenuBar","Menubar",!0,"bool");i.setProp("Resizable","Resizable",!0,"bool");i.setProp("Scrollbars","Scrollbars",!0,"bool");i.setProp("TitleBar","Titlebar",!0,"bool");i.setProp("ToolBar","Toolbar",!0,"bool");i.setProp("directories","Directories",!0,"bool");i.setProp("status","Status",!0,"bool");i.setProp("copyhistory","Copyhistory",!0,"bool");i.setProp("top","Top","5","str");i.setProp("left","Left","5","str");i.setProp("fitscreen","Fitscreen",!1,"bool");i.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");i.setProp("Targets","Targets","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e135f2_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORT",grid:0,evt:"e145f2_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTNEXPORTREPORT",grid:0,evt:"e155f2_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"TABLEFILTERS",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSUCURSALNOMBRE",gxz:"ZV25SucursalNombre",gxold:"OV25SucursalNombre",gxvar:"AV25SucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV25SucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV25SucursalNombre=n)},v2c:function(){gx.fn.setControlValue("vSUCURSALNOMBRE",gx.O.AV25SucursalNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV25SucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("vSUCURSALNOMBRE")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vCREDITOCUOTANOMBRE",gxz:"ZV33CreditoCuotaNombre",gxold:"OV33CreditoCuotaNombre",gxvar:"AV33CreditoCuotaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV33CreditoCuotaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV33CreditoCuotaNombre=n)},v2c:function(){gx.fn.setControlValue("vCREDITOCUOTANOMBRE",gx.O.AV33CreditoCuotaNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV33CreditoCuotaNombre=this.val())},val:function(){return gx.fn.getControlValue("vCREDITOCUOTANOMBRE")},nac:gx.falseFn};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[45]={id:45,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV20Display",gxold:"OV20Display",gxvar:"AV20Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV20Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV20Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(44),gx.O.AV20Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV20Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Creditoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOID",gxz:"Z266CreditoId",gxold:"O266CreditoId",gxvar:"A266CreditoId",ucs:[],op:[55,50,47,48,54,52],ip:[55,48,52,54,50,47,49,46,53,51],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A266CreditoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z266CreditoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CREDITOID",n||gx.fn.currentGridRowImpl(44),gx.O.A266CreditoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A266CreditoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CREDITOID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Creditodescripcion,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITODESCRIPCION",gxz:"Z2137CreditoDescripcion",gxold:"O2137CreditoDescripcion",gxvar:"A2137CreditoDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2137CreditoDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2137CreditoDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("CREDITODESCRIPCION",n||gx.fn.currentGridRowImpl(44),gx.O.A2137CreditoDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2137CreditoDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CREDITODESCRIPCION",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOESTADO",gxz:"Z2141CreditoEstado",gxold:"O2141CreditoEstado",gxvar:"A2141CreditoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2141CreditoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2141CreditoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CREDITOESTADO",n||gx.fn.currentGridRowImpl(44),gx.O.A2141CreditoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2141CreditoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CREDITOESTADO",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Creditocuota,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTA",gxz:"Z267CreditoCuota",gxold:"O267CreditoCuota",gxvar:"A267CreditoCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z267CreditoCuota=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTA",n||gx.fn.currentGridRowImpl(44),gx.O.A267CreditoCuota,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CREDITOCUOTA",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Creditocuotanombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTANOMBRE",gxz:"Z2136CreditoCuotaNombre",gxold:"O2136CreditoCuotaNombre",gxvar:"A2136CreditoCuotaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2136CreditoCuotaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2136CreditoCuotaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTANOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A2136CreditoCuotaNombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2136CreditoCuotaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CREDITOCUOTANOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Entidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADID",gxz:"Z44EntidadId",gxold:"O44EntidadId",gxvar:"A44EntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A44EntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z44EntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ENTIDADID",n||gx.fn.currentGridRowImpl(44),gx.O.A44EntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A44EntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ENTIDADID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADNOMBRE",gxz:"Z373EntidadNombre",gxold:"O373EntidadNombre",gxvar:"A373EntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A373EntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z373EntidadNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A373EntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A373EntidadNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Sucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SUCURSALID",gxz:"Z45SucursalId",gxold:"O45SucursalId",gxvar:"A45SucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A45SucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z45SucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("SUCURSALID",n||gx.fn.currentGridRowImpl(44),gx.O.A45SucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A45SucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("SUCURSALID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[54]={id:54,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Sucursalnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SUCURSALNOMBRE",gxz:"Z374SucursalNombre",gxold:"O374SucursalNombre",gxvar:"A374SucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A374SucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z374SucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("SUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A374SucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A374SucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("SUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[55]={id:55,lvl:2,type:"char",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTASUCURSALDESCRIPCION",gxz:"Z2700CreditoCuotaSucursalDescripcion",gxold:"O2700CreditoCuotaSucursalDescripcion",gxvar:"A2700CreditoCuotaSucursalDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2700CreditoCuotaSucursalDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2700CreditoCuotaSucursalDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTASUCURSALDESCRIPCION",n||gx.fn.currentGridRowImpl(44),gx.O.A2700CreditoCuotaSucursalDescripcion,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2700CreditoCuotaSucursalDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CREDITOCUOTASUCURSALDESCRIPCION",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[56]={id:56,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOSUCURSALESTADO",gxz:"Z2142CreditoSucursalEstado",gxold:"O2142CreditoSucursalEstado",gxvar:"A2142CreditoSucursalEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2142CreditoSucursalEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2142CreditoSucursalEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CREDITOSUCURSALESTADO",n||gx.fn.currentGridRowImpl(44),gx.O.A2142CreditoSucursalEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2142CreditoSucursalEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CREDITOSUCURSALESTADO",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[57]={id:57,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vASOCIARARTICULO",gxz:"ZV34AsociarArticulo",gxold:"OV34AsociarArticulo",gxvar:"AV34AsociarArticulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV34AsociarArticulo=n)},v2z:function(n){n!==undefined&&(gx.O.ZV34AsociarArticulo=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vASOCIARARTICULO",n||gx.fn.currentGridRowImpl(44),gx.O.AV34AsociarArticulo,gx.O.AV42Asociararticulo_GXI)},c2v:function(n){gx.O.AV42Asociararticulo_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV34AsociarArticulo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vASOCIARARTICULO",n||gx.fn.currentGridRowImpl(44))},val_GXI:function(n){return gx.fn.getGridControlValue("vASOCIARARTICULO_GXI",n||gx.fn.currentGridRowImpl(44))},gxvar_GXI:"AV42Asociararticulo_GXI",nac:gx.falseFn,evt:"e195f2_client"};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.AV25SucursalNombre="";this.ZV25SucursalNombre="";this.OV25SucursalNombre="";this.AV33CreditoCuotaNombre="";this.ZV33CreditoCuotaNombre="";this.OV33CreditoCuotaNombre="";this.ZV20Display="";this.OV20Display="";this.Z266CreditoId=0;this.O266CreditoId=0;this.Z2137CreditoDescripcion="";this.O2137CreditoDescripcion="";this.Z2141CreditoEstado="";this.O2141CreditoEstado="";this.Z267CreditoCuota=0;this.O267CreditoCuota=0;this.Z2136CreditoCuotaNombre="";this.O2136CreditoCuotaNombre="";this.Z44EntidadId=0;this.O44EntidadId=0;this.Z373EntidadNombre="";this.O373EntidadNombre="";this.Z45SucursalId=0;this.O45SucursalId=0;this.Z374SucursalNombre="";this.O374SucursalNombre="";this.Z2700CreditoCuotaSucursalDescripcion="";this.O2700CreditoCuotaSucursalDescripcion="";this.Z2142CreditoSucursalEstado="";this.O2142CreditoSucursalEstado="";this.ZV34AsociarArticulo="";this.OV34AsociarArticulo="";this.AV25SucursalNombre="";this.AV33CreditoCuotaNombre="";this.AV16GridCurrentPage=0;this.A2140CreditoCuotaHasta=gx.date.nullDate();this.A2139CreditoCuotaDesde=gx.date.nullDate();this.A2138CreditoCuotaCosto=0;this.A1040PlanNombre="";this.A119PlanId=0;this.AV20Display="";this.A266CreditoId=0;this.A2137CreditoDescripcion="";this.A2141CreditoEstado="";this.A267CreditoCuota=0;this.A2136CreditoCuotaNombre="";this.A44EntidadId=0;this.A373EntidadNombre="";this.A45SucursalId=0;this.A374SucursalNombre="";this.A2700CreditoCuotaSucursalDescripcion="";this.A2142CreditoSucursalEstado="";this.AV34AsociarArticulo="";this.AV43Pgmname="";this.AV38IsAuthorized_Display=!1;this.Events={e115f2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e125f2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e135f2_client:["'DOINSERT'",!0],e145f2_client:["'DOEXPORT'",!0],e155f2_client:["'DOEXPORTREPORT'",!0],e205f2_client:["ENTER",!0],e215f2_client:["CANCEL",!0],e195f2_client:["VASOCIARARTICULO.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV25SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV33CreditoCuotaNombre",fld:"vCREDITOCUOTANOMBRE",pic:"@!"},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV38IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}],[{av:"AV16GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV17GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV38IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV25SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV33CreditoCuotaNombre",fld:"vCREDITOCUOTANOMBRE",pic:"@!"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV38IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV25SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV33CreditoCuotaNombre",fld:"vCREDITOCUOTANOMBRE",pic:"@!"},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV38IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV25SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV33CreditoCuotaNombre",fld:"vCREDITOCUOTANOMBRE",pic:"@!"},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV38IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV38IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9",hsh:!0},{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0}],[{av:"AV20Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV34AsociarArticulo",fld:"vASOCIARARTICULO",pic:""},{av:'gx.fn.getCtrlProperty("vASOCIARARTICULO","Tooltiptext")',ctrl:"vASOCIARARTICULO",prop:"Tooltiptext"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9",hsh:!0},{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms["'DOEXPORT'"]=[[{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV25SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV33CreditoCuotaNombre",fld:"vCREDITOCUOTANOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV38IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{av:"AV25SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV33CreditoCuotaNombre",fld:"vCREDITOCUOTANOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV43Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV38IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["VASOCIARARTICULO.CLICK"]=[[{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9",hsh:!0},{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.VALID_CREDITOID=[[{av:"A2700CreditoCuotaSucursalDescripcion",fld:"CREDITOCUOTASUCURSALDESCRIPCION",pic:""},{ctrl:"CREDITOESTADO"},{av:"A2141CreditoEstado",fld:"CREDITOESTADO",pic:"@!"},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"},{av:"A374SucursalNombre",fld:"SUCURSALNOMBRE",pic:"@!"},{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"},{av:"A267CreditoCuota",fld:"CREDITOCUOTA",pic:"ZZZ9",hsh:!0},{av:"A266CreditoId",fld:"CREDITOID",pic:"ZZZZZZZ9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0}],[{av:"A2700CreditoCuotaSucursalDescripcion",fld:"CREDITOCUOTASUCURSALDESCRIPCION",pic:""},{av:"A2136CreditoCuotaNombre",fld:"CREDITOCUOTANOMBRE",pic:"@!"},{av:"A2137CreditoDescripcion",fld:"CREDITODESCRIPCION",pic:"@!"},{ctrl:"CREDITOESTADO"},{av:"A2141CreditoEstado",fld:"CREDITOESTADO",pic:"@!"},{av:"A374SucursalNombre",fld:"SUCURSALNOMBRE",pic:"@!"},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"}]];this.EvtParms.VALID_CREDITODESCRIPCION=[[],[]];this.EvtParms.VALID_CREDITOCUOTA=[[],[]];this.EvtParms.VALID_CREDITOCUOTANOMBRE=[[],[]];this.EvtParms.VALID_ENTIDADID=[[],[]];this.EvtParms.VALID_SUCURSALID=[[],[]];this.EvtParms.VALID_SUCURSALNOMBRE=[[],[]];this.setVCMap("A1040PlanNombre","PLANNOMBRE",0,"svchar",64,0);this.setVCMap("A2138CreditoCuotaCosto","CREDITOCUOTACOSTO",0,"decimal",6,2);this.setVCMap("A2139CreditoCuotaDesde","CREDITOCUOTADESDE",0,"date",8,0);this.setVCMap("A2140CreditoCuotaHasta","CREDITOCUOTAHASTA",0,"date",8,0);this.setVCMap("AV43Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV38IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV43Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV38IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV43Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV38IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);r.addRefreshingVar(this.GXValidFnc[31]);r.addRefreshingVar(this.GXValidFnc[35]);r.addRefreshingVar({rfrVar:"AV43Pgmname"});r.addRefreshingVar({rfrVar:"AV38IsAuthorized_Display"});r.addRefreshingParm(this.GXValidFnc[31]);r.addRefreshingParm(this.GXValidFnc[35]);r.addRefreshingParm({rfrVar:"AV43Pgmname"});r.addRefreshingParm({rfrVar:"AV38IsAuthorized_Display"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwcreditocuotasucursal)})