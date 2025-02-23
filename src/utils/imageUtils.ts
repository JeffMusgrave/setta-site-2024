import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import type { AstroGlobal } from "astro";

// Define a type for the Astro global
// type AstroGlobal = {
//   site?: URL;
// };

export async function optimizeImage(
  image: ImageMetadata,
  width: number = 1000,
  format: "webp" | "avif" | "png" | "jpg" = "webp",
  quality: number = 80
) {
  const { src } = await getImage({
    src: image,
    width,
    format,
    quality,
  });
  return src;
}

export function getSchemaImageUrl(
  imagePath: string,
  astro: AstroGlobal
): string {
  const fileName = imagePath.split("/").pop()?.split(".")[0] || "";

  if (import.meta.env.PROD) {
    // In production, use the _astro directory and find the largest WebP version
    const imageFiles = import.meta.glob("/_astro/*.webp", { eager: true });
    const matchingFiles = Object.keys(imageFiles).filter(
      (file) => file.includes(fileName) && file.endsWith(".webp")
    );

    if (matchingFiles.length > 0) {
      // Sort files by the length of their names (longer names typically indicate larger sizes)
      // and pick the one with the highest resolution (assuming it's the last in the srcset)
      const largestFile = matchingFiles.sort((a, b) => b.length - a.length)[0];
      return new URL(largestFile, astro.site).toString();
    }

    // Fallback to a generic URL if no matching file is found
    console.warn(`No matching WebP files found for ${fileName}`);
    return new URL(`/_astro/${fileName}.webp`, astro.site).toString();
  } else {
    // In development, use the original path
    return new URL(imagePath, astro.site).toString();
  }
}

export function transformImageUrl(url: string, astro: AstroGlobal): string {
  const parsedUrl = new URL(url, astro.site);
  if (parsedUrl.pathname === "/_image") {
    const href = parsedUrl.searchParams.get("href");
    if (href) {
      const fileName = href.split("/").pop()?.split(".")[0];
      return `/assets/images/${fileName}.webp`;
    }
  }
  return url;
}

export async function getSchemaImage(
  imageUrl: string | ImageMetadata,
  width: number = 500,
  quality: number = 80
) {
  const image = await getImage({
    src: imageUrl,
    width: width,
    format: "webp",
    quality: quality,
  });
  return image;
}

export async function getOgImage(
  imageUrl: string | ImageMetadata,
  width: number = 1200,
  quality: number = 90
) {
  const image = await getImage({
    src: imageUrl,
    width: width,
    format: "webp",
    quality: quality,
  });
  return image;
}

export function getFullImageUrl(
  imageSrc: string,
  site: URL | string | undefined
): string {
  if (!site) {
    // If site is undefined, return the imageSrc as is (assuming it's a full URL or acceptable relative path)
    return imageSrc;
  }

  // If site is a string, convert it to a URL
  const siteUrl = typeof site === "string" ? new URL(site) : site;

  try {
    return new URL(imageSrc, siteUrl).toString();
  } catch (error) {
    console.error(`Error creating full image URL: ${error}`);
    return imageSrc; // Return the original imageSrc if URL creation fails
  }
}
