using GLTFast;
using UnityEngine;

namespace Assets.Scripts.Routine
{
	// Routine에게 부여되는 Task의 정보가 담겨 있는 클래스
	public class LoadTask
	{
		public string user_id;
		public int ast_id;
		public GameObject gltfObj;

		public bool Down_success = false;
		public bool Load_success = false;
		public bool Wear_success = false;
		public bool All_success = false;

		public bool Fail_Stop = false;

		public GltfImport gltfImport;


		public LoadTask(string user_id, int ast_id, GameObject gltfObj)
		{
			this.user_id = user_id;
			this.ast_id = ast_id;
			this.gltfObj = gltfObj;

			Down_success = false;
			Load_success = false;
			Wear_success = false;
			All_success = false;
			Fail_Stop = false;

			gltfImport = new GltfImport();
		}

		public void TaskInit()
		{
			Down_success = false;
			Load_success = false;
			Wear_success = false;
			All_success = false;
			Fail_Stop = false;

			gltfImport = new GltfImport();
		}
	}
}