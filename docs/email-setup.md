# Email Setup for Waitlist Form

The waitlist form is configured to send two emails when a user submits the form:

1. A confirmation email to the user
2. A notification email to the admin

## Email Configuration

For the email functionality to work in production, you need to set up the following environment variables:

| Variable         | Description                           | Example              |
| ---------------- | ------------------------------------- | -------------------- |
| `EMAIL_HOST`     | SMTP server hostname                  | smtp.gmail.com       |
| `EMAIL_PORT`     | SMTP server port                      | 587                  |
| `EMAIL_SECURE`   | Whether to use TLS (true/false)       | false                |
| `EMAIL_USER`     | Email address to send from            | hello@tatamihq.com   |
| `EMAIL_PASSWORD` | Password for the email account        | your-secure-password |
| `ADMIN_EMAIL`    | Email address for admin notifications | ahmed@tatamihq.com   |

## Development Mode

In development mode, if the environment variables are not set, the application will not actually send emails. Instead, it will log the email content to the console for debugging purposes.

## Setting up Environment Variables

### For Local Development

Create a `.env.local` file in the root of your project with the following content:

```
EMAIL_HOST=your-smtp-host
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-password
ADMIN_EMAIL=admin@example.com
```

### For Production Deployment

Set these environment variables in your hosting platform's dashboard (Vercel, Netlify, etc.).

## Testing the Email Functionality

To test if the email functionality is working correctly:

1. Set up the environment variables
2. Submit the waitlist form with test data
3. Check your inbox for the confirmation email
4. Check the admin email for the notification

## Troubleshooting

If emails are not being sent:

1. Check that all environment variables are set correctly
2. Verify that your SMTP server allows connections from your application
3. If using Gmail or other providers with security features, you may need to:
   - Create an app password
   - Enable "Less secure apps" (for Gmail)
   - Allow access from new devices/locations

## Email Templates

The email templates are defined in `src/app/api/waitlist/route.ts`. You can modify these templates to match your branding and messaging needs.
