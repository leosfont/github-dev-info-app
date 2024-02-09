<?php

namespace App\Controllers;

use App\Services\GithubService;
use App\Services\StorageService;

class GithubController
{
    private $githubService;

    public function __construct(GithubService $githubService)
    {
        $this->githubService = $githubService;
    }

    public function getUserData(string $username)
    {
        $userData = $this->githubService->getUserData($username);

        if (!empty($userData)) {
            return response()->json(['message' => 'Informações salvas localmente!', 'data' => $userData]);
        } else {
            return response()->json(['message' => 'Falha ao obter informações do usuário do GitHub.'], 500);
        }
    }
}