/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:48:46.84
*/
gx.evt.autoSkip=!1;gx.define("promptplancuenta",!1,function(){var n,i,r,t;this.ServerClass="promptplancuenta";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutPlanCuentaId=gx.fn.getIntegerValue("vINOUTPLANCUENTAID",".");this.AV8InOutPlanCuentaNombre=gx.fn.getControlValue("vINOUTPLANCUENTANOMBRE")};this.e11262_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12262_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16262_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17262_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40,41,42,43,44,45,46,47];this.GXLastCtrlId=47;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",34,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptplancuenta",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addBitmap("&Select","vSELECT",35,0,"px",17,"px","e16262_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");i.addSingleLineEdit(189,36,"PLANCUENTAID","Cta. Cont.","","PlanCuentaId","int",0,"px",10,10,"right",null,[],189,"PlanCuentaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1251,37,"PLANCUENTANOMBRE","Descripción","","PlanCuentaNombre","svchar",0,"px",64,64,"left",null,[],1251,"PlanCuentaNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1252,38,"PLANCUENTAPADRE","Padre","","PlanCuentaPadre","int",0,"px",10,10,"right",null,[],1252,"PlanCuentaPadre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1253,39,"PLANCUENTANIVEL","Nivel","","PlanCuentaNivel","int",0,"px",1,1,"right",null,[],1253,"PlanCuentaNivel",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(1254,40,"PLANCUENTAIMPUTA","Imputa","PlanCuentaImputa","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(1255,41,"PLANCUENTATIPOCTA","Tipo Cta","","PlanCuentaTipoCta","char",0,"px",3,3,"left",null,[],1255,"PlanCuentaTipoCta",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1256,42,"PLANCUENTATIPO","Tipo","","PlanCuentaTipo","char",0,"px",3,3,"left",null,[],1256,"PlanCuentaTipo",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(3066,43,"PLANCUENTAINDIRECTA","Indirecta","PlanCuentaIndirecta","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addComboBox(3112,44,"PLANCUENTASUELDO","Dev. Sueldo","PlanCuentaSueldo","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addComboBox(1257,45,"PLANCUENTAESTADO","Estado","PlanCuentaEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,48,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV40GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV40GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV40GridCurrentPage)});t.addV2CFunction("AV41GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV41GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV41GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11262_client);t.addEventHandler("ChangeRowsPerPage",this.e12262_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPLANCUENTANOMBRE",gxz:"ZV13PlanCuentaNombre",gxold:"OV13PlanCuentaNombre",gxvar:"AV13PlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13PlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13PlanCuentaNombre=n)},v2c:function(){gx.fn.setControlValue("vPLANCUENTANOMBRE",gx.O.AV13PlanCuentaNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13PlanCuentaNombre=this.val())},val:function(){return gx.fn.getControlValue("vPLANCUENTANOMBRE")},nac:gx.falseFn};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPLANCUENTAID",gxz:"ZV43PlanCuentaId",gxold:"OV43PlanCuentaId",gxvar:"AV43PlanCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV43PlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV43PlanCuentaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPLANCUENTAID",gx.O.AV43PlanCuentaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV43PlanCuentaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPLANCUENTAID",".")},nac:gx.falseFn};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vPLANCUENTAPADRE",gxz:"ZV44PlanCuentaPadre",gxold:"OV44PlanCuentaPadre",gxvar:"AV44PlanCuentaPadre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV44PlanCuentaPadre=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV44PlanCuentaPadre=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPLANCUENTAPADRE",gx.O.AV44PlanCuentaPadre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV44PlanCuentaPadre=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPLANCUENTAPADRE",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV42Select",gxold:"OV42Select",gxvar:"AV42Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV42Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV42Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(34),gx.O.AV42Select,gx.O.AV52Select_GXI)},c2v:function(n){gx.O.AV52Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV42Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV52Select_GXI",nac:gx.falseFn,evt:"e16262_client",std:"ENTER"};n[36]={id:36,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTAID",gxz:"Z189PlanCuentaId",gxold:"O189PlanCuentaId",gxvar:"A189PlanCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A189PlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z189PlanCuentaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PLANCUENTAID",n||gx.fn.currentGridRowImpl(34),gx.O.A189PlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A189PlanCuentaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PLANCUENTAID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTANOMBRE",gxz:"Z1251PlanCuentaNombre",gxold:"O1251PlanCuentaNombre",gxvar:"A1251PlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1251PlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1251PlanCuentaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PLANCUENTANOMBRE",n||gx.fn.currentGridRowImpl(34),gx.O.A1251PlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1251PlanCuentaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANCUENTANOMBRE",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTAPADRE",gxz:"Z1252PlanCuentaPadre",gxold:"O1252PlanCuentaPadre",gxvar:"A1252PlanCuentaPadre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1252PlanCuentaPadre=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1252PlanCuentaPadre=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PLANCUENTAPADRE",n||gx.fn.currentGridRowImpl(34),gx.O.A1252PlanCuentaPadre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1252PlanCuentaPadre=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PLANCUENTAPADRE",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTANIVEL",gxz:"Z1253PlanCuentaNivel",gxold:"O1253PlanCuentaNivel",gxvar:"A1253PlanCuentaNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1253PlanCuentaNivel=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1253PlanCuentaNivel=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PLANCUENTANIVEL",n||gx.fn.currentGridRowImpl(34),gx.O.A1253PlanCuentaNivel,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1253PlanCuentaNivel=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PLANCUENTANIVEL",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTAIMPUTA",gxz:"Z1254PlanCuentaImputa",gxold:"O1254PlanCuentaImputa",gxvar:"A1254PlanCuentaImputa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1254PlanCuentaImputa=n)},v2z:function(n){n!==undefined&&(gx.O.Z1254PlanCuentaImputa=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PLANCUENTAIMPUTA",n||gx.fn.currentGridRowImpl(34),gx.O.A1254PlanCuentaImputa);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1254PlanCuentaImputa=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANCUENTAIMPUTA",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTATIPOCTA",gxz:"Z1255PlanCuentaTipoCta",gxold:"O1255PlanCuentaTipoCta",gxvar:"A1255PlanCuentaTipoCta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1255PlanCuentaTipoCta=n)},v2z:function(n){n!==undefined&&(gx.O.Z1255PlanCuentaTipoCta=n)},v2c:function(n){gx.fn.setGridControlValue("PLANCUENTATIPOCTA",n||gx.fn.currentGridRowImpl(34),gx.O.A1255PlanCuentaTipoCta,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1255PlanCuentaTipoCta=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANCUENTATIPOCTA",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTATIPO",gxz:"Z1256PlanCuentaTipo",gxold:"O1256PlanCuentaTipo",gxvar:"A1256PlanCuentaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1256PlanCuentaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1256PlanCuentaTipo=n)},v2c:function(n){gx.fn.setGridControlValue("PLANCUENTATIPO",n||gx.fn.currentGridRowImpl(34),gx.O.A1256PlanCuentaTipo,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1256PlanCuentaTipo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANCUENTATIPO",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTAINDIRECTA",gxz:"Z3066PlanCuentaIndirecta",gxold:"O3066PlanCuentaIndirecta",gxvar:"A3066PlanCuentaIndirecta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3066PlanCuentaIndirecta=n)},v2z:function(n){n!==undefined&&(gx.O.Z3066PlanCuentaIndirecta=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PLANCUENTAINDIRECTA",n||gx.fn.currentGridRowImpl(34),gx.O.A3066PlanCuentaIndirecta);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3066PlanCuentaIndirecta=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANCUENTAINDIRECTA",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTASUELDO",gxz:"Z3112PlanCuentaSueldo",gxold:"O3112PlanCuentaSueldo",gxvar:"A3112PlanCuentaSueldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3112PlanCuentaSueldo=n)},v2z:function(n){n!==undefined&&(gx.O.Z3112PlanCuentaSueldo=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PLANCUENTASUELDO",n||gx.fn.currentGridRowImpl(34),gx.O.A3112PlanCuentaSueldo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3112PlanCuentaSueldo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANCUENTASUELDO",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUENTAESTADO",gxz:"Z1257PlanCuentaEstado",gxold:"O1257PlanCuentaEstado",gxvar:"A1257PlanCuentaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1257PlanCuentaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1257PlanCuentaEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PLANCUENTAESTADO",n||gx.fn.currentGridRowImpl(34),gx.O.A1257PlanCuentaEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1257PlanCuentaEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANCUENTAESTADO",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};this.AV13PlanCuentaNombre="";this.ZV13PlanCuentaNombre="";this.OV13PlanCuentaNombre="";this.AV43PlanCuentaId=0;this.ZV43PlanCuentaId=0;this.OV43PlanCuentaId=0;this.AV44PlanCuentaPadre=0;this.ZV44PlanCuentaPadre=0;this.OV44PlanCuentaPadre=0;this.ZV42Select="";this.OV42Select="";this.Z189PlanCuentaId=0;this.O189PlanCuentaId=0;this.Z1251PlanCuentaNombre="";this.O1251PlanCuentaNombre="";this.Z1252PlanCuentaPadre=0;this.O1252PlanCuentaPadre=0;this.Z1253PlanCuentaNivel=0;this.O1253PlanCuentaNivel=0;this.Z1254PlanCuentaImputa="";this.O1254PlanCuentaImputa="";this.Z1255PlanCuentaTipoCta="";this.O1255PlanCuentaTipoCta="";this.Z1256PlanCuentaTipo="";this.O1256PlanCuentaTipo="";this.Z3066PlanCuentaIndirecta="";this.O3066PlanCuentaIndirecta="";this.Z3112PlanCuentaSueldo="";this.O3112PlanCuentaSueldo="";this.Z1257PlanCuentaEstado="";this.O1257PlanCuentaEstado="";this.AV13PlanCuentaNombre="";this.AV43PlanCuentaId=0;this.AV44PlanCuentaPadre=0;this.AV40GridCurrentPage=0;this.AV7InOutPlanCuentaId=0;this.AV8InOutPlanCuentaNombre="";this.AV42Select="";this.A189PlanCuentaId=0;this.A1251PlanCuentaNombre="";this.A1252PlanCuentaPadre=0;this.A1253PlanCuentaNivel=0;this.A1254PlanCuentaImputa="";this.A1255PlanCuentaTipoCta="";this.A1256PlanCuentaTipo="";this.A3066PlanCuentaIndirecta="";this.A3112PlanCuentaSueldo="";this.A1257PlanCuentaEstado="";this.Events={e11262_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12262_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16262_client:["ENTER",!0],e17262_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV13PlanCuentaNombre",fld:"vPLANCUENTANOMBRE",pic:"@!"},{av:"AV43PlanCuentaId",fld:"vPLANCUENTAID",pic:"ZZZZZZZZZ9"},{av:"AV44PlanCuentaPadre",fld:"vPLANCUENTAPADRE",pic:"ZZZZZZZZZ9"}],[{av:"AV40GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV41GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV13PlanCuentaNombre",fld:"vPLANCUENTANOMBRE",pic:"@!"},{av:"AV43PlanCuentaId",fld:"vPLANCUENTAID",pic:"ZZZZZZZZZ9"},{av:"AV44PlanCuentaPadre",fld:"vPLANCUENTAPADRE",pic:"ZZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV13PlanCuentaNombre",fld:"vPLANCUENTANOMBRE",pic:"@!"},{av:"AV43PlanCuentaId",fld:"vPLANCUENTAID",pic:"ZZZZZZZZZ9"},{av:"AV44PlanCuentaPadre",fld:"vPLANCUENTAPADRE",pic:"ZZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV42Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A189PlanCuentaId",fld:"PLANCUENTAID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"A1251PlanCuentaNombre",fld:"PLANCUENTANOMBRE",pic:"@!",hsh:!0}],[{av:"AV7InOutPlanCuentaId",fld:"vINOUTPLANCUENTAID",pic:"ZZZZZZZZZ9"},{av:"AV8InOutPlanCuentaNombre",fld:"vINOUTPLANCUENTANOMBRE",pic:"@!"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutPlanCuentaId","vINOUTPLANCUENTAID",0,"int",10,0);this.setVCMap("AV8InOutPlanCuentaNombre","vINOUTPLANCUENTANOMBRE",0,"svchar",64,0);i.addRefreshingVar(this.GXValidFnc[19]);i.addRefreshingVar(this.GXValidFnc[23]);i.addRefreshingVar(this.GXValidFnc[28]);i.addRefreshingParm(this.GXValidFnc[19]);i.addRefreshingParm(this.GXValidFnc[23]);i.addRefreshingParm(this.GXValidFnc[28]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptplancuenta)})