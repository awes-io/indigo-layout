<?php


namespace AwesIO\IndigoLayout\Exceptions;

use Exception;

class InvalidNavsException extends Exception
{
    public static function make()
    {
        return new static("Nav items are invalid! Every nav item have to contain name and link or children.");
    }
}
