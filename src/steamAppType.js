import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLFloat,
} from "graphql";

const requirementsType = new GraphQLObjectType({
  name: "HardwareRequirements",
  fields: {
    minimum: { type: GraphQLString },
    recommended: { type: GraphQLString },
  },
});

const demosType = new GraphQLObjectType({
  name: "Demos",
  fields: {
    appid: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});

const subsType = new GraphQLObjectType({
  name: "Subs",
  fields: {
    packageid: { type: GraphQLInt },
    percent_savings_text: { type: GraphQLString },
    percent_savings: { type: GraphQLInt },
    option_text: { type: GraphQLString },
    option_description: { type: GraphQLString },
    can_get_free_license: { type: GraphQLString },
    is_free_license: { type: GraphQLBoolean },
    price_in_cents_with_discount: { type: GraphQLInt },
  },
});

const packageGroupType = new GraphQLObjectType({
  name: "PackageGroupType",
  fields: {
    name: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    selection_text: { type: GraphQLString },
    save_text: { type: GraphQLString },
    display_type: { type: GraphQLInt },
    is_recurring_subscription: { type: GraphQLBoolean },
    subs: { type: GraphQLList(subsType) },
  },
});

const gamePriceDocumentType = new GraphQLObjectType({
  name: "GamePriceDocument",
  fields: {
    currency: { type: GraphQLString },
    initial: { type: GraphQLFloat },
    final: { type: GraphQLFloat },
    discount_percent: { type: GraphQLFloat },
    initial_formatted: { type: GraphQLString },
    final_formatted: { type: GraphQLString },
  },
});

const platformAvailabilityType = new GraphQLObjectType({
  name: "PlatformAvailability",
  fields: {
    windows: { type: GraphQLBoolean },
    mac: { type: GraphQLBoolean },
    linux: { type: GraphQLBoolean },
  },
});

const metacriticType = new GraphQLObjectType({
  name: "Metacritic",
  fields: {
    score: { type: GraphQLFloat },
    url: { type: GraphQLString },
  },
});

const categoryType = new GraphQLObjectType({
  name: "Categories",
  fields: {
    id: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

const genreType = new GraphQLObjectType({
  name: "Genre",
  fields: {
    id: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

const screenshotType = new GraphQLObjectType({
  name: "Screenshot",
  fields: {
    id: { type: GraphQLString },
    path_thumbnail: { type: GraphQLString },
    path_full: { type: GraphQLString },
  },
});

const codecType = new GraphQLObjectType({
  name: "Webm",
  fields: {
    low_res: { type: GraphQLString, resolve: (parent) => parent["480"] },
    max: { type: GraphQLString },
  },
});

const movieType = new GraphQLObjectType({
  name: "Movie",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    thumbnail: { type: GraphQLString },
    webm: { type: codecType },
    mp4: { type: codecType },
    highlight: { type: GraphQLBoolean },
  },
});

const recommendationType = new GraphQLObjectType({
  name: "Recommendation",
  fields: {
    total: { type: GraphQLFloat },
  },
});

const higlightedAchievementType = new GraphQLObjectType({
  name: "HightlightedAchievement",
  fields: {
    name: { type: GraphQLString },
    path: { type: GraphQLString },
  },
});

const achievementsType = new GraphQLObjectType({
  name: "Achievements",
  fields: {
    total: { type: GraphQLInt },
    highlighted: { type: GraphQLList(higlightedAchievementType) },
  },
});

const releaseDateType = new GraphQLObjectType({
  name: "ReleaseDate",
  fields: {
    coming_soon: { type: GraphQLBoolean },
    date: { type: GraphQLString },
  },
});

export const steamAppType = new GraphQLObjectType({
  name: "SteamApp",
  description: "Game/app from steam",
  fields: {
    steam_appid: { type: GraphQLInt },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    required_age: { type: GraphQLInt },
    controller_support: { type: GraphQLString },
    dlc: { type: GraphQLList(GraphQLInt) },
    is_free: { type: GraphQLBoolean },
    detailed_description: { type: GraphQLString },
    about_the_game: { type: GraphQLString },
    short_description: { type: GraphQLString },
    supported_languages: { type: GraphQLString },
    header_image: { type: GraphQLString },
    website: { type: GraphQLString },
    pc_requirements: { type: GraphQLList(requirementsType) },
    mac_requirements: { type: GraphQLList(requirementsType) },
    linux_requirements: { type: GraphQLList(requirementsType) },
    legal_notice: { type: GraphQLString },
    developers: { type: GraphQLList(GraphQLString) },
    publishers: { type: GraphQLList(GraphQLString) },
    demos: { type: GraphQLList(demosType) },
    price_overview: { type: gamePriceDocumentType },
    packages: { type: GraphQLList(GraphQLInt) },
    package_groups: { type: GraphQLList(packageGroupType) },
    platforms: { type: platformAvailabilityType },
    metacritic: { type: metacriticType },
    categories: { type: GraphQLList(categoryType) },
    genres: { type: GraphQLList(genreType) },
    screenshots: { type: GraphQLList(screenshotType) },
    movies: { type: GraphQLList(movieType) },
    recommendation: { type: recommendationType },
    achievements: { type: achievementsType },
    release_date: { type: releaseDateType },
  },
});
