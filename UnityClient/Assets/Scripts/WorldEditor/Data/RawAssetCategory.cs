using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using static UnityEditor.Rendering.FilterWindow;

namespace WorldEditor
{
	[Serializable]
	public class RawAssetCategoryBase<T> where T : RawAssetCategoryBase<T>
	{
		public int id;
		public string categoryCode;
		public string categoryName;
		public T[] child;
	}

	[Serializable]
	public class RawAssetCategory : RawAssetCategoryBase<RawAssetCategory>
	{
		public string GetCategoryNameTree(int depth = 0)
		{
			string message = String.Join("", Enumerable.Repeat(" ", depth).ToArray()) + categoryCode;
			if(child != null && child.Length> 0) { message += GetCategoryNameTree(depth + 1); }

			return message;
		}
	}
}
