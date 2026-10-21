# Sunrise Sunset API - PHP Package

Sunrise Sunset calculates exact sunrise and sunset times, twilight stages, and golden hour windows for any latitude and longitude coordinates. Paid plans can specify custom dates and receive solar noon.

## Installation

Install via Composer:

```bash
composer require apiverve/sunrisesunset
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Sunrisesunset\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'lat' => 36.72016,
    'lon' => -4.42034,
    'date' => '01-16-2026'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Sunrisesunset\Client;
use APIVerve\Sunrisesunset\Exceptions\APIException;
use APIVerve\Sunrisesunset\Exceptions\ValidationException;

try {
    $response = $client->execute(['lat' => 36.72016, 'lon' => -4.42034, 'date' => '01-16-2026']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "solarNoon": "2025-12-16T12:14:40.51Z",
    "sunrise": "2025-12-16T07:24:56.165Z",
    "sunset": "2025-12-16T17:04:24.854Z",
    "sunriseEnd": "2025-12-16T07:27:58.828Z",
    "sunsetStart": "2025-12-16T17:01:22.192Z",
    "dawn": "2025-12-16T06:56:02.774Z",
    "dusk": "2025-12-16T17:33:18.245Z",
    "nauticalDawn": "2025-12-16T06:23:38.134Z",
    "nauticalDusk": "2025-12-16T18:05:42.886Z",
    "nightEnd": "2025-12-16T05:52:07.048Z",
    "night": "2025-12-16T18:37:13.971Z",
    "goldenHourEnd": "2025-12-16T08:05:08.406Z",
    "goldenHour": "2025-12-16T16:24:12.613Z"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/sunrisesunset?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/sunrisesunset?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/sunrisesunset?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
