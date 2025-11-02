// panadero-solarsysinvaders/src/index.js
import SsiGameNew from './components/SsiGameNew.vue';
import GameServerSelector from './components/GameServerSelector.vue';
import MasterGameServerPanel from './components/MasterGameServerPanel.vue';
import SystemSettingsPanel from './components/SystemSettingsPanel.vue';
import { useMasterGameServerStore } from './stores/masterGameServer.js';

// Export as default for the framework
export default SsiGameNew;

// Export individual components and store
export { 
    GameServerSelector, 
    MasterGameServerPanel,
    SystemSettingsPanel,
    useMasterGameServerStore 
};

// Log that we're loaded
console.log('Solar System Game module index loaded');