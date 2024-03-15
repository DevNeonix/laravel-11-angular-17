<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'api'], function () {
    Route::get('/', function(){
        return 'Api';
    });
});

Route::get('{any}', function () {
    return view('frontend');
})->where('any', '.*');
