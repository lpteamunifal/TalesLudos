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
    return view('index');
});



Route::group(['middleware' => 'web'] , function(){

	Route::post('login', "UserController@login");
	Route::post('register', "UserController@register");
});

$router->group(['middleware' => 'auth'], function() {
    Route::post('/save', "ProjectController@save");
	Route::get('/view', "ProjectController@view");
});

$router->group(['middleware' => 'guest'], function() {
    Route::post('/save', "ProjectController@tmpsave");
	Route::get('/view', "ProjectController@view");
	Route::get('/viewGame/{data}', "ProjectController@viewGame");
});

