import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@7.3.0'
 *
 * Metadata
 * Id: c427aa24-df50-545b-8f7e-587f9d3acc59
 * Codename: metadata
 */
export type Metadata = IContentItem<{
    /**
     * Meta description (text)
     * Required: true
     * Id: be0e37e3-7e6c-5704-b7e8-1898a539cdd0
     * Codename: metadata__meta_description
     */
    metadataMetaDescription: Elements.TextElement;

    /**
     * Meta keywords (text)
     * Required: false
     * Id: 247fc5d9-1ef8-5faa-8983-c3c59ee51202
     * Codename: metadata__meta_keywords
     */
    metadataMetaKeywords: Elements.TextElement;

    /**
     * Meta title (text)
     * Required: true
     * Id: f82be36b-fbf6-5bd6-a83b-3010a4e0725e
     * Codename: metadata__meta_title
     */
    metadataMetaTitle: Elements.TextElement;

    /**
     * Include in Robots.txt (multiple_choice)
     * Required: false
     * Id: 9984d1f1-2f24-5bf9-b17a-684151058e59
     * Codename: metadata__robots
     */
    metadataRobots: Elements.MultipleChoiceElement;
}>;
