/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 14:12:59.71
*/
gx.evt.autoSkip=!1;gx.define("tarjetaemicomercio_ver",!0,function(n){var i,r,t;this.ServerClass="tarjetaemicomercio_ver";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Trjid=function(){var n=gx.fn.currentGridRowImpl(18);return this.validCliEvt("Valid_Trjid",18,function(){try{if(gx.fn.currentGridRowImpl(18)===0)return!0;var n=gx.util.balloon.getNew("TRJID",gx.fn.currentGridRowImpl(18));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjid=function(){var n=gx.fn.currentGridRowImpl(18);return this.validCliEvt("Valid_Emisortrjid",18,function(){try{if(gx.fn.currentGridRowImpl(18)===0)return!0;var n=gx.util.balloon.getNew("EMISORTRJID",gx.fn.currentGridRowImpl(18));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11rh2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e15rh2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e16rh2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,19,20,21,22,23,24,26,27,28,29];this.GXLastCtrlId=29;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"tarjetaemicomercio_ver",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(96,19,"TRJID","Tarjeta","","TrjId","int",0,"px",4,4,"right",null,[],96,"TrjId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(97,20,"EMISORTRJID","Ide.","","EmisorTrjId","int",0,"px",4,4,"right",null,[],97,"EmisorTrjId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(155,21,"TARJETAEMICOMERCIONRO","Comercio","","TarjetaEmiComercioNro","char",0,"px",15,15,"left",null,[],155,"TarjetaEmiComercioNro",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(2608,22,"TARJETAEMICOMERCIODESCRIPCION","Comercio Descripcion","","TarjetaEmiComercioDescripcion","char",0,"px",30,30,"left",null,[],2608,"TarjetaEmiComercioDescripcion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,25,19,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!1,"bool");t.setProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue","","int");t.setProp("RowsPerPageOptions","Rowsperpageoptions","","char");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","","char");t.addV2CFunction("AV7GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV7GridCurrentPage=n.GetCurrentPage();i[29].c2v()});t.addV2CFunction("AV8GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV8GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV8GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11rh2_client);this.setUserControl(t);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"TABLEMAIN",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[10]={id:10,fld:"",grid:0};i[11]={id:11,fld:"",grid:0};i[12]={id:12,fld:"TABLECONTENT",grid:0};i[13]={id:13,fld:"",grid:0};i[14]={id:14,fld:"",grid:0};i[15]={id:15,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[16]={id:16,fld:"",grid:0};i[17]={id:17,fld:"",grid:0};i[19]={id:19,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:this.Valid_Trjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"TRJID",gxz:"Z96TrjId",gxold:"O96TrjId",gxvar:"A96TrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A96TrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z96TrjId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRJID",n||gx.fn.currentGridRowImpl(18),gx.O.A96TrjId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A96TrjId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRJID",n||gx.fn.currentGridRowImpl(18),".")},nac:gx.falseFn};i[20]={id:20,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:this.Valid_Emisortrjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"EMISORTRJID",gxz:"Z97EmisorTrjId",gxold:"O97EmisorTrjId",gxvar:"A97EmisorTrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z97EmisorTrjId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("EMISORTRJID",n||gx.fn.currentGridRowImpl(18),gx.O.A97EmisorTrjId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("EMISORTRJID",n||gx.fn.currentGridRowImpl(18),".")},nac:gx.falseFn};i[21]={id:21,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMICOMERCIONRO",gxz:"Z155TarjetaEmiComercioNro",gxold:"O155TarjetaEmiComercioNro",gxvar:"A155TarjetaEmiComercioNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A155TarjetaEmiComercioNro=n)},v2z:function(n){n!==undefined&&(gx.O.Z155TarjetaEmiComercioNro=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMICOMERCIONRO",n||gx.fn.currentGridRowImpl(18),gx.O.A155TarjetaEmiComercioNro,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A155TarjetaEmiComercioNro=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMICOMERCIONRO",n||gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};i[22]={id:22,lvl:2,type:"char",len:30,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMICOMERCIODESCRIPCION",gxz:"Z2608TarjetaEmiComercioDescripcion",gxold:"O2608TarjetaEmiComercioDescripcion",gxvar:"A2608TarjetaEmiComercioDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2608TarjetaEmiComercioDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2608TarjetaEmiComercioDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMICOMERCIODESCRIPCION",n||gx.fn.currentGridRowImpl(18),gx.O.A2608TarjetaEmiComercioDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2608TarjetaEmiComercioDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMICOMERCIODESCRIPCION",n||gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};i[23]={id:23,fld:"",grid:0};i[24]={id:24,fld:"",grid:0};i[26]={id:26,fld:"",grid:0};i[27]={id:27,fld:"",grid:0};i[28]={id:28,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};i[29]={id:29,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDCURRENTPAGE",gxz:"ZV7GridCurrentPage",gxold:"OV7GridCurrentPage",gxvar:"AV7GridCurrentPage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7GridCurrentPage=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV7GridCurrentPage=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vGRIDCURRENTPAGE",gx.O.AV7GridCurrentPage,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7GridCurrentPage=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vGRIDCURRENTPAGE",".")},nac:gx.falseFn};this.Z96TrjId=0;this.O96TrjId=0;this.Z97EmisorTrjId=0;this.O97EmisorTrjId=0;this.Z155TarjetaEmiComercioNro="";this.O155TarjetaEmiComercioNro="";this.Z2608TarjetaEmiComercioDescripcion="";this.O2608TarjetaEmiComercioDescripcion="";this.AV7GridCurrentPage=0;this.ZV7GridCurrentPage=0;this.OV7GridCurrentPage=0;this.AV7GridCurrentPage=0;this.A96TrjId=0;this.A97EmisorTrjId=0;this.A155TarjetaEmiComercioNro="";this.A2608TarjetaEmiComercioDescripcion="";this.Events={e11rh2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e15rh2_client:["ENTER",!0],e16rh2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9"},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{av:"AV7GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.Visible",ctrl:"vGRIDCURRENTPAGE",prop:"Visible"},{av:"AV8GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9"},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"},{av:"AV7GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"}],[{av:"AV7GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"}]];this.EvtParms.VALID_TRJID=[[],[]];this.EvtParms.VALID_EMISORTRJID=[[],[]];r.addRefreshingVar({rfrVar:"A96TrjId",rfrProp:"Value",gxAttId:"96"});r.addRefreshingVar({rfrVar:"A97EmisorTrjId",rfrProp:"Value",gxAttId:"97"});r.addRefreshingParm({rfrVar:"A96TrjId",rfrProp:"Value",gxAttId:"96"});r.addRefreshingParm({rfrVar:"A97EmisorTrjId",rfrProp:"Value",gxAttId:"97"});this.Initialize()})