import { computed } from 'vue';

export function useGameCommands(gameState, socket, gameServerInfo, parseHelpCommand, helpContent, showHelpOverlay) {
  
  // Command handlers
  const handleHelp = (args) => {
    const helpResult = parseHelpCommand(`/help ${args.join(' ')}`, gameServerInfo.value);
    if (helpResult) {
      console.log(`Help command received: ${helpResult.category}`);
      helpContent.value = helpResult.formatted;
      showHelpOverlay.value = true;
      return { success: true, type: 'help' };
    }
    return { error: 'Help not available' };
  };

  const handleStatus = (args) => {
    const status = {
      url: gameServerInfo.value.url,
      status: gameServerInfo.value.status,
      players: gameServerInfo.value.playerCount
    };
    console.log('Server status:', status);
    return { success: true, type: 'status', data: status };
  };

  const handlePing = (args) => {
    if (socket.value) {
      socket.value.emit('ping');
      console.log('Ping sent to server');
      return { success: true, type: 'ping' };
    }
    return { error: 'Not connected to server' };
  };

  const handlePlayers = (args) => {
    const players = Object.values(gameState.value.players || {});
    const playerList = players.map(p => `${p.callSign} (${p.health}/${p.maxHealth} HP)`);
    console.log(`Players online (${players.length}):`, playerList);
    return { success: true, type: 'players', data: playerList };
  };

  const handleCommands = (args) => {
    const availableCommands = [
      { name: '/help', description: 'Show help information' },
      { name: '/status', description: 'Show server status' },
      { name: '/ping', description: 'Ping the server' },
      { name: '/players', description: 'Show online players' },
      { name: '/commands', description: 'Show available commands' }
    ];
    console.log('Available commands:', availableCommands);
    return { success: true, type: 'commands', data: availableCommands };
  };

  // Main command executor
  const executeCommand = (commandName, args) => {
    console.log(` Executing command: ${commandName} with args:`, args);
    
    switch (commandName) {
      case '/help':
        return handleHelp(args);
        
      case '/status':
        return handleStatus(args);
        
      case '/ping':
        return handlePing(args);
        
      case '/players':
        return handlePlayers(args);
        
      case '/commands':
        return handleCommands(args);
        
      default:
        console.log(`Unknown command: ${commandName}`);
        return { error: `Unknown command: ${commandName}` };
    }
  };

  return {
    executeCommand
  };
} 