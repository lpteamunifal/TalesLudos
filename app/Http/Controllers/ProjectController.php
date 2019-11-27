<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use View;

class ProjectController extends Controller
{
	private $wait = false;
	
    public function save(Request $request){
		
	}
	
	public function tmpsave(Request $request){
		$data = json_decode($request->getContent());
		
		// Write File
		$newJsonString = json_encode($data, JSON_PRETTY_PRINT);
		$string = "var data = " . stripslashes($newJsonString) . ";";

		file_put_contents(base_path('projects/tmp/tmp.json'), $string);
	}
	
	public function view(Request $request){
		return file_get_contents(base_path('projects/tmp/tmp.json'));
	}

	public function viewGame(Request $request){

		$data = $request->json()->all();

		$plugins = scandir('./../resources/plugins/');
		$dir = array_shift($plugins);
		$dir = array_shift($plugins);
		return \View::make('viewGame')->with('data', $data)->with('plugins', $plugins)->render();
	}
}
