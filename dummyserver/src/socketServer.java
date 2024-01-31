import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class socketServer {
    private ServerSocket serverSocket;
    private BufferedReader br;
	private PrintWriter pw;
    private Socket clientSocket;

    public static void main(String[] args) throws IOException {
        new socketServer();
    }
    public socketServer() throws IOException {
        init();
    }
    public void init() throws IOException {
        try {
            serverSocket = new ServerSocket(11122);
            System.out.println("Server is ready");
            System.out.println("connect clinet...");
            clientSocket = serverSocket.accept(); //
            br = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            pw = new PrintWriter(clientSocket.getOutputStream());

            String readData = "";
            while ((readData = br.readLine()) != null) {
                if (readData.equals("stop")){
                    break;
                }
                else if (readData.equals("data")){

                }
                else {
                    System.out.println("from Client>" + readData);
                    pw.println(readData);
                    pw.flush();
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
            clientSocket.close();
        }
    }
}

