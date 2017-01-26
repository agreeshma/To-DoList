/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function loaddata(){
     display();
     
     
      }
function display(){
     var obj;
        var mytable;
       
    if(localStorage){
          for (i = 0; i < localStorage.length; i++)  { //looping through the local storage to get all the stored records
           obj = JSON.parse(localStorage.getItem(localStorage.key(i)));  //storing each record in obj variable
                //console.log(obj["name"]); //printing only task name from obj object
            
            
            if(i==0){
            mytable = "<table><tr><th>Task Name</th><th>Description</th><th>Alter</th></tr>";
        }
  mytable += "<div><tr><td id='" +  obj["name"] +"1'>" +  obj["name"] + "</td><td>" +  obj["desc"] + "</td><td><input type='button' value='X' id='" +  obj["name"] +"' class='x' onclick='deleteRecrd(this.id)' >&nbsp<input type='button' value='Update' id='" +  obj["name"] +"' class='edit' onclick='updateRecrd(this.id)' ></td></tr></div>";
}
           

mytable += "</table>";
            //alert(mytable);
            //var store=JSON.parse(localStorage.getItem('task'));
          //console.log(store.name);
          
          document.getElementById('div2').innerHTML= mytable;  
          
      }
}

function deleteRecrd(del){
    localStorage.removeItem(del);
    location.reload();
}

function updateRecrd(upd){
    var obj = JSON.parse(localStorage.getItem(upd));
    console.log(obj.name);
     $('#updateDiag').dialog({
        
         autoOpen: false,
         bgiframe: true,
             //height: 85,
             width: 600,
             resizable: false,
             title : "Update Task!",
              });
              
              $("#taskUpdate").val(obj.name);
              $("#descUpdate").val(obj.desc);
              $("levelUpdate").val(obj.level);
              $("#updateDiag").dialog('open');
}

 $(document).ready(function () {
    //$('#dialog').dialog(); 
    $('#dialog').dialog({
        
         autoOpen: false,
         bgiframe: true,
             //height: 85,
             width: 600,
             resizable: false,
             title : "Add Task!",
             
            
        
    });
    // on clicking the add a task button it will display a dialogue box
    $('#button_link').click(function () {
      //  $('#dialog').load('task.html'); 
        document.getElementById("dialog").innerHTML = '<object width="400" height="300" type="text/html" data="task.html" ></object>';  
        $('#dialog').dialog('open');
        
        return false;

    });
    //updating the task after clicking the update button
    $('#recrdUpdate').click(function(){
        
        var areaUp= $('#descUpdate').val();
        var dropdownUp= $('#levelUpdate').val();
        var key=$('#taskUpdate').val();
        var Update={};
        Update.name=key;
        Update.desc=areaUp;
        Update.level=dropdownUp;
        
        localStorage.setItem(key,JSON.stringify(Update));
        
        window.parent.location.reload(true);
    });
    
    //adding the task on to the local storage.
    $('#addbtn').click(function(){
        
        var txt=$('#textid').val();
        var area=$('#txtarea').val();
        var dropdwn= $('#priorityid').val(); 
        var task ={};            //creating object.
        task.name=txt;
        task.desc=area;
        task.level= dropdwn;
        
        if(localStorage){ // checking if the browser supportst he local storage.
          localStorage.setItem(task.name, JSON.stringify(task) ); //saving taskname as key value ,converting 'task' object to string.
          //$('#dialog').dialog('close');
          //display();
           window.parent.location.reload(true);  //reload the parent window.
      }
        
        
          
          
    });
//    $('#cancelbtn').click(function (){            
//         $(this).dialog('destroy');
//     });

});

   

