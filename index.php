<?php
$ex=exec("node myscript.js &", $output);
if($ex)
{
	echo 'running';
}
else
{
	echo 'not running';
}
print_r($output);
?>