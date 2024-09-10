// pages/_not-found.tsx
import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }: { locale: string }) {
  // Set locale for static generation (if needed)
  return {
    props: {
      messages: await import(`../locales/${locale}.json`).then((mod) => mod.default)
    }
  };
}

export default function NotFound() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.description')}</p>
    </div>
  );
}
