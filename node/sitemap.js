const sitemaps = require('sitemaps');
const path = require('path');

const filePath = path.join(__dirname, '../', 'sitemap.xml');

//--> changefreq:
// NEVER: Old news stories, press releases, etc
// YEARLY: Contact, “About Us”, login, registration pages
// MONTHLY: FAQs, instructions, occasionally updated articles
// WEEKLY: Product info pages, website directories
// DAILY: Blog entry index, classifieds, small message board
// HOURLY: Major news site, weather information, forum
// ALWAYS: Stock market data, social bookmarking categories


//--> priority:
// 0.8-1.0: Homepage, subdomains, product info, major features, major category pages.
// 0.4-0.7: Articles and blog entries, minor category pages, sub-category pages, FAQs
// 0.0-0.3: Outdated news, info that has become irrelevant


const links = [
    {
        loc: 'https://dogcarely.com',
        priority: '1.00',
        changefreq: 'weekly',
    },
    {
        loc: 'https://dogcarely.com/post/5-best-automatic-dog-feeders-for-large-dogs-under-100.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://dogcarely.com/post/how-to-take-care-of-a-dog-after-she-gives-birth.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://dogcarely.com/post/what-should-i-do-if-my-dog-swallowed-a-rawhide.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://dogcarely.com/post/what-are-the-best-natural-treatments-for-fleas-and-ticks.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://dogcarely.com/post/5-proven-no-pull-harness-for-your-german-shepherd.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://dogcarely.com/post/can-dogs-eat-cooked-black-eyed-peas.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://dogcarely.com/post/can-puppies-drink-milk-that-humans-drink.html',
        priority: '0.70',
        changefreq: 'monthly',
    }
];

sitemaps(filePath, links);

console.log(`Sitemap.xml generated at: ${filePath}`);