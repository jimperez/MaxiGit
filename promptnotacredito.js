/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:53:56.35
*/
gx.evt.autoSkip=!1;gx.define("promptnotacredito",!1,function(){var n,i,r,t;this.ServerClass="promptnotacredito";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutNcId=gx.fn.getIntegerValue("vINOUTNCID",".");this.AV8InOutNcEntidadNombre=gx.fn.getControlValue("vINOUTNCENTIDADNOMBRE")};this.Valid_Ncentidadid=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ncentidadid",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("NCENTIDADID",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ncsucursalid=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ncsucursalid",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("NCSUCURSALID",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clienteid=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Clienteid",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("CLIENTEID",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clientedenominacion=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Clientedenominacion",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("CLIENTEDENOMINACION",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ncletra=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ncletra",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("NCLETRA",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ncpuntoventa=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ncpuntoventa",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("NCPUNTOVENTA",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Ncnumero=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Ncnumero",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("NCNUMERO",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11go2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12go2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16go2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17go2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];this.GXLastCtrlId=48;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",19,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptnotacredito",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addBitmap("&Select","vSELECT",20,0,"px",17,"px","e16go2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");i.addSingleLineEdit(289,21,"NCID","NC Ide.","","NcId","int",0,"px",8,8,"right",null,[],289,"NcId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(290,22,"NCENTIDADID","Empresa","","NcEntidadId","int",0,"px",2,2,"right",null,[],290,"NcEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2367,23,"NCENTIDADNOMBRE","Empresa","","NcEntidadNombre","svchar",0,"px",64,64,"left",null,[],2367,"NcEntidadNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(291,24,"NCSUCURSALID","Sucursal","","NcSucursalId","int",0,"px",4,4,"right",null,[],291,"NcSucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2375,25,"NCSUCURSALNOMBRE","Sucursal","","NcSucursalNombre","svchar",0,"px",64,64,"left",null,[],2375,"NcSucursalNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(53,26,"CLIENTEID","Cuil/Cuit","","ClienteId","int",0,"px",15,15,"right",null,[],53,"ClienteId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1156,27,"CLIENTEDENOMINACION","Cliente","","ClienteDenominacion","svchar",0,"px",64,64,"left",null,[],1156,"ClienteDenominacion",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2542,28,"CLIENTEDENOMINACIONCOMPLETA","Cliente","","ClienteDenominacionCompleta","svchar",0,"px",64,64,"left",null,[],2542,"ClienteDenominacionCompleta",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2333,29,"NCFECHA","Fecha","Fecha ...","NcFecha","date",0,"px",10,10,"right",null,[],2333,"NcFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(2334,30,"NCLETRA","Letra","NcLetra","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(2335,31,"NCPUNTOVENTA","Pto Vta","","NcPuntoVenta","int",0,"px",4,4,"right",null,[],2335,"NcPuntoVenta",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2336,32,"NCNUMERO","Numero","","NcNumero","int",0,"px",8,8,"right",null,[],2336,"NcNumero",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2339,33,"NCCOMPROBANTE","Comprobante","","NcComprobante","char",0,"px",15,15,"left",null,[],2339,"NcComprobante",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2341,34,"NCCAENUMERO","Nº CAE","","NcCAENumero","svchar",0,"px",15,15,"left",null,[],2341,"NcCAENumero",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2342,35,"NCCAEVTO","Vto CAE","Fecha ...","NcCAEVto","date",0,"px",10,10,"right",null,[],2342,"NcCAEVto",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(2332,36,"NCESTADO","Estado","NcEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(2340,37,"NCFINALNETO21","Neto 21","","NcFinalNeto21","decimal",0,"px",13,13,"right",null,[],2340,"NcFinalNeto21",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2372,38,"NCFINALNETO27","Neto 27","","NcFinalNeto27","decimal",0,"px",13,13,"right",null,[],2372,"NcFinalNeto27",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2371,39,"NCFINALNETO105","Neto 10,5","","NcFinalNeto105","decimal",0,"px",13,13,"right",null,[],2371,"NcFinalNeto105",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2373,40,"NCFINALNETOEXENTO","Neto Exento","","NcFinalNetoExento","decimal",0,"px",13,13,"right",null,[],2373,"NcFinalNetoExento",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2374,41,"NCFINALNETONOGRAVADO","No Grav","","NcFinalNetoNoGravado","decimal",0,"px",13,13,"right",null,[],2374,"NcFinalNetoNoGravado",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2369,42,"NCFINALIVA21","IVA 21","","NcFinalIVA21","decimal",0,"px",13,13,"right",null,[],2369,"NcFinalIVA21",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2370,43,"NCFINALIVA27","IVA 27","","NcFinalIVA27","int",0,"px",4,4,"right",null,[],2370,"NcFinalIVA27",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2368,44,"NCFINALIVA105","IVA 10,5","","NcFinalIVA105","int",0,"px",4,4,"right",null,[],2368,"NcFinalIVA105",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2337,45,"NCFINALIMPORTE","Total","","NcFinalImporte","decimal",0,"px",13,13,"right",null,[],2337,"NcFinalImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2338,46,"NCSALDO","Saldo","","NcSaldo","decimal",0,"px",13,13,"right",null,[],2338,"NcSaldo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,49,20,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV61GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV61GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV61GridCurrentPage)});t.addV2CFunction("AV62GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV62GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV62GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11go2_client);t.addEventHandler("ChangeRowsPerPage",this.e12go2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[20]={id:20,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV63Select",gxold:"OV63Select",gxvar:"AV63Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV63Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV63Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(19),gx.O.AV63Select,gx.O.AV80Select_GXI)},c2v:function(n){gx.O.AV80Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV63Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(19))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(19))},gxvar_GXI:"AV80Select_GXI",nac:gx.falseFn,evt:"e16go2_client",std:"ENTER"};n[21]={id:21,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCID",gxz:"Z289NcId",gxold:"O289NcId",gxvar:"A289NcId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A289NcId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z289NcId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NCID",n||gx.fn.currentGridRowImpl(19),gx.O.A289NcId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A289NcId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NCID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[22]={id:22,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ncentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCENTIDADID",gxz:"Z290NcEntidadId",gxold:"O290NcEntidadId",gxvar:"A290NcEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A290NcEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z290NcEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NCENTIDADID",n||gx.fn.currentGridRowImpl(19),gx.O.A290NcEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A290NcEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NCENTIDADID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[23]={id:23,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCENTIDADNOMBRE",gxz:"Z2367NcEntidadNombre",gxold:"O2367NcEntidadNombre",gxvar:"A2367NcEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2367NcEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2367NcEntidadNombre=n)},v2c:function(n){gx.fn.setGridControlValue("NCENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(19),gx.O.A2367NcEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2367NcEntidadNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("NCENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[24]={id:24,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ncsucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCSUCURSALID",gxz:"Z291NcSucursalId",gxold:"O291NcSucursalId",gxvar:"A291NcSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A291NcSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z291NcSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NCSUCURSALID",n||gx.fn.currentGridRowImpl(19),gx.O.A291NcSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A291NcSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NCSUCURSALID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[25]={id:25,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCSUCURSALNOMBRE",gxz:"Z2375NcSucursalNombre",gxold:"O2375NcSucursalNombre",gxvar:"A2375NcSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2375NcSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2375NcSucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("NCSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(19),gx.O.A2375NcSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2375NcSucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("NCSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[26]={id:26,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Clienteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CLIENTEID",n||gx.fn.currentGridRowImpl(19),gx.O.A53ClienteId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CLIENTEID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[27]={id:27,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Clientedenominacion,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDENOMINACION",gxz:"Z1156ClienteDenominacion",gxold:"O1156ClienteDenominacion",gxvar:"A1156ClienteDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1156ClienteDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1156ClienteDenominacion=n)},v2c:function(n){gx.fn.setGridControlValue("CLIENTEDENOMINACION",n||gx.fn.currentGridRowImpl(19),gx.O.A1156ClienteDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1156ClienteDenominacion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CLIENTEDENOMINACION",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDENOMINACIONCOMPLETA",gxz:"Z2542ClienteDenominacionCompleta",gxold:"O2542ClienteDenominacionCompleta",gxvar:"A2542ClienteDenominacionCompleta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2542ClienteDenominacionCompleta=n)},v2z:function(n){n!==undefined&&(gx.O.Z2542ClienteDenominacionCompleta=n)},v2c:function(n){gx.fn.setGridControlValue("CLIENTEDENOMINACIONCOMPLETA",n||gx.fn.currentGridRowImpl(19),gx.O.A2542ClienteDenominacionCompleta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2542ClienteDenominacionCompleta=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CLIENTEDENOMINACIONCOMPLETA",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFECHA",gxz:"Z2333NcFecha",gxold:"O2333NcFecha",gxvar:"A2333NcFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2333NcFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2333NcFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("NCFECHA",n||gx.fn.currentGridRowImpl(19),gx.O.A2333NcFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2333NcFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("NCFECHA",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ncletra,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCLETRA",gxz:"Z2334NcLetra",gxold:"O2334NcLetra",gxvar:"A2334NcLetra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2334NcLetra=n)},v2z:function(n){n!==undefined&&(gx.O.Z2334NcLetra=n)},v2c:function(n){gx.fn.setGridComboBoxValue("NCLETRA",n||gx.fn.currentGridRowImpl(19),gx.O.A2334NcLetra);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2334NcLetra=this.val(n))},val:function(n){return gx.fn.getGridControlValue("NCLETRA",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[31]={id:31,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ncpuntoventa,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCPUNTOVENTA",gxz:"Z2335NcPuntoVenta",gxold:"O2335NcPuntoVenta",gxvar:"A2335NcPuntoVenta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2335NcPuntoVenta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2335NcPuntoVenta=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NCPUNTOVENTA",n||gx.fn.currentGridRowImpl(19),gx.O.A2335NcPuntoVenta,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2335NcPuntoVenta=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NCPUNTOVENTA",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[32]={id:32,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Ncnumero,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCNUMERO",gxz:"Z2336NcNumero",gxold:"O2336NcNumero",gxvar:"A2336NcNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2336NcNumero=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2336NcNumero=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NCNUMERO",n||gx.fn.currentGridRowImpl(19),gx.O.A2336NcNumero,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2336NcNumero=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NCNUMERO",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[33]={id:33,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCCOMPROBANTE",gxz:"Z2339NcComprobante",gxold:"O2339NcComprobante",gxvar:"A2339NcComprobante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2339NcComprobante=n)},v2z:function(n){n!==undefined&&(gx.O.Z2339NcComprobante=n)},v2c:function(n){gx.fn.setGridControlValue("NCCOMPROBANTE",n||gx.fn.currentGridRowImpl(19),gx.O.A2339NcComprobante,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2339NcComprobante=this.val(n))},val:function(n){return gx.fn.getGridControlValue("NCCOMPROBANTE",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[34]={id:34,lvl:2,type:"svchar",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCCAENUMERO",gxz:"Z2341NcCAENumero",gxold:"O2341NcCAENumero",gxvar:"A2341NcCAENumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2341NcCAENumero=n)},v2z:function(n){n!==undefined&&(gx.O.Z2341NcCAENumero=n)},v2c:function(n){gx.fn.setGridControlValue("NCCAENUMERO",n||gx.fn.currentGridRowImpl(19),gx.O.A2341NcCAENumero,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2341NcCAENumero=this.val(n))},val:function(n){return gx.fn.getGridControlValue("NCCAENUMERO",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCCAEVTO",gxz:"Z2342NcCAEVto",gxold:"O2342NcCAEVto",gxvar:"A2342NcCAEVto",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2342NcCAEVto=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2342NcCAEVto=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("NCCAEVTO",n||gx.fn.currentGridRowImpl(19),gx.O.A2342NcCAEVto,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2342NcCAEVto=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("NCCAEVTO",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCESTADO",gxz:"Z2332NcEstado",gxold:"O2332NcEstado",gxvar:"A2332NcEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2332NcEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2332NcEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("NCESTADO",n||gx.fn.currentGridRowImpl(19),gx.O.A2332NcEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2332NcEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("NCESTADO",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFINALNETO21",gxz:"Z2340NcFinalNeto21",gxold:"O2340NcFinalNeto21",gxvar:"A2340NcFinalNeto21",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2340NcFinalNeto21=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2340NcFinalNeto21=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCFINALNETO21",n||gx.fn.currentGridRowImpl(19),gx.O.A2340NcFinalNeto21,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2340NcFinalNeto21=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCFINALNETO21",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFINALNETO27",gxz:"Z2372NcFinalNeto27",gxold:"O2372NcFinalNeto27",gxvar:"A2372NcFinalNeto27",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2372NcFinalNeto27=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2372NcFinalNeto27=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCFINALNETO27",n||gx.fn.currentGridRowImpl(19),gx.O.A2372NcFinalNeto27,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2372NcFinalNeto27=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCFINALNETO27",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFINALNETO105",gxz:"Z2371NcFinalNeto105",gxold:"O2371NcFinalNeto105",gxvar:"A2371NcFinalNeto105",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2371NcFinalNeto105=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2371NcFinalNeto105=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCFINALNETO105",n||gx.fn.currentGridRowImpl(19),gx.O.A2371NcFinalNeto105,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2371NcFinalNeto105=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCFINALNETO105",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFINALNETOEXENTO",gxz:"Z2373NcFinalNetoExento",gxold:"O2373NcFinalNetoExento",gxvar:"A2373NcFinalNetoExento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2373NcFinalNetoExento=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2373NcFinalNetoExento=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCFINALNETOEXENTO",n||gx.fn.currentGridRowImpl(19),gx.O.A2373NcFinalNetoExento,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2373NcFinalNetoExento=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCFINALNETOEXENTO",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFINALNETONOGRAVADO",gxz:"Z2374NcFinalNetoNoGravado",gxold:"O2374NcFinalNetoNoGravado",gxvar:"A2374NcFinalNetoNoGravado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2374NcFinalNetoNoGravado=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2374NcFinalNetoNoGravado=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCFINALNETONOGRAVADO",n||gx.fn.currentGridRowImpl(19),gx.O.A2374NcFinalNetoNoGravado,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2374NcFinalNetoNoGravado=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCFINALNETONOGRAVADO",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFINALIVA21",gxz:"Z2369NcFinalIVA21",gxold:"O2369NcFinalIVA21",gxvar:"A2369NcFinalIVA21",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2369NcFinalIVA21=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2369NcFinalIVA21=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCFINALIVA21",n||gx.fn.currentGridRowImpl(19),gx.O.A2369NcFinalIVA21,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2369NcFinalIVA21=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCFINALIVA21",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFINALIVA27",gxz:"Z2370NcFinalIVA27",gxold:"O2370NcFinalIVA27",gxvar:"A2370NcFinalIVA27",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2370NcFinalIVA27=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2370NcFinalIVA27=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NCFINALIVA27",n||gx.fn.currentGridRowImpl(19),gx.O.A2370NcFinalIVA27,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2370NcFinalIVA27=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NCFINALIVA27",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFINALIVA105",gxz:"Z2368NcFinalIVA105",gxold:"O2368NcFinalIVA105",gxvar:"A2368NcFinalIVA105",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2368NcFinalIVA105=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2368NcFinalIVA105=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("NCFINALIVA105",n||gx.fn.currentGridRowImpl(19),gx.O.A2368NcFinalIVA105,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2368NcFinalIVA105=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("NCFINALIVA105",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCFINALIMPORTE",gxz:"Z2337NcFinalImporte",gxold:"O2337NcFinalImporte",gxvar:"A2337NcFinalImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2337NcFinalImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2337NcFinalImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCFINALIMPORTE",n||gx.fn.currentGridRowImpl(19),gx.O.A2337NcFinalImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2337NcFinalImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCFINALIMPORTE",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NCSALDO",gxz:"Z2338NcSaldo",gxold:"O2338NcSaldo",gxvar:"A2338NcSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2338NcSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2338NcSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("NCSALDO",n||gx.fn.currentGridRowImpl(19),gx.O.A2338NcSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2338NcSaldo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("NCSALDO",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};this.ZV63Select="";this.OV63Select="";this.Z289NcId=0;this.O289NcId=0;this.Z290NcEntidadId=0;this.O290NcEntidadId=0;this.Z2367NcEntidadNombre="";this.O2367NcEntidadNombre="";this.Z291NcSucursalId=0;this.O291NcSucursalId=0;this.Z2375NcSucursalNombre="";this.O2375NcSucursalNombre="";this.Z53ClienteId=0;this.O53ClienteId=0;this.Z1156ClienteDenominacion="";this.O1156ClienteDenominacion="";this.Z2542ClienteDenominacionCompleta="";this.O2542ClienteDenominacionCompleta="";this.Z2333NcFecha=gx.date.nullDate();this.O2333NcFecha=gx.date.nullDate();this.Z2334NcLetra="";this.O2334NcLetra="";this.Z2335NcPuntoVenta=0;this.O2335NcPuntoVenta=0;this.Z2336NcNumero=0;this.O2336NcNumero=0;this.Z2339NcComprobante="";this.O2339NcComprobante="";this.Z2341NcCAENumero="";this.O2341NcCAENumero="";this.Z2342NcCAEVto=gx.date.nullDate();this.O2342NcCAEVto=gx.date.nullDate();this.Z2332NcEstado="";this.O2332NcEstado="";this.Z2340NcFinalNeto21=0;this.O2340NcFinalNeto21=0;this.Z2372NcFinalNeto27=0;this.O2372NcFinalNeto27=0;this.Z2371NcFinalNeto105=0;this.O2371NcFinalNeto105=0;this.Z2373NcFinalNetoExento=0;this.O2373NcFinalNetoExento=0;this.Z2374NcFinalNetoNoGravado=0;this.O2374NcFinalNetoNoGravado=0;this.Z2369NcFinalIVA21=0;this.O2369NcFinalIVA21=0;this.Z2370NcFinalIVA27=0;this.O2370NcFinalIVA27=0;this.Z2368NcFinalIVA105=0;this.O2368NcFinalIVA105=0;this.Z2337NcFinalImporte=0;this.O2337NcFinalImporte=0;this.Z2338NcSaldo=0;this.O2338NcSaldo=0;this.AV61GridCurrentPage=0;this.AV7InOutNcId=0;this.AV8InOutNcEntidadNombre="";this.AV63Select="";this.A289NcId=0;this.A290NcEntidadId=0;this.A2367NcEntidadNombre="";this.A291NcSucursalId=0;this.A2375NcSucursalNombre="";this.A53ClienteId=0;this.A1156ClienteDenominacion="";this.A2542ClienteDenominacionCompleta="";this.A2333NcFecha=gx.date.nullDate();this.A2334NcLetra="";this.A2335NcPuntoVenta=0;this.A2336NcNumero=0;this.A2339NcComprobante="";this.A2341NcCAENumero="";this.A2342NcCAEVto=gx.date.nullDate();this.A2332NcEstado="";this.A2340NcFinalNeto21=0;this.A2372NcFinalNeto27=0;this.A2371NcFinalNeto105=0;this.A2373NcFinalNetoExento=0;this.A2374NcFinalNetoNoGravado=0;this.A2369NcFinalIVA21=0;this.A2370NcFinalIVA27=0;this.A2368NcFinalIVA105=0;this.A2337NcFinalImporte=0;this.A2338NcSaldo=0;this.Events={e11go2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12go2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16go2_client:["ENTER",!0],e17go2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"}],[{av:"AV61GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV62GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV63Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A289NcId",fld:"NCID",pic:"ZZZZZZZ9",hsh:!0},{av:"A2367NcEntidadNombre",fld:"NCENTIDADNOMBRE",pic:"@!"}],[{av:"AV7InOutNcId",fld:"vINOUTNCID",pic:"ZZZZZZZ9"},{av:"AV8InOutNcEntidadNombre",fld:"vINOUTNCENTIDADNOMBRE",pic:"@!"}]];this.EvtParms.VALID_NCENTIDADID=[[],[]];this.EvtParms.VALID_NCSUCURSALID=[[],[]];this.EvtParms.VALID_CLIENTEID=[[],[]];this.EvtParms.VALID_CLIENTEDENOMINACION=[[],[]];this.EvtParms.VALID_NCLETRA=[[],[]];this.EvtParms.VALID_NCPUNTOVENTA=[[],[]];this.EvtParms.VALID_NCNUMERO=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutNcId","vINOUTNCID",0,"int",8,0);this.setVCMap("AV8InOutNcEntidadNombre","vINOUTNCENTIDADNOMBRE",0,"svchar",64,0);this.Initialize()});gx.wi(function(){gx.createParentObj(promptnotacredito)})