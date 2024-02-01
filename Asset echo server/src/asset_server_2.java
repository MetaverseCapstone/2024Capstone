import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.Writer;
import java.net.Socket;
import java.net.URLConnection;
import java.nio.file.Files;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

public class asset_server_2 implements Runnable {
	private final static Logger logger = Logger.getLogger(asset_server_2.class.getCanonicalName());
	private File rootDirectory;
	private String indexFileName = "index.html";
	private Socket connection;

	public asset_server_2(File rootDirectory, String indexFileName, Socket connection) {
		if (rootDirectory.isFile()) {
			throw new IllegalArgumentException("rootDirectory must be a directory, not a file");
		}
		try {
			rootDirectory = rootDirectory.getCanonicalFile();
		} catch (IOException ex) {
		}
		this.rootDirectory = rootDirectory;
		if (indexFileName != null)
			this.indexFileName = indexFileName;
		this.connection = connection;
	}

	@Override
	public void run() {
		// for security checks
		String root = rootDirectory.getPath();
		try {
			OutputStream raw = new BufferedOutputStream(connection.getOutputStream());
			Writer out = new OutputStreamWriter(raw);
			Reader in = new InputStreamReader(new BufferedInputStream(connection.getInputStream()), "US-ASCII");
			StringBuilder requestLine = new StringBuilder();
			while (true) {
				int c = in.read();
				if (c == '\r' || c == '\n')
					break;
				requestLine.append((char) c);
			}
			String get = requestLine.toString();
			logger.info(connection.getRemoteSocketAddress() + " " + get);
			String[] tokens = get.split("\\s+");
			String method = tokens[0];
			String version = "";
			if (method.equals("GET")) {
                String fileName = tokens[1];
                if (fileName.endsWith("/"))
                    fileName += indexFileName;
                String contentType = URLConnection.getFileNameMap().getContentTypeFor(fileName);
                File theFile = new File(rootDirectory, fileName.substring(1));
                
                if (theFile.exists() && theFile.isFile() && theFile.canRead()) {
                    // 파일이 존재하면서 읽을 수 있는 경우
                    sendFile(out, raw, theFile, contentType);
                } else {
                    // 파일이 존재하지 않는 경우
                    String body = "<html><body><h1>File Not Found</h1></body></html>";
                    send404(out, body);
                }
            } else {
                // GET 메서드 이외의 요청에 대한 응답
                String body = "<html><body><h1>Not Implemented</h1></body></html>";
                send501(out, body);
            }
        } catch (IOException ex) {
            logger.log(Level.WARNING, "Error talking to " + connection.getRemoteSocketAddress(), ex);
        } finally {
            try {
                connection.close();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }

    private void sendFile(Writer out, OutputStream raw, File theFile, String contentType) throws IOException {
        byte[] theData = Files.readAllBytes(theFile.toPath());
        
        // 응답 헤더 전송
        sendHeader(out, "HTTP/1.0 200 OK", contentType, theData.length);
        
        // 파일 데이터 전송
        raw.write(theData);
        raw.flush();
    }

    private void send404(Writer out, String body) throws IOException {
        sendHeader(out, "HTTP/1.0 404 File Not Found", "text/html", body.length());
        out.write(body);
        out.flush();
    }

    private void send501(Writer out, String body) throws IOException {
        sendHeader(out, "HTTP/1.0 501 Not Implemented", "text/html", body.length());
        out.write(body);
        out.flush();
    }

	private void sendHeader(Writer out, String responseCode, String contentType, int length) throws IOException {
		out.write(responseCode + "\r\n");
		Date now = new Date();
		out.write("Date: " + now + "\r\n");
		out.write("Server: JHTTP 2.0\r\n");
		out.write("Content-length: " + length + "\r\n");
		out.write("Content-type: " + contentType + "\r\n\r\n");
		out.flush();
	}
}
