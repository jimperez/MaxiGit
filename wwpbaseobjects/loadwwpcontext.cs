/*
               File: WWPBaseObjects.LoadWWPContext
        Description: Load Work With Plus Context
             Author: GeneXus C# Generator version 16_0_6-136889
       Generated on: 11/1/2019 15:36:51.67
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
   public class loadwwpcontext : GXProcedure
   {
      public loadwwpcontext( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public loadwwpcontext( IGxContext context )
      {
         this.context = context;
         IsMain = false;
      }

      public void release( )
      {
      }

      public void execute( out GeneXus.Programs.wwpbaseobjects.SdtWWPContext aP0_WWPContext )
      {
         this.AV10WWPContext = new GeneXus.Programs.wwpbaseobjects.SdtWWPContext(context) ;
         initialize();
         executePrivate();
         aP0_WWPContext=this.AV10WWPContext;
      }

      public GeneXus.Programs.wwpbaseobjects.SdtWWPContext executeUdp( )
      {
         this.AV10WWPContext = new GeneXus.Programs.wwpbaseobjects.SdtWWPContext(context) ;
         initialize();
         executePrivate();
         aP0_WWPContext=this.AV10WWPContext;
         return AV10WWPContext ;
      }

      public void executeSubmit( out GeneXus.Programs.wwpbaseobjects.SdtWWPContext aP0_WWPContext )
      {
         loadwwpcontext objloadwwpcontext;
         objloadwwpcontext = new loadwwpcontext();
         objloadwwpcontext.AV10WWPContext = new GeneXus.Programs.wwpbaseobjects.SdtWWPContext(context) ;
         objloadwwpcontext.context.SetSubmitInitialConfig(context);
         objloadwwpcontext.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objloadwwpcontext);
         aP0_WWPContext=this.AV10WWPContext;
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((loadwwpcontext)stateInfo).executePrivate();
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
         AV10WWPContext.FromXml(AV9Session.Get("wwpcontext"), null, "WWPContext", "SIGMA");
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
         AV9Session = context.GetSession();
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private IGxSession AV9Session ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPContext aP0_WWPContext ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPContext AV10WWPContext ;
   }

}
