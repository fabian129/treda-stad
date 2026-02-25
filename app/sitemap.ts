import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://treda.se";

    // Static routes
    const routes = [
        "",
        "/om-oss",
        "/kontakt",
        "/tjanster",
        "/foretag",
        "/jobba-hos-oss",
        "/integritetspolicy",
        "/tillganglighetspolicy",
        "/villkor",
        "/vart-finns-vi",
    ];

    const staticEntries = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Add dynamic routes manually for now (can be fetched from CMS/API later)
    // Example: Services
    const services = ["hemstadning", "storstadning", "flyttstadning", "byggstadning", "kontorsstad", "fonsterputs"];
    const serviceEntries = services.map((slug) => ({
        url: `${baseUrl}/tjanster/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // Example: Cities - assuming standard list or fetched
    const cities = ["malmo", "lund", "trelleborg", "vellinge", "hollviken", "lomma", "staffanstorp"];
    const cityEntries = cities.map((slug) => ({
        url: `${baseUrl}/vart-finns-vi/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [...staticEntries, ...serviceEntries, ...cityEntries];
}
