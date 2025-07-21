<?php  
//Uppercase
$N = "Replace";
$S= "main int not defined";
//make Uppercase strtoupper
echo strtoupper($S);
echo("<p>");
//make lower case
echo strtolower($S);
echo("<p>");
//replace a word
echo str_replace("defined","null",$S);
echo("<p>");
//reverse word
echo strrev($S);
echo("<p>");
echo strrev($N);
echo("<p>");
echo trim($S);
echo("<p>");
$x = "Hello I LOVe You! I hope You Get Well";
$y = explode(" ",$x);

//Use the print_r() function to display the result:
print_r($y);
echo("<p>");
$var = $N. " " .$S;
echo($var);
echo("<p>");
$vik = "We are Demons Want to Save The \"Wordl\"  " ;
echo($vik);
?>
