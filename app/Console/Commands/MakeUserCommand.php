<?php

namespace App\Console\Commands;

use App\Actions\Fortify\CreateNewUser;
use App\Models\User;
use Illuminate\Console\Command;

class MakeUserCommand extends Command
{
    protected $signature = 'make:user';

    protected $description = 'Command description';

    public function __construct(
        protected CreateNewUser $createNewUser,
    ) {
        parent::__construct();
    }

    public function handle(): void
    {
        $name = $this->ask('What is your name?');
        $email = $this->ask('What is your email?');
        $password = $this->secret('What is your password?');
        $this->createNewUser->create([
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'password_confirmation' => $password,
        ]);

        $this->info('User created successfully.');
    }
}
