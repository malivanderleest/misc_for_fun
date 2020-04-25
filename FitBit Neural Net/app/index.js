/*
 * Entry point for the watch app
 */

import document from "document";
import * as messaging from "messaging";

let myElement = document.getElementById("colorChange");

messaging.peerSocket.onmessage = function(evt) {
  myElement.style.fill = evt.data.value;
}

console.log("App code started");

let newbtn = document.getElementById("new");
let nextbtn = document.getElementById("next");
let deletebtn = document.getElementById("delete");
let savebtn = document.getElementById("save");

let s1 = document.getElementById("1");
let s2 = document.getElementById("2");
let s3 = document.getElementById("3");
let s4 = document.getElementById("4");
let s5 = document.getElementById("5");
let s6 = document.getElementById("6");
let s7 = document.getElementById("7");
let s8 = document.getElementById("8");
let s9 = document.getElementById("9");
let s10 = document.getElementById("10");
let s11 = document.getElementById("11");
let s12 = document.getElementById("12");

let s13 = document.getElementById("13");
let s14 = document.getElementById("14");
let s15 = document.getElementById("15");
let s16 = document.getElementById("16");
let s17 = document.getElementById("17");
let s18 = document.getElementById("18");
let s19 = document.getElementById("19");
let s20 = document.getElementById("20");
let s21 = document.getElementById("21");
let s22 = document.getElementById("22");
let s23 = document.getElementById("23");
let s24 = document.getElementById("24");

let s25 = document.getElementById("25");
let s26 = document.getElementById("26");
let s27 = document.getElementById("27");
let s28 = document.getElementById("28");
let s29 = document.getElementById("29");
let s30 = document.getElementById("30");
let s31 = document.getElementById("31");
let s32 = document.getElementById("32");
let s33 = document.getElementById("33");
let s34 = document.getElementById("34");
let s35 = document.getElementById("35");
let s36 = document.getElementById("36");

let s37 = document.getElementById("37");
let s38 = document.getElementById("38");
let s39 = document.getElementById("39");
let s40 = document.getElementById("40");
let s41 = document.getElementById("41");
let s42 = document.getElementById("42");
let s43 = document.getElementById("43");
let s44 = document.getElementById("44");
let s45 = document.getElementById("45");
let s46 = document.getElementById("46");
let s47 = document.getElementById("47");
let s48 = document.getElementById("48");

let s49 = document.getElementById("49");
let s50 = document.getElementById("59");
let s51 = document.getElementById("51");
let s52 = document.getElementById("52");
let s53 = document.getElementById("53");
let s54 = document.getElementById("54");
let s55 = document.getElementById("55");
let s56 = document.getElementById("56");
let s57 = document.getElementById("57");
let s58 = document.getElementById("58");
let s59 = document.getElementById("59");
let s60 = document.getElementById("60");

let s61 = document.getElementById("61");
let s62 = document.getElementById("62");
let s63 = document.getElementById("63");
let s64 = document.getElementById("64");
let s65 = document.getElementById("65");
let s66 = document.getElementById("66");
let s67 = document.getElementById("67");
let s68 = document.getElementById("68");
let s69 = document.getElementById("69");
let s70 = document.getElementById("70");
let s71 = document.getElementById("71");
let s72 = document.getElementById("72");

let s73 = document.getElementById("73");
let s74 = document.getElementById("74");
let s75 = document.getElementById("75");
let s76 = document.getElementById("76");
let s77 = document.getElementById("77");
let s78 = document.getElementById("78");
let s79 = document.getElementById("79");
let s80 = document.getElementById("80");
let s81 = document.getElementById("81");
let s82 = document.getElementById("82");
let s83 = document.getElementById("83");
let s84 = document.getElementById("84");

let s85 = document.getElementById("85");
let s86 = document.getElementById("86");
let s87 = document.getElementById("87");
let s88 = document.getElementById("88");
let s89 = document.getElementById("89");
let s90 = document.getElementById("90");
let s91 = document.getElementById("91");
let s92 = document.getElementById("92");
let s93 = document.getElementById("93");
let s94 = document.getElementById("94");
let s95 = document.getElementById("95");
let s96 = document.getElementById("96");

let s97 = document.getElementById("97");
let s98 = document.getElementById("98");
let s99 = document.getElementById("99");
let s100 = document.getElementById("100");
let s101 = document.getElementById("101");
let s102 = document.getElementById("102");
let s103 = document.getElementById("103");
let s104 = document.getElementById("104");
let s105 = document.getElementById("105");
let s106 = document.getElementById("106");
let s107 = document.getElementById("107");
let s108 = document.getElementById("108");

