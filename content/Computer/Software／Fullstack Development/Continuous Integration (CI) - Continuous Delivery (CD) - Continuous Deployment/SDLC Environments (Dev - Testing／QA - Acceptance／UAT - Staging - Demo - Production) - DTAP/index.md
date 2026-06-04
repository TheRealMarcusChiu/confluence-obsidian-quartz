---
title: "SDLC Environments (Dev - Testing／QA - Acceptance／UAT - Staging - Demo - Production) - DTAP"
created: 2020-11-24T21:39:51.419-06:00
modified: 2026-05-21T13:39:07.383-05:00
parent: "[[Continuous Integration (CI) - Continuous Delivery (CD) - Continuous Deployment]]"
children: []
---
###### Software Development LifeCycle (SDLC)
````excerpt
- is a process used by the software industry to design, develop and test high quality softwares
- DTAP (Development, Testing, Acceptance, and Production) outlines an approach to testing and deploying software as part of the SDLC
````
^excerpt

# Environment/Server Type

> [!expand-ui]- Developement
> When work starts, most developers and programmers will have development environments set up for the work. This is where they can build and verify the work they are doing. Developers and programmers use the development server to test code directly. This server is usually set up with the needed hardware, software and other necessary parts for debugging and deploying.

> [!expand-ui]- Testing/QA
> Once the developers or programmers complete the work they will deploy that finished work to a test server. A test server’s set up and configurations will be for internal use by the team with necessary configurations. This allows the team to access the work for verification. The internal team completes the testing phase, usually with the use of a QA Tester. The tester will run various use cases to ensure that the product is functioning as it should. If the tester discovers bugs or other issues, they will create tasks for the developers or programmers to fix.

> [!expand-ui]- User Acceptance Testing (UAT)
> When work passes through the internal testing phase and is ready for approvals, the team deploys it to a UAT server. Once in the server the work will get final client approvals before flipping the switch. The fundamental difference between a UAT and Test server is that UAT is configured to run as a production build. But the database is separate where it usually doesn’t include caching and other configurations to handle scale.
>
> This server will be set up in an environment that the client will be using. By doing this, a client will be able to access the product on this server. Along with being able to use it and see a real-time view of what the product will look like. It will function similar to how it would if it were in production. The client will be able to check that the features they requested are working according to their original thoughts. If the client does not like their original thought on a feature in UAT, they determine whether they want to launch as-is or change the way something is working. This can speed up approvals and limit problems that may occur after going live.

> [!expand-ui]- Staging
> Staging is for pre-deployment. It’s like a dress rehearsal. A staging server’s set up is like production with all production configurations and the team uses it to perform smoke testing. This ensures the code and everything works in a production configuration and architecture. It’s the last step before production. Once the UI developer, backend developer, DevOps, and database administration check everything and it’s an all-go from each, they push the code to production.

> [!expand-ui]- Demo
> Demo servers are not as common as the other servers, but in certain situations, there may be a request from a client to set up a demo server. A demo server is essentially a frozen version of a production server that is usually a few deployments behind the production. When you complete final work and the client approves it, it may be deployed to a demo server. The use of this server is primarily for showcasing the product to key stakeholders and potential or existing customers. A sales and marketing team will usually use this server to promote the product and allow prospects and leads to interact with the product.

> [!expand-ui]- Production
> Production servers are the final location for all finished and approved work. When you deploy code to a production server, this means everyone has approved it to go live. At this stage, the work is considered complete and approved for widespread use. Working code should only be deployed to a production server after it has been tested and approved for going live. Work should never be done on a production server without the use of some type of version control as this will be a high risk for things breaking while the product is in use. In certain situations, when a product goes offline or a production server goes down, it can cost a company a lot of money and this is definitely not something anyone wants to occur.
>
> As you can see the servers used in deploying and testing code as part of the SDLC all have different purposes and pass through certain steps. However, the end result is always to get a product live in production with as little defects as possible to ensure a fully functioning user interface and positive user experience.
>
> Now, when it comes to Agile this type of approach tends to be contradictory to the flexibility Agile offers since this approach of switching from server to server is more like the waterfall method and can have long wait times. To make these work and still be Agile, you can modify the approach based on needs, along with the use of version control via tools such as GitHub and server deployment tools like Jenkins.
