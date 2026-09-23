export type Lang = 'bg' | 'en';
export type Page = 'home' | 'story' | 'otchet' | 'faq' | 'contact';

export const PAGES: Page[] = ['home', 'story', 'otchet', 'faq', 'contact'];

const SLUG: Record<Lang, Record<Page, string>> = {
  bg: { home: '', story: 'story', otchet: 'otchet', faq: 'faq', contact: 'kontakt' },
  en: { home: '', story: 'story', otchet: 'reports', faq: 'faq', contact: 'contact' },
};

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Site-relative path for a page, including the deploy base. */
export function href(lang: Lang, page: Page): string {
  const s = SLUG[lang][page];
  const path = (lang === 'en' ? '/en/' : '/') + (s ? s + '/' : '');
  return BASE + path;
}

/** Asset path under /public, including the deploy base. */
export function pub(path: string): string {
  return BASE + '/' + path.replace(/^\//, '');
}

export const IG = 'https://instagram.com/runas.bookclub';

export const T = {
  bg: {
    prevPhoto: 'Предишна снимка', nextPhoto: 'Следваща снимка', menuLabel: 'Меню',
    navStory: 'История', navReports: 'Отчет', navFaq: 'Въпроси', navContact: 'Контакт',
    seeReports: 'Виж Отчет', faqShort: 'Въпроси', allQuestions: 'Всички въпроси',
    fDate: 'Дата', fPlace: 'Място', fAmount: 'Събрани', fCharity: 'Дарено на', fProof: 'Сертификат за дарение',
    tagline1: 'Избери книга на сляпо.', tagline2: 'Подкрепи добра кауза.',
    editions: 'Издания',
  },
  en: {
    prevPhoto: 'Previous photo', nextPhoto: 'Next photo', menuLabel: 'Menu',
    navStory: 'Story', navReports: 'Reports', navFaq: 'FAQ', navContact: 'Contact',
    seeReports: 'See Reports', faqShort: 'FAQ', allQuestions: 'All questions',
    fDate: 'Date', fPlace: 'Location', fAmount: 'Raised', fCharity: 'Donated to', fProof: 'Proof of donation',
    tagline1: 'Pick a book blindly.', tagline2: 'Back a good cause.',
    editions: 'Editions',
  },
} as const;

export const NAV_LABEL: Record<Lang, Record<Exclude<Page, 'home'>, string>> = {
  bg: { story: T.bg.navStory, otchet: T.bg.navReports, faq: T.bg.navFaq, contact: T.bg.navContact },
  en: { story: T.en.navStory, otchet: T.en.navReports, faq: T.en.navFaq, contact: T.en.navContact },
};

export const META: Record<Lang, Record<Page, { title: string; description: string }>> = {
  bg: {
    home: {
      title: 'Runa’s Book Club · Бургас',
      description: 'Благотворителен книжен клуб в Бургас. Избираш опакована книга втора ръка по жанр и настроение и даряваш колкото решиш. Всички средства отиват за местни каузи.',
    },
    story: {
      title: 'История · Runa’s Book Club',
      description: 'Как една събота с прочетени книги и хартиени пликове стана Runa’s Book Club, благотворителен книжен клуб в Бургас.',
    },
    otchet: {
      title: 'Отчет · Runa’s Book Club',
      description: 'Резултатите от всяко издание: къде бяхме, колко събрахме, на коя организация дарихме и документ за дарението.',
    },
    faq: {
      title: 'Въпроси · Runa’s Book Club',
      description: 'Къде отиват даренията, кой стои зад проекта и какви книги можеш да дариш или намериш при нас.',
    },
    contact: {
      title: 'Контакт · Runa’s Book Club',
      description: 'Дари книги или ни покани с щанд на твоето събитие в Бургас. Пиши ни в Instagram: @runas.bookclub.',
    },
  },
  en: {
    home: {
      title: 'Runa’s Book Club · Burgas',
      description: 'A charity book club in Burgas. Pick a wrapped secondhand book by its genre and vibe, donate what you like. All proceeds go to local charities.',
    },
    story: {
      title: 'Story · Runa’s Book Club',
      description: 'How one Saturday, a stack of read books and some paper bags turned into Runa’s Book Club, a charity book club in Burgas.',
    },
    otchet: {
      title: 'Reports · Runa’s Book Club',
      description: 'The results of every edition: where we were, how much we raised, which charity received it, and the donation certificate.',
    },
    faq: {
      title: 'FAQ · Runa’s Book Club',
      description: 'Where the donations go, who runs the club, and what books you can donate or find with us.',
    },
    contact: {
      title: 'Contact · Runa’s Book Club',
      description: 'Donate books or invite us to your event in Burgas with a stall. Message us on Instagram: @runas.bookclub.',
    },
  },
};
