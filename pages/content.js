// Voca landing page — copy + data, both languages.
// Edit text here, not in landing.html. Keep the same keys in `he` and `en`.
//
// Positioning (from Voca_Investor_Brief): Voca is "שכבת האמפתיה של העסק הדיגיטלי" —
// the layer every channel and every business system plugs into. The page must read
// as infrastructure a service business already needs, not a bolt-on tool.
// The core insight (Voca_ROI_Report / ICP_GTM): the gap is CAPACITY, not awareness.
//
// Marketing statistics are real and sourced — every stat carries a `source`,
// rendered via the small `.source` class. Dashboard demo data is the product
// illustration and is intentionally identical across both languages.

const CONTENT = {
  he: {
    dir: 'rtl',
    nav: { product: 'המוצר', capabilities: 'יכולות', pricing: 'מחיר', cta: 'התחל חינם' },

    hero: {
      badge: 'שכבת שירות הלקוחות של העסק הדיגיטלי',
      line1: 'הדור הבא של שירות לקוחות.',
      line2: 'זמין לכל עסק.',
      sub: 'Voca מחוברת לכל הפלטפורמות ולכל נתוני העסק שלך, ועונה בשמך — בקול שלך, תוך שניות, בכל שעה. מענה מיידי במקום שבו 62.6% מהעסקים עדיין עונים ידנית, אם בכלל.',
      subSource: 'Vendasta · 2026 State of Reputation Management',
      primaryCta: 'התחל 30 יום חינם',
      secondaryCta: 'ראה איך זה עובד',
      panelTitle: 'Voca · חי עכשיו',
      panelStatus: 'מחובר',
      gaugeLabel: 'סנטימנט חיובי',
      gaugeValue: 74,
      sparkLabel: 'פניות · 24 שעות',
      sparkValue: '2,847',
      sparkDelta: '+12%',
      chip1Value: '81%',
      chip1Label: 'טופלו אוטומטית',
      chip2Value: '14',
      chip2Label: 'ממתינות לאישור אנושי',
    },

    trust: {
      title: 'הלקוחות כבר מחליטים על בסיס התגובות שלך, המספרים חד-משמעיים.',
      items: [
        { value: '97%', label: 'קוראים ביקורות לפני שהם בוחרים בעסק', source: 'BrightLocal / BIA·Kelsey' },
        { value: '5%', label: 'בלבד מהעסקים מגיבים באופן עקבי', source: 'Voca Market Research 2025' },
        { value: '71%', label: 'שימור לקוחות כשהמענה מגיע תוך שעה', source: 'Toister · Bain & Company' },
      ],
    },

    problem: {
      kicker: 'למה זה חשוב עכשיו',
      title: 'הלקוחות שלך כבר מדברים עליך. השאלה היא מי עונה.',
      body1: 'ביקורת ב-11 בלילה. שאלה בוואטסאפ בשבת. תלונה בפייסבוק באמצע יום עמוס. הפניות לא מפסיקות להגיע — והן לא מחכות ליום העסקים הבא.',
      body2: 'הפער הזה אינו חוסר מודעות — הוא חוסר קיבולת. לחברה גדולה יש מחלקת שירות; אצלך, המוניטין מתחרה על זמן מול משכורות, אספקה ושירות שוטף.',
      body2Source: 'Vendasta · 2026 State of Reputation Management for SMBs',
      gapTitle: 'המשמעות של שתיקה',
      gapHigh: { value: 88, label: 'בוחרים בעסק שמגיב לכל ביקורת' },
      gapLow: { value: 47, label: 'בוחרים בעסק ששותק' },
      gapNote: 'שתיקה מוחקת יותר ממחצית מהשוק הפוטנציאלי שלך — עוד לפני המגע הראשון.',
      gapSource: 'BrightLocal 2024',
      statsTitle: 'מה הלקוחות עושים לפני שהם בוחרים בעסק',
      bars: [
        { label: 'קוראים ביקורות לפני בחירה', value: 97, source: 'BrightLocal / BIA·Kelsey' },
        { label: 'דורשים דירוג 4 כוכבים ומעלה', value: 92, source: 'Podium / BrightLocal' },
        { label: 'קוראים את תגובות העסק', value: 89, source: 'BrightLocal / BIA·Kelsey' },
        { label: 'מסרבים לעסק עם ביקורת ללא מענה', value: 94, source: 'Textedly / TrustMary' },
      ],
    },

    solution: {
      kicker: 'מה Voca עושה',
      title: 'לא עוד כלי. השכבה שהעסק שלך מתחבר אליה.',
      body1: 'הפלטפורמות שבהן הלקוחות מדברים נמצאות בצד אחד. הנתונים שבאמת עונים להם — מלאי, הזמנות, CRM ומדיניות שירות — נמצאים בצד השני. Voca יושבת באמצע ומחברת ביניהם.',
      body2: 'כשלקוח פונה, Voca קוראת את הפנייה, מבינה את הרגש מאחוריה, בודקת את הנתונים האמיתיים של העסק — ועונה בקול שלך, תוך שניות.',
      body3: 'לא בוט. לא "תודה על פנייתך". תגובה שמרגישה כאילו כתב אותה מישהו שבאמת מכיר את הלקוח.',
      graphPlatformsTitle: 'איפה הלקוחות מדברים',
      graphDataTitle: 'הנתונים של העסק',
      hubLabel: 'Voca',
      hubSub: 'מנוע הקונטקסט',
      platforms: [
        { label: 'Google', icon: 'reviews' },
        { label: 'Instagram', icon: 'photo_camera' },
        { label: 'Facebook', icon: 'thumb_up' },
        { label: 'WhatsApp', icon: 'forum' },
        { label: 'מייל', icon: 'mail' },
      ],
      dataSources: [
        { label: 'מלאי', icon: 'inventory_2' },
        { label: 'הזמנות', icon: 'receipt_long' },
        { label: 'CRM', icon: 'contacts' },
        { label: 'מדיניות שירות', icon: 'policy' },
        { label: 'היסטוריית לקוח', icon: 'history' },
      ],
    },

    dashboard: {
      kicker: 'איך זה נראה מבפנים',
      title: 'לוח בקרה אחד לכל השירות שלך — בזמן אמת.',
      body: 'פותח בבוקר ורואה תמונה מלאה: מה טופל לבד, איפה היה חיכוך, ומה מחכה להחלטה שלך.',
      panelTitle: 'Command Center · תצוגה גלובלית',
      liveTag: 'פעיל',
      feedLabel: 'פניות נכנסות · Live Feed',
      queueLabel: 'ממתין לאישור שלך',
      queueTag: 'עדיפות גבוהה',
      queueMeta: 'לקוחת VIP · גוגל · תל אביב',
      queueBody: '"קניתי את המוצר לפני שבוע ועדיין לא קיבלתי מענה." — Voca ניסחה תגובה עם קוד הטבה של 50 ₪ בהתאם למדיניות. ממתינה לאישורך.',
      queueApprove: 'אשר ופרסם',
      queueEdit: 'ערוך',
      replyLabel: 'תגובת Voca ←',
    },

    capabilities: {
      kicker: 'מה מייחד את Voca',
      title: 'רגישות כמו של נציג אנושי, בקנה מידה של מכונה',
    },

    proof: {
      kicker: 'התשואה',
      title: 'שירות טוב הוא לא הוצאה. הוא הכנסה.',
      body: 'כל נתון כאן נמדד במחקר עצמאי. זה מה שקורה כשעסק עונה — מהר, בעקביות, לכולם.',
    },

    pricing: {
      kicker: 'הסרת החסם',
      title: 'תשתית של חברה גדולה. במחיר של עסק קטן.',
      body: 'נציג שירות אנושי עולה כ-₪12,000 בחודש — ישן בלילה, לא זוכר כל לקוח, לא נמצא בכל פלטפורמה. Voca מתחילה ב-₪199 בחודש: זמינה תמיד, זוכרת הכל, נמצאת בכל מקום.',
      costTitle: 'עלות חודשית — מה באמת אתה משלם',
      humanLabel: 'נציג שירות אנושי',
      humanPrice: '₪12,000',
      humanUnit: '/ חודש',
      vocaLabel: 'Voca — תוכנית Starter',
      vocaPrice: '₪199',
      vocaUnit: '/ חודש',
      ratioNote: 'זמינות 24/7 ב-1.6% מהעלות.',
      terms: 'ללא חוזה שנתי · 30 יום ניסיון · ביטול בכל עת',
    },

    cta: {
      title: 'תן ל-Voca לדבר בשם העסק שלך.',
      sub: 'הצטרף עכשיו ל-30 יום ניסיון — וראה מה קורה כשהעסק שלך אף פעם לא נרדם.',
      primaryCta: 'התחל עכשיו — חינם',
      secondaryCta: 'דבר איתנו',
      trust: 'ללא כרטיס אשראי לתחילת הניסיון · ליווי אישי · תמיכה בעברית',
    },

    footer: '© 2026 Voca',

    channels: [
      { variant: 'accent', tag: 'סיכון להתפשטות', meta: 'אינסטגרם · לפני 4 דק׳', body: 'לקוח מאוכזב פרסם וידאו על חוויית שירות גרועה — ל-40 אלף עוקבים.' },
      { variant: 'brand', tag: 'VIP', meta: 'גוגל · מועדון זהב · לפני 7 דק׳', body: '"קניתי לפני שבוע ואף אחד לא ענה לי."' },
      { variant: 'on-inverse', tag: 'אוטומטי', meta: 'וואטסאפ · לפני 11 דק׳', body: '"הגיע בדיוק בזמן, מעולה! תודה רבה."' },
    ],

    dashboardMetrics: [
      { value: '74%', label: 'סנטימנט חיובי', delta: '↑ 8% החודש' },
      { value: '2,847', label: 'פניות היום', delta: '↑ 12% לעומת אתמול' },
      { value: '81%', label: 'טופלו אוטומטית', delta: '↑ 2% השבוע' },
      { value: '14', label: 'ממתינות לאישור אנושי', delta: 'Human-in-the-loop' },
    ],

    dashboardFeed: [
      { variant: 'accent', tag: 'דורש אישור', meta: 'טוקיו · לפני 2 דק׳', body: 'לקוחה קיבלה רק 4 מתוך 7 פריטים בהזמנה — הצוות לא הגיב.', reply: '"מצטערים על העיכוב! זיהינו שהחבילה השנייה נתקעה במחסן — שולחים אותה היום בהובלה מזורזת, וגם קוד הטבה של 30 ₪ מחכה לך במייל."' },
      { variant: '', tag: 'אוטומטי ✓', meta: 'ניו יורק · לפני 11 דק׳', body: '"בדיוק סיימתי לקרוא — הכי טוב שקראתי השנה!"', reply: '"איזה כיף לשמוע! שמנו לך בצד שני ספרים דומים בסגנון — קישור שלחנו בהודעה הבאה."' },
      { variant: 'brand', tag: 'VIP', meta: 'סינגפור · לפני 14 דק׳', body: '"הצוות כאן ממש מקצועי, המליצו לי בדיוק על מה שחיפשתי."', reply: '"תודה רבה! העברנו את המחמאה לצוות בסניף אורצ׳רד רואד, ורשמנו 200 נקודות בונוס לחשבון ה-VIP שלך."' },
    ],

    // The four brand values (Voca_Investor_Brief · ערכי הליבה)
    features: [
      { icon: 'hub', title: 'קונטקסט שמוביל לדיוק', body: 'כל תגובה נובעת מהנתונים האמיתיים של העסק — מלאי, זמינות, היסטוריית לקוח ומדיניות שירות. לא מתבנית. זה הדיוק שנציג אנושי לא יכול להשיג בנפח כזה.' },
      { icon: 'record_voice_over', title: 'קול שנשמע כמוך', body: 'מסעדה משפחתית מדברת אחרת ממרפאה פרטית, שמדברת אחרת מרשת אופנה. Voca לומדת את הקול הייחודי של העסק ומשמרת אותו בכל פלטפורמה, בכל שעה.' },
      { icon: 'bedtime', title: 'זמינות שאין לה תחליף', body: 'ביקורת שלילית ב-11 בלילה, שאלה בשבת בצהריים, תלונה בפייסבוק באמצע יום שישי — Voca שם. בלי להמתין ליום העסקים הבא.' },
      { icon: 'verified_user', title: 'אתה תמיד בשליטה', body: 'אתה קובע מה Voca עושה לבד ומה מחכה לאישור שלך. כל תגובה מתועדת ושקופה בדאשבורד — והעומס על הצוות יורד.' },
    ],

    stats: [
      { num: 35, suffix: '%', label: 'יותר הכנסות לעסקים שמגיבים לביקורות', source: 'Womply Research' },
      { num: 71, suffix: '%', label: 'שימור לקוחות כשהמענה מגיע תוך שעה', source: 'Toister · Bain & Company' },
      { num: 44.6, suffix: '%', label: 'מהלקוחות הכועסים ניתנים להצלה', source: 'ReviewTrackers' },
      { num: 56, suffix: '%', label: 'שינו דעה על עסק בזכות תגובה אחת טובה', source: 'ReviewTrackers / BrightLocal' },
    ],

    modal: {
      title: 'איזה כיף שאתם מתעניינים ב-Voca!',
      sub: 'נשמח לדבר איתכם ולהקים את התשתית המותאמת בדיוק לעסק שלכם. השאירו פרטים ונחזור אליכם בהקדם.',
      nameLabel: 'שם מלא',
      phoneLabel: 'טלפון',
      emailLabel: 'אימייל',
      submit: 'שלחו לי פרטים',
      sending: 'שולח…',
      errorBody: 'משהו השתבש בשליחה. נסו שוב או כתבו לנו ל-hello@voca.io',
      thanksTitle: 'תודה! קיבלנו את הפרטים.',
      thanksBody: 'נחזור אליכם בהקדם כדי לדבר על הקמת התשתית המותאמת לעסק שלכם.',
    },
  },

  en: {
    dir: 'ltr',
    nav: { product: 'Product', capabilities: 'Capabilities', pricing: 'Pricing', cta: 'Start free' },

    hero: {
      badge: 'The customer-service layer of the digital business',
      line1: 'The next generation of customer service.',
      line2: 'For every business.',
      sub: 'Voca connects to every platform and all your business data, and answers on your behalf — in your voice, within seconds, at any hour. Instant coverage where 62.6% of businesses still reply by hand, if at all.',
      subSource: 'Vendasta · 2026 State of Reputation Management',
      primaryCta: 'Start 30 days free',
      secondaryCta: 'See how it works',
      panelTitle: 'Voca · live now',
      panelStatus: 'Connected',
      gaugeLabel: 'Positive sentiment',
      gaugeValue: 74,
      sparkLabel: 'Inquiries · 24h',
      sparkValue: '2,847',
      sparkDelta: '+12%',
      chip1Value: '81%',
      chip1Label: 'Auto-resolved',
      chip2Value: '14',
      chip2Label: 'Waiting on human review',
    },

    trust: {
      title: 'Customers are already deciding based on how you respond. The numbers are unambiguous.',
      items: [
        { value: '97%', label: 'read reviews before choosing a business', source: 'BrightLocal / BIA·Kelsey' },
        { value: '5%', label: 'of businesses reply consistently', source: 'Voca Market Research 2025' },
        { value: '71%', label: 'customer retention when the reply lands within an hour', source: 'Toister · Bain & Company' },
      ],
    },

    problem: {
      kicker: 'Why it matters now',
      title: "Your customers are already talking about you. The question is who's answering.",
      body1: "A review at 11 PM. A WhatsApp question on the weekend. A complaint on Facebook in the middle of a busy day. The messages don't stop coming — and they don't wait for the next business day.",
      body2: "That gap isn't a lack of awareness — it's a lack of capacity. A large company has a service department; for you, reputation competes for time against payroll, supply, and the day itself.",
      body2Source: 'Vendasta · 2026 State of Reputation Management for SMBs',
      gapTitle: 'What silence costs',
      gapHigh: { value: 88, label: 'choose a business that answers every review' },
      gapLow: { value: 47, label: 'choose one that stays silent' },
      gapNote: 'Silence erases more than half your potential market — before the first interaction.',
      gapSource: 'BrightLocal 2024',
      statsTitle: 'What customers do before they choose a business',
      bars: [
        { label: 'Read reviews before choosing', value: 97, source: 'BrightLocal / BIA·Kelsey' },
        { label: 'Require a 4-star rating or higher', value: 92, source: 'Podium / BrightLocal' },
        { label: "Read the business's responses", value: 89, source: 'BrightLocal / BIA·Kelsey' },
        { label: 'Refuse a business with an unanswered review', value: 94, source: 'Textedly / TrustMary' },
      ],
    },

    solution: {
      kicker: 'What Voca does',
      title: 'Not another tool. The layer your business plugs into.',
      body1: 'The platforms your customers speak on sit on one side. The data that actually answers them — inventory, orders, CRM, service policy — sits on the other. Voca sits in the middle and connects them.',
      body2: 'When a customer reaches out, Voca reads the message, understands the emotion behind it, checks your real business data — and responds in your voice, within seconds.',
      body3: 'Not a bot. Not "thank you for your message." A response that feels like it was written by someone who truly knows the customer.',
      graphPlatformsTitle: 'Where customers speak',
      graphDataTitle: 'Your business data',
      hubLabel: 'Voca',
      hubSub: 'Context engine',
      platforms: [
        { label: 'Google', icon: 'reviews' },
        { label: 'Instagram', icon: 'photo_camera' },
        { label: 'Facebook', icon: 'thumb_up' },
        { label: 'WhatsApp', icon: 'forum' },
        { label: 'Email', icon: 'mail' },
      ],
      dataSources: [
        { label: 'Inventory', icon: 'inventory_2' },
        { label: 'Orders', icon: 'receipt_long' },
        { label: 'CRM', icon: 'contacts' },
        { label: 'Service policy', icon: 'policy' },
        { label: 'Customer history', icon: 'history' },
      ],
    },

    dashboard: {
      kicker: 'What it looks like inside',
      title: 'One command center for your entire service operation — live.',
      body: 'Open it in the morning and see the full picture: what was handled on its own, where there was friction, and what needs your decision.',
      panelTitle: 'Command Center · Global View',
      liveTag: 'Live',
      feedLabel: 'Incoming · Live Feed',
      queueLabel: 'Waiting on your approval',
      queueTag: 'High priority',
      queueMeta: 'VIP customer · Google · Tel Aviv',
      queueBody: '"I bought the item a week ago and still haven\'t heard back." — Voca drafted a reply with a ₪50 credit per policy. Waiting on your sign-off.',
      queueApprove: 'Approve & send',
      queueEdit: 'Edit',
      replyLabel: 'Voca replied ←',
    },

    capabilities: {
      kicker: 'What sets Voca apart',
      title: 'The sensitivity of a human rep, at machine scale',
    },

    proof: {
      kicker: 'The return',
      title: "Great service isn't a cost. It's revenue.",
      body: 'Every figure here is measured in independent research. This is what happens when a business answers — fast, consistently, for everyone.',
    },

    pricing: {
      kicker: 'Removing the barrier',
      title: 'Enterprise-grade infrastructure. At a small-business price.',
      body: "A human service rep costs around ₪12,000 a month — sleeps at night, doesn't remember every customer, isn't on every platform. Voca starts at ₪199 a month: always available, remembers everything, everywhere at once.",
      costTitle: 'Monthly cost — what you actually pay',
      humanLabel: 'Human service rep',
      humanPrice: '₪12,000',
      humanUnit: '/ mo',
      vocaLabel: 'Voca — Starter plan',
      vocaPrice: '₪199',
      vocaUnit: '/ mo',
      ratioNote: '24/7 coverage at 1.6% of the cost.',
      terms: 'No annual contract · 30-day trial · cancel anytime',
    },

    cta: {
      title: 'Let Voca speak for your business.',
      sub: 'Start your 30-day trial today — and see what happens when your business never sleeps.',
      primaryCta: 'Start now — free',
      secondaryCta: 'Talk to us',
      trust: 'No credit card to start · Personal onboarding · Human support',
    },

    footer: '© 2026 Voca · every business, given a voice',

    channels: [
      { variant: 'accent', tag: 'Viral risk', meta: 'Instagram · 4 min ago', body: 'An unhappy customer posted about a bad service experience — to 40K followers.' },
      { variant: 'brand', tag: 'VIP', meta: 'Google · Gold tier · 7 min ago', body: '"I bought this a week ago and no one has replied."' },
      { variant: 'on-inverse', tag: 'Automated', meta: 'WhatsApp · 11 min ago', body: '"Arrived right on time, excellent! Thank you."' },
    ],

    dashboardMetrics: [
      { value: '74%', label: 'Positive sentiment', delta: '↑ 8% this month' },
      { value: '2,847', label: 'Inquiries today', delta: '↑ 12% vs. yesterday' },
      { value: '81%', label: 'Auto-resolved', delta: '↑ 2% this week' },
      { value: '14', label: 'Waiting on human review', delta: 'Human-in-the-loop' },
    ],

    dashboardFeed: [
      { variant: 'accent', tag: 'Needs approval', meta: 'Tokyo · 2 min ago', body: 'Customer received only 4 of 7 items in an order — staff never followed up.', reply: '"So sorry for the delay! We found the second package stuck in the warehouse — reshipping today via express, plus a $10 credit is on its way to your email."' },
      { variant: '', tag: 'Automated ✓', meta: 'New York · 11 min ago', body: '"Just finished it — best read I\'ve had all year!"', reply: '"So glad to hear it! We\'ve set aside two similar titles for you — sending the link in a follow-up."' },
      { variant: 'brand', tag: 'VIP', meta: 'Singapore · 14 min ago', body: '"The staff here are so knowledgeable, recommended exactly what I needed."', reply: '"Thank you! We passed the compliment to the Orchard Rd team, and added 200 bonus points to your VIP account."' },
    ],

    features: [
      { icon: 'hub', title: 'Context that drives precision', body: "Every response comes from your real business data — inventory, availability, customer history, service policy. Never a template. That's a precision a human rep can't reach at this volume." },
      { icon: 'record_voice_over', title: 'A voice that sounds like you', body: 'A family restaurant speaks differently from a private clinic, which speaks differently from a fashion chain. Voca learns your business\'s voice and keeps it on every platform, at any hour.' },
      { icon: 'bedtime', title: 'Availability with no substitute', body: 'A bad review at 11 PM, a question on a Saturday afternoon, a complaint on Facebook mid-Friday — Voca is there. Without waiting for the next business day.' },
      { icon: 'verified_user', title: "You're always in control", body: 'You decide what Voca handles alone and what waits for your approval. Every response is logged and transparent in the dashboard — and the load on your team drops.' },
    ],

    stats: [
      { num: 35, suffix: '%', label: 'more revenue for businesses that respond to reviews', source: 'Womply Research' },
      { num: 71, suffix: '%', label: 'customer retention when the reply lands within an hour', source: 'Toister · Bain & Company' },
      { num: 44.6, suffix: '%', label: 'of unhappy customers can be won back', source: 'ReviewTrackers' },
      { num: 56, suffix: '%', label: 'changed their mind about a business after one good response', source: 'ReviewTrackers / BrightLocal' },
    ],

    modal: {
      title: "We're excited you're interested in Voca!",
      sub: "We'd love to talk and set up the infrastructure tailored to your business. Leave your details and we'll get back to you shortly.",
      nameLabel: 'Full name',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      submit: 'Send my details',
      sending: 'Sending…',
      errorBody: 'Something went wrong sending this. Please try again or email us at hello@voca.io',
      thanksTitle: "Thanks! We've got your details.",
      thanksBody: "We'll be in touch shortly to talk about setting up the infrastructure tailored to your business.",
    },
  },
};

// Shared (language-independent) chart data.
const CHART_DATA = {
  heroSpark: [12, 14, 13, 16, 15, 18, 17, 21, 20, 24, 23, 27, 26, 31, 30, 34, 33, 38, 40, 44, 47, 52, 58, 63],
};