let s109 = document.getElementById("109");
let s110 = document.getElementById("110");
let s111 = document.getElementById("111");
let s112 = document.getElementById("112");
let s113 = document.getElementById("113");
let s114 = document.getElementById("114");
let s115 = document.getElementById("115");
let s116 = document.getElementById("116");
let s117 = document.getElementById("117");
let s118 = document.getElementById("118");
let s119 = document.getElementById("119");
let s120 = document.getElementById("120");

let s121 = document.getElementById("121");
let s122 = document.getElementById("122");
let s123 = document.getElementById("123");
let s124 = document.getElementById("124");
let s125 = document.getElementById("125");
let s126 = document.getElementById("126");
let s127 = document.getElementById("127");
let s128 = document.getElementById("128");
let s129 = document.getElementById("129");
let s130 = document.getElementById("130");
let s131 = document.getElementById("131");
let s132 = document.getElementById("132");

let s133 = document.getElementById("133");
let s134 = document.getElementById("134");
let s135 = document.getElementById("135");
let s136 = document.getElementById("136");
let s137 = document.getElementById("137");
let s138 = document.getElementById("138");
let s139 = document.getElementById("139");
let s140 = document.getElementById("140");
let s141 = document.getElementById("141");
let s142 = document.getElementById("142");
let s143 = document.getElementById("143");
let s144 = document.getElementById("144");

let prob0 = 0;
let prob1 = 0;
let prob2 = 0;
let prob3 = 0;
let prob4 = 0;
let prob5 = 0;
let prob6 = 0;
let prob7 = 0;
let prob8 = 0;
let prob9 = 0;


