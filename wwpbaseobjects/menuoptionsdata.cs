/*
               File: WWPBaseObjects.MenuOptionsData
        Description: Menu Options Data
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/30/2019 19:1:54.4
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
using com.genexus;
using GeneXus.Data.ADO;
using GeneXus.Data.NTier;
using GeneXus.Data.NTier.ADO;
using GeneXus.WebControls;
using GeneXus.Http;
using GeneXus.Procedure;
using GeneXus.XML;
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Threading;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs.wwpbaseobjects {
   public class menuoptionsdata : GXProcedure
   {
      public menuoptionsdata( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public menuoptionsdata( IGxContext context )
      {
         this.context = context;
         IsMain = false;
      }

      public void release( )
      {
      }

      public void execute( out GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP0_Gxm2rootcol )
      {
         this.Gxm2rootcol = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "MaxiPrueba") ;
         initialize();
         executePrivate();
         aP0_Gxm2rootcol=this.Gxm2rootcol;
      }

      public GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> executeUdp( )
      {
         this.Gxm2rootcol = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "MaxiPrueba") ;
         initialize();
         executePrivate();
         aP0_Gxm2rootcol=this.Gxm2rootcol;
         return Gxm2rootcol ;
      }

      public void executeSubmit( out GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP0_Gxm2rootcol )
      {
         menuoptionsdata objmenuoptionsdata;
         objmenuoptionsdata = new menuoptionsdata();
         objmenuoptionsdata.Gxm2rootcol = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item>( context, "Item", "MaxiPrueba") ;
         objmenuoptionsdata.context.SetSubmitInitialConfig(context);
         objmenuoptionsdata.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objmenuoptionsdata);
         aP0_Gxm2rootcol=this.Gxm2rootcol;
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((menuoptionsdata)stateInfo).executePrivate();
         }
         catch ( Exception e )
         {
            GXUtil.SaveToEventLog( "Design", e);
            throw e ;
         }
      }

      void executePrivate( )
      {
         /* GeneXus formulas */
         /* Output device settings */
         AV5id = 0;
         Gxm1dvelop_menu = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm2rootcol.Add(Gxm1dvelop_menu, 0);
         AV5id = (short)(AV5id+1);
         Gxm1dvelop_menu.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm1dvelop_menu.gxTpr_Tooltip = "";
         Gxm1dvelop_menu.gxTpr_Linktarget = "";
         Gxm1dvelop_menu.gxTpr_Caption = "Main Options";
         Gxm3dvelop_menu_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm1dvelop_menu.gxTpr_Subitems.Add(Gxm3dvelop_menu_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm3dvelop_menu_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm3dvelop_menu_subitems.gxTpr_Tooltip = "";
         Gxm3dvelop_menu_subitems.gxTpr_Link = "wwpbaseobjects.home.aspx";
         Gxm3dvelop_menu_subitems.gxTpr_Linktarget = "";
         Gxm3dvelop_menu_subitems.gxTpr_Iconclass = "menu-icon fa fa-home";
         Gxm3dvelop_menu_subitems.gxTpr_Caption = "Inicio";
         Gxm3dvelop_menu_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm1dvelop_menu.gxTpr_Subitems.Add(Gxm3dvelop_menu_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm3dvelop_menu_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm3dvelop_menu_subitems.gxTpr_Tooltip = "";
         Gxm3dvelop_menu_subitems.gxTpr_Link = "";
         Gxm3dvelop_menu_subitems.gxTpr_Linktarget = "";
         Gxm3dvelop_menu_subitems.gxTpr_Iconclass = "menu-icon fa fa-tasks";
         Gxm3dvelop_menu_subitems.gxTpr_Caption = "Opción de Menú 1";
         Gxm4dvelop_menu_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm3dvelop_menu_subitems.gxTpr_Subitems.Add(Gxm4dvelop_menu_subitems_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Tooltip = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Link = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Linktarget = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Caption = "Opción de Menú 1.1";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Authorizationkey = "";
         Gxm4dvelop_menu_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm3dvelop_menu_subitems.gxTpr_Subitems.Add(Gxm4dvelop_menu_subitems_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Tooltip = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Link = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Linktarget = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Caption = "Opción de Menú 1.2";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Authorizationkey = "";
         Gxm4dvelop_menu_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm3dvelop_menu_subitems.gxTpr_Subitems.Add(Gxm4dvelop_menu_subitems_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Tooltip = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Link = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Linktarget = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Caption = "Opción de Menú 1.3";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Authorizationkey = "";
         Gxm3dvelop_menu_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm1dvelop_menu.gxTpr_Subitems.Add(Gxm3dvelop_menu_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm3dvelop_menu_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm3dvelop_menu_subitems.gxTpr_Tooltip = "";
         Gxm3dvelop_menu_subitems.gxTpr_Link = "";
         Gxm3dvelop_menu_subitems.gxTpr_Linktarget = "";
         Gxm3dvelop_menu_subitems.gxTpr_Iconclass = "menu-icon fa fa-key";
         Gxm3dvelop_menu_subitems.gxTpr_Caption = "Opción de Menú 2";
         Gxm4dvelop_menu_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm3dvelop_menu_subitems.gxTpr_Subitems.Add(Gxm4dvelop_menu_subitems_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Tooltip = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Link = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Linktarget = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Iconclass = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Caption = "Opción de Menú 2.1";
         Gxm5dvelop_menu_subitems_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Subitems.Add(Gxm5dvelop_menu_subitems_subitems_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Tooltip = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Link = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Linktarget = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Caption = "Opción de Menú 2.1.1";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Authorizationkey = "";
         Gxm5dvelop_menu_subitems_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Subitems.Add(Gxm5dvelop_menu_subitems_subitems_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Tooltip = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Link = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Linktarget = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Caption = "Opción de Menú 2.1.2";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Authorizationkey = "";
         Gxm5dvelop_menu_subitems_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Subitems.Add(Gxm5dvelop_menu_subitems_subitems_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Tooltip = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Link = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Linktarget = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Caption = "Opción de Menú 2.1.3";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Authorizationkey = "";
         Gxm4dvelop_menu_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm3dvelop_menu_subitems.gxTpr_Subitems.Add(Gxm4dvelop_menu_subitems_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Tooltip = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Link = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Linktarget = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Iconclass = "";
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Caption = "Opción de Menú 2.2";
         Gxm5dvelop_menu_subitems_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm4dvelop_menu_subitems_subitems.gxTpr_Subitems.Add(Gxm5dvelop_menu_subitems_subitems_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Tooltip = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Link = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Linktarget = "";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Caption = "Opción de Menú 2.2.1";
         Gxm5dvelop_menu_subitems_subitems_subitems.gxTpr_Authorizationkey = "";
         Gxm3dvelop_menu_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm1dvelop_menu.gxTpr_Subitems.Add(Gxm3dvelop_menu_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm3dvelop_menu_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm3dvelop_menu_subitems.gxTpr_Tooltip = "";
         Gxm3dvelop_menu_subitems.gxTpr_Link = "";
         Gxm3dvelop_menu_subitems.gxTpr_Linktarget = "";
         Gxm3dvelop_menu_subitems.gxTpr_Iconclass = "menu-icon fa fa-briefcase";
         Gxm3dvelop_menu_subitems.gxTpr_Caption = "Opción de Menú 3";
         Gxm3dvelop_menu_subitems.gxTpr_Authorizationkey = "";
         Gxm1dvelop_menu = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm2rootcol.Add(Gxm1dvelop_menu, 0);
         AV5id = (short)(AV5id+1);
         Gxm1dvelop_menu.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm1dvelop_menu.gxTpr_Tooltip = "";
         Gxm1dvelop_menu.gxTpr_Linktarget = "";
         Gxm1dvelop_menu.gxTpr_Caption = "Other Options";
         Gxm3dvelop_menu_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm1dvelop_menu.gxTpr_Subitems.Add(Gxm3dvelop_menu_subitems, 0);
         AV5id = (short)(AV5id+1);
         Gxm3dvelop_menu_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
         Gxm3dvelop_menu_subitems.gxTpr_Tooltip = "";
         Gxm3dvelop_menu_subitems.gxTpr_Link = "";
         Gxm3dvelop_menu_subitems.gxTpr_Linktarget = "";
         Gxm3dvelop_menu_subitems.gxTpr_Iconclass = "menu-icon fa fa-edit";
         Gxm3dvelop_menu_subitems.gxTpr_Caption = "Menú de Desarrollo";
         Gxv6skipcount = 0;
         AV16GXV2 = 1;
         GXt_objcol_SdtProgramNames_ProgramName1 = AV15GXV1;
         new GeneXus.Programs.wwpbaseobjects.listwwpprograms(context ).execute( out  GXt_objcol_SdtProgramNames_ProgramName1) ;
         AV15GXV1 = GXt_objcol_SdtProgramNames_ProgramName1;
         while ( AV16GXV2 <= AV15GXV1.Count )
         {
            AV6ProgramName = ((GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName)AV15GXV1.Item(AV16GXV2));
            Gxv6skipcount = (int)(Gxv6skipcount+1);
            Gxm4dvelop_menu_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
            Gxm3dvelop_menu_subitems.gxTpr_Subitems.Add(Gxm4dvelop_menu_subitems_subitems, 0);
            AV5id = (short)(AV5id+1);
            Gxm4dvelop_menu_subitems_subitems.gxTpr_Id = StringUtil.Str( (decimal)(AV5id), 4, 0);
            Gxm4dvelop_menu_subitems_subitems.gxTpr_Tooltip = "";
            Gxm4dvelop_menu_subitems_subitems.gxTpr_Link = AV6ProgramName.gxTpr_Link;
            Gxm4dvelop_menu_subitems_subitems.gxTpr_Linktarget = "";
            Gxm4dvelop_menu_subitems_subitems.gxTpr_Iconclass = "";
            Gxm4dvelop_menu_subitems_subitems.gxTpr_Caption = AV6ProgramName.gxTpr_Description;
            if ( ( 20 != 0 ) && ( Gxv6skipcount >= 20 ) )
            {
               /* Exit For each command. Update data (if necessary), close cursors & exit. */
               if (true) break;
            }
            AV16GXV2 = (int)(AV16GXV2+1);
         }
         this.cleanup();
      }

      public override void cleanup( )
      {
         CloseOpenCursors();
         if ( IsMain )
         {
            context.CloseConnections() ;
         }
         exitApplication();
      }

      protected void CloseOpenCursors( )
      {
      }

      public override void initialize( )
      {
         Gxm1dvelop_menu = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm3dvelop_menu_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm4dvelop_menu_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         Gxm5dvelop_menu_subitems_subitems_subitems = new GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item(context);
         AV15GXV1 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName>( context, "ProgramName", "MaxiPrueba");
         GXt_objcol_SdtProgramNames_ProgramName1 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName>( context, "ProgramName", "MaxiPrueba");
         AV6ProgramName = new GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName(context);
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private short AV5id ;
      private int Gxv6skipcount ;
      private int AV16GXV2 ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> aP0_Gxm2rootcol ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName> AV15GXV1 ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName> GXt_objcol_SdtProgramNames_ProgramName1 ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item> Gxm2rootcol ;
      private GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName AV6ProgramName ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item Gxm1dvelop_menu ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item Gxm3dvelop_menu_subitems ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item Gxm4dvelop_menu_subitems_subitems ;
      private GeneXus.Programs.wwpbaseobjects.SdtDVelop_Menu_Item Gxm5dvelop_menu_subitems_subitems_subitems ;
   }

}
