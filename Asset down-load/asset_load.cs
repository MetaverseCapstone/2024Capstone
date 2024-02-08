using GLTFast;
using System;
using System.Collections;
using System.IO;
using Unity.VisualScripting;
using UnityEngine;

namespace Assets.Script
{
	public class asset_load : MonoBehaviour
	{
		public string directory = "/Programming/Test_folder";
		public string filename = "gltf.glb";

		Transform newChild;

		// Use this for initialization
		void Start()
		{

		}

		// Update is called once per frame
		void Update()
		{
			if (Input.GetKeyDown(KeyCode.M))
			{
				
				if (newChild != null)
				{
					TestMover t = newChild.GetComponent<TestMover>();
					if (t != null)
					{
						Destroy(t);
					}
				}
				
				LoadGltfModel(Path.Combine(directory, filename));
				
			}

			if (newChild != null)
			{
				Camera.main.transform.position = newChild.transform.position + new Vector3(0, 15, 0);
			}
			
		}


		async void LoadGltfModel(string gltfPath)
		{
			if (File.Exists(gltfPath))
			{
				byte[] data = File.ReadAllBytes(gltfPath); // 에셋 파일 읽기

				var gltf = new GltfImport();
				bool success = await gltf.LoadGltfBinary(data); // Gltf 바이너리 파일 로드
				if (success)
				{
					GameObject newObject = new GameObject("GLTFModel"); // 오브젝트 생성
					newObject.transform.position = Vector3.zero;
					success = await gltf.InstantiateMainSceneAsync(newObject.transform); // 오브젝트에 Gltf 모델 로드
					if (success)
					{
						newChild = newObject.transform.GetChild(0);
						newChild.transform.localScale = new Vector3(0.3f, 0.3f, 0.3f);

						MeshCollider meshCollider = newChild.AddComponent<MeshCollider>(); // 오브젝트에 MeshCollider 컴포넌트 추가
						if (meshCollider != null)
						{
							meshCollider.convex = true;	// 복잡한 오브젝트의 콜리더 구현
						}
					

						Rigidbody rigid = newChild.AddComponent<Rigidbody>(); // 오브젝트에 Rigidbody 컴포넌트 추가
						if (rigid != null)
						{
							rigid.mass = 1.0f;
							rigid.freezeRotation = true; // 회전 불가능하게 설정
						}
				

						newChild.AddComponent<TestMover>();
						Camera.main.transform.parent = newChild.transform;

						Debug.Log("Asset Load Success: " + gltfPath);
					}
					else
					{
						Destroy(newObject);
						Debug.Log("Error - Asset Load Fail");
					}
				}
				else
				{
					Debug.Log("Error - Asset File Read Fail");
				}
			}
			else
			{
				Debug.Log("Error - Asset File not Exist");
			}
		}
	}
}