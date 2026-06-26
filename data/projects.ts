export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  // Enforce compilation check for your exact icons
  iconName:
    | "FolderGit2"
    | "Users"
    | "Bot"
    | "Map"
    | "Navigation"
    | "MessageSquare"
    | "MessageCircle"
    | "Film"
    | "Hotel"
    | "Activity";
}

export const projectsData: ProjectItem[] = [


  {
    title: "My Portfolio",
    description:
      "Personal responsive portfolio architecture engineered with Next.js and TypeScript. Features glassmorphism UI layouts, seamless fluid grid systems, and custom dynamic entry animations.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/aungthawe/my-portfolio",
    iconName: "FolderGit2",
  },
  {
    title: "MapLibre Navigation",
    description:
      "High-performance vector mapping and turnkey routing system built using Next.js and MapLibre GL. Optimizes device battery footprints and UI rendering loops during geo-coordinate shifts.",
    tech: ["Next.js", "TypeScript", "MapLibre GL", "Turf.js"],
    githubUrl: "https://github.com/aungthawe/maplibre-navigation",
    iconName: "Navigation",
  },
  {
    title: "SignalR Geo API",
    description:
      "Robust enterprise backend microservice developed in C# to establish stable full-duplex WebSocket streaming tunnels. Efficiently broadcasts geospatial datasets down to connected UI nodes.",
    tech: ["C#", ".NET Core", "SignalR", "WebSockets"],
    githubUrl: "https://github.com/aungthawe/signalr_api",
    iconName: "Activity",
  },
  {
    title: "Live Map Streaming",
    description:
      "Geospatial tracking interface consuming low-latency stream sockets from a SignalR broker layer. Dynamically updates map markers, client trajectories, and location changes in true realtime.",
    tech: ["TypeScript", "React", "SignalR Client", "Maps API"],
    githubUrl: "https://github.com/aungthawe/map_with_signalr",
    iconName: "Map",
  },
  {
    title: "Supabase Chat Engine",
    description:
      "Realtime messaging application harnessing Supabase's PostgreSQL broadcasting engine. Manages optimistic state handling, message persistence, and presence indicators for users.",
    tech: ["TypeScript", "Next.js", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/aungthawe/supabase_chat",
    iconName: "MessageSquare",
  },
  {
    title: "Socket.io Mini Chat",
    description:
      "Asynchronous event-driven messaging layer constructed using Node.js, Socket.io, and Next.js. Manages socket rooms, active reconnection handling, and instant text transport layers.",
    tech: ["JavaScript", "Node.js", "Socket.io", "Next.js"],
    githubUrl: "https://github.com/aungthawe/chat_socket",
    iconName: "MessageCircle",
  },
  {
    title: "Shop Management Dashboard",
    description:
      "Advanced data grid application optimizing high-frequency API manipulation via OData structures. Integrates robust caching layers, atomic mutation tracking, and pristine layout styling.",
    tech: ["TypeScript", "React", "TanStack Query", "OData", "Shadcn UI"],
    githubUrl: "https://github.com/aungthawe/shop-dashboard",
    iconName: "Hotel",
  },
];
