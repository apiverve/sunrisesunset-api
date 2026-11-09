# Sunrise Sunset API - PHP Package

Sunrise Sunset calculates exact sunrise and sunset times, twilight stages, and golden hour windows for any latitude and longitude coordinates. Paid plans can specify custom dates and receive solar noon. With local=true, the response names the IANA timezone of the coordinates on any plan, and paid plans also get each time in local time with its UTC offset.

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
    'date' => '01-16-2026',
    'local' => true
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
    $response = $client->execute(['lat' => 36.72016, 'lon' => -4.42034, 'date' => '01-16-2026', 'local' => true]);
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
    "solarNoon": "2026-01-16T12:28:27.256Z",
    "sunrise": "2026-01-16T07:30:14.174Z",
    "sunset": "2026-01-16T17:26:40.338Z",
    "sunriseEnd": "2026-01-16T07:33:11.786Z",
    "sunsetStart": "2026-01-16T17:23:42.726Z",
    "dawn": "2026-01-16T07:02:03.459Z",
    "dusk": "2026-01-16T17:54:51.053Z",
    "nauticalDawn": "2026-01-16T06:30:17.010Z",
    "nauticalDusk": "2026-01-16T18:26:37.502Z",
    "nightEnd": "2026-01-16T05:59:14.883Z",
    "night": "2026-01-16T18:57:39.629Z",
    "goldenHourEnd": "2026-01-16T08:09:09.341Z",
    "goldenHour": "2026-01-16T16:47:45.171Z",
    "timezone": "Europe/Madrid",
    "localTimes": {
      "solarNoon": "2026-01-16T13:28:27+01:00",
      "sunrise": "2026-01-16T08:30:14+01:00",
      "sunset": "2026-01-16T18:26:40+01:00",
      "sunriseEnd": "2026-01-16T08:33:11+01:00",
      "sunsetStart": "2026-01-16T18:23:42+01:00",
      "dawn": "2026-01-16T08:02:03+01:00",
      "dusk": "2026-01-16T18:54:51+01:00",
      "nauticalDawn": "2026-01-16T07:30:17+01:00",
      "nauticalDusk": "2026-01-16T19:26:37+01:00",
      "nightEnd": "2026-01-16T06:59:14+01:00",
      "night": "2026-01-16T19:57:39+01:00",
      "goldenHourEnd": "2026-01-16T09:09:09+01:00",
      "goldenHour": "2026-01-16T17:47:45+01:00"
    }
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
