<?php

require __DIR__ . '/../vendor/autoload.php';

use \Pecee\SimpleRouter\SimpleRouter;

class App
{
    private static SimpleRouter $router;

    public function __construct()
    {
        require_once 'Helpers/route.php';
        require_once 'routes.php';
        self::$router = new SimpleRouter();
        self::$router->setDefaultNamespace('\App\Controllers');
    }

    public function run()
    {
        self::$router->start();
    }
}
