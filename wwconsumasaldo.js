/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:55:54.20
*/
gx.evt.autoSkip=!1;gx.define("wwconsumasaldo",!1,function(){var n,i,u,t,r;this.ServerClass="wwconsumasaldo";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV87Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV80IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV81IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV82IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV6WWPContext=gx.fn.getControlValue("vWWPCONTEXT");this.Gx_date=gx.fn.getDateValue("vTODAY");this.AV87Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV80IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV81IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV82IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.Valid_Consysdebe=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Consysdebe",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("CONSYSDEBE",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Consyshaber=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Consyshaber",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("CONSYSHABER",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11sb2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12sb2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13sb2_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e14sb2_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e18sb2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e19sb2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,62,63,64];this.GXLastCtrlId=64;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwconsumasaldo",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit("Display",42,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Update",43,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Delete",44,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit(3113,45,"CONSYSUSUID","Usuario","","ConSySUsuId","int",0,"px",11,11,"right",null,[],3113,"ConSySUsuId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs hidden-sm hidden-md hidden-lg");i.addSingleLineEdit(3115,46,"CONSYSANIO","Año","","ConSySAnio","int",0,"px",4,4,"right",null,[],3115,"ConSySAnio",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(3116,47,"CONSYSMES","Mes","ConSySMes","int",null,0,!0,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(3114,48,"CONSYSPLANCUENTAID","Cta. Cont.","","ConSySPlanCuentaId","int",0,"px",10,10,"right",null,[],3114,"ConSySPlanCuentaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3117,49,"CONSYSPLANCUENTANOMBRE","Plan Cuenta","","ConSySPlanCuentaNombre","char",0,"px",100,80,"left",null,[],3117,"ConSySPlanCuentaNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(3122,50,"CONSYSPLANCUENTAPADRE","Padre","","ConSySPlanCuentaPadre","int",0,"px",10,10,"right",null,[],3122,"ConSySPlanCuentaPadre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3123,51,"CONSYSPLANCUENTANIVEL","Nivel","","ConSySPlanCuentaNivel","int",0,"px",1,1,"right",null,[],3123,"ConSySPlanCuentaNivel",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(3124,52,"CONSYSPLANCUENTAIMPUTA","Imputa","ConSySPlanCuentaImputa","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(3125,53,"CONSYSPLANCUENTATIPOCTA","Tipo Cta.","","ConSySPlanCuentaTipoCta","char",0,"px",3,3,"left",null,[],3125,"ConSySPlanCuentaTipoCta",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3126,54,"CONSYSPLANCUENTATIPO","Tipo","","ConSySPlanCuentaTipo","char",0,"px",3,3,"left",null,[],3126,"ConSySPlanCuentaTipo",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3118,55,"CONSYSDEBE","Debe","","ConSySDebe","decimal",0,"px",13,13,"right",null,[],3118,"ConSySDebe",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3119,56,"CONSYSHABER","Haber","","ConSySHaber","decimal",0,"px",13,13,"right",null,[],3119,"ConSySHaber",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3120,57,"CONSYSSALDO","Saldo","","ConSySSaldo","decimal",0,"px",13,13,"right",null,[],3120,"ConSySSaldo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3121,58,"CONSYSFECHAHORA","Fecha Hora","","ConSySFechaHora","dtime",0,"px",14,14,"right",null,[],3121,"ConSySFechaHora",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,61,28,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV41GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV41GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV41GridCurrentPage)});t.addV2CFunction("AV42GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV42GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV42GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11sb2_client);t.addEventHandler("ChangeRowsPerPage",this.e12sb2_client);this.setUserControl(t);this.INNEWWINDOW1Container=gx.uc.getNew(this,65,28,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");r=this.INNEWWINDOW1Container;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setDynProp("Width","Width","50","str");r.setDynProp("Height","Height","50","str");r.setProp("Name","Name","","str");r.setDynProp("Target","Target","","str");r.setProp("Fullscreen","Fullscreen",!1,"bool");r.setProp("Location","Location",!0,"bool");r.setProp("MenuBar","Menubar",!0,"bool");r.setProp("Resizable","Resizable",!0,"bool");r.setProp("Scrollbars","Scrollbars",!0,"bool");r.setProp("TitleBar","Titlebar",!0,"bool");r.setProp("ToolBar","Toolbar",!0,"bool");r.setProp("directories","Directories",!0,"bool");r.setProp("status","Status",!0,"bool");r.setProp("copyhistory","Copyhistory",!0,"bool");r.setProp("top","Top","5","str");r.setProp("left","Left","5","str");r.setProp("fitscreen","Fitscreen",!1,"bool");r.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");r.setProp("Targets","Targets","","str");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNEXPORT",grid:0,evt:"e13sb2_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORTREPORT",grid:0,evt:"e14sb2_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"TABLEFILTERS",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPCONSYSANIO",gxz:"ZV76pConSySAnio",gxold:"OV76pConSySAnio",gxvar:"AV76pConSySAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV76pConSySAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV76pConSySAnio=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPCONSYSANIO",gx.O.AV76pConSySAnio,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV76pConSySAnio=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPCONSYSANIO",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPCONSYSMES",gxz:"ZV77pConSySMes",gxold:"OV77pConSySMes",gxvar:"AV77pConSySMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV77pConSySMes=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV77pConSySMes=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vPCONSYSMES",gx.O.AV77pConSySMes)},c2v:function(){this.val()!==undefined&&(gx.O.AV77pConSySMes=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPCONSYSMES",".")},nac:gx.falseFn};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[42]={id:42,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV45Display",gxold:"OV45Display",gxvar:"AV45Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV45Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV45Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(41),gx.O.AV45Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV45Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV46Update",gxold:"OV46Update",gxvar:"AV46Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV46Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV46Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(41),gx.O.AV46Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV46Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV47Delete",gxold:"OV47Delete",gxvar:"AV47Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV47Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV47Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(41),gx.O.AV47Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV47Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSUSUID",gxz:"Z3113ConSySUsuId",gxold:"O3113ConSySUsuId",gxvar:"A3113ConSySUsuId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3113ConSySUsuId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3113ConSySUsuId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CONSYSUSUID",n||gx.fn.currentGridRowImpl(41),gx.O.A3113ConSySUsuId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3113ConSySUsuId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CONSYSUSUID",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSANIO",gxz:"Z3115ConSySAnio",gxold:"O3115ConSySAnio",gxvar:"A3115ConSySAnio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3115ConSySAnio=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3115ConSySAnio=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CONSYSANIO",n||gx.fn.currentGridRowImpl(41),gx.O.A3115ConSySAnio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3115ConSySAnio=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CONSYSANIO",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSMES",gxz:"Z3116ConSySMes",gxold:"O3116ConSySMes",gxvar:"A3116ConSySMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3116ConSySMes=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3116ConSySMes=gx.num.intval(n))},v2c:function(n){gx.fn.setGridComboBoxValue("CONSYSMES",n||gx.fn.currentGridRowImpl(41),gx.O.A3116ConSySMes);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3116ConSySMes=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CONSYSMES",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSPLANCUENTAID",gxz:"Z3114ConSySPlanCuentaId",gxold:"O3114ConSySPlanCuentaId",gxvar:"A3114ConSySPlanCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3114ConSySPlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3114ConSySPlanCuentaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CONSYSPLANCUENTAID",n||gx.fn.currentGridRowImpl(41),gx.O.A3114ConSySPlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3114ConSySPlanCuentaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CONSYSPLANCUENTAID",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSPLANCUENTANOMBRE",gxz:"Z3117ConSySPlanCuentaNombre",gxold:"O3117ConSySPlanCuentaNombre",gxvar:"A3117ConSySPlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3117ConSySPlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3117ConSySPlanCuentaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CONSYSPLANCUENTANOMBRE",n||gx.fn.currentGridRowImpl(41),gx.O.A3117ConSySPlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3117ConSySPlanCuentaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CONSYSPLANCUENTANOMBRE",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSPLANCUENTAPADRE",gxz:"Z3122ConSySPlanCuentaPadre",gxold:"O3122ConSySPlanCuentaPadre",gxvar:"A3122ConSySPlanCuentaPadre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3122ConSySPlanCuentaPadre=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3122ConSySPlanCuentaPadre=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CONSYSPLANCUENTAPADRE",n||gx.fn.currentGridRowImpl(41),gx.O.A3122ConSySPlanCuentaPadre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3122ConSySPlanCuentaPadre=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CONSYSPLANCUENTAPADRE",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSPLANCUENTANIVEL",gxz:"Z3123ConSySPlanCuentaNivel",gxold:"O3123ConSySPlanCuentaNivel",gxvar:"A3123ConSySPlanCuentaNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3123ConSySPlanCuentaNivel=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3123ConSySPlanCuentaNivel=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CONSYSPLANCUENTANIVEL",n||gx.fn.currentGridRowImpl(41),gx.O.A3123ConSySPlanCuentaNivel,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3123ConSySPlanCuentaNivel=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CONSYSPLANCUENTANIVEL",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSPLANCUENTAIMPUTA",gxz:"Z3124ConSySPlanCuentaImputa",gxold:"O3124ConSySPlanCuentaImputa",gxvar:"A3124ConSySPlanCuentaImputa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3124ConSySPlanCuentaImputa=n)},v2z:function(n){n!==undefined&&(gx.O.Z3124ConSySPlanCuentaImputa=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CONSYSPLANCUENTAIMPUTA",n||gx.fn.currentGridRowImpl(41),gx.O.A3124ConSySPlanCuentaImputa);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3124ConSySPlanCuentaImputa=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CONSYSPLANCUENTAIMPUTA",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSPLANCUENTATIPOCTA",gxz:"Z3125ConSySPlanCuentaTipoCta",gxold:"O3125ConSySPlanCuentaTipoCta",gxvar:"A3125ConSySPlanCuentaTipoCta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3125ConSySPlanCuentaTipoCta=n)},v2z:function(n){n!==undefined&&(gx.O.Z3125ConSySPlanCuentaTipoCta=n)},v2c:function(n){gx.fn.setGridControlValue("CONSYSPLANCUENTATIPOCTA",n||gx.fn.currentGridRowImpl(41),gx.O.A3125ConSySPlanCuentaTipoCta,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3125ConSySPlanCuentaTipoCta=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CONSYSPLANCUENTATIPOCTA",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[54]={id:54,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSPLANCUENTATIPO",gxz:"Z3126ConSySPlanCuentaTipo",gxold:"O3126ConSySPlanCuentaTipo",gxvar:"A3126ConSySPlanCuentaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3126ConSySPlanCuentaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z3126ConSySPlanCuentaTipo=n)},v2c:function(n){gx.fn.setGridControlValue("CONSYSPLANCUENTATIPO",n||gx.fn.currentGridRowImpl(41),gx.O.A3126ConSySPlanCuentaTipo,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3126ConSySPlanCuentaTipo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CONSYSPLANCUENTATIPO",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[55]={id:55,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Consysdebe,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSDEBE",gxz:"Z3118ConSySDebe",gxold:"O3118ConSySDebe",gxvar:"A3118ConSySDebe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3118ConSySDebe=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3118ConSySDebe=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CONSYSDEBE",n||gx.fn.currentGridRowImpl(41),gx.O.A3118ConSySDebe,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3118ConSySDebe=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CONSYSDEBE",n||gx.fn.currentGridRowImpl(41),".",",")},nac:gx.falseFn};n[56]={id:56,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Consyshaber,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSHABER",gxz:"Z3119ConSySHaber",gxold:"O3119ConSySHaber",gxvar:"A3119ConSySHaber",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3119ConSySHaber=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3119ConSySHaber=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CONSYSHABER",n||gx.fn.currentGridRowImpl(41),gx.O.A3119ConSySHaber,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3119ConSySHaber=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CONSYSHABER",n||gx.fn.currentGridRowImpl(41),".",",")},nac:gx.falseFn};n[57]={id:57,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSSALDO",gxz:"Z3120ConSySSaldo",gxold:"O3120ConSySSaldo",gxvar:"A3120ConSySSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3120ConSySSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3120ConSySSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CONSYSSALDO",n||gx.fn.currentGridRowImpl(41),gx.O.A3120ConSySSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3120ConSySSaldo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CONSYSSALDO",n||gx.fn.currentGridRowImpl(41),".",",")},nac:gx.falseFn};n[58]={id:58,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONSYSFECHAHORA",gxz:"Z3121ConSySFechaHora",gxold:"O3121ConSySFechaHora",gxvar:"A3121ConSySFechaHora",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3121ConSySFechaHora=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3121ConSySFechaHora=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CONSYSFECHAHORA",n||gx.fn.currentGridRowImpl(41),gx.O.A3121ConSySFechaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3121ConSySFechaHora=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CONSYSFECHAHORA",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.AV76pConSySAnio=0;this.ZV76pConSySAnio=0;this.OV76pConSySAnio=0;this.AV77pConSySMes=0;this.ZV77pConSySMes=0;this.OV77pConSySMes=0;this.ZV45Display="";this.OV45Display="";this.ZV46Update="";this.OV46Update="";this.ZV47Delete="";this.OV47Delete="";this.Z3113ConSySUsuId=0;this.O3113ConSySUsuId=0;this.Z3115ConSySAnio=0;this.O3115ConSySAnio=0;this.Z3116ConSySMes=0;this.O3116ConSySMes=0;this.Z3114ConSySPlanCuentaId=0;this.O3114ConSySPlanCuentaId=0;this.Z3117ConSySPlanCuentaNombre="";this.O3117ConSySPlanCuentaNombre="";this.Z3122ConSySPlanCuentaPadre=0;this.O3122ConSySPlanCuentaPadre=0;this.Z3123ConSySPlanCuentaNivel=0;this.O3123ConSySPlanCuentaNivel=0;this.Z3124ConSySPlanCuentaImputa="";this.O3124ConSySPlanCuentaImputa="";this.Z3125ConSySPlanCuentaTipoCta="";this.O3125ConSySPlanCuentaTipoCta="";this.Z3126ConSySPlanCuentaTipo="";this.O3126ConSySPlanCuentaTipo="";this.Z3118ConSySDebe=0;this.O3118ConSySDebe=0;this.Z3119ConSySHaber=0;this.O3119ConSySHaber=0;this.Z3120ConSySSaldo=0;this.O3120ConSySSaldo=0;this.Z3121ConSySFechaHora=gx.date.nullDate();this.O3121ConSySFechaHora=gx.date.nullDate();this.AV76pConSySAnio=0;this.AV77pConSySMes=0;this.AV41GridCurrentPage=0;this.AV45Display="";this.AV46Update="";this.AV47Delete="";this.A3113ConSySUsuId=0;this.A3115ConSySAnio=0;this.A3116ConSySMes=0;this.A3114ConSySPlanCuentaId=0;this.A3117ConSySPlanCuentaNombre="";this.A3122ConSySPlanCuentaPadre=0;this.A3123ConSySPlanCuentaNivel=0;this.A3124ConSySPlanCuentaImputa="";this.A3125ConSySPlanCuentaTipoCta="";this.A3126ConSySPlanCuentaTipo="";this.A3118ConSySDebe=0;this.A3119ConSySHaber=0;this.A3120ConSySSaldo=0;this.A3121ConSySFechaHora=gx.date.nullDate();this.AV87Pgmname="";this.AV80IsAuthorized_Display=!1;this.AV81IsAuthorized_Update=!1;this.AV82IsAuthorized_Delete=!1;this.AV6WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.Gx_date=gx.date.nullDate();this.Events={e11sb2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12sb2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13sb2_client:["'DOEXPORT'",!0],e14sb2_client:["'DOEXPORTREPORT'",!0],e18sb2_client:["ENTER",!0],e19sb2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV87Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV80IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV81IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV82IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV6WWPContext",fld:"vWWPCONTEXT",pic:"",hsh:!0},{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0}],[{av:"AV6WWPContext",fld:"vWWPCONTEXT",pic:"",hsh:!0},{av:"AV41GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV42GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV80IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV81IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV82IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0},{av:"AV87Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV76pConSySAnio",fld:"vPCONSYSANIO",pic:"ZZZ9"},{ctrl:"vPCONSYSMES"},{av:"AV77pConSySMes",fld:"vPCONSYSMES",pic:"ZZZ9"},{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV87Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV80IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV81IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV82IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV6WWPContext",fld:"vWWPCONTEXT",pic:"",hsh:!0},{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV87Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV80IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV81IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV82IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV6WWPContext",fld:"vWWPCONTEXT",pic:"",hsh:!0},{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV87Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV80IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV81IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV82IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV6WWPContext",fld:"vWWPCONTEXT",pic:"",hsh:!0},{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV80IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A3113ConSySUsuId",fld:"CONSYSUSUID",pic:"ZZZZZZZZZZ9"},{av:"A3114ConSySPlanCuentaId",fld:"CONSYSPLANCUENTAID",pic:"ZZZZZZZZZ9"},{av:"AV81IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV82IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV45Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV46Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV47Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOEXPORT'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV87Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV80IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV81IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV82IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV6WWPContext",fld:"vWWPCONTEXT",pic:"",hsh:!0},{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0},{ctrl:"vPCONSYSMES"},{av:"AV77pConSySMes",fld:"vPCONSYSMES",pic:"ZZZ9"},{av:"AV76pConSySAnio",fld:"vPCONSYSANIO",pic:"ZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV87Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV80IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV81IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV82IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV6WWPContext",fld:"vWWPCONTEXT",pic:"",hsh:!0},{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0},{av:"AV41GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV42GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV87Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV80IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV81IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV82IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV6WWPContext",fld:"vWWPCONTEXT",pic:"",hsh:!0},{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0},{ctrl:"vPCONSYSMES"},{av:"AV77pConSySMes",fld:"vPCONSYSMES",pic:"ZZZ9"},{av:"AV76pConSySAnio",fld:"vPCONSYSANIO",pic:"ZZZ9"}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV87Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV80IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV81IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV82IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV6WWPContext",fld:"vWWPCONTEXT",pic:"",hsh:!0},{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0},{av:"AV41GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV42GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.VALID_CONSYSDEBE=[[],[]];this.EvtParms.VALID_CONSYSHABER=[[],[]];this.setVCMap("AV87Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV80IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV81IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV82IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV6WWPContext","vWWPCONTEXT",0,"WWPBaseObjectsWWPContext",0,0);this.setVCMap("Gx_date","vTODAY",0,"date",8,0);this.setVCMap("AV87Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV80IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV81IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV82IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV87Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV80IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV81IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV82IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);i.addRefreshingVar({rfrVar:"AV87Pgmname"});i.addRefreshingVar({rfrVar:"AV80IsAuthorized_Display"});i.addRefreshingVar({rfrVar:"AV81IsAuthorized_Update"});i.addRefreshingVar({rfrVar:"AV82IsAuthorized_Delete"});i.addRefreshingVar({rfrVar:"AV6WWPContext"});i.addRefreshingVar({rfrVar:"Gx_date"});i.addRefreshingParm({rfrVar:"AV87Pgmname"});i.addRefreshingParm({rfrVar:"AV80IsAuthorized_Display"});i.addRefreshingParm({rfrVar:"AV81IsAuthorized_Update"});i.addRefreshingParm({rfrVar:"AV82IsAuthorized_Delete"});i.addRefreshingParm({rfrVar:"AV6WWPContext"});i.addRefreshingParm({rfrVar:"Gx_date"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwconsumasaldo)})