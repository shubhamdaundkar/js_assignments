
var students = [];
function add(event) {
  event.preventDefault();
  var details =
    {
      name: "",
      age: 0,
      marks: []
    }
  var form = document.getElementById("addForm");
  for (var i = 0; i < students.length; i++) {
    if (students[i].name == form.name.value) {
      alert("name already exists try another name...");
      return false;
    }
  }
  //JSON.stringify(obj).match(g).length
  //var result = JSON.stringify(students).match(/[^\\]":/g).length+1;

  // flat = a => a.reduce((p,c) => p.concat(Array.isArray(c) ? flat(c) : c),[]);
  // result = flat(details).length;
  //console.log(result);
  var result=JSON.stringify(students).match(/[^\\]":/g).length;

  var index;
  details.name = form.name.value;
  details.age = form.age.value;
  details.marks.push(form.m1.value);
  details.marks.push(form.m2.value);
  details.marks.push(form.m3.value);
  students.push(details);
  var avg = 0;


  for (var j = 0; j < students[i].marks.length; j++) {
    avg += (students[i].marks[j] / 3);
  }

  function generate_table(data) {

    //var result = JSON.stringify(students).match().length++;
   // console.log(result);
    // get the reference for the body
     var body1 = document.getElementsByTagName("body");
    // //  
    // //   // creates a <table> element and a <tbody> element
    var tbl1  = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // //  
    // // creating all cells
    
    for (var i = 0; i < students.length; i++) {
      // creates a table row
      var row = document.createElement("tr");
            for (var j = 0; j < result.length; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode(students[i].result[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      // add the row to the end of the table body
      document.getElementById("index").appendChild(row);
            
    // put the <tbody> in the <table>
    tbl1.appendChild(tblBody);
            
    // // appends <table> into <body>
     body1.appendChild(tbl1);
    // // sets the border attribute of tbl to 2;
  
          }
        }

  generate_table(students);
  console.log(details);

}

























    //  for(var i=0;i<students.length ; i++)
    //   {
    //     var row=document.createElement("tr");
    //     for(var j=0 ; i<students[i].length ; j++)
    //     {
    //       var cell=document.createElement("td");
    //       var celltext=document.createTextNode(students[i].name);
    //       cell.appendChild(celltext);
    //       row.appendChild(cell);
    //     }
    //     document.getElementById("index").appendChild(row);
    //     }


    // var name,age,m1,m2,m3,per,res,tr,td,index;
    // var row = document.createElement("tr");
    // var name = document.createElement("td");
    // var age = document.createElement("td");
    // var m1 = document.createElement("td");
    // var m2 = document.createElement("td");
    // var m3 = document.createElement("td");
    // var per = document.createElement("td");
    // var res = document.createElement("td");
    // var value1 = document.createTextNode(students[i].name);
    // var value2 = document.createTextNode(students[i].age);  
    // var value3 = document.createTextNode(students[i].marks[0]);
    // var value4 = document.createTextNode(students[i].marks[1]);
    // var value5 = document.createTextNode(students[i].marks[2]);
    // var value6 = document.createTextNode(avg.toFixed(2));
    // var value7 = document.createTextNode((students[i].marks[0]) >= 40 && (students[i].marks[1]) >= 40 && (students[i].marks[2]) >= 40 ? "Pass" : "Fail");
    // name.appendChild(value1);
    // age.appendChild(value2);
    // m1.appendChild(value3);
    // m2.appendChild(value4);
    // m3.appendChild(value5);
    // per.appendChild(value6);
    // res.appendChild(value7);
    // row.appendChild(name);
    // row.appendChild(age);
    // row.appendChild(m1);
    // row.appendChild(m2);
    // row.appendChild(m3);
    // row.appendChild(per);
    // row.appendChild(res); 
    // document.getElementById("index").appendChild(row);


