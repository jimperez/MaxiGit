/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:59:46.70
*/
gx.evt.autoSkip=!1;gx.define("promptunidadmedida",!1,function(){var n,r,i,t;this.ServerClass="promptunidadmedida";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV34InOutUMeId=gx.fn.getIntegerValue("vINOUTUMEID",".");this.AV35InOutUMeNom=gx.fn.getControlValue("vINOUTUMENOM")};this.s112_client=function(){this.AV11UMeNomOperator=gx.num.trunc(0,0);this.AV12UMeNom=""};this.e11wg2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12wg2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e17wg2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e13wg2_client=function(){return this.executeServerEvent("'DOCLEANFILTERS'",!0,null,!1,!1)};this.e18wg2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,19,20,21,22,23,24,27,28,30,31,32,33,34,35,36,38,39,40,41,42,43,44];this.GXLastCtrlId=44;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptunidadmedida",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",38,0,"px",17,"px","e17wg2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(13,39,"UMEID","Ide.","","UMeId","int",0,"px",4,4,"right",null,[],13,"UMeId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(363,40,"UMENOM","Unidad Medida","","UMeNom","svchar",0,"px",64,64,"left",null,[],363,"UMeNom",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(864,41,"UMEABR","Abrev.","","UMeAbr","char",0,"px",6,6,"left",null,[],864,"UMeAbr",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(364,42,"UMEESTADO","Estado","UMeEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,45,28,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV31GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV31GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV31GridCurrentPage)});t.addV2CFunction("AV32GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV32GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV32GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11wg2_client);t.addEventHandler("ChangeRowsPerPage",this.e12wg2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[17]={id:17,fld:"CLEANFILTERS",grid:0,evt:"e13wg2_client"};n[19]={id:19,fld:"TABLESPLITTEDFILTERTEXTUMENOM",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"FILTERTEXTUMENOM",format:0,grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"TABLEMERGEDUMENOM",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vUMENOMOPERATOR",gxz:"ZV11UMeNomOperator",gxold:"OV11UMeNomOperator",gxvar:"AV11UMeNomOperator",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV11UMeNomOperator=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11UMeNomOperator=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vUMENOMOPERATOR",gx.O.AV11UMeNomOperator)},c2v:function(){this.val()!==undefined&&(gx.O.AV11UMeNomOperator=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vUMENOMOPERATOR",".")},nac:gx.falseFn};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vUMENOM",gxz:"ZV12UMeNom",gxold:"OV12UMeNom",gxvar:"AV12UMeNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12UMeNom=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12UMeNom=n)},v2c:function(){gx.fn.setControlValue("vUMENOM",gx.O.AV12UMeNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12UMeNom=this.val())},val:function(){return gx.fn.getControlValue("vUMENOM")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[38]={id:38,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV33Select",gxold:"OV33Select",gxvar:"AV33Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV33Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV33Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(37),gx.O.AV33Select,gx.O.AV38Select_GXI)},c2v:function(n){gx.O.AV38Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV33Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(37))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(37))},gxvar_GXI:"AV38Select_GXI",nac:gx.falseFn,evt:"e17wg2_client",std:"ENTER"};n[39]={id:39,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMEID",gxz:"Z13UMeId",gxold:"O13UMeId",gxvar:"A13UMeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A13UMeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z13UMeId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UMEID",n||gx.fn.currentGridRowImpl(37),gx.O.A13UMeId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A13UMeId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("UMEID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMENOM",gxz:"Z363UMeNom",gxold:"O363UMeNom",gxvar:"A363UMeNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A363UMeNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z363UMeNom=n)},v2c:function(n){gx.fn.setGridControlValue("UMENOM",n||gx.fn.currentGridRowImpl(37),gx.O.A363UMeNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A363UMeNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("UMENOM",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"char",len:6,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMEABR",gxz:"Z864UMeAbr",gxold:"O864UMeAbr",gxvar:"A864UMeAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A864UMeAbr=n)},v2z:function(n){n!==undefined&&(gx.O.Z864UMeAbr=n)},v2c:function(n){gx.fn.setGridControlValue("UMEABR",n||gx.fn.currentGridRowImpl(37),gx.O.A864UMeAbr,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A864UMeAbr=this.val(n))},val:function(n){return gx.fn.getGridControlValue("UMEABR",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMEESTADO",gxz:"Z364UMeEstado",gxold:"O364UMeEstado",gxvar:"A364UMeEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A364UMeEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z364UMeEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("UMEESTADO",n||gx.fn.currentGridRowImpl(37),gx.O.A364UMeEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A364UMeEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("UMEESTADO",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};this.AV11UMeNomOperator=0;this.ZV11UMeNomOperator=0;this.OV11UMeNomOperator=0;this.AV12UMeNom="";this.ZV12UMeNom="";this.OV12UMeNom="";this.ZV33Select="";this.OV33Select="";this.Z13UMeId=0;this.O13UMeId=0;this.Z363UMeNom="";this.O363UMeNom="";this.Z864UMeAbr="";this.O864UMeAbr="";this.Z364UMeEstado="";this.O364UMeEstado="";this.AV11UMeNomOperator=0;this.AV12UMeNom="";this.AV31GridCurrentPage=0;this.AV34InOutUMeId=0;this.AV35InOutUMeNom="";this.AV33Select="";this.A13UMeId=0;this.A363UMeNom="";this.A864UMeAbr="";this.A364UMeEstado="";this.Events={e11wg2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12wg2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e17wg2_client:["ENTER",!0],e13wg2_client:["'DOCLEANFILTERS'",!0],e18wg2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vUMENOMOPERATOR"},{av:"AV11UMeNomOperator",fld:"vUMENOMOPERATOR",pic:"ZZZ9"},{av:"AV12UMeNom",fld:"vUMENOM",pic:"@!"}],[{av:"AV31GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV32GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vUMENOMOPERATOR"},{av:"AV11UMeNomOperator",fld:"vUMENOMOPERATOR",pic:"ZZZ9"},{av:"AV12UMeNom",fld:"vUMENOM",pic:"@!"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vUMENOMOPERATOR"},{av:"AV11UMeNomOperator",fld:"vUMENOMOPERATOR",pic:"ZZZ9"},{av:"AV12UMeNom",fld:"vUMENOM",pic:"@!"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV33Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A13UMeId",fld:"UMEID",pic:"ZZZ9",hsh:!0},{av:"A363UMeNom",fld:"UMENOM",pic:"@!",hsh:!0}],[{av:"AV34InOutUMeId",fld:"vINOUTUMEID",pic:"ZZZ9"},{av:"AV35InOutUMeNom",fld:"vINOUTUMENOM",pic:"@!"}]];this.EvtParms["'DOCLEANFILTERS'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vUMENOMOPERATOR"},{av:"AV11UMeNomOperator",fld:"vUMENOMOPERATOR",pic:"ZZZ9"},{av:"AV12UMeNom",fld:"vUMENOM",pic:"@!"}],[{ctrl:"vUMENOMOPERATOR"},{av:"AV11UMeNomOperator",fld:"vUMENOMOPERATOR",pic:"ZZZ9"},{av:"AV12UMeNom",fld:"vUMENOM",pic:"@!"},{av:"AV31GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV32GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV34InOutUMeId","vINOUTUMEID",0,"int",4,0);this.setVCMap("AV35InOutUMeNom","vINOUTUMENOM",0,"svchar",64,0);r.addRefreshingVar(this.GXValidFnc[28]);r.addRefreshingVar(this.GXValidFnc[31]);r.addRefreshingParm(this.GXValidFnc[28]);r.addRefreshingParm(this.GXValidFnc[31]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptunidadmedida)})