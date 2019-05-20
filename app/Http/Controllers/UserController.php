<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function register(Request $request){
    	
    	$password = $request->input('password');

    	$validator = Validator::make($request->all(),
    		[
    			'name' => 'required|max: 60|string',
    			'last_name' => 'required|max :100|string',
    			'email' => 'required|email|max: 255|unique:users',
    			'password' => 'required|alpha_num|min: 6',
    			're_password' => 'required|alpha_num|in:'.$password,
    		],
    		[
        		'required' => 'O campo :attribute é obrigatório',
        		'unique' => 'O email já esta vinculado a outra conta',
        		'email' => 'Email inválido',
        		'min' => 'A senha deve conter no minímo 6 letras',
        		'in' => 'Confirmação de senha não confere',
        		'max' => 'O campo :attribute pode conter no maxímo :max caracteres'
		    ], 
		    [
		        'name'      => 'Nome',
		        'last_name' => 'Sobrenome',
		        'email'     => 'E-mail',
		        'password'  => 'Senha',
		        're_password' => 'Confirmação de Senha'
		    ]); 

    	if($validator->fails())
    	{
    		return redirect()->back()->withErrors($validator->errors(), 'register')->withInput(Input::except('password','re_password'));
    	}
    	else
    	{
    		$user = new User();

    		$name = $request->input('name');
	    	$last_name = $request->input('last_name');
	    	$email = $request->input('email');
	    	$password = Hash::make($request->input('password'));
	    		     
	    	$user->create(['name' => $name, 'last_name' => $last_name, 'email' => $email, 'password' => $password]);

	    	\Session::flash('success', 'Registro efetuado com sucesso. Faça agora seu login e aproveite!');

	    	return back();
    	}
    }

    public function login(Request $request){
    	$validator = Validator::make($request->all(),
    		[
    			'email' => 'required|email|max: 255',
    			'password' => 'required|alpha_num|min: 6',
    		],
    		[
        		'required' => 'Preencha :attribute para efetuar seu login',
        		'email' => 'Email inválido',
        		'min' => 'A senha deve conter no minímo 6 letras',
        		'max' => 'O campo :attribute pode conter no maxímo :max caracteres'
		    ], 
		    [
		        'email'     => 'E-mail',
		        'password'  => 'Senha'
		    ]); 

    	if($validator->fails())
    	{
    		return redirect()->back()->withErrors($validator->errors(), 'login')->withInput(Input::except('password'));
    	}
    	else
    	{

    		$user = new User();
    		/*$user = array(
    			'email' => $request->input('email'),
    			'password' => $request->input('password')
    		);*/

    		$find = $user->where('email', $request->input('email'))->first();
	    	
	    	if($find)
	    	{
	    		if(Hash::check($request->input('password'), $find->password)){
	    			Auth::login($find);
	    			return back();
	    		}
	    		else
		    	{
		    		\Session::flash('login_fail', 'E-mail e senha não coincidem');
		    		return back();
		    	}
	    	}
	    	else
	    	{
	    		\Session::flash('login_fail', 'E-mail não cadastrado');
	    		return back();
	    	}	     
	    	/*if(Auth::attempt($user))
	    	{
	    		return back();
	    	}*/
	    	
	    	
    	}
    }
}
