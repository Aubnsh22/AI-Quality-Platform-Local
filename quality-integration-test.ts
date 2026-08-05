export async function retryRequest(
    request: () => Promise<string>
      return await request();
    } catch {
      return request();
    }
  }
export const maxAttempts = 2;
