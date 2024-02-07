# Deployment Strategy: https://sharathvignesh.medium.com/ci-cd-deploy-react-app-to-aws-s3-using-github-actions-3f6d77783190
# select dev vs prod .env files when oushing branches

#SETUP
  1) Copy .env.template to .env and replace the dummy values with your own (Use S5P Backend to create these varialbes or use S5P Backend as reference to create your own necessary services).
  2) Copy
  3) (Optional) For AWS access key and secret, it would be wise to create IAM user/credentials with the following limited permissions (replace ```domain_name``` with your domain name):
    ```{
      "Version": "2012-10-17",
      "Statement": [
          {
			"Sid": "AccessToGetBucketLocation",
			"Effect": "Allow",
			"Action": [
				"s3:GetBucketLocation"
			],
			"Resource": [
				"arn:aws:s3:::*"
			]
		},
		{
			"Sid": "AccessToWebsiteBuckets",
			"Effect": "Allow",
			"Action": [
				"s3:PutBucketWebsite",
				"s3:PutObject",
				"s3:PutObjectAcl",
				"s3:GetObject",
				"s3:ListBucket",
				"s3:DeleteObject"
			],
			"Resource": [
				"arn:aws:s3:::dev.domain_name.com",
				"arn:aws:s3:::dev.domain_name.com/*"
        		"arn:aws:s3:::green.domain_name.com",
				"arn:aws:s3:::green.domain_name.com/*"
        		"arn:aws:s3:::blue.domain_name.com",
				"arn:aws:s3:::blue.domain_name.com/*"
			]
		}
      ]
    }```
  4) Create Github secrets for the following Workflow variables:
      
      ENV_FILE_DEV
      ENV_FILE_GREEN
      ENV_FILE_BLUE
        
      Eache of these secrets need to contain all of the variables and values found in the .env.template file. Be sure to replace the specific stack's values as needed for each branch
  5) Add these individual secrets used in the workflow templates:

      AWS_BUCKET_NAME_DEV
      AWS_BUCKET_NAME_GREEN
      AWS_BUCKET_NAME_BLUE
      AWS_ACCESS_KEY_ID
      AWS_SECRET_ACCESS_KEY
      AWS_REGION
      
  6) Push your branch

#TODO
1) Design
2) Refine code base


