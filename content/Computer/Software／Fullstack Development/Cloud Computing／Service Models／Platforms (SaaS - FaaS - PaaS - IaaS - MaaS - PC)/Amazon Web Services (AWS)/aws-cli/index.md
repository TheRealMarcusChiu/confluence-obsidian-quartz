---
title: "aws-cli"
created: 2019-03-16T00:04:25.902-05:00
modified: 2019-03-16T00:05:57.810-05:00
parent: "[[Amazon Web Services (AWS)]]"
children: []
---
The AWS CLI is an open source tool built on top of the AWS SDK for Python (Boto) that provides commands for interacting with AWS services. With minimal configuration, you can start using all of the functionality provided by the AWS Management Console from your favorite terminal program.
# Installation

> [!expand]- homebrew
> <strong>1. install aws cli via brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install awscli</code></span>
>
> <strong>2. verify aws cli was installed</strong>
> <span style="white-space: pre-wrap"><code>  aws —-version</code></span>
# Configure Credentials

> [!expand]- Click here to expand...
> <strong>0. install aws-cli and obtain the Access Key and Secret Key</strong>
>
> <strong>1. configure aws credentials on your local machine</strong>
> <span style="white-space: pre-wrap"><code>  aws configure</code><br><code>  aws configure --profile PROFILE\_NAME</code></span>
>
> to select the profile to configure
> <span style="white-space: pre-wrap"><code>  aws configure --profile PROFILE\_NAME</code></span>
>
> <strong>2. input the information</strong>
>
> <strong>3. this would create/update files</strong>
> <span style="white-space: pre-wrap"><code>  \~/.aws/credential</code><br><code>  \~/.aws/config</code></span>
