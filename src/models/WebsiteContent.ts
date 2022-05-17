export interface WebsiteContent {
  id: string;
  nav: string[];
  common: {
    filters: string;
    search: string;
    noProject: string;
    projectAmount: string;
  };
  photos: { author: string };
  startText: StartText;
  aboutMeText: AboutMeText;
  skillsText: SkillsText;
  conText: ConText;
  portfolioText: PortfolioText[];
}

export interface StartText {
  authorDesc: string[];
  headerAuthor: string;
  headerTxt: string;
  motto: string;
}

export interface AboutMeText {
  desc: string;
}

export interface ConText {
  cv: string;
  cvName: string;
  cvText: string;
  email: string;
  emailText: string;
  phone: string;
  phoneText: string;
  title: string;
}

export interface PortfolioText {
  name: string;
  github: string;
  live: string;
  photo: string;
  tech: string[];
  num: number;
}

export interface SkillsText {
  frame: string[];
  ide: string[];
  lang: {
    name: string;
    lvl: number;
  }[];
  langProg: string[];
  other: string[];
  sys: string[];
}
