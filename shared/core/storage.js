import Storage from 'react-native-storage';

window.storage = new Storage({
    size: 1000,
    storageBackend: window.localStorage,
    defaultExpires: 1000 * 60 * 60 * 24,
    enableCache: true,
    sync: {}
});

export default window.storage;
