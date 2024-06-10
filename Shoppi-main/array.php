<h1>Arrays</h1>
<?php
//Index Array or Numeric Array
$color  = array("Black","Green","White","Red","Black",75);
print_r($color);
?>
<pre>
    <?php
    print_r($color);
    ?>
</pre>
<?php 
var_dump($color);
?>
<h1> Associative Arrays</h1>
<?php
$user_emails = array(
    "ALex" => "aiko@gmail.com",
    "ALlan" => "auko@gmail.com",
    "SHosh" => "alko@gmail.com"
    );
?>
<pre>
    <?php
    print_r($user_emails);
    ?>
</pre>
<h1>Multidimensional Arrays</h1>
<?php
$user_details=[
    "Director" => [
        "Fullname" =>"ALex Okama",
        "Email" => "AOkama@yahoo.com",
        "Address" => "Mada",
        "Phone" => [
            "Mobile" => "0722341806",
            "Cell" => "0722341806",
            "Work" => "0722341806"]
            ]
    ]
?>
<h1>Numeric Arrays</h1>