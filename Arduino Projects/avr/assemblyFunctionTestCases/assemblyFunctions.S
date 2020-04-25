#include <avr/io.h>

; AVR assembly comments start with a semicolon
// (or a double slash, like C)
; Lines without labels should be indented once.

; You can "call printRegs" in your code to help you understand the register values and how they change.


 // Define further "functions" below:
 // .global functionName
 // functionName:
 //   *code*
 //   ret


.global hasAOne
hasAOne:
  ldi r22, 0
  cpse r24, r22
  ldi r24, 1
  ret 

.global byteToAscii
byteToAscii:
  ldi r22, 48
  add r24, r22
  ret

.global int8ToInt
int8ToInt:
  ldi r25, 127
  cp r25, r24
  sbc r25, r25
  ret

.global addInt8ToInt
addInt8ToInt:
  call int8ToInt
  add r24, r22
  adc r25, r23
  ret

.global add4Int8
add4Int8:

  call int8ToInt 
  
  push r22
  mov r22, r24
  mov r23, r25
  pop r24
  call addInt8ToInt

  mov r22, r24
  mov r23, r25
  ldi r25, 0
  mov r24, r20
  call addInt8ToInt

  
  mov r22, r24
  mov r23, r25
  ldi r25, 0
  mov r24, r18
  call addInt8ToInt

  
  ret

.global average
average:
  add r24, r22
  ror r24
  ret

  
