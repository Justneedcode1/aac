"use client";
import "./globals.css";
import MenuScreen from "./components/menu/menuScreen";
import { ReduxProvider } from "./redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative'>
        <ReduxProvider>
          <MenuScreen />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
