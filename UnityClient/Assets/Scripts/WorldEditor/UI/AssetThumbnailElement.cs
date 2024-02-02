using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace WorldEditor
{
	public class AssetThumbnailElement : MonoBehaviour
	{
		[SerializeField] private RawImage thumbnailImage;
		[SerializeField] private TMP_Text thumbnailText;

		private AssetItem _asset;
		public AssetItem Asset
		{
			get { return _asset; }
		}

		// Start is called before the first frame update
		void Start()
		{

		}

		public void SetAsset(AssetItem assetItem)
		{
			_asset = assetItem;
			thumbnailText.text = assetItem.name;
			if (assetItem.thumbnail != null) thumbnailImage.texture = assetItem.thumbnail;
		}

		public void SetActive(bool isActive)
		{
			gameObject.SetActive(isActive);
		}

		public bool IsActive
		{
			get { return gameObject.activeSelf == this; }
		}
	}
}
