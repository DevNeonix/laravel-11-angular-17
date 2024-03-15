const path = require('path');

module.exports = {
    plugins: ["import", "unused-imports"],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
        'import/resolver': {
			typescript: {
			  project: [
                "tsconfig.base.json", 
                "code/apps/frontend/tsconfig.json",
                "code/libs/frontend/common/utils/tsconfig.json",
                "code/libs/frontend/common/duttidata/tsconfig.json",
            ]
			},
			node: {
				project: [
                    "tsconfig.base.json",
                    "code/apps/frontend/tsconfig.json",
                    "code/libs/frontend/common/utils/tsconfig.json",
                    "code/libs/frontend/common/duttidata/tsconfig.json",
                ]
			}  
		}
    },
    rules: {
        "unused-imports/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "import/no-unresolved": "error",
        "import/named": "error",
        "import/default": "off",
        "import/namespace": "error",
        "import/no-restricted-paths": "off",
        "import/no-absolute-path": "error",
        "import/no-dynamic-require": "error",
        "import/no-internal-modules": "off",
        "import/no-webpack-loader-syntax": "error",
        "import/no-self-import": "error",
        "import/no-cycle": "off",
        "import/no-useless-path-segments": "error",
        "import/no-relative-parent-imports": "off",
        "import/no-relative-packages": "error",
        "import/export": "error",
        "import/no-named-as-default": "error",
        "import/no-named-as-default-member": "error",
        "import/no-extraneous-dependencies": [
            "error",
            {"packageDir": path.join(__dirname, '../..')}
        ],
        "import/no-mutable-exports": "error",
        "import/no-unused-modules": "error",
        "import/unambiguous": "error",
        "import/no-commonjs": "error",
        "import/no-amd": "error",
        "import/no-nodejs-modules": "error",
        "import/no-import-module-exports": "error",
        "import/first": "error",
        "import/exports-last": "error",
        "import/no-duplicates": "error",
        "import/extensions": [
            "error",
            "never",
            {
                json: "always",
            },
        ],
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "import/newline-after-import": "error",
        "import/prefer-default-export": "off",
        "import/max-dependencies": "off",
        "import/no-unassigned-import": "error",
        "import/no-named-default": "off",
        "import/no-default-export": "off",
        "import/no-named-export": "off",
        "import/no-anonymous-default-export": "error",
        "import/group-exports": "off",
        "import/dynamic-import-chunkname": "off",
    },
};
