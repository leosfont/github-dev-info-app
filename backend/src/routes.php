<?php

use \Pecee\SimpleRouter\SimpleRouter;

SimpleRouter::get('/buscar-local/{username}', 'GithubController@getProfileLocal');

SimpleRouter::post('/salvar-local/{login}', 'GithubController@saveProfileToLocal');
