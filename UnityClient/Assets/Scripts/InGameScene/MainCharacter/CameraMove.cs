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
        // �θ� ��ü (ĳ����) ��������
        parentCharacter = this.transform.parent.gameObject;
        // ĳ������ sensitivity�� �״�� ������
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

        // ī�޶� ��, �Ʒ��� ȸ����ų �� ������ ����
        rotationY = rotationY > 35f ? 35f : rotationY;
        rotationY = rotationY < -30f ? -30f : rotationY;

        transform.eulerAngles = new Vector3(-rotationY, parentAngle.y, 0);
    }
}
