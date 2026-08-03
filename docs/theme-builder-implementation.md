# Theme Builder Implementation Notes

## Scope

This branch adds a global, browser-persisted Theme Builder to the portfolio and updates the hero image asset. The Theme Builder is available from /playground/theme-builder, while its floating editor is mounted globally so the portfolio itself becomes the live preview.

The working branch is master; these changes are currently uncommitted.

## Next.js and React architecture

The root layout remains a Server Component, but the interactive theme system is introduced through a focused Client Component boundary:

- app/layout.tsx mounts ThemeBuilderProvider inside the existing next-themes provider.
- components/layout/theme-builder-provider.tsx owns global state, browser persistence, document-level CSS variable application, and the context API.
- components/playground/theme-builder.tsx renders the fixed launcher and floating editor.
- components/playground/theme-builder-guide.tsx provides the interactive activation checkbox.
- app/playground/theme-builder/page.tsx remains server-rendered and loads explanatory MDX from content/playground/theme-builder.mdx.

This keeps browser-only APIs such as localStorage, navigator.clipboard, requestAnimationFrame, and document.documentElement out of the Server Component graph. The provider exposes a small typed context:

~~~ts
enabled
setEnabled
palettes
updateToken
resetToken
reset
~~~

The widget also uses useTheme from next-themes. Selecting Light or Dark in the widget changes the site theme, and using the navbar theme toggle updates the active widget tab.

## Theme data model

lib/theme-builder.ts is the shared source of truth for:

- ThemeMode: light or dark
- ThemeToken: the semantic token union
- ThemePalette and ThemePalettes
- original light/dark defaults
- token groups used to organize the editor
- the versioned storage key
- CSS variable serialization for the Copy action

The persisted structure is explicit:

~~~ts
{
  enabled: boolean;
  palettes: {
    light: Record<ThemeToken, string>;
    dark: Record<ThemeToken, string>;
  };
}
~~~

The provider merges stored values with current defaults during hydration. This gives older or partial payloads a safe fallback when new tokens are added later.

## Runtime data flow

When enabled, the provider applies the active palette as inline custom properties on document.documentElement. The portfolio components already consume semantic roles such as --background, --primary, and --border, which resolve through the existing --theme-* variables in app/globals.css.

The runtime path is:

~~~text
color picker
  -> trailing debounce
  -> typed context update
  -> active CSS variable update
  -> portfolio repaint
  -> debounced localStorage persistence
~~~

Inactive light/dark palette edits are stored but do not repaint the current page. Switching the active theme applies the corresponding saved palette. Disabling the builder removes the inline variables and clears the storage entry.

## Color-picker and performance strategy

Native color inputs emit frequent changes while the user drags. Updating React state, all CSS variables, and localStorage on every event creates unnecessary work and can make the page feel unstable.

The implementation uses several layers of protection:

1. The widget uses an uncontrolled color input so the native picker is not remounted during a drag.
2. Each token has a trailing debounce of 400ms. Every new color event resets the timer; only the final value after a quiet period is committed.
3. The provider updates only the changed active CSS variable through a requestAnimationFrame queue.
4. localStorage writes are independently debounced by 180ms.
5. Full palette application is reserved for hydration, enabling/disabling, theme switches, Reset, and other non-drag transitions.
6. Color-input refs synchronize reset and mode changes without destroying the native picker.

This separates the fast visual path from the persistence path and avoids repeatedly applying all 15 tokens during a drag.

## Widget behavior and styling

The widget is a fixed, high-z-index control in the lower-right corner. It starts as a compact circular launcher and expands into a scrollable card. The sticky header uses an opaque card background and the widget card has zero outer vertical padding; this prevents scrolled token rows from showing through the header.

Each token row includes:

- native color swatch
- semantic token name
- CSS variable name
- current hex value
- modified indicator when the value differs from the original default
- per-token Reset icon

The footer includes Reset and Copy actions. Copy serializes every light and dark variable, including unchanged values, into complete :root and .dark CSS blocks.

The documentation page explains the token model and persistence behavior using the existing MDX prose treatment. Its checkbox activates the same provider state used by the global launcher.

## Other branch changes

The playground registry adds the Theme Builder card and route. The hero section now references the development hero asset:

~~~text
/hero-image-dev.webp
~~~

The previous PNG reference is no longer used by components/hero/hero-section.tsx.

## Verification

The implementation has been validated with:

- npm run lint
- npm run typecheck
- npm run build

The branch remains uncommitted; this document describes the current working-tree implementation rather than a completed commit.
