/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:11:4.75
*/
gx.evt.autoSkip=!1;gx.define("mutualplanmutualplansucursalwc",!0,function(n){var t,r,u,i;this.ServerClass="mutualplanmutualplansucursalwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV67Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV61IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV62IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV63IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV7MutualId=gx.fn.getIntegerValue("vMUTUALID",".");this.AV8MutualPlanId=gx.fn.getIntegerValue("vMUTUALPLANID",".");this.AV7MutualId=gx.fn.getIntegerValue("vMUTUALID",".");this.AV8MutualPlanId=gx.fn.getIntegerValue("vMUTUALPLANID",".");this.AV67Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV61IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV62IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV63IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.Valid_Entidadid=function(){var n=gx.fn.currentGridRowImpl(32);return this.validCliEvt("Valid_Entidadid",32,function(){try{if(gx.fn.currentGridRowImpl(32)===0)return!0;var n=gx.util.balloon.getNew("ENTIDADID",gx.fn.currentGridRowImpl(32));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Sucursalid=function(){var n=gx.fn.currentGridRowImpl(32);return this.validCliEvt("Valid_Sucursalid",32,function(){try{if(gx.fn.currentGridRowImpl(32)===0)return!0;var n=gx.util.balloon.getNew("SUCURSALID",gx.fn.currentGridRowImpl(32));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11h92_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12h92_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13h92_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e17h92_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18h92_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,23,24,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,44,45,46,47,48];this.GXLastCtrlId=48;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",32,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"mutualplanmutualplansucursalwc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Display",33,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Update",34,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Delete",35,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit(44,36,"ENTIDADID","Ide.","","EntidadId","int",0,"px",2,2,"right",null,[],44,"EntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(373,37,"ENTIDADNOMBRE","Empresa","","EntidadNombre","svchar",0,"px",64,64,"left",null,[],373,"EntidadNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(45,38,"SUCURSALID","Ide.","","SucursalId","int",0,"px",4,4,"right",null,[],45,"SucursalId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(374,39,"SUCURSALNOMBRE","Sucursal","","SucursalNombre","svchar",0,"px",64,64,"left",null,[],374,"SucursalNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(2113,40,"MUTUALPLANSUCURSALESTADO","Estado","MutualPlanSucursalEstado","char",null,0,!0,!1,0,"px","WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setProp("Gx Control Type","Gxcontroltype","","int");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,43,33,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV53GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV53GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV53GridCurrentPage)});i.addV2CFunction("AV54GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV54GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV54GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11h92_client);i.addEventHandler("ChangeRowsPerPage",this.e12h92_client);this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"TABLEACTIONS",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"BTNINSERT",grid:0,evt:"e13h92_client"};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"TABLERIGHTHEADER",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[33]={id:33,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV57Display",gxold:"OV57Display",gxvar:"AV57Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV57Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV57Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(32),gx.O.AV57Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV57Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};t[34]={id:34,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV56Update",gxold:"OV56Update",gxvar:"AV56Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV56Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV56Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(32),gx.O.AV56Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV56Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};t[35]={id:35,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV55Delete",gxold:"OV55Delete",gxvar:"AV55Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV55Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV55Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(32),gx.O.AV55Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV55Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};t[36]={id:36,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:this.Valid_Entidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADID",gxz:"Z44EntidadId",gxold:"O44EntidadId",gxvar:"A44EntidadId",ucs:[],op:[39,37],ip:[39,37,38,36],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A44EntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z44EntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ENTIDADID",n||gx.fn.currentGridRowImpl(32),gx.O.A44EntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A44EntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ENTIDADID",n||gx.fn.currentGridRowImpl(32),".")},nac:gx.falseFn};t[37]={id:37,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADNOMBRE",gxz:"Z373EntidadNombre",gxold:"O373EntidadNombre",gxvar:"A373EntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A373EntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z373EntidadNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(32),gx.O.A373EntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A373EntidadNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};t[38]={id:38,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:this.Valid_Sucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SUCURSALID",gxz:"Z45SucursalId",gxold:"O45SucursalId",gxvar:"A45SucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A45SucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z45SucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("SUCURSALID",n||gx.fn.currentGridRowImpl(32),gx.O.A45SucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A45SucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("SUCURSALID",n||gx.fn.currentGridRowImpl(32),".")},nac:gx.falseFn};t[39]={id:39,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SUCURSALNOMBRE",gxz:"Z374SucursalNombre",gxold:"O374SucursalNombre",gxvar:"A374SucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A374SucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z374SucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("SUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(32),gx.O.A374SucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A374SucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("SUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};t[40]={id:40,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MUTUALPLANSUCURSALESTADO",gxz:"Z2113MutualPlanSucursalEstado",gxold:"O2113MutualPlanSucursalEstado",gxvar:"A2113MutualPlanSucursalEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2113MutualPlanSucursalEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2113MutualPlanSucursalEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("MUTUALPLANSUCURSALESTADO",n||gx.fn.currentGridRowImpl(32),gx.O.A2113MutualPlanSucursalEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2113MutualPlanSucursalEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("MUTUALPLANSUCURSALESTADO",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[47]={id:47,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MUTUALID",gxz:"Z160MutualId",gxold:"O160MutualId",gxvar:"A160MutualId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A160MutualId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z160MutualId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("MUTUALID",gx.O.A160MutualId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A160MutualId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("MUTUALID",".")},nac:gx.falseFn};t[48]={id:48,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MUTUALPLANID",gxz:"Z205MutualPlanId",gxold:"O205MutualPlanId",gxvar:"A205MutualPlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A205MutualPlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z205MutualPlanId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("MUTUALPLANID",gx.O.A205MutualPlanId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A205MutualPlanId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("MUTUALPLANID",".")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});this.ZV57Display="";this.OV57Display="";this.ZV56Update="";this.OV56Update="";this.ZV55Delete="";this.OV55Delete="";this.Z44EntidadId=0;this.O44EntidadId=0;this.Z373EntidadNombre="";this.O373EntidadNombre="";this.Z45SucursalId=0;this.O45SucursalId=0;this.Z374SucursalNombre="";this.O374SucursalNombre="";this.Z2113MutualPlanSucursalEstado="";this.O2113MutualPlanSucursalEstado="";this.A160MutualId=0;this.Z160MutualId=0;this.O160MutualId=0;this.A205MutualPlanId=0;this.Z205MutualPlanId=0;this.O205MutualPlanId=0;this.AV53GridCurrentPage=0;this.A160MutualId=0;this.A205MutualPlanId=0;this.AV7MutualId=0;this.AV8MutualPlanId=0;this.AV57Display="";this.AV56Update="";this.AV55Delete="";this.A44EntidadId=0;this.A373EntidadNombre="";this.A45SucursalId=0;this.A374SucursalNombre="";this.A2113MutualPlanSucursalEstado="";this.AV67Pgmname="";this.AV61IsAuthorized_Display=!1;this.AV62IsAuthorized_Update=!1;this.AV63IsAuthorized_Delete=!1;this.Events={e11h92_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12h92_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13h92_client:["'DOINSERT'",!0],e17h92_client:["ENTER",!0],e18h92_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7MutualId",fld:"vMUTUALID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8MutualPlanId",fld:"vMUTUALPLANID",pic:"ZZZZZZZ9"},{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV62IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV63IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV67Pgmname",fld:"vPGMNAME",pic:""},{av:"A160MutualId",fld:"MUTUALID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A205MutualPlanId",fld:"MUTUALPLANID",pic:"ZZZZZZZ9"}],[{av:"AV53GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV54GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV62IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV63IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV67Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7MutualId",fld:"vMUTUALID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8MutualPlanId",fld:"vMUTUALPLANID",pic:"ZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("MUTUALID","Visible")',ctrl:"MUTUALID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("MUTUALPLANID","Visible")',ctrl:"MUTUALPLANID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7MutualId",fld:"vMUTUALID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8MutualPlanId",fld:"vMUTUALPLANID",pic:"ZZZZZZZ9"},{av:"AV67Pgmname",fld:"vPGMNAME",pic:""},{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV62IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV63IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"A160MutualId",fld:"MUTUALID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A205MutualPlanId",fld:"MUTUALPLANID",pic:"ZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7MutualId",fld:"vMUTUALID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8MutualPlanId",fld:"vMUTUALPLANID",pic:"ZZZZZZZ9"},{av:"AV67Pgmname",fld:"vPGMNAME",pic:""},{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV62IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV63IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"A160MutualId",fld:"MUTUALID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A205MutualPlanId",fld:"MUTUALPLANID",pic:"ZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"A160MutualId",fld:"MUTUALID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A205MutualPlanId",fld:"MUTUALPLANID",pic:"ZZZZZZZ9"},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0},{av:"AV62IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV63IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}],[{av:"AV57Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV56Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV55Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"AV7MutualId",fld:"vMUTUALID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8MutualPlanId",fld:"vMUTUALPLANID",pic:"ZZZZZZZ9"},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.VALID_ENTIDADID=[[{av:"A374SucursalNombre",fld:"SUCURSALNOMBRE",pic:"@!"},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0}],[{av:"A374SucursalNombre",fld:"SUCURSALNOMBRE",pic:"@!"},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"}]];this.EvtParms.VALID_SUCURSALID=[[],[]];this.setVCMap("AV67Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV61IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV62IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV63IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV7MutualId","vMUTUALID",0,"int",15,0);this.setVCMap("AV8MutualPlanId","vMUTUALPLANID",0,"int",8,0);this.setVCMap("AV7MutualId","vMUTUALID",0,"int",15,0);this.setVCMap("AV8MutualPlanId","vMUTUALPLANID",0,"int",8,0);this.setVCMap("AV67Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV61IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV62IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV63IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV7MutualId","vMUTUALID",0,"int",15,0);this.setVCMap("AV8MutualPlanId","vMUTUALPLANID",0,"int",8,0);this.setVCMap("AV67Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV61IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV62IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV63IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);r.addRefreshingVar({rfrVar:"AV7MutualId"});r.addRefreshingVar({rfrVar:"AV8MutualPlanId"});r.addRefreshingVar({rfrVar:"AV67Pgmname"});r.addRefreshingVar({rfrVar:"AV61IsAuthorized_Display"});r.addRefreshingVar({rfrVar:"AV62IsAuthorized_Update"});r.addRefreshingVar({rfrVar:"AV63IsAuthorized_Delete"});r.addRefreshingVar(this.GXValidFnc[47]);r.addRefreshingVar(this.GXValidFnc[48]);r.addRefreshingParm({rfrVar:"AV7MutualId"});r.addRefreshingParm({rfrVar:"AV8MutualPlanId"});r.addRefreshingParm({rfrVar:"AV67Pgmname"});r.addRefreshingParm({rfrVar:"AV61IsAuthorized_Display"});r.addRefreshingParm({rfrVar:"AV62IsAuthorized_Update"});r.addRefreshingParm({rfrVar:"AV63IsAuthorized_Delete"});r.addRefreshingParm(this.GXValidFnc[47]);r.addRefreshingParm(this.GXValidFnc[48]);this.Initialize()})