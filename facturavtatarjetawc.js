/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:3:15.43
*/
gx.evt.autoSkip=!1;gx.define("facturavtatarjetawc",!0,function(n){var t,i;this.ServerClass="facturavtatarjetawc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A1524TarjetaEmiNombre=gx.fn.getControlValue("TARJETAEMINOMBRE");this.A1038TrjPlanDesde=gx.fn.getDateValue("TRJPLANDESDE");this.A1039TrjPlanHasta=gx.fn.getDateValue("TRJPLANHASTA");this.AV105Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7FacVtaId=gx.fn.getIntegerValue("vFACVTAID",".");this.AV7FacVtaId=gx.fn.getIntegerValue("vFACVTAID",".");this.AV105Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Valid_Trjid=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Trjid",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("TRJID",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjid=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Emisortrjid",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("EMISORTRJID",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjplanid=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Trjplanid",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("TRJPLANID",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjplancosto=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Trjplancosto",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("TRJPLANCOSTO",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Planid=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Planid",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("PLANID",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjnombre=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Emisortrjnombre",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("EMISORTRJNOMBRE",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjnom=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Trjnom",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("TRJNOM",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Plannombre=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Plannombre",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("PLANNOMBRE",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e14ky2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15ky2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];this.GXLastCtrlId=39;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",12,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"facturavtatarjetawc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit(234,13,"FACVTACUPONID","Ide.","","FacVtaCuponId","int",0,"px",4,4,"right",null,[],234,"FacVtaCuponId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(96,14,"TRJID","Tarjeta","","TrjId","int",0,"px",4,4,"right",null,[],96,"TrjId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(97,15,"EMISORTRJID","Ide.","","EmisorTrjId","int",0,"px",4,4,"right",null,[],97,"EmisorTrjId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(98,16,"TRJPLANID","Ide.","","TrjPlanId","int",0,"px",4,4,"right",null,[],98,"TrjPlanId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1532,17,"TARJETAEMIPLANNOMBRE","Plan","","TarjetaEmiPlanNombre","char",0,"px",100,80,"left",null,[],1532,"TarjetaEmiPlanNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1857,18,"FACVTACUPONFECHA","Fecha","Fecha ...","FacVtaCuponFecha","date",0,"px",10,10,"right",null,[],1857,"FacVtaCuponFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1858,19,"FACVTACUPONLOTE","Lote","","FacVtaCuponLote","int",0,"px",4,4,"right",null,[],1858,"FacVtaCuponLote",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1859,20,"FACVTACUPONNRO","Nº","","FacVtaCuponNro","char",0,"px",20,20,"left",null,[],1859,"FacVtaCuponNro",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1860,21,"FACVTACUPONTARJETANRO","Nº Tarjeta","","FacVtaCuponTarjetaNro","char",0,"px",16,16,"left",null,[],1860,"FacVtaCuponTarjetaNro",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1861,22,"FACVTACUPONTARJETAVTO","Vto","","FacVtaCuponTarjetaVto","char",0,"px",5,5,"left",null,[],1861,"FacVtaCuponTarjetaVto",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1862,23,"FACVTACUPONTITULAR","Titular","","FacVtaCuponTitular","char",0,"px",50,50,"left",null,[],1862,"FacVtaCuponTitular",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1863,24,"FACVTACUPONTARJETACODSEG","Cod. Seg. ","","FacVtaCuponTarjetaCodSeg","int",0,"px",4,4,"right",null,[],1863,"FacVtaCuponTarjetaCodSeg",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1864,25,"FACVTACUPONCOSTO","%","","FacVtaCuponCosto","decimal",0,"px",6,6,"right",null,[],1864,"FacVtaCuponCosto",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1865,26,"FACVTACUPONCUOTACANTIDAD","Cant.","","FacVtaCuponCuotaCantidad","int",0,"px",4,4,"right",null,[],1865,"FacVtaCuponCuotaCantidad",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1866,27,"FACVTACUPONIMPORTEFIN","Imp. Fin.","","FacVtaCuponImporteFin","decimal",0,"px",13,13,"right",null,[],1866,"FacVtaCuponImporteFin",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1867,28,"FACVTACUPONCUOTAIMPORTE","Cuota","","FacVtaCuponCuotaImporte","decimal",0,"px",13,13,"right",null,[],1867,"FacVtaCuponCuotaImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1868,29,"FACVTACUPONIMPORTE","Importe","","FacVtaCuponImporte","decimal",0,"px",13,13,"right",null,[],1868,"FacVtaCuponImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(857,30,"TRJPLANCUOTA","Cuotas","","TrjPlanCuota","int",0,"px",3,3,"right",null,[],857,"TrjPlanCuota",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(858,31,"TRJPLANCOSTO","Costo por uso","","TrjPlanCosto","decimal",0,"px",6,6,"right",null,[],858,"TrjPlanCosto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(119,32,"PLANID","Ide. Plan","","PlanId","int",0,"px",4,4,"right",null,[],119,"PlanId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1030,33,"EMISORTRJNOMBRE","Emisor","","EmisorTrjNombre","svchar",0,"px",64,64,"left",null,[],1030,"EmisorTrjNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(849,34,"TRJNOM","Tarjeta","","TrjNom","svchar",0,"px",64,64,"left",null,[],849,"TrjNom",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1040,35,"PLANNOMBRE","Plan Nombre","","PlanNombre","svchar",0,"px",64,64,"left",null,[],1040,"PlanNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[13]={id:13,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONID",gxz:"Z234FacVtaCuponId",gxold:"O234FacVtaCuponId",gxvar:"A234FacVtaCuponId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A234FacVtaCuponId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z234FacVtaCuponId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTACUPONID",n||gx.fn.currentGridRowImpl(12),gx.O.A234FacVtaCuponId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A234FacVtaCuponId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTACUPONID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[14]={id:14,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Trjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJID",gxz:"Z96TrjId",gxold:"O96TrjId",gxvar:"A96TrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A96TrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z96TrjId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRJID",n||gx.fn.currentGridRowImpl(12),gx.O.A96TrjId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A96TrjId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRJID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[15]={id:15,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Emisortrjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJID",gxz:"Z97EmisorTrjId",gxold:"O97EmisorTrjId",gxvar:"A97EmisorTrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z97EmisorTrjId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("EMISORTRJID",n||gx.fn.currentGridRowImpl(12),gx.O.A97EmisorTrjId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("EMISORTRJID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[16]={id:16,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Trjplanid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANID",gxz:"Z98TrjPlanId",gxold:"O98TrjPlanId",gxvar:"A98TrjPlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A98TrjPlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z98TrjPlanId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRJPLANID",n||gx.fn.currentGridRowImpl(12),gx.O.A98TrjPlanId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A98TrjPlanId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRJPLANID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[17]={id:17,lvl:2,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMIPLANNOMBRE",gxz:"Z1532TarjetaEmiPlanNombre",gxold:"O1532TarjetaEmiPlanNombre",gxvar:"A1532TarjetaEmiPlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1532TarjetaEmiPlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1532TarjetaEmiPlanNombre=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMIPLANNOMBRE",n||gx.fn.currentGridRowImpl(12),gx.O.A1532TarjetaEmiPlanNombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1532TarjetaEmiPlanNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMIPLANNOMBRE",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[18]={id:18,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONFECHA",gxz:"Z1857FacVtaCuponFecha",gxold:"O1857FacVtaCuponFecha",gxvar:"A1857FacVtaCuponFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1857FacVtaCuponFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1857FacVtaCuponFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTACUPONFECHA",n||gx.fn.currentGridRowImpl(12),gx.O.A1857FacVtaCuponFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1857FacVtaCuponFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("FACVTACUPONFECHA",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONLOTE",gxz:"Z1858FacVtaCuponLote",gxold:"O1858FacVtaCuponLote",gxvar:"A1858FacVtaCuponLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1858FacVtaCuponLote=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1858FacVtaCuponLote=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTACUPONLOTE",n||gx.fn.currentGridRowImpl(12),gx.O.A1858FacVtaCuponLote,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1858FacVtaCuponLote=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTACUPONLOTE",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONNRO",gxz:"Z1859FacVtaCuponNro",gxold:"O1859FacVtaCuponNro",gxvar:"A1859FacVtaCuponNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1859FacVtaCuponNro=n)},v2z:function(n){n!==undefined&&(gx.O.Z1859FacVtaCuponNro=n)},v2c:function(n){gx.fn.setGridControlValue("FACVTACUPONNRO",n||gx.fn.currentGridRowImpl(12),gx.O.A1859FacVtaCuponNro,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1859FacVtaCuponNro=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTACUPONNRO",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"char",len:16,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONTARJETANRO",gxz:"Z1860FacVtaCuponTarjetaNro",gxold:"O1860FacVtaCuponTarjetaNro",gxvar:"A1860FacVtaCuponTarjetaNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1860FacVtaCuponTarjetaNro=n)},v2z:function(n){n!==undefined&&(gx.O.Z1860FacVtaCuponTarjetaNro=n)},v2c:function(n){gx.fn.setGridControlValue("FACVTACUPONTARJETANRO",n||gx.fn.currentGridRowImpl(12),gx.O.A1860FacVtaCuponTarjetaNro,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1860FacVtaCuponTarjetaNro=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTACUPONTARJETANRO",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"char",len:5,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONTARJETAVTO",gxz:"Z1861FacVtaCuponTarjetaVto",gxold:"O1861FacVtaCuponTarjetaVto",gxvar:"A1861FacVtaCuponTarjetaVto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1861FacVtaCuponTarjetaVto=n)},v2z:function(n){n!==undefined&&(gx.O.Z1861FacVtaCuponTarjetaVto=n)},v2c:function(n){gx.fn.setGridControlValue("FACVTACUPONTARJETAVTO",n||gx.fn.currentGridRowImpl(12),gx.O.A1861FacVtaCuponTarjetaVto,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1861FacVtaCuponTarjetaVto=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTACUPONTARJETAVTO",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"char",len:50,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONTITULAR",gxz:"Z1862FacVtaCuponTitular",gxold:"O1862FacVtaCuponTitular",gxvar:"A1862FacVtaCuponTitular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1862FacVtaCuponTitular=n)},v2z:function(n){n!==undefined&&(gx.O.Z1862FacVtaCuponTitular=n)},v2c:function(n){gx.fn.setGridControlValue("FACVTACUPONTITULAR",n||gx.fn.currentGridRowImpl(12),gx.O.A1862FacVtaCuponTitular,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1862FacVtaCuponTitular=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTACUPONTITULAR",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONTARJETACODSEG",gxz:"Z1863FacVtaCuponTarjetaCodSeg",gxold:"O1863FacVtaCuponTarjetaCodSeg",gxvar:"A1863FacVtaCuponTarjetaCodSeg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1863FacVtaCuponTarjetaCodSeg=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1863FacVtaCuponTarjetaCodSeg=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTACUPONTARJETACODSEG",n||gx.fn.currentGridRowImpl(12),gx.O.A1863FacVtaCuponTarjetaCodSeg,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1863FacVtaCuponTarjetaCodSeg=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTACUPONTARJETACODSEG",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONCOSTO",gxz:"Z1864FacVtaCuponCosto",gxold:"O1864FacVtaCuponCosto",gxvar:"A1864FacVtaCuponCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1864FacVtaCuponCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1864FacVtaCuponCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTACUPONCOSTO",n||gx.fn.currentGridRowImpl(12),gx.O.A1864FacVtaCuponCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1864FacVtaCuponCosto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTACUPONCOSTO",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[26]={id:26,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONCUOTACANTIDAD",gxz:"Z1865FacVtaCuponCuotaCantidad",gxold:"O1865FacVtaCuponCuotaCantidad",gxvar:"A1865FacVtaCuponCuotaCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1865FacVtaCuponCuotaCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1865FacVtaCuponCuotaCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTACUPONCUOTACANTIDAD",n||gx.fn.currentGridRowImpl(12),gx.O.A1865FacVtaCuponCuotaCantidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1865FacVtaCuponCuotaCantidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTACUPONCUOTACANTIDAD",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[27]={id:27,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONIMPORTEFIN",gxz:"Z1866FacVtaCuponImporteFin",gxold:"O1866FacVtaCuponImporteFin",gxvar:"A1866FacVtaCuponImporteFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1866FacVtaCuponImporteFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1866FacVtaCuponImporteFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTACUPONIMPORTEFIN",n||gx.fn.currentGridRowImpl(12),gx.O.A1866FacVtaCuponImporteFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1866FacVtaCuponImporteFin=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTACUPONIMPORTEFIN",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONCUOTAIMPORTE",gxz:"Z1867FacVtaCuponCuotaImporte",gxold:"O1867FacVtaCuponCuotaImporte",gxvar:"A1867FacVtaCuponCuotaImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1867FacVtaCuponCuotaImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1867FacVtaCuponCuotaImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTACUPONCUOTAIMPORTE",n||gx.fn.currentGridRowImpl(12),gx.O.A1867FacVtaCuponCuotaImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1867FacVtaCuponCuotaImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTACUPONCUOTAIMPORTE",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACUPONIMPORTE",gxz:"Z1868FacVtaCuponImporte",gxold:"O1868FacVtaCuponImporte",gxvar:"A1868FacVtaCuponImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1868FacVtaCuponImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1868FacVtaCuponImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTACUPONIMPORTE",n||gx.fn.currentGridRowImpl(12),gx.O.A1868FacVtaCuponImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1868FacVtaCuponImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTACUPONIMPORTE",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANCUOTA",gxz:"Z857TrjPlanCuota",gxold:"O857TrjPlanCuota",gxvar:"A857TrjPlanCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A857TrjPlanCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z857TrjPlanCuota=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRJPLANCUOTA",n||gx.fn.currentGridRowImpl(12),gx.O.A857TrjPlanCuota,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A857TrjPlanCuota=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRJPLANCUOTA",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[31]={id:31,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Trjplancosto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANCOSTO",gxz:"Z858TrjPlanCosto",gxold:"O858TrjPlanCosto",gxvar:"A858TrjPlanCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A858TrjPlanCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z858TrjPlanCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("TRJPLANCOSTO",n||gx.fn.currentGridRowImpl(12),gx.O.A858TrjPlanCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A858TrjPlanCosto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("TRJPLANCOSTO",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[32]={id:32,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Planid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANID",gxz:"Z119PlanId",gxold:"O119PlanId",gxvar:"A119PlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A119PlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z119PlanId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PLANID",n||gx.fn.currentGridRowImpl(12),gx.O.A119PlanId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A119PlanId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PLANID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[33]={id:33,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Emisortrjnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJNOMBRE",gxz:"Z1030EmisorTrjNombre",gxold:"O1030EmisorTrjNombre",gxvar:"A1030EmisorTrjNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1030EmisorTrjNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1030EmisorTrjNombre=n)},v2c:function(n){gx.fn.setGridControlValue("EMISORTRJNOMBRE",n||gx.fn.currentGridRowImpl(12),gx.O.A1030EmisorTrjNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1030EmisorTrjNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EMISORTRJNOMBRE",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[34]={id:34,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Trjnom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJNOM",gxz:"Z849TrjNom",gxold:"O849TrjNom",gxvar:"A849TrjNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A849TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z849TrjNom=n)},v2c:function(n){gx.fn.setGridControlValue("TRJNOM",n||gx.fn.currentGridRowImpl(12),gx.O.A849TrjNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A849TrjNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJNOM",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[35]={id:35,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Plannombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANNOMBRE",gxz:"Z1040PlanNombre",gxold:"O1040PlanNombre",gxvar:"A1040PlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1040PlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1040PlanNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PLANNOMBRE",n||gx.fn.currentGridRowImpl(12),gx.O.A1040PlanNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1040PlanNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANNOMBRE",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[39]={id:39,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAID",gxz:"Z218FacVtaId",gxold:"O218FacVtaId",gxvar:"A218FacVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z218FacVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTAID",gx.O.A218FacVtaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTAID",".")},nac:gx.falseFn};this.Z234FacVtaCuponId=0;this.O234FacVtaCuponId=0;this.Z96TrjId=0;this.O96TrjId=0;this.Z97EmisorTrjId=0;this.O97EmisorTrjId=0;this.Z98TrjPlanId=0;this.O98TrjPlanId=0;this.Z1532TarjetaEmiPlanNombre="";this.O1532TarjetaEmiPlanNombre="";this.Z1857FacVtaCuponFecha=gx.date.nullDate();this.O1857FacVtaCuponFecha=gx.date.nullDate();this.Z1858FacVtaCuponLote=0;this.O1858FacVtaCuponLote=0;this.Z1859FacVtaCuponNro="";this.O1859FacVtaCuponNro="";this.Z1860FacVtaCuponTarjetaNro="";this.O1860FacVtaCuponTarjetaNro="";this.Z1861FacVtaCuponTarjetaVto="";this.O1861FacVtaCuponTarjetaVto="";this.Z1862FacVtaCuponTitular="";this.O1862FacVtaCuponTitular="";this.Z1863FacVtaCuponTarjetaCodSeg=0;this.O1863FacVtaCuponTarjetaCodSeg=0;this.Z1864FacVtaCuponCosto=0;this.O1864FacVtaCuponCosto=0;this.Z1865FacVtaCuponCuotaCantidad=0;this.O1865FacVtaCuponCuotaCantidad=0;this.Z1866FacVtaCuponImporteFin=0;this.O1866FacVtaCuponImporteFin=0;this.Z1867FacVtaCuponCuotaImporte=0;this.O1867FacVtaCuponCuotaImporte=0;this.Z1868FacVtaCuponImporte=0;this.O1868FacVtaCuponImporte=0;this.Z857TrjPlanCuota=0;this.O857TrjPlanCuota=0;this.Z858TrjPlanCosto=0;this.O858TrjPlanCosto=0;this.Z119PlanId=0;this.O119PlanId=0;this.Z1030EmisorTrjNombre="";this.O1030EmisorTrjNombre="";this.Z849TrjNom="";this.O849TrjNom="";this.Z1040PlanNombre="";this.O1040PlanNombre="";this.A218FacVtaId=0;this.Z218FacVtaId=0;this.O218FacVtaId=0;this.A218FacVtaId=0;this.AV7FacVtaId=0;this.A1524TarjetaEmiNombre="";this.A1039TrjPlanHasta=gx.date.nullDate();this.A1038TrjPlanDesde=gx.date.nullDate();this.A234FacVtaCuponId=0;this.A96TrjId=0;this.A97EmisorTrjId=0;this.A98TrjPlanId=0;this.A1532TarjetaEmiPlanNombre="";this.A1857FacVtaCuponFecha=gx.date.nullDate();this.A1858FacVtaCuponLote=0;this.A1859FacVtaCuponNro="";this.A1860FacVtaCuponTarjetaNro="";this.A1861FacVtaCuponTarjetaVto="";this.A1862FacVtaCuponTitular="";this.A1863FacVtaCuponTarjetaCodSeg=0;this.A1864FacVtaCuponCosto=0;this.A1865FacVtaCuponCuotaCantidad=0;this.A1866FacVtaCuponImporteFin=0;this.A1867FacVtaCuponCuotaImporte=0;this.A1868FacVtaCuponImporte=0;this.A857TrjPlanCuota=0;this.A858TrjPlanCosto=0;this.A119PlanId=0;this.A1030EmisorTrjNombre="";this.A849TrjNom="";this.A1040PlanNombre="";this.AV105Pgmname="";this.Events={e14ky2_client:["ENTER",!0],e15ky2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV105Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.START=[[{av:"AV105Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("FACVTAID","Visible")',ctrl:"FACVTAID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV105Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV105Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV105Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV105Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.VALID_TRJID=[[],[]];this.EvtParms.VALID_EMISORTRJID=[[],[]];this.EvtParms.VALID_TRJPLANID=[[],[]];this.EvtParms.VALID_TRJPLANCOSTO=[[],[]];this.EvtParms.VALID_PLANID=[[],[]];this.EvtParms.VALID_EMISORTRJNOMBRE=[[],[]];this.EvtParms.VALID_TRJNOM=[[],[]];this.EvtParms.VALID_PLANNOMBRE=[[],[]];this.setVCMap("A1524TarjetaEmiNombre","TARJETAEMINOMBRE",0,"svchar",64,0);this.setVCMap("A1038TrjPlanDesde","TRJPLANDESDE",0,"date",8,0);this.setVCMap("A1039TrjPlanHasta","TRJPLANHASTA",0,"date",8,0);this.setVCMap("AV105Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV7FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV105Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV105Pgmname","vPGMNAME",0,"char",129,0);i.addRefreshingVar({rfrVar:"AV7FacVtaId"});i.addRefreshingVar({rfrVar:"AV105Pgmname"});i.addRefreshingParm({rfrVar:"AV7FacVtaId"});i.addRefreshingParm({rfrVar:"AV105Pgmname"});this.Initialize()})