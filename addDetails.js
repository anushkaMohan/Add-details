$(function(){
      $("button").on("click",function(){
        const rollNo=$("#rollNo").val();
        const name=$("#name").val();
        const marks=$("#marks").val();
      if(rollNo=='' || name=='' || marks==''){
        alert("Please fill all details!");
      }
      else{
        var appendText="<p>Roll no - <b>"+rollNo+"</b> , <b>"+name+"</b> have got <b>"+marks+"</b> marks</p>";
        $("#display").append(appendText);
        $("#rollNo").val("");
        $("#name").val("");
        $("#marks").val("");

      }
      })









});