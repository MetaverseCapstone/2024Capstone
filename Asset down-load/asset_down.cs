using System.Collections;
using System.IO;
using UnityEngine;
using UnityEngine.Networking;

namespace Assets.Script
{
	public class asset_down : MonoBehaviour
	{
		public string gltfUrl = "localhost:2002/gltf.glb"; // 에셋 에코 서버 주소
		public string directory = "/Programming/Test_folder"; // 에셋 파일이 저장될 위치
		public string filename = "gltf.glb"; // 에셋 파일의 이름
		// Use this for initialization
		void Start()
		{
			
		}

		// Update is called once per frame
		void Update()
		{
			if(Input.GetKeyDown(KeyCode.N))
			{
				StartCoroutine(DownGltfModel(gltfUrl));
			}
		}

		IEnumerator DownGltfModel(string gltfUrl)
		{
			UnityWebRequest request = UnityWebRequest.Get(gltfUrl); // 에셋 에코 서버 연결
			yield return request.SendWebRequest();

			if (request.result == UnityWebRequest.Result.Success)
			{
				SaveFile(directory, filename, request);
			}
			else
			{
				Debug.LogError("Failed to download GLTF file: " + request.error);
			}
		}

		void SaveFile(string directory, string filename, UnityWebRequest request)
		{
			if (!Directory.Exists(directory))
			{
				Directory.CreateDirectory(directory);
				Debug.Log("Create Directory");
			}

			string filename_1 = Path.GetFileNameWithoutExtension(filename); // 파일 이름
			string filename_2 = Path.GetExtension(filename);				// 확장자

			string filePath = Path.Combine(directory, filename);

			int fileCounter = 1;
			while (File.Exists(filePath)) // 파일 이름 중복 처리
			{
				filePath = Path.Combine(directory, filename_1 + " (" + fileCounter++ + ")" + filename_2);
			}
			

			FileStream fs = new FileStream(filePath, System.IO.FileMode.Create); 
			fs.Write(request.downloadHandler.data, 0, (int)request.downloadedBytes); // 파일 저장
			fs.Close();

			Debug.Log("Asset Down Success: " + filePath);
		}	
	}
}