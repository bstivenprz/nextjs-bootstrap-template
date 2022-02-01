import Error from 'next/error';

export default function ServerError() {
  // Opinionated: do not record an exception in Sentry for 500
  return <Error statusCode={500} />;
}
