using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Windows.Forms;
using Ookii.Dialogs;

public class UploadPopup : MonoBehaviour
{
    public Button closeBtn;

    public Button imgUploadBtn;
    public Button modelUploadBtn;

    public GameSceneCanvas gameSceneCanvas;




    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void Open()
    {
        this.gameObject.SetActive(true);
    }

    public void Close()
    {
        this.gameObject.SetActive(false);
    }

    public void OnClickImgUpload()
    {
        VistaOpenFileDialog dialog = new VistaOpenFileDialog();
        dialog.Filter = "jpg files (*.jpg)|*.jpg|png files (*.png)|*.png";

    }

    public void OnClickModelUpload()
    {

    }
}
