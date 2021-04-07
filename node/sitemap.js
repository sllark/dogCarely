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
        loc: 'https://www.dogcarely.com',
        priority: '1.00',
        changefreq: 'weekly',
    },
    {
        loc: 'https://www.dogcarely.com/post/5-best-automatic-dog-feeders-for-large-dogs-under-100.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/how-to-take-care-of-a-dog-after-she-gives-birth.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/what-should-i-do-if-my-dog-swallowed-a-rawhide.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/what-are-the-best-natural-treatments-for-fleas-and-ticks.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/5-proven-no-pull-harness-for-your-german-shepherd.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/can-dogs-eat-cooked-black-eyed-peas.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/can-puppies-drink-milk-that-humans-drink.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/how-to-use-coconut-oil-to-remove-dog-tear-stains.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/my-dog-ate-a-tampon-and-what-should-I-do-for-treatment-and-prevention.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/how-to-make-a-dog-smell-good-without-a-bath.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/how-to-help-my-dog-with-milk-fever-aka-eclampsia.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/why-are-dogs-ears-so-soft-and-sensitive.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/why-dogs-are-aggressive-towards-injured-or-older-dog-and-how-to-correct-this-behavior.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/should-i-let-my-dog-see-my-dead-dog.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/what-are-dog-weak-spots-to-exploit-if-a-dog-attacks-you.html',
        priority: '0.70',
        changefreq: 'monthly',
    },
    {
        loc: 'https://www.dogcarely.com/post/what-to-do-when-one-dog-died-and-the-other-lives.html',
        priority: '0.70',
        changefreq: 'monthly',
    }
];

sitemaps(filePath, links);

console.log(`Sitemap.xml generated at: ${filePath}`);