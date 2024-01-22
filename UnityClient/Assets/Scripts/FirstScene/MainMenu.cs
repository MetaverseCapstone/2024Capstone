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
        UnityEditor.EditorApplication.isPlaying = false; // 유니티 에디터에서 실행 중일 때에 종료하는 함수
#else
        Application.Quit(); // 추후 배포한 앱을 실행했을 때 종료하는 함수
#endif
    }

    public void OnClickProfile()
    {
        Debug.Log("Profile Clicked");
    }


}
