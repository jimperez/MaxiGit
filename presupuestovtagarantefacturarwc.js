/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:34:0.36
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtagarantefacturarwc",!0,function(n){var t,r,i;this.ServerClass="presupuestovtagarantefacturarwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV18Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV8PreId=gx.fn.getIntegerValue("vPREID",".");this.AV8PreId=gx.fn.getIntegerValue("vPREID",".");this.AV18Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Valid_Pregaranteid=function(){var n=gx.fn.currentGridRowImpl(17);return this.validCliEvt("Valid_Pregaranteid",17,function(){try{if(gx.fn.currentGridRowImpl(17)===0)return!0;var n=gx.util.balloon.getNew("PREGARANTEID",gx.fn.currentGridRowImpl(17));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e14wy2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15wy2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,18,19,20,21,22,23,24,25];this.GXLastCtrlId=25;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"presupuestovtagarantefacturarwc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(3374,18,"PREGARANTEID","Cuil","","PreGaranteId","int",0,"px",15,15,"right",null,[],3374,"PreGaranteId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3380,19,"PREGARANTENOMBRE","Garante","","PreGaranteNombre","svchar",0,"px",64,64,"left",null,[],3380,"PreGaranteNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(3378,20,"PREGARANTE094","Usuario","","PreGarante094","char",0,"px",15,15,"left",null,[],3378,"PreGarante094",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(3379,21,"PREGARANTE095","Fecha Hora","","PreGarante095","dtime",0,"px",14,14,"right",null,[],3379,"PreGarante095",!0,5,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Garantes","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"UNNAMEDTABLE1",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[18]={id:18,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Pregaranteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREGARANTEID",gxz:"Z3374PreGaranteId",gxold:"O3374PreGaranteId",gxvar:"A3374PreGaranteId",ucs:[],op:[19],ip:[19,18],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3374PreGaranteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3374PreGaranteId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PREGARANTEID",n||gx.fn.currentGridRowImpl(17),gx.O.A3374PreGaranteId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3374PreGaranteId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PREGARANTEID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREGARANTENOMBRE",gxz:"Z3380PreGaranteNombre",gxold:"O3380PreGaranteNombre",gxvar:"A3380PreGaranteNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3380PreGaranteNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3380PreGaranteNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PREGARANTENOMBRE",n||gx.fn.currentGridRowImpl(17),gx.O.A3380PreGaranteNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3380PreGaranteNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PREGARANTENOMBRE",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREGARANTE094",gxz:"Z3378PreGarante094",gxold:"O3378PreGarante094",gxvar:"A3378PreGarante094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3378PreGarante094=n)},v2z:function(n){n!==undefined&&(gx.O.Z3378PreGarante094=n)},v2c:function(n){gx.fn.setGridControlValue("PREGARANTE094",n||gx.fn.currentGridRowImpl(17),gx.O.A3378PreGarante094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3378PreGarante094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PREGARANTE094",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREGARANTE095",gxz:"Z3379PreGarante095",gxold:"O3379PreGarante095",gxvar:"A3379PreGarante095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3379PreGarante095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3379PreGarante095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("PREGARANTE095",n||gx.fn.currentGridRowImpl(17),gx.O.A3379PreGarante095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3379PreGarante095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("PREGARANTE095",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[25]={id:25,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};this.Z3374PreGaranteId=0;this.O3374PreGaranteId=0;this.Z3380PreGaranteNombre="";this.O3380PreGaranteNombre="";this.Z3378PreGarante094="";this.O3378PreGarante094="";this.Z3379PreGarante095=gx.date.nullDate();this.O3379PreGarante095=gx.date.nullDate();this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.A89PreId=0;this.AV8PreId=0;this.A3374PreGaranteId=0;this.A3380PreGaranteNombre="";this.A3378PreGarante094="";this.A3379PreGarante095=gx.date.nullDate();this.AV18Pgmname="";this.Events={e14wy2_client:["ENTER",!0],e15wy2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV8PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV18Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV8PreId",fld:"vPREID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PREID","Visible")',ctrl:"PREID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV8PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV18Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV8PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV18Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV8PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV18Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV8PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV18Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.VALID_PREGARANTEID=[[{av:"A3380PreGaranteNombre",fld:"PREGARANTENOMBRE",pic:"@!"},{av:"A3374PreGaranteId",fld:"PREGARANTEID",pic:"ZZZZZZZZZZZZZZ9"}],[{av:"A3380PreGaranteNombre",fld:"PREGARANTENOMBRE",pic:"@!"}]];this.setVCMap("AV18Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8PreId","vPREID",0,"int",9,0);this.setVCMap("AV8PreId","vPREID",0,"int",9,0);this.setVCMap("AV18Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8PreId","vPREID",0,"int",9,0);this.setVCMap("AV18Pgmname","vPGMNAME",0,"char",129,0);r.addRefreshingVar({rfrVar:"AV8PreId"});r.addRefreshingVar({rfrVar:"AV18Pgmname"});r.addRefreshingParm({rfrVar:"AV8PreId"});r.addRefreshingParm({rfrVar:"AV18Pgmname"});this.Initialize()})