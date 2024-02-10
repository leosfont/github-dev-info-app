<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require __DIR__ . '/../src/app.php';

$app = new App();
$app->run();