<?php 

function message(){
  echo("hellow my friend");
}
message();
//name
function myoji($name,$year){
echo("$name West. Born in $year <br>");
}
myoji("Kanye","1885");
myoji("Niba","1875");
myoji("Mina","1975");
myoji("kiba","1874");
//sum
function sum($x, $y) {
  $z = $x + $y;
  return $z;
}

echo "20 + 10 = " . sum(20,10) . "<br>";
echo "30 + 13 = " . sum(30,13) . "<br>";
echo "2 + 4 = " . sum(2,4);
?>
