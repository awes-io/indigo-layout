<?php


namespace AwesIO\IndigoLayout\Nav;

use Illuminate\Support\Facades\Request;

class NavGenerator implements NavGeneratorInterface
{
    /**
     * @return array
     */
    public function getNavs(): array
    {
        $navs = config('indigo-layout.navs', []);
        $navs = $this->setActive($navs);

        return $navs;
    }

    /**
     * @param array $nav
     * @return bool
     */
    protected function isActive(array $nav): bool
    {
        $path = $nav['link'] ?? null;

        if (!empty($nav['active']) && is_bool($nav['active'])) {
            return $nav['active'];
        }
        if (empty($path)) {
            return false;
        }
        $path = trim($path, '/');
        if (!($nav['exact'] ?? false)) {
            $path = $path . '*';
        }

        return Request::is($path);
    }

    /**
     * @param array $navs
     * @return array
     */
    protected function setActive(array $navs): array
    {
        foreach ($navs as &$nav) {
            if ($this->isActive($nav)) {
                $nav['active'] = true;
            }
            if (!empty($nav['children'] ?? null)) {
                $nav['children'] = $this->setActive($nav['children']);
            }
        }

        return $navs;
    }
}
