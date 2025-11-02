# Panadero SolarSys Invaders

A space-themed NFT game built by Panadero Services with real-time multiplayer capabilities and cross-server portals.

## What's Changed (New Section)

### Version 1.0.1 (August 2025)
- **Server Architecture**
  - Implemented robust Master Server <> Game Server heartbeat system
  - Added player session monitoring and recovery system
  - Enhanced server health checks with automatic status updates
  - Fixed AWS deployment issues with proper Nginx WebSocket proxy configuration
  - Added support for both local and production server URLs

- **Connection Handling**
  - Smart URL parsing: strips ports for production domains, keeps for local IPs
  - Improved WebSocket connection stability with proper timeout settings
  - Enhanced CORS configuration for secure cross-origin communication
  - Added version tracking (v1.0.1) in client-server communication
  - Optimized Socket.IO transport configuration

- **Development & Debugging**
  - Added version-aware logging system
  - Improved error handling for connection failures
  - Enhanced server status visualization in GameServerSelector
  - Added proper environment variable documentation
  - Streamlined local development setup

- **Infrastructure**
  - Added player_sessions table for better state management
  - Implemented scheduled health monitoring commands
  - Enhanced server registration and discovery
  - Improved black hole initialization and management
  - Added proper WebSocket proxy settings for production deployment

## Description

SolarSys Invaders is an open-world strategy 2D space game that combines NFT exploration, economic simulation, and team combat gameplay. Players can explore the solar system to collect NFTs and resources while engaging in tactical space battles. The game features cross-server travel through black holes and a sophisticated particle system for visual effects.

## Features

### Core Systems
- Multi-layer canvas rendering system with optimized performance
- Real-time multiplayer capabilities via Socket.IO
- Cross-server travel through black hole portals
- MetaMask wallet integration
- NFT support
- Resource management system

### Visual Effects
- Dynamic black holes with:
  - Pulsing event horizons
  - Orbiting debris and asteroids
  - Accretion disk effects
  - Gravitational distortion (coming soon)
- Multi-layered parallax starfield
- Particle system for explosions and effects
- Three visual themes: space, atompad, moonwealth

### Game Elements
- Resource fields for gathering materials
- Safe zones for player protection
- Collectible items and power-ups
- Combat system with projectiles
- Ship customization options

### Technical Architecture
- Modular drawing system with specialized composables:
  - Black hole rendering
  - Starfield generation
  - Ship management
  - Collectibles and resources
  - Effects and particles
  - Safe zones
- Server-side game state management
- Client-side performance optimizations
- Cross-server communication protocol

### Multiplayer Features
- Real-time player synchronization
- Resource sharing capabilities
- Team-based gameplay
- Cross-server travel via black holes
- Shared game state management

## Installation

```bash
npm install panadero-solarsysinvaders
# or
yarn add panadero-solarsysinvaders
```

## Environment Configuration

The game supports multiple deployment configurations:
```env

VITE_GAME_SERVER_URL=https://self-api.com
VITE_GAME_SERVER_URL_NETWORK=https://self-api.com
VITE_SERVER_HOST_=127.0.0.1
VITE_SERVER_PORT=5173

VITE_WEBSOCKET_SERVER=https://self-api.com
VITE_GAME_SERVER_URL_LOCAL=https://self-api.com
VITE_GAME_SERVER_URL_WW=https://self-api.com

VITE_SERVER_HOST_NETWORK=192.168.2.20
VITE_MASTER_SERVER_URL=https://self-api.com
VITE_MASTER_SERVER_URL_NETWORK=https://self-api.com
```

```env
# .env configuration should be role-specific
# For Master Server instance:
IS_MASTER_SERVER=false
MASTER_HEARTBEAT_INTERVAL=30
MASTER_HEARTBEAT_TIMEOUT=90
MASTER_SERVER_PORT=8000

# For Game Server instance:
IS_GAME_SERVER=false
GAME_SERVER_PORT=3001
MASTER_SERVER_URL=https://self-api.com
```


MASTER_SERVER_URL=https://self-api.com
GAME_SERVER_ID=local-01
GAME_SERVER_PORT=3001


## Deployment Guides

For detailed deployment instructions:
- [AWS Deployment Guide](./AWS_DEPLOYMENT.md) - Complete guide for deploying game servers on AWS
- [Local Development Guide](./LOCAL_DEVELOPMENT.md) - Setup your local development environment
- [Master Server Guide](./MASTER_SERVER.md) - Deploy and configure the Master Server

Each guide provides comprehensive instructions for its specific use case. Choose the appropriate guide based on your deployment needs:
- Use the **Local Development Guide** when setting up your development environment
- Use the **Master Server Guide** when deploying the central game server
- Use the **AWS Deployment Guide** when deploying game server instances

## Architecture

The game uses a distributed architecture with:
- Master Server: Handles authentication and global state
- Game Servers: Process game logic and local state
- Socket.IO: Manages real-time communication
- Vue.js: Powers the client-side interface
- Canvas API: Renders game graphics

## Performance Optimization

The game includes several optimizations:
- Shared particle system instance
- Modular drawing composables
- Efficient state management
- Optimized render cycles
- Smart asset loading

## Distributed Universe Architecture

### Infinite Game World Expansion
The game's revolutionary Master Server <> Game Server architecture enables unlimited universe growth through:

- **Dynamic World Creation**: Any player can spawn and host new game worlds
- **Seamless Cross-Server Travel**: Black hole portals connect different game servers
- **Distributed Processing**: Each game server handles its own sector of space
- **Automatic Discovery**: Master Server maintains a directory of all active worlds
- **Load Balancing**: Players are distributed across multiple game servers

### Master Server Capabilities
- Central authentication and player profile management
- Global leaderboard and achievement tracking
- Game server registration and discovery
- Cross-server resource and NFT verification
- Real-time server status monitoring

### Game Server Features
- Autonomous world instance management
- Local physics and game state processing
- Resource field generation and management
- Player interaction and combat handling
- Portal management for inter-server travel

### Scalability Benefits
- **Unlimited Growth**: No theoretical limit to the number of game servers
- **Community Driven**: Players can host their own worlds
- **Resource Distribution**: Each server manages its own resource economy
- **Performance Optimization**: Distributed load across multiple servers
- **Fault Tolerance**: Individual server issues don't affect the whole universe

### Inter-Server Communication
- Secure WebSocket connections between servers
- State synchronization for traveling players
- Resource and NFT transfer protocols
- Cross-server chat and trading capabilities
- Real-time server status updates

This architecture transforms SolarSys Invaders into a potentially infinite universe where:
- Communities can create and manage their own space sectors
- Players can explore an ever-expanding universe
- Resources and economies can develop organically
- New gameplay mechanics can be added server-by-server
- The game can scale to support massive player populations

## Coming Soon
- Enhanced gravitational effects
- Advanced portal mechanics
- Additional visual effects
- Extended multiplayer features
- More NFT integrations

## License

Copyright © 2025 Panadero Services. All rights reserved. 