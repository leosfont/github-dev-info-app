<?php

namespace App\Controllers;

use App\Services\GithubService;

class GithubController
{
    public function saveProfileToLocal(string $username)
    {
        $githubService = new GithubService();
        $userData = $githubService->getUserData($username);

        if (!empty($userData)) {
            return response()->json(['message' => 'Informações salvas localmente!', 'data' => $userData]);
        } else {
            return response()->json(['message' => 'Falha ao obter informações do usuário do GitHub.'], 500);
        }
    }
}