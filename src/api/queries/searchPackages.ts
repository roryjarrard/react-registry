import type PackageSummary from '../types/packageSummary';

interface SearchResponse {
    objects: {
        package: {
            name: string;
            version: string;
            description: string;
            keywords: string[];
        };
    }[];
};

export async function searchPackages(term: string): Promise<PackageSummary[]> {
    const res = await fetch(
        `https://registry.npmjs.com/-/v1/search?text=${term}&size=10`
    );

    const data: SearchResponse = await res.json();

    return data.objects.map(({ package: { name, description, version, keywords } }) => {
        return {
            name,
            description,
            version,
            keywords
        };
    });
};