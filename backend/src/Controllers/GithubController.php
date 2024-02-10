<?php

namespace App\Controllers;

use App\Services\GithubService;

class GithubController
{
    public function getProfileLocal(string $username)
    {
        $githubService = new GithubService();
        $file = $githubService->getUserData($username);
        if (!$file) {
            return response()->httpCode(404);
        }

        return $file;
    }

    public function saveProfileToLocal(string $username)
    {
        $githubService = new GithubService();
        $userData = $githubService->saveUserData($username);

        if (!empty($userData)) {
            return response()->json(['message' => 'Informações salvas localmente!', 'data' => $userData]);
        } else {
            return response()->httpCode(404);
        }
    }
}