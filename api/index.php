<?php
session_start();

require 'vendor/autoload.php';

$app = new Slim\App();

//Our api is implemented here! Slim rocks
$app->get('/hello/{name}', function ($request, $response, $args) {
    return $response->getBody()->write("Hello, " . $args['name']);
});

$app->get('/isLoggedIn', function ($request, $response, $args) {
    if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']===TRUE)
        return 'yes'; //return $response->getBody()->write("He");

    //return $response->getBody()->write("He");
    return 'no';
});

$app->post('/login', function(){
    //XSRF-TOKEN cookie create and send back ...
    //Note that from now on, server-side we must check the user sends the appropriate
    //value in X-XSRF-TOKEN html header ...
});

$app->get('/logout', function(){
    //to-do
});

$app->run();

