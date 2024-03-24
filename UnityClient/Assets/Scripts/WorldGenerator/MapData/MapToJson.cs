using UnityEngine;
using System.IO;

namespace Assets.Script
{
	public class MapToJson : MonoBehaviour
	{
		// 맵 데이터를 저장할 파일 경로
		private string mapDataFilePath = "Assets/Resources/WorldGenerator/mapData.json";

		// 맵 데이터를 저장하는 메서드
		public void SaveMapData(MapDataJson mapData)
		{

			// 맵 데이터를 JSON 문자열로 변환
			string jsonData = JsonUtility.ToJson(mapData);

			// JSON 데이터를 파일로 저장
			File.WriteAllText(mapDataFilePath, jsonData);
		}

		// 맵 데이터를 불러오는 메서드
		public MapDataJson LoadMapData()
		{
			// 파일에서 JSON 데이터를 읽어옴
			string jsonData = File.ReadAllText(mapDataFilePath);

			// JSON 데이터를 MapData 객체로 역직렬화
			MapDataJson mapData = JsonUtility.FromJson<MapDataJson>(jsonData);

			return mapData;
		}
	}
}
