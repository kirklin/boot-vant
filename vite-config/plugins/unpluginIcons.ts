import { resolve } from "node:path";
import type { PluginOption } from "vite";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

export function createIconsPluginConfig(): PluginOption {
  // https://github.com/antfu/unplugin-auto-import
  return Icons({
    scale: 1, // Scale of icons against 1em
    defaultStyle: "width:1rem;height:1rem", // Style apply to icons
    defaultClass: "stroke-current", // Class names apply to icons
    compiler: "vue3", // "vue2", "vue3", "jsx"
    jsx: "react", // "react" or "preact"
    autoInstall: true,
    customCollections: {
      login: FileSystemIconLoader(resolve("src", "assets/icons/login")),
    },
  });
}
