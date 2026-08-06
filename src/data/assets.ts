// Hot-linked assets from the design CDN + locally cropped pet cutouts.
// The three pets are local crops of the originals: their photos had a
// mint/dark "ledge" baked into the bottom (33-50% of frame); we cropped it
// off so the pets stand OUTSIDE the hero banner cards, paws resting on top.
export const ASSETS = {
  logo: 'https://polo-pecan-73837341.figma.site/_assets/v11/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg',
  avatar: 'https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128',
  catHouse: 'https://polo-pecan-73837341.figma.site/_assets/v11/3e5158dad63d392ade022e81890edc9f54d750bc.png',
  videoCard: 'https://polo-pecan-73837341.figma.site/_assets/v11/76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png',
  petDachshund: '/assets/dachshund.png',
  petRetriever: '/assets/retriever.png',
  petTabby: '/assets/tabby.png',
  // full uncropped retriever (dark ledge) for dark-surface usage
  petRetrieverFull: 'https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024',
} as const

export const NAV_LINKS = ['Home', 'Shop', 'Delivery and payment', 'Brands', 'Blog'] as const

export const NAV_ANCHORS = ['#top', '#shop', '#delivery', '#brands', '#blog'] as const
