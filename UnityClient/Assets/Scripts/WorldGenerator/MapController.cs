using UnityEngine;
using System.Collections.Generic;
using Assets.Script;

public class MapController : MonoBehaviour
{
	private MapDataManager mapDataManager;
	public GameObject objectPrefab; // 프리팹을 저장할 변수
	public GameObject main; // 메인 오브젝트를 저장할 변수

	private void Start()
	{
		mapDataManager = GetComponent<MapDataManager>(); // MapDataManager 컴포넌트를 가져옴
		main = GameObject.FindWithTag("Player"); // "Player" 태그를 가진 오브젝트를 찾아 main 변수에 할당
	}

	private void Update()
	{
		if (Input.GetKeyDown(KeyCode.N))
		{
			mapSave(); // 맵 저장 메서드 호출
		}
		else if (Input.GetKeyDown(KeyCode.M))
		{
			mapLoad(); // 맵 불러오기 메서드 호출
		}

		// 카메라를 메인 오브젝트의 자식으로 설정
		Camera.main.transform.parent = main.transform;
	}

	// 맵을 저장하는 메서드
	public void mapSave()
	{
		// 예시 맵 데이터 생성
		MapData mapData = new MapData();
		mapData.mapName = "ExampleMap";
		// 맵 데이터의 다양한 속성 설정...
		mapData.mapCTime = new Time();
		mapData.mapSize = new MapSize();
		mapData.mapSize.width = 1;
		mapData.mapSize.height = 1;
		mapData.Tags = new List<string>();
		mapData.Tags.Add("sample");
		mapData.objects = new List<MapObject>();

		// 맵에 모든 오브젝트의 정보를 mapData에 저장
		int i = 0;
		foreach (GameObject obj in FindObjectsOfType<GameObject>())
		{
			if (!obj.CompareTag("Player") && !obj.CompareTag("MainCamera") && !obj.CompareTag("Light"))
			{
				MapObject exampleObject = new MapObject();
				exampleObject.obj_id = i++;
				exampleObject.ast_id = 1;
				exampleObject.position = new Position { x = obj.transform.position.x, y = obj.transform.position.y, z = obj.transform.position.z };
				exampleObject.rotation = new Rotation { x = obj.transform.eulerAngles.x, y = obj.transform.eulerAngles.y, z = obj.transform.eulerAngles.z };
				exampleObject.scale = new Scale { x = obj.transform.localScale.x, y = obj.transform.localScale.y, z = obj.transform.localScale.z };
				exampleObject.type = "exampleType";
				// 오브젝트의 태그가 Tile(바닥)이면 타입을 tile로 변경해서 저장
				if (obj.CompareTag("Tile"))
					exampleObject.type = "tile";
				mapData.objects.Add(exampleObject);
			}
		}

		// 맵 데이터 저장
		mapDataManager.SaveMapData(mapData);

		Debug.Log("MapSave");
	}

	// 저장된 맵을 불러오는 메서드
	public void mapLoad()
	{
		main.GetComponent<Rigidbody>().useGravity = false; // 메인 오브젝트(Character)의 중력을 해제

		DestroyAllGameObjects(); // 모든 게임 오브젝트를 파괴

		MapData loadedMapData = mapDataManager.LoadMapData(); // 저장된 맵 데이터 불러오기

		// 불러온 맵 데이터를 기반으로 게임 오브젝트 생성
		foreach (MapObject mapObject in loadedMapData.objects)
		{
			Vector3 objectPosition = new Vector3(mapObject.position.x, mapObject.position.y, mapObject.position.z); // 오브젝트 위치 설정

			// 오브젝트의 형태를 파악
			// 테스트 버전에서는 Cube 프리팹만 사용함 - 추후 변경
			if (mapObject.ast_id == 1)
			{
				objectPrefab = (GameObject)Resources.Load("WorldGenerator/Cube");
			}

			GameObject objectInstance = Instantiate(objectPrefab, objectPosition, Quaternion.identity); // 오브젝트 생성
			objectInstance.transform.eulerAngles = new Vector3(mapObject.rotation.x, mapObject.rotation.y, mapObject.rotation.z); // 오브젝트의 추가 설정 (회전, 크기, 타입 등)
			objectInstance.transform.localScale = new Vector3(mapObject.scale.x, mapObject.scale.y, mapObject.scale.z);

			if (mapObject.type == "tile") objectInstance.tag = "Tile"; // 오브젝트 타입이 "tile"일 경우 태그를 설정

			MeshCollider collider = objectInstance.AddComponent<MeshCollider>(); // 메시 콜라이더 추가
			if (collider != null)
				collider.convex = true;

			//if (mapObject.type != "tile")
			//{
			//	Rigidbody rb = objectInstance.AddComponent<Rigidbody>(); // Rigidbody 추가
			//	if (rb != null)
			//		rb.mass = 1.0f;
			//}

			BoxCollider boxCollider = objectInstance.AddComponent<BoxCollider>(); // 박스 콜라이더 추가
		}

		main.transform.position = Vector3.zero; // 메인 오브젝트 위치를 초기화
		// 다른 스크립트에서 오브젝트의 위치 데이터에 영향을 주고 있어 적용이 되지 않아 수정 예정
		Debug.Log("MapLoad");
		main.GetComponent<Rigidbody>().useGravity = true; // 메인 오브젝트의 중력을 활성화
	}

	// 플레이어, 메인 카메라, 조명을 제외한 모든 게임 오브젝트를 파괴하는 메서드
	private void DestroyAllGameObjects()
	{
		GameObject[] gameObjects = FindObjectsOfType<GameObject>(); // 모든 게임 오브젝트를 찾음

		foreach (GameObject gameObject in gameObjects)
		{
			// 파괴할 오브젝트가 아니라면 다음 오브젝트로 넘어감
			if (gameObject.CompareTag("Player") || gameObject.CompareTag("MainCamera") || gameObject.CompareTag("Light"))
			{
				continue;
			}

			// 모든 게임 오브젝트를 파괴
			Destroy(gameObject);
		}
	}
}
