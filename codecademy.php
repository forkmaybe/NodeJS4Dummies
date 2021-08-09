// Dog class inherits from Pet class. 
class Dog extends Pet {
  function bark() {
    return "woof";
  }
}

// constructor with no arguments:
class Person {
  public $favorite_color;
  function __construct() {
    $this->favorite_color = "blue";
  }
}
 
// constructor with arguments:
class Person {
  public $favorite_color;
  function __construct($color) {
    $this->favorite_color = $color;
  }
}

// Test class 
class Test {
  public $color = "blue";
  protected $shape = "sphere";
  private $quantity = 10;
  public static $number = 42;
  public static function returnHello() {
    return "Hello";
  }
}
 
// instantiate new object
$object = new Test();
 
// only color can be accessed from the instance
echo $object->color; # Works
echo $object->shape; # Fails
echo $object->quantity; # Fails
echo $object->number; # Fails
 
// we use the static class to access number
echo Test::$number;


echo filter_var("<p>u</p>pies@codecademy.com", FILTER_SANITIZE_EMAIL);
# prints "puppies@codecademy.com"
echo filter_var("<p>u</p>pies@codecademy.com", FILTER_VALIDATE_EMAIL);
# returns false and prints nothing

$pattern = '/^[(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4}$/';
 
preg_match($pattern, "(999)-555-2222"); // Returns: 1
 
preg_match($pattern, "555-2222"); // Returns: 0

echo strlen("Codecademy");
# prints "10"

$one = "codeacademy";
$two = "CodeAcademy";
$three = "code academy";
$four = "Code Academy";
 
$pattern = "/[cC]ode\s*[aA]cademy/";
$codecademy = "Codecademy";
 
echo preg_replace($pattern, $codecademy, $one);
// Prints: Codecademy
 
echo preg_replace($pattern, $codecademy, $two);
// Prints: Codecademy
 
echo preg_replace($pattern, $codecademy, $three);
// Prints: Codecademy
 
echo preg_replace($pattern, $codecademy, $four);
// Prints: Codecademy

if (/* Is the submission data validated? */) {
  header("Location: https://www.codecademy.com/learn/learn-php/");
  exit;
}


$text = "This text is <b>bold</b>.";
 
echo htmlspecialchars($text);
// prints This text is &lt;b&gt;bold&lt;/b&gt;.

echo trim("         hello world    ");
# prints "hello world"

// We can use the break statement to end the loop once the count reaches 4
$count = 1;
while ($count < 10)
{
  echo "The count is: " . $count . "\n";
  if ($count === 4) {
    break;
  }
  $count += 1;
}

// This loop counts from 0 to 100
$count = 0;
do {
  echo "The count is: " . $count . "\n";
  $count += 1;
} while ($count <= 100);

// This for loop counts from 1 to 50
for ($count = 1; $count < 51; $count++)
{
  echo "The count is: " . $count . "\n";
}

// This while loop counts from 0 to 100
$count = 0;
while ($count <= 100)
{
  echo "The count is: " . $count . "\n";
  $count += 1;
}

// This foreach loop counts from 1 to 5
$nums = [1, 2, 3, 4, 5];
foreach ($nums as $num) {
  echo "The num is: " . $num . "\n";
}


// This code counts from 1 to 10 but skips over 5
$count = 1;
while ($count < 11)
{
  if ($count === 5) {
    $count += 1;
    continue;
  }
  echo "The count is: " . $count . "\n";
  $count += 1;
}

<ul>
<?php
for ($i = 0; $i < 2; $i++):
?>
<li>Duck</li>
<?php
endfor;
?>
<li>Goose</li>
</ul>


<ul>
<?php
$array = [0, 1];
foreach ($array as $i):
?>
<li>Duck</li>
<?php
endforeach;
?>
<li>Goose</li>
</ul>

<ul>
<?php
$i = 0;
while ($i < 2):
?>
<li>Duck</li>
<?php
$i++;
endwhile;
?>
<li>Goose</li>
</ul>

echo "https://www.php.net/docs.php"


$a = 9 % 2.3;
//2.3 is converted to the integer, 2. The remainder of 9 % 2 is 1. So the variable $a will hold the integer value 1.
 
$b = -19 % 4;
//The remainder of this operation is -3. So the variable $b will hold the integer value -3.
 
$c = 20 % 2;
//The remainder of this operation is 0. So the variable $c will hold the integer value 0.


$a = 6 / 3;
// The variable $a will hold an integer value, since the operation evaluates to a whole number.
 
$b = 7 / 3;
// The variable $b will hold a floating point value, since the operation evaluates to a decimal number.


echo "Hello, World!\nThis is a String!";
/* prints-
Hello, World!
This is a String!
*/

