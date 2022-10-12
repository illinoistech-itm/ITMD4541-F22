<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

//$data = array('name' => 'Brian', 'class' => 'ITMD-4565');

//echo json_encode($data);

$data = '[{"gender":"Male","name":"George","favorite_color":"Green","active":true,"age":74},
{"gender":"Male","name":"Alan","favorite_color":"Mauv","active":false,"age":18},
{"gender":"Male","name":"Todd","favorite_color":"Blue","active":false,"age":50},
{"gender":"Female","name":"Kimberly","favorite_color":"Teal","active":true,"age":55},
{"gender":"Male","name":"Brian","favorite_color":"Purple","active":false,"age":31},
{"gender":"Male","name":"Henry","favorite_color":"Purple","active":true,"age":64},
{"gender":"Male","name":"Terry","favorite_color":"Orange","active":true,"age":5},
{"gender":"Male","name":"Ronald","favorite_color":"Aquamarine","active":true,"age":80},
{"gender":"Female","name":"Joan","favorite_color":"Red","active":true,"age":74},
{"gender":"Male","name":"Joe","favorite_color":"Indigo","active":true,"age":43},
{"gender":"Female","name":"Emily","favorite_color":"Orange","active":false,"age":6},
{"gender":"Male","name":"Fred","favorite_color":"Aquamarine","active":false,"age":53},
{"gender":"Female","name":"Robin","favorite_color":"Red","active":true,"age":59},
{"gender":"Male","name":"Edward","favorite_color":"Mauv","active":false,"age":30},
{"gender":"Female","name":"Cheryl","favorite_color":"Crimson","active":false,"age":26},
{"gender":"Male","name":"Douglas","favorite_color":"Purple","active":true,"age":28},
{"gender":"Male","name":"Edward","favorite_color":"Teal","active":false,"age":46},
{"gender":"Male","name":"Jeffrey","favorite_color":"Mauv","active":true,"age":12},
{"gender":"Male","name":"Victor","favorite_color":"Fuscia","active":true,"age":62},
{"gender":"Female","name":"Gloria","favorite_color":"Pink","active":false,"age":37}]';

echo $data;