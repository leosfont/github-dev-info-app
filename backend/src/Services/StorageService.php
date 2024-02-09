<?php

namespace App\Services;

class StorageService
{
    private $storagePath;

    public function __construct()
    {
        $this->storagePath = 'storage';
    }

    public function saveJson(string $filename, array $data, string $subdirectory = ''): bool
    {
        $directory = $this->storagePath . '/' . $subdirectory;
        $filePath = $directory . '/' . $filename;
        $jsonData = json_encode($data);

        if (!is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        return file_put_contents($filePath, $jsonData) !== false;
    }
}