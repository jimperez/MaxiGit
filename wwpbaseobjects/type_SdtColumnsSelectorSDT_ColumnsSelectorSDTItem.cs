/*
				   File: type_SdtColumnsSelectorSDT_ColumnsSelectorSDTItem
			Description: ColumnsSelectorSDT
				 Author: Nemo 🐠 for C# version 16.0.5.135614
		   Program type: Callable routine
			  Main DBMS: 
*/
using System;
using System.Collections;
using GeneXus.Utils;
using GeneXus.Resources;
using GeneXus.Application;
using GeneXus.Metadata;
using GeneXus.Cryptography;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using GeneXus.Http.Server;
using System.Reflection;
using System.Xml.Serialization;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Web.Services.Protocols;

using GeneXus.Programs;
namespace GeneXus.Programs.wwpbaseobjects
{
	[XmlSerializerFormat]
	[XmlRoot(ElementName="ColumnsSelectorSDTItem")]
	[XmlType(TypeName="ColumnsSelectorSDTItem" , Namespace="SIGMA" )]
	[Serializable]
	public class SdtColumnsSelectorSDT_ColumnsSelectorSDTItem : GxUserType
	{
		public SdtColumnsSelectorSDT_ColumnsSelectorSDTItem( )
		{
			/* Constructor for serialization */
			gxTv_SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_Columnname = "";

		}

		public SdtColumnsSelectorSDT_ColumnsSelectorSDTItem(IGxContext context)
		{
			this.context = context;
			initialize();
		}

		#region Json
		private static Hashtable mapper;
		public override String JsonMap(String value)
		{
			if (mapper == null)
			{
				mapper = new Hashtable();
			}
			return (String)mapper[value]; ;
		}

		public override void ToJSON()
		{
			ToJSON(true) ;
			return;
		}

		public override void ToJSON(bool includeState)
		{
			AddObjectProperty("Visible", gxTpr_Visible, false);


			AddObjectProperty("ColumnName", gxTpr_Columnname, false);

			return;
		}
		#endregion

		#region Properties

		[SoapElement(ElementName="Visible")]
		[XmlElement(ElementName="Visible")]
		public bool gxTpr_Visible
		{
			get { 
				return gxTv_SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_Visible; 
			}
			set { 
				gxTv_SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_Visible = value;
				SetDirty("Visible");
			}
		}




		[SoapElement(ElementName="ColumnName")]
		[XmlElement(ElementName="ColumnName")]
		public String gxTpr_Columnname
		{
			get { 
				return gxTv_SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_Columnname; 
			}
			set { 
				gxTv_SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_Columnname = value;
				SetDirty("Columnname");
			}
		}




		#endregion

		#region Initialization

		public void initialize( )
		{
			gxTv_SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_Columnname = "";
			return  ;
		}



		#endregion

		#region Declaration

		protected bool gxTv_SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_Visible;
		 

		protected String gxTv_SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_Columnname;
		 


		#endregion
	}
	#region Rest interface
	[DataContract(Name=@"ColumnsSelectorSDTItem", Namespace="SIGMA")]
	public class SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_RESTInterface : GxGenericCollectionItem<SdtColumnsSelectorSDT_ColumnsSelectorSDTItem>, System.Web.SessionState.IRequiresSessionState
	{
		public SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_RESTInterface( ) : base()
		{
		}

		public SdtColumnsSelectorSDT_ColumnsSelectorSDTItem_RESTInterface( SdtColumnsSelectorSDT_ColumnsSelectorSDTItem psdt ) : base(psdt)
		{
		}

		#region Rest Properties
		[DataMember(Name="Visible", Order=0)]
		public bool gxTpr_Visible
		{
			get { 
				return sdt.gxTpr_Visible;

			}
			set { 
				sdt.gxTpr_Visible = value;
			}
		}

		[DataMember(Name="ColumnName", Order=1)]
		public  String gxTpr_Columnname
		{
			get { 
				return sdt.gxTpr_Columnname;

			}
			set { 
				 sdt.gxTpr_Columnname = value;
			}
		}


		#endregion

		public SdtColumnsSelectorSDT_ColumnsSelectorSDTItem sdt
		{
			get { 
				return (SdtColumnsSelectorSDT_ColumnsSelectorSDTItem)Sdt;
			}
			set { 
				Sdt = value;
			}
		}

		[OnDeserializing]
		void checkSdt( StreamingContext ctx )
		{
			if ( sdt == null )
			{
				sdt = new SdtColumnsSelectorSDT_ColumnsSelectorSDTItem() ;
			}
		}
	}
	#endregion
}