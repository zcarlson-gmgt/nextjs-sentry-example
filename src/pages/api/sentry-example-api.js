// A faulty API route to test Sentry's error monitoring

export const config = {
  runtime: 'edge',
}

export default function handler(_req, res) {
  throw new Error("Sentry Example API Route Error on Edge");
  res.status(200).json({ name: "John Doe" });
}
