using System.Collections;
using Unity.VisualScripting;
using UnityEngine;

namespace Assets.Scripts.Clean
{
	public class AssetObject : MonoBehaviour
	{
		public int obj_id = 0;
		public int ast_id = 0;


		public void MakeObjectSolid()
		{
			foreach (var item in gameObject.GetComponentsInChildren<MeshFilter>())
			{
				var col = item.AddComponent<MeshCollider>();
				col.sharedMesh = item.sharedMesh;

				item.AddComponent<AssetCollider>().SetTargetAssetObject(this);
	
			}
		}
	}

}