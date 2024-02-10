<?php

namespace App\Services;

class StorageService
{
    private $storagePath;

    public function __construct()
    {
        $this->storagePath = __DIR__ . '/../../storage';
    }

    public function getFile(string $filename, string $subdirectory = '') {
        $filePath = "{$this->storagePath}/{$subdirectory}/{$filename}";
        if (file_exists($filePath)) {
            return file_get_contents($filePath);
        } else {
            return null;
        }
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