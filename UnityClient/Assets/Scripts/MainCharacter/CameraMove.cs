using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    public float sensitivity = 200f;
    float rotationX;
    float rotationY;

    void Start()
    {
        
    }

    
    void Update()
    {
        float mouseX = Input.GetAxis("Mouse X");
        float mouseY = Input.GetAxis("Mouse Y");

        rotationX += mouseX * sensitivity * Time.deltaTime;
        rotationY += mouseY * sensitivity * Time.deltaTime;

        // ī�޶� ��, �Ʒ��� ȸ����ų �� ������ ����
        rotationY = rotationY > 35f ? 35f : rotationY; 
        rotationY = rotationY < -30f ? -30f : rotationY;

        transform.eulerAngles = new Vector3(-rotationY, rotationX, 0);
    }
}
