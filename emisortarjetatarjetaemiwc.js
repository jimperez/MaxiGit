/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:9:13.7
*/
gx.evt.autoSkip=!1;gx.define("emisortarjetatarjetaemiwc",!0,function(n){var t,r,u,i;this.ServerClass="emisortarjetatarjetaemiwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A1030EmisorTrjNombre=gx.fn.getControlValue("EMISORTRJNOMBRE");this.AV73Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV70IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV58IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV57IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV7EmisorTrjId=gx.fn.getIntegerValue("vEMISORTRJID",".");this.AV7EmisorTrjId=gx.fn.getIntegerValue("vEMISORTRJID",".");this.AV73Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV70IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV58IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV57IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.Valid_Trjid=function(){var n=gx.fn.currentGridRowImpl(38);return this.validCliEvt("Valid_Trjid",38,function(){try{if(gx.fn.currentGridRowImpl(38)===0)return!0;var n=gx.util.balloon.getNew("TRJID",gx.fn.currentGridRowImpl(38));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjnom=function(){var n=gx.fn.currentGridRowImpl(38);return this.validCliEvt("Valid_Trjnom",38,function(){try{if(gx.fn.currentGridRowImpl(38)===0)return!0;var n=gx.util.balloon.getNew("TRJNOM",gx.fn.currentGridRowImpl(38));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tarjetaemiplancuentaid=function(){var n=gx.fn.currentGridRowImpl(38);return this.validCliEvt("Valid_Tarjetaemiplancuentaid",38,function(){try{if(gx.fn.currentGridRowImpl(38)===0)return!0;var n=gx.util.balloon.getNew("TARJETAEMIPLANCUENTAID",gx.fn.currentGridRowImpl(38));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjid=function(){return this.validCliEvt("Valid_Emisortrjid",0,function(){try{var n=gx.util.balloon.getNew("EMISORTRJID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11dk2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12dk2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13dk2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e17dk2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18dk2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,44,45,46,47,48,49,51,52,53,54];this.GXLastCtrlId=54;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",38,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"emisortarjetatarjetaemiwc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Display",39,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Update",40,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Delete",41,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit(96,42,"TRJID","Ide. Tarjeta","","TrjId","int",0,"px",4,4,"right",null,[],96,"TrjId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(849,43,"TRJNOM","Tarjeta","","TrjNom","svchar",0,"px",64,64,"left",null,[],849,"TrjNom",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(851,44,"TRJEST","Estado","TrjEst","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(1524,45,"TARJETAEMINOMBRE","Tarjeta Emisor","","TarjetaEmiNombre","svchar",0,"px",64,64,"left",null,[],1524,"TarjetaEmiNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(3021,46,"TARJETAEMIPLANCUENTAID","Cuenta Contable","","TarjetaEmiPlanCuentaId","int",0,"px",10,10,"right",null,[],3021,"TarjetaEmiPlanCuentaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3022,47,"TARJETAEMIPLANCUENTANOMBRE","Plan Cuenta","","TarjetaEmiPlanCuentaNombre","svchar",0,"px",64,64,"left",null,[],3022,"TarjetaEmiPlanCuentaNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setProp("Gx Control Type","Gxcontroltype","","int");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,50,32,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV41GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV41GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV41GridCurrentPage)});i.addV2CFunction("AV42GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV42GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV42GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11dk2_client);i.addEventHandler("ChangeRowsPerPage",this.e12dk2_client);this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"TABLEACTIONS",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"BTNINSERT",grid:0,evt:"e13dk2_client"};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"TABLERIGHTHEADER",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"TABLEFILTERS",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTRJNOM",gxz:"ZV35TrjNom",gxold:"OV35TrjNom",gxvar:"AV35TrjNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV35TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.ZV35TrjNom=n)},v2c:function(){gx.fn.setControlValue("vTRJNOM",gx.O.AV35TrjNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV35TrjNom=this.val())},val:function(){return gx.fn.getControlValue("vTRJNOM")},nac:gx.falseFn};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[39]={id:39,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV31Display",gxold:"OV31Display",gxvar:"AV31Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV31Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV31Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(38),gx.O.AV31Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV31Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[40]={id:40,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV30Update",gxold:"OV30Update",gxvar:"AV30Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV30Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV30Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(38),gx.O.AV30Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV30Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[41]={id:41,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV29Delete",gxold:"OV29Delete",gxvar:"AV29Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV29Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV29Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(38),gx.O.AV29Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV29Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[42]={id:42,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Trjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJID",gxz:"Z96TrjId",gxold:"O96TrjId",gxvar:"A96TrjId",ucs:[],op:[45,43,44,47],ip:[45,44,47,43,42,46,54],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A96TrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z96TrjId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRJID",n||gx.fn.currentGridRowImpl(38),gx.O.A96TrjId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A96TrjId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRJID",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};t[43]={id:43,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Trjnom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJNOM",gxz:"Z849TrjNom",gxold:"O849TrjNom",gxvar:"A849TrjNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A849TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z849TrjNom=n)},v2c:function(n){gx.fn.setGridControlValue("TRJNOM",n||gx.fn.currentGridRowImpl(38),gx.O.A849TrjNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A849TrjNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJNOM",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[44]={id:44,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJEST",gxz:"Z851TrjEst",gxold:"O851TrjEst",gxvar:"A851TrjEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A851TrjEst=n)},v2z:function(n){n!==undefined&&(gx.O.Z851TrjEst=n)},v2c:function(n){gx.fn.setGridComboBoxValue("TRJEST",n||gx.fn.currentGridRowImpl(38),gx.O.A851TrjEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A851TrjEst=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJEST",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[45]={id:45,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMINOMBRE",gxz:"Z1524TarjetaEmiNombre",gxold:"O1524TarjetaEmiNombre",gxvar:"A1524TarjetaEmiNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1524TarjetaEmiNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1524TarjetaEmiNombre=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMINOMBRE",n||gx.fn.currentGridRowImpl(38),gx.O.A1524TarjetaEmiNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1524TarjetaEmiNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMINOMBRE",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[46]={id:46,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Tarjetaemiplancuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMIPLANCUENTAID",gxz:"Z3021TarjetaEmiPlanCuentaId",gxold:"O3021TarjetaEmiPlanCuentaId",gxvar:"A3021TarjetaEmiPlanCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3021TarjetaEmiPlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3021TarjetaEmiPlanCuentaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMIPLANCUENTAID",n||gx.fn.currentGridRowImpl(38),gx.O.A3021TarjetaEmiPlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3021TarjetaEmiPlanCuentaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TARJETAEMIPLANCUENTAID",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};t[47]={id:47,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMIPLANCUENTANOMBRE",gxz:"Z3022TarjetaEmiPlanCuentaNombre",gxold:"O3022TarjetaEmiPlanCuentaNombre",gxvar:"A3022TarjetaEmiPlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3022TarjetaEmiPlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3022TarjetaEmiPlanCuentaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMIPLANCUENTANOMBRE",n||gx.fn.currentGridRowImpl(38),gx.O.A3022TarjetaEmiPlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3022TarjetaEmiPlanCuentaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMIPLANCUENTANOMBRE",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[54]={id:54,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Emisortrjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJID",gxz:"Z97EmisorTrjId",gxold:"O97EmisorTrjId",gxvar:"A97EmisorTrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z97EmisorTrjId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EMISORTRJID",gx.O.A97EmisorTrjId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EMISORTRJID",".")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});this.AV35TrjNom="";this.ZV35TrjNom="";this.OV35TrjNom="";this.ZV31Display="";this.OV31Display="";this.ZV30Update="";this.OV30Update="";this.ZV29Delete="";this.OV29Delete="";this.Z96TrjId=0;this.O96TrjId=0;this.Z849TrjNom="";this.O849TrjNom="";this.Z851TrjEst="";this.O851TrjEst="";this.Z1524TarjetaEmiNombre="";this.O1524TarjetaEmiNombre="";this.Z3021TarjetaEmiPlanCuentaId=0;this.O3021TarjetaEmiPlanCuentaId=0;this.Z3022TarjetaEmiPlanCuentaNombre="";this.O3022TarjetaEmiPlanCuentaNombre="";this.A97EmisorTrjId=0;this.Z97EmisorTrjId=0;this.O97EmisorTrjId=0;this.AV35TrjNom="";this.AV41GridCurrentPage=0;this.A97EmisorTrjId=0;this.AV7EmisorTrjId=0;this.A1030EmisorTrjNombre="";this.AV31Display="";this.AV30Update="";this.AV29Delete="";this.A96TrjId=0;this.A849TrjNom="";this.A851TrjEst="";this.A1524TarjetaEmiNombre="";this.A3021TarjetaEmiPlanCuentaId=0;this.A3022TarjetaEmiPlanCuentaNombre="";this.AV73Pgmname="";this.AV70IsAuthorized_Display=!1;this.AV58IsAuthorized_Update=!1;this.AV57IsAuthorized_Delete=!1;this.Events={e11dk2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12dk2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13dk2_client:["'DOINSERT'",!0],e17dk2_client:["ENTER",!0],e18dk2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9"},{av:"AV70IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV58IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV57IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV35TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV73Pgmname",fld:"vPGMNAME",pic:""},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"}],[{av:"AV41GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV42GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV70IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV58IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV57IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV73Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("EMISORTRJID","Visible")',ctrl:"EMISORTRJID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV35TrjNom",fld:"vTRJNOM",pic:"@!"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV35TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV7EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9"},{av:"AV73Pgmname",fld:"vPGMNAME",pic:""},{av:"AV70IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV58IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV57IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV35TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV7EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9"},{av:"AV73Pgmname",fld:"vPGMNAME",pic:""},{av:"AV70IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV58IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV57IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV70IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"AV58IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV57IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}],[{av:"AV31Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV30Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV29Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"AV7EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_EMISORTRJID=[[],[]];this.EvtParms.VALID_TRJID=[[{av:"A1524TarjetaEmiNombre",fld:"TARJETAEMINOMBRE",pic:"@!"},{ctrl:"TRJEST"},{av:"A851TrjEst",fld:"TRJEST",pic:"@!"},{av:"A3022TarjetaEmiPlanCuentaNombre",fld:"TARJETAEMIPLANCUENTANOMBRE",pic:"@!"},{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"A3021TarjetaEmiPlanCuentaId",fld:"TARJETAEMIPLANCUENTAID",pic:"ZZZZZZZZZ9"},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"}],[{av:"A1524TarjetaEmiNombre",fld:"TARJETAEMINOMBRE",pic:"@!"},{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"},{ctrl:"TRJEST"},{av:"A851TrjEst",fld:"TRJEST",pic:"@!"},{av:"A3022TarjetaEmiPlanCuentaNombre",fld:"TARJETAEMIPLANCUENTANOMBRE",pic:"@!"}]];this.EvtParms.VALID_TRJNOM=[[],[]];this.EvtParms.VALID_TARJETAEMIPLANCUENTAID=[[],[]];this.setVCMap("A1030EmisorTrjNombre","EMISORTRJNOMBRE",0,"svchar",64,0);this.setVCMap("AV73Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV70IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV58IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV57IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV7EmisorTrjId","vEMISORTRJID",0,"int",4,0);this.setVCMap("AV7EmisorTrjId","vEMISORTRJID",0,"int",4,0);this.setVCMap("AV73Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV70IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV58IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV57IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV7EmisorTrjId","vEMISORTRJID",0,"int",4,0);this.setVCMap("AV73Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV70IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV58IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV57IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);r.addRefreshingVar(this.GXValidFnc[32]);r.addRefreshingVar({rfrVar:"AV7EmisorTrjId"});r.addRefreshingVar({rfrVar:"AV73Pgmname"});r.addRefreshingVar({rfrVar:"AV70IsAuthorized_Display"});r.addRefreshingVar({rfrVar:"AV58IsAuthorized_Update"});r.addRefreshingVar({rfrVar:"AV57IsAuthorized_Delete"});r.addRefreshingVar(this.GXValidFnc[54]);r.addRefreshingParm(this.GXValidFnc[32]);r.addRefreshingParm({rfrVar:"AV7EmisorTrjId"});r.addRefreshingParm({rfrVar:"AV73Pgmname"});r.addRefreshingParm({rfrVar:"AV70IsAuthorized_Display"});r.addRefreshingParm({rfrVar:"AV58IsAuthorized_Update"});r.addRefreshingParm({rfrVar:"AV57IsAuthorized_Delete"});r.addRefreshingParm(this.GXValidFnc[54]);this.Initialize()})