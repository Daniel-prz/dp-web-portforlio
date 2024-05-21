import "./globals.css";
import "./main.css";

export const metadata = {
  title: "Daniel Perez - Web Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className="flex-col flex body-bg w-full  min-h-[100vh]">
        {children}
      </body>
    </html>
  );
}
