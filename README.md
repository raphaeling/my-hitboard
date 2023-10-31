[myhitboard](myhitboard.vercel.app) is a work-in-progress web application that gives you your own weekly top 10 last.fm and Spotify streams with chart updates!

### Future/to-do features
 - A logo 🙊
 - "Empty history" UI if no charts are saved
 - Compare charts with past charts (No button for the last chart!)
 - Separate Spotify and lastfm charts, to make it clear that they track different time ranges (Spotify 1 month; last.fm 1 week)
    - Perhaps, just grab 1 month's worth for consistency. I'll keep brainstorming potential use cases!
 - Delete individual charts rather than clearing the whole storage
 - Cloud storage of charts (with login)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
