import { transpileModule } from 'typescript'
import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Chen Yixi',
  subtitle: 'Personal blog',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 175,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/banner.jpg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''
      // url: 'https://www.pixiv.net/artworks/122409257'                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: false,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
        src: '/favicon/thinkin-cat.png',    // Path of the favicon, relative to the /public directory
        theme: 'dark'              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    // LinkPreset.About,
    // LinkPreset.Archive,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/jikhei',     // Internal links should not include the base path, as it is automatically added
    //   external: true,                               // Show an external link icon and will open in a new tab
    // },
    // {
    //   name: 'Projects',
    //   url: '/projects/',
    //   external: false
    // },
    {
      name: 'Archive',
      url: '/archive/',
      external: false
    },
    {
      name: 'CV',
      url: '/cv/',
      external: true
    },
  ],
}

export const profileConfig: ProfileConfig = {
  // avatar: false,
  avatar: 'assets/images/real-ava.jpg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Chen Yixi',
  bio: '',
  links: [
    {
      name: 'Email',
      icon: 'fa6-solid:envelope',              // Visit https://icones.js.org/ for icon codes
      url: 'mailto:canjikhei1030@outlook.com'        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
    },
    {
      name: 'ResearchGate',
      icon: 'fa6-brands:researchgate',
      url: 'https://www.researchgate.net/profile/Yixi-Chen-10',
    },
    // {
    //   name: 'GitHub',
    //   icon: 'fa6-brands:github',
    //   url: 'https://github.com/jikhei',
    // }
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
