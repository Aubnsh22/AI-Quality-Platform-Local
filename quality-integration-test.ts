export const maxAttempts = 2;
export const retryBackoffMs = 250;
export const retryJitterMs = 50;

export async function retryRequest(
  request: () => Promise<string>
) {
  try {
    return await request();
  } catch {
    return request();
  }
}
