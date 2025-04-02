import { Fragment, useEffect, useState } from "react";
import {
  Menu as HeadlessMenu,
  Disclosure,
  Transition,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { getModernPalette } from "../helpers/getModernPalette.js";
import { getAppearanceFromVariant } from "../helpers/getAppearanceFromVariant";

// --------------------
// Optional default theme
// --------------------
const defaultTheme = {
  topbarContainer: "flex bg-purple-900 p-3 space-x-4 rounded",
  topbarButton:
    "text-white font-bold uppercase hover:bg-purple-700 px-3 py-1 rounded transition",
  dropdownContainer: "relative inline-block text-left",
  dropdownButton: "px-4 py-2 bg-purple-900 text-white rounded",
  dropdown: "absolute mt-2 bg-white text-sm rounded shadow-lg w-72 z-50",
  item: "w-full text-left px-2 py-2 hover:bg-purple-100 rounded flex justify-between items-center transition",
  selectedItem: "bg-purple-200",
  submenu: "ml-2 pl-2 border-l border-gray-200 space-y-1",
  sidebarContainer: "w-64 bg-purple-900 text-white p-4 space-y-4",
  sidebarGroup: "",
  sidebarGroupLabel: "uppercase text-xs text-gray-400 mb-2",
  sidebarItem: "flex w-full px-2 py-2 hover:bg-purple-700 rounded",
  sidebarActiveItem: "bg-purple-800",
  sidebarSubmenu: "ml-4 space-y-1",
};

// --------------------
// The Component
// --------------------
export default function Menu({
  items = [],
  userScopes = [],
  variant = "auto",
  color = "blue",
  themeName,
  selected: controlledSelected,
  onSelect: controlledOnSelect,
  breakpoint = 768,
}) {
  const [internalSelected, setInternalSelected] = useState(null);
  const [screenVariant, setScreenVariant] = useState(
    variant === "auto" ? getResponsiveVariant() : variant
  );

  const selected = controlledSelected ?? internalSelected;
  const onSelect = controlledOnSelect ?? setInternalSelected;

  // Responsiveness listener
  useEffect(() => {
    if (variant !== "auto") return;
    const handler = () => setScreenVariant(getResponsiveVariant(breakpoint));
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [variant, breakpoint]);

  const appearance = getAppearanceFromVariant(screenVariant, themeName);
  const t = getModernPalette(color, appearance);

  const filtered = filterItemsByScope(items, userScopes);

  if (screenVariant === "topbar")
    return (
      <TopbarMenu {...{ items: filtered, theme: t, selected, onSelect, themeName, color }} />
    );
  if (screenVariant === "dropdown")
    return (
      <DropdownMenu {...{ items: filtered, theme: t, selected, onSelect }} />
    );
  return <SidebarMenu {...{ items: filtered, theme: t, selected, onSelect }} />;
}

// --------------------
// Sidebar Variant
// --------------------
function SidebarMenu({ items, theme, selected, onSelect }) {
  return (
    <div className={theme.sidebarContainer}>
      {items.map((group, idx) => (
        <div key={idx} className={theme.sidebarGroup}>
          {group.label && (
            <p className={theme.sidebarGroupLabel}>{group.label}</p>
          )}
          <div className="space-y-1">
            {group.items.map((item, i) => (
              <RecursiveItem
                key={i}
                item={item}
                theme={theme}
                selected={selected}
                onSelect={onSelect}
                level={0}
                variant="sidebar"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// --------------------
// Topbar Variant
// --------------------
function TopbarMenu({ items, theme, selected, onSelect, themeName, color }) {
  const isDark = themeName === "dark";

  // ✅ Generate dropdown theme correctly
  const dropdownPanelTheme = getModernPalette(color, {
    appearance: "normal",
    isDark,
  });

  return (
    <div className={theme.topbarContainer}>
      {items.map((group, idx) => (
        <HeadlessMenu as="div" key={idx} className={theme.topbarGroup}>
          <HeadlessMenu.Button className={theme.topbarButton}>
            {group.label}
          </HeadlessMenu.Button>
          <Transition as={Fragment} {...transitionProps}>
            <HeadlessMenu.Items className={dropdownPanelTheme.dropdown}>
              <div className="p-2 space-y-1">
                {group.items.map((item, i) => (
                  <RecursiveItem
                    key={i}
                    item={item}
                    theme={dropdownPanelTheme} // ✅ use dropdown-safe theme
                    selected={selected}
                    onSelect={onSelect}
                    level={0}
                    variant="topbar"
                  />
                ))}
              </div>
            </HeadlessMenu.Items>
          </Transition>
        </HeadlessMenu>
      ))}
    </div>
  );
}

// --------------------
// Dropdown Variant (mobile or custom)
// --------------------
function DropdownMenu({ items, theme, selected, onSelect }) {
  return (
    <HeadlessMenu as="div" className={theme.dropdownContainer}>
      <HeadlessMenu.Button className={theme.dropdownButton}>
        Open Menu
      </HeadlessMenu.Button>
      <Transition as={Fragment} {...transitionProps}>
        <HeadlessMenu.Items className={theme.dropdown}>
          {items.map((group, idx) => (
            <div key={idx} className="p-2 space-y-1">
              {group.label && (
                <p className="text-xs text-gray-400">{group.label}</p>
              )}
              {group.items.map((item, i) => (
                <RecursiveItem
                  key={i}
                  item={item}
                  theme={theme}
                  selected={selected}
                  onSelect={onSelect}
                  level={0}
                  variant="dropdown"
                />
              ))}
            </div>
          ))}
        </HeadlessMenu.Items>
      </Transition>
    </HeadlessMenu>
  );
}

// --------------------
// Recursive Item
// --------------------
function RecursiveItem({ item, theme, selected, onSelect, level, variant }) {
  const hasSubItems = Array.isArray(item.subItems) && item.subItems.length > 0;
  const indent = `pl-${level * 2}`;
  const isActive = selected === item.label;

  if (!hasSubItems) {
    return (
      <button
        onClick={() => {
          onSelect(item.label);
          item.onClick && item.onClick();
        }}
        className={`${theme.item} ${
          isActive ? theme.selectedItem : ""
        } ${indent} flex items-center gap-2 w-full`}
      >
        {item.icon && <item.icon className="mr-2" />}
        {item.label}
      </button>
    );
  }

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`${theme.item} ${indent} flex justify-between items-center w-full`}
          >
            <div className="flex items-center gap-2">
              {item.icon && <item.icon />}
              {item.label}
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </Disclosure.Button>
          <Transition as={Fragment} {...transitionProps}>
            <Disclosure.Panel
              className={`${
                variant === "topbar" || variant === "dropdown"
                  ? theme.submenu
                  : theme.sidebarSubmenu
              }`}
            >
              {item.subItems.map((sub, idx) => (
                <RecursiveItem
                  key={idx}
                  item={sub}
                  theme={theme}
                  selected={selected}
                  onSelect={onSelect}
                  level={level + 1}
                  variant={variant}
                />
              ))}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

// --------------------
// Helpers
// --------------------

function getResponsiveVariant(breakpoint = 768) {
  return window.innerWidth < breakpoint ? "dropdown" : "topbar";
}

function filterItemsByScope(items, userScopes) {
  return items
    .filter(
      (group) =>
        !group.requiredScope || userScopes.includes(group.requiredScope)
    )
    .map((group) => ({
      ...group,
      items: (group.items || []).filter(
        (item) => !item.requiredScope || userScopes.includes(item.requiredScope)
      ),
    }));
}

const transitionProps = {
  enter: "transition ease-out duration-200",
  enterFrom: "opacity-0 -translate-y-2",
  enterTo: "opacity-100 translate-y-0",
  leave: "transition ease-in duration-150",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};
