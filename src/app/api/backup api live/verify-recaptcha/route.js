// export async function POST(req) {
//   try {
//     const { token } = await req.json();
//
//     if (!token) {
//       return Response.json(
//         { success: false, message: "Missing reCAPTCHA token" },
//         { status: 400 }
//       );
//     }
//
//     const secretKey = process.env.RECAPTCHA_SECRET_KEY;
//
//     if (!secretKey) {
//       return Response.json(
//         { success: false, message: "reCAPTCHA secret key is not configured" },
//         { status: 500 }
//       );
//     }
//
//     const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
//
//     const response = await fetch(verifyURL, { method: "POST" });
//     const result = await response.json();
//
//     return Response.json({
//       success: result.success ?? false,
//       score: result.score ?? null,
//       action: result.action ?? null,
//       challenge_ts: result.challenge_ts ?? null,
//       hostname: result.hostname ?? null,
//       "error-codes": result["error-codes"] ?? null,
//     });
//   } catch (error) {
//     return Response.json(
//       {
//         success: false,
//         message: "Failed to verify reCAPTCHA token",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }


