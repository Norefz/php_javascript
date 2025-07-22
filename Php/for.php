<?php 


// while
$i = 5;
while ($i < 10) {
  echo $i;
  $i++;
}
$i = 1;
echo("<p>");
//do while
do {
  echo $i;
  $i++;
} while ($i < 6);
echo("<p>");
for ($x = 2; $x <= 20; $x++) {
  echo "The number is: $x <br>";
}
echo("<p>");
//break stop 
for ($x = 1; $x < 15; $x++) {
  if ($x == 10) {
    break;
  }
  echo "The number is: $x <br>";
}
//continue
for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    continue;
  }
  echo "The number is: $x <br>";
}
?>
