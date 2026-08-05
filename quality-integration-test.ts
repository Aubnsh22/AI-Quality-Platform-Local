export const maxAttempts = 2;

export async function retryRequest(
  request: () => Promise<string>
) {
  try {
    return await request();
  } catch {
    return request();
  }
}
