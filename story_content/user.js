function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RYJ9OWXKTc":
        Script1();
        break;
      case "6UTCg1ae4cw":
        Script2();
        break;
      case "5kX3OkMkWR9":
        Script3();
        break;
      case "609ccnZft3Z":
        Script4();
        break;
      case "6pdKHXeQPzN":
        Script5();
        break;
      case "6Ds0gXuNkkl":
        Script6();
        break;
      case "6lfo4tvr3Eu":
        Script7();
        break;
      case "5ZLXsz64E0N":
        Script8();
        break;
      case "5j28y5EPVpf":
        Script9();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script2()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script3()
{
  window.print();
}

function Script4()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script5()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script6()
{
  window.print();
}

function Script7()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script8()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script9()
{
  window.print();
}

