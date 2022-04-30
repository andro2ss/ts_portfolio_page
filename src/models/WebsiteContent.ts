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
}
