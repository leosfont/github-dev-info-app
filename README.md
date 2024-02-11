# GitHub Developers Explorer

This project aims to explore GitHub developers' information in an intuitive and interactive way. The application is divided into Frontend and Backend to provide a comprehensive experience.

## Frontend

### Technologies Used
- Vue 3
- Vite
- Pinia
- Bootstrap
- Node.js 16
- Yarn

### Features
- Lists information for 4 GitHub developers (wallysonn, diego3g, filipedeschamps, rmanguinho).
- Displays Name, image (avatar), registration date, and the number of repositories for each developer.
- Real-time search field to filter records.
- Clicking on a user allows viewing their complete profile on a separate page using Vue Router with Github repositories.

### Extra Features
- **Local Resource Reuse:** Implemented reusing the resource locally saved by the backend in the frontend, avoiding additional requests for the same GitHub profile.

### Pending Features
- **Frontend Unit Testing with Jest:** I would have liked to include unit tests on the frontend using Jest to ensure code robustness and reliability.
- **Local Saving of Developer Repositories:** Intended to implement local saving of developer repositories to avoid the need to repeat the action, leveraging the profile-saving functionality.

## Backend

### Technologies Used
- PHP 7.4
- Composer
- Apache
- simple-php-router
- Guzzle PHP Client

### Features
- Route "/salvar-local" to save user information locally.
- Route "/buscar-local" to get user information locally.
- Button on the user profile to save login on the backend.
- The backend accesses the GitHub API using Guzzle and saves the result in a JSON file.

## How to Run

1. **Frontend:**
   - Install dependencies using `yarn install`.
   - Run the server with `yarn dev`.

2. **Backend:**
   - Install dependencies with `composer install`.
   - Configure the Apache server to point to the backend folder.
   - Ensure PHP 7.4 is set up correctly.
   - Install PHP DOM extension `sudo apt-get install php-xml` to run the test `./vendor/bin/phpunit`.
   - Run the server with `php -S localhost:3000 -t public`.

We appreciate the opportunity and are available for any adjustments or additional clarifications.
