/*!   GeneXus C# 16_0_5-135614 on 10/27/2019 11:15:40.58
*/
gx.evt.autoSkip=!1;gx.define("remitoajusteremitoajusteestadowc",!0,function(n){var t,u,r,i;this.ServerClass="remitoajusteremitoajusteestadowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV48Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV8RtoAjusteId=gx.fn.getIntegerValue("vRTOAJUSTEID",".");this.AV8RtoAjusteId=gx.fn.getIntegerValue("vRTOAJUSTEID",".");this.AV48Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Validv_Rtoajusteestadoestado=function(){return this.validCliEvt("Validv_Rtoajusteestadoestado",0,function(){try{var n=gx.util.balloon.getNew("vRTOAJUSTEESTADOESTADO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11xd2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12xd2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16xd2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17xd2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,37,38,39,40];this.GXLastCtrlId=40;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"remitoajusteremitoajusteestadowc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);u=this.GridContainer;u.addSingleLineEdit(3386,29,"RTOAJUSTEESTADOID","Ide.","","RtoAjusteEstadoId","int",0,"px",8,8,"right",null,[],3386,"RtoAjusteEstadoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addComboBox(3395,30,"RTOAJUSTEESTADOESTADO","Estado","RtoAjusteEstadoEstado","char",null,0,!0,!1,0,"px","WWColumn");u.addSingleLineEdit(3396,31,"RTOAJUSTEESTADOFECHAHORA","Fecha/Hora","","RtoAjusteEstadoFechaHora","dtime",0,"px",14,14,"right",null,[],3396,"RtoAjusteEstadoFechaHora",!0,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3398,32,"RTOAJUSTEESTADOUSUARIO","Usuario","","RtoAjusteEstadoUsuario","char",0,"px",15,15,"left",null,[],3398,"RtoAjusteEstadoUsuario",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(3397,33,"RTOAJUSTEESTADOIP","IP","","RtoAjusteEstadoIP","char",0,"px",15,15,"left",null,[],3397,"RtoAjusteEstadoIP",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(u);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setProp("Gx Control Type","Gxcontroltype","","int");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,36,22,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV37GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV37GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV37GridCurrentPage)});i.addV2CFunction("AV38GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV38GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV38GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11xd2_client);i.addEventHandler("ChangeRowsPerPage",this.e12xd2_client);this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"TABLEFILTERS",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Rtoajusteestadoestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vRTOAJUSTEESTADOESTADO",gxz:"ZV16RtoAjusteEstadoEstado",gxold:"OV16RtoAjusteEstadoEstado",gxvar:"AV16RtoAjusteEstadoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV16RtoAjusteEstadoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16RtoAjusteEstadoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("vRTOAJUSTEESTADOESTADO",gx.O.AV16RtoAjusteEstadoEstado)},c2v:function(){this.val()!==undefined&&(gx.O.AV16RtoAjusteEstadoEstado=this.val())},val:function(){return gx.fn.getControlValue("vRTOAJUSTEESTADOESTADO")},nac:gx.falseFn};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[29]={id:29,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOAJUSTEESTADOID",gxz:"Z3386RtoAjusteEstadoId",gxold:"O3386RtoAjusteEstadoId",gxvar:"A3386RtoAjusteEstadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3386RtoAjusteEstadoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3386RtoAjusteEstadoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RTOAJUSTEESTADOID",n||gx.fn.currentGridRowImpl(28),gx.O.A3386RtoAjusteEstadoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3386RtoAjusteEstadoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RTOAJUSTEESTADOID",n||gx.fn.currentGridRowImpl(28),".")},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOAJUSTEESTADOESTADO",gxz:"Z3395RtoAjusteEstadoEstado",gxold:"O3395RtoAjusteEstadoEstado",gxvar:"A3395RtoAjusteEstadoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3395RtoAjusteEstadoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z3395RtoAjusteEstadoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("RTOAJUSTEESTADOESTADO",n||gx.fn.currentGridRowImpl(28),gx.O.A3395RtoAjusteEstadoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3395RtoAjusteEstadoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("RTOAJUSTEESTADOESTADO",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[31]={id:31,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOAJUSTEESTADOFECHAHORA",gxz:"Z3396RtoAjusteEstadoFechaHora",gxold:"O3396RtoAjusteEstadoFechaHora",gxvar:"A3396RtoAjusteEstadoFechaHora",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3396RtoAjusteEstadoFechaHora=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3396RtoAjusteEstadoFechaHora=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("RTOAJUSTEESTADOFECHAHORA",n||gx.fn.currentGridRowImpl(28),gx.O.A3396RtoAjusteEstadoFechaHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3396RtoAjusteEstadoFechaHora=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("RTOAJUSTEESTADOFECHAHORA",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[32]={id:32,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOAJUSTEESTADOUSUARIO",gxz:"Z3398RtoAjusteEstadoUsuario",gxold:"O3398RtoAjusteEstadoUsuario",gxvar:"A3398RtoAjusteEstadoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3398RtoAjusteEstadoUsuario=n)},v2z:function(n){n!==undefined&&(gx.O.Z3398RtoAjusteEstadoUsuario=n)},v2c:function(n){gx.fn.setGridControlValue("RTOAJUSTEESTADOUSUARIO",n||gx.fn.currentGridRowImpl(28),gx.O.A3398RtoAjusteEstadoUsuario,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3398RtoAjusteEstadoUsuario=this.val(n))},val:function(n){return gx.fn.getGridControlValue("RTOAJUSTEESTADOUSUARIO",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[33]={id:33,lvl:2,type:"char",len:15,dec:0,sign:!1,pic:"999.999.999",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOAJUSTEESTADOIP",gxz:"Z3397RtoAjusteEstadoIP",gxold:"O3397RtoAjusteEstadoIP",gxvar:"A3397RtoAjusteEstadoIP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3397RtoAjusteEstadoIP=n)},v2z:function(n){n!==undefined&&(gx.O.Z3397RtoAjusteEstadoIP=n)},v2c:function(n){gx.fn.setGridControlValue("RTOAJUSTEESTADOIP",n||gx.fn.currentGridRowImpl(28),gx.O.A3397RtoAjusteEstadoIP,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3397RtoAjusteEstadoIP=this.val(n))},val:function(n){return gx.fn.getGridControlValue("RTOAJUSTEESTADOIP",n||gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[40]={id:40,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOAJUSTEID",gxz:"Z3381RtoAjusteId",gxold:"O3381RtoAjusteId",gxvar:"A3381RtoAjusteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3381RtoAjusteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3381RtoAjusteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("RTOAJUSTEID",gx.O.A3381RtoAjusteId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3381RtoAjusteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("RTOAJUSTEID",".")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});this.AV16RtoAjusteEstadoEstado="";this.ZV16RtoAjusteEstadoEstado="";this.OV16RtoAjusteEstadoEstado="";this.Z3386RtoAjusteEstadoId=0;this.O3386RtoAjusteEstadoId=0;this.Z3395RtoAjusteEstadoEstado="";this.O3395RtoAjusteEstadoEstado="";this.Z3396RtoAjusteEstadoFechaHora=gx.date.nullDate();this.O3396RtoAjusteEstadoFechaHora=gx.date.nullDate();this.Z3398RtoAjusteEstadoUsuario="";this.O3398RtoAjusteEstadoUsuario="";this.Z3397RtoAjusteEstadoIP="";this.O3397RtoAjusteEstadoIP="";this.A3381RtoAjusteId=0;this.Z3381RtoAjusteId=0;this.O3381RtoAjusteId=0;this.AV16RtoAjusteEstadoEstado="";this.AV37GridCurrentPage=0;this.A3381RtoAjusteId=0;this.AV8RtoAjusteId=0;this.A3386RtoAjusteEstadoId=0;this.A3395RtoAjusteEstadoEstado="";this.A3396RtoAjusteEstadoFechaHora=gx.date.nullDate();this.A3398RtoAjusteEstadoUsuario="";this.A3397RtoAjusteEstadoIP="";this.AV48Pgmname="";this.Events={e11xd2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12xd2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16xd2_client:["ENTER",!0],e17xd2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV8RtoAjusteId",fld:"vRTOAJUSTEID",pic:"ZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vRTOAJUSTEESTADOESTADO"},{av:"AV16RtoAjusteEstadoEstado",fld:"vRTOAJUSTEESTADOESTADO",pic:""},{av:"AV48Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV37GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV38GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{ctrl:"vRTOAJUSTEESTADOESTADO"},{av:"AV16RtoAjusteEstadoEstado",fld:"vRTOAJUSTEESTADOESTADO",pic:""},{av:"AV48Pgmname",fld:"vPGMNAME",pic:""},{av:"AV8RtoAjusteId",fld:"vRTOAJUSTEID",pic:"ZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"vRTOAJUSTEESTADOESTADO"},{av:"AV16RtoAjusteEstadoEstado",fld:"vRTOAJUSTEESTADOESTADO",pic:""},{av:'gx.fn.getCtrlProperty("RTOAJUSTEID","Visible")',ctrl:"RTOAJUSTEID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vRTOAJUSTEESTADOESTADO"},{av:"AV16RtoAjusteEstadoEstado",fld:"vRTOAJUSTEESTADOESTADO",pic:""},{av:"AV8RtoAjusteId",fld:"vRTOAJUSTEID",pic:"ZZZZZZZ9"},{av:"AV48Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vRTOAJUSTEESTADOESTADO"},{av:"AV16RtoAjusteEstadoEstado",fld:"vRTOAJUSTEESTADOESTADO",pic:""},{av:"AV8RtoAjusteId",fld:"vRTOAJUSTEID",pic:"ZZZZZZZ9"},{av:"AV48Pgmname",fld:"vPGMNAME",pic:""},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.VALIDV_RTOAJUSTEESTADOESTADO=[[],[]];this.setVCMap("AV48Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8RtoAjusteId","vRTOAJUSTEID",0,"int",8,0);this.setVCMap("AV8RtoAjusteId","vRTOAJUSTEID",0,"int",8,0);this.setVCMap("AV48Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8RtoAjusteId","vRTOAJUSTEID",0,"int",8,0);this.setVCMap("AV48Pgmname","vPGMNAME",0,"char",129,0);u.addRefreshingVar(this.GXValidFnc[22]);u.addRefreshingVar({rfrVar:"AV8RtoAjusteId"});u.addRefreshingVar({rfrVar:"AV48Pgmname"});u.addRefreshingParm(this.GXValidFnc[22]);u.addRefreshingParm({rfrVar:"AV8RtoAjusteId"});u.addRefreshingParm({rfrVar:"AV48Pgmname"});this.Initialize()})