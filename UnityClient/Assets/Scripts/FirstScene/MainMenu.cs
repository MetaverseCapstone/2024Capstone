using UnityEngine;

public class MainMenu : MonoBehaviour
{

    public LoginPopup loginPopup;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void OnClickLogin()
    {
        this.loginPopup.closeBtn.onClick.AddListener(() =>
        {
            this.loginPopup.Close();
        });
        this.loginPopup.Open();
    }

    public void OnClickStart()
    {
        Debug.Log("Start Clicked");
    }

    public void OnClickOption()
    {
        Debug.Log("Option Clicked");
    }

    public void OnClickQuit()
    {
#if UNITY_EDITOR
        UnityEditor.EditorApplication.isPlaying = false; // ����Ƽ �����Ϳ��� ���� ���� ���� �����ϴ� �Լ�
#else
        Application.Quit(); // ���� ������ ���� �������� �� �����ϴ� �Լ�
#endif
    }

    public void OnClickProfile()
    {
        Debug.Log("Profile Clicked");
    }


}
