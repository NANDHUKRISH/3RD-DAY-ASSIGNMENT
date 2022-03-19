  
//  1. For the given JSON iterate over all for loops (for, for in, for of, forEach)
  
  // SOLUTION:
  
    var data=[
     {
     "id":1,
     "NAME":"NANDHU",
     "AGE":25,
     "PLACE":"KERALA",
     "GENDER":"MALE"
      },
      { "id":2,
      "NAME":"SANU",
      "AGE":24,
      "PLACE":"KERALA",
      "GENDER":"MALE"
      },
      {
      "id":3,
      "NAME":"APARNA",
      "AGE":26,
      "PLACE":"KERALA",
      "GENDER":"FEMALE"
      },

      {
       "id":4,
       "NAME":"ASWINI",
       "AGE":28,
       "PLACE":"KERALA",
       "GENDER":"FEMALE"
       },
       {
        "id":5,
        "NAME":"VYSAKH",
        "AGE":26,
        "PLACE":"KERALA",
        "GENDER":"MALE"
        }]
        JSONDATA=JSON.stringify(data);
        console.log(JSONDATA);
        OBJECT=JSON.parse(JSONDATA);
        console.log(OBJECT);

        console.log("-----------FOR LOOP----------");
        for(i=0;i<OBJECT.length;i++)
        {
        console.log(`
        ID NO:-${OBJECT[i].id}
        NAMME- ${OBJECT[i].NAME}
        AGE-${OBJECT[i].AGE}
        PLACE-${OBJECT[i].PLACE}
        GENDER- ${OBJECT[i].GENDER}`)
        }


        console.log("-----------FOR IN----------");
        for(let i in OBJECT)

        {
        console.log(`
        ID NO:-${OBJECT[i].id}
        NAMME- ${OBJECT[i].NAME}
        AGE-${OBJECT[i].AGE}
        PLACE-${OBJECT[i].PLACE}
        GENDER- ${OBJECT[i].GENDER}`)
        } 

        console.log("-----------FOR EACH----------");
        OBJECT.forEach( i =>
        {
        console.log(`
        ID NO:-${i.id}
        NAMME- ${i.NAME}
        AGE-${i.AGE}
        PLACE-${i.PLACE}
        GENDER- ${i.GENDER}`)
        } )

        console.log("-----------FOR OF----------");
        for(let i of OBJECT)
        {
        console.log(`
        ID NO:-${i.id}
        NAMME- ${i.NAME}
        AGE-${i.AGE}
        PLACE-${i.PLACE}
        GENDER- ${i.GENDER}`)
        } 

// ------OUTPUT-------
  
[{"id":1,"NAME":"NANDHU","AGE":25,"PLACE":"KERALA","GENDER":"MALE"},{"id":2,"NAME":"SANU","AGE":24,"PLACE":"KERALA","GENDER":"MALE"},{"id":3,"NAME":"APARNA","AGE":26,"PLACE":"KERALA","GENDER":"FEMALE"},{"id":4,"NAME":"ASWINI","AGE":28,"PLACE":"KERALA","GENDER":"FEMALE"},{"id":5,"NAME":"VYSAKH","AGE":26,"PLACE":"KERALA","GENDER":"MALE"}]
[
  { id: 1, NAME: 'NANDHU', AGE: 25, PLACE: 'KERALA', GENDER: 'MALE' },
  { id: 2, NAME: 'SANU', AGE: 24, PLACE: 'KERALA', GENDER: 'MALE' },
  { id: 3, NAME: 'APARNA', AGE: 26, PLACE: 'KERALA', GENDER: 'FEMALE' },
  { id: 4, NAME: 'ASWINI', AGE: 28, PLACE: 'KERALA', GENDER: 'FEMALE' },
  { id: 5, NAME: 'VYSAKH', AGE: 26, PLACE: 'KERALA', GENDER: 'MALE' }
]
-----------FOR LOOP----------

        ID NO:-1
        NAMME- NANDHU
        AGE-25
        PLACE-KERALA
        GENDER- MALE

        ID NO:-2
        NAMME- SANU
        AGE-24
        PLACE-KERALA
        GENDER- MALE

        ID NO:-3
        NAMME- APARNA
        AGE-26
        PLACE-KERALA
        GENDER- FEMALE

        ID NO:-4
        NAMME- ASWINI
        AGE-28
        PLACE-KERALA
        GENDER- FEMALE

        ID NO:-5
        NAMME- VYSAKH
        AGE-26
        PLACE-KERALA
        GENDER- MALE

-----------FOR IN----------

        ID NO:-1
        NAMME- NANDHU
        AGE-25
        PLACE-KERALA
        GENDER- MALE

        ID NO:-2
        NAMME- SANU
        AGE-24
        PLACE-KERALA
        GENDER- MALE

        ID NO:-3
        NAMME- APARNA
        AGE-26
        PLACE-KERALA
        GENDER- FEMALE

        ID NO:-4
        NAMME- ASWINI
        AGE-28
        PLACE-KERALA
        GENDER- FEMALE

        ID NO:-5
        NAMME- VYSAKH
        AGE-26
        PLACE-KERALA
        GENDER- MALE

-----------FOR EACH----------

        ID NO:-1
        NAMME- NANDHU
        AGE-25
        PLACE-KERALA
        GENDER- MALE

        ID NO:-2
        NAMME- SANU
        AGE-24
        PLACE-KERALA
        GENDER- MALE

        ID NO:-3
        NAMME- APARNA
        AGE-26
        PLACE-KERALA
        GENDER- FEMALE

        ID NO:-4
        NAMME- ASWINI
        AGE-28
        PLACE-KERALA
        GENDER- FEMALE

        ID NO:-5
        NAMME- VYSAKH
        AGE-26
        PLACE-KERALA
        GENDER- MALE

