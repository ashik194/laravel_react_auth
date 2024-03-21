<?php

namespace Tests\Unit;

//use PHPUnit\Framework\TestCase;
use Tests\TestCase;

class AuthTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    /** @test  */
    public function test_auth_login(): void
    {
        $response  = $this->call('POST', '/api/login',[
            'email'     => 'admin@gmail.coms',
            'password'  => '12345678@as'
        ]);
        $this->assertEquals(200, $response->getStatusCode());
//        $this->assertTrue(true);
    }

    /** @test  */
    public function test_auth_signup():void
    {
        $response = $this->call("POST","/api/signup", [
            "name"                  => "Mr. Tester",
            'email'                 => "newtesting@gmail.com",
            "password"              => "testing1234@",
            "password_confirmation" => "testing1234@",
            "role"                  => "2"
        ]);

        $this->assertEquals(200, $response->getStatusCode());
    }

    /** @test */


}
