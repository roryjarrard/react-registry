import type { PackageDetails } from '../types/packageDetails';

export async function getPackage(name: string): Promise<PackageDetails> {
    const res = await fetch(`https://registry.npmjs.com/${name}`);
    const data = await res.json();

    return data as PackageDetails;  // Type assertion
};