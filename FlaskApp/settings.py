from os import getenv as env

APP_ENV = env('APP_ENV', 'NS')
APP_PASSWORD = env('APP_PASSWORD', 'NS')
POD_NAME = env('HOSTNAME', 'local-dev')