# Sunrise Sunset API - Ruby Gem

Sunrise Sunset calculates exact sunrise and sunset times, twilight stages, and golden hour windows for any latitude and longitude coordinates. Paid plans can specify custom dates and receive solar noon.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_sunrisesunset'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_sunrisesunset
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_sunrisesunset'

# Initialize the client
client = APIVerve::Sunrisesunset::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  lat: 36.72016,
  lon: -4.42034,
  date: "01-16-2026"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ lat: 36.72016, lon: -4.42034, date: "01-16-2026" })
  puts response["data"]
rescue APIVerve::Sunrisesunset::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Sunrisesunset::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Sunrisesunset::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/sunrisesunset?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/sunrisesunset?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/sunrisesunset?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
