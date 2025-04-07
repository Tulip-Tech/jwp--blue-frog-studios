import { useEffect, useRef } from 'react';

function CookiebotDeclaration() {
  const legalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'CookieDeclaration';
    script.src = 'https://consent.cookiebot.com/603d6ef7-9d8b-408a-81cb-0af069643a8e/cd.js';
    script.type = 'text/javascript';
    script.async = true;
    legalContainerRef.current?.appendChild(script);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      legalContainerRef.current?.removeChild(script);
    };
  }, [legalContainerRef]);

  return <div ref={legalContainerRef} className="legal__container" />;
}

export default CookiebotDeclaration;
