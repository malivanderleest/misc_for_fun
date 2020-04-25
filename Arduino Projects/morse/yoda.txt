#include"MorseCodes.h"

const int led = 13;
const int unit = 500;

void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
  digitalWrite(led, LOW);
}

void loop() {
    // No Need to Modify this.  Put most of your code in "convertIncomingCharsToMorseCode()"
    convertIncomingCharsToMorseCode();
}


// Argument: Any character
// Return Value: Either:
// 1) If the character is a letter, the upper case equivalent.  
// 2) If the character is not a letter, the original value.
char toUpper(char c) {
  if(c >= 'a' && c <= 'z'){
    return c ^ 32;
  }
  else{
    return c;
  }
}

void convertIncomingCharsToMorseCode() {
  unsigned long time = millis();
  unsigned long nextTime = millis();
  int count = 0;
  bool btw = false;
  bool end = false;
  
  if(Serial.available() > 0){
    char nextByte = Serial.read();
    nextByte = toUpper(nextByte);
    String input = morseEncode(nextByte);
    int len = input.length();
//    Serial.println(input);
//    Serial.println(input.length());
    
    for(int i = 0; i < len*2+1; i++){
      if(millis() >= nextTime){
        if(input[count] == '.' && !btw){
          digitalWrite(led, HIGH);
          Serial.print("on (.): ");
          Serial.println(millis()/100-1);
          nextTime += unit;
          count++;
          btw = true;
        }
      else if(input[count] == '-' && !btw){
          digitalWrite(led, HIGH);
          Serial.print("on (-): ");
          Serial.println(millis()/100-1);
          nextTime += 3*unit;
          count++;
          btw = true;
        }
      else if(input[count] == ' ' && !btw){
          digitalWrite(led, LOW);
          Serial.print("off ( ): ");
          Serial.println(millis()/100-1);
          nextTime += unit;
          count++;
          btw = true;
        }
      else if(btw){
          digitalWrite(led, LOW);
          Serial.print("off: ");
          Serial.println(millis()/100-1);
          nextTime += unit;
          if(count == input.length()){
            nextTime += 2*unit;
          }
          btw = false;
      }
      }
      else{
        i--;
      }
    }
    
  }
}
