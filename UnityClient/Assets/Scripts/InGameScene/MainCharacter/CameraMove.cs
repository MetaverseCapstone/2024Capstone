using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    float sensitivity;
    float rotationY;

    GameObject parentCharacter;

    private void Awake()
    {
        // 부모 객체 (캐릭터) 가져오기
        parentCharacter = this.transform.parent.gameObject;
        // 캐릭터의 sensitivity를 그대로 가져옴
        sensitivity = parentCharacter.GetComponent<CharacterMove>().sensitivity;
    }

    void Start()
    {
        
    }

    void Update()
    {
        CameraRotationY();
    }

    void CameraRotationY()
    {
        float mouseY = Input.GetAxis("Mouse Y");

        rotationY += mouseY * sensitivity * Time.deltaTime;

        Vector3 parentAngle = parentCharacter.transform.eulerAngles;

        // 카메라를 위, 아래로 회전시킬 때 제한을 설정
        rotationY = rotationY > 35f ? 35f : rotationY;
        rotationY = rotationY < -30f ? -30f : rotationY;

        transform.eulerAngles = new Vector3(-rotationY, parentAngle.y, 0);
    }
}
