const profile = {
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ],
        },
        {
            name: "logo",
            title: "Logo",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ],
        },
        {
            name: "summary",
            title: "Summary",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "contact",
            title: "Contact",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string"
                        },
                        {
                            name: "source",
                            title: "Source",
                            type: "string"
                        },
                    ]
                }
            ],
        }
    ]
}

export default profile;
