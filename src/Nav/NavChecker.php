<?php


namespace AwesIO\IndigoLayout\Nav;

use AwesIO\IndigoLayout\Exceptions\InvalidNavsException;

class NavChecker
{
    /**
     * @param array $navs
     * @return bool
     */
    public static function check(array $navs): bool
    {
        foreach ($navs as $nav) {
            self::checkNavItem($nav);
            if (!empty($nav['children'] ?? [])) {
                self::check($nav['children']);
            }
        }

        return true;
    }

    /**
     * @param array $nav
     * @return bool
     */
    public static function checkNavItem(array $nav): bool
    {
        $hasName = !empty($nav['name']);
        $hasSense = !empty($nav['link']);
        $hasSense = $hasSense || is_array($nav['children'] ?? false);

        $valid = $hasName && $hasSense;
        if (!$valid) {
            throw InvalidNavsException::make();
        };

        return true;
    }
}
