# Sunrise Sunset API - Ruby Gem

Sunrise Sunset calculates exact sunrise and sunset times, twilight stages, and golden hour windows for any latitude and longitude coordinates. Paid plans can specify custom dates and receive solar noon. With local=true, the response names the IANA timezone of the coordinates on any plan, and paid plans also get each time in local time with its UTC offset.

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
  date: "01-16-2026",
  local: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ lat: 36.72016, lon: -4.42034, date: "01-16-2026", local: true })
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/sunrisesunset?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/sunrisesunset?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/sunrisesunset?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
