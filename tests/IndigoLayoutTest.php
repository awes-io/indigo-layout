<?php

namespace AwesIO\IndigoLayout\Tests;

use AwesIO\IndigoLayout\IndigoLayout;
use InvalidArgumentException;

class IndigoLayoutTest extends AbstractTestCase
{
    public function test_validate_method_lowerStr()
    {
		$this->assertEquals('some text', (new IndigoLayout)->lowerStr('Some Text'));
    }
}
