package communication;

import jssc.*;

public class SerialComm {

	SerialPort port;

	private boolean debug;  // Indicator of "debugging mode"
	
	// This function can be called to enable or disable "debugging mode"
	void setDebug(boolean mode) {
		debug = mode;
	}	
	

	// Constructor for the SerialComm class
	public SerialComm(String name) throws SerialPortException {
		port = new SerialPort(name);		
		port.openPort(); 
	
		port.setParams(SerialPort.BAUDRATE_9600,
			SerialPort.DATABITS_8,
			SerialPort.STOPBITS_1,
			SerialPort.PARITY_NONE);
		
		debug = true; // Default is to NOT be in debug mode
	}
		
	// TODO: Add writeByte() method that you created in Studio 5
	public boolean writeByte(byte b) throws SerialPortException {
		if(debug==true) {
			System.out.println("byte read: " + b);
			}
		if (port.writeByte(b)==true) { 
			return true;
		}
		return false;

	}  
	
	
	
}
