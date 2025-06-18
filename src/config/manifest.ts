function defineManifest(config: chrome.runtime.ManifestV3) {
  return config;
}

export default defineManifest({
  name: "chrome-extension-boilerplate",
  version: "1.0.0",
  description: "A chrome extension boilerplate",
  manifest_version: 3,
  permissions: ["storage"],
  action: {
    default_popup: "popup.html",
  },
  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/content/index.ts"],
    },
  ],
});
