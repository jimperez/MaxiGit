/*!   GeneXus C# 16_0_5-135614 on 10/27/2019 11:16:16.33
*/
gx.evt.autoSkip=!1;gx.define("cajacajamovimientowc",!0,function(n){var t,r,i,u;this.ServerClass="cajacajamovimientowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV66Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV56CajaFisicaEntidadId=gx.fn.getIntegerValue("vCAJAFISICAENTIDADID",".");this.AV57CajaFisicaSucursalId=gx.fn.getIntegerValue("vCAJAFISICASUCURSALID",".");this.AV58CajaFisicaId=gx.fn.getIntegerValue("vCAJAFISICAID",".");this.AV7CajaId=gx.fn.getIntegerValue("vCAJAID",".");this.AV56CajaFisicaEntidadId=gx.fn.getIntegerValue("vCAJAFISICAENTIDADID",".");this.AV57CajaFisicaSucursalId=gx.fn.getIntegerValue("vCAJAFISICASUCURSALID",".");this.AV58CajaFisicaId=gx.fn.getIntegerValue("vCAJAFISICAID",".");this.AV7CajaId=gx.fn.getIntegerValue("vCAJAID",".");this.AV66Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Valid_Comprobantetipoid=function(){var n=gx.fn.currentGridRowImpl(28);return this.validCliEvt("Valid_Comprobantetipoid",28,function(){try{if(gx.fn.currentGridRowImpl(28)===0)return!0;var n=gx.util.balloon.getNew("COMPROBANTETIPOID",gx.fn.currentGridRowImpl(28));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11ep2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12ep2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16ep2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17ep2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51];this.GXLastCtrlId=51;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"cajacajamovimientowc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(50,29,"CAJAMOVID","Ide.","","CajaMovId","int",0,"px",4,4,"right",null,[],50,"CajaMovId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(480,30,"CAJAMOVFECHA","Fecha","","CajaMovFecha","date",0,"px",8,8,"right",null,[],480,"CajaMovFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(479,31,"CAJAMOVNOMBRE","Descripción","","CajaMovNombre","svchar",0,"px",64,64,"left",null,[],479,"CajaMovNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(447,32,"CAJAMOVTIPO","Tipo","","CajaMovTipo","char",0,"px",3,3,"left",null,[],447,"CajaMovTipo",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(446,33,"CAJAMOVIMPORTE","Importe","","CajaMovImporte","decimal",0,"px",13,13,"right",null,[],446,"CajaMovImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(481,34,"CAJAMOVESTADO","Estado","CajaMovEstado","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(37,35,"COMPROBANTETIPOID","Ide.","","ComprobanteTipoId","int",0,"px",4,4,"right",null,[],37,"ComprobanteTipoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(462,36,"COMPROBANTETIPONOMBRE","Tipo Comp.","","ComprobanteTipoNombre","svchar",0,"px",64,64,"left",null,[],462,"ComprobanteTipoNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1262,37,"CAJAMOVCMPID","Cmp Id","","CajaMovCmpId","int",0,"px",8,8,"right",null,[],1262,"CajaMovCmpId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(482,38,"CAJAMOV094","Resp. de Alta:","","CajaMov094","char",0,"px",15,15,"left",null,[],482,"CajaMov094",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(483,39,"CAJAMOV095","Fecha de Alta:","","CajaMov095","dtime",0,"px",14,14,"right",null,[],483,"CajaMov095",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(484,40,"CAJAMOV097","Resp. de Cbio:","","CajaMov097","char",0,"px",15,15,"left",null,[],484,"CajaMov097",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(485,41,"CAJAMOV098","Fecha de Cbio:","","CajaMov098","dtime",0,"px",14,14,"right",null,[],485,"CajaMov098",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,44,22,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV54GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV54GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV54GridCurrentPage)});i.addV2CFunction("AV55GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV55GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV55GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11ep2_client);i.addEventHandler("ChangeRowsPerPage",this.e12ep2_client);this.setUserControl(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setProp("Gx Control Type","Gxcontroltype","","int");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"TABLEFILTERS",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,lvl:0,type:"svchar",len:64,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vCAJAMOVNOMBRE",gxz:"ZV59CajaMovNombre",gxold:"OV59CajaMovNombre",gxvar:"AV59CajaMovNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV59CajaMovNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV59CajaMovNombre=n)},v2c:function(){gx.fn.setControlValue("vCAJAMOVNOMBRE",gx.O.AV59CajaMovNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV59CajaMovNombre=this.val())},val:function(){return gx.fn.getControlValue("vCAJAMOVNOMBRE")},nac:gx.falseFn};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[29]={id:29,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOVID",gxz:"Z50CajaMovId",gxold:"O50CajaMovId",gxvar:"A50CajaMovId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A50CajaMovId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z50CajaMovId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAMOVID",n||gx.fn.currentGridRowImpl(28),gx.O.A50CajaMovId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A50CajaMovId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJAMOVID",n||gx.fn.currentGridRowImpl(28),".")},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"date",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOVFECHA",gxz:"Z480CajaMovFecha",gxold:"O480CajaMovFecha",gxvar:"A480CajaMovFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A480CajaMovFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z480CajaMovFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAMOVFECHA",n||gx.fn.currentGridRowImpl(28),gx.O.A480CajaMovFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A480CajaMovFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CAJAMOVFECHA",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[31]={id:31,lvl:2,type:"svchar",len:64,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOVNOMBRE",gxz:"Z479CajaMovNombre",gxold:"O479CajaMovNombre",gxvar:"A479CajaMovNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A479CajaMovNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z479CajaMovNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CAJAMOVNOMBRE",n||gx.fn.currentGridRowImpl(28),gx.O.A479CajaMovNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A479CajaMovNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAMOVNOMBRE",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[32]={id:32,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOVTIPO",gxz:"Z447CajaMovTipo",gxold:"O447CajaMovTipo",gxvar:"A447CajaMovTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A447CajaMovTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z447CajaMovTipo=n)},v2c:function(n){gx.fn.setGridControlValue("CAJAMOVTIPO",n||gx.fn.currentGridRowImpl(28),gx.O.A447CajaMovTipo,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A447CajaMovTipo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAMOVTIPO",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[33]={id:33,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOVIMPORTE",gxz:"Z446CajaMovImporte",gxold:"O446CajaMovImporte",gxvar:"A446CajaMovImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A446CajaMovImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z446CajaMovImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CAJAMOVIMPORTE",n||gx.fn.currentGridRowImpl(28),gx.O.A446CajaMovImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A446CajaMovImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CAJAMOVIMPORTE",n||gx.fn.currentGridRowImpl(28),".",",")},nac:gx.falseFn};t[34]={id:34,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOVESTADO",gxz:"Z481CajaMovEstado",gxold:"O481CajaMovEstado",gxvar:"A481CajaMovEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A481CajaMovEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z481CajaMovEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CAJAMOVESTADO",n||gx.fn.currentGridRowImpl(28),gx.O.A481CajaMovEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A481CajaMovEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAMOVESTADO",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[35]={id:35,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:this.Valid_Comprobantetipoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"COMPROBANTETIPOID",gxz:"Z37ComprobanteTipoId",gxold:"O37ComprobanteTipoId",gxvar:"A37ComprobanteTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A37ComprobanteTipoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z37ComprobanteTipoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("COMPROBANTETIPOID",n||gx.fn.currentGridRowImpl(28),gx.O.A37ComprobanteTipoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A37ComprobanteTipoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("COMPROBANTETIPOID",n||gx.fn.currentGridRowImpl(28),".")},nac:gx.falseFn};t[36]={id:36,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"COMPROBANTETIPONOMBRE",gxz:"Z462ComprobanteTipoNombre",gxold:"O462ComprobanteTipoNombre",gxvar:"A462ComprobanteTipoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A462ComprobanteTipoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z462ComprobanteTipoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("COMPROBANTETIPONOMBRE",n||gx.fn.currentGridRowImpl(28),gx.O.A462ComprobanteTipoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A462ComprobanteTipoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("COMPROBANTETIPONOMBRE",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[37]={id:37,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOVCMPID",gxz:"Z1262CajaMovCmpId",gxold:"O1262CajaMovCmpId",gxvar:"A1262CajaMovCmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1262CajaMovCmpId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1262CajaMovCmpId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAMOVCMPID",n||gx.fn.currentGridRowImpl(28),gx.O.A1262CajaMovCmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1262CajaMovCmpId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJAMOVCMPID",n||gx.fn.currentGridRowImpl(28),".")},nac:gx.falseFn};t[38]={id:38,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOV094",gxz:"Z482CajaMov094",gxold:"O482CajaMov094",gxvar:"A482CajaMov094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A482CajaMov094=n)},v2z:function(n){n!==undefined&&(gx.O.Z482CajaMov094=n)},v2c:function(n){gx.fn.setGridControlValue("CAJAMOV094",n||gx.fn.currentGridRowImpl(28),gx.O.A482CajaMov094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A482CajaMov094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAMOV094",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[39]={id:39,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOV095",gxz:"Z483CajaMov095",gxold:"O483CajaMov095",gxvar:"A483CajaMov095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A483CajaMov095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z483CajaMov095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAMOV095",n||gx.fn.currentGridRowImpl(28),gx.O.A483CajaMov095,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A483CajaMov095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CAJAMOV095",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[40]={id:40,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOV097",gxz:"Z484CajaMov097",gxold:"O484CajaMov097",gxvar:"A484CajaMov097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A484CajaMov097=n)},v2z:function(n){n!==undefined&&(gx.O.Z484CajaMov097=n)},v2c:function(n){gx.fn.setGridControlValue("CAJAMOV097",n||gx.fn.currentGridRowImpl(28),gx.O.A484CajaMov097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A484CajaMov097=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAMOV097",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[41]={id:41,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAMOV098",gxz:"Z485CajaMov098",gxold:"O485CajaMov098",gxvar:"A485CajaMov098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A485CajaMov098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z485CajaMov098=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAMOV098",n||gx.fn.currentGridRowImpl(28),gx.O.A485CajaMov098,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A485CajaMov098=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CAJAMOV098",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[48]={id:48,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAENTIDADID",gxz:"Z31CajaFisicaEntidadId",gxold:"O31CajaFisicaEntidadId",gxvar:"A31CajaFisicaEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A31CajaFisicaEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z31CajaFisicaEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAFISICAENTIDADID",gx.O.A31CajaFisicaEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A31CajaFisicaEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAFISICAENTIDADID",".")},nac:gx.falseFn};t[49]={id:49,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICASUCURSALID",gxz:"Z32CajaFisicaSucursalId",gxold:"O32CajaFisicaSucursalId",gxvar:"A32CajaFisicaSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A32CajaFisicaSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z32CajaFisicaSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAFISICASUCURSALID",gx.O.A32CajaFisicaSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A32CajaFisicaSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAFISICASUCURSALID",".")},nac:gx.falseFn};t[50]={id:50,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAID",gxz:"Z33CajaFisicaId",gxold:"O33CajaFisicaId",gxvar:"A33CajaFisicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A33CajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z33CajaFisicaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAFISICAID",gx.O.A33CajaFisicaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A33CajaFisicaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAFISICAID",".")},nac:gx.falseFn};t[51]={id:51,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAID",gxz:"Z34CajaId",gxold:"O34CajaId",gxvar:"A34CajaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A34CajaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z34CajaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAID",gx.O.A34CajaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A34CajaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAID",".")},nac:gx.falseFn};this.AV59CajaMovNombre="";this.ZV59CajaMovNombre="";this.OV59CajaMovNombre="";this.Z50CajaMovId=0;this.O50CajaMovId=0;this.Z480CajaMovFecha=gx.date.nullDate();this.O480CajaMovFecha=gx.date.nullDate();this.Z479CajaMovNombre="";this.O479CajaMovNombre="";this.Z447CajaMovTipo="";this.O447CajaMovTipo="";this.Z446CajaMovImporte=0;this.O446CajaMovImporte=0;this.Z481CajaMovEstado="";this.O481CajaMovEstado="";this.Z37ComprobanteTipoId=0;this.O37ComprobanteTipoId=0;this.Z462ComprobanteTipoNombre="";this.O462ComprobanteTipoNombre="";this.Z1262CajaMovCmpId=0;this.O1262CajaMovCmpId=0;this.Z482CajaMov094="";this.O482CajaMov094="";this.Z483CajaMov095=gx.date.nullDate();this.O483CajaMov095=gx.date.nullDate();this.Z484CajaMov097="";this.O484CajaMov097="";this.Z485CajaMov098=gx.date.nullDate();this.O485CajaMov098=gx.date.nullDate();this.A31CajaFisicaEntidadId=0;this.Z31CajaFisicaEntidadId=0;this.O31CajaFisicaEntidadId=0;this.A32CajaFisicaSucursalId=0;this.Z32CajaFisicaSucursalId=0;this.O32CajaFisicaSucursalId=0;this.A33CajaFisicaId=0;this.Z33CajaFisicaId=0;this.O33CajaFisicaId=0;this.A34CajaId=0;this.Z34CajaId=0;this.O34CajaId=0;this.AV59CajaMovNombre="";this.AV54GridCurrentPage=0;this.A31CajaFisicaEntidadId=0;this.A32CajaFisicaSucursalId=0;this.A33CajaFisicaId=0;this.A34CajaId=0;this.AV56CajaFisicaEntidadId=0;this.AV57CajaFisicaSucursalId=0;this.AV58CajaFisicaId=0;this.AV7CajaId=0;this.A50CajaMovId=0;this.A480CajaMovFecha=gx.date.nullDate();this.A479CajaMovNombre="";this.A447CajaMovTipo="";this.A446CajaMovImporte=0;this.A481CajaMovEstado="";this.A37ComprobanteTipoId=0;this.A462ComprobanteTipoNombre="";this.A1262CajaMovCmpId=0;this.A482CajaMov094="";this.A483CajaMov095=gx.date.nullDate();this.A484CajaMov097="";this.A485CajaMov098=gx.date.nullDate();this.AV66Pgmname="";this.Events={e11ep2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12ep2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16ep2_client:["ENTER",!0],e17ep2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV56CajaFisicaEntidadId",fld:"vCAJAFISICAENTIDADID",pic:"Z9"},{av:"AV57CajaFisicaSucursalId",fld:"vCAJAFISICASUCURSALID",pic:"ZZZ9"},{av:"AV58CajaFisicaId",fld:"vCAJAFISICAID",pic:"ZZZ9"},{av:"AV7CajaId",fld:"vCAJAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV59CajaMovNombre",fld:"vCAJAMOVNOMBRE",pic:""},{av:"AV66Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV54GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV55GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV66Pgmname",fld:"vPGMNAME",pic:""},{av:"AV56CajaFisicaEntidadId",fld:"vCAJAFISICAENTIDADID",pic:"Z9"},{av:"AV57CajaFisicaSucursalId",fld:"vCAJAFISICASUCURSALID",pic:"ZZZ9"},{av:"AV58CajaFisicaId",fld:"vCAJAFISICAID",pic:"ZZZ9"},{av:"AV7CajaId",fld:"vCAJAID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("CAJAFISICAENTIDADID","Visible")',ctrl:"CAJAFISICAENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CAJAFISICASUCURSALID","Visible")',ctrl:"CAJAFISICASUCURSALID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CAJAFISICAID","Visible")',ctrl:"CAJAFISICAID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CAJAID","Visible")',ctrl:"CAJAID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV59CajaMovNombre",fld:"vCAJAMOVNOMBRE",pic:""}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV59CajaMovNombre",fld:"vCAJAMOVNOMBRE",pic:""},{av:"AV56CajaFisicaEntidadId",fld:"vCAJAFISICAENTIDADID",pic:"Z9"},{av:"AV57CajaFisicaSucursalId",fld:"vCAJAFISICASUCURSALID",pic:"ZZZ9"},{av:"AV58CajaFisicaId",fld:"vCAJAFISICAID",pic:"ZZZ9"},{av:"AV7CajaId",fld:"vCAJAID",pic:"ZZZZZZZZ9"},{av:"AV66Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV59CajaMovNombre",fld:"vCAJAMOVNOMBRE",pic:""},{av:"AV56CajaFisicaEntidadId",fld:"vCAJAFISICAENTIDADID",pic:"Z9"},{av:"AV57CajaFisicaSucursalId",fld:"vCAJAFISICASUCURSALID",pic:"ZZZ9"},{av:"AV58CajaFisicaId",fld:"vCAJAFISICAID",pic:"ZZZ9"},{av:"AV7CajaId",fld:"vCAJAID",pic:"ZZZZZZZZ9"},{av:"AV66Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.VALID_COMPROBANTETIPOID=[[],[]];this.setVCMap("AV66Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV56CajaFisicaEntidadId","vCAJAFISICAENTIDADID",0,"int",2,0);this.setVCMap("AV57CajaFisicaSucursalId","vCAJAFISICASUCURSALID",0,"int",4,0);this.setVCMap("AV58CajaFisicaId","vCAJAFISICAID",0,"int",4,0);this.setVCMap("AV7CajaId","vCAJAID",0,"int",9,0);this.setVCMap("AV56CajaFisicaEntidadId","vCAJAFISICAENTIDADID",0,"int",2,0);this.setVCMap("AV57CajaFisicaSucursalId","vCAJAFISICASUCURSALID",0,"int",4,0);this.setVCMap("AV58CajaFisicaId","vCAJAFISICAID",0,"int",4,0);this.setVCMap("AV7CajaId","vCAJAID",0,"int",9,0);this.setVCMap("AV66Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV56CajaFisicaEntidadId","vCAJAFISICAENTIDADID",0,"int",2,0);this.setVCMap("AV57CajaFisicaSucursalId","vCAJAFISICASUCURSALID",0,"int",4,0);this.setVCMap("AV58CajaFisicaId","vCAJAFISICAID",0,"int",4,0);this.setVCMap("AV7CajaId","vCAJAID",0,"int",9,0);this.setVCMap("AV66Pgmname","vPGMNAME",0,"char",129,0);r.addRefreshingVar(this.GXValidFnc[22]);r.addRefreshingVar({rfrVar:"AV56CajaFisicaEntidadId"});r.addRefreshingVar({rfrVar:"AV57CajaFisicaSucursalId"});r.addRefreshingVar({rfrVar:"AV58CajaFisicaId"});r.addRefreshingVar({rfrVar:"AV7CajaId"});r.addRefreshingVar({rfrVar:"AV66Pgmname"});r.addRefreshingParm(this.GXValidFnc[22]);r.addRefreshingParm({rfrVar:"AV56CajaFisicaEntidadId"});r.addRefreshingParm({rfrVar:"AV57CajaFisicaSucursalId"});r.addRefreshingParm({rfrVar:"AV58CajaFisicaId"});r.addRefreshingParm({rfrVar:"AV7CajaId"});r.addRefreshingParm({rfrVar:"AV66Pgmname"});this.Initialize()})