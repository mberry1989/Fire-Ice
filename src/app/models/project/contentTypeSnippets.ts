/**
 * Generated by '@kontent-ai/model-generator@7.3.0'
 */
export const contentTypeSnippets = {
    /**
     * Metadata
     */
    metadata: {
        codename: 'metadata',
        id: 'c427aa24-df50-545b-8f7e-587f9d3acc59',
        externalId: 'e596462b-7d30-42a6-819f-830f95afeded',
        name: 'Metadata',
        elements: {
            /**
             * Meta title (text)
             */
            metadata__meta_title: {
                codename: 'metadata__meta_title',
                id: 'f82be36b-fbf6-5bd6-a83b-3010a4e0725e',
                externalId: '8acfdfe4-faa9-4e99-b6c6-552459a7ab50',
                name: 'Meta title',
                required: true,
                type: 'text'
            },

            /**
             * Meta description (text)
             */
            metadata__meta_description: {
                codename: 'metadata__meta_description',
                id: 'be0e37e3-7e6c-5704-b7e8-1898a539cdd0',
                externalId: '889bc592-f442-4e84-a66c-43a09b00fb9c',
                name: 'Meta description',
                required: true,
                type: 'text'
            },

            /**
             * Meta keywords (text)
             */
            metadata__meta_keywords: {
                codename: 'metadata__meta_keywords',
                id: '247fc5d9-1ef8-5faa-8983-c3c59ee51202',
                externalId: '314b6cbe-f42f-4de9-97f1-d7310b9c5605',
                name: 'Meta keywords',
                required: false,
                type: 'text'
            },

            /**
             * Include in Robots txt (multiple_choice)
             */
            metadata__robots: {
                codename: 'metadata__robots',
                id: '9984d1f1-2f24-5bf9-b17a-684151058e59',
                externalId: 'f313b101-3238-41c2-b1ea-93a2a027fb38',
                name: 'Include in Robots.txt',
                required: false,
                type: 'multiple_choice'
            }
        }
    }
} as const;
