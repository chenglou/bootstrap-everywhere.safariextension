safari.application.addEventListener('validate', function(e) {
  if (e.command === 'bootstrapEverywhere') {
    e.target.disabled = !safari.application.activeBrowserWindow.activeTab.url;
  }
});

safari.application.addEventListener('command', function(e) {
  if (e.command === 'bootstrapEverywhere') {
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage(
      'injectCSS'
    );
  }
});
