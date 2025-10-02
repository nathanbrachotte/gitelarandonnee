import { WEBSITE_ADDRESS } from "./data";

type ImplicitPathParams =
  | {
      withBaseUrl: true;
    }
  | {
      withBaseUrl: true;
      baseUrl?: string;
    }
  | {
      withBaseUrl?: false;
      baseUrl?: never;
    };

type RouteParams<
  AdditionalRouteParams = ImplicitPathParams,
  QueryParams = never,
> = AdditionalRouteParams &
  ImplicitPathParams & {
    queryParams?: QueryParams;
  };

type OptionalFields = {
  icon?: string;
};

type SharedFields = {
  subRoutes?: Record<string, Routes>;
};

type PathParams =
  | ImplicitPathParams
  | (ImplicitPathParams & Record<string, string>);

/**
 * To be a valid route key, it must have a path, getPath or subRoutes property
 */
type Routes = OptionalFields &
  SharedFields &
  (
    | {
        // When the URL is dynamic
        getPath: (props: RouteParams<any, any>) => string;
      }
    | {
        // When route only has subroutes and getPath is potentially specified
        getPath?: (props: RouteParams<any, any>) => string;
        subRoutes: Record<string, Routes>;
      }
  );

/**
 * Isomorphic method to get the origin of the site on
 * either client and server side
 */
export const getOrigin = (): string => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return import.meta.env.SITE;
};

/**
 * Abstracts away the logic of generating the url for all routes
 * and applying all the shared props (`locale`, `baseUrl`, `withBaseUrl` and `queryParams`)
 */
const generateUrl = <
  T extends PathParams = ImplicitPathParams,
  Q extends Record<string, string> | never = never,
>(
  path: string,
  props?: RouteParams<T, Q>,
): string => {
  const baseUrl =
    props != null && "baseUrl" in props ? props.baseUrl : WEBSITE_ADDRESS;
  const locale =
    props != null && "locale" in props && props.locale != null
      ? props.locale
      : "none";

  const { withBaseUrl, queryParams } = props ?? {};

  const isDifferentOrigin = withBaseUrl === true && baseUrl !== WEBSITE_ADDRESS;

  const origin = withBaseUrl === true ? baseUrl : "";
  const isLocaleExpected = locale !== "none";

  const shouldAddLocaleToUrl = isLocaleExpected && !isDifferentOrigin;
  const finalLocale = shouldAddLocaleToUrl ? `/${locale}` : "";

  const finalPath =
    getAbsoluteUrl({ origin, url: `${finalLocale}${path}` }) +
    generateQueryParams(queryParams);

  return finalPath;
};

/**
 * Source of truth for all the routes consumed in the app.
 * Each route much have a path, getPath or subRoutes property.
 * Note: `locale`, `baseUrl` and `withBaseUrl` are always added to
 * the props as optional fields, so no need to specify them.
 * If only `withBaseUrl` is specified, the `baseUrl` will be added and be the PROD_URL by default.
 * If you want to override the baseUrl, you can specify it in the props.
 */
export const ROUTES = {
  // LAR = La Randonnée
  LAR_ACCUEIL: {
    getPath: (props: RouteParams) => {
      return generateUrl("/", props);
    },
  },
  // LAH = Là-Haut
  LAH_ACCUEIL: {
    getPath: (props: RouteParams) => {
      return generateUrl("/la-haut/", props);
    },
  },
  LAR_DISPO_TARIFS: {
    getPath: (props: RouteParams) => {
      return generateUrl("/disponibilites", props);
    },
  },
  LAH_DISPO_TARIFS: {
    getPath: (props: RouteParams) => {
      return generateUrl("/la-haut/disponibilites", props);
    },
  },
  LAR_PLAN_DU_GITE: {
    getPath: (props: RouteParams) => {
      return generateUrl("/plan-du-gite", props);
    },
  },
  LAH_PLAN_DU_GITE: {
    getPath: (props: RouteParams) => {
      return generateUrl("/la-haut/plan-du-gite", props);
    },
  },
  LAR_ACTIVITES: {
    getPath: (props: RouteParams) => {
      return generateUrl("/decouvrir-la-region", props);
    },
  },
  LAH_ACTIVITES: {
    getPath: (props: RouteParams) => {
      return generateUrl("/la-haut/decouvrir-la-region", props);
    },
  },
  CGL: {
    getPath: (props: RouteParams) => {
      return generateUrl("/condition-generale-location", props);
    },
  },
  MENTIONS_LEGALES: {
    getPath: (props: RouteParams) => {
      return generateUrl("/mentions-legales", props);
    },
  },
} as const satisfies Record<string, Routes>;

/**
 * Encodes the param to be used in the path and replaces camelCase with snake_case (it's simpler to use camelCase in routes)
 * e.g.: userId -> user_id
 */
const encodeParam = (param: string) => {
  return encodeURIComponent(
    param.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase(),
  );
};

/**
 * Put this at the end of any generated path that potentially contains queryParams and it will generate the encoded string
 */
export const generateQueryParams = (
  queryParams: Record<string, string> | undefined,
) => {
  if (queryParams == null || Object.keys(queryParams).length === 0) {
    return "";
  }

  const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${encodeParam(key)}=${encodeURIComponent(value)}`)
    .join("&");

  return `?${queryString}`;
};

/**
 * Add absolute URL to a relative URL, useful for images with a different origin for example
 * @param origin The origin  - defaults to SITE on server and window.location.origin on client if not provided
 * @param src The relative URL
 *
 * @returns The absolute URL
 */
export const getAbsoluteUrl = ({
  origin = WEBSITE_ADDRESS,
  url,
}: {
  origin?: string;
  url: string;
}) => {
  if (origin === "") {
    return url;
  }

  if (url === "") {
    return origin;
  }

  if (url.startsWith("/")) {
    return `${origin}${url}`;
  }

  return url;
};

export type RentalType = "la-randonnee" | "la-haut";

export function getHomePagePath(currentPath: string) {
  // If path is undefined or empty, default to la-randonnee
  if (!currentPath) {
    return ROUTES.LAR_ACCUEIL.getPath({});
  }

  // Check if current path includes la-haut
  const isLaHaut = currentPath.includes("la-haut");
  return isLaHaut
    ? ROUTES.LAH_ACCUEIL.getPath({})
    : ROUTES.LAR_ACCUEIL.getPath({});
}

export function getDispoTarifsPath(currentPath: string) {
  const isLaHaut = currentPath.includes("la-haut");
  return isLaHaut
    ? ROUTES.LAH_DISPO_TARIFS.getPath({})
    : ROUTES.LAR_DISPO_TARIFS.getPath({});
}

export function getPlanDuGitePath(currentPath: string) {
  const isLaHaut = currentPath.includes("la-haut");
  return isLaHaut
    ? ROUTES.LAH_PLAN_DU_GITE.getPath({})
    : ROUTES.LAR_PLAN_DU_GITE.getPath({});
}

export function getDecouvrirLaRegionPath(currentPath: string) {
  const isLaHaut = currentPath.includes("la-haut");
  return isLaHaut
    ? ROUTES.LAH_ACTIVITES.getPath({})
    : ROUTES.LAR_ACTIVITES.getPath({});
}
