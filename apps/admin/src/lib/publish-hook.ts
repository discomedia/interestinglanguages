type TriggerInput = {
  slug: string;
  operation: "create" | "update";
};

export async function triggerNetlifyBuildHook({ slug, operation }: TriggerInput): Promise<void> {
  const hookUrl = process.env.NETLIFY_BUILD_HOOK_URL;

  if (!hookUrl) {
    return;
  }

  try {
    const response = await fetch(hookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source: "payload",
        collection: "language-guides",
        slug,
        operation
      })
    });

    if (!response.ok) {
      console.warn(`Netlify build hook returned ${response.status} for ${slug}.`);
    }
  } catch (error) {
    console.warn(`Failed to trigger Netlify build hook for ${slug}.`, error);
  }
}
