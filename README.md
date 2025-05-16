This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


a) activated_from datetime must be less then current datetime
b) valid_upto > today + package_days
c) code_usage_count < code_max_usage
d) pick oldest activated_from

we filter the shawdowsocks_code each entry and get available one.
after that for each remaining entry the 15 day package, 20 day package, 30 day package is count by if they are valid_upto 30,20 or 15 days
and then we found available package for each entry in table be code_max_usage - code_usage_count

but addition of entry is not what requires. 
 
for example for following two record in  shawdowsocks_code table --
code_usage_count:10, code_max_usage:17,valid_upto:2025-06-12 22:49:37,activated_from:2025-05-12 06:00:00
code_usage_count:6, code_max_usage:10,valid_upto:2025-06-15 11:03:38,activated_from:2025-05-17 18:00:00

we are supposed to have --
15 day package=7+4(7 for first entry and 4 for second entry on table) 
20 day package= 7+4(7 for first entry and 4 for second entry on table) 
30 day package=0 (cause both entry valid_upto is < 30 days but they are > 20,15 days)

but i am getting available package--
15 day package =7
20 day package=7
30 day package=0

so we are not using the second entry 
fix it
