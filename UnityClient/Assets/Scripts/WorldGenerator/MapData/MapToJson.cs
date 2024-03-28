using UnityEngine;
using System.IO;
using System.Collections;
using UnityEngine.Networking;
using System.Collections.Generic;
using System.Text;

namespace Assets.Script
{
	public class MapToJson : MonoBehaviour
	{
		protected static string mapServer = "localhost:1901"; // map 서버 주소

		private MapData mapData;
		private List<ObjectData> objectDatas = new List<ObjectData>();

		private bool SaveSuccess = false;
		private bool LoadSuccess = false;

		// 맵 데이터를 저장하는 메서드
		public IEnumerator SaveMapData((MapData, List<ObjectData>) MapDataTuple)
		{
			SaveSuccess = false;
			mapData = MapDataTuple.Item1;
			objectDatas = MapDataTuple.Item2;

			int MapUpLoadFail = 0;
			while (MapUpLoadFail < 5)
			{
				string metaData = JsonUtility.ToJson(mapData);

				WWWForm form_meta = new WWWForm();
				form_meta.AddField("mapId", mapData.map_id);
				form_meta.AddField("Num", 0);
				form_meta.AddField("json", metaData);

				UnityWebRequest request_meta = UnityWebRequest.Post(mapServer, form_meta);
				yield return request_meta.SendWebRequest();

				if (request_meta.result == UnityWebRequest.Result.Success)
				{
					for (int i = 0; i < objectDatas.Count; i++)
					{
						while (MapUpLoadFail < 5)
						{
							string objectData = JsonUtility.ToJson(objectDatas[i]);

							WWWForm form_object = new WWWForm();
							form_object.AddField("mapId", mapData.map_id);
							form_object.AddField("Num", i+1);
							form_object.AddField("json", objectData);

							UnityWebRequest request_object = UnityWebRequest.Post(mapServer, form_object);
							yield return request_object.SendWebRequest();

							if (request_object.result == UnityWebRequest.Result.Success)
							{
								Debug.Log("MapData Save in Server");
								break;
							}
							else
							{
								MapUpLoadFail++;
							}
						}
					}
					break;
				}
				else
				{
					MapUpLoadFail++;
					Debug.Log("Save Fail" + request_meta.result);
				}
			}

			if (MapUpLoadFail < 5) { SaveSuccess =  true; }
			else { SaveSuccess = false; }
		}

		// 맵 데이터를 불러오는 메서드
		public IEnumerator LoadMapData()
		{
			LoadSuccess = false;
			objectDatas = new List<ObjectData>();
			int MapDownFail = 0;
			while (MapDownFail < 5)
			{
				string command = string.Format("/asset/map?map_id={0}&ast_id={1}", 0, 0);
				Debug.Log(command);
				UnityWebRequest request_meta = UnityWebRequest.Get(mapServer + command); // 맵 에코 서버 연결
				yield return request_meta.SendWebRequest();

				// 웹 서버와 연결 성공하면 메타 데이터 다운
				if (request_meta.result == UnityWebRequest.Result.Success)
				{
					string metaData = Encoding.UTF8.GetString(request_meta.downloadHandler.data);
					mapData = JsonUtility.FromJson<MapData>(metaData);

					for (int i = 0; i < mapData.objCount; i += 15)
					{
						while (MapDownFail < 5)
						{
							command = string.Format("/asset/map?map_id={0}&ast_id={1}", 0, i / 15 + 1);
							Debug.Log(command);
							UnityWebRequest request_objects = UnityWebRequest.Get(mapServer + command); // 맵 에코 서버 연결
							yield return request_objects.SendWebRequest();

							// 웹 서버와 연결 성공하면 오브젝트 데이터 다운
							if (request_objects.result == UnityWebRequest.Result.Success)
							{
								string objectData = Encoding.UTF8.GetString(request_objects.downloadHandler.data);
								objectDatas.Add(JsonUtility.FromJson<ObjectData>(objectData));
								Debug.Log("MapData Load from Server");
								break;
							}
							else
							{
								MapDownFail++;
							}
						}
					}
					break;
				}
				else
				{
					MapDownFail++;
				}
			}

			if (MapDownFail < 5)
			{
				int objectCount = 0;
				for (int i = 0; i < objectDatas.Count; i++)
				{
					objectCount += objectDatas[i].objects.Count;
				}
				if (mapData.objCount == objectCount) { LoadSuccess = true; }
				else { LoadSuccess = false; }
			}
			else { LoadSuccess = false; }

			yield break;
		}

		public (MapData, List<ObjectData>) GetMapData()
		{
			return (mapData, objectDatas);
		}

		public bool GetSaveSuccess()
		{
			return SaveSuccess;
		}

		public bool GetLoadSuccess()
		{
			return LoadSuccess;
		}
	}
}
