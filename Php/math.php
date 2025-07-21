<?php 
echo (min(122,20,100,12));
echo ("<p>");
echo (max(122,20,100,12));
echo ("<p>");
$X = [10,25,21,30,12];
rsort ($X);
foreach ($X as $Min){
  echo $Min . " ";
}
sort ($X);
echo ("<p>");
foreach ($X as $Min){
  echo $Min . " ";
}
//better version  
$number = [10,21,12,244,122,344,452,92];
echo ("<p>");
rsort($number); echo "Desc: " . implode(" ", $number) . "<br>";
sort($number); echo "Asc: " . implode(" ", $number);
echo ("<p>");
echo("30-10 =". 30-10 );
echo ("<p>");
//Random Number
echo(rand(49, 1000));

?>
