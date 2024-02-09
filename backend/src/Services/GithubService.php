<?php

namespace App\Services;

use GuzzleHttp\Client;

class GithubService
{
    private $apiUrl;
    
    public function __construct()
    {
        $this->apiUrl = 'https://api.github.com/';
    }

    public function getUserData(string $username): array
    {
        $client = new Client();

        $response = $client->request('GET', $this->apiUrl . "users/{$username}", [
            'headers' => [
                'Accept' => 'application/json',
            ],
        ]);

        if ($response->getStatusCode() === 200) {
            $userData = json_decode($response->getBody(), true);

            $filename = "user_data_{$username}.json";
            $storageService = new StorageService();
            $response = $storageService->saveJson($filename, $userData, 'profile');
            print_r($response); die();
            return $userData;
        }

        return [];
    }
}
