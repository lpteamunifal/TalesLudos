<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProjectController extends Controller
{
	private $wait = false;
	
    public function save(Request $request){
		
	}
	
	public function tmpsave(Request $request){
		$data = json_decode($request->getContent());
		
		Log::info($request);
		
		// Write File
		$newJsonString = json_encode($data, JSON_PRETTY_PRINT);
		file_put_contents(base_path('projects/tmp/tmp.json'), stripslashes($newJsonString));
	}
	
	public function view(Request $request){
		return file_get_contents(base_path('projects/tmp/tmp.json'));
	}

	public function viewGame($data){
		return view('viewGame', compact('data'));
	}
}