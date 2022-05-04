const { loadEnvConfig } = require("@next/env");

const projectDir = process.cwd();
loadEnvConfig(projectDir);

module.exports = {
  overwrite: true,
  schema: "localhost:3002",
  documents: "src/graphql/**/*.graphql",
  config: {
    scalars: {
      DateTime: "Date",
      Upload: "File",
    },
  },
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "named-operations-object",
      ],
      config: {
        identifierName: "namedOperations",
      },
    },
  },
};
