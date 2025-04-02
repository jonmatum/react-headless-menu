export function getModernPalette(
  color = "blue",
  options = { isDark: false, appearance: "inverted" }
) {
  const { isDark, appearance } = options;

  if (isDark) {
    return {
      topbarContainer: "flex bg-gray-900 p-3 space-x-4 rounded shadow",
      topbarButton: `text-white font-semibold uppercase hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-${color}-400 px-3 py-2 rounded transition`,
      dropdownContainer: "relative inline-block text-left",
      dropdownButton: `px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition`,
      dropdown:
        "absolute mt-2 bg-gray-800 text-sm rounded shadow-lg w-72 z-50 border border-gray-700",
      item: `flex items-center gap-3 w-full text-left px-3 py-2 rounded transition text-white hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-${color}-400`,
      selectedItem: "bg-gray-700 font-semibold",
      submenu: "ml-2 pl-2 border-l border-gray-600 space-y-1",
      sidebarContainer:
        "w-64 bg-gray-900 text-white p-4 space-y-4 rounded-xl shadow",
      sidebarGroupLabel: "uppercase text-xs text-gray-400 mb-2 tracking-wide",
      sidebarItem: `flex items-center justify-between gap-3 w-full px-3 py-2 hover:bg-gray-800 rounded text-sm focus-visible:ring-2 focus-visible:ring-${color}-400 transition`,
      sidebarActiveItem: "bg-gray-800",
      sidebarSubmenu: "ml-4 space-y-1 border-l border-gray-700",
    };
  }

  const isInverted = appearance === "inverted";
  const textColor = isInverted ? "text-white" : "text-slate-800";
  const hoverBg = isInverted ? "hover:bg-white/10" : `hover:bg-${color}-50`;
  const selectedBg = isInverted ? "bg-white/20" : `bg-${color}-100`;
  const borderColor = isInverted ? "border-white/30" : `border-${color}-200`;
  const groupLabelColor = isInverted ? "text-white/70" : "text-slate-600";

  return {
    topbarContainer: `flex bg-gradient-to-r from-${color}-600 to-${color}-700 p-3 space-x-4 rounded shadow`,
    topbarButton: `text-white font-semibold uppercase hover:bg-${color}-500 focus-visible:ring-2 focus-visible:ring-${color}-300 px-3 py-2 rounded transition`,
    dropdownContainer: "relative inline-block text-left",
    dropdownButton: `px-4 py-2 bg-gradient-to-r from-${color}-600 to-${color}-700 text-white rounded hover:from-${color}-500 hover:to-${color}-600 focus-visible:ring-2 focus-visible:ring-${color}-300 transition`,
    dropdown:
      "absolute mt-2 bg-white text-sm rounded shadow-lg w-72 z-50 border border-gray-200",
    item: `flex items-center gap-3 w-full text-left px-3 py-2 rounded transition ${textColor} ${hoverBg} focus-visible:ring-2 focus-visible:ring-${color}-300`,
    selectedItem: `${selectedBg} font-semibold ${textColor}`,
    submenu: `ml-2 pl-2 border-l ${borderColor} space-y-1`,
    sidebarContainer: `w-64 bg-gradient-to-b from-${color}-600 to-${color}-700 ${
      isInverted ? "text-white" : "text-slate-800"
    } p-4 space-y-4 rounded-xl shadow`,
    sidebarGroupLabel: `uppercase text-xs ${groupLabelColor} mb-2 tracking-wide`,
    sidebarItem: `flex items-center justify-between gap-3 w-full px-3 py-2 ${hoverBg} rounded text-sm focus-visible:ring-2 focus-visible:ring-${color}-300 transition`,
    sidebarActiveItem: `${selectedBg}`,
    sidebarSubmenu: `ml-4 space-y-1 border-l ${borderColor}`,
  };
}
