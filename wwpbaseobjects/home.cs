/*
               File: WWPBaseObjects.Home
        Description: Inicio
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/3/2019 15:43:45.68
       Program type: Main program
          Main DBMS: SQL Server
*/
using System;
using System.Collections;
using GeneXus.Utils;
using GeneXus.Resources;
using GeneXus.Application;
using GeneXus.Metadata;
using GeneXus.Cryptography;
using System.Data;
using GeneXus.Data;
using com.genexus;
using GeneXus.Data.ADO;
using GeneXus.Data.NTier;
using GeneXus.Data.NTier.ADO;
using GeneXus.WebControls;
using GeneXus.Http;
using GeneXus.XML;
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs.wwpbaseobjects {
   public class home : GXDataArea, System.Web.SessionState.IRequiresSessionState
   {
      public home( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         dsGAM = context.GetDataStore("GAM");
         dsAFIP = context.GetDataStore("AFIP");
         dsDefault = context.GetDataStore("Default");
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public home( IGxContext context )
      {
         this.context = context;
         IsMain = false;
         dsGAM = context.GetDataStore("GAM");
         dsAFIP = context.GetDataStore("AFIP");
         dsDefault = context.GetDataStore("Default");
      }

      public void release( )
      {
      }

      public void execute( )
      {
         executePrivate();
      }

      void executePrivate( )
      {
         isStatic = false;
         webExecute();
      }

      protected override void createObjects( )
      {
      }

      protected void INITWEB( )
      {
         initialize_properties( ) ;
         if ( nGotPars == 0 )
         {
            entryPointCalled = false;
            gxfirstwebparm = GetNextPar( );
            gxfirstwebparm_bkp = gxfirstwebparm;
            gxfirstwebparm = DecryptAjaxCall( gxfirstwebparm);
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
            if ( StringUtil.StrCmp(gxfirstwebparm, "dyncall") == 0 )
            {
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               dyncall( GetNextPar( )) ;
               return  ;
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxEvt") == 0 )
            {
               setAjaxEventMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxfirstwebparm = GetNextPar( );
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxfullajaxEvt") == 0 )
            {
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxfirstwebparm = GetNextPar( );
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxNewRow_"+"Banner") == 0 )
            {
               nRC_GXsfl_12 = (int)(NumberUtil.Val( GetNextPar( ), "."));
               nGXsfl_12_idx = (int)(NumberUtil.Val( GetNextPar( ), "."));
               sGXsfl_12_idx = GetNextPar( );
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxnrBanner_newrow( ) ;
               return  ;
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxGridRefresh_"+"Banner") == 0 )
            {
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxgrBanner_refresh( ) ;
               GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
               GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
               context.GX_webresponse.AddString((String)(context.getJSONResponse( )));
               return  ;
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxNewRow_"+"Gridhomemodulessdts") == 0 )
            {
               nRC_GXsfl_20 = (int)(NumberUtil.Val( GetNextPar( ), "."));
               nGXsfl_20_idx = (int)(NumberUtil.Val( GetNextPar( ), "."));
               sGXsfl_20_idx = GetNextPar( );
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxnrGridhomemodulessdts_newrow( ) ;
               return  ;
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxGridRefresh_"+"Gridhomemodulessdts") == 0 )
            {
               ajax_req_read_hidden_sdt(GetNextPar( ), AV10HomeModulesSDT);
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxgrGridhomemodulessdts_refresh( AV10HomeModulesSDT) ;
               GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
               GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
               context.GX_webresponse.AddString((String)(context.getJSONResponse( )));
               return  ;
            }
            else
            {
               if ( ! IsValidAjaxCall( false) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxfirstwebparm = gxfirstwebparm_bkp;
            }
            if ( context.isSpaRequest( ) )
            {
               enableJsOutput();
            }
         }
         if ( ! context.IsLocalStorageSupported( ) )
         {
            context.PushCurrentUrl();
         }
      }

      protected override bool IntegratedSecurityEnabled
      {
         get {
            return true ;
         }

      }

      protected override GAMSecurityLevel IntegratedSecurityLevel
      {
         get {
            return GAMSecurityLevel.SecurityHigh ;
         }

      }

      protected override string IntegratedSecurityPermissionName
      {
         get {
            return "home_Execute" ;
         }

      }

      public override void webExecute( )
      {
         if ( initialized == 0 )
         {
            createObjects();
            initialize();
         }
         INITWEB( ) ;
         if ( ! isAjaxCallMode( ) )
         {
            MasterPageObj = (GXMasterPage) ClassLoader.GetInstance("wwpbaseobjects.workwithplusmasterpage", "GeneXus.Programs.wwpbaseobjects.workwithplusmasterpage", new Object[] {new GxContext( context.handle, context.DataStores, context.HttpContext)});
            MasterPageObj.setDataArea(this,false);
            ValidateSpaRequest();
            MasterPageObj.webExecute();
            if ( ( GxWebError == 0 ) && context.isAjaxRequest( ) )
            {
               enableOutput();
               if ( ! context.isAjaxRequest( ) )
               {
                  context.GX_webresponse.AppendHeader("Cache-Control", "no-store");
               }
               if ( ! context.WillRedirect( ) )
               {
                  context.GX_webresponse.AddString((String)(context.getJSONResponse( )));
               }
               else
               {
                  if ( context.isAjaxRequest( ) )
                  {
                     disableOutput();
                  }
                  RenderHtmlHeaders( ) ;
                  context.Redirect( context.wjLoc );
                  context.DispatchAjaxCommands();
               }
            }
         }
         this.cleanup();
      }

      public override short ExecuteStartEvent( )
      {
         PA0B2( ) ;
         gxajaxcallmode = (short)((isAjaxCallMode( ) ? 1 : 0));
         if ( ( gxajaxcallmode == 0 ) && ( GxWebError == 0 ) )
         {
            START0B2( ) ;
         }
         return gxajaxcallmode ;
      }

      public override void RenderHtmlHeaders( )
      {
         GxWebStd.gx_html_headers( context, 0, "", "", Form.Meta, Form.Metaequiv, true);
      }

      public override void RenderHtmlOpenForm( )
      {
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         context.WriteHtmlText( "<title>") ;
         context.SendWebValue( Form.Caption) ;
         context.WriteHtmlTextNl( "</title>") ;
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         if ( StringUtil.Len( sDynURL) > 0 )
         {
            context.WriteHtmlText( "<BASE href=\""+sDynURL+"\" />") ;
         }
         define_styles( ) ;
         if ( nGXWrapped != 1 )
         {
            MasterPageObj.master_styles();
         }
         if ( ( ( context.GetBrowserType( ) == 1 ) || ( context.GetBrowserType( ) == 5 ) ) && ( StringUtil.StrCmp(context.GetBrowserVersion( ), "7.0") == 0 ) )
         {
            context.AddJavascriptSource("json2.js", "?"+context.GetBuildNumber( 135614), false, true);
         }
         context.AddJavascriptSource("jquery.js", "?"+context.GetBuildNumber( 135614), false, true);
         context.AddJavascriptSource("gxgral.js", "?"+context.GetBuildNumber( 135614), false, true);
         context.AddJavascriptSource("gxcfg.js", "?201910315434572", false, true);
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         context.AddJavascriptSource("HorizontalGrid/horizontalgrid.min.js", "", false, true);
         context.AddJavascriptSource("HorizontalGrid/horizontalgrid.min.js", "", false, true);
         context.WriteHtmlText( Form.Headerrawhtml) ;
         context.CloseHtmlHeader();
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         FormProcess = ((nGXWrapped==0) ? " data-HasEnter=\"false\" data-Skiponenter=\"true\"" : "");
         context.WriteHtmlText( "<body ") ;
         bodyStyle = "" + "background-color:" + context.BuildHTMLColor( Form.Backcolor) + ";color:" + context.BuildHTMLColor( Form.Textcolor) + ";";
         if ( nGXWrapped == 0 )
         {
            bodyStyle = bodyStyle + "-moz-opacity:0;opacity:0;";
         }
         if ( ! ( String.IsNullOrEmpty(StringUtil.RTrim( Form.Background)) ) )
         {
            bodyStyle = bodyStyle + " background-image:url(" + context.convertURL( Form.Background) + ")";
         }
         context.WriteHtmlText( " "+"class=\"form-horizontal Form\""+" "+ "style='"+bodyStyle+"'") ;
         context.WriteHtmlText( FormProcess+">") ;
         context.skipLines(1);
         if ( nGXWrapped != 1 )
         {
            context.WriteHtmlTextNl( "<form id=\"MAINFORM\" autocomplete=\"off\" name=\"MAINFORM\" method=\"post\" tabindex=-1  class=\"form-horizontal Form\" data-gx-class=\"form-horizontal Form\" novalidate action=\""+formatLink("wwpbaseobjects.home.aspx") +"\">") ;
            GxWebStd.gx_hidden_field( context, "_EventName", "");
            GxWebStd.gx_hidden_field( context, "_EventGridId", "");
            GxWebStd.gx_hidden_field( context, "_EventRowId", "");
            context.WriteHtmlText( "<input type=\"submit\" title=\"submit\" style=\"display:none\" disabled>") ;
            context.httpAjaxContext.ajax_rsp_assign_prop("", false, "FORM", "Class", "form-horizontal Form", true);
         }
         toggleJsOutput = isJsOutputEnabled( );
         if ( context.isSpaRequest( ) )
         {
            disableJsOutput();
         }
      }

      protected void send_integrity_footer_hashes( )
      {
         GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
      }

      protected void SendCloseFormHiddens( )
      {
         /* Send hidden variables. */
         /* Send saved values. */
         send_integrity_footer_hashes( ) ;
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "Homemodulessdt", AV10HomeModulesSDT);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("Homemodulessdt", AV10HomeModulesSDT);
         }
         GxWebStd.gx_hidden_field( context, "nRC_GXsfl_12", StringUtil.LTrim( StringUtil.NToC( (decimal)(nRC_GXsfl_12), 8, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "nRC_GXsfl_20", StringUtil.LTrim( StringUtil.NToC( (decimal)(nRC_GXsfl_20), 8, 0, ",", "")));
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vHOMEMODULESSDT", AV10HomeModulesSDT);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vHOMEMODULESSDT", AV10HomeModulesSDT);
         }
         GxWebStd.gx_hidden_field( context, "BANNER_Class", StringUtil.RTrim( subBanner_Class));
         GxWebStd.gx_hidden_field( context, "BANNER_Showarrows", StringUtil.RTrim( subBanner_Showarrows));
         GxWebStd.gx_hidden_field( context, "BANNER_Autoplay", StringUtil.RTrim( subBanner_Autoplay));
         GxWebStd.gx_hidden_field( context, "GRIDHOMEMODULESSDTS_Class", StringUtil.RTrim( subGridhomemodulessdts_Class));
         GxWebStd.gx_hidden_field( context, "GRIDHOMEMODULESSDTS_Flexwrap", StringUtil.RTrim( subGridhomemodulessdts_Flexwrap));
         GxWebStd.gx_hidden_field( context, "GRIDHOMEMODULESSDTS_Justifycontent", StringUtil.RTrim( subGridhomemodulessdts_Justifycontent));
      }

      public override void RenderHtmlCloseForm( )
      {
         SendCloseFormHiddens( ) ;
         GxWebStd.gx_hidden_field( context, "GX_FocusControl", GX_FocusControl);
         SendAjaxEncryptionKey();
         SendSecurityToken((String)(sPrefix));
         SendComponentObjects();
         SendServerCommands();
         SendState();
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         if ( nGXWrapped != 1 )
         {
            context.WriteHtmlTextNl( "</form>") ;
         }
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         include_jscripts( ) ;
      }

      public override void RenderHtmlContent( )
      {
         gxajaxcallmode = (short)((isAjaxCallMode( ) ? 1 : 0));
         if ( ( gxajaxcallmode == 0 ) && ( GxWebError == 0 ) )
         {
            context.WriteHtmlText( "<div") ;
            GxWebStd.ClassAttribute( context, "gx-ct-body"+" "+(String.IsNullOrEmpty(StringUtil.RTrim( Form.Class)) ? "form-horizontal Form" : Form.Class)+"-fx");
            context.WriteHtmlText( ">") ;
            WE0B2( ) ;
            context.WriteHtmlText( "</div>") ;
         }
      }

      public override void DispatchEvents( )
      {
         EVT0B2( ) ;
      }

      public override bool HasEnterEvent( )
      {
         return false ;
      }

      public override GXWebForm GetForm( )
      {
         return Form ;
      }

      public override String GetSelfLink( )
      {
         return formatLink("wwpbaseobjects.home.aspx")  ;
      }

      public override String GetPgmname( )
      {
         return "WWPBaseObjects.Home" ;
      }

      public override String GetPgmdesc( )
      {
         return "Inicio" ;
      }

      protected void WB0B0( )
      {
         if ( context.isAjaxRequest( ) )
         {
            disableOutput();
         }
         if ( ! wbLoad )
         {
            if ( nGXWrapped == 1 )
            {
               RenderHtmlHeaders( ) ;
               RenderHtmlOpenForm( ) ;
            }
            GxWebStd.gx_msg_list( context, "", context.GX_msglist.DisplayMode, "", "", "", "false");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "Section", "left", "top", " "+"data-gx-base-lib=\"bootstrapv3\""+" "+"data-abstract-form"+" ", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divLayoutmaintable_Internalname, 1, 0, "px", 0, "px", "Table", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablemain_Internalname, 1, 0, "px", 0, "px", "TableMain", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablecontent_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 CellBannerModules", "left", "top", "", "", "div");
            /*  Grid Control  */
            BannerContainer.SetIsFreestyle(true);
            BannerContainer.SetWrapped(nGXWrapped);
            if ( BannerContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<div id=\""+"BannerContainer"+"DivS\" data-gxgridid=\"12\">") ;
               sStyleString = "";
               GxWebStd.gx_table_start( context, subBanner_Internalname, subBanner_Internalname, "", "FreeStyleGrid", 0, "", "", 1, 2, sStyleString, "", "", 0);
               BannerContainer.AddObjectProperty("GridName", "Banner");
            }
            else
            {
               BannerContainer.AddObjectProperty("GridName", "Banner");
               BannerContainer.AddObjectProperty("Header", subBanner_Header);
               BannerContainer.AddObjectProperty("Class", StringUtil.RTrim( "FreeStyleGrid"));
               BannerContainer.AddObjectProperty("Class", "FreeStyleGrid");
               BannerContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
               BannerContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
               BannerContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subBanner_Backcolorstyle), 1, 0, ".", "")));
               BannerContainer.AddObjectProperty("CmpContext", "");
               BannerContainer.AddObjectProperty("InMasterPage", "false");
               BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               BannerContainer.AddColumnProperties(BannerColumn);
               BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               BannerContainer.AddColumnProperties(BannerColumn);
               BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               BannerContainer.AddColumnProperties(BannerColumn);
               BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               BannerContainer.AddColumnProperties(BannerColumn);
               BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               BannerColumn.AddObjectProperty("Value", context.convertURL( AV11ImageBanner));
               BannerColumn.AddObjectProperty("Enabled", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavImagebanner_Enabled), 5, 0, ".", "")));
               BannerContainer.AddColumnProperties(BannerColumn);
               BannerContainer.AddObjectProperty("Selectedindex", StringUtil.LTrim( StringUtil.NToC( (decimal)(subBanner_Selectedindex), 4, 0, ".", "")));
               BannerContainer.AddObjectProperty("Allowselection", StringUtil.LTrim( StringUtil.NToC( (decimal)(subBanner_Allowselection), 1, 0, ".", "")));
               BannerContainer.AddObjectProperty("Selectioncolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subBanner_Selectioncolor), 9, 0, ".", "")));
               BannerContainer.AddObjectProperty("Allowhover", StringUtil.LTrim( StringUtil.NToC( (decimal)(subBanner_Allowhovering), 1, 0, ".", "")));
               BannerContainer.AddObjectProperty("Hovercolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subBanner_Hoveringcolor), 9, 0, ".", "")));
               BannerContainer.AddObjectProperty("Allowcollapsing", StringUtil.LTrim( StringUtil.NToC( (decimal)(subBanner_Allowcollapsing), 1, 0, ".", "")));
               BannerContainer.AddObjectProperty("Collapsed", StringUtil.LTrim( StringUtil.NToC( (decimal)(subBanner_Collapsed), 1, 0, ".", "")));
            }
         }
         if ( wbEnd == 12 )
         {
            wbEnd = 0;
            nRC_GXsfl_12 = (int)(nGXsfl_12_idx-1);
            if ( BannerContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "</table>") ;
               context.WriteHtmlText( "</div>") ;
            }
            else
            {
               sStyleString = "";
               context.WriteHtmlText( "<div id=\""+"BannerContainer"+"Div\" "+sStyleString+">"+"</div>") ;
               context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Banner", BannerContainer);
               if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "BannerContainerData", BannerContainer.ToJavascriptSource());
               }
               if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "BannerContainerData"+"V", BannerContainer.GridValuesHidden());
               }
               else
               {
                  context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"BannerContainerData"+"V"+"\" value='"+BannerContainer.GridValuesHidden()+"'/>") ;
               }
            }
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 CellMarginTop", "left", "top", "", "", "div");
            /*  Grid Control  */
            GridhomemodulessdtsContainer.SetIsFreestyle(true);
            GridhomemodulessdtsContainer.SetWrapped(nGXWrapped);
            if ( GridhomemodulessdtsContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<div id=\""+"GridhomemodulessdtsContainer"+"DivS\" data-gxgridid=\"20\">") ;
               sStyleString = "";
               GxWebStd.gx_table_start( context, subGridhomemodulessdts_Internalname, subGridhomemodulessdts_Internalname, "", "FreeStyleHomeModulesBig", 0, "", "", 1, 2, sStyleString, "", "", 0);
               GridhomemodulessdtsContainer.AddObjectProperty("GridName", "Gridhomemodulessdts");
            }
            else
            {
               GridhomemodulessdtsContainer.AddObjectProperty("GridName", "Gridhomemodulessdts");
               GridhomemodulessdtsContainer.AddObjectProperty("Header", subGridhomemodulessdts_Header);
               GridhomemodulessdtsContainer.AddObjectProperty("Class", StringUtil.RTrim( "FreeStyleHomeModulesBig"));
               GridhomemodulessdtsContainer.AddObjectProperty("Class", "FreeStyleHomeModulesBig");
               GridhomemodulessdtsContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
               GridhomemodulessdtsContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
               GridhomemodulessdtsContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridhomemodulessdts_Backcolorstyle), 1, 0, ".", "")));
               GridhomemodulessdtsContainer.AddObjectProperty("CmpContext", "");
               GridhomemodulessdtsContainer.AddObjectProperty("InMasterPage", "false");
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsColumn.AddObjectProperty("Value", lblOptionicon_Caption);
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsColumn.AddObjectProperty("Enabled", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavHomemodulessdt__optiontitle_Enabled), 5, 0, ".", "")));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridhomemodulessdtsColumn.AddObjectProperty("Enabled", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavHomemodulessdt__optiondescription_Enabled), 5, 0, ".", "")));
               GridhomemodulessdtsContainer.AddColumnProperties(GridhomemodulessdtsColumn);
               GridhomemodulessdtsContainer.AddObjectProperty("Selectedindex", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridhomemodulessdts_Selectedindex), 4, 0, ".", "")));
               GridhomemodulessdtsContainer.AddObjectProperty("Allowselection", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridhomemodulessdts_Allowselection), 1, 0, ".", "")));
               GridhomemodulessdtsContainer.AddObjectProperty("Selectioncolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridhomemodulessdts_Selectioncolor), 9, 0, ".", "")));
               GridhomemodulessdtsContainer.AddObjectProperty("Allowhover", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridhomemodulessdts_Allowhovering), 1, 0, ".", "")));
               GridhomemodulessdtsContainer.AddObjectProperty("Hovercolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridhomemodulessdts_Hoveringcolor), 9, 0, ".", "")));
               GridhomemodulessdtsContainer.AddObjectProperty("Allowcollapsing", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridhomemodulessdts_Allowcollapsing), 1, 0, ".", "")));
               GridhomemodulessdtsContainer.AddObjectProperty("Collapsed", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridhomemodulessdts_Collapsed), 1, 0, ".", "")));
            }
         }
         if ( wbEnd == 20 )
         {
            wbEnd = 0;
            nRC_GXsfl_20 = (int)(nGXsfl_20_idx-1);
            if ( GridhomemodulessdtsContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "</table>") ;
               context.WriteHtmlText( "</div>") ;
            }
            else
            {
               AV16GXV1 = nGXsfl_20_idx;
               sStyleString = "";
               context.WriteHtmlText( "<div id=\""+"GridhomemodulessdtsContainer"+"Div\" "+sStyleString+">"+"</div>") ;
               context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Gridhomemodulessdts", GridhomemodulessdtsContainer);
               if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "GridhomemodulessdtsContainerData", GridhomemodulessdtsContainer.ToJavascriptSource());
               }
               if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "GridhomemodulessdtsContainerData"+"V", GridhomemodulessdtsContainer.GridValuesHidden());
               }
               else
               {
                  context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"GridhomemodulessdtsContainerData"+"V"+"\" value='"+GridhomemodulessdtsContainer.GridValuesHidden()+"'/>") ;
               }
            }
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
         }
         if ( wbEnd == 12 )
         {
            wbEnd = 0;
            if ( isFullAjaxMode( ) )
            {
               if ( BannerContainer.GetWrapped() == 1 )
               {
                  context.WriteHtmlText( "</table>") ;
                  context.WriteHtmlText( "</div>") ;
               }
               else
               {
                  sStyleString = "";
                  context.WriteHtmlText( "<div id=\""+"BannerContainer"+"Div\" "+sStyleString+">"+"</div>") ;
                  context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Banner", BannerContainer);
                  if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "BannerContainerData", BannerContainer.ToJavascriptSource());
                  }
                  if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "BannerContainerData"+"V", BannerContainer.GridValuesHidden());
                  }
                  else
                  {
                     context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"BannerContainerData"+"V"+"\" value='"+BannerContainer.GridValuesHidden()+"'/>") ;
                  }
               }
            }
         }
         if ( wbEnd == 20 )
         {
            wbEnd = 0;
            if ( isFullAjaxMode( ) )
            {
               if ( GridhomemodulessdtsContainer.GetWrapped() == 1 )
               {
                  context.WriteHtmlText( "</table>") ;
                  context.WriteHtmlText( "</div>") ;
               }
               else
               {
                  AV16GXV1 = nGXsfl_20_idx;
                  sStyleString = "";
                  context.WriteHtmlText( "<div id=\""+"GridhomemodulessdtsContainer"+"Div\" "+sStyleString+">"+"</div>") ;
                  context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Gridhomemodulessdts", GridhomemodulessdtsContainer);
                  if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "GridhomemodulessdtsContainerData", GridhomemodulessdtsContainer.ToJavascriptSource());
                  }
                  if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "GridhomemodulessdtsContainerData"+"V", GridhomemodulessdtsContainer.GridValuesHidden());
                  }
                  else
                  {
                     context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"GridhomemodulessdtsContainerData"+"V"+"\" value='"+GridhomemodulessdtsContainer.GridValuesHidden()+"'/>") ;
                  }
               }
            }
         }
         wbLoad = true;
      }

      protected void START0B2( )
      {
         wbLoad = false;
         wbEnd = 0;
         wbStart = 0;
         if ( ! context.isSpaRequest( ) )
         {
            Form.Meta.addItem("generator", "GeneXus C# 16_0_5-135614", 0) ;
            Form.Meta.addItem("description", "Inicio", 0) ;
         }
         context.wjLoc = "";
         context.nUserReturn = 0;
         context.wbHandled = 0;
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
         }
         wbErr = false;
         STRUP0B0( ) ;
      }

      protected void WS0B2( )
      {
         START0B2( ) ;
         EVT0B2( ) ;
      }

      protected void EVT0B2( )
      {
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
            if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) && ! wbErr )
            {
               /* Read Web Panel buttons. */
               sEvt = cgiGet( "_EventName");
               EvtGridId = cgiGet( "_EventGridId");
               EvtRowId = cgiGet( "_EventRowId");
               if ( StringUtil.Len( sEvt) > 0 )
               {
                  sEvtType = StringUtil.Left( sEvt, 1);
                  sEvt = StringUtil.Right( sEvt, (short)(StringUtil.Len( sEvt)-1));
                  if ( StringUtil.StrCmp(sEvtType, "M") != 0 )
                  {
                     if ( StringUtil.StrCmp(sEvtType, "E") == 0 )
                     {
                        sEvtType = StringUtil.Right( sEvt, 1);
                        if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                        {
                           sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                           if ( StringUtil.StrCmp(sEvt, "RFR") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                           }
                           else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              dynload_actions( ) ;
                           }
                        }
                        else
                        {
                           sEvtType = StringUtil.Right( sEvt, 4);
                           sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-4));
                           if ( ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "START") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 11), "BANNER.LOAD") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "ENTER") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 6), "CANCEL") == 0 ) )
                           {
                              nGXsfl_12_idx = (int)(NumberUtil.Val( sEvtType, "."));
                              sGXsfl_12_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_12_idx), 4, 0)), 4, "0");
                              SubsflControlProps_122( ) ;
                              AV11ImageBanner = cgiGet( edtavImagebanner_Internalname);
                              context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavImagebanner_Internalname, "Bitmap", (String.IsNullOrEmpty(StringUtil.RTrim( AV11ImageBanner)) ? AV19Imagebanner_GXI : context.convertURL( context.PathToRelativeUrl( AV11ImageBanner))), !bGXsfl_12_Refreshing);
                              context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavImagebanner_Internalname, "SrcSet", context.GetImageSrcSet( AV11ImageBanner), true);
                              sEvtType = StringUtil.Right( sEvt, 1);
                              if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                              {
                                 sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                                 if ( StringUtil.StrCmp(sEvt, "START") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    /* Execute user event: Start */
                                    E110B2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "BANNER.LOAD") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    E120B2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "ENTER") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    if ( ! wbErr )
                                    {
                                       Rfr0gs = false;
                                       if ( ! Rfr0gs )
                                       {
                                       }
                                       dynload_actions( ) ;
                                    }
                                    /* No code required for Cancel button. It is implemented as the Reset button. */
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                 }
                              }
                              else
                              {
                              }
                           }
                           else if ( StringUtil.StrCmp(StringUtil.Left( sEvt, 24), "GRIDHOMEMODULESSDTS.LOAD") == 0 )
                           {
                              nGXsfl_20_idx = (int)(NumberUtil.Val( sEvtType, "."));
                              sGXsfl_20_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_20_idx), 4, 0)), 4, "0");
                              SubsflControlProps_203( ) ;
                              AV16GXV1 = nGXsfl_20_idx;
                              if ( ( AV10HomeModulesSDT.Count >= AV16GXV1 ) && ( AV16GXV1 > 0 ) )
                              {
                                 AV10HomeModulesSDT.CurrentItem = ((GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem)AV10HomeModulesSDT.Item(AV16GXV1));
                              }
                              sEvtType = StringUtil.Right( sEvt, 1);
                              if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                              {
                                 sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                                 if ( StringUtil.StrCmp(sEvt, "GRIDHOMEMODULESSDTS.LOAD") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    E130B3 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                 }
                              }
                              else
                              {
                              }
                           }
                        }
                     }
                     context.wbHandled = 1;
                  }
               }
            }
         }
      }

      protected void WE0B2( )
      {
         if ( ! GxWebStd.gx_redirect( context) )
         {
            Rfr0gs = true;
            Refresh( ) ;
            if ( ! GxWebStd.gx_redirect( context) )
            {
               if ( nGXWrapped == 1 )
               {
                  RenderHtmlCloseForm( ) ;
               }
            }
         }
      }

      protected void PA0B2( )
      {
         if ( nDonePA == 0 )
         {
            if ( String.IsNullOrEmpty(StringUtil.RTrim( context.GetCookie( "GX_SESSION_ID"))) )
            {
               gxcookieaux = context.SetCookie( "GX_SESSION_ID", Encrypt64( Crypto.GetEncryptionKey( ), Crypto.GetServerKey( )), "", (DateTime)(DateTime.MinValue), "", 0);
            }
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
            toggleJsOutput = isJsOutputEnabled( );
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
            init_web_controls( ) ;
            if ( toggleJsOutput )
            {
               if ( context.isSpaRequest( ) )
               {
                  enableJsOutput();
               }
            }
            if ( ! context.isAjaxRequest( ) )
            {
            }
            nDonePA = 1;
         }
      }

      protected void dynload_actions( )
      {
         /* End function dynload_actions */
      }

      protected void gxnrBanner_newrow( )
      {
         GxWebStd.set_html_headers( context, 0, "", "");
         SubsflControlProps_122( ) ;
         while ( nGXsfl_12_idx <= nRC_GXsfl_12 )
         {
            sendrow_122( ) ;
            nGXsfl_12_idx = ((subBanner_Islastpage==1)&&(nGXsfl_12_idx+1>subBanner_Recordsperpage( )) ? 1 : nGXsfl_12_idx+1);
            sGXsfl_12_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_12_idx), 4, 0)), 4, "0");
            SubsflControlProps_122( ) ;
         }
         context.GX_webresponse.AddString(context.httpAjaxContext.getJSONContainerResponse( BannerContainer));
         /* End function gxnrBanner_newrow */
      }

      protected void gxnrGridhomemodulessdts_newrow( )
      {
         GxWebStd.set_html_headers( context, 0, "", "");
         SubsflControlProps_203( ) ;
         while ( nGXsfl_20_idx <= nRC_GXsfl_20 )
         {
            sendrow_203( ) ;
            nGXsfl_20_idx = ((subGridhomemodulessdts_Islastpage==1)&&(nGXsfl_20_idx+1>subGridhomemodulessdts_Recordsperpage( )) ? 1 : nGXsfl_20_idx+1);
            sGXsfl_20_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_20_idx), 4, 0)), 4, "0");
            SubsflControlProps_203( ) ;
         }
         context.GX_webresponse.AddString(context.httpAjaxContext.getJSONContainerResponse( GridhomemodulessdtsContainer));
         /* End function gxnrGridhomemodulessdts_newrow */
      }

      protected void gxgrBanner_refresh( )
      {
         initialize_formulas( ) ;
         GxWebStd.set_html_headers( context, 0, "", "");
         BANNER_nCurrentRecord = 0;
         RF0B2( ) ;
         /* End function gxgrBanner_refresh */
      }

      protected void gxgrGridhomemodulessdts_refresh( GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem> AV10HomeModulesSDT )
      {
         initialize_formulas( ) ;
         GxWebStd.set_html_headers( context, 0, "", "");
         GRIDHOMEMODULESSDTS_nCurrentRecord = 0;
         RF0B3( ) ;
         /* End function gxgrGridhomemodulessdts_refresh */
      }

      protected void send_integrity_hashes( )
      {
      }

      protected void clear_multi_value_controls( )
      {
         if ( context.isAjaxRequest( ) )
         {
            dynload_actions( ) ;
         }
      }

      protected void fix_multi_value_controls( )
      {
      }

      public void Refresh( )
      {
         send_integrity_hashes( ) ;
         RF0B2( ) ;
         RF0B3( ) ;
         if ( isFullAjaxMode( ) )
         {
            send_integrity_footer_hashes( ) ;
         }
      }

      protected void initialize_formulas( )
      {
         /* GeneXus formulas. */
         context.Gx_err = 0;
         edtavHomemodulessdt__optiontitle_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavHomemodulessdt__optiontitle_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavHomemodulessdt__optiontitle_Enabled), 5, 0)), !bGXsfl_20_Refreshing);
         edtavHomemodulessdt__optiondescription_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavHomemodulessdt__optiondescription_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavHomemodulessdt__optiondescription_Enabled), 5, 0)), !bGXsfl_20_Refreshing);
      }

      protected void RF0B2( )
      {
         initialize_formulas( ) ;
         clear_multi_value_controls( ) ;
         if ( isAjaxCallMode( ) )
         {
            BannerContainer.ClearRows();
         }
         wbStart = 12;
         nGXsfl_12_idx = 1;
         sGXsfl_12_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_12_idx), 4, 0)), 4, "0");
         SubsflControlProps_122( ) ;
         bGXsfl_12_Refreshing = true;
         BannerContainer.AddObjectProperty("GridName", "Banner");
         BannerContainer.AddObjectProperty("CmpContext", "");
         BannerContainer.AddObjectProperty("InMasterPage", "false");
         BannerContainer.AddObjectProperty("Class", StringUtil.RTrim( "FreeStyleGrid"));
         BannerContainer.AddObjectProperty("Class", "FreeStyleGrid");
         BannerContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
         BannerContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
         BannerContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subBanner_Backcolorstyle), 1, 0, ".", "")));
         BannerContainer.PageSize = subBanner_Recordsperpage( );
         gxdyncontrolsrefreshing = true;
         fix_multi_value_controls( ) ;
         gxdyncontrolsrefreshing = false;
         if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
         {
            SubsflControlProps_122( ) ;
            E120B2 ();
            wbEnd = 12;
            WB0B0( ) ;
         }
         bGXsfl_12_Refreshing = true;
      }

      protected void send_integrity_lvl_hashes0B2( )
      {
      }

      protected void RF0B3( )
      {
         initialize_formulas( ) ;
         clear_multi_value_controls( ) ;
         if ( isAjaxCallMode( ) )
         {
            GridhomemodulessdtsContainer.ClearRows();
         }
         wbStart = 20;
         nGXsfl_20_idx = 1;
         sGXsfl_20_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_20_idx), 4, 0)), 4, "0");
         SubsflControlProps_203( ) ;
         bGXsfl_20_Refreshing = true;
         GridhomemodulessdtsContainer.AddObjectProperty("GridName", "Gridhomemodulessdts");
         GridhomemodulessdtsContainer.AddObjectProperty("CmpContext", "");
         GridhomemodulessdtsContainer.AddObjectProperty("InMasterPage", "false");
         GridhomemodulessdtsContainer.AddObjectProperty("Class", StringUtil.RTrim( "FreeStyleHomeModulesBig"));
         GridhomemodulessdtsContainer.AddObjectProperty("Class", "FreeStyleHomeModulesBig");
         GridhomemodulessdtsContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
         GridhomemodulessdtsContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
         GridhomemodulessdtsContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGridhomemodulessdts_Backcolorstyle), 1, 0, ".", "")));
         GridhomemodulessdtsContainer.PageSize = subGridhomemodulessdts_Recordsperpage( );
         gxdyncontrolsrefreshing = true;
         fix_multi_value_controls( ) ;
         gxdyncontrolsrefreshing = false;
         if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
         {
            SubsflControlProps_203( ) ;
            E130B3 ();
            wbEnd = 20;
            WB0B0( ) ;
         }
         bGXsfl_20_Refreshing = true;
      }

      protected void send_integrity_lvl_hashes0B3( )
      {
      }

      protected int subBanner_Pagecount( )
      {
         return (int)(-1) ;
      }

      protected int subBanner_Recordcount( )
      {
         return (int)(-1) ;
      }

      protected int subBanner_Recordsperpage( )
      {
         return (int)(-1) ;
      }

      protected int subBanner_Currentpage( )
      {
         return (int)(-1) ;
      }

      protected int subGridhomemodulessdts_Pagecount( )
      {
         return (int)(-1) ;
      }

      protected int subGridhomemodulessdts_Recordcount( )
      {
         return (int)(-1) ;
      }

      protected int subGridhomemodulessdts_Recordsperpage( )
      {
         return (int)(-1) ;
      }

      protected int subGridhomemodulessdts_Currentpage( )
      {
         return (int)(-1) ;
      }

      protected void STRUP0B0( )
      {
         /* Before Start, stand alone formulas. */
         context.Gx_err = 0;
         edtavHomemodulessdt__optiontitle_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavHomemodulessdt__optiontitle_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavHomemodulessdt__optiontitle_Enabled), 5, 0)), !bGXsfl_20_Refreshing);
         edtavHomemodulessdt__optiondescription_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavHomemodulessdt__optiondescription_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavHomemodulessdt__optiondescription_Enabled), 5, 0)), !bGXsfl_20_Refreshing);
         /* Execute Start event if defined. */
         context.wbGlbDoneStart = 0;
         /* Execute user event: Start */
         E110B2 ();
         context.wbGlbDoneStart = 1;
         /* After Start, stand alone formulas. */
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
            /* Read saved SDTs. */
            ajax_req_read_hidden_sdt(cgiGet( "Homemodulessdt"), AV10HomeModulesSDT);
            /* Read variables values. */
            /* Read saved values. */
            nRC_GXsfl_12 = (int)(context.localUtil.CToN( cgiGet( "nRC_GXsfl_12"), ",", "."));
            nRC_GXsfl_20 = (int)(context.localUtil.CToN( cgiGet( "nRC_GXsfl_20"), ",", "."));
            subBanner_Class = cgiGet( "BANNER_Class");
            subBanner_Showarrows = cgiGet( "BANNER_Showarrows");
            subBanner_Autoplay = cgiGet( "BANNER_Autoplay");
            subGridhomemodulessdts_Class = cgiGet( "GRIDHOMEMODULESSDTS_Class");
            subGridhomemodulessdts_Flexwrap = cgiGet( "GRIDHOMEMODULESSDTS_Flexwrap");
            subGridhomemodulessdts_Justifycontent = cgiGet( "GRIDHOMEMODULESSDTS_Justifycontent");
            nRC_GXsfl_20 = (int)(context.localUtil.CToN( cgiGet( "nRC_GXsfl_20"), ",", "."));
            nGXsfl_20_fel_idx = 0;
            while ( nGXsfl_20_fel_idx < nRC_GXsfl_20 )
            {
               nGXsfl_20_fel_idx = ((subGridhomemodulessdts_Islastpage==1)&&(nGXsfl_20_fel_idx+1>subGridhomemodulessdts_Recordsperpage( )) ? 1 : nGXsfl_20_fel_idx+1);
               sGXsfl_20_fel_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_20_fel_idx), 4, 0)), 4, "0");
               SubsflControlProps_fel_203( ) ;
               AV16GXV1 = nGXsfl_20_fel_idx;
               if ( ( AV10HomeModulesSDT.Count >= AV16GXV1 ) && ( AV16GXV1 > 0 ) )
               {
                  AV10HomeModulesSDT.CurrentItem = ((GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem)AV10HomeModulesSDT.Item(AV16GXV1));
               }
            }
            if ( nGXsfl_20_fel_idx == 0 )
            {
               nGXsfl_20_idx = 1;
               sGXsfl_20_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_20_idx), 4, 0)), 4, "0");
               SubsflControlProps_203( ) ;
            }
            nGXsfl_20_fel_idx = 1;
            /* Read subfile selected row values. */
            /* Read hidden variables. */
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
         }
         else
         {
            dynload_actions( ) ;
         }
      }

      protected void GXStart( )
      {
         /* Execute user event: Start */
         E110B2 ();
         if (returnInSub) return;
      }

      protected void E110B2( )
      {
         /* Start Routine */
         subBanner_Showarrows = StringUtil.BoolToStr( false);
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, "BannerContainerDiv", "ShowArrows", subBanner_Showarrows, true);
         subBanner_Autoplay = StringUtil.BoolToStr( true);
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, "BannerContainerDiv", "AutoPlay", subBanner_Autoplay, true);
         GXt_objcol_SdtHomeModulesSDT_HomeModulesSDTItem1 = AV10HomeModulesSDT;
         new GeneXus.Programs.wwpbaseobjects.getmainhomemodulessample(context ).execute( out  GXt_objcol_SdtHomeModulesSDT_HomeModulesSDTItem1) ;
         AV10HomeModulesSDT = GXt_objcol_SdtHomeModulesSDT_HomeModulesSDTItem1;
         gx_BV20 = true;
      }

      private void E120B2( )
      {
         /* Banner_Load Routine */
         AV11ImageBanner = context.GetImagePath( "bacb295f-8081-4718-9910-31ffbda185ce", "", context.GetTheme( ));
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, edtavImagebanner_Internalname, AV11ImageBanner);
         AV19Imagebanner_GXI = GXDbFile.PathToUrl( context.GetImagePath( "bacb295f-8081-4718-9910-31ffbda185ce", "", context.GetTheme( )));
         /* Load Method */
         if ( wbStart != -1 )
         {
            wbStart = 12;
         }
         sendrow_122( ) ;
         if ( isFullAjaxMode( ) && ! bGXsfl_12_Refreshing )
         {
            context.DoAjaxLoad(12, BannerRow);
         }
         /*  Sending Event outputs  */
      }

      private void E130B3( )
      {
         /* Gridhomemodulessdts_Load Routine */
         AV16GXV1 = 1;
         while ( AV16GXV1 <= AV10HomeModulesSDT.Count )
         {
            AV10HomeModulesSDT.CurrentItem = ((GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem)AV10HomeModulesSDT.Item(AV16GXV1));
            lblOptionicon_Caption = StringUtil.Format( "<i class='HomeModulesBigIcon %1' style='font-size: 55px'></i>", ((GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem)(AV10HomeModulesSDT.CurrentItem)).gxTpr_Optioniconthemeclass, "", "", "", "", "", "", "", "");
            /* Load Method */
            if ( wbStart != -1 )
            {
               wbStart = 20;
            }
            sendrow_203( ) ;
            if ( isFullAjaxMode( ) && ! bGXsfl_20_Refreshing )
            {
               context.DoAjaxLoad(20, GridhomemodulessdtsRow);
            }
            AV16GXV1 = (int)(AV16GXV1+1);
         }
         /*  Sending Event outputs  */
      }

      public override void setparameters( Object[] obj )
      {
         createObjects();
         initialize();
      }

      public override String getresponse( String sGXDynURL )
      {
         initialize_properties( ) ;
         BackMsgLst = context.GX_msglist;
         context.GX_msglist = LclMsgLst;
         sDynURL = sGXDynURL;
         nGotPars = (short)(1);
         nGXWrapped = (short)(1);
         context.SetWrapped(true);
         PA0B2( ) ;
         WS0B2( ) ;
         WE0B2( ) ;
         this.cleanup();
         context.SetWrapped(false);
         context.GX_msglist = BackMsgLst;
         return "";
      }

      public void responsestatic( String sGXDynURL )
      {
      }

      protected void define_styles( )
      {
         AddStyleSheetFile("HorizontalGrid/horizontalgrid.min.css", "");
         AddStyleSheetFile("HorizontalGrid/horizontalgrid.min.css", "");
         AddThemeStyleSheetFile("", context.GetTheme( )+".css", "?"+GetCacheInvalidationToken( ));
         bool outputEnabled = isOutputEnabled( ) ;
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         idxLst = 1;
         while ( idxLst <= Form.Jscriptsrc.Count )
         {
            context.AddJavascriptSource(StringUtil.RTrim( ((String)Form.Jscriptsrc.Item(idxLst))), "?20191031543467", true, true);
            idxLst = (int)(idxLst+1);
         }
         if ( ! outputEnabled )
         {
            if ( context.isSpaRequest( ) )
            {
               disableOutput();
            }
         }
         /* End function define_styles */
      }

      protected void include_jscripts( )
      {
         if ( nGXWrapped != 1 )
         {
            context.AddJavascriptSource("messages.spa.js", "?"+GetCacheInvalidationToken( ), false, true);
            context.AddJavascriptSource("wwpbaseobjects/home.js", "?20191031543467", false, true);
            context.AddJavascriptSource("HorizontalGrid/horizontalgrid.min.js", "", false, true);
            context.AddJavascriptSource("HorizontalGrid/horizontalgrid.min.js", "", false, true);
         }
         /* End function include_jscripts */
      }

      protected void SubsflControlProps_122( )
      {
         edtavImagebanner_Internalname = "vIMAGEBANNER_"+sGXsfl_12_idx;
      }

      protected void SubsflControlProps_fel_122( )
      {
         edtavImagebanner_Internalname = "vIMAGEBANNER_"+sGXsfl_12_fel_idx;
      }

      protected void sendrow_122( )
      {
         SubsflControlProps_122( ) ;
         WB0B0( ) ;
         BannerRow = GXWebRow.GetNew(context,BannerContainer);
         if ( subBanner_Backcolorstyle == 0 )
         {
            /* None style subfile background logic. */
            subBanner_Backstyle = 0;
            if ( StringUtil.StrCmp(subBanner_Class, "") != 0 )
            {
               subBanner_Linesclass = subBanner_Class+"Odd";
            }
         }
         else if ( subBanner_Backcolorstyle == 1 )
         {
            /* Uniform style subfile background logic. */
            subBanner_Backstyle = 0;
            subBanner_Backcolor = subBanner_Allbackcolor;
            if ( StringUtil.StrCmp(subBanner_Class, "") != 0 )
            {
               subBanner_Linesclass = subBanner_Class+"Uniform";
            }
         }
         else if ( subBanner_Backcolorstyle == 2 )
         {
            /* Header style subfile background logic. */
            subBanner_Backstyle = 1;
            if ( StringUtil.StrCmp(subBanner_Class, "") != 0 )
            {
               subBanner_Linesclass = subBanner_Class+"Odd";
            }
            subBanner_Backcolor = (int)(0xFFFFFF);
         }
         else if ( subBanner_Backcolorstyle == 3 )
         {
            /* Report style subfile background logic. */
            subBanner_Backstyle = 1;
            if ( ((int)((nGXsfl_12_idx) % (2))) == 0 )
            {
               subBanner_Backcolor = (int)(0x0);
               if ( StringUtil.StrCmp(subBanner_Class, "") != 0 )
               {
                  subBanner_Linesclass = subBanner_Class+"Even";
               }
            }
            else
            {
               subBanner_Backcolor = (int)(0xFFFFFF);
               if ( StringUtil.StrCmp(subBanner_Class, "") != 0 )
               {
                  subBanner_Linesclass = subBanner_Class+"Odd";
               }
            }
         }
         /* Start of Columns property logic. */
         if ( BannerContainer.GetWrapped() == 1 )
         {
            context.WriteHtmlText( "<tr"+" class=\""+subBanner_Linesclass+"\" style=\""+""+"\""+" data-gxrow=\""+sGXsfl_12_idx+"\">") ;
         }
         /* Div Control */
         BannerRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)divUnnamedtablefsbanner_Internalname+"_"+sGXsfl_12_idx,(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"Table",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         BannerRow.AddRenderProperties(BannerColumn);
         /* Div Control */
         BannerRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"row",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         BannerRow.AddRenderProperties(BannerColumn);
         /* Div Control */
         BannerRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"col-xs-12",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         BannerRow.AddRenderProperties(BannerColumn);
         /* Div Control */
         BannerRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)" gx-attribute",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         BannerRow.AddRenderProperties(BannerColumn);
         /* Attribute/Variable Label */
         BannerRow.AddColumnProperties("html_label", -1, isAjaxCallMode( ), new Object[] {(String)"",(String)"Image Banner",(String)"col-sm-3 AttributeBannerModulesLabel ObjectFitCoverLabel",(short)0,(bool)true});
         BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         BannerRow.AddRenderProperties(BannerColumn);
         /* Static Bitmap Variable */
         ClassString = "AttributeBannerModules ObjectFitCover";
         StyleString = "";
         AV11ImageBanner_IsBlob = (bool)((String.IsNullOrEmpty(StringUtil.RTrim( AV11ImageBanner))&&String.IsNullOrEmpty(StringUtil.RTrim( AV19Imagebanner_GXI)))||!String.IsNullOrEmpty(StringUtil.RTrim( AV11ImageBanner)));
         sImgUrl = (String.IsNullOrEmpty(StringUtil.RTrim( AV11ImageBanner)) ? AV19Imagebanner_GXI : context.PathToRelativeUrl( AV11ImageBanner));
         BannerRow.AddColumnProperties("bitmap", 1, isAjaxCallMode( ), new Object[] {(String)edtavImagebanner_Internalname,(String)sImgUrl,(String)"",(String)"",(String)"",context.GetTheme( ),(short)1,(int)edtavImagebanner_Enabled,(String)"",(String)"",(short)1,(short)-1,(short)0,(String)"",(short)0,(String)"",(short)0,(short)0,(short)0,(String)"",(String)"",(String)StyleString,(String)ClassString,(String)"",(String)"",(String)"",(String)"",(String)"",(String)"",(String)"",(short)1,(bool)AV11ImageBanner_IsBlob,(bool)false,context.GetImageSrcSet( sImgUrl)});
         BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         BannerRow.AddRenderProperties(BannerColumn);
         BannerRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         BannerRow.AddRenderProperties(BannerColumn);
         BannerRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         BannerRow.AddRenderProperties(BannerColumn);
         BannerRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         BannerRow.AddRenderProperties(BannerColumn);
         BannerRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         BannerColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         BannerRow.AddRenderProperties(BannerColumn);
         send_integrity_lvl_hashes0B2( ) ;
         /* End of Columns property logic. */
         BannerContainer.AddRow(BannerRow);
         nGXsfl_12_idx = ((subBanner_Islastpage==1)&&(nGXsfl_12_idx+1>subBanner_Recordsperpage( )) ? 1 : nGXsfl_12_idx+1);
         sGXsfl_12_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_12_idx), 4, 0)), 4, "0");
         SubsflControlProps_122( ) ;
         /* End function sendrow_122 */
      }

      protected void SubsflControlProps_203( )
      {
         lblOptionicon_Internalname = "OPTIONICON_"+sGXsfl_20_idx;
         edtavHomemodulessdt__optiontitle_Internalname = "HOMEMODULESSDT__OPTIONTITLE_"+sGXsfl_20_idx;
         edtavHomemodulessdt__optiondescription_Internalname = "HOMEMODULESSDT__OPTIONDESCRIPTION_"+sGXsfl_20_idx;
      }

      protected void SubsflControlProps_fel_203( )
      {
         lblOptionicon_Internalname = "OPTIONICON_"+sGXsfl_20_fel_idx;
         edtavHomemodulessdt__optiontitle_Internalname = "HOMEMODULESSDT__OPTIONTITLE_"+sGXsfl_20_fel_idx;
         edtavHomemodulessdt__optiondescription_Internalname = "HOMEMODULESSDT__OPTIONDESCRIPTION_"+sGXsfl_20_fel_idx;
      }

      protected void sendrow_203( )
      {
         SubsflControlProps_203( ) ;
         WB0B0( ) ;
         GridhomemodulessdtsRow = GXWebRow.GetNew(context,GridhomemodulessdtsContainer);
         if ( subGridhomemodulessdts_Backcolorstyle == 0 )
         {
            /* None style subfile background logic. */
            subGridhomemodulessdts_Backstyle = 0;
            if ( StringUtil.StrCmp(subGridhomemodulessdts_Class, "") != 0 )
            {
               subGridhomemodulessdts_Linesclass = subGridhomemodulessdts_Class+"Odd";
            }
         }
         else if ( subGridhomemodulessdts_Backcolorstyle == 1 )
         {
            /* Uniform style subfile background logic. */
            subGridhomemodulessdts_Backstyle = 0;
            subGridhomemodulessdts_Backcolor = subGridhomemodulessdts_Allbackcolor;
            if ( StringUtil.StrCmp(subGridhomemodulessdts_Class, "") != 0 )
            {
               subGridhomemodulessdts_Linesclass = subGridhomemodulessdts_Class+"Uniform";
            }
         }
         else if ( subGridhomemodulessdts_Backcolorstyle == 2 )
         {
            /* Header style subfile background logic. */
            subGridhomemodulessdts_Backstyle = 1;
            if ( StringUtil.StrCmp(subGridhomemodulessdts_Class, "") != 0 )
            {
               subGridhomemodulessdts_Linesclass = subGridhomemodulessdts_Class+"Odd";
            }
            subGridhomemodulessdts_Backcolor = (int)(0xFFFFFF);
         }
         else if ( subGridhomemodulessdts_Backcolorstyle == 3 )
         {
            /* Report style subfile background logic. */
            subGridhomemodulessdts_Backstyle = 1;
            subGridhomemodulessdts_Backcolor = (int)(0xFFFFFF);
            if ( StringUtil.StrCmp(subGridhomemodulessdts_Class, "") != 0 )
            {
               subGridhomemodulessdts_Linesclass = subGridhomemodulessdts_Class+"Odd";
            }
         }
         /* Start of Columns property logic. */
         /* Div Control */
         GridhomemodulessdtsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)divUnnamedtablefsgridhomemodulessdts_Internalname+"_"+sGXsfl_20_idx,(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"Table",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Div Control */
         GridhomemodulessdtsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"row",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Div Control */
         GridhomemodulessdtsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"col-xs-12 HomeModulesBigIconCell",(String)"Center",(String)"top",(String)"",(String)"",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Text block */
         GridhomemodulessdtsRow.AddColumnProperties("label", 1, isAjaxCallMode( ), new Object[] {(String)lblOptionicon_Internalname,(String)lblOptionicon_Caption,(String)"",(String)"",(String)lblOptionicon_Jsonclick,(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"",(String)"TextBlock",(short)0,(String)"",(short)1,(short)1,(short)2});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         GridhomemodulessdtsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"Center",(String)"top",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         GridhomemodulessdtsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Div Control */
         GridhomemodulessdtsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"row",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Div Control */
         GridhomemodulessdtsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"col-xs-12 HomeModulesBigTitleCell",(String)"Center",(String)"top",(String)"",(String)"",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Div Control */
         GridhomemodulessdtsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)" gx-attribute",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Attribute/Variable Label */
         GridhomemodulessdtsRow.AddColumnProperties("html_label", -1, isAjaxCallMode( ), new Object[] {(String)edtavHomemodulessdt__optiontitle_Internalname,(String)"Option Title",(String)"col-sm-3 AttributeHomeModulesBigTitleLabel",(short)0,(bool)true});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Single line edit */
         ROClassString = "AttributeHomeModulesBigTitle";
         GridhomemodulessdtsRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtavHomemodulessdt__optiontitle_Internalname,((GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem)AV10HomeModulesSDT.Item(AV16GXV1)).gxTpr_Optiontitle,(String)"",(String)"",(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"",(String)"",(String)"",(String)"",(String)edtavHomemodulessdt__optiontitle_Jsonclick,(short)0,(String)"AttributeHomeModulesBigTitle",(String)"",(String)ROClassString,(String)"",(String)"",(short)1,(int)edtavHomemodulessdt__optiontitle_Enabled,(short)0,(String)"text",(String)"",(short)80,(String)"chr",(short)1,(String)"row",(short)100,(short)0,(short)0,(short)20,(short)1,(short)-1,(short)-1,(bool)false,(String)"",(String)"left",(bool)true});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         GridhomemodulessdtsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         GridhomemodulessdtsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"Center",(String)"top",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         GridhomemodulessdtsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Div Control */
         GridhomemodulessdtsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"row",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Div Control */
         GridhomemodulessdtsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)"col-xs-12 HomeModulesBigDescriptionCell",(String)"Center",(String)"top",(String)"",(String)"",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Div Control */
         GridhomemodulessdtsRow.AddColumnProperties("div_start", -1, isAjaxCallMode( ), new Object[] {(String)"",(short)1,(short)0,(String)"px",(short)0,(String)"px",(String)" gx-attribute",(String)"left",(String)"top",(String)"",(String)"",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Attribute/Variable Label */
         GridhomemodulessdtsRow.AddColumnProperties("html_label", -1, isAjaxCallMode( ), new Object[] {(String)edtavHomemodulessdt__optiondescription_Internalname,(String)"Option Description",(String)"col-sm-3 AttributeHomeModulesBigDescriptionLabel",(short)0,(bool)true});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         /* Single line edit */
         ROClassString = "AttributeHomeModulesBigDescription";
         GridhomemodulessdtsRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtavHomemodulessdt__optiondescription_Internalname,((GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem)AV10HomeModulesSDT.Item(AV16GXV1)).gxTpr_Optiondescription,(String)"",(String)"",(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"",(String)"",(String)"",(String)"",(String)edtavHomemodulessdt__optiondescription_Jsonclick,(short)0,(String)"AttributeHomeModulesBigDescription",(String)"",(String)ROClassString,(String)"",(String)"",(short)1,(int)edtavHomemodulessdt__optiondescription_Enabled,(short)0,(String)"text",(String)"",(short)80,(String)"chr",(short)1,(String)"row",(short)100,(short)0,(short)0,(short)20,(short)1,(short)-1,(short)-1,(bool)false,(String)"",(String)"left",(bool)true});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         GridhomemodulessdtsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         GridhomemodulessdtsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"Center",(String)"top",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         GridhomemodulessdtsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         GridhomemodulessdtsRow.AddColumnProperties("div_end", -1, isAjaxCallMode( ), new Object[] {(String)"left",(String)"top",(String)"div"});
         GridhomemodulessdtsColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
         GridhomemodulessdtsRow.AddRenderProperties(GridhomemodulessdtsColumn);
         send_integrity_lvl_hashes0B3( ) ;
         /* End of Columns property logic. */
         GridhomemodulessdtsContainer.AddRow(GridhomemodulessdtsRow);
         nGXsfl_20_idx = ((subGridhomemodulessdts_Islastpage==1)&&(nGXsfl_20_idx+1>subGridhomemodulessdts_Recordsperpage( )) ? 1 : nGXsfl_20_idx+1);
         sGXsfl_20_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_20_idx), 4, 0)), 4, "0");
         SubsflControlProps_203( ) ;
         /* End function sendrow_203 */
      }

      protected void init_web_controls( )
      {
         /* End function init_web_controls */
      }

      protected void init_default_properties( )
      {
         edtavImagebanner_Internalname = "vIMAGEBANNER";
         divUnnamedtablefsbanner_Internalname = "UNNAMEDTABLEFSBANNER";
         lblOptionicon_Internalname = "OPTIONICON";
         edtavHomemodulessdt__optiontitle_Internalname = "HOMEMODULESSDT__OPTIONTITLE";
         edtavHomemodulessdt__optiondescription_Internalname = "HOMEMODULESSDT__OPTIONDESCRIPTION";
         divUnnamedtablefsgridhomemodulessdts_Internalname = "UNNAMEDTABLEFSGRIDHOMEMODULESSDTS";
         divTablecontent_Internalname = "TABLECONTENT";
         divTablemain_Internalname = "TABLEMAIN";
         divLayoutmaintable_Internalname = "LAYOUTMAINTABLE";
         Form.Internalname = "FORM";
         subBanner_Internalname = "BANNER";
         subGridhomemodulessdts_Internalname = "GRIDHOMEMODULESSDTS";
      }

      public override void initialize_properties( )
      {
         context.SetDefaultTheme("WorkWithPlusTheme");
         if ( context.isSpaRequest( ) )
         {
            disableJsOutput();
         }
         init_default_properties( ) ;
         edtavHomemodulessdt__optiondescription_Jsonclick = "";
         edtavHomemodulessdt__optiontitle_Jsonclick = "";
         lblOptionicon_Caption = "<i class='HomeModulesBigIcon fa fa-home' style='font-size: 65px'></i>";
         edtavHomemodulessdt__optiondescription_Enabled = -1;
         edtavHomemodulessdt__optiontitle_Enabled = -1;
         subGridhomemodulessdts_Allowcollapsing = 0;
         edtavHomemodulessdt__optiondescription_Enabled = 0;
         edtavHomemodulessdt__optiontitle_Enabled = 0;
         lblOptionicon_Caption = "<i class='HomeModulesBigIcon fa fa-home' style='font-size: 65px'></i>";
         subGridhomemodulessdts_Backcolorstyle = 0;
         subBanner_Allowcollapsing = 0;
         edtavImagebanner_Enabled = 0;
         subBanner_Backcolorstyle = 0;
         subGridhomemodulessdts_Justifycontent = "center";
         subGridhomemodulessdts_Flexwrap = "wrap";
         subGridhomemodulessdts_Class = "FreeStyleHomeModulesBig";
         subBanner_Autoplay = StringUtil.Str( (decimal)(0), 1, 0);
         subBanner_Showarrows = StringUtil.LTrim( StringUtil.Str( (decimal)(-1), 2, 0));
         subBanner_Class = "FreeStyleGrid";
         Form.Headerrawhtml = "";
         Form.Background = "";
         Form.Textcolor = 0;
         Form.Backcolor = (int)(0xFFFFFF);
         Form.Caption = "Inicio";
         if ( context.isSpaRequest( ) )
         {
            enableJsOutput();
         }
      }

      public override bool SupportAjaxEvent( )
      {
         return true ;
      }

      public override void InitializeDynEvents( )
      {
         setEventMetadata("REFRESH","{handler:'Refresh',iparms:[{av:'BANNER_nFirstRecordOnPage'},{av:'BANNER_nEOF'},{av:'GRIDHOMEMODULESSDTS_nFirstRecordOnPage'},{av:'GRIDHOMEMODULESSDTS_nEOF'},{av:'AV10HomeModulesSDT',fld:'vHOMEMODULESSDT',grid:20,pic:''},{av:'nRC_GXsfl_20',ctrl:'GRIDHOMEMODULESSDTS',prop:'GridRC'}]");
         setEventMetadata("REFRESH",",oparms:[]}");
         setEventMetadata("BANNER.LOAD","{handler:'E120B2',iparms:[]");
         setEventMetadata("BANNER.LOAD",",oparms:[{av:'AV11ImageBanner',fld:'vIMAGEBANNER',pic:''}]}");
         setEventMetadata("GRIDHOMEMODULESSDTS.LOAD","{handler:'E130B3',iparms:[{av:'AV10HomeModulesSDT',fld:'vHOMEMODULESSDT',grid:20,pic:''},{av:'GRIDHOMEMODULESSDTS_nFirstRecordOnPage'},{av:'nRC_GXsfl_20',ctrl:'GRIDHOMEMODULESSDTS',prop:'GridRC'}]");
         setEventMetadata("GRIDHOMEMODULESSDTS.LOAD",",oparms:[{av:'lblOptionicon_Caption',ctrl:'OPTIONICON',prop:'Caption'}]}");
         setEventMetadata("NULL","{handler:'Validv_Imagebanner',iparms:[]");
         setEventMetadata("NULL",",oparms:[]}");
         setEventMetadata("NULL","{handler:'Validv_Gxv3',iparms:[]");
         setEventMetadata("NULL",",oparms:[]}");
         return  ;
      }

      public override void cleanup( )
      {
         flushBuffer();
         CloseOpenCursors();
         if ( IsMain )
         {
            context.CloseConnections() ;
         }
      }

      protected void CloseOpenCursors( )
      {
      }

      public override void initialize( )
      {
         gxfirstwebparm = "";
         gxfirstwebparm_bkp = "";
         GXKey = "";
         AV10HomeModulesSDT = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem>( context, "HomeModulesSDTItem", "SIGMA");
         sDynURL = "";
         FormProcess = "";
         bodyStyle = "";
         GX_FocusControl = "";
         Form = new GXWebForm();
         sPrefix = "";
         BannerContainer = new GXWebGrid( context);
         sStyleString = "";
         subBanner_Header = "";
         BannerColumn = new GXWebColumn();
         AV11ImageBanner = "";
         GridhomemodulessdtsContainer = new GXWebGrid( context);
         subGridhomemodulessdts_Header = "";
         GridhomemodulessdtsColumn = new GXWebColumn();
         sEvt = "";
         EvtGridId = "";
         EvtRowId = "";
         sEvtType = "";
         AV19Imagebanner_GXI = "";
         GXt_objcol_SdtHomeModulesSDT_HomeModulesSDTItem1 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem>( context, "HomeModulesSDTItem", "SIGMA");
         BannerRow = new GXWebRow();
         GridhomemodulessdtsRow = new GXWebRow();
         BackMsgLst = new msglist();
         LclMsgLst = new msglist();
         subBanner_Linesclass = "";
         ClassString = "";
         StyleString = "";
         sImgUrl = "";
         subGridhomemodulessdts_Linesclass = "";
         lblOptionicon_Jsonclick = "";
         ROClassString = "";
         /* GeneXus formulas. */
         context.Gx_err = 0;
         edtavHomemodulessdt__optiontitle_Enabled = 0;
         edtavHomemodulessdt__optiondescription_Enabled = 0;
      }

      private short nGotPars ;
      private short GxWebError ;
      private short initialized ;
      private short gxajaxcallmode ;
      private short nGXWrapped ;
      private short wbEnd ;
      private short wbStart ;
      private short subBanner_Backcolorstyle ;
      private short subBanner_Allowselection ;
      private short subBanner_Allowhovering ;
      private short subBanner_Allowcollapsing ;
      private short subBanner_Collapsed ;
      private short subGridhomemodulessdts_Backcolorstyle ;
      private short subGridhomemodulessdts_Allowselection ;
      private short subGridhomemodulessdts_Allowhovering ;
      private short subGridhomemodulessdts_Allowcollapsing ;
      private short subGridhomemodulessdts_Collapsed ;
      private short nDonePA ;
      private short gxcookieaux ;
      private short subBanner_Backstyle ;
      private short subGridhomemodulessdts_Backstyle ;
      private short BANNER_nEOF ;
      private short GRIDHOMEMODULESSDTS_nEOF ;
      private int nRC_GXsfl_12 ;
      private int nGXsfl_12_idx=1 ;
      private int nRC_GXsfl_20 ;
      private int nGXsfl_20_idx=1 ;
      private int edtavImagebanner_Enabled ;
      private int subBanner_Selectedindex ;
      private int subBanner_Selectioncolor ;
      private int subBanner_Hoveringcolor ;
      private int edtavHomemodulessdt__optiontitle_Enabled ;
      private int edtavHomemodulessdt__optiondescription_Enabled ;
      private int subGridhomemodulessdts_Selectedindex ;
      private int subGridhomemodulessdts_Selectioncolor ;
      private int subGridhomemodulessdts_Hoveringcolor ;
      private int AV16GXV1 ;
      private int subBanner_Islastpage ;
      private int subGridhomemodulessdts_Islastpage ;
      private int nGXsfl_20_fel_idx=1 ;
      private int idxLst ;
      private int subBanner_Backcolor ;
      private int subBanner_Allbackcolor ;
      private int subGridhomemodulessdts_Backcolor ;
      private int subGridhomemodulessdts_Allbackcolor ;
      private long BANNER_nCurrentRecord ;
      private long GRIDHOMEMODULESSDTS_nCurrentRecord ;
      private long BANNER_nFirstRecordOnPage ;
      private long GRIDHOMEMODULESSDTS_nFirstRecordOnPage ;
      private String gxfirstwebparm ;
      private String gxfirstwebparm_bkp ;
      private String sGXsfl_12_idx="0001" ;
      private String GXKey ;
      private String sGXsfl_20_idx="0001" ;
      private String sDynURL ;
      private String FormProcess ;
      private String bodyStyle ;
      private String subBanner_Class ;
      private String subBanner_Showarrows ;
      private String subBanner_Autoplay ;
      private String subGridhomemodulessdts_Class ;
      private String subGridhomemodulessdts_Flexwrap ;
      private String subGridhomemodulessdts_Justifycontent ;
      private String GX_FocusControl ;
      private String sPrefix ;
      private String divLayoutmaintable_Internalname ;
      private String divTablemain_Internalname ;
      private String divTablecontent_Internalname ;
      private String sStyleString ;
      private String subBanner_Internalname ;
      private String subBanner_Header ;
      private String subGridhomemodulessdts_Internalname ;
      private String subGridhomemodulessdts_Header ;
      private String lblOptionicon_Caption ;
      private String sEvt ;
      private String EvtGridId ;
      private String EvtRowId ;
      private String sEvtType ;
      private String edtavImagebanner_Internalname ;
      private String edtavHomemodulessdt__optiontitle_Internalname ;
      private String edtavHomemodulessdt__optiondescription_Internalname ;
      private String sGXsfl_20_fel_idx="0001" ;
      private String sGXsfl_12_fel_idx="0001" ;
      private String subBanner_Linesclass ;
      private String divUnnamedtablefsbanner_Internalname ;
      private String ClassString ;
      private String StyleString ;
      private String sImgUrl ;
      private String lblOptionicon_Internalname ;
      private String subGridhomemodulessdts_Linesclass ;
      private String divUnnamedtablefsgridhomemodulessdts_Internalname ;
      private String lblOptionicon_Jsonclick ;
      private String ROClassString ;
      private String edtavHomemodulessdt__optiontitle_Jsonclick ;
      private String edtavHomemodulessdt__optiondescription_Jsonclick ;
      private bool entryPointCalled ;
      private bool toggleJsOutput ;
      private bool wbLoad ;
      private bool Rfr0gs ;
      private bool wbErr ;
      private bool bGXsfl_12_Refreshing=false ;
      private bool bGXsfl_20_Refreshing=false ;
      private bool gxdyncontrolsrefreshing ;
      private bool returnInSub ;
      private bool gx_BV20 ;
      private bool AV11ImageBanner_IsBlob ;
      private String AV19Imagebanner_GXI ;
      private String AV11ImageBanner ;
      private GXWebGrid BannerContainer ;
      private GXWebGrid GridhomemodulessdtsContainer ;
      private GXWebRow BannerRow ;
      private GXWebRow GridhomemodulessdtsRow ;
      private GXWebColumn BannerColumn ;
      private GXWebColumn GridhomemodulessdtsColumn ;
      private IGxDataStore dsGAM ;
      private IGxDataStore dsAFIP ;
      private IGxDataStore dsDefault ;
      private msglist BackMsgLst ;
      private msglist LclMsgLst ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem> AV10HomeModulesSDT ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtHomeModulesSDT_HomeModulesSDTItem> GXt_objcol_SdtHomeModulesSDT_HomeModulesSDTItem1 ;
      private GXWebForm Form ;
   }

}
