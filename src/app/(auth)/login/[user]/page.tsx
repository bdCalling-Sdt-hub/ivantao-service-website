// // src/app/(auth)/login/[user]/page.tsx
// import Title from "antd/es/typography/Title";
// import { Metadata } from "next";
// import LoginForm from "./login-form";

// export async function generateStaticParams() {
//   return [{ user: "user" }, { user: "provider" }]; // Pre-generates the pages
// }

// export const metadata: Metadata = {
//   title: "Login",
// };

// export default async function Page({
//   params,
// }: {
//   params: { user: string } | Promise<{ user: string }>;
// }) {
//   const resolvedParams = await params; // Await the params, whether it's already resolved or a Promise
//   const user = resolvedParams.user;

//   return (
//     <main className="py-8 max-w-6xl mx-auto">
//       <div className="bg-background py-8 px-10 rounded-xl shadow-sm">
//         <div className="text-center pb-12">
//           <Title>
//             Login as a <span className="capitalize">{user}</span>
//           </Title>
//           <p className="text-[#6D6D6D]">
//             Log in by registered email & password
//           </p>
//         </div>
//         <LoginForm user={user} />
//       </div>
//     </main>
//   );
// }

import React from "react";

export default function Page() {
  return <div>Login</div>;
}
