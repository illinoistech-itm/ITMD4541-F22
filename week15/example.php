<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Example</title>
</head>
<body>
  <ul>
  <?php
    $colors = ['red', 'green', 'blue'];
    foreach($colors as $val) {
      echo "<li>$val</li>";
    }
  ?>
  </ul>
  <h2>Now</h2>
  <?php 
    date_default_timezone_set('America/Chicago');
    echo date('l jS \o\f F Y h:i:s A'); 
  ?>
</body>
</html>