newbtn.onclick = function(evt) {
  console.log("letter button");
  
  let go = 0;
  let pixarray = new Array(144);
  
    for(let i=1; i<=144; i++){
      pixarray[i]=0;
      go = 1;
    };
    
    s1.onmouseover = function(evt){ pixarray[1]=1; }
    s2.onmouseover = function(evt){ pixarray[2]=1; }
    s3.onmouseover = function(evt){ pixarray[3]=1; }
    s4.onmouseover = function(evt){ pixarray[4]=1; }
    s5.onmouseover = function(evt){ pixarray[5]=1; }
    s6.onmouseover = function(evt){ pixarray[6]=1; 
                                  prob0+=1;
                                  }
    s7.onmouseover = function(evt){ pixarray[7]=1; 
                                  prob0+=3;
                                  prob6+=1;}
    s8.onmouseover = function(evt){ pixarray[8]=1;
                                  prob0+=3;
                                  prob6+=1;}
    s9.onmouseover = function(evt){ pixarray[9]=1; 
                                  prob0+=3;
                                  prob6+=1;}
    s10.onmouseover = function(evt){ pixarray[10]=1; }
    s11.onmouseover = function(evt){ pixarray[11]=1; 
                                   prob2+=3}
    s12.onmouseover = function(evt){ pixarray[12]=1; 
                                   prob2+=2;}
    s13.onmouseover = function(evt){ pixarray[13]=1; }
    s14.onmouseover = function(evt){ pixarray[14]=1; }
    s15.onmouseover = function(evt){ pixarray[15]=1; 
                                   prob0+=1;}
    s16.onmouseover = function(evt){ pixarray[16]=1; 
                                   prob0+=2;
                                   prob9+=1;}
    s17.onmouseover = function(evt){ pixarray[17]=1; 
                                   prob0+=5;
                                   prob9+=1;}
    s18.onmouseover = function(evt){ pixarray[18]=1; 
                                   prob0+=4;
                                   prob6+=3;}
    s19.onmouseover = function(evt){ pixarray[19]=1; 
                                   prob0+=5;
                                   prob6+=5;}
    s20.onmouseover = function(evt){ pixarray[20]=1; 
                                   prob0+=4;
                                   prob6+=6;}
    s21.onmouseover = function(evt){ pixarray[21]=1; 
                                   prob0+=3;
                                   prob6+=5;}
    s22.onmouseover = function(evt){ pixarray[22]=1; 
                                   prob0+=5;
                                   prob2+=5;
                                   prob6+=6;}
    s23.onmouseover = function(evt){ pixarray[23]=1; 
                                   prob0+=4;
                                   prob2+=4;
                                   prob6+=2;
                                   prob7+=3;}
    s24.onmouseover = function(evt){ pixarray[24]=1; 
                                   prob2+=3;
                                   prob7+=5;}
    s25.onmouseover = function(evt){ pixarray[25]=1; 
                                   prob7+=2;}
    s26.onmouseover = function(evt){ pixarray[26]=1;
                                   prob0+=2;
                                   prob5+=1;
                                   prob7+=7;
                                   prob9+=1;}
    s27.onmouseover = function(evt){ pixarray[27]=1; 
                                   prob0+=4;
                                   prob2+=3;
                                   prob4+=6;
                                   prob5+=1;
                                   prob7+=1;
                                   prob8+=4;
                                   prob9+=6;}
    s28.onmouseover = function(evt){ pixarray[28]=1; 
                                   prob0+=4;
                                   prob2+=1;
                                   prob4+=7;
                                   prob5+=1;
                                   prob6+=1;
                                   prob8+=4;
                                   prob9+=8;}
    s29.onmouseover = function(evt){ pixarray[29]=1; 
                                   prob0+=4;
                                   prob4+=4;
                                   prob6+=6;
                                   prob8+=1;
                                   prob9+=6;}
    s30.onmouseover = function(evt){ pixarray[30]=1; 
                                   prob0+=4;
                                   prob4+=7;
                                   prob6+=5;
                                   prob8+=1;
                                   prob9+=4;}
    s31.onmouseover = function(evt){ pixarray[31]=1; 
                                   prob0+=1;
                                   prob4+=3;
                                   prob6+=4;
                                   prob9+=1;}
    s32.onmouseover = function(evt){ pixarray[32]=1; 
                                   prob0+=3;
                                   prob6+=3;}
    s33.onmouseover = function(evt){ pixarray[33]=1; 
                                   prob0+=2;
                                   prob2+=3;
                                   prob6+=5;
                                   prob8+=1;}
    s34.onmouseover = function(evt){ pixarray[34]=1; 
                                   prob0+=5;
                                   prob2+=4;
                                   prob5+=1;
                                   prob6+=3;
                                   prob7+=3;
                                   prob8+=1;}
    s35.onmouseover = function(evt){ pixarray[35]=1; 
                                   prob0+=4;
                                   prob2+=4;
                                   prob3+=3;
                                   prob6+=5;
                                   prob7+=7;}
    s36.onmouseover = function(evt){ pixarray[36]=1; 
                                   prob0+=1;
                                   prob2+=5;
                                   prob3+=2;
                                   prob6+=4;
                                   prob7+=2;}
    s37.onmouseover = function(evt){ pixarray[37]=1; 
                                   prob0+=1;
                                   prob5+=4;
                                   prob7+=1;
                                   prob8+=4;
                                   prob9+=5;}
    s38.onmouseover = function(evt){ pixarray[38]=1; 
                                   prob0+=5;
                                   prob2+=4;
                                   prob3+=2;
                                   prob4+=1;
                                   prob5+=5;
                                   prob7+=8;
                                   prob8+=6;
                                   prob9+=6;}
    s39.onmouseover = function(evt){ pixarray[39]=1; 
                                   prob0+=4;
                                   prob2+=9;
                                   prob3+=2;
                                   prob4+=3;
                                   prob5+=7;
                                   prob6+=1;
                                   prob7+=2;
                                   prob8+=8;
                                   prob9+=4;}
    s40.onmouseover = function(evt){ pixarray[40]=1; 
                                   prob0+=5;
                                   prob2+=5;
                                   prob4+=2;
                                   prob5+=7;
                                   prob6+=8;
                                   prob8+=5;
                                   prob9+=2;}
    s41.onmouseover = function(evt){ pixarray[41]=1; 
                                   prob4+=2;
                                   prob5+=8;
                                   prob6+=5;
                                   prob8+=4;
                                   prob9+=2;}
    s42.onmouseover = function(evt){ pixarray[42]=1; 
                                   prob4+=4;
                                   prob5+=6;
                                   prob6+=1;
                                   prob9+=6;}
    s43.onmouseover = function(evt){ pixarray[43]=1; 
                                   prob4+=7;
                                   prob5+=2;
                                   prob6+=2;
                                   prob8+=1;
                                   prob9+=6;}
    s44.onmouseover = function(evt){ pixarray[44]=1; 
                                   prob2+=4;
                                   prob6+=4;
                                   prob8+=4;}
    s45.onmouseover = function(evt){ pixarray[45]=1; 
                                   prob2+=7;
                                   prob6+=6;
                                   prob7+=4
                                   prob6+=6;}
    s46.onmouseover = function(evt){ pixarray[46]=1; 
                                   prob0+=1;
                                   prob2+=5;
                                   prob3+=1;
                                   prob5+=4;
                                   prob6+=2;
                                   prob7+=8;
                                   prob8+=8;}
    s47.onmouseover = function(evt){ pixarray[47]=1; 
                                   prob0+=4;
                                   prob2+=5;
                                   prob3+=4;
                                   prob5+=7;
                                   prob6+=4;
                                   prob7+=3;
                                   prob8+=7;}
    s48.onmouseover = function(evt){ pixarray[48]=1; 
                                   prob0+=5;
                                   prob2+=5;
                                   prob3+=5;
                                   prob5+=2;
                                   prob6+=3;
                                   prob7+=1;
                                   prob8+=4;}
    s49.onmouseover = function(evt){ pixarray[49]=1; 
                                   prob0+=4;
                                   prob2+=4;
                                   prob3+=1;
                                   prob5+=5;
                                   prob7+=1;
                                   prob8+=6;
                                   prob9+=4;}
    s50.onmouseover = function(evt){ pixarray[50]=1; }
    s51.onmouseover = function(evt){ pixarray[51]=1; 
                                   prob0+=2;
                                   prob2+=1;
                                   prob3+=3;
                                   prob4+=1;
                                   prob5+=3;
                                   prob6+=7;}
    s52.onmouseover = function(evt){ pixarray[52]=1; 
                                   prob2+=1;
                                   prob4+=1;
                                   prob5+=1;
                                   prob6+=3;
                                   prob8+=2;}
    s53.onmouseover = function(evt){ pixarray[53]=1; 
                                   prob4+=1;
                                   prob5+=4;
                                   prob8+=5;}
    s54.onmouseover = function(evt){ pixarray[54]=1; 
                                   prob3+=3;
                                   prob5+=5;
                                   prob8+=4;
                                   prob9+=3;}
    s55.onmouseover = function(evt){ pixarray[55]=1; 
                                   prob2+=3;
                                   prob3+=1;
                                   prob4+=5;
                                   prob5+=2;
                                   prob6+=2;
                                   prob8+=4;
                                   prob9+=5;}
    s56.onmouseover = function(evt){ pixarray[56]=1; 
                                   prob2+=8;
                                   prob4+=1;
                                   prob6+=6;
                                   prob7+=3;
                                   prob8+=3;}
    s57.onmouseover = function(evt){ pixarray[57]=1; 
                                   prob2+=2;
                                   prob6+=2;
                                   prob7+=7;
                                   prob8+=4;}
    s58.onmouseover = function(evt){ pixarray[58]=1; 
                                   prob3+=1;
                                   prob5+=2;
                                   prob6+=1;
                                   prob7+=3;
                                   prob8+=1;}
    s59.onmouseover = function(evt){ pixarray[59]=1;
                                   prob0+=1;
                                   prob2+=3;
                                   prob3+=5;
                                   prob5+=4;
                                   prob6+=1;
                                   prob7+=1;
                                   prob8+=5; 
                                   }
    s60.onmouseover = function(evt){ pixarray[60]=1; 
                                   prob0+=8;
                                   prob2+=5;
                                   prob3+=3;
                                   prob5+=4;
                                   prob6+=6;
                                   prob8+=4; }
    s61.onmouseover = function(evt){ pixarray[61]=1; 
                                   prob0+=7;
                                   prob1+=3;
                                   prob2+=5;
                                   prob3+=3;
                                   prob5+=4;
                                   prob8+=7;
                                   prob9+=4; }
    s62.onmouseover = function(evt){ pixarray[62]=1; 
                                   prob0+=4;
                                   prob1+=4;
                                   prob2+=3;
                                   prob3+=5;
                                   prob5+=3;
                                   prob6+=5;
                                   prob7+=5;
                                   prob8+=1;
                                   prob9+=1;}
    s63.onmouseover = function(evt){ pixarray[63]=1; 
                                   prob0+=1;
                                   prob1+=4;
                                   prob2+=1;
                                   prob3+=2;
                                   prob6+=5;
                                   prob7+=3;}
    s64.onmouseover = function(evt){ pixarray[64]=1; 
                                   prob1+=4;}
    s65.onmouseover = function(evt){ pixarray[65]=1; 
                                   prob1+=3;
                                   prob3+=1;
                                   prob5+=3;
                                   prob8+=3;}
    s66.onmouseover = function(evt){ pixarray[66]=1; 
                                   prob1+=1;
                                   prob3+=5;
                                   prob4+=2;
                                   prob5+=6;
                                   prob8+=6;
                                   prob9+=4;}
    s67.onmouseover = function(evt){ pixarray[67]=1; 
                                   prob1+=1;
                                   prob2+=6;
                                   prob3+=4;
                                   prob4+=4;
                                   prob5+=1;
                                   prob6+=2;
                                   prob8+=6;
                                   prob9+=5;}
    s68.onmouseover = function(evt){ pixarray[68]=1; 
                                   prob2+=2;
                                   prob4+=4;
                                   prob6+=5;
                                   prob7+=6;
                                   prob8+=3;}
    s69.onmouseover = function(evt){ pixarray[69]=1; 
                                   prob1+=2;
                                   prob6+=1;
                                   prob7+=4;}
    s70.onmouseover = function(evt){ pixarray[70]=1; 
                                   prob1+=2;
                                   prob5+=1;
                                   prob6+=1;}
    s71.onmouseover = function(evt){ pixarray[71]=1; 
                                   prob0+=1;
                                   prob1+=2;
                                   prob2+=4;
                                   prob3+=4;
                                   prob5+=3;
                                   prob8+=1;}
    s72.onmouseover = function(evt){ pixarray[72]=1; 
                                   prob0+=3;
                                   prob1+=2;
                                   prob2+=4;
                                   prob3+=4;
                                   prob5+=5;
                                   prob6+=4;
                                   prob8+=6;}
    s73.onmouseover = function(evt){ pixarray[73]=1; 
                                   prob0+=8;
                                   prob1+=5;
                                   prob2+=3;
                                   prob3+=4;
                                   prob5+=2;
                                   prob6+=1;
                                   prob7+=1;
                                   prob8+=6;
                                   prob9+=4;}
    s74.onmouseover = function(evt){ pixarray[74]=1; 
                                   prob0+=5;
                                   prob1+=5;
                                   prob2+=4;
                                   prob3+=7;
                                   prob5+=5;
                                   prob6+=4;
                                   prob7+=4;}
    s75.onmouseover = function(evt){ pixarray[75]=1; 
                                   prob1+=5;
                                   prob5+=1;
                                   prob6+=2;
                                   prob7+=4;}
    s76.onmouseover = function(evt){ pixarray[76]=1; 
                                   prob1+=4;}
    s77.onmouseover = function(evt){ pixarray[77]=1; 
                                   prob1+=5;
                                   prob3+=3;
                                   prob5+=3;
                                   prob8+=3;}
    s78.onmouseover = function(evt){ pixarray[78]=1; 
                                   prob1+=7;
                                   prob2+=5;
                                   prob3+=8;
                                   prob4+=2;
                                   prob5+=5;
                                   prob7+=3;
                                   prob8+=9;
                                   prob9+=5;}
    s79.onmouseover = function(evt){ pixarray[79]=1; 
                                   prob1+=5;
                                   prob2+=4;
                                   prob3+=7;
                                   prob4+=6;
                                   prob5+=1;
                                   prob6+=2;
                                   prob7+=8;
                                   prob8+=6;
                                   prob9+=7;}
    s80.onmouseover = function(evt){ pixarray[80]=1; 
                                   prob1+=5;
                                   prob4+=1;
                                   prob6+=8;
                                   prob7+=4;}
    s81.onmouseover = function(evt){ pixarray[81]=1; 
                                   prob1+=6;
                                   prob6+=2;}
    s82.onmouseover = function(evt){ pixarray[82]=1; 
                                   prob1+=4;
                                   prob5+=1;
                                   prob6+=1;}
    s83.onmouseover = function(evt){ pixarray[83]=1; 
                                   prob0+=1;
                                   prob1+=5;
                                   prob2+=3;
                                   prob3+=4;
                                   prob5+=4;
                                   prob6+=1;}
    s84.onmouseover = function(evt){ pixarray[84]=1; 
                                   prob0+=7;
                                   prob1+=6;
                                   prob2+=4;
                                   prob3+=3;
                                   prob5+=4;
                                   prob6+=5;
                                   prob8+=7;}
    s85.onmouseover = function(evt){ pixarray[85]=1; 
                                   prob0+=6;
                                   prob1+=1;
                                   prob2+=1;
                                   prob3+=2;
                                   prob5+=3;
                                   prob6+=1;
                                   prob7+=1;
                                   prob8+=7;
                                   prob9+=5;}
    s86.onmouseover = function(evt){ pixarray[86]=1; 
                                   prob0+=3;
                                   prob1+=1;
                                   prob2+=2;
                                   prob3+=7;
                                   prob5+=4;
                                   prob6+=1;
                                   prob7+=3;
                                   prob8+=2;
                                   prob9+=1;}
    s87.onmouseover = function(evt){ pixarray[87]=1; 
                                   prob1+=1;
                                   prob2+=3;
                                   prob3+=1;
                                   prob5+=1;
                                   prob6+=1;
                                   prob7+=4;
                                   prob8+=1;}
    s88.onmouseover = function(evt){ pixarray[88]=1;
                                   prob1+=2;
                                   prob2+=2;
                                   prob9+=1;}
    s89.onmouseover = function(evt){ pixarray[89]=1; 
                                   prob1+=2;
                                   prob2+=6;
                                   prob3+=4;
                                   prob5+=3;
                                   prob7+=1;
                                   prob8+=4;
                                   prob9+=3;}
    s90.onmouseover = function(evt){ pixarray[90]=1; 
                                   prob1+=1;
                                   prob2+=4;
                                   prob3+=6;
                                   prob4+=2;
                                   prob5+=4;
                                   prob7+=7;
                                   prob8+=7;
                                   prob9+=5;}
    s91.onmouseover = function(evt){ pixarray[91]=1; 
                                   prob1+=3;
                                   prob2+=1;
                                   prob3+=4;
                                   prob4+=5;
                                   prob5+=1;
                                   prob6+=1;
                                   prob7+=2;
                                   prob8+=4;
                                   prob9+=5;}
    s92.onmouseover = function(evt){ pixarray[92]=1; 
                                   prob1+=2;
                                   prob3+=2;
                                   prob4+=2;
                                   prob6+=6;
                                   prob9+=3;}
    s93.onmouseover = function(evt){ pixarray[93]=1; 
                                   prob1+=2;
                                   prob6+=3;
                                   prob9+=2;}
    s94.onmouseover = function(evt){ pixarray[94]=1; 
                                   prob1+=2;
                                   prob5+=1;
                                   prob6+=2;
                                   prob8+=1;
                                   prob9+=3;}
    s95.onmouseover = function(evt){ pixarray[95]=1; 
                                   prob0+=5;
                                   prob1+=2;
                                   prob2+=4;
                                   prob3+=5;
                                   prob5+=5;
                                   prob6+=2;
                                   prob8+=3;
                                   prob9+=4;}
    s96.onmouseover = function(evt){ pixarray[96]=1; 
                                   prob0+=5;
                                   prob1+=2;
                                   prob2+=2;
                                   prob3+=7;
                                   prob5+=3;
                                   prob6+=5;
                                   prob8+=6;
                                   prob9+=4;}
    s97.onmouseover = function(evt){ pixarray[97]=1; 
                                   prob0+=3;
                                   prob1+=1;
                                   prob2+=4;
                                   prob5+=3;
                                   prob7+=1;
                                   prob8+=3;
                                   prob9+=7;}
    s98.onmouseover = function(evt){ pixarray[98]=1; 
                                   prob0+=4;
                                   prob1+=1;
                                   prob2+=3;
                                   prob3+=5;
                                   prob5+=5;
                                   prob6+=1;
                                   prob7+=3;
                                   prob8+=4;
                                   prob9+=5;}
    s99.onmouseover = function(evt){ pixarray[99]=1; 
                                   prob0+=1;
                                   prob1+=1;
                                   prob2+=6;
                                   prob3+=6;
                                   prob5+=1;
                                   prob7+=5;
                                   prob8+=4;
                                   prob9+=5;}
    s100.onmouseover = function(evt){ pixarray[100]=1; 
                                   prob0+=1;
                                   prob1+=1;
                                   prob2+=6;
                                   prob3+=5;
                                   prob7+=1;
                                   prob8+=8;
                                   prob9+=5;}
    s101.onmouseover = function(evt){ pixarray[101]=1; 
                                   prob1+=1;
                                   prob2+=4;
                                   prob3+=4;
                                   prob4+=1;
                                   prob5+=2;
                                   prob6+=1;
                                   prob7+=8;
                                   prob8+=6;
                                   prob9+=7;}
    s102.onmouseover = function(evt){ pixarray[102]=1; 
                                   prob1+=1;
                                   prob2+=2;
                                   prob3+=5;
                                   prob4+=5;
                                   prob5+=6;
                                   prob6+=1;
                                   prob7+=3;
                                   prob8+=5;
                                   prob9+=9;}
    s103.onmouseover = function(evt){ pixarray[103]=1; 
                                    prob3+=5;
                                    prob4+=6;
                                    prob5+=3;
                                    prob6+=2;
                                    prob8+=4;
                                    prob9+=4;}
    s104.onmouseover = function(evt){ pixarray[104]=1; 
                                    prob3+=3;
                                    prob4+=1;
                                    prob5+=2;
                                    prob6+=3;
                                    prob8+=3;
                                    prob9+=4;}
    s105.onmouseover = function(evt){ pixarray[105]=1; 
                                    prob4+=1;
                                    prob5+=2;
                                    prob6+=5;
                                    prob8+=1;
                                    prob9+=3;}
    s106.onmouseover = function(evt){ pixarray[106]=1; 
                                    prob0+=1;
                                    prob3+=2;
                                    prob4+=1;
                                    prob5+=3;
                                    prob6+=5;
                                    prob8+=1;
                                    prob9+=4;}
    s107.onmouseover = function(evt){ pixarray[107]=1; 
                                    prob0+=5;
                                    prob1+=1;
                                    prob2+=5;
                                    prob3+=4;
                                    prob4+=1;
                                    prob5+=6;
                                    prob6+=2;
                                    prob8+=5;
                                    prob9+=2;}
    s108.onmouseover = function(evt){ pixarray[108]=1; 
                                    prob0+=3;
                                    prob1+=1;
                                    prob2+=4;
                                    prob3+=4;
                                    prob4+=1;
                                    prob5+=1;
                                    prob6+=6;
                                    prob8+=3;
                                    prob9+=3;}
    s109.onmouseover = function(evt){ pixarray[109]=1; 
                                    prob1+=1;
                                    prob2+=3;
                                    prob5+=3;
                                    prob7+=1;
                                    prob8+=3;
                                    prob9+=3;}
    s110.onmouseover = function(evt){ pixarray[110]=1; 
                                    prob0+=4;
                                    prob2+=5;
                                    prob4+=3;
                                    prob5+=4;
                                    prob7+=3;
                                    prob8+=5;
                                    prob9+=10;}
    s111.onmouseover = function(evt){ pixarray[111]=1; 
                                    prob0+=8;
                                    prob2+=6;
                                    prob3+=7;
                                    prob4+=5;
                                    prob5+=2;
                                    prob7+=8;
                                    prob8+=5;
                                    prob9+=9;}
    s112.onmouseover = function(evt){ pixarray[112]=1; 
                                    prob0+=4;
                                    prob2+=4;
                                    prob3+=6;
                                    prob4+=5;
                                    prob6+=1;
                                    prob7+=8;
                                    prob8+=7;
                                    prob9+=7;}
    s113.onmouseover = function(evt){ pixarray[113]=1; 
                                    prob0+=4;
                                    prob2+=1;
                                    prob3+=3;
                                    prob4+=4;
                                    prob6+=1;
                                    prob7+=1;
                                    prob8+=1;
                                    prob9+=4;}
    s114.onmouseover = function(evt){ pixarray[114]=1; 
                                    prob0+=3;
                                    prob3+=2;
                                    prob4+=9;
                                    prob5+=3;
                                    prob7+=1;
                                    prob8+=1;
                                    prob9+=3;}
    s115.onmouseover = function(evt){ pixarray[115]=1; 
                                    prob0+=2;
                                    prob3+=1;
                                    prob4+=9;
                                    prob5+=7;
                                    prob8+=6;
                                    prob9+=2;}
    s116.onmouseover = function(evt){ pixarray[116]=1; 
                                    prob0+=1;
                                    prob3+=8;
                                    prob4+=6;
                                    prob5+=4;
                                    prob6+=2;
                                    prob8+=7;
                                    prob9+=2;}
    s117.onmouseover = function(evt){ pixarray[117]=1; 
                                    prob0+=2;
                                    prob3+=9;
                                    prob4+=2;
                                    prob5+=6;
                                    prob6+=6;
                                    prob8+=6;
                                    prob9+=2;}
    s118.onmouseover = function(evt){ pixarray[118]=1; 
                                    prob0+=6;
                                    prob3+=9;
                                    prob4+=6;
                                    prob5+=5;
                                    prob6+=6;
                                    prob8+=7;
                                    prob9+=3;}
    s119.onmouseover = function(evt){ pixarray[119]=1; 
                                    prob0+=4;
                                    prob2+=6;
                                    prob3+=7;
                                    prob4+=6;
                                    prob5+=3;
                                    prob6+=6;
                                    prob8+=8;
                                    prob9+=3;}
    s120.onmouseover = function(evt){ pixarray[120]=1; 
                                    prob0+=1;
                                    prob2+=6;
                                    prob3+=2;
                                    prob4+=8;
                                    prob6+=2;
                                    prob8+=1;
                                    prob9+=3;}
    s121.onmouseover = function(evt){ pixarray[121]=1; 
                                    prob4+=2;
                                    prob5+=2;}
    s122.onmouseover = function(evt){ pixarray[122]=1; 
                                    prob4+=5;
                                    prob5+=1;
                                    prob7+=2;
                                    prob9+=2;}
    s123.onmouseover = function(evt){ pixarray[123]=1; 
                                    prob0+=1;
                                    prob2+=1;
                                    prob4+=7;
                                    prob7+=10;
                                    prob8+=2;
                                    prob9+=3;}
    s124.onmouseover = function(evt){ pixarray[124]=1; 
                                    prob0+=5;
                                    prob2+=1;
                                    prob3+=1;
                                    prob4+=6;
                                    prob6+=1;
                                    prob7+=3;
                                    prob8+=1;
                                    prob9+=2;}
    s125.onmouseover = function(evt){ pixarray[125]=1; 
                                    prob0+=6;
                                    prob4+=5;}
    s126.onmouseover = function(evt){ pixarray[126]=1; 
                                    prob0+=5;}
    s127.onmouseover = function(evt){ pixarray[127]=1; 
                                    prob0+=6;
                                    prob5+=2;
                                    prob8+=1;}
    s128.onmouseover = function(evt){ pixarray[128]=1; 
                                    prob0+=7;
                                    prob3+=1;
                                    prob4+=1;
                                    prob5+=3;
                                    prob6+=1;
                                    prob8+=1;}
    s129.onmouseover = function(evt){ pixarray[129]=1; 
                                    prob0+=4;
                                    prob3+=1;
                                    prob4+=1;
                                    prob5+=4;
                                    prob8+=2;}
    s130.onmouseover = function(evt){ pixarray[130]=1; 
                                    prob0+=2;
                                    prob3+=1;
                                    prob5+=1;
                                    prob8+=3;}
    s131.onmouseover = function(evt){ pixarray[131]=1; 
                                    prob2+=5;
                                    prob8+=1;}
    s132.onmouseover = function(evt){ pixarray[132]=1; 
                                    prob2+=5;
                                    prob6+=1;}
    s133.onmouseover = function(evt){ pixarray[133]=1; }
    s134.onmouseover = function(evt){ pixarray[134]=1; }
    s135.onmouseover = function(evt){ pixarray[135]=1; 
                                    prob6+=1;
                                    prob7+=4;}
    s136.onmouseover = function(evt){ pixarray[136]=1; }
    s137.onmouseover = function(evt){ pixarray[137]=1; }
    s138.onmouseover = function(evt){ pixarray[138]=1; }
    s139.onmouseover = function(evt){ pixarray[139]=1; }
    s140.onmouseover = function(evt){ pixarray[140]=1; 
                                    prob6+=1;
                                    prob8+=1;}
    s141.onmouseover = function(evt){ pixarray[141]=1; 
                                    prob8+=1;}
    s142.onmouseover = function(evt){ pixarray[142]=1; }
    s143.onmouseover = function(evt){ pixarray[143]=1; }
    s144.onmouseover = function(evt){ pixarray[144]=1; 
                                    prob2+=4;
                                    prob6+=1;}  
  
  if(go == 1){
    nextbtn.onclick = function(e) {
      
     compare(pixarray);
    }
  }
} //end new letter button function



