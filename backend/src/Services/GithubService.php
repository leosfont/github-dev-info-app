<?php

namespace App\Services;

use GuzzleHttp\Client;

class GithubService
{
    private $apiUrl;
    private $storageService;
    
    public function __construct(StorageService $storageService)
    {
        $this->apiUrl = 'https://api.github.com/';
        $this->storageService = $storageService;
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
            $this->storageService->saveJson($filename, $userData, 'profile');

            return $userData;
        }

        return [];
    }
}
