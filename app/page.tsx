import { Desktop } from "@/components/desktop";
import { PageWithThemeMode } from "@/components/page-with-theme-mode";
import { Raycast } from "@/components/raycast";
import { RedirectToRaycast } from "@/components/redirect-to-raycast";
import { Theme, getAllThemes, makeThemeObjectFromParams } from "@/lib/theme";
import { BASE_URL } from "@/lib/url";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const themeInUrl = makeThemeObjectFromParams(searchParams);

  if (!themeInUrl) {
    return {
      title: "Raycast Themes",
      openGraph: {
        title: "Raycast Themes",
        images: [
          {
            url: `${BASE_URL}/default-og-image.png`,
          },
        ],
      },
    };
  }

  const { colors, ...theme } = themeInUrl;

  const queryParams = new URLSearchParams();
  Object.entries(theme).forEach(([key, value]) => queryParams.set(key, value));
  Object.entries(colors).forEach(([key, value]) => queryParams.set(key, value));

  const title = `${theme.name} by ${theme.author}`;
  const image = `${BASE_URL}/og?${queryParams}`;

  return {
    title,
    openGraph: {
      title,
      images: [
        {
          url: image,
        },
      ],
    },
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const themes = await getAllThemes();
  const defaultTheme = themes.filter((theme) => theme.appearance === "dark")[0];

  let themeInUrl: Theme | undefined = undefined;
  let shouldOpenInRaycast: boolean = false;

  if (searchParams) {
    themeInUrl = makeThemeObjectFromParams(searchParams);
    shouldOpenInRaycast = "addToRaycast" in searchParams;
  }

  return (
    <PageWithThemeMode theme={themeInUrl || defaultTheme}>
      <Desktop>
        <Raycast />
      </Desktop>
      {shouldOpenInRaycast && themeInUrl && (
        <RedirectToRaycast theme={themeInUrl} />
      )}
    </PageWithThemeMode>
  );
}
