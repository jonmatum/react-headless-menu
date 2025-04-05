import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

export const userScopes = [
  "diagnostics:view",
  "reporting:view",
  "reporting:subsection",
];

export const menuData = [
  {
    label: "Dashboard",
    items: [
      {
        label: "Home",
        icon: FaHome,
        onClick: () => alert("Home clicked"),
      },
      {
        label: "Analytics",
        icon: FaChartLine,
        onClick: () => alert("Analytics clicked"),
      },
    ],
  },
  {
    label: "Projects",
    items: [
      {
        label: "My Projects",
        icon: FaFolderOpen,
        onClick: () => alert("My Projects clicked"),
      },
      {
        label: "Teams",
        icon: FaUser,
        subItems: [
          {
            label: "Members",
            onClick: () => alert("Members clicked"),
          },
          {
            label: "Permissions",
            subItems: [
              {
                label: "Roles",
                onClick: () => alert("Roles clicked"),
              },
              {
                label: "Access Control",
                onClick: () => alert("Access Control clicked"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    items: [
      {
        label: "General",
        icon: FaCogs,
        onClick: () => alert("General Settings clicked"),
      },
      {
        label: "Account",
        icon: FaUser,
        subItems: [
          {
            label: "Profile",
            onClick: () => alert("Profile clicked"),
          },
          {
            label: "Security",
            onClick: () => alert("Security clicked"),
          },
        ],
      },
    ],
  },
];