-----------FOR OF----------

        ID NO:-1
        NAMME- NANDHU
        AGE-25
        PLACE-KERALA
        GENDER- MALE

        ID NO:-2
        NAMME- SANU
        AGE-24
        PLACE-KERALA
        GENDER- MALE

        ID NO:-3
        NAMME- APARNA
        AGE-26
        PLACE-KERALA
        GENDER- FEMALE

        ID NO:-4
        NAMME- ASWINI
        AGE-28
        PLACE-KERALA
        GENDER- FEMALE

        ID NO:-5
        NAMME- VYSAKH
        AGE-26
        PLACE-KERALA
        GENDER- MALE



// 2.Create your own resume data in JSON format

// SOLUTION :

var myresume=[
    {"NAME":"NANDHUKRISHNA M A",
    "EMAIL ID:":"nandhukrish538@gmail.com",
    "PH NO :":"6238317440" },
  
  {
  "CAREER OBJECTIVES-":"Looking for an opportunity in field of engineering for my own career and to contribute to the development of the organization. I am someone with leadership qualities and time management capabilities. I can use my leadership and communication skills to transfer knowledge and to contribute effectively to the common good. "
  },


  {"EDUCATIONAL QUALIFICATIONS :":
  {
  "BACHELOR DEGREE-":"Electrical and Electronics Engineering (2014 - 2018); Government Engineering College Bartonhill, Trivandrum – 6.38 GPA ",
  "SENIOR SECONDARY-": "CBSE(2012 -2014); Jyothi Nilayam Higher Secondary School – 74.4% ", 
   "SECONDARY-":" ICSE (2011 - 2012); Seventh Day Adventist English Medium School – 71%"}},


   {"TECHNICAL SKILLS : ":
   {
     "Programming Languages :":" C, C++,TALLY PRIME,JAVASCRIPT ",
    "Microsoft Office:":" Word, Excel, Power Point"}},


 {"ACADEMIC PROJECTS : ":
 {
    "1.":"Home automation",
    "2.":"Small micro wind turbines using solar panel "}},


    {"EXPERIENCE : ":"FROM 2020 TO PRESENT",
    "COMPANY–":" DEVI INTERNATIONAL",
    "POST–":" ACCOUNTANT "},


  {"PERSONAL PROFILE : ":
  {
  "Date Of Birth-" 	:" 13/07/1996 ",
   "Father’s Name-" 	:" V Mohanakumar", 
   "Mother’s Name-"  :" Anitha R ",
   "Gender-"	:" Male ",
   "Marital Status- "	:" Unmarried", 
   "Nationality-" :"Indian", 
   "Hobbies": ["Yoga","CrickeT","Travelling "],
   "Languages Known":[" English"," Malayalam "],
    "Address for communication "	:
    {"HOUSE NAME":" S V Mandiram",
      "POST OFFICE":"Karyavattom P. O",
      "DISTRICT":"THIRUVANANTHAPURAM",
      "STATE":"KERALA",
      "PIN NO.":"695581 "}}},


    {
   "DECLARATION":" I hereby declare that the given information is true to the best of my knowledge. "}]


  JSONRESUME=JSON.stringify(myresume);
   console.log(`
   JSON RESUME-
   ${JSONRESUME}`);
   RESOBJECT=JSON.parse(JSONRESUME);
   console.log(RESOBJECT);

  //  -------OUTPUT-----

  
  JSON RESUME-
  [{"NAME":"NANDHUKRISHNA M A","EMAIL ID:":"nandhukrish538@gmail.com","PH NO :":"6238317440"},{"CAREER OBJECTIVES-":"Looking for an opportunity in field of engineering for my own career and to contribute to the development of the organization. I am someone with leadership qualities and time management capabilities. I can use my leadership and communication skills to transfer knowledge and to contribute effectively to the common good. "},{"EDUCATIONAL QUALIFICATIONS :":{"BACHELOR DEGREE-":"Electrical and Electronics Engineering (2014 - 2018); Government Engineering College Bartonhill, Trivandrum – 6.38 GPA ","SENIOR SECONDARY-":"CBSE(2012 -2014); Jyothi Nilayam Higher Secondary School – 74.4% ","SECONDARY-":" ICSE (2011 - 2012); Seventh Day Adventist English Medium School – 71%"}},{"TECHNICAL SKILLS : ":{"Programming Languages :":" C, C++,TALLY PRIME,JAVASCRIPT ","Microsoft Office:":" Word, Excel, Power Point"}},{"ACADEMIC PROJECTS : ":{"1.":"Home automation","2.":"Small micro wind turbines using solar panel "}},{"EXPERIENCE : ":"FROM 2020 TO PRESENT","COMPANY–":" DEVI INTERNATIONAL","POST–":" ACCOUNTANT "},{"PERSONAL PROFILE : ":{"Date Of Birth-":" 13/07/1996 ","Father’s Name-":" V Mohanakumar","Mother’s Name-":" Anitha R ","Gender-":" Male ","Marital Status- ":" Unmarried","Nationality-":"Indian","Hobbies":["Yoga","CrickeT","Travelling "],"Languages Known":[" English"," Malayalam "],"Address for communication ":{"HOUSE NAME":" S V Mandiram","POST OFFICE":"Karyavattom P. O","DISTRICT":"THIRUVANANTHAPURAM","STATE":"KERALA","PIN NO.":"695581 "}}},{"DECLARATION":" I hereby declare that the given information is true to the best of my knowledge. "}] script.js:294:12
Array(8) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…} ]