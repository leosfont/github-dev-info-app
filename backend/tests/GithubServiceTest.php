<?php

use PHPUnit\Framework\TestCase;
use App\Services\GithubService;

class GithubServiceTest extends TestCase
{
    public function testProfileLocal()
    {
        $service = new GithubService();
        $username = 'leosfont';
        $service->saveUserData($username);
        $response = $service->getUserData($username);
        $responseData = json_decode($response);
        $this->assertEquals($username, $responseData->login);
    }
}