deletebtn.onclick = function(evt) {
  var message = document.getElementById("message");
  var text = message.text;
  text = text.slice(0, -1);
  message.text=text;
}


//determine handwriting to text letter
function compare(array){
  
  prob0=prob0/266;
  prob1=prob1/120;
  prob2=prob2/262;
  prob3=prob3/239;
  prob4=prob4/188;
  prob5=prob5/248;
  prob6=prob6/255;
  prob7=prob7/194;
  prob8=prob8/324;
  prob9=prob9/253;

  
  
  let bestProb=prob0;
  let bestMatch=0;
  
  if(prob1>bestProb){
    bestProb=prob1;
    bestMatch=1;
  }
  if(prob2>bestProb){
    bestProb=prob2;
    bestMatch=2;
  }
    if(prob3>bestProb){
    bestProb=prob3;
    bestMatch=3;
  }
    if(prob4>bestProb){
    bestProb=prob4;
    bestMatch=4;
  }
    if(prob5>bestProb){
    bestProb=prob5;
    bestMatch=5;
  }
    if(prob6>bestProb){
    bestProb=prob6;
    bestMatch=6;
  }
    if(prob7>bestProb){
    bestProb=prob7;
    bestMatch=7;
  }  
  if(prob8>bestProb){
    bestProb=prob8;
    bestMatch=8;
  }
    if(prob9>bestProb){
    bestProb=prob9;
    bestMatch=9;
  }

   let nospace = 0;
 
    
    for(let j=1; j<=144; j++){
      if(array[j] == 1){
        nospace++;
      }}
      

  
  var message = document.getElementById("message");
  
  if(nospace==0){
    bestMatch=" ";
    
  }
  console.log("best match is:" + bestMatch);
  let printMessage=(bestMatch);
  
  
  
//         if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
//           //Send object as JSON string to companion
//           messaging.peerSocket.send(JSON.stringify(bestMatch));
//       }

// //When companion sends a message
// messaging.peerSocket.onmessage = evt => {
//   //Write to the display
//   console.log(evt.data);

// }
  
  message.text+=printMessage;
  
} //end compare function


let noteCount=1;

savebtn.onclick = function(evt) {
  var cur_message = document.getElementById("message");
  var cur_text = cur_message.text;
  let myPopup = document.getElementById("my-popup");
  var cur_note = "note" + noteCount;
  
  var note1 = document.getElementById(cur_note);
  
  note1.text=cur_note + ": " + cur_text;

// Show the popup
myPopup.style.display = "inline";
  

let btnLeft = myPopup.getElementById("btnLeft");

btnLeft.onclick = function(evt) {
  console.log("LATER");
  myPopup.style.display = "none";
  noteCount++;
  //message.text="";
}


  
  
}








