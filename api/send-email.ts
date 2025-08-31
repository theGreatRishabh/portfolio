// api/send-email.ts
// This is a Vercel Serverless Function which proxies requests to EmailJS.

// Vercel's Request and Response types
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // 1. We only want to handle POST requests.
  if (req.method !== 'POST') {
    // Set the 'Allow' header to indicate that only POST is supported
    res.setHeader('Allow', 'POST');
    // Respond with a 405 Method Not Allowed status
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  // 2. Get the EmailJS credentials from environment variables.
  // These are set in the Vercel dashboard, not in the code.
  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY, // Formerly USER_ID
    EMAILJS_PRIVATE_KEY,
  } = process.env;

  // 3. Check if all required environment variables are set.
  if (
    !EMAILJS_SERVICE_ID ||
    !EMAILJS_TEMPLATE_ID ||
    !EMAILJS_PUBLIC_KEY ||
    !EMAILJS_PRIVATE_KEY
  ) {
    return res.status(500).json({ message: 'Server configuration error: EmailJS credentials are not set.' });
  }

  try {
    // 4. Construct the payload for the EmailJS API.
    // The request body from the frontend form should match the template parameters.
    const data = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      
      template_params: req.body, // Pass the entire form body as template parameters
      accessToken: EMAILJS_PRIVATE_KEY, // Use the private key for server-side requests
    };

    // 5. Make the secure, server-to-server call to the EmailJS API.
    const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseText = await emailJsResponse.text();

    // 6. Handle the response from EmailJS.
    if (emailJsResponse.ok) {
      // If the request was successful, send a success response to the frontend.
      return res.status(200).json({ message: 'Email sent successfully!' });
    } else {
      // If there was an error, forward the error message from EmailJS.
      console.error('EmailJS Error:', responseText);
      return res.status(emailJsResponse.status).json({ message: `Failed to send email. Reason: ${responseText}` });
    }
  } catch (error) {
    // 7. Handle any unexpected errors during the process.
    console.error('Internal Server Error:', error);
    return res.status(500).json({ message: 'An unexpected error occurred.' });
  }
}
