document.addEventListener('DOMContentLoaded', function() {
    const autoUpdateCheckbox = document.getElementById('auto-update');
    autoUpdateCheckbox.checked = settings.autoUpdate;
    autoUpdateCheckbox.onchange = function(event) {
        settings.autoUpdate = event.target.checked;
    };

    // Offline mode checkbox
    if (!settings.offlineDocPath) {
        // If the offline doc path not exists, turn off the offline mode.
        settings.isOfflineMode = false;
    }
    const offlineModeCheckbox = document.getElementById('offline-mode');
    const checkedState = settings.isOfflineMode;
    offlineModeCheckbox.checked = checkedState;
    toggleOfflinePathEnableState(checkedState);
    offlineModeCheckbox.onchange = function(event) {
        const checked = event.target.checked;
        settings.isOfflineMode = checked;
        toggleOfflinePathEnableState(checked);
    };

    // Offline doc path
    const offlineDocPath = document.querySelector('.offline-doc-path');
    offlineDocPath.value = settings.offlineDocPath;
    offlineDocPath.onchange = function(event) {
        settings.offlineDocPath = event.target.value;
    };

    let crateRegistry = document.querySelector("select[name='crate-registry']");
    crateRegistry.value = settings.crateRegistry;
    crateRegistry.onchange = function() {
        settings.crateRegistry = crateRegistry.value;
    };
}, false);


function toggleOfflinePathEnableState(enable) {
    const offlineDocPath = document.querySelector('.offline-doc-path');
    if (enable) {
        offlineDocPath.classList.remove('disable');
        offlineDocPath.classList.add('enable');
    } else {
        offlineDocPath.classList.remove('enable');
        offlineDocPath.classList.add('disable');
    }
}