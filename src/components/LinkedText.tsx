import { Fragment } from "react";

// Turns bare "prowireusa.com" mentions in content copy into links.
export function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(prowireusa\.com)/);
  return (
    <>
      {parts.map((part, i) =>
        part === "prowireusa.com" ? (
          <a key={i} href="https://www.prowireusa.com" className="underline underline-offset-2">
            prowireusa.com
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
