# System Settings Panel - Live Frontend Testing

## Overview
The SystemSettingsPanel component provides real-time control over game performance and network settings during frontend testing. This allows developers to quickly tune parameters without code changes.

## Features

### 🎮 Performance Settings
- **Smoothing Factor (LERP)**: Controls ship movement smoothness (0.05 - 0.8)
- **Server Update Rate**: Network update frequency in milliseconds (16ms - 200ms)
- **Frame Rate Limit**: Cap rendering at 30, 60, 120 FPS or unlimited

### 🌐 Network Settings
- **Transport Mode**: WebSocket only, Polling only, or both
- **Reconnection Attempts**: Number of connection retries (1-10)
- **Reconnection Delay**: Time between retry attempts (500ms - 5000ms)

### 🎯 Game Settings
- **Visibility Range**: How far objects are rendered (1000 - 5000)
- **Border Force Strength**: Anti-gravity force at world edges (0.1 - 2.0)
- **Border Force Radius**: Distance from edge where force applies (2000 - 10000)

### 🐛 Debug Settings
- **Debug Mode**: Enable/disable debug features
- **Performance Logging**: Log performance metrics
- **Network Logging**: Log network events

## Quick Presets

### AWS Optimized
- Lower smoothing for better performance
- Higher update rate for stability
- WebSocket-only transport
- Reduced visibility range

### Local Development
- Higher smoothing for smooth movement
- Fast update rate for responsiveness
- Both transport modes
- Extended visibility range

### High Performance
- Minimal smoothing for speed
- High update rate for smoothness
- WebSocket-only transport
- Limited visibility range

### Smooth Movement
- High smoothing for fluid motion
- Fast update rate
- Both transport modes
- Extended visibility range

## Usage

### 1. Toggle the Panel
Click the ⚙️ button in the top-right corner to open/close the settings panel.

### 2. Adjust Settings
- Use sliders for numeric values
- Select from dropdowns for options
- Check/uncheck for boolean settings

### 3. Apply Presets
Click any preset button to instantly apply optimized settings for different scenarios.

### 4. Monitor Performance
Enable debug mode to see real-time metrics:
- FPS (Frames per second)
- Latency (Network delay)
- Updates per second
- Memory usage

### 5. Save/Load Settings
- **Export**: Download current settings as JSON
- **Import**: Load previously saved settings
- **Reset**: Return to default values

## Integration

The settings panel automatically integrates with the game:

```vue
<template>
    <SystemSettingsPanel @settings-changed="handleSettingsChanged" />
</template>

<script setup>
const handleSettingsChanged = (newSettings) => {
    // Settings are automatically applied to:
    // - GAME_CONFIG (lerp factor, visibility, border forces)
    // - Frame rate limiting
    // - Local storage persistence
    
    console.log('Settings updated:', newSettings);
};
</script>
```

## Real-time Effects

### Immediate Changes
- Smoothing factor affects ship movement instantly
- Frame rate limits apply on next frame
- Debug mode toggles metrics display

### Network Changes
- Transport mode changes on next connection
- Reconnection settings apply immediately
- Update rate affects server communication

### Game World Changes
- Visibility range updates object rendering
- Border forces adjust world boundaries
- Performance logging toggles console output

## Best Practices

### For AWS Testing
1. Start with "AWS Optimized" preset
2. Reduce smoothing factor if movement is too smooth
3. Increase update rate if network is stable
4. Monitor FPS and latency metrics

### For Local Development
1. Use "Local Dev" preset for smooth experience
2. Enable debug mode for detailed logging
3. Use both transport modes for reliability
4. Monitor memory usage for leaks

### For Performance Testing
1. Start with "High Performance" preset
2. Gradually reduce smoothing for speed
3. Monitor FPS for target performance
4. Adjust visibility range based on needs

## Troubleshooting

### High Latency
- Reduce server update rate
- Use WebSocket-only transport
- Check network connection

### Low FPS
- Reduce smoothing factor
- Lower frame rate limit
- Reduce visibility range
- Enable performance logging

### Network Issues
- Try different transport modes
- Increase reconnection attempts
- Adjust reconnection delay
- Enable network logging

## Technical Details

### Settings Persistence
- All settings are saved to localStorage
- Settings persist between browser sessions
- Export/import for sharing configurations

### Performance Impact
- Settings panel has minimal performance impact
- Metrics collection only runs when panel is open
- Real-time updates use efficient event system

### Browser Compatibility
- Modern browsers with ES6+ support
- CSS Grid and Flexbox for layout
- Performance API for metrics
- LocalStorage for persistence

## Future Enhancements

- Custom preset creation
- Settings profiles for different servers
- Advanced performance analytics
- Network quality indicators
- Automated optimization suggestions 