import { Client, PricingTier, ShowcaseItem, Testimonial, FAQItem } from './types';

export const CLIENTS: Client[] = [
  { 
    name: 'Beta Squad', 
    subscribers: '11.6M',
    imageUrl: 'https://imgs.search.brave.com/CA9lU0EMpnuJ1b5g8rpzu5Q8C6rHblUSiobh36elIvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdiLzkz/L2EzLzdiOTNhMzQ3/ZjQzMjRhZmQwOGNk/YmMwNWE5MjIwMmU4/LmpwZw',
    avatarUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_keJoAmv1MrHOIplkYaZok_WuOdiHDTBv8Gv4xlmnOrLzk=s176-c-k-c0x00ffffff-no-rj-mo'
  },
  { 
    name: 'CarryMinati', 
    subscribers: '45.3M',
    imageUrl: 'https://i.pinimg.com/736x/b3/50/a4/b350a43c29c7a26b029e21bf81e5ceff.jpg',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkx3l_gTvu_PeN0E1uUWJ-LojXFxPv3taj8Q&s'
  },
  { 
    name: 'Offline TV', 
    subscribers: '3.29M',
    imageUrl: 'https://imgs.search.brave.com/1HtxEEB27srKAtQHN_LWBemBlBcaoDYcXl-0XaZXbRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaGFy/YWN0ZXJtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTIvQ00tMjAy/Ml9PZmZsaW5lVFZf/RnJhbmNpcy1SYXlf/RURJVEVEXzMtY29w/eS0xLTEzOTR4MTAy/NC5qcGc',
    avatarUrl: 'https://yt3.ggpht.com/HcmPM6Mnn7zS-qUWyyT8_C3mSyLfd4bjo8D4-BHu8R-IG_ngFfIuqwHC9JYZAdQXZKXxIKyGAg=s176-c-k-c0x00ffffff-no-rj-mo'
  },
  { 
    name: 'Bully Juice', 
    subscribers: '9.8M',
    imageUrl: 'https://imgs.search.brave.com/_aZN9y9vgLKLGrwJvHnUGhasOPG07kDIBozLw1s6Wgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXVzY2xlYW5kZml0/bmVzcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDYv/RGFycnlsLUJ1bGx5/SnVpY2UtV2lsbGlh/bXMtZmF0aGVycy1k/YXktd29ya291dC5q/cGc_dz0xMTA5Jmg9/NjE0JmNyb3A9MSZx/dWFsaXR5PTg2JnN0/cmlwPWFsbA',
    avatarUrl: 'https://imgs.search.brave.com/J8SqfdTtXmAxMU0xP9iQ56a-YtV8sWqX4kSRVRomdLw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2FyZXMt/cHJvZmlsZS1waWN0/dXJlcy9kZWZhdWx0/L2J1bGx5anVpY2Ut/YjEyMTUyN2FjNDZl/Y2ViMGE4MmNhNjcw/NzRmZjhjZmYuanBn'
  },
  { 
    name: 'Tech Burner', 
    subscribers: '12.5M',
    imageUrl: 'https://imgs.search.brave.com/Lv55_8C-bTxsGSVZo9q14geJcOiWdOaJM9sPAZCh8wU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVz/dGFyc2Jpby5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/Ny9TaGxvay1Tcml2/YXN0YXZhLVBob3Rv/LTk1MngxMDI0Lndl/YnA',
    avatarUrl: 'https://yt3.ggpht.com/4l8EVYasVxYT2gjYKzp2ls2_t7jvyEMhraMC-OVZuz0Cu_KrA0l678sCfY1vxGSL7SHE3zZYCA=s176-c-k-c0x00ffffff-no-rj-mo'
  },
  { 
    name: 'FaZe Rug', 
    subscribers: '28.7M',
    imageUrl: 'https://imgs.search.brave.com/KcaICZm49aQaggKd3PG5KfosRqEZdBberpCBRFCHngc/rs:fit:860:0:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNC9GYVpl/LVJ1Zy1XYWxscGFw/ZXItSEQuanBn',
    avatarUrl: 'https://yt3.googleusercontent.com/KN9ZJ9iHcPcKGokxLlwTPhdWU6wPrTe7Lf_7g2lXhjpX6fc4240zD4uus5jP3LWrzgPPziDE=s160-c-k-c0x00ffffff-no-rj'
  },
  { 
    name: 'Sam Eckholm', 
    subscribers: '1.57M',
    imageUrl: 'https://imgs.search.brave.com/un1cfqM7_ciJFX-aSUjEcK3bRLleM5sYv35R5qy8p5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lraWJpb3N0YXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA0L1NhbS1F/Y2tob2xtLS53ZWJw',
    avatarUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_khbc_z0xG2seY40ktRE3Jlz9CS1ewD2hCXTAwFZa6-qM8=s176-c-k-c0x00ffffff-no-rj-mo'
  },
  {
    name: 'Out of Love',
    subscribers: '1.91M',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyRD9IiG3yumUEQdLEAyNaUyUbeACmoWdfVg&s',
    avatarUrl: 'https://yt3.googleusercontent.com/zIXPpA6tOZgyuSbvTp-6p7sFZOWaLSWZfecbfFLYYxmE05xBeVRqzY52CVI4YK5gY8-Mvsdp=s160-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'Joe Daymond',
    subscribers: '7.5K',
    imageUrl: 'https://static.wixstatic.com/media/d6e623_65529627c8b84b3db136eab5ac4ce82b~mv2.jpg/v1/fill/w_333,h_401,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d6e623_65529627c8b84b3db136eab5ac4ce82b~mv2.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/ZOoP3yH3zyeUWjZRiJJGFGcp2OHxUu4ZcNjms71D6-d9SMgHVKf2C7uldHXg7kz2xsMJ9TMThYA=s160-c-k-c0x00ffffff-no-rj'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Rookie",
    price: "$149",
    features: [
      "1 Custom Thumbnail",
      "2 Rounds of Revisions",
      "48h Turnaround",
      "CTR Optimization"
    ],
    color: "bg-white",
    paymentUrl: "https://wise.com/pay/r/WO89eSs6mrensx8"
  },
  {
    name: "Viral",
    price: "$600",
    features: [
      "5 Thumbnail Package",
      "Unlimited Revisions",
      "24h Turnaround",
      "Priority Delivery",
      "Source Files Included",
      "A/B Variants"
    ],
    color: "bg-comic-yellow",
    popular: true,
    paymentUrl: "https://wise.com/pay/r/bdV1bjxMO-ndqtY"
  },
  {
    name: "Legend",
    price: "$2,000",
    features: [
      "Unlimited Youtube thumbnails",
      "Retainer Model",
      "Daily Deliveries",
      "24h Turnaround",
      "Dedicated Trello Board",
      "Strategy Consulting",
      "Title Optimization"
    ],
    color: "bg-comic-blue",
    paymentUrl: "https://wise.com/pay/r/AnUc_hKFQALF5wg"
  }
];

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 32,
    title: "The World’s Most Powerful Ship | USS Gerald R. Ford",
    client: "Sam Eckholm",
    beforeUrl: "https://img.youtube.com/vi/b7aTdnu-GXc/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/b7aTdnu-GXc/maxresdefault.jpg",
    category: "Vlogs",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/ytc/AIdro_khbc_z0xG2seY40ktRE3Jlz9CS1ewD2hCXTAwFZa6-qM8=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "8.2M"
  },
  {
    id: 31,
    title: "Living On A $2,000,000,000 Nuclear Submarine",
    client: "Sam Eckholm",
    beforeUrl: "https://img.youtube.com/vi/UFs3XsbUoCI/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/UFs3XsbUoCI/maxresdefault.jpg",
    category: "Vlogs",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/ytc/AIdro_khbc_z0xG2seY40ktRE3Jlz9CS1ewD2hCXTAwFZa6-qM8=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "18M"
  },
  {
    id: 30,
    title: "Exposing MrBeast's BIGGEST Secrets..",
    client: "FaZe Rug",
    beforeUrl: "https://img.youtube.com/vi/sEYupPUxyw8/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/sEYupPUxyw8/maxresdefault.jpg",
    category: "IRL",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/KN9ZJ9iHcPcKGokxLlwTPhdWU6wPrTe7Lf_7g2lXhjpX6fc4240zD4uus5jP3LWrzgPPziDE=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "12M"
  },
  {
    id: 29,
    title: "Guess the Secret WWE Superstar!",
    client: "FaZe Rug",
    beforeUrl: "https://img.youtube.com/vi/t6bBxV7fbiE/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/t6bBxV7fbiE/maxresdefault.jpg",
    category: "IRL",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/KN9ZJ9iHcPcKGokxLlwTPhdWU6wPrTe7Lf_7g2lXhjpX6fc4240zD4uus5jP3LWrzgPPziDE=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "8.5M"
  },
  {
    id: 28,
    title: "I Traveled Across America For My Dream Vacation!",
    client: "FaZe Rug",
    beforeUrl: "https://img.youtube.com/vi/CF95O-qvn74/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/CF95O-qvn74/maxresdefault.jpg",
    category: "IRL",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/KN9ZJ9iHcPcKGokxLlwTPhdWU6wPrTe7Lf_7g2lXhjpX6fc4240zD4uus5jP3LWrzgPPziDE=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "5.2M"
  },
  {
    id: 27,
    title: "I Survived The Most Expensive VS Cheapest Resort",
    client: "FaZe Rug",
    beforeUrl: "https://img.youtube.com/vi/IcSAIsJGK6I/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/IcSAIsJGK6I/maxresdefault.jpg",
    category: "IRL",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/KN9ZJ9iHcPcKGokxLlwTPhdWU6wPrTe7Lf_7g2lXhjpX6fc4240zD4uus5jP3LWrzgPPziDE=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "9.1M"
  },
  {
    id: 26,
    title: "Spending 24 Hours in a Stadium",
    client: "FaZe Rug",
    beforeUrl: "https://img.youtube.com/vi/KOlC5xjlmqY/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/KOlC5xjlmqY/maxresdefault.jpg",
    category: "IRL",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/KN9ZJ9iHcPcKGokxLlwTPhdWU6wPrTe7Lf_7g2lXhjpX6fc4240zD4uus5jP3LWrzgPPziDE=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "15M"
  },
  {
    id: 24,
    title: "OFFLINETV PLAYS REVERSE CHARADES ft. ExtraEmily",
    client: "OfflineTV",
    beforeUrl: "https://img.youtube.com/vi/VZBAJTlo4Qs/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/VZBAJTlo4Qs/maxresdefault.jpg",
    category: "Entertainment",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/HcmPM6Mnn7zS-qUWyyT8_C3mSyLfd4bjo8D4-BHu8R-IG_ngFfIuqwHC9JYZAdQXZKXxIKyGAg=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "3.2M"
  },
  {
    id: 22,
    title: "POV: You run a €1.5 Billion Construction Company | Vlog 001",
    client: "Hubert Rhomberg",
    beforeUrl: "https://img.youtube.com/vi/a0IP2pcU2Zg/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/a0IP2pcU2Zg/maxresdefault.jpg",
    category: "Entrepreneur",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/eriYve7TIbhuQOnyDQN0Ll3shYG6NgkDdA5KBDJRNL8rPoM2vrWXUtFNX1RirxfrlxVbEeiw=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "1.1M"
  },
  {
    id: 21,
    title: "CARRYMINATI VS SIGMA MALE",
    client: "CarryMinati",
    beforeUrl: "https://img.youtube.com/vi/i2xxhRTs5Uc/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/i2xxhRTs5Uc/maxresdefault.jpg",
    category: "Entertainment",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/cxE8FStJktJ2oiuv1f-7OHMfJI7ZlMby4NgPDkfJTyV3sOsvdo5pmsAb8TAcJVNor6gNT2h_0w=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "45M"
  },
  {
    id: 20,
    title: "CARRY KI SHAADI 😭 | Q&A 2024 CARRYMINATI",
    client: "CarryMinati",
    beforeUrl: "https://img.youtube.com/vi/QoqokgcX96M/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/QoqokgcX96M/maxresdefault.jpg",
    category: "Entertainment",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/cxE8FStJktJ2oiuv1f-7OHMfJI7ZlMby4NgPDkfJTyV3sOsvdo5pmsAb8TAcJVNor6gNT2h_0w=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "32M"
  },
  {
    id: 19,
    title: "I Rucked 6 Miles With 122lbs | Tough Times 002",
    client: "Bully Juice",
    beforeUrl: "https://img.youtube.com/vi/LTmayCAQHL0/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/LTmayCAQHL0/maxresdefault.jpg",
    category: "Fitness",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/iTKoWeR1gb6EZQRlj0C3afERKPhOodX_pqp8_kw7odKNrFBsCXgQBvXt8HxmSDG6LRWzK8yNqg=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "2.4M"
  },
  {
    id: 18,
    title: "15 Minute Fat Burning Workout",
    client: "Bully Juice",
    beforeUrl: "https://img.youtube.com/vi/9cpYVuCmgZ0/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/9cpYVuCmgZ0/maxresdefault.jpg",
    category: "Fitness",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/iTKoWeR1gb6EZQRlj0C3afERKPhOodX_pqp8_kw7odKNrFBsCXgQBvXt8HxmSDG6LRWzK8yNqg=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "8.9M"
  },
  {
    id: 17,
    title: "I Challenged A Professional Eater To A Food Challenge",
    client: "Out of Love",
    beforeUrl: "https://img.youtube.com/vi/ItQyQmLFWAk/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/ItQyQmLFWAk/maxresdefault.jpg",
    category: "Entertainment",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/zIXPpA6tOZgyuSbvTp-6p7sFZOWaLSWZfecbfFLYYxmE05xBeVRqzY52CVI4YK5gY8-Mvsdp=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "1.8M"
  },
  {
    id: 16,
    title: "How To Build A 100 Cr Business?",
    client: "Masters' Union",
    beforeUrl: "https://img.youtube.com/vi/B_Uh5V4xD4k/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/B_Uh5V4xD4k/maxresdefault.jpg",
    category: "Podcast",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/lV6sxvUrNZlGmNctICHE7VxwYEANvRXYVic2DPru1diIc-YQEUZkQar4g-eZnow4I10jZ-cT=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "950K"
  },
  {
    id: 15,
    title: "Francois Chollet - Keras, LLMs, & The Future of AI",
    client: "Dwarkesh Patel",
    beforeUrl: "https://img.youtube.com/vi/ZACAzNyfyxs/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/ZACAzNyfyxs/maxresdefault.jpg",
    category: "Podcast",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/lG-z7sTfhFIW2Ne1oXMHvXMXyZSaA02_I17gUel0GAEj7OypsSHQ7PE91Vp4bTbpm3PTIAWJdko=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "450K"
  },
  {
    id: 14,
    title: "We Opened A Fake McDonald's",
    client: "Beta Squad",
    beforeUrl: "https://img.youtube.com/vi/-Ad7lJ74XSE/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/-Ad7lJ74XSE/maxresdefault.jpg",
    category: "IRL",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/ytc/AIdro_keJoAmv1MrHOIplkYaZok_WuOdiHDTBv8Gv4xlmnOrLzk=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "18M"
  },
  {
    id: 1,
    title: "We Bought A Billion Of The World’s Cheapest Currency",
    client: "Beta Squad",
    beforeUrl: "https://i.ibb.co/k2ZYsbs0/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-1.png",
    afterUrl: "https://i.ibb.co/xSM3dy9z/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-2.png",
    category: "IRL",
    size: "Mega",
    views: "14M"
  },
  {
    id: 2,
    title: "Road To JUNIOR OLYMPICS !!!",
    client: "Out of Love",
    beforeUrl: "https://i.ibb.co/ZzwQQMm/Before.png",
    afterUrl: "https://i.ibb.co/tKYYV2j/Before-1.png",
    category: "Entertainment",
    size: "Mega",
    views: "250K"
  },
  {
    id: 3,
    title: "I Built a Backyard Waterpark Using ONLY Temu Items",
    client: "FaZe Rug",
    beforeUrl: "https://i.ibb.co/qF33HQTn/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-4.png",
    afterUrl: "https://i.ibb.co/210NRnx3/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-5.png",
    category: "IRL",
    size: "Mega",
    views: "6.7M"
  },
  {
    id: 4,
    title: "Inside A Top Secret Nuclear Missile Silo",
    client: "Sam Eckholm",
    beforeUrl: "https://i.ibb.co/1J99T0gp/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-9.png",
    afterUrl: "https://i.ibb.co/MksMH18y/Untitled-design-2025-06-27-T093841-395.png",
    category: "Vlogs",
    size: "Mega",
    views: "3.5M"
  },
  {
    id: 5,
    title: "OFFLINETV YOU LAUGH YOU DIE",
    client: "Offline TV",
    beforeUrl: "https://i.ibb.co/2Gj8jTc/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-10.png",
    afterUrl: "https://i.ibb.co/yBS66qNb/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-11.png",
    category: "Entertainment",
    size: "Mega",
    views: "4.1M"
  },
  {
    id: 6,
    title: "First Ice Bath With My Wife ** WORTH IT **",
    client: "Out of Love",
    beforeUrl: "https://i.ibb.co/0pwfP6Jc/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-12.png",
    afterUrl: "https://i.ibb.co/G32RTRMx/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-13.png",
    category: "Vlogs",
    size: "Mid-Tier",
    views: "150K"
  },
  {
    id: 7,
    title: "We Survived 24 Hours On An Island",
    client: "Beta Squad",
    beforeUrl: "https://i.ibb.co/9kLF6PBZ/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail.png",
    afterUrl: "https://i.ibb.co/zhhvLc8R/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-3.png",
    category: "IRL",
    size: "Mega",
    views: "22M"
  },
  {
    id: 8,
    title: "I Actually Tried To Beat The World Record",
    client: "Out of Love",
    beforeUrl: "https://i.ibb.co/hJ0f9xjV/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-8.png",
    afterUrl: "https://i.ibb.co/cc9JpMRx/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-7.png",
    category: "Vlogs",
    size: "Micro",
    views: "85K"
  },
  {
    id: 9,
    title: "How to Increase Domain Rating or Domain Authority?",
    client: "Waseem Bashir",
    beforeUrl: "https://i.ibb.co/XfpvDFSS/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-14.png",
    afterUrl: "https://i.ibb.co/vxKCp8vF/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-15.png",
    category: "Entrepreneur",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/AouVBFjT6IYsYg6Gu3QCsH7hg5XpHzfqKgycbESuM_d28S7SMVtUitLOhB9wEidVlzoZAXMI=s160-c-k-c0x00ffffff-no-rj",
    views: "45K"
  },
  {
    id: 10,
    title: "5 Lessons I Learned After Spending Over 10,000 Hours Building Landing Pages",
    client: "Waseem Bashir",
    beforeUrl: "https://i.ibb.co/XfpvDFSS/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-14.png",
    afterUrl: "https://i.ibb.co/8DNGMWf9/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-16.png",
    category: "Entrepreneur",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/AouVBFjT6IYsYg6Gu3QCsH7hg5XpHzfqKgycbESuM_d28S7SMVtUitLOhB9wEidVlzoZAXMI=s160-c-k-c0x00ffffff-no-rj",
    views: "32K"
  },
  {
    id: 11,
    title: "I Trained with UFC stars and Nearly Threw Up!",
    client: "Joe Daymond",
    beforeUrl: "https://i.ibb.co/99hKrbqZ/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-17.png",
    afterUrl: "https://i.ibb.co/hRkkhfRf/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-18.png",
    category: "Comedian",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/ZOoP3yH3zyeUWjZRiJJGFGcp2OHxUu4ZcNjms71D6-d9SMgHVKf2C7uldHXg7kz2xsMJ9TMThYA=s160-c-k-c0x00ffffff-no-rj",
    views: "1.2M"
  },
  {
    id: 12,
    title: "Sarah Paine — The war for India (lecture & interview)",
    client: "Dwarkesh Patel",
    beforeUrl: "https://i.ibb.co/rGjv1Mqx/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-20.png",
    afterUrl: "https://i.ibb.co/4gmWW61v/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail-19.png",
    category: "Podcast",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/lG-z7sTfhFIW2Ne1oXMHvXMXyZSaA02_I17gUel0GAEj7OypsSHQ7PE91Vp4bTbpm3PTIAWJdko=s160-c-k-c0x00ffffff-no-rj",
    views: "890K"
  },
  {
    id: 13,
    title: "Mafia - Beta Squad Edition",
    client: "Beta Squad",
    beforeUrl: "https://img.youtube.com/vi/SzcYBZmA5pU/maxresdefault.jpg",
    afterUrl: "https://img.youtube.com/vi/SzcYBZmA5pU/maxresdefault.jpg",
    category: "IRL",
    size: "Mega",
    clientAvatarUrl: "https://yt3.googleusercontent.com/ytc/AIdro_keJoAmv1MrHOIplkYaZok_WuOdiHDTBv8Gv4xlmnOrLzk=s160-c-k-c0x00ffffff-no-rj",
    isHiddenFromHome: true,
    views: "16M"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Niko Omilana",
    channel: "Beta Squad",
    quote: "Mosvie Media literally saved our CTR. The thumbnails are actually insane. Best investment we made this year.",
    avatarUrl: "https://yt3.googleusercontent.com/ytc/AIdro_keJoAmv1MrHOIplkYaZok_WuOdiHDTBv8Gv4xlmnOrLzk=s176-c-k-c0x00ffffff-no-rj-mo"
  },
  {
    id: 2,
    name: "Scarra",
    channel: "Offline TV",
    quote: "Fastest turnaround time we've ever had. And the quality never drops. Highly recommend for any serious creator.",
    avatarUrl: "https://yt3.ggpht.com/HcmPM6Mnn7zS-qUWyyT8_C3mSyLfd4bjo8D4-BHu8R-IG_ngFfIuqwHC9JYZAdQXZKXxIKyGAg=s176-c-k-c0x00ffffff-no-rj-mo"
  },
  {
    id: 3,
    name: "FaZe Rug",
    channel: "FaZe Rug",
    quote: "I didn't think my thumbnails could get better until I met these guys. They understand the algorithm better than YouTube.",
    avatarUrl: "https://yt3.googleusercontent.com/KN9ZJ9iHcPcKGokxLlwTPhdWU6wPrTe7Lf_7g2lXhjpX6fc4240zD4uus5jP3LWrzgPPziDE=s160-c-k-c0x00ffffff-no-rj"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is your typical turnaround time?",
    answer: "For the Rookie package, we deliver within 48 hours. For bulk orders or the Legend tier, we set up a custom schedule, usually delivering 1-2 thumbnails daily."
  },
  {
    question: "Do you offer revisions?",
    answer: "Absolutely! We want you to be 100% hyped about your thumbnail. The Rookie tier includes 2 revisions, while our Viral and Legend tiers come with unlimited revisions until it's perfect."
  },
  {
    question: "How do we communicate?",
    answer: "For single orders, we use email. For our Viral and Legend clients, we set up a Dedicated Trello Board for instant feedback and collaboration."
  },
  {
    question: "Do you use AI in your designs?",
    answer: "We use AI as a tool for upscaling or generating specific assets (like a background element), but the composition, lighting, and storytelling are 100% human-crafted by pro artists."
  },
  {
    question: "What if I don't have good photos?",
    answer: "No worries! We can work with screenshots from your video, or we can guide you on how to take better photos with your phone. We're wizards at fixing lighting and quality in post."
  }
];