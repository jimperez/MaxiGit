/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:34:7.2
*/
gx.evt.autoSkip=!1;gx.define("vendedorsucursal",!0,function(n){var i,r,t;this.ServerClass="vendedorsucursal";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV8VendedorId=gx.fn.getIntegerValue("vVENDEDORID",".");this.AV8VendedorId=gx.fn.getIntegerValue("vVENDEDORID",".");this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Valid_Vendedorentidadid=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Vendedorentidadid",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("VENDEDORENTIDADID",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Vendedorsucursalid=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Vendedorsucursalid",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("VENDEDORSUCURSALID",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11wa2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12wa2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16wa2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17wa2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21];this.GXLastCtrlId=21;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",12,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"vendedorsucursal",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(249,13,"VENDEDORID","Cuil","","VendedorId","int",0,"px",15,15,"right",null,[],249,"VendedorId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(250,14,"VENDEDORENTIDADID","Ide.","","VendedorEntidadId","int",0,"px",2,2,"right",null,[],250,"VendedorEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(251,15,"VENDEDORSUCURSALID","Sucursal","","VendedorSucursalId","int",0,"px",4,4,"right",null,[],251,"VendedorSucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1979,16,"VENDEDORSUCURSALNOMBRE","Sucursal","","VendedorSucursalNombre","svchar",0,"px",64,64,"left",null,[],1979,"VendedorSucursalNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(252,17,"VENDEDORSUCURSALDESDE","Desde","","VendedorSucursalDesde","date",0,"px",8,8,"right",null,[],252,"VendedorSucursalDesde",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1999,18,"VENDEDORSUCURSALHASTA","Hasta","","VendedorSucursalHasta","date",0,"px",8,8,"right",null,[],1999,"VendedorSucursalHasta",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(2e3,19,"VENDEDORSUCURSALESTADO","Estado","VendedorSucursalEstado","char",null,0,!0,!1,0,"px","WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,22,13,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV28GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV28GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV28GridCurrentPage)});t.addV2CFunction("AV29GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV29GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV29GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11wa2_client);t.addEventHandler("ChangeRowsPerPage",this.e12wa2_client);this.setUserControl(t);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"UNNAMEDTABLE1",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[9]={id:9,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[10]={id:10,fld:"",grid:0};i[11]={id:11,fld:"",grid:0};i[13]={id:13,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORID",gxz:"Z249VendedorId",gxold:"O249VendedorId",gxvar:"A249VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A249VendedorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z249VendedorId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("VENDEDORID",n||gx.fn.currentGridRowImpl(12),gx.O.A249VendedorId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A249VendedorId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("VENDEDORID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};i[14]={id:14,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Vendedorentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORENTIDADID",gxz:"Z250VendedorEntidadId",gxold:"O250VendedorEntidadId",gxvar:"A250VendedorEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A250VendedorEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z250VendedorEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("VENDEDORENTIDADID",n||gx.fn.currentGridRowImpl(12),gx.O.A250VendedorEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A250VendedorEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("VENDEDORENTIDADID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};i[15]={id:15,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Vendedorsucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORSUCURSALID",gxz:"Z251VendedorSucursalId",gxold:"O251VendedorSucursalId",gxvar:"A251VendedorSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A251VendedorSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z251VendedorSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("VENDEDORSUCURSALID",n||gx.fn.currentGridRowImpl(12),gx.O.A251VendedorSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A251VendedorSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("VENDEDORSUCURSALID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};i[16]={id:16,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORSUCURSALNOMBRE",gxz:"Z1979VendedorSucursalNombre",gxold:"O1979VendedorSucursalNombre",gxvar:"A1979VendedorSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1979VendedorSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1979VendedorSucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("VENDEDORSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(12),gx.O.A1979VendedorSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1979VendedorSucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("VENDEDORSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};i[17]={id:17,lvl:2,type:"date",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORSUCURSALDESDE",gxz:"Z252VendedorSucursalDesde",gxold:"O252VendedorSucursalDesde",gxvar:"A252VendedorSucursalDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A252VendedorSucursalDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z252VendedorSucursalDesde=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("VENDEDORSUCURSALDESDE",n||gx.fn.currentGridRowImpl(12),gx.O.A252VendedorSucursalDesde,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A252VendedorSucursalDesde=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("VENDEDORSUCURSALDESDE",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};i[18]={id:18,lvl:2,type:"date",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORSUCURSALHASTA",gxz:"Z1999VendedorSucursalHasta",gxold:"O1999VendedorSucursalHasta",gxvar:"A1999VendedorSucursalHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1999VendedorSucursalHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1999VendedorSucursalHasta=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("VENDEDORSUCURSALHASTA",n||gx.fn.currentGridRowImpl(12),gx.O.A1999VendedorSucursalHasta,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1999VendedorSucursalHasta=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("VENDEDORSUCURSALHASTA",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};i[19]={id:19,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORSUCURSALESTADO",gxz:"Z2000VendedorSucursalEstado",gxold:"O2000VendedorSucursalEstado",gxvar:"A2000VendedorSucursalEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2000VendedorSucursalEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z2000VendedorSucursalEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("VENDEDORSUCURSALESTADO",n||gx.fn.currentGridRowImpl(12),gx.O.A2000VendedorSucursalEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2000VendedorSucursalEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("VENDEDORSUCURSALESTADO",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};i[20]={id:20,fld:"",grid:0};i[21]={id:21,fld:"",grid:0};this.Z249VendedorId=0;this.O249VendedorId=0;this.Z250VendedorEntidadId=0;this.O250VendedorEntidadId=0;this.Z251VendedorSucursalId=0;this.O251VendedorSucursalId=0;this.Z1979VendedorSucursalNombre="";this.O1979VendedorSucursalNombre="";this.Z252VendedorSucursalDesde=gx.date.nullDate();this.O252VendedorSucursalDesde=gx.date.nullDate();this.Z1999VendedorSucursalHasta=gx.date.nullDate();this.O1999VendedorSucursalHasta=gx.date.nullDate();this.Z2000VendedorSucursalEstado="";this.O2000VendedorSucursalEstado="";this.AV28GridCurrentPage=0;this.AV8VendedorId=0;this.A249VendedorId=0;this.A250VendedorEntidadId=0;this.A251VendedorSucursalId=0;this.A1979VendedorSucursalNombre="";this.A252VendedorSucursalDesde=gx.date.nullDate();this.A1999VendedorSucursalHasta=gx.date.nullDate();this.A2000VendedorSucursalEstado="";this.AV32Pgmname="";this.Events={e11wa2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12wa2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16wa2_client:["ENTER",!0],e17wa2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV8VendedorId",fld:"vVENDEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV32Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV28GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV29GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV32Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV8VendedorId",fld:"vVENDEDORID",pic:"ZZZZZZZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8VendedorId",fld:"vVENDEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV32Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV8VendedorId",fld:"vVENDEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV32Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.VALID_VENDEDORENTIDADID=[[],[]];this.EvtParms.VALID_VENDEDORSUCURSALID=[[],[]];this.setVCMap("AV32Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8VendedorId","vVENDEDORID",0,"int",15,0);this.setVCMap("AV8VendedorId","vVENDEDORID",0,"int",15,0);this.setVCMap("AV32Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8VendedorId","vVENDEDORID",0,"int",15,0);this.setVCMap("AV32Pgmname","vPGMNAME",0,"char",129,0);r.addRefreshingVar({rfrVar:"AV8VendedorId"});r.addRefreshingVar({rfrVar:"AV32Pgmname"});r.addRefreshingParm({rfrVar:"AV8VendedorId"});r.addRefreshingParm({rfrVar:"AV32Pgmname"});this.Initialize()})