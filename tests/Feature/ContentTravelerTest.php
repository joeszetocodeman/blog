<?php

use App\Actions\ContentTraveler;

it('work', function () {
    $contentTraveler = new ContentTraveler();
    $content = <<<EOT
Here is some sample code:
```php
<?php
echo "Hello, World!";
```
EOT;
    $transformedContent = $contentTraveler->handle($content);

    expect($transformedContent)->toMatchSnapshot();
});
