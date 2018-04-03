<?php

require 'vendor/autoload.php';

$app = new Slim\App();

//Our api is implemented here! Slim rocks
$app->get('/hello/{name}', function ($request, $response, $args) {
    return $response->getBody()->write("Hello, " . $args['name']);
});

$app->run();

