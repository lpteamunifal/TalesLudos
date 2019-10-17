<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Log;

Route::get('/', function () {
	$plugins = scandir('./../resources/plugins/');
	$dir = array_shift($plugins);
	$dir = array_shift($plugins);
    return view('index', compact("plugins"));
});

Route::group(['middleware' => 'web'] , function(){

	Route::post('login', "UserController@login");
	Route::post('register', "UserController@register");
	Route::post('/save', "ProjectController@tmpsave");
});

$router->group(['middleware' => 'auth'], function() {
    Route::post('/save', "ProjectController@save");
	Route::get('/view', "ProjectController@view");
});

$router->group(['middleware' => 'guest'], function() {
    Route::post('/save', "ProjectController@tmpsave");
	Route::get('/view', "ProjectController@view");
});

