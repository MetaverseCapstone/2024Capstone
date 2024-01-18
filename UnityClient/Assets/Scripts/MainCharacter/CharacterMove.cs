using UnityEngine;
using UnityEngine.UI;

public class CharacterMove : MonoBehaviour
{
    public CharacterController characterController;

    public float sensitivity = 200f; // ���콺 �ΰ���
    public float moveSpeed = 10f; // �⺻ �̵��ӵ�
    public float jumpSpeed = 10f; // ���� �ӵ�
    public float runSpeed = 2f; // �޸��� �̵��ӵ� ���
    public float gravity = -20f; // �߷�


    float yVelocity = 0;
    float rotationX;

    void Start()
    {
    }
    void Update()
    {
        CharacterMoving();
        CharacterRotationX();
    }


    void CharacterMoving()
    {
        float input_h = Input.GetAxis("Horizontal"); // A, DŰ �Է�
        float input_v = Input.GetAxis("Vertical"); // W, SŰ �Է�

        Vector3 moveDirection = new Vector3(input_h, 0, input_v);
        moveDirection = transform.TransformDirection(moveDirection);

        moveDirection *= moveSpeed;
        if (Input.GetKey(KeyCode.LeftShift)) // �� ����Ʈ = �޸���
        {
            moveDirection *= runSpeed;
        }

        if (characterController.isGrounded) // ĳ���Ͱ� ���� �پ����� ��
        {
            yVelocity = 0;
            if (Input.GetKeyDown(KeyCode.Space)) // �����̽��� ������ ����
            {
                yVelocity = jumpSpeed;
            }

        }

        yVelocity += (gravity * Time.deltaTime);

        moveDirection.y = yVelocity;

        characterController.Move(moveDirection * Time.deltaTime);
    }

    void CharacterRotationX()
    {
        float mouseX = Input.GetAxis("Mouse X");

        rotationX += mouseX * sensitivity * Time.deltaTime;

        this.transform.eulerAngles = new Vector3(0, rotationX, 0);
    }

}
