using UnityEngine;

namespace WorldEditor
{
	public class AssetSelectorWindow : MonoBehaviour
	{

		public readonly AssetCategoryDropBoxContainer dropBoxContainer;

		// Start is called before the first frame update
		void Start()
		{

		}

		// Update is called once per frame
		void Update()
		{

		}

		//////////// юс╫ц

		public TextAsset textAsset;

		public void RequireCategoryList()
		{
			RawAssetCategory[] raw = JsonUtility.FromJson<RawAssetCategory[]>(textAsset.text);

			for(int i = 0;i<raw.Length; i++)
			{
				
			}
		}
	}
}