# Mantis Free React Material UI Dashboard Template [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Download%20Mantis%20React%20-%20The%20professional%20Material%20designed%20React%20Admin%20Dashboard%20Template%20&url=https://mantisdashboard.io&via=codedthemes&hashtags=reactjs,webdev,developers,javascript)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Price](https://img.shields.io/badge/price-FREE-0098f7.svg)](https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/LICENSE)
[![GitHub package version](https://img.shields.io/github/package-json/v/codedthemes/mantis-free-react-admin-template)](https://github.com/codedthemes/mantis-free-react-admin-template/)

Mantis is a free and open source React redux dashboard template made using the Material UI React component library with aim of flexibility and better customizability.

### Name Derived From Nature

Mantis Logo is inspired from the insect name - 'Mantises' as they have triangular heads with flexible Necks. Also, the name is derived from two popular UI frameworks, Material UI and Ant Design (M-Ant-is).

Mantis has Ant Design principal on top of the MAterial UI React component library.

:star: :star: :star: Support us by giving star (Top right of this page) if you like the theme :star: :star: :star:

![mantis-free-react-dashboard-template.jpg](https://mantisdashboard.io/adv-banner-images/og-social-v1.1.0.png)

The [Pro version](https://mantisdashboard.io) of Mantis react template includes features such as TypeScript, apps, authentication methods (i.e. JWT, Auth0, Firebase), advance components, form plugins, layouts, widgets, and more.

| [Mantis Free](https://mantisdashboard.io/free) | [Mantis Pro](https://mantisdashboard.io)                                         |
| ---------------------------------------------- | :------------------------------------------------------------------------------- |
| **7** Demo pages                               | **85+** Demo pages                                                               |
| -                                              | ✓ Multi-language                                                                 |
| -                                              | ✓ Dark/Light Mode 🌓                                                             |
| -                                              | ✓ TypeScript version                                                             |
| -                                              | ✓ Design files (Figma)                                                           |
| -                                              | ✓ Multiple color options                                                         |
| -                                              | ✓ RTL                                                                            |
| -                                              | ✓ JWT, Firebase, Auth0, AWS authentication                                       |
| -                                              | ✓ [More components](https://mantisdashboard.io/components-overview/autocomplete) |
| ✓ MIT License                                  | ✓ [Pro License](https://mui.com/store/license/)                                  |

## Why Mantis?

Mantis offers everything needed to build an advanced dashboard application. In the initial release, we included following high-end features,

-   Support React18.
-   Professional user interface.
-   Material UI React components.
-   Fully responsive, all modern browser supported.
-   Easy to use code structure
-   Flexible & high-Performance code
-   Simple documentation

## Free Mantis React version

#### Preview

-   [Demo](https://mantisdashboard.io/free)

#### Download

-   [Download from GitHub](https://github.com/codedthemes/mantis-free-react-admin-template)

## Mantis Pro version

#### Preview

-   [Demo](https://mantisdashboard.io)

#### Purchase

-   [Buy now](https://mui.com/store/items/mantis-react-admin-dashboard-template/)

## Table of contents

-   [Getting started](#getting-started)
-   [Documentation](#documentation)
-   [Technology stack](#technology-stack)
-   [Author](#author)
-   [Issues?](#issues)
-   [License](#license)
-   [More products](#more-free-react-material-admin-templates)
-   [Follow us](#follow-us)

## Getting started

Clone from GitHub

```
git clone https://github.com/codedthemes/mantis-free-react-admin-template.git
yarn
yarn start
```

## Documentation

[Mantis documentation](https://codedthemes.gitbook.io/mantis/) helps you out in all aspects from Installation to deployment.

## Technology stack

-   [Material UI V5](https://mui.com/core/)
-   Built with React Hooks API.
-   Redux & React context API for state management.
-   Redux toolkit.
-   React Router for navigation routing.
-   Support for react-script.
-   Code splitting.
-   CSS-in-JS.

## Author

Mantis is managed by team [CodedThemes](https://codedthemes.com).

## Issues

Please generate a [GitHub issue](https://github.com/codedthemes/mantis-free-react-admin-template/issues) if you found a bug in any version. We are try our best to resolve the issue.

## License

-   Licensed under [MIT](https://github.com/codedthemes/datta-able-bootstrap-dashboard/blob/master/LICENSE)

## Checkout free React Material admin dashboard templates

-   [Free Materially](https://codedthemes.com/item/materially-free-reactjs-admin-template/)
-   [Free Berry](https://mui.com/store/items/berry-react-material-admin-free/)

## Checkout premium React Material admin dashboard templates

-   [Materially](https://codedthemes.com/item/materially-reactjs-admin-dashboard/)
-   [Berry](https://mui.com/store/items/berry-react-material-admin/)

## Follow us

-   Website [https://mantisdashboard.io](https://mantisdashboard.io)
-   Blog [https://blog.mantisdashboard.io](https://blog.mantisdashboard.io)
-   CodedThemes [https://codedthemes.com](https://codedthemes.com)
-   Dribbble [https://dribbble.com/codedthemes](https://dribbble.com/codedthemes)
-   Facebook [https://www.facebook.com/codedthemes](https://www.facebook.com/codedthemes)
-   Twitter [https://twitter.com/codedthemes](https://twitter.com/codedthemes)


Check versions in package.json
❯ ◉ @aws-amplify/ui-react  ^4.3.3  →  ^4.6.0
  ◉ aws-amplify            ^5.0.9  →  ^5.1.4

