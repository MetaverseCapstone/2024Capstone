using Unity.VisualScripting;
using UnityEngine;

public class TestMover : MonoBehaviour
{
	[SerializeField] Rigidbody rigid;

	public float speed_move = 10;
	public float speed_rotate = 5;
	public float Jump_power = 10;
	public Camera cmr;
	// Start is called before the first frame update
	void Start()
	{
		rigid.velocity = new Vector3(1, 0, 0);
	}

	private void Awake()
	{
		rigid = GetComponent<Rigidbody>();

		cmr = Camera.main;
		Cursor.lockState = (Cursor.lockState == CursorLockMode.Locked) ? CursorLockMode.None : CursorLockMode.Locked;
		Cursor.visible = !Cursor.visible;
	}

	// Update is called once per frame
	void Update()
	{

		keyword();
		flip_mouse(cmr);

		if (!Input.GetKey(KeyCode.Q))
		{
			Cursor.lockState = CursorLockMode.Locked;
		}
		else
		{
			Cursor.lockState = CursorLockMode.None;
		}
	}

	void keyword()
	{

		float vec_X = 0f;
		float vec_Z = 0f;

		if (Input.GetKey(KeyCode.W)) { vec_X += speed_move; }
		if (Input.GetKey(KeyCode.S)) { vec_X -= speed_move; }
		if (Input.GetKey(KeyCode.A)) { vec_Z += speed_move; }
		if (Input.GetKey(KeyCode.D)) { vec_Z -= speed_move; }

		rigid.velocity = new Vector3(vec_X, rigid.velocity.y, vec_Z);

		if (Input.GetKeyDown(KeyCode.LeftAlt)) { rigid.AddForce(Vector3.up * Jump_power, ForceMode.Impulse); }


		rigid.transform.rotation = Quaternion.identity;
	}

	void flip_mouse(Camera cmr)
	{
		var ScreenCenter = new Vector3(Camera.main.pixelWidth / 2, Camera.main.pixelHeight / 2);

		float axs_X = Input.GetAxis("Mouse X");
		float axs_Y = Input.GetAxis("Mouse Y");
		cmr.transform.eulerAngles += new Vector3(-axs_Y, axs_X, 0) * speed_rotate;
		if (cmr.transform.rotation.x > 90) { cmr.transform.rotation = new Quaternion(90, cmr.transform.rotation.y, -360, cmr.transform.rotation.w); }
		else if (cmr.transform.rotation.x < -90) { cmr.transform.rotation = new Quaternion(-90, cmr.transform.rotation.y, -360, cmr.transform.rotation.w); }

	}
}

