using UnityEngine;
using UnityEngine.UI;

namespace WorldEditor
{
	public class AssetItemCursor : MonoBehaviour
	{
		[SerializeField] RawImage thumbnail;

		AssetItem assetItem;

		public AssetItem AssetItem {  get { return assetItem; } }
		// Start is called before the first frame update
		void Start()
		{

		}

		// Update is called once per frame
		void Update()
		{

		}

		public bool isActive { get { return gameObject.activeSelf; } }
		public void SetActive(bool active) { gameObject.SetActive(active); }

		public void SetAsset(AssetItem item)
		{
			assetItem = item;
			thumbnail.texture = item.thumbnail;
		}

		public void SetCusorPosition(Vector3 position)
		{
			transform.position = position;
		}

		public AssetItem PopAssetItem()
		{
			var result = assetItem;
			assetItem = null;
			return result;
		}
	}
}

