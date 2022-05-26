const API_URL = process.env.NEXT_PUBLIC_DATO_CMS_API_KEY || '';
const API_TOKEN = process.env.NEXT_PUBLIC_DATO_CMS_API_KEY || ''

interface Config<T> { 
    [key: string]: T 
}

export async function fetchCmsAPI<T>(query: string, { variables }: Config<T> = {}) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();
    if (json.errors) {
        throw new Error(`Failed to fetch API, ${json.errors}`);
    }

    return json.data as T;
}
