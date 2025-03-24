In this repository, we are generating the pages statically using Next.js's PPR (Partial Page Rendering). To maintain the Builder preview functionality, we are creating a preview route. This is where the real-time changes made by the user will be visible. For this to work, the webhook must be configured in Builder, and the page model must also be configured to redirect to /preview/[any_url].
