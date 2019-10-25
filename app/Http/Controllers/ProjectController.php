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
		$this->wait = true;
		$data = json_decode($request->getContent());
		
		Log::info($request);
		
		// Write File
		$newJsonString = json_encode($data, JSON_PRETTY_PRINT);
		file_put_contents(base_path('projects/tmp/tmp.json'), stripslashes($newJsonString));
		$this->wait = false;
	}
	
	public function view(Request $request){
		while($this->wait){}
		
		return file_get_contents(base_path('projects/tmp/tmp.json'));
	}

	/*
	 * Mostra a lista de projetos do usuário
	 *
	 * 
	*/
	public function retrieve()
	{
		$user = Auth::user();
		$projects = DB::table('projects')->where('user_id',$user->id);
		return view('user', compact('projects'));
	}
	
	/*
	 * Deleta um dos projetos do usuário
	 *
	 * @param ind $id
	 * @return \Illuminate\Http\Response
	*/
	public function destroy($id)
	{
		
		$project = Projects::find($id);
		$project->delete();
		return redirect()->route('user')->with('sucess', 'Projeto deletado');
	}

}
