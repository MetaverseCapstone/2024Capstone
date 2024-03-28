using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

namespace Assets.Scripts.Clean
{
	public class AssetCollider : MonoBehaviour
	{
		AssetObject targetAssetObject;

		public void SetTargetAssetObject(AssetObject targetAssetObject)
		{
			this.targetAssetObject = targetAssetObject;
		}

		public AssetObject TargetAssetObject { get { return targetAssetObject; } }
	}
}

