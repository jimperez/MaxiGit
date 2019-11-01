/*
               File: WWTipoTelefono
        Description:  Tipo Telefono
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/30/2019 19:14:21.5
       Program type: Callable routine
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
using GeneXus.Http.Server;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs {
   public class wwtipotelefono : GXDataArea, System.Web.SessionState.IRequiresSessionState
   {
      public wwtipotelefono( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         dsDefault = context.GetDataStore("Default");
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public wwtipotelefono( IGxContext context )
      {
         this.context = context;
         IsMain = false;
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
         cmbavGridactions = new GXCombobox();
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
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxNewRow_"+"Grid") == 0 )
            {
               nRC_GXsfl_43 = (int)(NumberUtil.Val( GetNextPar( ), "."));
               nGXsfl_43_idx = (int)(NumberUtil.Val( GetNextPar( ), "."));
               sGXsfl_43_idx = GetNextPar( );
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxnrGrid_newrow( ) ;
               return  ;
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxGridRefresh_"+"Grid") == 0 )
            {
               subGrid_Rows = (int)(NumberUtil.Val( GetNextPar( ), "."));
               AV15FilterFullText = GetNextPar( );
               AV12OrderedBy = (short)(NumberUtil.Val( GetNextPar( ), "."));
               AV13OrderedDsc = StringUtil.StrToBool( GetNextPar( ));
               AV44TFTipTelId = (int)(NumberUtil.Val( GetNextPar( ), "."));
               AV45TFTipTelId_To = (int)(NumberUtil.Val( GetNextPar( ), "."));
               AV48TFTipTelNom = GetNextPar( );
               AV56TFTipTelNom_Sel = GetNextPar( );
               AV37ManageFiltersExecutionStep = (short)(NumberUtil.Val( GetNextPar( ), "."));
               ajax_req_read_hidden_sdt(GetNextPar( ), AV30ColumnsSelector);
               AV46ddo_TipTelIdTitleControlIdToReplace = GetNextPar( );
               AV50ddo_TipTelNomTitleControlIdToReplace = GetNextPar( );
               AV59Pgmname = GetNextPar( );
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxgrGrid_refresh( subGrid_Rows, AV15FilterFullText, AV12OrderedBy, AV13OrderedDsc, AV44TFTipTelId, AV45TFTipTelId_To, AV48TFTipTelNom, AV56TFTipTelNom_Sel, AV37ManageFiltersExecutionStep, AV30ColumnsSelector, AV46ddo_TipTelIdTitleControlIdToReplace, AV50ddo_TipTelNomTitleControlIdToReplace, AV59Pgmname) ;
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
         PA0S2( ) ;
         gxajaxcallmode = (short)((isAjaxCallMode( ) ? 1 : 0));
         if ( ( gxajaxcallmode == 0 ) && ( GxWebError == 0 ) )
         {
            START0S2( ) ;
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
         context.AddJavascriptSource("gxcfg.js", "?2019103019142133", false, true);
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/DVPaginationBar/DVPaginationBarRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/WorkWithPlusUtilities/WorkWithPlusUtilitiesRender.js", "", false, true);
         context.AddJavascriptSource("Window/InNewWindowRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.WriteHtmlText( Form.Headerrawhtml) ;
         context.CloseHtmlHeader();
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         FormProcess = " data-HasEnter=\"false\" data-Skiponenter=\"false\"";
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
         context.WriteHtmlTextNl( "<form id=\"MAINFORM\" autocomplete=\"off\" name=\"MAINFORM\" method=\"post\" tabindex=-1  class=\"form-horizontal Form\" data-gx-class=\"form-horizontal Form\" novalidate action=\""+formatLink("wwtipotelefono.aspx") +"\">") ;
         GxWebStd.gx_hidden_field( context, "_EventName", "");
         GxWebStd.gx_hidden_field( context, "_EventGridId", "");
         GxWebStd.gx_hidden_field( context, "_EventRowId", "");
         context.WriteHtmlText( "<input type=\"submit\" title=\"submit\" style=\"display:none\" disabled>") ;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, "FORM", "Class", "form-horizontal Form", true);
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
         GxWebStd.gx_hidden_field( context, "GXH_vFILTERFULLTEXT", AV15FilterFullText);
         GxWebStd.gx_hidden_field( context, "GXH_vORDEREDBY", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV12OrderedBy), 4, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GXH_vORDEREDDSC", StringUtil.BoolToStr( AV13OrderedDsc));
         GxWebStd.gx_hidden_field( context, "GXH_vTFTIPTELID", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV44TFTipTelId), 9, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GXH_vTFTIPTELID_TO", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV45TFTipTelId_To), 9, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GXH_vTFTIPTELNOM", StringUtil.RTrim( AV48TFTipTelNom));
         GxWebStd.gx_hidden_field( context, "GXH_vTFTIPTELNOM_SEL", StringUtil.RTrim( AV56TFTipTelNom_Sel));
         /* Send saved values. */
         send_integrity_footer_hashes( ) ;
         GxWebStd.gx_hidden_field( context, "nRC_GXsfl_43", StringUtil.LTrim( StringUtil.NToC( (decimal)(nRC_GXsfl_43), 8, 0, ",", "")));
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vMANAGEFILTERSDATA", AV41ManageFiltersData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vMANAGEFILTERSDATA", AV41ManageFiltersData);
         }
         GxWebStd.gx_hidden_field( context, "vGRIDCURRENTPAGE", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV53GridCurrentPage), 10, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "vGRIDPAGECOUNT", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV54GridPageCount), 10, 0, ",", "")));
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vDDO_TITLESETTINGSICONS", AV51DDO_TitleSettingsIcons);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vDDO_TITLESETTINGSICONS", AV51DDO_TitleSettingsIcons);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vTIPTELIDTITLEFILTERDATA", AV43TipTelIdTitleFilterData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vTIPTELIDTITLEFILTERDATA", AV43TipTelIdTitleFilterData);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vTIPTELNOMTITLEFILTERDATA", AV47TipTelNomTitleFilterData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vTIPTELNOMTITLEFILTERDATA", AV47TipTelNomTitleFilterData);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vCOLUMNSSELECTOR", AV30ColumnsSelector);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vCOLUMNSSELECTOR", AV30ColumnsSelector);
         }
         GxWebStd.gx_hidden_field( context, "vPGMNAME", StringUtil.RTrim( AV59Pgmname));
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vGRIDSTATE", AV10GridState);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vGRIDSTATE", AV10GridState);
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GRID_nEOF", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nEOF), 1, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "DDO_MANAGEFILTERS_Icon", StringUtil.RTrim( Ddo_managefilters_Icon));
         GxWebStd.gx_hidden_field( context, "DDO_MANAGEFILTERS_Tooltip", StringUtil.RTrim( Ddo_managefilters_Tooltip));
         GxWebStd.gx_hidden_field( context, "DDO_MANAGEFILTERS_Cls", StringUtil.RTrim( Ddo_managefilters_Cls));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Class", StringUtil.RTrim( Gridpaginationbar_Class));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Showfirst", StringUtil.BoolToStr( Gridpaginationbar_Showfirst));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Showprevious", StringUtil.BoolToStr( Gridpaginationbar_Showprevious));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Shownext", StringUtil.BoolToStr( Gridpaginationbar_Shownext));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Showlast", StringUtil.BoolToStr( Gridpaginationbar_Showlast));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Pagestoshow", StringUtil.LTrim( StringUtil.NToC( (decimal)(Gridpaginationbar_Pagestoshow), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Pagingbuttonsposition", StringUtil.RTrim( Gridpaginationbar_Pagingbuttonsposition));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Pagingcaptionposition", StringUtil.RTrim( Gridpaginationbar_Pagingcaptionposition));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Emptygridclass", StringUtil.RTrim( Gridpaginationbar_Emptygridclass));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpageselector", StringUtil.BoolToStr( Gridpaginationbar_Rowsperpageselector));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpageselectedvalue", StringUtil.LTrim( StringUtil.NToC( (decimal)(Gridpaginationbar_Rowsperpageselectedvalue), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpageoptions", StringUtil.RTrim( Gridpaginationbar_Rowsperpageoptions));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Previous", StringUtil.RTrim( Gridpaginationbar_Previous));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Next", StringUtil.RTrim( Gridpaginationbar_Next));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Caption", StringUtil.RTrim( Gridpaginationbar_Caption));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Emptygridcaption", StringUtil.RTrim( Gridpaginationbar_Emptygridcaption));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpagecaption", StringUtil.RTrim( Gridpaginationbar_Rowsperpagecaption));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Caption", StringUtil.RTrim( Ddo_tiptelid_Caption));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Tooltip", StringUtil.RTrim( Ddo_tiptelid_Tooltip));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Cls", StringUtil.RTrim( Ddo_tiptelid_Cls));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Filteredtext_set", StringUtil.RTrim( Ddo_tiptelid_Filteredtext_set));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Filteredtextto_set", StringUtil.RTrim( Ddo_tiptelid_Filteredtextto_set));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Dropdownoptionstype", StringUtil.RTrim( Ddo_tiptelid_Dropdownoptionstype));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Titlecontrolidtoreplace", StringUtil.RTrim( Ddo_tiptelid_Titlecontrolidtoreplace));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Includesortasc", StringUtil.BoolToStr( Ddo_tiptelid_Includesortasc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Includesortdsc", StringUtil.BoolToStr( Ddo_tiptelid_Includesortdsc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Sortedstatus", StringUtil.RTrim( Ddo_tiptelid_Sortedstatus));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Includefilter", StringUtil.BoolToStr( Ddo_tiptelid_Includefilter));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Filtertype", StringUtil.RTrim( Ddo_tiptelid_Filtertype));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Filterisrange", StringUtil.BoolToStr( Ddo_tiptelid_Filterisrange));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Includedatalist", StringUtil.BoolToStr( Ddo_tiptelid_Includedatalist));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Sortasc", StringUtil.RTrim( Ddo_tiptelid_Sortasc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Sortdsc", StringUtil.RTrim( Ddo_tiptelid_Sortdsc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Cleanfilter", StringUtil.RTrim( Ddo_tiptelid_Cleanfilter));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Rangefilterfrom", StringUtil.RTrim( Ddo_tiptelid_Rangefilterfrom));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Rangefilterto", StringUtil.RTrim( Ddo_tiptelid_Rangefilterto));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Searchbuttontext", StringUtil.RTrim( Ddo_tiptelid_Searchbuttontext));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Caption", StringUtil.RTrim( Ddo_tiptelnom_Caption));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Tooltip", StringUtil.RTrim( Ddo_tiptelnom_Tooltip));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Cls", StringUtil.RTrim( Ddo_tiptelnom_Cls));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Filteredtext_set", StringUtil.RTrim( Ddo_tiptelnom_Filteredtext_set));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Selectedvalue_set", StringUtil.RTrim( Ddo_tiptelnom_Selectedvalue_set));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Dropdownoptionstype", StringUtil.RTrim( Ddo_tiptelnom_Dropdownoptionstype));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Titlecontrolidtoreplace", StringUtil.RTrim( Ddo_tiptelnom_Titlecontrolidtoreplace));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Includesortasc", StringUtil.BoolToStr( Ddo_tiptelnom_Includesortasc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Includesortdsc", StringUtil.BoolToStr( Ddo_tiptelnom_Includesortdsc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Sortedstatus", StringUtil.RTrim( Ddo_tiptelnom_Sortedstatus));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Includefilter", StringUtil.BoolToStr( Ddo_tiptelnom_Includefilter));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Filtertype", StringUtil.RTrim( Ddo_tiptelnom_Filtertype));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Filterisrange", StringUtil.BoolToStr( Ddo_tiptelnom_Filterisrange));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Includedatalist", StringUtil.BoolToStr( Ddo_tiptelnom_Includedatalist));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Datalisttype", StringUtil.RTrim( Ddo_tiptelnom_Datalisttype));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Datalistproc", StringUtil.RTrim( Ddo_tiptelnom_Datalistproc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Datalistupdateminimumcharacters", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ddo_tiptelnom_Datalistupdateminimumcharacters), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Sortasc", StringUtil.RTrim( Ddo_tiptelnom_Sortasc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Sortdsc", StringUtil.RTrim( Ddo_tiptelnom_Sortdsc));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Loadingdata", StringUtil.RTrim( Ddo_tiptelnom_Loadingdata));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Cleanfilter", StringUtil.RTrim( Ddo_tiptelnom_Cleanfilter));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Noresultsfound", StringUtil.RTrim( Ddo_tiptelnom_Noresultsfound));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Searchbuttontext", StringUtil.RTrim( Ddo_tiptelnom_Searchbuttontext));
         GxWebStd.gx_hidden_field( context, "INNEWWINDOW1_Width", StringUtil.RTrim( Innewwindow1_Width));
         GxWebStd.gx_hidden_field( context, "INNEWWINDOW1_Height", StringUtil.RTrim( Innewwindow1_Height));
         GxWebStd.gx_hidden_field( context, "INNEWWINDOW1_Target", StringUtil.RTrim( Innewwindow1_Target));
         GxWebStd.gx_hidden_field( context, "DDO_GRIDCOLUMNSSELECTOR_Caption", StringUtil.RTrim( Ddo_gridcolumnsselector_Caption));
         GxWebStd.gx_hidden_field( context, "DDO_GRIDCOLUMNSSELECTOR_Tooltip", StringUtil.RTrim( Ddo_gridcolumnsselector_Tooltip));
         GxWebStd.gx_hidden_field( context, "DDO_GRIDCOLUMNSSELECTOR_Cls", StringUtil.RTrim( Ddo_gridcolumnsselector_Cls));
         GxWebStd.gx_hidden_field( context, "DDO_GRIDCOLUMNSSELECTOR_Dropdownoptionstype", StringUtil.RTrim( Ddo_gridcolumnsselector_Dropdownoptionstype));
         GxWebStd.gx_hidden_field( context, "DDO_GRIDCOLUMNSSELECTOR_Titlecontrolidtoreplace", StringUtil.RTrim( Ddo_gridcolumnsselector_Titlecontrolidtoreplace));
         GxWebStd.gx_hidden_field( context, "DDO_GRIDCOLUMNSSELECTOR_Updatebuttontext", StringUtil.RTrim( Ddo_gridcolumnsselector_Updatebuttontext));
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Selectedpage", StringUtil.RTrim( Gridpaginationbar_Selectedpage));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpageselectedvalue", StringUtil.LTrim( StringUtil.NToC( (decimal)(Gridpaginationbar_Rowsperpageselectedvalue), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Activeeventkey", StringUtil.RTrim( Ddo_tiptelid_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Filteredtext_get", StringUtil.RTrim( Ddo_tiptelid_Filteredtext_get));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Filteredtextto_get", StringUtil.RTrim( Ddo_tiptelid_Filteredtextto_get));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Activeeventkey", StringUtil.RTrim( Ddo_tiptelnom_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Filteredtext_get", StringUtil.RTrim( Ddo_tiptelnom_Filteredtext_get));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Selectedvalue_get", StringUtil.RTrim( Ddo_tiptelnom_Selectedvalue_get));
         GxWebStd.gx_hidden_field( context, "DDO_GRIDCOLUMNSSELECTOR_Columnsselectorvalues", StringUtil.RTrim( Ddo_gridcolumnsselector_Columnsselectorvalues));
         GxWebStd.gx_hidden_field( context, "DDO_MANAGEFILTERS_Activeeventkey", StringUtil.RTrim( Ddo_managefilters_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Selectedpage", StringUtil.RTrim( Gridpaginationbar_Selectedpage));
         GxWebStd.gx_hidden_field( context, "GRIDPAGINATIONBAR_Rowsperpageselectedvalue", StringUtil.LTrim( StringUtil.NToC( (decimal)(Gridpaginationbar_Rowsperpageselectedvalue), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Activeeventkey", StringUtil.RTrim( Ddo_tiptelid_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Filteredtext_get", StringUtil.RTrim( Ddo_tiptelid_Filteredtext_get));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELID_Filteredtextto_get", StringUtil.RTrim( Ddo_tiptelid_Filteredtextto_get));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Activeeventkey", StringUtil.RTrim( Ddo_tiptelnom_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Filteredtext_get", StringUtil.RTrim( Ddo_tiptelnom_Filteredtext_get));
         GxWebStd.gx_hidden_field( context, "DDO_TIPTELNOM_Selectedvalue_get", StringUtil.RTrim( Ddo_tiptelnom_Selectedvalue_get));
         GxWebStd.gx_hidden_field( context, "DDO_GRIDCOLUMNSSELECTOR_Columnsselectorvalues", StringUtil.RTrim( Ddo_gridcolumnsselector_Columnsselectorvalues));
         GxWebStd.gx_hidden_field( context, "DDO_MANAGEFILTERS_Activeeventkey", StringUtil.RTrim( Ddo_managefilters_Activeeventkey));
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
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
         context.WriteHtmlTextNl( "</form>") ;
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
            WE0S2( ) ;
            context.WriteHtmlText( "</div>") ;
         }
      }

      public override void DispatchEvents( )
      {
         EVT0S2( ) ;
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
         return formatLink("wwtipotelefono.aspx")  ;
      }

      public override String GetPgmname( )
      {
         return "WWTipoTelefono" ;
      }

      public override String GetPgmdesc( )
      {
         return " Tipo Telefono" ;
      }

      protected void WB0S0( )
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
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "Section", "left", "top", " "+"data-gx-base-lib=\"bootstrapv3\""+" "+"data-abstract-form"+" ", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divLayoutmaintable_Internalname, 1, 0, "px", 0, "px", "Table", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablemain_Internalname, 1, 0, "px", 0, "px", "TableMainWithShadow", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 WWFiltersCell", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTableheader_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6 CellWidthAuto", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTableactions_Internalname, 1, 0, "px", 0, "px", "TableCellsWidthAuto", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "gx-action-group ActionGroupColorFilledActions", "left", "top", " "+"data-gx-actiongroup-type=\"toolbar\""+" ", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "gx-button", "left", "top", "", "", "div");
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 17,'',false,'',0)\"";
            ClassString = "ButtonColorFilled";
            StyleString = "";
            GxWebStd.gx_button_ctrl( context, bttBtninsert_Internalname, "gx.evt.setGridEvt("+StringUtil.Str( (decimal)(43), 2, 0)+","+"null"+");", "Agregar", bttBtninsert_Jsonclick, 5, "Agregar", "", StyleString, ClassString, 1, 1, "standard", "'"+""+"'"+",false,"+"'"+"E\\'DOINSERT\\'."+"'", TempTags, "", context.GetButtonType( ), "HLP_WWTipoTelefono.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "gx-button", "left", "top", "", "", "div");
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 19,'',false,'',0)\"";
            ClassString = "ButtonColorFilled";
            StyleString = "";
            GxWebStd.gx_button_ctrl( context, bttBtnexport_Internalname, "gx.evt.setGridEvt("+StringUtil.Str( (decimal)(43), 2, 0)+","+"null"+");", "Excel", bttBtnexport_Jsonclick, 5, "Exportar a Excel", "", StyleString, ClassString, 1, 1, "standard", "'"+""+"'"+",false,"+"'"+"E\\'DOEXPORT\\'."+"'", TempTags, "", context.GetButtonType( ), "HLP_WWTipoTelefono.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "gx-button", "left", "top", "", "", "div");
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 21,'',false,'',0)\"";
            ClassString = "ButtonColorFilled";
            StyleString = "";
            GxWebStd.gx_button_ctrl( context, bttBtnexportreport_Internalname, "gx.evt.setGridEvt("+StringUtil.Str( (decimal)(43), 2, 0)+","+"null"+");", "PDF", bttBtnexportreport_Jsonclick, 5, "Exportar a PDF", "", StyleString, ClassString, 1, 1, "standard", "'"+""+"'"+",false,"+"'"+"E\\'DOEXPORTREPORT\\'."+"'", TempTags, "", context.GetButtonType( ), "HLP_WWTipoTelefono.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "gx-button", "left", "top", "", "", "div");
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 23,'',false,'',0)\"";
            ClassString = "hidden-xs";
            StyleString = "";
            GxWebStd.gx_button_ctrl( context, bttBtneditcolumns_Internalname, "gx.evt.setGridEvt("+StringUtil.Str( (decimal)(43), 2, 0)+","+"null"+");", "Selecciona columnas", bttBtneditcolumns_Jsonclick, 0, "Selecciona columnas", "", StyleString, ClassString, 1, 0, "standard", "'"+""+"'"+",false,"+"'"+""+"'", TempTags, "", context.GetButtonType( ), "HLP_WWTipoTelefono.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 hidden-xs col-sm-6 CellFloatRight CellWidthAuto", "left", "top", "", "", "div");
            wb_table1_25_0S2( true) ;
         }
         else
         {
            wb_table1_25_0S2( false) ;
         }
         return  ;
      }

      protected void wb_table1_25_0S2e( bool wbgen )
      {
         if ( wbgen )
         {
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            ClassString = "ErrorViewer";
            StyleString = "";
            GxWebStd.gx_msg_list( context, "", context.GX_msglist.DisplayMode, StyleString, ClassString, "", "false");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 SectionGrid GridNoBorderCell", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divGridtablewithpaginationbar_Internalname, 1, 0, "px", 0, "px", "Table", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /*  Grid Control  */
            GridContainer.SetWrapped(nGXWrapped);
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<div id=\""+"GridContainer"+"DivS\" data-gxgridid=\"43\">") ;
               sStyleString = "";
               GxWebStd.gx_table_start( context, subGrid_Internalname, subGrid_Internalname, "", "GridWithPaginationBar GridNoBorder WorkWith", 0, "", "", 1, 2, sStyleString, "", "", 0);
               /* Subfile titles */
               context.WriteHtmlText( "<tr") ;
               context.WriteHtmlTextNl( ">") ;
               if ( subGrid_Backcolorstyle == 0 )
               {
                  subGrid_Titlebackstyle = 0;
                  if ( StringUtil.Len( subGrid_Class) > 0 )
                  {
                     subGrid_Linesclass = subGrid_Class+"Title";
                  }
               }
               else
               {
                  subGrid_Titlebackstyle = 1;
                  if ( subGrid_Backcolorstyle == 1 )
                  {
                     subGrid_Titlebackcolor = subGrid_Allbackcolor;
                     if ( StringUtil.Len( subGrid_Class) > 0 )
                     {
                        subGrid_Linesclass = subGrid_Class+"UniformTitle";
                     }
                  }
                  else
                  {
                     if ( StringUtil.Len( subGrid_Class) > 0 )
                     {
                        subGrid_Linesclass = subGrid_Class+"Title";
                     }
                  }
               }
               context.WriteHtmlText( "<th align=\""+"right"+"\" "+" nowrap=\"nowrap\" "+" class=\""+"ConvertToDDO"+"\" "+" style=\""+""+""+"\" "+">") ;
               context.SendWebValue( "") ;
               context.WriteHtmlTextNl( "</th>") ;
               context.WriteHtmlText( "<th align=\""+"right"+"\" "+" nowrap=\"nowrap\" "+" class=\""+"Attribute"+"\" "+" style=\""+((edtTipTelId_Visible==0) ? "display:none;" : "")+""+"\" "+">") ;
               if ( edtTipTelId_Titleformat == 0 )
               {
                  context.SendWebValue( edtTipTelId_Title) ;
               }
               else
               {
                  context.WriteHtmlText( edtTipTelId_Title) ;
               }
               context.WriteHtmlTextNl( "</th>") ;
               context.WriteHtmlText( "<th align=\""+"left"+"\" "+" nowrap=\"nowrap\" "+" class=\""+"Attribute"+"\" "+" style=\""+((edtTipTelNom_Visible==0) ? "display:none;" : "")+""+"\" "+">") ;
               if ( edtTipTelNom_Titleformat == 0 )
               {
                  context.SendWebValue( edtTipTelNom_Title) ;
               }
               else
               {
                  context.WriteHtmlText( edtTipTelNom_Title) ;
               }
               context.WriteHtmlTextNl( "</th>") ;
               context.WriteHtmlTextNl( "</tr>") ;
               GridContainer.AddObjectProperty("GridName", "Grid");
            }
            else
            {
               if ( isAjaxCallMode( ) )
               {
                  GridContainer = new GXWebGrid( context);
               }
               else
               {
                  GridContainer.Clear();
               }
               GridContainer.SetWrapped(nGXWrapped);
               GridContainer.AddObjectProperty("GridName", "Grid");
               GridContainer.AddObjectProperty("Header", subGrid_Header);
               GridContainer.AddObjectProperty("Class", "GridWithPaginationBar GridNoBorder WorkWith");
               GridContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Backcolorstyle), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Sortable", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Sortable), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("CmpContext", "");
               GridContainer.AddObjectProperty("InMasterPage", "false");
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", StringUtil.LTrim( StringUtil.NToC( (decimal)(AV55GridActions), 4, 0, ".", "")));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", StringUtil.LTrim( StringUtil.NToC( (decimal)(A1TipTelId), 9, 0, ".", "")));
               GridColumn.AddObjectProperty("Title", StringUtil.RTrim( edtTipTelId_Title));
               GridColumn.AddObjectProperty("Titleformat", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtTipTelId_Titleformat), 4, 0, ".", "")));
               GridColumn.AddObjectProperty("Visible", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtTipTelId_Visible), 5, 0, ".", "")));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Value", StringUtil.RTrim( A3TipTelNom));
               GridColumn.AddObjectProperty("Title", StringUtil.RTrim( edtTipTelNom_Title));
               GridColumn.AddObjectProperty("Titleformat", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtTipTelNom_Titleformat), 4, 0, ".", "")));
               GridColumn.AddObjectProperty("Link", StringUtil.RTrim( edtTipTelNom_Link));
               GridColumn.AddObjectProperty("Visible", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtTipTelNom_Visible), 5, 0, ".", "")));
               GridContainer.AddColumnProperties(GridColumn);
               GridContainer.AddObjectProperty("Selectedindex", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Selectedindex), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowselection", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowselection), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Selectioncolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Selectioncolor), 9, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowhover", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowhovering), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Hovercolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Hoveringcolor), 9, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowcollapsing", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowcollapsing), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Collapsed", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Collapsed), 1, 0, ".", "")));
            }
         }
         if ( wbEnd == 43 )
         {
            wbEnd = 0;
            nRC_GXsfl_43 = (int)(nGXsfl_43_idx-1);
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "</table>") ;
               context.WriteHtmlText( "</div>") ;
            }
            else
            {
               sStyleString = "";
               context.WriteHtmlText( "<div id=\""+"GridContainer"+"Div\" "+sStyleString+">"+"</div>") ;
               context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Grid", GridContainer);
               if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "GridContainerData", GridContainer.ToJavascriptSource());
               }
               if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "GridContainerData"+"V", GridContainer.GridValuesHidden());
               }
               else
               {
                  context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"GridContainerData"+"V"+"\" value='"+GridContainer.GridValuesHidden()+"'/>") ;
               }
            }
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* User Defined Control */
            ucGridpaginationbar.SetProperty("Class", Gridpaginationbar_Class);
            ucGridpaginationbar.SetProperty("ShowFirst", Gridpaginationbar_Showfirst);
            ucGridpaginationbar.SetProperty("ShowPrevious", Gridpaginationbar_Showprevious);
            ucGridpaginationbar.SetProperty("ShowNext", Gridpaginationbar_Shownext);
            ucGridpaginationbar.SetProperty("ShowLast", Gridpaginationbar_Showlast);
            ucGridpaginationbar.SetProperty("PagesToShow", Gridpaginationbar_Pagestoshow);
            ucGridpaginationbar.SetProperty("PagingButtonsPosition", Gridpaginationbar_Pagingbuttonsposition);
            ucGridpaginationbar.SetProperty("PagingCaptionPosition", Gridpaginationbar_Pagingcaptionposition);
            ucGridpaginationbar.SetProperty("EmptyGridClass", Gridpaginationbar_Emptygridclass);
            ucGridpaginationbar.SetProperty("RowsPerPageSelector", Gridpaginationbar_Rowsperpageselector);
            ucGridpaginationbar.SetProperty("RowsPerPageOptions", Gridpaginationbar_Rowsperpageoptions);
            ucGridpaginationbar.SetProperty("Previous", Gridpaginationbar_Previous);
            ucGridpaginationbar.SetProperty("Next", Gridpaginationbar_Next);
            ucGridpaginationbar.SetProperty("Caption", Gridpaginationbar_Caption);
            ucGridpaginationbar.SetProperty("EmptyGridCaption", Gridpaginationbar_Emptygridcaption);
            ucGridpaginationbar.SetProperty("RowsPerPageCaption", Gridpaginationbar_Rowsperpagecaption);
            ucGridpaginationbar.SetProperty("CurrentPage", AV53GridCurrentPage);
            ucGridpaginationbar.SetProperty("PageCount", AV54GridPageCount);
            ucGridpaginationbar.Render(context, "dvelop.dvpaginationbar", Gridpaginationbar_Internalname, "GRIDPAGINATIONBARContainer");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divHtml_bottomauxiliarcontrols_Internalname, 1, 0, "px", 0, "px", "Section", "left", "top", "", "", "div");
            /* User Defined Control */
            ucDdo_tiptelid.SetProperty("Caption", Ddo_tiptelid_Caption);
            ucDdo_tiptelid.SetProperty("Tooltip", Ddo_tiptelid_Tooltip);
            ucDdo_tiptelid.SetProperty("Cls", Ddo_tiptelid_Cls);
            ucDdo_tiptelid.SetProperty("DropDownOptionsType", Ddo_tiptelid_Dropdownoptionstype);
            ucDdo_tiptelid.SetProperty("IncludeSortASC", Ddo_tiptelid_Includesortasc);
            ucDdo_tiptelid.SetProperty("IncludeSortDSC", Ddo_tiptelid_Includesortdsc);
            ucDdo_tiptelid.SetProperty("IncludeFilter", Ddo_tiptelid_Includefilter);
            ucDdo_tiptelid.SetProperty("FilterType", Ddo_tiptelid_Filtertype);
            ucDdo_tiptelid.SetProperty("FilterIsRange", Ddo_tiptelid_Filterisrange);
            ucDdo_tiptelid.SetProperty("IncludeDataList", Ddo_tiptelid_Includedatalist);
            ucDdo_tiptelid.SetProperty("SortASC", Ddo_tiptelid_Sortasc);
            ucDdo_tiptelid.SetProperty("SortDSC", Ddo_tiptelid_Sortdsc);
            ucDdo_tiptelid.SetProperty("CleanFilter", Ddo_tiptelid_Cleanfilter);
            ucDdo_tiptelid.SetProperty("RangeFilterFrom", Ddo_tiptelid_Rangefilterfrom);
            ucDdo_tiptelid.SetProperty("RangeFilterTo", Ddo_tiptelid_Rangefilterto);
            ucDdo_tiptelid.SetProperty("SearchButtonText", Ddo_tiptelid_Searchbuttontext);
            ucDdo_tiptelid.SetProperty("DropDownOptionsTitleSettingsIcons", AV51DDO_TitleSettingsIcons);
            ucDdo_tiptelid.SetProperty("DropDownOptionsData", AV43TipTelIdTitleFilterData);
            ucDdo_tiptelid.Render(context, "dvelop.gxbootstrap.dropdownoptions", Ddo_tiptelid_Internalname, "DDO_TIPTELIDContainer");
            /* Multiple line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 54,'',false,'" + sGXsfl_43_idx + "',0)\"";
            ClassString = "Attribute";
            StyleString = "";
            ClassString = "Attribute";
            StyleString = "";
            GxWebStd.gx_html_textarea( context, edtavDdo_tiptelidtitlecontrolidtoreplace_Internalname, AV46ddo_TipTelIdTitleControlIdToReplace, "", TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,54);\"", 0, edtavDdo_tiptelidtitlecontrolidtoreplace_Visible, 1, 0, 80, "chr", 4, "row", StyleString, ClassString, "", "", "300", -1, 0, "", "", -1, true, "", "'"+""+"'"+",false,"+"'"+""+"'", 0, "HLP_WWTipoTelefono.htm");
            /* User Defined Control */
            ucDdo_tiptelnom.SetProperty("Caption", Ddo_tiptelnom_Caption);
            ucDdo_tiptelnom.SetProperty("Tooltip", Ddo_tiptelnom_Tooltip);
            ucDdo_tiptelnom.SetProperty("Cls", Ddo_tiptelnom_Cls);
            ucDdo_tiptelnom.SetProperty("DropDownOptionsType", Ddo_tiptelnom_Dropdownoptionstype);
            ucDdo_tiptelnom.SetProperty("IncludeSortASC", Ddo_tiptelnom_Includesortasc);
            ucDdo_tiptelnom.SetProperty("IncludeSortDSC", Ddo_tiptelnom_Includesortdsc);
            ucDdo_tiptelnom.SetProperty("IncludeFilter", Ddo_tiptelnom_Includefilter);
            ucDdo_tiptelnom.SetProperty("FilterType", Ddo_tiptelnom_Filtertype);
            ucDdo_tiptelnom.SetProperty("FilterIsRange", Ddo_tiptelnom_Filterisrange);
            ucDdo_tiptelnom.SetProperty("IncludeDataList", Ddo_tiptelnom_Includedatalist);
            ucDdo_tiptelnom.SetProperty("DataListType", Ddo_tiptelnom_Datalisttype);
            ucDdo_tiptelnom.SetProperty("DataListProc", Ddo_tiptelnom_Datalistproc);
            ucDdo_tiptelnom.SetProperty("DataListUpdateMinimumCharacters", Ddo_tiptelnom_Datalistupdateminimumcharacters);
            ucDdo_tiptelnom.SetProperty("SortASC", Ddo_tiptelnom_Sortasc);
            ucDdo_tiptelnom.SetProperty("SortDSC", Ddo_tiptelnom_Sortdsc);
            ucDdo_tiptelnom.SetProperty("LoadingData", Ddo_tiptelnom_Loadingdata);
            ucDdo_tiptelnom.SetProperty("CleanFilter", Ddo_tiptelnom_Cleanfilter);
            ucDdo_tiptelnom.SetProperty("NoResultsFound", Ddo_tiptelnom_Noresultsfound);
            ucDdo_tiptelnom.SetProperty("SearchButtonText", Ddo_tiptelnom_Searchbuttontext);
            ucDdo_tiptelnom.SetProperty("DropDownOptionsTitleSettingsIcons", AV51DDO_TitleSettingsIcons);
            ucDdo_tiptelnom.SetProperty("DropDownOptionsData", AV47TipTelNomTitleFilterData);
            ucDdo_tiptelnom.Render(context, "dvelop.gxbootstrap.dropdownoptions", Ddo_tiptelnom_Internalname, "DDO_TIPTELNOMContainer");
            /* Multiple line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 56,'',false,'" + sGXsfl_43_idx + "',0)\"";
            ClassString = "Attribute";
            StyleString = "";
            ClassString = "Attribute";
            StyleString = "";
            GxWebStd.gx_html_textarea( context, edtavDdo_tiptelnomtitlecontrolidtoreplace_Internalname, AV50ddo_TipTelNomTitleControlIdToReplace, "", TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,56);\"", 0, edtavDdo_tiptelnomtitlecontrolidtoreplace_Visible, 1, 0, 80, "chr", 4, "row", StyleString, ClassString, "", "", "300", -1, 0, "", "", -1, true, "", "'"+""+"'"+",false,"+"'"+""+"'", 0, "HLP_WWTipoTelefono.htm");
            /* User Defined Control */
            ucWorkwithplusutilities1.Render(context, "dvelop.workwithplusutilities_f5", Workwithplusutilities1_Internalname, "WORKWITHPLUSUTILITIES1Container");
            /* User Defined Control */
            ucInnewwindow1.Render(context, "innewwindow", Innewwindow1_Internalname, "INNEWWINDOW1Container");
            /* User Defined Control */
            ucDdo_gridcolumnsselector.SetProperty("Caption", Ddo_gridcolumnsselector_Caption);
            ucDdo_gridcolumnsselector.SetProperty("Tooltip", Ddo_gridcolumnsselector_Tooltip);
            ucDdo_gridcolumnsselector.SetProperty("Cls", Ddo_gridcolumnsselector_Cls);
            ucDdo_gridcolumnsselector.SetProperty("DropDownOptionsType", Ddo_gridcolumnsselector_Dropdownoptionstype);
            ucDdo_gridcolumnsselector.SetProperty("UpdateButtonText", Ddo_gridcolumnsselector_Updatebuttontext);
            ucDdo_gridcolumnsselector.SetProperty("DropDownOptionsTitleSettingsIcons", AV51DDO_TitleSettingsIcons);
            ucDdo_gridcolumnsselector.SetProperty("DropDownOptionsData", AV30ColumnsSelector);
            ucDdo_gridcolumnsselector.Render(context, "dvelop.gxbootstrap.dropdownoptions", Ddo_gridcolumnsselector_Internalname, "DDO_GRIDCOLUMNSSELECTORContainer");
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 60,'',false,'" + sGXsfl_43_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavOrderedby_Internalname, StringUtil.LTrim( StringUtil.NToC( (decimal)(AV12OrderedBy), 4, 0, ",", "")), StringUtil.LTrim( context.localUtil.Format( (decimal)(AV12OrderedBy), "ZZZ9")), TempTags+" onchange=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onchange(this, event)\" "+" onblur=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onblur(this,60);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavOrderedby_Jsonclick, 0, "Attribute", "", "", "", "", edtavOrderedby_Visible, 1, 0, "number", "1", 4, "chr", 1, "row", 4, 0, 0, 0, 1, -1, 0, true, "", "right", false, "HLP_WWTipoTelefono.htm");
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 61,'',false,'" + sGXsfl_43_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavOrdereddsc_Internalname, StringUtil.BoolToStr( AV13OrderedDsc), StringUtil.BoolToStr( AV13OrderedDsc), TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,61);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavOrdereddsc_Jsonclick, 0, "Attribute", "", "", "", "", edtavOrdereddsc_Visible, 1, 0, "text", "", 4, "chr", 1, "row", 4, 0, 0, 0, 1, 0, 0, true, "", "right", false, "HLP_WWTipoTelefono.htm");
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 62,'',false,'" + sGXsfl_43_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavManagefiltersexecutionstep_Internalname, StringUtil.LTrim( StringUtil.NToC( (decimal)(AV37ManageFiltersExecutionStep), 1, 0, ",", "")), StringUtil.LTrim( context.localUtil.Format( (decimal)(AV37ManageFiltersExecutionStep), "9")), TempTags+" onchange=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onchange(this, event)\" "+" onblur=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onblur(this,62);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavManagefiltersexecutionstep_Jsonclick, 0, "Attribute", "", "", "", "", edtavManagefiltersexecutionstep_Visible, 1, 0, "number", "1", 1, "chr", 1, "row", 1, 0, 0, 0, 1, -1, 0, true, "", "right", false, "HLP_WWTipoTelefono.htm");
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 63,'',false,'" + sGXsfl_43_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavTftiptelid_Internalname, StringUtil.LTrim( StringUtil.NToC( (decimal)(AV44TFTipTelId), 9, 0, ",", "")), StringUtil.LTrim( context.localUtil.Format( (decimal)(AV44TFTipTelId), "ZZZZZZZZ9")), TempTags+" onchange=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onchange(this, event)\" "+" onblur=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onblur(this,63);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavTftiptelid_Jsonclick, 0, "Attribute", "", "", "", "", edtavTftiptelid_Visible, 1, 0, "number", "1", 9, "chr", 1, "row", 9, 0, 0, 0, 1, -1, 0, true, "", "right", false, "HLP_WWTipoTelefono.htm");
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 64,'',false,'" + sGXsfl_43_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavTftiptelid_to_Internalname, StringUtil.LTrim( StringUtil.NToC( (decimal)(AV45TFTipTelId_To), 9, 0, ",", "")), StringUtil.LTrim( context.localUtil.Format( (decimal)(AV45TFTipTelId_To), "ZZZZZZZZ9")), TempTags+" onchange=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onchange(this, event)\" "+" onblur=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onblur(this,64);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavTftiptelid_to_Jsonclick, 0, "Attribute", "", "", "", "", edtavTftiptelid_to_Visible, 1, 0, "number", "1", 9, "chr", 1, "row", 9, 0, 0, 0, 1, -1, 0, true, "", "right", false, "HLP_WWTipoTelefono.htm");
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 65,'',false,'" + sGXsfl_43_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavTftiptelnom_Internalname, StringUtil.RTrim( AV48TFTipTelNom), StringUtil.RTrim( context.localUtil.Format( AV48TFTipTelNom, "")), TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,65);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavTftiptelnom_Jsonclick, 0, "Attribute", "", "", "", "", edtavTftiptelnom_Visible, 1, 0, "text", "", 20, "chr", 1, "row", 20, 0, 0, 0, 1, -1, -1, true, "", "left", true, "HLP_WWTipoTelefono.htm");
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 66,'',false,'" + sGXsfl_43_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavTftiptelnom_sel_Internalname, StringUtil.RTrim( AV56TFTipTelNom_Sel), StringUtil.RTrim( context.localUtil.Format( AV56TFTipTelNom_Sel, "")), TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,66);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavTftiptelnom_sel_Jsonclick, 0, "Attribute", "", "", "", "", edtavTftiptelnom_sel_Visible, 1, 0, "text", "", 20, "chr", 1, "row", 20, 0, 0, 0, 1, -1, -1, true, "", "left", true, "HLP_WWTipoTelefono.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
         }
         if ( wbEnd == 43 )
         {
            wbEnd = 0;
            if ( isFullAjaxMode( ) )
            {
               if ( GridContainer.GetWrapped() == 1 )
               {
                  context.WriteHtmlText( "</table>") ;
                  context.WriteHtmlText( "</div>") ;
               }
               else
               {
                  sStyleString = "";
                  context.WriteHtmlText( "<div id=\""+"GridContainer"+"Div\" "+sStyleString+">"+"</div>") ;
                  context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Grid", GridContainer);
                  if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "GridContainerData", GridContainer.ToJavascriptSource());
                  }
                  if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "GridContainerData"+"V", GridContainer.GridValuesHidden());
                  }
                  else
                  {
                     context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"GridContainerData"+"V"+"\" value='"+GridContainer.GridValuesHidden()+"'/>") ;
                  }
               }
            }
         }
         wbLoad = true;
      }

      protected void START0S2( )
      {
         wbLoad = false;
         wbEnd = 0;
         wbStart = 0;
         if ( ! context.isSpaRequest( ) )
         {
            Form.Meta.addItem("generator", "GeneXus C# 16_0_5-135614", 0) ;
            Form.Meta.addItem("description", " Tipo Telefono", 0) ;
         }
         context.wjLoc = "";
         context.nUserReturn = 0;
         context.wbHandled = 0;
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
         }
         wbErr = false;
         STRUP0S0( ) ;
      }

      protected void WS0S2( )
      {
         START0S2( ) ;
         EVT0S2( ) ;
      }

      protected void EVT0S2( )
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
                           else if ( StringUtil.StrCmp(sEvt, "DDO_MANAGEFILTERS.ONOPTIONCLICKED") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              E110S2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "GRIDPAGINATIONBAR.CHANGEPAGE") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              E120S2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "GRIDPAGINATIONBAR.CHANGEROWSPERPAGE") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              E130S2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "DDO_TIPTELID.ONOPTIONCLICKED") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              E140S2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "DDO_TIPTELNOM.ONOPTIONCLICKED") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              E150S2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              E160S2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "'DOINSERT'") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              /* Execute user event: 'DoInsert' */
                              E170S2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "'DOEXPORT'") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              /* Execute user event: 'DoExport' */
                              E180S2 ();
                           }
                           else if ( StringUtil.StrCmp(sEvt, "'DOEXPORTREPORT'") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                              /* Execute user event: 'DoExportReport' */
                              E190S2 ();
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
                           if ( ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "START") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 7), "REFRESH") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 9), "GRID.LOAD") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "ENTER") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 6), "CANCEL") == 0 ) )
                           {
                              nGXsfl_43_idx = (int)(NumberUtil.Val( sEvtType, "."));
                              sGXsfl_43_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_43_idx), 4, 0)), 4, "0");
                              SubsflControlProps_432( ) ;
                              cmbavGridactions.Name = cmbavGridactions_Internalname;
                              cmbavGridactions.CurrentValue = cgiGet( cmbavGridactions_Internalname);
                              AV55GridActions = (short)(NumberUtil.Val( cgiGet( cmbavGridactions_Internalname), "."));
                              context.httpAjaxContext.ajax_rsp_assign_attri("", false, cmbavGridactions_Internalname, StringUtil.LTrim( StringUtil.Str( (decimal)(AV55GridActions), 4, 0)));
                              A1TipTelId = (int)(context.localUtil.CToN( cgiGet( edtTipTelId_Internalname), ",", "."));
                              A3TipTelNom = cgiGet( edtTipTelNom_Internalname);
                              sEvtType = StringUtil.Right( sEvt, 1);
                              if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                              {
                                 sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                                 if ( StringUtil.StrCmp(sEvt, "START") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    /* Execute user event: Start */
                                    E200S2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "REFRESH") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    /* Execute user event: Refresh */
                                    E210S2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "GRID.LOAD") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    E220S2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "ENTER") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    if ( ! wbErr )
                                    {
                                       Rfr0gs = false;
                                       /* Set Refresh If Filterfulltext Changed */
                                       if ( StringUtil.StrCmp(cgiGet( "GXH_vFILTERFULLTEXT"), AV15FilterFullText) != 0 )
                                       {
                                          Rfr0gs = true;
                                       }
                                       /* Set Refresh If Orderedby Changed */
                                       if ( ( context.localUtil.CToN( cgiGet( "GXH_vORDEREDBY"), ",", ".") != Convert.ToDecimal( AV12OrderedBy )) )
                                       {
                                          Rfr0gs = true;
                                       }
                                       /* Set Refresh If Ordereddsc Changed */
                                       if ( StringUtil.StrToBool( cgiGet( "GXH_vORDEREDDSC")) != AV13OrderedDsc )
                                       {
                                          Rfr0gs = true;
                                       }
                                       /* Set Refresh If Tftiptelid Changed */
                                       if ( ( context.localUtil.CToN( cgiGet( "GXH_vTFTIPTELID"), ",", ".") != Convert.ToDecimal( AV44TFTipTelId )) )
                                       {
                                          Rfr0gs = true;
                                       }
                                       /* Set Refresh If Tftiptelid_to Changed */
                                       if ( ( context.localUtil.CToN( cgiGet( "GXH_vTFTIPTELID_TO"), ",", ".") != Convert.ToDecimal( AV45TFTipTelId_To )) )
                                       {
                                          Rfr0gs = true;
                                       }
                                       /* Set Refresh If Tftiptelnom Changed */
                                       if ( StringUtil.StrCmp(cgiGet( "GXH_vTFTIPTELNOM"), AV48TFTipTelNom) != 0 )
                                       {
                                          Rfr0gs = true;
                                       }
                                       /* Set Refresh If Tftiptelnom_sel Changed */
                                       if ( StringUtil.StrCmp(cgiGet( "GXH_vTFTIPTELNOM_SEL"), AV56TFTipTelNom_Sel) != 0 )
                                       {
                                          Rfr0gs = true;
                                       }
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
                        }
                     }
                     context.wbHandled = 1;
                  }
               }
            }
         }
      }

      protected void WE0S2( )
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

      protected void PA0S2( )
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
               GX_FocusControl = edtavFilterfulltext_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
            }
            nDonePA = 1;
         }
      }

      protected void dynload_actions( )
      {
         /* End function dynload_actions */
      }

      protected void gxnrGrid_newrow( )
      {
         GxWebStd.set_html_headers( context, 0, "", "");
         SubsflControlProps_432( ) ;
         while ( nGXsfl_43_idx <= nRC_GXsfl_43 )
         {
            sendrow_432( ) ;
            nGXsfl_43_idx = ((subGrid_Islastpage==1)&&(nGXsfl_43_idx+1>subGrid_Recordsperpage( )) ? 1 : nGXsfl_43_idx+1);
            sGXsfl_43_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_43_idx), 4, 0)), 4, "0");
            SubsflControlProps_432( ) ;
         }
         context.GX_webresponse.AddString(context.httpAjaxContext.getJSONContainerResponse( GridContainer));
         /* End function gxnrGrid_newrow */
      }

      protected void gxgrGrid_refresh( int subGrid_Rows ,
                                       String AV15FilterFullText ,
                                       short AV12OrderedBy ,
                                       bool AV13OrderedDsc ,
                                       int AV44TFTipTelId ,
                                       int AV45TFTipTelId_To ,
                                       String AV48TFTipTelNom ,
                                       String AV56TFTipTelNom_Sel ,
                                       short AV37ManageFiltersExecutionStep ,
                                       GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector AV30ColumnsSelector ,
                                       String AV46ddo_TipTelIdTitleControlIdToReplace ,
                                       String AV50ddo_TipTelNomTitleControlIdToReplace ,
                                       String AV59Pgmname )
      {
         initialize_formulas( ) ;
         GxWebStd.set_html_headers( context, 0, "", "");
         GRID_nCurrentRecord = 0;
         RF0S2( ) ;
         /* End function gxgrGrid_refresh */
      }

      protected void send_integrity_hashes( )
      {
         GxWebStd.gx_hidden_field( context, "gxhash_TIPTELID", GetSecureSignedToken( "", context.localUtil.Format( (decimal)(A1TipTelId), "ZZZZZZZZ9"), context));
         GxWebStd.gx_hidden_field( context, "TIPTELID", StringUtil.LTrim( StringUtil.NToC( (decimal)(A1TipTelId), 9, 0, ".", "")));
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
         RF0S2( ) ;
         if ( isFullAjaxMode( ) )
         {
            send_integrity_footer_hashes( ) ;
         }
      }

      protected void initialize_formulas( )
      {
         /* GeneXus formulas. */
         AV59Pgmname = "WWTipoTelefono";
         context.Gx_err = 0;
      }

      protected void RF0S2( )
      {
         initialize_formulas( ) ;
         clear_multi_value_controls( ) ;
         if ( isAjaxCallMode( ) )
         {
            GridContainer.ClearRows();
         }
         wbStart = 43;
         /* Execute user event: Refresh */
         E210S2 ();
         nGXsfl_43_idx = 1;
         sGXsfl_43_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_43_idx), 4, 0)), 4, "0");
         SubsflControlProps_432( ) ;
         bGXsfl_43_Refreshing = true;
         GridContainer.AddObjectProperty("GridName", "Grid");
         GridContainer.AddObjectProperty("CmpContext", "");
         GridContainer.AddObjectProperty("InMasterPage", "false");
         GridContainer.AddObjectProperty("Class", "GridWithPaginationBar GridNoBorder WorkWith");
         GridContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
         GridContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
         GridContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Backcolorstyle), 1, 0, ".", "")));
         GridContainer.AddObjectProperty("Sortable", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Sortable), 1, 0, ".", "")));
         GridContainer.PageSize = subGrid_Recordsperpage( );
         gxdyncontrolsrefreshing = true;
         fix_multi_value_controls( ) ;
         gxdyncontrolsrefreshing = false;
         if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
         {
            SubsflControlProps_432( ) ;
            GXPagingFrom2 = (int)(((subGrid_Rows==0) ? 0 : GRID_nFirstRecordOnPage));
            GXPagingTo2 = ((subGrid_Rows==0) ? 10000 : subGrid_Recordsperpage( )+1);
            pr_default.dynParam(0, new Object[]{ new Object[]{
                                                 AV15FilterFullText ,
                                                 AV44TFTipTelId ,
                                                 AV45TFTipTelId_To ,
                                                 AV56TFTipTelNom_Sel ,
                                                 AV48TFTipTelNom ,
                                                 A1TipTelId ,
                                                 A3TipTelNom ,
                                                 AV12OrderedBy ,
                                                 AV13OrderedDsc } ,
                                                 new int[]{
                                                 TypeConstants.STRING, TypeConstants.INT, TypeConstants.INT, TypeConstants.STRING, TypeConstants.STRING, TypeConstants.INT, TypeConstants.STRING, TypeConstants.SHORT, TypeConstants.BOOLEAN
                                                 }
            } ) ;
            lV15FilterFullText = StringUtil.Concat( StringUtil.RTrim( AV15FilterFullText), "%", "");
            lV15FilterFullText = StringUtil.Concat( StringUtil.RTrim( AV15FilterFullText), "%", "");
            lV48TFTipTelNom = StringUtil.PadR( StringUtil.RTrim( AV48TFTipTelNom), 20, "%");
            /* Using cursor H000S2 */
            pr_default.execute(0, new Object[] {lV15FilterFullText, lV15FilterFullText, AV44TFTipTelId, AV45TFTipTelId_To, lV48TFTipTelNom, AV56TFTipTelNom_Sel, GXPagingFrom2, GXPagingTo2, GXPagingTo2});
            nGXsfl_43_idx = 1;
            sGXsfl_43_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_43_idx), 4, 0)), 4, "0");
            SubsflControlProps_432( ) ;
            while ( ( (pr_default.getStatus(0) != 101) ) && ( ( ( subGrid_Rows == 0 ) || ( GRID_nCurrentRecord < subGrid_Recordsperpage( ) ) ) ) )
            {
               A3TipTelNom = H000S2_A3TipTelNom[0];
               A1TipTelId = H000S2_A1TipTelId[0];
               E220S2 ();
               pr_default.readNext(0);
            }
            GRID_nEOF = (short)(((pr_default.getStatus(0) == 101) ? 1 : 0));
            GxWebStd.gx_hidden_field( context, "GRID_nEOF", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nEOF), 1, 0, ".", "")));
            pr_default.close(0);
            wbEnd = 43;
            WB0S0( ) ;
         }
         bGXsfl_43_Refreshing = true;
      }

      protected void send_integrity_lvl_hashes0S2( )
      {
         GxWebStd.gx_hidden_field( context, "gxhash_TIPTELID"+"_"+sGXsfl_43_idx, GetSecureSignedToken( sGXsfl_43_idx, context.localUtil.Format( (decimal)(A1TipTelId), "ZZZZZZZZ9"), context));
      }

      protected int subGrid_Pagecount( )
      {
         GRID_nRecordCount = subGrid_Recordcount( );
         if ( ((int)((GRID_nRecordCount) % (subGrid_Recordsperpage( )))) == 0 )
         {
            return (int)(NumberUtil.Int( (long)(GRID_nRecordCount/ (decimal)(subGrid_Recordsperpage( ))))) ;
         }
         return (int)(NumberUtil.Int( (long)(GRID_nRecordCount/ (decimal)(subGrid_Recordsperpage( ))))+1) ;
      }

      protected int subGrid_Recordcount( )
      {
         pr_default.dynParam(1, new Object[]{ new Object[]{
                                              AV15FilterFullText ,
                                              AV44TFTipTelId ,
                                              AV45TFTipTelId_To ,
                                              AV56TFTipTelNom_Sel ,
                                              AV48TFTipTelNom ,
                                              A1TipTelId ,
                                              A3TipTelNom ,
                                              AV12OrderedBy ,
                                              AV13OrderedDsc } ,
                                              new int[]{
                                              TypeConstants.STRING, TypeConstants.INT, TypeConstants.INT, TypeConstants.STRING, TypeConstants.STRING, TypeConstants.INT, TypeConstants.STRING, TypeConstants.SHORT, TypeConstants.BOOLEAN
                                              }
         } ) ;
         lV15FilterFullText = StringUtil.Concat( StringUtil.RTrim( AV15FilterFullText), "%", "");
         lV15FilterFullText = StringUtil.Concat( StringUtil.RTrim( AV15FilterFullText), "%", "");
         lV48TFTipTelNom = StringUtil.PadR( StringUtil.RTrim( AV48TFTipTelNom), 20, "%");
         /* Using cursor H000S3 */
         pr_default.execute(1, new Object[] {lV15FilterFullText, lV15FilterFullText, AV44TFTipTelId, AV45TFTipTelId_To, lV48TFTipTelNom, AV56TFTipTelNom_Sel});
         GRID_nRecordCount = H000S3_AGRID_nRecordCount[0];
         pr_default.close(1);
         return (int)(GRID_nRecordCount) ;
      }

      protected int subGrid_Recordsperpage( )
      {
         if ( subGrid_Rows > 0 )
         {
            return subGrid_Rows*1 ;
         }
         else
         {
            return (int)(-1) ;
         }
      }

      protected int subGrid_Currentpage( )
      {
         return (int)(NumberUtil.Int( (long)(GRID_nFirstRecordOnPage/ (decimal)(subGrid_Recordsperpage( ))))+1) ;
      }

      protected short subgrid_firstpage( )
      {
         GRID_nFirstRecordOnPage = 0;
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV15FilterFullText, AV12OrderedBy, AV13OrderedDsc, AV44TFTipTelId, AV45TFTipTelId_To, AV48TFTipTelNom, AV56TFTipTelNom_Sel, AV37ManageFiltersExecutionStep, AV30ColumnsSelector, AV46ddo_TipTelIdTitleControlIdToReplace, AV50ddo_TipTelNomTitleControlIdToReplace, AV59Pgmname) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected short subgrid_nextpage( )
      {
         GRID_nRecordCount = subGrid_Recordcount( );
         if ( ( GRID_nRecordCount >= subGrid_Recordsperpage( ) ) && ( GRID_nEOF == 0 ) )
         {
            GRID_nFirstRecordOnPage = (long)(GRID_nFirstRecordOnPage+subGrid_Recordsperpage( ));
         }
         else
         {
            return 2 ;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         GridContainer.AddObjectProperty("GRID_nFirstRecordOnPage", GRID_nFirstRecordOnPage);
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV15FilterFullText, AV12OrderedBy, AV13OrderedDsc, AV44TFTipTelId, AV45TFTipTelId_To, AV48TFTipTelNom, AV56TFTipTelNom_Sel, AV37ManageFiltersExecutionStep, AV30ColumnsSelector, AV46ddo_TipTelIdTitleControlIdToReplace, AV50ddo_TipTelNomTitleControlIdToReplace, AV59Pgmname) ;
         }
         send_integrity_footer_hashes( ) ;
         return (short)(((GRID_nEOF==0) ? 0 : 2)) ;
      }

      protected short subgrid_previouspage( )
      {
         if ( GRID_nFirstRecordOnPage >= subGrid_Recordsperpage( ) )
         {
            GRID_nFirstRecordOnPage = (long)(GRID_nFirstRecordOnPage-subGrid_Recordsperpage( ));
         }
         else
         {
            return 2 ;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV15FilterFullText, AV12OrderedBy, AV13OrderedDsc, AV44TFTipTelId, AV45TFTipTelId_To, AV48TFTipTelNom, AV56TFTipTelNom_Sel, AV37ManageFiltersExecutionStep, AV30ColumnsSelector, AV46ddo_TipTelIdTitleControlIdToReplace, AV50ddo_TipTelNomTitleControlIdToReplace, AV59Pgmname) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected short subgrid_lastpage( )
      {
         GRID_nRecordCount = subGrid_Recordcount( );
         if ( GRID_nRecordCount > subGrid_Recordsperpage( ) )
         {
            if ( ((int)((GRID_nRecordCount) % (subGrid_Recordsperpage( )))) == 0 )
            {
               GRID_nFirstRecordOnPage = (long)(GRID_nRecordCount-subGrid_Recordsperpage( ));
            }
            else
            {
               GRID_nFirstRecordOnPage = (long)(GRID_nRecordCount-((int)((GRID_nRecordCount) % (subGrid_Recordsperpage( )))));
            }
         }
         else
         {
            GRID_nFirstRecordOnPage = 0;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV15FilterFullText, AV12OrderedBy, AV13OrderedDsc, AV44TFTipTelId, AV45TFTipTelId_To, AV48TFTipTelNom, AV56TFTipTelNom_Sel, AV37ManageFiltersExecutionStep, AV30ColumnsSelector, AV46ddo_TipTelIdTitleControlIdToReplace, AV50ddo_TipTelNomTitleControlIdToReplace, AV59Pgmname) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected int subgrid_gotopage( int nPageNo )
      {
         if ( nPageNo > 0 )
         {
            GRID_nFirstRecordOnPage = (long)(subGrid_Recordsperpage( )*(nPageNo-1));
         }
         else
         {
            GRID_nFirstRecordOnPage = 0;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV15FilterFullText, AV12OrderedBy, AV13OrderedDsc, AV44TFTipTelId, AV45TFTipTelId_To, AV48TFTipTelNom, AV56TFTipTelNom_Sel, AV37ManageFiltersExecutionStep, AV30ColumnsSelector, AV46ddo_TipTelIdTitleControlIdToReplace, AV50ddo_TipTelNomTitleControlIdToReplace, AV59Pgmname) ;
         }
         send_integrity_footer_hashes( ) ;
         return (int)(0) ;
      }

      protected void STRUP0S0( )
      {
         /* Before Start, stand alone formulas. */
         AV59Pgmname = "WWTipoTelefono";
         context.Gx_err = 0;
         /* Execute Start event if defined. */
         context.wbGlbDoneStart = 0;
         /* Execute user event: Start */
         E200S2 ();
         context.wbGlbDoneStart = 1;
         /* After Start, stand alone formulas. */
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
            /* Read saved SDTs. */
            ajax_req_read_hidden_sdt(cgiGet( "vMANAGEFILTERSDATA"), AV41ManageFiltersData);
            ajax_req_read_hidden_sdt(cgiGet( "vDDO_TITLESETTINGSICONS"), AV51DDO_TitleSettingsIcons);
            ajax_req_read_hidden_sdt(cgiGet( "vTIPTELIDTITLEFILTERDATA"), AV43TipTelIdTitleFilterData);
            ajax_req_read_hidden_sdt(cgiGet( "vTIPTELNOMTITLEFILTERDATA"), AV47TipTelNomTitleFilterData);
            ajax_req_read_hidden_sdt(cgiGet( "vCOLUMNSSELECTOR"), AV30ColumnsSelector);
            /* Read variables values. */
            AV15FilterFullText = cgiGet( edtavFilterfulltext_Internalname);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV15FilterFullText", AV15FilterFullText);
            AV46ddo_TipTelIdTitleControlIdToReplace = cgiGet( edtavDdo_tiptelidtitlecontrolidtoreplace_Internalname);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV46ddo_TipTelIdTitleControlIdToReplace", AV46ddo_TipTelIdTitleControlIdToReplace);
            AV50ddo_TipTelNomTitleControlIdToReplace = cgiGet( edtavDdo_tiptelnomtitlecontrolidtoreplace_Internalname);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV50ddo_TipTelNomTitleControlIdToReplace", AV50ddo_TipTelNomTitleControlIdToReplace);
            if ( ( ( context.localUtil.CToN( cgiGet( edtavOrderedby_Internalname), ",", ".") < Convert.ToDecimal( 0 )) ) || ( ( context.localUtil.CToN( cgiGet( edtavOrderedby_Internalname), ",", ".") > Convert.ToDecimal( 9999 )) ) )
            {
               GX_msglist.addItem(context.GetMessage( "GXM_badnum", ""), 1, "vORDEREDBY");
               GX_FocusControl = edtavOrderedby_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
               wbErr = true;
               AV12OrderedBy = 0;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV12OrderedBy), 4, 0)));
            }
            else
            {
               AV12OrderedBy = (short)(context.localUtil.CToN( cgiGet( edtavOrderedby_Internalname), ",", "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV12OrderedBy), 4, 0)));
            }
            AV13OrderedDsc = StringUtil.StrToBool( cgiGet( edtavOrdereddsc_Internalname));
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV13OrderedDsc", AV13OrderedDsc);
            if ( ( ( context.localUtil.CToN( cgiGet( edtavManagefiltersexecutionstep_Internalname), ",", ".") < Convert.ToDecimal( 0 )) ) || ( ( context.localUtil.CToN( cgiGet( edtavManagefiltersexecutionstep_Internalname), ",", ".") > Convert.ToDecimal( 9 )) ) )
            {
               GX_msglist.addItem(context.GetMessage( "GXM_badnum", ""), 1, "vMANAGEFILTERSEXECUTIONSTEP");
               GX_FocusControl = edtavManagefiltersexecutionstep_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
               wbErr = true;
               AV37ManageFiltersExecutionStep = 0;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV37ManageFiltersExecutionStep", StringUtil.Str( (decimal)(AV37ManageFiltersExecutionStep), 1, 0));
            }
            else
            {
               AV37ManageFiltersExecutionStep = (short)(context.localUtil.CToN( cgiGet( edtavManagefiltersexecutionstep_Internalname), ",", "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV37ManageFiltersExecutionStep", StringUtil.Str( (decimal)(AV37ManageFiltersExecutionStep), 1, 0));
            }
            if ( ( ( context.localUtil.CToN( cgiGet( edtavTftiptelid_Internalname), ",", ".") < Convert.ToDecimal( 0 )) ) || ( ( context.localUtil.CToN( cgiGet( edtavTftiptelid_Internalname), ",", ".") > Convert.ToDecimal( 999999999 )) ) )
            {
               GX_msglist.addItem(context.GetMessage( "GXM_badnum", ""), 1, "vTFTIPTELID");
               GX_FocusControl = edtavTftiptelid_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
               wbErr = true;
               AV44TFTipTelId = 0;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV44TFTipTelId", StringUtil.LTrim( StringUtil.Str( (decimal)(AV44TFTipTelId), 9, 0)));
            }
            else
            {
               AV44TFTipTelId = (int)(context.localUtil.CToN( cgiGet( edtavTftiptelid_Internalname), ",", "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV44TFTipTelId", StringUtil.LTrim( StringUtil.Str( (decimal)(AV44TFTipTelId), 9, 0)));
            }
            if ( ( ( context.localUtil.CToN( cgiGet( edtavTftiptelid_to_Internalname), ",", ".") < Convert.ToDecimal( 0 )) ) || ( ( context.localUtil.CToN( cgiGet( edtavTftiptelid_to_Internalname), ",", ".") > Convert.ToDecimal( 999999999 )) ) )
            {
               GX_msglist.addItem(context.GetMessage( "GXM_badnum", ""), 1, "vTFTIPTELID_TO");
               GX_FocusControl = edtavTftiptelid_to_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
               wbErr = true;
               AV45TFTipTelId_To = 0;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV45TFTipTelId_To", StringUtil.LTrim( StringUtil.Str( (decimal)(AV45TFTipTelId_To), 9, 0)));
            }
            else
            {
               AV45TFTipTelId_To = (int)(context.localUtil.CToN( cgiGet( edtavTftiptelid_to_Internalname), ",", "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV45TFTipTelId_To", StringUtil.LTrim( StringUtil.Str( (decimal)(AV45TFTipTelId_To), 9, 0)));
            }
            AV48TFTipTelNom = cgiGet( edtavTftiptelnom_Internalname);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV48TFTipTelNom", AV48TFTipTelNom);
            AV56TFTipTelNom_Sel = cgiGet( edtavTftiptelnom_sel_Internalname);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV56TFTipTelNom_Sel", AV56TFTipTelNom_Sel);
            /* Read saved values. */
            nRC_GXsfl_43 = (int)(context.localUtil.CToN( cgiGet( "nRC_GXsfl_43"), ",", "."));
            AV53GridCurrentPage = (long)(context.localUtil.CToN( cgiGet( "vGRIDCURRENTPAGE"), ",", "."));
            AV54GridPageCount = (long)(context.localUtil.CToN( cgiGet( "vGRIDPAGECOUNT"), ",", "."));
            GRID_nFirstRecordOnPage = (long)(context.localUtil.CToN( cgiGet( "GRID_nFirstRecordOnPage"), ",", "."));
            GRID_nEOF = (short)(context.localUtil.CToN( cgiGet( "GRID_nEOF"), ",", "."));
            subGrid_Rows = (int)(context.localUtil.CToN( cgiGet( "GRID_Rows"), ",", "."));
            GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
            Ddo_managefilters_Icon = cgiGet( "DDO_MANAGEFILTERS_Icon");
            Ddo_managefilters_Tooltip = cgiGet( "DDO_MANAGEFILTERS_Tooltip");
            Ddo_managefilters_Cls = cgiGet( "DDO_MANAGEFILTERS_Cls");
            Gridpaginationbar_Class = cgiGet( "GRIDPAGINATIONBAR_Class");
            Gridpaginationbar_Showfirst = StringUtil.StrToBool( cgiGet( "GRIDPAGINATIONBAR_Showfirst"));
            Gridpaginationbar_Showprevious = StringUtil.StrToBool( cgiGet( "GRIDPAGINATIONBAR_Showprevious"));
            Gridpaginationbar_Shownext = StringUtil.StrToBool( cgiGet( "GRIDPAGINATIONBAR_Shownext"));
            Gridpaginationbar_Showlast = StringUtil.StrToBool( cgiGet( "GRIDPAGINATIONBAR_Showlast"));
            Gridpaginationbar_Pagestoshow = (int)(context.localUtil.CToN( cgiGet( "GRIDPAGINATIONBAR_Pagestoshow"), ",", "."));
            Gridpaginationbar_Pagingbuttonsposition = cgiGet( "GRIDPAGINATIONBAR_Pagingbuttonsposition");
            Gridpaginationbar_Pagingcaptionposition = cgiGet( "GRIDPAGINATIONBAR_Pagingcaptionposition");
            Gridpaginationbar_Emptygridclass = cgiGet( "GRIDPAGINATIONBAR_Emptygridclass");
            Gridpaginationbar_Rowsperpageselector = StringUtil.StrToBool( cgiGet( "GRIDPAGINATIONBAR_Rowsperpageselector"));
            Gridpaginationbar_Rowsperpageselectedvalue = (int)(context.localUtil.CToN( cgiGet( "GRIDPAGINATIONBAR_Rowsperpageselectedvalue"), ",", "."));
            Gridpaginationbar_Rowsperpageoptions = cgiGet( "GRIDPAGINATIONBAR_Rowsperpageoptions");
            Gridpaginationbar_Previous = cgiGet( "GRIDPAGINATIONBAR_Previous");
            Gridpaginationbar_Next = cgiGet( "GRIDPAGINATIONBAR_Next");
            Gridpaginationbar_Caption = cgiGet( "GRIDPAGINATIONBAR_Caption");
            Gridpaginationbar_Emptygridcaption = cgiGet( "GRIDPAGINATIONBAR_Emptygridcaption");
            Gridpaginationbar_Rowsperpagecaption = cgiGet( "GRIDPAGINATIONBAR_Rowsperpagecaption");
            Ddo_tiptelid_Caption = cgiGet( "DDO_TIPTELID_Caption");
            Ddo_tiptelid_Tooltip = cgiGet( "DDO_TIPTELID_Tooltip");
            Ddo_tiptelid_Cls = cgiGet( "DDO_TIPTELID_Cls");
            Ddo_tiptelid_Filteredtext_set = cgiGet( "DDO_TIPTELID_Filteredtext_set");
            Ddo_tiptelid_Filteredtextto_set = cgiGet( "DDO_TIPTELID_Filteredtextto_set");
            Ddo_tiptelid_Dropdownoptionstype = cgiGet( "DDO_TIPTELID_Dropdownoptionstype");
            Ddo_tiptelid_Titlecontrolidtoreplace = cgiGet( "DDO_TIPTELID_Titlecontrolidtoreplace");
            Ddo_tiptelid_Includesortasc = StringUtil.StrToBool( cgiGet( "DDO_TIPTELID_Includesortasc"));
            Ddo_tiptelid_Includesortdsc = StringUtil.StrToBool( cgiGet( "DDO_TIPTELID_Includesortdsc"));
            Ddo_tiptelid_Sortedstatus = cgiGet( "DDO_TIPTELID_Sortedstatus");
            Ddo_tiptelid_Includefilter = StringUtil.StrToBool( cgiGet( "DDO_TIPTELID_Includefilter"));
            Ddo_tiptelid_Filtertype = cgiGet( "DDO_TIPTELID_Filtertype");
            Ddo_tiptelid_Filterisrange = StringUtil.StrToBool( cgiGet( "DDO_TIPTELID_Filterisrange"));
            Ddo_tiptelid_Includedatalist = StringUtil.StrToBool( cgiGet( "DDO_TIPTELID_Includedatalist"));
            Ddo_tiptelid_Sortasc = cgiGet( "DDO_TIPTELID_Sortasc");
            Ddo_tiptelid_Sortdsc = cgiGet( "DDO_TIPTELID_Sortdsc");
            Ddo_tiptelid_Cleanfilter = cgiGet( "DDO_TIPTELID_Cleanfilter");
            Ddo_tiptelid_Rangefilterfrom = cgiGet( "DDO_TIPTELID_Rangefilterfrom");
            Ddo_tiptelid_Rangefilterto = cgiGet( "DDO_TIPTELID_Rangefilterto");
            Ddo_tiptelid_Searchbuttontext = cgiGet( "DDO_TIPTELID_Searchbuttontext");
            Ddo_tiptelnom_Caption = cgiGet( "DDO_TIPTELNOM_Caption");
            Ddo_tiptelnom_Tooltip = cgiGet( "DDO_TIPTELNOM_Tooltip");
            Ddo_tiptelnom_Cls = cgiGet( "DDO_TIPTELNOM_Cls");
            Ddo_tiptelnom_Filteredtext_set = cgiGet( "DDO_TIPTELNOM_Filteredtext_set");
            Ddo_tiptelnom_Selectedvalue_set = cgiGet( "DDO_TIPTELNOM_Selectedvalue_set");
            Ddo_tiptelnom_Dropdownoptionstype = cgiGet( "DDO_TIPTELNOM_Dropdownoptionstype");
            Ddo_tiptelnom_Titlecontrolidtoreplace = cgiGet( "DDO_TIPTELNOM_Titlecontrolidtoreplace");
            Ddo_tiptelnom_Includesortasc = StringUtil.StrToBool( cgiGet( "DDO_TIPTELNOM_Includesortasc"));
            Ddo_tiptelnom_Includesortdsc = StringUtil.StrToBool( cgiGet( "DDO_TIPTELNOM_Includesortdsc"));
            Ddo_tiptelnom_Sortedstatus = cgiGet( "DDO_TIPTELNOM_Sortedstatus");
            Ddo_tiptelnom_Includefilter = StringUtil.StrToBool( cgiGet( "DDO_TIPTELNOM_Includefilter"));
            Ddo_tiptelnom_Filtertype = cgiGet( "DDO_TIPTELNOM_Filtertype");
            Ddo_tiptelnom_Filterisrange = StringUtil.StrToBool( cgiGet( "DDO_TIPTELNOM_Filterisrange"));
            Ddo_tiptelnom_Includedatalist = StringUtil.StrToBool( cgiGet( "DDO_TIPTELNOM_Includedatalist"));
            Ddo_tiptelnom_Datalisttype = cgiGet( "DDO_TIPTELNOM_Datalisttype");
            Ddo_tiptelnom_Datalistproc = cgiGet( "DDO_TIPTELNOM_Datalistproc");
            Ddo_tiptelnom_Datalistupdateminimumcharacters = (int)(context.localUtil.CToN( cgiGet( "DDO_TIPTELNOM_Datalistupdateminimumcharacters"), ",", "."));
            Ddo_tiptelnom_Sortasc = cgiGet( "DDO_TIPTELNOM_Sortasc");
            Ddo_tiptelnom_Sortdsc = cgiGet( "DDO_TIPTELNOM_Sortdsc");
            Ddo_tiptelnom_Loadingdata = cgiGet( "DDO_TIPTELNOM_Loadingdata");
            Ddo_tiptelnom_Cleanfilter = cgiGet( "DDO_TIPTELNOM_Cleanfilter");
            Ddo_tiptelnom_Noresultsfound = cgiGet( "DDO_TIPTELNOM_Noresultsfound");
            Ddo_tiptelnom_Searchbuttontext = cgiGet( "DDO_TIPTELNOM_Searchbuttontext");
            Innewwindow1_Width = cgiGet( "INNEWWINDOW1_Width");
            Innewwindow1_Height = cgiGet( "INNEWWINDOW1_Height");
            Innewwindow1_Target = cgiGet( "INNEWWINDOW1_Target");
            Ddo_gridcolumnsselector_Caption = cgiGet( "DDO_GRIDCOLUMNSSELECTOR_Caption");
            Ddo_gridcolumnsselector_Tooltip = cgiGet( "DDO_GRIDCOLUMNSSELECTOR_Tooltip");
            Ddo_gridcolumnsselector_Cls = cgiGet( "DDO_GRIDCOLUMNSSELECTOR_Cls");
            Ddo_gridcolumnsselector_Dropdownoptionstype = cgiGet( "DDO_GRIDCOLUMNSSELECTOR_Dropdownoptionstype");
            Ddo_gridcolumnsselector_Titlecontrolidtoreplace = cgiGet( "DDO_GRIDCOLUMNSSELECTOR_Titlecontrolidtoreplace");
            Ddo_gridcolumnsselector_Updatebuttontext = cgiGet( "DDO_GRIDCOLUMNSSELECTOR_Updatebuttontext");
            subGrid_Rows = (int)(context.localUtil.CToN( cgiGet( "GRID_Rows"), ",", "."));
            GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
            Gridpaginationbar_Selectedpage = cgiGet( "GRIDPAGINATIONBAR_Selectedpage");
            Gridpaginationbar_Rowsperpageselectedvalue = (int)(context.localUtil.CToN( cgiGet( "GRIDPAGINATIONBAR_Rowsperpageselectedvalue"), ",", "."));
            Ddo_tiptelid_Activeeventkey = cgiGet( "DDO_TIPTELID_Activeeventkey");
            Ddo_tiptelid_Filteredtext_get = cgiGet( "DDO_TIPTELID_Filteredtext_get");
            Ddo_tiptelid_Filteredtextto_get = cgiGet( "DDO_TIPTELID_Filteredtextto_get");
            Ddo_tiptelnom_Activeeventkey = cgiGet( "DDO_TIPTELNOM_Activeeventkey");
            Ddo_tiptelnom_Filteredtext_get = cgiGet( "DDO_TIPTELNOM_Filteredtext_get");
            Ddo_tiptelnom_Selectedvalue_get = cgiGet( "DDO_TIPTELNOM_Selectedvalue_get");
            Ddo_gridcolumnsselector_Columnsselectorvalues = cgiGet( "DDO_GRIDCOLUMNSSELECTOR_Columnsselectorvalues");
            Ddo_managefilters_Activeeventkey = cgiGet( "DDO_MANAGEFILTERS_Activeeventkey");
            subGrid_Rows = (int)(context.localUtil.CToN( cgiGet( "GRID_Rows"), ",", "."));
            GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
            /* Read subfile selected row values. */
            /* Read hidden variables. */
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
            /* Check if conditions changed and reset current page numbers */
            if ( StringUtil.StrCmp(cgiGet( "GXH_vFILTERFULLTEXT"), AV15FilterFullText) != 0 )
            {
               GRID_nFirstRecordOnPage = 0;
            }
            if ( ( context.localUtil.CToN( cgiGet( "GXH_vORDEREDBY"), ",", ".") != Convert.ToDecimal( AV12OrderedBy )) )
            {
               GRID_nFirstRecordOnPage = 0;
            }
            if ( StringUtil.StrToBool( cgiGet( "GXH_vORDEREDDSC")) != AV13OrderedDsc )
            {
               GRID_nFirstRecordOnPage = 0;
            }
            if ( ( context.localUtil.CToN( cgiGet( "GXH_vTFTIPTELID"), ",", ".") != Convert.ToDecimal( AV44TFTipTelId )) )
            {
               GRID_nFirstRecordOnPage = 0;
            }
            if ( ( context.localUtil.CToN( cgiGet( "GXH_vTFTIPTELID_TO"), ",", ".") != Convert.ToDecimal( AV45TFTipTelId_To )) )
            {
               GRID_nFirstRecordOnPage = 0;
            }
            if ( StringUtil.StrCmp(cgiGet( "GXH_vTFTIPTELNOM"), AV48TFTipTelNom) != 0 )
            {
               GRID_nFirstRecordOnPage = 0;
            }
            if ( StringUtil.StrCmp(cgiGet( "GXH_vTFTIPTELNOM_SEL"), AV56TFTipTelNom_Sel) != 0 )
            {
               GRID_nFirstRecordOnPage = 0;
            }
         }
         else
         {
            dynload_actions( ) ;
         }
      }

      protected void GXStart( )
      {
         /* Execute user event: Start */
         E200S2 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
      }

      protected void E200S2( )
      {
         /* Start Routine */
         subGrid_Rows = 10;
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         if ( StringUtil.StrCmp(AV7HTTPRequest.Method, "GET") == 0 )
         {
            /* Execute user subroutine: 'LOADSAVEDFILTERS' */
            S112 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            edtavManagefiltersexecutionstep_Visible = 0;
            context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavManagefiltersexecutionstep_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavManagefiltersexecutionstep_Visible), 5, 0)), true);
         }
         edtavTftiptelid_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavTftiptelid_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavTftiptelid_Visible), 5, 0)), true);
         edtavTftiptelid_to_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavTftiptelid_to_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavTftiptelid_to_Visible), 5, 0)), true);
         edtavTftiptelnom_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavTftiptelnom_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavTftiptelnom_Visible), 5, 0)), true);
         edtavTftiptelnom_sel_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavTftiptelnom_sel_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavTftiptelnom_sel_Visible), 5, 0)), true);
         Ddo_tiptelid_Titlecontrolidtoreplace = subGrid_Internalname+"_TipTelId";
         ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "TitleControlIdToReplace", Ddo_tiptelid_Titlecontrolidtoreplace);
         AV46ddo_TipTelIdTitleControlIdToReplace = Ddo_tiptelid_Titlecontrolidtoreplace;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV46ddo_TipTelIdTitleControlIdToReplace", AV46ddo_TipTelIdTitleControlIdToReplace);
         edtavDdo_tiptelidtitlecontrolidtoreplace_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavDdo_tiptelidtitlecontrolidtoreplace_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavDdo_tiptelidtitlecontrolidtoreplace_Visible), 5, 0)), true);
         Ddo_tiptelnom_Titlecontrolidtoreplace = subGrid_Internalname+"_TipTelNom";
         ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "TitleControlIdToReplace", Ddo_tiptelnom_Titlecontrolidtoreplace);
         AV50ddo_TipTelNomTitleControlIdToReplace = Ddo_tiptelnom_Titlecontrolidtoreplace;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV50ddo_TipTelNomTitleControlIdToReplace", AV50ddo_TipTelNomTitleControlIdToReplace);
         edtavDdo_tiptelnomtitlecontrolidtoreplace_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavDdo_tiptelnomtitlecontrolidtoreplace_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavDdo_tiptelnomtitlecontrolidtoreplace_Visible), 5, 0)), true);
         Form.Caption = " Tipo Telefono";
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, "FORM", "Caption", Form.Caption, true);
         /* Execute user subroutine: 'PREPARETRANSACTION' */
         S122 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
         /* Execute user subroutine: 'LOADGRIDSTATE' */
         S132 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
         edtavOrderedby_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavOrderedby_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavOrderedby_Visible), 5, 0)), true);
         if ( AV12OrderedBy < 1 )
         {
            AV12OrderedBy = 1;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV12OrderedBy), 4, 0)));
            /* Execute user subroutine: 'SETDDOSORTEDSTATUS' */
            S142 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
         }
         edtavOrdereddsc_Visible = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavOrdereddsc_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavOrdereddsc_Visible), 5, 0)), true);
         Ddo_managefilters_Icon = context.convertURL( (String)(context.GetImagePath( "5efb9e2b-46db-43f4-8f74-dd3f5818d30e", "", context.GetTheme( ))));
         ucDdo_managefilters.SendProperty(context, "", false, Ddo_managefilters_Internalname, "Icon", Ddo_managefilters_Icon);
         GXt_SdtDVB_SDTDropDownOptionsTitleSettingsIcons1 = AV51DDO_TitleSettingsIcons;
         new GeneXus.Programs.wwpbaseobjects.getwwptitlesettingsicons(context ).execute( out  GXt_SdtDVB_SDTDropDownOptionsTitleSettingsIcons1) ;
         AV51DDO_TitleSettingsIcons = GXt_SdtDVB_SDTDropDownOptionsTitleSettingsIcons1;
         Ddo_gridcolumnsselector_Titlecontrolidtoreplace = bttBtneditcolumns_Internalname;
         ucDdo_gridcolumnsselector.SendProperty(context, "", false, Ddo_gridcolumnsselector_Internalname, "TitleControlIdToReplace", Ddo_gridcolumnsselector_Titlecontrolidtoreplace);
         Gridpaginationbar_Rowsperpageselectedvalue = subGrid_Rows;
         ucGridpaginationbar.SendProperty(context, "", false, Gridpaginationbar_Internalname, "RowsPerPageSelectedValue", StringUtil.LTrim( StringUtil.Str( (decimal)(Gridpaginationbar_Rowsperpageselectedvalue), 9, 0)));
      }

      protected void E210S2( )
      {
         if ( gx_refresh_fired )
         {
            return  ;
         }
         gx_refresh_fired = true;
         /* Refresh Routine */
         AV43TipTelIdTitleFilterData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         AV47TipTelNomTitleFilterData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         new GeneXus.Programs.wwpbaseobjects.loadwwpcontext(context ).execute( out  AV6WWPContext) ;
         if ( AV37ManageFiltersExecutionStep == 1 )
         {
            AV37ManageFiltersExecutionStep = 2;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV37ManageFiltersExecutionStep", StringUtil.Str( (decimal)(AV37ManageFiltersExecutionStep), 1, 0));
         }
         else if ( AV37ManageFiltersExecutionStep == 2 )
         {
            AV37ManageFiltersExecutionStep = 0;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV37ManageFiltersExecutionStep", StringUtil.Str( (decimal)(AV37ManageFiltersExecutionStep), 1, 0));
            /* Execute user subroutine: 'LOADSAVEDFILTERS' */
            S112 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
         }
         /* Execute user subroutine: 'SAVEGRIDSTATE' */
         S152 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
         if ( StringUtil.StrCmp(AV36Session.Get("WWTipoTelefonoColumnsSelector"), "") != 0 )
         {
            AV18ColumnsSelectorXML = AV36Session.Get("WWTipoTelefonoColumnsSelector");
            AV30ColumnsSelector.FromXml(AV18ColumnsSelectorXML, null, "WWPColumnsSelector", "MaxiPrueba");
         }
         else
         {
            /* Execute user subroutine: 'INITIALIZECOLUMNSSELECTOR' */
            S162 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
         }
         edtTipTelId_Visible = (((GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_Column)AV30ColumnsSelector.gxTpr_Columns.Item(1)).gxTpr_Isvisible ? 1 : 0);
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtTipTelId_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtTipTelId_Visible), 5, 0)), !bGXsfl_43_Refreshing);
         edtTipTelNom_Visible = (((GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_Column)AV30ColumnsSelector.gxTpr_Columns.Item(2)).gxTpr_Isvisible ? 1 : 0);
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtTipTelNom_Internalname, "Visible", StringUtil.LTrim( StringUtil.Str( (decimal)(edtTipTelNom_Visible), 5, 0)), !bGXsfl_43_Refreshing);
         edtTipTelId_Titleformat = 2;
         edtTipTelId_Title = StringUtil.Format( "<div class='ColumnSettingsContainer'><span>%1</span><div id='%2'></div>", "Tel Id", AV46ddo_TipTelIdTitleControlIdToReplace, "", "", "", "", "", "", "");
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtTipTelId_Internalname, "Title", edtTipTelId_Title, !bGXsfl_43_Refreshing);
         edtTipTelNom_Titleformat = 2;
         edtTipTelNom_Title = StringUtil.Format( "<div class='ColumnSettingsContainer'><span>%1</span><div id='%2'></div>", "Tel Nom", AV50ddo_TipTelNomTitleControlIdToReplace, "", "", "", "", "", "", "");
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtTipTelNom_Internalname, "Title", edtTipTelNom_Title, !bGXsfl_43_Refreshing);
         AV53GridCurrentPage = subGrid_Currentpage( );
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV53GridCurrentPage", StringUtil.LTrim( StringUtil.Str( (decimal)(AV53GridCurrentPage), 10, 0)));
         AV54GridPageCount = subGrid_Pagecount( );
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV54GridPageCount", StringUtil.LTrim( StringUtil.Str( (decimal)(AV54GridPageCount), 10, 0)));
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV43TipTelIdTitleFilterData", AV43TipTelIdTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV47TipTelNomTitleFilterData", AV47TipTelNomTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV30ColumnsSelector", AV30ColumnsSelector);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV41ManageFiltersData", AV41ManageFiltersData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV10GridState", AV10GridState);
      }

      protected void E120S2( )
      {
         /* Gridpaginationbar_Changepage Routine */
         if ( StringUtil.StrCmp(Gridpaginationbar_Selectedpage, "Previous") == 0 )
         {
            subgrid_previouspage( ) ;
         }
         else if ( StringUtil.StrCmp(Gridpaginationbar_Selectedpage, "Next") == 0 )
         {
            subgrid_nextpage( ) ;
         }
         else
         {
            AV52PageToGo = (int)(NumberUtil.Val( Gridpaginationbar_Selectedpage, "."));
            subgrid_gotopage( AV52PageToGo) ;
         }
      }

      protected void E130S2( )
      {
         /* Gridpaginationbar_Changerowsperpage Routine */
         subGrid_Rows = Gridpaginationbar_Rowsperpageselectedvalue;
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         subgrid_firstpage( ) ;
         /*  Sending Event outputs  */
      }

      protected void E140S2( )
      {
         /* Ddo_tiptelid_Onoptionclicked Routine */
         if ( StringUtil.StrCmp(Ddo_tiptelid_Activeeventkey, "<#OrderASC#>") == 0 )
         {
            /* Execute user subroutine: 'RESETDDOSORTEDSTATUS' */
            S172 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            AV12OrderedBy = 2;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV12OrderedBy), 4, 0)));
            AV13OrderedDsc = false;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV13OrderedDsc", AV13OrderedDsc);
            Ddo_tiptelid_Sortedstatus = "ASC";
            ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "SortedStatus", Ddo_tiptelid_Sortedstatus);
            subgrid_firstpage( ) ;
            context.DoAjaxRefresh();
         }
         else if ( StringUtil.StrCmp(Ddo_tiptelid_Activeeventkey, "<#OrderDSC#>") == 0 )
         {
            /* Execute user subroutine: 'RESETDDOSORTEDSTATUS' */
            S172 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            AV12OrderedBy = 2;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV12OrderedBy), 4, 0)));
            AV13OrderedDsc = true;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV13OrderedDsc", AV13OrderedDsc);
            Ddo_tiptelid_Sortedstatus = "DSC";
            ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "SortedStatus", Ddo_tiptelid_Sortedstatus);
            subgrid_firstpage( ) ;
            context.DoAjaxRefresh();
         }
         else if ( StringUtil.StrCmp(Ddo_tiptelid_Activeeventkey, "<#Filter#>") == 0 )
         {
            AV44TFTipTelId = (int)(NumberUtil.Val( Ddo_tiptelid_Filteredtext_get, "."));
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV44TFTipTelId", StringUtil.LTrim( StringUtil.Str( (decimal)(AV44TFTipTelId), 9, 0)));
            AV45TFTipTelId_To = (int)(NumberUtil.Val( Ddo_tiptelid_Filteredtextto_get, "."));
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV45TFTipTelId_To", StringUtil.LTrim( StringUtil.Str( (decimal)(AV45TFTipTelId_To), 9, 0)));
            subgrid_firstpage( ) ;
         }
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV43TipTelIdTitleFilterData", AV43TipTelIdTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV47TipTelNomTitleFilterData", AV47TipTelNomTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV30ColumnsSelector", AV30ColumnsSelector);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV41ManageFiltersData", AV41ManageFiltersData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV10GridState", AV10GridState);
      }

      protected void E150S2( )
      {
         /* Ddo_tiptelnom_Onoptionclicked Routine */
         if ( StringUtil.StrCmp(Ddo_tiptelnom_Activeeventkey, "<#OrderASC#>") == 0 )
         {
            /* Execute user subroutine: 'RESETDDOSORTEDSTATUS' */
            S172 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            AV12OrderedBy = 1;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV12OrderedBy), 4, 0)));
            AV13OrderedDsc = false;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV13OrderedDsc", AV13OrderedDsc);
            Ddo_tiptelnom_Sortedstatus = "ASC";
            ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "SortedStatus", Ddo_tiptelnom_Sortedstatus);
            subgrid_firstpage( ) ;
            context.DoAjaxRefresh();
         }
         else if ( StringUtil.StrCmp(Ddo_tiptelnom_Activeeventkey, "<#OrderDSC#>") == 0 )
         {
            /* Execute user subroutine: 'RESETDDOSORTEDSTATUS' */
            S172 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            AV12OrderedBy = 1;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV12OrderedBy), 4, 0)));
            AV13OrderedDsc = true;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV13OrderedDsc", AV13OrderedDsc);
            Ddo_tiptelnom_Sortedstatus = "DSC";
            ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "SortedStatus", Ddo_tiptelnom_Sortedstatus);
            subgrid_firstpage( ) ;
            context.DoAjaxRefresh();
         }
         else if ( StringUtil.StrCmp(Ddo_tiptelnom_Activeeventkey, "<#Filter#>") == 0 )
         {
            AV48TFTipTelNom = Ddo_tiptelnom_Filteredtext_get;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV48TFTipTelNom", AV48TFTipTelNom);
            AV56TFTipTelNom_Sel = Ddo_tiptelnom_Selectedvalue_get;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV56TFTipTelNom_Sel", AV56TFTipTelNom_Sel);
            subgrid_firstpage( ) ;
         }
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV43TipTelIdTitleFilterData", AV43TipTelIdTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV47TipTelNomTitleFilterData", AV47TipTelNomTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV30ColumnsSelector", AV30ColumnsSelector);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV41ManageFiltersData", AV41ManageFiltersData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV10GridState", AV10GridState);
      }

      private void E220S2( )
      {
         /* Grid_Load Routine */
         cmbavGridactions.removeAllItems();
         cmbavGridactions.addItem("0", ";fa fa-bars", 0);
         cmbavGridactions.addItem("1", StringUtil.Format( "%1;%2", "Modificar", "fa fa-pen", "", "", "", "", "", "", ""), 0);
         cmbavGridactions.addItem("2", StringUtil.Format( "%1;%2", "Eliminar", "fa fa-times", "", "", "", "", "", "", ""), 0);
         edtTipTelNom_Link = formatLink("viewtipotelefono.aspx") + "?" + UrlEncode("" +A1TipTelId) + "," + UrlEncode(StringUtil.RTrim(""));
         /* Load Method */
         if ( wbStart != -1 )
         {
            wbStart = 43;
         }
         sendrow_432( ) ;
         GRID_nCurrentRecord = (long)(GRID_nCurrentRecord+1);
         if ( isFullAjaxMode( ) && ! bGXsfl_43_Refreshing )
         {
            context.DoAjaxLoad(43, GridRow);
         }
         /*  Sending Event outputs  */
         cmbavGridactions.CurrentValue = StringUtil.Trim( StringUtil.Str( (decimal)(AV55GridActions), 4, 0));
      }

      protected void E160S2( )
      {
         /* Ddo_gridcolumnsselector_Oncolumnschanged Routine */
         AV18ColumnsSelectorXML = Ddo_gridcolumnsselector_Columnsselectorvalues;
         AV30ColumnsSelector.FromJSonString(AV18ColumnsSelectorXML, null);
         new GeneXus.Programs.wwpbaseobjects.savecolumnsselectorstate(context ).execute(  "WWTipoTelefonoColumnsSelector",  AV30ColumnsSelector.ToXml(false, true, "WWPColumnsSelector", "MaxiPrueba")) ;
         context.DoAjaxRefresh();
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV30ColumnsSelector", AV30ColumnsSelector);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV43TipTelIdTitleFilterData", AV43TipTelIdTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV47TipTelNomTitleFilterData", AV47TipTelNomTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV41ManageFiltersData", AV41ManageFiltersData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV10GridState", AV10GridState);
      }

      protected void E110S2( )
      {
         /* Ddo_managefilters_Onoptionclicked Routine */
         if ( StringUtil.StrCmp(Ddo_managefilters_Activeeventkey, "<#Clean#>") == 0 )
         {
            /* Execute user subroutine: 'CLEANFILTERS' */
            S182 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            subgrid_firstpage( ) ;
            context.DoAjaxRefresh();
         }
         else if ( StringUtil.StrCmp(Ddo_managefilters_Activeeventkey, "<#Save#>") == 0 )
         {
            /* Execute user subroutine: 'SAVEGRIDSTATE' */
            S152 ();
            if ( returnInSub )
            {
               returnInSub = true;
               if (true) return;
            }
            context.PopUp(formatLink("wwpbaseobjects.savefilteras.aspx") + "?" + UrlEncode(StringUtil.RTrim("WWTipoTelefonoFilters")) + "," + UrlEncode(StringUtil.RTrim(AV59Pgmname+"GridState")), new Object[] {});
            AV37ManageFiltersExecutionStep = 2;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV37ManageFiltersExecutionStep", StringUtil.Str( (decimal)(AV37ManageFiltersExecutionStep), 1, 0));
            context.DoAjaxRefresh();
         }
         else if ( StringUtil.StrCmp(Ddo_managefilters_Activeeventkey, "<#Manage#>") == 0 )
         {
            context.PopUp(formatLink("wwpbaseobjects.managefilters.aspx") + "?" + UrlEncode(StringUtil.RTrim("WWTipoTelefonoFilters")), new Object[] {});
            AV37ManageFiltersExecutionStep = 2;
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV37ManageFiltersExecutionStep", StringUtil.Str( (decimal)(AV37ManageFiltersExecutionStep), 1, 0));
            context.DoAjaxRefresh();
         }
         else
         {
            GXt_char2 = AV38ManageFiltersXml;
            new GeneXus.Programs.wwpbaseobjects.getfilterbyname(context ).execute(  "WWTipoTelefonoFilters",  Ddo_managefilters_Activeeventkey, out  GXt_char2) ;
            ucDdo_managefilters.SendProperty(context, "", false, Ddo_managefilters_Internalname, "ActiveEventKey", Ddo_managefilters_Activeeventkey);
            AV38ManageFiltersXml = GXt_char2;
            if ( String.IsNullOrEmpty(StringUtil.RTrim( AV38ManageFiltersXml)) )
            {
               GX_msglist.addItem("El filtro seleccionado no existe más.");
            }
            else
            {
               /* Execute user subroutine: 'CLEANFILTERS' */
               S182 ();
               if ( returnInSub )
               {
                  returnInSub = true;
                  if (true) return;
               }
               new GeneXus.Programs.wwpbaseobjects.savegridstate(context ).execute(  AV59Pgmname+"GridState",  AV38ManageFiltersXml) ;
               AV10GridState.FromXml(AV38ManageFiltersXml, null, "WWPGridState", "MaxiPrueba");
               AV12OrderedBy = AV10GridState.gxTpr_Orderedby;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV12OrderedBy), 4, 0)));
               AV13OrderedDsc = AV10GridState.gxTpr_Ordereddsc;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV13OrderedDsc", AV13OrderedDsc);
               /* Execute user subroutine: 'SETDDOSORTEDSTATUS' */
               S142 ();
               if ( returnInSub )
               {
                  returnInSub = true;
                  if (true) return;
               }
               /* Execute user subroutine: 'LOADREGFILTERSSTATE' */
               S192 ();
               if ( returnInSub )
               {
                  returnInSub = true;
                  if (true) return;
               }
               subgrid_firstpage( ) ;
               context.DoAjaxRefresh();
            }
         }
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV10GridState", AV10GridState);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV43TipTelIdTitleFilterData", AV43TipTelIdTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV47TipTelNomTitleFilterData", AV47TipTelNomTitleFilterData);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV30ColumnsSelector", AV30ColumnsSelector);
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV41ManageFiltersData", AV41ManageFiltersData);
      }

      protected void E170S2( )
      {
         /* 'DoInsert' Routine */
         CallWebObject(formatLink("tipotelefono.aspx") + "?" + UrlEncode(StringUtil.RTrim("INS")) + "," + UrlEncode("" +0));
         context.wjLocDisableFrm = 1;
      }

      protected void E180S2( )
      {
         /* 'DoExport' Routine */
         /* Execute user subroutine: 'LOADGRIDSTATE' */
         S132 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
         new exportwwtipotelefono(context ).execute( out  AV16ExcelFilename, out  AV17ErrorMessage) ;
         if ( StringUtil.StrCmp(AV16ExcelFilename, "") != 0 )
         {
            CallWebObject(formatLink(AV16ExcelFilename) );
            context.wjLocDisableFrm = 0;
         }
         else
         {
            GX_msglist.addItem(AV17ErrorMessage);
         }
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV10GridState", AV10GridState);
      }

      protected void E190S2( )
      {
         /* 'DoExportReport' Routine */
         /* Execute user subroutine: 'LOADGRIDSTATE' */
         S132 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
         Innewwindow1_Target = formatLink("exportreportwwtipotelefono.aspx") ;
         ucInnewwindow1.SendProperty(context, "", false, Innewwindow1_Internalname, "Target", Innewwindow1_Target);
         Innewwindow1_Height = "600";
         ucInnewwindow1.SendProperty(context, "", false, Innewwindow1_Internalname, "Height", Innewwindow1_Height);
         Innewwindow1_Width = "800";
         ucInnewwindow1.SendProperty(context, "", false, Innewwindow1_Internalname, "Width", Innewwindow1_Width);
         this.executeUsercontrolMethod("", false, "INNEWWINDOW1Container", "OpenWindow", "", new Object[] {});
         /*  Sending Event outputs  */
         context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "AV10GridState", AV10GridState);
      }

      protected void S172( )
      {
         /* 'RESETDDOSORTEDSTATUS' Routine */
         Ddo_tiptelid_Sortedstatus = "";
         ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "SortedStatus", Ddo_tiptelid_Sortedstatus);
         Ddo_tiptelnom_Sortedstatus = "";
         ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "SortedStatus", Ddo_tiptelnom_Sortedstatus);
      }

      protected void S142( )
      {
         /* 'SETDDOSORTEDSTATUS' Routine */
         /* Execute user subroutine: 'RESETDDOSORTEDSTATUS' */
         S172 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
         if ( AV12OrderedBy == 2 )
         {
            Ddo_tiptelid_Sortedstatus = (AV13OrderedDsc ? "DSC" : "ASC");
            ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "SortedStatus", Ddo_tiptelid_Sortedstatus);
         }
         else if ( AV12OrderedBy == 1 )
         {
            Ddo_tiptelnom_Sortedstatus = (AV13OrderedDsc ? "DSC" : "ASC");
            ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "SortedStatus", Ddo_tiptelnom_Sortedstatus);
         }
      }

      protected void S162( )
      {
         /* 'INITIALIZECOLUMNSSELECTOR' Routine */
         AV30ColumnsSelector = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector(context);
         new GeneXus.Programs.wwpbaseobjects.wwp_columnsselector_add(context ).execute( ref  AV30ColumnsSelector,  "Tel Id",  true) ;
         new GeneXus.Programs.wwpbaseobjects.wwp_columnsselector_add(context ).execute( ref  AV30ColumnsSelector,  "Tel Nom",  true) ;
         GXt_char2 = AV25UserCustomValue;
         new GeneXus.Programs.wwpbaseobjects.loadcolumnsselectorstate(context ).execute(  "WWTipoTelefonoColumnsSelector", out  GXt_char2) ;
         AV25UserCustomValue = GXt_char2;
         if ( ! ( String.IsNullOrEmpty(StringUtil.RTrim( AV25UserCustomValue)) ) )
         {
            AV31ColumnsSelectorAux.FromXml(AV25UserCustomValue, null, "WWPColumnsSelector", "MaxiPrueba");
            new GeneXus.Programs.wwpbaseobjects.wwp_columnselector_updatecolumns(context ).execute( ref  AV31ColumnsSelectorAux, ref  AV30ColumnsSelector) ;
         }
      }

      protected void S112( )
      {
         /* 'LOADSAVEDFILTERS' Routine */
         AV41ManageFiltersData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         AV42ManageFiltersDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
         AV42ManageFiltersDataItem.gxTpr_Title = "Limpiar filtros";
         AV42ManageFiltersDataItem.gxTpr_Eventkey = "<#Clean#>";
         AV42ManageFiltersDataItem.gxTpr_Isdivider = false;
         AV42ManageFiltersDataItem.gxTpr_Icon = context.convertURL( (String)(context.GetImagePath( "63d2ae92-4e43-4a70-af61-0943e39ea422", "", context.GetTheme( ))));
         AV41ManageFiltersData.Add(AV42ManageFiltersDataItem, 0);
         AV42ManageFiltersDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
         AV42ManageFiltersDataItem.gxTpr_Title = "Guardar filtro como...";
         AV42ManageFiltersDataItem.gxTpr_Eventkey = "<#Save#>";
         AV42ManageFiltersDataItem.gxTpr_Isdivider = false;
         AV42ManageFiltersDataItem.gxTpr_Icon = context.convertURL( (String)(context.GetImagePath( "6eee63e8-73c7-4738-beee-f98e3a8d2841", "", context.GetTheme( ))));
         AV41ManageFiltersData.Add(AV42ManageFiltersDataItem, 0);
         AV42ManageFiltersDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
         AV42ManageFiltersDataItem.gxTpr_Isdivider = true;
         AV41ManageFiltersData.Add(AV42ManageFiltersDataItem, 0);
         AV39ManageFiltersItems.FromXml(new GeneXus.Programs.wwpbaseobjects.loadmanagefiltersstate(context).executeUdp(  "WWTipoTelefonoFilters"), null, "Items", "");
         AV60GXV1 = 1;
         while ( AV60GXV1 <= AV39ManageFiltersItems.Count )
         {
            AV40ManageFiltersItem = ((GeneXus.Programs.wwpbaseobjects.SdtGridStateCollection_Item)AV39ManageFiltersItems.Item(AV60GXV1));
            AV42ManageFiltersDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
            AV42ManageFiltersDataItem.gxTpr_Title = AV40ManageFiltersItem.gxTpr_Title;
            AV42ManageFiltersDataItem.gxTpr_Eventkey = AV40ManageFiltersItem.gxTpr_Title;
            AV42ManageFiltersDataItem.gxTpr_Isdivider = false;
            AV41ManageFiltersData.Add(AV42ManageFiltersDataItem, 0);
            if ( AV41ManageFiltersData.Count == 13 )
            {
               if (true) break;
            }
            AV60GXV1 = (int)(AV60GXV1+1);
         }
         if ( AV41ManageFiltersData.Count > 3 )
         {
            AV42ManageFiltersDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
            AV42ManageFiltersDataItem.gxTpr_Isdivider = true;
            AV41ManageFiltersData.Add(AV42ManageFiltersDataItem, 0);
            AV42ManageFiltersDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
            AV42ManageFiltersDataItem.gxTpr_Title = "Gestionar filtros";
            AV42ManageFiltersDataItem.gxTpr_Eventkey = "<#Manage#>";
            AV42ManageFiltersDataItem.gxTpr_Isdivider = false;
            AV42ManageFiltersDataItem.gxTpr_Icon = context.convertURL( (String)(context.GetImagePath( "653f6166-5d82-407a-af84-19e0dde65efd", "", context.GetTheme( ))));
            AV42ManageFiltersDataItem.gxTpr_Jsonclickevent = "";
            AV41ManageFiltersData.Add(AV42ManageFiltersDataItem, 0);
         }
      }

      protected void S182( )
      {
         /* 'CLEANFILTERS' Routine */
         AV15FilterFullText = "";
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV15FilterFullText", AV15FilterFullText);
         AV44TFTipTelId = 0;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV44TFTipTelId", StringUtil.LTrim( StringUtil.Str( (decimal)(AV44TFTipTelId), 9, 0)));
         Ddo_tiptelid_Filteredtext_set = "";
         ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "FilteredText_set", Ddo_tiptelid_Filteredtext_set);
         AV45TFTipTelId_To = 0;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV45TFTipTelId_To", StringUtil.LTrim( StringUtil.Str( (decimal)(AV45TFTipTelId_To), 9, 0)));
         Ddo_tiptelid_Filteredtextto_set = "";
         ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "FilteredTextTo_set", Ddo_tiptelid_Filteredtextto_set);
         AV48TFTipTelNom = "";
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV48TFTipTelNom", AV48TFTipTelNom);
         Ddo_tiptelnom_Filteredtext_set = "";
         ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "FilteredText_set", Ddo_tiptelnom_Filteredtext_set);
         AV56TFTipTelNom_Sel = "";
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV56TFTipTelNom_Sel", AV56TFTipTelNom_Sel);
         Ddo_tiptelnom_Selectedvalue_set = "";
         ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "SelectedValue_set", Ddo_tiptelnom_Selectedvalue_set);
      }

      protected void S202( )
      {
         /* 'DO UPDATE' Routine */
         CallWebObject(formatLink("tipotelefono.aspx") + "?" + UrlEncode(StringUtil.RTrim("UPD")) + "," + UrlEncode("" +A1TipTelId));
         context.wjLocDisableFrm = 1;
      }

      protected void S212( )
      {
         /* 'DO DELETE' Routine */
         CallWebObject(formatLink("tipotelefono.aspx") + "?" + UrlEncode(StringUtil.RTrim("DLT")) + "," + UrlEncode("" +A1TipTelId));
         context.wjLocDisableFrm = 1;
      }

      protected void S132( )
      {
         /* 'LOADGRIDSTATE' Routine */
         if ( StringUtil.StrCmp(AV36Session.Get(AV59Pgmname+"GridState"), "") == 0 )
         {
            AV10GridState.FromXml(new GeneXus.Programs.wwpbaseobjects.loadgridstate(context).executeUdp(  AV59Pgmname+"GridState"), null, "WWPGridState", "MaxiPrueba");
         }
         else
         {
            AV10GridState.FromXml(AV36Session.Get(AV59Pgmname+"GridState"), null, "WWPGridState", "MaxiPrueba");
         }
         AV12OrderedBy = AV10GridState.gxTpr_Orderedby;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV12OrderedBy", StringUtil.LTrim( StringUtil.Str( (decimal)(AV12OrderedBy), 4, 0)));
         AV13OrderedDsc = AV10GridState.gxTpr_Ordereddsc;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV13OrderedDsc", AV13OrderedDsc);
         /* Execute user subroutine: 'SETDDOSORTEDSTATUS' */
         S142 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
         /* Execute user subroutine: 'LOADREGFILTERSSTATE' */
         S192 ();
         if ( returnInSub )
         {
            returnInSub = true;
            if (true) return;
         }
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( StringUtil.Trim( AV10GridState.gxTpr_Pagesize))) )
         {
            subGrid_Rows = (int)(NumberUtil.Val( AV10GridState.gxTpr_Pagesize, "."));
            GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         }
         subgrid_gotopage( AV10GridState.gxTpr_Currentpage) ;
      }

      protected void S192( )
      {
         /* 'LOADREGFILTERSSTATE' Routine */
         AV61GXV2 = 1;
         while ( AV61GXV2 <= AV10GridState.gxTpr_Filtervalues.Count )
         {
            AV11GridStateFilterValue = ((GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue)AV10GridState.gxTpr_Filtervalues.Item(AV61GXV2));
            if ( StringUtil.StrCmp(AV11GridStateFilterValue.gxTpr_Name, "FILTERFULLTEXT") == 0 )
            {
               AV15FilterFullText = AV11GridStateFilterValue.gxTpr_Value;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV15FilterFullText", AV15FilterFullText);
            }
            else if ( StringUtil.StrCmp(AV11GridStateFilterValue.gxTpr_Name, "TFTIPTELID") == 0 )
            {
               AV44TFTipTelId = (int)(NumberUtil.Val( AV11GridStateFilterValue.gxTpr_Value, "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV44TFTipTelId", StringUtil.LTrim( StringUtil.Str( (decimal)(AV44TFTipTelId), 9, 0)));
               AV45TFTipTelId_To = (int)(NumberUtil.Val( AV11GridStateFilterValue.gxTpr_Valueto, "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV45TFTipTelId_To", StringUtil.LTrim( StringUtil.Str( (decimal)(AV45TFTipTelId_To), 9, 0)));
               if ( ! (0==AV44TFTipTelId) )
               {
                  Ddo_tiptelid_Filteredtext_set = StringUtil.Str( (decimal)(AV44TFTipTelId), 9, 0);
                  ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "FilteredText_set", Ddo_tiptelid_Filteredtext_set);
               }
               if ( ! (0==AV45TFTipTelId_To) )
               {
                  Ddo_tiptelid_Filteredtextto_set = StringUtil.Str( (decimal)(AV45TFTipTelId_To), 9, 0);
                  ucDdo_tiptelid.SendProperty(context, "", false, Ddo_tiptelid_Internalname, "FilteredTextTo_set", Ddo_tiptelid_Filteredtextto_set);
               }
            }
            else if ( StringUtil.StrCmp(AV11GridStateFilterValue.gxTpr_Name, "TFTIPTELNOM") == 0 )
            {
               AV48TFTipTelNom = AV11GridStateFilterValue.gxTpr_Value;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV48TFTipTelNom", AV48TFTipTelNom);
               if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV48TFTipTelNom)) )
               {
                  Ddo_tiptelnom_Filteredtext_set = AV48TFTipTelNom;
                  ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "FilteredText_set", Ddo_tiptelnom_Filteredtext_set);
               }
            }
            else if ( StringUtil.StrCmp(AV11GridStateFilterValue.gxTpr_Name, "TFTIPTELNOM_SEL") == 0 )
            {
               AV56TFTipTelNom_Sel = AV11GridStateFilterValue.gxTpr_Value;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV56TFTipTelNom_Sel", AV56TFTipTelNom_Sel);
               if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV56TFTipTelNom_Sel)) )
               {
                  Ddo_tiptelnom_Selectedvalue_set = AV56TFTipTelNom_Sel;
                  ucDdo_tiptelnom.SendProperty(context, "", false, Ddo_tiptelnom_Internalname, "SelectedValue_set", Ddo_tiptelnom_Selectedvalue_set);
               }
            }
            AV61GXV2 = (int)(AV61GXV2+1);
         }
      }

      protected void S152( )
      {
         /* 'SAVEGRIDSTATE' Routine */
         AV10GridState.FromXml(AV36Session.Get(AV59Pgmname+"GridState"), null, "WWPGridState", "MaxiPrueba");
         AV10GridState.gxTpr_Orderedby = AV12OrderedBy;
         AV10GridState.gxTpr_Ordereddsc = AV13OrderedDsc;
         AV10GridState.gxTpr_Filtervalues.Clear();
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV15FilterFullText)) )
         {
            AV11GridStateFilterValue = new GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue(context);
            AV11GridStateFilterValue.gxTpr_Name = "FILTERFULLTEXT";
            AV11GridStateFilterValue.gxTpr_Value = AV15FilterFullText;
            AV10GridState.gxTpr_Filtervalues.Add(AV11GridStateFilterValue, 0);
         }
         if ( ! ( (0==AV44TFTipTelId) && (0==AV45TFTipTelId_To) ) )
         {
            AV11GridStateFilterValue = new GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue(context);
            AV11GridStateFilterValue.gxTpr_Name = "TFTIPTELID";
            AV11GridStateFilterValue.gxTpr_Value = StringUtil.Str( (decimal)(AV44TFTipTelId), 9, 0);
            AV11GridStateFilterValue.gxTpr_Valueto = StringUtil.Str( (decimal)(AV45TFTipTelId_To), 9, 0);
            AV10GridState.gxTpr_Filtervalues.Add(AV11GridStateFilterValue, 0);
         }
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV48TFTipTelNom)) )
         {
            AV11GridStateFilterValue = new GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue(context);
            AV11GridStateFilterValue.gxTpr_Name = "TFTIPTELNOM";
            AV11GridStateFilterValue.gxTpr_Value = AV48TFTipTelNom;
            AV10GridState.gxTpr_Filtervalues.Add(AV11GridStateFilterValue, 0);
         }
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV56TFTipTelNom_Sel)) )
         {
            AV11GridStateFilterValue = new GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue(context);
            AV11GridStateFilterValue.gxTpr_Name = "TFTIPTELNOM_SEL";
            AV11GridStateFilterValue.gxTpr_Value = AV56TFTipTelNom_Sel;
            AV10GridState.gxTpr_Filtervalues.Add(AV11GridStateFilterValue, 0);
         }
         AV10GridState.gxTpr_Pagesize = StringUtil.Str( (decimal)(subGrid_Rows), 10, 0);
         AV10GridState.gxTpr_Currentpage = (short)(subGrid_Currentpage( ));
         new GeneXus.Programs.wwpbaseobjects.savegridstate(context ).execute(  AV59Pgmname+"GridState",  AV10GridState.ToXml(false, true, "WWPGridState", "MaxiPrueba")) ;
      }

      protected void S122( )
      {
         /* 'PREPARETRANSACTION' Routine */
         AV8TrnContext = new GeneXus.Programs.wwpbaseobjects.SdtWWPTransactionContext(context);
         AV8TrnContext.gxTpr_Callerobject = AV59Pgmname;
         AV8TrnContext.gxTpr_Callerondelete = true;
         AV8TrnContext.gxTpr_Callerurl = AV7HTTPRequest.ScriptName+"?"+AV7HTTPRequest.QueryString;
         AV8TrnContext.gxTpr_Transactionname = "TipoTelefono";
         AV36Session.Set("TrnContext", AV8TrnContext.ToXml(false, true, "WWPTransactionContext", "MaxiPrueba"));
      }

      protected void wb_table1_25_0S2( bool wbgen )
      {
         if ( wbgen )
         {
            /* Table start */
            sStyleString = "";
            GxWebStd.gx_table_start( context, tblTablerightheader_Internalname, tblTablerightheader_Internalname, "", "", 0, "", "", 1, 2, sStyleString, "", "", 0);
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td>") ;
            /* User Defined Control */
            ucDdo_managefilters.SetProperty("Caption", Ddo_managefilters_Caption);
            ucDdo_managefilters.SetProperty("Tooltip", Ddo_managefilters_Tooltip);
            ucDdo_managefilters.SetProperty("Cls", Ddo_managefilters_Cls);
            ucDdo_managefilters.SetProperty("DropDownOptionsData", AV41ManageFiltersData);
            ucDdo_managefilters.Render(context, "dvelop.gxbootstrap.dropdownoptions", Ddo_managefilters_Internalname, "DDO_MANAGEFILTERSContainer");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "<td>") ;
            wb_table2_30_0S2( true) ;
         }
         else
         {
            wb_table2_30_0S2( false) ;
         }
         return  ;
      }

      protected void wb_table2_30_0S2e( bool wbgen )
      {
         if ( wbgen )
         {
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            /* End of table */
            context.WriteHtmlText( "</table>") ;
            wb_table1_25_0S2e( true) ;
         }
         else
         {
            wb_table1_25_0S2e( false) ;
         }
      }

      protected void wb_table2_30_0S2( bool wbgen )
      {
         if ( wbgen )
         {
            /* Table start */
            sStyleString = "";
            GxWebStd.gx_table_start( context, tblTablefilters_Internalname, tblTablefilters_Internalname, "", "", 0, "", "", 1, 2, sStyleString, "", "", 0);
            context.WriteHtmlText( "<tr>") ;
            context.WriteHtmlText( "<td>") ;
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", " gx-attribute", "left", "top", "", "", "div");
            /* Attribute/Variable Label */
            GxWebStd.gx_label_element( context, edtavFilterfulltext_Internalname, "Filter Full Text", "col-sm-3 AttributeLabel", 0, true);
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 34,'',false,'" + sGXsfl_43_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavFilterfulltext_Internalname, AV15FilterFullText, StringUtil.RTrim( context.localUtil.Format( AV15FilterFullText, "")), TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,34);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "Buscar", edtavFilterfulltext_Jsonclick, 0, "Attribute", "", "", "", "", 1, edtavFilterfulltext_Enabled, 0, "text", "", 80, "chr", 1, "row", 100, 0, 0, 0, 1, -1, -1, true, "WWPFullTextFilter", "left", true, "HLP_WWTipoTelefono.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            context.WriteHtmlText( "</td>") ;
            context.WriteHtmlText( "</tr>") ;
            /* End of table */
            context.WriteHtmlText( "</table>") ;
            wb_table2_30_0S2e( true) ;
         }
         else
         {
            wb_table2_30_0S2e( false) ;
         }
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
         PA0S2( ) ;
         WS0S2( ) ;
         WE0S2( ) ;
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
         AddStyleSheetFile("DVelop/DVPaginationBar/DVPaginationBar.css", "");
         AddStyleSheetFile("DVelop/Bootstrap/Shared/fontawesome_v5/css/font-awesome.min.css", "");
         AddStyleSheetFile("DVelop/Bootstrap/Shared/DVelopBootstrap.css", "");
         AddThemeStyleSheetFile("", context.GetTheme( )+".css", "?"+GetCacheInvalidationToken( ));
         bool outputEnabled = isOutputEnabled( ) ;
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         idxLst = 1;
         while ( idxLst <= Form.Jscriptsrc.Count )
         {
            context.AddJavascriptSource(StringUtil.RTrim( ((String)Form.Jscriptsrc.Item(idxLst))), "?2019103019142533", true, true);
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
         context.AddJavascriptSource("messages.spa.js", "?"+GetCacheInvalidationToken( ), false, true);
         context.AddJavascriptSource("wwtipotelefono.js", "?2019103019142534", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/DVPaginationBar/DVPaginationBarRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/WorkWithPlusUtilities/WorkWithPlusUtilitiesRender.js", "", false, true);
         context.AddJavascriptSource("Window/InNewWindowRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DropDownOptions/BootstrapDropDownOptionsRender.js", "", false, true);
         /* End function include_jscripts */
      }

      protected void SubsflControlProps_432( )
      {
         cmbavGridactions_Internalname = "vGRIDACTIONS_"+sGXsfl_43_idx;
         edtTipTelId_Internalname = "TIPTELID_"+sGXsfl_43_idx;
         edtTipTelNom_Internalname = "TIPTELNOM_"+sGXsfl_43_idx;
      }

      protected void SubsflControlProps_fel_432( )
      {
         cmbavGridactions_Internalname = "vGRIDACTIONS_"+sGXsfl_43_fel_idx;
         edtTipTelId_Internalname = "TIPTELID_"+sGXsfl_43_fel_idx;
         edtTipTelNom_Internalname = "TIPTELNOM_"+sGXsfl_43_fel_idx;
      }

      protected void sendrow_432( )
      {
         SubsflControlProps_432( ) ;
         WB0S0( ) ;
         if ( ( subGrid_Rows * 1 == 0 ) || ( nGXsfl_43_idx <= subGrid_Recordsperpage( ) * 1 ) )
         {
            GridRow = GXWebRow.GetNew(context,GridContainer);
            if ( subGrid_Backcolorstyle == 0 )
            {
               /* None style subfile background logic. */
               subGrid_Backstyle = 0;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Odd";
               }
            }
            else if ( subGrid_Backcolorstyle == 1 )
            {
               /* Uniform style subfile background logic. */
               subGrid_Backstyle = 0;
               subGrid_Backcolor = subGrid_Allbackcolor;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Uniform";
               }
            }
            else if ( subGrid_Backcolorstyle == 2 )
            {
               /* Header style subfile background logic. */
               subGrid_Backstyle = 1;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Odd";
               }
               subGrid_Backcolor = (int)(0x0);
            }
            else if ( subGrid_Backcolorstyle == 3 )
            {
               /* Report style subfile background logic. */
               subGrid_Backstyle = 1;
               if ( ((int)((nGXsfl_43_idx) % (2))) == 0 )
               {
                  subGrid_Backcolor = (int)(0x0);
                  if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                  {
                     subGrid_Linesclass = subGrid_Class+"Even";
                  }
               }
               else
               {
                  subGrid_Backcolor = (int)(0x0);
                  if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                  {
                     subGrid_Linesclass = subGrid_Class+"Odd";
                  }
               }
            }
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<tr ") ;
               context.WriteHtmlText( " class=\""+"GridWithPaginationBar GridNoBorder WorkWith"+"\" style=\""+""+"\"") ;
               context.WriteHtmlText( " gxrow=\""+sGXsfl_43_idx+"\">") ;
            }
            /* Subfile cell */
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<td valign=\"middle\" align=\""+"right"+"\""+" style=\""+""+"\">") ;
            }
            TempTags = " " + ((cmbavGridactions.Enabled!=0)&&(cmbavGridactions.Visible!=0) ? " onfocus=\"gx.evt.onfocus(this, 44,'',false,'"+sGXsfl_43_idx+"',43)\"" : " ");
            if ( ( cmbavGridactions.ItemCount == 0 ) && isAjaxCallMode( ) )
            {
               GXCCtl = "vGRIDACTIONS_" + sGXsfl_43_idx;
               cmbavGridactions.Name = GXCCtl;
               cmbavGridactions.WebTags = "";
               if ( cmbavGridactions.ItemCount > 0 )
               {
                  AV55GridActions = (short)(NumberUtil.Val( cmbavGridactions.getValidValue(StringUtil.Trim( StringUtil.Str( (decimal)(AV55GridActions), 4, 0))), "."));
                  context.httpAjaxContext.ajax_rsp_assign_attri("", false, cmbavGridactions_Internalname, StringUtil.LTrim( StringUtil.Str( (decimal)(AV55GridActions), 4, 0)));
               }
            }
            /* ComboBox */
            GridRow.AddColumnProperties("combobox", 2, isAjaxCallMode( ), new Object[] {(GXCombobox)cmbavGridactions,(String)cmbavGridactions_Internalname,StringUtil.Trim( StringUtil.Str( (decimal)(AV55GridActions), 4, 0)),(short)1,(String)cmbavGridactions_Jsonclick,(short)7,(String)"'"+""+"'"+",false,"+"'"+"e230s2_client"+"'",(String)"int",(String)"",(short)-1,(short)1,(short)0,(short)0,(short)0,(String)"px",(short)0,(String)"px",(String)"",(String)"ConvertToDDO",(String)"WWActionGroupColumn",(String)"",TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+((cmbavGridactions.Enabled!=0)&&(cmbavGridactions.Visible!=0) ? " onblur=\""+""+";gx.evt.onblur(this,44);\"" : " "),(String)"",(bool)true});
            cmbavGridactions.CurrentValue = StringUtil.Trim( StringUtil.Str( (decimal)(AV55GridActions), 4, 0));
            context.httpAjaxContext.ajax_rsp_assign_prop("", false, cmbavGridactions_Internalname, "Values", (String)(cmbavGridactions.ToJavascriptSource()), !bGXsfl_43_Refreshing);
            /* Subfile cell */
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<td valign=\"middle\" align=\""+"right"+"\""+" style=\""+((edtTipTelId_Visible==0) ? "display:none;" : "")+"\">") ;
            }
            /* Single line edit */
            ROClassString = "Attribute";
            GridRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtTipTelId_Internalname,StringUtil.LTrim( StringUtil.NToC( (decimal)(A1TipTelId), 9, 0, ",", "")),context.localUtil.Format( (decimal)(A1TipTelId), "ZZZZZZZZ9"),(String)"",(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"",(String)"",(String)"",(String)"",(String)edtTipTelId_Jsonclick,(short)0,(String)"Attribute",(String)"",(String)ROClassString,(String)"WWColumn hidden-xs",(String)"",(int)edtTipTelId_Visible,(short)0,(short)0,(String)"number",(String)"1",(short)0,(String)"px",(short)17,(String)"px",(short)9,(short)0,(short)0,(short)43,(short)1,(short)-1,(short)0,(bool)true,(String)"",(String)"right",(bool)false});
            /* Subfile cell */
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<td valign=\"middle\" align=\""+"left"+"\""+" style=\""+((edtTipTelNom_Visible==0) ? "display:none;" : "")+"\">") ;
            }
            /* Single line edit */
            ROClassString = "Attribute";
            GridRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtTipTelNom_Internalname,StringUtil.RTrim( A3TipTelNom),(String)"",(String)"",(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)edtTipTelNom_Link,(String)"",(String)"",(String)"",(String)edtTipTelNom_Jsonclick,(short)0,(String)"Attribute",(String)"",(String)ROClassString,(String)"WWColumn",(String)"",(int)edtTipTelNom_Visible,(short)0,(short)0,(String)"text",(String)"",(short)0,(String)"px",(short)17,(String)"px",(short)20,(short)0,(short)0,(short)43,(short)1,(short)-1,(short)-1,(bool)true,(String)"",(String)"left",(bool)true});
            send_integrity_lvl_hashes0S2( ) ;
            GridContainer.AddRow(GridRow);
            nGXsfl_43_idx = ((subGrid_Islastpage==1)&&(nGXsfl_43_idx+1>subGrid_Recordsperpage( )) ? 1 : nGXsfl_43_idx+1);
            sGXsfl_43_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_43_idx), 4, 0)), 4, "0");
            SubsflControlProps_432( ) ;
         }
         /* End function sendrow_432 */
      }

      protected void init_web_controls( )
      {
         GXCCtl = "vGRIDACTIONS_" + sGXsfl_43_idx;
         cmbavGridactions.Name = GXCCtl;
         cmbavGridactions.WebTags = "";
         if ( cmbavGridactions.ItemCount > 0 )
         {
            AV55GridActions = (short)(NumberUtil.Val( cmbavGridactions.getValidValue(StringUtil.Trim( StringUtil.Str( (decimal)(AV55GridActions), 4, 0))), "."));
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, cmbavGridactions_Internalname, StringUtil.LTrim( StringUtil.Str( (decimal)(AV55GridActions), 4, 0)));
         }
         /* End function init_web_controls */
      }

      protected void init_default_properties( )
      {
         bttBtninsert_Internalname = "BTNINSERT";
         bttBtnexport_Internalname = "BTNEXPORT";
         bttBtnexportreport_Internalname = "BTNEXPORTREPORT";
         bttBtneditcolumns_Internalname = "BTNEDITCOLUMNS";
         divTableactions_Internalname = "TABLEACTIONS";
         Ddo_managefilters_Internalname = "DDO_MANAGEFILTERS";
         edtavFilterfulltext_Internalname = "vFILTERFULLTEXT";
         tblTablefilters_Internalname = "TABLEFILTERS";
         tblTablerightheader_Internalname = "TABLERIGHTHEADER";
         divTableheader_Internalname = "TABLEHEADER";
         cmbavGridactions_Internalname = "vGRIDACTIONS";
         edtTipTelId_Internalname = "TIPTELID";
         edtTipTelNom_Internalname = "TIPTELNOM";
         Gridpaginationbar_Internalname = "GRIDPAGINATIONBAR";
         divGridtablewithpaginationbar_Internalname = "GRIDTABLEWITHPAGINATIONBAR";
         divTablemain_Internalname = "TABLEMAIN";
         Ddo_tiptelid_Internalname = "DDO_TIPTELID";
         edtavDdo_tiptelidtitlecontrolidtoreplace_Internalname = "vDDO_TIPTELIDTITLECONTROLIDTOREPLACE";
         Ddo_tiptelnom_Internalname = "DDO_TIPTELNOM";
         edtavDdo_tiptelnomtitlecontrolidtoreplace_Internalname = "vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE";
         Workwithplusutilities1_Internalname = "WORKWITHPLUSUTILITIES1";
         Innewwindow1_Internalname = "INNEWWINDOW1";
         Ddo_gridcolumnsselector_Internalname = "DDO_GRIDCOLUMNSSELECTOR";
         edtavOrderedby_Internalname = "vORDEREDBY";
         edtavOrdereddsc_Internalname = "vORDEREDDSC";
         edtavManagefiltersexecutionstep_Internalname = "vMANAGEFILTERSEXECUTIONSTEP";
         edtavTftiptelid_Internalname = "vTFTIPTELID";
         edtavTftiptelid_to_Internalname = "vTFTIPTELID_TO";
         edtavTftiptelnom_Internalname = "vTFTIPTELNOM";
         edtavTftiptelnom_sel_Internalname = "vTFTIPTELNOM_SEL";
         divHtml_bottomauxiliarcontrols_Internalname = "HTML_BOTTOMAUXILIARCONTROLS";
         divLayoutmaintable_Internalname = "LAYOUTMAINTABLE";
         Form.Internalname = "FORM";
         subGrid_Internalname = "GRID";
      }

      public override void initialize_properties( )
      {
         context.SetDefaultTheme("WorkWithPlusTheme");
         if ( context.isSpaRequest( ) )
         {
            disableJsOutput();
         }
         init_default_properties( ) ;
         edtTipTelNom_Jsonclick = "";
         edtTipTelId_Jsonclick = "";
         cmbavGridactions_Jsonclick = "";
         cmbavGridactions.Visible = -1;
         cmbavGridactions.Enabled = 1;
         edtavFilterfulltext_Jsonclick = "";
         edtavFilterfulltext_Enabled = 1;
         edtavTftiptelnom_sel_Jsonclick = "";
         edtavTftiptelnom_sel_Visible = 1;
         edtavTftiptelnom_Jsonclick = "";
         edtavTftiptelnom_Visible = 1;
         edtavTftiptelid_to_Jsonclick = "";
         edtavTftiptelid_to_Visible = 1;
         edtavTftiptelid_Jsonclick = "";
         edtavTftiptelid_Visible = 1;
         edtavManagefiltersexecutionstep_Jsonclick = "";
         edtavManagefiltersexecutionstep_Visible = 1;
         edtavOrdereddsc_Jsonclick = "";
         edtavOrdereddsc_Visible = 1;
         edtavOrderedby_Jsonclick = "";
         edtavOrderedby_Visible = 1;
         edtavDdo_tiptelnomtitlecontrolidtoreplace_Visible = 1;
         edtavDdo_tiptelidtitlecontrolidtoreplace_Visible = 1;
         subGrid_Allowcollapsing = 0;
         subGrid_Allowselection = 0;
         edtTipTelNom_Link = "";
         subGrid_Sortable = 0;
         subGrid_Header = "";
         edtTipTelNom_Titleformat = 0;
         edtTipTelNom_Title = "Tel Nom";
         edtTipTelNom_Visible = -1;
         edtTipTelId_Titleformat = 0;
         edtTipTelId_Title = "Tel Id";
         edtTipTelId_Visible = -1;
         subGrid_Class = "GridWithPaginationBar GridNoBorder WorkWith";
         subGrid_Backcolorstyle = 0;
         Ddo_gridcolumnsselector_Updatebuttontext = "WWP_ColumnsSelectorButton";
         Ddo_gridcolumnsselector_Titlecontrolidtoreplace = "";
         Ddo_gridcolumnsselector_Dropdownoptionstype = "GridColumnsSelector";
         Ddo_gridcolumnsselector_Cls = "ColumnsSelector hidden-xs";
         Ddo_gridcolumnsselector_Tooltip = "WWP_EditColumnsTooltip";
         Ddo_gridcolumnsselector_Caption = "Selecciona columnas";
         Innewwindow1_Target = "";
         Innewwindow1_Height = "50";
         Innewwindow1_Width = "50";
         Ddo_tiptelnom_Searchbuttontext = "WWP_TSSearchButtonCaption";
         Ddo_tiptelnom_Noresultsfound = "WWP_TSNoResults";
         Ddo_tiptelnom_Cleanfilter = "WWP_TSCleanFilter";
         Ddo_tiptelnom_Loadingdata = "WWP_TSLoading";
         Ddo_tiptelnom_Sortdsc = "WWP_TSSortDSC";
         Ddo_tiptelnom_Sortasc = "WWP_TSSortASC";
         Ddo_tiptelnom_Datalistupdateminimumcharacters = 0;
         Ddo_tiptelnom_Datalistproc = "GetFilterDataWWTipoTelefono";
         Ddo_tiptelnom_Datalisttype = "Dynamic";
         Ddo_tiptelnom_Includedatalist = Convert.ToBoolean( -1);
         Ddo_tiptelnom_Filterisrange = Convert.ToBoolean( 0);
         Ddo_tiptelnom_Filtertype = "Character";
         Ddo_tiptelnom_Includefilter = Convert.ToBoolean( -1);
         Ddo_tiptelnom_Includesortdsc = Convert.ToBoolean( -1);
         Ddo_tiptelnom_Includesortasc = Convert.ToBoolean( -1);
         Ddo_tiptelnom_Titlecontrolidtoreplace = "";
         Ddo_tiptelnom_Dropdownoptionstype = "GridTitleSettings";
         Ddo_tiptelnom_Cls = "ColumnSettings";
         Ddo_tiptelnom_Tooltip = "WWP_TSColumnOptions";
         Ddo_tiptelnom_Caption = "";
         Ddo_tiptelid_Searchbuttontext = "WWP_TSSearchButtonCaption";
         Ddo_tiptelid_Rangefilterto = "WWP_TSTo";
         Ddo_tiptelid_Rangefilterfrom = "WWP_TSFrom";
         Ddo_tiptelid_Cleanfilter = "WWP_TSCleanFilter";
         Ddo_tiptelid_Sortdsc = "WWP_TSSortDSC";
         Ddo_tiptelid_Sortasc = "WWP_TSSortASC";
         Ddo_tiptelid_Includedatalist = Convert.ToBoolean( 0);
         Ddo_tiptelid_Filterisrange = Convert.ToBoolean( -1);
         Ddo_tiptelid_Filtertype = "Numeric";
         Ddo_tiptelid_Includefilter = Convert.ToBoolean( -1);
         Ddo_tiptelid_Includesortdsc = Convert.ToBoolean( -1);
         Ddo_tiptelid_Includesortasc = Convert.ToBoolean( -1);
         Ddo_tiptelid_Titlecontrolidtoreplace = "";
         Ddo_tiptelid_Dropdownoptionstype = "GridTitleSettings";
         Ddo_tiptelid_Cls = "ColumnSettings";
         Ddo_tiptelid_Tooltip = "WWP_TSColumnOptions";
         Ddo_tiptelid_Caption = "";
         Gridpaginationbar_Rowsperpagecaption = "WWP_PagingRowsPerPage";
         Gridpaginationbar_Emptygridcaption = "WWP_PagingEmptyGridCaption";
         Gridpaginationbar_Caption = "Página <CURRENT_PAGE> de <TOTAL_PAGES>";
         Gridpaginationbar_Next = "WWP_PagingNextCaption";
         Gridpaginationbar_Previous = "WWP_PagingPreviousCaption";
         Gridpaginationbar_Rowsperpageoptions = "5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50";
         Gridpaginationbar_Rowsperpageselectedvalue = 10;
         Gridpaginationbar_Rowsperpageselector = Convert.ToBoolean( -1);
         Gridpaginationbar_Emptygridclass = "PaginationBarEmptyGrid";
         Gridpaginationbar_Pagingcaptionposition = "Left";
         Gridpaginationbar_Pagingbuttonsposition = "Right";
         Gridpaginationbar_Pagestoshow = 5;
         Gridpaginationbar_Showlast = Convert.ToBoolean( 0);
         Gridpaginationbar_Shownext = Convert.ToBoolean( -1);
         Gridpaginationbar_Showprevious = Convert.ToBoolean( -1);
         Gridpaginationbar_Showfirst = Convert.ToBoolean( 0);
         Gridpaginationbar_Class = "PaginationBar";
         Ddo_managefilters_Cls = "ManageFilters";
         Ddo_managefilters_Tooltip = "WWP_ManageFiltersTooltip";
         Ddo_managefilters_Icon = "";
         Form.Headerrawhtml = "";
         Form.Background = "";
         Form.Textcolor = 0;
         Form.Backcolor = (int)(0xFFFFFF);
         Form.Caption = " Tipo Telefono";
         subGrid_Rows = 0;
         context.GX_msglist.DisplayMode = 1;
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
         setEventMetadata("REFRESH","{handler:'Refresh',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV46ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV50ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'AV59Pgmname',fld:'vPGMNAME',pic:''}]");
         setEventMetadata("REFRESH",",oparms:[{av:'AV43TipTelIdTitleFilterData',fld:'vTIPTELIDTITLEFILTERDATA',pic:''},{av:'AV47TipTelNomTitleFilterData',fld:'vTIPTELNOMTITLEFILTERDATA',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'edtTipTelId_Visible',ctrl:'TIPTELID',prop:'Visible'},{av:'edtTipTelNom_Visible',ctrl:'TIPTELNOM',prop:'Visible'},{av:'edtTipTelId_Titleformat',ctrl:'TIPTELID',prop:'Titleformat'},{av:'edtTipTelId_Title',ctrl:'TIPTELID',prop:'Title'},{av:'edtTipTelNom_Titleformat',ctrl:'TIPTELNOM',prop:'Titleformat'},{av:'edtTipTelNom_Title',ctrl:'TIPTELNOM',prop:'Title'},{av:'AV53GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV54GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV41ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]}");
         setEventMetadata("GRIDPAGINATIONBAR.CHANGEPAGE","{handler:'E120S2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV46ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV50ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV59Pgmname',fld:'vPGMNAME',pic:''},{av:'Gridpaginationbar_Selectedpage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}]");
         setEventMetadata("GRIDPAGINATIONBAR.CHANGEPAGE",",oparms:[]}");
         setEventMetadata("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE","{handler:'E130S2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV46ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV50ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV59Pgmname',fld:'vPGMNAME',pic:''},{av:'Gridpaginationbar_Rowsperpageselectedvalue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}]");
         setEventMetadata("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",",oparms:[{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'}]}");
         setEventMetadata("DDO_TIPTELID.ONOPTIONCLICKED","{handler:'E140S2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV46ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV50ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV59Pgmname',fld:'vPGMNAME',pic:''},{av:'Ddo_tiptelid_Activeeventkey',ctrl:'DDO_TIPTELID',prop:'ActiveEventKey'},{av:'Ddo_tiptelid_Filteredtext_get',ctrl:'DDO_TIPTELID',prop:'FilteredText_get'},{av:'Ddo_tiptelid_Filteredtextto_get',ctrl:'DDO_TIPTELID',prop:'FilteredTextTo_get'}]");
         setEventMetadata("DDO_TIPTELID.ONOPTIONCLICKED",",oparms:[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'Ddo_tiptelid_Sortedstatus',ctrl:'DDO_TIPTELID',prop:'SortedStatus'},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'Ddo_tiptelnom_Sortedstatus',ctrl:'DDO_TIPTELNOM',prop:'SortedStatus'},{av:'AV43TipTelIdTitleFilterData',fld:'vTIPTELIDTITLEFILTERDATA',pic:''},{av:'AV47TipTelNomTitleFilterData',fld:'vTIPTELNOMTITLEFILTERDATA',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'edtTipTelId_Visible',ctrl:'TIPTELID',prop:'Visible'},{av:'edtTipTelNom_Visible',ctrl:'TIPTELNOM',prop:'Visible'},{av:'edtTipTelId_Titleformat',ctrl:'TIPTELID',prop:'Titleformat'},{av:'edtTipTelId_Title',ctrl:'TIPTELID',prop:'Title'},{av:'edtTipTelNom_Titleformat',ctrl:'TIPTELNOM',prop:'Titleformat'},{av:'edtTipTelNom_Title',ctrl:'TIPTELNOM',prop:'Title'},{av:'AV53GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV54GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV41ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]}");
         setEventMetadata("DDO_TIPTELNOM.ONOPTIONCLICKED","{handler:'E150S2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV46ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV50ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV59Pgmname',fld:'vPGMNAME',pic:''},{av:'Ddo_tiptelnom_Activeeventkey',ctrl:'DDO_TIPTELNOM',prop:'ActiveEventKey'},{av:'Ddo_tiptelnom_Filteredtext_get',ctrl:'DDO_TIPTELNOM',prop:'FilteredText_get'},{av:'Ddo_tiptelnom_Selectedvalue_get',ctrl:'DDO_TIPTELNOM',prop:'SelectedValue_get'}]");
         setEventMetadata("DDO_TIPTELNOM.ONOPTIONCLICKED",",oparms:[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'Ddo_tiptelnom_Sortedstatus',ctrl:'DDO_TIPTELNOM',prop:'SortedStatus'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'Ddo_tiptelid_Sortedstatus',ctrl:'DDO_TIPTELID',prop:'SortedStatus'},{av:'AV43TipTelIdTitleFilterData',fld:'vTIPTELIDTITLEFILTERDATA',pic:''},{av:'AV47TipTelNomTitleFilterData',fld:'vTIPTELNOMTITLEFILTERDATA',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'edtTipTelId_Visible',ctrl:'TIPTELID',prop:'Visible'},{av:'edtTipTelNom_Visible',ctrl:'TIPTELNOM',prop:'Visible'},{av:'edtTipTelId_Titleformat',ctrl:'TIPTELID',prop:'Titleformat'},{av:'edtTipTelId_Title',ctrl:'TIPTELID',prop:'Title'},{av:'edtTipTelNom_Titleformat',ctrl:'TIPTELNOM',prop:'Titleformat'},{av:'edtTipTelNom_Title',ctrl:'TIPTELNOM',prop:'Title'},{av:'AV53GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV54GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV41ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]}");
         setEventMetadata("GRID.LOAD","{handler:'E220S2',iparms:[{av:'A1TipTelId',fld:'TIPTELID',pic:'ZZZZZZZZ9',hsh:true}]");
         setEventMetadata("GRID.LOAD",",oparms:[{av:'cmbavGridactions'},{av:'AV55GridActions',fld:'vGRIDACTIONS',pic:'ZZZ9'},{av:'edtTipTelNom_Link',ctrl:'TIPTELNOM',prop:'Link'}]}");
         setEventMetadata("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED","{handler:'E160S2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV46ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV50ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV59Pgmname',fld:'vPGMNAME',pic:''},{av:'Ddo_gridcolumnsselector_Columnsselectorvalues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}]");
         setEventMetadata("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED",",oparms:[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV43TipTelIdTitleFilterData',fld:'vTIPTELIDTITLEFILTERDATA',pic:''},{av:'AV47TipTelNomTitleFilterData',fld:'vTIPTELNOMTITLEFILTERDATA',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'edtTipTelId_Visible',ctrl:'TIPTELID',prop:'Visible'},{av:'edtTipTelNom_Visible',ctrl:'TIPTELNOM',prop:'Visible'},{av:'edtTipTelId_Titleformat',ctrl:'TIPTELID',prop:'Titleformat'},{av:'edtTipTelId_Title',ctrl:'TIPTELID',prop:'Title'},{av:'edtTipTelNom_Titleformat',ctrl:'TIPTELNOM',prop:'Titleformat'},{av:'edtTipTelNom_Title',ctrl:'TIPTELNOM',prop:'Title'},{av:'AV53GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV54GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV41ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]}");
         setEventMetadata("DDO_MANAGEFILTERS.ONOPTIONCLICKED","{handler:'E110S2',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV46ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV50ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV59Pgmname',fld:'vPGMNAME',pic:''},{av:'Ddo_managefilters_Activeeventkey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]");
         setEventMetadata("DDO_MANAGEFILTERS.ONOPTIONCLICKED",",oparms:[{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'Ddo_tiptelid_Filteredtext_set',ctrl:'DDO_TIPTELID',prop:'FilteredText_set'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'Ddo_tiptelid_Filteredtextto_set',ctrl:'DDO_TIPTELID',prop:'FilteredTextTo_set'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'Ddo_tiptelnom_Filteredtext_set',ctrl:'DDO_TIPTELNOM',prop:'FilteredText_set'},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'Ddo_tiptelnom_Selectedvalue_set',ctrl:'DDO_TIPTELNOM',prop:'SelectedValue_set'},{av:'Ddo_tiptelid_Sortedstatus',ctrl:'DDO_TIPTELID',prop:'SortedStatus'},{av:'Ddo_tiptelnom_Sortedstatus',ctrl:'DDO_TIPTELNOM',prop:'SortedStatus'},{av:'AV43TipTelIdTitleFilterData',fld:'vTIPTELIDTITLEFILTERDATA',pic:''},{av:'AV47TipTelNomTitleFilterData',fld:'vTIPTELNOMTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'edtTipTelId_Visible',ctrl:'TIPTELID',prop:'Visible'},{av:'edtTipTelNom_Visible',ctrl:'TIPTELNOM',prop:'Visible'},{av:'edtTipTelId_Titleformat',ctrl:'TIPTELID',prop:'Titleformat'},{av:'edtTipTelId_Title',ctrl:'TIPTELID',prop:'Title'},{av:'edtTipTelNom_Titleformat',ctrl:'TIPTELNOM',prop:'Titleformat'},{av:'edtTipTelNom_Title',ctrl:'TIPTELNOM',prop:'Title'},{av:'AV53GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV54GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV41ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]}");
         setEventMetadata("VGRIDACTIONS.CLICK","{handler:'E230S2',iparms:[{av:'cmbavGridactions'},{av:'AV55GridActions',fld:'vGRIDACTIONS',pic:'ZZZ9'},{av:'A1TipTelId',fld:'TIPTELID',pic:'ZZZZZZZZ9',hsh:true}]");
         setEventMetadata("VGRIDACTIONS.CLICK",",oparms:[{av:'cmbavGridactions'},{av:'AV55GridActions',fld:'vGRIDACTIONS',pic:'ZZZ9'}]}");
         setEventMetadata("'DOINSERT'","{handler:'E170S2',iparms:[{av:'A1TipTelId',fld:'TIPTELID',pic:'ZZZZZZZZ9',hsh:true}]");
         setEventMetadata("'DOINSERT'",",oparms:[]}");
         setEventMetadata("'DOEXPORT'","{handler:'E180S2',iparms:[{av:'AV59Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]");
         setEventMetadata("'DOEXPORT'",",oparms:[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV46ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV50ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV59Pgmname',fld:'vPGMNAME',pic:''},{av:'Ddo_tiptelid_Sortedstatus',ctrl:'DDO_TIPTELID',prop:'SortedStatus'},{av:'Ddo_tiptelnom_Sortedstatus',ctrl:'DDO_TIPTELNOM',prop:'SortedStatus'},{av:'Ddo_tiptelid_Filteredtext_set',ctrl:'DDO_TIPTELID',prop:'FilteredText_set'},{av:'Ddo_tiptelid_Filteredtextto_set',ctrl:'DDO_TIPTELID',prop:'FilteredTextTo_set'},{av:'Ddo_tiptelnom_Filteredtext_set',ctrl:'DDO_TIPTELNOM',prop:'FilteredText_set'},{av:'Ddo_tiptelnom_Selectedvalue_set',ctrl:'DDO_TIPTELNOM',prop:'SelectedValue_set'}]}");
         setEventMetadata("'DOEXPORTREPORT'","{handler:'E190S2',iparms:[{av:'AV59Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]");
         setEventMetadata("'DOEXPORTREPORT'",",oparms:[{av:'Innewwindow1_Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'Innewwindow1_Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'Innewwindow1_Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV44TFTipTelId',fld:'vTFTIPTELID',pic:'ZZZZZZZZ9'},{av:'AV45TFTipTelId_To',fld:'vTFTIPTELID_TO',pic:'ZZZZZZZZ9'},{av:'AV48TFTipTelNom',fld:'vTFTIPTELNOM',pic:''},{av:'AV56TFTipTelNom_Sel',fld:'vTFTIPTELNOM_SEL',pic:''},{av:'AV37ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV46ddo_TipTelIdTitleControlIdToReplace',fld:'vDDO_TIPTELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV50ddo_TipTelNomTitleControlIdToReplace',fld:'vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV59Pgmname',fld:'vPGMNAME',pic:''},{av:'Ddo_tiptelid_Sortedstatus',ctrl:'DDO_TIPTELID',prop:'SortedStatus'},{av:'Ddo_tiptelnom_Sortedstatus',ctrl:'DDO_TIPTELNOM',prop:'SortedStatus'},{av:'Ddo_tiptelid_Filteredtext_set',ctrl:'DDO_TIPTELID',prop:'FilteredText_set'},{av:'Ddo_tiptelid_Filteredtextto_set',ctrl:'DDO_TIPTELID',prop:'FilteredTextTo_set'},{av:'Ddo_tiptelnom_Filteredtext_set',ctrl:'DDO_TIPTELNOM',prop:'FilteredText_set'},{av:'Ddo_tiptelnom_Selectedvalue_set',ctrl:'DDO_TIPTELNOM',prop:'SelectedValue_set'}]}");
         setEventMetadata("NULL","{handler:'Valid_Tiptelnom',iparms:[]");
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
         Gridpaginationbar_Selectedpage = "";
         Ddo_tiptelid_Activeeventkey = "";
         Ddo_tiptelid_Filteredtext_get = "";
         Ddo_tiptelid_Filteredtextto_get = "";
         Ddo_tiptelnom_Activeeventkey = "";
         Ddo_tiptelnom_Filteredtext_get = "";
         Ddo_tiptelnom_Selectedvalue_get = "";
         Ddo_gridcolumnsselector_Columnsselectorvalues = "";
         Ddo_managefilters_Activeeventkey = "";
         gxfirstwebparm = "";
         gxfirstwebparm_bkp = "";
         AV15FilterFullText = "";
         AV48TFTipTelNom = "";
         AV56TFTipTelNom_Sel = "";
         AV30ColumnsSelector = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector(context);
         AV46ddo_TipTelIdTitleControlIdToReplace = "";
         AV50ddo_TipTelNomTitleControlIdToReplace = "";
         AV59Pgmname = "";
         GXKey = "";
         sDynURL = "";
         FormProcess = "";
         bodyStyle = "";
         AV41ManageFiltersData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         AV51DDO_TitleSettingsIcons = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsTitleSettingsIcons(context);
         AV43TipTelIdTitleFilterData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         AV47TipTelNomTitleFilterData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item>( context, "Item", "");
         AV10GridState = new GeneXus.Programs.wwpbaseobjects.SdtWWPGridState(context);
         Ddo_tiptelid_Filteredtext_set = "";
         Ddo_tiptelid_Filteredtextto_set = "";
         Ddo_tiptelid_Sortedstatus = "";
         Ddo_tiptelnom_Filteredtext_set = "";
         Ddo_tiptelnom_Selectedvalue_set = "";
         Ddo_tiptelnom_Sortedstatus = "";
         GX_FocusControl = "";
         Form = new GXWebForm();
         sPrefix = "";
         TempTags = "";
         ClassString = "";
         StyleString = "";
         bttBtninsert_Jsonclick = "";
         bttBtnexport_Jsonclick = "";
         bttBtnexportreport_Jsonclick = "";
         bttBtneditcolumns_Jsonclick = "";
         GridContainer = new GXWebGrid( context);
         sStyleString = "";
         subGrid_Linesclass = "";
         GridColumn = new GXWebColumn();
         A3TipTelNom = "";
         ucGridpaginationbar = new GXUserControl();
         ucDdo_tiptelid = new GXUserControl();
         ucDdo_tiptelnom = new GXUserControl();
         ucWorkwithplusutilities1 = new GXUserControl();
         ucInnewwindow1 = new GXUserControl();
         ucDdo_gridcolumnsselector = new GXUserControl();
         sEvt = "";
         EvtGridId = "";
         EvtRowId = "";
         sEvtType = "";
         scmdbuf = "";
         lV15FilterFullText = "";
         lV48TFTipTelNom = "";
         H000S2_A3TipTelNom = new String[] {""} ;
         H000S2_A1TipTelId = new int[1] ;
         H000S3_AGRID_nRecordCount = new long[1] ;
         AV7HTTPRequest = new GxHttpRequest( context);
         ucDdo_managefilters = new GXUserControl();
         GXt_SdtDVB_SDTDropDownOptionsTitleSettingsIcons1 = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsTitleSettingsIcons(context);
         AV6WWPContext = new GeneXus.Programs.wwpbaseobjects.SdtWWPContext(context);
         AV36Session = context.GetSession();
         AV18ColumnsSelectorXML = "";
         GridRow = new GXWebRow();
         AV38ManageFiltersXml = "";
         AV16ExcelFilename = "";
         AV17ErrorMessage = "";
         AV25UserCustomValue = "";
         GXt_char2 = "";
         AV31ColumnsSelectorAux = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector(context);
         AV42ManageFiltersDataItem = new GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item(context);
         AV39ManageFiltersItems = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtGridStateCollection_Item>( context, "Item", "");
         AV40ManageFiltersItem = new GeneXus.Programs.wwpbaseobjects.SdtGridStateCollection_Item(context);
         AV11GridStateFilterValue = new GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue(context);
         AV8TrnContext = new GeneXus.Programs.wwpbaseobjects.SdtWWPTransactionContext(context);
         Ddo_managefilters_Caption = "";
         BackMsgLst = new msglist();
         LclMsgLst = new msglist();
         GXCCtl = "";
         ROClassString = "";
         pr_default = new DataStoreProvider(context, new GeneXus.Programs.wwtipotelefono__default(),
            new Object[][] {
                new Object[] {
               H000S2_A3TipTelNom, H000S2_A1TipTelId
               }
               , new Object[] {
               H000S3_AGRID_nRecordCount
               }
            }
         );
         AV59Pgmname = "WWTipoTelefono";
         /* GeneXus formulas. */
         AV59Pgmname = "WWTipoTelefono";
         context.Gx_err = 0;
      }

      private short nGotPars ;
      private short GxWebError ;
      private short GRID_nEOF ;
      private short AV12OrderedBy ;
      private short AV37ManageFiltersExecutionStep ;
      private short initialized ;
      private short gxajaxcallmode ;
      private short wbEnd ;
      private short wbStart ;
      private short subGrid_Backcolorstyle ;
      private short subGrid_Titlebackstyle ;
      private short edtTipTelId_Titleformat ;
      private short edtTipTelNom_Titleformat ;
      private short subGrid_Sortable ;
      private short AV55GridActions ;
      private short subGrid_Allowselection ;
      private short subGrid_Allowhovering ;
      private short subGrid_Allowcollapsing ;
      private short subGrid_Collapsed ;
      private short nDonePA ;
      private short gxcookieaux ;
      private short nGXWrapped ;
      private short subGrid_Backstyle ;
      private int subGrid_Rows ;
      private int Gridpaginationbar_Rowsperpageselectedvalue ;
      private int nRC_GXsfl_43 ;
      private int nGXsfl_43_idx=1 ;
      private int AV44TFTipTelId ;
      private int AV45TFTipTelId_To ;
      private int Gridpaginationbar_Pagestoshow ;
      private int Ddo_tiptelnom_Datalistupdateminimumcharacters ;
      private int subGrid_Titlebackcolor ;
      private int subGrid_Allbackcolor ;
      private int edtTipTelId_Visible ;
      private int edtTipTelNom_Visible ;
      private int A1TipTelId ;
      private int subGrid_Selectedindex ;
      private int subGrid_Selectioncolor ;
      private int subGrid_Hoveringcolor ;
      private int edtavDdo_tiptelidtitlecontrolidtoreplace_Visible ;
      private int edtavDdo_tiptelnomtitlecontrolidtoreplace_Visible ;
      private int edtavOrderedby_Visible ;
      private int edtavOrdereddsc_Visible ;
      private int edtavManagefiltersexecutionstep_Visible ;
      private int edtavTftiptelid_Visible ;
      private int edtavTftiptelid_to_Visible ;
      private int edtavTftiptelnom_Visible ;
      private int edtavTftiptelnom_sel_Visible ;
      private int subGrid_Islastpage ;
      private int GXPagingFrom2 ;
      private int GXPagingTo2 ;
      private int AV52PageToGo ;
      private int AV60GXV1 ;
      private int AV61GXV2 ;
      private int edtavFilterfulltext_Enabled ;
      private int idxLst ;
      private int subGrid_Backcolor ;
      private long GRID_nFirstRecordOnPage ;
      private long AV53GridCurrentPage ;
      private long AV54GridPageCount ;
      private long GRID_nCurrentRecord ;
      private long GRID_nRecordCount ;
      private String Gridpaginationbar_Selectedpage ;
      private String Ddo_tiptelid_Activeeventkey ;
      private String Ddo_tiptelid_Filteredtext_get ;
      private String Ddo_tiptelid_Filteredtextto_get ;
      private String Ddo_tiptelnom_Activeeventkey ;
      private String Ddo_tiptelnom_Filteredtext_get ;
      private String Ddo_tiptelnom_Selectedvalue_get ;
      private String Ddo_gridcolumnsselector_Columnsselectorvalues ;
      private String Ddo_managefilters_Activeeventkey ;
      private String gxfirstwebparm ;
      private String gxfirstwebparm_bkp ;
      private String sGXsfl_43_idx="0001" ;
      private String AV48TFTipTelNom ;
      private String AV56TFTipTelNom_Sel ;
      private String AV59Pgmname ;
      private String GXKey ;
      private String sDynURL ;
      private String FormProcess ;
      private String bodyStyle ;
      private String Ddo_managefilters_Icon ;
      private String Ddo_managefilters_Tooltip ;
      private String Ddo_managefilters_Cls ;
      private String Gridpaginationbar_Class ;
      private String Gridpaginationbar_Pagingbuttonsposition ;
      private String Gridpaginationbar_Pagingcaptionposition ;
      private String Gridpaginationbar_Emptygridclass ;
      private String Gridpaginationbar_Rowsperpageoptions ;
      private String Gridpaginationbar_Previous ;
      private String Gridpaginationbar_Next ;
      private String Gridpaginationbar_Caption ;
      private String Gridpaginationbar_Emptygridcaption ;
      private String Gridpaginationbar_Rowsperpagecaption ;
      private String Ddo_tiptelid_Caption ;
      private String Ddo_tiptelid_Tooltip ;
      private String Ddo_tiptelid_Cls ;
      private String Ddo_tiptelid_Filteredtext_set ;
      private String Ddo_tiptelid_Filteredtextto_set ;
      private String Ddo_tiptelid_Dropdownoptionstype ;
      private String Ddo_tiptelid_Titlecontrolidtoreplace ;
      private String Ddo_tiptelid_Sortedstatus ;
      private String Ddo_tiptelid_Filtertype ;
      private String Ddo_tiptelid_Sortasc ;
      private String Ddo_tiptelid_Sortdsc ;
      private String Ddo_tiptelid_Cleanfilter ;
      private String Ddo_tiptelid_Rangefilterfrom ;
      private String Ddo_tiptelid_Rangefilterto ;
      private String Ddo_tiptelid_Searchbuttontext ;
      private String Ddo_tiptelnom_Caption ;
      private String Ddo_tiptelnom_Tooltip ;
      private String Ddo_tiptelnom_Cls ;
      private String Ddo_tiptelnom_Filteredtext_set ;
      private String Ddo_tiptelnom_Selectedvalue_set ;
      private String Ddo_tiptelnom_Dropdownoptionstype ;
      private String Ddo_tiptelnom_Titlecontrolidtoreplace ;
      private String Ddo_tiptelnom_Sortedstatus ;
      private String Ddo_tiptelnom_Filtertype ;
      private String Ddo_tiptelnom_Datalisttype ;
      private String Ddo_tiptelnom_Datalistproc ;
      private String Ddo_tiptelnom_Sortasc ;
      private String Ddo_tiptelnom_Sortdsc ;
      private String Ddo_tiptelnom_Loadingdata ;
      private String Ddo_tiptelnom_Cleanfilter ;
      private String Ddo_tiptelnom_Noresultsfound ;
      private String Ddo_tiptelnom_Searchbuttontext ;
      private String Innewwindow1_Width ;
      private String Innewwindow1_Height ;
      private String Innewwindow1_Target ;
      private String Ddo_gridcolumnsselector_Caption ;
      private String Ddo_gridcolumnsselector_Tooltip ;
      private String Ddo_gridcolumnsselector_Cls ;
      private String Ddo_gridcolumnsselector_Dropdownoptionstype ;
      private String Ddo_gridcolumnsselector_Titlecontrolidtoreplace ;
      private String Ddo_gridcolumnsselector_Updatebuttontext ;
      private String GX_FocusControl ;
      private String sPrefix ;
      private String divLayoutmaintable_Internalname ;
      private String divTablemain_Internalname ;
      private String divTableheader_Internalname ;
      private String divTableactions_Internalname ;
      private String TempTags ;
      private String ClassString ;
      private String StyleString ;
      private String bttBtninsert_Internalname ;
      private String bttBtninsert_Jsonclick ;
      private String bttBtnexport_Internalname ;
      private String bttBtnexport_Jsonclick ;
      private String bttBtnexportreport_Internalname ;
      private String bttBtnexportreport_Jsonclick ;
      private String bttBtneditcolumns_Internalname ;
      private String bttBtneditcolumns_Jsonclick ;
      private String divGridtablewithpaginationbar_Internalname ;
      private String sStyleString ;
      private String subGrid_Internalname ;
      private String subGrid_Class ;
      private String subGrid_Linesclass ;
      private String edtTipTelId_Title ;
      private String edtTipTelNom_Title ;
      private String subGrid_Header ;
      private String A3TipTelNom ;
      private String edtTipTelNom_Link ;
      private String Gridpaginationbar_Internalname ;
      private String divHtml_bottomauxiliarcontrols_Internalname ;
      private String Ddo_tiptelid_Internalname ;
      private String edtavDdo_tiptelidtitlecontrolidtoreplace_Internalname ;
      private String Ddo_tiptelnom_Internalname ;
      private String edtavDdo_tiptelnomtitlecontrolidtoreplace_Internalname ;
      private String Workwithplusutilities1_Internalname ;
      private String Innewwindow1_Internalname ;
      private String Ddo_gridcolumnsselector_Internalname ;
      private String edtavOrderedby_Internalname ;
      private String edtavOrderedby_Jsonclick ;
      private String edtavOrdereddsc_Internalname ;
      private String edtavOrdereddsc_Jsonclick ;
      private String edtavManagefiltersexecutionstep_Internalname ;
      private String edtavManagefiltersexecutionstep_Jsonclick ;
      private String edtavTftiptelid_Internalname ;
      private String edtavTftiptelid_Jsonclick ;
      private String edtavTftiptelid_to_Internalname ;
      private String edtavTftiptelid_to_Jsonclick ;
      private String edtavTftiptelnom_Internalname ;
      private String edtavTftiptelnom_Jsonclick ;
      private String edtavTftiptelnom_sel_Internalname ;
      private String edtavTftiptelnom_sel_Jsonclick ;
      private String sEvt ;
      private String EvtGridId ;
      private String EvtRowId ;
      private String sEvtType ;
      private String cmbavGridactions_Internalname ;
      private String edtTipTelId_Internalname ;
      private String edtTipTelNom_Internalname ;
      private String edtavFilterfulltext_Internalname ;
      private String scmdbuf ;
      private String lV48TFTipTelNom ;
      private String Ddo_managefilters_Internalname ;
      private String GXt_char2 ;
      private String tblTablerightheader_Internalname ;
      private String Ddo_managefilters_Caption ;
      private String tblTablefilters_Internalname ;
      private String edtavFilterfulltext_Jsonclick ;
      private String sGXsfl_43_fel_idx="0001" ;
      private String GXCCtl ;
      private String cmbavGridactions_Jsonclick ;
      private String ROClassString ;
      private String edtTipTelId_Jsonclick ;
      private String edtTipTelNom_Jsonclick ;
      private bool entryPointCalled ;
      private bool AV13OrderedDsc ;
      private bool toggleJsOutput ;
      private bool Gridpaginationbar_Showfirst ;
      private bool Gridpaginationbar_Showprevious ;
      private bool Gridpaginationbar_Shownext ;
      private bool Gridpaginationbar_Showlast ;
      private bool Gridpaginationbar_Rowsperpageselector ;
      private bool Ddo_tiptelid_Includesortasc ;
      private bool Ddo_tiptelid_Includesortdsc ;
      private bool Ddo_tiptelid_Includefilter ;
      private bool Ddo_tiptelid_Filterisrange ;
      private bool Ddo_tiptelid_Includedatalist ;
      private bool Ddo_tiptelnom_Includesortasc ;
      private bool Ddo_tiptelnom_Includesortdsc ;
      private bool Ddo_tiptelnom_Includefilter ;
      private bool Ddo_tiptelnom_Filterisrange ;
      private bool Ddo_tiptelnom_Includedatalist ;
      private bool wbLoad ;
      private bool Rfr0gs ;
      private bool wbErr ;
      private bool bGXsfl_43_Refreshing=false ;
      private bool gxdyncontrolsrefreshing ;
      private bool returnInSub ;
      private bool gx_refresh_fired ;
      private String AV18ColumnsSelectorXML ;
      private String AV38ManageFiltersXml ;
      private String AV25UserCustomValue ;
      private String AV15FilterFullText ;
      private String AV46ddo_TipTelIdTitleControlIdToReplace ;
      private String AV50ddo_TipTelNomTitleControlIdToReplace ;
      private String lV15FilterFullText ;
      private String AV16ExcelFilename ;
      private String AV17ErrorMessage ;
      private IGxSession AV36Session ;
      private GXWebGrid GridContainer ;
      private GXWebRow GridRow ;
      private GXWebColumn GridColumn ;
      private GXUserControl ucGridpaginationbar ;
      private GXUserControl ucDdo_tiptelid ;
      private GXUserControl ucDdo_tiptelnom ;
      private GXUserControl ucWorkwithplusutilities1 ;
      private GXUserControl ucInnewwindow1 ;
      private GXUserControl ucDdo_gridcolumnsselector ;
      private GXUserControl ucDdo_managefilters ;
      private IGxDataStore dsDefault ;
      private GXCombobox cmbavGridactions ;
      private IDataStoreProvider pr_default ;
      private String[] H000S2_A3TipTelNom ;
      private int[] H000S2_A1TipTelId ;
      private long[] H000S3_AGRID_nRecordCount ;
      private msglist BackMsgLst ;
      private msglist LclMsgLst ;
      private GxHttpRequest AV7HTTPRequest ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtGridStateCollection_Item> AV39ManageFiltersItems ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item> AV41ManageFiltersData ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item> AV43TipTelIdTitleFilterData ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item> AV47TipTelNomTitleFilterData ;
      private GXWebForm Form ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPContext AV6WWPContext ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPTransactionContext AV8TrnContext ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPGridState AV10GridState ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue AV11GridStateFilterValue ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector AV30ColumnsSelector ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector AV31ColumnsSelectorAux ;
      private GeneXus.Programs.wwpbaseobjects.SdtGridStateCollection_Item AV40ManageFiltersItem ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsData_Item AV42ManageFiltersDataItem ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsTitleSettingsIcons AV51DDO_TitleSettingsIcons ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVB_SDTDropDownOptionsTitleSettingsIcons GXt_SdtDVB_SDTDropDownOptionsTitleSettingsIcons1 ;
   }

   public class wwtipotelefono__default : DataStoreHelperBase, IDataStoreHelper
   {
      protected Object[] conditional_H000S2( IGxContext context ,
                                             String AV15FilterFullText ,
                                             int AV44TFTipTelId ,
                                             int AV45TFTipTelId_To ,
                                             String AV56TFTipTelNom_Sel ,
                                             String AV48TFTipTelNom ,
                                             int A1TipTelId ,
                                             String A3TipTelNom ,
                                             short AV12OrderedBy ,
                                             bool AV13OrderedDsc )
      {
         String sWhereString = "" ;
         String scmdbuf ;
         short[] GXv_int3 ;
         GXv_int3 = new short [9] ;
         Object[] GXv_Object4 ;
         GXv_Object4 = new Object [2] ;
         String sSelectString ;
         String sFromString ;
         String sOrderString ;
         sSelectString = " [TipTelNom], [TipTelId]";
         sFromString = " FROM [TipoTelefono]";
         sOrderString = "";
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV15FilterFullText)) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV15FilterFullText) or ( [TipTelNom] like '%' + @lV15FilterFullText))";
            }
            else
            {
               sWhereString = sWhereString + " (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV15FilterFullText) or ( [TipTelNom] like '%' + @lV15FilterFullText))";
            }
         }
         else
         {
            GXv_int3[0] = 1;
            GXv_int3[1] = 1;
         }
         if ( ! (0==AV44TFTipTelId) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelId] >= @AV44TFTipTelId)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelId] >= @AV44TFTipTelId)";
            }
         }
         else
         {
            GXv_int3[2] = 1;
         }
         if ( ! (0==AV45TFTipTelId_To) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelId] <= @AV45TFTipTelId_To)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelId] <= @AV45TFTipTelId_To)";
            }
         }
         else
         {
            GXv_int3[3] = 1;
         }
         if ( String.IsNullOrEmpty(StringUtil.RTrim( AV56TFTipTelNom_Sel)) && ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV48TFTipTelNom)) ) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelNom] like @lV48TFTipTelNom)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelNom] like @lV48TFTipTelNom)";
            }
         }
         else
         {
            GXv_int3[4] = 1;
         }
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV56TFTipTelNom_Sel)) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelNom] = @AV56TFTipTelNom_Sel)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelNom] = @AV56TFTipTelNom_Sel)";
            }
         }
         else
         {
            GXv_int3[5] = 1;
         }
         if ( StringUtil.StrCmp("", sWhereString) != 0 )
         {
            sWhereString = " WHERE" + sWhereString;
         }
         if ( ( AV12OrderedBy == 1 ) && ! AV13OrderedDsc )
         {
            sOrderString = sOrderString + " ORDER BY [TipTelNom]";
         }
         else if ( ( AV12OrderedBy == 1 ) && ( AV13OrderedDsc ) )
         {
            sOrderString = sOrderString + " ORDER BY [TipTelNom] DESC";
         }
         else if ( ( AV12OrderedBy == 2 ) && ! AV13OrderedDsc )
         {
            sOrderString = sOrderString + " ORDER BY [TipTelId]";
         }
         else if ( ( AV12OrderedBy == 2 ) && ( AV13OrderedDsc ) )
         {
            sOrderString = sOrderString + " ORDER BY [TipTelId] DESC";
         }
         else if ( true )
         {
            sOrderString = sOrderString + " ORDER BY [TipTelId]";
         }
         scmdbuf = "SELECT " + sSelectString + sFromString + sWhereString + sOrderString + "" + " OFFSET " + "@GXPagingFrom2" + " ROWS FETCH NEXT CAST((SELECT CASE WHEN " + "@GXPagingTo2" + " > 0 THEN " + "@GXPagingTo2" + " ELSE 1e9 END) AS INTEGER) ROWS ONLY";
         GXv_Object4[0] = scmdbuf;
         GXv_Object4[1] = GXv_int3;
         return GXv_Object4 ;
      }

      protected Object[] conditional_H000S3( IGxContext context ,
                                             String AV15FilterFullText ,
                                             int AV44TFTipTelId ,
                                             int AV45TFTipTelId_To ,
                                             String AV56TFTipTelNom_Sel ,
                                             String AV48TFTipTelNom ,
                                             int A1TipTelId ,
                                             String A3TipTelNom ,
                                             short AV12OrderedBy ,
                                             bool AV13OrderedDsc )
      {
         String sWhereString = "" ;
         String scmdbuf ;
         short[] GXv_int5 ;
         GXv_int5 = new short [6] ;
         Object[] GXv_Object6 ;
         GXv_Object6 = new Object [2] ;
         scmdbuf = "SELECT COUNT(*) FROM [TipoTelefono]";
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV15FilterFullText)) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV15FilterFullText) or ( [TipTelNom] like '%' + @lV15FilterFullText))";
            }
            else
            {
               sWhereString = sWhereString + " (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV15FilterFullText) or ( [TipTelNom] like '%' + @lV15FilterFullText))";
            }
         }
         else
         {
            GXv_int5[0] = 1;
            GXv_int5[1] = 1;
         }
         if ( ! (0==AV44TFTipTelId) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelId] >= @AV44TFTipTelId)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelId] >= @AV44TFTipTelId)";
            }
         }
         else
         {
            GXv_int5[2] = 1;
         }
         if ( ! (0==AV45TFTipTelId_To) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelId] <= @AV45TFTipTelId_To)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelId] <= @AV45TFTipTelId_To)";
            }
         }
         else
         {
            GXv_int5[3] = 1;
         }
         if ( String.IsNullOrEmpty(StringUtil.RTrim( AV56TFTipTelNom_Sel)) && ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV48TFTipTelNom)) ) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelNom] like @lV48TFTipTelNom)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelNom] like @lV48TFTipTelNom)";
            }
         }
         else
         {
            GXv_int5[4] = 1;
         }
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV56TFTipTelNom_Sel)) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelNom] = @AV56TFTipTelNom_Sel)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelNom] = @AV56TFTipTelNom_Sel)";
            }
         }
         else
         {
            GXv_int5[5] = 1;
         }
         if ( StringUtil.StrCmp("", sWhereString) != 0 )
         {
            scmdbuf = scmdbuf + " WHERE" + sWhereString;
         }
         if ( ( AV12OrderedBy == 1 ) && ! AV13OrderedDsc )
         {
            scmdbuf = scmdbuf + "";
         }
         else if ( ( AV12OrderedBy == 1 ) && ( AV13OrderedDsc ) )
         {
            scmdbuf = scmdbuf + "";
         }
         else if ( ( AV12OrderedBy == 2 ) && ! AV13OrderedDsc )
         {
            scmdbuf = scmdbuf + "";
         }
         else if ( ( AV12OrderedBy == 2 ) && ( AV13OrderedDsc ) )
         {
            scmdbuf = scmdbuf + "";
         }
         else if ( true )
         {
            scmdbuf = scmdbuf + "";
         }
         GXv_Object6[0] = scmdbuf;
         GXv_Object6[1] = GXv_int5;
         return GXv_Object6 ;
      }

      public override Object [] getDynamicStatement( int cursor ,
                                                     IGxContext context ,
                                                     Object [] dynConstraints )
      {
         switch ( cursor )
         {
               case 0 :
                     return conditional_H000S2(context, (String)dynConstraints[0] , (int)dynConstraints[1] , (int)dynConstraints[2] , (String)dynConstraints[3] , (String)dynConstraints[4] , (int)dynConstraints[5] , (String)dynConstraints[6] , (short)dynConstraints[7] , (bool)dynConstraints[8] );
               case 1 :
                     return conditional_H000S3(context, (String)dynConstraints[0] , (int)dynConstraints[1] , (int)dynConstraints[2] , (String)dynConstraints[3] , (String)dynConstraints[4] , (int)dynConstraints[5] , (String)dynConstraints[6] , (short)dynConstraints[7] , (bool)dynConstraints[8] );
         }
         return base.getDynamicStatement(cursor, context, dynConstraints);
      }

      public ICursor[] getCursors( )
      {
         cursorDefinitions();
         return new Cursor[] {
          new ForEachCursor(def[0])
         ,new ForEachCursor(def[1])
       };
    }

    private static CursorDef[] def;
    private void cursorDefinitions( )
    {
       if ( def == null )
       {
          Object[] prmH000S2 ;
          prmH000S2 = new Object[] {
          new Object[] {"@lV15FilterFullText",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@lV15FilterFullText",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@AV44TFTipTelId",SqlDbType.Int,9,0} ,
          new Object[] {"@AV45TFTipTelId_To",SqlDbType.Int,9,0} ,
          new Object[] {"@lV48TFTipTelNom",SqlDbType.NChar,20,0} ,
          new Object[] {"@AV56TFTipTelNom_Sel",SqlDbType.NChar,20,0} ,
          new Object[] {"@GXPagingFrom2",SqlDbType.Int,9,0} ,
          new Object[] {"@GXPagingTo2",SqlDbType.Int,9,0} ,
          new Object[] {"@GXPagingTo2",SqlDbType.Int,9,0}
          } ;
          Object[] prmH000S3 ;
          prmH000S3 = new Object[] {
          new Object[] {"@lV15FilterFullText",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@lV15FilterFullText",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@AV44TFTipTelId",SqlDbType.Int,9,0} ,
          new Object[] {"@AV45TFTipTelId_To",SqlDbType.Int,9,0} ,
          new Object[] {"@lV48TFTipTelNom",SqlDbType.NChar,20,0} ,
          new Object[] {"@AV56TFTipTelNom_Sel",SqlDbType.NChar,20,0}
          } ;
          def= new CursorDef[] {
              new CursorDef("H000S2", "scmdbuf",false, GxErrorMask.GX_NOMASK | GxErrorMask.GX_MASKLOOPLOCK, false, this,prmH000S2,11, GxCacheFrequency.OFF ,true,false )
             ,new CursorDef("H000S3", "scmdbuf",false, GxErrorMask.GX_NOMASK | GxErrorMask.GX_MASKLOOPLOCK, false, this,prmH000S3,1, GxCacheFrequency.OFF ,true,false )
          };
       }
    }

    public void getResults( int cursor ,
                            IFieldGetter rslt ,
                            Object[] buf )
    {
       switch ( cursor )
       {
             case 0 :
                ((String[]) buf[0])[0] = rslt.getString(1, 20) ;
                ((int[]) buf[1])[0] = rslt.getInt(2) ;
                return;
             case 1 :
                ((long[]) buf[0])[0] = rslt.getLong(1) ;
                return;
       }
    }

    public void setParameters( int cursor ,
                               IFieldSetter stmt ,
                               Object[] parms )
    {
       short sIdx ;
       switch ( cursor )
       {
             case 0 :
                sIdx = 0;
                if ( (short)parms[0] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[9]);
                }
                if ( (short)parms[1] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[10]);
                }
                if ( (short)parms[2] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[11]);
                }
                if ( (short)parms[3] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[12]);
                }
                if ( (short)parms[4] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[13]);
                }
                if ( (short)parms[5] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[14]);
                }
                if ( (short)parms[6] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[15]);
                }
                if ( (short)parms[7] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[16]);
                }
                if ( (short)parms[8] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[17]);
                }
                return;
             case 1 :
                sIdx = 0;
                if ( (short)parms[0] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[6]);
                }
                if ( (short)parms[1] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[7]);
                }
                if ( (short)parms[2] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[8]);
                }
                if ( (short)parms[3] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[9]);
                }
                if ( (short)parms[4] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[10]);
                }
                if ( (short)parms[5] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[11]);
                }
                return;
       }
    }

 }

}
