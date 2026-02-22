export function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-balance text-center font-extrabold text-4xl tracking-tight">
      Taxing Laughter: The Joke Tax Chronicles
    </h1>
  );
}

export function TypographyH2() {
  return (
    <h2 className="scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0">
      The People of the Kingdom
    </h2>
  );
}

export function TypographyH3() {
  return (
    <h3 className="scroll-m-20 font-semibold text-2xl tracking-tight">
      The Joke Tax
    </h3>
  );
}

export function TypographyH4() {
  return (
    <h4 className="scroll-m-20 font-semibold text-xl tracking-tight">
      People stopped telling jokes
    </h4>
  );
}

export function TypographyP() {
  return (
    <p className="not-first:mt-6 leading-7">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
  );
}

export function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
      it&apos;s only fair that they should pay for the privilege.&quot;
    </blockquote>
  );
}

export function TypographyList() {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  );
}

export function TypographyInlineCode() {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm">
      @radix-ui/react-alert-dialog
    </code>
  );
}

export function TypographyLead() {
  return (
    <p className="text-muted-foreground text-xl">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
  );
}
