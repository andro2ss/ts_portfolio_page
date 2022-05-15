export interface WebsiteContent {
  id: string;
  nav: string[];
  photos: { author: string };
  startText: {
    authorDesc: string[];
    headerAuthor: string;
    headerTxt: string;
    motto: string;
  };
  aboutMeText: {
    desc: string;
  };
  skillsText: {
    frame: string[];
    ide: string[];
    lang: {
      name: string;
      lvl: number;
    }[];
    langProg: string[];
    other: string[];
    sys: string[];
  };
  conText: {
    cv: string;
    cvName: string;
    cvText: string;
    email: string;
    emailText: string;
    phone: string;
    phoneText: string;
    title: string;
  };
}
