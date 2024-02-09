<?php

use \Pecee\SimpleRouter\SimpleRouter;

SimpleRouter::get('/', function() {
    return 'Hello world';
});

SimpleRouter::post('/salvar-local/{login}', 'GithubController@saveProfileToLocal');
