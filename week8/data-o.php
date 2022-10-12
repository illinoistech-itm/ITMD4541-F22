<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

//$data = array('name' => 'Brian', 'class' => 'ITMD-4565');

//echo json_encode($data);

$data = '{"gender":"Male","name":"George","favorite_color":"Green","active":true,"age":74}';




echo $data;

