package communication;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import jssc.SerialPortException;

public class PCToMorseCode {
	public static void main(String[] args) throws SerialPortException {		  
		// TODO:  Fix this: 
		//           a) Uncomment to create a SerialComm object
		//           b) Update the "the port" to refer to the serial port you're using
		//              (The port listed in the Arduino IDE Tools>Port menu.		
		//           c) Deal with the unresolved issue (/dev/cu.usbserial-DN051C13, /dev/cu.usbserial-D306E73S)
		
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
	
			try {
				SerialComm port = new SerialComm("COM7");
				
				String line = in.readLine();
				
				for (int i=0; i<line.length(); i++) {
				int test = line.charAt(i);
					if( (test >= 48 && test <= 57)
						|| (test >= 65 && test <=90)
						|| (test >= 97 && test <=122)  
						|| (test == 32)){
					
					port.writeByte((byte) test); 
				 
					//sanitizing input
					}else {
						System.out.println((char) test + " is not an acceptable input. Please enter an alphanumeric value.");
					}
				}  
			} catch (SerialPortException | IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace(); 
			} 
		
	}

}
