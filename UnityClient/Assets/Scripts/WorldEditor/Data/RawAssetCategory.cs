using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace WorldEditor
{
	[Serializable]
	public class RawAssetCategory
	{
		public int id;
		public string categoryName;
		public string categoryCode;
		public RawAssetCategory[] child;
	}
}
