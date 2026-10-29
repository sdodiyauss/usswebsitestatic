import { testConnection } from '../../../lib/db';

export async function GET() {
  try {
    const result = await testConnection();
    
    if (result && result.success) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Database connection successful',
          timestamp: new Date().toISOString()
        }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Database connection failed',
          error: result?.error?.message || 'Unknown error',
          code: result?.error?.code || null
        }),
        { status: 500 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Database test failed',
        error: error.message
      }),
      { status: 500 }
    );
  }
}
