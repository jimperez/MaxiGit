/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:9:54.96
*/
gx.evt.autoSkip=!1;gx.define("tarjetaemiplantarjetaemiplanvigwc",!0,function(n){var t,r,u,i;this.ServerClass="tarjetaemiplantarjetaemiplanvigwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV28IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV29IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV30IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV7TrjId=gx.fn.getIntegerValue("vTRJID",".");this.AV8EmisorTrjId=gx.fn.getIntegerValue("vEMISORTRJID",".");this.AV9TrjPlanId=gx.fn.getIntegerValue("vTRJPLANID",".");this.AV7TrjId=gx.fn.getIntegerValue("vTRJID",".");this.AV8EmisorTrjId=gx.fn.getIntegerValue("vEMISORTRJID",".");this.AV9TrjPlanId=gx.fn.getIntegerValue("vTRJPLANID",".");this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV28IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV29IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV30IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.Validv_Trjemisucplanvigfecha=function(){return this.validCliEvt("Validv_Trjemisucplanvigfecha",0,function(){try{var n=gx.util.balloon.getNew("vTRJEMISUCPLANVIGFECHA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV15TrjEmiSucPlanVigFecha)==0||new gx.date.gxdate(this.AV15TrjEmiSucPlanVigFecha).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Trj Emi Suc Plan Vig Fecha fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Trjemisucplanvigfecha_to=function(){return this.validCliEvt("Validv_Trjemisucplanvigfecha_to",0,function(){try{var n=gx.util.balloon.getNew("vTRJEMISUCPLANVIGFECHA_TO");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV16TrjEmiSucPlanVigFecha_To)==0||new gx.date.gxdate(this.AV16TrjEmiSucPlanVigFecha_To).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Trj Emi Suc Plan Vig Fecha_To fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11h52_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12h52_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13h52_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e17h52_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18h52_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,39,41,42,44,45,46,47,50,51,52,54,55,56,57,58,59,61,62,63,64,65,66];this.GXLastCtrlId=66;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"tarjetaemiplantarjetaemiplanvigwc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Display",54,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Update",55,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Delete",56,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit(156,57,"TRJEMISUCPLANVIGFECHA","Vigencia","Fecha ...","TrjEmiSucPlanVigFecha","date",0,"px",10,10,"right",null,[],156,"TrjEmiSucPlanVigFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setProp("Gx Control Type","Gxcontroltype","","int");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,60,37,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV20GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV20GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV20GridCurrentPage)});i.addV2CFunction("AV21GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV21GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV21GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11h52_client);i.addEventHandler("ChangeRowsPerPage",this.e12h52_client);this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"TABLEACTIONS",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"BTNINSERT",grid:0,evt:"e13h52_client"};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"TABLEFILTERS",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"TABLESPLITTEDFILTERTEXTTRJEMISUCPLANVIGFECHA",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"FILTERTEXTTRJEMISUCPLANVIGFECHA",format:0,grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"TABLEMERGEDTRJEMISUCPLANVIGFECHA",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trjemisucplanvigfecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTRJEMISUCPLANVIGFECHA",gxz:"ZV15TrjEmiSucPlanVigFecha",gxold:"OV15TrjEmiSucPlanVigFecha",gxvar:"AV15TrjEmiSucPlanVigFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[37],ip:[37],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15TrjEmiSucPlanVigFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV15TrjEmiSucPlanVigFecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vTRJEMISUCPLANVIGFECHA",gx.O.AV15TrjEmiSucPlanVigFecha,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV15TrjEmiSucPlanVigFecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vTRJEMISUCPLANVIGFECHA")},nac:gx.falseFn};t[39]={id:39,fld:"TRJEMISUCPLANVIGFECHA_RANGEMIDDLETEXT",format:0,grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trjemisucplanvigfecha_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTRJEMISUCPLANVIGFECHA_TO",gxz:"ZV16TrjEmiSucPlanVigFecha_To",gxold:"OV16TrjEmiSucPlanVigFecha_To",gxvar:"AV16TrjEmiSucPlanVigFecha_To",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[42],ip:[42],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV16TrjEmiSucPlanVigFecha_To=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV16TrjEmiSucPlanVigFecha_To=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vTRJEMISUCPLANVIGFECHA_TO",gx.O.AV16TrjEmiSucPlanVigFecha_To,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV16TrjEmiSucPlanVigFecha_To=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vTRJEMISUCPLANVIGFECHA_TO")},nac:gx.falseFn};t[44]={id:44,fld:"TRJEMISUCPLANVIGFECHA_RIGHTTEXT",format:0,grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"UNNAMEDTABLE1",grid:0};t[50]={id:50,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[54]={id:54,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV24Display",gxold:"OV24Display",gxvar:"AV24Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV24Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV24Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(53),gx.O.AV24Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV24Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};t[55]={id:55,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV23Update",gxold:"OV23Update",gxvar:"AV23Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV23Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV23Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(53),gx.O.AV23Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV23Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};t[56]={id:56,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV22Delete",gxold:"OV22Delete",gxvar:"AV22Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV22Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV22Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(53),gx.O.AV22Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV22Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};t[57]={id:57,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJEMISUCPLANVIGFECHA",gxz:"Z156TrjEmiSucPlanVigFecha",gxold:"O156TrjEmiSucPlanVigFecha",gxvar:"A156TrjEmiSucPlanVigFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A156TrjEmiSucPlanVigFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z156TrjEmiSucPlanVigFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("TRJEMISUCPLANVIGFECHA",n||gx.fn.currentGridRowImpl(53),gx.O.A156TrjEmiSucPlanVigFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A156TrjEmiSucPlanVigFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("TRJEMISUCPLANVIGFECHA",n||gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};t[58]={id:58,fld:"",grid:0};t[59]={id:59,fld:"",grid:0};t[61]={id:61,fld:"",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[64]={id:64,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJID",gxz:"Z96TrjId",gxold:"O96TrjId",gxvar:"A96TrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A96TrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z96TrjId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRJID",gx.O.A96TrjId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A96TrjId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRJID",".")},nac:gx.falseFn};t[65]={id:65,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJID",gxz:"Z97EmisorTrjId",gxold:"O97EmisorTrjId",gxvar:"A97EmisorTrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z97EmisorTrjId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EMISORTRJID",gx.O.A97EmisorTrjId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EMISORTRJID",".")},nac:gx.falseFn};this.declareDomainHdlr(65,function(){});t[66]={id:66,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANID",gxz:"Z98TrjPlanId",gxold:"O98TrjPlanId",gxvar:"A98TrjPlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A98TrjPlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z98TrjPlanId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRJPLANID",gx.O.A98TrjPlanId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A98TrjPlanId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRJPLANID",".")},nac:gx.falseFn};this.AV15TrjEmiSucPlanVigFecha=gx.date.nullDate();this.ZV15TrjEmiSucPlanVigFecha=gx.date.nullDate();this.OV15TrjEmiSucPlanVigFecha=gx.date.nullDate();this.AV16TrjEmiSucPlanVigFecha_To=gx.date.nullDate();this.ZV16TrjEmiSucPlanVigFecha_To=gx.date.nullDate();this.OV16TrjEmiSucPlanVigFecha_To=gx.date.nullDate();this.ZV24Display="";this.OV24Display="";this.ZV23Update="";this.OV23Update="";this.ZV22Delete="";this.OV22Delete="";this.Z156TrjEmiSucPlanVigFecha=gx.date.nullDate();this.O156TrjEmiSucPlanVigFecha=gx.date.nullDate();this.A96TrjId=0;this.Z96TrjId=0;this.O96TrjId=0;this.A97EmisorTrjId=0;this.Z97EmisorTrjId=0;this.O97EmisorTrjId=0;this.A98TrjPlanId=0;this.Z98TrjPlanId=0;this.O98TrjPlanId=0;this.AV15TrjEmiSucPlanVigFecha=gx.date.nullDate();this.AV16TrjEmiSucPlanVigFecha_To=gx.date.nullDate();this.AV20GridCurrentPage=0;this.A96TrjId=0;this.A97EmisorTrjId=0;this.A98TrjPlanId=0;this.AV7TrjId=0;this.AV8EmisorTrjId=0;this.AV9TrjPlanId=0;this.AV24Display="";this.AV23Update="";this.AV22Delete="";this.A156TrjEmiSucPlanVigFecha=gx.date.nullDate();this.AV34Pgmname="";this.AV28IsAuthorized_Display=!1;this.AV29IsAuthorized_Update=!1;this.AV30IsAuthorized_Delete=!1;this.Events={e11h52_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12h52_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13h52_client:["'DOINSERT'",!0],e17h52_client:["ENTER",!0],e18h52_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7TrjId",fld:"vTRJID",pic:"ZZZ9"},{av:"AV8EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9"},{av:"AV9TrjPlanId",fld:"vTRJPLANID",pic:"ZZZ9"},{av:"AV28IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV29IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV30IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV15TrjEmiSucPlanVigFecha",fld:"vTRJEMISUCPLANVIGFECHA",pic:""},{av:"AV16TrjEmiSucPlanVigFecha_To",fld:"vTRJEMISUCPLANVIGFECHA_TO",pic:""},{av:"AV34Pgmname",fld:"vPGMNAME",pic:""},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9"},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"A98TrjPlanId",fld:"TRJPLANID",pic:"ZZZ9"}],[{av:"AV20GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV21GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV28IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV29IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV30IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV34Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7TrjId",fld:"vTRJID",pic:"ZZZ9"},{av:"AV8EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9"},{av:"AV9TrjPlanId",fld:"vTRJPLANID",pic:"ZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("TRJID","Visible")',ctrl:"TRJID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("EMISORTRJID","Visible")',ctrl:"EMISORTRJID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJPLANID","Visible")',ctrl:"TRJPLANID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV15TrjEmiSucPlanVigFecha",fld:"vTRJEMISUCPLANVIGFECHA",pic:""},{av:"AV16TrjEmiSucPlanVigFecha_To",fld:"vTRJEMISUCPLANVIGFECHA_TO",pic:""}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV15TrjEmiSucPlanVigFecha",fld:"vTRJEMISUCPLANVIGFECHA",pic:""},{av:"AV16TrjEmiSucPlanVigFecha_To",fld:"vTRJEMISUCPLANVIGFECHA_TO",pic:""},{av:"AV7TrjId",fld:"vTRJID",pic:"ZZZ9"},{av:"AV8EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9"},{av:"AV9TrjPlanId",fld:"vTRJPLANID",pic:"ZZZ9"},{av:"AV34Pgmname",fld:"vPGMNAME",pic:""},{av:"AV28IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV29IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV30IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9"},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"A98TrjPlanId",fld:"TRJPLANID",pic:"ZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV15TrjEmiSucPlanVigFecha",fld:"vTRJEMISUCPLANVIGFECHA",pic:""},{av:"AV16TrjEmiSucPlanVigFecha_To",fld:"vTRJEMISUCPLANVIGFECHA_TO",pic:""},{av:"AV7TrjId",fld:"vTRJID",pic:"ZZZ9"},{av:"AV8EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9"},{av:"AV9TrjPlanId",fld:"vTRJPLANID",pic:"ZZZ9"},{av:"AV34Pgmname",fld:"vPGMNAME",pic:""},{av:"AV28IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV29IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV30IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9"},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"A98TrjPlanId",fld:"TRJPLANID",pic:"ZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV28IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9"},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9"},{av:"A98TrjPlanId",fld:"TRJPLANID",pic:"ZZZ9"},{av:"A156TrjEmiSucPlanVigFecha",fld:"TRJEMISUCPLANVIGFECHA",pic:"",hsh:!0},{av:"AV29IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV30IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}],[{av:"AV24Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV23Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV22Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"AV7TrjId",fld:"vTRJID",pic:"ZZZ9"},{av:"AV8EmisorTrjId",fld:"vEMISORTRJID",pic:"ZZZ9"},{av:"AV9TrjPlanId",fld:"vTRJPLANID",pic:"ZZZ9"},{av:"A156TrjEmiSucPlanVigFecha",fld:"TRJEMISUCPLANVIGFECHA",pic:"",hsh:!0}],[]];this.EvtParms.VALIDV_TRJEMISUCPLANVIGFECHA=[[],[]];this.EvtParms.VALIDV_TRJEMISUCPLANVIGFECHA_TO=[[],[]];this.setVCMap("AV34Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV28IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV29IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV30IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV7TrjId","vTRJID",0,"int",4,0);this.setVCMap("AV8EmisorTrjId","vEMISORTRJID",0,"int",4,0);this.setVCMap("AV9TrjPlanId","vTRJPLANID",0,"int",4,0);this.setVCMap("AV7TrjId","vTRJID",0,"int",4,0);this.setVCMap("AV8EmisorTrjId","vEMISORTRJID",0,"int",4,0);this.setVCMap("AV9TrjPlanId","vTRJPLANID",0,"int",4,0);this.setVCMap("AV34Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV28IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV29IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV30IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV7TrjId","vTRJID",0,"int",4,0);this.setVCMap("AV8EmisorTrjId","vEMISORTRJID",0,"int",4,0);this.setVCMap("AV9TrjPlanId","vTRJPLANID",0,"int",4,0);this.setVCMap("AV34Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV28IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV29IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV30IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);r.addRefreshingVar(this.GXValidFnc[37]);r.addRefreshingVar(this.GXValidFnc[42]);r.addRefreshingVar({rfrVar:"AV7TrjId"});r.addRefreshingVar({rfrVar:"AV8EmisorTrjId"});r.addRefreshingVar({rfrVar:"AV9TrjPlanId"});r.addRefreshingVar({rfrVar:"AV34Pgmname"});r.addRefreshingVar({rfrVar:"AV28IsAuthorized_Display"});r.addRefreshingVar({rfrVar:"AV29IsAuthorized_Update"});r.addRefreshingVar({rfrVar:"AV30IsAuthorized_Delete"});r.addRefreshingVar(this.GXValidFnc[64]);r.addRefreshingVar(this.GXValidFnc[65]);r.addRefreshingVar(this.GXValidFnc[66]);r.addRefreshingParm(this.GXValidFnc[37]);r.addRefreshingParm(this.GXValidFnc[42]);r.addRefreshingParm({rfrVar:"AV7TrjId"});r.addRefreshingParm({rfrVar:"AV8EmisorTrjId"});r.addRefreshingParm({rfrVar:"AV9TrjPlanId"});r.addRefreshingParm({rfrVar:"AV34Pgmname"});r.addRefreshingParm({rfrVar:"AV28IsAuthorized_Display"});r.addRefreshingParm({rfrVar:"AV29IsAuthorized_Update"});r.addRefreshingParm({rfrVar:"AV30IsAuthorized_Delete"});r.addRefreshingParm(this.GXValidFnc[64]);r.addRefreshingParm(this.GXValidFnc[65]);r.addRefreshingParm(this.GXValidFnc[66]);this.Initialize()})