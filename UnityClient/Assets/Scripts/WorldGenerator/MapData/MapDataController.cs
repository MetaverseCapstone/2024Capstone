using UnityEngine;
using System.Collections.Generic;
using Assets.Script;
using Assets.Scripts.Clean;
using System.Collections;
using System.Linq;
using System;
using Assets.Scripts.Routine;

public class MapDataController : MonoBehaviour
{
	private Gltf_Routine_Manager AssetRoutineManager;
	private MapToJson mapToJson;
	public GameObject main; // 메인 오브젝트를 저장할 변수

	private void Start()
	{
		main = GameObject.FindWithTag("Player"); // "Player" 태그를 가진 오브젝트를 찾아 main 변수에 할당
		mapToJson = main.AddComponent<MapToJson>(); // MapToJson 컴포넌트를 가져옴
		AssetRoutineManager = main.GetComponent<Gltf_Routine_Manager>(); // Gltf_Routine_Manager 컴포넌트를 가져옴
	}

	private void Update()
	{
		if (Input.GetKeyDown(KeyCode.N))
		{
			MapSave(); // 맵 저장
		}
		else if (Input.GetKeyDown(KeyCode.M))
		{
			AssetRoutineManager.RoutineInit(); // 에셋 Routine의 모든 작업을 취소
			MapLoad(); // 맵 불러오기
		}

		// 카메라를 메인 오브젝트의 자식으로 설정
		Camera.main.transform.parent = main.transform;
	}

	// 맵을 저장하는 메서드
	public void MapSave()
	{
		// 맵 데이터 생성
		MapDataJson mapData = new MapDataJson();

		MapJsonFormat(mapData);
		ObjectJsonFormat(mapData.objects);

		// 맵 데이터 저장
		mapToJson.SaveMapData(mapData);

		Debug.Log("MapSave");
	}

	// 맵 데이터의 다양한 속성을 설정하는 메서드
	public void MapJsonFormat(MapDataJson mapData)
	{
		mapData.map_id = 0;
		mapData.mapName = "ExampleMap";
		mapData.mapSize.horizontal = 1;
		mapData.mapSize.vertical = 1;
		mapData.mapSize.height = 1;
		mapData.Tags.Add("sample");
	}

	// 모든 오브젝트의 정보를 Json 포맷에 맞추어 저장하는 메서드
	public void ObjectJsonFormat(List<MapObject> ObjList)
	{
		foreach (GameObject obj in FindObjectsOfType<GameObject>())
		{
			if (obj.CompareTag("Object"))
			{
				MapObject Object = new MapObject();
				AssetObject asset = obj.GetComponent<AssetObject>();
				if (asset != null)
				{
					Object.obj_id = asset.obj_id;
					Object.ast_id = asset.ast_id;
				}

				Object.transform.position = new Position { x = obj.transform.position.x, y = obj.transform.position.y, z = obj.transform.position.z };
				Object.transform.rotation = new Rotation { x = obj.transform.eulerAngles.x, y = obj.transform.eulerAngles.y, z = obj.transform.eulerAngles.z };
				Object.transform.scale = new Scale { x = obj.transform.localScale.x, y = obj.transform.localScale.y, z = obj.transform.localScale.z };

				Object.type = obj.tag;
				if (obj.GetComponent<Rigidbody>() != null) Object.rigidbody = true;
				if (obj.GetComponent<MeshCollider>() != null) Object.meshcollider = true;
				ObjList.Add(Object);
			}
		}
		if (ObjList.Count == 0) // 맵에 오브젝트가 하나도 존재하지 않은 경우
		{
			MapObject mapObject = new MapObject(); // Null 오브젝트 추가
			mapObject.type = "Null";
			ObjList.Add(mapObject);
		}
	}

	// 저장된 맵을 불러오는 메서드
	public void MapLoad()
	{
		main.GetComponent<Rigidbody>().useGravity = false; // 메인 오브젝트(Character)의 중력을 해제

		DestroyAllGameObjects(); // 모든 게임 오브젝트를 파괴

		MapDataJson loadedMapData = mapToJson.LoadMapData(); // 저장된 맵 데이터 불러오기

		StartCoroutine(ObjectLoad(loadedMapData)); // 오브젝트 로드

		main.transform.position = Vector3.zero; // 메인 오브젝트 위치를 초기화
												// 다른 스크립트에서 오브젝트의 위치 데이터에 영향을 주고 있어 적용이 되지 않아 수정 예정
		Debug.Log("MapLoad");
		main.GetComponent<Rigidbody>().useGravity = true; // 메인 오브젝트의 중력을 활성화
	}

	// 저장된 오브젝트를 로드하는 메서드
	public IEnumerator ObjectLoad(MapDataJson loadedMapData)
	{
		loadedMapData.objects.Sort((MapObject a, MapObject b) => { return a.ast_id.CompareTo(b.ast_id); });

		var unipue_ast_id = new List<MapObject>(loadedMapData.objects)
			.GroupBy(obj => obj.ast_id)
			.Select(group => group.First().ast_id)
			.ToList();
		//gltf_manager.DownGltfModel(unipue_ast_id);

		// 불러온 맵 데이터를 기반으로 게임 오브젝트 생성
		foreach (MapObject mapObject in loadedMapData.objects)
		{
			if (mapObject.type == "Null") // Null 키워드는 오브젝트가 하나도 존재하지 않음을 뜻함
			{
				continue;
			}
			GameObject objectInstance = new GameObject(); // 오브젝트 생성
			objectInstance.transform.position = new Vector3(mapObject.transform.position.x, mapObject.transform.position.y, mapObject.transform.position.z);
			objectInstance.transform.eulerAngles = new Vector3(mapObject.transform.rotation.x, mapObject.transform.rotation.y, mapObject.transform.rotation.z);
			objectInstance.transform.localScale = new Vector3(mapObject.transform.scale.x, mapObject.transform.scale.y, mapObject.transform.scale.z);

			objectInstance.tag = mapObject.type;

			AssetObject asset = objectInstance.AddComponent<AssetObject>();
			if (asset != null)
			{
				asset.obj_id = mapObject.obj_id;
				asset.ast_id = mapObject.ast_id;
			}

			if (mapObject.meshcollider) // 불러온 오브젝트의 메시 콜라이더 유무 판단
			{
				MeshCollider collider = objectInstance.AddComponent<MeshCollider>(); // 메시 콜라이더 추가
				if (collider != null)
					collider.convex = true;
			}

			if (mapObject.rigidbody) // 불러온 오브젝트의 Rigidbody 유무 판단
			{
				Rigidbody rb = objectInstance.AddComponent<Rigidbody>(); // Rigidbody 추가
				if (rb != null)
					rb.mass = 1.0f;
			}

			objectInstance.SetActive(true);

			AssetRoutineManager.LoadTaskInsert(new LoadTask("test_user_id", mapObject.ast_id, objectInstance)); // 에셋 Routine에 Task 부여
			yield return null;
		}
	}

	// 플레이어, 메인 카메라, 조명을 제외한 모든 게임 오브젝트를 파괴하는 메서드
	private void DestroyAllGameObjects()
	{
		GameObject[] gameObjects = FindObjectsOfType<GameObject>(); // 모든 게임 오브젝트를 찾음

		foreach (GameObject gameObject in gameObjects)
		{
			if (gameObject.CompareTag("Object"))
			{
				Destroy(gameObject);
			}
		}
	}
}
